"use strict";
const DATA = window.SKILL_ATLAS;
const domains = ["需求与决策", "研究与原型", "开发与质量", "协作与交付", "学习与写作", "专项工具"];
const descriptions = {
  "全部能力": "先读一句话能力，再看它具体交付什么。",
  "需求与决策": "把含糊的目标、概念和取舍，变成可以继续推进的共识。",
  "研究与原型": "用第一手资料和可体验的样本，回答还不确定的问题。",
  "开发与质量": "把规则写成代码与检查，让改动有可以核对的结果。",
  "协作与交付": "组织任务、整合成果，让工作能够清楚地推进和转移。",
  "学习与写作": "把知识、经验和要求，转成别人能够理解和使用的内容。",
  "专项工具": "针对特定技术或环境，完成范围明确的辅助工作。"
};
const views = ["summary", "scenarios", "catalog", "compare", "value"];
const state = { domain: "全部能力", status: "all", query: "", view: views.includes(location.hash.slice(1)) ? location.hash.slice(1) : "summary" };
const $ = id => document.getElementById(id);
const esc = value => String(value).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const statusOf = s => s.included_in_plugin ? "formal" : s.category === "in-progress" ? "beta" : "misc";
const statusName = s => ({ formal: "正式", beta: "实验", misc: "专项" })[statusOf(s)];
function renderDomains() {
  $("domain-nav").innerHTML = ["全部能力", ...domains].map((d, i) =>
    '<button type="button" class="domain-button ' + (state.domain === d ? "active" : "") + '" data-domain="' + d + '" aria-pressed="' + (state.domain === d) + '"><span><i>' + String(i).padStart(2, "0") + '</i>' + d + '</span><b>' + (i ? DATA.skills.filter(s => s.domain === d).length : DATA.skills.length) + '</b></button>'
  ).join("");
}
function renderCatalog() {
  renderDomains();
  const q = state.query.trim().toLocaleLowerCase();
  const skills = DATA.skills.filter(s => {
    const matchesDomain = state.domain === "全部能力" || s.domain === state.domain;
    const matchesStatus = state.status === "all" || statusOf(s) === state.status;
    const haystack = [s.name, s.title_zh, s.domain, s.summary, s.before, s.after, s.deliverable, s.boundary, ...s.abilities].join(" ").toLocaleLowerCase();
    return matchesDomain && matchesStatus && (!q || q.split(/\s+/).every(word => haystack.includes(word)));
  });
  document.querySelectorAll("[data-status]").forEach(b => { b.classList.toggle("active", b.dataset.status === state.status); b.setAttribute("aria-pressed", b.dataset.status === state.status); });
  $("domain-heading").textContent = state.domain;
  $("domain-description").textContent = descriptions[state.domain];
  $("result-count").textContent = skills.length + " / 38 项能力";
  $("empty").hidden = skills.length > 0;
  $("skill-grid").innerHTML = skills.map(s => '<article class="skill-card"><div class="card-meta"><span>' + esc(s.domain) + '</span><span class="badge ' + statusOf(s) + '">' + statusName(s) + '</span></div><h4>' + esc(s.title_zh) + '</h4><div class="skill-name">' + esc(s.name) + '</div><p class="card-summary">' + esc(s.summary) + '</p><div class="card-output"><span>可交付成果</span>' + esc(s.deliverable) + '</div><div class="card-bottom"><small>含具体能力与直观例子</small><button type="button" class="detail-button" data-open="' + s.name + '" aria-label="查看' + esc(s.title_zh) + '的具体能力">查看具体能力</button></div></article>').join("");
}
function setView(view) {
  if (!views.includes(view)) return;
  state.view = view;
  for (const v of views) $(v + "-view").hidden = view !== v;
  document.querySelectorAll("[data-view]").forEach(b => { b.classList.toggle("active", b.dataset.view === view); b.setAttribute("aria-pressed", b.dataset.view === view); });
  if (location.hash !== "#" + view) history.replaceState(null, "", "#" + view);
}
function clearFilters() {
  state.domain = "全部能力"; state.status = "all"; state.query = ""; $("search").value = "";
  renderCatalog(); setView("catalog");
}
function openDetail(name) {
  const s = DATA.skills.find(s => s.name === name);
  if (!s) return;
  $("detail-domain").textContent = s.domain + " / " + statusName(s) + "技能";
  $("detail-body").innerHTML = '<h2 id="detail-title">' + esc(s.title_zh) + '</h2><div class="skill-name">' + esc(s.name) + '</div><p class="detail-summary">' + esc(s.summary) + '</p><h3 class="detail-label">具体能完成的事</h3><ul class="ability-list">' + s.abilities.map((a, i) => '<li><span>' + String(i + 1).padStart(2, "0") + '</span>' + esc(a) + '</li>').join("") + '</ul><h3 class="detail-label">一个直观例子 <span>· 能力示例，非实测案例</span></h3><div class="example"><div><span>你原先面对的问题</span><p>' + esc(s.before) + '</p></div><div><span>它能够帮助你得到</span><p>' + esc(s.after) + '</p></div></div><h3 class="detail-label">最终交付</h3><p class="detail-deliverable">' + esc(s.deliverable) + '</p><p class="boundary"><strong>能力边界：</strong>' + esc(s.boundary) + '</p><div class="detail-footer"><span>根据固定版本源码归纳，未运行验证</span><a href="' + esc(s.source_url) + '" target="_blank" rel="noopener noreferrer">查看能力依据</a></div>';
  const examples = DATA.scenarios.filter(d => d.steps.some(step => step.skills.includes(name)));
  if (examples.length) $("detail-body").insertAdjacentHTML("beforeend", '<div class="detail-scenarios"><h3 class="detail-label">在具体任务中理解</h3>' + examples.map(d => '<button type="button" data-demo="' + d.id + '">' + esc(d.title) + ' →</button>').join("") + '</div>');
  $("detail").showModal(); $("detail").scrollTop = 0;
}
const comparisons = [
  { title: "把想法讲清楚，还是把共识写完整？", note: "讨论、术语记录和规格整理，是不同的成果。", items: [
    ["grill-me", "通过追问理解目标和取舍。", "得到：更清楚的想法"],
    ["grill-with-docs", "追问的同时，把业务定义与重要决定保存下来。", "得到：可延续的共识"],
    ["to-spec", "把已经明确的方案整理为实施和验收依据。", "得到：功能规格"]
  ] },
  { title: "决定要做什么，还是拆分怎样完成？", note: "不确定的决策和可实施的任务，需要不同的处理。", items: [
    ["wayfinder", "管理大型工作中尚未解决的关键决定。", "得到：决策地图"],
    ["to-tickets", "把明确方案拆成有依赖、能验收的成果。", "得到：实施任务"],
    ["implement", "把任务真正落实为代码和验证结果。", "得到：功能实现"]
  ] },
  { title: "查清事实，还是亲手体验方案？", note: "两者都帮助做判断，但证据来自不同地方。", items: [
    ["research", "从源码、文档等第一手资料核实问题。", "得到：有来源的结论"],
    ["prototype", "把逻辑或界面做成可以操作的样本。", "得到：体验与设计反馈"]
  ] },
  { title: "预防回归、查明错误，还是检查交付？", note: "三个质量技能分别覆盖不同环节。", items: [
    ["tdd", "用行为检查推动最小实现。", "得到：测试与实现"],
    ["diagnosing-bugs", "从实际症状建立复现并寻找原因。", "得到：定位与修复证据"],
    ["code-review", "对照规范与需求检查变更。", "得到：可追溯的问题清单"]
  ] },
  { title: "交出上下文，还是交给新的执行者？", note: "文档交接与后台执行不具有相同的能力边界。", items: [
    ["handoff", "整理下一位接手者需要的进展、证据和下一步。", "得到：交接文件"],
    ["claude-handoff", "用交接摘要启动新的 Claude 后台任务。", "得到：后台执行任务 · 实验"],
    ["implement-spec", "让多个执行者处理任务图并统一整合。", "得到：完整开发变更 · 实验"]
  ] },
  { title: "积累写作素材，还是组织读者的理解？", note: "三个写作技能均属实验能力。", items: [
    ["writing-fragments", "捕捉观点、经历和例子，暂不安排结构。", "得到：素材集"],
    ["writing-shape", "组织文章论点与段落形式。", "得到：连贯的文章"],
    ["writing-beats", "逐步选择叙事路线和概念铺垫。", "得到：有节奏的阅读路径"]
  ] }
];
$("comparison-grid").innerHTML = comparisons.map(c => '<article class="comparison-card"><h4>' + c.title + '</h4><p>' + c.note + '</p><div class="compare-options">' + c.items.map(i => '<div class="compare-option"><button type="button" data-open="' + i[0] + '">' + i[0] + '</button><p>' + i[1] + '</p><small>' + i[2] + '</small></div>').join("") + '</div></article>').join("");
document.addEventListener("click", e => {
  const b = e.target.closest("button");
  if (!b) return;
  if (b.dataset.domain) { state.domain = b.dataset.domain; renderCatalog(); setView("catalog"); }
  if (b.dataset.status) { state.status = b.dataset.status; renderCatalog(); }
  if (b.dataset.view) setView(b.dataset.view);
  if (b.dataset.open) openDetail(b.dataset.open);
});
$("search").addEventListener("input", e => { state.query = e.target.value; renderCatalog(); });
$("reset").addEventListener("click", clearFilters);
$("empty-reset").addEventListener("click", clearFilters);
$("close-detail").addEventListener("click", () => $("detail").close());
$("detail").addEventListener("click", e => { if (e.target === $("detail")) { const r = $("detail").getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) $("detail").close(); } });
document.addEventListener("keydown", e => { if (e.key === "/" && !$("detail").open && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) { e.preventDefault(); setView("catalog"); $("search").focus(); } });
document.querySelector(".brand").addEventListener("click", e => { e.preventDefault(); setView("summary"); window.scrollTo({ top: 0 }); });
window.addEventListener("hashchange", () => { if (views.includes(location.hash.slice(1))) setView(location.hash.slice(1)); });
renderCatalog();
setView(state.view);
