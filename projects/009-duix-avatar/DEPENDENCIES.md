# Duix Avatar · 依赖整理

本清单来自固定提交的文档、package.json、Compose 与客户端配置。版本范围是上游声明，不表示当前最新推荐版本；没有实际安装或做兼容性测试。

## 按使用方式判断需要什么

| 使用方式 | 需要准备 | 不应混淆的地方 |
| --- | --- | --- |
| 使用官方桌面安装包和完整本地服务 | NVIDIA GPU/驱动、Docker/GPU 容器环境、服务镜像、素材空间、客户端 | 通常不需要单独安装 Node.js 来运行已打包桌面应用 |
| 修改或构建桌面源码 | 上述后端环境，加 Node.js、npm 依赖、构建工具 | 只启动前端不能替代模型服务；开发地址与样例硬编码需处理 |
| 已有音频，仅调用视频服务 | 视频镜像、GPU 环境、音视频素材及接口调用工具 | Lite 不包含语音识别与 TTS；原客户端的新增人物仍依赖声音服务 |
| 官方云 API | 另行获取服务与接口使用条件 | 属于独立产品，不使用本仓库默认本地推理配置 |

## 硬件与操作系统

| 项目 | 固定版本官方说明 | 本研究解释 |
| --- | --- | --- |
| Windows | Windows 10 19042.1526 或更高，使用 WSL/Docker | Windows 路径默认使用 D 盘；更换位置需同步改客户端和容器映射 |
| Linux | 完成 Ubuntu 22.04 Desktop 验证 | 不据此保证所有 Linux 发行版兼容 |
| GPU | NVIDIA；推荐 RTX 4070 | 推荐型号不等于精确最低显存；其他卡效果和容量需测 |
| 内存 | 32GB 及以上 | 不将 16GB 视为已验证可用配置 |
| CPU | 推荐 i5-13400F | 是参考配置，不是唯一可用型号 |
| 存储 | Windows 素材盘空闲超过 30GB，镜像存储位置超过 100GB；Linux 超过 100GB | 模型、镜像、缓存与生成文件持续占空间 |
| 首次下载 | 完整部署约 70GB 流量 | 是上游估计，镜像更新及不同方案可能改变大小 |

来源：[固定版本部署说明](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/README_zh.md)。

## 推理服务与端口

### 标准 Windows / Linux 配置

| 功能 | Docker 镜像 | 宿主端口 → 容器端口 | 用途 |
| --- | --- | --- | --- |
| 语音生成 | `guiji2025/fish-speech-ziming` | `18180 → 8080` | 参考声音预处理、文本转语音 |
| 语音识别 | `guiji2025/fun-asr` | `10095 → 10095` | 获取参考语音文字 |
| 视频生成 | `guiji2025/duix.avatar` | `8383 → 8383` | 音频驱动人物视频 |

GPU 由 NVIDIA 容器运行环境提供；Linux 说明包含 NVIDIA Container Toolkit。Python、模型框架及模型运行资源通过镜像方案提供，Compose 没有锁定完整 Python 包版本与权重版本。不能把客户端的 Node.js 依赖当成完整 AI 依赖清单。

### 配置变体

| Compose 文件 | 服务数 | 与标准方案的区别 |
| --- | ---: | --- |
| `docker-compose.yml` | 3 | Windows D 盘目录映射 |
| `docker-compose-linux.yml` | 3 | 用户主目录下的数据映射 |
| `docker-compose-lite.yml` | 1 | 只包含视频生成服务 |
| `docker-compose-5090.yml` | 2 | 使用 `fish-speech-5090` 和 `duix.avatar-5090`；文件没有独立 ASR 服务 |

50 系列配置中 ASR 是否集成到其他服务，需要检查镜像或实际运行确认；不能因为标准版有三个服务就为此版本臆补第三个服务。

所有这些镜像引用都未固定标签或 digest，通常会解析到默认标签。因此**固定 Git 提交不能同时固定镜像内容**。正式复现实验还应记录镜像 digest、GPU/驱动、模型标识及生成参数。

来源：[Windows](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/deploy/docker-compose.yml)、[Linux](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/deploy/docker-compose-linux.yml)、[Lite](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/deploy/docker-compose-lite.yml)、[5090](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/deploy/docker-compose-5090.yml)。

## 客户端主要依赖

