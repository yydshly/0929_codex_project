# 011 展示素材

- `capability-summary.svg`：本研究原创完整能力汇报图，1800 × 2710；涵盖定位、八类能力、十个模块、数字人位置、场景价值与使用路径。原始绘图逻辑在 web/overview.mjs；用户确认后固定为发布素材，web/build.mjs 直接复制，避免构建改动原图。
- `capability-summary.png`：上述矢量图的高清导出。运行 web/render-overview.mjs 生成，可通过参数传入已有 sharp 包的路径；更新 SVG 后需同步导出 PNG。
- `cover.png`：本研究页面在 1440 × 1000 浏览器视口的实际截图。
- `mobile.png`：本研究页面在 390 × 844 浏览器视口的实际截图。

页面内官方应用截图与模型音频直接引用原站，不在本目录复制或重新分发。来源与固定提交见 [SOURCES.md](../SOURCES.md)。浏览器截图中的研究文字和教学图形由本项目制作，不是 VoiceStudio 本体运行截图。
