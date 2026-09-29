import fs from "node:fs";
import path from "node:path";

export function buildSummary(root, summary, skills) {
  const esc = value => String(value).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"}[c]));
  const text = (x,y,value,size=20,color="#445c7d",weight=400) => `<text x="${x}" y="${y}" font-size="${size}" fill="${color}" font-weight="${weight}">${esc(value)}</text>`;
  const colors = ["#4169b3","#288579","#8161a6","#ad7537","#4c799b","#647388"];
  const cards = summary.types.map((t,i) => {
    const x=44+(i%2)*698,y=253+Math.floor(i/2)*284;
    const count=skills.filter(s=>s.domain===t.domain).length;
    return `<g><rect x="${x}" y="${y}" width="654" height="262" rx="14" fill="white" stroke="#d6e1f0"/>
      <rect x="${x}" y="${y+18}" width="5" height="35" rx="2" fill="${colors[i]}"/>
      ${text(x+24,y+40,t.domain+" · "+count+" 项",27,"#1d3559",650)}
      ${text(x+24,y+72,"遇到："+t.problem,19)}
      ${text(x+24,y+101,t.representative,17,colors[i])}
      <rect x="${x+22}" y="${y+120}" width="610" height="122" rx="8" fill="#f2f6fc"/>
      ${text(x+38,y+148,t.exampleTitle+" / 预期成果",15,"#7085a4")}
      ${t.example.map((line,j)=>text(x+38,y+177+j*25,line,20,"#28476e")).join("")}</g>`;
  }).join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="1390" viewBox="0 0 1440 1390" role="img" aria-labelledby="title desc">
  <title id="title">Matt Pocock Skills：六类能力、可交付成果与个人使用场景</title>
  <desc id="desc">38 项技能：需求与决策 8，研究与原型 2，开发与质量 8，协作与交付 10，学习与写作 6，专项工具 4。每类展示问题、代表技能和成果样张；下方展示当前研究、以后做工具和长期维护的使用价值。样张为研究归纳，不代表上游运行。</desc>
  <rect width="1440" height="1390" fill="#f4f7fc"/>
  <g font-family="Segoe UI,Microsoft YaHei,Noto Sans CJK SC,sans-serif">
  <rect width="1440" height="218" fill="#172b4d"/>
  ${text(44,43,"003 / 开源项目研究集",16,"#9bb8e6")}
  ${text(44,99,"Matt Pocock Skills · 能力与成果",43,"#ffffff",650)}
  ${text(44,141,"把 AI 的需求澄清、研究、开发、验证、交接与写作，组织成可复用的工作方法。",23,"#c6d7f1")}
  ${text(44,184,"38 项技能  =  25 正式 + 9 实验 + 4 专项     ｜     以下按实际用途分成 6 类",20,"#9fbee9")}
  ${cards}
  ${text(44,1149,"对你：从眼前的资料研究，延伸到以后自己的产品与工作方法",27,"#203f69",650)}
  ${summary.personal.map((p,i)=>{const x=44+i*465;return `<rect x="${x}" y="1170" width="434" height="107" rx="9" fill="#e6eefb"/>${text(x+18,1202,p.stage,21,"#335b91",600)}${text(x+18,1231,["研究结论 · 解释 · 文章 · 交接","规格 · 原型 · 代码 · 测试","统一术语 · 可复用规则 · 验证证据"][i],18)}${text(x+18,1257,["把看过的资料变成能继续使用的成果","把想法变成可观察、可验收的行为","让每次项目经验留在自己的资料里"][i],17)}`}).join("")}
  ${text(44,1321,"原理：技能给出方法与模板，模型结合宿主工具执行；不自动提供账号、权限或完整产品。",19)}
  ${text(44,1358,"固定版本 c55ee460 · 分类与样张为中文研究归纳 · 6 个交互场景 / 18 个技能 · 上游技能未运行实测",17,"#7d8da5")}
  </g></svg>`;
  fs.writeFileSync(path.join(root,"assets/capability-summary.svg"),svg);
  fs.writeFileSync(path.join(root,"web/capability-summary.svg"),svg);
  const md=["# Matt Pocock Skills 能力摘要","","[在线摘要](https://yydshly.github.io/0929_codex_project/003-mattpocock-skills/) · [项目入口](README.md)","",summary.definition,"",summary.effect,"","![能力、成果与个人场景](assets/capability-summary.svg)","","## 类型与效果","","按实际用途分为六类，全部覆盖 38 项；这是研究分类。上游目录为 engineering 18、productivity 7、in-progress 9、misc 4，正式插件收录前两类 25 项。","",...summary.types.flatMap(t=>["### "+t.domain+"（"+skills.filter(s=>s.domain===t.domain).length+" 项）","",t.ability,"","**可实现效果：** "+t.result,"","**使用场景：** "+t.when,"","**包含技能：** "+skills.filter(s=>s.domain===t.domain).map(s=>s.name).join("、"),""]),"## 对你的意义","",...summary.personal.flatMap(p=>["### "+p.stage,"",p.trigger,"",p.skills,"",p.gain,""]),"## 技术原理与边界","",summary.mechanism,"",summary.boundary,"","网页中的样张与小组件是研究者制作的教学展示，区别于真实调用上游技能产生的效果。"];
  fs.writeFileSync(path.join(root,"SUMMARY.md"),md.join("\n"));
}
