"""Build original Chinese analysis and dependency-free static presentation."""
from pathlib import Path
import html
import json
import shutil
import sys
from overview_sections import generate_overview, make_viewer
from publication_sections import generate_publication, DESCRIPTION, ONLINE

ROOT = Path(__file__).resolve().parents[1]
WORKSPACE = ROOT.parents[1]
DATA = json.loads((ROOT / 'data.json').read_text(encoding='utf-8'))
MANIFEST = json.loads((ROOT / 'sources-manifest.json').read_text(encoding='utf-8'))
BASE = f"https://github.com/{MANIFEST['repository']}/blob/{MANIFEST['commit']}/"
SKILL = 'skills/app-ui-ux-best-practices/'
WEB = ROOT / 'web'
WEB.mkdir(exist_ok=True)
scope_html, summary_html, usage_html, value_html = generate_overview()
if '--regenerate-map' in sys.argv:
    from summary_map import build_summary
    build_summary()
make_viewer()

def esc(value):
    return html.escape(str(value), quote=True)

def source(path, marker=None):
    lines = (ROOT / 'sources' / path).read_text(encoding='utf-8').splitlines()
    if marker:
        hits = [i + 1 for i, line in enumerate(lines) if marker in line]
        if not hits:
            raise ValueError(f'Missing source marker: {path}: {marker}')
        return BASE + path + '#L' + str(hits[0])
    return BASE + path

def link(url, label):
    return f'<a href="{esc(url)}" target="_blank" rel="noopener noreferrer">{esc(label)} ↗</a>'

def bullet(items):
    return '<ul>' + ''.join(f'<li>{esc(i)}</li>' for i in items) + '</ul>'

def write(name, value):
    (ROOT / name).write_text(value.rstrip() + '\n', encoding='utf-8')

modules = DATA['modules']
brief_html, personal_html = generate_publication(modules)
by_id = {m['id']: m for m in modules}
navigation = []
panels = []
capabilities = ['# OJO Design Skills · Skill 与参考模块逐项分析', '',
    '> 固定版本的文档研究；1 个独立 Skill + 9 个参考模块。以下示例请求、效果说明与验收建议为研究整理，未运行上游技能。', '',
    '顺序按理解与使用流程编排，不代表上游文件排序。每个模块均包含能力、场景、输入、产出、示例与边界。', '']

for index, m in enumerate(modules):
    number = f'{index:02}'
    kind = '核心 Skill' if m['kind'] == 'skill' else '参考模块'
    url = source(SKILL + m['file'], m['markers'][0])
    navigation.append(f'<a class="module-link" href="#module-{m["id"]}" data-module="{m["id"]}"><span>{number}</span><div>{esc(m["title"])}<small>{esc(m["name"])}</small></div></a>')
    refs = ' · '.join(link(source(SKILL + m['file'], marker), f'依据 {n+1}') for n, marker in enumerate(m['markers']))
    panels.append(f'''<article class="module-panel" id="module-{m['id']}" aria-labelledby="title-{m['id']}">
      <div class="panel-meta"><span class="pill">{kind}</span><span>{esc(m['phase'])}</span><span class="panel-index">条目 {number}</span></div>
      <h3 id="title-{m['id']}" tabindex="-1">{esc(m['title'])}</h3><code class="filename">{esc(m['name'])}</code>
      <p class="panel-intro">{esc(m['summary'])}</p>
      <div class="detail-grid"><div><h4>能做什么</h4>{bullet(m['capabilities'])}</div><div><h4>什么时候用</h4>{bullet(m['scenes'])}</div></div>
      <div class="io"><div><span>你提供</span><p>{esc(m['inputs'])}</p></div><div><span>预期得到</span><p>{esc(m['outputs'])}</p></div></div>
      <div class="example"><span class="overline">示例请求 · 研究构造</span><p>{esc(m['example'])}</p></div>
      <p class="effect"><strong>预期效果</strong> {esc(m['effect'])}</p>
      <details><summary>使用边界与原文依据</summary><p>{esc(m['boundary'])}</p><div class="source-links">{refs}</div></details>
    </article>''')
    capabilities.extend([f"## {number} · {m['title']}（{kind}）", '', f"文件：`{m['file']}` · 阶段：{m['phase']}", '', m['summary'], '',
        '### 能力', '', *['- '+i for i in m['capabilities']], '', '### 使用场景', '', *['- '+i for i in m['scenes']], '',
        '**输入：** '+m['inputs'], '', '**产出：** '+m['outputs'], '', '**示例请求（研究构造）：** '+m['example'], '',
        '**预期效果：** '+m['effect'], '', '**边界：** '+m['boundary'], '',
        '原文：'+ ' · '.join(f"[依据 {n+1}]({source(SKILL + m['file'], marker)})" for n,marker in enumerate(m['markers'])), '',
        f"[本地原文](sources/{SKILL + m['file']})", ''])
