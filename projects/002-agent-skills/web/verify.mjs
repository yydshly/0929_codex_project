import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const web = path.dirname(fileURLToPath(import.meta.url));
const project = path.dirname(web);
const site = path.resolve(project, '../../site/002-agent-skills');
const read = file => fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, '');
const catalog = JSON.parse(read(path.join(project, 'skills-catalog.json')));
const sources = JSON.parse(read(path.join(project, 'sources-manifest.json')));
const names = catalog.map(s => s.name).sort();
assert.equal(new Set(names).size, 25);
assert.deepEqual(sources.files.filter(f => /^skills\/[^/]+\/SKILL.md$/.test(f.path)).map(f => f.path.split('/')[1]).sort(), names);
const context = {window:{}};
vm.runInNewContext(read(path.join(web, 'data.js')), context);
const data = JSON.parse(JSON.stringify(context.window.AGENT_SKILLS_DATA));
assert.deepEqual(data.map(s=>s.name).sort(), names);
assert.ok(data.every(s=>s.capabilities.length===3 && s.deliverables.length===2 && s.scenario && s.limit));
const layout = JSON.parse(read(path.join(project, 'assets/full-map-layout.json')));
assert.deepEqual(layout.skills.map(s=>s.id).sort(), names);
assert.ok(layout.skills.every(s=>s.contentBottom <= s.y+s.height));
const published = ['index.html','styles.css','app.js','data.js','full-map.html','full-map.css','full-map.js','full-map-layout.js','agent-skills-full-map.svg','agent-skills-full-map.png','capability-summary.svg','capability-summary.png'];
for (const file of published) assert.ok(fs.readFileSync(path.join(web,file)).equals(fs.readFileSync(path.join(site,file))), `${file}: source/site mismatch`);
for (const file of ['index.html','full-map.html']) {
  const html = read(path.join(site,file));
  for (const [,href] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    if (/^(https?:|data:|#)/.test(href)) continue;
    assert.ok(fs.existsSync(path.resolve(site,href.split('#')[0])), `${file}: broken ${href}`);
  }
}
const summary = read(path.join(web,'capability-summary.svg'));
for (const name of names.filter(n=>n!=='using-agent-skills')) assert.ok(summary.includes(name), `Missing summary skill: ${name}`);
assert.ok(summary.includes('技能发现与路由'));
for (const [file,width,height] of [['capability-summary.png',1600,1340],['agent-skills-full-map.png',4000,7074]]) {
  const png=fs.readFileSync(path.join(site,file));
  assert.equal(png.readUInt32BE(16),width); assert.equal(png.readUInt32BE(20),height);
}
console.log('Verified 25 upstream skills, 75 capabilities, 50 outputs, 25 map cards, summary coverage, image dimensions, 12 synchronized assets and local page links.');
