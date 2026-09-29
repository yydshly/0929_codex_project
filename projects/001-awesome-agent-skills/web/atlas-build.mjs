import fs from 'node:fs';
import path from 'node:path';
import {domains,classify} from './atlas-model.mjs';
const xml=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const plain=v=>v.replace(/\[([^\]]+)\]\([^)]+\)/g,'$1').replace(/\*\*([^*]+)\*\*/g,'$1').replace(/`([^`]+)`/g,'$1');
function wrap(text,max){let result=[],line='',width=0;for(const char of text){const w=char.charCodeAt(0)>255?1:(/[MW@]/.test(char)?.85:char===' '?.3:.56);if(width+w>max){result.push(line.trim());line='';width=0;}line+=char;width+=w;}if(line)result.push(line.trim());return result;}
function text(x,y,lines,size=20,color='#37465e',cls=''){return `<text x="${x}" y="${y}" font-size="${size}" fill="${color}" class="${cls}">${lines.map((v,i)=>`<tspan x="${x}" dy="${i?size*1.45:0}">${xml(v)}</tspan>`).join('')}</text>`;}
export function buildAtlas(data,root){
 const colors=['#3459bd','#16756f','#875399','#af6729','#456c91'];
 const deep=new Map(data.curated.map(x=>[x.id,x]));
 const entries=data.catalog.map(e=>({...e,...classify(e),capability:e.descriptionZh,capabilityOriginal:plain(e.description),detail:deep.get(e.id)||null}));
 const groups=domains.map((d,i)=>({...d,color:colors[i%colors.length],entries:entries.filter(e=>e.domain===d.id).map(e=>e.id)}));
 const entryMap=new Map(entries.map(e=>[e.id,e]));
 const cols=7,panelW=1560,gap=36,margin=70,W=cols*(panelW+gap)-gap+2*margin,top=1340;
 const bottoms=Array(cols).fill(top),panels=[],shapes=[];let drawn=0;
 for(const group of groups){
  const chunks=[];for(let i=0;i<group.entries.length;i+=48)chunks.push(group.entries.slice(i,i+48));
  chunks.forEach((ids,part)=>{
   const col=bottoms.indexOf(Math.min(...bottoms)),x=margin+col*(panelW+gap),y=bottoms[col];
   const nodeW=(panelW-80)/3,rows=[];let localY=y+465;
   for(let i=0;i<ids.length;i+=3){const row=ids.slice(i,i+3).map(id=>{const e=entryMap.get(id),nameLines=wrap(e.name, (nodeW-28)/20),descLines=wrap(e.capability,(nodeW-28)/18);return {e,nameLines,descLines,h:32+nameLines.length*29+descLines.length*26+21};});rows.push({y:localY,items:row});localY+=Math.max(...row.map(r=>r.h))+15;}
   const h=localY-y+20;panels.push({id:`${group.id}-${part}`,domain:group.id,x,y,w:panelW,h,part:part+1,parts:chunks.length});
   shapes.push(`<g class="domain-panel" data-domain="${group.id}"><rect x="${x}" y="${y}" width="${panelW}" height="${h}" rx="15" fill="#ffffff" stroke="#bdc9da" stroke-width="2"/>`);
   shapes.push(`<rect x="${x}" y="${y}" width="${panelW}" height="10" fill="${group.color}"/>`);
   shapes.push(text(x+25,y+62,[`${group.title} · ${group.entries.length} 项${chunks.length>1?` / 分区 ${part+1} / ${chunks.length}`:''}`],38,group.color,'profile'));
   const profile=[['能力范围',group.scope],['使用场景',group.scenario],['目的效果',group.outcome],['可扩展',group.extension],['对你的意义',group.value]];
   let py=y+108;for(const [label,value] of profile){const lines=wrap(`${label}：${value}`,68);shapes.push(text(x+25,py,lines,20,'#43516b','profile'));py+=lines.length*29+12;}
   shapes.push(text(x+25,y+428,[`该方向场景与价值为研究归纳；以下各条为上游能力说明的中文翻译。`],17,'#6d7d94','profile'));
   shapes.push(`<text class="mini-label" data-x="${x}" data-y="${y}" x="${x+20}" y="${y+60}" font-size="36" fill="${group.color}" style="display:none">${xml(group.title.slice(0,2))} · ${ids.length}</text>`);
   for(const row of rows){row.items.forEach((r,c)=>{const nx=x+20+c*(nodeW+20),ny=row.y,e=r.e;e.box={x:nx,y:ny,w:nodeW,h:r.h};drawn++;
    shapes.push(`<a href="${xml(e.url)}" target="_blank" rel="noopener noreferrer" class="skill-node" data-id="${e.id}" data-domain="${group.id}" aria-label="${xml(e.name)}"><title>${xml(e.name+' — '+e.capability)}</title><rect x="${nx}" y="${ny}" width="${nodeW}" height="${r.h}" rx="8" fill="${group.color}20" stroke="${group.color}55" stroke-width="1.5"/>`);
    shapes.push(text(nx+14,ny+29,r.nameLines,20,'#1e3557','leaf-text'));
    shapes.push(text(nx+14,ny+29+r.nameLines.length*29+11,r.descLines,18,'#4e5d76','leaf-text'));
    shapes.push('</a>');});}
   shapes.push('</g>');bottoms[col]=y+h+gap;
  });
 }
 if(drawn!==data.catalog.length||new Set(entries.map(e=>e.id)).size!==drawn)throw new Error('Atlas coverage mismatch');
 const H=Math.max(...bottoms)+190;
 const header=[`<rect width="${W}" height="${H}" fill="#eaf0f7"/>`,text(80,170,['Awesome Agent Skills · 全量能力地图'],118,'#142b48'),text(85,253,[`${entries.length} 个目录条目 · ${groups.length} 个研究方向 · 固定版本 ${data.commit.slice(0,7)} · ${data.date}`],43),text(85,326,['覆盖的是原仓库的收录条目；集合内部不递归展开。能力简介已译为中文，场景、效果和价值为研究归纳，未运行实测。'],31),text(85,404,['对你的意义：把“发现开源项目 → 理解能力 → 做出原型 → 验证质量 → 交付分享 → 沉淀方法”连成完整工作链。'],42,'#254984')];
 const stages=[['发现与理解','搜索抓取 · 产品研究','更快判断一个项目值得研究什么'],['设计与制作','视觉设计 · 前端 · 媒体','把抽象能力做成可理解的演示'],['实现与连接','后端 · 数据 · 身份接口','从静态页面走向真实业务功能'],['验证与维护','测试 · 安全 · 可观测性','把结果从“能跑”推进到可验证'],['交付与传播','文档 · 云部署 · 内容增长','形成他人可以阅读、访问的成果'],['复用与扩展','Agent · 自动化 · 模型','将研究经验转为自己的工作方法']];
 const sw=(W-180)/6;
 stages.forEach((s,i)=>{const x=85+i*sw;header.push(`<rect x="${x}" y="485" width="${sw-28}" height="275" rx="15" fill="#fff"/>`,text(x+28,548,[s[0]],44,'#234573'),text(x+28,610,[s[1]],26),text(x+28,664,wrap(s[2],34),25));});
 header.push(text(85,849,['方向导航（场景、目的效果、扩展与个人意义见每个分区顶部）'],40,'#294569'));
 groups.forEach((g,i)=>{const c=i%7,r=Math.floor(i/7),x=85+c*(panelW+gap),y=918+r*107;header.push(`<g class="domain-jump" data-domain="${g.id}" role="button" aria-label="${g.title}"><rect x="${x}" y="${y-36}" width="${panelW-15}" height="84" rx="10" fill="#fff"/>`,text(x+20,y+16,[`${g.title}  ${g.entries.length}`],38,g.color),'</g>');});
 header.push(text(85,H-90,['研究口径：每条只指定一个主方向以避免重复计数；交叉能力以原文为准。个人意义依据当前开源研究工作区，不预设你的职业或商业目标。'],28));
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="全部 ${entries.length} 个收录条目的能力地图"><style>text{font-family:Segoe UI,Microsoft YaHei,Arial,sans-serif}.skill-node{cursor:pointer}.skill-node:hover rect{stroke:#355dde;stroke-width:5}.domain-jump{cursor:pointer}</style>${header.join('')}${shapes.join('')}</svg>`;
 const atlas={date:data.date,commit:data.commit,total:entries.length,width:W,height:H,groups,entries,panels};
 const dist=path.join(root,'dist'),publish=path.resolve(root,'../../../site/001-awesome-agent-skills');
 fs.writeFileSync(path.join(dist,'atlas.svg'),svg);
 fs.writeFileSync(path.join(dist,'atlas-data.js'),`window.ATLAS=${JSON.stringify(atlas).replace(/</g,'\\u003c')};window.ATLAS_SVG=${JSON.stringify(svg).replace(/</g,'\\u003c')};`);
 for(const name of ['atlas.html','atlas.css','atlas.js'])fs.copyFileSync(path.join(root,name),path.join(dist,name));
 for(const name of ['atlas.svg','atlas-data.js','atlas.html','atlas.css','atlas.js'])fs.copyFileSync(path.join(dist,name),path.join(publish,name));
 fs.writeFileSync(path.resolve(root,'../atlas-catalog.json'),JSON.stringify(atlas,null,2));
 console.log(JSON.stringify({atlasEntries:drawn,domains:groups.length,panels:panels.length,width:W,height:H}));
}
