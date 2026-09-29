# Agent Skills · 整体研究

研究日期：2026-09-29。固定版本：`2686b620fc1fed2e8f60c704839c766b8594c6b6`。证据见 [来源记录](SOURCES.md)。

## 1. 研究问题与结论

| 问题 | 结论 |
| --- | --- |
| 整体目标是什么？ | 让 AI 编程助手按照可重复的工程流程开展研发，减少需求猜测、跳过验证和难以维护的变更。 |
| 整体场景是什么？ | 新功能开发、老系统维护、排错、审查、质量治理和上线；主要面向软件研发。 |
| 包含哪些技能？ | 25 项，已与固定提交的目录逐项对应，详见 [技能详解](SKILLS.md)。 |
| 技能怎样生效？ | 宿主发现描述、选择并加载正文，模型依照流程调用已有工具，再依据证据推进。 |
| 对你有何意义？ | 当前可借鉴研究流程管理；未来做演示和软件开发时，可直接利用工程技能。详见 [个人采用建议](USER_VALUE.md)。 |
| 能否保证质量提升？ | 不能据文档得出保证；需要在实际任务、指定模型与宿主环境中对照验证。 |

“已完成”只表示这些研究问题已有文档和结构层面的结论，不表示 25 项技能已逐项实测。

2026-09-29 补充：根据后续要求，新增 [具体能力与交付物](CAPABILITIES.md) 和 [交互网页](web/index.html)，重点呈现每项技能的实际工作、产出、问题示例和分工。网页交互已在本地浏览器核验，详见 [网页验证记录](web/VALIDATION.md)；这不改变上游技能尚未实测的边界。

## 2. 目标、交付物和适用边界

上游把资深工程师的做事方法拆成工作流，强调先澄清目标、把任务做小、提供验证证据和保留可回退的变更。预期交付物既包括代码，也包括规格、任务清单、审查报告和发布判断。[来源：上游说明][readme]

从使用者角度，其价值是减少每次都要重复提醒 AI 的流程要求。例如，一次提出“修复这个问题”，所选技能会进一步要求复现问题、定位原因、加入回归验证并解释结果。这些要求仍由宿主和模型执行。

| 项目情境 | 可采用的组合 | 需要的输入与预期产出 |
| --- | --- | --- |
| 新产品或新功能 | 需求访谈、规格、计划、增量实现 | 输入目标与约束；输出确认后的需求、任务和可验证功能。 |
| 维护老项目 | 上下文、排错、测试、审查 | 输入项目约定与现象；先理解既有行为，再形成局部修复。 |
| 前端页面与演示 | UI 工程、浏览器验证、性能优化 | 输入设计与运行环境；输出页面及交互、响应式与性能证据。 |
| 团队质量管理 | 约束驱动、审查、CI/CD | 输入质量标准；输出规则文档及可运行的检查。 |
| 生产发布 | 安全、可观测性、发布 | 输入待发布变更；输出上线判断、监测指标与回滚措施。 |

上游建议新项目可从完整流程开始；老项目优先采用理解、审查和局部验证，再扩大到新功能实施。[来源：采用指南][adoption]

适用边界：纯问答、资料翻译或一次性小改动通常不需要整套研发流程。研究报告、日程管理、财务表格等也不是该库现成的专用领域；迁移其中的方法需要明确改写输入、步骤和验收标准。这是本次分析的适用性判断。

## 3. 25 项技能如何组织

| 阶段 | 数量 | 技能范围 |
| --- | ---: | --- |
| 发现与路由 | 1 | using-agent-skills |
| 明确目标与质量 | 4 | interview-me、idea-refine、spec-driven-development、constraint-driven-development |
| 制订计划 | 1 | planning-and-task-breakdown |
| 实现与工程方法 | 7 | incremental-implementation、test-driven-development、context-engineering、source-driven-development、doubt-driven-development、frontend-ui-engineering、api-and-interface-design |
| 验证与排错 | 2 | browser-testing-with-devtools、debugging-and-error-recovery |
| 审查与改进 | 4 | code-review-and-quality、code-simplification、security-and-hardening、performance-optimization |
| 交付与维护 | 6 | git-workflow-and-versioning、ci-cd-and-automation、deprecation-and-migration、documentation-and-adrs、observability-and-instrumentation、shipping-and-launch |

分类用于理解主要用途，并不表示安全、测试或监控只能在某一个阶段发生。每项作用、示例与限制见 [SKILLS.md](SKILLS.md)。

## 4. 底层机制

```mermaid
flowchart LR
    A[用户任务] --> B[宿主路由或显式选择]
    B --> C[读取 SKILL.md]
    C --> D[按需读取资料与脚本]
    D --> E[模型调用现有工具]
    E --> F[核验输出与完成条件]
    F --> G[完成或报告阻塞]
    F --> E
```

该图是本次对文档机制的概括，不代表仓库中存在一个实现上述状态机的统一运行引擎。

