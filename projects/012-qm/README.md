# 012 · QM：能力、原理、场景与个人价值

QM 是本次主研究项目，Pi 为执行基础的关联对照。QM 面向个人与团队，将 Agent 执行、资源归属、权限与后台工作组成共同的工作环境。

[本地网页](../../site/012-qm/index.html) · [Pi 对照研究](../010-pi/README.md) · [研究记录](RESEARCH.md)

- 上游：https://github.com/yc-software/qm
- 固定提交：`9143874bfa00ca13cf8a9df5f6bf8b033c89e11e`；研究日期：2026-09-29。
- 许可：MIT；[许可副本](sources/LICENSE)。
- 验证范围：文档与关键源码核查，静态页面验证。未部署 QM、调用真实模型或连接私人服务。

## 摘要：能力、效果、场景与采用时机

**能力是什么：** QM 是以 Agent 执行为核心的个人与团队工作平台。它调用 Codex、Pi 等执行引擎处理资料、文件和代码，并提供空间、共享记忆、Skills、权限、后台调度与成果发布。

**可实现的效果：** 仓库变化报告、代码差异和测试记录、邮件草稿、项目进展清单、共享文件与内部看板。产物是可构建方案；真实效果依赖工具、数据、授权与验收，本次未实测。

**使用场景：** 持续开源研究、代码维护、团队项目助理、文档与邮件整理，以及持续更新的内部工具。

**对我的意义：** 现在借鉴 Agent 产品架构；以后把项目研究、方法复用、知识积累、网页更新和长期跟踪组织成可重复、可共享的流程。

**什么时候用：** 个人临时研究和网页制作若已能由现有 Codex 完成，不必急着迁移。当需要长期跟踪多个项目、定期交付、主动提醒，或多人共享且凭据分别管理时，再试点 QM。

**与 Codex 的关系：** 执行条件相当时，原则上可以承接 Codex 能完成的同类任务；对应文件、工具、插件、权限和环境仍需接入，不自动继承桌面应用中的任务或配置，也不保证效果完全一致。[依据：QM Codex 适配器](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/src/harness/codex-harness.ts)。

**第一个试点：** 为一个公开仓库生成每周变化报告，使用固定模板与来源链接，验收质量、权限边界、重启恢复和实际费用后，再决定是否扩大使用。

![QM 能力、效果、场景、价值与采用时机](assets/qm-overview.png)

摘要图直接沿用本轮确认的 ImageGen 图片，未重新生成。[完整提示词](assets/qm-overview-prompt.txt)。

## 1. 能力是什么，可以实现什么功能

| 能力 | 类别 | 作用 | 预期成果 | 条件与边界 | 依据 |
| --- | --- | --- | --- | --- | --- |
| 个人助手与共享项目 | 协作 | 个人空间保存自己的工作上下文；频道、群组和项目提供共同处理任务的空间。 | 项目问答、讨论记录与后续行动 | 需要身份和成员配置；个人资料不会因为同属一个组织就全部共享。 | [来源](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/README.md) |
| 跨服务查资料、处理信息 | 执行 | 让 Agent 使用已接入的工具查询笔记、邮件、文档、数据库和网页，再组织结果。 | 带来源的研究材料、归纳报告或回复草稿 | 各服务需连接器、凭据和授权；接入不等于已经拥有全部数据。 | [来源](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/src/core/orchestrator.ts) |
| 在独立环境中操作文件与代码 | 执行 | 通过命令执行等工具，在当前空间的运行环境中编辑文件、安装工具、跑测试。 | 代码改动、测试记录、处理后的文件 | 环境生命周期由提供方决定；删除运行环境前需另行保存成果。 | [来源](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/docs/sandbox-resources.md) |
| 保留可复用的工作记忆 | 积累 | 以空间为边界读写笔记式记忆，也可按空间路由到外部记忆服务。 | 项目背景、偏好和可继续使用的任务知识 | 捕获策略可关闭、显式或自动；这是存储与检索，不是训练模型权重。 | [来源](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/docs/memory-providers.md) |
| 沉淀、共享与导入 Skills | 积累 | 将工作方法变成技能，经授权共享；管理员可从固定版本的 Git 技能包导入组织技能。 | 团队统一的研究、写作或处理流程 | 当前技能包导入有适用范围和审核条件；更新需提升版本再导入。 | [来源](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/docs/skill-registry.md) |
| 持续运行后台任务 | 自动化 | 通过定时任务、监看和入站 Webhook 触发工作，人在离线时也能继续推进。 | 定期摘要、变化提醒与跟进记录 | 服务、调度和所需授权要持续可用；触发不保证业务结果正确。 | [来源](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/src/index.ts) |
| 制作并发布内部应用 | 交付 | Agent 可构建小应用，并按受众发布；已发布文件可与运行环境分开保存。 | 内部看板、小工具、可访问的成果文件 | 需要部署、存储和发布配置；应用代码与访问范围仍须验收。 | [来源](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/docs/files-publication.md) |
| 组织多个 Agent 分工 | 自动化 | Swarm 以主会话和工作会话分工，通过持久记录、消息和队列协调执行。 | 多个子任务结果与汇总成果 | 需匹配的 Postgres 会话与运行存储、环境资源配置；工作 Agent 初始电脑为空，不自动复制主任务文件。 | [来源](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/docs/swarms.md) |
| 切换执行引擎与模型 | 执行 | 由统一核心将任务分派到 Pi、OpenCode、Codex、Claude Code 等适配器。 | 在同一工作环境中选择可用的执行组合 | 受管理员配置、模型兼容性与凭据约束；不同引擎表现并不完全相同。 | [来源](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/src/harness/harness-router.ts) |
| 集中管理权限与操作记录 | 协作 | 按身份与空间限制资源访问，设置审批和共享策略，并记录重要操作。 | 可追溯的访问与执行记录 | 上游明确为早期实验软件；隔离目标、审批和审计不代表绝对安全。 | [来源](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/SECURITY.md) |

