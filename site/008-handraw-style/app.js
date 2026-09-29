const styles = [
  {id:'018',name:'极简冷面对白漫画',en:'Minimal Deadpan Dialogue Cartoon',traits:'极简圆头人物、干净轮廓、白底、少量灰蓝与米色；靠冷淡姿态制造幽默。',use:'日常吐槽、情绪卡、轻松故事',bg:'#f2efe9',stroke:'#292b2b'},
  {id:'042',name:'自然主义水彩动物绘本',en:'Naturalist Watercolor Animal Storybook',traits:'精细水彩、自然主义动物、古典绘本、柔和纸张感。',use:'儿童、自然、动物主题',bg:'#f2e6d4',stroke:'#71665a'},
  {id:'268',name:'当代人文水墨漫画',en:'Contemporary Literati Ink Cartoon',traits:'松弛墨线、白纸留白、少量朱红或赭石点染、现代生活场景。',use:'节气、生活观察、文化海报',bg:'#f0ece3',stroke:'#262829'},
  {id:'275',name:'复古双色印刷插画',en:'Vintage Risograph and Silkscreen Print Illustration',traits:'旧纸底、双色套印、粗颗粒与磨损边缘，带复古旅行宣传气质。',use:'旅行、文创、复古活动',bg:'#eaddc6',stroke:'#264662'},
  {id:'276',name:'清透扁平插画',en:'Clean Airy Flat Vector Illustration',traits:'大面积平涂、清晰轮廓、圆润几何、浅层硬边阴影。',use:'产品介绍、商业插画',bg:'#dcefe6',stroke:'#365b57'},
  {id:'280',name:'简笔与半写实融合',en:'Minimalist Doodle & Semi-Realistic Hybrid Illustration',traits:'简笔主体和更细腻的环境并置，浅色系、留白、温柔轻盈。',use:'治愈、生活方式、诗意主题',bg:'#e9eadc',stroke:'#556a61'}
];
const colors=[
  {id:'C-01',name:'克莱因蓝',en:'Klein Blue',use:'科技 / 深海 / 理性',hex:'#1439aa'},
  {id:'C-10',name:'鼠尾草绿',en:'Sage Green',use:'自然 / 健康 / 生活',hex:'#87977b'},
  {id:'C-16',name:'中国红',en:'Chinese Red',use:'节庆 / 文化 / 力量',hex:'#b33d32'},
  {id:'C-21',name:'珊瑚粉',en:'Coral Pink',use:'柔和 / 诗意 / 情绪',hex:'#c7949e'},
  {id:'C-26',name:'柿子橙',en:'Persimmon Orange',use:'秋日 / 温暖 / 轻松',hex:'#e3894c'},
  {id:'C-31',name:'佩恩灰',en:"Payne's Grey",use:'克制 / 建筑 / 沉思',hex:'#455966'}
];
const layouts=[
  {id:'none',name:'无固定版式',instruction:''},
  {id:'SC-001',name:'上文下图社媒卡',instruction:'上方集中放主题文字和简短补充文案，下方放完整主画面；阅读顺序清楚。'},
  {id:'IG-001',name:'标题金字塔信息图',instruction:'顶部放明确标题，主体以层级递进的金字塔展示内容，每层使用带标签的图标。'},
  {id:'IG-003',name:'多行左文右图信息图',instruction:'顶部放标题，主体使用三到五行左文右图模块，底部可以放一句提醒。'},
  {id:'SB-002',name:'四格起承转合漫画',instruction:'四个等格依次承担铺垫、发展、转折和收尾，保持人物外观一致。'}
];
const grid=document.getElementById('style-grid');
styles.forEach(s=>{const button=document.createElement('button');button.type='button';button.className='style-card';button.dataset.style=s.id;button.setAttribute('aria-expanded','false');button.innerHTML=`<div class="style-art"><img src="media/individual/${Number(s.id)<=200?'001-200':'201-400'}/${s.id}.webp" alt="上游 #${s.id} 风格参考图" loading="lazy"></div><div class="style-card-info"><span class="id">#${s.id} / 上游参考图</span><h3>${s.name}</h3><p>${s.en}</p><div class="detail"><p><strong>视觉线索：</strong>${s.traits}</p><p><strong>适用：</strong>${s.use}</p></div></div>`;button.addEventListener('click',()=>button.setAttribute('aria-expanded',String(button.getAttribute('aria-expanded')!=='true')));grid.appendChild(button)});
const colorGrid=document.getElementById('colors-grid');
colors.forEach(c=>{const item=document.createElement('article');item.className='color-card';item.innerHTML=`<img class="swatch-image" src="media/colors/${c.id}.webp" alt="上游 ${c.id} ${c.name} 主题色预览" loading="lazy"><span>${c.id}</span><h3>${c.name}</h3><p>${c.use}</p>`;colorGrid.appendChild(item)});
const trials=[
  {file:'style-268-c26-cat.png',label:'#268 · 当代人文水墨',subject:'同主题 · 猫 · C-26',note:'墨线、留白与橙色点染明显；画面还出现了主题未指定的柿子枝。'},
  {file:'style-275-c26-cat.png',label:'#275 · 复古双色印刷',subject:'同主题 · 猫 · C-26',note:'双色套印和纸纹明显；参考图的山景与树影也被带入。'},
  {file:'style-276-c26-cat.png',label:'#276 · 清透扁平插画',subject:'同主题 · 猫 · C-26',note:'扁平形体与柔和阴影明显；参考图的远山和植被也延续到成图。'},
  {file:'style-276-c01-cat.png',label:'#276 · 克莱因蓝换色',subject:'同风格 · 猫 · C-01',note:'蓝色主视觉清晰；猫与窗台主题保持，但构图并未严格复现橙色版本。'},
  {file:'ig-003-coffee.png',label:'IG-003 · 手冲咖啡信息图',subject:'图文版式 · #276 · C-26',note:'三行左文右图和关键数字准确；模型自行添加了未请求的说明文字。'},
  {file:'sb-002-cat-comic.png',label:'SB-002 · 猫偷饼干四格',subject:'漫画版式 · #268 · C-26',note:'四格顺序、猫的形象和笑点基本连贯；多了未指定的柿子装饰。'},
  {file:'sc-001-autumn-card.png',label:'SC-001 · 秋分社媒卡',subject:'社媒卡版式 · #276 · C-26',note:'上文下图和两行指定中文准确；插画仍带入参考图的远山轮廓。'},
  {file:'photo-redraw-268.png',label:'#268 · 照片转手绘',subject:'合成源照片 · 单图转绘',note:'猫的蓝色项圈、铃铛与姿态保留；笔触转成水墨，毛发仍有一定写实细节。',source:'source-photo-cat.png'},
  {file:'sc-021-photo-split.png',label:'SC-021 · 照片双拼转译',subject:'合成源照片 · #268 · C-26',note:'两块等宽区域、同一只猫与明显媒介反差成立；左侧照片被重新生成，右侧主体大于要求的微缩比例。',source:'source-photo-cat.png'}
];
const trialGrid=document.getElementById('trial-grid');
trials.forEach(t=>{const article=document.createElement('article');article.className='trial-card';article.innerHTML=`<a href="trials/${t.file}" target="_blank" rel="noopener noreferrer"><img src="trials/${t.file}" alt="实际生成：${t.label}" loading="lazy"></a><div><span>内置生图实测 · ${t.subject}</span><h3>${t.label}</h3><p>${t.note}</p><a href="trials/${t.file}" target="_blank" rel="noopener noreferrer">查看原图 ↗</a>${t.source?` · <a href="trials/${t.source}" target="_blank" rel="noopener noreferrer">查看源照片 ↗</a>`:''}</div>`;trialGrid.appendChild(article)});
const styleSelect=document.getElementById('style-select'),layoutSelect=document.getElementById('layout-select'),colorSelect=document.getElementById('color-select'),modeSelect=document.getElementById('mode-select'),output=document.getElementById('prompt-output');
const catalog=window.HANDRAW_CATALOG;
catalog.styles.forEach(s=>styleSelect.add(new Option(`#${s.id} · ${s.reference} / ${s.name}`,s.id)));
layoutSelect.add(new Option('— · 无固定版式','none'));
catalog.layouts.forEach(l=>layoutSelect.add(new Option(`${l.id} · ${l.name}`,l.id)));
catalog.colors.forEach(c=>colorSelect.add(new Option(`${c.id} · ${c.name}`,c.id)));
styleSelect.value='268';colorSelect.value='C-26';
layoutSelect.addEventListener('change',()=>{if(layoutSelect.value!=='none'){modeSelect.value='graphic';modeSelect.disabled=true}else modeSelect.disabled=false;renderPrompt()});
[styleSelect,colorSelect,modeSelect,document.getElementById('theme')].forEach(el=>el.addEventListener('change',renderPrompt));
document.getElementById('theme').addEventListener('input',renderPrompt);
document.getElementById('prompt-form').addEventListener('submit',e=>{e.preventDefault();renderPrompt()});
function renderPrompt(){const theme=document.getElementById('theme').value.trim()||'【填写你的画面主题】';const style=catalog.styles.find(s=>s.id===styleSelect.value);const layout=catalog.layouts.find(l=>l.id===layoutSelect.value);const color=catalog.colors.find(c=>c.id===colorSelect.value);const graphic=Boolean(layout)||modeSelect.value==='graphic';const parts=[`主题：${theme}`,`风格：#${style.id} ${style.name}（${style.reference}）。`,`可见风格特征：${style.traits}`,color.promptZh];if(layout)parts.push(`版式 ${layout.id} · ${layout.name}：${layout.promptZh}`);parts.push(graphic?'模式：图文。文字参与画面构图，请核对文字与数字。':'模式：纯图。不在画面中添加文字。');parts.push('参考图：请打开下方所选风格图；使用版式时同时提供版式图。参考图仅用于视觉或结构，不复制示例主题。');output.textContent=parts.join('\n\n');const styleRef=document.getElementById('selected-style-reference'),layoutRef=document.getElementById('selected-layout-reference');styleRef.href=style.image;layoutRef.hidden=!layout;if(layout)layoutRef.href=layout.image}
renderPrompt();
document.getElementById('copy-prompt').addEventListener('click',async e=>{const btn=e.currentTarget;try{await navigator.clipboard.writeText(output.textContent);btn.textContent='已复制';setTimeout(()=>btn.textContent='复制文本',1800)}catch{btn.textContent='请手动选择文本';setTimeout(()=>btn.textContent='复制文本',2500)}});
