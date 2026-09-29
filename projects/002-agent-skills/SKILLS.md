# Agent Skills · 25 个技能详解

优先阅读新增的 [具体能力与交付物](CAPABILITIES.md) 或 [交互能力图谱](web/index.html)：逐项展开实际工作、产出和问题示例，并比较相近技能的分工。本页保留初轮场景与个人价值速查。

核验日期：2026-09-29。下列名称与固定提交的 25 个 SKILL.md 一一对应。作用与场景是对上游文件的中文概括；“示例请求”和“对你的价值”是本次分析，并非已执行的任务或上游效果承诺。

示例请求用于表达意图；实际调用方式由宿主工具决定。本文没有把查阅的技能加载为本次任务的执行指令。

## 发现与路由

### 1. 选择合适的技能 · using-agent-skills

- **作用**：根据任务阶段选择相关流程，并定义说明假设、控制范围和提供证据等共同要求。
- **使用场景**：不知道当前任务该用哪个技能，或宿主没有原生技能路由。
- **示例请求**：判断这个任务需要哪些技能，说明原因后只加载相关流程。
- **对你的价值**：帮助理解整套库的组织方式，减少乱选或全量加载。
- **前提与限制**：已有原生路由时，上游建议避免把元技能也作为常驻上下文重复加载。
- **固定版本来源**：[using-agent-skills](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/using-agent-skills/SKILL.md)

## 明确目标与质量

### 2. 需求访谈 · interview-me

- **作用**：通过逐次提问澄清真正目标、使用者、成功标准和限制，并确认理解。
- **使用场景**：只提出一个模糊想法，尚不清楚为什么做、给谁用或怎样算成功。
- **示例请求**：我想做一个项目研究工具，请先帮我澄清实际需求。
- **对你的价值**：研究目的不明确时可减少跑偏；本次问题已经明确，无需额外访谈。
- **前提与限制**：原文强调逐题询问与显式确认，可能增加轮次；清楚、独立的小任务不适用。自报置信度不等于统计准确率。
- **固定版本来源**：[interview-me](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/interview-me/SKILL.md)

### 3. 细化与比较想法 · idea-refine

- **作用**：先扩展候选方向，再检验假设、比较取舍，收敛为可执行的一页方案。
- **使用场景**：有初步想法，希望比较应用方向或检验是否值得投入。
- **示例请求**：基于这个开源库，提出三个个人使用方向并比较成本与价值。
- **对你的价值**：适合在研究完成后选择下一步应用或演示主题。
- **前提与限制**：需要真实目标和约束；不替代市场验证或用户访谈，也不应直接跳入实施。
- **固定版本来源**：[idea-refine](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/idea-refine/SKILL.md)

### 4. 先写规格再实施 · spec-driven-development

- **作用**：明确目标、范围、验收和操作边界；复杂需求先拆成能力模块，再进入计划与实施。
- **使用场景**：新项目、新功能或跨模块变更尚无清楚的需求文件。
- **示例请求**：把研究成果转成演示需求，列出功能、非目标和可检查的验收条件。
- **对你的价值**：以后制作产品或演示时，可让你先审查要交付什么。
- **前提与限制**：包含阶段确认，需按实际授权与项目规模使用；拼写或单行修正无需完整规格。
- **固定版本来源**：[spec-driven-development](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/spec-driven-development/SKILL.md)

### 5. 定义可执行的质量标准 · constraint-driven-development

- **作用**：形成 CONSTRAINTS.md，把质量维度对应到检查命令、阈值与执行阶段，并检查标准是否被削弱。
- **使用场景**：AI 输出量很大但缺少统一验收标准，或出现跳过测试、压低阈值等行为。
- **示例请求**：检查现有项目，定义新增代码的质量底线并落实到检查流程。
- **对你的价值**：有长期维护的代码项目后，能让你按明确标准验收。
- **前提与限制**：需要可用检查器和项目环境；文档自身不构成硬性执行，阈值应由真实基线与需求决定。
- **固定版本来源**：[constraint-driven-development](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/constraint-driven-development/SKILL.md)

## 制订计划

### 6. 拆分任务与依赖 · planning-and-task-breakdown

