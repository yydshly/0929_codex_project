# 006 · 界面技能研究网页

纯静态 HTML、CSS 和 JavaScript，无外部依赖、远程字体和账户配置。页面包括能力总览、11 个技能的 113 条详细能力、三个说明性效果示例、六个使用场景、底层原理及八个扩展方向。

新增定位与范围说明、产品开发中的职责分布、八类任务选择指南，以及审查 / 实现 / 探索的交付区别。明确 113 条为研究归纳，11 个为上游技能数；原生端与完整产品任务有独立边界说明。

## 阅读入口

- [一张图看懂全部能力：放大阅读与下载](capability-map.html)
- [高清总图 PNG](../assets/capability-map.png) · [可缩放 SVG](../assets/capability-map.svg)
- [直接打开网页](index.html)
- [本机预览](http://127.0.0.1:4176/006-jakubkrehel-skills/)
- [站点发布目录](../../../site/006-jakubkrehel-skills/index.html)

沿用仓库 GitHub Pages 发布流程：[在线能力摘要](https://yydshly.github.io/0929_codex_project/006-jakubkrehel-skills/)。发布结果见项目验证记录。

## 网页交互

- 支持全文关键词搜索和专业领域 / 审查流程 / 专项探索筛选，两者可组合。
- 任务选择器覆盖现有页面、变更、新界面、边界测试、候选设计、参考解析、完整产品与原生平台；切换后查看入口、交付和前提，不会执行技能。
- 展开技能可查看输入、交付物、具体能力、方法、效果、前后例子、验收、边界和示例请求。
- 从总览、场景或效果卡跳到技能时，会清除筛选并展开对应详情。
- 无结果时提供恢复入口；按 `/` 定位搜索，搜索框内按 Escape 清除筛选。
- 原生 details 在关闭 JavaScript 时仍可阅读；手机上能力表改为纵向条目。

## 更新与构建

`CAPABILITIES.md` 是技能详细内容来源，`RESEARCH.md` 的扩展表是扩展内容来源。六个场景的网页摘要及页面结构在 `build.mjs` 中维护。

定位与范围、任务选择器、交付区别的内容维护在 `scope.mjs`，样式在 `scope.css`；持久中文说明见 [SCOPE.md](../SCOPE.md)。

```powershell
python projects/006-jakubkrehel-skills/scripts/build_capability_map.py
node projects/006-jakubkrehel-skills/web/build.mjs
node projects/006-jakubkrehel-skills/web/verify.mjs
python -m http.server 4176 --bind 127.0.0.1 --directory site
```

构建生成本目录的 `index.html` 和 `catalog.json`，并将 HTML/CSS/JS 输出到 `site/006-jakubkrehel-skills/`。修改源码后需要重新构建；不要直接编辑生成的 HTML。

## 展示与验证边界

页面中的前后对照是解释能力的自主构造示例，未执行上游技能。浏览器检查确认的是本研究网页的交互和响应式布局。详细记录见 [网页验证](../WEB_VERIFICATION.md)。

摘要与个人场景维护在 `summary.mjs`，样式在 `summary.css`；直接引用上一轮生成的能力总图，不重新生成图片。
