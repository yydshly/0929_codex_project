"""Concise capability summary and personal adoption guidance for publication."""
from html import escape as e
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ONLINE = 'https://yydshly.github.io/0929_codex_project/007-ojo-design-skills/'
DESCRIPTION = 'OJO 是面向产品界面设计的 AI 技能包：一个核心 Skill 组织九份参考资料，把初步需求转成页面方向、视觉参数、组件状态、动效规范和审查建议。适合研究展示页、个人工具与后台、品牌官网及现有页面改版；配合宿主编码与测试能力，可进一步落地为可运行的前端页面。'

PERSONAL = [
    ('现在 · 开源研究展示', '资料已整理，但页面重点不清、章节样式不统一。', '用效率路线确定阅读顺序，用视觉参数统一标题、卡片、颜色与间距，用首屏模块说明项目用途。', '一套研究页规范：核心结论 → 能力与效果 → 场景 → 依据；方便后续编号项目复用。', '读者能找到“是什么、何时用、能得到什么”，手机上也能读清楚。', ['core', 'visual-tokens', 'hero-enrichment', 'design-audit']),
    ('以后 · 个人工具与业务后台', '要做收藏管理、任务工具，或有初步业务流程的补货后台。', '先提供用户和核心操作，再细化导航、列表、筛选、表单与反馈；由开发工具实现。', '页面结构、组件与状态规范，让加载、空白、错误和成功状态都有设计依据。', '关键任务能完成；业务规则、权限、数据接口仍由产品与工程工作补齐。', ['core', 'component-recipe', 'icon-guidelines', 'motion-system']),
    ('需要对外介绍时 · 产品与项目官网', '功能可以说明白，希望首屏更有辨识度、能体现产品气质。', '根据受众选择效率或品牌路线，推导视觉方向、字体色彩、真实素材和行动入口。', '有明确主题的首屏与品牌规则，帮助访客理解价值和下一步操作。', '内容真实、行动明确、移动端可用；转化提升需要另行验证。', ['material-metaphor', 'visual-tokens', 'hero-enrichment']),
    ('已有页面时 · 改版与交付检查', 'AI 生成的页面有模板感、图标混搭、反馈缺失，或修改后越来越不一致。', '提交截图和代码，要求逐处指出问题、说明理由与优先级，再修复和运行验证。', '可执行的问题清单与调整后的设计规范，减少只凭“感觉不好看”反复修改。', '问题有位置与修复依据；键盘操作、手机布局和真实交互经过检查。', ['anti-patterns', 'design-audit', 'icon-guidelines', 'motion-system']),
    ('长期 · 形成自己的设计方法', '研究项目和工具越来越多，希望保留成功经验并稳定复用。', '把确认过的参数、组件状态、参考选择与检查项保存到项目；结合自己的约束修订规则。', '个人设计基线与交接模板，让后续页面继承已有决定，减少重新解释。', '观察跨页面一致性、重复决策与返工是否减少；不必每次启用全部参考模块。', ['visual-tokens', 'component-recipe', 'component-libraries', 'design-audit']),
]

