"""Create one comprehensive Chinese capability map in SVG and high-resolution PNG."""
from pathlib import Path
from html import escape
import json
import shutil
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
W, H, SCALE = 2200, 4020, 1.5
P = dict(bg='#F7F8F1', ink='#243C30', muted='#5F715B', line='#D5DECA', card='#FCFDF8', green='#E8EFDB', dark='#263F31', lime='#DFEBAE', sand='#F1EEDC', soft='#EDF0E8')
FONT = Path('C:/Windows/Fonts/msyh.ttc')
BOLD = Path('C:/Windows/Fonts/msyhbd.ttc')
MONO = Path('C:/Windows/Fonts/consola.ttf')
image = Image.new('RGB', (int(W*SCALE), int(H*SCALE)), P['bg'])
draw = ImageDraw.Draw(image)
svg = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-labelledby="title desc">',
       '<title id="title">Jakub Krehel Skills：11 个界面技能的能力、范围、场景、用法与意义</title>',
       '<desc id="desc">面向 Web 产品界面质量的技能集合。图中覆盖六个专业领域、五个工作流程、六类典型场景、安装与调用示例、执行链路、价值和边界。全部效果为固定版本文档归纳，未运行上游技能实测。</desc>',
       f'<rect width="{W}" height="{H}" fill="{P["bg"]}"/>']
fonts, layout = {}, []

def font(size, bold=False, mono=False, scaled=False):
    key = (size,bold,mono,scaled)
    if key not in fonts:
        fonts[key] = ImageFont.truetype(str(MONO if mono else BOLD if bold else FONT), round(size*(SCALE if scaled else 1)))
    return fonts[key]

def rect(x,y,w,h,fill='card',stroke='line',radius=12):
    fc,sc = P.get(fill,fill), P.get(stroke,stroke) if stroke else None
    draw.rounded_rectangle([x*SCALE,y*SCALE,(x+w)*SCALE,(y+h)*SCALE],radius=radius*SCALE,fill=fc,outline=sc,width=2 if sc else 1)
    svg.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{radius}" fill="{fc}"'+(f' stroke="{sc}"' if sc else '')+'/>')

def line(x1,y1,x2,y2,color='line',width=1):
    col=P.get(color,color)
    draw.line([x1*SCALE,y1*SCALE,x2*SCALE,y2*SCALE],fill=col,width=max(1,round(width*SCALE)))
    svg.append(f'<path d="M{x1} {y1}L{x2} {y2}" fill="none" stroke="{col}" stroke-width="{width}"/>')

def text(x,y,s,size=24,color='ink',bold=False,mono=False,max_width=None):
    f=font(size,bold,mono)
    width=f.getlength(s)
    if max_width is not None and width > max_width+2:
        raise ValueError(f'Text too wide ({width:.1f}>{max_width}): {s}')
    ascent=f.getmetrics()[0]
    col=P.get(color,color)
    draw.text((round(x*SCALE),round((y+ascent)*SCALE)),s,font=font(size,bold,mono,True),fill=col,anchor='ls')
    family='Consolas, monospace' if mono else 'Microsoft YaHei, PingFang SC, sans-serif'
    svg.append(f'<text x="{x}" y="{y+ascent}" font-family="{family}" font-size="{size}" font-weight="{700 if bold else 400}" fill="{col}">{escape(s)}</text>')
    layout.append(dict(text=s,x=x,y=y,width=round(width,2),size=size))

def wrap(x,y,s,width,size=24,color='muted',leading=36,bold=False):
    rows=[]
    for paragraph in s.split('\n'):
        row=''
        for ch in paragraph:
            if row and font(size,bold).getlength(row+ch)>width:
                if ch in '，。；：、！？）”》':
                    rows.append(row[:-1]);row=row[-1]+ch
                else:
                    rows.append(row);row=ch
            else: row+=ch
        rows.append(row)
    for i,row in enumerate(rows):text(x,y+i*leading,row,size,color,bold,max_width=width)
    return y+len(rows)*leading

def section(n,y,title,note):
    text(80,y,n,26,'muted',mono=True)
    text(136,y-3,title,35,bold=True)
    text(80,y+50,note,23,'muted',max_width=2040)

