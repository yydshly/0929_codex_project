'use strict';
(() => {
  const map = window.FULL_MAP_LAYOUT;
  const viewport = document.querySelector('#map-viewport');
  const stage = document.querySelector('#map-stage');
  const slider = document.querySelector('#zoom');
  const label = document.querySelector('#zoom-label');
  const select = document.querySelector('#jump-skill');
  const status = document.querySelector('#map-status');
  let scale = .2;
  let lastFit = 'all';
  let dragging = null;
  for (const [index, skill] of map.skills.entries()) {
    const option = document.createElement('option');
    option.value = skill.id;
    option.textContent = `${String(index + 1).padStart(2,'0')} · ${skill.title}`;
    select.append(option);
  }
  function applyScale(next, anchor = null) {
    const point = anchor || {x:viewport.clientWidth / 2, y:viewport.clientHeight / 2};
    const oldLeft = stage.offsetLeft;
    const oldTop = stage.offsetTop;
    const mapX = (viewport.scrollLeft + point.x - oldLeft) / scale;
    const mapY = (viewport.scrollTop + point.y - oldTop) / scale;
    scale = Math.max(.04, Math.min(1.5, next));
    stage.style.width = `${map.width * scale}px`;
    stage.style.height = `${map.height * scale}px`;
    slider.value = Math.round(scale * 100);
    label.textContent = `${Math.round(scale * 100)}%`;
    viewport.scrollLeft = mapX * scale + stage.offsetLeft - point.x;
    viewport.scrollTop = mapY * scale + stage.offsetTop - point.y;
  }
  function fit(mode) {
    lastFit = mode;
    const availableWidth = Math.max(100,viewport.clientWidth - 60);
    const availableHeight = Math.max(100,viewport.clientHeight - 60);
    const next = mode === 'all' ? Math.min(availableWidth / map.width, availableHeight / map.height) : availableWidth / map.width;
    applyScale(next);
    viewport.scrollLeft = 0;
    viewport.scrollTop = 0;
    select.value = '';
    status.textContent = `${map.width} × ${map.height} · 25 / 25 项`;
  }
  function locate(id) {
    const skill = map.skills.find(item => item.id === id);
    if (!skill) return;
    lastFit = null;
    applyScale(viewport.clientWidth < 600 ? .8 : 1);
    viewport.scrollLeft = (skill.x + skill.width / 2) * scale + stage.offsetLeft - viewport.clientWidth / 2;
    viewport.scrollTop = skill.y * scale + stage.offsetTop - 20;
    status.textContent = `正在阅读：${skill.title}`;
  }
  slider.addEventListener('input',()=>{lastFit = null;applyScale(Number(slider.value)/100);});
  document.querySelector('#zoom-in').addEventListener('click',()=>{lastFit = null;applyScale(scale * 1.3);});
  document.querySelector('#zoom-out').addEventListener('click',()=>{lastFit = null;applyScale(scale / 1.3);});
  document.querySelector('#fit-all').addEventListener('click',()=>fit('all'));
  document.querySelector('#fit-width').addEventListener('click',()=>fit('width'));
  document.querySelector('#read-size').addEventListener('click',()=>{lastFit = null;applyScale(1);});
  select.addEventListener('change',()=>locate(select.value));
  viewport.addEventListener('wheel',event=>{
    if (!event.ctrlKey) return;
    event.preventDefault();
    const bounds = viewport.getBoundingClientRect();
    lastFit = null;
    applyScale(scale * Math.exp(-event.deltaY * .002),{x:event.clientX - bounds.left,y:event.clientY - bounds.top});
  },{passive:false});
  viewport.addEventListener('pointerdown',event=>{
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    event.preventDefault();
    dragging = {id:event.pointerId,x:event.clientX,y:event.clientY,left:viewport.scrollLeft,top:viewport.scrollTop};
    viewport.setPointerCapture(event.pointerId);
    viewport.classList.add('dragging');
  });
  viewport.addEventListener('pointermove',event=>{
    if (!dragging || dragging.id !== event.pointerId) return;
    viewport.scrollLeft = dragging.left - (event.clientX - dragging.x);
    viewport.scrollTop = dragging.top - (event.clientY - dragging.y);
  });
  function stopDragging(){dragging = null;viewport.classList.remove('dragging');}
  viewport.addEventListener('pointerup',stopDragging);
  viewport.addEventListener('pointercancel',stopDragging);
  viewport.addEventListener('lostpointercapture',stopDragging);
  new ResizeObserver(()=>{if(lastFit)fit(lastFit);}).observe(viewport);
  fit('all');
})();
