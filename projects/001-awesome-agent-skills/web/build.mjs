import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import curated from './curated.mjs';
import {buildAtlas} from './atlas-build.mjs';
import {buildOverview} from './overview-build.mjs';
import {localizeCatalog} from './localize.mjs';
const root = path.dirname(fileURLToPath(import.meta.url));
const project = path.dirname(root);
const readme = fs.readFileSync(path.join(project,'sources/upstream-README.md'),'utf8');
const catalog=[];
let section='', skip=false, active=false;
for(const [index,line] of readme.split(/\r?\n/).entries()){
  const heading = line.match(/<h3[^>]*>(.*?)<\/h3>/) || line.match(/^### (.+)/);
  if(heading){ section=heading[1].replace(/<[^>]*>/g,''); skip=false; if(section==='Official Claude Skills') active=true; }
  if(/^## (🔒|Skills Paths|Skill Quality|🤝|License)/.test(line)) active=false;
  if(/More from .*not skills/.test(line)) skip=true;
  if(line.includes('</details>')) skip=false;
  const match=line.match(/^- \*\*\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)\*\*\s*[-:]\s*(.+)$/);
  if(match && active && !skip) catalog.push({id:`entry-${index+1}`,name:match[1],url:match[2],description:match[3],section,line:index+1});
}
localizeCatalog(catalog,readme);
for (const c of curated) {
  const entry=catalog.find(e=>e.name===c.name);
  if(!entry) throw new Error(`Missing upstream entry: ${c.name}`);
  c.id=entry.id; c.url=entry.url; c.original=entry.description; c.line=entry.line;
  c.originalZh=entry.descriptionZh;
}
const data={date:'2026-09-29',commit:'ed106e8edc7c6d04fe3aedcbfaed1b43247f56a7',catalog,curated};
const dist=path.join(root,'dist'); fs.mkdirSync(dist,{recursive:true});
fs.writeFileSync(path.join(dist,'data.js'),`window.SKILL_DATA=${JSON.stringify(data).replace(/</g,'\\u003c')};\n`);
for(const file of ['catalog.html','style.css','app.js'])fs.copyFileSync(path.join(root,file),path.join(dist,file));
fs.copyFileSync(path.join(project,'sources/LICENSE'),path.join(dist,'UPSTREAM-LICENSE.txt'));
fs.writeFileSync(path.join(project,'skills-catalog.json'),JSON.stringify(data,null,2)+'\n');
// A detailed, readable companion shares the same descriptions as the website.
const doc=['# 具体技能能力说明','',`本版对 ${curated.length} 项代表技能提供中文解读，并保留 ${catalog.length} 个上游目录条目供网页检索。目录条目可能是单个技能或技能集合，不等于独立技能总数。`,'','能力解释依据技能文件或上游目录说明；示例与边界为本研究分析，全部未运行实测。',''];
for(const c of curated)doc.push(`## ${c.title}`, '',`**${c.name}** · ${c.category} · 依据：${c.evidence}`,'',c.summary,'',...c.tasks.map(t=>`- ${t}`),'',`**典型产物：** ${c.output}。`,'',`**场景示例：** ${c.example}`,'',`**能力边界：** ${c.boundary}`,'',`[来源](${c.source||c.url})`,'');
doc.push('[返回研究入口](README.md)','');
fs.writeFileSync(path.join(project,'SKILL-DETAILS.md'),doc.join('\n'));
const publish=path.resolve(project,'../../site/001-awesome-agent-skills');fs.mkdirSync(publish,{recursive:true});
for(const file of ['catalog.html','style.css','app.js','data.js','UPSTREAM-LICENSE.txt'])fs.copyFileSync(path.join(dist,file),path.join(publish,file));
console.log(JSON.stringify({curated:curated.length,catalog:catalog.length,groups:new Set(catalog.map(e=>e.section)).size,dist,publish}));
buildAtlas(data,root);

buildOverview(data,root);
