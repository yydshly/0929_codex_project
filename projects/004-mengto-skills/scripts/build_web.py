"""Build a dependency-free capability browser from the research catalog."""
import json
import shutil
import re
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
WORKSPACE = ROOT.parents[1]

# Editorial summaries of the recorded upstream descriptions, not runtime claims.
DETAILS = '''
3d-falling-leaves|让每片叶子独立翻转，并让侧向漂移与翻转相关；叶子处于真实三维空间，会被场景遮挡，并根据相机位置循环利用
3d-four-seasons|在同一个场景中协调切换植被、阳光、天空与地面材质；让积雪、粒子和季节色彩共同过渡，不必重建整个世界
3d-high-poly-models|改善近景模型的轮廓、曲面与倒角，减少明显的多边形切面；同时安排不同细节等级与加载方式，控制运行成本
3d-high-resolution-textures|组织颜色、粗糙度等物理材质贴图，处理纹理方向与表面清晰度；结合过滤和渐进加载，避免只增大图片却没有改善观感
3d-retina-resolution|让画布在高像素密度屏幕上清晰显示，支持明确的双倍分辨率目标；同步渲染与后处理尺寸，并保持指针坐标正确
3d-sky-background|制作程序化或全景天空，处理地平线雾气与太阳方向；让天空背景与场景中的环境光保持一致
3d-sky-rays|依据太阳投影与建筑、树木遮挡生成可见光束；控制光线对前景的影响，并提供可调整成本的后处理方案
3d-ultra-realistic-water|将波浪、反射、波峰透光、闪光和泡沫组织成同一套海洋渲染；船只尾流与浮力共享波浪信息，远处波纹做抗闪烁处理
3d-virtual-tour|安排导览相机路线、房间和楼层入口，以及自由观察模式；让自动游览与手动探索之间平滑切换，并逐步加载资源
article-prompts-to-skills|把文章或教程里的不同能力拆成独立技能；为每项补上说明、示例提示、演示和检查要求，便于后续复用
audit-reference-originality|比较成品和参考中的品牌、文案、布局、素材与运动方式；区分常见设计语言和过度接近的独特表达，并给出具体修改建议
audit-verify-explain-grade-5|用可以检查的事实核对工作与结论；把实现或测试结果改写成非技术读者也能理解的说明，并交代证据不足的部分
browser-video-recording|把网页操作编排成带指针、点击节奏和跟随缩放的演示录像；检查输出视频的规格和代表帧，便于展示产品流程
build-daily-inspiration-sites|把已经整理好的五项网页参考分别转成原创页面构建任务；保留可借鉴的设计特点，同时重写品牌、内容、数字和素材
codex-gpt-image-2-5-flare|通过宿主提供的图像能力生成或修改插画、精灵和徽记；检查透明背景，保存提示词，并按需要整合到项目
daily-ui-inspiration-capture|将浏览、截图、录屏和视觉分析整理为按日期归档的参考包；检查重复来源，并形成可用于后续构建的提示材料
elevenlabs-tts|把脚本文字转换为语音文件，按本地声音配置选择音色与输出参数；支持指定输出位置，避免把个人声音和账户配置写死在技能中
generate-reference-inspired-brand-worlds|从视觉参考提取共同风格，发展多个不同的品牌概念；控制接近参考的程度，并保留各方向独立的名称、图像与表达
html-to-interaction-prompts|从现有 HTML 页面拆出按钮、区块、悬停、动画或 WebGL 效果；用截图说明对应位置，输出可单独复用的交互描述
implement-fog-of-war|根据墙体和障碍决定游戏中的可见区域；同时处理玩家与敌人的感知、隐藏目标选择、迷雾接缝和移动端射线预算
iterate-until-verified|把复杂目标拆成可以通过或失败的验收项，并逐轮修正；区分制作与审查，保留原任务边界和每项判断的证据
optimize-web-animations|查找网页动画、定时器、事件监听和渲染循环的持续资源开销；暂停不可见动画，处理清理遗漏，并通过测量比较改动
performance-profiling|针对 Apple 应用的卡顿、内存、启动和耗电选择分析工具；根据 Instruments、Xcode 诊断或 MetricKit 证据定位问题
publish-project-to-github|将本地成品整理为范围清楚、说明完整的仓库；对兼容的静态项目配置展示页面，并分别核对源码上传和线上运行结果
stitched-full-page-capture|先滚动触发懒加载，再逐段等待页面稳定并截图；把视口片段拼成长图，减少动画或懒加载页面的缺段与空白
video-to-superprompt|从录屏拆解页面顺序、布局、字体、素材和运动节奏；把可见行为转成具体的实现说明，补充移动端与低动效要求
web-technique-to-skill|从已经做成功的代码中找出关键机制与重要参数；将技术本身和展示包装分开，保存昂贵的踩坑经验与验证方法
write-like-meng-on-x|根据 Meng To 已有的作者语料分析节奏、语气和选题；据此生成或修改 X 文案，并检查重复表达
x-bookmark-quote-posts|读取近期 X 收藏内容并核对原始来源；结合用户已有发帖语气，整理为引用帖草稿候选
author-game-levels|编排可走路线、地标、目标、拾取物与遭遇区域；区分视觉、碰撞与导航数据，使关卡状态可以复现检查
build-game-audio-feedback|把攻击、受击、状态与环境事件映射成声音反馈；处理音乐层次、空间音频、优先级、静音和移动浏览器解锁
build-game-camera-controls|实现跟随、俯视、锁定、缩放与遮挡处理；协调镜头震动和触摸控制，保证关键动作仍能看清
build-game-changelog|制作游戏内可查看的版本记录界面；将版本号、截图和部署出处对应起来，并处理打开、关闭、返回与响应式行为
build-game-inventory|定义拾取、堆叠、装备、拖拽、提示与背包存储规则；处理原子交换和存档迁移，避免操作中丢失或复制物品
build-game-map-editor|为浏览器游戏制作选择、拖动、吸附、图层和属性编辑能力；提供导入导出、撤销与草稿，并把编辑数据与正式游戏数据隔开
build-game-monster-system|规范怪物的关节、装备挂点、受击区域和攻击判定；把模型、动作状态和不同精度版本接入统一运行约定
build-hybrid-game-assets|判断某项素材适合导入模型、程序几何、精灵还是二维图片；统一尺寸、挂点、碰撞、来源和运行资源预算
build-isometric-arpg|搭建包含移动、一次战斗、奖励、成长和继续游戏的完整小循环；按可玩的纵向切片扩展，分开内容数据与运行状态
build-mobile-threejs-games|把移动、动作、选目标和背包操作适配到触屏；处理横竖屏、安全区域、游戏界面密度、耗电与性能预算
build-rigged-game-assets|整合角色主模型、骨架、动作库和独立装备；为待机、移动、攻击等动作建立可检查的预览与运行文件
build-threejs-enemy-systems|定义敌人类型、招式时序、内容格式与运行接口；让多个敌人复用同一套系统，并保留占位素材和可复现检查状态
build-vesperfall-review-assets|为 Vesperfall 素材目录建立参考 PNG 与真实模型预览的配对；让角色、道具和装备可以独立查看，追溯来源并检查动作
create-game-vfx|制作攻击、命中、状态、法术和危险预警特效；控制粒子与材质成本，保留低质量和减少动画时的可读反馈
design-action-combat|规定攻击前摇、生效、收招、防御和闪避窗口；统一接触、伤害、打断与反馈，使战斗结果可以确定性验证
design-game-encounters|把敌人组合、场地、波次、目标、首领阶段和奖励编排为一场遭遇；通过可复现状态检查难度与节奏
optimize-threejs-games|从帧耗时、绘制调用、贴图、几何和动画循环中查找瓶颈；通过质量分级与资源预算改善性能，同时保护操作和战斗体验
ship-web-games|整理游戏构建、素材交付、发布说明和回退准备；在部署后实际打开并试玩，区分本地就绪与线上可玩
test-playable-web-games|检查开始、操作、战斗、奖励、存档、失败重试到完成的玩家旅程；记录复现步骤、预期与实际行为、设备和最短证据
tune-enemy-ai|调整敌人的发现、目标选择、移动距离、攻击与撤退决策；用行为状态和可复现场景检查敌人是否公平且稳定
aura-asset-images|在 Aura 图片资源中按主题查找背景、建筑与人物等素材；输出真实图片链接，并解释尺寸、比例和裁切选择
unsplash-asset-images|按头像、肖像、背景和抽象素材等用途选图；提供真实来源链接以及不同版式所需的裁切与尺寸建议
audit-ai-design-slop|依据实际画面检查重复卡片、装饰堆叠、空泛文案与界面缺陷；优先指出可以删除或小幅修正的内容，并按影响排序
design-first-ui-prompting|把想法整理成目标、版式、字体、颜色、素材与限制；让设计修改聚焦少数变量，减少每轮大幅改变方向
no-ai-design-slop|在制作过程中检查层级、排版、装饰、真实内容和交互状态；保留既有设计方向，移除没有信息或功能作用的默认样式
add-mouse-driven-orbit|把同一个指针目标平滑分配给相机移动、观察点和物体微小转动；形成被动空间视差，而不是完整的自由模型查看器
add-shader-cursor-trail|组合半色调网格、色彩流动、水波和颗粒形成指针尾迹；为触控、低动效、不支持的渲染环境安排替代状态
agency-grid-layout-minimal|用严格的编辑式网格组织大标题、图片与功能标签；适合让机构作品和服务内容成为主角，装饰保持克制
ambient-section-particles|在单一区域管理花瓣、雪花、火花或品牌碎片的密度和运动；支持风、重力、指针扰动、回收与不可见时暂停
animation-on-scroll|检测元素进入视口的时机，再触发指定动画类或关键帧；适合按段落显现内容和简单的顺序进入效果
animation-systems|统一页面中的缓动、时长、错峰和过渡关系；覆盖滚动、悬停和状态变化，使不同组件的运动逻辑一致
atmosphere-background|组合缓慢移动的竖向光褶、叠加辉光与局部亮区；为暗色页面提供有深度的背景气氛
background-grid-webgl|绘制带透视和距离淡出的网格，并加入轻雾与缓慢移动；用小幅相机视差营造技术空间感
beam-glow-states|将沿边缘移动或呼吸的光束绑定到加载、选中和焦点状态；通过边缘反馈强调当前控件，而不是让所有组件持续发光
beautiful-shadows|使用多层中性阴影表达卡片、控件与弹层的高度关系；给出细化的阴影参数，避免单层阴影过硬或带不需要的色偏
blue-cloudy-clean-modern|围绕明亮蓝天空气感、白色边框和柔和云光组织界面；让字号与留白维持安静清晰的产品表达
blue-laser-clean-glass-layout|将细蓝色激光气氛、磨砂外壳和干净的数据界面结构结合；用光和透明层次突出深色页面的重点
book-serif-index|把页面设计成书籍与档案目录的阅读体验；结合衬线正文、等宽索引、纸张表面与页边注释
bright-green-tech-system-webgl|围绕亮绿色信号、硬边深色面板和分屏结构建立视觉规则；给 WebGL 主视觉留出明确的展示区域
build-awwwards-quality-sites|将品牌概念、首屏素材、排版和分章节运动统一编排；覆盖页面完整结构、交互状态、静态降级、可访问性和性能检查
build-interactive-particle-trail|沿指针或触摸走过的距离发射粒子，并复用 GPU 粒子池；支持按键爆发等互动，让快慢手势下的粒子间距更一致
build-threejs-scroll-worlds|让原生滚动推进一个持续存在的三维世界；相机、灯光、材质、物体和网页文字随章节共同变化
build-wireframe-scan-reveal|使用世界空间中扩张的扫描区域揭示模型；先显示线框骨架，再出现实体表面，随后让线框消退
cinematic-gsap-lenis-motion-system|协调平滑滚动、时间线、视差、固定区块和磁性悬停；为电影式网站建立贯穿各区块的运动系统
cinematic-scroll-storytelling|将文字、卡片堆叠、背景视差和章节转换与滚动进度连接；用连贯的时序把长页面组织成故事
clean-minimal-beige-light-mode|以暖米色、中性外壳和安静的流程网格组织页面；通过少量强调色和低强度结构线建立层级
cobejs|集成较轻量的交互地球，添加标记与拖动或旋转行为；处理画布尺寸和与 React 等页面环境的整合
company-logos|从图标体系选用品牌标志，保持尺寸和视觉呈现统一；解决页面中品牌图形的展示方式
container-lines|把容器边界以细竖线和小角点显示出来；让页面的内容宽度、网格与对齐关系成为可见结构
corner-diagonals|为按钮、卡片和面板创建斜切角与倒角轮廓；统一技术或科幻界面的几何边缘语言
corner-lasers|从角落安排光束、发射点、泛光和薄雾；形成具有明确方向的局部激光构图
css-alpha-masking|用透明度遮罩让内容在水平或垂直边缘逐渐消失；可处理图片、横向列表或装饰层的边缘衔接
css-border-gradient|在边框上安排有方向和强弱变化的渐变高光；使卡片、导航、按钮或弹层出现克制的材质边缘
dark-blue-contrasting-clean|用深蓝基础、钴蓝重点块和清晰边框形成高对比层级；以有限辉光强调重点，保持结构可读
dark-glass-clean-layout|组织深色磨砂容器、多列工作区和浮动数据卡；使用有限透明与空间层次，让密集界面仍有秩序
dither-background|生成可见方形像素与有序抖动组成的单色背景；通过宽幅波动或云团形态呈现有颗粒感的暗色气氛
dither-laser-dark-mode|把近黑色表面、细微抖动纹理和单一激光强调结合；形成统一的暗色技术视觉系统
documentary-brutalist-agency|以超大标题、黑白章节、暴露网格和纪实照片组织页面；加入不规则拼贴、克制视差和可访问的导航与问答
editorial-portfolio-chapters|让项目图片和案例章节主导作品集故事；用深色底、全幅媒体、不同章节色彩和明确联系入口组织阅读
editorial-service-booking|把服务项目、人物图片、地点和预约选择编排成编辑式页面；兼顾选择、预约和异常等实际操作状态
editorial-tech|融合杂志式非对称构图和精密的产品技术细节；通过大媒体带、等宽标签和少量强调色组织内容
falling-leaves|让二维叶片通过翻转产生正面、侧边再展开的变化；把侧向漂移与翻转关联，避免落叶看起来像普通彩纸
framed-grid-layout|用细边界线、角括号和轻微斜线纹理限定网格；建立章节之间严格对齐的页面骨架
framed-tech-dark-border-gradient|组合渐变边框、非对称面板与等宽功能标注；形成单色氛围下的深色技术布局
funky-purple-container-tech|使用层叠圆角外壳和紫红信号色组织技术内容；以较活泼的未来感物体作为局部视觉焦点
glass-dark-mode-clock|把磨砂层、柔和光束网格和圆形刻度盘组合为仪表语言；用于时间、校准或科幻测量感的界面
glass-dark-ui|制作可读的深色磨砂卡片和模糊面板；用遮罩处理渐变边框，控制透明背景上的文本对比
globe-gl|在地球上组织点、弧线、多边形和标签等数据图层；把空间数据与交互式三维地球整合起来
globe-particles|使用较密的发光球形粒子核搭配较稀的轨道或圆盘；形成行星或合成数据球的三维视觉
gooey-blob-system|让多个形状通过模糊和颜色矩阵滤镜融合成一团；随距离变化自然粘连和分离，表现有机流体感
gsap|编排动画时间线、错峰进入和滚动触发关系；处理变换属性、滚动测量与常见动画性能问题
gsap-scrolltrigger-storytelling|把产品展示区固定在视口中，随滚动逐步揭示界面；通过连续插值和章节转场讲清产品的变化过程
high-contrast-skeuomorphic-clean|利用成型深色表面、清晰亮边和内凹层次建立触感；以克制信号色区别状态与重点
image-first-grid-layout|让全幅摄影和大图决定页面构图；使用引导线、固定内容块和轻量技术标注补充说明
landing-page|围绕单一产品或服务目标组织页面结构、主文案和行动入口；安排利益点、流程、证据与常见问题的叙述顺序
light-mode-paper-technical|用暖纸面、深色外框、斜线纹理和精确括号构成浅色技术页面；让装饰细节服从信息层次
liquid-metal-border|把金属反光边缘应用于按钮、卡片、标签和选中表面；调节反射、辉光、强度与动画，并处理组件尺寸和状态
marquee-loop|通过重复内容实现看不到断点的循环移动；适合连续展示图片、条目或短标签
masked-reveal|把标题单词放在裁切容器中分批显现；通过遮罩与错峰运动形成明确的进入节奏
matterjs|把页面元素组织为带质量、碰撞和约束的二维物理物体；提供拖动和物理反馈，并处理与普通页面滚动的关系
mesh-gradient-dark-blue-clean|用程序化蓝色网状氛围衬托深蓝近黑基础；围绕首屏、导航、节点和框架章节保持一致视觉语言
nested-container-clean-agency|用外层编辑式框架承载内嵌深色重点块和圆角卡片；通过层层容器形成机构页面的内容节奏
nested-container-frames|以外层边界限定页面宽度，再用内嵌框表达不同信息层级；统一留白、边框与背景的关系
number-details|在步骤、章节或项目旁加入序号标记；通过连续编号提供秩序感和辅助识别
operational-enterprise-ai|围绕企业 AI 的边界、审批、审计、例外与回退组织整页叙事；规定深黑暖白、细线网格、字体与克制动效；实现可展开解决方案、案例筛选、演示或预约表单及异常状态；核对证据真实性、键盘与触屏操作、手机布局和低动效表现
orange-clean-paper-saas|以温暖纸感底色、橙色信号和圆角表面组织 SaaS 展示；让表单、产品插图和内容模块保持统一
pointer-trail-emitter|按指针经过的距离而非时间间隔产生尾迹；处理轨迹点排序、空闲状态与减速，使快速甩动时也不会明显断线
pricing-page|组织套餐定位、功能对比、计费单位与价格文案；补充购买顾虑、常见问题和可验证的页面实验方向
product-proof-saas|把真实或明确标注的产品流程放在页面中心；用输入、处理、草稿、编辑和完成状态说明软件能力，并衔接价格与疑问
progressive-blur|叠加多层带遮罩的背景模糊区域；让模糊强度从视口边缘向内部逐渐减弱
reveal-hover-effect|将两张对齐图片叠放，通过跟随指针的柔边遮罩露出第二层；适合黑白转彩色、材质变化与细节对照
scroll-progress-timeline|把有顺序的步骤转换为横向或纵向故事；随滚动填充进度线、突出当前步骤，并在窄屏重新排布
scroll-scrubbed-visual-sequence|让滚动进度控制视频、图片序列或画布与元素状态；支持向前与向后变化，适合装配、旋转和过程讲解
scroll-scrubbed-word-reveal|按滚动进度逐词揭示文案；保留链接、强调、换行和语义，让阅读节奏与滚动相关
scroll-world-storytelling|根据故事需要选择滚动视频、实时三维或图文数据叙事；把文章或案例转换为连续的视觉旅程
shaders-cursor-ripples|在原有图片上施加跟随指针的水波扭曲；聚焦图像互动层，不要求改变页面的品牌、文案与整体布局
skeuomorphic-ui|用层叠渐变、内外阴影、反光边缘和微纹理表现物理材质；制作有凹凸、雕刻或软金属触感的控件表面
solar-duotone-bold|为界面指定 Solar Duotone Bold 图标语言；通过一致的线条与双层色调减少符号风格混杂
split-layout-technical|把页面分成两个有对照关系的技术面板；用细框、等宽元信息和安静排版维持主次关系
staggered-word-reveal|让短标题中的单词依次淡入并轻微上移；以进入视口作为触发条件，形成较轻的编辑式动效
tailwindcss|用统一的样式规则实现布局、字体、响应式与主题；整理可复用的组件模式，减少页面之间的样式偏差
tech-green-dark-mode-modern|以哑黑表面、绿色状态信号和等宽标签构成现代技术视觉；使用带框数据卡与有限辉光强调重点
technical-wireframe-info-layout|以爆炸式三维结构、连接线和稀疏标注组织说明；在单色诊断式框架中解释部件关系
thinking-orbs|用不同运动状态表示搜索、思考、聆听、编写等实际活动；支持暂停、速度、主题和减少动画设置
threejs|搭建场景、相机、渲染器、灯光、材质与模型加载的基本组合；整合观察控制和性能约束，使三维内容嵌入网页
threejs-landscape|用程序化地形、草地、石块、天空和星空形成产品所在的环境；支持时段变化，并控制植被动画的运行开销
threejs-towers|用参数与几何规则生成塔楼、城堡、穹顶等建筑；通过裁切面和脚手架表现建筑逐步形成的过程
threejs-weather|协调雨、风暴、闪电、雪、积雪和湿地等环境状态；让声音、地面变化和天气强度一起变化
unicorn-studio|把已有 Unicorn Studio 交互作品嵌入网页；处理响应式尺寸、与文字的层级关系、性能与失败替代
vantajs|为网页集成参数化的动态 WebGL 背景；处理尺寸变化、参数调整与组件挂载清理
webgl-3d-object|制作有几何厚度、透视、物理材质与真实照明的主视觉物体；添加克制的旋转和漂浮运动
webgl-landing-steering|把高级、技术、趣味或电影感等方向转换成具体视觉约束；协调三维效果、转化内容、性能和实现复杂度
webgl-laser|绘制细而亮的激光核心、品牌色光晕和薄雾；聚焦全屏激光背景本身，不扩展成整页设计系统
workflow-progress-screenshots|为视觉工作保存开始、关键变化和完成状态的真实截图；用同一组可见证据让过程与结果可核对
workflow-score-to-target|先定义固定评分标准，再根据实际画面或测量判断差距；逐轮修正低分项，保留前后对比与未达标原因
workflow-ship-change|组织截图、版本日志、测试、提交和部署的交付链路；检查上传体积与线上结果，避免把单步成功当成完成发布
workflow-threads-manager|汇总同一项目多个工作会话的完成情况；核对合并、日志与上线状态，并找出中断或遗留工作
'''

