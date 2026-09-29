"""Rebuild the research catalog from a local, fixed upstream snapshot.

Reads files only; never imports or executes upstream code. Python 3.10+ stdlib.
Chinese annotations are research summaries, not translations of every instruction.
"""
import argparse
import hashlib
import json
import re
from collections import Counter
from pathlib import Path

COMMIT = '798db0a3ee4429ac8ed6bc5f4a59b6d45e7a914d'
BASE = f'https://github.com/MengTo/Skills/blob/{COMMIT}/'
CATEGORIES = {
    'web-design': '网页设计与交互', 'codex': '参考研究与智能体工作流',
    'game-development': '浏览器游戏开发', '3d': '3D 场景与渲染',
    'workflow': '协作、验收与交付', 'ui': '界面设计规范与审查', 'media': '图片素材选用',
}
# name | Chinese capability | scenario | expected artifact or effect
NOTES = '''
3d-falling-leaves|空间落叶|秋景与室外三维场景|有翻转、风向和遮挡关系的落叶
3d-four-seasons|四季切换|建筑与环境展示|光照、植被、地面和粒子的协调过渡
3d-high-poly-models|高细节模型|产品与建筑近景|更平滑的轮廓及分级加载方案
3d-high-resolution-textures|高分辨率材质|木石布料等近景|清晰且物理关系一致的材质表现
3d-retina-resolution|高像素密度渲染|WebGL 画面模糊|画布与后处理尺寸同步、清晰度可调
3d-sky-background|天空背景|室外与昼夜变化|天空、太阳、地平线与环境光协调
3d-sky-rays|天空光束|树林或建筑间阳光|考虑遮挡的太阳光束
3d-ultra-realistic-water|海洋水面|海景、船只与航行展示|波浪、反射、泡沫、尾流和浮力联动
3d-virtual-tour|虚拟导览|展厅、房产与博物馆|导览路线、房间切换和自由观察
article-prompts-to-skills|文章转技能|教程与提示词重复使用|独立技能包、示例和验证要求
audit-reference-originality|参考相似性审查|借鉴其他网站之后|有证据的相似点、风险提示与修改建议
audit-verify-explain-grade-5|核验并通俗解释|研究结论或改动验收|以证据支撑的易懂说明
browser-video-recording|浏览器演示录屏|展示网页操作过程|按步骤组织的录屏与媒体核验记录
build-daily-inspiration-sites|灵感批量转页面|已有五项灵感采集包|五个原创落地页任务与构建流程
codex-gpt-image-2-5-flare|图像生成与透明素材|装饰、游戏精灵和徽记|图像文件、提示词和透明通道检查
daily-ui-inspiration-capture|日常设计灵感采集|长期积累网页参考|按日期组织的截图、录屏和提示词包
elevenlabs-tts|语音旁白|产品或视频解说|使用指定声音配置生成的音频
generate-reference-inspired-brand-worlds|品牌视觉方向探索|参考图转多套原创方向|不同品牌概念及其图像提示或输出
html-to-interaction-prompts|HTML 交互拆解|已有页面中提取可复用效果|带截图依据的分项交互提示
implement-fog-of-war|战争迷雾|俯视动作游戏的视野与遮挡|墙体感知的可见区域和感知规则
iterate-until-verified|持续验证迭代|复杂任务需要明确完成标准|验收条件、修正记录和证据
optimize-web-animations|网页动效性能优化|滚动卡顿或长期占用资源|测量结果及动画、监听器、循环优化
performance-profiling|Apple 应用性能分析|苹果平台卡顿、内存与耗电问题|依托 Instruments 等工具的诊断方案
publish-project-to-github|项目整理与发布|完成的小项目需要公开展示|项目说明、仓库与兼容项目的 Pages 发布核验
stitched-full-page-capture|分段拼接长截图|懒加载或滚动动画导致截屏缺失|较完整的长图与分区截图
video-to-superprompt|视频转实现说明|从网站录屏理解布局和动效|包含结构、素材、交互与限制的详细提示
web-technique-to-skill|成品技术提炼为技能|某个效果已在项目中验证|可复用机制、参数、演示与常见问题
write-like-meng-on-x|作者风格写作|研究 Meng To 的 X 表达方式|基于指定语料的文案草稿与风格分析
x-bookmark-quote-posts|书签转引用帖草稿|整理 X 收藏内容|带来源的引用帖候选草稿
author-game-levels|关卡编排|路线、碰撞和遭遇设计|可导航、可复现的关卡数据与验证路径
build-game-audio-feedback|游戏音频反馈|攻击、状态与环境声音|与游戏事件相连的音频层及静音控制
build-game-camera-controls|游戏相机|跟随、锁定、遮挡与触控|稳定的观察与交互相机行为
build-game-changelog|游戏更新日志|游戏内版本展示|版本、截图和部署记录一致的日志界面
build-game-inventory|背包与装备|拾取、拖拽、装备和存档|物品流转、原子交换与迁移方案
build-game-map-editor|浏览器地图编辑器|编辑关卡摆放与调试区域|选取、拖动、撤销、导入导出等编辑能力
build-game-monster-system|怪物模型系统|怪物骨骼、动作和判定整合|统一关节、挂点、碰撞和动作约定
build-hybrid-game-assets|混合游戏素材管线|组合模型、程序几何与二维素材|有预算和来源记录的素材整合方案
build-isometric-arpg|俯视动作角色扮演原型|制作可玩的游戏纵向切片|移动、战斗、奖励与继续游戏的完整小循环
build-mobile-threejs-games|移动端网页游戏|触控与横竖屏适配|移动操作、界面和性能检查
build-rigged-game-assets|绑定角色资产|导入或制作可动画角色|骨架、动作库、装备挂点与预览检查
build-threejs-enemy-systems|敌人架构|多类敌人共享运行逻辑|数据驱动的敌人类型与招式系统
build-vesperfall-review-assets|Vesperfall 资产审查|该项目的素材目录与模型预览|参考 PNG 与实际三维模型的对应检查
create-game-vfx|游戏视觉反馈|攻击、法术、伤害与预警|有性能预算的特效及低动效替代
design-action-combat|动作战斗规则|攻击、防御、闪避与命中|可读时序、接触判定与可复现测试状态
design-game-encounters|战斗遭遇编排|敌群、波次、首领和奖励|有节奏与难度验证的遭遇方案
optimize-threejs-games|三维游戏性能|帧耗时或 CPU/GPU 压力过高|瓶颈证据、资源预算和质量分级
ship-web-games|网页游戏发布|经过验证的版本上线|构建、部署、线上试玩与回退准备
test-playable-web-games|真实游戏体验测试|操作、存档、重试与设备适配|可复现步骤、实际行为和缺陷证据
tune-enemy-ai|敌人行为调优|追击、攻击选择和首领行为|可测的感知、决策与状态转换
aura-asset-images|Aura 图片选用|网站背景、肖像和设计素材|真实图片链接及比例、尺寸建议
unsplash-asset-images|Unsplash 图片选用|背景、头像与产品展示|按用途选择的图片及裁切建议
audit-ai-design-slop|界面冗余与缺陷审查|界面泛化、堆装饰或难用|按影响排序的证据与删改建议
design-first-ui-prompting|结构化设计要求|视觉想法难以描述|目标、版式、字体、色彩与约束说明
no-ai-design-slop|设计质量约束|创建或修改界面时|保留产品特点并减少无意义装饰与缺陷
add-mouse-driven-orbit|鼠标驱动空间视差|三维首屏需要轻微互动|阻尼相机与物体的协调移动
add-shader-cursor-trail|着色器光点尾迹|首屏或联系区鼠标效果|半色调闪烁尾迹与静态替代
agency-grid-layout-minimal|极简工作室网格|设计机构与作品展示|大字、克制图片和规则网格
ambient-section-particles|局部环境粒子|单一区块需要季节或气氛|可控制密度和可见区域的粒子
animation-on-scroll|进入视口动画|内容分段显现|基于可见性触发的动画序列
animation-systems|统一动效系统|页面交互节奏不一致|统一时长、缓动、编排和可访问规则
atmosphere-background|光幕氛围背景|暗色品牌首屏|缓慢光褶、辉光与局部亮点
background-grid-webgl|透视网格背景|技术或数据展示|带透视、淡出与轻视差的网格
beam-glow-states|边缘光束状态|加载、选择、焦点等反馈|与真实组件状态绑定的边缘动效
beautiful-shadows|分层阴影|卡片、面板与弹层|有层次的中性阴影
blue-cloudy-clean-modern|蓝天明亮风格|清爽产品展示|蓝色氛围、白色框架与安静排版
blue-laser-clean-glass-layout|蓝色激光玻璃风格|深色产品与仪表盘展示|蓝光背景与磨砂界面结构
book-serif-index|书籍索引风格|文章、档案与目录|衬线正文、纸张质感和索引导航
bright-green-tech-system-webgl|亮绿技术风格|有三维焦点的科技页面|硬边分栏、技术标注与 WebGL 区域
build-awwwards-quality-sites|高完成度品牌网站|作品集、品牌与营销页|统一视觉概念、首屏、动效及降级方案
build-interactive-particle-trail|交互粒子轨迹|鼠标或触摸扫过表面|按运动距离发射的连续粒子轨迹
build-threejs-scroll-worlds|连续三维滚动世界|空间叙事、展览与产品故事|在同一世界中随章节演进的相机和场景
build-wireframe-scan-reveal|线框扫描显现|三维模型登场|扫描区域中线框先于实体展开
cinematic-gsap-lenis-motion-system|电影式页面动效|工作室或高视觉要求网站|平滑滚动、视差、固定区块与悬停编排
cinematic-scroll-storytelling|滚动叙事页面|长页与项目故事|文字、卡片、背景随滚动协调过渡
clean-minimal-beige-light-mode|米色极简风格|安静、温暖的品牌页|暖中性色与克制的流程结构
cobejs|轻量交互地球|全球业务的简洁可视化|地球、标记和旋转交互
company-logos|品牌标志使用|确有依据的品牌展示|统一的图标化标志呈现
container-lines|容器辅助线|精密网格或编辑式页面|边界线和角点强调布局关系
corner-diagonals|切角界面|技术卡片与按钮|统一的斜切边缘
corner-lasers|角落激光构图|科技视觉背景|光束、发射点与氛围辉光
css-alpha-masking|边缘透明遮罩|图片或滚动列表淡出|水平或垂直边缘渐隐
css-border-gradient|渐变边框|卡片、按钮与导航|克制的边缘高光
dark-blue-contrasting-clean|深蓝高对比风格|科技与产品页面|清晰结构、钴蓝重点和有限辉光
dark-glass-clean-layout|深色玻璃布局|多列工作区展示|磨砂容器、浮动数据卡与空间层次
dither-background|像素抖动背景|黑白技术氛围|有颗粒层次的程序化暗色背景
dither-laser-dark-mode|抖动激光风格|深色技术品牌页|像素纹理与单色激光气氛
documentary-brutalist-agency|纪实粗野风格|文化、建筑与制作机构|大字、黑白章节、纪实图片与裸露网格
editorial-portfolio-chapters|编辑式作品章节|摄影师、艺术家与工作室|作品主导的分章展示与联系入口
editorial-service-booking|服务预约页面|沙龙、工作室和服务品牌|服务选择、地点与预约状态界面
editorial-tech|杂志技术风格|技术产品的视觉故事|非对称网格、媒体横幅与精密细节
falling-leaves|二维落叶效果|网页前景与季节氛围|有翻转和漂移规律的叶片
framed-grid-layout|边框网格布局|简洁、精确的内容页面|细线、角括号与严格对齐
framed-tech-dark-border-gradient|深色框架渐变风格|技术产品展示|渐变边框、非对称面板与单色气氛
funky-purple-container-tech|紫色趣味技术风格|有活力的科技品牌|层叠容器、紫红信号与未来感焦点
glass-dark-mode-clock|暗色玻璃仪表风格|时间、仪表与技术展示|磨砂外壳、校准圆盘和光束网格
glass-dark-ui|暗色玻璃界面|磨砂卡片与深色首屏|有可读性约束的玻璃与渐变边缘
globe-gl|地球数据可视化|跨地域网络与数据|点、弧线、多边形和标签图层
globe-particles|粒子球体|行星、轨道或数据主题|发光球核与较稀的环状粒子
gooey-blob-system|黏性融合形状|有机流体界面实验|通过滤镜相互融合和分离的形状
gsap|GSAP 动画实现|时间线与复杂滚动动画|动画编排、错峰与 ScrollTrigger 集成
gsap-scrolltrigger-storytelling|固定区块产品叙事|随滚动逐步讲解产品|粘性区域和连续 UI 显现
high-contrast-skeuomorphic-clean|高对比拟物风格|触感明确的产品界面|深色成型面、内凹层次和明暗分隔
image-first-grid-layout|图片优先网格|摄影与视觉作品展示|大图、结构线和锚定文案
landing-page|单目标落地页|产品、应用或服务推广|页面大纲、主文案、行动入口与常见问题
light-mode-paper-technical|浅色纸张技术风格|文档或技术内容展示|暖纸面、深框与技术括号细节
liquid-metal-border|液态金属边缘|选中、悬停与重点控件|使用 metal-fx 的金属边缘状态
marquee-loop|无缝循环列表|连续展示图片或条目|重复项目形成的连续滚动
masked-reveal|遮罩逐词显现|标题与编辑式文案|通过遮罩分词进入视野
matterjs|二维物理互动|可碰撞、拖动的页面元素|物理物体、约束与交互场景
mesh-gradient-dark-blue-clean|深蓝网状渐变风格|基础设施与空间主题|暗蓝氛围与精简框架
nested-container-clean-agency|嵌套机构布局|工作室与服务介绍|外层编辑框架与内层重点区域
nested-container-frames|嵌套容器框架|页面信息分层|外边界和内嵌框的统一间距
number-details|编号细节|步骤或项目序列|辅助顺序理解的数字标记
operational-enterprise-ai|企业 AI 介绍页|自动化、安全与运营产品|解释边界、审批、例外与回退的页面
orange-clean-paper-saas|橙色纸感 SaaS 风格|温暖清晰的软件介绍|暖色底、橙色重点和产品展示面
pointer-trail-emitter|等距指针发射器|快速移动仍需连续的尾迹|按距离发射、间距稳定的视觉轨迹
pricing-page|价格方案页面|SaaS 套餐说明|对比结构、计费说明、常见问题与实验建议
product-proof-saas|产品证据型落地页|解释软件或 AI 产品如何工作|由真实或标注示例流程支撑的页面
progressive-blur|渐进模糊|视口边缘与层叠媒体|分层遮罩构成的模糊过渡
reveal-hover-effect|悬停揭示效果|前后对比、材质和产品细节|光斑跟随指针揭示第二张对齐图片
scroll-progress-timeline|滚动进度时间线|流程、历史与案例步骤|可见进度线和当前步骤状态
scroll-scrubbed-visual-sequence|滚动控制视觉序列|产品装配、旋转或状态讲解|可以正反滚动控制的视觉变化
scroll-scrubbed-word-reveal|滚动进度逐词显现|宣言、引用与短文|随进度显现且保留语义的文字
scroll-world-storytelling|滚动世界叙事|文章、案例或品牌故事转网页|视频、实时三维或语义图文叙事方案
shaders-cursor-ripples|图像指针水波|首屏或画廊的互动|基于 Shaders 组件的图像扭曲
skeuomorphic-ui|拟物表面|触感按钮和材质面板|多层阴影、反光、纹理与浮雕细节
solar-duotone-bold|统一图标风格|需要一致的界面符号|Solar 双色粗体图标选择
split-layout-technical|技术分屏布局|双面板说明与展示|细框、等宽标注和分屏层次
staggered-word-reveal|错峰文字显现|首屏或章节标题|逐词淡入并轻微上移
tailwindcss|Tailwind 界面实现|响应式布局与主题样式|统一排版、组件和样式约定
tech-green-dark-mode-modern|深色绿色技术风格|现代技术产品展示|哑黑、绿色信号和仪表盘式卡片
technical-wireframe-info-layout|技术线框信息布局|结构或原理展示|爆炸结构、连接标注和稀疏信息
thinking-orbs|AI 活动状态球|搜索、生成或语音界面|映射真实工作状态的动态指示器
threejs|Three.js 基础与集成|网站需要三维场景|场景、相机、材质、模型和控制器整合
threejs-landscape|程序化三维地景|产品舞台或空间背景|地形、植被、天空与时段变化
threejs-towers|程序化建筑|建筑标题或生成式展示|参数化建筑和施工展开动画
threejs-weather|三维天气|雨雪与风暴场景|天气、地面状态和声音协调变化
unicorn-studio|Unicorn Studio 嵌入|复用已制作的交互动效|尺寸、层级、性能和替代图的集成
vantajs|Vanta 动态背景|快速加入三维背景|参数化背景与响应式集成
webgl-3d-object|三维主视觉物体|产品或首屏视觉焦点|有真实光照、材质和空间深度的物体
webgl-landing-steering|WebGL 页面方向控制|视觉要求与性能难以兼顾|明确视觉目标、内容重点与复杂度预算
webgl-laser|WebGL 激光背景|激光主题页面|亮核、光晕与烟雾组成的激光
workflow-progress-screenshots|过程截图|视觉成果需要可见证据|起点、关键变化和结果的截图记录
workflow-score-to-target|按标准打磨|已有目标质量分数|固定评分尺度、前后证据和修正记录
workflow-ship-change|变更交付流程|需要完整发布链路|截图、日志、测试、提交与部署核验
workflow-threads-manager|多任务状态管理|同一项目有多个工作会话|合并、上线、日志和未完成任务检查
'''


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source', type=Path, required=True)
    args = parser.parse_args()
    root = args.source.resolve()
    destination = Path(__file__).resolve().parents[1]
    metadata = json.loads((root.parent / 'commit.json').read_text(encoding='utf-8-sig'))
    if metadata['sha'] != COMMIT:
        raise SystemExit('Snapshot commit differs; update the research and notes before rebuilding.')
    notes = {}
    for line in NOTES.strip().splitlines():
        name, capability, scenario, effect = line.split('|')
        if name in notes:
            raise ValueError(f'Duplicate annotation: {name}')
        notes[name] = dict(capability_zh=capability, scenario_zh=scenario, expected_effect_zh=effect)
    entries = []
    source_records = []

    def record(path):
        content = path.read_bytes()
        relative = path.relative_to(root).as_posix()
        source_records.append(dict(path=relative, url=BASE + relative, bytes=len(content),
            sha256=hashlib.sha256(content).hexdigest(),
            git_blob_sha1=hashlib.sha1(b'blob ' + str(len(content)).encode() + b'\0' + content).hexdigest()))

    for path in sorted((root / 'agent-skills').glob('*/*/SKILL.md')):
        text = path.read_text(encoding='utf-8-sig')
        front = text.split('---', 2)[1]
        name = re.search(r'^name:\s*(.+)$', front, re.M).group(1).strip().strip('"\'')
        description = re.search(r'^description:\s*(.+)$', front, re.M).group(1).strip().strip('"\'')
        relative = path.relative_to(root).as_posix()
        folder = path.parent
        category = relative.split('/')[1]
        support = sorted(p.relative_to(root).as_posix() for p in folder.rglob('*') if p.is_file() and p != path)
        entries.append(dict(name=name, category=category, category_zh=CATEGORIES[category],
            **notes.pop(name), description_en=description, source_path=relative, source_url=BASE + relative,
            has_html_demo=(folder / 'demo/index.html').is_file(),
            has_demo_prompt=(folder / 'demo/PROMPT.md').is_file(),
            script_file_count=sum('/scripts/' in p for p in support),
            supporting_files=support, review_level='metadata_and_structure', runtime_verified=False))
        record(path)
    if notes:
        raise ValueError(f'Annotations without skills: {sorted(notes)}')
    detailed = {
        'design-first-ui-prompting', 'audit-ai-design-slop', 'no-ai-design-slop',
        'video-to-superprompt', 'stitched-full-page-capture', 'build-awwwards-quality-sites',
        'workflow-score-to-target', 'test-playable-web-games', 'iterate-until-verified',
        'elevenlabs-tts', 'publish-project-to-github', 'product-proof-saas',
        'build-isometric-arpg', '3d-ultra-realistic-water',
    }
    for entry in entries:
        if entry['name'] in detailed:
            entry['review_level'] = 'instruction_body_reviewed'
    for relative in ['README.md', 'LICENSE', 'agent-skills/3d/README.md',
        'agent-skills/game-development/README.md', 'agent-skills/workflow/README.md',
        'agent-skills/codex/stitched-full-page-capture/scripts/stitch_full_page_capture.mjs']:
        record(root / relative)
    counts = dict(Counter(e['category'] for e in entries))
    summary = dict(total_skills=len(entries), category_counts=counts,
        skills_with_html_demo=sum(e['has_html_demo'] for e in entries),
        skills_with_demo_prompt=sum(e['has_demo_prompt'] for e in entries),
        skills_with_scripts=sum(e['script_file_count'] > 0 for e in entries),
        instruction_bodies_reviewed=len(detailed), runtime_verified_skills=0)
    catalog = dict(schema_version=1, repository='https://github.com/MengTo/Skills',
        commit=COMMIT, commit_date_utc=metadata['commit']['committer']['date'],
        research_date='2026-09-29', license='MIT; see LICENSE.upstream',
        method='Chinese summaries based on skill metadata; selected instruction bodies reviewed. Presence of a demo is not proof it works.',
        summary=summary, skills=entries)
    def save_json(name, data):
        (destination / name).write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    save_json('skills-catalog.json', catalog)
    save_json('sources-manifest.json', dict(repository=catalog['repository'], commit=COMMIT,
        research_date='2026-09-29', hash_scope='Raw bytes from GitHub commit archive; hashes computed locally.',
        files=source_records))
    (destination / 'LICENSE.upstream').write_bytes((root / 'LICENSE').read_bytes())
    lines = ['# MengTo/Skills · 146 个技能索引', '',
        f'固定版本：[`{COMMIT[:12]}`](https://github.com/MengTo/Skills/tree/{COMMIT})。核对日期：2026-09-29。', '',
        '本表为中文研究摘要；逐项用途主要依据上游名称和 description，关键流程另作正文抽查。预期效果是技能指导下希望产出的结果，不表示本次已经实现或测试通过。完整原文描述、资源路径和核验层级见 [结构化清单](skills-catalog.json)。', '',
        '同类技能应按具体需求选择，尤其避免同时叠加多套视觉风格。表内“演示”仅表示存在 demo/index.html，“脚本”仅表示 scripts/ 内存在文件；均未运行。', '',
        '| 原始分类 | 中文方向 | 数量 |', '| :--- | :--- | ---: |']
    for category, title in CATEGORIES.items():
        lines.append(f'| `{category}` | {title} | {counts[category]} |')
    lines += ['', '## 如何挑选', '',
        '- 尚在研究阶段：先看 codex 中的参考提取、核验解释，以及 ui 中的设计要求与审查。',
        '- 开始做页面：先选页面任务技能，再选一套风格；仅为实际需要补充动效或三维技能。',
        '- 游戏或三维展示：分别从 game-development 或 3d 的目标场景进入。',
        '- 发布、账户服务和多会话管理：先确认工具、平台与任务范围，不能仅凭技能名称认定已具备执行条件。', '']
    for category, title in CATEGORIES.items():
        lines += [f'## {title}（{counts[category]}）', '',
            '| 技能 / 原文 | 能力 | 使用场景 | 预期效果 | 附带资源 |',
            '| :--- | :--- | :--- | :--- | :--- |']
        for e in entries:
            if e['category'] != category:
                continue
            resources = []
            if e['has_html_demo']: resources.append('演示')
            if e['has_demo_prompt']: resources.append('复现提示')
            if e['script_file_count']: resources.append('脚本')
            lines.append(f"| [{e['name']}]({e['source_url']}) | {e['capability_zh']} | {e['scenario_zh']} | {e['expected_effect_zh']} | {'、'.join(resources) or '—'} |")
        lines.append('')
    lines += ['## 使用边界', '',
        '- `codex` 是上游目录名，内部也有语音、社交文案、Apple 性能与游戏功能，不能把它当作单一能力或全部跨平台兼容的保证。',
        '- 品牌风格、高转化、获奖水准与写实等词表示目标方向；商业转化、性能、真实性与获奖情况仍需独立证据。',
        '- 模型或服务名称按上游文件原样保留，并未核验本账户当前可用性。',
        '- `write-like-meng-on-x` 和 `build-vesperfall-review-assets` 带有明确个人或项目背景，通用研究可借鉴方法，直接采用需要重写上下文。', '',
        '[返回项目总览](README.md) · [场景与效果](SCENARIOS.md) · [采用建议](USER_VALUE.md)', '']
    (destination / 'SKILLS.md').write_text('\n'.join(lines), encoding='utf-8')
    print(json.dumps(summary, ensure_ascii=False, indent=2))


if __name__ == '__main__':
    main()