- **作用**：把已明确的需求拆成有依赖、验收条件和验证步骤的小任务。
- **使用场景**：目标明确，但任务太大、不知道顺序，或需要多次会话推进。
- **示例请求**：把这个演示拆成可逐项验收的任务，并标出先后依赖。
- **对你的价值**：其拆解方法可借鉴到研究清单，也适合未来演示开发。
- **前提与限制**：原流程面向实施任务；已有明确任务列表时不必重复规划，不能覆盖未完成计划。
- **固定版本来源**：[planning-and-task-breakdown](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/planning-and-task-breakdown/SKILL.md)

## 实现与工程方法

### 7. 小步实现 · incremental-implementation

- **作用**：按能贯通功能的小切片推进，每一步实施、测试、验证和提交。
- **使用场景**：多文件功能、较大重构，或准备一次生成大量代码。
- **示例请求**：按计划先完成一个能实际使用的最小流程，验证后再扩展。
- **对你的价值**：以后做演示时，让每一步都可检查、可回退。
- **前提与限制**：需要运行环境和版本管理；单文件小改动无需机械拆分，不能把无关本地改动一并提交。
- **固定版本来源**：[incremental-implementation](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/incremental-implementation/SKILL.md)

### 8. 测试驱动开发 · test-driven-development

- **作用**：先写能揭示缺失行为的失败测试，再实现通过并整理代码；修 Bug 先证明能够复现。
- **使用场景**：增加业务逻辑、改变行为或修复缺陷。
- **示例请求**：先用测试复现过滤结果错误，再修复并确认现有测试仍通过。
- **对你的价值**：未来开发时，为你提供比口头承诺更明确的行为证据。
- **前提与限制**：需使用项目实际测试栈；文档或纯静态内容不适用。测试通过不等于业务需求完整。
- **固定版本来源**：[test-driven-development](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/test-driven-development/SKILL.md)

### 9. 管理上下文 · context-engineering

- **作用**：整理项目规则、规格、相关文件和实时问题，使模型在当前任务中看到合适的信息。
- **使用场景**：新会话、切换任务、违反项目约定，或模型开始引用不存在的接口。
- **示例请求**：根据研究目录整理项目背景、现有结论和本次问题，避免加载无关材料。
- **对你的价值**：当前最值得借鉴：减少跨项目研究和后续接续时的重复解释。
- **前提与限制**：原生用途偏代码项目；研究场景需调整资料组织，增加上下文不必然提高质量。
- **固定版本来源**：[context-engineering](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/context-engineering/SKILL.md)

### 10. 依据官方资料实施 · source-driven-development

- **作用**：识别依赖版本，查阅相应官方文档后实施，引用依据并标记未验证内容。
- **使用场景**：使用框架或库的接口，担心模型记忆过时或采用错误模式。
- **示例请求**：先核实项目使用的框架版本和官方接口，再实现文件上传。
- **对你的价值**：可借鉴版本与证据意识；做演示时可直接用于依赖框架的实现。
- **前提与限制**：不是通用资料研究技能；网络、文档和版本对应关系不可缺，稳定纯逻辑无需反复查文档。
- **固定版本来源**：[source-driven-development](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/source-driven-development/SKILL.md)

### 11. 独立质疑关键判断 · doubt-driven-development

- **作用**：把非简单判断变成可复核对象，通过新的上下文寻找反例，处理发现并在限定次数内停止。
- **使用场景**：陌生代码、重要架构选择，或出错代价较高的变更。
- **示例请求**：独立检查这个迁移方案的前提，找出可能失败的条件并给出证据。
- **对你的价值**：关键选型或开发决策时值得考虑，日常资料整理不必逐项启用。
- **前提与限制**：需要复核能力与额外时间；跨模型调用有工具及授权前提，不能把更多审查等同于正确保证。
- **固定版本来源**：[doubt-driven-development](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/doubt-driven-development/SKILL.md)

### 12. 前端界面工程 · frontend-ui-engineering

- **作用**：处理组件结构、状态、响应式布局、设计一致性、可访问性及完成质量。
- **使用场景**：新建或修改页面、组件、交互与布局。
- **示例请求**：为研究清单制作支持筛选的页面，并处理空结果、加载和错误状态。
- **对你的价值**：将来制作研究展示页时直接有用。
- **前提与限制**：需要实际设计目标与前端环境；流程指导不会自动提供设计素材或浏览器验证工具。
- **固定版本来源**：[frontend-ui-engineering](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/frontend-ui-engineering/SKILL.md)

### 13. 接口与模块契约 · api-and-interface-design

