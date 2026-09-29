# 技能能力矩阵

这是研究分类，不是官方分类或全量清单。代表条目依据[固定版本目录](https://github.com/VoltAgent/awesome-agent-skills/blob/ed106e8edc7c6d04fe3aedcbfaed1b43247f56a7/README.md)选取；输入、限制与验收是本项目的选型建议。证据等级：A＝读过 SKILL.md，B＝读过作者仓库说明，C＝仅核对目录条目。全部未运行实测。

| 能力方向 | 代表技能／集合 | 证据 | 建议输入与交付 | 依赖或限制 | 建议验收 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 网页测试 | anthropics/webapp-testing | A | 页面、路径 → 测试及证据 | 浏览器、应用、账号 | 关键断言与复现步骤 |
| 表格处理 | anthropics/xlsx | A | 明细、口径 → 可编辑报表 | 文件库、重算环境 | 对账与公式逻辑 |
| 数据库设计与性能 | supabase/postgres-best-practices（目录名） | A | SQL、计划 → 修改建议 | 数据库版本与真实负载 | 正确性、计划、耗时 |
| 前端性能 | Vercel Agent Skills | B | 代码、指标 → 优化方案 | 构建环境 | 同条件指标与回归 |
| 界面质量 | Vercel web-design-guidelines | B | 页面代码 → 发现与修复 | 代码检查不能覆盖全部体验 | 键盘路径与状态检查 |
| 文档交付 | anthropics/docx、pptx、pdf | C | 资料、模板 → 文件 | 格式支持待核实 | 完整性、版式、事实 |
| 支付集成 | stripe/stripe-best-practices | C | 集成需求 → 接入方案 | 测试账号、接口版本 | 事件与状态核对 |
| 基础设施测试 | hashicorp/terraform-test | C | 配置 → 测试方案 | 工具版本、隔离资源 | 计划、断言、资源费用 |
| 网页数据获取 | firecrawl/firecrawl-build | C | URL、字段 → 集成方案 | 服务访问、页面条件 | 来源与字段准确度 |
| 视频制作 | remotion-dev/remotion | C | 文案、素材 → 视频工程 | 渲染环境与素材 | 时长、音画、导出 |
| 工作流自动化 | czlonkowski/n8n-workflow-patterns | C | 触发器、字段 → 流程设计 | 实例、连接凭据 | 重试、去重、恢复 |

前五项补充来源：[网页测试](https://github.com/anthropics/skills/blob/main/skills/webapp-testing/SKILL.md)、[XLSX](https://github.com/anthropics/skills/blob/main/skills/xlsx/SKILL.md)、[Supabase](https://github.com/supabase/agent-skills/blob/main/skills/supabase-postgres-best-practices/SKILL.md)、[Vercel](https://github.com/vercel-labs/agent-skills)。C 级条目只用于发现候选，不说明已经适配本地环境。

## 按工作方式选型

| 方式 | 提供的内容 | 适用问题 | 首要检查 |
| :--- | :--- | :--- | :--- |
| 知识指导 | 规则、反例、资料 | 不知道专业约束 | 资料版本是否匹配 |
| 流程执行 | 步骤、分支、失败处理 | 经常遗漏必要动作 | 结束条件是否明确 |
| 文件交付 | 模板、脚本、检查步骤 | 需要可编辑产物 | 文件可用且内容正确 |
| 工具操作 | 参数与调用约定 | 需要连接外部系统 | 工具和权限是否满足 |

一个技能可以兼具多种方式，这不是互斥的技术标准。

## 建议判断顺序

1. 明确目标产物及失败条件，例如报表可编辑且金额与源文件一致。
2. 核对实际入口、适用任务、版本与许可证。
3. 盘点工具、账号、运行时和数据；缺失项计入接入成本。
4. 用相同输入比较启用前后结果，包含人工返工时间。
5. 确认重复实验有收益后，再进入团队默认技能集。

本项目不以收录位置、技能数量或作者名气作为质量分数。

[返回项目入口](README.md)
