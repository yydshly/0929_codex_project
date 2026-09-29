const base='https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/';
const setPressed=(selector,active)=>document.querySelectorAll(selector).forEach(b=>b.setAttribute('aria-pressed',String(b===active)));
const initialFlow=document.querySelector('#flow-content').innerHTML;
document.querySelectorAll('[data-mode]').forEach(button=>button.addEventListener('click',()=>{
 setPressed('[data-mode]',button);
 document.querySelector('#flow-content').innerHTML=button.dataset.mode==='text'?initialFlow:`<div class="steps"><article><span>01 / 准备</span><h4>人物视频</h4><p>准备可供视频服务使用的人物素材</p></article><b class="arrow">＋</b><article><span>02 / 已有声音</span><h4>目标音频</h4><p>采用已录制或审核的配音<br>跳过本次文本转语音</p></article><b class="arrow">→</b><article><span>03 / 视频模型</span><h4>生成口播</h4><p>视频服务合成新口型<br>完成后检查与导出</p></article></div><p class="flow-note">Lite 可以只启动视频服务；原桌面客户端的新增人物流程仍调用声音服务，不能据此认为所有界面功能都可用。</p>`;
}));
const profiles={
 standard:{tag:'标准 Windows / Linux 配置',title:'语音识别＋语音生成＋视频合成',desc:'适合从人物视频和目标文案开始，完成参考声音准备、配音与口播生成。',services:[['FunASR','10095'],['fish-speech-ziming','18180'],['duix.avatar','8383']],note:'Windows 默认使用 D 盘数据目录，Linux 使用用户主目录；客户端路径必须与容器文件映射一致。',file:'deploy/docker-compose.yml'},
 lite:{tag:'仅视频服务 · 适合隔离验证画面',title:'人物视频＋已有目标音频',desc:'Lite 配置只启动视频合成服务，适合先验证口型与画面表现，不包含语音识别和配音生成。',services:[['duix.avatar','8383']],note:'原桌面客户端的新增人物仍调用语音服务；这条路径可能需要通过接口准备素材和提交任务。Lite 的最低硬件要求未验证。',file:'deploy/docker-compose-lite.yml'},
 gpu50:{tag:'50 系列显卡配置 · 内部依赖待核查',title:'两项服务，使用专门镜像',desc:'该配置采用 fish-speech-5090 与 duix.avatar-5090。不能将标准版的三服务结构直接套用。',services:[['fish-speech-5090','18180'],['duix.avatar-5090','8383']],note:'配置文件没有独立 ASR 服务；语音识别是否集成到其他服务，需要检查镜像或实际运行。该方案未在本次部署。',file:'deploy/docker-compose-5090.yml'}
};
document.querySelectorAll('[data-profile]').forEach(button=>button.addEventListener('click',()=>{
 setPressed('[data-profile]',button);const p=profiles[button.dataset.profile];
 document.querySelector('#deployment-content').innerHTML=`<span class="tag">${p.tag}</span><h3>${p.title}</h3><p>${p.desc}</p><div class="service-list">${p.services.map(s=>`<div><span>${s[0]}</span><code>${s[1]}</code></div>`).join('')}</div><p class="deployment-note">${p.note}</p><a class="source" href="${base+p.file}" target="_blank" rel="noreferrer">查看此方案配置 ↗</a>`;
}));
const scenes={
 research:{tag:'你的研究 → 更多人看懂',title:'把一份项目研究，<br>变成一分钟视频入口。',desc:'从已经核实的结论提炼短稿，让固定人物讲清定位、能力与限制。',steps:['提取五条核心结论，核对术语与数字','生成数字人口播片段','加入真实截图、能力图与字幕'],output:'一条项目讲解视频',extra:'Duix 负责人物口播。写稿、事实审核、录屏、剪辑与发布仍需另外完成。'},
 product:{tag:'你的工具 → 清楚的功能介绍',title:'功能更新了，<br>讲解也能按章节更新。',desc:'为安装、功能与版本变更分别准备人物讲解片段，配合真实操作画面。',steps:['准备与当前版本一致的稿件和录屏','按章节生成固定人物的讲解','重做变化部分，校对名称与操作'],output:'一组功能介绍片段',extra:'Duix 不会自动录制你的软件。真实录屏提供操作证据，剪辑和版本核对仍需完成。'},
 training:{tag:'系列内容 → 固定讲解员',title:'同一个人物，<br>讲清一系列知识。',desc:'将培训内容拆成短章节，复用人物形象与声音，逐步建立统一表达。',steps:['审核知识内容，拆分章节和专业术语','逐段生成并检查人物讲解','组合图示与字幕，放入学习平台'],output:'可更新的培训章节',extra:'课程设计、学习平台和内容审核需要另行提供；长段落自然度和多语言发音必须逐项验证。'},
 audio:{tag:'已有声音 → 增加人物表达',title:'配音已经完成，<br>先单独验证画面效果。',desc:'保留已经确认的发音与节奏，将人物视频和目标音频提交给视频服务。',steps:['准备授权人物视频与清晰目标音频','只验证视频合成路径','检查口型同步、转头和画面稳定性'],output:'与配音对应的口播',extra:'这条路径跳过本次文本转语音。Lite 仅配置视频服务；原客户端完整素材创建仍可能需要声音服务。'}
};
document.querySelectorAll('[data-scene]').forEach(button=>button.addEventListener('click',()=>{
 setPressed('[data-scene]',button);const s=scenes[button.dataset.scene];
 document.querySelector('#scenario-content').innerHTML=`<div class="scene-main"><span class="eyebrow">${s.tag}</span><h3>${s.title}</h3><p>${s.desc}</p><ol>${s.steps.map(x=>`<li>${x}</li>`).join('')}</ol></div><div class="scene-output"><span>预期产物</span><h4>${s.output}</h4><p>${s.extra}</p><div class="scene-footer">场景建议 · 不是本次生成结果</div></div>`;
}));
document.body.classList.add('enhanced');
