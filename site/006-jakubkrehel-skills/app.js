const search = document.querySelector('#search');
const filters = [...document.querySelectorAll('[data-filter]')];
const skills = [...document.querySelectorAll('.skill')];
const result = document.querySelector('#results');
const reset = document.querySelector('#reset');
let category = 'all';
const searchable = new Map(skills.map(el=>[el,el.textContent.toLocaleLowerCase()]));
function filterSkills(){
  const words=search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  let count=0,items=0;
  skills.forEach(el=>{
    const shown=(category==='all'||el.dataset.category===category)&&words.every(word=>searchable.get(el).includes(word));
    el.hidden=!shown;
    if(shown){count++;items+=el.querySelectorAll('tbody tr').length;}
  });
  filters.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===category)));
  result.textContent=`显示 ${count} 个技能 · ${items} 条能力`;
  document.querySelector('#empty').hidden=count!==0;
  reset.hidden=!search.value&&category==='all';
}
function clearFilters(){search.value='';category='all';filterSkills();}
search.addEventListener('input',filterSkills);
filters.forEach(b=>b.addEventListener('click',()=>{category=b.dataset.filter;filterSkills();}));
reset.addEventListener('click',clearFilters);
document.querySelector('#empty-reset').addEventListener('click',()=>{clearFilters();search.focus();});
function revealHash(){
  const id=decodeURIComponent(location.hash.slice(1));
  const skill=skills.find(el=>el.id===id);
  if(skill){clearFilters();skill.open=true;requestAnimationFrame(()=>skill.scrollIntoView({block:'start'}));}
}
window.addEventListener('hashchange',revealHash);
document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',()=>{
  if(link.hash===location.hash) revealHash();
}));
document.addEventListener('keydown',event=>{
  if(event.key==='/'&&!event.ctrlKey&&!event.metaKey&&!event.altKey&&!event.target.closest('input,textarea,[contenteditable]')){
    event.preventDefault();search.focus();document.querySelector('#skills').scrollIntoView({block:'start'});
  }
  if(event.key==='Escape'&&document.activeElement===search){clearFilters();}
});
const sections=[...document.querySelectorAll('section[id]')];
const navLinks=[...document.querySelectorAll('.topbar nav a')];
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(a=>{if(a.hash==='#'+entry.target.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}});
  },{rootMargin:'-15% 0px -65% 0px'});
  sections.forEach(s=>observer.observe(s));
}
revealHash();
const exampleDisclosure=document.querySelector('.sample-detail');
exampleDisclosure.addEventListener('toggle',()=>{
  exampleDisclosure.querySelector('summary span').textContent=exampleDisclosure.open?'收起':'展开';
});
const taskSelect=document.querySelector('#task-select');
const taskPanels=[...document.querySelectorAll('[data-task]')];
function showTask(announce=false){
  taskPanels.forEach(panel=>{panel.hidden=panel.dataset.task!==taskSelect.value;});
  if(announce)document.querySelector('#task-status').textContent=`已显示：${taskSelect.selectedOptions[0].textContent}的入口、交付与范围说明`;
}
taskSelect.addEventListener('change',()=>showTask(true));
showTask();