Node.js 18 是上游 README 的开发依赖说明，不是本研究针对当前环境的新版本推荐。以下为 package.json 声明范围：

| 组成 | 依赖及范围 | 作用 |
| --- | --- | --- |
| 桌面容器 | `electron ^33.0.0` | 运行桌面界面与主进程 |
| UI 框架 | `vue ^3.5.13`、`pinia ^2.2.6`、`vue-router ^4.4.5` | 页面、状态与路由 |
| 组件与国际化 | `tdesign-vue-next ^1.10.3`、`tdesign-icons-vue-next ^0.3.3`、`vue-i18n ^10.0.5` | 组件、图标和多语言界面 |
| 本地数据 | `better-sqlite3 ^11.5.0` | 素材、声音与作品记录 |
| 请求 | `axios ^1.7.7` | 调用后端 HTTP 接口 |
| 音视频 | `fluent-ffmpeg ^2.1.3` | 调用 FFmpeg；还依赖实际可执行文件 |
| 日志与更新 | `electron-log ^5.2.2`、`electron-updater ^6.1.7` | 日志和客户端更新相关机制 |
| 通用工具 | `dayjs ^1.11.13`、`lodash-es ^4.17.21` | 日期、集合及通用处理 |
| Electron 工具 | `@electron-toolkit/preload ^3.0.1`、`@electron-toolkit/utils ^3.0.0` | 预加载与运行辅助 |
| 构建 | `electron-vite ^2.3.0`、`vite ^5.3.5`、`@vitejs/plugin-vue ^5.0.5`、`electron-builder ^24.13.3` | 开发、编译与安装包 |
| 样式与加载 | `less ^4.2.0`、`raw-loader ^4.0.2` | 样式编译与文本加载 |
| 检查和格式化 | `eslint ^8.57.0`、`eslint-plugin-vue ^9.26.0`、`prettier ^3.3.2` | 代码检查与格式化 |
| 检查配置 | `@electron-toolkit/eslint-config ^1.0.2`、`@rushstack/eslint-patch ^1.10.3`、`@vue/eslint-config-prettier ^9.0.0` | 配套规则 |

范围前的 `^` 表示允许范围内升级，不是已安装版本。精确依赖复现需同时使用对应 lockfile；此表不枚举传递依赖，不构成安全审计或完整软件物料清单。

另一个源码核查点：部分服务文件导入的是 `lodash`，而 package.json 直接声明 `lodash-es`。本研究未安装验证其依赖解析，源码构建时应检查，不能仅凭清单承诺开箱即用。

来源：[package.json](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/package.json)。

## 文件与接口的约定

| 内容 | 默认位置或接口 |
| --- | --- |
| Windows 人物视频与生成音频 | `D:\duix_avatar_data\face2face\temp` |
| Windows 参考音频根目录 | `D:\duix_avatar_data\voice\data` |
| Linux 对应目录 | 用户主目录下的 `duix_avatar_data` |
| 参考音频预处理 | `POST http://127.0.0.1:18180/v1/preprocess_and_tran` |
| 新配音 | `POST http://127.0.0.1:18180/v1/invoke` |
| 视频提交 | `POST http://127.0.0.1:8383/easy/submit` |
| 进度查询 | `GET http://127.0.0.1:8383/easy/query?code=任务码` |

`audio_url`、`video_url` 在客户端传入的是共享数据目录里的素材路径/文件名，不应当直接理解成任意互联网 URL。迁移数据盘需要同步改两侧路径；远程部署需要额外处理文件传递。

FFmpeg/FFprobe 在仓库 `resources/ffmpeg` 下有 Windows/Linux 资源，程序按开发/生产环境定位，安装包将资源解包使用。因此不仅要有 JS 包，也要确保对应平台二进制存在。

来源：[路径配置](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/src/main/config/config.js)、[FFmpeg](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/src/main/util/ffmpeg.js)、[打包设置](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/electron-builder.yml)。

## 部署前需要补齐的事实

用户本机 GPU 型号、显存、驱动、可用内存和磁盘尚未检查；镜像当前可下载性、内部依赖、最低硬件、断网行为及样片速度尚未验证。按官方设计可本地推理，不等于做过全部网络行为审计。后续实际部署时再确认这些项目即可。

[返回总览](README.md) · [研究记录](RESEARCH.md)
