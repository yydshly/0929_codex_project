export const summaryDescription='QM 是以 Agent 执行为核心的个人与团队工作平台，可调用 Codex、Pi 等引擎完成资料研究、代码与文件处理，并组织共享记忆、权限、定时任务和成果发布。适合持续仓库跟踪、团队项目助理与内部工具；对我们，先用来理解架构，出现长期自动化或多人协作需求时再试点。';
export const digest=`<section id="summary" class="summary-section"><div class="section-head"><span class="num">总览</span><div><h2>先读摘要：QM 能做什么，何时与你有关</h2><p>QM 是以 Agent 执行为核心的工作平台。执行引擎负责推进任务，QM 把资源、协作与持续工作组织起来。</p></div></div><div class="digest-layout"><div class="digest-copy"><article><span class="eyebrow">01 / 库的能力</span><h3>把 Agent 放进可持续工作的环境</h3><p>通过 Codex、Pi 等引擎调用模型和工具，处理资料、文件与代码；再统一组织个人和项目空间、记忆、Skills、权限、定时与事件任务，以及成果发布。</p></article><article><span class="eyebrow">02 / 可实现的效果</span><h3>从对话走向可检查的成果</h3><p>可以形成仓库变化报告、代码改动与测试记录、邮件草稿、项目进展清单、共享文件或内部看板。具体效果取决于接入的工具、数据、授权及验收要求。</p></article><article><span class="eyebrow">03 / 使用场景</span><h3>研究、开发、团队与信息工作</h3><p>持续研究开源项目、维护代码库、汇总团队进度、整理文档与邮件，或制作需要持续更新的内部工具。</p></article><article><span class="eyebrow">04 / 对我们的意义</span><h3>让研究方法和项目知识持续积累</h3><p>现在借它看懂 Agent 产品架构；以后把“研究项目 → 按模板整理 → 更新网页 → 持续跟踪”连接成可重复、可共享的工作流程。</p></article><article><span class="eyebrow">05 / 什么时候用</span><h3>有持续运行与协作需求时再采用</h3><p>个人临时研究、写网页，现有 Codex 足够时不必急着迁移。需要定期跟踪多个项目、主动提醒，或多人共享且凭据分开管理时，再评估 QM。</p></article></div><figure class="summary-figure"><a href="map.html" aria-label="放大阅读 QM 摘要图"><img src="qm-overview.png" alt="QM 摘要图：本质是让个人与团队使用 Agent 的工作平台；涵盖协作、执行、积累、自动化与交付，以及研究、开发和团队场景，建议从仓库周报开始试点。" width="1086" height="1448" fetchpriority="high"></a><figcaption>沿用本轮确认的摘要图。<a href="map.html">放大阅读</a> · <a href="qm-overview.png" download>下载原图</a></figcaption></figure></div><div class="decision"><b>与 Codex 的关系：执行条件相当时，可承接同类任务。</b><p>例如研究仓库、修改代码、制作网页、运行测试。文件、工具、插件、权限和运行环境仍需在 QM 中准备；接入引擎不会自动继承你在 Codex 应用里的全部任务与配置，也不保证执行效果完全一致。</p><a class="source" href="https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/src/harness/codex-harness.ts">依据：QM 的 Codex 适配器 ↗</a></div></section>`;
export const adoption=`<div class="adoption"><div><span>现在 · 学习参考</span><b>个人临时任务</b><p>现有工具已经够用，先理解架构与工作方式。</p></div><div><span>下一步 · 小范围试用</span><b>长期跟踪与定期交付</b><p>需要离线继续执行、定期更新资料或主动提醒。</p></div><div><span>以后 · 评估正式采用</span><b>多人、分权与共享应用</b><p>成员需要共同使用 Agent，资源和凭据有不同归属。</p></div></div><aside class="note"><b>第一个试点：一个仓库的每周变化报告。</b> 准备公开仓库、固定研究模板和获准的交付位置；用定时任务检查更新，生成带来源的差异摘要。核对报告质量、授权边界、重启恢复与实际费用，再决定是否扩大范围。这是建议方案，本次未部署实测。</aside>`;
export const digestMarkdown=`## 摘要：能力、效果、场景与采用时机

**能力是什么：** QM 是以 Agent 执行为核心的个人与团队工作平台。它调用 Codex、Pi 等执行引擎处理资料、文件和代码，并提供空间、共享记忆、Skills、权限、后台调度与成果发布。

**可实现的效果：** 仓库变化报告、代码差异和测试记录、邮件草稿、项目进展清单、共享文件与内部看板。产物是可构建方案；真实效果依赖工具、数据、授权与验收，本次未实测。

**使用场景：** 持续开源研究、代码维护、团队项目助理、文档与邮件整理，以及持续更新的内部工具。

**对我的意义：** 现在借鉴 Agent 产品架构；以后把项目研究、方法复用、知识积累、网页更新和长期跟踪组织成可重复、可共享的流程。

**什么时候用：** 个人临时研究和网页制作若已能由现有 Codex 完成，不必急着迁移。当需要长期跟踪多个项目、定期交付、主动提醒，或多人共享且凭据分别管理时，再试点 QM。

**与 Codex 的关系：** 执行条件相当时，原则上可以承接 Codex 能完成的同类任务；对应文件、工具、插件、权限和环境仍需接入，不自动继承桌面应用中的任务或配置，也不保证效果完全一致。[依据：QM Codex 适配器](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/src/harness/codex-harness.ts)。

**第一个试点：** 为一个公开仓库生成每周变化报告，使用固定模板与来源链接，验收质量、权限边界、重启恢复和实际费用后，再决定是否扩大使用。

![QM 能力、效果、场景、价值与采用时机](assets/qm-overview.png)

摘要图直接沿用本轮确认的 ImageGen 图片，未重新生成。[完整提示词](assets/qm-overview-prompt.txt)。

`;
export const mapPage=`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>一张图读懂 QM</title><link rel="icon" href="data:,"><style>*{box-sizing:border-box}body{margin:0;background:#f5f6f8;color:#14243b;font:15px/1.7 'Microsoft YaHei',sans-serif}header{padding:15px 22px;display:flex;gap:22px;align-items:center;flex-wrap:wrap;border-bottom:1px solid #dce2e9}a{color:#2352b6}button,input{font:inherit}button{padding:6px 14px;cursor:pointer}label{display:flex;gap:10px}main{padding:15px;overflow:auto}img{display:block;width:100%;max-width:1200px;height:auto;margin:auto}p{font-size:12px;margin:10px 22px}</style></head><body><header><a href="index.html#summary">← 返回 QM 摘要</a><label>缩放 <input aria-label="摘要图缩放" type="range" min="100" max="240" step="20" value="100"></label><button>适应宽度</button><a href="qm-overview.png" download>下载原图</a></header><p>本轮确认的摘要图 · 能力与场景为研究归纳，采用时机为建议；上游未部署实测。</p><main><img src="qm-overview.png" alt="QM 的本质、能力、场景、价值与采用时机完整摘要图"></main><script>const zoom=document.querySelector('input'),img=document.querySelector('img');zoom.addEventListener('input',()=>{img.style.maxWidth='none';img.style.width=zoom.value+'%'});document.querySelector('button').addEventListener('click',()=>{zoom.value=100;img.style.width='100%';img.style.maxWidth='1200px'});</script></body></html>`;
