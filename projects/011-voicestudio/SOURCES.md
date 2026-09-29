# VoiceStudio 来源与素材

研究日期：2026-09-29。VoiceStudio 固定提交：eef0e2304be21c9bfd08cfca0254918522105b06。Voicebox 对照提交：51f49dea198384b4eb6087b72c17057c6eb1c1cd。

- [README.md](https://github.com/debpalash/VoiceStudio/blob/eef0e2304be21c9bfd08cfca0254918522105b06/README.md)
- [docs/feature-catalog.md](https://github.com/debpalash/VoiceStudio/blob/eef0e2304be21c9bfd08cfca0254918522105b06/docs/feature-catalog.md)
- [docs/mcp.md](https://github.com/debpalash/VoiceStudio/blob/eef0e2304be21c9bfd08cfca0254918522105b06/docs/mcp.md)
- [docs/performance.md](https://github.com/debpalash/VoiceStudio/blob/eef0e2304be21c9bfd08cfca0254918522105b06/docs/performance.md)
- [docs/benchmarks.md](https://github.com/debpalash/VoiceStudio/blob/eef0e2304be21c9bfd08cfca0254918522105b06/docs/benchmarks.md)
- [electron/README.md](https://github.com/debpalash/VoiceStudio/blob/eef0e2304be21c9bfd08cfca0254918522105b06/electron/README.md)
- [LICENSE-NOTICE.md](https://github.com/debpalash/VoiceStudio/blob/eef0e2304be21c9bfd08cfca0254918522105b06/LICENSE-NOTICE.md)
- [backend/services/tts_backend.py](https://github.com/debpalash/VoiceStudio/blob/eef0e2304be21c9bfd08cfca0254918522105b06/backend/services/tts_backend.py)
- [backend/services/asr_backend.py](https://github.com/debpalash/VoiceStudio/blob/eef0e2304be21c9bfd08cfca0254918522105b06/backend/services/asr_backend.py)
- [backend/services/dub_pipeline.py](https://github.com/debpalash/VoiceStudio/blob/eef0e2304be21c9bfd08cfca0254918522105b06/backend/services/dub_pipeline.py)
- [backend/services/translator.py](https://github.com/debpalash/VoiceStudio/blob/eef0e2304be21c9bfd08cfca0254918522105b06/backend/services/translator.py)
- [backend/services/audiobook.py](https://github.com/debpalash/VoiceStudio/blob/eef0e2304be21c9bfd08cfca0254918522105b06/backend/services/audiobook.py)
- [backend/services/chunked_tts.py](https://github.com/debpalash/VoiceStudio/blob/eef0e2304be21c9bfd08cfca0254918522105b06/backend/services/chunked_tts.py)
- [Voicebox 对照](https://github.com/jamiepine/voicebox/blob/51f49dea198384b4eb6087b72c17057c6eb1c1cd/README.md)
- [OmniVoice 模型](https://github.com/k2-fsa/OmniVoice)
- [OmniVoice 论文](https://arxiv.org/html/2604.00688v1)
- [模型卡与权重许可](https://huggingface.co/k2-fsa/OmniVoice#license)
- [官方音频演示](https://zhu-han.github.io/omnivoice/)

## 引用素材

截图均直接引用 VoiceStudio 固定提交的 docs/media/electron/ 下 voice-cloning.png、dubbing.png、voice-design.png、models.png，未下载或重新分发截图文件。

### 中文声音克隆

- [参考录音](https://zhu-han.github.io/omnivoice/audios/minimax/prompt/common_voice_zh-CN_41581691.mp3)
- [生成语音](https://zhu-han.github.io/omnivoice/audios/minimax/generated/chinese_00065.wav)

### 按属性设计声音

- [儿童女声](https://zhu-han.github.io/omnivoice/audios/voice_design/1.wav)
- [男声 · 高音调 · 印度口音](https://zhu-han.github.io/omnivoice/audios/voice_design/2.wav)

### 中文多音字控制

- [拼音控制样例](https://zhu-han.github.io/omnivoice/audios/fine_grained/3.wav)

音频由原站提供，不代表 VoiceStudio 的本机推理结果；中文克隆参考材料原站标注来源于公开评测集。未复制或重新分发音频。页面提供源站入口以便查看上下文。

本研究的总览 SVG、页面文字、教学流程与示例文稿为自主整理；未复制上游程序实现。公开资料快照只放在被忽略的 tmp/voicestudio-research，文件哈希在 sources/manifest.json 中。