write('CAPABILITIES.md', '\n'.join(capabilities))

scenario_html = []
scenario_md = ['# OJO Design Skills · 场景与验收建议', '', '> 场景为研究者整理，不是上游运行实测。模块名称指参考资料，不代表另装多个 Skill。', '']
for i, s in enumerate(DATA['scenarios'], 1):
    chips = ''.join(f'<a class="chip" href="#module-{m}">{esc(by_id[m]["title"])}</a>' for m in s['modules'])
    scenario_html.append(f'''<article class="scenario"><span class="overline">场景 {i:02} · {esc(s['route'])}</span><h3>{esc(s['title'])}</h3><p>{esc(s['need'])}</p><div class="chips">{chips}</div><dl><dt>交付物</dt><dd>{esc(s['deliver'])}</dd><dt>如何验收</dt><dd>{esc(s['accept'])}</dd></dl><details><summary>查看示例请求</summary><p>{esc(s['prompt'])}</p></details></article>''')
    scenario_md.extend([f"## {i:02} · {s['title']}", '', '**需求：** '+s['need'], '', '**路线：** '+s['route'], '',
        '**涉及模块：** '+' → '.join(by_id[m]['title'] for m in s['modules']), '', '**交付物：** '+s['deliver'], '',
        '**建议验收：** '+s['accept'], '', '**示例请求：** '+s['prompt'], ''])
write('SCENARIOS.md', '\n'.join(scenario_md))

finding_html = []
research = ['# OJO Design Skills · 原理、证据与边界', '', '## 研究范围', '',
    f"基于提交 `{MANIFEST['commit']}`（{MANIFEST['commit_date']}），2026-09-29 阅读并留档 16 个来源文件。当前固定文件树只有一个 SKILL.md 和九个参考文档。", '',
    '采用本仓库现有静态研究站点结构，新建编号 007。没有安装上游 Skill、执行 install.sh、调用其编排工具，或进行设计效果对照实验。源码快照仅供研究，不作为当前会话指令。', '',
    '## 底层原理', '',
    '1. 宿主发现：核心文件的名称与描述声明技能用途；是否触发取决于宿主的技能加载机制。',
    '2. 方法编排：需求判断、参考研究、方向确认、参数、组件、动效和审查构成工作流程。',
    '3. 按需阅读：anti-patterns 为前置资料；其余专题在相应步骤提供细化知识。',
    '4. 执行与复核：模型解释规则，宿主提供搜索、读图、代码与浏览器能力；审查以文字清单与报告为主。', '',
    '安装脚本按目标客户端选择目录，读取本地文件或下载指定引用，发现 SKILL.md 后复制对应目录，记录清单。支持 dry-run、单技能、固定引用和自定义目录；默认备份已有副本，force 路径会删除旧副本。本研究仅阅读实现，未执行安装。', '',
    f"[安装实现]({source('scripts/install.sh')})", '',
    '这套实现通过提示词、参考知识和流程约束影响模型输出，没有在本仓库提供新的模型权重、向量检索服务、渲染器或自动设计检测引擎。', '',
    '## 两条路线与适用边界', '',
    '- 效率路线：适用于 SaaS、后台和工具；参考成熟设计语言，重视可预测性与认知负担。',
    '- 品牌路线：适用于消费、品牌电商与创意产品；由品牌和受众推导材质、角色、叙事或文化方法。',
    '- 完整新设计流程要求展示方向并等待选择；General Skill Mode 对点评、参考适配和改进允许遵循调用者的交付形式，已有上游确认方向也可跳过重复确认。', '',
    f"[流程依据]({source(SKILL+'SKILL.md')})", '', '## 核验发现', '']