以上场景产物为能力推导，不是本次实测结果。应用构建与发布还依据[根说明](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/README.md)，已发布文件的独立持久化依据[文件发布文档](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/docs/files-publication.md)。

## 2. 底层原理

### 资源先归属于空间

- **个人空间**：记忆：个人研究偏好与笔记；文件：个人收集的材料与草稿；凭据：个人获准使用的服务；任务：属于个人空间的跟踪计划。默认 Isolated：资源留在所属空间，跨空间共享需要明确授权。
- **共享项目**：记忆：项目背景、共识与约定；文件：项目材料与共享成果；凭据：该项目可使用的服务视图；任务：项目的更新、监看与跟进。空间有共同上下文，但不自动取得所有成员的个人资料。切换空间也不是复制整个电脑。
- **组织配置**：规则：组织级配置和安全基线；技能：经管理员推广的共享方法；访问：身份、授权和共享策略；记录：关键操作的审计与治理。组织配置影响较小空间；管理员本身具有特殊读取权限。此处是概念示意，不是真实权限管理器。

默认共享策略为 Isolated。Open 是显式选择的共享权衡：在符合身份、参与者及策略条件的现场对话中，可纳入获准个人资源，不等于组织成员自动共享所有数据。管理员具有特殊读取权限。依据：[安全说明](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/SECURITY.md)。

### 一次任务的过程

1. **接收任务**（Web / Slack / 后台触发）：用户在网页或 Slack 提问，也可由定时任务或外部事件发起。入口将任务交给共同的核心。 例：每周整理项目相关仓库的变化。
2. **确定工作边界**（身份 · 空间 · 受众）：确认谁发起任务、任务属于哪个空间、哪些资料可读、结果可交给谁。 例：项目 A 的任务只使用其获准资源。
3. **准备上下文**（历史 · 记忆 · 技能 · 工具）：按权限筛选历史和资源，组织当前任务的提示、技能与工具能力。 例：加入项目目标、研究模板与上周笔记。
4. **选择引擎执行**（Harness + 模型 + 运行环境）：路由到获准的引擎和模型。模型提出操作，经策略检查后调用工具；反馈再进入下一轮。 例：Pi 调用模型，工具读取仓库、运行检查、生成报告。
5. **保存并交付**（会话 · 成果 · 记忆 · 后续任务）：记录过程与状态，保存或发布成果，向授权受众交付；需要时安排后续工作。 例：项目里出现本周摘要，下次定时任务继续跟踪。

模型负责判断动作，工具执行真实操作，QM 负责身份、空间、资源编排、状态与交付；工具输出可回到模型形成循环。来源：[编排核心](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/src/core/orchestrator.ts)、[引擎路由](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/src/harness/harness-router.ts)。

记忆是可持久保存与按空间读取的知识，不是训练模型。未配置 Postgres 会话存储时会话只在进程内存中，重启即丢失。运行环境生命周期与已发布文件生命周期不同。Swarm 工作者拥有自己的会话与空白电脑，不自动复制主任务文件或同步磁盘。

