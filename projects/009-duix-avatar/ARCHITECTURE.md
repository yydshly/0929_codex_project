# Duix Avatar · 底层原理

## 模型、算法与软件的关系

它属于模型驱动的音视频应用：模型承担语音识别、声音生成及人物视频合成；普通程序负责文件处理、请求调用、队列和界面。“模型还是算法”并非二选一，模型本身也是由训练算法从数据中获得参数的计算程序。

需要区分三样东西：

| 概念 | 在这里的含义 |
| --- | --- |
| 预训练模型 | 具有语音或视频处理能力的模型参数；运行在推理服务环境中 |
| 人物参考素材 | 上传的人物视频、提取的声音、识别得到的参考文字 |
| 应用中的人物/声音记录 | 将素材路径、名称、声音 ID 等联系起来的数据库记录 |

创建一条人物记录，不能作为“为每个人训练了一套新权重”的证据。客户端函数虽命名为 `train`，其可见行为是请求参考声音预处理并保存返回的音频位置与文字。

依据：[人物创建](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/src/main/service/model.js)、[声音处理](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/src/main/service/voice.js)。

## 已确认的数据流

### A. 准备人物

`上传视频 → FFmpeg 转 H.264 → 提取 WAV → 参考声音预处理 → 保存素材关联`

1. `addModel` 生成素材文件名并调用 `toH264`。
2. `extractAudio` 从视频中提取声音。
3. `trainVoice` 请求 `/v1/preprocess_and_tran`。
4. 将返回的 `asr_format_audio_url`、`reference_audio_text` 保存为声音记录，再将声音 ID 与人物视频关联。

这里可见的是前处理和持久化，没有在客户端看到训练循环、梯度更新或导出个人权重。后端是否还有额外优化不能仅凭函数名称确认。

### B. 准备新声音

`目标文字＋参考声音＋参考文字 → TTS 服务 → 新 WAV`

Fish Speech 相关服务接收新文案与参考条件，输出语音。通俗理解是：模型已学会语音生成，再参照样本生成相似音色。客户端提供 `temperature`、`topP` 等采样参数，并设置 `streaming: false`；这些参数的存在不代表用户界面支持所有情绪或韵律控制。

若作品已指定 `audio_path`，客户端直接采用已有音频，本次生成不调用 TTS。

### C. 合成新视频

`目标音频＋人物视频 → 视频服务 → 任务编号 → 查询结果 → 导出`

`makeVideoByF2F` 提交 `audio_url`、`video_url` 与唯一任务码。客户端轮询任务状态，成功后读取产物路径、探测时长，并允许复制导出文件。

任务状态大致为 `draft → waiting → pending → success / failed`。客户端查询间隔约两秒，这只是进度查询节奏，不是视频生成速度。

依据：[TTS 接口](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/src/main/api/tts.js)、[视频服务调用与队列](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/src/main/service/video.js)、[FFmpeg 工具](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/src/main/util/ffmpeg.js)。

## 口型模型内部：哪些能说，哪些不能说

**通用技术解释，非 Duix 内部结构的实证：** 音频驱动人脸生成通常会提取随时间变化的语音特征，结合人物图像特征预测嘴部或面部变化，再将生成区域与视频帧组合。相邻发音和语速影响嘴型，因此不是简单的逐字动画表。

**本仓库实际确认：** 输入是音频与视频，推理由 `guiji2025/duix.avatar` 镜像中的服务承担。

**仍不能确认：** 视频模型名称、参数量、训练数据、损失函数、面部生成范围、特定网络结构、是否采用扩散/GAN、是否源自某个已有口型项目。未将 Wav2Lip、MuseTalk、SadTalker 等具体名称作为该项目的已知实现。

固定提交的完整文件树有 581 个文件，按 `.py`、`.onnx`、`.pt`、`.pth`、`.ckpt`、`.safetensors` 检索未匹配文件；这说明该 Git 树未提供这些形式的核心实现与权重，不足以断言容器内部是否公开、加密或可修改。没有下载或审计容器内容。

## 本地、远端和云 API

| 路径 | 模型在哪里运行 | 当前证据与条件 |
| --- | --- | --- |
| 正式客户端＋默认服务 | 本机 GPU 容器 | 配置使用 `127.0.0.1`，素材与服务共享本地目录 |
| 开发模式 | 配置指向 `192.168.4.204` | 写死的局域网开发地址；还存在测试音频与视频分支，不能直接当作通用部署 |
| 改造为自有远端服务器 | 自有服务器 | 工程扩展方向；须适配文件传递、路径、鉴权与调度，未在本次实施 |
| 官方云 API | 厂商基础设施 | 另一服务方案；能力、许可、费用须独立核查 |

“使用 HTTP API”不意味着一定调用云模型。API 只是调用方式，`127.0.0.1` 表示本机。Docker 则封装服务运行环境，本身并不提供智能能力。

依据：[地址和路径配置](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/src/main/config/config.js)、[部署配置](https://github.com/duixcom/Duix-Avatar/blob/1328feb5871448c8fa3d0e45b3bbc87e7c1d458a/deploy/docker-compose.yml)。

## 可以借鉴的工程方法

将生成服务与界面分开，通过文件和任务编号组织重计算；把参考素材和作品分开保存；为耗时生成提供等待、运行、成功和失败状态。这些结构可用于自己的视频工作流。若要提供多人在线服务，还需自行补齐并发限制、持久任务调度、重试、权限、存储与监控。

[返回总览](README.md) · [依赖清单](DEPENDENCIES.md)
