"""Build a self-contained, editable capability summary from the 25-skill catalog."""
from pathlib import Path
import json
from html import escape

root = Path(__file__).resolve().parents[1]
catalog = json.loads((root / 'skills-catalog.json').read_text(encoding='utf-8-sig'))
groups = [
 ('01', '把目标说清楚', [2,3,4,5], ['需求访谈 · 想法细化', '规格编写 · 质量约束'], '场景  想法模糊、反复改需求', '产出  需求结论、规格与验收标准', '效果  知道做什么，怎样才算完成'),
 ('02', '把工作拆成可执行步骤', [6], ['计划与任务拆分'], '场景  任务很大、不知道从哪里开始', '产出  带依赖、检查点的实施计划', '效果  按小任务推进，便于检查进度'),
 ('03', '把规格变成可验证实现', [7,8,9,10,11,12,13], ['增量实现 · 测试驱动 · 上下文管理', '官方资料驱动 · 独立质疑', '前端界面工程 · API 与接口设计'], '场景  开发网页、工具、接口或新功能', '产出  代码、行为测试、界面与接口契约', '效果  小步实现，用官方资料和反例校验判断'),
 ('04', '看见问题，定位并修复', [14,15], ['浏览器验证 · 排错与恢复'], '场景  页面交互异常、测试或运行失败', '产出  运行证据、根因分析与修复', '效果  从“看起来可用”走向真实路径验证'),
 ('05', '让改动更可靠、更易维护', [16,17,18,19], ['代码审查 · 代码简化', '安全加固 · 性能优化'], '场景  合并前检查、代码变乱、安全或速度问题', '产出  分级问题、简化改动、安全与性能分析', '效果  暴露风险，按证据选择改进项'),
 ('06', '把成果交付并持续维护', [20,21,22,23,24,25], ['Git 与版本 · CI/CD 自动化', '弃用与迁移 · 文档与架构决策', '可观测性 · 发布与上线'], '场景  版本发布、系统升级、长期运行', '产出  流水线、迁移说明、观测与发布准备', '效果  交付可追溯，故障可发现、可恢复'),
]
assert sorted([1] + [i for g in groups for i in g[2]]) == list(range(1,26))
parts=['<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1340" viewBox="0 0 1600 1340" role="img" aria-labelledby="title desc">', '<title id="title">Agent Skills：25 项研发流程能力摘要</title>', '<desc id="desc">六类工作共24项技能，加一项贯穿全流程的技能发现与路由。展示场景、产出、预期效果、个人意义和扩展方向。</desc>', '<style>text{font-family:"Microsoft YaHei","PingFang SC",sans-serif;fill:#26392e}.small{font-size:21px;fill:#65725d}.body{font-size:23px}.label{font-size:18px;fill:#68765e}.head{font-size:30px;font-weight:700}.out{font-size:21px;fill:#315f45}</style>', '<rect width="1600" height="1340" fill="#f5f6f1"/>']
def txt(x,y,s,cls='',size=None):
    parts.append(f'<text x="{x}" y="{y}" class="{cls}"'+(f' font-size="{size}"' if size else '')+'>'+escape(s)+'</text>')
txt(48,48,'ADDY OSMANI / AGENT SKILLS     ·     能力摘要', 'label')
txt(48,106,'让 AI 按工程流程，把想法推进到可验证的交付',size=43)
txt(48,150,'本质：25 份按需读取的研发工作流，指导模型使用现有工具完成工作。','body')
txt(48,187,'可推动的结果：清楚的规格 → 小步实现 → 验证与审查 → 发布、记录与维护。','body')
parts.append('<rect x="48" y="213" width="1504" height="70" rx="12" fill="#26392e"/>')
parts.append('<text x="72" y="256" style="fill:#fff;font-size:24px">贯穿全程 · 01 技能发现与路由：识别任务 → 选择相关技能 → 衔接各阶段（1 项）</text>')
for pos,(no,title,ids,lines,scene,outcome,effect) in enumerate(groups):
    x=48+(pos%3)*510; y=305+(pos//3)*320
    parts.append(f'<rect x="{x}" y="{y}" width="484" height="298" rx="15" fill="#fff" stroke="#d9e0d1"/>')
    txt(x+22,y+34,f'{no} / {len(ids)} 项技能', 'label')
    txt(x+22,y+77,title,'head')
    for i,line in enumerate(lines): txt(x+22,y+118+30*i,line,'small')
    txt(x+22,y+219,scene,'label')
    txt(x+22,y+250,outcome,'out')
    txt(x+22,y+280,effect,'label')
    parts.append(f'<metadata>{escape(json.dumps([catalog[i-1]["name"] for i in ids]))}</metadata>')
txt(48,984,'对你而言：从研究积累，到做出自己的工具',size=30)
for x,title,line1,line2 in [(48,'现在 · 研究开源项目','借鉴澄清目标、上下文与决策记录','留下可追溯、下次能接续的结论'),(558,'下一步 · 做网页或个人工具','直接使用规格、实现、界面与验证流程','把资料变成可运行、可验收的成果'),(1068,'以后 · 长期维护或产品化','按需补齐审查、流水线与观测流程','让改动、发布和故障处理更有依据')]:
    txt(x,1030,title,'body');txt(x,1065,line1,'small');txt(x,1096,line2,'small')
parts.append('<path d="M48 1130H1552" stroke="#c8d3bd"/>')
txt(48,1170,'可扩展：项目规范与模板 → 浏览器 / CI 等工具连接 → 用真实任务评测和调整流程','body')
txt(48,1210,'价值：把临时对话中的工程经验，沉淀为可复用的工作方法与检查依据。','body')
txt(48,1266,'原理：描述匹配 → 按需加载 Markdown → 模型编排工具 → 检查产物；硬门禁需测试或 CI 落实。','label')
txt(48,1307,'依据上游固定版本 2686b620 · 25/25 覆盖 · 预期效果来自文档分析，未实测；研究用途属于方法迁移。','label')
parts.append('</svg>')
svg='\n'.join(parts)
for dest in [root/'assets/capability-summary.svg', root/'web/capability-summary.svg']:
    dest.write_text(svg,encoding='utf-8')
print('Generated summary: 25 skills, 6 work categories + routing.')
