# 38 个技能详解

[返回子项目](README.md) · [场景组合](SCENARIOS.md) · [采用与兼容性](ADOPTION.md)

本清单逐项对应固定版本 `c55ee46073ed923f86ce59a5eb3b6d895095d1b7` 的 38 个 `SKILL.md`，不是只根据首页摘录。正式插件收录 25 个（工程 18、通用 7）；实验 9 个、专项 4 个不在该插件清单。deprecated 目录当前无技能。

“用户指定”指源码设置 `disable-model-invocation: true`；“可自动匹配”指未设置该限制，仍可由用户指定。实际触发方式以宿主和对应 `agents/openai.yaml` 为准。中文示例是本研究原创的试用素材，不表示这些技能已安装或已执行。所有“效果”均为工作流的预期收益，未做实测对照。

## 快速索引

| 编号 | 技能 | 分类 | 调用方式 | 主要产出 |
| --- | --- | --- | --- | --- |
| 01 | [ask-matt](#skill-ask-matt) | 正式工程技能 | 用户指定 | 推荐路线和选择理由；通常不直接交付代码。 |
| 02 | [setup-matt-pocock-skills](#skill-setup-matt-pocock-skills) | 正式工程技能 | 用户指定 | issue-tracker.md、domain.md，以及需要时的 triage-labels.md 和入口指引。 |
| 03 | [grill-with-docs](#skill-grill-with-docs) | 正式工程技能 | 用户指定 | 澄清后的方案、CONTEXT.md 术语表、符合条件的 ADR。 |
| 04 | [triage](#skill-triage) | 正式工程技能 | 用户指定 | 分类与状态标签、待补信息、代理任务简报，或带理由的关闭记录。 |
| 05 | [improve-codebase-architecture](#skill-improve-codebase-architecture) | 正式工程技能 | 用户指定 | 临时目录中的 HTML 架构报告、候选强度、前后示意和后续设计共识。 |
| 06 | [to-spec](#skill-to-spec) | 正式工程技能 | 用户指定 | 包含问题、方案、用户故事、决策、范围外事项的规格条目或文件。 |
| 07 | [to-tickets](#skill-to-tickets) | 正式工程技能 | 用户指定 | 一项一文件或一个 Issue，含交付行为、验收条件和 Blocked by。 |
| 08 | [implement](#skill-implement) | 正式工程技能 | 用户指定 | 实现代码、测试、检查结果和当前分支上的提交。 |
| 09 | [wayfinder](#skill-wayfinder) | 正式工程技能 | 用户指定 | 地图 Issue、决策子任务、结论链接、未明确区域和范围外事项。 |
| 10 | [prototype](#skill-prototype) | 正式工程技能 | 可自动匹配 | 可交互原型、可观察的状态、设计结论和原型分支指针。 |
| 11 | [diagnosing-bugs](#skill-diagnosing-bugs) | 正式工程技能 | 可自动匹配 | 复现命令、定位证据、最小修复、回归测试或无法建立合适测试接口的说明。 |
| 12 | [research](#skill-research) | 正式工程技能 | 可自动匹配 | 一个带来源链接的 Markdown 研究文件。 |
| 13 | [tdd](#skill-tdd) | 正式工程技能 | 可自动匹配 | 与业务行为对应的测试和实现，失败到通过的执行证据。 |
| 14 | [domain-modeling](#skill-domain-modeling) | 正式工程技能 | 可自动匹配 | CONTEXT.md 业务词汇表、必要时的 ADR，复杂项目可用 CONTEXT-MAP.md。 |
| 15 | [codebase-design](#skill-codebase-design) | 正式工程技能 | 可自动匹配 | 接口设计原则、方案比较、测试接口与模块划分建议。 |
| 16 | [code-review](#skill-code-review) | 正式工程技能 | 可自动匹配 | Standards 与 Spec 两份报告，指出缺失、范围扩大和代码设计问题。 |
| 17 | [resolving-merge-conflicts](#skill-resolving-merge-conflicts) | 正式工程技能 | 可自动匹配 | 冲突解决后的文件、验证结果及完成的 merge 或 rebase。 |
| 18 | [wizard](#skill-wizard) | 正式工程技能 | 可自动匹配 | 分阶段向导，支持隐藏密钥输入、环境文件更新和 GitHub secret/variable 写入。 |
| 19 | [grill-me](#skill-grill-me) | 正式通用技能 | 用户指定 | 澄清后的共同理解，通常保留在会话里。 |
| 20 | [grilling](#skill-grilling) | 正式通用技能 | 可自动匹配 | 已解决的决策树和共同理解。 |
| 21 | [handoff](#skill-handoff) | 正式通用技能 | 用户指定 | 操作系统临时目录中的 Markdown 交接文件。 |
| 22 | [teach](#skill-teach) | 正式通用技能 | 用户指定 | MISSION.md、RESOURCES.md、HTML 课程、参考页、学习记录及共享资源。 |
| 23 | [to-questionnaire](#skill-to-questionnaire) | 正式通用技能 | 用户指定 | 当前目录中的 to-questionnaire-主题.md 文件。 |
| 24 | [wait-what](#skill-wait-what) | 正式通用技能 | 用户指定 | 一段更容易理解的解释。 |
| 25 | [writing-for-agents](#skill-writing-for-agents) | 正式通用技能 | 可自动匹配 | 经过整理的技能说明、项目指引或参考文档结构。 |
| 26 | [loop-me](#skill-loop-me) | 实验技能 | 用户指定 | workflows 下的规格与 NOTES.md 背景记录。 |
| 27 | [writing-fragments](#skill-writing-fragments) | 实验技能 | 用户指定 | 以分隔线组织的原始写作素材文件。 |
| 28 | [writing-shape](#skill-writing-shape) | 实验技能 | 用户指定 | 保留原始材料的独立文章文件。 |
| 29 | [writing-beats](#skill-writing-beats) | 实验技能 | 用户指定 | 逐步成形的文章与明确的概念铺垫顺序。 |
| 30 | [claude-handoff](#skill-claude-handoff) | 实验技能 | 用户指定 | 一个正在运行的 Claude 后台任务及其交接上下文。 |
| 31 | [setup-ts-deep-modules](#skill-setup-ts-deep-modules) | 实验技能 | 用户指定 | 依赖检查配置、检查命令、示例包和约定文档。 |
| 32 | [implement-spec](#skill-implement-spec) | 实验技能 | 用户指定 | 实现整个规格的 PR、多个任务的提交和审查结果。 |
| 33 | [pr](#skill-pr) | 实验技能 | 可自动匹配 | Summary、Evidence、Merge Danger 结构的 PR 正文。 |
| 34 | [retro](#skill-retro) | 实验技能 | 用户指定 | 环境改进建议清单。 |
| 35 | [git-guardrails-claude-code](#skill-git-guardrails-claude-code) | 专项技能 | 可自动匹配 | Claude 设置与拦截脚本。 |
| 36 | [migrate-to-shoehorn](#skill-migrate-to-shoehorn) | 专项技能 | 可自动匹配 | 更简洁的测试数据构造及依赖变更。 |
| 37 | [scaffold-exercises](#skill-scaffold-exercises) | 专项技能 | 可自动匹配 | 编号化 exercises 目录、readme 和可选 main.ts。 |
| 38 | [setup-pre-commit](#skill-setup-pre-commit) | 专项技能 | 可自动匹配 | 提交钩子、格式化配置及相关依赖和脚本修改。 |

## 正式工程技能

<a id="skill-ask-matt"></a>

### 01 · ask-matt：技能导航与流程选择

**能力：** 根据当前处境推荐技能及执行顺序，解释何时继续当前会话、交接或压缩上下文。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 忘记技能名；不知道一个想法应该先研究、做原型还是直接实现。 |
| 工作步骤 | 识别任务阶段，推荐主流程或独立入口；复杂任务先澄清再规格化。 |
| 可以交付 | 推荐路线和选择理由；通常不直接交付代码。 |
| 对你的预期价值 | 降低记忆技能名称和选择流程的负担。 |
| 输入与前提 | 提供目标、现状与工作目录；工程流程应先配置。 |
| 限制与注意 | 它是导航，不会替用户自动启动所有显式技能；源码中的上下文容量经验值不可当作所有模型的规格。 |
| 调用方式 | 用户指定 |
| 正式插件包含 | 是 |
| 关联技能 | 无明确技能调用依赖 |

中文示例：

> 请用 ask-matt 判断：我要把研究笔记做成可搜索的目录，最小需要哪些步骤？

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/ask-matt/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/ask-matt)

<a id="skill-setup-matt-pocock-skills"></a>

### 02 · setup-matt-pocock-skills：项目首次配置

**能力：** 为工程技能确定任务跟踪方式、标签名称、领域文档布局。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 第一次在某个项目采用本库；更换任务平台。 |
| 工作步骤 | 检查已有设置，提出配置草案，再写入项目指引和 docs/agents 文档。 |
| 可以交付 | issue-tracker.md、domain.md，以及需要时的 triage-labels.md 和入口指引。 |
| 对你的预期价值 | 让各技能知道去哪里读写任务及项目共识。 |
| 输入与前提 | 项目目录可读写；使用外部平台时需相应工具与访问权限。 |
| 限制与注意 | 会修改项目指引；GitHub、GitLab、本地文件有模板，Linear/Jira 需补写工作约定，不能视为自带连接器。 |
| 调用方式 | 用户指定 |
| 正式插件包含 | 是 |
| 关联技能 | 无明确技能调用依赖 |

中文示例：

> 请用 setup-matt-pocock-skills 配置这个试验项目，任务保存在本地 Markdown 文件。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/setup-matt-pocock-skills/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/setup-matt-pocock-skills)

<a id="skill-grill-with-docs"></a>

### 03 · grill-with-docs：带记录的需求澄清

**能力：** 组合 grilling 和 domain-modeling，在讨论中形成明确决策并保存业务术语。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 需求模糊、业务词汇混用、后续还会继续开发的项目。 |
| 工作步骤 | 按决策依赖分轮追问；核对事实；共识形成时更新术语表，必要时记录重要取舍。 |
| 可以交付 | 澄清后的方案、CONTEXT.md 术语表、符合条件的 ADR。 |
| 对你的预期价值 | 减少理解偏差，让后续会话复用已确认的语言和理由。 |
| 输入与前提 | 需要用户参与决策，并有可写工作目录。 |
| 限制与注意 | 不等于自动写完整需求规格；追问较密集，已清楚的小改动不一定需要。 |
| 调用方式 | 用户指定 |
| 正式插件包含 | 是 |
| 关联技能 | grilling、domain-modeling |

中文示例：

> 请用 grill-with-docs 澄清开源项目研究目录的目标，重点确定收录、验证、完成的含义。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/grill-with-docs/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/grill-with-docs)

<a id="skill-triage"></a>

### 04 · triage：需求与问题分诊

**能力：** 把外部问题或请求归类、验证并转成可执行简报；按配置也可处理外部 PR。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 收到很多错误报告、功能请求或社区贡献，需要确定下一步。 |
| 工作步骤 | 读取上下文和既往拒绝原因，给出分类建议，复现声明，必要时澄清，再调整状态并记录。 |
| 可以交付 | 分类与状态标签、待补信息、代理任务简报，或带理由的关闭记录。 |
| 对你的预期价值 | 把零散请求整理成明确队列，减少重复处理和遗漏。 |
| 输入与前提 | 任务平台配置、标签映射、仓库及相关运行环境。 |
| 限制与注意 | 可能发评论、改标签、关闭问题；需要对应授权。to-tickets 已生成的任务通常无需再分诊。 |
| 调用方式 | 用户指定 |
| 正式插件包含 | 是 |
| 关联技能 | grilling、domain-modeling |

中文示例：

> 请用 triage 检查这组外部反馈，先列出需补信息和可以实施的事项。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/triage/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/triage)

<a id="skill-improve-codebase-architecture"></a>

### 05 · improve-codebase-architecture：架构改进候选分析

**能力：** 找出理解成本高、职责散乱或难以测试的模块，提出可以集中复杂度的改进候选。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 代码增长后频繁跨文件修改；同一类错误反复出现。 |
| 工作步骤 | 优先观察近期变动区域，委派探索，生成前后对比 HTML，再深入用户选中的候选。 |
| 可以交付 | 临时目录中的 HTML 架构报告、候选强度、前后示意和后续设计共识。 |
| 对你的预期价值 | 为重构提供可讨论的证据和优先级。 |
| 输入与前提 | 实际代码、历史记录；完整流程依赖子代理及 HTML 查看能力。 |
| 限制与注意 | 主要交付分析与设计，不自动完成重构；报告使用 CDN，不能承诺离线样式和图表完整。 |
| 调用方式 | 用户指定 |
| 正式插件包含 | 是 |
| 关联技能 | codebase-design、grilling、domain-modeling |

中文示例：

> 请用 improve-codebase-architecture 分析最近反复修改的导入模块，给出三个以内的候选。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/improve-codebase-architecture/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/improve-codebase-architecture)

<a id="skill-to-spec"></a>

### 06 · to-spec：将讨论整理成规格

**能力：** 从已有讨论与代码背景形成可交付给实现者的规格。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 方案已讨论清楚，需要确定需求、范围和测试策略。 |
| 工作步骤 | 读取项目背景，提出并确认测试接口，整理用户故事、实现和测试决策，发布到配置的任务位置。 |
| 可以交付 | 包含问题、方案、用户故事、决策、范围外事项的规格条目或文件。 |
| 对你的预期价值 | 形成可核对的实施基线，减少不同会话各自解释需求。 |
| 输入与前提 | 已有足够讨论；任务跟踪配置；必要时用户确认测试位置。 |
| 限制与注意 | 正文禁止重新进行全面访谈，但仍要求确认测试接口；不能把 no interview 理解为完全无需确认。 |
| 调用方式 | 用户指定 |
| 正式插件包含 | 是 |
| 关联技能 | 无明确技能调用依赖 |

中文示例：

> 请用 to-spec 将刚才确认的搜索功能整理为规格，保存到本地任务目录。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/to-spec/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/to-spec)

<a id="skill-to-tickets"></a>

### 07 · to-tickets：可验收任务拆分

**能力：** 把规格或计划拆成能单独验证的完整小功能，并明确先后依赖。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 跨多个会话的功能；需要分批交付或安排并行工作。 |
| 工作步骤 | 识别纵向功能切片，记录阻塞关系，确认粒度，再按依赖顺序创建任务。 |
| 可以交付 | 一项一文件或一个 Issue，含交付行为、验收条件和 Blocked by。 |
| 对你的预期价值 | 把长任务变成可跟踪的小成果，下一会话只需读取当前任务。 |
| 输入与前提 | 已明确的方案与任务跟踪配置。 |
| 限制与注意 | 它负责拆分和发布，不自动运行任务；大范围迁移另用先兼容、分批迁移、再移除旧形式的顺序。 |
| 调用方式 | 用户指定 |
| 正式插件包含 | 是 |
| 关联技能 | 无明确技能调用依赖 |

中文示例：

> 请用 to-tickets 拆分研究目录搜索功能，每个任务完成后都能演示一个用户行为。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/to-tickets/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/to-tickets)

<a id="skill-implement"></a>

### 08 · implement：按规格实施

**能力：** 执行规格或任务，在合适位置使用测试驱动，完成检查与审查。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 已有明确规格和验收条件，需要落实一个任务。 |
| 工作步骤 | 在约定接口上测试和实现，定期类型检查与单项测试，最后全套测试、代码审查、提交。 |
| 可以交付 | 实现代码、测试、检查结果和当前分支上的提交。 |
| 对你的预期价值 | 给实现过程提供稳定的完成标准。 |
| 输入与前提 | 开发与测试环境、明确任务、Git 仓库；相关技能及工具可用。 |
| 限制与注意 | 会提交代码；当前 code-review 的 HEAD 范围与提交前审查存在潜在衔接缺口，使用时需确认实际审查了本轮修改。 |
| 调用方式 | 用户指定 |
| 正式插件包含 | 是 |
| 关联技能 | tdd、code-review |

中文示例：

> 请用 implement 完成当前的项目名称搜索任务，并提供验收结果。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/implement/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/implement)

<a id="skill-wayfinder"></a>

### 09 · wayfinder：大型不确定任务的决策地图

**能力：** 把大到一次会话无法想清楚的工作，拆成相互依赖的决策问题并逐步解决。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 新产品、复杂迁移、涉及多个未知条件的大型规划。 |
| 工作步骤 | 先定义终点，建地图和可明确的问题，标记依赖；每次领取一个可处理问题并记录结论。 |
| 可以交付 | 地图 Issue、决策子任务、结论链接、未明确区域和范围外事项。 |
| 对你的预期价值 | 让多次会话围绕同一目标推进，保存取舍而非重复争论。 |
| 输入与前提 | 任务平台或本地约定；用户参与决策，研究分支需要子代理支持。 |
| 限制与注意 | 默认产出决策而非产品；通常一次会话解决一个非研究问题，不适合清楚的小功能。 |
| 调用方式 | 用户指定 |
| 正式插件包含 | 是 |
| 关联技能 | grilling、domain-modeling、research、prototype |

中文示例：

> 请用 wayfinder 规划一个长期研究知识库，先弄清检索、更新和来源追溯的关键决策。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/wayfinder/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/wayfinder)

<a id="skill-prototype"></a>

### 10 · prototype：用于回答设计问题的原型

**能力：** 制作快速、可操作的逻辑演示或界面变体。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 状态变化难以口头确认；需要看见不同 UI 才能做选择。 |
| 工作步骤 | 先区分逻辑问题和视觉问题；逻辑用单 HTML 演示，界面用同一路由切换变体；保存结论及原型来源。 |
| 可以交付 | 可交互原型、可观察的状态、设计结论和原型分支指针。 |
| 对你的预期价值 | 较早发现设计误解，避免把未验证方案直接做成正式功能。 |
| 输入与前提 | 明确要回答的问题；逻辑分支需浏览器，UI 分支需项目运行环境。 |
| 限制与注意 | 默认内存状态，刻意少做测试、健壮性和抽象；不应按正式产品验收，也不自动负责上线。 |
| 调用方式 | 用户指定或模型按任务匹配 |
| 正式插件包含 | 是 |
| 关联技能 | 无明确技能调用依赖 |

中文示例：

> 请用 prototype 比较研究项目目录的卡片与表格方案，重点验证筛选操作。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/prototype/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/prototype)

<a id="skill-diagnosing-bugs"></a>

### 11 · diagnosing-bugs：基于复现的故障诊断

**能力：** 为具体错误建立可反复验证的信号，再通过最小复现和假设验证定位原因。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 顽固错误、偶发问题、性能回退、反复修不好。 |
| 工作步骤 | 建立失败反馈，最小化，列可证伪假设，定向观测，修复和回归，清理临时日志。 |
| 可以交付 | 复现命令、定位证据、最小修复、回归测试或无法建立合适测试接口的说明。 |
| 对你的预期价值 | 让修复有前后证据，减少凭直觉试改。 |
| 输入与前提 | 可访问复现环境或足够样本；合适的测试、浏览器或测量工具。 |
| 限制与注意 | 无法建立有效反馈时会停下来求助；源码的经验性百分比不是效果保证。 |
| 调用方式 | 用户指定或模型按任务匹配 |
| 正式插件包含 | 是 |
| 关联技能 | 无明确技能调用依赖 |

中文示例：

> 请用 diagnosing-bugs 排查筛选后结果偶尔为空的问题，先给出可重复的复现方法。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/diagnosing-bugs/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/diagnosing-bugs)

<a id="skill-research"></a>

### 12 · research：第一手来源研究

**能力：** 将有边界的问题交给后台代理，依据官方文档和源码形成有引用的研究笔记。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 选型、查 API 行为、确认某库是否支持一项能力。 |
| 工作步骤 | 后台读取第一手资料，逐项追溯主张，将结果保存到项目既有笔记位置。 |
| 可以交付 | 一个带来源链接的 Markdown 研究文件。 |
| 对你的预期价值 | 把临时检索变成可保存、复查和交接的知识。 |
| 输入与前提 | 可访问来源；完整原流程需要后台子代理和可写目录。 |
| 限制与注意 | 研究事实仍需核验；无子代理时顺序研究属于适配，不是原有并行效果。 |
| 调用方式 | 用户指定或模型按任务匹配 |
| 正式插件包含 | 是 |
| 关联技能 | 无明确技能调用依赖 |

中文示例：

> 请用 research 核对某项目的离线能力、导出方式与许可证，每项附第一手来源。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/research/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/research)

<a id="skill-tdd"></a>

### 13 · tdd：以行为为中心的测试驱动

**能力：** 通过公开接口验证真实行为，以一项失败测试推动最小实现。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 重要业务规则、新功能、需要防止回归的修复。 |
| 工作步骤 | 确认测试位置，写失败测试，观察失败，写最小实现并观察通过，逐个小切片推进。 |
| 可以交付 | 与业务行为对应的测试和实现，失败到通过的执行证据。 |
| 对你的预期价值 | 增强验收的可重复性，使内部重构不必大量改测试。 |
| 输入与前提 | 测试运行器、明确预期及独立的正确答案；先约定测试接口。 |
| 限制与注意 | 不能证明没有所有错误；本版本明确把重构放到审查阶段，区别于 README 的简略说法。 |
| 调用方式 | 用户指定或模型按任务匹配 |
| 正式插件包含 | 是 |
| 关联技能 | codebase-design |

中文示例：

> 请用 tdd 实现按标签筛选，先验证两个标签同时选择时的业务规则。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/tdd/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/tdd)

<a id="skill-domain-modeling"></a>

### 14 · domain-modeling：业务术语与决策记录

**能力：** 统一领域概念，识别同名异义，并记录值得长期保留的取舍。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 客户与用户混淆；状态、审核、归档等业务词有歧义。 |
| 工作步骤 | 用具体反例澄清含义，与代码互相核对；即时更新词汇，满足条件才建立 ADR。 |
| 可以交付 | CONTEXT.md 业务词汇表、必要时的 ADR，复杂项目可用 CONTEXT-MAP.md。 |
| 对你的预期价值 | 跨文件、跨会话沟通更加一致，减少业务含义漂移。 |
| 输入与前提 | 用户可确认业务含义；可以读取项目并保存文档。 |
| 限制与注意 | CONTEXT.md 在本库中仅作词汇表，不能当作所有项目资料的杂物箱；ADR 也不是逐次聊天记录。 |
| 调用方式 | 用户指定或模型按任务匹配 |
| 正式插件包含 | 是 |
| 关联技能 | 无明确技能调用依赖 |

中文示例：

> 请用 domain-modeling 区分已收录、已研究、已验证和已归档四个状态。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/domain-modeling/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/domain-modeling)

<a id="skill-codebase-design"></a>

### 15 · codebase-design：模块接口设计准则

**能力：** 用较小的调用接口封装足够多的行为，集中变动、理解和测试成本。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 设计模块接口、寻找测试位置、决定是否增加抽象。 |
| 工作步骤 | 使用共享术语审视接口复杂度、变化位置与替换需求；必要时比较多个差异明显的设计。 |
| 可以交付 | 接口设计原则、方案比较、测试接口与模块划分建议。 |
| 对你的预期价值 | 让人和 AI 更容易定位改动，减少为一项行为四处修改。 |
| 输入与前提 | 具体代码或设计问题；多方案流程可依赖子代理。 |
| 限制与注意 | 它是设计参考，不是自动重构器；深模块不是以实现代码行数衡量。 |
| 调用方式 | 用户指定或模型按任务匹配 |
| 正式插件包含 | 是 |
| 关联技能 | 无明确技能调用依赖 |

中文示例：

> 请用 codebase-design 设计项目元数据读取接口，比较简单目录读取与索引服务两个方案。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/codebase-design/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/codebase-design)

<a id="skill-code-review"></a>

### 16 · code-review：规范与需求双维审查

**能力：** 分别检查提交差异是否遵守项目规范、是否完成规格要求。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 合并前复核、检查分支、判断实现是否偏题。 |
| 工作步骤 | 确定基准与规格来源；两个子代理分别审查规范和需求；并排汇报问题与证据。 |
| 可以交付 | Standards 与 Spec 两份报告，指出缺失、范围扩大和代码设计问题。 |
| 对你的预期价值 | 避免代码写得整齐却做错事情，也避免完成功能却破坏约定。 |
| 输入与前提 | 有效 Git 基准、实际差异、规范和规格；完整流程依赖子代理。 |
| 限制与注意 | 无规格会跳过需求维度；源码使用基准到 HEAD 的差异，未提交修改需要明确补充审查范围。 |
| 调用方式 | 用户指定或模型按任务匹配 |
| 正式插件包含 | 是 |
| 关联技能 | 无明确技能调用依赖 |

中文示例：

> 请用 code-review 审查功能分支相对主分支的已提交变更，并对照指定规格。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/code-review/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/code-review)

<a id="skill-resolving-merge-conflicts"></a>

### 17 · resolving-merge-conflicts：按原始意图解决合并冲突

**能力：** 追溯冲突双方的提交、PR 和任务意图，逐块协调行为并完成合并。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | Git merge 或 rebase 已进入冲突状态。 |
| 工作步骤 | 查看状态与来源，尽量保留双方意图，解决每个冲突，运行检查并继续操作。 |
| 可以交付 | 冲突解决后的文件、验证结果及完成的 merge 或 rebase。 |
| 对你的预期价值 | 减少只按文本取舍造成的功能丢失。 |
| 输入与前提 | Git 历史与冲突状态；最好能读原始 PR 和任务；测试可运行。 |
| 限制与注意 | 原文要求始终解决、从不中止并暂存全部修改；实际采用应尊重用户中止意愿并避开无关变更。 |
| 调用方式 | 用户指定或模型按任务匹配 |
| 正式插件包含 | 是 |
| 关联技能 | 无明确技能调用依赖 |

中文示例：

> 请用 resolving-merge-conflicts 处理当前冲突，先说明双方要保留的行为。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/resolving-merge-conflicts/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/resolving-merge-conflicts)

<a id="skill-wizard"></a>

### 18 · wizard：需要人工步骤的交互向导

**能力：** 将必须由人完成的配置或迁移步骤整理成可运行 Bash 向导。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 第三方后台设置、复制 API 密钥、配置 CI 变量、人工切换流程。 |
| 工作步骤 | 查明步骤和变量去向，确认阶段，基于模板生成脚本，做静态检查后交给人执行。 |
| 可以交付 | 分阶段向导，支持隐藏密钥输入、环境文件更新和 GitHub secret/variable 写入。 |
| 对你的预期价值 | 减少来回复述操作路径，让多步骤人工配置更可重复。 |
| 输入与前提 | Bash 和相关 CLI、浏览器及服务访问权；PowerShell 不能直接执行 Bash 模板。 |
| 限制与注意 | 原流程不由代理全程运行；会涉及配置写入，具体服务步骤仍需实时核实。 |
| 调用方式 | 用户指定或模型按任务匹配 |
| 正式插件包含 | 是 |
| 关联技能 | 无明确技能调用依赖 |

中文示例：

> 请用 wizard 为测试环境配置生成分阶段向导，写清每个变量的来源和保存位置。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/wizard/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/wizard)


## 正式通用技能

<a id="skill-grill-me"></a>

### 19 · grill-me：通用想法澄清

**能力：** 调用 grilling 深入检验一个计划或想法。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 没有项目目录的计划讨论；写作、活动或个人决策尚未想清。 |
| 工作步骤 | 围绕依赖已明确的问题分轮提问，给出推荐选项，等用户决定。 |
| 可以交付 | 澄清后的共同理解，通常保留在会话里。 |
| 对你的预期价值 | 暴露未意识到的假设，帮助你说清楚真正需要什么。 |
| 输入与前提 | 需要你参与，提供真实目标和限制。 |
| 限制与注意 | 入口本身不写项目术语表；希望长期保留领域共识时选 grill-with-docs。 |
| 调用方式 | 用户指定 |
| 正式插件包含 | 是 |
| 关联技能 | grilling |

中文示例：

> 请用 grill-me 检验我每周研究一个开源项目的计划是否可持续。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/productivity/grill-me/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/productivity/grill-me)

<a id="skill-grilling"></a>

### 20 · grilling：可复用的决策追问方法

**能力：** 将想法组织成决策树，分轮处理当前能够决定的问题。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 多个选择有前后依赖，或其他技能需要澄清环节。 |
| 工作步骤 | 为每轮列出问题和建议，事实由代理查找，取舍由用户回答；答案改变下一轮问题。 |
| 可以交付 | 已解决的决策树和共同理解。 |
| 对你的预期价值 | 避免在上游选择未定时追问依赖它的细节。 |
| 输入与前提 | 用户在场参与；事实探索可能依赖子代理。 |
| 限制与注意 | 原文要求全部分支明确并确认后才行动，可能增加沟通成本；可按任务范围定制停止条件。 |
| 调用方式 | 用户指定或模型按任务匹配 |
| 正式插件包含 | 是 |
| 关联技能 | 无明确技能调用依赖 |

中文示例：

> 请用 grilling 找出研究报告中仍需我决定的事项，能查到的事实由你自行核实。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/productivity/grilling/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/productivity/grilling)

<a id="skill-handoff"></a>

### 21 · handoff：可携带的会话交接

**能力：** 把会话压缩成新代理可以接手的文档，并链接已有成果。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 换目录、换 AI 工具、交给同事、分出独立工作。 |
| 工作步骤 | 整理当前结论和下一步，引用现有规格、提交和文档，去掉敏感内容，建议接下来使用的技能。 |
| 可以交付 | 操作系统临时目录中的 Markdown 交接文件。 |
| 对你的预期价值 | 减少重复解释，保留尚未进入正式文档的工作上下文。 |
| 输入与前提 | 有值得交接的会话，以及对已有成果的可访问路径。 |
| 限制与注意 | 不会自动启动新会话；临时文件不是长期档案，重要结论仍应保存在项目里。 |
| 调用方式 | 用户指定 |
| 正式插件包含 | 是 |
| 关联技能 | 无明确技能调用依赖 |

中文示例：

> 请用 handoff 为下一次继续核对实验技能整理交接，链接现有研究文件。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/productivity/handoff/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/productivity/handoff)

<a id="skill-teach"></a>

### 22 · teach：持续学习工作区

**能力：** 围绕学习目标创建短课、参考资料和学习记录，跨会话继续。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 想系统理解 Agent Skills、测试方法或某项技术，而非只问一个概念。 |
| 工作步骤 | 确定学习目的，寻找可靠资料，按已有学习记录设计短课及练习，再沉淀可复习的要点。 |
| 可以交付 | MISSION.md、RESOURCES.md、HTML 课程、参考页、学习记录及共享资源。 |
| 对你的预期价值 | 将看过资料变成可练习、可回顾的个人课程。 |
| 输入与前提 | 可写目录、可靠来源、浏览器以及学习者反馈。 |
| 限制与注意 | 不等于已验证的教学效果；源码既称课件自包含又要求引用共享资源，分享时应连同依赖文件。 |
| 调用方式 | 用户指定 |
| 正式插件包含 | 是 |
| 关联技能 | 无明确技能调用依赖 |

中文示例：

> 请用 teach 建立 Agent Skills 学习目录，目标是我能独立判断一个技能是否值得安装。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/productivity/teach/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/productivity/teach)

<a id="skill-to-questionnaire"></a>

### 23 · to-questionnaire：向他人收集信息的问卷

**能力：** 把你无法独自回答的问题整理成供特定对象填写的文档。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 业务细节由客户、同事或服务提供方掌握。 |
| 工作步骤 | 先明确接收者和所需答案，再围绕信息缺口写分主题问题与回答位置。 |
| 可以交付 | 当前目录中的 to-questionnaire-主题.md 文件。 |
| 对你的预期价值 | 让异步沟通有目的、有上下文，减少问完仍无法决策。 |
| 输入与前提 | 知道要问谁，以及拿到答案后要作什么决定。 |
| 限制与注意 | 只生成问卷，不自动发送或追踪答复；不保证对方的回答完整准确。 |
| 调用方式 | 用户指定 |
| 正式插件包含 | 是 |
| 关联技能 | 无明确技能调用依赖 |

中文示例：

> 请用 to-questionnaire 为资料提供者拟一份问卷，确认哪些内容可以公开引用。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/productivity/to-questionnaire/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/productivity/to-questionnaire)

<a id="skill-wait-what"></a>

### 24 · wait-what：把刚才的解释重新讲清楚

**能力：** 在当前对话中补齐背景，用简化语言和项目术语重述。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 解释技术词过多、缺少前提、用户跟不上讨论。 |
| 工作步骤 | 回到上一段，补必要上下文，沿用既有术语重新表达。 |
| 可以交付 | 一段更容易理解的解释。 |
| 对你的预期价值 | 降低理解门槛，保留用户对讨论的掌控。 |
| 输入与前提 | 已有需要澄清的消息；有词汇表时可读取。 |
| 限制与注意 | 原文指定简化技术英语；中文使用宜明确要求中文，不应假设它自带中文教学规范。 |
| 调用方式 | 用户指定 |
| 正式插件包含 | 是 |
| 关联技能 | 无明确技能调用依赖 |

中文示例：

> 请用 wait-what 用中文重讲刚才的测试接口，只保留一个具体例子。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/productivity/wait-what/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/productivity/wait-what)

<a id="skill-writing-for-agents"></a>

### 25 · writing-for-agents：面向 AI 的指令文档设计

**能力：** 指导如何编写精简、可触发、有完成条件的技能和项目指引。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 编写个人技能、维护 AGENTS.md、指令文件越来越长。 |
| 工作步骤 | 区分步骤与参考，将分支资料按需加载，强化触发描述和完成条件，删去重复及失效内容。 |
| 可以交付 | 经过整理的技能说明、项目指引或参考文档结构。 |
| 对你的预期价值 | 把重复口头要求沉淀成更稳定、可维护的规则。 |
| 输入与前提 | 明确目标行为与实际失败案例；需要测试修改后的表现。 |
| 限制与注意 | 它提供写作原则，不会自动证明触发率提高；作者的提示经验要通过实际对照验证。 |
| 调用方式 | 用户指定或模型按任务匹配 |
| 正式插件包含 | 是 |
| 关联技能 | 无明确技能调用依赖 |

中文示例：

> 请用 writing-for-agents 检查我的项目研究规范，找出含糊的完成标准。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/productivity/writing-for-agents/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/productivity/writing-for-agents)


## 实验技能

<a id="skill-loop-me"></a>

### 26 · loop-me：重复工作流程规格化

**能力：** 识别生活或工作中的重复活动，澄清为可以实施的流程规格。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 希望把每周资料收集、报告整理等重复工作交给自动化。 |
| 工作步骤 | 先了解工作背景，识别触发、步骤、人工检查点和简报，持续写入工作流规格。 |
| 可以交付 | workflows 下的规格与 NOTES.md 背景记录。 |
| 对你的预期价值 | 为你日后建立个人自动化提供输入。 |
| 输入与前提 | 需要用户说明真实习惯、工具和决策要求。 |
| 限制与注意 | 实验技能；仅形成规格，不创建定时任务、不连接邮箱、不自行长期运行。 |
| 调用方式 | 用户指定 |
| 正式插件包含 | 否 |
| 关联技能 | grilling |

中文示例：

> 请用 loop-me 设计每周整理已研究项目的流程，明确什么时候需要我决定。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/loop-me/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/loop-me)

<a id="skill-writing-fragments"></a>

### 27 · writing-fragments：写作素材采集

**能力：** 通过追问收集可以用于文章的观点、故事、句子和例子。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 已有经验和零散想法，却不知道哪些素材值得写。 |
| 工作步骤 | 从初始输入即提取片段，讨论时持续追加到同一 Markdown 文档，不提前强加结构。 |
| 可以交付 | 以分隔线组织的原始写作素材文件。 |
| 对你的预期价值 | 把聊天中的好想法留下，方便以后写研究心得。 |
| 输入与前提 | 用户提供经历和观点，并指定保存位置。 |
| 限制与注意 | 实验技能；输出是素材而非成稿，也不替你核验每个经历或引述。 |
| 调用方式 | 用户指定 |
| 正式插件包含 | 否 |
| 关联技能 | 无明确技能调用依赖 |

中文示例：

> 请用 writing-fragments 收集我使用 AI 研究开源项目时遇到的问题与经验。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/writing-fragments/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/writing-fragments)

<a id="skill-writing-shape"></a>

### 28 · writing-shape：逐段组织文章

**能力：** 把已有原始素材整理成独立文章，逐步确认角度、段落和形式。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 素材足够，需要建立论点和清楚的阅读顺序。 |
| 工作步骤 | 完整读素材，确定读者前提，选择开头，逐段讨论并写入新文件。 |
| 可以交付 | 保留原始材料的独立文章文件。 |
| 对你的预期价值 | 让研究输出转成连贯、面向读者的文章。 |
| 输入与前提 | 完整素材、读者定位和用户持续参与。 |
| 限制与注意 | 实验技能；原素材只读；不是一次生成全文的快速模式，也不负责发布。 |
| 调用方式 | 用户指定 |
| 正式插件包含 | 否 |
| 关联技能 | 无明确技能调用依赖 |

中文示例：

> 请用 writing-shape 将这份研究素材组织成给非程序员看的技能库介绍。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/writing-shape/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/writing-shape)

<a id="skill-writing-beats"></a>

### 29 · writing-beats：按叙事推进单元写作

**能力：** 每次选择一个推进点，逐步构成读者可以跟上的文章。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 希望精细控制故事或论证走向，边写边选择路线。 |
| 工作步骤 | 确定读者已知概念，给出多个起点；每写一段推进单元后提出下一步选项。 |
| 可以交付 | 逐步成形的文章与明确的概念铺垫顺序。 |
| 对你的预期价值 | 让复杂技术介绍的阅读路径更自然。 |
| 输入与前提 | 已有素材和用户愿意逐步选路线。 |
| 限制与注意 | 实验技能；与 writing-shape 高度重叠，但以叙事推进而非段落格式为主要单位。 |
| 调用方式 | 用户指定 |
| 正式插件包含 | 否 |
| 关联技能 | 无明确技能调用依赖 |

中文示例：

> 请用 writing-beats 从一个失败案例开头，逐步解释为什么需要可验证的 AI 工作流程。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/writing-beats/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/writing-beats)

<a id="skill-claude-handoff"></a>

### 30 · claude-handoff：启动 Claude 后台交接任务

**能力：** 把交接摘要作为提示交给新的 Claude 后台代理。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 已在 Claude Code 环境中，想让新后台任务立即继续工作。 |
| 工作步骤 | 整理摘要及来源指针，以命名的 claude --bg 任务启动，后续由用户管理。 |
| 可以交付 | 一个正在运行的 Claude 后台任务及其交接上下文。 |
| 对你的预期价值 | 减少手动复制交接内容的操作。 |
| 输入与前提 | 支持对应参数的 Claude CLI、登录和后台任务能力。 |
| 限制与注意 | 实验且平台专用；不能直接视为 Codex 新建聊天或后台任务能力，本次未核实该 CLI 的运行兼容性。 |
| 调用方式 | 用户指定 |
| 正式插件包含 | 否 |
| 关联技能 | 无明确技能调用依赖 |

中文示例：

> 在兼容的 Claude 环境里，用 claude-handoff 让后台任务继续处理已明确的后续事项。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/claude-handoff/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/claude-handoff)

<a id="skill-setup-ts-deep-modules"></a>

### 31 · setup-ts-deep-modules：TypeScript 模块边界检查

**能力：** 配置 dependency-cruiser，约束包外部只能通过根目录入口访问实现。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | TypeScript 项目内部文件被四处直接导入，模块边界逐渐失效。 |
| 工作步骤 | 检测布局，配置入口、测试与循环依赖规则，接入检查，生成样例，再用故意违规验证规则有效。 |
| 可以交付 | 依赖检查配置、检查命令、示例包和约定文档。 |
| 对你的预期价值 | 把部分架构约定变成机器能够阻止的违规。 |
| 输入与前提 | TypeScript 项目、Node 包管理器和适合的包布局。 |
| 限制与注意 | 实验技能；规则不适合所有代码组织方式，配置成功不等于业务设计正确。 |
| 调用方式 | 用户指定 |
| 正式插件包含 | 否 |
| 关联技能 | codebase-design |

中文示例：

> 请用 setup-ts-deep-modules 在试验仓库建立包边界，并演示违规导入确实被检查发现。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/setup-ts-deep-modules/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/setup-ts-deep-modules)

<a id="skill-implement-spec"></a>

### 32 · implement-spec：多代理实施完整规格

**能力：** 把带依赖的任务图交给多个实现代理，汇总到一条分支和一个 PR。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 规格明确、任务可分开执行、环境支持并发的大型开发。 |
| 工作步骤 | 建集成分支和草稿 PR，独立工作树实现可启动任务，合并完成项，再推进新任务，统一审查。 |
| 可以交付 | 实现整个规格的 PR、多个任务的提交和审查结果。 |
| 对你的预期价值 | 有条件地缩短可并行任务的等待时间。 |
| 输入与前提 | 子代理、隔离工作树、Git 与 PR 工具、明确依赖和充分检查。 |
| 限制与注意 | 实验技能；会建 PR、合并和清理工作树；并发可能增加冲突及调用成本，不是速度保证。 |
| 调用方式 | 用户指定 |
| 正式插件包含 | 否 |
| 关联技能 | code-review |

中文示例：

> 在隔离试验仓库中，用 implement-spec 实施已确认的三个独立任务并汇总为草稿 PR。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/implement-spec/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/implement-spec)

<a id="skill-pr"></a>

### 33 · pr：面向证据的 PR 正文

**能力：** 以简洁可视结构、前后证据和回退难度组织 PR 说明。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 代码已完成，需要便于审阅的变更说明。 |
| 工作步骤 | 选择最小有效图示，补充修改前后证据，描述可逆性和影响范围。 |
| 可以交付 | Summary、Evidence、Merge Danger 结构的 PR 正文。 |
| 对你的预期价值 | 帮助你判断改了什么、是否有效、合并后影响哪里。 |
| 输入与前提 | 真实改动和执行证据；有项目术语时沿用。 |
| 限制与注意 | 实验参考技能；正文不负责创建或合并 PR，缺少证据时不能编造；有第三方致谢。 |
| 调用方式 | 用户指定或模型按任务匹配 |
| 正式插件包含 | 否 |
| 关联技能 | 无明确技能调用依赖 |

中文示例：

> 请用 pr 为这个功能整理 PR 正文，引用真实测试结果并说明回退方式。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/pr/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/pr)

<a id="skill-retro"></a>

### 34 · retro：会话复盘与环境改进

**能力：** 从会话证据找出可改进的导航、检查、规范、工具与信息访问方式。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 同一种协作错误反复发生，希望把经验变成环境改进。 |
| 工作步骤 | 读指定会话和项目规则，区分可机器检查的规则与需人工判断的标准，按严重程度提出候选。 |
| 可以交付 | 环境改进建议清单。 |
| 对你的预期价值 | 把一次任务的教训沉淀到后续工作环境。 |
| 输入与前提 | 可读取会话证据与项目指引，了解现有检查。 |
| 限制与注意 | 实验目录仍标为 STUB，但正文已有流程，成熟度说明不一致；不能当作已稳定自动改进工具。 |
| 调用方式 | 用户指定 |
| 正式插件包含 | 否 |
| 关联技能 | writing-for-agents |

中文示例：

> 请用 retro 回顾本次研究中重复检索和证据遗漏的原因，先只提出改进建议。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/retro/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/retro)


## 专项技能

<a id="skill-git-guardrails-claude-code"></a>

### 35 · git-guardrails-claude-code：Claude Git 操作拦截

**能力：** 为 Claude Code 安装执行前钩子，阻止特定 Git 命令模式。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 需要限制 Claude 执行推送或破坏性 Git 操作。 |
| 工作步骤 | 选择项目或全局范围，复制 Bash 钩子，合并设置，定制模式并用样例验证。 |
| 可以交付 | Claude 设置与拦截脚本。 |
| 对你的预期价值 | 对特定操作增加可执行的限制。 |
| 输入与前提 | Claude Code 的对应钩子机制、Bash 和脚本依赖。 |
| 限制与注意 | 专项技能，不在正式插件包；不是 Codex 权限配置，也不等于覆盖全部危险行为的安全边界。 |
| 调用方式 | 用户指定或模型按任务匹配 |
| 正式插件包含 | 否 |
| 关联技能 | 无明确技能调用依赖 |

中文示例：

> 在 Claude 测试项目中，用 git-guardrails-claude-code 添加指定 Git 命令拦截。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/misc/git-guardrails-claude-code/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/misc/git-guardrails-claude-code)

<a id="skill-migrate-to-shoehorn"></a>

### 36 · migrate-to-shoehorn：TypeScript 测试数据迁移

**能力：** 用 @total-typescript/shoehorn 辅助构造测试数据，替换部分 as 断言写法。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 测试中大量伪造完整对象或双重类型断言。 |
| 工作步骤 | 确认测试范围，安装包，替换适用模式，添加导入并运行类型检查。 |
| 可以交付 | 更简洁的测试数据构造及依赖变更。 |
| 对你的预期价值 | 在特定 TypeScript 测试场景减少样板代码。 |
| 输入与前提 | TypeScript 测试项目及包安装权限。 |
| 限制与注意 | 专项技能，仅用于测试；支持故意错误输入不代表运行时数据验证或完全消除类型不安全。 |
| 调用方式 | 用户指定或模型按任务匹配 |
| 正式插件包含 | 否 |
| 关联技能 | 无明确技能调用依赖 |

中文示例：

> 请用 migrate-to-shoehorn 整理指定测试文件中的部分对象构造，并保留测试意图。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/misc/migrate-to-shoehorn/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/misc/migrate-to-shoehorn)

<a id="skill-scaffold-exercises"></a>

### 37 · scaffold-exercises：课程练习目录脚手架

**能力：** 按作者课程项目约定创建章节、习题、题目、答案和讲解目录。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 制作使用相同结构的编程课程练习。 |
| 工作步骤 | 解析课程计划，生成有内容的说明文件，需要时代码入口，运行课程专用检查并提交。 |
| 可以交付 | 编号化 exercises 目录、readme 和可选 main.ts。 |
| 对你的预期价值 | 复用课程组织方式，加快教材目录搭建。 |
| 输入与前提 | 相容的课程项目，尤其是 pnpm ai-hero-cli internal lint 可用。 |
| 限制与注意 | 专项技能，对作者工具链依赖明显；普通项目不能直接假设检查命令存在，也不是通用课程生成器。 |
| 调用方式 | 用户指定或模型按任务匹配 |
| 正式插件包含 | 否 |
| 关联技能 | 无明确技能调用依赖 |

中文示例：

> 在兼容课程仓库中，用 scaffold-exercises 为三个主题创建练习和讲解目录。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/misc/scaffold-exercises/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/misc/scaffold-exercises)

<a id="skill-setup-pre-commit"></a>

### 38 · setup-pre-commit：提交前自动检查

**能力：** 给 Node 项目配置提交前格式化、类型检查和测试。

| 关注点 | 说明 |
| --- | --- |
| 使用场景 | 希望在提交时尽早发现机械性错误。 |
| 工作步骤 | 识别包管理器，安装 Husky、lint-staged 和 Prettier，配置钩子，核对现有命令并验证。 |
| 可以交付 | 提交钩子、格式化配置及相关依赖和脚本修改。 |
| 对你的预期价值 | 把一部分质量要求从提醒变成实际检查。 |
| 输入与前提 | Node 项目、Git、兼容包管理器和现有检查命令。 |
| 限制与注意 | 专项技能；没有类型检查或测试脚本会省略相应步骤；提交钩子不替代 CI，也可能拉长提交时间。 |
| 调用方式 | 用户指定或模型按任务匹配 |
| 正式插件包含 | 否 |
| 关联技能 | 无明确技能调用依赖 |

中文示例：

> 请用 setup-pre-commit 为演示项目接入已有检查，不重复覆盖现有格式化配置。

[固定版本源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/misc/setup-pre-commit/SKILL.md) · [同目录参考与适配文件](https://github.com/mattpocock/skills/tree/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/misc/setup-pre-commit)

## 如何解读相似技能

| 容易混淆的一组 | 选择依据 |
| --- | --- |
| grill-me / grill-with-docs / grilling | 无需本地记录的通用访谈 / 需要术语与决策记录的项目讨论 / 被两者复用的提问方法 |
| to-spec / to-tickets / wayfinder | 整理已明确的方案 / 拆出实施任务 / 先解决尚不明确的重大决策 |
| implement / implement-spec | 执行有边界的任务 / 实验性地并行实施整份规格并形成 PR |
| handoff / claude-handoff | 生成可携带文件 / 直接启动特定 Claude 后台任务 |
| codebase-design / improve-codebase-architecture | 设计参考与术语 / 对真实代码进行扫描并输出候选报告 |
| tdd / diagnosing-bugs | 已知行为的测试驱动实现 / 从具体故障证据开始的诊断 |
| writing-fragments / writing-shape / writing-beats | 收集素材 / 逐段组织 / 选择叙事推进路径 |

完整技能列表同时保存为 [skills-catalog.json](skills-catalog.json)，包含分类、调用属性、插件收录状态、依赖提示和源码标识，可供后续检索或展示页面使用。
