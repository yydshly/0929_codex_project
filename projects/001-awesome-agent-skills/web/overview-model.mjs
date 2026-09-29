// Concise research synthesis; examples are verified against the pinned directory at build time.
export const topics=[
 {id:'docs',title:'文档与知识交付',action:'读取、整理、生成和编辑文件',result:'报告、表格、PDF、演示文稿',when:'整理资料、写报告、做汇报',example:'anthropics/docx'},
 {id:'product',title:'产品研究与决策',action:'分析需求、竞品和功能优先级',result:'需求文档、用户画像、路线图',when:'判断项目能解决什么问题',example:'phuryn/create-prd'},
 {id:'design',title:'视觉与设计系统',action:'设计界面、组件、版式和动效',result:'设计稿、组件库、视觉规范',when:'让产品与研究成果更易理解',example:'anthropics/frontend-design'},
 {id:'frontend',title:'网站与前端工程',action:'构建页面、组件和网页交互',result:'可交互网站、前端代码',when:'把想法或研究做成演示',example:'vercel-labs/next-best-practices'},
 {id:'mobile',title:'移动与跨端应用',action:'开发移动界面与平台功能',result:'手机应用、跨端组件',when:'将网页原型扩展到移动端',example:'expo/building-native-ui'},
 {id:'backend',title:'应用开发与接口',action:'开发服务、接入 API、改进代码',result:'业务接口、服务代码、改造方案',when:'给演示接入真实业务能力',example:'apollographql/apollo-server'},
 {id:'data',title:'数据库与分析',action:'建模、查询、检索和分析数据',result:'SQL、数据结构、分析结果',when:'建设项目知识库、分析数据',example:'supabase/postgres-best-practices'},
 {id:'cloud',title:'云平台与基础设施',action:'部署服务、配置和管理云资源',result:'在线站点、部署与基础设施配置',when:'把本地成果发布给别人使用',example:'openai/netlify-deploy'},
 {id:'testing',title:'测试与质量验证',action:'验证交互、接口和代码行为',result:'测试用例、截图、回归证据',when:'改完代码后检查关键路径',example:'anthropics/webapp-testing'},
 {id:'security',title:'安全分析与治理',action:'审查漏洞、配置和风险模式',result:'风险报告、修复建议、检查规则',when:'引入第三方代码或上线前',example:'trailofbits/static-analysis'},
 {id:'identity',title:'身份、支付与通知',action:'接入登录、支付、邮件和消息',result:'认证流程、交易集成、通知链路',when:'应用开始面向真实用户',example:'stripe/stripe-best-practices'},
 {id:'ops',title:'可观测性与故障诊断',action:'分析日志、错误、链路和告警',result:'故障线索、修复候选、监控配置',when:'网站或服务上线后出问题',example:'getsentry/sentry-fix-issues'},
 {id:'search',title:'搜索、抓取与浏览器',action:'查资料、提取页面、操作网页',result:'来源材料、结构化网页数据',when:'研究新项目、收集比较证据',example:'firecrawl/firecrawl-build'},
 {id:'automation',title:'协作与流程自动化',action:'串联应用、任务和办公流程',result:'自动工作流、同步与操作记录',when:'重复整理、同步和发布资料',example:'czlonkowski/n8n-workflow-patterns'},
 {id:'agents',title:'Agent 与上下文工程',action:'构建技能、工具、记忆与评估',result:'专属助手、技能包、MCP 服务',when:'把成熟方法沉淀给 AI 复用',example:'anthropics/skill-creator'},
 {id:'models',title:'模型、训练与数据集',action:'调用、训练和评估 AI 模型',result:'模型集成、数据集、实验结果',when:'验证产品需要的 AI 能力',example:'huggingface/hugging-face-model-trainer'},
 {id:'media',title:'图像、音频与视频',action:'生成、编辑和处理多媒体',result:'图片、配音、字幕、演示视频',when:'用视觉和声音展示项目',example:'remotion-dev/remotion'},
 {id:'growth',title:'内容、营销与增长',action:'写文案、做 SEO、策划传播',result:'介绍文案、内容计划、增长实验',when:'希望作品被找到和理解',example:'coreyhaines31/copywriting'},
 {id:'finance',title:'市场数据与数字资产',action:'查询行情、链上信息及交易接口',result:'市场数据、领域分析、接口集成',when:'研究金融或链上产品时按需用',example:'binance/query-token-info'},
 {id:'special',title:'专业领域与综合集合',action:'处理科学、教育及行业任务',result:'领域研究、专业评估、技能入口',when:'通用开发流程不够用时',example:'K-Dense-AI/scientific-agent-skills'}
];
export const scenarios=[
 {tag:'最贴近现在',title:'发现一个新开源库，想判断值不值得研究',input:'输入：仓库地址、关注问题、已有资料。',chain:['搜索与抓取','产品研究','文档整理'],output:'得到：有来源的能力对照、适用场景和研究报告。',check:'核对关键结论能否回到源文档；区分已具备能力与设想。',names:['firecrawl/firecrawl-build','phuryn/competitor-analysis','anthropics/doc-coauthoring']},
 {tag:'最贴近现在',title:'想把研究成果做成网页，发布给别人看',input:'输入：整理后的内容、目标读者、展示重点。',chain:['视觉设计','前端实现','网页测试','云端部署'],output:'得到：可以访问、交互和分享的演示网站。',check:'检查手机布局、链接和核心操作；部署后再验证真实网址。',names:['anthropics/frontend-design','anthropics/webapp-testing','openai/netlify-deploy']},
 {tag:'准备交付时',title:'要做报告、演示或项目介绍视频',input:'输入：研究笔记、数据、受众和交付格式。',chain:['文档与表格','视觉与媒体','内容表达'],output:'得到：可编辑报告、演示文稿、配图或视频。',check:'检查引用、数字、版面和实际导出文件。',names:['anthropics/docx','anthropics/pptx','remotion-dev/remotion']},
 {tag:'从原型走向产品',title:'演示开始有真实用户，需要数据与运行保障',input:'输入：业务需求、数据来源、服务环境和故障信息。',chain:['后端与数据库','身份与通知','测试与安全','故障诊断'],output:'得到：业务接口、数据方案、关键路径测试和问题线索。',check:'用真实测试数据验收；权限、服务账号和部署环境需要就绪。',names:['supabase/postgres-best-practices','stripe/stripe-best-practices','getsentry/sentry-fix-issues']},
 {tag:'研究越来越多时',title:'同类资料整理与发布反复出现，想固定成流程',input:'输入：已经跑通的方法、模板、工具和完成标准。',chain:['知识沉淀','跨应用自动化','自定义技能','持续评估'],output:'得到：可复用的研究模板、自动工作流和个人技能包。',check:'保留来源和运行记录；用典型任务验证新流程是否更可靠。',names:['czlonkowski/n8n-workflow-patterns','anthropics/skill-creator','anthropics/mcp-builder']}
];