text(80,47,'INTERFACE NOTES  /  006     ·     JAKUB KREHEL / SKILLS',23,'muted',mono=True)
text(80,102,'一张图看懂：界面质量技能集',65,bold=True)
text(80,195,'把设计经验转成 AI 可遵循的规则、步骤与验收要求，改善 Web 页面与组件。',30,max_width=2040)
text(80,250,'11 个 skill  =  6 个专业领域 + 5 个工作流程     /     113 条能力是本研究的细化归纳，不是 113 个独立技能。',24,'muted',max_width=2040)
line(80,303,2120,303)

section('01',335,'服务什么方向？','核心服务于前端界面的设计、优化与验证：看得清、看得懂、能操作、遇到真实内容也不易失效。')
position=[
 ('核心覆盖','视觉与排版 · 颜色与主题 · 响应式布局\n键盘与焦点 · 状态与错误 · 产品文案\n页面审查 · 变更检查 · 场景与方案探索','green'),
 ('适用对象与时机','前端开发、设计工程、产品设计协作\n已有页面打磨；新组件或页面设计\n上线前界面检查；学习参考网页实现','card'),
 ('范围需要分清','以 HTML / CSS / 浏览器界面为主\n涉及可用性，但不替代完整 UX 研究\n原生端需适配；完整产品还需其他流程','sand')]
for i,(title,body,bg) in enumerate(position):
    x=80+i*690
    rect(x,423,660,222,bg)
    text(x+25,443,title,29,bold=True)
    wrap(x+25,495,body,610,25,leading=39)

section('02',693,'六个专业领域：定义“怎样才算做好”','按需用于新实现、已有界面改进或单项审查；沿用项目的设计变量、组件库与样式体系。')
domains=[
 ('better-ui','视觉细节与动效','圆角与阴影、光学对齐、图标切换、按压反馈、入退场、主题切换与动画节奏。','细节更协调，状态反馈连贯，频繁操作不拖沓。','页面粗糙、图标跳动、动效干扰操作。'),
 ('better-typography','字体与文字排版','字号层级、字重、行高、可变字体、换行、截断恢复、等宽数字与语言方向。','长文本可读且可查看完整内容，数字更新更稳定。','标题换行失衡、表格跳动、内容被截断。'),
 ('better-colors','颜色系统与测量','色阶、原始与语义变量、明暗主题、色域回退、渐变空间及实际前背景对比度。','颜色各司其职；输出色板、变量映射或测量记录。','新配色系统、主题不清晰、颜色用途混乱。'),
 ('better-accessibility','可操作性与无障碍','原生语义、控件名称、键盘、焦点、表单关联、动态播报、缩放与减少动效。','不同操作方式能理解控件、感知状态并完成流程。','鼠标可用但键盘不通；弹窗焦点或表单提示失效。'),
 ('better-layout','布局与内容适应','空间分组、对齐、阅读顺序、控件间距、容器适配、翻译增长、RTL 与安全区。','窄屏与长内容下结构稳定，关键内容和操作可达。','小屏溢出、布局拥挤、多语言撑坏容器。'),
 ('better-writing','产品界面文案','按钮标签、术语一致、链接目的、开关含义、错误恢复、空状态引导与本地化表达。','看懂要做什么、发生什么，以及下一步怎么做。','按钮含义不明、只说“出错了”、空页面无引导。')]
