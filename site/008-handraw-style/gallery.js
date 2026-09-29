const catalog=window.HANDRAW_CATALOG;
const grid=document.getElementById('gallery-grid');
const search=document.getElementById('search');
const group=document.getElementById('group');
const dialog=document.getElementById('detail');
const sourceBase=`https://github.com/yang0/handraw-style/blob/${catalog.commit}/`;
let type=['styles','layouts','colors'].includes(new URLSearchParams(location.search).get('type'))?new URLSearchParams(location.search).get('type'):'styles';
document.getElementById('version').textContent=catalog.version;
document.getElementById('revision').textContent=`固定提交 ${catalog.commit.slice(0,12)}`;
document.getElementById('style-count').textContent=catalog.styles.length;
document.getElementById('layout-count').textContent=catalog.layouts.length;
document.getElementById('color-count').textContent=catalog.colors.length;
const names={styles:'风格',layouts:'版式',colors:'主题色'};
function groupName(item){return type==='styles'?item.group:type==='layouts'?({'social-card':'社媒卡','infographic':'信息图','comic-storyboard':'漫画分镜'}[item.category]||item.category):item.category}
function options(){const values=[...new Set(catalog[type].map(groupName))];group.replaceChildren(new Option('全部分组','all'),...values.map(value=>new Option(value,value)))}
function searchText(item){return [item.id,item.name,item.nameEn,item.reference,item.group,item.category,item.traits,item.quote,...(item.keywords||[])].filter(Boolean).join(' ').toLocaleLowerCase()}
function render(){const q=search.value.trim().toLocaleLowerCase(),g=group.value;const items=catalog[type].filter(item=>(g==='all'||groupName(item)===g)&&(!q||searchText(item).includes(q)));grid.replaceChildren();const fragment=document.createDocumentFragment();for(const item of items){const button=document.createElement('button');button.type='button';button.className=`item ${type==='layouts'?'layout':''}`;const img=document.createElement('img');img.src=item.image;img.alt=`${item.id} ${item.name} 的上游参考图`;img.loading='lazy';const info=document.createElement('div');info.className='item-info';const id=document.createElement('span');id.className='item-id';id.textContent=item.id;const title=document.createElement('h2');title.textContent=item.name;const sub=document.createElement('p');sub.textContent=type==='styles'?item.reference:type==='layouts'?groupName(item):item.nameEn;info.append(id,title,sub);button.append(img,info);button.addEventListener('click',()=>openDetail(item));fragment.append(button)}grid.append(fragment);document.getElementById('result-count').textContent=`显示 ${items.length} / ${catalog[type].length} 个${names[type]}`;document.getElementById('empty').hidden=items.length!==0}
function openDetail(item){document.getElementById('detail-image').src=item.image;document.getElementById('detail-image').alt=`${item.id} ${item.name} 的上游参考图`;document.getElementById('detail-tag').textContent=`${item.id} / ${groupName(item)}`;document.getElementById('detail-title').textContent=item.name;document.getElementById('detail-subtitle').textContent=type==='styles'?`${item.reference} · ${item.name}`:type==='layouts'?item.nameEn:item.nameEn;document.getElementById('detail-description').textContent=type==='styles'?`核心视觉特征：${item.traits||'上游未填写文字特征，请看参考图。'}`:type==='layouts'?`上游中文版式提示词：\n${item.promptZh}`:`${item.quote}\n${item.promptZh}`;document.getElementById('detail-source').href=sourceBase+item.sourcePath;dialog.showModal()}
document.querySelector('.close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
document.querySelectorAll('[data-type]').forEach(button=>button.addEventListener('click',()=>{type=button.dataset.type;document.querySelectorAll('[data-type]').forEach(other=>other.setAttribute('aria-pressed',String(other===button)));search.value='';options();render()}));
search.addEventListener('input',render);group.addEventListener('change',render);document.querySelectorAll('[data-type]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.type===type)));options();render();
