import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const dir=path.dirname(fileURLToPath(import.meta.url)),root=path.resolve(dir,'..'),out=path.resolve(root,'../../site/012-qm');
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'sources/manifest.json'),'utf8'));
for(const f of manifest.files)assert.equal(hash(path.join(root,'sources',f.path)),f.sha256,f.path);
for(const name of ['index.html','map.html','style.css','app.js'])assert.equal(hash(path.join(dir,name)),hash(path.join(out,name)),name);
assert.equal(hash(path.join(root,'assets/qm-overview.png')),hash(path.join(out,'qm-overview.png')),'Original approved infographic must be used unchanged');
for(const name of ['index.html','map.html']){
 const html=fs.readFileSync(path.join(out,name),'utf8');
 for(const [,href] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  if(/^(https?:|data:)/.test(href))continue;
  const [file,anchor]=href.split('#');const target=file?path.resolve(out,file):path.join(out,name);
  assert.ok(fs.existsSync(target),`${name}: ${href}`);
  if(anchor&&!fs.statSync(target).isDirectory())assert.ok(fs.readFileSync(target,'utf8').includes(`id="${anchor}"`),href);
 }
}
const html=fs.readFileSync(path.join(out,'index.html'),'utf8');
for(const id of ['summary','capabilities','principle','modules','scenarios','comparison','value','evidence'])assert.ok(html.includes(`id="${id}"`),id);
for(const text of ['可实现的效果','对我们的意义','什么时候用','执行条件相当','一个仓库的每周变化报告','../010-pi/','qm-overview.png'])assert.ok(html.includes(text),text);
assert.ok(!html.includes('未发布到公网'));
assert.ok(fs.readFileSync(path.join(out,'../010-pi/index.html'),'utf8').includes('../012-qm/'));
console.log(`PASS: ${manifest.files.length} source hashes, approved image unchanged, summary, map, anchors, assets and QM/Pi links.`);
