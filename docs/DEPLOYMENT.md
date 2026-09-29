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

2026-09-29，[发布工作流 36522363357](https://github.com/yydshly/0929_codex_project/actions/runs/36522363357)构建和部署均成功，内容提交为 `8e06f36baf1c9216d6009a5c830dbdb8719ab502`。项目首页与六个资源均返回 HTTP 200，按文本内容与本地发布版本逐一比对一致；总入口也返回 HTTP 200 并包含项目 003。浏览器确认线上摘要图加载成功，六类能力覆盖 38 项技能，展开列表与技能详情正常。手机布局检查已在同版本本地页面完成，未发现页面横向溢出。

## 项目 005 · Skills Hub

- 在线能力摘要：https://yydshly.github.io/0929_codex_project/005-skills-hub/
- 本次生成的能力汇总图：项目路径下的 `summary.svg`。

摘要明确 Skills Hub 是管理 Skill 的工具，支持外部技能接入和增删改查，附带 manage-skills-hub 管理 Skill。页面同时说明使用场景、底层原理、如何使用、可扩展方向，以及对当前开源研究工作的意义。引用本研究生成的能力图，未使用上游应用截图冒充功能验证。

CI 执行 `node projects/005-skills-hub/web/build.mjs` 和 `node projects/005-skills-hub/web/verify.mjs`，无需安装依赖；核对来源哈希、14 项能力、6 个场景、6 项建议、汇总图、内部链接及发布副本。上游应用与技能未运行实测。

## 项目 007 · OJO Design Skills

- 在线能力摘要：https://yydshly.github.io/0929_codex_project/007-ojo-design-skills/
- 个人使用场景：项目首页的 `#personal`。
- 已确认的摘要图：`map.html` 支持缩放；`capability-summary.png` 和 `capability-summary.svg` 可下载。

内容明确一个独立 Skill 与九份参考资料的能力、可交付效果、使用时机与实际用法，补充对当前开源研究网页、未来个人工具与后台、产品官网、改版审查及长期设计积累的意义。图片沿用此前确认的总览图；预期收益不等于上游 Skill 实测效果。

CI 执行 `python3 projects/007-ojo-design-skills/scripts/build.py` 和 `python3 projects/007-ojo-design-skills/scripts/verify.py`，默认复用已提交图片，仅依赖 Python 标准库。核对固定来源哈希、1 + 9 项完整覆盖、能力摘要表、五个个人场景、图片尺寸、链接锚点与发布副本。只提交项目 007 及对应索引和发布配置。

## 项目 006 · Jakub Krehel Skills

- 能力摘要：https://yydshly.github.io/0929_codex_project/006-jakubkrehel-skills/#summary
- 个人场景：https://yydshly.github.io/0929_codex_project/006-jakubkrehel-skills/#personal
- 完整能力图：https://yydshly.github.io/0929_codex_project/006-jakubkrehel-skills/capability-map.html

说明 Web 界面设计、优化与验证的定位，按 6 个专业领域、2 个审查流程、3 个探索流程展示能力与效果；增加研究展示页、个人工具、交付检查、方案学习和长期维护五个个人场景。摘要沿用既有完整能力图，提供 PNG / SVG 下载。

CI 执行项目的 web/build.mjs、web/verify.mjs 和 scripts/verify.py，核对 11 个技能、113 条细化能力、63 个来源文件、三类摘要、五个个人场景、资源同步及内部链接。图像使用已提交资源，CI 不依赖 Windows 字体或图像生成环境。上游技能未安装或运行实测。

2026-09-29，[项目 006 发布工作流](https://github.com/yydshly/0929_codex_project/actions/runs/36524520398)构建及部署成功，对应内容提交 `e6aed1f258948f9411c492187384330e41b3b625`。首页、3 份样式、脚本、总图阅读页、SVG 和 PNG 共 8 个公开资源均返回 HTTP 200；文本按 Git 换行规则比对一致，PNG 字节一致。浏览器确认三类摘要、五个个人场景及 3300 像素宽的原摘要图正常加载。本地 1280px / 390px 布局与示例展开、技能跳转已验证。

## 项目 009 · Duix Avatar

- 网页地址：`https://yydshly.github.io/0929_codex_project/009-duix-avatar/`
- 摘要图阅读：项目路径下的 `map.html`，原图为 `capability-summary.png`。
- 构建与验证：`node projects/009-duix-avatar/web/build.mjs` 和 `node projects/009-duix-avatar/web/verify.mjs`，无需安装前端依赖。

既有 Pages 工作流加入项目 009 的变更触发、构建与检查。页面汇总能力、可实现效果、社区演示、适用场景和个人价值，沿用已有摘要图，并保留模型、硬件及许可来源。发布静态研究网页，不部署 Duix 模型服务；实际运行结果以 GitHub Actions 为准。
