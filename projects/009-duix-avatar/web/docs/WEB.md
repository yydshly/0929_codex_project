# Duix Avatar 研究展示页

无需安装前端依赖。页面首先汇总能力、可实现效果、场景与个人意义，沿用已有 PNG 摘要图，并提供两个带版本说明的社区演示入口；详细部分包含六项能力、文案/音频两条路径切换、三种部署方案切换、四个场景、个人价值与固定版本来源。

```powershell
node projects/009-duix-avatar/web/build.mjs
node projects/009-duix-avatar/web/verify.mjs
python -m http.server 8799 --bind 127.0.0.1 --directory site
```

浏览 `http://127.0.0.1:8799/009-duix-avatar/`，或直接打开 `site/009-duix-avatar/index.html`。源文件在本目录，构建会同步静态文件并复制 Markdown 研究资料到网页的 docs 目录。

交互只解释流程和切换展示内容，不调用模型、不提交素材。人物轮廓是自主绘制的矢量示意，不是 Duix 生成样片。页面无外部字体、脚本或媒体依赖。

发布目标：[GitHub Pages 能力汇总](https://yydshly.github.io/0929_codex_project/009-duix-avatar/)。既有 Pages 工作流负责构建与验证项目 009，并发布 site 目录；实际部署状态以工作流结果为准。演示通过外部链接打开，网页本身无需远端媒体即可阅读。