for i,(name,title,ability,effect,when) in enumerate(domains):
    x=80+(i%2)*1035;y=782+(i//2)*265
    rect(x,y,1005,245)
    text(x+25,y+17,title,29,bold=True)
    text(x+405,y+22,name,26,'muted',mono=True,max_width=575)
    end=wrap(x+25,y+70,'能力  '+ability,950,25,leading=37)
    end=wrap(x+25,end+9,'效果  '+effect,950,24,'ink',leading=35)
    end=wrap(x+25,end+9,'何时用  '+when,950,23,'muted',leading=34)
    if end>y+237:raise ValueError(f'Card overflow: {name} ({end-y})')

section('03',1609,'五个工作流程：决定“这次怎么做、交付什么”','整体审查协调六个领域；变更审查先界定版本范围。★ 表示上游要求用户主动调用。')
rect(80,1700,2040,54,'dark','dark',7)
text(103,1708,'工作流程 / 入口',23,'#F7FAEF',True)
text(610,1708,'具体工作与适用场景',23,'#F7FAEF',True)
text(1540,1708,'交付物与关键边界',23,'#F7FAEF',True)
flows=[
 ('better-interface','跨领域整体审查','审查页面或完整流程；按无障碍→布局→文案→排版→颜色→UI 细节检查，合并根因并按影响排序。','范围、覆盖表、问题清单与验证记录。\n默认审查；要求修复后再落实改动。'),
 ('interface-review ★','代码变更审查','审查分支、PR 或未提交改动；对比前后与删除内容，追踪受影响页面，区分新增、退化、历史问题。','分类报告、版本与代码位置。\n只读审查；不替代通用代码审查。'),
 ('explain-interface ★','参考网页实现解析','解释全站前端或一个视觉效果；分析图层、CSS 与动画，区分实测、推导和推断。','实现机制与可迁移配方。\n截图只能有限推断，不是源码恢复。'),
 ('break ★','组件极端场景观察','用真实组件展示空数据、长文本、多条目、窄容器与支持的异常状态；只记录实际看到的破损。','临时场景页与破损标注。\n不是持续回归套件；修复另行提出。'),
 ('variant ★','单个部件的方案探索','围绕结构、密度、强调等一个主要维度，默认制作三个可切换候选，在真实页面中比较取舍。','候选方案、选择器与取舍说明。\n用户选择后落地并清理临时方案。')]
for i,(name,title,work,out) in enumerate(flows):
    y=1754+i*125
    rect(80,y,2040,125,'card' if i%2==0 else 'soft',None,0)
    text(103,y+19,name,26,bold=True,mono=False,max_width=470)
    text(103,y+64,title,24,'muted')
    wrap(610,y+17,work,870,24,leading=36)
    wrap(1540,y+17,out,545,23,'ink',leading=35)
    line(80,y+125,2120,y+125)

section('04',2420,'什么场景用？从手头的问题选入口','以下为任务组合示例。审查、修复、解释、观察与探索有不同完成标准，不能互相替代。')
scenes=[
 ('已有页面需要打磨','better-interface → 对应领域修复','先找阻断操作的问题，再处理视觉细节。'),
 ('分支 / PR 即将合入','interface-review → 整体与领域规则','确认改动是否引入退化，并追踪影响。'),
 ('组件接入真实内容','break → 对应领域修复 → 重看场景','长名称、空列表、大量条目和窄容器。'),
 ('从零设计界面 / 比较方向','领域技能指导；部件探索用 variant','需要用途、内容与技术栈；不是整站引擎。'),
 ('研究参考网站的效果','explain-interface','提供 URL 与具体对象；学习实现方法。'),
 ('深色主题 / 表单可用性问题','better-colors + better-accessibility','测真实颜色对，核对焦点、标签与状态。')]
for i,(title,route,body) in enumerate(scenes):
    x=80+(i%3)*690;y=2511+(i//3)*150
    rect(x,y,660,136,'green' if i in (0,3) else 'card')
    text(x+22,y+15,title,25,bold=True,max_width=617)
    text(x+22,y+59,route,21,'ink',max_width=617)
    text(x+22,y+99,body,21,'muted',max_width=617)

section('05',2837,'如何用？给目标、选技能、看交付、做验证','技能是指导文件；真正的读取、修改、运行和浏览器观察，由宿主 AI 与可用工具完成。')
rect(80,2929,805,349,'dark','dark')
text(107,2949,'① 在支持技能的助手中安装',27,'#F3F8E8',True)
text(107,3000,'上游提供的安装示例',21,'#C8D5B7')
text(107,3038,'npx skills add jakubkrehel/skills',26,'#E4EFBC',mono=True,max_width=748)
line(107,3090,856,3090,'#506447')
text(107,3109,'② 提供上下文，明确想得到什么',27,'#F3F8E8',True)
wrap(107,3158,'页面 / 组件 / PR + 技术栈与约束 + 真实内容\n说清：只审查、实施修复、解释，还是比较方案。\n视觉与交互验证还需要可运行预览和相应工具。',745,23,'#CFDAC2',35)
rect(910,2929,1210,349)
text(935,2949,'③ 主动调用适合的入口，再核对结果',27,bold=True)
text(935,2998,'/better-interface 审查账户设置页，覆盖错误和窄屏状态。',24,'ink',mono=False,max_width=1160)
text(935,3040,'/break 检查 TagList 的空数据、长标签与窄容器，保留场景页。',24,'ink',max_width=1160)
text(935,3082,'入口写法随宿主而异；Claude 插件示例：/interfaces:better-interface',21,'muted',max_width=1160)
line(935,3132,2095,3132)
text(935,3150,'执行链路',21,'muted',True)
text(935,3190,'明确任务 → 加载规则 → 理解项目 → 执行与观察 → 报告 / 改动 → 验证',25,bold=True,max_width=1160)
text(935,3236,'核对范围、文件位置、前后行为与未验证项；报告中的 After 可能只是建议。',22,'muted',max_width=1160)

section('06',3320,'意义是什么？把经验变成可重复的判断与协作','预期价值来自流程设计，仍需在真实项目中验证；不能直接换算成效率、满意度或转化率的提升。')
values=[('对开发者','把“看起来不对”转成可定位、可修改的问题；\n优先处理共享变量和基础组件的根因。'),('对设计与产品协作','围绕真实页面比较方案，用效果与代价讨论；\n让交付要求从审美描述变为可检查条件。'),('对团队长期积累','统一常见问题的规则与表达，减少重复解释；\n可继续补充团队规范、检查工具与回归样例。')]
for i,(title,body) in enumerate(values):
    x=80+i*690
    rect(x,3410,660,153,'green')
    text(x+24,3429,title,27,bold=True)
    wrap(x+24,3477,body,615,23,leading=36)
rect(80,3595,2040,227,'sand')
text(108,3615,'边界与前提：能力成立到哪一步？',29,bold=True)
wrap(108,3671,'主要职责之外：产品定位与用户研究、后台接口与数据库、完整安全 / 性能工程、发布运维、商业效果实验。',1975,25,'ink',39)
wrap(108,3723,'需要另外确认：原生端适配、目标浏览器与辅助技术、工具可用性。安装不会自动优化页面，也不等于重新训练模型。',1975,25,'ink',39)
text(108,3775,'证据原则：未渲染不能宣称视觉通过；未运行不能宣称已验证；未做用户实验不能宣称转化改善。',23,'muted',max_width=1975)
line(80,3863,2120,3863)
text(80,3885,'来源 github.com/jakubkrehel/skills  ·  固定提交 267330e1adfc66a718fb65fa6918c1f06d0a689e  ·  MIT',22,'muted',max_width=2040)
text(80,3921,'研究整理 2026-09-29  /  11 个技能全部覆盖  /  能力与效果依据上游文档归纳，示例为研究构造，未运行上游技能实测。',22,'muted',max_width=2040)
text(80,3958,'本图展示的是工作方法与预期交付；模型的其他通用能力，不应全部归入这个技能库。',22,'muted',max_width=2040)

skill_names=[d[0] for d in domains]+[f[0].replace(' ★','') for f in flows]
expected=sorted(p.parent.name for p in (ROOT/'sources/skills').glob('*/SKILL.md'))
assert sorted(skill_names)==expected
assert all(0<=b['x'] and b['x']+b['width']<=W-30 and b['y']+b['size']*1.5<H for b in layout)
svg.append('</svg>')
assets=ROOT/'assets'
assets.mkdir(exist_ok=True)
(assets/'capability-map.svg').write_text('\n'.join(svg),encoding='utf-8')
image.save(assets/'capability-map.png',optimize=True)
report={'skills':skill_names,'svg_size':[W,H],'png_size':image.size,'text_blocks':len(layout),'source_commit':'267330e1adfc66a718fb65fa6918c1f06d0a689e','status':'generated; visual verification required'}
(assets/'capability-map-manifest.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
for target in [ROOT/'web',ROOT.parent.parent/'site/006-jakubkrehel-skills']:
    target.mkdir(exist_ok=True,parents=True)
    for name in ['capability-map.svg','capability-map.png']:
        shutil.copyfile(assets/name,target/name)
print(json.dumps(report,ensure_ascii=False,indent=2))
