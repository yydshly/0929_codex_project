import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../../..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const write=(p,s)=>fs.writeFileSync(path.join(root,p),s);
let readme=read('README.md');
if(!readme.includes('| 010 |')){
 const lines=readme.split(/\r?\n/);
 const start=lines.findIndex(l=>l==='## 项目索引');
 const end=lines.findIndex((l,i)=>i>start&&l.startsWith('## '));
 let last=start; for(let i=start;i<(end<0?lines.length:end);i++)if(lines[i].startsWith('|'))last=i;
 lines.splice(last+1,0,'| 010 | [Pi Agent Harness](projects/010-pi/README.md) | Agent 执行基础与终端助手：10 类能力、7 个公开模块、5 个场景；从模型判断、工具执行与反馈理解自己的 Agent 产品 | 已完成文档与展示；上游未实测 | [本地展示](site/010-pi/index.html)（未发布） |');
 readme=lines.join('\n');
}
if(!readme.includes('### 010 · Pi Agent Harness')){
 const block='### 010 · Pi Agent Harness\n\nPi 是可扩展的 Agent 执行基础，也自带终端助手。先了解十类能力及成果，再通过六步执行循环、七个公开模块、五个使用场景理解模型、工具与运行时如何协作。对我们的价值是学习执行基础、固化研究方法，并逐步构建专用 Agent 产品。\n\n![Pi 能力、原理、模块与场景总览](projects/010-pi/assets/overview.svg)\n\n[完整研究](projects/010-pi/README.md) · [本地交互展示](site/010-pi/index.html) · [能力总览图](projects/010-pi/assets/overview.svg)\n\n固定版本 `4df1574`；18 份来源留存，原版未运行。页面交互为教学示意，成果与收益未进行真实模型验证。展示尚未发布到公网。\n\n';
 readme=readme.replace('## 仓库结构',block+'## 仓库结构');
}
write('README.md',readme);
let projects=read('projects/README.md');
if(!projects.includes('(010-pi/README.md)'))write('projects/README.md',projects+'\n新增研究：[010 · Pi Agent Harness](010-pi/README.md)，汇总能力与成果、执行原理、七个公开模块、五个使用场景和个人意义；含交互展示与总览图，上游未运行，网页未发布。\n');
let home=read('site/index.html');
if(!home.includes('href="./010-pi/"')){
 const card='<a class="project" href="./010-pi/"><span>010 · Agent 执行基础与终端助手</span><h2>Pi · 从目标到实际行动</h2><p>先看能完成什么，再理解模型判断、工具执行和反馈循环。按当前固定版本整理公开模块，展示研究、开发、数据整理与自建助手场景。</p><span>10 类能力 · 7 个公开模块 · 5 个场景 · 可交互的原理讲解</span><b>查看能力、原理与个人价值 →</b></a>';
 home=home.replace('<p class="foot">',card+'<p class="foot">');write('site/index.html',home);
}
let deploy=read('docs/DEPLOYMENT.md');
if(!deploy.includes('## 项目 010 · Pi'))write('docs/DEPLOYMENT.md',deploy+'\n## 项目 010 · Pi Agent Harness\n\n本地展示在 `site/010-pi/`，当前未提交发布。先运行 `node projects/010-pi/web/build.mjs` 与 `node projects/010-pi/web/verify.mjs`。可发布文件均为静态资源，无模型调用或用户凭据；公开发布前仍需完成正常提交和 Pages 流程。\n\n内容包括十类能力、六步原理、七个公开模块、五个场景、个人价值、固定来源和原创 SVG 总览。上游未运行实测。\n');
console.log('Pi registered in project index, site home and deployment notes.');
