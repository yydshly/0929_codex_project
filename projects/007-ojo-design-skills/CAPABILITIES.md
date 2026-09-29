# OJO Design Skills · Skill 与参考模块逐项分析

> 固定版本的文档研究；1 个独立 Skill + 9 个参考模块。以下示例请求、效果说明与验收建议为研究整理，未运行上游技能。

顺序按理解与使用流程编排，不代表上游文件排序。每个模块均包含能力、场景、输入、产出、示例与边界。

## 00 · 设计流程总控（核心 Skill）

文件：`SKILL.md` · 阶段：贯穿全流程

从产品需求出发，选择设计路线，把视觉方向逐步落实为可供开发使用的规范。

### 能力

- 按产品价值选择效率路线或品牌路线；从活力、完成质感、密度、视觉重量、严肃程度五个维度推导风格。
- 要求研究真实参考，把布局、页面结构与视觉方向一起决定，避免只换颜色。
- 串联设计参数、组件、动效、布局、素材、图标和最终审查；品牌路线还会选择合适的设计方法。

### 使用场景

- 从零开始设计后台、工具或消费应用
- 已有参考图，需要转换为一致的界面规范
- 产品页面增多，需要统一视觉语言

**输入：** 产品目标、用户、核心流程、平台、品牌或参考图，以及现有技术和设计约束。

**产出：** 视觉方向、设计原则、颜色与排版、间距、组件状态、动效参数、素材要求和建议使用的库。

**示例请求（研究构造）：** 为一个供门店店长每日查看缺货、处理补货的后台定义设计规范。先解释适用路线，再给出方向与关键组件状态。

**预期效果：** 预期把“帮我做得好看”转化为有理由、可交接的设计决定；实际效果仍需页面验证。

**边界：** 是流程型 Skill，搜索、读图、编码和浏览器操作由宿主提供。完整新设计流程要求方向确认；General Skill Mode 对点评、改进等允许按调用者要求调整，不宜一概声称每次都必须等待。

