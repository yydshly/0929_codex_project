# Matt Pocock Skills 能力摘要

[在线摘要](https://yydshly.github.io/0929_codex_project/003-mattpocock-skills/) · [项目入口](README.md)

一套面向 AI 的工程与协作工作方法：把模糊目标、零散资料和开发问题，转成有约定、有来源、可检查、可接手的具体成果。

可以产出需求规格、决策记录、研究笔记、交互原型、代码与测试、审查报告、交接文档、课程与文章。价值在于让做事过程与完成标准更稳定；节省时间、减少返工是预期收益，尚未量化实测。

![能力、成果与个人场景](assets/capability-summary.svg)

## 类型与效果

按实际用途分为六类，全部覆盖 38 项；这是研究分类。上游目录为 engineering 18、productivity 7、in-progress 9、misc 4，正式插件收录前两类 25 项。

### 需求与决策（8 项）

追问目标、统一术语、记录取舍，整理规格与待决问题。

**可实现效果：** 需求共识、词汇表、规格、决策地图、问卷与流程规格。

**使用场景：** 做网页、个人工具或较长项目前，范围和完成标准还不明确。

**包含技能：** grill-with-docs、to-spec、wayfinder、domain-modeling、grill-me、grilling、to-questionnaire、loop-me

### 研究与原型（2 项）

追溯第一手资料，用可操作样本回答设计问题。

**可实现效果：** 有来源的结论、体验原型与设计取舍。

**使用场景：** 选型、研究开源项目，或想先试界面再决定怎么做。

**包含技能：** research、prototype

### 开发与质量（8 项）

实现功能、设计模块，复现错误，用测试与审查核对行为。

**可实现效果：** 代码、行为测试、定位证据、修复与审查报告。

**使用场景：** 真正开发、修改或排查网页与个人工具时。

**包含技能：** tdd、code-review、improve-codebase-architecture、implement、diagnosing-bugs、codebase-design、setup-ts-deep-modules、implement-spec

### 协作与交付（10 项）

拆任务、分流请求、协调变更、引导人工步骤并总结交接。

**可实现效果：** 任务清单、进展摘要、交接文档、向导与 PR 说明。

**使用场景：** 工作跨会话、多方协作，或需要提交与移交成果时。

**包含技能：** to-tickets、ask-matt、setup-matt-pocock-skills、triage、resolving-merge-conflicts、wizard、handoff、claude-handoff、pr、retro

### 学习与写作（6 项）

围绕目标组织短课与练习，重述解释，把素材变成文章或指令。

**可实现效果：** 课程、参考页、学习记录、素材、文章与 AI 指令文档。

**使用场景：** 持续学习、说明技术概念、整理研究分享时。

**包含技能：** teach、wait-what、writing-for-agents、writing-fragments、writing-shape、writing-beats

### 专项工具（4 项）

配置 Git 防护与提交检查，迁移测试数据，搭建习题目录。

**可实现效果：** 拦截规则、提交前检查、测试数据改造与课程脚手架。

**使用场景：** 确实使用对应开发环境、技术或课程结构时。

**包含技能：** git-guardrails-claude-code、migrate-to-shoehorn、scaffold-exercises、setup-pre-commit

## 对你的意义

### 现在 · 研究与知识整理

拿到一个仓库、读不懂能力、需要向别人说明，或准备换会话。

research、teach、wait-what、handoff；整理文章可看实验写作技能。

让“看过资料”变成有出处的判断、可阅读的说明与可续做的记录。

### 下一步 · 做网页与个人工具

想法要交给 AI 实现，或者出现“做出来不是我要的”与反复修错。

grill-with-docs → to-spec → prototype → to-tickets / implement；按需补 tdd 与 code-review。

把想法变成明确行为，先观察样本，再用检查确认正式交付。

### 长期 · 持续维护自己的项目

研究项目越来越多，协作和更新变复杂，重复提醒开始增加。

domain-modeling、writing-for-agents、handoff；工程项目再考虑架构、复盘与提交检查。

积累术语、规则、决策与验证证据，形成可重复使用的工作方法。

## 技术原理与边界

SKILL.md 规定任务方法，参考文件补充模板和判断依据，少量脚本提供辅助。宿主模型理解你的输入，再使用现有文件、浏览器、终端或任务平台工具执行；技能本身不提供这些账号、权限或统一调度平台。

不是一键生成完整产品的保证，也不等于自动获得工具和账号。原型不等于生产系统，交接不等于永久记忆；写作不应补造事实。简单改字、一次性定义查询通常不用完整流程。

网页中的样张与小组件是研究者制作的教学展示，区别于真实调用上游技能产生的效果。