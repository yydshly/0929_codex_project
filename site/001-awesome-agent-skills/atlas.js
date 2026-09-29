(() => {
 'use strict';
 const data=window.ATLAS,$=id=>document.getElementById(id),esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const entries=new Map(data.entries.map(e=>[e.id,e])),groups=new Map(data.groups.map(g=>[g.id,g]));
 $('map').innerHTML=window.ATLAS_SVG;
 const svg=$('map').querySelector('svg');svg.removeAttribute('width');svg.removeAttribute('height');svg.setAttribute('preserveAspectRatio','none');svg.setAttribute('role','group');
 const nodes=new Map([...svg.querySelectorAll('.skill-node')].map(n=>[n.dataset.id,n]));
 let camera={x:0,y:0,w:data.width,h:data.height},fitCamera,selected=null,matches=[],matchIndex=-1,drag=null,atOverview=true,lastDetail=null;
 const texts=[...svg.querySelectorAll('.leaf-text,.profile')],miniLabels=[...svg.querySelectorAll('.mini-label')];
 function size(){return {w:$('viewport').clientWidth,h:$('viewport').clientHeight};}
 function update(){
  const {w}=size(),scale=w/camera.w;
  svg.setAttribute('viewBox',`${camera.x} ${camera.y} ${camera.w} ${camera.h}`);
  $('zoom-level').textContent=`${Math.round(scale*100)}%`;
  const detail=scale>=.37;
  if(detail!==lastDetail){texts.forEach(n=>n.style.display=detail?'':'none');lastDetail=detail;}
  miniLabels.forEach(n=>{n.style.display=detail?'none':'';n.setAttribute('font-size',Math.min(175,Math.max(36,10/scale)));n.setAttribute('y',Number(n.dataset.y)+Math.min(190,Math.max(70,22/scale)));});
 }
 function frame(box,padding=1.12){
  atOverview=false;
  const {w,h}=size(),r=w/h;let bw=box.w*padding,bh=box.h*padding;
  if(bw/bh<r)bw=bh*r;else bh=bw/r;
  camera={x:box.x+(box.w-bw)/2,y:box.y+(box.h-bh)/2,w:bw,h:bh};update();
 }
 function fit(){frame({x:0,y:0,w:data.width,h:data.height},1.09);atOverview=true;fitCamera={...camera};$('map-status').textContent=`全图 · ${data.total.toLocaleString()} 项均已绘制`;}
 function zoom(factor,px,py){atOverview=false;const {w,h}=size();px=px??w/2;py=py??h/2;const nw=Math.max(w/2.6,Math.min(fitCamera.w*2,camera.w/factor)),ratio=nw/camera.w;camera={x:camera.x+px/w*camera.w*(1-ratio),y:camera.y+py/h*camera.h*(1-ratio),w:nw,h:camera.h*ratio};update();}
 function sections(group){return [['能力范围',group.scope],['使用场景',group.scenario],['目的与预期效果',group.outcome],['可扩展方向',group.extension],['对你的意义',group.value]].map(([name,value],i)=>`<section><h3><b>0${i+1}</b>${name}</h3><p>${esc(value)}</p></section>`).join('');}
 function regionButtons(group){const panels=data.panels.filter(p=>p.domain===group.id);return panels.length>1?`<div class="region-buttons">${panels.map((p,i)=>`<button data-region="${p.id}">分区 ${i+1}</button>`).join('')}</div>`:'';}
 function showOverview(){
  $('details').innerHTML=`<p class="detail-kicker">从能力，连接到你的工作</p><h2>一份可以探索的<br>开源能力版图</h2><p class="detail-intro">所有条目都已放在同一张图中。选择左侧方向，或搜索并定位到某个技能。</p><span class="pill">全部 1,108 个目录入口</span><span class="pill">20 个主方向</span><section><h3>对你当前工作的意义</h3><p>以你正在进行的开源项目研究和网页展示为起点，可以逐步建立自己的研究与交付流程。</p></section>${[['发现与判断','搜索资料 → 产品研究 → 判断项目价值'],['表达与制作','文档整理 → 视觉设计 → 网站原型'],['接入与验证','数据与接口 → 质量测试 → 云端交付'],['沉淀与扩展','自动化重复工作 → 复用方法 → 专属 Agent']].map((s,i)=>`<div class="path-step"><span>${i+1}</span><div><b>${s[0]}</b><small>${s[1]}</small></div></div>`).join('')}<section><h3>怎样读这张图</h3><p>每个小方块对应一个目录条目。放大可读完整中文能力说明，点击可查看方向场景、预期效果、扩展与个人价值。</p></section><p class="note">全部能力简介已译为中文，40 项另有深入解读。场景和价值按方向归纳，不代表每个条目具备该方向全部能力。</p><a class="source-link" href="https://github.com/VoltAgent/awesome-agent-skills/blob/${data.commit}/README.md" target="_blank" rel="noopener">查看固定版本原目录 ↗</a>`;
 }
 function activeDomain(id){document.querySelectorAll('.direction').forEach(n=>n.classList.toggle('active',n.dataset.domain===id));svg.querySelectorAll('.domain-panel').forEach(n=>n.classList.toggle('highlight',n.dataset.domain===id));}
 function focusDomain(id,region){const g=groups.get(id);if(!g)return;selected=null;nodes.forEach(n=>n.classList.remove('selected'));activeDomain(id);const p=data.panels.find(p=>region?p.id===region:p.domain===id);frame(p);$('map-status').textContent=`${g.title} · ${g.entries.length} 项 · 分区 ${p.part}/${p.parts}`;$('details').innerHTML=`<p class="detail-kicker">能力方向</p><h2>${esc(g.title)}</h2><span class="pill">${g.entries.length} 个目录条目</span>${regionButtons(g)}${sections(g)}<p class="evidence">以上为该方向的研究归纳；具体能力以各技能原始说明为准。目录归类为单一主方向，实际能力可能跨领域。</p>`;}
 function focusEntry(id){const e=entries.get(id);if(!e)return;const g=groups.get(e.domain);selected=id;activeDomain(g.id);nodes.forEach((n,key)=>n.classList.toggle('selected',key===id));frame(e.box,1.6);$('map-status').textContent=e.name;const d=e.detail;const inherited={...g,scope:d?d.summary:e.capability,scenario:d?d.example:g.scenario,outcome:d?d.output:g.outcome};$('details').innerHTML=`<p class="detail-kicker">具体条目</p><h2>${esc(d?.title||e.name)}</h2><span class="pill">${esc(g.title)}</span><p class="evidence">${esc(e.name)} · ${esc(e.sectionZh)}</p><section><h3>能力说明 · 中文翻译</h3><p class="original">${esc(e.capability)}</p><details class="source-original"><summary>查看英文原文（对照）</summary><p>${esc(e.capabilityOriginal)}</p></details></section>${d?`<section><h3>中文具体能力</h3><p>${esc(d.summary)}</p></section><section><h3>具体任务</h3>${d.tasks.map(t=>`<p>· ${esc(t)}</p>`).join('')}</section>`:''}${[['使用场景',inherited.scenario],['目的与预期效果',inherited.outcome],['可扩展方向',g.extension],['对你的意义',g.value]].map(([k,v],i)=>`<section><h3><b>0${i+1}</b>${k}${!d||i>1?' · 方向归纳':''}</h3><p>${esc(v)}</p></section>`).join('')}${d?`<section><h3>能力边界</h3><p>${esc(d.boundary)}</p></section>`:''}<p class="evidence">${d?`中文解读依据：${esc(d.evidence)}；扩展与个人价值为方向归纳。`:'场景、目的效果、扩展与个人价值来自所属方向，提供选型背景，不是对该条目逐项实测或功能承诺。'}<br>归类依据：${esc(e.basis)}。未执行技能。</p><a class="source-link" href="${esc(e.url)}" target="_blank" rel="noopener noreferrer">技能原始来源 ↗</a><a class="source-link" href="https://github.com/VoltAgent/awesome-agent-skills/blob/${data.commit}/README.md#L${e.line}" target="_blank" rel="noopener">目录证据 ↗</a><div class="region-buttons"><button data-back="${g.id}">查看所属方向</button></div>`;}
 $('directions').innerHTML=data.groups.map(g=>`<button class="direction" data-domain="${g.id}" style="--tint:${g.color}"><i></i>${esc(g.title)}<span>${g.entries.length}</span></button>`).join('');
 $('directions').addEventListener('click',e=>{const b=e.target.closest('[data-domain]');if(b)focusDomain(b.dataset.domain);});
 $('details').addEventListener('click',e=>{const region=e.target.closest('[data-region]'),back=e.target.closest('[data-back]');if(region){const p=data.panels.find(p=>p.id===region.dataset.region);focusDomain(p.domain,p.id);}if(back)focusDomain(back.dataset.back);});
 function overview(){activeDomain(null);nodes.forEach(n=>n.classList.remove('selected'));selected=null;showOverview();fit();}
 $('all').onclick=overview;$('fit').onclick=overview;$('zoom-in').onclick=()=>zoom(1.5);$('zoom-out').onclick=()=>zoom(1/1.5);
 function moveMatch(delta){if(!matches.length)return;matchIndex=(matchIndex+delta+matches.length)%matches.length;focusEntry(matches[matchIndex].id);$('search-count').textContent=`${matchIndex+1} / ${matches.length}`;}
 $('next').onclick=()=>moveMatch(1);$('previous').onclick=()=>moveMatch(-1);
 const searchIndex=data.entries.map(e=>({e,text:[e.name,e.capability,e.capabilityOriginal,e.section,e.sectionZh,e.detail?.title,e.detail?.summary,groups.get(e.domain).title].join(' ').toLowerCase()}));
 $('search').addEventListener('input',()=>{const q=$('search').value.trim().toLowerCase(),terms=q.split(/\s+/);matches=q?searchIndex.filter(x=>terms.every(t=>x.text.includes(t))).map(x=>x.e):[];matchIndex=-1;const ids=new Set(matches.map(e=>e.id));nodes.forEach((n,id)=>n.classList.toggle('match',ids.has(id)));$('previous').disabled=$('next').disabled=!matches.length;$('search-count').textContent=q?`${matches.length} 项`:'';if(matches.length)moveMatch(1);else if(!q)overview();});
 $('search').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();moveMatch(e.shiftKey?-1:1);}});
 let suppressClick=false;
 $('viewport').addEventListener('pointerdown',e=>{if(e.button!==0||e.target.closest('.map-controls'))return;drag={id:e.pointerId,x:e.clientX,y:e.clientY,camera:{...camera},moved:false};});
 $('viewport').addEventListener('pointermove',e=>{if(!drag||e.pointerId!==drag.id)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(Math.hypot(dx,dy)>4&&!drag.moved){drag.moved=true;$('viewport').setPointerCapture(e.pointerId);}if(drag.moved){const {w}=size(),scale=drag.camera.w/w;camera={...drag.camera,x:drag.camera.x-dx*scale,y:drag.camera.y-dy*scale};$('viewport').classList.add('dragging');update();}});
 $('viewport').addEventListener('pointerup',e=>{if(!drag)return;suppressClick=drag.moved;drag=null;$('viewport').classList.remove('dragging');if($('viewport').hasPointerCapture(e.pointerId))$('viewport').releasePointerCapture(e.pointerId);setTimeout(()=>suppressClick=false,0);});
 $('viewport').addEventListener('pointercancel',()=>{drag=null;$('viewport').classList.remove('dragging');});
 svg.addEventListener('click',e=>{const n=e.target.closest('.skill-node'),d=e.target.closest('.domain-jump');if(n||d)e.preventDefault();if(suppressClick)return;if(n)focusEntry(n.dataset.id);else if(d)focusDomain(d.dataset.domain);});
 $('viewport').addEventListener('wheel',e=>{e.preventDefault();const r=$('viewport').getBoundingClientRect();zoom(Math.exp(-Math.max(-100,Math.min(100,e.deltaY))*.003),e.clientX-r.left,e.clientY-r.top);},{passive:false});
 $('viewport').addEventListener('keydown',e=>{if(e.target.closest('input,button'))return;if(e.key==='+'||e.key==='=')zoom(1.5);else if(e.key==='-')zoom(1/1.5);else if(e.key==='0')overview();else return;e.preventDefault();});
 new ResizeObserver(()=>{if(!fitCamera||atOverview){fit();return;}const {w,h}=size();camera.h=camera.w*h/w;update();}).observe($('viewport'));
 showOverview();requestAnimationFrame(fit);
})();
