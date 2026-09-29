import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../../..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8'),write=(p,s)=>fs.writeFileSync(path.join(root,p),s);
let text=read('README.md');
if(!text.includes('| 012 |')){
 const lines=text.split(/\r?\n/),start=lines.findIndex(l=>l==='## 项目索引');
 let end=lines.findIndex((l,i)=>i>start&&l.startsWith('## '));if(end<0)end=lines.length;
 let last=start;for(let i=start;i<end;i++)if(lines[i].startsWith('|'))last=i;
 lines.splice(last+1,0,'| 012 | [QM](projects/012-qm/README.md) | 主研究：团队 Agent 工作平台；10 类能力、空间与执行原理、8 组模块、5 个场景，并关联 Pi 对照 | 已完成文档与展示；上游未实测 | [本地展示](site/012-qm/index.html)（未发布） |');
 text=lines.join('\n');
}
text=text.replace('| Agent 执行基础与终端助手：10 类能力','| QM 的执行基础对照；Agent 执行基础与终端助手：10 类能力');
if(!text.includes('### 012 · QM'))text=text.replace('## 仓库结构','### 012 · QM\n\n本次主研究项目：把 Agent 的执行、记忆、文件、权限与后台任务组成个人和团队的工作环境。页面按能力、原理、模块、场景、Pi 对照与个人价值组织。\n\n[QM 研究网页](site/012-qm/index.html) · [完整研究](projects/012-qm/README.md) · [关联 Pi](projects/010-pi/README.md)\n\n固定版本 `9143874`，15 份来源留存。页面为空间、流程与场景的交互讲解；上游未部署，网页未发布。\n\n## 仓库结构');
write('README.md',text);
for(const [p,marker,block] of [
 ['projects/README.md','(012-qm/README.md)','\n新增研究：[012 · QM](012-qm/README.md) 为主项目，汇总十类能力、空间与执行原理、八组模块、五个场景与个人价值；[010 · Pi](010-pi/README.md) 为关联对照。上游未实测，网页未发布。\n'],
 ['site/README.md','(012-qm/index.html)','\n[012 · QM 能力研究](012-qm/index.html)：主项目研究页，含能力筛选、空间与流程交互、场景和 Pi 对照，并与 [010 · Pi](010-pi/index.html) 双向关联。未运行上游，未发布到公网。\n'],
 ['docs/DEPLOYMENT.md','## 项目 012 · QM','\n## 项目 012 · QM\n\n静态展示位于 `site/012-qm/`，运行 `node projects/012-qm/web/build.mjs` 重新生成。上游源码只保存在研究目录，不发布到静态站点。页面不访问模型或私人服务，与 `site/010-pi/` 双向关联。当前仅本地生成，未发布到公网。\n']
]){let s=read(p);if(!s.includes(marker))write(p,s+block);}
let home=read('site/index.html');
if(!home.includes('href="./012-qm/"')){home=home.replace('<p class="foot">','<a class="project" href="./012-qm/"><span>012 · 主项目研究 / 关联 Pi</span><h2>QM · 共同的 Agent 工作环境</h2><p>先看十类能力，再理解空间、权限与执行引擎如何协作。结合五个场景判断对自己的价值，关联 Pi 了解底层分工。</p><span>10 类能力 · 8 组模块 · 5 个场景 · Pi 对照</span><b>打开 QM 主研究 →</b></a><p class="foot">');write('site/index.html',home);}
// Patch the existing Pi generator so the relation survives a rebuild.
const piPath='projects/010-pi/web/build.mjs';let pi=read(piPath);
pi=pi.replace('已完成：17 份固定版本来源留存','已完成：18 份固定版本来源留存');
if(!pi.includes('关联主研究：QM')){
 pi=pi.replace('</header><main><div class="hero">','</header><main><aside class="note"><b>关联主研究：QM</b> · 本页作为执行基础的对照参考。<a href="../012-qm/">返回 QM 能力、原理与场景研究 →</a></aside><div class="hero">');
 pi=pi.replace('## 基本信息\\n\\n','## 与主研究 QM 的关系\\n\\nQM 是本次主研究项目，Pi 是执行基础的关联对照。[打开 QM 研究](../012-qm/README.md)；QM 可选用 Pi，并增加空间、权限、共享资源和后台工作环境。\\n\\n## 基本信息\\n\\n');
 pi=pi.replace('.replaceAll(\'(../../README.md)\',\'(../)\')',".replaceAll('(../../README.md)','(../)').replaceAll('(../012-qm/README.md)','(../012-qm/)')");
 pi=pi.replace('<a href="https://github.com/yc-software/qm">QM</a>','<a href="../012-qm/">QM 主研究</a>');
}
write(piPath,pi);
console.log('Registered QM and linked Pi generator back to main research.');