- **作用**：先定义输入输出、错误语义与边界验证，再考虑兼容演进和接口实现。
- **使用场景**：前后端 API、模块边界、组件接口或公开契约发生变化。
- **示例请求**：设计项目收藏接口，明确字段、错误、分页和兼容规则。
- **对你的价值**：当前纯文档研究收益有限，未来连接服务或开发应用时有用。
- **前提与限制**：必须知道调用者需求和既有行为；不能仅凭接口看起来整齐就认定兼容。
- **固定版本来源**：[api-and-interface-design](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/api-and-interface-design/SKILL.md)

## 验证与排错

### 14. 真实浏览器验证 · browser-testing-with-devtools

- **作用**：借助浏览器运行数据检查 DOM、控制台、网络、布局与性能，确认用户实际看到的行为。
- **使用场景**：页面显示错误、交互异常、网络请求失败，或需要验证 UI 修复。
- **示例请求**：在浏览器中验证研究页面筛选、清空和手机布局，记录实际结果。
- **对你的价值**：制作 Web 演示后可防止只看源码就宣布完成。
- **前提与限制**：原技能明确要求配置 Chrome DevTools MCP；需可运行页面。其他浏览器工具需按宿主能力适配。
- **固定版本来源**：[browser-testing-with-devtools](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/browser-testing-with-devtools/SKILL.md)

### 15. 系统排错与恢复 · debugging-and-error-recovery

- **作用**：保存证据，复现、定位并缩小问题，修复根因，再增加防复发验证和端到端检查。
- **使用场景**：测试、构建或运行失败，实际行为与预期不符。
- **示例请求**：页面启动失败，请先保留错误信息并定位根因，修复后验证原始路径。
- **对你的价值**：以后运行开源项目或开发演示时可减少盲目试改。
- **前提与限制**：需要错误信息和复现环境；上游正文在常见五步分诊之外还列出端到端验证步骤。
- **固定版本来源**：[debugging-and-error-recovery](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/debugging-and-error-recovery/SKILL.md)

## 审查与改进

### 16. 多维代码审查 · code-review-and-quality

- **作用**：从正确性、可读性、架构、安全和性能检查改动，分级报告并核实验证依据。
- **使用场景**：功能完成、修复完成、合并变更前，或评估其他代理生成的代码。
- **示例请求**：检查本次差异，优先报告能影响用户的缺陷，并给出位置与证据。
- **对你的价值**：当 AI 开始为你生成代码时，提供更结构化的验收视角。
- **前提与限制**：需要具体代码、差异与背景；不是一般研究文章的事实审查工具，独立审查也可能漏检。
- **固定版本来源**：[code-review-and-quality](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/code-review-and-quality/SKILL.md)

### 17. 保持行为的代码简化 · code-simplification

- **作用**：先理解代码存在的原因，再减少不必要复杂度，并核实输出、异常与副作用不变。
- **使用场景**：功能已经正常，但嵌套深、重复多或维护困难。
- **示例请求**：在保留现有行为的前提下简化过滤逻辑，用现有验证确认没有回归。
- **对你的价值**：未来长期维护演示或应用时，减少 AI 生成代码的复杂度积累。
- **前提与限制**：不是追求最少行数；不了解行为或缺少验证时不宜直接简化。
- **固定版本来源**：[code-simplification](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/code-simplification/SKILL.md)

### 18. 安全审查与加固 · security-and-hardening

- **作用**：从威胁和信任边界出发，检查输入、身份权限、密钥、依赖与外部集成。
- **使用场景**：登录、上传、用户数据、第三方接口或供应链相关变更。
- **示例请求**：检查登录和上传流程的信任边界、权限与输入处理，列出可验证问题。
- **对你的价值**：将来演示接入真实账号或数据时非常相关。
- **前提与限制**：需要代码及环境证据；技能不构成安全认证，也不能替代必要的专业安全审核。
- **固定版本来源**：[security-and-hardening](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/security-and-hardening/SKILL.md)

### 19. 用测量指导优化 · performance-optimization

- **作用**：建立基线、定位瓶颈、修改后用相同条件复测，并为有效改善建立回归监测。
- **使用场景**：页面、服务、查询或数据库存在已观察到的缓慢问题。
- **示例请求**：测量项目列表加载时间，定位瓶颈，再比较优化前后的实际数据。
- **对你的价值**：当演示或工具真的变慢时有用，可减少凭感觉优化。
- **前提与限制**：需可复现的测量环境；需区分改进与随机波动，没有证据时不应先增加缓存等复杂度。
- **固定版本来源**：[performance-optimization](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/performance-optimization/SKILL.md)

