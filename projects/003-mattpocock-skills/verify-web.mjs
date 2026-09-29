import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
const root=path.dirname(fileURLToPath(import.meta.url));
const web=path.join(root,"web"),site=path.resolve(root,"../../site/003-mattpocock-skills");
const context={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(web,"data.js"),"utf8"),context);
const data=context.window.SKILL_ATLAS;
assert.equal(data.skills.length,38);
assert.equal(new Set(data.skills.map(s=>s.name)).size,38);
assert.equal(data.skills.filter(s=>s.included_in_plugin).length,25);
assert.equal(data.summary.types.length,6);
assert.equal(data.scenarios.length,6);
assert.equal(data.scenarios.flatMap(s=>s.steps).length,18);
assert.equal(new Set(data.scenarios.flatMap(s=>s.steps.flatMap(t=>t.skills))).size,18);
assert.equal(new Set(data.summary.types.map(t=>t.domain)).size,6);
for(const s of data.skills) {
  assert.equal(data.summary.types.filter(t=>t.domain===s.domain).length,1,s.name);
  assert(s.source_url.includes(data.commit),s.name);
}
for(const t of data.summary.types) {
  assert(data.skills.some(s=>s.domain===t.domain));
  if(t.demo) assert(data.scenarios.some(s=>s.id===t.demo));
}
for(const s of data.scenarios) for(const step of s.steps) {
  for(const name of step.skills) assert(data.skills.some(s=>s.name===name));
  if(step.widget) assert(["prototype","bug","quiz"].includes(step.widget));
}
const files=["index.html","styles.css","app.js","scenarios.js","summary.js","data.js","capability-summary.svg"];
for(const name of files) assert(fs.readFileSync(path.join(web,name)).equals(fs.readFileSync(path.join(site,name))),name);
const html=fs.readFileSync(path.join(web,"index.html"),"utf8");
for(const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
  const url=match[1]; if(/^(https?:|data:|#)/.test(url)) continue;
  assert(fs.existsSync(path.join(web,url.split("#")[0])),url);
}
for(const id of ["summary","scenarios","catalog","compare","value"]) assert(html.includes(`id="${id}-view"`));
const svg=fs.readFileSync(path.join(web,"capability-summary.svg"),"utf8");
for(const t of data.summary.types) { assert(svg.includes(t.domain)); for(const line of t.example) assert(svg.includes(line)); }
assert(fs.readFileSync(path.join(root,"assets/capability-summary.svg")).equals(fs.readFileSync(path.join(web,"capability-summary.svg"))));
for(const script of ["app.js","scenarios.js","summary.js"]) new vm.Script(fs.readFileSync(path.join(web,script),"utf8"));
console.log("PASS: 38 skills / 6 types / 6 scenarios / 18 steps; source links, diagram coverage, local assets and 7 published copies verified.");
