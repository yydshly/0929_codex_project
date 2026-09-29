"""Render a deterministic Chinese capability map as PNG and editable SVG."""
from pathlib import Path
from html import escape
from PIL import Image, ImageDraw, ImageFont
import json

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'assets'
W, H = 2400, 3200
BG, INK, MUTED, GREEN = '#F4F3EA', '#203A31', '#66736A', '#173E32'
im = Image.new('RGB', (W, H), BG)
draw = ImageDraw.Draw(im)
svg = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">', '<title>MengTo Skills 完整能力地图</title>', '<desc>146 项技能，按 11 个实际能力方向展示代表技能、效果和使用场景。</desc>']
font_cache = {}

def font(size, bold=False, mono=False):
    key = (size, bold, mono)
    if key not in font_cache:
        path = 'C:/Windows/Fonts/consola.ttf' if mono else ('C:/Windows/Fonts/msyhbd.ttc' if bold else 'C:/Windows/Fonts/msyh.ttc')
        font_cache[key] = ImageFont.truetype(path, size)
    return font_cache[key]

def rect(x,y,w,h,fill,stroke=None,r=0):
    draw.rounded_rectangle((x,y,x+w,y+h),radius=r,fill=fill,outline=stroke,width=2)
    svg.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" fill="{fill}"'+(f' stroke="{stroke}" stroke-width="2"' if stroke else '')+'/>')

def line(x,y,x2,y2,color='#D6DED3',width=2):
    draw.line((x,y,x2,y2),fill=color,width=width)
    svg.append(f'<path d="M{x} {y} L{x2} {y2}" stroke="{color}" stroke-width="{width}"/>')

def text(x,y,value,size=30,color=INK,bold=False,mono=False):
    draw.text((x,y),value,font=font(size,bold,mono),fill=color,anchor='lt')
    family = 'Consolas, monospace' if mono else 'Microsoft YaHei, Noto Sans CJK SC, sans-serif'
    svg.append(f'<text x="{x}" y="{y}" dominant-baseline="text-before-edge" font-family="{family}" font-size="{size}" font-weight="{700 if bold else 400}" fill="{color}">{escape(value)}</text>')

def para(x,y,value,width,size=30,color=INK,leading=47,bold=False):
    rows=[];row=''
    for ch in value:
        if draw.textlength(row+ch,font=font(size,bold))>width:
            rows.append(row);row=ch
        else:row+=ch
    if row:rows.append(row)
    if len(rows)>1 and len(rows[-1])<6:
        take=6-len(rows[-1])
        rows[-1]=rows[-2][-take:]+rows[-1]
        rows[-2]=rows[-2][:-take]
    for i in range(1,len(rows)):
        if rows[i][0] in '，。；、！？':
            rows[i]=rows[i-1][-1]+rows[i]
            rows[i-1]=rows[i-1][:-1]
    for i,s in enumerate(rows):text(x,y+i*leading,s,size,color,bold)
    return len(rows)

groups = [
 ('页面与产品表达',8,'页面与体验',['landing-page','operational-enterprise-ai'],'组织整页叙事、产品证据、FAQ 与行动入口。','产品官网、企业 AI 介绍页、定价页、作品集。'),
 ('视觉风格与布局',27,'页面与体验',['book-serif-index','dark-glass-clean-layout'],'统一字体、色彩、网格及纸张、玻璃等材质。','确定品牌气质、网站改版、探索不同视觉方案。'),
 ('滚动与叙事动效',13,'页面与体验',['gsap-scrolltrigger-storytelling','animation-systems'],'滚动驱动章节、文字显现、固定展示与连续转场。','产品发布页、长篇故事、沉浸式案例展示。'),
 ('界面细节与状态',12,'页面与体验',['css-border-gradient','beam-glow-states'],'细化边框、阴影、遮罩及加载、选中、焦点反馈。','按钮、卡片、导航与工作状态的精修。'),
 ('互动与视觉效果',23,'互动与空间',['build-interactive-particle-trail','globe-gl'],'粒子尾迹、交互地球、水波、扫描与物理反馈。','品牌首屏、互动展示、地理数据可视化。'),
 ('三维场景与环境',14,'互动与空间',['3d-virtual-tour','3d-ultra-realistic-water'],'构造三维空间、真实感水面、天空、天气与四季。','虚拟导览、空间体验、三维品牌展示。'),
 ('游戏系统与体验',21,'互动与空间',['build-isometric-arpg','design-action-combat'],'搭建移动、战斗、敌人、背包、关卡与反馈系统。','浏览器游戏原型、可玩演示、触屏适配与试玩。'),
 ('参考理解与提炼',6,'研究与制作',['video-to-superprompt','web-technique-to-skill'],'把录屏、网页与成功代码提炼为实现说明或新技能。','拆解参考、研究交互、积累个人方法库。'),
 ('设计审查与质量',9,'研究与制作',['audit-ai-design-slop','iterate-until-verified'],'发现设计问题、建立验收项、迭代验证与性能检查。','交付前审查、减少模板感、检查动画和运行开销。'),
 ('素材与内容',7,'研究与制作',['unsplash-asset-images','elevenlabs-tts'],'寻找图片、生成视觉素材、制作旁白与社交文案。','页面配图、品牌素材、演示解说与内容传播。'),
 ('制作与交付协作',6,'研究与制作',['publish-project-to-github','workflow-ship-change'],'组织仓库、截图、录屏、版本记录、发布与上线核验。','作品展示、项目交付、多人协作与版本维护。'),
]
data=json.loads((ROOT/'web/catalog.js').read_text(encoding='utf-8').removeprefix('window.CAPABILITIES = ').rstrip(';\n'))
known={s['name'] for s in data['skills']}
assert sum(g[1] for g in groups)==len(data['skills'])==146
assert all(skill in known for g in groups for skill in g[3])
assert [g[1] for g in groups]==[len([s for s in data['skills'] if s['group']==g['id']]) for g in data['groups']]