for i, f in enumerate(DATA['findings'], 1):
    path = f.get('path', SKILL + f.get('file', ''))
    url = source(path, f['marker'])
    finding_html.append(f'<article class="finding"><span>{i:02}</span><div><h3>{esc(f["title"])}</h3><p>{esc(f["text"])}</p>{link(url,"查看原文")}</div></article>')
    research.extend([f"### {i}. {f['title']}", '', f['text'], '', f'[依据]({url})', ''])
research.extend(['## 扩展方向（研究建议，非官方路线图）', ''])
for e in DATA['extensions']:
    research.extend([f"### {e['title']}", '', e['action'], '', '价值：'+e['value'], ''])
research.extend(['## 未验证内容', '',
    '- 上游技能是否被各客户端自动触发、是否顺利执行全部步骤。',
    '- 上游组件示例的当前依赖兼容性、浏览器行为和无障碍合规情况。',
    '- 设计质量、开发速度或商业转化是否因使用该 Skill 改善。',
    '- 本地展示页的验证与截图只证明研究页面可用，不证明上游技能效果。', '',
    '本项目验证结果见 [VERIFICATION.md](VERIFICATION.md)。'])
write('RESEARCH.md', '\n'.join(research))

sources_md = ['# 固定版本来源', '', f"仓库：[{MANIFEST['repository']}](https://github.com/{MANIFEST['repository']})", '',
    f"提交：[`{MANIFEST['commit']}`](https://github.com/{MANIFEST['repository']}/tree/{MANIFEST['commit']})", '',
    f"提交时间：{MANIFEST['commit_date']} · 研究日期：{MANIFEST['research_date']}", '',
    '保留 MIT 许可证及版权声明，Copyright (c) 2026 touchine-ojo。中文解释和示例为本研究原创整理。', '',
    '文件树记录与逐文件 SHA-256 / Git blob 标识保存在 [sources-manifest.json](sources-manifest.json)。', '',
    '| 原始路径 | 本地快照 | 固定版本 |', '| --- | --- | --- |']
for f in MANIFEST['files']:
    sources_md.append(f"| `{f['path']}` | [阅读](sources/{f['path']}) | [上游]({f['url']}) |")
sources_md.extend(['', '## 引用但未随包提供的资源', '',
    '`design-dna`、`write-code`、`write-mobile`、`generate_visual_dna`、`save_final_prd`、`write_code`、`emfont-fonts`、`design-refine.md`、`color-palette-library.md` 等在正文中出现，固定文件树未提供对应实现。它们不是本次技能计数的一部分。'])
write('SOURCES.md', '\n'.join(sources_md))

extensions_html = ''.join(f'<article><h3>{esc(e["title"])}</h3><p>{esc(e["action"])}</p><span>{esc(e["value"])}</span></article>' for e in DATA['extensions'])
readme = f'''# 007 · OJO Design Skills：能力与使用场景

> {DESCRIPTION}

对你：现在用于开源研究展示页的信息层级与视觉统一；以后制作个人工具、后台或产品介绍页时，获得页面方向、组件反馈与设计规范；改版时输出问题清单，长期积累可复用的个人设计方法。预期效果需通过真实页面验证。

## 基本信息

| 项目 | 内容 |
| --- | --- |
| 固定编号 | 007 |
| 原仓库 | [touchine-ojo/OJO-Design-Skills](https://github.com/{MANIFEST['repository']}) |
| 固定提交 | [`{MANIFEST['commit']}`](https://github.com/{MANIFEST['repository']}/tree/{MANIFEST['commit']}) |
| 提交时间 | {MANIFEST['commit_date']} |
| 研究日期 | 2026-09-29 |
| 许可证 | [MIT · Copyright (c) 2026 touchine-ojo](sources/LICENSE) |
| 研究状态 | 已完成：固定版本文档与脚本阅读分析 |
| 能力结构 | 1 个独立 Skill + 9 份参考文档；不计外部引用为内置技能 |
| 验证边界 | 未安装或运行上游 Skill；研究网页及资料完整性单独验证 |
| Web 展示 | [在线能力摘要](https://yydshly.github.io/0929_codex_project/007-ojo-design-skills/) · [本地副本](web/index.html) |

## 阅读入口

- [能力摘要与个人使用建议](SUMMARY.md)：各项能力和产物、五个个人场景、采用时机与价值。
- [产品开发定位与完整使用指南](GUIDE.md)：覆盖范围、如何用、具体例子与预期价值。
- [一图能力总览](web/map.html)：可缩放浏览；[PNG](assets/capability-summary.png) / [SVG 矢量版](assets/capability-summary.svg)。
- [核心 Skill 与九个模块详细分析](CAPABILITIES.md)：能力、场景、输入、产出、示例与边界。
- [六个具体使用场景](SCENARIOS.md)：后台、品牌订阅、阅读工具、活动页、改版和开发交接。
- [底层原理、核验发现与扩展](RESEARCH.md)：文本规则如何被宿主执行，以及规则冲突和缺失依赖。
- [固定版本来源](SOURCES.md)与[来源清单](sources-manifest.json)。
- [验证记录](VERIFICATION.md)。

## 能力索引

| 类型 | 模块 | 主要能力 |
| --- | --- | --- |
'''
for m in modules:
    readme += f"| {'独立 Skill' if m['kind']=='skill' else '参考文档'} | `{m['name']}` | {m['summary']} |\n"
