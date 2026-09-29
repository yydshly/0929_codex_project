"""Verify published skill coverage, evidence assets and local navigation."""
import json
import re
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT.parents[1] / 'site' / ROOT.name
class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(); self.ids=[]; self.links=[]; self.skills=[]; self.groups=[]
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if 'id' in a:self.ids.append(a['id'])
        for key in ('href','src'):
            if key in a:self.links.append(a[key])
        if 'data-skill' in a:self.skills.append(a['data-skill'])
        if 'data-pick' in a:self.groups.append(a['data-pick'])

data=json.loads((SITE/'catalog.js').read_text(encoding='utf-8').removeprefix('window.CAPABILITIES = ').rstrip(';\n'))
skills={s['name'] for s in data['skills']};groups={g['id']:g for g in data['groups']}
assert len(skills)==len(data['skills'])==146
assert len(groups)==11 and sum(g['count'] for g in groups.values())==146
for key,g in groups.items():assert g['count']==sum(s['group']==key for s in data['skills'])
pages={p:Page(p.read_text(encoding='utf-8')) for p in SITE.glob('*.html')}
for p,page in pages.items():
    assert len(page.ids)==len(set(page.ids)),f'Duplicate IDs: {p}'
    assert set(page.skills)<=skills and set(page.groups)<=set(groups)
    for url in page.links:
        link=urlsplit(url)
        if link.scheme or link.netloc:continue
        target=(p.parent/unquote(link.path)).resolve() if link.path else p
        if target.is_dir():target=target/'index.html'
        assert target.exists(),f'Missing target {url} in {p}'
        if link.fragment and target in pages:
            assert unquote(link.fragment) in pages[target].ids,f'Broken anchor {url} in {p}'
for p in [p for p in SITE.iterdir() if p.suffix in ('.html','.css','.js')]:
    assert p.read_bytes()==(ROOT/'web'/p.name).read_bytes(),f'Unsynced: {p}'
assets=['capability-map.svg','capability-map.png']+[f'style-{s}.png' for s in ('studio','paper','glass','terminal','saas','brutal')]
for name in assets:
    assert (SITE/'assets'/name).read_bytes()==(ROOT/'assets'/name).read_bytes()
poster=(SITE/'assets/capability-map.svg').read_text(encoding='utf-8')
for g in groups.values():assert g['title'] in poster
index=(SITE/'index.html').read_text(encoding='utf-8')
assert index.count('class="effect-card"')==6
assert index.count('class="scenario-list"')==1
assert all(x in pages[SITE/'index.html'].ids for x in ('understanding','real-effects','capability-map','skill-types','my-scenarios','boundaries','catalog'))
print('PASS: 146 skills / 11 groups; 6 real examples; complete summary and scenarios; local links, anchors, assets and source sync.')
