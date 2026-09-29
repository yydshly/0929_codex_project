# 008 展示页

`index.html` 是能力总览，内嵌可放大的 `capability-map.png` 一图总结；`capability-map-source.html` 是该图的可编辑来源，运行 `scripts/render_map.py` 可重新导出。`gallery.html` 可搜索和查看 440 张上游编号原图，`scenarios.html` 按六类用途展示十二张不同画风的实际生成图，`trials.html` 展示九张对照实验图及其输入、参考与偏差，`workflow.html` 展示上游命令行工具的四组原始输出及模型参考图策略。五个主页面均无需安装浏览器依赖。`build.mjs` 从固定上游快照生成目录数据，把网页、原图、总览图与实测图同步到 `site/008-handraw-style/`；`verify.mjs` 核对发布副本和全部编号图片。请浏览构建后的站点目录，而非单独打开未构建的源页。

```powershell
node projects/008-handraw-style/web/build.mjs
node projects/008-handraw-style/web/verify.mjs
```

修改一图总览后，先运行 `python projects/008-handraw-style/scripts/render_map.py` 重新导出 PNG，再运行构建和验证命令。
