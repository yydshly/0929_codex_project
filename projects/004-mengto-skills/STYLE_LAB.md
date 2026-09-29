# 六种风格实景

[打开风格实验室](http://127.0.0.1:4174/004-mengto-skills/styles-lab.html)

2026-09-29 按固定版本 `798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d` 的六个 SKILL.md 正文构造。六个页面保留相同的研究总量和三个能力入口，让布局、字体、色彩、材质与交互的差异可直接比较。它们是本项目新写的实现，并非执行上游 demo 或截图复刻；也不代表已经实测全部 146 项技能。

| 风格 | 对应技能 | 本次实际构造 |
| --- | --- | --- |
| 极简工作室 | agency-grid-layout-minimal | 巨幅字排、细线网格、克制配色、大幅留白 |
| 纸张档案 | book-serif-index | 深色目录侧栏、双页书册、书脊阴影、衬线字与页码；手机变连续单页 |
| 暗色玻璃 | dark-glass-clean-layout | 三栏工作台、低对比磨砂面板、细边高光与能力分布 |
| 绿色技术 | tech-green-dark-mode-modern | 网格背景、角标、等宽元数据、绿色数据条与信息面板 |
| 橙色 SaaS | orange-clean-paper-saas | 暖色圆角容器、可选方向、同步更新的产品预览、真实筛选跳转 |
| 黑白粗野 | documentary-brutalist-agency | 压缩大标题、硬边黑白区块、巨大数字、可展开问答 |

网页顶部提供各技能的固定版本原文链接。每种风格可通过 `?style=studio/paper/glass/terminal/saas/brutal` 独立打开。

## 验证

- 六种桌面页面均在浏览器中查看，检查布局与文本；粗野风格标题已调整字重与字距。
- 六种页面在 390px 视口检查，无水平溢出；查看纸张、橙色产品页与粗野风格的手机排版。
- 键盘风格切换、鼠标切换纸张档案、刷新后的风格恢复均已确认。
- 橙色产品页选择游戏开发后更新为 20 项，提交后进入原始分类筛选，索引显示 20 项结果。
- 粗野风格原生问答展开已确认，浏览器无已捕获的错误或警告。
- JavaScript 通过语法检查。页面没有外部字体、网络素材或新增运行依赖。

桌面及手机首屏截图在 `assets/style-{风格ID}.png` 与 `assets/style-{风格ID}-mobile.png`。截图记录本项目的实际构造结果，不构成对上游全部技能效果的保证。

## 维护

源文件是 `web/styles-lab.html`、`web/styles-lab.css`、`web/styles-lab.js`。修改后运行 `python projects/004-mengto-skills/scripts/build_web.py` 同步到当前站点。入口位于能力索引顶部“六种风格实景”。