- **描述层**：名称与触发描述帮助宿主或模型发现技能。自动触发依赖宿主实现和模型判断，不能保证每次选中。
- **流程层**：正文规定步骤、需要避免的行为、反驳跳过步骤的常见理由，以及完成条件。
- **资料层**：详细参考材料和辅助脚本按需使用，避免一次把所有技能塞进上下文。
- **执行层**：文件、终端、浏览器、Git 或外部服务由宿主提供；技能本身不授予权限，也不会训练或更新模型权重。
- **验证层**：测试、构建和运行数据提供证据。真正阻止不合格变更合并，需要在项目中落实检查和 CI 规则。[来源：技能结构][anatomy]、[约束技能][constraints]

普通提示词也能描述流程；这个库的工程价值在于把流程做成可发现、可复用、可版本管理的单元，并配备适配入口和评测设计。

### 技能、角色、命令的区别

| 层 | 回答的问题 | 例子 |
| --- | --- | --- |
| Skill | 这类工作按什么步骤做？ | code-review-and-quality |
| 角色 | 从哪个专业视角检查？ | code-reviewer |
| 命令 | 用户从哪里进入流程？ | /review |

4 个角色分别负责代码质量、测试、安全和网页性能。9 个命令是 `/spec`、`/plan`、`/build`、`/test`、`/constraints`、`/review`、`/webperf`、`/code-simplify`、`/ship`。它们与 25 个技能不是一一对应的关系；入口能否出现取决于宿主适配。[来源：角色文档][agents]

`/build auto` 定义一次批准计划后按任务循环实施、测试和提交的工作方式；它仍依赖清楚的规格、任务文件、可用工具和停止条件。`/ship` 定义多个视角的审查汇总。二者都不能理解为安装后即可无人值守开发和自动部署。[来源：构建入口][build]、[发布入口][ship]

## 5. 能力是否可信：证据与限制

本次核对了上游结构及技能的触发条件、流程和验收部分；这可以证明“作者规定了什么流程”，不能证明模型每次会执行，或执行后必然正确。

上游评测包含结构检查、词汇层面的路由近似和行为评测；还记录了真实宿主中有无插件的对照评测方式。触发测试关注是否选对技能，行为测试关注是否满足预期，二者都不能替代真实项目的产品验收。本次没有执行这些评测，也没有复现其数字。[来源：评测说明][evals]

关键限制：

1. 指令依从性有波动；更长或更严格的流程不必然带来更好结果。
2. 外部能力有前提。浏览器技能明确依赖 Chrome DevTools MCP；性能和可访问性检查通常需要可运行页面。
3. 规则必须适配项目。覆盖率、提交大小和审批节点应结合实际要求，不宜机械照搬。
4. 多个技能可能重复要求规划、审批、测试或审查，增加时间和上下文开销。
5. 自动生成的测试可能遗漏真正业务约束；关键验收应保留独立依据。
6. 单技能安装可能漏掉根目录共享参考材料，这是上游记录的分发限制。[来源：共享引用说明][anatomy]

## 6. 可扩展方向（本次建议）

| 方向 | 具体可做的工作 | 验证价值的方法 |
| --- | --- | --- |
| 个人开源研究流程 | 固定研究问题、版本来源、证据分级、适用性判断和总索引更新 | 比较遗漏项、来源可追溯性和人工修订量。 |
| 项目专属技能 | 写入真实目录、技术栈、验证命令和边界 | 看产出是否遵守项目约定，是否减少重复纠正。 |
| 工具与数据连接 | 对接工单、日志、监控和依赖扫描 | 验证结论是否引用实际数据，而非猜测。 |
| 可执行质量标准 | 将完成条件落到脚本、CI 与检查报告 | 检查失败能否真正阻断交付，是否容易被绕过。 |
| 更好的技能评测 | 以相近任务比较有无技能的质量、耗时和成本 | 固定版本、模型、输入与环境，多次重复记录。 |
| 自包含分发 | 明确参考文件、工具与版本依赖 | 在干净环境安装后验证链接与流程是否完整。 |

## 7. 验证环境与过程

| 项目 | 记录 |
| --- | --- |
| 环境 | Windows，PowerShell 7.6.5 |
| 来源方式 | GitHub 网页、API 目录树、固定提交的原始文档 |
| 目录核验 | 25 个 SKILL.md、9 个命令、4 个角色 |
| 查阅范围 | 共下载 44 个文本文件至临时目录；核查技能元数据、用途、流程结构与验收部分，重点阅读组合与评测文档 |
| 版本锁定 | 使用固定提交读取文件，并记录各文件 Git blob SHA |
| 执行范围 | 只进行研究资料获取和本地文档整理；未运行上游技能或辅助脚本 |
| 本地产物核验 | 核对技能清单与上游目录一一对应、文档相对链接有效、索引已收录 |

工作区已有 `001-awesome-agent-skills` 模板目录但尚未登记。依照编号不可复用的约定，本次使用 002，并把 001 作为待研究目录登记；未修改其内容。

[readme]: https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/README.md
[adoption]: https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/docs/adoption-guide.md
[anatomy]: https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/docs/skill-anatomy.md
[constraints]: https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/constraint-driven-development/SKILL.md
[agents]: https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/docs/agents.md
[build]: https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/.claude/commands/build.md
[ship]: https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/.claude/commands/ship.md
[evals]: https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/evals/README.md
