// Editorial synthesis of the pinned skill documents. Routes are guidance, not execution.
export const taskRoutes = [
  {id:'polish',label:'已有页面，想检查并优化',lead:'从页面或一条完整流程开始。',skills:['better-interface'],input:'提供项目代码、页面范围和可用预览；说明只要审查，还是需要落实修复。',result:'先得到按影响排序的报告。明确要求修复后，由对应领域规则指导代码修改与复验。',limit:'报告只覆盖实际检查的页面与状态；视觉判断需要渲染证据。'},
  {id:'change',label:'有分支或 PR，想检查退化',lead:'先确认这次改了什么，再检查界面影响。',skills:['interface-review','better-interface'],input:'提供 Git 仓库与分支、PR 或具体版本范围，保证基线可以访问。',result:'得到新增问题、退化和历史问题的分类报告，附受影响页面与代码位置。',limit:'这是只读审查流程。业务正确性、安全和全面性能审查要由其他开发流程承担。'},
  {id:'new-ui',label:'从零设计一个组件或页面',lead:'可以参与新界面建设，具体设计与实现仍需项目目标。',skills:['better-layout','better-colors','better-typography','better-writing','better-accessibility','better-ui'],input:'先说明页面用途、内容、操作、已有设计系统和技术栈。没有方案方向时，可主动调用 variant 比较一个部件。',result:'领域规则可指导布局、配色、排版、文案和交互实现；模型与项目工具负责写出代码。',limit:'这个库没有覆盖整站需求、所有页面、后台接口、数据模型和部署的一键交付流程。'},
  {id:'stress',label:'有组件，想验证极端内容',lead:'把同一个真实组件放进多种输入与容器条件。',skills:['break'],input:'提供一个组件及属性，使用测试数据展示它实际支持的状态。',result:'得到临时场景页，以及已观察到的溢出、遮挡、空状态等问题。',limit:'没有实际观察就不能宣称通过；它不自动变成持续回归测试或完整性能压测。'},
  {id:'options',label:'有一个部件，想比较设计方案',lead:'沿一个主要维度，比较有实质差异的候选。',skills:['variant'],input:'提供一个具体部件、所在页面、真实数据，以及想比较的结构、密度或强调方式。',result:'默认三个可切换的全尺寸候选与取舍说明；你选定后再落地并清理临时方案。',limit:'多个方案不是 A/B 测试，不能据此证明哪个方案转化率最高。'},
  {id:'reference',label:'有网页或截图，想理解实现',lead:'有网址能查实现，有截图只能做有限推断。',skills:['explain-interface'],input:'提供 URL 或截图，明确研究整站前端，还是一个渐变、动画或组件效果。',result:'得到实现层次、关键参数和证据等级，以及可迁移的文字配方。',limit:'只看截图无法确定框架、源码、断点或未展示的交互；默认交付不是整站复刻。'},
  {id:'product',label:'只有想法，想交付完整产品',lead:'先补齐产品与工程流程，再把它用于界面环节。',skills:[],input:'先用需求梳理、架构、前后端开发和测试流程确定业务规则与可交付范围。',result:'当页面和交互任务明确后，再引入领域技能指导实现，用审查与场景测试检查界面质量。',limit:'本库不以用户研究、商业策略、数据库、接口、认证、运维和整站部署为主要职责。'},
  {id:'native',label:'要做 iOS、Android 或桌面原生界面',lead:'可以借用设计原则，平台实现需要重新适配。',skills:['better-layout','better-writing'],input:'需要额外提供原生平台规范、组件行为、实现方式与平台验证工具。',result:'分组、层级、清晰文案等经验有参考价值；适配后才能用于具体平台。',limit:'大量配方基于 HTML、CSS、DOM 和浏览器。不能直接把 Web 配方当成完整原生开发技能。'}
];

export const behavior = {
  'better-interface':['整体审查入口','默认报告；要求修复后再改代码'],
  'interface-review':['变更审查入口','只读检查分支或 PR'],
  'better-ui':['领域规则','指导细节实现，也可单独审查'],
  'better-typography':['领域规则','指导排版实现，也可单独审查'],
  'better-colors':['领域规则','构建颜色系统；审查时默认报告问题'],
  'better-accessibility':['领域规则','指导可用性修复；须验证实际操作'],
  'better-layout':['领域规则','指导新布局与现有布局改进'],
  'better-writing':['领域规则','改写界面文案并核对真实操作'],
  'explain-interface':['参考解析','主要交付机制解释'],
  'break':['场景观察','创建临时场景页；修复另行提出'],
  'variant':['方案探索','创建候选；选择后落实正式方案']
};

