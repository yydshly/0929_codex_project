"""Build the single-sheet capability map from the versioned research data."""
from pathlib import Path
import json
from xml.sax.saxutils import escape
from PIL import ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'assets'
SITE = ROOT.parents[1] / 'site' / '002-agent-skills'
SHA = '2686b620fc1fed2e8f60c704839c766b8594c6b6'
FONT = 'C:/Windows/Fonts/msyh.ttc'
BOLD = 'C:/Windows/Fonts/msyhbd.ttc'
W, M, GAP, COLS = 4000, 64, 24, 5
CW = (W - M * 2 - GAP * (COLS - 1)) / COLS
INK, MUTED, LINE, BG = '#24392f', '#526557', '#d8e0d2', '#f3f5ee'
PHASE_COLORS = ['#66796b', '#af653d', '#897037', '#446f87', '#437d73', '#77608b', '#4f7450']
catalog = json.loads((ROOT / 'skills-catalog.json').read_text(encoding='utf-8-sig'))
details = json.loads((ROOT / 'capability-details.json').read_text(encoding='utf-8-sig'))
insights = json.loads((ROOT / 'full-map-insights.json').read_text(encoding='utf-8-sig'))
assert len(catalog) == len(details) == len(insights) == 25
assert set(s['name'] for s in catalog) == set(details) == set(insights)
phases = list(dict.fromkeys(s['phase'] for s in catalog))
fonts = {}
elements = []
layout = []

def font(size, bold=False):
    key = (size, bold)
    if key not in fonts:
        fonts[key] = ImageFont.truetype(BOLD if bold else FONT, size)
    return fonts[key]

def wrap(text, size, width, bold=False):
    result = []
    for paragraph in str(text).split('\n'):
        line = ''
        for ch in paragraph:
            if font(size, bold).getlength(line + ch) > width and line:
                result.append(line)
                line = ch
            else:
                line += ch
        result.append(line)
    return result

def rect(out, x, y, w, h, fill, radius=0, stroke=None):
    border = f' stroke="{stroke}" stroke-width="1.5"' if stroke else ''
    out.append(f'<rect x="{x:.1f}" y="{y:.1f}" width="{w:.1f}" height="{h:.1f}" rx="{radius}" fill="{fill}"{border}/>')

def text(out, value, x, y, size=23, color=INK, bold=False):
    out.append(f'<text x="{x:.1f}" y="{y:.1f}" font-size="{size}" font-weight="{700 if bold else 400}" fill="{color}">{escape(str(value))}</text>')

def para(out, value, x, y, width, size=23, color=INK, bold=False, leading=None):
    leading = leading or round(size * 1.52)
    lines = wrap(value, size, width, bold)
    for line in lines:
        text(out, line, x, y + size, size, color, bold)
        y += leading
    return y

def rule(out, x, y, width, color=LINE):
    out.append(f'<path d="M{x:.1f} {y:.1f}h{width:.1f}" stroke="{color}" stroke-width="1.5"/>')

def section(out, label, value, x, y, width, color=MUTED, body_size=23):
    text(out, label, x, y + 18, 18, color, True)
    return para(out, value, x, y + 29, width, body_size) + 14

def card(item, number, x, y, height=None):
    body = []
    d, i = details[item['name']], insights[item['name']]
    color = PHASE_COLORS[phases.index(item['phase'])]
    xx, width = x + 28, CW - 56
    yy = y + 29
    text(body, f'{number:02d}', xx, yy + 24, 26, color, True)
    text(body, item['phase'], xx + 55, yy + 22, 18, color)
    priority_width = font(17).getlength(i['priority']) + 22
    rect(body, x + CW - priority_width - 26, yy + 2, priority_width, 30, '#edf2e5', 5)
    text(body, i['priority'], x + CW - priority_width - 15, yy + 23, 17, '#5c7150')
    yy += 52
    text(body, item['title'], xx, yy + 30, 30, INK, True)
    yy += 45
    text(body, item['name'], xx, yy + 19, 19, '#6e7c6b')
    yy += 42
    yy = section(body, '能力范围', d['summary'], xx, yy, width, color)
    text(body, '细化分析 · 具体工作', xx, yy + 18, 18, color, True)
    yy += 31
    for n, ability in enumerate(d['capabilities'], 1):
        text(body, str(n), xx, yy + 23, 19, color, True)
        yy = para(body, ability, xx + 25, yy, width - 25, 23, INK) + 6
    yy += 9
    yy = section(body, '使用场景', item['scenario'], xx, yy, width, color)
    yy = section(body, '目的效果 · 预期', i['effect'], xx, yy, width, color)
    yy = section(body, '可检查的交付物', '；'.join(d['deliverables']) + '。', xx, yy, width, color)
    yy = section(body, '能力边界', item['limit'], xx, yy, width, color, 21)
    rule(body, xx, yy, width)
    yy += 19
    yy = section(body, '可扩展方向 · 分析建议', i['extension'], xx, yy, width, '#a26038', 22)
    yy = section(body, '对你的意义 · 结合当前研究工作', i['meaning'], xx, yy, width, '#a26038', 22)
    natural = yy - y + 13
    if height is None:
        return natural
    assert natural <= height + .1, (item['name'], natural, height)
    out = [f'<g id="skill-{number:02d}" data-skill="{item["name"]}"><title>{escape(item["title"])} / {item["name"]}</title>']
    rect(out, x, y, CW, height, '#ffffff', 16, LINE)
    rect(out, x + 20, y, CW - 40, 5, color, 2)
    out.extend(body)
    out.append('</g>')
    return out, natural