def generate_publication(modules):
    names = {m['id']: m['title'] for m in modules}
    cards = [
        ('这个库的能力', '从产品任务和受众出发，选择效率或品牌路线，组织视觉、组件、动效、素材与审查工作。'),
        ('可以实现的效果', '形成有依据的页面方向、统一的视觉参数、完整的组件反馈和可执行的修复清单；配合编码工具落地界面。'),
        ('适合服务的方向', '工具与 SaaS 后台强调清晰和任务效率；品牌、电商与创意页面强调辨识度和体验表达。'),
        ('对你的意义', '把“帮我做得好看”变成可讨论、可交接、可复用的规则，服务现在的研究展示和以后的工具开发。'),
    ]
    card_html = ''.join(f'<article><h3>{e(a)}</h3><p>{e(b)}</p></article>' for a,b in cards)
    rows = ''.join(f'<tr><th scope="row"><a href="#module-{m["id"]}">{e(m["title"])}</a><small>{"独立 Skill" if m["kind"]=="skill" else "参考模块"} · {e(m["name"])}</small></th><td>{e(m["summary"])}</td><td>{e(m["outputs"])}</td><td>{e(m["scenes"][0])}</td></tr>' for m in modules)
    brief = f'''<section id="brief" class="section"><div class="section-heading"><div><span class="overline">先读摘要</span><h2>把初步产品需求，转成具体的界面设计决定。</h2></div><p>一个核心 Skill 串联九份参考资料；可实现效果取决于上下文、宿主工具与实际验证。</p></div><p class="positioning">{e(DESCRIPTION)}</p><div class="brief-grid">{card_html}</div><p class="scope-note"><strong>最合适的使用时机：</strong>你已经知道为谁做、要完成什么任务，开始考虑页面怎么组织、长什么样、交互如何反馈。它也可用于现有页面的定向改进。商业验证、完整需求研究、后端和部署需由其他方法与工具完成。</p><details class="capability-table"><summary>展开能力速查：每项能做什么、产出什么、何时使用（全部 10 项）</summary><p>第 1 项是唯一独立 Skill；其余 9 项是它按需读取的知识模块。点击名称查看详细能力、效果和来源。</p><div class="table-scroll" role="region" aria-label="能力、产物与场景速查表" tabindex="0"><table><thead><tr><th scope="col">Skill / 参考模块</th><th scope="col">能力</th><th scope="col">可交付的效果与产物</th><th scope="col">典型使用场景</th></tr></thead><tbody>{rows}</tbody></table></div></details></section>'''
    personal_cards = []
    md = ['# OJO Design Skills · 能力摘要与个人使用建议', '', DESCRIPTION, '', '## 先记住四点', '']
    for a,b in cards: md += [f'### {a}', '', b, '']
    md += ['## 全部能力与效果速查', '', '| Skill / 参考模块 | 能力 | 可交付产物 | 使用场景 |', '| --- | --- | --- | --- |']
    for m in modules: md += [f"| {m['title']} · `{m['name']}` | {m['summary']} | {m['outputs']} | {m['scenes'][0]} |"]
    md += ['', '只有第一项是独立 Skill；其余九项是参考资料。完整预期效果与边界见 [逐项分析](CAPABILITIES.md)。', '', '## 对你：什么时候用、为什么用', '']
    for title, trigger, use, result, check, ids in PERSONAL:
        chips = ''.join(f'<a class="chip" href="#module-{mid}">{e(names[mid])}</a>' for mid in ids)
        personal_cards.append(f'<article class="scenario personal-card"><span class="overline">你的使用场景</span><h3>{e(title)}</h3><p>{e(trigger)}</p><dl><dt>怎么用</dt><dd>{e(use)}</dd><dt>能得到什么</dt><dd>{e(result)}</dd><dt>如何判断价值</dt><dd>{e(check)}</dd></dl><div class="chips">{chips}</div></article>')
        md += [f'### {title}', '', '**触发时机：** '+trigger, '', '**怎么用：** '+use, '', '**预期产物：** '+result, '', '**如何判断价值：** '+check, '']
    personal = f'''<section id="personal" class="section"><div class="section-heading"><div><span class="overline">对你有什么用</span><h2>从现在的研究网页，到以后的个人工具。</h2></div><p>基于你正在整理开源项目并制作展示网页的工作；未来场景是采用建议，不是已确认的开发计划。</p></div><div class="scenario-grid">{''.join(personal_cards)}</div><p class="scope-note"><strong>建议的采用顺序：</strong>先用于一个真实页面，检查设计决定是否更清晰、反馈是否更完整，再把成功的规范复用到后续项目。只查资料或梳理业务时无需硬套整套设计流程。</p></section>'''
    md += ['## 如何开始', '', '保留完整 Skill 目录与 references → 提供用户、任务、页面和约束 → 点名 app-ui-ux-best-practices → 确定方向 → 形成规范或交由宿主实现 → 审查并实际验证。', '', '[六步使用指南与示例请求](GUIDE.md)', '', '## 摘要图', '', '沿用本次讨论已经确认的总览图，未另换图片。', '', '![OJO 完整能力总览](assets/capability-summary.png)', '', f'[在线网页]({ONLINE}) · [可缩放摘要图]({ONLINE}map.html)', '', '固定版本文档研究；没有安装或运行上游 Skill。上述产物与收益为基于文档的预期，不代表已测得体验、效率或转化提升。']
    (ROOT/'SUMMARY.md').write_text('\n'.join(md)+'\n', encoding='utf-8')
    return brief, personal