export function renderScope({inline,skillLinks,upstream}) {
  const scope = `<section class="section wrap scope-section" id="scope">
  <div class="section-head"><div><p class="eyebrow">先建立整体认识 / POSITION & SCOPE</p><h2>核心是界面质量，范围延伸到可用性。</h2></div><p>一套围绕产品界面定制的 AI 工作规范。<br>11 个 skill 共同协作，也可以按需使用。</p></div>
  <div class="definition"><div><span class="eyebrow">一句话定位</span><h3>面向 Web 产品界面的<br>设计、优化、审查与探索技能集。</h3></div><p>它把设计经验写成规则、操作步骤和验收要求，指导 AI 助手处理页面与组件。重点是用户能否看清、看懂、操作顺畅，以及真实内容到来后界面是否仍然稳定。</p></div>
  <div class="scope-grid">
    <article class="scope-card core"><span class="scope-label">核心覆盖</span><h3>直接处理界面问题</h3><ul><li><b>视觉：</b>字体、颜色、图标、表面层次、动画。</li><li><b>结构：</b>分组、响应式布局、长文本与内容增长。</li><li><b>可用性：</b>键盘、焦点、状态提示与辅助技术。</li><li><b>表达：</b>按钮、错误、空状态与术语。</li><li><b>流程：</b>审查改动、观察边界、比较方案、解释参考。</li></ul><p class="scope-example">例如：让弹窗可用键盘关闭，让长名称不撑破卡片。</p></article>
    <article class="scope-card conditional"><span class="scope-label">需要上下文与工具</span><h3>能参与，但有前提</h3><ul><li><b>新界面建设：</b>需要用途、内容、状态与技术栈。</li><li><b>代码修复：</b>需要明确要求修改及可编辑项目。</li><li><b>视觉结论：</b>需要渲染页面与可用浏览器。</li><li><b>颜色测量：</b>需要真实前背景和计算工具。</li><li><b>原生端应用：</b>需要平台规范与实现适配。</li></ul><p class="scope-example">例如：可以指导写一个卡片，但真正的代码执行由宿主完成。</p></article>
    <article class="scope-card outside"><span class="scope-label">不属于主要职责</span><h3>需要其他工作流程补齐</h3><ul><li><b>产品定义：</b>市场定位、用户访谈、需求优先级。</li><li><b>业务与后台：</b>业务规则、接口、数据库、认证。</li><li><b>整体工程：</b>全面安全、性能、测试与发布运维。</li><li><b>品牌资产：</b>完整品牌策略、素材生产与版权处理。</li><li><b>效果证明：</b>转化率实验、用户研究和完整合规审计。</li></ul><p class="scope-example">模型可能具备其他能力，但不能把它们算作这个库的交付范围。</p></article>
  </div>
  <div class="scope-notes"><p><strong>“UI”包含什么？</strong>这里的 UI 涵盖视觉与界面交互质量，并触及可用性；完整 UX 研究仍需访谈、任务分析和真实用户验证。</p><p><strong>只有已有页面才能用吗？</strong>已有界面的优化与检查是直接用途。新页面也可用领域规则指导，<code>variant</code> 可探索单个部件，完整产品开发还需要其他流程。</p><p><strong>“定制技能”改了什么？</strong>定制的是 AI 的任务方法、判断依据和交付要求。仓库提供文档与参考配方；模型、编辑器和浏览器提供执行能力。</p></div>
  <div class="lifecycle"><p class="eyebrow">放到一次产品开发里看</p><ol><li><span class="coverage supporting">其他流程先行</span><h4>确定需求与业务</h4><p>产品目标、数据、业务规则</p></li><li><span class="coverage main">本库主要参与</span><h4>设计界面与组件</h4><p>布局、排版、颜色、文案</p></li><li><span class="coverage main">本库主要参与</span><h4>打磨交互质量</h4><p>状态、键盘、焦点、动效</p></li><li><span class="coverage main">本库主要参与</span><h4>审查与方案验证</h4><p>变更报告、场景页、候选比较</p></li><li><span class="coverage supporting">其他流程补齐</span><h4>上线与业务评估</h4><p>部署、监控、用户与转化实验</p></li></ol><p class="scope-caption">研究归纳：表示技能的主要职责，不代表它会自动串起完整开发流程。</p></div>
  <p class="scope-evidence">依据：<a href="${upstream}AGENTS.md" target="_blank" rel="noopener">职责划分 ↗</a><a href="${upstream}skills/interface-review/SKILL.md" target="_blank" rel="noopener">审查边界 ↗</a><a href="${upstream}skills/variant/SKILL.md" target="_blank" rel="noopener">方案探索范围 ↗</a></p>
  </section>`;
  const chooser = `<section class="section chooser-section" id="choose"><div class="wrap"><div class="section-head"><div><p class="eyebrow">根据手头任务选择 / TASK GUIDE</p><h2>你现在手里有什么？</h2></div><p>选择最接近的任务，查看入口、交付与前提。<br>这里帮助选用技能，不会自动执行任务。</p></div><div class="task-control"><label for="task-select">当前任务</label><select id="task-select">${taskRoutes.map(r=>`<option value="${r.id}">${r.label}</option>`).join('')}</select><p id="task-status" class="sr-only" role="status" aria-live="polite"></p></div><div class="task-panels">${taskRoutes.map(r=>`<article class="task-panel" id="task-${r.id}" data-task="${r.id}" aria-labelledby="task-title-${r.id}"><div class="task-intro"><span class="eyebrow">${r.label}</span><h3 id="task-title-${r.id}">${r.lead}</h3><div class="task-links">${r.skills.length?skillLinks(r.skills):'<span class="route-external">先使用产品与工程流程，再进入本库的界面环节。</span>'}</div></div><dl><div><dt>准备什么</dt><dd>${inline(r.input)}</dd></div><div><dt>得到什么</dt><dd>${inline(r.result)}</dd></div><div><dt>到哪一步为止</dt><dd>${inline(r.limit)}</dd></div></dl></article>`).join('')}</div><noscript><p>未启用 JavaScript，下面按顺序展示全部任务指南。</p></noscript></div></section>`;
  const faq = `<section class="section wrap expectations" id="expectations"><div class="section-head"><div><p class="eyebrow">判断结果是否符合预期 / DELIVERABLES</p><h2>调用技能后，到底会发生什么？</h2></div><p>把“给出建议”“写出内容”和“实际通过验证”分开看。</p></div><div class="delivery-grid"><article><span class="eyebrow">审查</span><h3>指出问题与改法</h3><p>页面审查和变更审查交付报告。审查中的 After 一栏可以只是建议替换内容，并不证明代码已修改。</p>${skillLinks(['better-interface','interface-review'])}</article><article><span class="eyebrow">实现与修复</span><h3>在明确请求后修改</h3><p>领域规则可指导新实现或修复。需要可写项目与相应工具，完成后仍要检查实际行为。</p>${skillLinks(['better-layout','better-ui','better-colors'])}</article><article><span class="eyebrow">探索与观察</span><h3>交付可看的材料</h3><p>break 生成场景页，variant 生成候选方案，explain-interface 提供机制解释。它们的完成标准各不相同。</p>${skillLinks(['break','variant','explain-interface'])}</article></div><div class="expectation-qa"><details><summary>安装以后，会自动把所有界面改好吗？</summary><p>不会。需要宿主加载技能并对明确任务执行。四个专项入口要求用户主动调用；审查通常先报告，修改需要明确的实现或修复请求。是否实际加载还取决于宿主支持。</p></details><details><summary>它和组件库、页面模板有什么区别？</summary><p>组件库提供可直接引用的组件；模板提供起始页面；这个库主要提供工作规则与参考配方，指导 AI 在现有技术栈里作判断、写代码或检查结果。它不替代项目依赖。</p></details><details><summary>这里的 113 条是 113 个独立 skill 吗？</summary><p>不是。固定版本有 11 个 skill；113 条是本研究对技能正文的细化归纳，便于看清具体能力。条目数量不表示相互独立，也不代表效果经过 113 次实测。</p></details><details><summary>能让页面更清楚，就等于改善了整个产品体验吗？</summary><p>界面层面的障碍可以据代码与实际操作验证。用户是否更满意、转化是否上升、业务流程是否合理，需要真实用户与业务数据支持，不能由视觉优化直接推出。</p></details></div></section>`;
  return {scope,chooser,faq};
}
