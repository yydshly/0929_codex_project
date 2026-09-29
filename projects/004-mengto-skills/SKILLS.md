# MengTo/Skills · 146 个技能索引

固定版本：[`798db0a3ee44`](https://github.com/MengTo/Skills/tree/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d)。核对日期：2026-09-29。

本表为中文研究摘要；逐项用途主要依据上游名称和 description，关键流程另作正文抽查。预期效果是技能指导下希望产出的结果，不表示本次已经实现或测试通过。完整原文描述、资源路径和核验层级见 [结构化清单](skills-catalog.json)。

同类技能应按具体需求选择，尤其避免同时叠加多套视觉风格。表内“演示”仅表示存在 demo/index.html，“脚本”仅表示 scripts/ 内存在文件；均未运行。

| 原始分类 | 中文方向 | 数量 |
| :--- | :--- | ---: |
| `web-design` | 网页设计与交互 | 88 |
| `codex` | 参考研究与智能体工作流 | 20 |
| `game-development` | 浏览器游戏开发 | 20 |
| `3d` | 3D 场景与渲染 | 9 |
| `workflow` | 协作、验收与交付 | 4 |
| `ui` | 界面设计规范与审查 | 3 |
| `media` | 图片素材选用 | 2 |

## 如何挑选

- 尚在研究阶段：先看 codex 中的参考提取、核验解释，以及 ui 中的设计要求与审查。
- 开始做页面：先选页面任务技能，再选一套风格；仅为实际需要补充动效或三维技能。
- 游戏或三维展示：分别从 game-development 或 3d 的目标场景进入。
- 发布、账户服务和多会话管理：先确认工具、平台与任务范围，不能仅凭技能名称认定已具备执行条件。

## 网页设计与交互（88）

| 技能 / 原文 | 能力 | 使用场景 | 预期效果 | 附带资源 |
| :--- | :--- | :--- | :--- | :--- |
| [add-mouse-driven-orbit](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/add-mouse-driven-orbit/SKILL.md) | 鼠标驱动空间视差 | 三维首屏需要轻微互动 | 阻尼相机与物体的协调移动 | 演示、复现提示 |
| [add-shader-cursor-trail](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/add-shader-cursor-trail/SKILL.md) | 着色器光点尾迹 | 首屏或联系区鼠标效果 | 半色调闪烁尾迹与静态替代 | 脚本 |
| [agency-grid-layout-minimal](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/agency-grid-layout-minimal/SKILL.md) | 极简工作室网格 | 设计机构与作品展示 | 大字、克制图片和规则网格 | 演示、复现提示 |
| [ambient-section-particles](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/ambient-section-particles/SKILL.md) | 局部环境粒子 | 单一区块需要季节或气氛 | 可控制密度和可见区域的粒子 | 演示、复现提示 |
| [animation-on-scroll](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/animation-on-scroll/SKILL.md) | 进入视口动画 | 内容分段显现 | 基于可见性触发的动画序列 | 演示、复现提示 |
| [animation-systems](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/animation-systems/SKILL.md) | 统一动效系统 | 页面交互节奏不一致 | 统一时长、缓动、编排和可访问规则 | 演示、复现提示 |
| [atmosphere-background](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/atmosphere-background/SKILL.md) | 光幕氛围背景 | 暗色品牌首屏 | 缓慢光褶、辉光与局部亮点 | 演示、复现提示 |
| [background-grid-webgl](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/background-grid-webgl/SKILL.md) | 透视网格背景 | 技术或数据展示 | 带透视、淡出与轻视差的网格 | 演示、复现提示 |
| [beam-glow-states](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/beam-glow-states/SKILL.md) | 边缘光束状态 | 加载、选择、焦点等反馈 | 与真实组件状态绑定的边缘动效 | — |
| [beautiful-shadows](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/beautiful-shadows/SKILL.md) | 分层阴影 | 卡片、面板与弹层 | 有层次的中性阴影 | 演示、复现提示 |
| [blue-cloudy-clean-modern](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/blue-cloudy-clean-modern/SKILL.md) | 蓝天明亮风格 | 清爽产品展示 | 蓝色氛围、白色框架与安静排版 | 演示、复现提示 |
| [blue-laser-clean-glass-layout](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/blue-laser-clean-glass-layout/SKILL.md) | 蓝色激光玻璃风格 | 深色产品与仪表盘展示 | 蓝光背景与磨砂界面结构 | 演示、复现提示 |
| [book-serif-index](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/book-serif-index/SKILL.md) | 书籍索引风格 | 文章、档案与目录 | 衬线正文、纸张质感和索引导航 | 演示、复现提示 |
| [bright-green-tech-system-webgl](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/bright-green-tech-system-webgl/SKILL.md) | 亮绿技术风格 | 有三维焦点的科技页面 | 硬边分栏、技术标注与 WebGL 区域 | 演示、复现提示 |
| [build-awwwards-quality-sites](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/build-awwwards-quality-sites/SKILL.md) | 高完成度品牌网站 | 作品集、品牌与营销页 | 统一视觉概念、首屏、动效及降级方案 | — |
| [build-interactive-particle-trail](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/build-interactive-particle-trail/SKILL.md) | 交互粒子轨迹 | 鼠标或触摸扫过表面 | 按运动距离发射的连续粒子轨迹 | 演示、复现提示 |
| [build-threejs-scroll-worlds](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/build-threejs-scroll-worlds/SKILL.md) | 连续三维滚动世界 | 空间叙事、展览与产品故事 | 在同一世界中随章节演进的相机和场景 | 演示、复现提示 |
| [build-wireframe-scan-reveal](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/build-wireframe-scan-reveal/SKILL.md) | 线框扫描显现 | 三维模型登场 | 扫描区域中线框先于实体展开 | 演示、复现提示 |
| [cinematic-gsap-lenis-motion-system](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/cinematic-gsap-lenis-motion-system/SKILL.md) | 电影式页面动效 | 工作室或高视觉要求网站 | 平滑滚动、视差、固定区块与悬停编排 | 演示、复现提示 |
| [cinematic-scroll-storytelling](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/cinematic-scroll-storytelling/SKILL.md) | 滚动叙事页面 | 长页与项目故事 | 文字、卡片、背景随滚动协调过渡 | 演示、复现提示 |
| [clean-minimal-beige-light-mode](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/clean-minimal-beige-light-mode/SKILL.md) | 米色极简风格 | 安静、温暖的品牌页 | 暖中性色与克制的流程结构 | 演示、复现提示 |
| [cobejs](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/cobejs/SKILL.md) | 轻量交互地球 | 全球业务的简洁可视化 | 地球、标记和旋转交互 | 演示、复现提示 |
| [company-logos](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/company-logos/SKILL.md) | 品牌标志使用 | 确有依据的品牌展示 | 统一的图标化标志呈现 | 演示、复现提示 |
| [container-lines](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/container-lines/SKILL.md) | 容器辅助线 | 精密网格或编辑式页面 | 边界线和角点强调布局关系 | 演示、复现提示 |
| [corner-diagonals](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/corner-diagonals/SKILL.md) | 切角界面 | 技术卡片与按钮 | 统一的斜切边缘 | 演示、复现提示 |
| [corner-lasers](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/corner-lasers/SKILL.md) | 角落激光构图 | 科技视觉背景 | 光束、发射点与氛围辉光 | 演示、复现提示 |
| [css-alpha-masking](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/css-alpha-masking/SKILL.md) | 边缘透明遮罩 | 图片或滚动列表淡出 | 水平或垂直边缘渐隐 | 演示、复现提示 |
| [css-border-gradient](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/css-border-gradient/SKILL.md) | 渐变边框 | 卡片、按钮与导航 | 克制的边缘高光 | 演示、复现提示 |
| [dark-blue-contrasting-clean](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/dark-blue-contrasting-clean/SKILL.md) | 深蓝高对比风格 | 科技与产品页面 | 清晰结构、钴蓝重点和有限辉光 | 演示、复现提示 |
| [dark-glass-clean-layout](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/dark-glass-clean-layout/SKILL.md) | 深色玻璃布局 | 多列工作区展示 | 磨砂容器、浮动数据卡与空间层次 | 演示、复现提示 |
| [dither-background](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/dither-background/SKILL.md) | 像素抖动背景 | 黑白技术氛围 | 有颗粒层次的程序化暗色背景 | 演示、复现提示 |
| [dither-laser-dark-mode](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/dither-laser-dark-mode/SKILL.md) | 抖动激光风格 | 深色技术品牌页 | 像素纹理与单色激光气氛 | 演示、复现提示 |
| [documentary-brutalist-agency](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/documentary-brutalist-agency/SKILL.md) | 纪实粗野风格 | 文化、建筑与制作机构 | 大字、黑白章节、纪实图片与裸露网格 | 演示、复现提示 |
| [editorial-portfolio-chapters](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/editorial-portfolio-chapters/SKILL.md) | 编辑式作品章节 | 摄影师、艺术家与工作室 | 作品主导的分章展示与联系入口 | 演示、复现提示 |
| [editorial-service-booking](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/editorial-service-booking/SKILL.md) | 服务预约页面 | 沙龙、工作室和服务品牌 | 服务选择、地点与预约状态界面 | 演示、复现提示 |
| [editorial-tech](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/editorial-tech/SKILL.md) | 杂志技术风格 | 技术产品的视觉故事 | 非对称网格、媒体横幅与精密细节 | 演示、复现提示 |
| [falling-leaves](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/falling-leaves/SKILL.md) | 二维落叶效果 | 网页前景与季节氛围 | 有翻转和漂移规律的叶片 | 演示、复现提示 |
| [framed-grid-layout](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/framed-grid-layout/SKILL.md) | 边框网格布局 | 简洁、精确的内容页面 | 细线、角括号与严格对齐 | 演示、复现提示 |
| [framed-tech-dark-border-gradient](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/framed-tech-dark-border-gradient/SKILL.md) | 深色框架渐变风格 | 技术产品展示 | 渐变边框、非对称面板与单色气氛 | 演示、复现提示 |
| [funky-purple-container-tech](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/funky-purple-container-tech/SKILL.md) | 紫色趣味技术风格 | 有活力的科技品牌 | 层叠容器、紫红信号与未来感焦点 | 演示、复现提示 |
| [glass-dark-mode-clock](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/glass-dark-mode-clock/SKILL.md) | 暗色玻璃仪表风格 | 时间、仪表与技术展示 | 磨砂外壳、校准圆盘和光束网格 | 演示、复现提示 |
| [glass-dark-ui](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/glass-dark-ui/SKILL.md) | 暗色玻璃界面 | 磨砂卡片与深色首屏 | 有可读性约束的玻璃与渐变边缘 | 演示、复现提示 |
| [globe-gl](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/globe-gl/SKILL.md) | 地球数据可视化 | 跨地域网络与数据 | 点、弧线、多边形和标签图层 | 演示、复现提示 |
| [globe-particles](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/globe-particles/SKILL.md) | 粒子球体 | 行星、轨道或数据主题 | 发光球核与较稀的环状粒子 | 演示、复现提示 |
| [gooey-blob-system](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/gooey-blob-system/SKILL.md) | 黏性融合形状 | 有机流体界面实验 | 通过滤镜相互融合和分离的形状 | 演示、复现提示 |
| [gsap](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/gsap/SKILL.md) | GSAP 动画实现 | 时间线与复杂滚动动画 | 动画编排、错峰与 ScrollTrigger 集成 | 演示、复现提示 |
| [gsap-scrolltrigger-storytelling](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/gsap-scrolltrigger-storytelling/SKILL.md) | 固定区块产品叙事 | 随滚动逐步讲解产品 | 粘性区域和连续 UI 显现 | 演示、复现提示 |
| [high-contrast-skeuomorphic-clean](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/high-contrast-skeuomorphic-clean/SKILL.md) | 高对比拟物风格 | 触感明确的产品界面 | 深色成型面、内凹层次和明暗分隔 | 演示、复现提示 |
| [image-first-grid-layout](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/image-first-grid-layout/SKILL.md) | 图片优先网格 | 摄影与视觉作品展示 | 大图、结构线和锚定文案 | 演示、复现提示 |
| [landing-page](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/landing-page/SKILL.md) | 单目标落地页 | 产品、应用或服务推广 | 页面大纲、主文案、行动入口与常见问题 | 演示、复现提示 |
| [light-mode-paper-technical](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/light-mode-paper-technical/SKILL.md) | 浅色纸张技术风格 | 文档或技术内容展示 | 暖纸面、深框与技术括号细节 | 演示、复现提示 |
| [liquid-metal-border](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/liquid-metal-border/SKILL.md) | 液态金属边缘 | 选中、悬停与重点控件 | 使用 metal-fx 的金属边缘状态 | — |
| [marquee-loop](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/marquee-loop/SKILL.md) | 无缝循环列表 | 连续展示图片或条目 | 重复项目形成的连续滚动 | 演示、复现提示 |
| [masked-reveal](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/masked-reveal/SKILL.md) | 遮罩逐词显现 | 标题与编辑式文案 | 通过遮罩分词进入视野 | 演示、复现提示 |
| [matterjs](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/matterjs/SKILL.md) | 二维物理互动 | 可碰撞、拖动的页面元素 | 物理物体、约束与交互场景 | 演示、复现提示 |
| [mesh-gradient-dark-blue-clean](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/mesh-gradient-dark-blue-clean/SKILL.md) | 深蓝网状渐变风格 | 基础设施与空间主题 | 暗蓝氛围与精简框架 | 演示、复现提示 |
| [nested-container-clean-agency](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/nested-container-clean-agency/SKILL.md) | 嵌套机构布局 | 工作室与服务介绍 | 外层编辑框架与内层重点区域 | 演示、复现提示 |
| [nested-container-frames](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/nested-container-frames/SKILL.md) | 嵌套容器框架 | 页面信息分层 | 外边界和内嵌框的统一间距 | 演示、复现提示 |
| [number-details](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/number-details/SKILL.md) | 编号细节 | 步骤或项目序列 | 辅助顺序理解的数字标记 | 演示、复现提示 |
| [operational-enterprise-ai](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/operational-enterprise-ai/SKILL.md) | 企业 AI 介绍页 | 自动化、安全与运营产品 | 解释边界、审批、例外与回退的页面 | 演示、复现提示 |
| [orange-clean-paper-saas](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/orange-clean-paper-saas/SKILL.md) | 橙色纸感 SaaS 风格 | 温暖清晰的软件介绍 | 暖色底、橙色重点和产品展示面 | 演示、复现提示 |
| [pointer-trail-emitter](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/pointer-trail-emitter/SKILL.md) | 等距指针发射器 | 快速移动仍需连续的尾迹 | 按距离发射、间距稳定的视觉轨迹 | 演示、复现提示 |
| [pricing-page](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/pricing-page/SKILL.md) | 价格方案页面 | SaaS 套餐说明 | 对比结构、计费说明、常见问题与实验建议 | 演示、复现提示 |
| [product-proof-saas](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/product-proof-saas/SKILL.md) | 产品证据型落地页 | 解释软件或 AI 产品如何工作 | 由真实或标注示例流程支撑的页面 | 演示、复现提示 |
| [progressive-blur](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/progressive-blur/SKILL.md) | 渐进模糊 | 视口边缘与层叠媒体 | 分层遮罩构成的模糊过渡 | 演示、复现提示 |
| [reveal-hover-effect](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/reveal-hover-effect/SKILL.md) | 悬停揭示效果 | 前后对比、材质和产品细节 | 光斑跟随指针揭示第二张对齐图片 | 演示、复现提示 |
| [scroll-progress-timeline](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/scroll-progress-timeline/SKILL.md) | 滚动进度时间线 | 流程、历史与案例步骤 | 可见进度线和当前步骤状态 | 演示、复现提示 |
| [scroll-scrubbed-visual-sequence](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/scroll-scrubbed-visual-sequence/SKILL.md) | 滚动控制视觉序列 | 产品装配、旋转或状态讲解 | 可以正反滚动控制的视觉变化 | 演示、复现提示 |
| [scroll-scrubbed-word-reveal](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/scroll-scrubbed-word-reveal/SKILL.md) | 滚动进度逐词显现 | 宣言、引用与短文 | 随进度显现且保留语义的文字 | 演示、复现提示 |
| [scroll-world-storytelling](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/scroll-world-storytelling/SKILL.md) | 滚动世界叙事 | 文章、案例或品牌故事转网页 | 视频、实时三维或语义图文叙事方案 | 演示、复现提示 |
| [shaders-cursor-ripples](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/shaders-cursor-ripples/SKILL.md) | 图像指针水波 | 首屏或画廊的互动 | 基于 Shaders 组件的图像扭曲 | — |
| [skeuomorphic-ui](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/skeuomorphic-ui/SKILL.md) | 拟物表面 | 触感按钮和材质面板 | 多层阴影、反光、纹理与浮雕细节 | 演示、复现提示 |
| [solar-duotone-bold](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/solar-duotone-bold/SKILL.md) | 统一图标风格 | 需要一致的界面符号 | Solar 双色粗体图标选择 | 演示、复现提示 |
| [split-layout-technical](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/split-layout-technical/SKILL.md) | 技术分屏布局 | 双面板说明与展示 | 细框、等宽标注和分屏层次 | 演示、复现提示 |
| [staggered-word-reveal](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/staggered-word-reveal/SKILL.md) | 错峰文字显现 | 首屏或章节标题 | 逐词淡入并轻微上移 | 演示、复现提示 |
| [tailwindcss](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/tailwindcss/SKILL.md) | Tailwind 界面实现 | 响应式布局与主题样式 | 统一排版、组件和样式约定 | 演示、复现提示 |
| [tech-green-dark-mode-modern](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/tech-green-dark-mode-modern/SKILL.md) | 深色绿色技术风格 | 现代技术产品展示 | 哑黑、绿色信号和仪表盘式卡片 | 演示、复现提示 |
| [technical-wireframe-info-layout](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/technical-wireframe-info-layout/SKILL.md) | 技术线框信息布局 | 结构或原理展示 | 爆炸结构、连接标注和稀疏信息 | 演示、复现提示 |
| [thinking-orbs](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/thinking-orbs/SKILL.md) | AI 活动状态球 | 搜索、生成或语音界面 | 映射真实工作状态的动态指示器 | — |
| [threejs](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/threejs/SKILL.md) | Three.js 基础与集成 | 网站需要三维场景 | 场景、相机、材质、模型和控制器整合 | 演示、复现提示 |
| [threejs-landscape](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/threejs-landscape/SKILL.md) | 程序化三维地景 | 产品舞台或空间背景 | 地形、植被、天空与时段变化 | 演示、复现提示 |
| [threejs-towers](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/threejs-towers/SKILL.md) | 程序化建筑 | 建筑标题或生成式展示 | 参数化建筑和施工展开动画 | 演示、复现提示 |
| [threejs-weather](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/threejs-weather/SKILL.md) | 三维天气 | 雨雪与风暴场景 | 天气、地面状态和声音协调变化 | 演示、复现提示 |
| [unicorn-studio](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/unicorn-studio/SKILL.md) | Unicorn Studio 嵌入 | 复用已制作的交互动效 | 尺寸、层级、性能和替代图的集成 | 演示、复现提示 |
| [vantajs](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/vantajs/SKILL.md) | Vanta 动态背景 | 快速加入三维背景 | 参数化背景与响应式集成 | 演示、复现提示 |
| [webgl-3d-object](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/webgl-3d-object/SKILL.md) | 三维主视觉物体 | 产品或首屏视觉焦点 | 有真实光照、材质和空间深度的物体 | 演示、复现提示 |
| [webgl-landing-steering](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/webgl-landing-steering/SKILL.md) | WebGL 页面方向控制 | 视觉要求与性能难以兼顾 | 明确视觉目标、内容重点与复杂度预算 | 演示、复现提示 |
| [webgl-laser](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/web-design/webgl-laser/SKILL.md) | WebGL 激光背景 | 激光主题页面 | 亮核、光晕与烟雾组成的激光 | 演示、复现提示 |

## 参考研究与智能体工作流（20）

| 技能 / 原文 | 能力 | 使用场景 | 预期效果 | 附带资源 |
| :--- | :--- | :--- | :--- | :--- |
| [article-prompts-to-skills](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/codex/article-prompts-to-skills/SKILL.md) | 文章转技能 | 教程与提示词重复使用 | 独立技能包、示例和验证要求 | 演示、复现提示 |
| [audit-reference-originality](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/codex/audit-reference-originality/SKILL.md) | 参考相似性审查 | 借鉴其他网站之后 | 有证据的相似点、风险提示与修改建议 | 脚本 |
| [audit-verify-explain-grade-5](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/codex/audit-verify-explain-grade-5/SKILL.md) | 核验并通俗解释 | 研究结论或改动验收 | 以证据支撑的易懂说明 | 演示、复现提示 |
| [browser-video-recording](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/codex/browser-video-recording/SKILL.md) | 浏览器演示录屏 | 展示网页操作过程 | 按步骤组织的录屏与媒体核验记录 | 演示、复现提示、脚本 |
| [build-daily-inspiration-sites](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/codex/build-daily-inspiration-sites/SKILL.md) | 灵感批量转页面 | 已有五项灵感采集包 | 五个原创落地页任务与构建流程 | 脚本 |
| [codex-gpt-image-2-5-flare](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/codex/codex-gpt-image-2-5-flare/SKILL.md) | 图像生成与透明素材 | 装饰、游戏精灵和徽记 | 图像文件、提示词和透明通道检查 | 脚本 |
| [daily-ui-inspiration-capture](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/codex/daily-ui-inspiration-capture/SKILL.md) | 日常设计灵感采集 | 长期积累网页参考 | 按日期组织的截图、录屏和提示词包 | 演示、复现提示 |
| [elevenlabs-tts](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/codex/elevenlabs-tts/SKILL.md) | 语音旁白 | 产品或视频解说 | 使用指定声音配置生成的音频 | 演示、复现提示、脚本 |
| [generate-reference-inspired-brand-worlds](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/codex/generate-reference-inspired-brand-worlds/SKILL.md) | 品牌视觉方向探索 | 参考图转多套原创方向 | 不同品牌概念及其图像提示或输出 | — |
| [html-to-interaction-prompts](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/codex/html-to-interaction-prompts/SKILL.md) | HTML 交互拆解 | 已有页面中提取可复用效果 | 带截图依据的分项交互提示 | 演示、复现提示 |
| [implement-fog-of-war](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/codex/implement-fog-of-war/SKILL.md) | 战争迷雾 | 俯视动作游戏的视野与遮挡 | 墙体感知的可见区域和感知规则 | — |
| [iterate-until-verified](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/codex/iterate-until-verified/SKILL.md) | 持续验证迭代 | 复杂任务需要明确完成标准 | 验收条件、修正记录和证据 | — |
| [optimize-web-animations](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/codex/optimize-web-animations/SKILL.md) | 网页动效性能优化 | 滚动卡顿或长期占用资源 | 测量结果及动画、监听器、循环优化 | 演示、复现提示 |
| [performance-profiling](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/codex/performance-profiling/SKILL.md) | Apple 应用性能分析 | 苹果平台卡顿、内存与耗电问题 | 依托 Instruments 等工具的诊断方案 | 演示、复现提示 |
| [publish-project-to-github](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/codex/publish-project-to-github/SKILL.md) | 项目整理与发布 | 完成的小项目需要公开展示 | 项目说明、仓库与兼容项目的 Pages 发布核验 | 脚本 |
| [stitched-full-page-capture](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/codex/stitched-full-page-capture/SKILL.md) | 分段拼接长截图 | 懒加载或滚动动画导致截屏缺失 | 较完整的长图与分区截图 | 演示、复现提示、脚本 |
| [video-to-superprompt](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/codex/video-to-superprompt/SKILL.md) | 视频转实现说明 | 从网站录屏理解布局和动效 | 包含结构、素材、交互与限制的详细提示 | 演示、复现提示 |
| [web-technique-to-skill](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/codex/web-technique-to-skill/SKILL.md) | 成品技术提炼为技能 | 某个效果已在项目中验证 | 可复用机制、参数、演示与常见问题 | 演示、复现提示 |
| [write-like-meng-on-x](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/codex/write-like-meng-on-x/SKILL.md) | 作者风格写作 | 研究 Meng To 的 X 表达方式 | 基于指定语料的文案草稿与风格分析 | 脚本 |
| [x-bookmark-quote-posts](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/codex/x-bookmark-quote-posts/SKILL.md) | 书签转引用帖草稿 | 整理 X 收藏内容 | 带来源的引用帖候选草稿 | 演示、复现提示 |

## 浏览器游戏开发（20）

| 技能 / 原文 | 能力 | 使用场景 | 预期效果 | 附带资源 |
| :--- | :--- | :--- | :--- | :--- |
| [author-game-levels](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/game-development/author-game-levels/SKILL.md) | 关卡编排 | 路线、碰撞和遭遇设计 | 可导航、可复现的关卡数据与验证路径 | — |
| [build-game-audio-feedback](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/game-development/build-game-audio-feedback/SKILL.md) | 游戏音频反馈 | 攻击、状态与环境声音 | 与游戏事件相连的音频层及静音控制 | — |
| [build-game-camera-controls](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/game-development/build-game-camera-controls/SKILL.md) | 游戏相机 | 跟随、锁定、遮挡与触控 | 稳定的观察与交互相机行为 | — |
| [build-game-changelog](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/game-development/build-game-changelog/SKILL.md) | 游戏更新日志 | 游戏内版本展示 | 版本、截图和部署记录一致的日志界面 | — |
| [build-game-inventory](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/game-development/build-game-inventory/SKILL.md) | 背包与装备 | 拾取、拖拽、装备和存档 | 物品流转、原子交换与迁移方案 | — |
| [build-game-map-editor](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/game-development/build-game-map-editor/SKILL.md) | 浏览器地图编辑器 | 编辑关卡摆放与调试区域 | 选取、拖动、撤销、导入导出等编辑能力 | — |
| [build-game-monster-system](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/game-development/build-game-monster-system/SKILL.md) | 怪物模型系统 | 怪物骨骼、动作和判定整合 | 统一关节、挂点、碰撞和动作约定 | — |
| [build-hybrid-game-assets](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/game-development/build-hybrid-game-assets/SKILL.md) | 混合游戏素材管线 | 组合模型、程序几何与二维素材 | 有预算和来源记录的素材整合方案 | — |
| [build-isometric-arpg](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/game-development/build-isometric-arpg/SKILL.md) | 俯视动作角色扮演原型 | 制作可玩的游戏纵向切片 | 移动、战斗、奖励与继续游戏的完整小循环 | — |
| [build-mobile-threejs-games](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/game-development/build-mobile-threejs-games/SKILL.md) | 移动端网页游戏 | 触控与横竖屏适配 | 移动操作、界面和性能检查 | — |
| [build-rigged-game-assets](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/game-development/build-rigged-game-assets/SKILL.md) | 绑定角色资产 | 导入或制作可动画角色 | 骨架、动作库、装备挂点与预览检查 | 脚本 |
| [build-threejs-enemy-systems](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/game-development/build-threejs-enemy-systems/SKILL.md) | 敌人架构 | 多类敌人共享运行逻辑 | 数据驱动的敌人类型与招式系统 | — |
| [build-vesperfall-review-assets](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/game-development/build-vesperfall-review-assets/SKILL.md) | Vesperfall 资产审查 | 该项目的素材目录与模型预览 | 参考 PNG 与实际三维模型的对应检查 | 脚本 |
| [create-game-vfx](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/game-development/create-game-vfx/SKILL.md) | 游戏视觉反馈 | 攻击、法术、伤害与预警 | 有性能预算的特效及低动效替代 | — |
| [design-action-combat](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/game-development/design-action-combat/SKILL.md) | 动作战斗规则 | 攻击、防御、闪避与命中 | 可读时序、接触判定与可复现测试状态 | — |
| [design-game-encounters](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/game-development/design-game-encounters/SKILL.md) | 战斗遭遇编排 | 敌群、波次、首领和奖励 | 有节奏与难度验证的遭遇方案 | — |
| [optimize-threejs-games](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/game-development/optimize-threejs-games/SKILL.md) | 三维游戏性能 | 帧耗时或 CPU/GPU 压力过高 | 瓶颈证据、资源预算和质量分级 | — |
| [ship-web-games](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/game-development/ship-web-games/SKILL.md) | 网页游戏发布 | 经过验证的版本上线 | 构建、部署、线上试玩与回退准备 | — |
| [test-playable-web-games](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/game-development/test-playable-web-games/SKILL.md) | 真实游戏体验测试 | 操作、存档、重试与设备适配 | 可复现步骤、实际行为和缺陷证据 | — |
| [tune-enemy-ai](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/game-development/tune-enemy-ai/SKILL.md) | 敌人行为调优 | 追击、攻击选择和首领行为 | 可测的感知、决策与状态转换 | — |

## 3D 场景与渲染（9）

| 技能 / 原文 | 能力 | 使用场景 | 预期效果 | 附带资源 |
| :--- | :--- | :--- | :--- | :--- |
| [3d-falling-leaves](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/3d/3d-falling-leaves/SKILL.md) | 空间落叶 | 秋景与室外三维场景 | 有翻转、风向和遮挡关系的落叶 | — |
| [3d-four-seasons](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/3d/3d-four-seasons/SKILL.md) | 四季切换 | 建筑与环境展示 | 光照、植被、地面和粒子的协调过渡 | — |
| [3d-high-poly-models](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/3d/3d-high-poly-models/SKILL.md) | 高细节模型 | 产品与建筑近景 | 更平滑的轮廓及分级加载方案 | — |
| [3d-high-resolution-textures](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/3d/3d-high-resolution-textures/SKILL.md) | 高分辨率材质 | 木石布料等近景 | 清晰且物理关系一致的材质表现 | — |
| [3d-retina-resolution](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/3d/3d-retina-resolution/SKILL.md) | 高像素密度渲染 | WebGL 画面模糊 | 画布与后处理尺寸同步、清晰度可调 | — |
| [3d-sky-background](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/3d/3d-sky-background/SKILL.md) | 天空背景 | 室外与昼夜变化 | 天空、太阳、地平线与环境光协调 | — |
| [3d-sky-rays](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/3d/3d-sky-rays/SKILL.md) | 天空光束 | 树林或建筑间阳光 | 考虑遮挡的太阳光束 | — |
| [3d-ultra-realistic-water](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/3d/3d-ultra-realistic-water/SKILL.md) | 海洋水面 | 海景、船只与航行展示 | 波浪、反射、泡沫、尾流和浮力联动 | 演示、复现提示 |
| [3d-virtual-tour](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/3d/3d-virtual-tour/SKILL.md) | 虚拟导览 | 展厅、房产与博物馆 | 导览路线、房间切换和自由观察 | — |

## 协作、验收与交付（4）

| 技能 / 原文 | 能力 | 使用场景 | 预期效果 | 附带资源 |
| :--- | :--- | :--- | :--- | :--- |
| [workflow-progress-screenshots](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/workflow/workflow-progress-screenshots/SKILL.md) | 过程截图 | 视觉成果需要可见证据 | 起点、关键变化和结果的截图记录 | 脚本 |
| [workflow-score-to-target](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/workflow/workflow-score-to-target/SKILL.md) | 按标准打磨 | 已有目标质量分数 | 固定评分尺度、前后证据和修正记录 | — |
| [workflow-ship-change](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/workflow/workflow-ship-change/SKILL.md) | 变更交付流程 | 需要完整发布链路 | 截图、日志、测试、提交与部署核验 | 脚本 |
| [workflow-threads-manager](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/workflow/workflow-threads-manager/SKILL.md) | 多任务状态管理 | 同一项目有多个工作会话 | 合并、上线、日志和未完成任务检查 | 脚本 |

## 界面设计规范与审查（3）

| 技能 / 原文 | 能力 | 使用场景 | 预期效果 | 附带资源 |
| :--- | :--- | :--- | :--- | :--- |
| [audit-ai-design-slop](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/ui/audit-ai-design-slop/SKILL.md) | 界面冗余与缺陷审查 | 界面泛化、堆装饰或难用 | 按影响排序的证据与删改建议 | — |
| [design-first-ui-prompting](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/ui/design-first-ui-prompting/SKILL.md) | 结构化设计要求 | 视觉想法难以描述 | 目标、版式、字体、色彩与约束说明 | 演示、复现提示 |
| [no-ai-design-slop](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/ui/no-ai-design-slop/SKILL.md) | 设计质量约束 | 创建或修改界面时 | 保留产品特点并减少无意义装饰与缺陷 | — |

## 图片素材选用（2）

| 技能 / 原文 | 能力 | 使用场景 | 预期效果 | 附带资源 |
| :--- | :--- | :--- | :--- | :--- |
| [aura-asset-images](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/media/aura-asset-images/SKILL.md) | Aura 图片选用 | 网站背景、肖像和设计素材 | 真实图片链接及比例、尺寸建议 | 演示、复现提示 |
| [unsplash-asset-images](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/media/unsplash-asset-images/SKILL.md) | Unsplash 图片选用 | 背景、头像与产品展示 | 按用途选择的图片及裁切建议 | 演示、复现提示 |

## 使用边界

- `codex` 是上游目录名，内部也有语音、社交文案、Apple 性能与游戏功能，不能把它当作单一能力或全部跨平台兼容的保证。
- 品牌风格、高转化、获奖水准与写实等词表示目标方向；商业转化、性能、真实性与获奖情况仍需独立证据。
- 模型或服务名称按上游文件原样保留，并未核验本账户当前可用性。
- `write-like-meng-on-x` 和 `build-vesperfall-review-assets` 带有明确个人或项目背景，通用研究可借鉴方法，直接采用需要重写上下文。

[返回项目总览](README.md) · [场景与效果](SCENARIOS.md) · [采用建议](USER_VALUE.md)