readme += '''
## 展示说明

网页包含能力与效果摘要、全部十项速查、五个个人场景、产品开发覆盖、一图总览、详细能力、六个产品场景、两条路线、六步指南、案例与边界。大图沿用本次已确认的摘要图，可按适合宽度、100%、150% 缩放，支持 PNG 与 SVG 下载。所有示例请求和预期效果为研究构造。

![OJO 完整能力总览](assets/capability-summary.png)

图示回答能力、方向、技能组成、场景、用法和意义，并明确产品开发覆盖边界。

![OJO 能力研究网页桌面截图](assets/overview-desktop.png)

截图来自本研究展示页，不是上游 Skill 执行结果。

## 本地运行与维护

在工作区根目录执行：

```powershell
python projects/007-ojo-design-skills/scripts/build.py
python projects/007-ojo-design-skills/scripts/verify.py
python -m http.server 8767 --bind 127.0.0.1 --directory site
```

打开 `http://127.0.0.1:8767/007-ojo-design-skills/`，也可直接打开 `web/index.html`。展示页没有第三方运行依赖；资料已在本地，浏览不需要联网，原文链接需要网络。重新生成总览图使用 Python、Pillow 和 Windows 微软雅黑字体；更换环境时可在绘图脚本中调整字体路径。

`data.json` 保存模块和场景分析，`overview.json` 保存定位、使用指南与总览内容；`scripts/publication_sections.py` 保存能力摘要与个人采用建议。默认构建复用已经确认的 PNG / SVG，仅生成文档、页面并同步到 `site/007-ojo-design-skills/`；显式加 `--regenerate-map` 才重新绘图。默认构建与验证只使用 Python 标准库，适合 GitHub Pages CI。`sources/` 是固定版本研究快照，不是本地技能安装目录。

## 采用判断

适合辅助界面方向探索、规范沉淀与设计审查。实际执行依赖宿主工具；采用前应处理规则冲突和缺失引用，结合现有设计系统及真实页面验证。没有证据支持“安装后必然更好看”或“必然提高转化”。

[返回研究总入口](../../README.md)
'''
write('README.md', readme)

