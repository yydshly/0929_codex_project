# 采用指南、依赖与兼容性

[返回子项目](README.md) · [技能详解](SKILLS.md) · [对你的价值](USER_VALUE.md)

本页说明固定版本的上游使用路径和本研究的适配建议。所有安装命令仅供后续采用参考，本次未执行，也未更改 Codex、Claude 或任务平台配置。

## 1. 分发方式与收录范围

| 路径 | 上游说明 | 内容边界 |
| --- | --- | --- |
| Claude Code 插件 | 通过插件入口安装管理包 | 本次清单明确包含 25 个正式技能 |
| skills 安装器 | 将选定技能作为可编辑文件安装到目标工具或项目 | 可选择技能；具体发现结果需在安装界面确认 |
| 指定实验技能 | in-progress README 提供按技能名称安装方式 | 不随正式插件包分发，可能变更或移除 |
| 仓库维护脚本 | scripts/link-skills.sh | 作者明确说明为开发维护用途，不是受支持安装器 |

上游记录的命令：

```text
Codex 及其他兼容宿主：
npx skills@latest add mattpocock/skills

指定一个实验技能：
npx skills@latest add mattpocock/skills --skill=<name>

Claude Code 插件：
claude plugins install mattpocock-skills
```

这些命令使用当前线上安装器和仓库版本，不固定到本研究提交。若准备正式采用，先重新核对安装结果、技能版本和目标目录；不要假设今天安装的内容始终等于本文。

来源：[固定版本安装说明](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/README.md)、[实验目录](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/README.md)。

## 2. 推荐的首次采用步骤

1. 选择一个有明确验收的小任务，优先在隔离试验项目中进行。
2. 只选择任务需要的技能及关联方法，不以全装为默认目标。
3. 工程流程同时准备 setup-matt-pocock-skills，确定任务文件、标签和领域文档位置。
4. 核对已经存在的同名技能；相同名称不代表内容相同。
5. 通过宿主实际支持的选择器或明确名称调用。
6. 观察生成文件和执行证据，再判断是否保留。
7. 记录模型、宿主版本、技能提交、输入任务及效果，便于以后比较。

当前工作区已经有收录规范和编号目录。若试用本库，沿用现有规范即可，避免新技能建立第二套互相竞争的研究索引。

## 3. 工程技能的项目配置

setup 技能会查找并提出修改以下内容：

| 文件或配置 | 用途 |
| --- | --- |
| AGENTS.md 或 CLAUDE.md 中的指针 | 让代理知道去哪里读取项目约定 |
| docs/agents/issue-tracker.md | GitHub、GitLab、本地或自定义任务流程 |
| docs/agents/domain.md | 术语表与 ADR 布局及读取规则 |
| docs/agents/triage-labels.md | 安装 triage 时的标签映射 |

原逻辑优先修改已存在的 CLAUDE.md，其次 AGENTS.md；两者都不存在才询问创建哪一个。Codex 使用者需要确认所选宿主实际读取相应入口，不能只看到文件已写入就认定约定已经生效。

对于当前单人研究集，建议从本地 Markdown 任务开始：减少账号和服务依赖。若已有 GitHub Issues 工作习惯，则按既有平台配置，不必为采用技能迁移任务。

来源：[setup 源码](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/setup-matt-pocock-skills/SKILL.md)。

## 4. Codex 与 Windows 中的适配重点

| 项目 | 已观察到的支持 | 需要确认的实际条件 |
| --- | --- | --- |
| 技能文件格式 | SKILL.md 与 agents/openai.yaml | 安装位置是否被宿主发现 |
| 自动调用控制 | 显式技能的 OpenAI 配置有 allow_implicit_invocation: false | 宿主是否按该字段执行 |
| 命令写法 | 上游多使用 /skill-name 和 Skill tool 表达 | Codex 的选择器、显式名称和可用工具不同，不逐字照搬 |
| 子代理 | 多个技能把探索、研究和审查分给子代理 | 宿主是否支持，是否符合当前任务范围 |
| GitHub/GitLab | 配置模板使用 gh/glab 等 | CLI、登录、网络和仓库权限 |
| Bash 向导与钩子 | 模板以 Bash 编写，部分含 WSL 打开链接支持 | 当前 PowerShell 不等于 Bash；需兼容环境 |
| HTML 产物 | 原型、课程、架构报告使用 HTML | 浏览器及所有依赖资源是否可访问 |
| Claude 后台交接 | 实验技能调用 claude --bg | Claude 专用能力，不是 Codex 同名能力 |
| TypeScript 工具 | 专项技能安装包和检查器 | Node 工程与项目结构是否匹配 |

