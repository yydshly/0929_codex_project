(() => {
 const data=window.SKILL_DATA; const $=s=>document.querySelector(s);
 const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 let mode='curated',category='全部能力',query='',page=1;const pageSize=18;
 const params=new URLSearchParams(location.search);if(params.has('q')){mode='catalog';query=params.get('q');$('#search').value=query;}
 const categories=['全部能力',...new Set(data.curated.map(s=>s.category))];
 $('#detail-count').textContent=data.curated.length;$('#total-count').textContent=data.catalog.length.toLocaleString();
 function renderNav(){ $('#categories').innerHTML=categories.map(c=>`<button class="category ${c===category?'active':''}" data-category="${esc(c)}" aria-pressed="${c===category}"><span>${c}</span><span>${c==='全部能力'?data.curated.length:data.curated.filter(s=>s.category===c).length}</span></button>`).join(''); }
 function render(){
   $('#curated-tab').classList.toggle('active',mode==='curated');$('#catalog-tab').classList.toggle('active',mode==='catalog');
   $('#curated-tab').setAttribute('aria-pressed',mode==='curated');$('#catalog-tab').setAttribute('aria-pressed',mode==='catalog');
   let entries=mode==='curated'?data.curated:data.catalog;
   if(category!=='全部能力'){const names=new Set(data.curated.filter(s=>s.category===category).map(s=>s.name));entries=entries.filter(s=>names.has(s.name));}
   const q=query.trim().toLocaleLowerCase();if(q)entries=entries.filter(s=>JSON.stringify(s).toLocaleLowerCase().includes(q));
   const pages=Math.max(1,Math.ceil(entries.length/pageSize));page=Math.min(page,pages);
   $('#view-title').textContent=mode==='catalog'?'完整上游目录':category;
   $('#result-count').textContent=`${entries.length.toLocaleString()} 项${q?'匹配结果':''}`;
   $('#reset').hidden=!q&&category==='全部能力';
   $('#scope-note').textContent=mode==='catalog'?'全部 1,108 项能力简介已译为中文，详情中可展开英文原文对照。条目可能指向单个技能或技能集合，尚未逐项实测。':'能力解释依据上游说明；场景示例和边界为研究归纳，未运行实测。';
   $('#cards').innerHTML=entries.slice((page-1)*pageSize,page*pageSize).map(s=>mode==='curated'?`<article class="card"><div class="card-head"><span class="category-label">${esc(s.category)}</span><span class="evidence">${esc(s.evidence)}</span></div><h3>${esc(s.title)}</h3><p class="skill-name">${esc(s.name)}</p><p class="summary">${esc(s.summary)}</p><ul>${s.tasks.map(t=>`<li>${esc(t)}</li>`).join('')}</ul><div class="card-bottom"><div class="output"><span>典型产物</span>${esc(s.output)}</div><button class="detail-button" data-id="${s.id}">查看详情</button></div></article>`:`<article class="card catalog-card"><div class="card-head"><span class="category-label">上游目录</span></div><h3>${esc(s.name)}</h3><p class="skill-name">${esc(s.sectionZh)}</p><p class="summary">${esc(s.descriptionZh)}</p><div class="card-bottom"><span class="evidence">中文能力简介</span><button class="detail-button" data-id="${s.id}">查看来源</button></div></article>`).join('') || '<div class="empty"><h3>没有找到匹配的技能</h3><p>可以尝试“表格”“Figma”“测试”或英文技能名称。</p><button class="text-button" id="empty-reset">清除筛选</button></div>';
   $('#pagination').innerHTML=pages>1?`<button data-page="${page-1}" ${page===1?'disabled':''}>上一页</button><span>${page} / ${pages}</span><button data-page="${page+1}" ${page===pages?'disabled':''}>下一页</button>`:'';
   renderNav();
 }
 function reset(){category='全部能力';query='';page=1;$('#search').value='';render();}
 function detail(id){const c=data.curated.find(s=>s.id===id),s=c||data.catalog.find(s=>s.id===id);if(!s)return;
   $('#detail-body').innerHTML=c?`<span class="category-label">${esc(c.category)}</span><h2>${esc(c.title)}</h2><p class="skill-name">${esc(c.name)}</p><p>${esc(c.summary)}</p><h3>具体能做的事</h3><ul>${c.tasks.map(t=>`<li>${esc(t)}</li>`).join('')}</ul><h3>典型交付物</h3><p>${esc(c.output)}</p><h3>一个具体场景</h3><p class="example">${esc(c.example)}</p><h3>能力边界</h3><p class="boundary">${esc(c.boundary)}</p><h3>上游能力简介 · 中文翻译</h3><p class="original">${esc(c.originalZh)}</p><details class="source-original"><summary>查看英文原文（对照）</summary><p>${esc(c.original)}</p></details><p class="evidence">依据：${esc(c.evidence)}。场景与边界为研究分析，未运行实测。</p><div class="sources"><a href="${esc(c.source||c.url)}" target="_blank" rel="noopener noreferrer">查看能力来源</a><a href="https://github.com/VoltAgent/awesome-agent-skills/blob/${data.commit}/README.md#L${c.line}" target="_blank" rel="noopener noreferrer">目录原文</a></div>`:`<span class="category-label">上游目录条目</span><h2>${esc(s.name)}</h2><p>${esc(s.sectionZh)}</p><p>${esc(s.descriptionZh)}</p><details class="source-original"><summary>查看英文原文（对照）</summary><p>${esc(s.description)}</p></details><p class="boundary">以上为上游简介的中文翻译，未逐项执行验证；详细能力请以原始技能说明为准。</p><div class="sources"><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">打开原始条目</a><a href="https://github.com/VoltAgent/awesome-agent-skills/blob/${data.commit}/README.md#L${s.line}" target="_blank" rel="noopener noreferrer">目录原文</a></div>`;
   $('#detail').showModal();
 }
 $('#categories').addEventListener('click',e=>{const b=e.target.closest('[data-category]');if(!b)return;category=b.dataset.category;mode='curated';page=1;render();});
 $('#curated-tab').onclick=()=>{mode='curated';page=1;render();};$('#catalog-tab').onclick=()=>{mode='catalog';category='全部能力';page=1;render();};
 $('#search').addEventListener('input',e=>{query=e.target.value;page=1;render();});$('#reset').onclick=reset;
 $('#cards').addEventListener('click',e=>{const b=e.target.closest('[data-id]');if(b)detail(b.dataset.id);if(e.target.id==='empty-reset')reset();});
 $('#pagination').addEventListener('click',e=>{const b=e.target.closest('[data-page]');if(!b||b.disabled)return;page=Number(b.dataset.page);render();$('.toolbar').scrollIntoView({block:'start'});});
 $('#close-detail').onclick=()=>$('#detail').close();$('#detail').addEventListener('click',e=>{if(e.target===$('#detail')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close();}});
 document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)&&!$('#detail').open){e.preventDefault();$('#search').focus();}});
 render();
})();
