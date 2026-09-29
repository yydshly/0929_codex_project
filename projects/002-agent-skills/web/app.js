/* The research data is local and versioned; the page has no external runtime dependencies. */
'use strict';
(() => {
  const skills = window.AGENT_SKILLS_DATA;
  const sourceBase = 'https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/';
  const phases = [...new Set(skills.map(skill => skill.phase))];
  const $ = selector => document.querySelector(selector);
  const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const state = {phase: '', query: '', view: 'catalog'};
  const dialog = $('#skill-dialog');
  let lastTrigger = null;
  const phaseButtons = mobile => ['', ...phases].map((phase, index) => {
    const count = phase ? skills.filter(skill => skill.phase === phase).length : skills.length;
    return `<button data-phase="${esc(phase)}" class="${state.phase === phase ? 'active' : ''}" aria-pressed="${state.phase === phase}">${mobile ? '' : `<span class="phase-symbol" aria-hidden="true">${index ? String(index).padStart(2,'0') : '◈'}</span>`}<span>${esc(phase || '全部能力')}</span><span class="phase-count">${String(count).padStart(2,'0')}</span></button>`;
  }).join('');

  function renderPhases() {
    $('#phase-nav').innerHTML = phaseButtons(false);
    $('#mobile-phases').innerHTML = phaseButtons(true);
  }

  function renderCatalog() {
    const query = state.query.trim().toLocaleLowerCase();
    const filtered = skills.filter(skill => (!state.phase || skill.phase === state.phase) && (!query || [skill.name, skill.title, skill.phase, skill.summary, ...skill.capabilities, ...skill.deliverables, skill.scenario, skill.distinction, skill.input, skill.case.before, skill.case.after].join(' ').toLocaleLowerCase().includes(query)));
    $('#catalog-title').textContent = state.phase || '全部能力';
    $('#result-count').textContent = `${filtered.length} / ${skills.length} 项${query ? ' · 搜索结果' : ' · 从具体工作，理解能力'}`;
    $('#clear-search').hidden = !state.query;
    $('#empty-state').hidden = filtered.length > 0;
    $('#skill-grid').innerHTML = filtered.map(skill => {
      const index = skills.indexOf(skill) + 1;
      return `<article class="skill-card"><div class="card-top"><span class="card-number">SKILL / ${String(index).padStart(2,'0')}</span><span class="phase-tag">${esc(skill.phase)}</span></div><h3>${esc(skill.title)}</h3><div class="skill-slug" lang="en">${esc(skill.name)}</div><p class="card-summary">${esc(skill.summary)}</p><div class="card-output"><span class="output-label">交付物</span><span class="output-value">${esc(skill.deliverables[0])}</span></div><button class="open-skill" data-open="${esc(skill.name)}" aria-label="查看${esc(skill.title)}的具体能力">展开具体能力 <span aria-hidden="true">↗</span></button></article>`;
    }).join('');
  }

  function setView(view, updateHash = true) {
    state.view = ['catalog','compare','value'].includes(view) ? view : 'catalog';
    document.querySelectorAll('[role="tab"]').forEach(tab => {
      const active = tab.dataset.view === state.view;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      $(`#panel-${tab.dataset.view}`).hidden = !active;
    });
    if (updateHash) history.replaceState(null, '', `#${state.view}`);
  }

  function openSkill(name, trigger = null, updateHash = true) {
    const skill = skills.find(item => item.name === name);
    if (!skill) return;
    lastTrigger = trigger || document.activeElement;
    $('#detail-index').textContent = `${String(skills.indexOf(skill) + 1).padStart(2,'0')} / 25`;
    $('#detail-content').innerHTML = `<div class="detail-heading"><span class="phase-tag">${esc(skill.phase)}</span><h2 id="detail-title">${esc(skill.title)}</h2><div class="skill-slug" lang="en">${esc(skill.name)}</div></div><p class="detail-summary">${esc(skill.summary)}</p><section class="detail-block"><h3>具体能做什么</h3><ol class="detail-capabilities">${skill.capabilities.map((cap,index) => `<li><span>${String(index + 1).padStart(2,'0')}</span><div>${esc(cap)}</div></li>`).join('')}</ol></section><section class="detail-block"><h3>会交付什么</h3><div class="detail-deliverables">${skill.deliverables.map((output,index) => `<div><span>OUTPUT ${index + 1}</span>${esc(output)}</div>`).join('')}</div><p class="detail-input"><b>处理依据：</b>${esc(skill.input)}</p></section><section class="detail-block"><h3>用一个具体问题理解 <span class="skill-slug">/ 解读示例，非实测</span></h3><div class="case-example"><div><b>遇到的问题</b><p>${esc(skill.case.before)}</p></div><div><b>该能力推动的结果</b><p>${esc(skill.case.after)}</p></div></div></section><section class="detail-block"><h3>适用场景与能力分工</h3><p class="detail-explanation">${esc(skill.scenario)}</p><p class="detail-explanation">${esc(skill.distinction)}</p></section><section class="detail-limits"><h3>能力边界</h3><p>${esc(skill.limit)}</p></section><div class="detail-source"><span>固定版本 2686b620 · 能力依据上游文档整理</span><a href="${sourceBase + encodeURIComponent(skill.name)}/SKILL.md" target="_blank" rel="noopener noreferrer">阅读原始技能 ↗</a></div>`;
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('modal-open');
    if (updateHash) history.replaceState(null, '', '#skill=' + encodeURIComponent(name));
    $('#close-dialog').focus({preventScroll:true});
  }

  const comparisons = [
    {title:'需求访谈 vs. 想法细化',names:['interview-me','idea-refine'],questions:['你真正想解决什么？','哪些方案值得继续？'],explanations:['从用户、动机、成功标准和约束中识别真实需求，避免把“想做个仪表盘”直接当成已确认目标。','基于已有想法扩展选项，比较取舍、检验假设，最终给出清楚的一页方向。'],connection:'先找到问题，再探索方案。已有清楚目标时，无需重新进行完整访谈。'},
    {title:'规格编写 vs. 任务拆分',names:['spec-driven-development','planning-and-task-breakdown'],questions:['什么结果才算做对？','按什么顺序把它做出来？'],explanations:['界定功能、边界、约束和验收，形成可供开发与检查共同使用的规格。','把规格分解为小任务，明确依赖、验证方式和阶段检查点。'],connection:'规格是验收依据，计划是推进路径。任务清单不能替代需求本身。'},
    {title:'代码审查 vs. 独立质疑',names:['code-review-and-quality','doubt-driven-development'],questions:['这次改动整体是否可靠？','这个重要判断真的成立吗？'],explanations:['面对完成的改动，从正确性、可读性、架构、安全和性能检查，并给出分级问题。','在工作进行中提取关键对象与契约，交给新上下文寻找反例，再处理发现。'],connection:'一个覆盖完成后的改动，一个尽早挑战重要判断。两者都需要具体对象与证据。'},
    {title:'质量约束 vs. CI/CD',names:['constraint-driven-development','ci-cd-and-automation'],questions:['哪些标准必须达标？','怎样持续自动执行检查？'],explanations:['定义质量维度、阈值、验证方式与例外，检查标准是否为了通过而被削弱。','配置流水线、运行环境和失败反馈，让每次变更执行检查与构建。'],connection:'约束规定标准，流水线落实执行。存在规则文档不等于已有强制检查。'},
    {title:'测试驱动 vs. 浏览器验证',names:['test-driven-development','browser-testing-with-devtools'],questions:['目标行为能否被测试证明？','用户实际看到什么、操作是否有效？'],explanations:['以失败测试定义行为，修复或实现后确认通过，为后续变更留下回归保护。','查看真实页面、控制台、请求和渲染状态，验证交互与运行现象。'],connection:'自动测试与运行现场互补。单次浏览器验证并不自动成为长期回归测试。'},
    {title:'根因排错 vs. 可观测性',names:['debugging-and-error-recovery','observability-and-instrumentation'],questions:['这一次为什么出错？','下次出错时能看见什么？'],explanations:['复现现象、缩小问题、定位根因，完成修复并验证原始路径。','建设日志、指标、追踪和告警，让故障能被发现、关联和定位。'],connection:'观测信号是排错的重要依据；拥有日志不等于已经完成根因分析。'},
    {title:'上下文管理 vs. 决策记录',names:['context-engineering','documentation-and-adrs'],questions:['当前应该让模型看到哪些信息？','哪些理由值得长期保存？'],explanations:['整理任务相关背景与约束，减少过时、无关资料干扰，并在换任务时刷新上下文。','保存选择的背景、备选方案和取舍，维护项目说明，供后来者理解与接续。'],connection:'文档积累知识，上下文管理在当前工作中挑选和组织这些知识。'}
  ];
  $('#comparison-list').innerHTML = comparisons.map((pair,index) => `<article class="compare-card"><div class="compare-heading"><span>${String(index+1).padStart(2,'0')}</span><h3>${esc(pair.title)}</h3></div><div class="compare-columns">${pair.names.map((name,i) => {
    const skill = skills.find(item => item.name === name);
    return `<div class="compare-column"><h4>${esc(skill.title)}</h4><div class="skill-slug">${esc(name)}</div><p class="compare-question">${esc(pair.questions[i])}</p><p>${esc(pair.explanations[i])}</p><button data-open="${esc(name)}">查看完整能力 ↗</button></div>`;
  }).join('')}</div><div class="compare-connection">${esc(pair.connection)}</div></article>`).join('');

  document.addEventListener('click', event => {
    const opener = event.target.closest('[data-open]');
    if (opener) openSkill(opener.dataset.open, opener);
    const phaseButton = event.target.closest('[data-phase]');
    if (phaseButton) {
      state.phase = phaseButton.dataset.phase;
      setView('catalog');
      document.querySelectorAll('[data-phase]').forEach(button => {
        const active = button.dataset.phase === state.phase;
        button.classList.toggle('active', active);
        button.setAttribute('aria-pressed', String(active));
      });
      renderCatalog();
      $('#tab-catalog').scrollIntoView({block:'start'});
    }
    const tab = event.target.closest('[data-view]');
    if (tab) setView(tab.dataset.view);
  });
  $('#search').addEventListener('input', event => {state.query = event.target.value; renderCatalog();});
  $('#clear-search').addEventListener('click', () => {state.query = ''; $('#search').value = ''; renderCatalog(); $('#search').focus();});
  $('#reset-filters').addEventListener('click', () => {state.query = ''; state.phase = ''; $('#search').value = ''; renderPhases(); renderCatalog(); $('#search').focus();});
  $('#close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    if (location.hash.startsWith('#skill=')) history.replaceState(null, '', '#' + state.view);
    if (lastTrigger?.isConnected) lastTrigger.focus({preventScroll:true});
  });
  $('.tabs').addEventListener('keydown', event => {
    const tabs = [...document.querySelectorAll('[role="tab"]')];
    const index = tabs.indexOf(document.activeElement);
    if (index < 0 || !['ArrowRight','ArrowLeft','Home','End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    tabs[next].focus();
    setView(tabs[next].dataset.view);
  });
  function route() {
    let hash;
    try { hash = decodeURIComponent(location.hash.slice(1)); } catch { hash = 'catalog'; }
    if (hash === 'main') return;
    if (hash.startsWith('skill=')) {
      const name = hash.slice(6);
      if (skills.some(skill => skill.name === name)) openSkill(name, null, false);
      else setView('catalog');
    } else {
      if (dialog.open) dialog.close();
      setView(hash, false);
    }
  }
  renderPhases();
  renderCatalog();
  route();
  window.addEventListener('hashchange', route);
})();
