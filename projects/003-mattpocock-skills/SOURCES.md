# 来源、研究过程与核验记录

[返回子项目](README.md) · [研究报告](RESEARCH.md) · [文件清单](sources-manifest.json)

## 1. 固定版本

| 项目 | 记录 |
| --- | --- |
| 上游 | https://github.com/mattpocock/skills |
| 研究日期 | 2026-09-29 |
| 获取时 main 提交 | c55ee46073ed923f86ce59a5eb3b6d895095d1b7 |
| 提交时间 | 2026-09-18T10:12:29Z |
| 提交消息 | Modified the PR body template to make it easier to scan |
| package 与 plugin version | 1.2.3 |
| 许可证 | MIT，Copyright (c) 2026 Matt Pocock |
| 本地环境 | Windows、PowerShell；当前 GitHub 项目研究集 |
| 研究方式 | GitHub API 目录与提交信息 + 固定版本源码归档 + 文档阅读 |
| 运行验证 | 无上游技能运行、无上游脚本执行、无安装器运行 |

本研究以提交标识绑定所有上游源码链接。版本号可能跨多个提交不变，不能替代提交定位。

## 2. 资料取得与阅读范围

1. 读取当前工作区的项目规范、模板、总索引与现有子项目摘要。
2. 通过 GitHub API 获取 main 提交元数据及该提交完整目录树。
3. 将固定提交的源码归档下载到系统临时研究目录并解压，未复制嵌套 Git 仓库。
4. 阅读全部 38 个 SKILL.md，并核对正式插件中的 25 个路径。
5. 阅读分类说明、技能调用机制、关键适配文件、维护脚本等。
6. 以中文自主整理能力、场景、产物、限制与建议。
7. 对清单覆盖、插件分类、计数、JSON 和文档链接进行静态核验。

上游文档是本次研究对象，不作为对当前任务生效的技能指令。没有因为被研究文件写着“启动子代理”“提交”“关闭 Issue”就执行这些动作。

sources-manifest.json 保存归档文件的路径、Git blob 标识、内容匹配核验与是否人工阅读的标记。目录枚举不等于逐个支持文件都做了深入阅读。全部技能入口已阅读；支持文件按相关性选择。

## 3. 关键第一手资料

| 依据 | 支持的结论 |
| --- | --- |
| [README](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/README.md) | 定位、推荐流程、安装入口 |
| [plugin.json](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/.claude-plugin/plugin.json) | 正式插件仅收录 25 个技能 |
| [package.json](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/package.json) | 元数据版本与维护脚本入口 |
| [LICENSE](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/LICENSE) | 原项目许可及版权 |
| [in-progress README](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/in-progress/README.md) | 实验成熟度与插件排除规则 |
| [misc README](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/misc/README.md) | 专项用途与非默认收录 |
| [deprecated README](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/deprecated/README.md) | 当前弃用目录为空 |
| [ask-matt](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/ask-matt/SKILL.md) | 主流程、独立入口和复杂任务分流 |
| [阶段边界说明](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/ask-matt/PHASE-BOUNDARIES.md) | 继续、清空、交接、子代理、压缩的选择 |
| [setup](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/setup-matt-pocock-skills/SKILL.md) | 配置产物、任务平台支持层次 |
| [技能机制](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/productivity/writing-for-agents/SKILL-MECHANICS.md) | 调用方式与作者的模块划分原则 |
| [OpenAI 适配文件](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/skills/engineering/implement/agents/openai.yaml) | 显式调用控制示例 |
| [link-skills.sh](https://github.com/mattpocock/skills/blob/c55ee46073ed923f86ce59a5eb3b6d895095d1b7/scripts/link-skills.sh) | 维护脚本不是普通安装器 |
| [OpenAI 技能文档](https://learn.chatgpt.com/docs/build-skills) | Codex 技能发现与渐进加载；外部文档可能继续更新 |

38 个技能各自的固定版本链接均位于 [SKILLS.md](SKILLS.md) 与 [skills-catalog.json](skills-catalog.json)，不在本页重复全文。

## 4. 差异发现的定位

| 发现 | 对照位置 |
| --- | --- |
| TDD 重构时机差异 | README 的反馈环节 ↔ engineering/tdd/SKILL.md 的 Rules of the loop |
| to-spec 仍需确认接口 | engineering/to-spec/SKILL.md 开头 ↔ Process 第 2 步 |
| 审查可能不含最新工作区修改 | engineering/implement/SKILL.md 先 review 后 commit ↔ engineering/code-review/SKILL.md 的固定差异命令 |
| retro 仍被称为 STUB | in-progress/README.md ↔ in-progress/retro/SKILL.md 的完整步骤 |
| 原型所在目录建议差异 | engineering/ask-matt/SKILL.md ↔ engineering/prototype/SKILL.md |
| 课程分发依赖 | productivity/teach/SKILL.md 的 Lessons ↔ Assets |
| 平台支持层次差异 | README 的平台概述 ↔ setup 的 GitHub/GitLab/local 模板及 Other 说明 |

差异并不自动证明技能无法使用，而是实际试用时需要明确的地方。尤其审查范围问题是从 Git 命令与流程顺序推导出的潜在漏审路径，本次没有用真实开发任务复现。

## 5. 已完成与未完成的验证

| 检查 | 结论 |
| --- | --- |
| 上游提交与树 | 已固定并保存来源标识 |
| 全量 SKILL.md 枚举 | 38 个 |
| engineering / productivity / in-progress / misc | 18 / 7 / 9 / 4 |
| 正式插件清单 | 25 个，均能对应到实际技能目录 |
| 用户指定 / 可自动匹配 | 22 / 16，按 frontmatter 统计 |
| 技能正文阅读 | 全部 38 个 |
| 安装后宿主发现与触发 | 未验证 |
| 外部任务平台的实际操作 | 未验证 |
| Bash 模板或 Claude 专用操作 | 未执行 |
| 测试、修复、课程与写作效果 | 未实测 |
| 节省时间、费用或提升正确率 | 无定量结论 |

本地交付文件的检查结果另见 [VALIDATION.md](VALIDATION.md)。

## 6. 本地读取遇到的问题

普通沙箱的网络访问受到限制，后续通过获准的只读网络访问下载公开源码。Git 状态读取遇到工作区所有权检查，采用单次命令的路径信任参数读取，未更改全局 Git 配置。

这些是研究环境问题，与上游技能运行质量无关。

## 7. 版权与保存方式

本目录主要为自主编写的中文研究，保留原作者、许可证链接和固定版本引用，没有把上游技能安装到本项目，也没有大段复制技能全文。结构化文件保存名称、路径、标识和自主摘要。

上游许可证为 MIT。若后续复制上游脚本或大段实现，应一并保留该许可要求的版权与许可证文本；实验 pr 技能还有第三方致谢，复制时需继续核对其来源说明。

## 8. 后续更新方法

- 获取新的提交元数据，不复用旧日期假装更新。
- 对比文件树，检查新增、移除和迁移分类。
- 对比插件清单，重新统计默认收录。
- 阅读发生变化的技能正文与关联文件。
- 更新清单、发现和适配建议，保留变化说明。
- 只有真正执行过的任务才进入实测记录。