GROUPS = [
    ('pages', '页面与产品表达', '解释产品、组织内容，完成一整页的叙事。',
     'landing-page pricing-page product-proof-saas operational-enterprise-ai editorial-service-booking editorial-portfolio-chapters documentary-brutalist-agency build-awwwards-quality-sites'),
    ('styles', '视觉风格与布局', '统一颜色、排版、材质和页面结构。',
     'agency-grid-layout-minimal blue-cloudy-clean-modern blue-laser-clean-glass-layout book-serif-index bright-green-tech-system-webgl clean-minimal-beige-light-mode dark-blue-contrasting-clean dark-glass-clean-layout dither-laser-dark-mode editorial-tech framed-grid-layout framed-tech-dark-border-gradient funky-purple-container-tech glass-dark-mode-clock glass-dark-ui high-contrast-skeuomorphic-clean image-first-grid-layout light-mode-paper-technical mesh-gradient-dark-blue-clean nested-container-clean-agency nested-container-frames orange-clean-paper-saas skeuomorphic-ui split-layout-technical tech-green-dark-mode-modern technical-wireframe-info-layout tailwindcss'),
    ('motion', '滚动与叙事动效', '让文字、页面状态和视觉序列随操作变化。',
     'animation-on-scroll animation-systems cinematic-gsap-lenis-motion-system cinematic-scroll-storytelling gsap gsap-scrolltrigger-storytelling marquee-loop masked-reveal scroll-progress-timeline scroll-scrubbed-visual-sequence scroll-scrubbed-word-reveal scroll-world-storytelling staggered-word-reveal'),
    ('details', '界面细节与状态', '处理边框、模糊、图标和工作状态反馈。',
     'beam-glow-states beautiful-shadows company-logos container-lines corner-diagonals css-alpha-masking css-border-gradient liquid-metal-border number-details progressive-blur solar-duotone-bold thinking-orbs'),
    ('effects', '互动与视觉效果', '把指针、图片、粒子和背景连接成可感知的互动。',
     'add-mouse-driven-orbit add-shader-cursor-trail ambient-section-particles atmosphere-background background-grid-webgl build-interactive-particle-trail build-wireframe-scan-reveal cobejs corner-lasers dither-background falling-leaves globe-gl globe-particles gooey-blob-system matterjs pointer-trail-emitter reveal-hover-effect shaders-cursor-ripples unicorn-studio vantajs webgl-3d-object webgl-landing-steering webgl-laser'),
    ('worlds', '三维场景与环境', '构建天空、水面、建筑、天气和空间旅程。',
     '3d-falling-leaves 3d-four-seasons 3d-high-poly-models 3d-high-resolution-textures 3d-retina-resolution 3d-sky-background 3d-sky-rays 3d-ultra-realistic-water 3d-virtual-tour build-threejs-scroll-worlds threejs threejs-landscape threejs-towers threejs-weather'),
    ('games', '游戏系统与体验', '搭建玩法循环、敌人、战斗、关卡和素材系统。',
     'implement-fog-of-war author-game-levels build-game-audio-feedback build-game-camera-controls build-game-changelog build-game-inventory build-game-map-editor build-game-monster-system build-hybrid-game-assets build-isometric-arpg build-mobile-threejs-games build-rigged-game-assets build-threejs-enemy-systems build-vesperfall-review-assets create-game-vfx design-action-combat design-game-encounters optimize-threejs-games ship-web-games test-playable-web-games tune-enemy-ai'),
    ('reference', '参考理解与提炼', '把网页、录屏、文章和成功案例转成可复用知识。',
     'article-prompts-to-skills daily-ui-inspiration-capture html-to-interaction-prompts stitched-full-page-capture video-to-superprompt web-technique-to-skill'),
    ('quality', '设计审查与质量', '明确设计要求，查找缺陷并用证据改善结果。',
     'audit-reference-originality audit-verify-explain-grade-5 iterate-until-verified optimize-web-animations performance-profiling audit-ai-design-slop design-first-ui-prompting no-ai-design-slop workflow-score-to-target'),
    ('media', '素材与内容', '选择图片、生成视觉素材、旁白与社交草稿。',
     'aura-asset-images unsplash-asset-images codex-gpt-image-2-5-flare elevenlabs-tts generate-reference-inspired-brand-worlds write-like-meng-on-x x-bookmark-quote-posts'),
    ('delivery', '制作与交付协作', '把参考变成作品，并保留制作与发布的证据。',
     'browser-video-recording build-daily-inspiration-sites publish-project-to-github workflow-progress-screenshots workflow-ship-change workflow-threads-manager'),
]

