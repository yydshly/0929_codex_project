import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildSummary } from "./build-summary.mjs";

const root = path.dirname(fileURLToPath(import.meta.url));
const catalog = JSON.parse(fs.readFileSync(path.join(root, "skills-catalog.json"), "utf8").replace(/^\uFEFF/, ""));
const notes = JSON.parse(fs.readFileSync(path.join(root, "capability-notes.json"), "utf8").replace(/^\uFEFF/, ""));
if (notes.length !== catalog.skills.length || new Set(notes.map(n => n.name)).size !== notes.length) throw new Error("能力清单有缺失或重复");
const skills = notes.map(n => {
  const source = catalog.skills.find(s => s.name === n.name);
  if (!source) throw new Error("未找到源码条目：" + n.name);
  return { name: n.name, title_zh: source.title_zh, category: source.category, included_in_plugin: source.included_in_plugin, source_url: source.source_url, ...n };
});
const scenarios = JSON.parse(fs.readFileSync(path.join(root, "scenario-demos.json"), "utf8"));
if (new Set(scenarios.map(s => s.id)).size !== scenarios.length) throw new Error("场景名称重复");
for (const scenario of scenarios) for (const step of scenario.steps) {
  for (const name of step.skills) if (!skills.some(s => s.name === name)) throw new Error("场景引用了未知技能：" + name);
}
const summary = JSON.parse(fs.readFileSync(path.join(root, "summary-notes.json"), "utf8"));
buildSummary(root, summary, skills);
const data = { commit: catalog.commit, researched_on: catalog.researched_on, skills, scenarios, summary };
const js = "window.SKILL_ATLAS = " + JSON.stringify(data, null, 2).replace(/</g, "\\u003c") + ";\n";
fs.writeFileSync(path.join(root, "web/data.js"), js);
const target = path.resolve(root, "../../site/003-mattpocock-skills");
fs.mkdirSync(target, { recursive: true });
for (const filename of ["index.html", "styles.css", "app.js", "scenarios.js", "summary.js", "data.js", "capability-summary.svg"]) fs.copyFileSync(path.join(root, "web", filename), path.join(target, filename));
const narrative = ["# 从实际场景理解技能", "", "[打开交互演示](web/index.html) · [返回子项目](README.md)", "", "6 个场景、18 个分步样张，涵盖 18 个技能。场景为根据固定版本源码设计的教学演示，不是上游技能执行日志。三个小组件分别提供原型筛选、故障与修复对照、概念理解练习。其他 20 项技能保留在完整能力目录中，尚未制作分步样例。", ""];
for (const scenario of scenarios) {
  narrative.push("## " + scenario.title, "", scenario.context, "", "**什么时候值得用：** " + scenario.fit, "", "**什么时候不必用：** " + scenario.skip, "", "**原始材料**", "", "```text", scenario.input, "```", "", "**示例依据：** " + scenario.evidence, "");
  for (const step of scenario.steps) {
    narrative.push("### " + step.title, "", "对应技能：" + step.skills.map(name => "[" + name + "](" + skills.find(s => s.name === name).source_url + ")").join("、"), "", step.why, "", ...step.actions.map(a => "- " + a), "", "**" + step.artifactTitle + "**", "", "```text", step.artifact, "```", "", "**检查成果：** " + step.check, "");
  }
  narrative.push("**最终得到：** " + scenario.outcome, "");
}
fs.writeFileSync(path.join(root, "SCENARIO_DEMOS.md"), narrative.join("\n"));
console.log(JSON.stringify({ skills: skills.length, scenarios: scenarios.length, output: target, files: 7 }));