## 3. 包含哪些模块

按源码职责归为八组，不是八个独立软件包：

| 模块组 | 职责位置 | 作用 | 阅读入口 |
| --- | --- | --- | --- |
| 交互入口 | Web、Slack、HTTP API | 接收问题、展示会话、接收外部触发；不同入口连接共同核心。 | [src/index.ts](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/src/index.ts) |
| 身份与空间 | identity / policy / credentials | 解析身份、空间、授权、凭据和结果受众；决定可使用哪些资源。 | [src/core/orchestrator.ts](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/src/core/orchestrator.ts) |
| 会话编排 | core / sessions / runs | 组织上下文、状态、审批和执行结果，使一次请求可追踪、可继续。 | [src/core/orchestrator.ts](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/src/core/orchestrator.ts) |
| 执行适配层 | harness / model | 选择模型和执行引擎；Pi 是一个适配后端，同时还有其他引擎。 | [src/harness/harness-router.ts](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/src/harness/harness-router.ts) |
| 工具与运行环境 | tools / sandbox / processes | 在获准环境中执行操作，管理运行环境资源及后台进程。 | [docs/sandbox-resources.md](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/docs/sandbox-resources.md) |
| 记忆与成果存储 | memory / persistence / files | 保留知识、会话与发布文件；持久性取决于具体存储与部署配置。 | [docs/memory-providers.md](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/docs/memory-providers.md) |
| 自动化与协作 | cron / triggers / swarms | 安排后台工作，处理事件，分派多个 Agent 并协调其状态。 | [docs/swarms.md](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/docs/swarms.md) |
| 技能、发布与治理 | skills / apps / admin | 分发工作方法、发布成果应用、维护组织配置与操作规则。 | [docs/skill-registry.md](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/docs/skill-registry.md) |

基础实现使用 TypeScript / Node / Fastify；Web 采用 Vite / Lit，Slack 接入采用 Bolt。Postgres 保存持久状态；运行环境、会话、记忆和引擎通过接口接入，不应假定每个后端效果一致。

## 4. 使用场景

### 1. 开源项目持续研究

- 输入：持续关注 QM、Pi 等项目，保留版本变化和自己的判断。
- 过程：接入允许访问的仓库资料 → 在研究空间保存模板与历史结论 → 定时检查变化并整理差异 → 将报告发布给自己或项目成员。
- 预期成果：每周变化摘要 + 可追溯的研究材料
- 配套条件：来源核对规则、仓库访问、调度配置和研究质量验收。
- 对你的意义：把现在的一次性研究，发展成持续更新的知识工作流。

### 2. 团队项目助理

- 输入：在项目频道追踪进度，回答背景问题并跟进待办。
- 过程：建立成员和项目空间 → 从获准消息与文档提取信息 → 形成带出处的项目摘要 → 按设定触发跟进与提醒。
- 预期成果：共享的项目背景 + 进展与行动清单
- 配套条件：接入 Slack 或 Web、成员授权、通知范围和人工确认规则。
- 对你的意义：协作上下文保留在项目里，减少每次重新解释背景。

### 3. 代码与测试协作

- 输入：对已有代码库处理小改动、运行测试，跟踪后续结果。
- 过程：准备代码与执行环境 → 将任务交给可用引擎 → 执行修改和验证 → 整理差异并进入评审流程。
- 预期成果：代码差异 + 测试记录 + 待评审的改动
- 配套条件：仓库凭据、测试依赖、操作审批；PR 与部署需相应权限和流程。
- 对你的意义：复用不同编程引擎，同时把任务放进团队资源与权限体系。

### 4. 邮件与资料整理

- 输入：定期分类资料，依据历史风格生成回复草稿。
- 过程：连接获准的邮箱或文档源 → 检索相关背景和规则 → 分类、归纳并起草内容 → 交付草稿或按授权执行动作。
- 预期成果：分类结果 + 待确认的回复草稿
- 配套条件：服务连接器、凭据、分类规则和发送授权；不会开箱获得私人邮箱。
- 对你的意义：减少反复检索和初稿整理；最终发送范围仍需明确。

### 5. 内部工具与看板

- 输入：把已有研究或业务信息做成共享小工具，并保持更新。
- 过程：明确数据、功能和受众 → 在运行环境里生成应用 → 测试并配置发布 → 后台任务更新资料。
- 预期成果：可访问的小应用 + 更新流程
- 配套条件：应用托管、数据访问、受众控制和代码验收；本研究页不运行这些服务。
- 对你的意义：将研究结果从文档推进到团队可直接使用的成果。