BOUNDARIES = {
    'pages': '负责页面内容、视觉与交互组织。页面中的业务介绍不等于已实现相应后端；商业效果需要真实使用数据验证。',
    'styles': '这是一套视觉规则，主要改变呈现方式。它不会自动补齐产品逻辑，也不意味着每种产品都适合这种风格。',
    'motion': '负责运动和滚动行为，需要在实际页面中处理触控、键盘与减少动画设置；动画本身不代表业务功能完成。',
    'details': '处理局部界面呈现。状态效果应由真实状态驱动，不能替代业务逻辑与可访问性。',
    'effects': '负责特定视觉机制或互动层。需要与现有内容、目标设备及浏览器能力配合，通常不承担整页信息设计。',
    'worlds': '负责三维呈现与场景组织。模型素材、资源预算、设备性能和集成效果需在实际项目中验证。',
    'games': '负责游戏中的一个系统或检查流程，需要与其余玩法和素材整合。技能描述不是一个已经完成的商业游戏。',
    'reference': '输出来自可访问参考的分析或复用材料。无法观察的状态和未运行的效果仍需单独核对。',
    'quality': '提供检查和改进方法。结论应对应真实证据，不构成自动通过的质量认证。',
    'media': '依赖可访问的素材、生成工具或服务。来源、账户条件和实际产出需在具体任务中确认。',
    'delivery': '组织制作与交付步骤。账户、宿主工具、目标项目和授权范围仍由实际任务决定。',
}
OVERRIDES = {
 '3d-falling-leaves': '用于真实三维场景中的叶片，能参与深度与遮挡。普通网页上的二维叶片层可看 falling-leaves。',
 'falling-leaves': '主要关注网页上的二维叶片表现；需要真实空间遮挡与风场时，查看 3d-falling-leaves。',
 'build-threejs-enemy-systems': '负责敌人类型、招式与运行接口。单只怪物骨骼看 build-game-monster-system，行为选择看 tune-enemy-ai。',
 'build-game-monster-system': '关注怪物骨骼、挂点和动作是否符合共同规范；不替代决定敌人何时攻击的行为系统。',
 'tune-enemy-ai': '负责敌人做什么、何时做；敌人数据结构与动作接口由敌人系统提供，命中结果由战斗系统处理。',
 'design-action-combat': '关注单次攻防动作的规则与判定；一整场战斗的敌人组合、波次和节奏由 design-game-encounters 负责。',
 'design-game-encounters': '组合已有敌人和攻防规则形成战斗情境；不会替代底层动作判定与敌人模型系统。',
 'performance-profiling': '明确面向 Apple 平台的 Instruments、Xcode 与 MetricKit。它不是 Windows 或网页通用性能分析技能。',
 'stitched-full-page-capture': '适合普通长截图缺段的页面；随附脚本依赖 Playwright、ffmpeg 和 sips，Windows 需要适配相关调用。',
 'write-like-meng-on-x': '依赖指定作者的语料与个人背景。研究其表达方式可以借鉴，不能把作者身份和个人经历直接当作你的。',
 'build-vesperfall-review-assets': '带有 Vesperfall 项目目录和审查语境。迁移到其他游戏时，需要替换资产约定与预览入口。',
 'codex-gpt-image-2-5-flare': '文件名保留上游模型名称；本次未确认该名称在当前账户是否可用。实际生成依赖宿主提供的图像工具。',
 'audit-ai-design-slop': '这是有证据的审查流程，默认提出删改建议，不直接重做页面，也不判断作品是否由 AI 制作。',
 'no-ai-design-slop': '在制作与修改时持续检查，保留已有方向；若只要正式审查报告，使用 audit-ai-design-slop 的职责更明确。',
 'company-logos': '只解决标志的视觉呈现；使用某个品牌图标不能作为合作关系、客户关系或品牌背书的证明。',
 'build-awwwards-quality-sites': '名称表示视觉完成度目标，不代表获奖或行业认可。成品仍需依据真实内容、设备表现与可用性判断。',
 'cobejs': '偏向轻量地球与标记呈现；需要复杂点线面数据图层时，globe-gl 的职责更匹配。',
 'globe-particles': '关注球形粒子与轨道的视觉形态，不等同于拥有地理数据图层的 globe-gl。',
 'build-daily-inspiration-sites': '上游流程明确针对五项参考和独立任务，且依赖 Sites；不是输入任意网址即可自动完成任意规模网站的保证。',
 'landing-page': '主要提供单目标页面的结构、文案和布局方法。所谓高转化是设计目标，不是已被证明的转化提升。',
 'pricing-page': '负责价格与套餐信息的组织，不负责支付、订阅扣费或后台账单系统。',
 'editorial-service-booking': '可以指导预约界面与状态设计；真实日历、库存、支付或预约确认服务需要另外接入。',
 'operational-enterprise-ai': '用于解释企业产品的控制与可信机制；页面提到审批、审计或回退，不等于这些后台能力已经实现。',
 'thinking-orbs': '表现 AI 正在进行的活动，不具备推理、搜索或语音识别能力；必须由实际应用状态驱动。',
 'video-to-superprompt': '产出主要是实现说明与提示材料，不会仅凭一段视频就证明原始代码、全部交互或后端逻辑。',
 'web-technique-to-skill': '以已经实现和检查过的技术为输入；从教程文字开始提炼可查看 article-prompts-to-skills。',
 'elevenlabs-tts': '需要 ElevenLabs 账户访问与声音配置；技能文件本身不附带可直接使用的服务额度。',
 'workflow-score-to-target': '分数依赖预先写明的标准和证据，仍是判断；不能把自评分当成独立测试或客观认证。',
}


