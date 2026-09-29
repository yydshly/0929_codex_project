// Educational interactions only; build.mjs injects the fixed local content.
const scenarios = SCENARIOS_DATA;
const steps = STEPS_DATA;
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