# Header: positioning, mechanism and all seven stage groups.
rect(elements, 0, 0, W, 13, INK)
text(elements, 'OPEN SOURCE RESEARCH  /  002  /  SINGLE-SHEET MAP', M, 68, 22, MUTED)
text(elements, 'Agent Skills 全量能力图', M, 175, 86, INK, True)
text(elements, '25 个技能 × 能力范围 × 细化分析 × 使用场景 × 目的效果 × 扩展方向 × 个人价值', M + 3, 233, 29, MUTED)
text(elements, '固定版本 2686b620 · 2026-09-29', W - 733, 68, 23, MUTED)
text(elements, '研究对象：addyosmani/agent-skills', W - 733, 106, 23, MUTED)

rect(elements, M, 274, W - M * 2, 158, '#e5ecdc', 14)
text(elements, '整体目标', M + 27, 313, 22, '#526c42', True)
text(elements, '把工程经验变成 AI 可按需读取、执行和核验的研发流程，让需求、代码与交付有共同依据。', M + 192, 313, 26, INK, True)
text(elements, '工作机制', M + 27, 362, 22, '#526c42', True)
text(elements, '任务识别 → 选择技能 → 读取流程与资料 → 调用已有工具 → 检查证据 → 继续、修复或停止', M + 192, 362, 25, INK)
text(elements, '阅读说明', M + 27, 406, 22, '#526c42', True)
text(elements, '25 项全部展开，按编号从左到右阅读；效果为预期，扩展与个人意义为分析建议，并非实测提升。', M + 192, 406, 23, MUTED)

stage_y, stage_h = 459, 91
stage_w = (W - M * 2 - 18 * 6) / 7
for idx, phase in enumerate(phases):
    sx = M + idx * (stage_w + 18)
    rect(elements, sx, stage_y, stage_w, stage_h, '#ffffff', 9, LINE)
    rect(elements, sx, stage_y, 6, stage_h, PHASE_COLORS[idx], 3)
    count = sum(1 for s in catalog if s['phase'] == phase)
    text(elements, f'{idx + 1:02d}  {phase}', sx + 22, stage_y + 36, 24, PHASE_COLORS[idx], True)
    indices = [str(n + 1).zfill(2) for n, s in enumerate(catalog) if s['phase'] == phase]
    scope = indices[0] if count == 1 else indices[0] + '—' + indices[-1]
    text(elements, f'{count} 项技能  /  编号 {scope}', sx + 22, stage_y + 69, 20, MUTED)

current_y = 581
for row in range(5):
    items = catalog[row * COLS:(row + 1) * COLS]
    height = max(card(item, row * COLS + col + 1, 0, 0) for col, item in enumerate(items))
    height = int(height + 10)
    for col, item in enumerate(items):
        x = M + col * (CW + GAP)
        number = row * COLS + col + 1
        content, natural = card(item, number, x, current_y, height)
        elements.extend(content)
        layout.append({'id':item['name'], 'title':item['title'], 'phase':item['phase'], 'x':x, 'y':current_y, 'width':CW, 'height':height, 'contentBottom':current_y + natural - 13})
    current_y += height + 25