rect(0,0,W,H,BG)
rect(0,0,W,367,GREEN)
text(80,45,'MENGTO / SKILLS',27,'#B4C8B9',True,True)
text(80,95,'一张图看懂完整能力',82,'#FCFDF4',True)
text(80,203,'核心：视觉设计与前端体验，延伸到三维、游戏、内容和交付流程。',32,'#D7E0D2')
text(80,285,'11 个实际能力方向  /  代表技能 → 能实现的效果 → 适用场景',30,'#D7E0D2')
text(1935,64,'146',112,'#D5EEA6',True)
text(1960,208,'项技能 · 完整覆盖',26,'#EAF1DC')

pad,gap,cw,ch,gy=80,26,729,557,410
colors={'页面与体验':('#2B6250','#E7EFE3'),'互动与空间':('#286C78','#E2EDF0'),'研究与制作':('#8A6234','#F2EBDC')}
for i,(title,count,kind,skills,effect,scene) in enumerate(groups):
    x=pad+(i%3)*(cw+gap);y=gy+(i//3)*(ch+gap)
    accent,tint=colors[kind]
    rect(x,y,cw,ch,'#FDFDF8','#D3DACF',14)
    rect(x+24,y+26,52,36,tint,r=6)
    text(x+33,y+28,f'{i+1:02d}',24,accent,True,True)
    text(x+90,y+27,kind,24,accent)
    badge=f'{count} 项';text(x+cw-112,y+27,badge,25,accent,True)
    text(x+30,y+83,title,42,INK,True)
    text(x+30,y+154,'代表技能',22,MUTED)
    for k,s in enumerate(skills):text(x+30,y+193+k*36,s,27,accent,False,True)
    line(x+30,y+282,x+cw-30,y+282)
    text(x+30,y+302,'效果',23,accent,True)
    n=para(x+30,y+340,effect,cw-60,31,INK,43);assert n<=2,(title,n)
    text(x+30,y+436,'场景',23,accent,True)
    n=para(x+30,y+473,scene,cw-60,29,MUTED,40);assert n<=2,(title,n)

x=pad+2*(cw+gap);y=gy+3*(ch+gap)
rect(x,y,cw,ch,GREEN,r=14)
text(x+32,y+29,'COMBINE / 按任务组合',25,'#C8DDB7',True)
text(x+32,y+83,'一个任务，多个 skill',40,'#FCFFF4',True)
for j,s in enumerate(['① 选整页方向，确定视觉风格','② 按需加入动效、三维或游戏','③ 补充素材，审查验证，再交付']):text(x+32,y+158+j*48,s,29,'#E4ECD9')
line(x+32,y+318,x+cw-32,y+318,'#547361')
text(x+32,y+343,'例：企业 AI 官网',29,'#D5EEA6',True)
text(x+32,y+392,'operational-enterprise-ai',27,'#EAF2E0',False,True)
text(x+32,y+433,'＋ 按需补充视觉、交互与交付技能',28,'#EAF2E0')
text(x+32,y+503,'选定主规范，避免风格规则相互冲突。',25,'#BFD0BB')

by=2766
rect(80,by,2240,238,'#E6EBDE',r=12)
text(110,by+29,'能力边界',31,GREEN,True)
text(328,by+30,'介绍页呈现“审批、审计、回退”，不等于实现真实企业 AI 系统。',32,GREEN,True)
text(328,by+88,'后端、数据库、模型接入、权限与业务逻辑仍需另行设计开发。',30,INK)
text(328,by+145,'这些是指导 AI 完成任务的规范与方法；实际效果依赖项目、素材、工具与验证。',28,MUTED)
text(80,3040,'分组覆盖全部 146 项；每组仅列代表技能。预期效果不代表全部实测。',26,MUTED)
text(80,3090,'来源：github.com/MengTo/Skills   ·   研究快照：2026.09.29   ·   版本：798db0a',25,MUTED)
text(80,3136,'原始目录：网页 88 / Codex 20 / 游戏 20 / 3D 9 / 工作流 4 / UI 3 / 媒体 2；与上方实际能力分组口径不同。',23,MUTED)
svg.append('</svg>')
OUT.mkdir(exist_ok=True)
im.save(OUT/'capability-map.png',dpi=(300,300))
(OUT/'capability-map.svg').write_text('\n'.join(svg),encoding='utf-8')
print('Verified: 146 skills, 11 groups, 22 real representative IDs. Exported PNG and SVG.')