def main():
    catalog = json.loads((ROOT / 'skills-catalog.json').read_text(encoding='utf-8'))
    detail = dict(line.split('|', 1) for line in DETAILS.strip().splitlines())
    skills = {s['name']: s for s in catalog['skills']}
    assert set(detail) == set(skills), (set(skills)-set(detail), set(detail)-set(skills))
    assigned = set()
    output = []
    groups = []
    for key, title, description, names in GROUPS:
        members = names.split()
        groups.append(dict(id=key, title=title, description=description, count=len(members)))
        for name in members:
            assert name not in assigned, name
            assigned.add(name)
            s = skills[name]
            output.append(dict(name=name, title=s['capability_zh'], group=key,
                category=s['category'], categoryLabel=s['category_zh'],
                points=detail[name].split('；'), scenario=s['scenario_zh'],
                output=s['expected_effect_zh'], boundary=OVERRIDES.get(name, BOUNDARIES[key]),
                source=s['source_url'], sourceDescription=s['description_en'],
                demo=s['source_url'].replace('/SKILL.md', '/demo/index.html') if s['has_html_demo'] else None,
                review='instruction_body_reviewed' if name in {'agency-grid-layout-minimal','book-serif-index','dark-glass-clean-layout','tech-green-dark-mode-modern','orange-clean-paper-saas','documentary-brutalist-agency','operational-enterprise-ai'} else s['review_level']))
    assert assigned == set(skills), set(skills)-assigned
    dataset = dict(commit=catalog['commit'], date=catalog['research_date'], groups=groups, skills=output)
    web = ROOT / 'web'
    web.mkdir(exist_ok=True)
    index = web / 'index.html'
    summary = (web / 'summary.html.inc').read_text(encoding='utf-8')
    index.write_text(re.sub(r'<!-- SUMMARY:START -->.*?<!-- SUMMARY:END -->', lambda m: '<!-- SUMMARY:START -->\n' + summary + '\n    <!-- SUMMARY:END -->', index.read_text(encoding='utf-8'), flags=re.S), encoding='utf-8')
    (web/'catalog.js').write_text('window.CAPABILITIES = ' + json.dumps(dataset, ensure_ascii=False) + ';\n', encoding='utf-8')
    lines = ['# MengTo/Skills · 具体能力说明', '',
      '本页按能力重新分为 11 组，覆盖固定版本的全部 146 项技能。关注每项负责的事情、产出和边界，不展开安装与调用教程。说明依据上游技能元数据及既有正文抽查，未运行上游实现。', '',
      '[打开能力查询网页](web/index.html) · [原始分类索引](SKILLS.md) · [来源与核验](SOURCES.md)', '']
    for group in groups:
        lines += [f"## {group['title']}（{group['count']}）", '', group['description'], '']
        for s in output:
            if s['group'] != group['id']: continue
            lines += [f"### {s['title']} · {s['name']}", '',
              '**具体能力：** ' + '；'.join(s['points']) + '。', '',
              '**对应场景：** ' + s['scenario'] + '。', '',
              '**预期产出：** ' + s['output'] + '。', '',
              '**能力边界：** ' + s['boundary'], '',
              f"[上游技能原文]({s['source']})", '']
    (ROOT/'CAPABILITIES.md').write_text('\n'.join(lines), encoding='utf-8')
    # Only this subproject's static files; do not touch other projects or the root site.
    target = WORKSPACE / 'site' / ROOT.name
    target.mkdir(parents=True, exist_ok=True)
    for filename in ('index.html','styles.css','summary.css','app.js','catalog.js','styles-lab.html','styles-lab.css','styles-lab.js','map.html'):
        if not (web/filename).is_file(): raise FileNotFoundError(web/filename)
        shutil.copy2(web/filename, target/filename)
    shutil.copy2(ROOT/'LICENSE.upstream', target/'LICENSE.upstream')
    for asset in ['capability-map.svg','capability-map.png'] + [f'style-{s}.png' for s in ('studio','paper','glass','terminal','saas','brutal')]:
        for asset_target in (web/'assets', target/'assets'):
            asset_target.mkdir(exist_ok=True)
            shutil.copy2(ROOT/'assets'/asset, asset_target/asset)
    print(json.dumps({'skills':len(output),'capability_groups':len(groups),'group_counts':{g['title']:g['count'] for g in groups},'output':str(target)}, ensure_ascii=False))


if __name__ == '__main__':
    main()