## 5. 关联 Pi

QM 工作环境 → 选择 Pi 等执行引擎 → 调用模型与工具。QM 的 Pi 适配器实际导入 `@earendil-works/pi-coding-agent` 与 `@earendil-works/pi-ai`，并整合自己的会话、工具、权限与运行状态；QM 还可以路由到其他引擎。

| 比较维度 | QM：本次主项目 | Pi：关联对照 |
| --- | --- | --- |
| 主要解决什么 | 让个人和团队围绕同一个 Agent 系统工作 | 组织模型、工具与反馈，完成一个 Agent 任务 |
| 直接使用形态 | Web / Slack 工作环境及管理界面 | 终端助手；也可通过 SDK / RPC 嵌入产品 |
| 任务执行 | 路由到多种引擎并整合权限、上下文与环境 | 自身提供模型接入、会话和工具循环 |
| 资源归属 | 空间拥有记忆、文件、凭据视图与任务 | 主要围绕会话、工作目录和宿主提供的资源 |
| Skills 与工具 | 共享、授权、组织推广与固定版本技能包 | 支持 Skills、扩展、自定义工具；当前版本支持 MCP |
| 自动化和多人协作 | 后台触发、项目空间、成员和 Swarm 已纳入系统 | 可扩展或由宿主组合；本体不等于完整组织平台 |
| 运行与维护成本 | 需要维护身份、服务、数据库、运行环境等 | 可直接在本机使用；集成产品时仍须自建外围设施 |
| 对我们的研究价值 | 学习如何把 Agent 组织成持续工作的产品 | 学习和复用任务执行的基础机制 |

Pi 可通过扩展与宿主补充外围功能，不能把对照写成永久能力上限。Pi 研究固定版本为 `4df1574339bfbd1a9750ff485bb618da397ba135`，不默认等于 QM 的依赖版本。依据：[QM Pi 适配器](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/src/harness/pi-harness.ts)、[独立 Pi 研究](../010-pi/README.md)。

## 6. 对我的意义

- **现在：辨别产品层次。** 用 QM 理解执行引擎之上如何组织资源、权限、协作与持续工作。
- **下一步：持续开源研究。** 当很多仓库需要定时跟踪、共享结论、按模板产出时，空间、记忆、技能与调度的组合更有价值。
- **以后：团队和自建产品。** 有多人、不同服务凭据、共享应用时，评估完整部署；也可只借鉴其架构。

这是针对当前研究与展示工作流的建议，不是性能测试结论。个人临时研究与生成网页若已由现有工具完成，迁移收益可能有限。出现持续运行、成员共享、凭据分开的明确需求后，再以一个低风险仓库跟踪场景验证。验收输出可靠性、共享边界、重启恢复和实际费用。

## 7. 采用条件与研究边界

需准备服务托管、模型访问、运行环境、登录配置与外部服务授权。官方组织部署流程支持 Fly.io / AWS。后台运行与持久性依赖持续可用的基础设施。Swarm 需要匹配的 Postgres 会话和运行存储，以及运行环境资源配置。

上游声明是早期实验软件，主要面向单个组织的内部认证用户，不是经加固的公共多租户边界。审批、审计和命令策略不能保证绝对安全；它们也不证明生成结果正确。实际运行效果、性能、费用与隔离效果均未在本次研究中实测。

## 8. 来源

- [项目定位与功能](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/README.md)
- [会话编排核心](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/src/core/orchestrator.ts)
- [执行引擎路由](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/src/harness/harness-router.ts)
- [Pi 适配器](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/src/harness/pi-harness.ts)
- [服务启动与组装](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/src/index.ts)
- [记忆提供方](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/docs/memory-providers.md)
- [技能仓库](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/docs/skill-registry.md)
- [运行环境资源](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/docs/sandbox-resources.md)
- [多 Agent 协作](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/docs/swarms.md)
- [持久文件发布](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/docs/files-publication.md)
- [组织部署](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/docs/getting-started.md)
- [部署细则](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/cli/templates/deployment/deployment.md)
- [安全模型与限制](https://github.com/yc-software/qm/blob/9143874bfa00ca13cf8a9df5f6bf8b033c89e11e/SECURITY.md)

16 份来源文件与 SHA-256 见 [清单](sources/manifest.json)。网页的空间与流程示意是本研究原创解释，不是上游截图。

[返回总索引](../../README.md)
