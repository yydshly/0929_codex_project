# Skills Hub · 14 项能力清单

固定提交：`7714f1f0fb0cdd42639c6a390ac66e0381453e1d`。由 web/content.json 统一生成；代码核验不表示运行实测。

## 获取与归集

从分散的来源，建立自己的技能库。

### C01 · 从 Git 或本地安装

接收仓库地址、技能子目录或本地文件夹，将内容保存到中心目录。

- 预期结果：一份纳入管理、可追溯来源的 Skill。
- 使用边界：安装文件不会自动补齐技能执行所需的软件、账号或服务。
- 证据等级：代码核验
- [固定版本依据](https://github.com/qufei1993/skills-hub/blob/7714f1f0fb0cdd42639c6a390ac66e0381453e1d/src-tauri/src/core/installer.rs)

### C02 · 搜索与发现技能

通过精选列表和在线搜索寻找技能，在线搜索实现调用 skills.sh。

- 预期结果：带名称和来源的候选技能列表。
- 使用边界：搜索依赖外部服务；被收录不等于经过效果或安全认证。
- 证据等级：代码核验
- [固定版本依据](https://github.com/qufei1993/skills-hub/blob/7714f1f0fb0cdd42639c6a390ac66e0381453e1d/src-tauri/src/core/skills_search.rs)

### C03 · 导入已有技能

扫描选择的工具目录，将已有技能接入统一管理。

- 预期结果：分散技能进入同一份管理清单。
- 使用边界：发现范围受扫描目录配置影响，不能等同于全盘搜索。
- 证据等级：文档描述
- [固定版本依据](https://github.com/qufei1993/skills-hub/blob/7714f1f0fb0cdd42639c6a390ac66e0381453e1d/README.md)

### C04 · 阅读与分类整理

浏览文件树、Markdown 和代码；为技能设置标签并执行批量操作。

- 预期结果：可按用途整理、阅读和维护的个人技能库。
- 使用边界：标签用于组织内容，不决定 AI 何时触发技能。
- 证据等级：文档描述
- [固定版本依据](https://github.com/qufei1993/skills-hub/blob/7714f1f0fb0cdd42639c6a390ac66e0381453e1d/README.md)

## 分发与配置

决定哪些工具、哪些项目使用哪些技能。

### C05 · 分发到多个工具

按内置适配器的目录规则，将中心技能同步到目标 AI 工具。

- 预期结果：多个工具目录拥有同一技能的链接或副本。
- 使用边界：48 个适配器代表目录适配数量，不代表 48 种环境均已实测。
- 证据等级：代码核验
- [固定版本依据](https://github.com/qufei1993/skills-hub/blob/7714f1f0fb0cdd42639c6a390ac66e0381453e1d/src-tauri/src/core/tool_adapters/mod.rs)

### C06 · 限定全局或项目范围

为技能配置全局目标，或指定项目中的技能目录。

- 预期结果：个人通用方法与项目专用规则可分别配置。
- 使用边界：部分工具只有全局目录；范围设置不等于安全隔离。
- 证据等级：代码核验
- [固定版本依据](https://github.com/qufei1993/skills-hub/blob/7714f1f0fb0cdd42639c6a390ac66e0381453e1d/src-tauri/src/core/tool_adapters/mod.rs)

### C07 · 接入自定义工具目录

给内部工具配置技能目录、项目相对目录和同步模式。

- 预期结果：自有 Agent 也能接收中心库中的技能文件。
- 使用边界：适用于按目录读取技能的工具；不自动转换工具接口或技能语义。
- 证据等级：代码核验
- [固定版本依据](https://github.com/qufei1993/skills-hub/blob/7714f1f0fb0cdd42639c6a390ac66e0381453e1d/src-tauri/src/core/tool_adapters/mod.rs)

### C08 · 按需启用与停用

停用时移除工具侧同步，保留中心技能与配置，方便重新启用。

- 预期结果：控制工具侧可见的技能集合。
- 使用边界：是否需要重新加载，由目标工具的技能发现机制决定。
- 证据等级：文档描述
- [固定版本依据](https://github.com/qufei1993/skills-hub/blob/7714f1f0fb0cdd42639c6a390ac66e0381453e1d/README.md)

## 维护与恢复

让来源、内容和本机状态持续可追踪。

### C09 · 按来源更新

从原 Git 仓库或本地来源取得新内容，再更新已配置的同步目标。

- 预期结果：来源、中心内容与目标目录得到维护。
- 使用边界：更新结果仍需关注冲突、来源失效和目标同步失败。
- 证据等级：代码核验
- [固定版本依据](https://github.com/qufei1993/skills-hub/blob/7714f1f0fb0cdd42639c6a390ac66e0381453e1d/src-tauri/src/core/installer.rs)

### C10 · 系统定时更新

通过操作系统的调度机制执行技能更新，支持记录运行结果。

- 预期结果：不必每次打开窗口后手动逐项更新。
- 使用边界：实际可运行性取决于系统调度、凭据与网络；本研究未执行任务。
- 证据等级：代码核验
- [固定版本依据](https://github.com/qufei1993/skills-hub/blob/7714f1f0fb0cdd42639c6a390ac66e0381453e1d/src-tauri/src/core/system_scheduler.rs)

### C11 · 删除后恢复

本机回收站保留删除的技能及保存的本地配置，文档标明保留 30 天。

- 预期结果：误删内容可在保留期内恢复。
- 使用边界：恢复受原位置是否可用等条件影响，不等同于任意版本回滚。
- 证据等级：文档描述
- [固定版本依据](https://github.com/qufei1993/skills-hub/blob/7714f1f0fb0cdd42639c6a390ac66e0381453e1d/README.md)

## 跨设备与自动化

在电脑之间共享内容，让 AI 参与管理。

### C12 · 多台电脑同步内容

使用 GitHub、GitLab 或 Gitee 仓库同步技能内容、描述、标签等可移植信息。

- 预期结果：不同电脑共享技能库，各自保留本机工具配置。
- 使用边界：可移植清单剥离本地来源路径，不会把整台机器的配置照搬。
- 证据等级：代码核验
- [固定版本依据](https://github.com/qufei1993/skills-hub/blob/7714f1f0fb0cdd42639c6a390ac66e0381453e1d/src-tauri/src/core/device_sync/manifest.rs)

### C13 · 识别与处理同步冲突

比较基线、本地和远端的状态，规划合并、删除或保留冲突，并尝试文本合并。

- 预期结果：可区分独立修改与需要人工处理的冲突。
- 使用边界：自动合并有适用条件，不能保证所有并发修改无冲突。
- 证据等级：代码核验
- [固定版本依据](https://github.com/qufei1993/skills-hub/blob/7714f1f0fb0cdd42639c6a390ac66e0381453e1d/src-tauri/src/core/device_sync/merge.rs)

### C14 · 通过 AI 或命令行管理

skillshub-cli 提供列出、搜索、安装、部署、更新、标签与移除等命令，并支持 JSON 输出。

- 预期结果：AI 工具可按管理 Skill 的说明操作同一技能库。
- 使用边界：设备同步、账号授权、计划任务和应用设置仍由桌面端负责。
- 证据等级：代码核验
- [固定版本依据](https://github.com/qufei1993/skills-hub/blob/7714f1f0fb0cdd42639c6a390ac66e0381453e1d/src-tauri/src/cli/args.rs)
