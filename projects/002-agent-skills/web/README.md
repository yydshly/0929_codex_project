# Agent Skills 能力图谱

以具体能力和交付物为核心的静态研究网页，覆盖 25 项技能及 7 组相近能力辨析。

功能：中文与英文全文搜索、7 个阶段筛选、能力详情、问题与结果示例、交付物与能力边界、固定版本来源、个人价值说明。支持移动布局、键盘操作、Esc 关闭详情和详情哈希链接。

## 阅读

直接打开 `index.html` 即可。所有资料和资源均在本地，不依赖 CDN、账号或外部 API。

也可在仓库根目录启动本地预览：

```powershell
python -m http.server 8029 --bind 127.0.0.1 --directory site
```

然后打开 `http://127.0.0.1:8029/002-agent-skills/`。这只是本地预览地址，不是已发布网站。

## 更新与构建

运行 PowerShell 7：

```powershell
pwsh -File projects/002-agent-skills/web/build.ps1
```

- 通用技能信息：`../skills-catalog.json`。
- 具体能力、交付物、问题示例与能力分工：`../capability-details.json`。
- 构建同时生成 `data.js`、`../CAPABILITIES.md`，并将摘要图和全量图等静态文件同步至 `site/002-agent-skills/`。
- `data.js` 为生成文件，修改数据源后重新构建。
- 资源使用相对路径，兼容仓库站点的子路径；无需打包工具或安装依赖。

本次网页为研究展示，能力例子不是执行该技能后的实测报告。线上地址：[能力摘要](https://yydshly.github.io/0929_codex_project/002-agent-skills/)，由仓库 GitHub Pages 工作流发布。

## 完整全量图

打开 [full-map.html](full-map.html)，可在同一张图中查看全部 25 项技能的完整分析。支持整图概览、适应宽度、阅读尺寸、拖动与滚动、Ctrl + 滚轮缩放、按技能定位，以及下载 PNG / SVG。

全量图网页的图片与布局数据由 `build-full-map.py` 生成，PNG 由 `render-full-map.cjs` 渲染。完整说明见 [FULL_MAP.md](../FULL_MAP.md)。修改研究数据后，应先重新生成全量图，再运行 `build.ps1` 同步发布文件。

## 摘要与发布校验

`build-summary.py` 生成覆盖全部 25 项技能的 1600 × 1340 SVG 摘要图；PNG 由 sharp 渲染。生成文件已提交，无需访客安装工具。

运行 `node projects/002-agent-skills/web/verify.mjs`，核对上游清单、25 项能力数据、全量图边界、摘要覆盖、图片尺寸、12 个源文件/发布文件一致性和页面本地链接。GitHub Actions 在部署前执行同一检查。
