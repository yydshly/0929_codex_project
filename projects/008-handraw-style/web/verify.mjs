import {readFileSync,existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname,resolve} from 'node:path';
import assert from 'node:assert/strict';
const here=dirname(fileURLToPath(import.meta.url));
const target=resolve(here,'../../../site/008-handraw-style');
for(const name of ['index.html','styles.css','app.js','gallery.html','gallery.css','gallery.js','trials.html','workflow.html','scenarios.html','scenarios.css','scenarios.js','capability-map-source.html','catalog-data.js'])assert.equal(readFileSync(resolve(here,name),'utf8'),readFileSync(resolve(target,name),'utf8'),`${name} differs from published copy`);
const html=readFileSync(resolve(here,'index.html'),'utf8');
for(const anchor of ['summary','assessment','map','overview','effects','trials','patterns','colors','scenarios','composer','boundaries'])assert.ok(html.includes(`id="${anchor}"`),`Missing ${anchor}`);
for(const heading of ['能力是什么','可见效果','适用场景','对你的意义','何时、怎么用'])assert.ok(html.includes(heading),`Missing summary point ${heading}`);
assert.ok(readFileSync(resolve(here,'scenarios.html'),'utf8').includes('先收录，按需调用。'));
for(const claim of ['280','124','36','上游真实'])assert.ok(html.includes(claim),`Missing ${claim}`);
for(const file of ['README.md','CAPABILITIES.md','RESEARCH.md','SOURCES.md','VERIFICATION.md'])assert.ok(existsSync(resolve(here,'..',file)),`Missing ${file}`);
const data=JSON.parse(readFileSync(resolve(here,'catalog-data.js'),'utf8').replace(/^window\.HANDRAW_CATALOG=/,'').trim().replace(/;$/,''));
assert.equal(data.styles.length,280);assert.equal(data.layouts.length,124);assert.equal(data.colors.length,36);
for(const type of ['styles','layouts','colors']){
  assert.equal(new Set(data[type].map(item=>item.id)).size,data[type].length,`Duplicate ${type} IDs`);
  for(const item of data[type])assert.ok(existsSync(resolve(target,item.image)),`Missing published image ${item.image}`);
}
for(const name of ['style-268-c26-cat.png','style-275-c26-cat.png','style-276-c26-cat.png','style-276-c01-cat.png','ig-003-coffee.png','sb-002-cat-comic.png','sc-001-autumn-card.png','photo-redraw-268.png','sc-021-photo-split.png','source-photo-cat.png'])assert.ok(existsSync(resolve(target,'trials',name)),`Missing trial ${name}`);
for(const name of ['style-276-pure.txt','sc-001-card.txt','ig-003-auto.txt','sc-021-redraw.txt'])assert.ok(existsSync(resolve(target,'prompts',name)),`Missing CLI result ${name}`);
for(const name of ['research-cover','seed-guide','reuse-guide','craft-market','museum-poster','water-saving','sprout-mascot','knit-lookbook','meeting-comic','game-concept','wellbeing-journal','pet-collage'])assert.ok(existsSync(resolve(target,'scenarios/images',`${name}.png`)),`Missing scenario ${name}`);
assert.ok(existsSync(resolve(target,'capability-map.png')),'Missing capability map');
assert.deepEqual(readFileSync(resolve(here,'../assets/capability-map.png')),readFileSync(resolve(target,'capability-map.png')),'Capability map differs from published copy');
console.log('008 static files, summary map, all 440 upstream previews, nine generated trials, 12 scenario tests, one synthetic photo input and four CLI outputs verified.');
