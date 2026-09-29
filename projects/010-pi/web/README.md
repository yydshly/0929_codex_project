# Pi 中文研究展示

无依赖静态页，内容顺序为能力 → 原理 → 模块 → 场景 → 个人价值 → 证据。支持能力筛选、步骤讲解和场景切换，全部交互在浏览器本地完成，不调用模型或执行任务。

运行 `node projects/010-pi/web/build.mjs` 生成 `site/010-pi/`；运行同目录 `verify.mjs` 核查来源完整性与输出。将总仓库 `site/` 作为 HTTP 服务目录访问，直接打开 HTML 也能使用本页交互。

修改内容请编辑 `content.mjs`；修改交互请编辑 `app.template.js`；`app.js`、`index.html`、总览图和项目 README 由构建器生成。
