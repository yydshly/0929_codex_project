// Educational interactions only; build.mjs injects the fixed local content.
const scenarios = [{"title":"研究一个 GitHub 项目","input":"仓库资料、固定版本、研究模板和你关心的问题。","actions":["定位 README 与核心代码","整理能力、原理和来源","按模板生成研究文档","检查引用与遗漏"],"output":"中文研究报告、来源索引、待验证清单。","extra":"联网获取资料需可用命令或查询工具；网页制作需相应制作与验证工具。","value":"把我们反复使用的研究方法沉淀为 Skill，减少每次重新解释格式和标准。"},{"title":"修复错误并验证","input":"项目目录、复现步骤、预期行为和已有测试。","actions":["查看代码与测试","修改相关逻辑","运行测试获得结果","依据失败继续调整"],"output":"代码差异、测试结果和改动说明。","extra":"依赖与测试环境需可运行；测试覆盖不足仍要人工复核。","value":"亲自观察模型、工具与验证之间的关系，学习真正的 Agent 执行循环。"},{"title":"整理数据与生成报告","input":"授权的数据文件、统计口径和期望格式。","actions":["读取文件结构","编写处理脚本","执行并核对统计","输出报告与处理结果"],"output":"清洗后的数据、图表或报告文件。","extra":"表格、图表、PDF 等需要相应解析和生成库；不是 Pi 自带完整 Office 编辑器。","value":"把重复的数据整理变成可复用脚本与方法，保留输入和计算依据。"},{"title":"建立个人专用助手","input":"你的任务领域、方法规范、数据接口与可用模型。","actions":["用 Skill 固定方法","用扩展提供业务工具","通过 SDK 接入自己的界面","增加验证与运行记录"],"output":"面向特定业务的 Agent 原型。","extra":"产品界面、登录、数据授权、限额和安全隔离需自行设计。","value":"从调用现成工作台，前进到能设计和实现自己的 Agent 产品。"},{"title":"周期维护研究资料","input":"关注的仓库、比较基线、更新规则与验收要求。","actions":["外部调度器触发 Pi","查询并对比新变化","生成待审核的更新草稿","保存来源和任务记录"],"output":"更新摘要、文档修改草稿、待复核事项。","extra":"定时触发、失败告警、后台生命周期和审批由宿主或扩展承担。","value":"让研究成果保持可维护；适合在单次任务验证稳定之后再做。"}];
const steps = [["给出目标","人 / 宿主应用","指定工作目录、任务要求和验收标准。","例如：修复价格计算错误，并运行已有测试。"],["准备上下文","Pi 会话层","组合项目说明、当前会话分支、工具定义与相关技能。","把与本次工作相关的材料传给模型，避免把所有分支混在一起。"],["决定下一步","大模型","生成回答，或请求调用某个工具并给出参数。","例如：先读取计算函数，再查看对应测试。"],["执行真实动作","Pi + 工具实现","校验调用并执行文件操作或命令，记录实际输出。","模型生成工具请求；真正接触文件和进程的是工具程序。"],["反馈并继续","Pi + 大模型","将结果或错误加入上下文；需要时发起下一轮请求。","测试仍失败时，模型可以根据报错调整方案。"],["交付与验收","Pi + 人 / 检查程序","返回回复和产物，保留会话；人或测试确认任务是否达标。","运行结束不等于业务正确。中止也不会自动回滚已发生的修改。"]];
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 let count=0;
 document.querySelectorAll('.cap-card').forEach(card=>{card.hidden=button.dataset.filter!=='全部'&&card.dataset.type!==button.dataset.filter;if(!card.hidden)count++;});
 document.getElementById('count').textContent=`当前显示 ${count} 类能力 · ${button.dataset.filter}`;
}));
document.querySelectorAll('[data-step]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-step]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 const s=steps[Number(button.dataset.step)];
 document.getElementById('step-detail').innerHTML=`<small>${s[1]}</small><h3>${s[0]}</h3><p>${s[2]}</p><blockquote>${s[3]}</blockquote>`;
}));
document.querySelectorAll('[data-scenario]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-scenario]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 const s=scenarios[Number(button.dataset.scenario)];
 document.getElementById('scenario-panel').innerHTML=`<div class="scenario-intro"><small>任务输入</small><p>${s.input}</p><ol>${s.actions.map(a=>`<li>${a}</li>`).join('')}</ol></div><div class="scenario-result"><small>预期成果</small><h3>${s.output}</h3><p><b>需要补齐：</b>${s.extra}</p><p><b>对你的价值：</b>${s.value}</p></div>`;
}));
