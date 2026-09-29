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

工作流位于 `.github/workflows/pages.yml`，在 `main` 的项目 001 / 002、站点目录或工作流文件变更时触发，也支持手动触发。

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