## 交付与维护

### 20. 版本与变更管理 · git-workflow-and-versioning

- **作用**：以原子提交、清楚分支和版本记录组织工作，使变更可审查、可定位、可回退。
- **使用场景**：提交、分支、冲突、PR、版本发布或整理混杂改动。
- **示例请求**：把研究报告和展示页面的独立改动分开记录，明确每次提交的目的。
- **对你的价值**：当前研究资料也可借鉴其版本记录方法；开发时价值更大。
- **前提与限制**：需 Git 环境及明确操作范围；上游分支偏好不是所有团队必须采用的制度。
- **固定版本来源**：[git-workflow-and-versioning](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/git-workflow-and-versioning/SKILL.md)

### 21. 自动检查与交付流水线 · ci-cd-and-automation

- **作用**：把静态检查、测试、构建和部署验证放入自动流程，并反馈失败原因。
- **使用场景**：项目需要每次变更自动检查，或维护现有构建发布流水线。
- **示例请求**：为演示项目建立每次提交都能执行的检查和构建流程。
- **对你的价值**：研究产物成为持续维护的软件后，可减少重复手工检查。
- **前提与限制**：需要实际仓库平台、运行环境和所需权限；技能不会自动提供托管或部署服务。
- **固定版本来源**：[ci-cd-and-automation](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/ci-cd-and-automation/SKILL.md)

### 22. 弃用与平滑迁移 · deprecation-and-migration

- **作用**：识别旧系统使用者，规划替代、分阶段迁移与移除；数据库变更强调兼容阶段。
- **使用场景**：更换旧 API、模块或数据库结构，准备下线功能。
- **示例请求**：规划从旧收藏数据格式迁到新格式，确认旧数据和调用者能平稳过渡。
- **对你的价值**：当前新建研究目录不需要；未来已有用户或历史数据时再用。
- **前提与限制**：需消费者、数据和恢复依据；不能把迁移计划当成已完成备份或已验证回滚。
- **固定版本来源**：[deprecation-and-migration](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/deprecation-and-migration/SKILL.md)

### 23. 记录文档与决策理由 · documentation-and-adrs

- **作用**：记录架构选择的背景、备选方案与取舍，并维护可继续工作的说明。
- **使用场景**：重要技术选择、接口调整、交付或反复解释同一背景。
- **示例请求**：记录为什么采用此库、放弃了哪些方案，以及结论仍有哪些限制。
- **对你的价值**：当前很有价值：让研究结果积累为可复用的个人知识。
- **前提与限制**：原技能偏技术文档与 ADR；研究场景需调整格式，不要为显而易见的小事堆积记录。
- **固定版本来源**：[documentation-and-adrs](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/documentation-and-adrs/SKILL.md)

### 24. 让运行状态可观察 · observability-and-instrumentation

- **作用**：围绕需要回答的问题设计结构化日志、指标、追踪和告警，并实际验证故障能被发现。
- **使用场景**：服务将投入运行，或已有事故难以从现有数据诊断。
- **示例请求**：为同步任务增加成功率、耗时和失败原因记录，让故障可以定位。
- **对你的价值**：未来工具持续运行后有用，当前离线研究文档无需这套设施。
- **前提与限制**：需服务和观测工具；日志不能泄露敏感数据，采集更多信息不等于更易定位问题。
- **固定版本来源**：[observability-and-instrumentation](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/observability-and-instrumentation/SKILL.md)

### 25. 发布准备与上线验证 · shipping-and-launch

- **作用**：汇总质量、安全、运行准备与文档检查，制定渐进发布、监控和回滚方案。
- **使用场景**：功能首次上线、重要发布或基础设施变更。
- **示例请求**：评估这个工具是否具备发布条件，列出阻塞项、验证证据与回滚步骤。
- **对你的价值**：当你需要别人实际访问和使用产品时有意义。
- **前提与限制**：发布判断不代表部署已经执行；需要真实运行与平台条件，并遵守现有授权范围。
- **固定版本来源**：[shipping-and-launch](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/shipping-and-launch/SKILL.md)

[返回项目入口](README.md) · [查看个人采用建议](USER_VALUE.md)
