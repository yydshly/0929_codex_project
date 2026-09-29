# OJO Design Skills · 原理、证据与边界

## 研究范围

基于提交 `fbd2c2d158e5ebda8930f4bc63ed635a8500d31f`（2026-07-29T10:20:08Z），2026-09-29 阅读并留档 16 个来源文件。当前固定文件树只有一个 SKILL.md 和九个参考文档。

采用本仓库现有静态研究站点结构，新建编号 007。没有安装上游 Skill、执行 install.sh、调用其编排工具，或进行设计效果对照实验。源码快照仅供研究，不作为当前会话指令。

## 底层原理

1. 宿主发现：核心文件的名称与描述声明技能用途；是否触发取决于宿主的技能加载机制。
2. 方法编排：需求判断、参考研究、方向确认、参数、组件、动效和审查构成工作流程。
3. 按需阅读：anti-patterns 为前置资料；其余专题在相应步骤提供细化知识。
4. 执行与复核：模型解释规则，宿主提供搜索、读图、代码与浏览器能力；审查以文字清单与报告为主。

安装脚本按目标客户端选择目录，读取本地文件或下载指定引用，发现 SKILL.md 后复制对应目录，记录清单。支持 dry-run、单技能、固定引用和自定义目录；默认备份已有副本，force 路径会删除旧副本。本研究仅阅读实现，未执行安装。

[安装实现](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/scripts/install.sh)

这套实现通过提示词、参考知识和流程约束影响模型输出，没有在本仓库提供新的模型权重、向量检索服务、渲染器或自动设计检测引擎。

## 两条路线与适用边界

- 效率路线：适用于 SaaS、后台和工具；参考成熟设计语言，重视可预测性与认知负担。
- 品牌路线：适用于消费、品牌电商与创意产品；由品牌和受众推导材质、角色、叙事或文化方法。
- 完整新设计流程要求展示方向并等待选择；General Skill Mode 对点评、参考适配和改进允许遵循调用者的交付形式，已有上游确认方向也可跳过重复确认。

[流程依据](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/SKILL.md)

## 核验发现

### 1. 只有一个独立 Skill

固定版本中 skills/ 下只有一个 SKILL.md。九个 references 文件属于它的知识资料；design-dna、write-code 等名称只在文字中引用，不能计为本库提供的独立技能。

[依据](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/SKILL.md#L83)

### 2. 文字要求不等于程序保障

质量门禁主要由模型阅读与自检执行。安装脚本负责复制技能文件，没有把审美禁令转换为浏览器检测、测试或自动修复引擎。

[依据](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/scripts/install.sh#L296)

### 3. 颜色规则存在冲突

反模式文档强调单独色相可以使用，但审查表仍含“主色不能是紫色”的绝对条目。应明确品牌依据与规则优先级，避免误判。

[依据](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/design-audit.md#L67)

### 4. 动效规则存在冲突

motion-system 将滚动显现视为需说明目的的技术，审查表仍要求静态内容不得滚动淡入。采用前应统一条件与例外。

[依据](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/references/motion-system.md#L78)

### 5. 外部编排与资源未随包提供

正文引用 emfont-fonts、write-mobile、design-refine.md、color-palette-library.md 以及 save_final_prd 等工具或资源。固定文件树没有对应实现，宿主需适配或替代。

[依据](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/skills/app-ui-ux-best-practices/SKILL.md#L367)

### 6. 展示案例不能证明因果

comparison-prompts.md 声称前后使用同一需求，但第一组 after 提示额外加入品牌定位、受众和卖点。这个对照不能单独证明差异由 Skill 带来；本研究也未运行对照实验。

[依据](https://github.com/touchine-ojo/OJO-Design-Skills/blob/fbd2c2d158e5ebda8930f4bc63ed635a8500d31f/docs/comparison-prompts.md#L9)

## 扩展方向（研究建议，非官方路线图）

### 接入团队设计系统

增加品牌参数、已有组件映射与允许例外，优先复用项目资产。

价值：让每次生成遵循团队规范。

### 让审查可测量

增加实际截图、键盘流程、对比度与响应式检测，记录证据而非仅勾选清单。

价值：区分规格完整与运行通过。

### 清理规则冲突与隐含依赖

建立优先级和能力声明，统一颜色、动效、方向确认等例外，补齐缺失引用。

价值：提高跨宿主使用的可预测性。

### 固定输出格式与平台适配

为参数和组件状态定义可校验结构，将设计方法与 Tailwind 配方分离。

价值：支持多技术栈和自动化交接。

### 建立受控效果评测

保持需求、模型、工具与素材条件一致，多次比较带/不带 Skill 的产物。

价值：检验可访问性、任务完成率与人工评价，而非只看截图。

## 未验证内容

- 上游技能是否被各客户端自动触发、是否顺利执行全部步骤。
- 上游组件示例的当前依赖兼容性、浏览器行为和无障碍合规情况。
- 设计质量、开发速度或商业转化是否因使用该 Skill 改善。
- 本地展示页的验证与截图只证明研究页面可用，不证明上游技能效果。

本项目验证结果见 [VERIFICATION.md](VERIFICATION.md)。
