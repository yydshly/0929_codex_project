# 能力图谱网页

[直接打开网页](index.html) · [场景文字版](../SCENARIO_DEMOS.md) · [完整能力说明](../CAPABILITIES.md) · [返回子项目](../README.md)

网页默认进入能力摘要：定位、可实现成果、覆盖 38 项技能的六类能力、摘要图、当前到长期的个人使用价值与技术原理。场景演示包含 6 个任务、18 个步骤、18 项技能，展示原始材料、处理重点和完整成果样张。三种可操作组件为工具目录原型、故障与修复规则对照、概念理解练习。组件在浏览器中实际运行，未调用上游技能或模型接口。

能力目录保留全部 38 项技能的工作、成果与边界。另有 6 组相近能力对照，以及面向当前项目研究工作的价值说明。其余 20 项技能尚未制作分步样例。

## 浏览

直接用现代浏览器打开 `index.html` 即可，网页无需安装依赖或联网读取数据。查看原始源码链接需要联网。也可从仓库根目录启动静态服务器，将 `site/` 作为根目录，访问 `/003-mattpocock-skills/`。

## 维护

- `../skills-catalog.json`：此前核对的技能名称、状态和固定版本来源。
- `../capability-notes.json`：本次整理的中文能力说明、成果示例和边界。
- `../scenario-demos.json`：六个场景的材料、步骤、成果样张、适用性与验收标准。
- `../summary-notes.json`：库定位、六类能力、成果与个人使用阶段；`../build-summary.mjs` 同步生成 SVG 摘要图与 SUMMARY.md。
- `data.js`：合并生成的浏览器数据，不单独手动维护。
- `index.html`、`styles.css`、`app.js`：结构、样式、筛选与详情交互。
- `scenarios.js`：场景步骤、三种演示组件及能力详情联动。
- `summary.js`：摘要分类、全部技能展开和个人使用阶段；`capability-summary.svg` 为无需 JavaScript 的摘要图片。
- `../CAPABILITIES.md`：完整文字版；修改能力说明时同步更新。
- `../SCENARIO_DEMOS.md`：构建时从场景数据同步生成的文字版，不单独手动维护。

修改数据或网页后，在仓库根目录执行：

```powershell
node projects/003-mattpocock-skills/build-web.mjs
node projects/003-mattpocock-skills/verify-web.mjs
```

生成程序会检查能力清单数量、唯一名称与场景引用，再将七个网页文件同步到 `site/003-mattpocock-skills/`。页面全部使用相对静态资源路径。项目接入仓库现有 GitHub Pages 工作流，在 main 提交时构建、验证并发布；线上地址为 https://yydshly.github.io/0929_codex_project/003-mattpocock-skills/ 。

能力示例用于解释源码所描述的预期成果，不应写成已运行验证的案例或量化效率收益。
