const groups=[
  {id:'research',title:'研究与教学',desc:'让抽象内容变成封面、步骤图和可操作的知识图。'},
  {id:'campaign',title:'传播与活动',desc:'同样是海报，换媒介就会改变受众的第一印象。'},
  {id:'brand',title:'品牌与产品',desc:'重点看材质和形象感，作为提案草图很直观。'},
  {id:'story',title:'叙事与娱乐',desc:'从最简线条的四格，到有完整世界氛围的概念图。'},
  {id:'editorial',title:'编辑内容',desc:'文章题图需要情绪、主题与留白相互配合。'},
  {id:'photo',title:'照片再创作',desc:'让真实主体带着可辨认的特征进入新媒介。'}
];
const samples=[
  {group:'research',file:'research-cover',title:'开源工具研究封面',type:'报告 / 分享会',style:'276',styleName:'清透扁平矢量',layout:'SC-001',layoutPath:'social-cards',goal:'给复杂工具做一张可在团队会上使用的研究封面：标题、能力与场景板、电脑。',result:'标题和“能力到场景”的结构明确，会议感成立。',caveat:'画面变成了细致人物插画，偏离 #276 的简洁扁平；模型还添加了未指定的大量说明字。'},
  {group:'research',file:'seed-guide',title:'种子发芽科普图',type:'儿童教育 / 手册',style:'042',styleName:'自然主义水彩绘本',layout:'IG-003',layoutPath:'infographics',goal:'用吸水、萌芽、长叶三步教孩子理解种子发芽。',result:'三个阶段和箭头清楚，水彩植物质感突出。',caveat:'自行加入小鸟、松鼠和长篇说明文字；科普措辞与细节仍需教师校对。'},
  {group:'research',file:'reuse-guide',title:'纸箱再利用步骤图',type:'社区工作坊 / 教程',style:'278',styleName:'折纸拼贴 3D',layout:'IG-003',layoutPath:'infographics',goal:'展示旧纸箱从收集、折叠到变成桌面收纳盒的过程。',result:'三段结构、材料与成品都容易理解，折纸般的立体棱面可见。',caveat:'中间步骤只是视觉概括，不能据此作为精确裁剪与折叠教程。'},
  {group:'campaign',file:'craft-market',title:'周末手作市集',type:'本地活动 / 社媒',style:'225',styleName:'纹理剪纸拼贴绘本',layout:'SC-001',layoutPath:'social-cards',goal:'用时间、标题和摊位氛围吸引附近的人周末逛市集。',result:'主题与时间准确；纸张层次、摊位与手作物件让活动气氛鲜明。',caveat:'画面自行生成了摊位标语；真实活动发布时仍要补地点和主办方。'},
  {group:'campaign',file:'museum-poster',title:'夜间美术馆海报',type:'展览 / 文化活动',style:'259',styleName:'表现性厚涂油画',layout:'SC-001',layoutPath:'social-cards',goal:'用夜间入馆场景和明确时间做一张活动主视觉。',result:'厚重笔触和夜间光线很抓眼；标题与时间可辨读。',caveat:'模型自创了宣传短句；“周五”没有具体日期，不能直接当正式活动公告。'},
  {group:'campaign',file:'water-saving',title:'节约用水公益海报',type:'公共传播 / 校园',style:'269',styleName:'复古现实主义宣传画',goal:'用关紧水龙头的动作传达节水号召。',result:'巨幅标题、红色放射构图和手部动作形成强烈远距离识别。',caveat:'自行添加了多处口号与群众场景；实际投放需要复核措辞和传播语境。'},
  {group:'brand',file:'sprout-mascot',title:'新芽品牌吉祥物',type:'品牌 IP / 表情方向',style:'232',styleName:'蓬松毛绒玩具 3D',goal:'做一个绿色新芽毛绒角色，展示主视图与两种表情。',result:'纤维、刺绣眼睛和三种表情都有可见差异，适合讨论 IP 气质。',caveat:'这是形象概念，不含生产纸样、尺寸或可执行的角色规范。'},
  {group:'brand',file:'knit-lookbook',title:'手作针织围巾展示',type:'产品视觉 / Lookbook',style:'221',styleName:'羊毛毡与针织 3D 偶',goal:'用一个人偶模特展示厚针织围巾、手套和手作质感。',result:'针脚、纱线和哑光纤维清楚，和毛绒玩具样例形成材质差异。',caveat:'画面可用作氛围提案，不能推断真实产品结构或纱线规格。'},
  {group:'story',file:'meeting-comic',title:'忘带幻灯片的四格',type:'团队传播 / 条漫',style:'274',styleName:'手绘火柴人漫画',layout:'SB-002',layoutPath:'comic-storyboards',goal:'用四格讲清楚“进会场、发现缺文件、白板应急、同事鼓掌”。',result:'四格顺序和角色动作清楚，无对白也能读懂情节。',caveat:'人物形象简化，适合轻松内部内容；复杂角色设定和连载一致性仍需管理。'},
  {group:'story',file:'game-concept',title:'赛博朋克车站概念图',type:'游戏 / 世界观探索',style:'239',styleName:'80 年代赛博朋克赛璐璐',goal:'黄雨衣信使在雨夜高架车站等列车，建立游戏的空间与情绪。',result:'角色剪影、列车、湿地反光和城市纵深构成完整叙事氛围。',caveat:'背景大屏出现了女性肖像，明显受风格参考图影响；并非精确场景设定图。'},
  {group:'editorial',file:'wellbeing-journal',title:'雨天写手账的文章题图',type:'生活方式 / 内容配图',style:'196',styleName:'油画棒治愈插画',goal:'一个人在雨窗前写手账，右侧保留后加标题的空间。',result:'油画棒颗粒与亲密室内氛围到位，右侧留白明显。',caveat:'适合文章氛围，不承载具体信息；最终标题宜由排版软件后加。'},
  {group:'photo',file:'pet-collage',title:'宠物照片转撕纸肖像',type:'宠物纪念 / 定制礼物',style:'273',styleName:'手撕纸拼贴',goal:'用本站合成橘白猫照片，保留蓝色项圈、铜铃和窗台姿态。',result:'主体毛色、项圈、铃铛与窗台保留，撕纸层叠纹理非常明显。',caveat:'猫的头部角度和取景发生变化；无法保证对真实宠物的精确身份复刻。',source:'trials/source-photo-cat.png'}
];
const stylePath=id=>`media/individual/${Number(id)<=200?'001-200':'201-400'}/${id}.webp`;
const groupsNode=document.querySelector('#groups');
groupsNode.innerHTML=groups.map((group,index)=>{
  const cards=samples.filter(sample=>sample.group===group.id).map((sample)=>{
    const layout=sample.layout?` · ${sample.layout}`:'';
    const refs=[`<a href="${stylePath(sample.style)}" target="_blank" rel="noopener noreferrer">风格参考 ↗</a>`];
    if(sample.layout)refs.push(`<a href="media/layouts/${sample.layoutPath}/${sample.layout}.webp" target="_blank" rel="noopener noreferrer">版式参考 ↗</a>`);
    if(sample.source)refs.push(`<a href="${sample.source}" target="_blank" rel="noopener noreferrer">合成源照片 ↗</a>`);
    refs.push(`<a href="scenarios/images/${sample.file}.png" target="_blank" rel="noopener noreferrer">实测大图 ↗</a>`);
    return `<article class="card"><a class="image-link" href="scenarios/images/${sample.file}.png" target="_blank" rel="noopener noreferrer"><img src="scenarios/images/${sample.file}.png" alt="${sample.title}：本次实际生成图" loading="lazy"></a><div class="card-body"><span class="type">${sample.type}</span><h4>${sample.title}</h4><span class="styleline">#${sample.style} ${sample.styleName}${layout}</span><p><b>要做的事：</b>${sample.goal}</p><p><b>画出来了：</b>${sample.result}</p><p><b>可见偏差：</b>${sample.caveat}</p><div class="refs">${refs.join('')}</div></div></article>`;
  }).join('');
  return `<section class="group" data-group="${group.id}" aria-labelledby="group-${group.id}"><div class="group-head"><div><span class="number">${String(index+1).padStart(2,'0')} / USE CASE</span><h3 id="group-${group.id}">${group.title}</h3></div><p>${group.desc}</p></div><div class="cards">${cards}</div></section>`;
}).join('');
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  const filter=button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(item=>{item.classList.toggle('active',item===button);item.setAttribute('aria-pressed',String(item===button));});
  document.querySelectorAll('.group').forEach(group=>{group.hidden=filter!=='all'&&group.dataset.group!==filter;});
  const count=filter==='all'?samples.length:samples.filter(item=>item.group===filter).length;
  document.querySelector('#count').textContent=`当前展示 ${count} 张样例`;
}));
