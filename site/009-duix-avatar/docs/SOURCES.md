# Duix Avatar · 来源、版本与许可

## 固定版本来源

研究日期：2026-09-29。固定提交：`1328feb5871448c8fa3d0e45b3bbc87e7c1d458a`。以下链接均指向该提交；动态官方网站和 README 中指向的外部产品不由此版本冻结。

| 来源 | 用来确认什么 |
| --- | --- |
| [提交记录](https://github.com/duixcom/Duix-Avatar/commit/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a) | 研究版本与日期 |
| [完整文件树 API](https://api.github.com/repos/duixcom/Duix-Avatar/git/trees/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a?recursive=1) | 581 个文件、常见 Python/模型权重扩展名检索 |
| [中文 README](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/README_zh.md) | 项目定位、硬件、语言、安装和商用描述 |
| [英文 README](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/README.md) | 非实时定位与官方云服务区分 |
| [常见问题](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/doc/常见问题.md) | 创建人物需要视频中的人声、服务启动问题 |
| [package.json](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/package.json) | 客户端版本与直接依赖范围 |
| [Windows Compose](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/deploy/docker-compose.yml) | 三个服务、镜像名、端口和文件映射 |
| [Linux Compose](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/deploy/docker-compose-linux.yml) | Linux 路径和服务组合 |
| [Lite Compose](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/deploy/docker-compose-lite.yml) | 仅视频服务 |
| [5090 Compose](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/deploy/docker-compose-5090.yml) | 两个服务与不同镜像 |
| [config.js](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/src/main/config/config.js) | 正式/开发地址和操作系统路径 |
| [model.js](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/src/main/service/model.js) | 人物素材创建流程 |
| [voice.js](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/src/main/service/voice.js) | 参考声音、新语音、试听和生成参数 |
| [video.js](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/src/main/service/video.js) | 音频分支、提交、轮询、导出 |
| [tts.js](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/src/main/api/tts.js) | 两个语音接口 |
| [f2f.js](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/src/main/api/f2f.js) | 视频提交和查询接口 |
| [ffmpeg.js](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/src/main/util/ffmpeg.js) | 转码、提音频、时长与资源路径 |
| [electron-builder.yml](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/electron-builder.yml) | 平台打包与 FFmpeg 资源解包 |
| [LICENSE](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/LICENSE) | 自定义社区许可、商用触发条件和署名要求 |

## 商用说明存在冲突

| 位置 | 原文的关键含义 |
| --- | --- |
| README 商用对照表 | 用户量超过 10 万或年营收达到 1000 万美元以上的企业需签商业许可 |
| 根 LICENSE 第 2 条 | 列出超过 1000 月活的触发条件，涉及使用方及关联方提供的产品/服务，或集成该材料的产品；完整时间和适用范围见原文 |
| 根 LICENSE 第 1 条 | 分发或提供材料及相关产品/服务时，要求附协议、展示 Built with DUIX.COM，并作相关技术归属说明等 |

这份许可不是 MIT 或 Apache-2.0。不能把 README 的“开源”“免费商用”宣传解释成无限制授权，也不能把第 2 条缩写为“所有小于 1000 用户的项目都自动没有其他义务”。商业采用前应请维护者书面澄清适用版本、触发条件和相关模型许可。

仓库另含中英文模型社区许可 PDF。本次没有逐条读取与比对这两份 PDF，也没有审计镜像中第三方组件与权重的许可证，因此不出具全套商用许可已满足的结论。这是研究尚未完成的法律材料核对事项，不阻塞当前技术说明文档的交付。

## 效果演示补充

2026-09-29，核对官方 README 作品展中的 [HeyGem V1.0.3 演示](https://www.bilibili.com/video/BV1SkoCYpEwh/)和[单镜像本地教程](https://www.bilibili.com/video/BV1awQqYZEqB/)。实际视频页面使用 HeyGem 名称，属于旧版社区演示，不是当前 Duix 版本或本机的生成记录。详见[效果证据与验收方案](EFFECTS.md)。

## 资料使用范围

本目录是独立撰写的研究说明，通过链接引用上游代码和文档。没有复制上游应用源码、模型权重、安装包或宣传图片，也没有修改或重新分发运行中的 Duix 产品。对应用途与个人价值属于研究判断；具体产品效果应以后续真实样片为依据。

## 复现边界

固定提交冻结的是 Git 资料。Docker 配置没有固定镜像 digest，实际安装包、镜像和第三方服务可能变化。任何后续运行报告都应另外记录下载日期、镜像 digest、硬件环境、输入素材条件与生成参数。

[返回总览](README.md)
