import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {capabilities,modules,scenarios,meta} from './content.mjs';
const dir=path.dirname(fileURLToPath(import.meta.url)), root=path.resolve(dir,'..'),out=path.resolve(root,'../../site',meta.slug);
const manifest=JSON.parse(fs.readFileSync(path.join(root,'sources/manifest.json'),'utf8').replace(/^\uFEFF/,''));
for(const s of manifest){const buf=fs.readFileSync(path.join(root,'sources',s.local));assert.equal(crypto.createHash('sha256').update(buf).digest('hex'),s.sha256.toLowerCase());assert.ok(s.url.includes(meta.sha));}
const html=fs.readFileSync(path.join(out,'index.html'),'utf8');
for(const href of [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map(x=>x[1])){if(/^(https?:|data:)/.test(href))continue;if(href.startsWith('#'))assert.ok(html.includes(`id="${href.slice(1)}"`),href);else assert.ok(fs.existsSync(path.resolve(out,href)),href);}
for(const file of ['index.html','map.html','style.css','app.js'])assert.deepEqual(fs.readFileSync(path.join(dir,file)),fs.readFileSync(path.join(out,file)));
assert.equal((html.match(/class="cap-card"/g)||[]).length,capabilities.length);
assert.equal((html.match(/data-scenario=/g)||[]).length,scenarios.length);
assert.equal((html.match(/data-step=/g)||[]).length,6);
assert.equal(modules.length,7);
assert.ok(!fs.readFileSync(path.join(out,'app.js'),'utf8').includes('SCENARIOS_DATA'));
assert.ok(html.indexOf('id="capabilities"')<html.indexOf('id="principle"'));
assert.ok(html.includes('原版未实测'));
console.log(`PASS: ${manifest.length} source hashes; ${capabilities.length} capabilities; ${modules.length} modules; ${scenarios.length} scenarios; page links and published copies.`);
