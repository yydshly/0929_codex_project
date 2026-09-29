# 能力摘要与技能目录网页

页面包含 40 项中文深入解读、9 个能力方向，以及 1,108 个上游条目的中文能力简介检索。目录条目可能是单个技能或技能集合，不作为独立技能数量。全部条目的英文原文可在详情中展开对照，中文和英文关键词均可搜索。

每项中文解读包含具体任务、产物、场景、边界和来源。支持全文搜索、分类、分页、详情弹窗、键盘关闭及空结果恢复。这是能力说明网站，没有把上游技能安装到网页中。

新增 `atlas.html` 全量图页面：将全部 1,108 个目录条目按 20 个研究方向绘制到一张 SVG，支持缩放、拖动、搜索定位、方向分区导航和原图下载。各方向包含能力范围、使用场景、目的效果、扩展方向、个人意义。说明及统计口径见 [FULL-MAP.md](../FULL-MAP.md)。

## 页面入口

- `index.html`：直接展开的能力摘要首页，20 类能力、预期产物、使用时机、5 个个人场景和扩展路径。
- `catalog.html`：原能力图鉴和全部中文目录；支持 `?q=` 定位具体技能。
- `atlas.html`：可缩放完整地图；`atlas.svg` 是独立全量图。
- `summary.svg`：适合 README 的静态能力摘要图，与首页使用同一组方向定义。

## 构建与数据

在此目录执行 `node build.mjs`，无需第三方依赖。它读取 `curated.mjs` 中的中文解释和 `../sources/upstream-README.md` 中的固定版本目录，生成 `dist/`，同时更新项目的 `skills-catalog.json`、`SKILL-DETAILS.md` 和总发布目录 `site/001-awesome-agent-skills/`。`atlas-build.mjs` 同时生成全量图的页面、独立 SVG、浏览器数据和 `atlas-catalog.json`；分类与方向分析在 `atlas-model.mjs`。摘要内容在 `overview-model.mjs`，`overview-build.mjs` 同时生成首页与摘要 SVG；`verify.mjs` 校验数据覆盖、代表技能和页面本地链接。构建不操作其他项目。

目录原始列表共 1,113 项，排除 5 个明确标注为非技能的配套工具后保留 1,108 项。全部能力简介已逐项翻译为中文，未逐项核验所有外链或实测能力。能力任务按来源归纳；例子和边界为研究分析。译文在 `translations-zh.tsv`，`localize.mjs` 验证翻译覆盖率并检查源快照，原文始终保留在数据中。

## 本地预览

直接打开 `dist/index.html`；或在总仓库根目录运行：

```powershell
python -m http.server 8765 --bind 127.0.0.1 --directory site
```

访问 `http://127.0.0.1:8765/001-awesome-agent-skills/`。已添加 GitHub Actions 发布流程；部署结果见[部署记录](../../../docs/DEPLOYMENT.md)。所有资源使用相对路径，支持 GitHub Pages 子路径。
