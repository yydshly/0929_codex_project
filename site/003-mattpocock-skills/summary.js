"use strict";
(() => {
  const summary=DATA.summary;
  $("summary-definition").textContent=summary.definition;
  $("summary-effect").textContent=summary.effect;
  $("summary-types").innerHTML=summary.types.map(t=>{
    const skills=DATA.skills.filter(s=>s.domain===t.domain);
    return `<article class="type-card"><div class="card-meta"><span>遇到：${esc(t.problem)}</span><span>${skills.length} 项</span></div><h4>${esc(t.domain)}</h4><p>${esc(t.ability)}</p><p class="type-result"><strong>可实现效果</strong>${esc(t.result)}</p><p><strong>什么时候用：</strong>${esc(t.when)}</p><div class="summary-sample"><span>${esc(t.exampleTitle)} · 说明性样张</span>${t.example.map(line=>`<div>${esc(line)}</div>`).join("")}</div>${t.demo?`<button type="button" class="summary-action" data-demo="${t.demo}">直接看对应场景 →</button>`:`<button type="button" class="summary-action" data-domain="${esc(t.domain)}">查看 4 个专项技能 →</button>`}<details><summary>展开全部 ${skills.length} 个技能</summary><div class="type-skill-list">${skills.map(s=>`<button type="button" data-open="${s.name}"><span>${esc(s.title_zh)}</span><small>${esc(s.name)} · ${statusName(s)}</small></button>`).join("")}</div></details></article>`;
  }).join("");
  $("summary-personal").innerHTML=summary.personal.map(p=>`<article class="personal-stage"><h4>${esc(p.stage)}</h4><p><strong>触发场景</strong>${esc(p.trigger)}</p><p><strong>对应能力</strong>${esc(p.skills)}</p><p class="personal-gain">${esc(p.gain)}</p><button type="button" class="summary-action" data-demo="${p.demo}">打开相关示例 →</button></article>`).join("");
  $("summary-mechanism").textContent=summary.mechanism;
  $("summary-boundary").textContent=summary.boundary;
})();
