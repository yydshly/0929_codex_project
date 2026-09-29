import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const dir=path.dirname(fileURLToPath(import.meta.url));
const out=path.resolve(dir,'../../../site/009-duix-avatar');
const html=fs.readFileSync(path.join(out,'index.html'),'utf8');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
assert.equal(ids.length,new Set(ids).size,'Duplicate element ID');
for(const [,url] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
 if(/^(https?:|data:)/.test(url))continue;
 if(url.startsWith('#'))assert.ok(ids.includes(url.slice(1)),`Missing anchor ${url}`);
 else assert.ok(fs.existsSync(path.resolve(out,url)),`Missing file ${url}`);
}
for(const name of ['index.html','style.css','app.js','map.html','capability-summary.png'])assert.deepEqual(fs.readFileSync(path.join(dir,name)),fs.readFileSync(path.join(out,name)),`Stale published copy: ${name}`);
const mapHtml=fs.readFileSync(path.join(out,'map.html'),'utf8');
for(const [,url] of mapHtml.matchAll(/(?:href|src)="([^"]+)"/g)){
 if(/^(https?:|data:|#)/.test(url))continue;
 assert.ok(fs.existsSync(path.resolve(out,url.split('#')[0])),`Missing map resource ${url}`);
}
let links=0;
for(const file of fs.readdirSync(path.join(out,'docs'))){
 const content=fs.readFileSync(path.join(out,'docs',file),'utf8');
 assert.equal(content.includes('\uFFFD'),false,`Encoding error in ${file}`);
 for(const [,url] of content.matchAll(/\]\(([^)]+)\)/g)){
  if(/^(https?:|#)/.test(url))continue;
  assert.ok(fs.existsSync(path.resolve(out,'docs',url.split('#')[0])),`${file}: ${url}`);links++;
 }
}
assert.ok(html.includes('非模型生成样片')&&html.includes('模型未实测'),'Missing evidence boundary');
assert.ok(!html.includes('http://localhost'),'Local preview URL in published page');
console.log(`PASS: HTML links and ${ids.length} unique anchors; ${links} document links; synchronized static files; evidence labels.`);
