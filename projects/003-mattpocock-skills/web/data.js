window.SKILL_ATLAS = {
  "commit": "c55ee46073ed923f86ce59a5eb3b6d895095d1b7",
  "researched_on": "2026-09-29",
  "skills": [
    {
      "name": "research",
      "title_zh": "第一手来源研究",
      "category": "engineering",
      "included_in_plugin": true,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/research/SKILL.md",
      "domain": "研究与原型",
      "summary": "把零散的外部资料，整理为每项结论都有出处的研究文档。",
      "abilities": [
        "追溯官方文档、源码和规范",
        "核实一个具体问题的事实依据",
        "将结论与来源一起保存"
      ],
      "before": "只拿到一个开源项目链接，不知道它是否支持离线使用。",
      "after": "得到离线能力、依赖条件、例外与对应源码位置的研究说明。",
      "deliverable": "有来源的研究笔记",
      "boundary": "研究结论仍需核验；不会因为引用了链接就自动变成正确答案。"
    },
    {
      "name": "grill-with-docs",
      "title_zh": "带记录的需求澄清",
      "category": "engineering",
      "included_in_plugin": true,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/grill-with-docs/SKILL.md",
      "domain": "需求与决策",
      "summary": "把模糊需求整理成双方理解一致、后续还能继续使用的业务概念与决策。",
      "abilities": [
        "找出目标中的遗漏和矛盾",
        "区分同一个词的不同业务含义",
        "保存术语定义与重要取舍"
      ],
      "before": "你说“做一个项目管理工具”，但项目、任务、完成的含义都不明确。",
      "after": "明确管理对象、谁能做什么、怎样算完成，并保留这些定义与重要理由。",
      "deliverable": "需求共识、词汇表与决策记录",
      "boundary": "不会直接替代完整规格，也不自动交付应用。"
    },
    {
      "name": "prototype",
      "title_zh": "用于回答设计问题的原型",
      "category": "engineering",
      "included_in_plugin": true,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/prototype/SKILL.md",
      "domain": "研究与原型",
      "summary": "把难以想象的逻辑或界面，变成可以点、可以比较的具体样本。",
      "abilities": [
        "演示状态如何随操作变化",
        "制作不同界面方向供比较",
        "从体验中提炼可用于正式实现的设计结论"
      ],
      "before": "不确定筛选条件应该放侧栏还是放列表上方。",
      "after": "得到可切换的界面样本，能直接比较操作路径、信息密度和筛选后的结果。",
      "deliverable": "可操作原型与设计结论",
      "boundary": "原型默认少做持久化、测试和异常处理，不能直接当作完整产品。"
    },
    {
      "name": "to-tickets",
      "title_zh": "可验收任务拆分",
      "category": "engineering",
      "included_in_plugin": true,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/to-tickets/SKILL.md",
      "domain": "协作与交付",
      "summary": "把一份大方案，变成有先后关系、每项都能验收的小成果。",
      "abilities": [
        "拆出完整的用户行为",
        "写清每项任务的验收条件",
        "标明哪些任务必须等待其他任务"
      ],
      "before": "“做搜索、筛选、详情、导出”混在一个大任务里。",
      "after": "拆成可以分别演示的任务，每项说明做到什么程度，以及依赖哪一项。",
      "deliverable": "可验收的任务与依赖关系",
      "boundary": "负责拆分任务，不负责自动排期或保证任务按时完成。"
    },
    {
      "name": "tdd",
      "title_zh": "以行为为中心的测试驱动",
      "category": "engineering",
      "included_in_plugin": true,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/tdd/SKILL.md",
      "domain": "开发与质量",
      "summary": "把预期行为变成会失败、也会通过的检查，再用检查约束实现。",
      "abilities": [
        "把业务预期写成行为测试",
        "证明缺少功能时检查确实失败",
        "验证最小实现满足约定行为"
      ],
      "before": "标签筛选的规则只有一句话，改动后经常出现回归。",
      "after": "“选择 A 和 B 时返回什么”的规则有可重复执行的检查，改坏后能发现。",
      "deliverable": "行为测试与对应实现",
      "boundary": "测试只能覆盖被明确写出的规则，不能保证产品没有其他错误。"
    },
    {
      "name": "code-review",
      "title_zh": "规范与需求双维审查",
      "category": "engineering",
      "included_in_plugin": true,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/code-review/SKILL.md",
      "domain": "开发与质量",
      "summary": "从“写得是否合规”和“做得是否符合需求”两个角度检查变更。",
      "abilities": [
        "定位违反项目规范的地方",
        "发现遗漏需求或擅自扩大范围",
        "为问题附上变更位置与规格依据"
      ],
      "before": "功能看起来能运行，但不确定遗漏了哪些要求。",
      "after": "得到分别针对代码规范和需求符合度的问题清单，能追溯到具体改动。",
      "deliverable": "规范审查与需求审查报告",
      "boundary": "没有规格就无法完整检查需求；未提交内容需明确纳入审查范围。"
    },
    {
      "name": "ask-matt",
      "title_zh": "技能导航与流程选择",
      "category": "engineering",
      "included_in_plugin": true,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/ask-matt/SKILL.md",
      "domain": "协作与交付",
      "summary": "判断当前任务卡在哪个阶段，给出合适的处理路线。",
      "abilities": [
        "识别是需求、知识还是实现问题",
        "推荐最少必要的技能组合",
        "解释何时适合继续、拆分或交接"
      ],
      "before": "你既有一个大想法，又不清楚还有多少未知问题。",
      "after": "得到先研究、先验证设计还是直接拆任务的建议，并知道为什么。",
      "deliverable": "任务路线与选择理由",
      "boundary": "它提供导航建议，本身不完成研究或开发成果。"
    },
    {
      "name": "setup-matt-pocock-skills",
      "title_zh": "项目首次配置",
      "category": "engineering",
      "included_in_plugin": true,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/setup-matt-pocock-skills/SKILL.md",
      "domain": "协作与交付",
      "summary": "把项目里的任务、术语和决策放到明确的位置，让其他技能按同一约定工作。",
      "abilities": [
        "识别现有项目约定",
        "统一任务位置与状态含义",
        "建立后续读取这些约定的文档入口"
      ],
      "before": "任务散在聊天、本地文件和平台里，代理不知道以哪里为准。",
      "after": "项目有清楚的任务来源、标签定义和领域文档位置。",
      "deliverable": "一致的项目协作约定",
      "boundary": "属于项目配置能力，不会自动连接所有外部平台或迁移已有任务。"
    },
    {
      "name": "triage",
      "title_zh": "需求与问题分诊",
      "category": "engineering",
      "included_in_plugin": true,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/triage/SKILL.md",
      "domain": "协作与交付",
      "summary": "把未经整理的反馈，分成可实施、待补信息、需人工判断或不采用的事项。",
      "abilities": [
        "检查反馈是否真实且尚未解决",
        "归类并说明当前处理状态",
        "把足够明确的请求整理成实施简报"
      ],
      "before": "收到“搜索很慢”“增加导出”“权限不对”等杂乱反馈。",
      "after": "每条反馈都有已核实事实、当前状态和明确下一步，能执行的有任务简报。",
      "deliverable": "反馈队列、分类结论与任务简报",
      "boundary": "分诊不是实现；部分动作会更新外部条目或关闭问题。"
    },
    {
      "name": "improve-codebase-architecture",
      "title_zh": "架构改进候选分析",
      "category": "engineering",
      "included_in_plugin": true,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/improve-codebase-architecture/SKILL.md",
      "domain": "开发与质量",
      "summary": "找出代码中最值得改进的结构问题，并用前后对比解释收益。",
      "abilities": [
        "定位修改频繁且难以理解的区域",
        "识别职责分散和难以测试的问题",
        "给出有优先级的改进候选"
      ],
      "before": "改一个导入规则需要在六个文件之间跳转。",
      "after": "得到结构对比报告，解释哪些职责可以集中、会减少哪些修改与测试负担。",
      "deliverable": "可视化架构报告与改进候选",
      "boundary": "交付的是分析与设计候选，不能把报告当作重构已经完成。"
    },
    {
      "name": "to-spec",
      "title_zh": "将讨论整理成规格",
      "category": "engineering",
      "included_in_plugin": true,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/to-spec/SKILL.md",
      "domain": "需求与决策",
      "summary": "把已经讨论清楚的方案，整理成实现者能据此工作、验收者能据此检查的规格。",
      "abilities": [
        "说明问题、目标和用户故事",
        "记录已确定的实现及测试决策",
        "明确哪些内容不在本次范围"
      ],
      "before": "讨论里已有很多共识，但缺少一份统一的功能说明。",
      "after": "得到搜索功能的用户需求、结果规则、测试范围和明确不做的事项。",
      "deliverable": "可用于实施与验收的规格",
      "boundary": "擅长整理已知共识，不能替你自动补出尚未确定的业务决定。"
    },
    {
      "name": "implement",
      "title_zh": "按规格实施",
      "category": "engineering",
      "included_in_plugin": true,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/implement/SKILL.md",
      "domain": "开发与质量",
      "summary": "把明确的规格或任务，落实为经过检查的代码变更。",
      "abilities": [
        "实现约定的功能行为",
        "运行适用的类型检查和测试",
        "汇总审查结果并保存代码成果"
      ],
      "before": "已有清楚的项目名称搜索任务，但还没有实现。",
      "after": "得到能够搜索的功能、对应验证结果和可追踪的代码修改。",
      "deliverable": "功能实现、测试和提交",
      "boundary": "结果取决于规格与执行环境；本身不是一键完成任意产品的保证。"
    },
    {
      "name": "wayfinder",
      "title_zh": "大型不确定任务的决策地图",
      "category": "engineering",
      "included_in_plugin": true,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/wayfinder/SKILL.md",
      "domain": "需求与决策",
      "summary": "把一次会话想不清楚的大项目，整理成逐步可解决的决策地图。",
      "abilities": [
        "明确这个阶段的终点",
        "找出已能描述的关键未知问题",
        "保存每项结论并更新剩余问题"
      ],
      "before": "想做个人知识平台，但数据保存、搜索、同步和维护都没有定。",
      "after": "得到相互关联的决策问题，逐步明确路线，并能跨会话接着解决。",
      "deliverable": "决策地图与可追溯的取舍",
      "boundary": "默认推进的是决策清晰度，不是直接开发整个平台。"
    },
    {
      "name": "diagnosing-bugs",
      "title_zh": "基于复现的故障诊断",
      "category": "engineering",
      "included_in_plugin": true,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/diagnosing-bugs/SKILL.md",
      "domain": "开发与质量",
      "summary": "把“好像哪里不对”，转化成可以复现、定位和验证修复的问题。",
      "abilities": [
        "建立能捕获具体症状的复现",
        "缩小范围并检验可能原因",
        "保留修复前后证据和回归保护"
      ],
      "before": "刷新页面后筛选条件偶尔丢失，反复修改仍没解决。",
      "after": "找出何时丢失、是哪段行为导致，并证明修复后原场景恢复正常。",
      "deliverable": "原因证据、修复与回归验证",
      "boundary": "没有可用的复现环境或样本时，不能凭空证明原因。"
    },
    {
      "name": "domain-modeling",
      "title_zh": "业务术语与决策记录",
      "category": "engineering",
      "included_in_plugin": true,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/domain-modeling/SKILL.md",
      "domain": "需求与决策",
      "summary": "澄清业务世界中的对象、关系和规则，让不同人和会话说的是同一件事。",
      "abilities": [
        "区分容易混淆的业务概念",
        "用边界案例检验定义",
        "记录术语和重要决策理由"
      ],
      "before": "“已完成”有时表示文档写完，有时表示程序测试通过。",
      "after": "明确“研究完成”“运行已验证”“已经部署”是三个不同状态。",
      "deliverable": "业务词汇表与重要决策记录",
      "boundary": "这里的建模主要是概念澄清，不等于自动设计数据库或生成所有代码。"
    },
    {
      "name": "codebase-design",
      "title_zh": "模块接口设计准则",
      "category": "engineering",
      "included_in_plugin": true,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/codebase-design/SKILL.md",
      "domain": "开发与质量",
      "summary": "设计更容易使用、修改和测试的模块接口，把复杂性放到合适的位置。",
      "abilities": [
        "审视调用者需要知道多少细节",
        "比较不同模块划分和接口形状",
        "选择能够观察真实行为的测试位置"
      ],
      "before": "读取项目资料需要调用者知道目录、命名和解析细节。",
      "after": "提出一个更清楚的读取接口，内部处理细节集中起来，调用与测试更简单。",
      "deliverable": "模块接口与设计取舍建议",
      "boundary": "提供设计判断和参考，不会自动证明某种架构最优。"
    },
    {
      "name": "resolving-merge-conflicts",
      "title_zh": "按原始意图解决合并冲突",
      "category": "engineering",
      "included_in_plugin": true,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/resolving-merge-conflicts/SKILL.md",
      "domain": "协作与交付",
      "summary": "理解冲突双方原本想实现的行为，再把这些意图协调成可工作的代码。",
      "abilities": [
        "追溯两边变更的理由",
        "逐块解决相互重叠的修改",
        "检查整合后的行为并完成合并过程"
      ],
      "before": "一边增加筛选字段，另一边调整相同数据结构。",
      "after": "得到尽量保留两边目标的整合结果，并检查相关功能是否还能工作。",
      "deliverable": "冲突解决与整合后的代码",
      "boundary": "遇到真正互斥的需求仍需取舍；不是机械地保留所有文本。"
    },
    {
      "name": "wizard",
      "title_zh": "需要人工步骤的交互向导",
      "category": "engineering",
      "included_in_plugin": true,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/wizard/SKILL.md",
      "domain": "协作与交付",
      "summary": "把必须由人操作的复杂配置流程，变成一步一步可执行的向导。",
      "abilities": [
        "梳理人工步骤及先后关系",
        "说明每个值从哪里取得、保存到哪里",
        "生成分阶段确认和隐藏敏感输入的交互"
      ],
      "before": "配置外部服务需要反复打开后台、复制值、填入项目。",
      "after": "得到按步骤推进的向导，清楚展示当前任务和剩余阶段。",
      "deliverable": "人工配置或迁移的交互向导",
      "boundary": "不能替你取得账号权限或跳过必须人工完成的决定。"
    },
    {
      "name": "grill-me",
      "title_zh": "通用想法澄清",
      "category": "productivity",
      "included_in_plugin": true,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/productivity/grill-me/SKILL.md",
      "domain": "需求与决策",
      "summary": "通过有针对性的追问，找出一个想法中没有想清楚的前提和取舍。",
      "abilities": [
        "识别目标和限制",
        "揭示隐含假设",
        "把大问题变成可回答的选择"
      ],
      "before": "你想每周研究一个新工具，但不知道怎样才算值得。",
      "after": "明确研究目的、投入上限、筛选标准和停止条件。",
      "deliverable": "更清楚的计划与共同理解",
      "boundary": "通常把结果留在对话中，不自动形成项目词汇表或完整规格。"
    },
    {
      "name": "grilling",
      "title_zh": "可复用的决策追问方法",
      "category": "productivity",
      "included_in_plugin": true,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/productivity/grilling/SKILL.md",
      "domain": "需求与决策",
      "summary": "把相互依赖的问题按逻辑顺序组织起来，让讨论逐步收敛。",
      "abilities": [
        "找出当前能够决定的问题",
        "区分事实调查与人的选择",
        "根据答案形成下一轮问题"
      ],
      "before": "同时讨论展示方式、用户对象和数据来源，越聊越散。",
      "after": "先确定服务谁，再讨论需要展示什么，最后解决依赖这些答案的细节。",
      "deliverable": "有顺序的决策澄清",
      "boundary": "它是追问方法本身；grill-me 和 grill-with-docs 是不同的组织入口。"
    },
    {
      "name": "handoff",
      "title_zh": "可携带的会话交接",
      "category": "productivity",
      "included_in_plugin": true,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/productivity/handoff/SKILL.md",
      "domain": "协作与交付",
      "summary": "把当前进展浓缩成别人能够接手的材料，保留目标、结论和下一步。",
      "abilities": [
        "提炼当前进度与未解决问题",
        "链接已有规格、成果和证据",
        "说明接手后应先处理什么"
      ],
      "before": "准备换个会话继续研究，又不想重述全部背景。",
      "after": "一份交接文档告诉接手者已经核对了哪些能力、证据在哪、还差什么。",
      "deliverable": "可携带的交接文档",
      "boundary": "是有损摘要，不是完整永久记忆，也不会自动开启新任务。"
    },
    {
      "name": "teach",
      "title_zh": "持续学习工作区",
      "category": "productivity",
      "included_in_plugin": true,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/productivity/teach/SKILL.md",
      "domain": "学习与写作",
      "summary": "围绕你的真实目标，持续制作短课、练习和可复习的参考资料。",
      "abilities": [
        "按已有理解设计下一项学习内容",
        "把知识转成可练习的小任务",
        "记录学习进度与关键收获"
      ],
      "before": "看过很多技能介绍，但还不会判断一个技能是否可靠。",
      "after": "得到针对来源判断、能力边界和验证方法的短课、练习及复习资料。",
      "deliverable": "学习课程、参考页与学习记录",
      "boundary": "交付学习材料和反馈过程，不保证掌握程度或特定学习速度。"
    },
    {
      "name": "to-questionnaire",
      "title_zh": "向他人收集信息的问卷",
      "category": "productivity",
      "included_in_plugin": true,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/productivity/to-questionnaire/SKILL.md",
      "domain": "需求与决策",
      "summary": "把你缺少、而别人掌握的信息，整理成对方能够回答的问卷。",
      "abilities": [
        "明确谁掌握哪些信息",
        "围绕下一项决定组织问题",
        "提供背景和便于作答的位置"
      ],
      "before": "需要资料提供者确认哪些内容允许公开，但不知道怎样问全。",
      "after": "得到一份围绕授权范围、例外和引用要求的清楚问卷。",
      "deliverable": "面向指定对象的信息收集问卷",
      "boundary": "只整理问题，不自动发送、催办或保证得到完整答案。"
    },
    {
      "name": "wait-what",
      "title_zh": "把刚才的解释重新讲清楚",
      "category": "productivity",
      "included_in_plugin": true,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/productivity/wait-what/SKILL.md",
      "domain": "学习与写作",
      "summary": "把没有讲明白的解释重新组织，让读者先理解背景再理解结论。",
      "abilities": [
        "补足被省略的上下文",
        "减少不必要的技术表达",
        "沿用读者已经理解的概念"
      ],
      "before": "你没听懂为什么要区分模块接口与内部实现。",
      "after": "通过一个资料读取的例子，重新解释谁使用它、哪些细节应隐藏。",
      "deliverable": "更易理解的解释",
      "boundary": "重述不等于重新研究事实；原技能偏向简化英语，中文表达需按语境适配。"
    },
    {
      "name": "writing-for-agents",
      "title_zh": "面向 AI 的指令文档设计",
      "category": "productivity",
      "included_in_plugin": true,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/productivity/writing-for-agents/SKILL.md",
      "domain": "学习与写作",
      "summary": "把对 AI 的零散要求，组织为容易发现、执行和维护的指令文档。",
      "abilities": [
        "明确规则适用范围",
        "把步骤与参考内容分开",
        "用可检查的条件定义完成"
      ],
      "before": "项目规范只写“全面研究”，每次完成程度都不一样。",
      "after": "把要求细化为清单覆盖、来源证据、未验证范围与索引更新等明确标准。",
      "deliverable": "更清楚的 AI 指令与文档结构",
      "boundary": "改善的是指令设计；可靠性提升仍需要真实任务检验。"
    },
    {
      "name": "loop-me",
      "title_zh": "重复工作流程规格化",
      "category": "in-progress",
      "included_in_plugin": false,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/loop-me/SKILL.md",
      "domain": "需求与决策",
      "summary": "从重复工作中提炼可交给自动化实现的流程规格。",
      "abilities": [
        "发现反复出现的工作模式",
        "明确触发、输入和预期输出",
        "找出真正需要人工决定的环节"
      ],
      "before": "每周手动整理新研究的项目并补充总索引。",
      "after": "形成何时整理、怎样筛选、生成什么摘要和何时询问你的流程说明。",
      "deliverable": "可实施的重复工作流程规格",
      "boundary": "实验能力；不会仅凭这份规格自动建立定时任务。"
    },
    {
      "name": "writing-fragments",
      "title_zh": "写作素材采集",
      "category": "in-progress",
      "included_in_plugin": false,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/writing-fragments/SKILL.md",
      "domain": "学习与写作",
      "summary": "将聊天里的观点、经历和好例子保存成以后可以写文章的素材。",
      "abilities": [
        "挖掘具体经历与观点",
        "捕捉有价值的句子和案例",
        "持续积累而不急于安排结构"
      ],
      "before": "关于 AI 研究项目有很多零散感受，但很快忘记。",
      "after": "得到一份包含失败案例、判断和观察的素材集，留待之后组织文章。",
      "deliverable": "原始写作素材集",
      "boundary": "实验能力；素材没有完整论证结构，也不是可直接发布的文章。"
    },
    {
      "name": "writing-shape",
      "title_zh": "逐段组织文章",
      "category": "in-progress",
      "included_in_plugin": false,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/writing-shape/SKILL.md",
      "domain": "学习与写作",
      "summary": "把已有素材组织成论点清楚、段落连接自然的文章。",
      "abilities": [
        "确定读者需要的前提",
        "选择文章角度与开头",
        "让每个段落承担明确作用"
      ],
      "before": "素材很多，但文章读起来像笔记堆积。",
      "after": "形成先讲问题、再解释方法、最后给出判断的完整文章。",
      "deliverable": "由原始素材形成的独立文章",
      "boundary": "实验能力；需要已有素材，不能自动补造缺失的事实或经历。"
    },
    {
      "name": "writing-beats",
      "title_zh": "按叙事推进单元写作",
      "category": "in-progress",
      "included_in_plugin": false,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/writing-beats/SKILL.md",
      "domain": "学习与写作",
      "summary": "设计文章的阅读路线，让每一步都为下一步理解作好铺垫。",
      "abilities": [
        "提出不同叙事起点",
        "控制每次推进的概念",
        "选择下一段该转向哪里"
      ],
      "before": "直接解释技术原理让读者失去兴趣，想从一个故事展开。",
      "after": "先呈现一次失败，再让读者理解需求误差，最后引出验证方法。",
      "deliverable": "按叙事推进组织的文章",
      "boundary": "实验能力；更强调逐步选择阅读路线，与一次性全文写作不同。"
    },
    {
      "name": "claude-handoff",
      "title_zh": "启动 Claude 后台交接任务",
      "category": "in-progress",
      "included_in_plugin": false,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/claude-handoff/SKILL.md",
      "domain": "协作与交付",
      "summary": "把当前进展交给一个立即开始工作的 Claude 后台任务。",
      "abilities": [
        "提炼接手所需的上下文",
        "附上成果与证据位置",
        "将摘要交给新的后台执行者"
      ],
      "before": "希望把已经明确的后续工作转交给一个新的 Claude 任务继续。",
      "after": "新任务拿到目标、背景和下一步并开始处理。",
      "deliverable": "带交接上下文的 Claude 后台任务",
      "boundary": "实验且依赖 Claude 对应能力，不等同于 Codex 的后台聊天能力。"
    },
    {
      "name": "setup-ts-deep-modules",
      "title_zh": "TypeScript 模块边界检查",
      "category": "in-progress",
      "included_in_plugin": false,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/setup-ts-deep-modules/SKILL.md",
      "domain": "开发与质量",
      "summary": "把 TypeScript 模块的访问边界，变成违规时会失败的自动检查。",
      "abilities": [
        "限制包外代码绕过公开入口",
        "约束测试通过公开行为访问模块",
        "发现循环依赖并验证规则有效"
      ],
      "before": "其他模块直接引用内部文件，改动内部结构就到处报错。",
      "after": "公开入口与内部实现被区分，跨越边界的引用可以被检查发现。",
      "deliverable": "模块边界规则与自动检查",
      "boundary": "实验能力；可以约束依赖路径，不能独自保证业务架构合理。"
    },
    {
      "name": "implement-spec",
      "title_zh": "多代理实施完整规格",
      "category": "in-progress",
      "included_in_plugin": false,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/implement-spec/SKILL.md",
      "domain": "开发与质量",
      "summary": "把带依赖的整份开发任务交给多个执行者，最后整合为一份完整变更。",
      "abilities": [
        "识别哪些任务已经可以开始",
        "在隔离环境中推进多个实现",
        "汇总改动、审查并形成 PR"
      ],
      "before": "一个完整功能由多个可分开的任务组成，逐个等待太慢。",
      "after": "可同时推进的部分并行完成，最终整合到一个分支和 PR。",
      "deliverable": "整份规格的集成实现与 PR",
      "boundary": "实验能力；并行会增加整合成本，不能保证一定更快。"
    },
    {
      "name": "pr",
      "title_zh": "面向证据的 PR 正文",
      "category": "in-progress",
      "included_in_plugin": false,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/pr/SKILL.md",
      "domain": "协作与交付",
      "summary": "把代码变更的重点、有效性证据和影响范围，整理成容易审阅的说明。",
      "abilities": [
        "选择最清楚的结构或流程图示",
        "呈现修改前后的真实差别",
        "解释变更是否容易回退以及影响哪里"
      ],
      "before": "PR 里只有“完成搜索功能”，别人很难判断是否可以合并。",
      "after": "正文能看出新增了什么、前后检查结果是什么、可能影响哪些行为。",
      "deliverable": "以证据为中心的 PR 正文",
      "boundary": "实验能力；组织已有证据，不能编造缺失的测试或截图。"
    },
    {
      "name": "retro",
      "title_zh": "会话复盘与环境改进",
      "category": "in-progress",
      "included_in_plugin": false,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/retro/SKILL.md",
      "domain": "协作与交付",
      "summary": "回看一次 AI 工作中的问题，提出能改善以后任务的环境调整。",
      "abilities": [
        "找出找资料、检查和工具使用的反复障碍",
        "区分机器可检查的规则与判断性规范",
        "按影响程度整理改进候选"
      ],
      "before": "每次研究都漏掉实验目录，每次都要再提醒。",
      "after": "建议把全量目录枚举放进完成检查，而不是只增加一句“要全面”。",
      "deliverable": "针对协作环境的复盘建议",
      "boundary": "实验目录与正文的成熟度描述不一致，本次未实测。"
    },
    {
      "name": "git-guardrails-claude-code",
      "title_zh": "Claude Git 操作拦截",
      "category": "misc",
      "included_in_plugin": false,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/misc/git-guardrails-claude-code/SKILL.md",
      "domain": "专项工具",
      "summary": "在 Claude 执行前拦截指定的 Git 操作模式。",
      "abilities": [
        "识别指定的推送和破坏性操作",
        "通过执行前钩子阻止命令",
        "按项目或个人范围配置拦截"
      ],
      "before": "希望 Claude 不会直接执行推送或清理工作区的指定命令。",
      "after": "匹配规则的命令会被阻止，并给出拦截信息。",
      "deliverable": "Claude 专用 Git 拦截规则",
      "boundary": "模式拦截不能覆盖所有危险行为，也不是 Codex 权限系统。"
    },
    {
      "name": "migrate-to-shoehorn",
      "title_zh": "TypeScript 测试数据迁移",
      "category": "misc",
      "included_in_plugin": false,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/misc/migrate-to-shoehorn/SKILL.md",
      "domain": "专项工具",
      "summary": "简化 TypeScript 测试中的样例对象构造与类型断言。",
      "abilities": [
        "为测试构造只包含必要字段的数据",
        "替换适用的强制类型断言",
        "保留故意错误输入的测试意图"
      ],
      "before": "测试只关心一个字段，却需要伪造一个有二十个字段的对象。",
      "after": "测试样例更聚焦相关字段，重复构造代码减少。",
      "deliverable": "更简洁的 TypeScript 测试数据",
      "boundary": "仅针对测试数据，不是运行时校验，也不能普遍替换生产代码。"
    },
    {
      "name": "scaffold-exercises",
      "title_zh": "课程练习目录脚手架",
      "category": "misc",
      "included_in_plugin": false,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/misc/scaffold-exercises/SKILL.md",
      "domain": "专项工具",
      "summary": "按课程约定批量建立章节、习题、题目、答案与讲解目录。",
      "abilities": [
        "把课程计划转成编号结构",
        "生成有内容的说明文件",
        "按作者的课程规则检查结构"
      ],
      "before": "已有三章课程大纲，需要准备每个练习的学生区和答案区。",
      "after": "得到一致编号的目录和说明文件，便于继续编写教学内容。",
      "deliverable": "课程练习目录脚手架",
      "boundary": "依赖特定课程规范与检查工具，不等于生成完整课程内容。"
    },
    {
      "name": "setup-pre-commit",
      "title_zh": "提交前自动检查",
      "category": "misc",
      "included_in_plugin": false,
      "source_url": "https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/misc/setup-pre-commit/SKILL.md",
      "domain": "专项工具",
      "summary": "把格式、类型和测试等检查放到提交环节，提前发现机械性错误。",
      "abilities": [
        "整理提交前格式化",
        "接入项目已有的类型检查",
        "接入项目已有的测试命令"
      ],
      "before": "经常提交后才发现格式不一致或类型错误。",
      "after": "提交时就运行适用检查，尽早暴露可以自动发现的问题。",
      "deliverable": "提交前质量检查",
      "boundary": "不会自动创造缺失的测试，也不替代持续集成和业务验收。"
    }
  ],
  "scenarios": [
    {
      "id": "research",
      "title": "拿到一个仓库，判断与自己有没有关系",
      "tag": "与你当前的工作直接相关",
      "summary": "用这次 mattpocock/skills 研究，展示“看介绍”怎样变成“有依据地选择”。",
      "context": "你拿到一个 GitHub 链接。首页介绍很丰富，但你真正关心的是：它解决我的哪类问题？需要写代码吗？哪些内容值得继续看？",
      "input": "已知材料：仓库链接、首页介绍。\n你的目标：判断是否值得深入，不想先学安装和调用。\n缺少的信息：完整能力范围、实际成果、与你的任务的对应关系。",
      "fit": "你准备为一个工具投入学习时间，或需要向别人解释选型理由时。",
      "skip": "只想知道一句话定义，且后续不会据此做决定时，普通问答通常就够了。",
      "evidence": "事实基于本项目已核对的固定版本；下面的推进过程与文档样张为教学重组，不是上游技能执行日志。",
      "outcome": "一页可复查的能力判断：哪些值得看、哪些暂时跳过、依据在哪里。",
      "steps": [
        {
          "title": "先把“值得研究”说清楚",
          "skills": [
            "grill-me"
          ],
          "why": "否则回答容易变成把所有功能都介绍一遍，却没有回答你是否需要。",
          "actions": [
            "把笼统的“这个库好不好”收敛到一个决定。",
            "区分你的真实任务与仓库擅长的任务。"
          ],
          "artifactTitle": "示例：研究问题与取舍",
          "artifact": "本次要决定：哪些能力值得用在我的开源项目研究里？\n\n优先看：来源核实、成果展示、知识解释、跨会话交接。\n暂时跳过：Git 冲突、TypeScript 测试迁移、课程目录搭建。\n完成标准：每个优先能力都能说明一个输入、一个成果和一个限制。\n\n这里的优先级是针对当前任务的判断，不是上游的技能排名。",
          "check": "能说出研究结束后要作出的决定，而不是只说“全面了解”。"
        },
        {
          "title": "核对能力范围与证据",
          "skills": [
            "research"
          ],
          "why": "首页概述与完整目录可能不一致，结论需要对应到具体版本和文件。",
          "actions": [
            "枚举技能入口，对照正式插件清单。",
            "将事实、解释和未验证的部分分开保存。"
          ],
          "artifactTitle": "示例：带依据的结论摘录",
          "artifact": "研究版本：c55ee460\n\n事实 A：全仓库有 38 个 SKILL.md。\n事实 B：正式插件收录 25 个；另外 9 个实验、4 个专项。\n事实 C：research 强调第一手来源；handoff 交付接手所需的上下文。\n\n对我的判断：先看 research、handoff、teach；需要做页面时再看 prototype。\n未验证：没有安装上游技能，没有测量节省多少时间。\n证据入口：技能正文、插件清单和本项目来源清单。",
          "check": "事实能追溯来源；“适合我”作为判断单独呈现。"
        },
        {
          "title": "避免把“研究完”写成“验证过”",
          "skills": [
            "domain-modeling"
          ],
          "why": "同一个“完成”如果有不同含义，后续很容易误判资料的可信范围。",
          "actions": [
            "为相似状态给出清楚定义。",
            "用一个反例检验定义是否真的能区分。"
          ],
          "artifactTitle": "示例：项目状态词汇表",
          "artifact": "研究完成：已阅读、汇总并核对能力与来源。\n运行已验证：已在具体环境中执行并保存结果。\n已发布：网页已经可从公开地址访问。\n\n当前示例：研究完成；网页本地可浏览；上游技能未运行验证。\n反例：有一张网页截图，只能证明页面渲染，不能证明 38 个技能都运行成功。",
          "check": "看到一个状态就能知道已完成什么、还不能声称什么。"
        }
      ]
    },
    {
      "id": "website",
      "title": "“我想要一个网页”，怎样变成可验收的成果",
      "tag": "需要展示资料时",
      "summary": "从一句模糊要求，到需求共识、可操作样本和开发任务。",
      "context": "你有三条工具研究笔记，想做一个方便查看的网页。你不想参与实现细节，但需要确认做出来能解决问题。",
      "input": "原始想法：把这些工具做成一个好看、好用的网页。\n样例资料：线索台（研究）/ 灵感簿（写作）/ 练习卡（学习）。\n尚未确定：谁来用、怎样查找、什么算做好。",
      "fit": "同一个想法需要经历讨论、实现、验收，或者你已经遇到过“做出来不是我想要的”。",
      "skip": "只改一个标题或颜色，没有范围与验收分歧时，不必走完整流程。",
      "evidence": "这是缩小后的虚构项目；下面可操作的三条数据用于展示原型与验收的关系。",
      "outcome": "你能看到并判断页面行为，再把共识交给实现者。",
      "steps": [
        {
          "title": "把模糊要求变成共同理解",
          "skills": [
            "grill-with-docs"
          ],
          "why": "“好用”不能直接验收；要先知道你实际会怎样找资料。",
          "actions": [
            "围绕查找资料的任务澄清目标。",
            "把已经确定的取舍保存下来，避免下次重新解释。"
          ],
          "artifactTitle": "示例：已确认的需求",
          "artifact": "使用者：我自己，偶尔给同事查看。\n常见动作：按名称或简介找工具；区分研究、写作、学习。\n重要取舍：先把能力与成果讲清楚，再追求视觉丰富。\n本次范围：浏览、搜索、分类、无结果提示。\n暂不做：账号登录、自动抓取、多人编辑。",
          "check": "另一位接手者能解释目标和范围，不需要猜“好用”是什么意思。"
        },
        {
          "title": "把讨论写成可以判断对错的规格",
          "skills": [
            "to-spec"
          ],
          "why": "讨论结论需要变成明确行为，否则“已实现”可能只代表页面上有一个搜索框。",
          "actions": [
            "综合已有共识，不重新发起整轮需求采访。",
            "写出用户故事、实现决策、测试边界和范围外事项。"
          ],
          "artifactTitle": "示例：功能规格摘录",
          "artifact": "用户故事：我想用“写作”找到名称中没有这个词、但简介包含它的工具。\n\n约定行为：\n1. 搜索范围包括名称与简介。\n2. 分类和关键词同时生效。\n3. 清空条件后恢复全部 3 项。\n4. 无匹配时显示说明和重置入口。\n\n验证位置：通过页面操作检查显示结果。\n范围外：联网推荐、个性化排序、账户同步。",
          "check": "用“写作”搜索时，能确定应该出现哪条，而不是只看搜索框能否输入。"
        },
        {
          "title": "先亲手试一下再决定",
          "skills": [
            "prototype"
          ],
          "why": "操作样本能暴露口头讨论中看不出的查找体验。",
          "actions": [
            "用少量固定数据演示关键交互。",
            "把试用后确认的行为反馈到规格中。"
          ],
          "artifactTitle": "示例：原型确认记录",
          "artifact": "请在下方样本中搜索“写作”，再切换到“研究”分类。\n\n应观察到：\n• 全部分类下找到“灵感簿”，因为简介包含“写作”。\n• 研究分类下没有匹配项，说明两个条件同时生效。\n• 重置后恢复 3 项。\n\n本阶段只确认操作与规则，不证明正式数据、权限或异常处理已经完备。",
          "check": "能根据亲手操作决定保留什么行为，以及是否需要修改规格。",
          "widget": "prototype"
        },
        {
          "title": "把约定拆成可以交付的任务",
          "skills": [
            "to-tickets",
            "implement"
          ],
          "why": "规格回答“需要什么”，任务拆分与实施才落实到可检查的变更。",
          "actions": [
            "按可验收的成果拆分任务并说明依赖。",
            "实施后运行适用检查、审查变更并汇总结果。"
          ],
          "artifactTitle": "示例：任务与验收记录格式",
          "artifact": "任务 A：展示三个条目的名称、简介与类别。\n验收：三个条目完整显示。\n\n任务 B（依赖 A）：支持名称、简介搜索及类别组合筛选。\n验收：搜索“写作”得到“灵感簿”；加“研究”条件后无匹配。\n\n任务 C（依赖 B）：补齐空结果与重置交互。\n验收：重置恢复 3 项，手机上仍可操作。\n\n正式交付应补充：实际修改位置、检查结果、未完成事项。\n本样张未声称执行了上游实施技能。",
          "check": "每个任务都交出一个能看见的结果，而非只有“完成前端”这样的模糊描述。"
        }
      ]
    },
    {
      "id": "writing",
      "title": "零散观察，整理成别人读得懂的分享",
      "tag": "不用写代码 · 写作技能为实验状态",
      "summary": "看清“积累素材”和“写成文章”的区别。",
      "context": "你研究了这个技能库，记下了几条感受。现在希望向朋友解释：为什么有很多技能，自己却只需要少数几个。",
      "input": "零散材料：\n• 仓库共有 38 个技能。\n• 很多是工程协作相关，我平常不常用。\n• 看了名字仍不知道能得到什么。\n• 具体例子比分类表更容易理解。\n• 这次只做了源码研究，不能声称节省了时间。",
      "fit": "手里有真实观察或材料，但不清楚怎样组织，或者需要反复积累素材时。",
      "skip": "只改一句话或调整语气时，直接编辑即可；没有经历和证据时，不应让它补造。",
      "evidence": "文章样张仅使用上方材料。写作技能在实验目录；这里展示的是成果形态，不是作者原文或真实发布记录。",
      "outcome": "保留真实材料，形成观点明确、可独立阅读的短文。",
      "steps": [
        {
          "title": "先把观察保存成有用的素材",
          "skills": [
            "writing-fragments"
          ],
          "why": "过早写成完整文章，容易把具体观察抹平成泛泛的观点。",
          "actions": [
            "保留实际遇到的困惑和判断。",
            "标出证据与暂时缺少的材料，不急于排序。"
          ],
          "artifactTitle": "示例：素材卡片",
          "artifact": "观察：技能名称不能让我直接想到使用场景。\n具体困难：知道 handoff 是“交接”，仍不清楚换会话时要留下什么。\n转折：看到目标、已完成、证据和下一步的交接样张，就能判断是否有用。\n\n事实：固定版本含 38 个技能。\n观点：选技能可以先从自己的问题出发。\n缺少的证据：实际节省的时间。文章不要写量化收益。",
          "check": "素材中保留了具体困惑与事实，没有先编一个漂亮结论。"
        },
        {
          "title": "选择文章想让读者明白的事",
          "skills": [
            "writing-shape"
          ],
          "why": "把素材逐条罗列还不是文章，需要一个读者能够跟随的观点。",
          "actions": [
            "确定读者已有知识与候选开头。",
            "按每段对读者的作用，逐段组织已有素材。"
          ],
          "artifactTitle": "示例：两个开头与选定结构",
          "artifact": "角度 A：一个技能库有 38 项能力，为什么我只想先看三四项？\n角度 B：我看得懂每个技能的名字，却不知道什么时候会用到。\n\n示例选择 B：从“看懂名称但不会对应任务”的困惑进入。\n第一段：描述困惑。\n第二段：用交接样张说明什么叫具体成果。\n第三段：提出按自己的任务筛选，而非按数量收集。\n收尾：说明尚未实测，保留判断边界。",
          "check": "开头提出的问题，能被后续段落真正回答。"
        },
        {
          "title": "让读者一步步得到结论",
          "skills": [
            "writing-beats"
          ],
          "why": "它是另一种重视逐步叙事的写作方式，可替代或补充文章组织，不是每次必经的第三阶段。",
          "actions": [
            "先落地一个具体困惑，再引入“按成果选择”的概念。",
            "只用已有材料推进，不把示例写成真实验证。"
          ],
          "artifactTitle": "示例：可独立阅读的短文",
          "artifact": "看懂技能名，不等于知道它能帮我做什么\n\n我读这个库时，能理解“研究”“交接”等名称，却仍想不到它们与我的工作有什么关系。38 个技能听起来很多，但其中不少面向我不常做的工程任务。\n\n交接文档的例子让我容易理解了一些：如果换一个会话，只留下“继续研究”，接手者需要重新找背景；如果留下目标、已完成的判断、证据位置和下一步，就有了继续工作的起点。\n\n所以我更愿意先问：现在最容易反复解释、丢失或做错的事情是什么？再看哪个技能能留下对应成果。这样选择，不必把整个库都用起来。\n\n这些判断来自源码研究和说明性例子。我还没有运行上游技能，因此暂不评价它们到底能节省多少时间。",
          "check": "文章能独立读懂，每项事实有材料来源，没有添加不存在的经历或收益。"
        }
      ]
    },
    {
      "id": "handoff",
      "title": "明天换个会话，接着今天的研究",
      "tag": "多次会话都会遇到",
      "summary": "对比一句“继续”与一份能接着工作的交接材料。",
      "context": "这次研究已经有文档和网页。你准备结束会话，之后还希望继续补充实际场景，不想再解释前因后果。",
      "input": "模糊交接：这个库研究好了，网页也做了，后面继续优化。\n问题：研究好了指什么？网页在哪？下一步应该先改什么？",
      "fit": "工作跨天、跨会话或需要别人接手时。",
      "skip": "任务已经彻底结束、没有后续动作时，不一定需要单独交接文档。",
      "evidence": "路径和研究版本来自当前子项目；交接内容是示例摘录，不会自动创建新会话或发送消息。",
      "outcome": "接手者能找到文件，并从明确的一步继续。",
      "steps": [
        {
          "title": "把聊天浓缩成接手需要的信息",
          "skills": [
            "handoff"
          ],
          "why": "完整聊天太长，一句话又丢失信息；交接应保存继续工作所必需的上下文。",
          "actions": [
            "提炼目标、状态、重要决策与未解决问题。",
            "给出资料位置和接手后的第一步。"
          ],
          "artifactTitle": "示例：当前研究的交接摘录",
          "artifact": "目标：让使用者看懂 mattpocock/skills 的具体能力，重点是场景和成果。\n用户偏好：已经知道技能用法，不需要安装教程。\n\n已完成：核对固定版本 38 项技能；制作中文能力目录和静态网页。\n版本：c55ee460；上游技能没有运行验证。\n资料目录：projects/003-mattpocock-skills/\n关键文件：CAPABILITIES.md、SOURCES.md、web/index.html。\n\n下一步：先阅读 scenario-demos.json，核对各场景是否准确对应技能正文。\n验收：用户能从场景看到输入、处理重点、成果和局限。\n不要误写：网页演示可操作，不等于上游技能已执行。",
          "check": "接手者知道先打开什么、继续做什么，以及哪些事情不能当作已验证。"
        },
        {
          "title": "把反复提醒变成可复用的项目要求",
          "skills": [
            "writing-for-agents"
          ],
          "why": "handoff 保存这次进展；指令文档保存每次任务都适用的规则，两者不能互相替代。",
          "actions": [
            "把笼统偏好转成可检查的要求。",
            "限定规则范围，避免把一次任务的临时决定永久化。"
          ],
          "artifactTitle": "示例：研究项目的完成要求",
          "artifact": "适用范围：本研究集新增的技能库分析。\n\n每项能力至少写明：\n• 解决的具体问题；\n• 可以留下的成果；\n• 适用条件与限制；\n• 固定版本来源。\n\n示例必须区分：源码事实、说明性演示、真实执行结果。\n有网页时：检查筛选、详情、手机布局，并更新项目入口。\n完成时：列出未验证事项。\n\n这些是本项目示例规则，不是自动向其他项目生效的全局要求。",
          "check": "规则能够检查，且不会与本次交接中的进度信息混为一谈。"
        }
      ]
    },
    {
      "id": "learning",
      "title": "术语看不懂，用一个小练习理解",
      "tag": "不用写代码 · 适合持续学习",
      "summary": "把解释、练习与可复习的笔记连起来。",
      "context": "你总看到“原型”“实现”“验证”，但不容易判断页面能点了，究竟代表项目完成了多少。",
      "input": "学习目标：看到一项成果，能判断它证明了什么。\n已有理解：知道网页可以交互。\n当前困惑：网页能点，是否就说明系统能正式使用？",
      "fit": "你希望多次学习并积累理解，而不是只查一次术语时。",
      "skip": "只需要一个定义时直接解释即可；一次选择题也不能证明长期掌握。",
      "evidence": "下面的短课与反馈为原创教学样例。答题只影响当前页面，不记录个人学习数据。",
      "outcome": "一个能辨别边界的小知识点，以及下次可以复习的记录。",
      "steps": [
        {
          "title": "围绕一个真实困惑设计短课",
          "skills": [
            "teach"
          ],
          "why": "把一堆术语讲完，不如先让你能做出一个具体判断。",
          "actions": [
            "围绕学习目的选择一个小目标。",
            "把概念说明、练习与复习资料组织在一起。"
          ],
          "artifactTitle": "示例：本节短课",
          "artifact": "本节目标：区分“交互已演示”和“系统已验证”。\n\n原型：先用小样本看看设计与操作是否合适。\n实现：把约定行为接到需要的数据与功能上。\n验证：通过具体检查，说明哪些行为确实符合约定。\n\n小例子：下方三条固定数据能够搜索，只能直接证明这三条样本上的交互；不能证明十万条数据的速度，也不能证明账号权限正确。",
          "check": "能说清一项证据的证明范围，而不是只记住三个名词。",
          "widget": "quiz"
        },
        {
          "title": "仍不明白时换一个解释起点",
          "skills": [
            "wait-what"
          ],
          "why": "重述可以补上读者缺少的前提；它本身不会替你重新核实事实。",
          "actions": [
            "从已经能理解的例子开始，补足省略的背景。",
            "用更少术语把区别重新讲清楚。"
          ],
          "artifactTitle": "示例：换一种说法",
          "artifact": "把原型想成先摆出来试走的展台：你能检查入口好不好找、卡片是否看得清。\n\n但试走展台，并不意味着仓库里的所有货已经接好、付款系统也已经验证。\n\n同样，眼前的搜索样本能帮你决定“这种查找方式是否顺手”。要判断正式项目完成了没有，还得对照真正的数据、功能范围和验收结果。\n\n这里按中文语境重述；原技能偏向用更简单的英语解释。",
          "check": "能用自己的话说明“这个演示证明了什么、还没证明什么”。"
        },
        {
          "title": "为下次学习留下明确起点",
          "skills": [
            "teach"
          ],
          "why": "下次从真实困惑继续，比每次重新上一遍入门课更有针对性。",
          "actions": [
            "保留关键收获和仍待检验的问题。",
            "把简明参考资料与学习记录分开。"
          ],
          "artifactTitle": "示例：复习卡与学习记录模板",
          "artifact": "复习卡：\n看到成果时，先问三件事：输入是什么？观察到什么？还能推断到哪里？\n\n学习记录（待实际回答后填写）：\n• 我对原型的解释：____\n• 我原先误以为它能证明：____\n• 我现在仍分不清：____\n• 下次练习：判断一份测试截图能否证明整个系统没问题。\n\n未作答前，不填写“已掌握”。",
          "check": "记录反映真实回答，不会因为翻过一页就宣布掌握。"
        }
      ]
    },
    {
      "id": "bug",
      "title": "搜索明明有资料，为什么显示零条",
      "tag": "遇到网页问题时再看",
      "summary": "在一个刻意设置的小故障里，观察复现、定位、修复和检查的区别。",
      "context": "资料“灵感簿”的简介包含“写作”，但搜“写作”找不到。你只想问题被修好，不想靠反复碰运气改代码。",
      "input": "预期：按名称或简介搜索。\n样本：名称“灵感簿”；简介“整理写作素材”。\n观察：输入“写作”返回 0 项；输入“灵感”却能找到。",
      "fit": "可以复现的问题、修完又坏的问题，或需要给修复留下证据时。",
      "skip": "如果行为本身还没约定，先确认需求；不能把所有不满意的结果都判断为程序错误。",
      "evidence": "故障被刻意放在下方独立样本中，不是当前网页目录的真实缺陷。切换按钮仅切换样本搜索规则。",
      "outcome": "从“找不到”变成一条清楚的原因、一项最小修复和可以重复的验证。",
      "steps": [
        {
          "title": "先让问题稳定出现",
          "skills": [
            "diagnosing-bugs"
          ],
          "why": "只有“搜不到”这句描述，无法分清数据缺失、筛选限制还是搜索范围错误。",
          "actions": [
            "固定数据、输入和预期，建立最小复现。",
            "改变一个条件观察差异，缩小原因范围。"
          ],
          "artifactTitle": "示例：诊断记录",
          "artifact": "复现数据：灵感簿｜整理写作素材。\n复现输入：写作。\n期望：1 项；故障规则下实际：0 项。\n对照输入：灵感。故障规则下实际：1 项。\n\n样本原因：搜索只看名称，没有检查简介。\n最小修复：把简介纳入搜索范围。\n仍需确认：正式项目是否约定了其他字段、大小写和多个关键词规则。",
          "check": "原因能够解释这两个对照结果，而不是只凭一次猜测。",
          "widget": "bug"
        },
        {
          "title": "让检查捕获这个问题",
          "skills": [
            "tdd"
          ],
          "why": "修好一次还不够，要让相同行为以后被破坏时能被检查发现。",
          "actions": [
            "先描述用户可观察的预期行为。",
            "确认故障规则无法满足预期，再用最小实现通过相同检查。"
          ],
          "artifactTitle": "示例：行为检查，而非虚构测试日志",
          "artifact": "检查用例 A：名称不含“写作”、简介含“写作”时，应找到该条目。\n检查用例 B：名称含“灵感”时，仍应找到该条目。\n检查用例 C：空关键词时，应显示全部样本。\n\n下方交互面板会实际计算当前规则对这些用例的结果。\n正式项目还应在自己的检查环境中保存证据。\n这里只演示行为与检查的关系，不代表已运行上游 TDD 技能。",
          "check": "同一个用例能区分故障与修复，且没有为了通过检查偷偷改变预期。",
          "widget": "bug"
        },
        {
          "title": "检查这次修改有没有偏离约定",
          "skills": [
            "code-review"
          ],
          "why": "测试覆盖的是具体例子；审查再对照需求和变更寻找遗漏。",
          "actions": [
            "确认搜索范围的改动与需求一致。",
            "核对相关行为是否受影响，并说明审查范围。"
          ],
          "artifactTitle": "示例：审查意见摘录",
          "artifact": "已对照：规格要求同时搜索名称与简介。\n本次修复方向：从仅检查名称改为检查名称与简介。\n应复查：分类条件与关键词仍然同时生效；空输入和无匹配提示没有回归。\n\n审查范围要求：包含本次全部修改。\n注意：如果审查基于已提交差异，未提交的修复可能未进入审查范围。\n\n结论形式：列出具体问题和依据；无发现也不等于证明所有情况都正确。",
          "check": "能知道审查实际覆盖了哪些修改，不把“有人看过”当作质量保证。"
        }
      ]
    }
  ],
  "summary": {
    "definition": "一套面向 AI 的工程与协作工作方法：把模糊目标、零散资料和开发问题，转成有约定、有来源、可检查、可接手的具体成果。",
    "effect": "可以产出需求规格、决策记录、研究笔记、交互原型、代码与测试、审查报告、交接文档、课程与文章。价值在于让做事过程与完成标准更稳定；节省时间、减少返工是预期收益，尚未量化实测。",
    "mechanism": "SKILL.md 规定任务方法，参考文件补充模板和判断依据，少量脚本提供辅助。宿主模型理解你的输入，再使用现有文件、浏览器、终端或任务平台工具执行；技能本身不提供这些账号、权限或统一调度平台。",
    "types": [
      {
        "domain": "需求与决策",
        "problem": "想法模糊，讨论反复",
        "ability": "追问目标、统一术语、记录取舍，整理规格与待决问题。",
        "result": "需求共识、词汇表、规格、决策地图、问卷与流程规格。",
        "when": "做网页、个人工具或较长项目前，范围和完成标准还不明确。",
        "demo": "website",
        "exampleTitle": "功能规格样张",
        "example": [
          "搜索范围：名称 + 简介",
          "分类与关键词同时生效",
          "重置后恢复全部 3 项"
        ],
        "representative": "grill-with-docs · to-spec · wayfinder"
      },
      {
        "domain": "研究与原型",
        "problem": "只有介绍，看不出能否适用",
        "ability": "追溯第一手资料，用可操作样本回答设计问题。",
        "result": "有来源的结论、体验原型与设计取舍。",
        "when": "选型、研究开源项目，或想先试界面再决定怎么做。",
        "demo": "research",
        "exampleTitle": "研究结论样张",
        "example": [
          "全仓库：38 项技能",
          "正式插件：25 项",
          "来源已核对 / 运行未验证"
        ],
        "representative": "research · prototype"
      },
      {
        "domain": "开发与质量",
        "problem": "功能没落地，改动难以确认",
        "ability": "实现功能、设计模块，复现错误，用测试与审查核对行为。",
        "result": "代码、行为测试、定位证据、修复与审查报告。",
        "when": "真正开发、修改或排查网页与个人工具时。",
        "demo": "bug",
        "exampleTitle": "修复对照样张",
        "example": [
          "输入“写作” → 仅搜名称：0 项",
          "同时搜索简介 → 找到：1 项",
          "保留相同预期，检查修复"
        ],
        "representative": "implement · tdd · diagnosing-bugs"
      },
      {
        "domain": "协作与交付",
        "problem": "任务散、背景丢、交付难接手",
        "ability": "拆任务、分流请求、协调变更、引导人工步骤并总结交接。",
        "result": "任务清单、进展摘要、交接文档、向导与 PR 说明。",
        "when": "工作跨会话、多方协作，或需要提交与移交成果时。",
        "demo": "handoff",
        "exampleTitle": "交接文件样张",
        "example": [
          "已完成：38 项能力研究",
          "证据：SOURCES.md",
          "下一步：核对场景与来源"
        ],
        "representative": "to-tickets · handoff · wizard"
      },
      {
        "domain": "学习与写作",
        "problem": "资料看不懂，笔记难成文",
        "ability": "围绕目标组织短课与练习，重述解释，把素材变成文章或指令。",
        "result": "课程、参考页、学习记录、素材、文章与 AI 指令文档。",
        "when": "持续学习、说明技术概念、整理研究分享时。",
        "demo": "writing",
        "exampleTitle": "文章结构样张",
        "example": [
          "困惑：知道名字，却不懂何时用",
          "例子：一份能继续工作的交接",
          "判断：按问题选，不按数量收集"
        ],
        "representative": "teach · writing-shape · writing-for-agents"
      },
      {
        "domain": "专项工具",
        "problem": "特定工程或课程工作重复",
        "ability": "配置 Git 防护与提交检查，迁移测试数据，搭建习题目录。",
        "result": "拦截规则、提交前检查、测试数据改造与课程脚手架。",
        "when": "确实使用对应开发环境、技术或课程结构时。",
        "demo": null,
        "exampleTitle": "提交检查示意",
        "example": [
          "准备提交 → 格式检查",
          "继续检查 → 类型与已有测试",
          "存在错误 → 提交前发现"
        ],
        "representative": "setup-pre-commit · scaffold-exercises"
      }
    ],
    "personal": [
      {
        "stage": "现在 · 研究与知识整理",
        "trigger": "拿到一个仓库、读不懂能力、需要向别人说明，或准备换会话。",
        "skills": "research、teach、wait-what、handoff；整理文章可看实验写作技能。",
        "gain": "让“看过资料”变成有出处的判断、可阅读的说明与可续做的记录。",
        "demo": "research"
      },
      {
        "stage": "下一步 · 做网页与个人工具",
        "trigger": "想法要交给 AI 实现，或者出现“做出来不是我要的”与反复修错。",
        "skills": "grill-with-docs → to-spec → prototype → to-tickets / implement；按需补 tdd 与 code-review。",
        "gain": "把想法变成明确行为，先观察样本，再用检查确认正式交付。",
        "demo": "website"
      },
      {
        "stage": "长期 · 持续维护自己的项目",
        "trigger": "研究项目越来越多，协作和更新变复杂，重复提醒开始增加。",
        "skills": "domain-modeling、writing-for-agents、handoff；工程项目再考虑架构、复盘与提交检查。",
        "gain": "积累术语、规则、决策与验证证据，形成可重复使用的工作方法。",
        "demo": "handoff"
      }
    ],
    "boundary": "不是一键生成完整产品的保证，也不等于自动获得工具和账号。原型不等于生产系统，交接不等于永久记忆；写作不应补造事实。简单改字、一次性定义查询通常不用完整流程。"
  }
};
