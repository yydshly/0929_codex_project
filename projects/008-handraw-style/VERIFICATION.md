# 008 展示验证记录

验证日期：2026-09-29。环境：Windows、Node.js 22.15.0、Python 3.10.11、Playwright Chromium。

| 检查 | 结果 |
| --- | --- |
| `node web/build.mjs` | 成功生成 `site/008-handraw-style/` 静态副本 |
| `python scripts/render_map.py` | 从固定尺寸源页生成 2400 × 1982 总览 PNG；八张风格图和六张实测图均加载 |
| `node web/verify.mjs` | 全部静态页与发布副本一致；一张能力总览图、440 张上游编号图、九张对照实测图、十二张场景图、一张合成源照片、四份 CLI 原始输出和核心锚点齐全 |
| `node --check web/app.js`、`node --check web/gallery.js`、`node --check web/scenarios.js` | 语法通过 |
| 本地文档相对链接 | 未发现缺失文件 |
| 浏览器桌面 1440px | 总览页：六张上游风格卡、四张版式图、六个场景、九张实测图；全编号拼装器（280/125 含空版式/36）可用，无脚本错误及横向溢出 |
| 浏览器手机 390px | 同上；已保存整页和首屏截图 |
| 全量图鉴 | 桌面与手机端均确认风格 280、版式 124、色彩 36；搜索、分类切换、详情弹窗及原图加载通过 |
| 实测详情页 | 桌面与手机端均确认九张生成图、参考图与合成照片链接，无横向溢出 |
| 工具运行证据页 | 桌面与手机端均确认四份 CLI 原始输出入口、模型参考图策略表及无横向溢出 |
| 按场景样例页 | 桌面与手机端均确认六类用途、十二张图片加载、筛选交互及无横向溢出 |
| 使用判断 | 总览页与场景页均显示“先收录、按需适配”的本次结论；桌面与手机端已检查排版 |
| 一图总览 | 2400 × 1982 PNG；八张上游风格参考、六张实测样例图均加载；总览页可点击打开原尺寸 |

截图：[总览桌面整页](assets/showcase-desktop.png)、[总览桌面首屏](assets/showcase-desktop-first-screen.png)、[总览手机整页](assets/showcase-mobile.png)、[总览手机首屏](assets/showcase-mobile-first-screen.png)、[使用判断桌面](assets/assessment-desktop.png)、[使用判断手机](assets/assessment-mobile.png)、[图鉴桌面首屏](assets/gallery-desktop-first-screen.png)、[图鉴手机首屏](assets/gallery-mobile-first-screen.png)、[实测桌面首屏](assets/trials-desktop-first-screen.png)、[实测手机首屏](assets/trials-mobile-first-screen.png)、[合成源照片对比](assets/trials-desktop-photo-source.png)、[工具证据桌面首屏](assets/workflow-desktop-first-screen.png)、[工具证据手机首屏](assets/workflow-mobile-first-screen.png)、[场景判断桌面](assets/scenario-decision-desktop.png)、[场景判断手机](assets/scenario-decision-mobile.png)、[场景样例桌面首屏](assets/scenarios-desktop-first-screen.png)、[场景样例手机首屏](assets/scenarios-mobile-first-screen.png)。

浏览器验证针对本站五个展示页，新增场景页在桌面和手机宽度下均核对 12 张图、六类筛选与无横向溢出。九张对照实验图和十二张场景样例均是内置生图工具的单次实际输出，方法与逐张观察见 [TRIALS.md](TRIALS.md) 和 [SCENARIOS.md](SCENARIOS.md)。另运行上游 CLI 和参考图解析脚本，发现英文输出未完全翻译、启发式推荐偶有偏题、SC-021 命令行未收敛唯一构图，详见[运行证据页](../../site/008-handraw-style/workflow.html)。没有端到端运行上游 Skill，也未做跨模型或大样本一致性测试。站点已准备好由仓库现有 Pages 工作流发布，但截至本记录尚未确认线上部署。
