# Web 研究站点部署

本仓库使用一个 GitHub Pages 站点，通过子路径托管研究页面。项目 001 已于 2026-09-29 部署并完成公开访问验证。

## 地址与范围

- 总入口：`https://yydshly.github.io/0929_codex_project/`
- 001 能力摘要：`https://yydshly.github.io/0929_codex_project/001-awesome-agent-skills/`
- 中文目录：项目路径下的 `catalog.html`
- 完整地图：项目路径下的 `atlas.html`
- 摘要图：项目路径下的 `summary.svg`，可通过 Markdown 图片语法嵌入 README

发布范围为 Git 中提交的 `site/` 静态文件。其他研究项目的本地草稿不属于本轮提交和发布内容。

## 自动发布流程

工作流位于 `.github/workflows/pages.yml`，在 `main` 的项目 001 / 002 / 003 / 004、站点目录或工作流文件变更时触发，也支持手动触发。

1. 使用 Node.js 22 执行项目 001 的 `web/build.mjs`，无需安装依赖。
2. 执行 `web/verify.mjs`，核对 1,108 项双语数据、20 类摘要、5 个场景、SVG 覆盖和本地链接。
3. 将 `site/` 上传为 Pages 产物。
4. 部署到 `github-pages` 环境；部署任务仅获得 Pages 和身份令牌写权限。

GitHub Pages 使用 GitHub Actions 作为构建来源。只有提交到远端的静态内容进入发布产物，网页不包含服务端或服务密钥。新增项目应自行完成研究、生成发布文件并接入总入口后再提交。

## 本地验证

```powershell
node projects/001-awesome-agent-skills/web/build.mjs
node projects/001-awesome-agent-skills/web/verify.mjs
python -m http.server 8765 --bind 127.0.0.1 --directory site
```

所有页面资源使用相对路径，以兼容 `/0929_codex_project/` 项目路径。在线验收应检查首页、中文检索、详情、完整地图、摘要 SVG 和手机布局。

参考：[GitHub Pages 自定义工作流](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)。

## 首次发布验证

2026-09-29，[首次发布工作流](https://github.com/yydshly/0929_codex_project/actions/runs/36518299838)构建和部署成功，对应提交 `511572d0f986c78bafb60fc7624b6ff11dfcb212`。

总入口、项目首页、中文目录、完整地图、摘要 SVG 和样式资源均返回 HTTP 200。公开首页在浏览器中显示 20 类能力和 5 个个人场景；本地 390 像素手机布局无横向溢出，技能链接中的搜索条件可定位到中文结果。1,108 项数据覆盖与静态资源链接检查通过。

## 项目 002 · Agent Skills

- 能力摘要：https://yydshly.github.io/0929_codex_project/002-agent-skills/
- 25 项完整全量图：https://yydshly.github.io/0929_codex_project/002-agent-skills/full-map.html
- 摘要图片：https://yydshly.github.io/0929_codex_project/002-agent-skills/capability-summary.svg（同名 PNG 可下载）

项目 002 的静态文件提交于 `site/002-agent-skills/`，发布前执行 `node projects/002-agent-skills/web/verify.mjs`。该检查核对 25 项技能覆盖、图表、图片尺寸、资源同步与本地链接；不会安装或执行上游技能。

2026-09-29，项目 002 的[发布工作流](https://github.com/yydshly/0929_codex_project/actions/runs/36519587049)已成功，提交 `d0ad640981d06f92766ccd70f8d51217ab0cc457`。首页、全量图和两种图的 SVG / PNG、网页数据均通过 HTTP 200 检查；浏览器确认摘要图与全部 25 项能力可见。

## 项目 004 · MengTo / Skills

- 能力摘要：https://yydshly.github.io/0929_codex_project/004-mengto-skills/
- 六种实际效果：项目首页的 `#real-effects`；可切换演示为 `styles-lab.html`。
- 完整能力图：`map.html` 支持放大；`assets/capability-map.svg` 与同名 PNG 可下载。
- 全量技能索引：项目首页的 `#catalog`，支持搜索、分类筛选与详情。

内容包括核心能力、各类技能的职责与预期效果、五个个人使用场景、长期价值、组合方式及企业 AI 介绍页和真实系统开发的边界。能力图按实际用途归纳 11 个方向，覆盖全部 146 项；六种视觉实景由本项目按对应技能规范构造。

构建执行 `python3 projects/004-mengto-skills/scripts/build_web.py`；验证执行同目录的 `verify_web.py`。图片使用已提交的资源，CI 无需生成图片或安装绘图依赖。检查覆盖数量、分组、六种效果、摘要章节、链接锚点、资源完整性和源文件同步。

2026-09-29，[发布工作流 36520958531](https://github.com/yydshly/0929_codex_project/actions/runs/36520958531)构建和部署均成功，发布提交为 `892ad80744100b74fbf38b86479577b9779e6e62`。17 个公开页面及资源地址均返回 HTTP 200，线上目录包含 146 项技能；浏览器核验摘要、六张实景图、五个个人场景与能力图入口可见。本地验证了筛选、详情与 Escape 关闭、摘要到索引跳转、能力图缩放，390px 手机页面无横向溢出。

本轮只提交项目 004 及相关索引和发布流程更新，其他研究项目的未提交工作保持原状。实际构造与检查范围不代表上游全部技能已运行验证。

## 项目 003 · Matt Pocock Skills

- 能力摘要：https://yydshly.github.io/0929_codex_project/003-mattpocock-skills/
- 实际场景：https://yydshly.github.io/0929_codex_project/003-mattpocock-skills/#scenarios
- 全部技能：https://yydshly.github.io/0929_codex_project/003-mattpocock-skills/#catalog
- 可缩放摘要图：https://yydshly.github.io/0929_codex_project/003-mattpocock-skills/capability-summary.svg

内容包括库定位、38 项技能的六类能力与成果、六个场景、当前到长期的个人价值、技术原理与边界。摘要图直接展示规格、研究结论、修复对照、交接材料、文章结构与提交检查样张。

发布前及 CI 执行 `node projects/003-mattpocock-skills/build-web.mjs` 与 `node projects/003-mattpocock-skills/verify-web.mjs`，无需安装依赖。检查覆盖 38 项技能、18 个场景步骤、六类图表、固定版本来源、本地资源与七个发布文件。构建与其他已发布项目共用现有 Pages 工作流。

本次发布仅包含项目 003 及相关索引、发布配置；保留其他项目的本地未提交工作。展示中的样张与小组件是教学演示，上游技能没有运行实测。
