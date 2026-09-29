// Original, editable vector report. Summarizes the fixed-version research.
export function overview(short) {
 const C={bg:'#f4f5ee',ink:'#183f38',muted:'#577168',green:'#21775e',line:'#d2ded3',white:'#fffefa',soft:'#e6ede0',gold:'#b77831'};
 const out=[];
 const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;');
 const rect=(x,y,w,h,fill=C.white,stroke='none',r=18)=>out.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}"/>`);
 const text=(x,y,s,size=26,fill=C.ink,weight=400)=>out.push(`<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" font-weight="${weight}">${escape(s)}</text>`);
 const lines=(x,y,list,size=26,fill=C.muted,step=36)=>list.forEach((s,i)=>text(x,y+i*step,s,size,fill));
 const heading=(y,n,title,note)=>{text(60,y,n,23,C.green,700);text(112,y,title,34,C.ink,700);if(note)text(112,y+40,note,23,C.muted);};
 const arrow=(x,y,w=26)=>out.push(`<path d="M${x},${y}h${w}" fill="none" stroke="${C.green}" stroke-width="3" marker-end="url(#arrow)"/>`);
 out.push(`<svg xmlns="http://www.w3.org/2000/svg" width="1800" height="2710" viewBox="0 0 1800 2710" role="img" aria-labelledby="title desc"><title id="title">VoiceStudio 完整能力汇报</title><desc id="desc">VoiceStudio 是调用语音模型的应用工作台，不是独立基础大模型；可以提供数字人的声音环节。图中说明八类能力、十个模块、模型原理、数字人组合、使用场景、长期价值与四步使用路径。</desc><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10z" fill="${C.green}"/></marker></defs><style>text{font-family:'Microsoft YaHei','Noto Sans CJK SC','Segoe UI',sans-serif}</style>`);
 rect(0,0,1800,2710,C.bg,'none',0);
 rect(0,0,1800,310,C.ink,'none',0);
 text(60,52,`011 / 项目能力汇报 / 固定版本 ${short}`,23,'#b9d8bd',600);
 text(60,121,'VoiceStudio：把文字与素材，做成可用的声音',51,'#ffffff',700);
 text(60,175,'它是语音制作工作台：整合模型、音频工具与任务流程，交付配音、转写和有声内容。',28,'#d6e8d6');
 const badges=[['本质','应用与模型编排系统'],['大模型？','自身不是；底层调用模型'],['数字人？','可提供语音，非完整数字人']];
 badges.forEach((b,i)=>{const x=60+i*566;rect(x,210,548,65,'#29534a');text(x+20,251,b[0],23,'#b9d8bd',700);text(x+130,251,b[1],25,'#fffefa',600);});

 heading(370,'01','本身能做什么？','八类能力：重点看输入与产物；实际效果由所选模型、素材和硬件共同决定。');
 const caps=[
 ['文字配音',['文稿 + 选定声音','→ 旁白、朗读音频']],
 ['声音克隆',['参考录音 + 新文稿','→ 相似音色的新语音']],
 ['声音设计',['年龄、音高、口音等属性','→ 新角色或旁白声音']],
 ['视频翻译配音',['视频 → 识别 → 翻译 → 合成','→ 按片段适配的配音视频']],
 ['语音识别 / 听写',['录音或麦克风输入','→ 可编辑文字与时间信息']],
 ['故事 / 有声书',['章节、角色、停顿设置','→ 多角色与分章长音频']],
 ['批量任务',['一组音频或视频任务','→ 排队制作、进度与结果']],
 ['API / MCP 接入',['其他程序提交生成或转写请求','→ 音频资源、文字与声音列表']]
 ];
 caps.forEach((c,i)=>{let x=60+(i%4)*425,y=437+Math.floor(i/4)*160;rect(x,y,405,140,C.white,C.line);text(x+22,y+39,c[0],28,C.ink,700);lines(x+22,y+79,c[1],23,C.muted,33);});

 heading(811,'02','内部有哪些模块，各自负责什么？','按职责归纳十组模块；实际源码分布更细。流程调用工具，工具再调用模型。');
 const modules=[
 ['01 · 桌面工作区','Electron / React',['管理文稿、声音和视频','提供编辑、试听与任务界面']],
 ['02 · 服务与入口','FastAPI / API / MCP',['接收用户或程序请求','分发任务并返回结果']],
 ['03 · 模型与设备','模型加载 / 资源调度',['选择引擎与执行设备','加载卸载、控制资源占用']],
 ['04 · 语音合成','tts_backend',['统一不同 TTS 引擎','文字与声音条件 → 音频']],
 ['05 · 识别与对齐','asr_backend',['将语音转成文字','为片段处理提供时间基础']],
 ['06 · 视频前处理','dub_pipeline',['提取音轨、分离人声','缓存素材、记录任务状态']],
 ['07 · 翻译与改写','translator',['翻译原文、调整表达','结合上下文改写配音稿']],
 ['08 · 长文分块','chunked_tts',['按句拆分长文本合成','处理衔接、拼接连续音频']],
 ['09 · 章节与角色','audiobook',['解析章节、声音和停顿','组织多角色有声书']],
 ['10 · 后处理与导出','音频处理 / 媒体封装',['适配时长、混音与响度','封装可保存的成品文件']]
 ];
 modules.forEach((m,i)=>{const x=60+(i%5)*340,y=879+Math.floor(i/5)*182;rect(x,y,320,164,C.white,C.line);text(x+18,y+37,m[0],26,C.ink,700);text(x+18,y+69,m[1],20,C.green);lines(x+18,y+106,m[2],22,C.muted,32);});
 rect(60,1258,1680,158,C.soft);
 text(84,1298,'底层模型 ≠ VoiceStudio 本身',28,C.ink,700);
 text(84,1337,'语音合成：默认 OmniVoice，也可选其他引擎  ｜  语音识别：WhisperX 等  ｜  翻译 / 改写：可接 LLM  ｜  人声分离：专用模型',24,C.muted);
 text(84,1380,'默认克隆原理：参考音频与文字提供条件 → 迭代补全声音符号 → 解码成音频；通常无需为每个声音重新训练。',25,C.ink);

 heading(1480,'03','它在数字人方案里处于什么位置？','它可以提供“声音制作”这一环；形象、口型、表情、动作和画面由另外的系统负责。');
 const flow=[['文稿 / 对话回复','人工编写或其他模型'],['VoiceStudio','合成 / 克隆 / 配音'],['音频文件或资源','交给后续应用'],['数字人引擎','Duix / LiveTalking 等'],['有声人物画面','渲染、合成与播放']];
 flow.forEach((f,i)=>{let x=60+i*344;rect(x,1548,304,100,i===1?C.ink:C.white,i===1?'none':C.line);text(x+20,1588,f[0],27,i===1?'#ffffff':C.ink,700);text(x+20,1624,f[1],22,i===1?'#d6e8d6':C.muted);if(i<4)arrow(x+312,1598,23);});
 text(60,1690,'建议先做文件级组合：配音完成 → 驱动口型 → 导出视频。实时对话还需另行验证延迟、流式传输、打断与同步。',25,C.muted);

 heading(1764,'04','使用场景 → 对我们后期的价值','把已有研究成果、声音资产和制作流程重复使用；以下为应用建议，尚未完成跨项目集成。');
 const value=[
 ['研究与内容制作',['研究摘要 → 一分钟旁白','屏幕教程 → 配音 / 多语言版本'],['让现有研究多一种传播方式','逐句修改，减少重复录制']],
 ['知识与声音资产',['笔记、章节 → 个人知识音频库','系列内容 → 固定声音与角色'],['积累可复用的声音和文稿模板','让内容适合离屏收听与回顾']],
 ['助手与数字人产品',['API / MCP → 个人助手发声','音频输出 → 数字人口播素材'],['把语音模块与业务、画面分开维护','按需要更换模型和下游工具']]
 ];
 value.forEach((v,i)=>{const x=60+i*566;rect(x,1832,548,236,C.white,C.line);text(x+24,1873,v[0],29,C.ink,700);lines(x+24,1915,v[1],25,C.muted,37);out.push(`<path d="M${x+24},1968h500" stroke="${C.line}"/>`);lines(x+24,2004,v[2],24,C.green,35);});

 heading(2136,'05','后期怎么拿来用？按四步逐渐接入','优先采用现成工作台与接口；只有具体任务缺能力时，再考虑开发扩展。');
 const use=[
 ['1 / 先跑通一个小任务',['安装应用与所需模型','用自有录音 + 60 秒中文稿','试听读音、音色和修改成本']],
 ['2 / 再自动化重复制作',['通过 API / MCP 提交文稿','固定声音、文件命名与输出','加入进度、失败处理和复核']],
 ['3 / 连接现有内容工具',['先把音频接入剪辑或数字人','核对采样率、时长和格式','验证口型、节奏与整条流程']],
 ['4 / 按瓶颈扩展能力',['新引擎：适配调用与依赖','质量检查：回听、术语与漏字','团队服务：权限、队列与存储']]
 ];
 use.forEach((u,i)=>{let x=60+i*425;rect(x,2204,405,180,C.soft);text(x+20,2244,u[0],26,C.ink,700);lines(x+20,2284,u[1],23,C.muted,35);});
 rect(60,2410,1680,93,C.ink);
 text(84,2448,'与 Voicebox 的取舍：基础能力大量重叠；比较所选模型与已完成的制作流程，再决定是否接入。',27,'#ffffff',600);
 text(84,2485,'最小评估：同一份录音与文稿，比较读音、音色、漏字、总耗时和修改步骤；简单串接可做原型，稳定制作需要工程处理。',24,'#cde1cf');
 lines(60,2553,[
 '使用条件：本地部署需要模型与算力；全离线要覆盖识别、翻译和合成全链路。应用 AGPL-3.0，默认 OmniVoice 权重 CC-BY-NC，分别核对。',
 '验证范围：固定版本资料与源码研究；未运行本机语音模型、未验证数字人组合或实时性能。本图中的使用路线为后续建议。',
 `依据：debpalash/VoiceStudio @ ${short} · 功能目录 / MCP / 性能说明 / 核心服务源码；OmniVoice 模型与论文。研究日期：2026-09-29。`
 ],22,C.muted,39);
 text(60,2680,'完整来源与官方试听见 011 · VoiceStudio 子项目；本图为自主整理，可放大阅读。',21,C.muted);
 out.push('</svg>');
 return out.join('\n');
}
