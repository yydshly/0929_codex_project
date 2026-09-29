// All scenario/outcome/extension/value fields are research interpretation at domain level.
const domain=(id,title,scope,scenario,outcome,extension,value)=>({id,title,scope,scenario,outcome,extension,value});
export const domains=[
domain('docs','文档与知识交付','文件读取、信息提取、报告、演示与知识整理','研究材料需要变成可阅读、可编辑、可交付的文档','形成报告、表格、演示稿或结构化知识；减少手工整理','接入个人模板、资料库与引用核对','将你收集的开源项目资料沉淀为可复用的研究成果'),
domain('product','产品研究与决策','用户需求、市场判断、优先级、路线图与商业分析','从项目能力出发判断值得解决什么问题、做什么产品','形成需求定义、取舍依据和验证计划','连接真实用户访谈、产品指标与实验反馈','帮你把“发现好项目”推进到“判断值得做什么”'),
domain('design','视觉与设计系统','界面设计、Figma、组件库、版式、动效设计','需要把概念转成可讨论的视觉方案和设计规范','形成页面设计、组件或视觉资源；统一表达','结合品牌、组件库与设计到代码的映射','提升你制作项目说明、能力地图和演示页面的表达质量'),
domain('frontend','网站与前端工程','网页、组件、路由、前端框架、性能与无障碍','把研究结论和产品设想实现成可交互的网站','产出页面代码、交互和前端改进；验证信息如何被使用','接入真实数据、移动布局与自动回归','直接支撑当前研究工作区中的 Web 展示与演示'),
domain('mobile','移动与跨端应用','Flutter、Expo、React Native、原生平台能力','同一产品需要在手机、平板或多个平台交付','形成移动界面、平台集成和性能修改','连接设备能力、离线数据及跨端设计系统','当你将网页原型扩展为移动产品时缩短探索路径'),
domain('backend','应用开发与接口','后端框架、API、SDK、代码组织和迁移','产品需要业务逻辑、服务接口或平台 SDK 集成','形成服务代码、接口与可维护结构','补充契约检查、业务模块和版本迁移流程','把前端演示发展为能够处理真实业务的应用'),
domain('data','数据库与分析','SQL、数据结构、查询、检索、存储与数据分析','需要管理研究数据、检索资料或分析运行数据','形成查询、结构建议或数据结果；正确性仍需核对','向量检索、分析看板与数据质量规则','让你的项目索引从静态笔记升级为可查询知识库'),
domain('cloud','云平台与基础设施','部署、Serverless、基础设施代码、存储和云资源','本地作品需要可访问、可维护的运行环境','形成部署配置和基础设施方案；可用性需验证','持续交付、环境隔离、成本与容量管理','帮助你将本地演示变成可分享和长期运行的服务'),
domain('testing','测试与质量验证','单元、接口、浏览器、移动测试与测试迁移','修改代码后需要证明关键行为依然符合预期','形成测试和复现证据；降低未发现回归的概率','业务场景库、视觉回归、持续集成','为你快速尝试不同开源方案提供可重复的验证方法'),
domain('security','安全分析与治理','静态分析、漏洞模式、配置审查、供应链与合规检查','引入第三方代码或修改关键逻辑前评估风险','形成问题证据与修复建议；不是无漏洞保证','规则库、隔离环境与安全回归','帮助你筛选外部工具并识别接入时的关键风险'),
domain('identity','身份、支付与通知','登录授权、组织身份、支付接入、邮件和通知接口','应用开始涉及用户身份、交易流程和消息触达','形成相关集成与流程代码；依赖实际服务账号','权限模型、失败恢复、消息模板和事件核对','在项目进入真实用户阶段补齐基础业务能力'),
domain('ops','可观测性与故障诊断','日志、错误、链路、监控、告警与运行问题排查','应用已运行，需要从异常上下文定位问题','形成诊断、修复候选和监控配置','服务目标、事件复盘和自动诊断工作流','让你能持续维护作品，而不止停留在首次运行'),
domain('search','搜索、抓取与浏览器','联网检索、网页内容提取、浏览器操作和数据采集','需要搜集项目资料、查看公开页面或操作网页流程','获得页面数据、检索结果或操作证据；事实仍需核查','来源追踪、更新检测、结构化提取','加快你发现项目、收集能力说明和比较方案的过程'),
domain('automation','协作与流程自动化','工作流、办公系统、任务、日程和跨应用协作','重复工作横跨多个工具，需要减少信息搬运','形成结构化流程和操作记录；依赖连接权限','统一输入输出、重试去重、审批和状态记录','把你研究、整理和发布成果的重复步骤串联起来'),
domain('agents','Agent 与上下文工程','Agent 框架、技能构建、MCP、记忆、推理与上下文组织','需要定制助手或让已有助手更稳定地完成特定工作','形成 Agent 配置、技能包、工具服务或评估方案','个人研究助手、团队 SOP、工具注册与评测','将你积累的方法转成自己的可复用能力体系'),
domain('models','模型、训练与数据集','模型调用、训练、评估、数据集和 AI 服务 SDK','需要选择模型、准备数据或完成具体 AI 任务','形成模型集成、数据集或实验结果；效果取决于评估','任务基准、训练流水线与推理成本优化','帮助你判断项目依赖的 AI 能力及实验价值'),
domain('media','图像、音频与视频','生成或编辑媒体、语音、动画、3D 与程序化视频','需要用视觉或声音解释产品、制作演示内容','形成媒体素材或制作工程；质量需实际检查','品牌素材、批量生成、时间线与多模态工作流','丰富你展示项目的方式，减少纯文字说明的理解负担'),
domain('growth','内容、营销与增长','文案、SEO、广告、发布、转化、渠道与用户沟通','作品需要被目标用户找到、理解和采用','形成内容、营销方案或诊断；不保证流量和转化','真实数据反馈、内容模板、A/B 实验','把技术成果转化为别人能看懂、愿意尝试的产品表达'),
domain('finance','市场数据与数字资产','市场查询、交易相关工具、链上数据和钱包操作','研究相关领域的数据接口、分析流程和产品能力','形成领域数据或分析；不得视为收益承诺','数据回测、只读分析和领域规则','作为专业方向备选，是否采用取决于你的具体目标'),
domain('special','专业领域与综合集合','教育、科学、工程、行业任务及跨领域技能集合','通用开发工具不足以描述任务，需要专业流程或继续展开集合','形成专业产物或候选能力入口；范围应核对各原仓库','行业数据、专业规则、专家评审与二级目录','拓宽你的选题范围；这些方向不预设为当前优先事项')
];
const rule=(id,re)=>({id,re});
const rules=[
rule('finance',/\b(binance|coinbase|trading|stock market|a-share|crypto market|token price|wallet|defi|blockchain analytics)\b/i),
rule('identity',/auth0\/|better-auth\/|stripe\/|resend\/|trycourier\/|\b(authentication|oauth|two.factor|email deliver|payment integration)\b/i),
rule('ops',/getsentry\/|datadog-labs\/|\b(observability|opentelemetry|incident response|production issues|log analytics|appinsights)\b/i),
rule('security',/trailofbits\/|\b(security audit|vulnerability|vulnerabilities|cve|threat model|penetration|malware|security scan|red.team|content safety|contentsafety)\b/i),
rule('testing',/testmu-ai\/|cypress-io\/|\b(playwright|end.to.end test|unit test|testing framework|test automation|e2e|tdd|visual regression)\b|webapp-testing|terraform-test/i),
rule('media',/remotion|fal-ai-community\/|\b(video|audio|music|text.to.speech|speech.to.text|image generation|image editing|3d models|dubbing|transcription|lip.sync)\b/i),
rule('docs',/anthropics\/(docx|xlsx|pptx|pdf|doc-coauthoring|internal-comms)|\b(document processing|word documents|powerpoint|spreadsheet|pdf|ocr|document.intelligence|documentintelligence)\b/i),
rule('mobile',/flutter\/|expo\/|react.native|\b(android|ios|swiftui|kotlin multiplatform|mobile apps|mobile app)\b/i),
rule('design',/figma\/|greensock\/|google-labs-code\/|\b(design system|visual design|typography|palette|canvas-design|algorithmic-art|theme-factory|ui.ux design)\b|frontend-design/i),
rule('data',/supabase\/|neondatabase\/|clickhouse\/|duckdb\/|mongodb\/|redis\/|qdrant\/|tinybirdco\/|\b(database|postgres|sql|cosmos|vector search|data analysis|data analytics|data warehouse|data pipeline|caching|cache|redis|alloydb)\b/i),
rule('search',/serpapi\/|crawlbase\/|firecrawl\/|brave\/|browserbase\/|\b(web search|web scraping|crawl|scraping|browser automation|search engine results|search engines)\b/i),
rule('agents',/voltagent\/|\b(mcp|agent framework|agentic|multi.agent|context engineering|agent memory|skill creator|skills? creation|skill registry|prompt engineering|reasoning|context window)\b|skill-creator|agent-framework|agents-v2|continual-learning/i),
rule('models',/huggingface\/|google-gemini\/|replicate\/|\b(model training|fine.tun|model evaluation|dataset|machine learning|model inference|embeddings|ai model|generative ai|anomaly detection)\b|azure-ai-|azure-openai|genkit/i),
rule('growth',/coreyhaines31\/|realkimbarrett\/|typefully\/|\b(marketing|seo|ad campaign|advertising|cold email|social media|lead generation|conversion rate|copywriting|go.to.market)\b/i),
rule('product',/deanpeters\/|phuryn\/|\b(product management|product strategy|product discovery|user research|prd|roadmap|market research|prioritiz|business model|user stories)\b/i),
rule('frontend',/vercel-labs\/|angular\/|WordPress\/|\b(next\.js|react components|web interface|frontend|front.end|web development|tailwind|vue|svelte|web accessibility|web performance|web app|web application)\b/i),
rule('automation',/googleworkspace\/|makenotion\/|czlonkowski\/|composiohq\/|\b(n8n|calendar|slack|task management|project management|workflow automation|productivity|collaboration|meeting|notion|office workflows)\b/i),
rule('cloud',/hashicorp\/|cloudflare\/|netlify\/|google\/cloud\/|\b(azure|cloud|deploy|kubernetes|docker|terraform|serverless|infrastructure|ci.cd|devops|storage|event hub|service bus)\b/i),
rule('backend',/apollographql\/|\b(api|sdk|backend|back.end|graphql|python|javascript|typescript|rust|\.net|java|code review|refactor|debug|git|codebase|framework|programming|development)\b/i)
];
export function classify(entry){
 const reviewed={
 docs:['openai/doc','openai/slides','MiniMax-AI/minimax-docx','garrytan/document-release','lukstei/slop-grader'],
 design:['anthropics/canvas-design','garrytan/plan-design-review','garrytan/design-review','ibelick/ui-skills','muthuishere/hand-drawn-diagrams','ehmo/platform-design-skills','Kayforkind/reimagine-it','superdesigndev/superdesign-skill','csthink/dashmotion','tt-a1i/archify'],
 media:['openai/imagegen','openai/screenshot','sanjay3290/imagen','veniceai/venice-image-edit','MiniMax-AI/gif-sticker-maker','MiniMax-AI/shader-dev','CloudAI-X/threejs-skills'],
 product:['garrytan/office-hours','garrytan/plan-ceo-review','garrytan/autoplan','Ericyoung-183/alpha-insights','dannwaneri/spec-writer'],
 frontend:['microsoft/react-flow-node-ts','microsoft/zustand-store-ts','garrytan/benchmark','addyosmani/performance','addyosmani/core-web-vitals','addyosmani/accessibility','addyosmani/best-practices','vercel-labs/next-cache-components','WordPress/wp-performance','agiwhitelist/auteur'],
 backend:['microsoft/fastapi-router-py','openai/gh-address-comments','openai/yeet','garrytan/plan-eng-review','garrytan/investigate','garrytan/ship','garrytan/gstack-upgrade','MiniMax-AI/fullstack-dev'],
 testing:['garrytan/qa','garrytan/qa-only','obra/test-driven-development','obra/verification-before-completion','omkamal/pypict-skill','phuryn/test-scenarios','hashicorp/provider-test-patterns','hashicorp/run-acceptance-tests'],
 cloud:['firebase/firebase-basics','firebase/firebase-app-hosting-basics','redhat/openshift-skillpack','redhat/openshift-virtualization','netlify/netlify-caching','openai/gh-fix-ci'],
 data:['firebase/firebase-firestore-enterprise-native-mode','honeydew-ai/honeydew-ai-coding-agents-plugins','takechanman1228/claude-ecom','openai/jupyter-notebook'],
 identity:['microsoft/entra-agent-id','veniceai/venice-api-keys','mailtrap/mailtrap-skills','cloudflare/cloudflare-email-service'],
 security:['openai/security-ownership-map','openai/security-threat-model','firebase/firebase-security-rules-auditor','redhat/sre-skillpack','SHADOWPR0/security-bluebook-builder','prompt-security/clawsec','jthack/ffuf-claude-skill','wrsmith108/varlock-claude-skill','cloudflare/security-audit-skill','garrytan/careful','garrytan/freeze','garrytan/guard','garrytan/unfreeze','morluto/rea'],
 ops:['openai/sentry','gokapso/observe-whatsapp'],
 search:['garrytan/browse','garrytan/setup-browser-cookies','sanjay3290/deep-research','woniu9524/open-web-bridge','reliefeai/browser-relay','browser-act/browser-act','apitube/news-api-skills'],
 automation:['openai/linear','microsoft/github-issue-creator','garrytan/retro','komal-SkyNET/claude-skill-homeassistant','czlonkowski/n8n-workflow-patterns','Linked-API/linkedin','drogers0/github-image-upload'],
 agents:['microsoft/m365-agents-dotnet','microsoft/m365-agents-py','microsoft/m365-agents-ts','garrytan/codex','frmoretto/clarity-gate','deanpeters/context-engineering-advisor','deanpeters/skill-authoring-workflow','obra/subagent-driven-development','obra/writing-skills','NeoLabHQ/sadd','NeoLabHQ/reflexion','hqhq1025/skill-optimizer','UiPath/check-skill','hedralab/eskill','plasma-ai/fractal','muratcankoylan/context-optimization','massimodeluisa/recursive-decomposition-skill','Skill_Seekers'],
 models:['veniceai/venice-chat','veniceai/venice-models','veniceai/venice-characters','openai/openai-docs','wanshuiyin/Auto-claude-code-research-in-sleep','zscole/model-hierarchy-skill','firebase/firebase-ai-logic-basics'],
 finance:['veniceai/venice-crypto-rpc'],
 growth:['sanity-io/sanity-best-practices','sanity-io/content-modeling-best-practices','sanity-io/content-experimentation-best-practices','Eronred/aso-skills','swaylq/humanize-chinese'],
 special:['santifer/career-ops','ZeKaiNie/universal-examprep-skill','peas/genealogy-research']
 };
 for(const [id,names] of Object.entries(reviewed))if(names.includes(entry.name))return {domain:id,basis:'研究者依据目录能力说明调整主方向'};
 if(/^openai\/figma-/.test(entry.name))return {domain:'design',basis:'技能名称的明确设计任务'};
 const overrides={
 'anthropics/slack-gif-creator':'media','anthropics/template':'agents','composiohq/composio':'automation',
 'serpapi/agent-usability-test':'testing','veniceai/venice-auth':'identity','veniceai/venice-x402':'identity',
 'trailofbits/ask-questions-if-underspecified':'product','trailofbits/modern-python':'backend',
 'trailofbits/culture-index':'automation','trailofbits/dwarf-expert':'backend',
 'trailofbits/property-based-testing':'testing','trailofbits/testing-handbook-skills':'testing',
 'zero/zero':'agents','zero/zero-gemini':'agents','modem-dev/skills':'backend',
 'googleworkspace/gws-sheets':'docs','googleworkspace/gws-docs':'docs','googleworkspace/gws-slides':'docs',
 'googleworkspace/gws-gmail':'automation','googleworkspace/gws-shared':'automation'
 };
 if(overrides[entry.name])return {domain:overrides[entry.name],basis:'研究者逐项指定主方向'};
 const nameDesc=`${entry.name} ${entry.description}`;
 for(const r of rules)if(r.re.test(nameDesc))return {domain:r.id,basis:'名称及简介关键词归类'};
 const s=entry.section;
 if(/Marketing|Advertising/.test(s))return {domain:'growth',basis:'上游分组归类'};
 if(/Product Manage/.test(s))return {domain:'product',basis:'上游分组归类'};
 if(/Context Engineering/.test(s))return {domain:'agents',basis:'上游分组归类'};
 if(/Productivity/.test(s))return {domain:'automation',basis:'上游分组归类'};
 if(/Development and Testing|CodeRabbit/.test(s))return {domain:'backend',basis:'上游分组归类'};
 return {domain:'special',basis:'专业或综合范围，保留原文'};
}