page = f'''<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>OJO Design Skills · 能力与场景研究 / 007</title><meta name="description" content="逐项分析 OJO 的一个核心 Skill 与九个参考模块，说明能力、使用场景、输入产出、原理及边界。"><link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%23193838'/%3E%3Ccircle cx='11' cy='16' r='5' fill='none' stroke='%23d5f2ba' stroke-width='3'/%3E%3Ccircle cx='23' cy='16' r='3' fill='%23d5f2ba'/%3E%3C/svg%3E"><link rel="stylesheet" href="styles.css"><script src="app.js" defer></script></head>
<body><a class="skip" href="#content">跳到正文</a><header class="header"><a class="wordmark" href="#content">OJO<span>DESIGN SKILLS</span></a><nav aria-label="章节"><a href="#explorer">逐项能力</a><a href="#scenarios">使用场景</a><a href="#principle">工作原理</a><a href="#evidence">边界与依据</a></nav><span class="edition">研究集 / 007</span></header>
<main id="content"><section class="intro"><div><span class="overline">开源技能研究 · 2026.09.29</span><h1>让设计决策，<br>变成可复用的方法。</h1><p>OJO 将界面设计的流程、配方和检查清单，整理成 AI 助手可以读取的技能包。从每一项能帮你完成的工作开始了解它。</p><a class="text-link" href="#explorer">逐项查看能力 <span aria-hidden="true">↓</span></a></div><aside class="structure" aria-label="能力结构"><div class="structure-top"><span>包内实际结构</span><span class="status">文档已核验</span></div><div class="count"><strong>1</strong><div>个独立 Skill<small>app-ui-ux-best-practices</small></div></div><div class="branch"><span>流程编排</span><i aria-hidden="true"></i><span>按步骤加载知识</span></div><div class="count small"><strong>9</strong><div>份参考文档<small>规则 / 参数 / 组件 / 动效 / 审查</small></div></div><p>参考模块不是九个独立技能。搜索、编码和浏览器操作由宿主 AI 工具提供。</p></aside></section>
<section id="explorer" class="section"><div class="section-heading"><div><span class="overline">01 / CAPABILITIES</span><h2>一个入口，九组专业知识。</h2></div><p>按使用流程排列。选择模块，查看能力与场景。</p></div><div class="explorer"><nav class="module-nav" aria-label="Skill 与参考模块">{''.join(navigation)}</nav><div class="panel-area">{''.join(panels)}<div class="pager" hidden><button id="previous" type="button">← 上一项</button><span id="progress" aria-live="polite">01 / 10</span><button id="next" type="button">下一项 →</button></div></div></div></section>
<section id="scenarios" class="section"><div class="section-heading"><div><span class="overline">02 / USE CASES</span><h2>从真实任务，找到使用方向。</h2></div><p>以下为研究整理的场景；点击模块名可回到详细说明。</p></div><div class="scenario-grid">{''.join(scenario_html)}</div></section>
<section id="principle" class="section"><div class="section-heading"><div><span class="overline">03 / HOW IT WORKS</span><h2>同一套方法，走两条设计路线。</h2></div><p>通过文档指导模型决策，实际执行依赖宿主能力。</p></div><div class="workflow"><div class="route-controls" hidden><button type="button" data-route="convention" aria-pressed="true">效率优先</button><button type="button" data-route="innovation" aria-pressed="false">品牌体验优先</button></div><article class="route" id="route-convention"><h3>Convention Track · 效率路线</h3><p>后台、SaaS、开发者工具：重视清晰、可预测与低认知负担。</p><ol><li>明确产品与用户任务</li><li>研究成熟产品参考</li><li>确认视觉与布局方向</li><li>定义参数、组件和动效</li><li>输出规范并审查</li></ol></article><article class="route" id="route-innovation"><h3>Innovation Track · 品牌路线</h3><p>品牌电商、生活方式、创意产品：由受众和品牌表达推导视觉。</p><ol><li>研究品牌与参考</li><li>发现情绪关键词</li><li>确认方向与设计方法</li><li>推导参数、组件和动效</li><li>输出规范并审查</li></ol></article><p class="route-note">完整新设计流程包含方向确认；点评、改进与已有确认方向的调用有例外。材质隐喻只是品牌路线的一种方法。</p></div><div class="mechanism"><article><span>01</span><h3>技能入口</h3><p>名称和用途描述帮助宿主发现技能；具体触发由宿主决定。</p></article><article><span>02</span><h3>流程与参考</h3><p>核心文档组织步骤，专题文件在对应环节补充规则与示例。</p></article><article><span>03</span><h3>宿主执行</h3><p>AI 解读要求，利用已有搜索、读图、编码和浏览器工具完成任务。</p></article><article><span>04</span><h3>模型复核</h3><p>依据清单形成问题报告。若要证明运行正确，仍需真实操作与测试。</p></article></div></section>
<section id="evidence" class="section"><div class="section-heading"><div><span class="overline">04 / FINDINGS</span><h2>理解它的能力，也看清边界。</h2></div><p>文件事实、上游规则与研究判断分别呈现。</p></div><div class="findings">{''.join(finding_html)}</div></section>
<section id="extensions" class="section"><div class="section-heading"><div><span class="overline">05 / NEXT POSSIBILITIES</span><h2>可以继续扩展的方向。</h2></div><p>研究建议，非已实现能力或官方路线图。</p></div><div class="extensions">{extensions_html}</div></section>
<section class="provenance"><div><span class="overline">研究依据</span><h2>固定版本，可回到原文。</h2><p>提交 <code>{MANIFEST['commit']}</code><br>提交时间 {MANIFEST['commit_date']} · MIT © 2026 touchine-ojo</p></div><div><p>核验了 1 个核心 Skill、9 份参考及安装与说明文件，共留档 16 个文件。未安装或执行上游 Skill，也未进行效果对照实验。本页是独立中文研究，不是 OJO 官方产品。</p>{link(BASE+'README.md','上游说明')} · {link(BASE+'LICENSE','许可证')} · {link('https://github.com/'+MANIFEST['repository']+'/tree/'+MANIFEST['commit']+'/skills','固定技能目录')}</div></section>
</main><footer><span>007 · OJO Design Skills / 中文研究与展示</span><a href="#content">回到顶部 ↑</a></footer></body></html>'''
page = page.replace('<section id="explorer"', brief_html + summary_html + scope_html + '<section id="explorer"', 1)
page = page.replace('<section id="evidence"', usage_html + '<section id="evidence"', 1)
page = page.replace('<section id="extensions"', personal_html + value_html + '<section id="extensions"', 1)
page = page.replace('让设计决策，<br>变成可复用的方法。', '从理解产品任务，<br>到设计界面体验。')
page = page.replace('OJO 将界面设计的流程、配方和检查清单，整理成 AI 助手可以读取的技能包。从每一项能帮你完成的工作开始了解它。', 'OJO 是面向产品界面设计与前端交接的 AI 技能包。它用多个设计角度理解产品，核心落在 UI/UX 方案、规范和审查；完整研发流程需要其他能力配合。')
page = page.replace('<a class="text-link" href="#explorer">逐项查看能力', '<a class="text-link" href="#summary">查看完整能力总览')
old_nav='<a href="#explorer">逐项能力</a><a href="#scenarios">使用场景</a><a href="#principle">工作原理</a><a href="#evidence">边界与依据</a>'
new_nav='<a href="#brief">能力摘要</a><a href="#summary">一图总览</a><a href="#explorer">逐项能力</a><a href="#scenarios">场景</a><a href="#usage">如何用</a><a href="#personal">对你的价值</a><a href="#evidence">依据</a>'
page=page.replace(old_nav,new_nav)
page=page.replace('逐项分析 OJO 的一个核心 Skill 与九个参考模块，说明能力、使用场景、输入产出、原理及边界。', esc(DESCRIPTION))
page=page.replace('<title>OJO Design Skills · 能力与场景研究 / 007</title>', '<title>OJO Design Skills · 能力、效果与个人使用价值 / 007</title>')
page=page.replace('<link rel="stylesheet" href="styles.css">', f'<link rel="canonical" href="{ONLINE}"><meta property="og:title" content="OJO Design Skills · 能力与使用价值"><meta property="og:description" content="{esc(DESCRIPTION)}"><meta property="og:image" content="{ONLINE}capability-summary.png"><link rel="stylesheet" href="styles.css">')
(WEB / 'index.html').write_text(page, encoding='utf-8')
write('web/README.md', '# 本地展示\n\n无需安装依赖。直接打开 index.html，或通过工作区静态服务浏览。\n\n模块分析源于 ../data.json。运行 ../scripts/build.py 会更新研究文档、HTML 并同步到 site/007-ojo-design-skills。\n\n网页示意与截图为研究展示，不是上游 Skill 实测。')
destination = WORKSPACE / 'site' / ROOT.name
destination.mkdir(parents=True, exist_ok=True)
for name in ['capability-summary.png', 'capability-summary.svg']:
    shutil.copy2(ROOT / 'assets' / name, WEB / name)
for filename in ['index.html', 'styles.css', 'app.js', 'map.html', 'map.css', 'map.js', 'capability-summary.png', 'capability-summary.svg']:
    shutil.copy2(WEB / filename, destination / filename)
print('Built 10 module analyses, 6 scenarios, research documents and static site.')
