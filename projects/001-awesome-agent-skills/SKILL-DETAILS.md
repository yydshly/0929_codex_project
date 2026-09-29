# 具体技能能力说明

本版对 40 项代表技能提供中文解读，并保留 1108 个上游目录条目供网页检索。目录条目可能是单个技能或技能集合，不等于独立技能总数。

能力解释依据技能文件或上游目录说明；示例与边界为本研究分析，全部未运行实测。

## Word 文档编辑与交付

**anthropics/docx** · 文档与办公 · 依据：技能文件

把资料整理成有结构的 Word 文档，也能修改既有文档的内容和版式。

- 创建标题、目录、页码、表格和页眉等文档结构
- 提取、重排或替换文字与图片
- 处理批注和修订，保留可审阅的改动

**典型产物：** .docx 文档或修订稿。

**场景示例：** 将项目资料整理为一份带目录和风险表的项目方案。

**能力边界：** 处理的是文档文件；不等同于直接操控 Word 桌面界面。

[来源](https://github.com/anthropics/skills/blob/main/skills/docx/SKILL.md)

## 电子表格分析与制作

**anthropics/xlsx** · 文档与办公 · 依据：技能文件

把原始明细转为可编辑、可计算的表格，而不只是输出一段分析文字。

- 清洗和重组表格数据，补齐计算列
- 编写公式、调整格式并制作图表
- 重算并排查公式错误，保留数据来源和假设

**典型产物：** .xlsx 报表、计算模型。

**场景示例：** 把多渠道订单整理成月度收入表，并核对退款与合计。

**能力边界：** 公式没有报错不代表业务口径正确；指标定义仍需明确。

[来源](https://github.com/anthropics/skills/blob/main/skills/xlsx/SKILL.md)

## 演示文稿创作与改版

**anthropics/pptx** · 文档与办公 · 依据：技能文件

创建、读取和修改幻灯片，支持基于现有模板组织内容。

- 提取幻灯片文字、备注等已有内容
- 编辑、组合或拆分演示文稿
- 创建可编辑图表和版式，并检查文件结构

**典型产物：** .pptx 演示文稿。

**场景示例：** 将长篇季度报告改成管理层汇报，保留可编辑图表。

**能力边界：** 内容与版式检查仍需结合渲染结果；不自动保证引用数据正确。

[来源](https://github.com/anthropics/skills/blob/main/skills/pptx/SKILL.md)

## PDF 提取与页面处理

**anthropics/pdf** · 文档与办公 · 依据：技能文件

从 PDF 中获取信息，或对页面、表单和文件结构进行加工。

- 提取文字、表格和图片，识别扫描件文字
- 合并、拆分、旋转页面及添加水印
- 生成 PDF、填表以及处理文档加密

**典型产物：** .pdf 文件、提取结果。

**场景示例：** 从一批产品说明书提取参数，并合并指定页面。

**能力边界：** 扫描质量与版面复杂度影响提取结果；表格需抽样核对。

[来源](https://github.com/anthropics/skills/blob/main/skills/pdf/SKILL.md)

## 方案与技术文档共创

**anthropics/doc-coauthoring** · 文档与办公 · 依据：技能文件

帮助把零散背景整理成读者能独立理解的提案、规范或决策文档。

- 收集背景、受众和文档目标
- 逐节完善结构与论证
- 用缺少背景的读者视角查找信息缺口

**典型产物：** 提案、PRD、技术规范、决策文档。

**场景示例：** 把团队讨论记录整理成技术选型说明。

**能力边界：** 主要解决内容组织与表达；不等同于专门的 Word 排版能力。

[来源](https://github.com/anthropics/skills/blob/main/skills/doc-coauthoring/SKILL.md)

## 前端视觉设计

**anthropics/frontend-design** · 设计与前端 · 依据：技能文件

为新界面或改版界面确定视觉方向，并指导版式与样式实现。

- 围绕产品和受众选择视觉方向
- 协调字体、色彩、布局和信息层级
- 检查设计是否过度依赖通用模板

**典型产物：** 界面设计方案、前端样式与页面。

**场景示例：** 为开发工具设计一套更适合密集信息阅读的界面。

**能力边界：** 主要提供设计判断；完整业务逻辑和后端需要其他实现。

[来源](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md)

## 静态视觉作品

**anthropics/canvas-design** · 设计与前端 · 依据：技能文件

将主题表达为海报或其他以视觉为主的静态作品。

- 提炼画面的视觉概念
- 组织图形、色彩、构图和少量文字
- 制作 PNG 或 PDF 视觉成果

**典型产物：** PNG、PDF 设计作品。

**场景示例：** 围绕一次产品发布制作一张视觉海报。

**能力边界：** 偏向静态图形表达，不是交互网页或可编辑演示文稿。

[来源](https://github.com/anthropics/skills/blob/main/skills/canvas-design/SKILL.md)

## 程序化生成艺术

**anthropics/algorithmic-art** · 设计与前端 · 依据：目录说明

用可控制的算法生成图形，适合需要系列变化的视觉作品。

- 用 p5.js 表达生成式图形
- 利用种子控制随机结果
- 通过参数变化探索不同视觉形态

**典型产物：** 生成式图形与绘制代码。

**场景示例：** 围绕同一组规则生成不同配色与密度的图形。

**能力边界：** 属于程序绘图方向，不等同于照片生成或图像编辑。

[来源](https://officialskills.sh/anthropics/skills/algorithmic-art)

## 统一作品主题

**anthropics/theme-factory** · 设计与前端 · 依据：目录说明

将字体与颜色等视觉选择组织成可重复应用的主题。

- 给已有作品应用统一风格
- 保持多个产物的视觉一致性
- 根据需要建立新主题

**典型产物：** 主题化后的页面或文档。

**场景示例：** 让一组报告与演示材料使用一致的颜色和字体。

**能力边界：** 主题统一不等于内容结构或业务流程已改进。

[来源](https://officialskills.sh/anthropics/skills/theme-factory)

## 网页功能验证

**anthropics/webapp-testing** · 测试与安全 · 依据：技能文件

用浏览器实际访问本地应用，检查交互行为并保留问题证据。

- 编写 Playwright 脚本执行用户操作
- 检查渲染后的页面元素并截取画面
- 查看浏览器日志并管理测试所需服务

**典型产物：** 测试脚本、截图、问题记录。

**场景示例：** 检查注册表单的空值、错误邮箱和成功提交三条路径。

**能力边界：** 覆盖范围由测试路径决定；无法用一次通过代表整站无缺陷。

[来源](https://github.com/anthropics/skills/blob/main/skills/webapp-testing/SKILL.md)

## MCP 服务开发

**anthropics/mcp-builder** · 开发与集成 · 依据：技能文件

把外部服务整理为 Agent 可以调用的工具接口。

- 规划外部 API 对应的工具能力
- 实现工具输入、输出与错误处理
- 编写服务并验证工具调用

**典型产物：** MCP 服务代码。

**场景示例：** 将内部库存查询接口封装成可查询商品库存的工具。

**能力边界：** 是在构建工具服务；服务本身仍需数据源和访问权限。

[来源](https://github.com/anthropics/skills/blob/main/skills/mcp-builder/SKILL.md)

## 技能设计与改进

**anthropics/skill-creator** · 开发与集成 · 依据：技能文件

将可重复的任务方法整理成技能，并通过样例改进其表现。

- 创建或修改技能说明和配套资源
- 设计用于检查技能表现的样例
- 根据反馈调整内容及触发描述

**典型产物：** 技能包与评测材料。

**场景示例：** 将团队固定的发布检查流程整理为专用技能。

**能力边界：** 技能定义不能弥补缺失工具；质量需要在具体任务上验证。

[来源](https://github.com/anthropics/skills/blob/main/skills/skill-creator/SKILL.md)

## Postgres 设计与诊断

**supabase/postgres-best-practices** · 数据与数据库 · 依据：技能文件

为 SQL、表结构、连接和访问控制提供有优先级的检查规则。

- 分析查询、索引和连接管理问题
- 检查表结构、锁及数据访问方式
- 围绕 RLS 和安全规则给出修改建议

**典型产物：** SQL 或结构修改建议、诊断报告。

**场景示例：** 检查一个变慢的列表查询是否存在索引或访问模式问题。

**能力边界：** 优化幅度需实测；目录展示名与实际技能目录名不同。

[来源](https://github.com/supabase/agent-skills/blob/main/skills/supabase-postgres-best-practices/SKILL.md)

## 本地 SQL 数据分析

**clickhouse/chdb-sql** · 数据与数据库 · 依据：目录说明

借助嵌入 Python 的 ClickHouse SQL 引擎分析多种数据来源。

- 通过 SQL 查询文件数据
- 将数据库或云存储数据纳入查询
- 在进程内完成分析，无需单独启动数据库服务器

**典型产物：** SQL 查询、数据分析结果。

**场景示例：** 对本地日志文件分组统计事件数量。

**能力边界：** 实际格式、连接和查询能力取决于 chDB 及其环境。

[来源](https://officialskills.sh/clickhouse/skills/chdb-sql)

## ClickHouse 架构分析

**clickhouse/clickhouse-architecture-advisor** · 数据与数据库 · 依据：目录说明

根据实际负载把数据库最佳实践转成架构选择。

- 梳理数据规模与查询负载
- 将负载需求映射到架构选择
- 说明设计方案的取舍

**典型产物：** 架构建议与设计说明。

**场景示例：** 评估日志分析系统应如何组织 ClickHouse 方案。

**能力边界：** 架构建议不是已部署集群，也不是性能保证。

[来源](https://officialskills.sh/clickhouse/skills/clickhouse-architecture-advisor)

## Stripe 支付接入

**stripe/stripe-best-practices** · 开发与集成 · 依据：目录说明

指导支付能力的实现，使接入方案符合 Stripe 的推荐方式。

- 围绕支付集成给出实现指导
- 审查接入代码与使用方式
- 识别需要遵循的集成约定

**典型产物：** 支付接入方案与代码建议。

**场景示例：** 审查一个网站现有的 Stripe 接入实现。

**能力边界：** 此项依据目录描述，具体支持流程需查看原技能；不包含支付账户。

[来源](https://officialskills.sh/stripe/skills/stripe-best-practices)

## Stripe 版本升级

**stripe/upgrade-stripe** · 开发与集成 · 依据：目录说明

处理 Stripe SDK 与 API 版本迁移相关的开发工作。

- 定位需要升级的 SDK 或接口版本
- 辅助修改受版本差异影响的代码
- 整理升级过程中的兼容问题

**典型产物：** 版本迁移方案与代码修改。

**场景示例：** 将旧版 Stripe 接入迁移到目标版本。

**能力边界：** 具体差异由当前版本和目标版本决定，需要测试环境验证。

[来源](https://officialskills.sh/stripe/skills/upgrade-stripe)

## 身份认证搭建

**better-auth/create-auth** · 开发与集成 · 依据：目录说明

围绕 Better Auth 建立项目的认证配置与实现。

- 创建认证相关配置
- 把认证能力接入项目
- 按项目需求组织认证实现

**典型产物：** 认证配置与接入代码。

**场景示例：** 为一个新应用建立登录认证基础。

**能力边界：** 不意味着所有第三方登录方式都已配置；功能范围需核对原技能。

[来源](https://officialskills.sh/better-auth/skills/create-auth)

## 双因素认证

**better-auth/twoFactor** · 开发与集成 · 依据：目录说明

为 Better Auth 应用添加第二层身份验证相关能力。

- 围绕双因素认证进行集成
- 配置相关认证流程
- 处理该能力涉及的实现问题

**典型产物：** 双因素认证接入代码。

**场景示例：** 为管理后台的登录增加额外验证步骤。

**能力边界：** 实际验证方式与恢复流程取决于 Better Auth 配置。

[来源](https://officialskills.sh/better-auth/skills/twoFactor)

## Figma 设计转代码

**figma/figma-implement-design** · 设计与前端 · 依据：目录说明

以设计稿为依据实现应用界面，重点是视觉和结构的对应。

- 读取设计内容作为实现参考
- 将布局和组件转换为应用代码
- 对照设计检查实现一致性

**典型产物：** 页面与组件代码。

**场景示例：** 把设计稿中的账户设置页实现到现有应用。

**能力边界：** 目录中的高保真目标不是每次结果的保证，仍需实际对照。

[来源](https://officialskills.sh/figma/skills/figma-implement-design)

## 在 Figma 中生成页面

**figma/figma-generate-design** · 设计与前端 · 依据：目录说明

从代码或描述建立、更新 Figma 屏幕设计。

- 把页面描述转为设计布局
- 结合已有设计系统组件组装页面
- 根据代码或需求更新已有屏幕

**典型产物：** Figma 页面或屏幕。

**场景示例：** 将现有产品页面整理进 Figma 设计文件。

**能力边界：** 生成设计文件不等于业务页面已经开发上线。

[来源](https://officialskills.sh/figma/skills/figma-generate-design)

## Figma 组件库整理

**figma/figma-generate-library** · 设计与前端 · 依据：目录说明

把代码库中的设计系统沉淀为 Figma 设计资源。

- 从代码库整理设计系统
- 构建设计库内容
- 更新已有设计系统库

**典型产物：** Figma 设计系统库。

**场景示例：** 让设计团队和开发团队共享一致的基础组件。

**能力边界：** 组件范围及变量映射需核对原技能和现有项目。

[来源](https://officialskills.sh/figma/skills/figma-generate-library)

## Next.js 项目升级

**vercel-labs/next-upgrade** · 开发与集成 · 依据：目录说明

围绕 Next.js 版本迁移处理项目中的兼容性改动。

- 梳理现有项目版本
- 辅助升级到目标 Next.js 版本
- 调整受迁移影响的项目代码

**典型产物：** 升级后的项目与迁移记录。

**场景示例：** 将已有 Next.js 项目迁移到选定新版本。

**能力边界：** 需要项目自身构建和回归验证；不应按名称推断零改动升级。

[来源](https://officialskills.sh/vercel-labs/skills/next-upgrade)

## Next.js 缓存设计

**vercel-labs/next-cache-components** · 开发与集成 · 依据：目录说明

指导缓存策略与能正确处理缓存的组件实现。

- 梳理组件与数据的缓存关系
- 为页面选择缓存策略
- 调整与缓存相关的组件实现

**典型产物：** 缓存方案及组件代码。

**场景示例：** 检查内容页面哪些数据适合缓存、哪些应保持更新。

**能力边界：** 正确策略取决于数据新鲜度要求和框架版本。

[来源](https://officialskills.sh/vercel-labs/skills/next-cache-components)

## Terraform 配置测试

**hashicorp/terraform-test** · 云与运维 · 依据：目录说明

使用 Terraform 自带测试能力验证基础设施配置。

- 编写 .tftest.hcl 测试文件
- 围绕配置预期设计测试
- 检查基础设施配置的行为

**典型产物：** Terraform 测试配置。

**场景示例：** 为一个可复用基础设施模块补充测试。

**能力边界：** 部分测试可能创建实际资源，环境和费用需单独管理。

[来源](https://officialskills.sh/hashicorp/skills/terraform-test)

## Terraform 模块重构

**hashicorp/refactor-module** · 云与运维 · 依据：目录说明

把较大的基础设施配置拆分为可复用模块。

- 识别单体配置中的模块边界
- 整理可复用的模块结构
- 改写模块之间的引用关系

**典型产物：** 模块化 Terraform 配置。

**场景示例：** 将一份大型环境配置拆分成网络和应用模块。

**能力边界：** 结构重构不应被视为无需检查资源状态的操作。

[来源](https://officialskills.sh/hashicorp/skills/refactor-module)

## 网页内容提取接入

**firecrawl/firecrawl-build-scrape** · 搜索与自动化 · 依据：目录说明

在应用中接入 Firecrawl 的单页抓取能力。

- 为指定网页调用提取接口
- 将抓取结果接入应用代码
- 处理单页面的数据获取需求

**典型产物：** 抓取集成代码及页面内容。

**场景示例：** 在资料整理工具中加入单个网址的内容提取。

**能力边界：** 页面访问与提取完整度受服务和站点条件影响。

[来源](https://officialskills.sh/firecrawl/skills/firecrawl-build-scrape)

## 搜索与页面内容获取

**firecrawl/firecrawl-build-search** · 搜索与自动化 · 依据：目录说明

先按查询发现网页，再按需获取网页内容。

- 将搜索能力接入应用
- 以查询词发现候选页面
- 按需补充候选页面的正文

**典型产物：** 搜索集成与结果数据。

**场景示例：** 为研究助手查找某一主题的资料页面。

**能力边界：** 搜索结果相关性不等于事实可靠性，仍需核查来源。

[来源](https://officialskills.sh/firecrawl/skills/firecrawl-build-search)

## 线上错误定位与修复

**getsentry/sentry-fix-issues** · 云与运维 · 依据：目录说明

把 Sentry 的错误上下文带入代码排查。

- 查看异常堆栈
- 结合 breadcrumb 与 trace 理解发生过程
- 围绕具体 issue 查找并修复代码问题

**典型产物：** 问题分析与修复代码。

**场景示例：** 排查某个页面只在生产环境出现的异常。

**能力边界：** 需要 Sentry 数据与相关代码，修复有效性仍要验证。

[来源](https://officialskills.sh/getsentry/skills/sentry-fix-issues)

## 结合运行数据审查代码

**getsentry/sentry-code-review** · 云与运维 · 依据：目录说明

在审查代码变化时参考 Sentry issue 和 trace 上下文。

- 把代码变更与已知错误联系起来
- 参考运行链路判断影响
- 生成结合线上证据的审查意见

**典型产物：** 代码审查发现。

**场景示例：** 检查一次修改是否触及线上已有问题。

**能力边界：** 运行数据覆盖有限，不能替代全部测试和代码审查。

[来源](https://officialskills.sh/getsentry/skills/sentry-code-review)

## 面向安全的变更审查

**trailofbits/differential-review** · 测试与安全 · 依据：目录说明

围绕代码差异和 Git 历史寻找潜在安全影响。

- 检查变更涉及的逻辑
- 结合历史理解修改背景
- 从安全角度形成审查发现

**典型产物：** 安全审查报告。

**场景示例：** 评估认证相关代码的一次修改是否引入风险。

**能力边界：** 审查结论不是无漏洞证明。

[来源](https://officialskills.sh/trailofbits/skills/differential-review)

## Semgrep 检测规则编写

**trailofbits/semgrep-rule-creator** · 测试与安全 · 依据：目录说明

把需要识别的代码模式转为可运行的静态检测规则。

- 创建漏洞模式检测规则
- 调整规则匹配范围
- 迭代减少漏报与误报

**典型产物：** Semgrep 规则。

**场景示例：** 为团队反复出现的不安全写法建立检测规则。

**能力边界：** 规则能识别的范围取决于模式设计与样例覆盖。

[来源](https://officialskills.sh/trailofbits/skills/semgrep-rule-creator)

## 数据集创建与管理

**huggingface/hugging-face-datasets** · 模型与数据集 · 依据：目录说明

围绕 Hugging Face 数据集组织数据和查询操作。

- 创建与管理数据集
- 处理数据集配置
- 使用 SQL 查询数据

**典型产物：** 数据集与查询结果。

**场景示例：** 将一批标注数据整理成可使用的数据集。

**能力边界：** 数据质量、授权和标签准确性不会自动得到保证。

[来源](https://officialskills.sh/huggingface/skills/hugging-face-datasets)

## 模型训练任务

**huggingface/hugging-face-model-trainer** · 模型与数据集 · 依据：目录说明

围绕 TRL 支持的训练方式开展模型训练与转换。

- 支持 SFT、DPO、GRPO 等训练方向
- 组织模型训练任务
- 处理 GGUF 转换相关工作

**典型产物：** 训练任务配置、模型产物。

**场景示例：** 使用已有数据开展一个小规模模型微调实验。

**能力边界：** 依赖算力、数据与训练环境，效果需独立评估。

[来源](https://officialskills.sh/huggingface/skills/hugging-face-model-trainer)

## 模型效果评估

**huggingface/hugging-face-evaluation** · 模型与数据集 · 依据：目录说明

使用评估工具执行模型测试，并整理可比较的结果。

- 围绕 vLLM 或 lighteval 进行评估
- 组织模型评估任务
- 整理评估结果表

**典型产物：** 模型评估记录与表格。

**场景示例：** 比较两个候选模型在指定任务集上的结果。

**能力边界：** 基准成绩不能直接代表全部业务表现。

[来源](https://officialskills.sh/huggingface/skills/hugging-face-evaluation)

## 用代码制作视频

**remotion-dev/remotion** · 内容与增长 · 依据：目录说明

把视频内容组织为 React 驱动的程序化作品。

- 用 React 描述视频内容
- 把可重复的视频结构写成代码
- 围绕程序化视频进行制作

**典型产物：** 视频工程与渲染产物。

**场景示例：** 将固定样式的数据播报做成可批量生成的视频。

**能力边界：** 需要素材与渲染条件，不等于生成任意真实拍摄画面。

[来源](https://officialskills.sh/remotion-dev/skills/remotion)

## 社交内容排期与发布

**typefully/typefully** · 内容与增长 · 依据：目录说明

管理多个社交平台的内容创作和发布流程。

- 创建社交媒体内容
- 安排发布时间
- 向 X、LinkedIn 等支持平台发布

**典型产物：** 内容草稿、发布计划与记录。

**场景示例：** 将一份产品更新整理成多平台内容并安排排期。

**能力边界：** 发布依赖已连接账号和授权，不保证曝光或转化。

[来源](https://officialskills.sh/typefully/skills/typefully)

## 营销文案撰写

**coreyhaines31/copywriting** · 内容与增长 · 依据：目录说明

围绕首页、落地页或广告组织可用的营销表达。

- 撰写新的营销文案
- 重写已有页面的表达
- 针对不同营销页面调整内容

**典型产物：** 页面或广告文案。

**场景示例：** 把功能列表改写为用户更容易理解的落地页文案。

**能力边界：** 文案质量不等于已验证的转化提升。

[来源](https://github.com/coreyhaines31/marketingskills/tree/main/skills/copywriting)

## SEO 问题诊断

**coreyhaines31/seo-audit** · 内容与增长 · 依据：目录说明

检查网站的技术与页面 SEO 问题。

- 审查技术 SEO 项目
- 检查页面层面的 SEO 表现
- 整理问题及改进方向

**典型产物：** SEO 诊断与修改建议。

**场景示例：** 检查网站为什么难以被搜索引擎理解和收录。

**能力边界：** 诊断不能承诺排名或流量增长。

[来源](https://github.com/coreyhaines31/marketingskills/tree/main/skills/seo-audit)

## n8n 工作流设计

**czlonkowski/n8n-workflow-patterns** · 搜索与自动化 · 依据：目录说明

用常见模式组织触发器、接口、数据库与 AI 节点。

- 设计 webhook 触发的工作流
- 串联 HTTP 和数据库操作
- 组合 AI 处理环节

**典型产物：** n8n 工作流设计。

**场景示例：** 将表单输入清洗后写入系统，再生成摘要。

**能力边界：** 实际连接、凭据和异常处理需要在实例中验证。

[来源](https://github.com/czlonkowski/n8n-skills/tree/main/skills/n8n-workflow-patterns)

[返回研究入口](README.md)