Codex 官方说明支持显式指定、按描述匹配、按需读取完整技能；CLI/IDE 可通过技能选择或 $ 名称引用，其他产品界面以实际入口为准。[OpenAI 文档](https://learn.chatgpt.com/docs/build-skills)

如果无子代理或无某个平台工具，可设计替代流程，但应记录为适配版。顺序执行审查不能宣传为原版的并行、上下文分离效果。

## 5. 容易出现的采用问题

### 安装成功，却没有按预期触发

检查名称、描述、隐式调用设置，以及是否有同名技能。尝试明确指定技能，再观察是否实际读取其指令。仅安装文件不保证某个自然语言请求一定匹配。

### 调用了技能，却一直提问

追问可能是 grilling 原设计的一部分。先判断目标是否真的还模糊；如果已有明确范围，应在适配规则中要求复用既有答案、先查可查事实，并把可逆细节交给代理决定。

### 生成了很多任务，但无法实施

检查任务是否有明确行为与验收条件，依赖是否真实；把决策问题与实施任务区分开。wayfinder 处理未定方案，to-tickets 拆分已定方案。

### 审查通过，却没审查刚改的内容

读取实际差异范围。当前 code-review 使用 base...HEAD，不自动包括暂存区或工作区内容。适配时应明确变更快照，再生成对应差异；验收时检查修改文件列表，而不只看“审查通过”一句话。

### 多个技能重复规定相同事情

明确唯一来源：业务术语一处、规范一处、任务事实一处。已有同名 tdd、research 或 code-review 时，选择一个权威版本或给适配版明确名称，不同时叠加相互矛盾的流程。

### 原型可以看，正式运行出错

prototype 刻意略去部分健壮性与持久化。把经过验证的设计决定带入正式实现，并重新满足测试、错误处理和部署要求。

## 6. 需要明确范围的写入行为

这不是要求所有动作都再问一次，而是帮助采用时识别哪些技能包含实际写入：

| 技能 | 源码中可能执行的动作 |
| --- | --- |
| setup、domain-modeling、teach、写作技能 | 写项目指引、词汇表、学习或文章文件 |
| to-spec、to-tickets、triage、wayfinder | 写任务、发评论、改标签或状态 |
| implement | 修改代码并提交 |
| resolving-merge-conflicts | 暂存与完成 merge/rebase |
| implement-spec | 建分支、PR、工作树、合并和清理 |
| wizard | 生成可写环境配置和 CI secret 的向导 |
| 专项配置技能 | 安装依赖、改钩子或检查配置 |

实际执行应服从用户请求、宿主权限和项目约定。研究一个技能不等于授权它执行描述中的动作。本次仅阅读与分析，所有研究文档都保存在 003 子项目。

## 7. 为什么不直接运行维护脚本

link-skills.sh 明确声明不作为受支持安装器，而且会对目标目录中的同名非符号链接内容进行替换处理。它面向作者的本地维护习惯，不能因为看见“link skills”就当作普通安装教程执行。

采用时优先使用 README 的安装路径，确认可编辑文件与托管插件的更新方式差别。若修改了个人版本，更新上游前先保留差异。

来源：[维护脚本](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/scripts/link-skills.sh)。

## 8. 试用记录建议

| 字段 | 应记录什么 |
| --- | --- |
| 任务 | 实际要解决的问题与验收条件 |
| 版本 | 技能提交、宿主与模型 |
| 输入 | 使用的资料与配置 |
| 产出 | 文件、行为、测试或审查报告 |
| 用户投入 | 回答与确认所花时间 |
| 结果 | 哪些验收通过、哪些未验证 |
| 成本 | 总时间与可获得的调用费用信息 |
| 决策 | 保留、调整或停止采用 |

验证方法比一次主观的“感觉很强”更能判断是否适合你。
