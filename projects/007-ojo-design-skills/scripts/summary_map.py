"""Draw an original, text-searchable SVG and matching high-resolution PNG."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import html
import json

ROOT = Path(__file__).resolve().parents[1]
WIDTH, HEIGHT = 2000, 3320
INK, MUTED, PAPER, LINE = '#183938', '#526762', '#f5f6ef', '#d5ddd6'
GREEN, LIME, SOFT, WHITE = '#276053', '#d9efba', '#eaf0e9', '#ffffff'
FONT = 'C:/Windows/Fonts/msyh.ttc'
BOLD = 'C:/Windows/Fonts/msyhbd.ttc'

class Canvas:
    def __init__(self):
        self.image = Image.new('RGB', (WIDTH, HEIGHT), PAPER)
        self.draw = ImageDraw.Draw(self.image)
        self.svg = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{WIDTH}" height="{HEIGHT}" viewBox="0 0 {WIDTH} {HEIGHT}" role="img" aria-labelledby="title desc">',
                    '<title id="title">OJO Design Skills 能力总览</title>',
                    '<desc id="desc">面向产品界面设计与前端交接的一个核心 Skill 和九个参考模块；包含产品开发覆盖、两条路线、模块能力与场景、使用步骤、案例、价值和边界。</desc>',
                    f'<rect width="{WIDTH}" height="{HEIGHT}" fill="{PAPER}"/>']
        self.bounds = []
    def rect(self, x, y, w, h, fill, stroke=None, radius=0):
        self.draw.rounded_rectangle((x,y,x+w,y+h),radius,fill=fill,outline=stroke,width=1)
        self.svg.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{radius}" fill="{fill}"'+(f' stroke="{stroke}"' if stroke else '')+'/>')
    def line(self, x1, y1, x2, y2, color=LINE, width=2):
        self.draw.line((x1,y1,x2,y2), fill=color, width=width)
        self.svg.append(f'<path d="M{x1} {y1} L{x2} {y2}" stroke="{color}" stroke-width="{width}" fill="none"/>')
    def text(self, text, x, y, size=27, color=INK, bold=False):
        font=ImageFont.truetype(BOLD if bold else FONT,size)
        self.draw.text((x,y),text,font=font,fill=color,anchor='lt')
        self.svg.append(f'<text x="{x}" y="{y}" dominant-baseline="text-before-edge" font-family="Microsoft YaHei, Noto Sans CJK SC, sans-serif" font-size="{size}" font-weight="{700 if bold else 400}" fill="{color}">{html.escape(text)}</text>')
        bbox=self.draw.textbbox((x,y),text,font=font,anchor='lt')
        if bbox[2] > WIDTH-25 or bbox[3] > HEIGHT-15:
            raise ValueError(f'Text outside canvas: {text}')
        self.bounds.append(bbox)
    def paragraph(self, text, x, y, width, size=27, color=MUTED, bold=False, leading=1.48, max_lines=None):
        font=ImageFont.truetype(BOLD if bold else FONT,size)
        lines=[]
        for part in text.split('\n'):
            current=''
            for char in part:
                if current and self.draw.textlength(current+char,font=font)>width:
                    lines.append(current)
                    current=char
                else: current+=char
            lines.append(current)
        if max_lines and len(lines)>max_lines:
            raise ValueError(f'{len(lines)} lines exceeds {max_lines}: {text}')
        for i,line in enumerate(lines): self.text(line,x,y+int(i*size*leading),size,color,bold)
        return len(lines)*size*leading
    def label(self, number, title, y, note=''):
        self.text(number,80,y,25,GREEN,True)
        self.text(title,137,y-4,35,INK,True)
        if note:self.text(note,1030,y+4,23,MUTED)

def build_summary():
    data=json.loads((ROOT/'overview.json').read_text(encoding='utf-8'))
    detail=json.loads((ROOT/'data.json').read_text(encoding='utf-8'))
    module_titles={x['name']:x['title'] for x in detail['modules']}
    manifest=json.loads((ROOT/'sources-manifest.json').read_text(encoding='utf-8'))
    c=Canvas()
    c.rect(0,0,WIDTH,242,INK)
    c.text('OJO DESIGN SKILLS / 007',80,35,24,LIME,True)
    c.text('从产品理解，到可交接的界面设计',80,82,57,WHITE,True)
    c.text('能力是什么 · 服务什么方向 · 包含哪些 Skill · 何时使用 · 如何使用 · 有什么意义',80,168,26,'#d8e6dc')
    c.label('01','产品开发中的位置',285,'定位：AI 可读取的设计方法、配方与审查清单')
    scope_titles=['需求与用户','页面与导航','品牌与视觉','组件与交互','前端开发交接','后端与上线']
    scope_detail=['为设计判断方向','布局、信息与流程','颜色、字体与素材','状态、反馈与动效','参数、配方与审查','需其他工程能力']
    for i,item in enumerate(data['coverage']):
        x=80+i*310
        fill=LIME if item['type']=='core' else SOFT if item['type']!='external' else '#eae6df'
        c.rect(x,350,290,125,fill,radius=6)
        c.text(scope_titles[i],x+18,370,28,INK,True)
        c.text(item['level'],x+18,414,22,GREEN)
        c.text(scope_detail[i],x+18,447,20,MUTED)
    c.text('适用阶段：需求已有初步轮廓，开始设计页面体验；也适合改版、规范沉淀与开发交接。',80,502,27)
    c.text('完整用户研究、商业验证、业务算法、数据库与运营增长，需要另行完成。',80,543,24,MUTED)

    c.label('02','服务方向与典型场景',610)
    for i,d in enumerate(data['directions']):
        x=80+i*945
        c.rect(x,671,915,172,WHITE,LINE,5)
        c.text(d['title'],x+24,690,31,GREEN,True)
        c.paragraph(d['products'],x+24,739,855,26,INK,max_lines=1)
        short='清晰、可预测、低认知负担；参考成熟设计语言。' if i==0 else '品牌与受众 → 材质 / 角色 / 叙事 / 文化方法。'
        c.text(short,x+24,785,25,MUTED)
    c.text('跨路线常见任务：新产品原型 / 现有 AI 页面改版 / 多页面统一 / 设计规范与开发交接 / 交付前审查',80,863,25,MUTED)

    c.label('03','包含哪些 Skill？各自做什么？',928,'准确计数：1 个独立 Skill + 9 份参考文档')
    c.rect(80,990,1840,136,INK,radius=5)
    c.text('唯一独立 Skill',108,1013,22,LIME,True)
    c.text('app-ui-ux-best-practices',360,1009,35,WHITE,True)
    c.text('流程总控：理解任务 → 研究参考 → 确定方向 → 参数与组件 → 动效与布局 → 规范与审查',108,1071,26,'#d8e6dc')
    c.line(1000,1126,1000,1150,GREEN,3)
    c.text('按需读取以下 9 个参考模块（没有独立 Skill 入口）',590,1159,25,GREEN,True)
    cols=[105,560,1120,1640]
    y0=1210
    c.rect(80,y0,1840,54,SOFT)
    for title,x in zip(['参考模块','能力 / 做什么','典型使用场景','预期产物'],cols):c.text(title,x,y0+13,25,INK,True)
    for i,m in enumerate(data['mapModules']):
        y=y0+54+i*98
        c.rect(80,y,1840,98,WHITE if i%2==0 else '#f0f3ed')
        c.text(f'{i+1:02}  '+m['file'],cols[0],y+20,24,INK,True)
        c.text(module_titles[m['file']],cols[0]+42,y+57,22,MUTED)
        c.paragraph(m['ability'],cols[1],y+18,520,27,INK,max_lines=2)
        c.paragraph(m['scene'],cols[2],y+18,470,25,MUTED,max_lines=2)
        c.paragraph(m['output'],cols[3],y+18,248,25,GREEN,max_lines=2)
    c.text('状态：默认 / 悬停 / 按下 / 聚焦 / 禁用 / 加载 / 成功 / 错误。按组件职责说明适用性。',80,2170,24,MUTED)
    c.text('六档首屏：0 无 Hero · A 文字 · B 单图 · C 编辑式 · D 动态 · E 沉浸；复杂程度应由任务决定。',80,2207,24,MUTED)

    c.label('04','如何使用：从上下文到验证',2270,'宿主提供搜索、读图、编码与浏览器能力')
    step_short=[('接入完整技能包','核心文件和参考资料\n交给支持 Skill 的工具'),('给出产品上下文','用户、任务、页面、参考\n品牌、平台与现有约束'),('明确调用与路线','点名核心 Skill\n判断效率或品牌路线'),('确定设计方向','新设计先确认候选\n点评或已有方向可简化'),('输出规范与交接','参数、组件、动效、素材\n需要实现时由宿主写代码'),('审查并实际验证','清单指出问题与优先级\n用真实页面与操作复核')]
    for i,(title,body) in enumerate(step_short):
        x=80+i*310
        c.line(x,2330,x+288,2330,GREEN,4)
        c.text(f'{i+1:02}',x,2347,22,GREEN,True)
        c.text(title,x,2382,26,INK,True)
        c.paragraph(body,x,2428,286,23,MUTED,max_lines=3)
    c.text('执行原理：Skill 文档与参考知识 → 模型解读流程 → 宿主工具执行 → 规范 / 页面 → 审查与验证',80,2535,26,GREEN,True)

    c.label('05','一个具体例子：门店补货系统',2610)
    c.rect(80,2672,1840,155,WHITE,LINE,5)
    c.text('需求',105,2693,24,GREEN,True)
    c.text('店长发现缺货、筛选商品并提交补货单。',185,2693,26)
    c.text('能帮助',105,2735,24,GREEN,True)
    c.text('信息优先级、筛选与表单层级、按钮状态、颜色与排版、反馈与审查。',215,2735,26)
    c.text('另行完成',105,2777,24,MUTED,True)
    c.text('补货算法、库存同步、接口权限、后端服务和发布；设计规范不等于业务已经实现。',239,2777,25,MUTED)

    c.label('06','意义：让设计决定更清晰、更一致、更可复用',2885)
    values=[('产品负责人','抽象期望 → 可讨论的设计决定'),('设计与前端','参数和状态统一 → 交接更完整'),('独立开发者','步骤与清单 → 有方法地做界面'),('团队维护','一次设计 → 后续可复用的规范')]
    for i,(title,body) in enumerate(values):
        x=80+i*470
        c.text(title,x,2950,28,INK,True)
        c.paragraph(body,x,2997,435,25,MUTED,max_lines=2)
    c.line(80,3072,1920,3072)
    c.text('采用边界',80,3096,26,GREEN,True)
    c.text('文本规则依赖模型遵循；存在审美偏好、规则冲突与未随包提供的外部引用。',230,3096,25,MUTED)
    c.text('意义为预期价值，未实测效率或转化提升。来源核验与研究展示不等于上游 Skill 运行验证。',80,3140,25,MUTED)
    c.text('来源：touchine-ojo/OJO-Design-Skills · MIT · 固定提交 '+manifest['commit'][:12],80,3210,22,MUTED)
    c.text('2026-09-29 · 中文研究整理 · 完整说明与原文依据见 007 研究页',80,3249,22,MUTED)
    c.svg.append('</svg>')
    assets=ROOT/'assets'
    assets.mkdir(exist_ok=True)
    c.image.save(assets/'capability-summary.png',optimize=True)
    (assets/'capability-summary.svg').write_text('\n'.join(c.svg),encoding='utf-8')
    return {'width':WIDTH,'height':HEIGHT,'text_blocks':len(c.bounds),'module_rows':len(data['mapModules'])}

if __name__=='__main__':
    print(build_summary())
