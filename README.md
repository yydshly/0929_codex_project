# GitHub 项目研究集

记录近期遇到的优秀开源项目：理解设计思路，验证核心能力，沉淀可复用的经验，并按需制作 Web 演示。

这里是研究总入口。每个子项目都有固定编号、独立研究文档和图片目录；本页保留摘要与索引，详细过程放在对应子项目中。

## 项目索引

按编号升序排列。编号代表收录顺序，不代表排名；已分配编号保持不变，归档后也不复用。

| 编号 | 研究项目 | 摘要 / 关注点 | 进度 | Web 演示 |
| :--- | :--- | :--- | :--- | :--- |
| 001 | [Awesome Agent Skills](projects/001-awesome-agent-skills/README.md) | 技能与技能集合目录：20 类能力、预期产物和 5 个个人场景；1,108 项中文简介 | 已完成 | [能力摘要](https://yydshly.github.io/0929_codex_project/001-awesome-agent-skills/) |

## 项目图览

### 001 · Awesome Agent Skills

这是一个外部技能与技能集合的发现目录。下图直接展示 20 类能力、预期产物和使用时机；结合具体技能与工具，可以用于研究资料、交付文档、制作网页及自动化重复工作。

![Awesome Agent Skills 的 20 类能力、预期产物与使用场景](projects/001-awesome-agent-skills/assets/capability-summary.svg)

[完整研究](projects/001-awesome-agent-skills/README.md) · [能力摘要网页](https://yydshly.github.io/0929_codex_project/001-awesome-agent-skills/) · [下载摘要图](projects/001-awesome-agent-skills/assets/capability-summary.svg)

图示为固定版本目录的中文研究归纳；目录包含技能集合，1,108 是入口数，实际技能效果尚未逐项实测。

## 仓库结构

```text
.
├── README.md                  # 总览、顺序索引与项目图览
├── projects/                  # 研究子项目：001-name、002-name……
├── templates/project/         # 新子项目模板
│   ├── README.md              # 摘要、来源、运行方式、截图与结论
│   ├── RESEARCH.md            # 研究问题、验证过程与记录
│   ├── assets/                # 封面、截图、结构图
│   └── web/                   # 可选的 Web 演示源码
├── docs/                      # 收录规范与部署约定
└── site/                      # 统一发布的静态站点目录
```

## 开始研究

1. 按[收录规范](docs/PROJECT_GUIDE.md)分配下一个编号并复制[子项目模板](templates/project/README.md)。
2. 记录原仓库地址、研究版本、研究问题与验证结果，添加必要的截图。
3. 更新本页的项目索引与图览；需要在线展示时，按[Web 部署约定](docs/DEPLOYMENT.md)接入演示。

研究进度统一使用：`待研究` → `研究中` → `已完成`；暂时停止维护的项目标记为 `已归档`。在线演示是否可用单独记录。

## 来源与使用

本仓库主要保存研究笔记和自主编写的示例。引用代码、图片或文档时，应在子项目中注明来源，并保留原项目要求的许可证与版权声明。总仓库暂未选择统一开源许可证。
