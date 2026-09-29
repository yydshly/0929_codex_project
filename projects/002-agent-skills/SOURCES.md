# 来源与核验记录

研究日期：2026-09-29。上游提交：`2686b620fc1fed2e8f60c704839c766b8594c6b6`，提交时间：2026-09-26T04:19:37Z。

## 证据口径

- 文档事实：依据固定版本的技能说明、命令定义、角色文档和评测说明。
- 结构核验：GitHub API 目录树确认技能、命令与角色数量；技能条目与目录逐项对应。
- 个人分析：适用性、采用优先级、迁移到研究工作的方法，以及扩展建议。
- 未验证：安装兼容性、技能执行成功率、成本节省、生产安全性及实际质量提升。

查阅了以下 44 个固定版本文件。技能重点核查描述、适用条件、流程结构和验收部分，未逐行审计所有示例代码；因此不将本报告表述为源码安全审计或运行测试。

## 来源清单

| 文件 | 用于核查 |
| --- | --- |
| [.claude/commands/build.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/.claude/commands/build.md) | 命令入口与技能组合 |
| [.claude/commands/code-simplify.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/.claude/commands/code-simplify.md) | 命令入口与技能组合 |
| [.claude/commands/constraints.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/.claude/commands/constraints.md) | 命令入口与技能组合 |
| [.claude/commands/plan.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/.claude/commands/plan.md) | 命令入口与技能组合 |
| [.claude/commands/review.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/.claude/commands/review.md) | 命令入口与技能组合 |
| [.claude/commands/ship.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/.claude/commands/ship.md) | 命令入口与技能组合 |
| [.claude/commands/spec.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/.claude/commands/spec.md) | 命令入口与技能组合 |
| [.claude/commands/test.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/.claude/commands/test.md) | 命令入口与技能组合 |
| [.claude/commands/webperf.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/.claude/commands/webperf.md) | 命令入口与技能组合 |
| [LICENSE](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/LICENSE) | 许可证与版权信息 |
| [README.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/README.md) | 定位、机制、采用与组合说明 |
| [agents/code-reviewer.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/agents/code-reviewer.md) | 角色范围与报告视角 |
| [agents/security-auditor.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/agents/security-auditor.md) | 角色范围与报告视角 |
| [agents/test-engineer.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/agents/test-engineer.md) | 角色范围与报告视角 |
| [agents/web-performance-auditor.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/agents/web-performance-auditor.md) | 角色范围与报告视角 |
| [docs/adoption-guide.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/docs/adoption-guide.md) | 定位、机制、采用与组合说明 |
| [docs/agents.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/docs/agents.md) | 定位、机制、采用与组合说明 |
| [docs/skill-anatomy.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/docs/skill-anatomy.md) | 定位、机制、采用与组合说明 |
| [evals/README.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/evals/README.md) | 评测方法与证据边界 |
| [skills/api-and-interface-design/SKILL.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/api-and-interface-design/SKILL.md) | 单项用途、触发场景、流程与完成条件 |
| [skills/browser-testing-with-devtools/SKILL.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/browser-testing-with-devtools/SKILL.md) | 单项用途、触发场景、流程与完成条件 |
| [skills/ci-cd-and-automation/SKILL.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/ci-cd-and-automation/SKILL.md) | 单项用途、触发场景、流程与完成条件 |
| [skills/code-review-and-quality/SKILL.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/code-review-and-quality/SKILL.md) | 单项用途、触发场景、流程与完成条件 |
| [skills/code-simplification/SKILL.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/code-simplification/SKILL.md) | 单项用途、触发场景、流程与完成条件 |
| [skills/constraint-driven-development/SKILL.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/constraint-driven-development/SKILL.md) | 单项用途、触发场景、流程与完成条件 |
| [skills/context-engineering/SKILL.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/context-engineering/SKILL.md) | 单项用途、触发场景、流程与完成条件 |
| [skills/debugging-and-error-recovery/SKILL.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/debugging-and-error-recovery/SKILL.md) | 单项用途、触发场景、流程与完成条件 |
| [skills/deprecation-and-migration/SKILL.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/deprecation-and-migration/SKILL.md) | 单项用途、触发场景、流程与完成条件 |
| [skills/documentation-and-adrs/SKILL.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/documentation-and-adrs/SKILL.md) | 单项用途、触发场景、流程与完成条件 |
| [skills/doubt-driven-development/SKILL.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/doubt-driven-development/SKILL.md) | 单项用途、触发场景、流程与完成条件 |
| [skills/frontend-ui-engineering/SKILL.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/frontend-ui-engineering/SKILL.md) | 单项用途、触发场景、流程与完成条件 |
| [skills/git-workflow-and-versioning/SKILL.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/git-workflow-and-versioning/SKILL.md) | 单项用途、触发场景、流程与完成条件 |
| [skills/idea-refine/SKILL.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/idea-refine/SKILL.md) | 单项用途、触发场景、流程与完成条件 |
| [skills/incremental-implementation/SKILL.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/incremental-implementation/SKILL.md) | 单项用途、触发场景、流程与完成条件 |
| [skills/interview-me/SKILL.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/interview-me/SKILL.md) | 单项用途、触发场景、流程与完成条件 |
| [skills/observability-and-instrumentation/SKILL.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/observability-and-instrumentation/SKILL.md) | 单项用途、触发场景、流程与完成条件 |
| [skills/performance-optimization/SKILL.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/performance-optimization/SKILL.md) | 单项用途、触发场景、流程与完成条件 |
| [skills/planning-and-task-breakdown/SKILL.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/planning-and-task-breakdown/SKILL.md) | 单项用途、触发场景、流程与完成条件 |
| [skills/security-and-hardening/SKILL.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/security-and-hardening/SKILL.md) | 单项用途、触发场景、流程与完成条件 |
| [skills/shipping-and-launch/SKILL.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/shipping-and-launch/SKILL.md) | 单项用途、触发场景、流程与完成条件 |
| [skills/source-driven-development/SKILL.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/source-driven-development/SKILL.md) | 单项用途、触发场景、流程与完成条件 |
| [skills/spec-driven-development/SKILL.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/spec-driven-development/SKILL.md) | 单项用途、触发场景、流程与完成条件 |
| [skills/test-driven-development/SKILL.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/test-driven-development/SKILL.md) | 单项用途、触发场景、流程与完成条件 |
| [skills/using-agent-skills/SKILL.md](https://github.com/addyosmani/agent-skills/blob/2686b620fc1fed2e8f60c704839c766b8594c6b6/skills/using-agent-skills/SKILL.md) | 单项用途、触发场景、流程与完成条件 |

文件路径和 Git blob SHA 另存于 [sources-manifest.json](sources-manifest.json)。原始文件仅下载到临时目录用于研究，没有作为技能安装或执行。

## 本次交付检查

检查技能清单的名称唯一性、与上游 25 项目录的一致性、本地文档链接、模板占位符及总索引。研究报告未附虚构截图或实测数字。

2026-09-29 实际检查结果：

- 25 个技能名称唯一，且与上游目录完全对应。
- 44 个下载文件的内容重新计算为 Git blob SHA，均与固定提交目录树的标识一致。
- 新子项目文档中的 15 个本地相对链接全部有效。
- 新子项目无遗留模板占位符；已跟踪的总索引改动通过差异格式检查。

上述检查证明资料版本与文档结构的一致性，不证明技能运行效果。

[返回项目入口](README.md)
