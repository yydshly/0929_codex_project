import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const site=path.resolve(root,'../../site/011-voicestudio');
const hash=b=>createHash('sha256').update(b).digest('hex');
const approved={png:'262b91e9edc9d253f2241d474a3a7470fd4d2bb907dcf222c2ff527b991c3276',svg:'5754a610824f9c2d4bece03430454c8b81b98a58136ad9a10e30ae670a485ef6'};
for(const [ext,digest] of Object.entries(approved)){
 const name=`capability-summary.${ext}`;
 assert.equal(hash(fs.readFileSync(path.join(root,'assets',name))),digest,`Approved ${ext} changed`);
 assert.equal(hash(fs.readFileSync(path.join(site,name))),digest,`Published ${ext} differs`);
}
let links=0;
for(const name of ['index.html','map.html']){
 const html=fs.readFileSync(path.join(site,name),'utf8');
 const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 assert.equal(ids.length,new Set(ids).size,`${name}: duplicate IDs`);
 for(const [,target] of html.matchAll(/\b(?:href|src)="([^"]+)"/g)){
  if(/^(?:https?:|data:)/.test(target))continue;
  links++;
  const [file,anchor]=target.split('#');
  if(file)assert.ok(fs.existsSync(path.resolve(site,file)),`${name}: missing ${file}`);
  else if(anchor)assert.ok(ids.includes(anchor),`${name}: missing #${anchor}`);
 }
}
for(const name of ['styles.css','app.js'])assert.equal(fs.readFileSync(path.join(root,'web',name),'utf8'),fs.readFileSync(path.join(site,name),'utf8'));
const png=fs.readFileSync(path.join(site,'capability-summary.png'));
assert.equal(png.readUInt32BE(16),1800);assert.equal(png.readUInt32BE(20),2710);
const source=JSON.parse(fs.readFileSync(path.join(site,'manifest.json'),'utf8').replace(/^\uFEFF/,''));
assert.equal(source.commit,'eef0e2304be21c9bfd08cfca0254918522105b06');
assert.ok(source.sources.every(s=>s.url.includes(source.commit)&&/^[0-9a-f]{64}$/i.test(s.sha256)));
console.log(`Verified: approved PNG/SVG unchanged; 2 pages, ${links} local references, matching assets and fixed source manifest.`);
