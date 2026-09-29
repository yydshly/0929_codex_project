# Skills Hub 研究网页

纯静态 HTML/CSS，无安装依赖、远程字体、账户连接或后台服务。支持直接打开 `index.html`；网页文件同时输出到总仓库 `site/005-skills-hub/`。

## 更新

1. 修改 `content.json` 中的能力、场景和扩展建议。
2. 修改 `styles.css` 调整外观；页面结构与原理说明位于 `build.mjs`；通俗解释、增删改查、如何使用和个人价值位于 `guide.mjs`；独立能力汇总图位于 `summary.svg`。
3. 从总仓库执行 `node projects/005-skills-hub/web/build.mjs`。
4. 检查文档与页面，再按总仓库发布约定处理；发布文件随仓库 main 分支提交，由 GitHub Pages 工作流构建和检查。

构建会更新本目录 `index.html`、发布目录 `index.html/styles.css/summary.svg`，以及研究目录的 `CAPABILITIES.md`、`SCENARIOS.md`、`EXTENSIONS.md`，并将汇总图复制到 `assets/capability-summary.svg`。不要直接修改这些生成文件。

## 预览

```powershell
python -m http.server 4175 --bind 127.0.0.1 --directory site
```

访问 <http://127.0.0.1:4175/005-skills-hub/>。HTML 包含自有 SVG favicon，采用原生章节链接与 details/summary；关闭 JavaScript 不影响阅读和展开说明。

## 内容边界

14 项能力为研究归纳；6 个场景和 6 项扩展为分析建议。48 个内置适配来自固定版本，未逐个实测。版本与来源统一使用固定提交。网页不是上游应用的交互仿制，也不执行真实安装或同步。

发布前执行 `node projects/005-skills-hub/web/verify.mjs`，检查来源哈希、能力与场景引用、汇总图、本地资源、章节和发布副本。
