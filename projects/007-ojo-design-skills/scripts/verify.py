"""Verify the research archive, coverage, evidence anchors, and published copies."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import hashlib
import json
import re
import xml.etree.ElementTree as ET
import struct

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT.parents[1] / 'site' / ROOT.name
manifest = json.loads((ROOT / 'sources-manifest.json').read_text(encoding='utf-8'))
data = json.loads((ROOT / 'data.json').read_text(encoding='utf-8'))
checks = []

def check(condition, message):
    if not condition:
        raise AssertionError(message)
    checks.append(message)

for entry in manifest['files']:
    raw = (ROOT / 'sources' / entry['path']).read_bytes()
    check(hashlib.sha256(raw).hexdigest() == entry['sha256'], '来源 SHA-256 一致：'+entry['path'])
    git_hash = hashlib.sha1(b'blob '+str(len(raw)).encode()+b'\0'+raw).hexdigest()
    check(git_hash == entry['git_blob'], 'Git blob 一致：'+entry['path'])

skill_paths = {x['path'] for x in manifest['tree'] if x['path'].startswith('skills/') and x['path'].endswith('/SKILL.md')}
reference_paths = {x['path'] for x in manifest['tree'] if '/references/' in x['path'] and x['type']=='blob'}
check(len(skill_paths) == 1 and len(reference_paths) == 9, '固定文件树：1 个 Skill、9 个参考模块')
analyzed = {'skills/app-ui-ux-best-practices/' + m['file'] for m in data['modules']}
check(analyzed == skill_paths | reference_paths, '逐项分析覆盖全部技能与参考文件，无遗漏或虚增')
check(len({m['id'] for m in data['modules']}) == 10, '10 个模块标识唯一')
check(len(data['scenarios']) == 6, '6 个场景均已编写')
for m in data['modules']:
    check(all(m.get(field) for field in ['capabilities','scenes','inputs','outputs','example','effect','boundary']), '分析字段完整：'+m['name'])
for scenario in data['scenarios']:
    check(all(mid in {m['id'] for m in data['modules']} for mid in scenario['modules']), '场景模块映射有效：'+scenario['title'])

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = []
        self.urls = []
        self.modules = 0
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        if 'module-panel' in attrs.get('class','').split():
            self.modules += 1
        for key in ['href','src']:
            if attrs.get(key):
                self.urls.append(attrs[key])

page = Page()
page.feed((ROOT/'web/index.html').read_text(encoding='utf-8'))
check(len(page.ids) == len(set(page.ids)), 'HTML 锚点唯一')
check(page.modules == 10, 'HTML 保留全部 10 项说明，支持无脚本阅读')
for url in page.urls:
    parts = urlsplit(url)
    if not parts.scheme and not parts.netloc:
        if parts.path:
            check((ROOT/'web'/unquote(parts.path)).exists(), '页面本地资源存在：'+url)
        if parts.fragment and not parts.path:
            check(parts.fragment in page.ids, '页内跳转有效：'+url)
    elif parts.netloc == 'github.com' and '/blob/' in parts.path:
        prefix = f"/{manifest['repository']}/blob/{manifest['commit']}/"
        check(parts.path.startswith(prefix), '证据链接使用固定提交')
        path = unquote(parts.path[len(prefix):])
        check((ROOT/'sources'/path).exists(), '证据文件已留档：'+path)
        if parts.fragment.startswith('L'):
            line = int(parts.fragment[1:])
            check(0 < line <= len((ROOT/'sources'/path).read_text(encoding='utf-8').splitlines()), '证据行号有效：'+path)

for name in ['README.md','CAPABILITIES.md','RESEARCH.md','SCENARIOS.md','SOURCES.md','GUIDE.md','SUMMARY.md']:
    for target in re.findall(r'\]\(([^)]+)\)', (ROOT/name).read_text(encoding='utf-8')):
        parsed = urlsplit(target)
        if not parsed.scheme and parsed.path:
            check((ROOT/unquote(parsed.path)).exists(), name+' 本地链接存在：'+target)

for name in ['index.html','styles.css','app.js','map.html','map.css','map.js','capability-summary.png','capability-summary.svg']:
    check((ROOT/'web'/name).read_bytes() == (SITE/name).read_bytes(), '发布副本同步：'+name)

viewer=Page()
viewer.feed((ROOT/'web/map.html').read_text(encoding='utf-8'))
check(len(viewer.ids)==len(set(viewer.ids)), '大图页面锚点唯一')
for url in viewer.urls:
    parts=urlsplit(url)
    if not parts.scheme and parts.path:
        target=ROOT/'web'/parts.path
        check(target.exists(), '大图链接与资源存在：'+url)
        if parts.fragment:
            target_page=Page()
            target_page.feed(target.read_text(encoding='utf-8'))
            check(parts.fragment in target_page.ids, '大图返回锚点有效：'+url)

svg=ET.parse(ROOT/'assets/capability-summary.svg')
svg_text=''.join(svg.getroot().itertext())
for module in data['modules']:
    check(module['name'] in svg_text, '总览图包含真实模块：'+module['name'])
for label in ['产品开发中的位置','服务方向与典型场景','如何使用','意义','采用边界']:
    check(label in svg_text, '总览图覆盖问题：'+label)
png=(ROOT/'assets/capability-summary.png').read_bytes()
check(png[:8]==b'\x89PNG\r\n\x1a\n', '摘要图为 PNG 文件')
check(struct.unpack('>II',png[16:24])==(int(svg.getroot().attrib['width']),int(svg.getroot().attrib['height'])), 'PNG 与 SVG 画布尺寸一致')
for name in ['capability-summary.png','capability-summary.svg']:
    check((ROOT/'assets'/name).read_bytes()==(ROOT/'web'/name).read_bytes(), '总览图资产与展示副本同步：'+name)
for section in ['brief','scope','summary','usage','personal','value']:
    check(section in page.ids, '新理解已纳入页面：'+section)
html=(ROOT/'web/index.html').read_text(encoding='utf-8')
check(html.count('<tr><th scope="row">')==10, '摘要表覆盖 1 个 Skill 与 9 个参考模块')
check(html.count('scenario personal-card')==5, '五个个人采用场景完整')

summary = {'date':'2026-09-29','passed':len(checks),'checks':checks,
           'scope':'资料完整性、来源哈希、覆盖、静态链接与发布副本；不证明上游技能执行效果。'}
(ROOT/'verification-static.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(f'PASS: {len(checks)} archive, content, evidence and local-link checks.')
