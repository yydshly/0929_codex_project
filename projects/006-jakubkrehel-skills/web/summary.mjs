export const summaryDescription = '面向 Web 界面设计、优化与验证的 11 项 AI 技能：6 个专业领域、2 个审查流程、3 个探索流程，交付问题报告、界面改动、边界场景、候选方案和机制解释；结合研究展示页、个人工具与长期维护说明个人使用价值。';

export function renderSummary({skillLinks}) {
 const groups = [
  ['6 个专业领域','指导怎样设计与实现','围绕页面质量的六个维度提供规则，可用于新实现、改进或专项检查。',[
   ['better-ui','视觉与动效','统一圆角、阴影、对齐和状态反馈，让页面细节协调、操作反馈连贯。'],
   ['better-typography','文字排版','调整字体、层级、换行与数字显示，让长内容可读、数据更新更稳定。'],
   ['better-colors','颜色系统','梳理色阶、语义变量、主题和实际对比度，得到更一致的配色及测量依据。'],
   ['better-accessibility','操作与无障碍','检查语义、键盘、焦点与表单反馈，让不同操作方式能完成同一任务。'],
   ['better-layout','布局与适配','处理分组、间距、窄屏、长内容及多语言，保持关键内容和操作可达。'],
   ['better-writing','产品文案','改进标签、提示、错误恢复和空状态，让用户知道发生了什么、下一步做什么。']]],
  ['2 个审查流程','确定问题、影响和优先级','把各专业领域的判断组织成报告。审查与实际修复是不同交付。',[
   ['better-interface','整体界面审查','按任务与页面范围协调六个领域，合并根因，交付有优先级的问题及验证记录；要求修复后再改代码。'],
   ['interface-review','代码变更审查','审查分支、PR 或未提交改动，追踪受影响界面，区分新增、退化和历史问题；默认只读。']]],
  ['3 个探索流程','观察边界、比较方案、理解实现','把抽象讨论转为场景、可运行候选和实现解释。',[
   ['break','极端内容观察','用真实组件展示空数据、长文本、多条目和窄容器，交付临时场景页与已观察的破损标注。'],
   ['variant','部件设计候选','围绕一个主要维度制作可切换方案，默认三版，比较取舍；选择后再落地并清理临时方案。'],
   ['explain-interface','参考网页解析','分析布局、图层、CSS 与动画，交付机制说明和可迁移配方，明确实测与推断。']]]
 ];
 const personal = [
  ['现在就能用','把开源研究做成易读网页','像当前这个研究集：资料很多，需要清晰目录、表格、移动端和说明文案。',['better-interface','better-layout','better-typography','better-writing'],'先审查阅读路径，再修复长内容、窄屏和模糊说明；得到问题清单及确认后的网页改动。','减少每次凭感觉试样式，把研究结论更清楚地传达给读者。','审查这个研究展示页，重点看信息层级、长表格、手机阅读和术语。先列出影响及优先级，确认后修复。'],
  ['做个人工具时','把“能运行”推进到“好操作”','给自己做表单、设置页、列表或仪表盘，需要处理空数据、报错、保存反馈和键盘路径。',['better-accessibility','better-writing','better-colors','better-ui'],'获得明确的按钮和错误提示、连贯的反馈及键盘可达的操作；必要时调整组件与主题变量。','减少界面含糊带来的误操作，让日常工具更可靠。','检查设置页的键盘操作、焦点、表单标签和保存失败提示，按现有功能修复并验证。'],
  ['交付或改版前','确认真实内容与改动不会破坏界面','换组件、改主题或导入真实数据后，担心超长标题、空列表、窄容器和旧功能退化。',['break','interface-review'],'得到可观察的边界场景，以及有版本依据的变更报告；修复后重新查看受影响状态。','把问题更早暴露在交付前，留下后续回归可以借用的样例。','审查本次变更影响的列表页；再用真实组件展示空数据、长标题和窄屏状态，只报告已观察的问题。'],
  ['方向拿不准时','比较方案，也学会解释参考效果','同一张信息卡有几种密度或层级方案；或看到一个参考网页，想知道它的视觉效果怎样实现。',['variant','explain-interface'],'方案选择用同数据的可切换候选；参考学习得到实现解释。两者按任务分别调用。','让审美讨论有真实页面可比较，同时积累可迁移的实现知识。','为这张指标卡围绕信息密度做三版可切换方案，保持数据一致，说明各自适合的场景。'],
  ['长期维护时','沉淀自己的界面验收习惯','研究页和工具越来越多，希望它们在主题、控件、文案和操作上保持一致。',['better-interface','better-colors','better-writing'],'把确认有效的规则、设计变量和典型场景纳入项目规范；持续回归工具需要另行补充。','复用判断标准，减少反复解释同一问题。团队规范与自动回归属于后续扩展建议。','按项目既有规范审查新页面，记录重复出现的问题和对应规则，区分本次修复与后续扩展。']
 ];
 const summary = `<section class="section wrap research-summary" id="summary"><div class="section-head"><div><p class="eyebrow">READ THIS FIRST / 能力摘要</p><h2>让 AI 有章可循地改善界面。</h2></div><p>先看能做什么、留下什么成果，<br>再决定什么时候把它放进自己的工作。</p></div><div class="summary-intro"><div><h3>这个库的能力是什么？</h3><p><strong>它是一组面向 Web 页面与组件的界面设计、优化和验证技能。</strong>把设计经验写成 AI 可读取的规则、操作步骤和验收要求，覆盖视觉、排版、颜色、布局、文案与可操作性，也组织审查、边界观察、方案比较和参考解析。</p><h3>可实现什么效果？</h3><p>让复杂内容更容易阅读，长文本与小屏布局更稳定，状态和错误更好理解，键盘操作更顺畅，视觉与主题更一致。它既能指导新界面的实现，也能帮助打磨已有页面。</p><div class="summary-delivery"><span class="eyebrow">根据任务得到不同成果</span><p><b>发现问题</b> → 有优先级的报告<br><b>要求实施</b> → 对应代码与样式改动<br><b>探索与学习</b> → 场景页、候选方案、机制解释</p></div><h3>能力成立的条件</h3><p>技能主要由说明和参考文档组成，实际读代码、修改和浏览器观察由宿主 AI 及工具完成。提供项目、真实内容、约束和明确交付要求后，再验证结果；完整产品仍需要需求研究、后台、数据、安全与部署等配套工作。</p><p class="summary-note">以下为固定版本文档归纳的预期效果。我们验证了本研究网页，尚未安装和运行上游全部技能。</p></div><figure class="summary-map"><a href="capability-map.html" aria-label="放大阅读完整能力总图"><img src="capability-map.png" width="3300" height="6030" alt="完整能力总图：服务方向、六个专业领域、五个工作流程、场景、用法、价值及边界" loading="lazy"></a><figcaption>沿用已生成的完整能力图 · 11 个技能全部覆盖<br><a href="capability-map.html">放大阅读</a> · <a href="capability-map.png" download>高清 PNG</a> · <a href="capability-map.svg" download>SVG</a></figcaption></figure></div><div class="summary-types" id="summary-types">${groups.map(([label,title,body,items])=>`<article class="summary-type"><span class="eyebrow">${label}</span><h3>${title}</h3><p>${body}</p><ul>${items.map(([id,name,out])=>`<li><a href="#${id}"><strong>${name}</strong><code>${id}</code></a><p>${out}</p></li>`).join('')}</ul></article>`).join('')}</div><p class="summary-note">数量口径：6 + 2 + 3 = 11 个技能；后两类合称 5 个工作流程。113 条是研究细化条目。interface-review、break、variant、explain-interface 要求主动调用；实际入口语法随宿主而异。</p></section>`;
 const personalSection = `<section class="section personal-section" id="personal"><div class="wrap"><div class="section-head"><div><p class="eyebrow">FOR YOUR WORK / 对你的意义</p><h2>从研究展示页，走到自己的工具。</h2></div><p>结合你正在整理开源项目、制作网页的工作，<br>以下给出现在与后续可以采用的场景。</p></div><div class="personal-grid">${personal.map(([stage,title,context,ids,out,value,prompt],i)=>`<article class="personal-card"><span class="eyebrow">0${i+1} / ${stage}</span><h3>${title}</h3><p>${context}</p><div class="personal-skills">${skillLinks(ids)}</div><dl><dt>你会得到</dt><dd>${out}</dd><dt>对你的意义</dt><dd>${value}</dd></dl><details><summary>可以这样提出任务</summary><p>${prompt}</p></details></article>`).join('')}</div><div class="personal-start"><h3>你的起步方式：一次只解决一个明确问题。</h3><ol><li>先拿一个现有研究页，用 <a href="#better-interface">better-interface</a> 获取问题与优先级。</li><li>针对最影响阅读或操作的问题，明确要求实施修复，再验证桌面、手机和相关状态。</li><li>需要比较部件时用 variant；接入真实内容时用 break；改动完成后用 interface-review。</li></ol><p>价值在于把“帮我美化一下”变成有范围、有成果、有验证的任务。无需每次调用全部技能；纯资料检索、后端逻辑或部署任务，优先使用对应工具与流程。</p></div></div></section>`;
 return {summary,personalSection};
}
