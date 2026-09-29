"use strict";
(() => {
  const demos = DATA.scenarios;
  const selected = { id: demos[0].id, step: 0 };
  const samples = [
    { title: "线索台", description: "核对项目资料与来源", category: "研究" },
    { title: "灵感簿", description: "整理写作素材", category: "写作" },
    { title: "练习卡", description: "记录课程与复习内容", category: "学习" }
  ];
  const toy = { query: "", category: "全部", bugQuery: "写作", fixed: false };
  const coverage = new Set(demos.flatMap(d => d.steps.flatMap(s => s.skills))).size;
  $("scenario-coverage").textContent = `6 个场景 · ${coverage} 个技能的分步样例 · 其余 ${DATA.skills.length - coverage} 项仍可在能力目录查阅`;
  const current = () => demos.find(d => d.id === selected.id);
  const skillButtons = names => names.map(name => {
    const skill = DATA.skills.find(s => s.name === name);
    return `<button type="button" data-open="${name}">${esc(name)}${statusOf(skill) === "beta" ? '<small>实验</small>' : ""}</button>`;
  }).join("");

  function renderPicker() {
    $("scenario-picker").innerHTML = demos.map((d, i) => `<button type="button" class="scenario-choice ${selected.id === d.id ? "active" : ""}" data-demo="${d.id}" aria-pressed="${selected.id === d.id}"><span class="scenario-index">0${i + 1}<small>${esc(d.tag)}</small></span><strong>${esc(d.title)}</strong><span>${esc(d.summary)}</span></button>`).join("");
  }

  function renderStage() {
    const d = current();
    const s = d.steps[selected.step];
    $("scenario-stage").innerHTML = `<article class="scenario-workbench" aria-labelledby="scenario-title">
      <header class="scenario-header"><p class="eyebrow">A TASK, STEP BY STEP</p><h3 id="scenario-title">${esc(d.title)}</h3><p>${esc(d.context)}</p></header>
      <div class="scenario-fit"><p><strong>值得用在</strong>${esc(d.fit)}</p><p><strong>不必用在</strong>${esc(d.skip)}</p></div>
      <nav class="scenario-steps" aria-label="场景步骤">${d.steps.map((step, i) => `<button type="button" data-step="${i}" aria-pressed="${i === selected.step}" class="${i === selected.step ? "active" : ""}"><span>0${i + 1}</span>${esc(step.title)}</button>`).join("")}</nav>
      <div class="scenario-content">
        <aside class="scenario-input"><p class="artifact-kicker">从这些材料开始</p><div class="sample-text">${esc(d.input)}</div><div class="scenario-evidence">${esc(d.evidence)}</div></aside>
        <div class="scenario-output"><p class="artifact-kicker">第 ${selected.step + 1} / ${d.steps.length} 步 · 阅读成果样张</p><h4 id="step-title" tabindex="-1">${esc(s.title)}</h4><div class="scenario-skill-links">${skillButtons(s.skills)}</div><p class="step-why">${esc(s.why)}</p><ul class="step-actions">${s.actions.map(a => `<li>${esc(a)}</li>`).join("")}</ul><div class="artifact-paper"><h5>${esc(s.artifactTitle)}</h5><div class="sample-text">${esc(s.artifact)}</div></div>${s.widget ? widget(s.widget) : ""}<p class="scenario-check"><strong>怎么判断这一步有用</strong>${esc(s.check)}</p>
        <div class="step-controls"><button type="button" data-step="${selected.step - 1}" ${selected.step === 0 ? "disabled" : ""}>← 上一步</button><span>${selected.step + 1} / ${d.steps.length}</span><button type="button" data-step="${selected.step === d.steps.length - 1 ? 0 : selected.step + 1}">${selected.step === d.steps.length - 1 ? "回到第一步 ↺" : "看下一步成果 →"}</button></div></div>
      </div><div class="scenario-outcome"><span>整个场景最终留下</span><strong>${esc(d.outcome)}</strong></div>
    </article>`;
    if (s.widget === "prototype") renderPrototype();
    if (s.widget === "bug") renderBug();
  }

  function widget(kind) {
    if (kind === "prototype") return `<section class="toy-panel" aria-label="工具目录原型"><h5>亲手操作：三条资料的查找样本</h5><p>输入“写作”，再切换“研究”，观察两个条件怎样共同生效。</p><label class="toy-label" for="prototype-search">搜索名称或简介</label><input class="toy-input" id="prototype-search" type="search" value="${esc(toy.query)}" placeholder="试试：写作"><div class="toy-filters">${["全部", "研究", "写作", "学习"].map(c => `<button type="button" data-toy-category="${c}" aria-pressed="${toy.category === c}">${c}</button>`).join("")}<button type="button" data-toy-reset="true">重置样本</button></div><div id="prototype-results" role="status" aria-live="polite"></div><small>固定的三条演示数据；筛选在当前页面实际运行。</small></section>`;
    if (kind === "bug") return `<section class="toy-panel" aria-label="搜索故障与修复演示"><h5>切换规则，观察同一个问题</h5><p>数据：灵感簿｜整理写作素材。两种规则使用完全相同的样本。</p><label class="toy-label" for="bug-search">搜索样本</label><input class="toy-input" id="bug-search" type="search" value="${esc(toy.bugQuery)}"><div class="toy-filters"><button type="button" data-bug-rule="broken" aria-pressed="${!toy.fixed}">故障规则：只搜名称</button><button type="button" data-bug-rule="fixed" aria-pressed="${toy.fixed}">修复规则：也搜简介</button></div><div id="bug-results" role="status" aria-live="polite"></div><small>此处实际计算的是小样本结果，并非正式项目的测试日志。</small></section>`;
    return `<section class="toy-panel" aria-label="概念理解练习"><h5>判断一下：这个原型证明了什么？</h5><p>用三条固定数据做的页面，能正确完成搜索。你能得出哪一个结论？</p><div class="quiz-options"><button type="button" data-answer="correct">这三条样本上的搜索交互符合演示约定</button><button type="button" data-answer="scale">十万条数据时也会同样流畅</button><button type="button" data-answer="complete">账户、同步和正式系统都已经完成</button></div><p id="quiz-feedback" role="status" aria-live="polite">选择一项，查看判断依据。</p></section>`;
  }

  function renderPrototype() {
    const query = toy.query.trim().toLocaleLowerCase();
    const matches = samples.filter(s => (toy.category === "全部" || s.category === toy.category) && `${s.title} ${s.description}`.toLocaleLowerCase().includes(query));
    document.querySelectorAll("[data-toy-category]").forEach(b => b.setAttribute("aria-pressed", b.dataset.toyCategory === toy.category));
    $("prototype-results").innerHTML = `<strong>找到 ${matches.length} / 3 项</strong>` + (matches.length ? `<ul class="toy-items">${matches.map(s => `<li><b>${s.title}</b><span>${s.description} · ${s.category}</span></li>`).join("")}</ul>` : '<p class="toy-empty">没有匹配项。清空关键词或更换分类，或点击“重置样本”。</p>');
  }

  function searchSample(query, fixed) {
    const fields = fixed ? "灵感簿 整理写作素材" : "灵感簿";
    return fields.includes(query.trim()) ? 1 : 0;
  }

  function renderBug() {
    const count = searchSample(toy.bugQuery, toy.fixed);
    const cases = [["简介包含“写作”", "写作"], ["名称包含“灵感”", "灵感"], ["空输入恢复全部", ""]];
    document.querySelectorAll("[data-bug-rule]").forEach(b => b.setAttribute("aria-pressed", (b.dataset.bugRule === "fixed") === toy.fixed));
    $("bug-results").innerHTML = `<p class="toy-result-count">当前输入找到 <strong>${count}</strong> / 1 项${count ? "：灵感簿" : "：无匹配"}</p><p class="toy-label">对固定预期的检查（每项应找到 1 条）</p><ul class="toy-checks">${cases.map(([label, query]) => { const result = searchSample(query, toy.fixed); return `<li><span>${label}</span><strong class="${result ? "check-pass" : "check-fail"}">${result ? "符合" : "未满足"} · 实际 ${result} / 预期 1</strong></li>`; }).join("")}</ul>`;
  }

  document.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    if (b.dataset.demo) {
      if (!demos.some(d => d.id === b.dataset.demo)) return;
      selected.id = b.dataset.demo;
      selected.step = 0;
      if ($("detail").open) $("detail").close();
      setView("scenarios"); renderPicker(); renderStage();
      $("scenario-stage").scrollIntoView({ block: "start" });
      $("step-title").focus({ preventScroll: true });
    }
    if (b.dataset.step !== undefined) {
      const index = Number(b.dataset.step);
      if (!Number.isInteger(index) || index < 0 || index >= current().steps.length) return;
      selected.step = index; renderStage();
      $("step-title").focus();
    }
    if (b.dataset.toyCategory) { toy.category = b.dataset.toyCategory; renderPrototype(); }
    if (b.dataset.toyReset) { toy.query = ""; toy.category = "全部"; $("prototype-search").value = ""; renderPrototype(); }
    if (b.dataset.bugRule) { toy.fixed = b.dataset.bugRule === "fixed"; renderBug(); }
    if (b.dataset.answer) {
      const feedback = {
        correct: "判断正确。证据来自这三条固定样本，结论应限制在已观察到的交互。还需要真实任务来检验你能否迁移这个判断。",
        scale: "还不能这样判断。三条样本没有检验大数据量下的性能，需要另外设计规模与响应时间检查。",
        complete: "还不能这样判断。这个样本没有账户或同步功能，交互可用不能证明未展示的部分已经完成。"
      };
      $("quiz-feedback").textContent = feedback[b.dataset.answer];
      document.querySelectorAll("[data-answer]").forEach(button => button.setAttribute("aria-pressed", button === b));
    }
  });
  document.addEventListener("input", e => {
    if (e.target.id === "prototype-search") { toy.query = e.target.value; renderPrototype(); }
    if (e.target.id === "bug-search") { toy.bugQuery = e.target.value; renderBug(); }
  });
  renderPicker(); renderStage();
})();
