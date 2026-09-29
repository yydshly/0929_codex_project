import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {topics} from './overview-model.mjs';

const root=path.dirname(fileURLToPath(import.meta.url)),project=path.dirname(root);
const publish=path.resolve(root,'../../../site/001-awesome-agent-skills');
const data=JSON.parse(fs.readFileSync(path.join(project,'skills-catalog.json'),'utf8'));
const atlas=JSON.parse(fs.readFileSync(path.join(project,'atlas-catalog.json'),'utf8'));
assert.equal(data.catalog.length,1108);
assert.equal(new Set(data.catalog.map(e=>e.id)).size,1108);
assert.equal(atlas.entries.length,1108);
assert.equal(topics.length,20);
assert.deepEqual(new Set(topics.map(t=>t.id)),new Set(atlas.groups.map(g=>g.id)));
assert.equal(atlas.groups.reduce((sum,g)=>sum+g.entries.length,0),1108);
assert(data.catalog.every(e=>/[\u3400-\u9fff]/.test(e.descriptionZh)&&e.description&&e.sectionZh));
assert(atlas.entries.every(e=>e.capability===e.descriptionZh&&e.capabilityOriginal));
const svg=fs.readFileSync(path.join(publish,'atlas.svg'),'utf8');
assert.equal([...svg.matchAll(/class="skill-node"/g)].length,1108);
const html=fs.readFileSync(path.join(publish,'index.html'),'utf8');
assert.equal([...html.matchAll(/class="cap-card"/g)].length,20);
assert.equal([...html.matchAll(/class="scenario"/g)].length,5);
for(const file of fs.readdirSync(publish).filter(f=>/\.(html|css|js|svg|txt)$/.test(f))){
 assert.equal(fs.readFileSync(path.join(publish,file),'utf8'),fs.readFileSync(path.join(root,'dist',file),'utf8'),`Published file differs: ${file}`);
 if(!file.endsWith('.html'))continue;
 const source=fs.readFileSync(path.join(publish,file),'utf8');
 for(const [,url] of source.matchAll(/(?:href|src)="([^"]+)"/g)){
  if(/^(?:https?:|data:|#)/.test(url))continue;
  const local=path.resolve(publish,decodeURIComponent(url.split(/[?#]/)[0]));
  assert(fs.existsSync(local),`Broken local URL in ${file}: ${url}`);
  if(fs.statSync(local).isDirectory())assert(fs.existsSync(path.join(local,'index.html')),`Missing index: ${url}`);
 }
}
assert.equal(fs.readFileSync(path.join(project,'assets/capability-summary.svg'),'utf8'),fs.readFileSync(path.join(publish,'summary.svg'),'utf8'));
console.log('Verified: 1108 bilingual entries; 20 visible capability summaries; 5 scenarios; SVG coverage; static assets and links.');
