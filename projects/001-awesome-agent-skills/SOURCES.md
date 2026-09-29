# 来源与证据索引

访问日期：2026-09-29。目录版本已固定；其余 main 页面和在线标准可能变化。网页的上游目录快照保存于 `sources/upstream-README.md`，并保留 `sources/LICENSE`；未复制外链技能实现。

| 编号 | 来源 | 支持内容 | 核验 |
| :--- | :--- | :--- | :--- |
| S01 | [固定版本 README](https://github.com/VoltAgent/awesome-agent-skills/blob/ed106e8edc7c6d04fe3aedcbfaed1b43247f56a7/README.md) | 代表条目、目录定位、审计边界 | 网页阅读＋固定提交原始文件核对 |
| S02 | [提交 API](https://api.github.com/repos/VoltAgent/awesome-agent-skills/commits/ed106e8edc7c6d04fe3aedcbfaed1b43247f56a7) | 提交号与时间 | 公开只读请求 |
| S03 | [CONTRIBUTING](https://github.com/VoltAgent/awesome-agent-skills/blob/main/CONTRIBUTING.md) | 链接收录模式和要求 | 阅读正文 |
| S04 | [LICENSE](https://github.com/VoltAgent/awesome-agent-skills/blob/main/LICENSE) | 目录 MIT 标记 | 阅读文件 |
| S05 | [标准概览](https://agentskills.io/home) | 定位与渐进加载 | 阅读标准站点 |
| S06 | [格式规范](https://agentskills.io/specification) | 结构、字段和资源 | 阅读规范 |
| S07 | [客户端指南](https://agentskills.io/client-implementation/adding-skills-support) | 发现、激活和上下文 | 阅读实现指南 |
| S08 | [网页测试技能](https://github.com/anthropics/skills/blob/main/skills/webapp-testing/SKILL.md) | 流程、脚本、工具 | 阅读技能文件，未执行 |
| S09 | [XLSX 技能](https://github.com/anthropics/skills/blob/main/skills/xlsx/SKILL.md) | 表格、重算、检查、Proprietary 标记 | 阅读文件，未执行；完整许可条款未审查 |
| S10 | [Supabase 技能](https://github.com/supabase/agent-skills/blob/main/skills/supabase-postgres-best-practices/SKILL.md) | 实际名称、规则分类和参考文件 | 修正路径后阅读 |
| S11 | [Supabase 仓库](https://github.com/supabase/agent-skills) | 技能入口与任务范围 | 阅读 README |
| S12 | [Vercel 仓库](https://github.com/vercel-labs/agent-skills) | React 性能和界面检查 | 阅读 README，未抽查脚本 |

## 网页补充研究

新增读取 Anthropic 的 docx、pptx、pdf、frontend-design、canvas-design、doc-coauthoring、mcp-builder、skill-creator 的公开 SKILL.md（main，2026-09-29），结合此前三个样本共为 11 项中文解读提供技能文件依据；其他 29 项主要依据固定版本目录描述。每项具体引用保存在 [SKILL-DETAILS.md](SKILL-DETAILS.md) 和 `web/curated.mjs`。未执行这些技能。

解析范围为正式技能目录内带名称、链接和描述的列表项，兼容冒号与连字符格式；共 1,113 项，排除 5 个明确标注为非技能的配套工具，得到 1,108 个条目。不以徽章数或条目数推断独立技能数量。

## 首轮研究覆盖限制

- 抽查三个技能文件，不代表全库逐项评审。
- 能力矩阵 C 级只确认收录与描述，完整行为、许可和兼容性尚待核验。
- 未对广告或赞助内容作背书，未用星数作为质量指标。
- 未取得运行成功率、费用或提效数据；扩展路线和优先级为建议。
- 本地概念图为原创整理，不是上游截图。

[返回项目入口](README.md)