原文：[依据 1](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/SKILL.md#L102) · [依据 2](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/SKILL.md#L91) · [依据 3](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/SKILL.md#L352)

[本地原文](sources/skills/app-ui-ux-best-practices/SKILL.md)

## 01 · 反模式与质量约束（参考模块）

文件：`references/anti-patterns.md` · 阶段：开始前 · 全程检查

提醒 AI 避免未经思考的配色、布局、文案和素材套路，并检查实现中容易出错的地方。

### 能力

- 把“高级感、克制、简洁”等形容词翻译成饱和度、密度、字距、动效幅度等具体决定。
- 识别同质化配色、套版布局、占位图片、泛化文案和不一致图标；要求内容与业务相符。
- 检查硬编码尺寸、文字溢出、交互反馈等实现风险，并讨论无障碍和响应式问题。

### 使用场景

- AI 生成页面有明显模板感
- 界面到处写着“了解更多”，不能表达业务动作
- 长标题、中文字体或手机布局容易出问题

**输入：** 产品定位、视觉方向、界面截图或代码、真实内容与素材。

**产出：** 反模式清单、具体替换建议、可观察的风格参数，以及需要保留的合理例外。

**示例请求（研究构造）：** 审查这个会员服务首页：指出与品牌无关的装饰、含糊按钮文案和占位素材，按位置给出修改建议。

**预期效果：** 预期减少模板化表达和明显界面缺陷；“不像 AI”属于主观判断，不能证明任务效率更高。

**边界：** 规则带有作者的强烈审美偏好，不应替代品牌约束或用户测试。它引用的 emfont-fonts 等外部能力不包含在本库内。

原文：[依据 1](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/anti-patterns.md#L19) · [依据 2](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/anti-patterns.md#L129) · [依据 3](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/anti-patterns.md#L366)

[本地原文](sources/skills/app-ui-ux-best-practices/references/anti-patterns.md)

## 02 · 材质隐喻与品牌表达（参考模块）

文件：`references/material-metaphor.md` · 阶段：品牌路线 · 方向推导

把品牌感受映射到材质和环境，进一步推导表面、光线、边缘、层次与运动。

### 能力

- 先明确情绪关键词，再选择能表达它们的材质及环境；支持平静、精细，也支持粗粝、强烈的方向。
- 将纸张、织物、玻璃、金属等联想转译为阴影、透明度、纹理、边缘与层次关系。
- 用统一的视觉物理规则约束组件与动效，减少不同页面各自发挥。

### 使用场景

- 品牌电商、生活方式、日记或创意应用
- 已有品牌故事，却没有可落地的视觉语言
- 需要统一跨页面的触感与氛围

**输入：** 品牌个性、目标人群、情绪关键词、文化背景与视觉参考。

**产出：** 材质与环境说明、光照和深度规则、边缘与纹理策略、组件和动效转译依据。

**示例请求（研究构造）：** 为强调沉静阅读与手写记忆的日记产品，将品牌感受转换为材质、光线、层次和组件处理，并解释选择依据。

**预期效果：** 预期让颜色、阴影和运动共享一套解释逻辑，而不只是一组孤立的漂亮效果。

**边界：** 这是品牌路线的一种方法。角色原型、叙事和文化符号也在核心 Skill 中被允许，并没有各自独立的 Skill 文件。材质隐喻不是实际物理模拟引擎。

原文：[依据 1](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/material-metaphor.md#L1) · [依据 2](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/material-metaphor.md#L58) · [依据 3](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/material-metaphor.md#L115)

[本地原文](sources/skills/app-ui-ux-best-practices/references/material-metaphor.md)

## 03 · 设计参数体系（参考模块）

文件：`references/visual-tokens.md` · 阶段：方向确定后 · 基础规范

定义应有哪些颜色、字体、间距与阴影变量，让各页面能使用同一套视觉基础。

### 能力

- 区分品牌色、背景、表面、文字、边框与成功/警告/错误等语义颜色。
- 组织标题、正文、说明文字等排版角色，以及间距和阴影尺度。
- 讨论明暗模式、冷暖关系、色彩比例和饱和度预算；给出参数表达与主题衔接建议。

### 使用场景

- 多个页面颜色和圆角各不相同
- 已有方向，需要输出开发可用的主题参数
- 准备维护明暗主题或移动端视觉一致性

**输入：** 确认的方向、参考图、品牌颜色、阅读密度、平台与技术约束。

**产出：** 带用途的设计参数表、色值与使用规则、排版和间距体系；部分上下文约定输出 theme.json。

**示例请求（研究构造）：** 将已确认的门店后台方向整理为颜色角色、文字层级、间距和阴影变量，标注按钮、列表和异常提示如何使用。

**预期效果：** 预期让主题调整能沿共享参数传递，减少逐个页面修补。

**边界：** 文档主要定义参数结构，具体值由模型推导。包含 Tailwind v3.4 和外部 color-palette-library.md 的上下文；对比度须按实际文字与背景测量，不能照抄表格就宣称合规。

原文：[依据 1](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/visual-tokens.md#L1) · [依据 2](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/visual-tokens.md#L7) · [依据 3](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/visual-tokens.md#L118)

[本地原文](sources/skills/app-ui-ux-best-practices/references/visual-tokens.md)

## 04 · 组件与八种交互状态（参考模块）

文件：`references/component-recipe.md` · 阶段：组件落地

把设计意图翻译为组件样式和状态规则，避免页面只有静态外观。

### 能力

- 覆盖默认、悬停、聚焦、按下、禁用、加载、错误和成功状态，并提供原子化 Tailwind 类示例。
- 给出卡片、主次按钮、输入框、导航项和标签等组件配方，衔接不同视觉路线。
- 涉及键盘、焦点、语义标签、触摸目标和响应式行为，以及悬停时避免布局跳动。

### 使用场景

- 表单只做了正常状态，异常状态没有设计
- 报价卡、按钮或导航要交接给开发
- 组件库需要统一视觉和交互规范

**输入：** 设计参数、组件职责、用户操作、异步与错误行为、目标设备。

**产出：** 按组件整理的状态规格、Tailwind 类组合、可访问性和响应式要求。

**示例请求（研究构造）：** 为保存补货单按钮与数量输入框写完整状态规范，包括提交中防重复操作、库存不足错误和保存成功反馈。

**预期效果：** 预期让开发明确“点击之后发生什么”，并让不同组件的同类状态一致。

**边界：** 类字符串不能单独实现数据请求、状态管理或业务校验。并非每个组件都适用全部八种状态；需要注明适用性。它不是可直接安装的 React 组件包。

原文：[依据 1](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/component-recipe.md#L9) · [依据 2](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/component-recipe.md#L212) · [依据 3](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/component-recipe.md#L569)

[本地原文](sources/skills/app-ui-ux-best-practices/references/component-recipe.md)

## 05 · 动效与行为规范（参考模块）

文件：`references/motion-system.md` · 阶段：交互反馈与运动

先说明为什么需要动画，再确定运动参数、性能要求和减少动态效果时的替代方案。

### 能力

- 用反馈、引导、连续性或品牌表达解释动画目的，避免无意义的运动。
- 提供弹簧、阻尼、过渡与错峰等设计建议，讨论按钮、弹窗和页面切换。
- 要求考虑减少动态效果偏好、资源和渲染性能，并解释滚动显现等模式的适用条件。

### 使用场景

- 按钮点击没有反馈，弹窗出现突兀
- 品牌页需要有目的的动态表达
- 页面动画太多、令人分心或有性能问题

**输入：** 交互状态、动效目的、品牌节奏、目标设备、用户动态效果偏好。

**产出：** 动效目的与触发条件、属性和参数、静态替代方案、性能检查项。

**示例请求（研究构造）：** 为补货单的提交、成功反馈和侧边详情制定动效规则，说明减少动态效果时如何保持全部信息可见。

**预期效果：** 预期让运动帮助用户理解操作和位置变化，而不阻碍任务。

**边界：** 是动效规范，不包含动画运行引擎。motion-system 允许有明确目的的滚动显现，但 design-audit 仍有禁止项，采用前应先统一规则。

原文：[依据 1](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/motion-system.md#L7) · [依据 2](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/motion-system.md#L78) · [依据 3](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/motion-system.md#L513)

[本地原文](sources/skills/app-ui-ux-best-practices/references/motion-system.md)

## 06 · 图标一致性（参考模块）

文件：`references/icon-guidelines.md` · 阶段：视觉细节

统一图标的来源、形态、线宽、尺寸和状态颜色，避免界面像不同素材的拼接。

### 能力

- 要求选定统一图标库与风格，保持线宽及基准网格一致。
- 区分导航、激活、禁用和辅助场景的颜色用途。
- 限制随机符号、装饰性发光和混搭图标，提供交付前检查表。

### 使用场景

- 导航栏混用了描边、填充和 emoji
- 多个开发者引入了不同图标库
- 需要规范工具栏与按钮中的图标

**输入：** 现有图标清单、平台、品牌风格和交互状态。

**产出：** 统一库与风格选择、尺寸/线宽/颜色规则、替换清单。

**示例请求（研究构造）：** 检查现有后台的导航和操作按钮，统一图标来源、线宽和选中状态，列出需要替换的项目。

**预期效果：** 预期降低视觉噪声，保持操作入口的辨识度和一致性。

**边界：** 不会自动下载或授权图标；库名称、默认参数、平台适配与许可需另核对。禁止所有 emoji 或混合风格是作者策略，不是通用无障碍标准。

原文：[依据 1](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/icon-guidelines.md#L1) · [依据 2](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/icon-guidelines.md#L74) · [依据 3](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/icon-guidelines.md#L96)

[本地原文](sources/skills/app-ui-ux-best-practices/references/icon-guidelines.md)

## 07 · 首屏与品牌构图（参考模块）

文件：`references/hero-enrichment.md` · 阶段：存在首屏展示区时

先判断是否需要展示型首屏，再选择文字、图片、编辑式构图或动态内容。

### 能力

- 用 0/A/B/C/D/E 六档区分无 Hero、文字型、单图型、编辑式构图、动态型和沉浸型首屏。
- 把档位与用户当前任务、品牌意图、真实素材和制作成本关联，而非越复杂越好。
- 给出构图要求、素材策略、主行动、参数引用和动态效果降级要求。

### 使用场景

- 营销落地页、品牌电商首页、编辑内容入口
- 首屏总是居中大标题加两个按钮
- 后台页面被巨大宣传区挤占操作空间

**输入：** 页面目的、用户是否已进入工作区、品牌关键词、可用图片或视频、预算。

**产出：** 首屏档位及理由、构图、主行动和素材规格；上下文中约定写入 theme.hero。

**示例请求（研究构造）：** 这个后台登录后的首页是否需要 Hero？请给出档位和理由；另为其公开产品介绍页选择一个适当的首屏结构。

**预期效果：** 预期让首屏直接服务工作或品牌表达，避免给所有页面套同一版式。

**边界：** 不是六个独立 Skill，也不自带图片、视频、3D 模型或 WebGL 系统。文件依赖 design-dna/write-code 约定，且默认兜底档位的文字有不一致。

原文：[依据 1](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/hero-enrichment.md#L9) · [依据 2](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/hero-enrichment.md#L24) · [依据 3](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/hero-enrichment.md#L188)

[本地原文](sources/skills/app-ui-ux-best-practices/references/hero-enrichment.md)

## 08 · 组件与工具库选型（参考模块）

文件：`references/component-libraries.md` · 阶段：实现选型

按用途整理界面、动效、图标和专项组件库，帮助寻找符合项目需求的实现基础。

### 能力

- 整理桌面、移动、Tailwind 和无样式组件库的适用方向。
- 涵盖表格、图表、表单、弹窗、通知、拖拽、媒体和虚拟列表等专项需求。
- 建议根据既有项目、所需视觉自由度与风格一致性选择方案，避免混用多个设计系统。

### 使用场景

- 确定设计后，不知道用哪套组件实现
- 后台需要复杂表格或虚拟列表
- 高度定制品牌界面，需要评估无样式组件

**输入：** 项目框架、平台、已安装依赖、组件需求、自定义程度、维护限制。

**产出：** 候选库及适用理由、可复用能力与需要自行实现的部分。

**示例请求（研究构造）：** 为已有 React 后台的表格、弹窗和通知挑选尽可能少的依赖，先检查现有组件，再说明采用与不采用理由。

**预期效果：** 预期减少选型盲目性与重复实现，但并不保证列出的库均适合当前版本。

**边界：** 这是上游静态推荐目录，不是依赖安装器或实时生态数据库。部分条目可能过时或平台描述不准确，实际采用前须查官方文档、版本和维护状况。

原文：[依据 1](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/component-libraries.md#L1) · [依据 2](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/component-libraries.md#L160) · [依据 3](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/component-libraries.md#L262)

[本地原文](sources/skills/app-ui-ux-best-practices/references/component-libraries.md)

## 09 · 设计审查与交付检查（参考模块）

文件：`references/design-audit.md` · 阶段：交付前 · 改进时

按清单查找设计与交互问题，说明严重程度、影响位置和修复方向。

### 能力

- 检查风格与已选方向是否一致，检查颜色、排版、交互状态、动效和素材。
- 把问题分为 Critical、High、Medium、Low，并给出修复引用和交付建议。
- 包含快速扫描、详细审查和结构化报告格式，既记录问题，也记录值得保留的设计。

### 使用场景

- AI 页面交付前需要检查
- 页面感觉不统一，需要定位问题
- 修复前要确定优先级和影响范围

**输入：** 设计方向与参数、页面截图、组件与交互代码；行为结论需要真实操作证据。

**产出：** 带位置和严重程度的问题报告、修复建议、正面发现与交付判断。

**示例请求（研究构造）：** 审查补货后台的键盘焦点、错误反馈、手机布局和颜色层级；区分代码可确认的问题与尚未操作验证的行为。

**预期效果：** 预期把笼统的“设计不够好”转化为有位置、有优先级的改进任务。

**边界：** 正文明确为文档审查模式，没有自动检测器；AI 自检不等于实测通过。部分颜色和动效禁令与其他文件冲突，且引用了本库未提供的 design-refine.md 等资源。

原文：[依据 1](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/design-audit.md#L7) · [依据 2](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/design-audit.md#L353) · [依据 3](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/design-audit.md#L335)

[本地原文](sources/skills/app-ui-ux-best-practices/references/design-audit.md)