# Compact, fully expanded synthesis, sharing the same sheet.
current_y += 25
text(elements, '把单项技能放回整个系统', M, current_y + 40, 40, INK, True)
text(elements, '已有组成与能力边界 → 可扩展方向 → 对你的实际意义', M, current_y + 80, 24, MUTED)
current_y += 115
footer_gap = 25
footer_width = (W - M * 2 - footer_gap * 2) / 3
footer_specs = [
    ('A / 库的组成与边界', '#446f87', [
        ('核心与入口', '25 个 Skill 定义“如何做”；9 个命令组织入口；4 个专业角色提供审查视角。它们不是同一类能力，也不是一一对应。'),
        ('9 个命令', '/spec · /plan · /build · /test · /constraints · /review · /webperf · /code-simplify · /ship'),
        ('4 个角色', '代码审查、测试、安全、网页性能；负责从不同专业视角检查同一对象。'),
        ('7 类共享检查材料', '完成定义、测试、安全、性能、可访问性、可观测性、编排模式。'),
        ('实际生效条件', '需要宿主模型、工具、项目资料和权限。Skill 不修改模型权重，不自动提供外部工具，也不保证每次正确执行。硬性质量关卡需要落实到检查脚本和 CI。')
    ]),
    ('B / 整体扩展路线 · 建议', '#a26038', [
        ('个人研究流程', '把版本、能力、证据、场景、限制和个人价值固化为开源研究模板，并连接项目索引。'),
        ('团队与领域流程', '加入真实架构、行业约束和历史事故经验；按任务规模保留必要步骤，避免重复审批与文档膨胀。'),
        ('工具与证据闭环', '连接工单、测试、浏览器、日志与监控；将完成条件关联到可以复查的输出。'),
        ('评测与持续改进', '固定模型、版本和任务，对比有无技能的正确率、耗时、成本和人工修正量。触发正确不等于结果正确。'),
        ('可移植分发', '补齐技能引用的共享资料，声明工具与版本依赖。单独安装可能遗漏仓库根目录的共享检查表。')
    ]),
    ('C / 对你的意义 · 按工作阶段', '#4f7450', [
        ('现在：研究与知识积累', '优先借鉴 09 上下文、23 决策记录；目标不明确时用 02 访谈、03 细化；06 拆解帮助安排研究，10 借鉴版本化来源意识。'),
        ('下一步：把研究做成工具', '04 规格 + 06 计划 + 07 增量实现；12 界面 + 08 测试 + 14 浏览器验证，得到可实际操作、可检查的演示。'),
        ('持续维护：质量与恢复', '15 排错 + 16 审查 + 20 版本记录；遇到真实用户、数据和上线需求，再加入安全、性能、监控与发布能力。'),
        ('迁移边界', '该库以软件研发为主。研究场景中的部分收益来自方法借鉴，不能把原技能直接宣称为通用研究、办公或业务专家。'),
        ('判断依据', '结合你当前研究开源项目、保存独立子项目、制作网页展示的工作；未假设职业、团队规模或生产环境。')
    ])
]
footer_contents, footer_heights = [], []
for col, (heading, color, blocks) in enumerate(footer_specs):
    fx, fy = M + col * (footer_width + footer_gap), current_y
    content = []
    text(content, heading, fx + 30, fy + 49, 30, color, True)
    cursor = fy + 78
    for label, value in blocks:
        cursor = section(content, label, value, fx + 30, cursor, footer_width - 60, color, 24)
        cursor += 5
    footer_contents.append((fx, content))
    footer_heights.append(cursor - fy + 13)
footer_h = max(footer_heights)
for fx, content in footer_contents:
    rect(elements, fx, current_y, footer_width, footer_h, '#ffffff', 14, LINE)
    elements.extend(content)
current_y += footer_h + 40
rule(elements, M, current_y, W - M * 2)
text(elements, '来源：github.com/addyosmani/agent-skills · 固定提交 ' + SHA, M, current_y + 39, 22, MUTED)
text(elements, '能力依据：25 个 SKILL.md、命令与角色定义、采用指南和评测说明。所有扩展方向、个人价值和预期收益为本次分析。', M, current_y + 76, 22, MUTED)
text(elements, '文档核验已完成；未逐项运行上游技能，未量化效果提升。完整来源与研究记录保存在 002-agent-skills 子项目。', M, current_y + 113, 22, MUTED)
H = int(current_y + 150)
svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-labelledby="map-title map-description">
<title id="map-title">Agent Skills 全量能力图：25 项技能</title>
<desc id="map-description">一张完整展开的研究图，逐项包含能力范围、三条细化分析、使用场景、预期效果、交付物、能力边界、扩展方向和对用户当前工作的意义。底部汇总库的组成、整体扩展路线和个人价值。研究日期 2026-09-29。</desc>
<style>text{{font-family:'Microsoft YaHei','Noto Sans CJK SC',sans-serif}}</style>
<rect width="100%" height="100%" fill="{BG}"/>
{''.join(elements)}
</svg>'''
OUT.mkdir(exist_ok=True)
SITE.mkdir(parents=True, exist_ok=True)
(OUT / 'agent-skills-full-map.svg').write_text(svg, encoding='utf-8')
(ROOT / 'web' / 'agent-skills-full-map.svg').write_text(svg, encoding='utf-8')
(ROOT / 'web' / 'full-map-layout.js').write_text('window.FULL_MAP_LAYOUT = ' + json.dumps({'width':W,'height':H,'skills':layout}, ensure_ascii=False) + ';', encoding='utf-8')
(OUT / 'full-map-layout.json').write_text(json.dumps({'width':W,'height':H,'skills':layout}, ensure_ascii=False, indent=2), encoding='utf-8')
(SITE / 'agent-skills-full-map.svg').write_text(svg, encoding='utf-8')
(SITE / 'full-map-layout.js').write_bytes((ROOT / 'web' / 'full-map-layout.js').read_bytes())
print(json.dumps({'skills':len(layout),'width':W,'height':H,'svg_bytes':len(svg.encode('utf-8')),'rows':5}, ensure_ascii=False))
