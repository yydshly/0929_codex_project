# 静态站点发布目录

这里保存[研究站点](https://yydshly.github.io/0929_codex_project/)的总入口与静态页面，通过 GitHub Pages 自动部署。研究文档与源库入口见[总项目索引](../README.md#项目索引)。

## 页面索引

| 编号 | 项目 | 本地页面 | 在线展示 |
| :--- | :--- | :--- | :--- |
| 001 | [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) | [查看文件](001-awesome-agent-skills/index.html) | [查看网页](https://yydshly.github.io/0929_codex_project/001-awesome-agent-skills/) |
| 002 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | [查看文件](002-agent-skills/index.html) | [查看网页](https://yydshly.github.io/0929_codex_project/002-agent-skills/) |
| 003 | [mattpocock/skills](https://github.com/mattpocock/skills) | [查看文件](003-mattpocock-skills/index.html) | [查看网页](https://yydshly.github.io/0929_codex_project/003-mattpocock-skills/) |
| 004 | [MengTo/Skills](https://github.com/MengTo/Skills) | [查看文件](004-mengto-skills/index.html) | [查看网页](https://yydshly.github.io/0929_codex_project/004-mengto-skills/) |
| 005 | [qufei1993/skills-hub](https://github.com/qufei1993/skills-hub) | [查看文件](005-skills-hub/index.html) | [查看网页](https://yydshly.github.io/0929_codex_project/005-skills-hub/) |
| 006 | [jakubkrehel/skills](https://github.com/jakubkrehel/skills) | [查看文件](006-jakubkrehel-skills/index.html) | [查看网页](https://yydshly.github.io/0929_codex_project/006-jakubkrehel-skills/) |
| 007 | [touchine-ojo/OJO-Design-Skills](https://github.com/touchine-ojo/OJO-Design-Skills) | [查看文件](007-ojo-design-skills/index.html) | [查看网页](https://yydshly.github.io/0929_codex_project/007-ojo-design-skills/) |
| 008 | [yang0/handraw-style](https://github.com/yang0/handraw-style) | [查看文件](008-handraw-style/index.html) | [查看网页](https://yydshly.github.io/0929_codex_project/008-handraw-style/) |
| 009 | [duixcom/Duix-Avatar](https://github.com/duixcom/Duix-Avatar) | [查看文件](009-duix-avatar/index.html) | [查看网页](https://yydshly.github.io/0929_codex_project/009-duix-avatar/) |
| 010 | [earendil-works/pi](https://github.com/earendil-works/pi) | [查看文件](010-pi/index.html) | [查看网页](https://yydshly.github.io/0929_codex_project/010-pi/) |
| 011 | [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | [查看文件](011-voicestudio/index.html) | [查看网页](https://yydshly.github.io/0929_codex_project/011-voicestudio/) |
| 012 | [yc-software/qm](https://github.com/yc-software/qm) | [查看文件](012-qm/index.html) | [查看网页](https://yydshly.github.io/0929_codex_project/012-qm/) |

## 发布目录结构

```text
site/
├── index.html                     # 总入口
├── 001-awesome-agent-skills/      # 各项目静态页面
├── …
└── 012-qm/
```

## 构建与发布

- 在对应研究子项目中修改源码，再运行该项目的构建与验证命令。
- 只提交浏览器所需的静态文件；不要放入开发依赖、环境配置或密钥。
- 页面链接使用相对路径，兼容 GitHub Pages 的仓库子路径。
- 官方样例、教学示意和本机实测需分别说明；网页发布不代表已部署上游软件或模型。

构建命令、发布流程与验证结果见[Web 部署说明](../docs/DEPLOYMENT.md)。
