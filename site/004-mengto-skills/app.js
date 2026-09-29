(() => {
  'use strict';
  const data = window.CAPABILITIES;
  const $ = id => document.getElementById(id);
  const groups = new Map(data.groups.map(g => [g.id, g]));
  const skills = new Map(data.skills.map(s => [s.name, s]));
  const state = { group: 'all', query: '', category: 'all', limit: 18 };
  const dialog = $('skill-dialog');
  let opener = null;
  const esc = text => String(text).replace(/[&<>"']/g, x => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
  const normalize = text => text.normalize('NFKC').toLocaleLowerCase().trim();
  const searchable = new Map(data.skills.map(s => [s.name, normalize([s.name,s.title,...s.points,s.scenario,s.output,s.boundary,s.sourceDescription,groups.get(s.group).title,s.categoryLabel].join(' '))]));
  function nav() {
    $('group-nav').innerHTML = [{id:'all',title:'全部能力',count:data.skills.length},...data.groups].map((g,i) => `<button type="button" class="nav-item" data-group="${g.id}" aria-pressed="${state.group === g.id}"><span class="nav-symbol" aria-hidden="true">${i ? String(i).padStart(2,'0') : '◎'}</span><span>${esc(g.title)}</span><span class="nav-count">${g.count}</span></button>`).join('');
  }
  const categories = [...new Map(data.skills.map(s => [s.category,s.categoryLabel])).entries()];
  $('source-category').innerHTML += categories.map(([id,label]) => `<option value="${esc(id)}">${esc(label)} · ${data.skills.filter(s=>s.category===id).length}</option>`).join('');
  function updateUrl() {
    const params = new URLSearchParams();
    if(state.group !== 'all') params.set('group',state.group);
    if(state.query) params.set('q',state.query);
    if(state.category !== 'all') params.set('category',state.category);
    try { history.replaceState(null,'',location.pathname + (params.size ? '?' + params : '') + location.hash); } catch { /* File previews can still filter without a URL update. */ }
  }
  function render() {
    const tokens = normalize(state.query).split(/\s+/).filter(Boolean);
    const result = data.skills.filter(s => (state.group==='all'||s.group===state.group) && (state.category==='all'||s.category===state.category) && tokens.every(token => searchable.get(s.name).includes(token)));
    const group = groups.get(state.group);
    $('catalog-title').textContent = group ? group.title : '全部能力';
    $('group-description').textContent = group ? group.description : '从你关心的效果或问题出发，找到对应的技能。';
    $('result-number').textContent = result.length;
    $('query-status').textContent = `找到 ${result.length} 项 · 已显示 ${Math.min(state.limit,result.length)} 项`;
    $('clear-search').hidden = !state.query;
    $('reset').hidden = state.group==='all' && !state.query && state.category==='all';
    $('empty').hidden = !!result.length;
    $('load-more').hidden = result.length <= state.limit;
    $('remaining').textContent = `还有 ${Math.max(0,result.length-state.limit)} 项`;
    $('skill-grid').innerHTML = result.slice(0,state.limit).map((s,i) => `<article class="skill-card"><div class="card-body"><div class="card-top"><span class="group-tag">${esc(groups.get(s.group).title)}</span><span class="card-index">${String(i+1).padStart(3,'0')}</span></div><h3>${esc(s.title)}</h3><p class="skill-name">${esc(s.name)}</p><p class="card-description">${esc(s.points[0])}。</p><p class="card-output"><span>预期产出</span>${esc(s.output)}</p></div><div class="card-footer"><span>${esc(s.categoryLabel)}</span><button type="button" data-skill="${esc(s.name)}" aria-label="查看${esc(s.title)}的能力详情">查看能力 <span aria-hidden="true">＋</span></button></div></article>`).join('');
    document.querySelectorAll('[data-group]').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.group===state.group)));
    updateUrl();
  }
  function pickGroup(id, shouldScroll=true) {
    state.group = groups.has(id) ? id : 'all'; state.limit = 18;
    render();
    if(shouldScroll) $('catalog').scrollIntoView({block:'start'});
  }
  function reset() {
    state.group='all';state.query='';state.category='all';state.limit=18;
    $('search').value='';$('source-category').value='all';render();
  }
  function openSkill(name, target) {
    const s = skills.get(name); if(!s) return;
    opener = target || document.activeElement;
    $('detail-category').textContent = groups.get(s.group).title + ' / ' + s.categoryLabel;
    $('detail-body').innerHTML = `<div class="detail-content"><h2 id="detail-title">${esc(s.title)}</h2><div class="detail-name">${esc(s.name)}</div><section class="detail-section"><h3>具体负责什么</h3><ul>${s.points.map(p=>`<li>${esc(p)}。</li>`).join('')}</ul></section><section class="detail-section"><h3>对应的场景</h3><p>${esc(s.scenario)}。</p></section><section class="detail-section"><h3>你会得到什么</h3><p>${esc(s.output)}。</p></section><section class="detail-section boundary"><h3>能力边界</h3><p>${esc(s.boundary)}</p></section><div class="detail-links"><a href="${esc(s.source)}" target="_blank" rel="noopener noreferrer">阅读上游技能原文</a>${s.demo ? `<a href="${esc(s.demo)}" target="_blank" rel="noopener noreferrer">查看上游演示源码</a>` : ''}</div><p class="detail-evidence">${s.review==='instruction_body_reviewed'?'已抽查技能正文':'依据技能名称、描述与配套文件归纳'} · 未运行上游实现。产出为能力目标，不代表本次已完成该效果。</p><details class="source-original"><summary>查看原始能力描述</summary><p lang="en">${esc(s.sourceDescription)}</p></details></div>`;
    if(!dialog.open) dialog.showModal();
    dialog.scrollTop=0; document.body.style.overflow='hidden';
    $('close-dialog').focus();
    history.replaceState(null,'',location.pathname+location.search+'#skill='+encodeURIComponent(name));
  }
  function closeSkill() {dialog.close();}
  dialog.addEventListener('close', () => {document.body.style.overflow='';if(location.hash.startsWith('#skill=')) history.replaceState(null,'',location.pathname+location.search);if(opener && opener.isConnected) opener.focus({preventScroll:true});});
  $('close-dialog').addEventListener('click',closeSkill);
  dialog.addEventListener('click',event => {if(event.target===dialog){const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)closeSkill();}});
  document.addEventListener('click',event => {
    const groupButton=event.target.closest('[data-group]');
    const valueButton=event.target.closest('[data-pick]');
    const skillButton=event.target.closest('[data-skill]');
    if(groupButton)pickGroup(groupButton.dataset.group);
    if(valueButton){reset();pickGroup(valueButton.dataset.pick);}
    if(skillButton)openSkill(skillButton.dataset.skill,skillButton);
  });
  $('search').addEventListener('input',event => {state.query=event.target.value;state.limit=18;render();});
  $('source-category').addEventListener('change',event => {state.category=event.target.value;state.limit=18;render();});
  $('clear-search').addEventListener('click',()=>{state.query='';state.limit=18;$('search').value='';render();$('search').focus();});
  $('reset').addEventListener('click',reset);$('empty-reset').addEventListener('click',reset);
  $('load-more').addEventListener('click',()=>{const previous=state.limit;state.limit+=18;render();const firstNew=$('skill-grid').children[previous];if(firstNew)firstNew.querySelector('button').focus({preventScroll:true});});
  const params=new URLSearchParams(location.search);
  if(groups.has(params.get('group')))state.group=params.get('group');
  state.query=params.get('q')||'';
  if(categories.some(([id])=>id===params.get('category')))state.category=params.get('category');
  $('search').value=state.query;$('source-category').value=state.category;
  nav();render();
  if(location.hash.startsWith('#skill='))openSkill(decodeURIComponent(location.hash.slice(7)),null);
  window.addEventListener('hashchange',()=>{if(location.hash.startsWith('#skill='))openSkill(decodeURIComponent(location.hash.slice(7)),null);});
})();
