# MengTo/Skills · 来源与核验记录

## 研究基线

| 项目 | 记录 |
| :--- | :--- |
| 研究日期 | 2026-09-29 |
| 上游 | [MengTo/Skills](https://github.com/MengTo/Skills) |
| 提交 | [`798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d`](https://github.com/MengTo/Skills/commit/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d) |
| 提交时间 | 2026-09-28 07:26:50 UTC |
| 获取方式 | GitHub REST 提交信息及该提交的公开 ZIP 归档 |
| 研究环境 | Windows / PowerShell；Python 标准库用于本地统计和文档生成 |
| 文件保存范围 | 中文研究、结构化元数据、来源哈希、许可证和自主编写的目录生成脚本 |
| 上游执行情况 | 没有安装技能、执行脚本或运行演示 |

公开归档在临时目录只读查阅，不是本研究集中的嵌套仓库。结构化清单保留上游技能名称与英文描述，并附 [MIT 许可](LICENSE.upstream)；本地中文解释属于研究摘要，未逐句翻译完整技能正文。

## 证据分级

- **直接核对的结构事实：** 目录、技能数量、元数据、资源存在性及所记录文件的哈希。
- **上游声明或流程目标：** 技能正文要求、作者报告的效果、测试结果与性能数字。本次没有据此认定本机复现成功。
- **研究判断：** 主方向、任务适配程度、优先级、个人价值与组合建议。依据来自目录与正文，并非量化效果评测。

`skills-catalog.json` 的 `review_level` 区分元数据与结构检查、正文抽查；每项 `runtime_verified` 都为 `false`。配套文件列表表示其存在，不表示全部逐行审计。

## 数量核验

统计路径为 `agent-skills/*/*/SKILL.md`。本次共发现 146 项，名称无重复，并逐项对应中文注释。

| 分类 | README 分类小计 | 实际文件数 | 处理方式 |
| :--- | :--- | ---: | :--- |
| `3d` | 分类说明列出 9 | 9 | 使用实际数量 |
| `codex` | 19 | 20 | 保留差异说明 |
| `game-development` | 20 | 20 | 一致 |
| `media` | 2 | 2 | 一致 |
| `ui` | 1 | 3 | 包含审查与质量约束技能 |
| `web-design` | 81 | 88 | 根据文件列表补全索引 |
| `workflow` | 4 | 4 | 一致 |
| **总计** | **README 总数写 146** | **146** | 总数一致，部分分类小计滞后 |

另外核对：98 项存在 `demo/index.html`，98 项存在 `demo/PROMPT.md`，14 项的 `scripts/` 子树有文件。统计的是具备某种文件的技能数量，不是脚本总数或已验证演示数量。

## 正文抽查清单

以下 14 个技能用于检查规则、流程目标及限制，固定版本原文可在 [SKILLS.md](SKILLS.md) 中按名称找到。

| 技能 | 核对重点 |
| :--- | :--- |
| `design-first-ui-prompting` | 设计说明结构与少变量迭代 |
| `audit-ai-design-slop` | 基于证据审查、删除优先、避免通用数值审美评分 |
| `no-ai-design-slop` | 保留既有方向、质量门槛与可用性检查 |
| `video-to-superprompt` | 视频信息、关键帧、分层分析和最终提示 |
| `stitched-full-page-capture` | 预滚动、分段截图、拼接与核对 |
| `build-awwwards-quality-sites` | 视觉方向、素材、动效、降级与交付检查 |
| `workflow-score-to-target` | 评分尺度、实际证据、迭代与诚实报告 |
| `test-playable-web-games` | 玩家旅程、确定性状态、实际试玩与缺陷证据 |
| `iterate-until-verified` | 原始目标、验收条件、执行和验证边界 |
| `elevenlabs-tts` | 账户配置、凭据、声音选择及音频输出 |
| `publish-project-to-github` | 范围、发布条件、项目说明与上线后检查 |
| `product-proof-saas` | 真实产品流程、明确示例状态与价格说明 |
| `build-isometric-arpg` | 小型可玩循环、分步实现与试玩验证 |
| `3d-ultra-realistic-water` | 波浪与反射模块、参数、作者验证声明及成本 |

此外，局部阅读了 `web-technique-to-skill`、`landing-page`、`performance-profiling` 等正文段落，用于理解技术复用、页面内容和平台范围；这些条目没有标记为完整正文抽查。浏览了三维、游戏、工作流分类说明，并检查长截图脚本的图像尺寸读取、浏览器和 ffmpeg 调用。

## 关键依据

- [上游 README](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/README.md)：定位、目录规范和宣称数量。
- [3D 分类说明](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/3d/README.md)：三维场景范围。
- [游戏分类说明](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/game-development/README.md)：玩法系统与职责边界。
- [工作流分类说明](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/workflow/README.md)：截图、评分、交付与多任务管理。
- [长截图脚本](https://github.com/MengTo/Skills/blob/798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/agent-skills/codex/stitched-full-page-capture/scripts/stitch_full_page_capture.mjs)：实际含 `sips`、Playwright 和 ffmpeg 调用，是 Windows 适配判断的直接依据。
- [OpenAI 技能机制](https://developers.openai.com/plugins/concepts/skills)：技能与工具分工、元数据匹配、完整指令加载。此链接为实时官方文档，未做版本快照。
- [本地 002 研究](../002-agent-skills/README.md)：与已有工程流程技能项目的方向比较，不等于重新审计其上游。

## 可追溯数据

- [skills-catalog.json](skills-catalog.json)：146 项，包含中文能力、场景、预期效果、原始描述、固定版本链接、配套路径和核验层级。
- [sources-manifest.json](sources-manifest.json)：152 个来源文件，即 146 个技能入口，加 README、许可证、三个分类说明和一个关键脚本。记录原始字节长度、SHA-256 及按 Git blob 格式计算的 SHA-1。
- [LICENSE.upstream](LICENSE.upstream)：上游许可证原文，适用于复制的上游内容，不代表为整个研究集重新选择了许可证。

哈希根据归档文件的原始字节计算，便于后续比对，不构成独立签名验证。资源路径清单中的演示和素材没有全部进入哈希清单。

## 重新生成目录

自编脚本只读取文件，不导入或执行上游程序。输入目录需要是该固定提交的解压目录，并在同级保存 GitHub 提交响应 `commit.json`，脚本会核对其中 SHA。

```text
snapshot/
  commit.json
  Skills-798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d/
    README.md
    LICENSE
    agent-skills/...
```

从研究集根目录运行，替换示例路径：

```powershell
python projects/004-mengto-skills/scripts/build_catalog.py --source 'C:/path/to/snapshot/Skills-798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d'
```

此命令生成或覆盖 `SKILLS.md`、`skills-catalog.json`、`sources-manifest.json` 和 `LICENSE.upstream`，保留其他研究正文。若更换上游提交，需要先更新版本与中文注释，再核对正文，不能仅替换 SHA 就宣布研究已更新。

## 本次交付检查

- 146 个技能名称唯一，均有中文能力、场景和预期效果说明，并在 Markdown 索引中各出现一次。
- 七个分类小计与总数一致；152 个来源文件的 SHA-256 与本地固定快照一致。
- 检查 200 个 Markdown 链接：本地目标均存在；指向固定提交文件的路径均在快照中存在。外部链接未逐一执行在线可用性检查。
- 总项目索引已加入 004 号项目；编号调整后没有遗留 `003-mengto-skills` 路径。
- 格式差异检查通过；研究目录没有可被当成上游技能入口的 `SKILL.md` 或嵌套 `.git`。

## 能力网页补充

在同一固定版本上补充 [具体能力说明](CAPABILITIES.md) 与 [查询网页](web/index.html)，覆盖全部 146 项技能，以 11 个任务方向重新归类。每项增加具体职责，并说明输出与边界；原始七分类仍可交叉筛选。这是研究性归纳，不是新一轮上游运行验证。

已在本地浏览器检查中文搜索、方向与原始分类交叉筛选、无结果恢复、详情打开与 Escape 关闭、继续展示更多结果、查询与详情地址刷新恢复，以及 390px 手机视口的详情排版。截图见 `assets/`。检查中未发现页面控制台错误或警告。发布目录已准备，未对外发布。

## 上游实现仍未验证的内容

- 全部演示能否运行，外部资源是否仍可访问。
- 各技能在 Codex、Claude、Cursor 中的触发准确性与执行成功率。
- 当前账户能否使用上游写明的模型、媒体服务和社交数据。
- 性能、帧率、图像质量、效率、返工率及转化率的实际提升。
- 所有脚本的完整安全性、跨平台兼容性和第三方素材使用条件。

这些限制不影响本次文档与目录研究的完成状态；采用具体技能时，应针对相应场景补充实际验证。

[返回项目总览](README.md)
