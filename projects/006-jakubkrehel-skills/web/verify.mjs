import {readFile,access} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));
const site=path.resolve(here,'../../../site/006-jakubkrehel-skills');
const catalog=JSON.parse(await readFile(path.join(here,'catalog.json'),'utf8'));
const errors=[];
const mapManifest=JSON.parse(await readFile(path.resolve(here,'../assets/capability-map-manifest.json'),'utf8'));
if(mapManifest.skills.length!==11||catalog.some(s=>!mapManifest.skills.includes(s.id)))errors.push('Map skill inventory mismatch');
for(const file of ['capability-map.svg','capability-map.png','capability-map.html']){
 const web=await readFile(path.join(here,file));
 const published=await readFile(path.join(site,file));
 if(!web.equals(published))errors.push(`Unsynced map asset: ${file}`);
}
const mapSvg=await readFile(path.join(here,'capability-map.svg'),'utf8');
for(const skill of catalog)if(!mapSvg.includes(skill.id))errors.push(`Missing map skill: ${skill.id}`);
if(catalog.length!==11||catalog.reduce((n,s)=>n+s.rows.length,0)!==113)errors.push('Skill inventory mismatch');
for(const dir of [here,site]){
 const html=await readFile(path.join(dir,'index.html'),'utf8');
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 if(new Set(ids).size!==ids.length)errors.push('Duplicate IDs');
 for(const skill of catalog){
  if(!ids.includes(skill.id)||skill.rows.some(r=>r.length!==3)||['purpose','input','output','example','acceptance','boundary','prompt'].some(k=>!skill[k]))errors.push(`Incomplete skill: ${skill.id}`);
 }
 if((html.match(/data-task="/g)||[]).length!==8)errors.push('Task guide count mismatch');
 if((html.match(/class="summary-type"/g)||[]).length!==3)errors.push('Summary types mismatch');
 if((html.match(/class="personal-card"/g)||[]).length!==5)errors.push('Personal scenarios mismatch');
 if(!['summary','summary-types','personal'].every(id=>ids.includes(id)))errors.push('Missing summary sections');
 if(!html.includes('src="capability-map.png"'))errors.push('Missing requested summary image');
 if(!['scope','choose','expectations','task-select'].every(id=>ids.includes(id)))errors.push('Missing scope guide');
 if((html.match(/class="scenario"/g)||[]).length!==6)errors.push('Scenario count mismatch');
 if((html.match(/class="extension-no"/g)||[]).length!==8)errors.push('Extension count mismatch');
 for(const m of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  const url=m[1];
  if(url.startsWith('#')){if(url.length>1&&!ids.includes(url.slice(1)))errors.push(`Missing anchor: ${url}`);}
  else if(!/^(https?:|data:)/.test(url)){try{await access(path.resolve(dir,url));}catch{errors.push(`Missing file: ${url}`);}}
 }
}
for(const file of ['styles.css','scope.css','summary.css','app.js'])if(await readFile(path.join(here,file),'utf8')!==await readFile(path.join(site,file),'utf8'))errors.push(`Unsynced ${file}`);
const webHTML=await readFile(path.join(here,'index.html'),'utf8');
const siteHTML=await readFile(path.join(site,'index.html'),'utf8');
if(webHTML.replace('href="../../../site/index.html">返回研究集','href="../index.html">返回研究集')!==siteHTML)errors.push('Unsynced HTML');
console.log(JSON.stringify({skills:catalog.length,capabilities:113,scenarios:6,extensions:8,errors},null,2));
process.exitCode=errors.length?1:0;
