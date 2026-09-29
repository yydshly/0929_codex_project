"""Expanded positioning, usage guidance and a single summary-map viewer."""
from pathlib import Path
from html import escape as e
import json

ROOT=Path(__file__).resolve().parents[1]

def generate_overview():
    d=json.loads((ROOT/'overview.json').read_text(encoding='utf-8'))
    manifest=json.loads((ROOT/'sources-manifest.json').read_text(encoding='utf-8'))
    base=f"https://github.com/{manifest['repository']}/blob/{manifest['commit']}/"
    core=base+'skills/app-ui-ux-best-practices/SKILL.md'
    scope_cards=''.join(f'<article class="coverage {e(x["type"])}"><span class="coverage-level">{e(x["level"])}</span><h3>{e(x["title"])}</h3><p>{e(x["ability"])}</p><div><strong>还需补充</strong><p>{e(x["gap"])}</p></div></article>' for x in d['coverage'])
    scope=f'''<section id="scope" class="section"><div class="section-heading"><div><span class="overline">产品开发定位</span><h2>从多个设计角度理解产品，<br>重点落在界面体验。</h2></div><p>覆盖程度来自固定版本内容分析；不代表完整研发能力。</p></div><p class="positioning">{e(d['positioning'])}</p><p class="stage-note">{e(d['stage'])}</p><div class="coverage-grid">{scope_cards}</div><div class="scope-note"><strong>产品理解是设计的起点。</strong> 这里的用户与需求分析用于确定视觉和交互方向，不能替代完整的用户研究、商业模式验证、功能规划或业务架构设计。<a href="{core}" target="_blank" rel="noopener noreferrer">查看核心工作流依据 ↗</a></div></section>'''
    summary='''<section id="summary" class="section"><div class="section-heading"><div><span class="overline">一图能力总览</span><h2>把定位、能力、场景和用法连起来。</h2></div><p>一张图回答七个问题。点击图片可进入大图阅读并缩放。</p></div><div class="map-actions"><a href="map.html">打开可缩放大图 ↗</a><a href="capability-summary.png" download>下载 PNG 图片</a><a href="capability-summary.svg" download>下载 SVG 矢量图</a></div><figure class="summary-figure"><a href="map.html" aria-label="打开 OJO 完整能力总览图"><img src="capability-summary.png" width="2000" height="3320" alt="OJO 能力总览：面向产品界面设计与前端交接，1 个核心 Skill 串联 9 个参考模块，覆盖效率与品牌两条路线、模块能力与场景、六步使用流程、补货系统示例、预期价值和边界。详细文字见本页各节。"></a><figcaption>固定版本的中文研究归纳。参考模块不计为独立 Skill，示例与价值说明不代表实测结果。</figcaption></figure></section>'''
    steps=''.join(f'<li><span class="step-number">{i:02}</span><div><h3>{e(x["title"])}</h3><p>{e(x["body"])}</p><small>阶段产物：{e(x["deliver"])}</small></div></li>' for i,x in enumerate(d['steps'],1))
    fields=''.join(f'<li>{e(x)}</li>' for x in d['briefFields'])
    case=d['workedExample']
    usage=f'''<section id="usage" class="section"><div class="section-heading"><div><span class="overline">实际怎么用</span><h2>先把任务讲清楚，再让技能组织设计。</h2></div><p>以下为采用步骤与示例，不会在本页安装或运行上游 Skill。</p></div><ol class="usage-steps">{steps}</ol><div class="usage-workbench"><article><h3>开始前，准备这五类信息</h3><ul>{fields}</ul><details><summary>接入与依赖说明</summary><p>该库提供 Bash 安装脚本，远程安装依赖 Bash、curl 和 tar，并按目标客户端复制技能目录。能否触发与执行，仍取决于宿主的技能机制及工具。参考文件须保留相对路径；执行前应确认规则与项目约束是否冲突。</p><a href="{base}README.md" target="_blank" rel="noopener noreferrer">固定版本安装说明 ↗</a> · <a href="{base}scripts/install.sh" target="_blank" rel="noopener noreferrer">安装脚本依据 ↗</a></details></article><article class="prompt-example"><span class="overline">可参考的完整请求 · 研究构造</span><pre>{e(d['prompt'])}</pre><p>如果只需要审查、已有方向或要直接给出一个改进建议，应明确说明，避免无必要地重走全部流程。</p></article></div><div class="worked-example"><h3>用“门店补货系统”区分设计与业务实现</h3><p>{e(case['before'])}</p><div><article><h4>这个库可以指导</h4><p>{e(case['design'])}</p><p>{e(case['deliver'])}</p></article><article><h4>需要其他方法与工程能力</h4><p>{e(case['outside'])}</p><p>形成了设计规范，不等于接口、算法或完整系统已经实现。</p></article></div></div></section>'''
    values=''.join(f'<article><span class="overline">{e(x["title"])}</span><h3>{e(x["from"])}</h3><p>{e(x["to"])}</p><small>{e(x["verify"])}</small></article>' for x in d['values'])
    value=f'''<section id="value" class="section"><div class="section-heading"><div><span class="overline">为什么值得理解</span><h2>把一次设计，变成团队可复用的依据。</h2></div><p>以下是方法层面的预期价值，不是效率或商业收益保证。</p></div><div class="value-grid">{values}</div><p class="scope-note"><strong>价值要通过实际结果判断：</strong>设计决定是否清楚、规范是否一致、交互状态是否完整、主要任务是否可完成。避免把“更像某种风格”直接当作体验更好，也不要用安装成功代替执行效果验证。</p></section>'''
    md=['# OJO Design Skills · 产品开发定位与使用指南','','## 它是什么','',d['positioning'],'',d['stage'],'','## 产品开发中的覆盖范围','','| 环节 | 覆盖 | 可以提供 | 还需补充 |','| --- | --- | --- | --- |']
    for x in d['coverage']:md.append(f"| {x['title']} | {x['level']} | {x['ability']} | {x['gap']} |")
    md+=['','上述是研究范围判断；不等于完整产品研发能力认证。',f'[核心工作流依据]({core})','','## 服务方向','']
    for x in d['directions']:md += [f"### {x['title']}",'',x['products'],'',x['goal'],'',x['approach'],'',x['scenarios'],'']
    md+=['## 有哪些 Skill','', '当前版本只有 `app-ui-ux-best-practices` 一个独立 Skill。九份参考资料按需参与流程，其文件名不是额外的 Skill 入口。全部逐项分析见 [CAPABILITIES.md](CAPABILITIES.md)。','','## 如何使用','']
    for i,x in enumerate(d['steps'],1):md += [f"### {i}. {x['title']}",'',x['body'],'','阶段产物：'+x['deliver'],'']
    md += ['### 输入准备','',*['- '+x for x in d['briefFields']],'','### 示例请求（研究构造）','','```text',d['prompt'],'```','',f'[固定版本安装说明]({base}README.md) · [安装实现]({base}scripts/install.sh)','','## 具体案例','',*case.values(),'','## 意义与预期价值','']
    for x in d['values']:md += [f"### {x['title']}",'',x['from']+'；'+x['to'],'',x['verify'],'']
    md += ['## 采用边界','',*['- '+x for x in d['limits']],'','## 一图汇总','','![OJO 完整能力总览](assets/capability-summary.png)','','[SVG 矢量版](assets/capability-summary.svg) · [可缩放网页](web/map.html)']
    (ROOT/'GUIDE.md').write_text('\n'.join(md)+'\n',encoding='utf-8')
    return scope,summary,usage,value

def make_viewer():
    (ROOT/'web/map.html').write_text('''<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>OJO Design Skills · 完整能力总览图</title><link rel="icon" href="data:,"><link rel="stylesheet" href="map.css"><script src="map.js" defer></script></head><body><header><a href="index.html#summary">← 返回研究页</a><h1>OJO Design Skills · 完整能力总览</h1><p>定位 · 服务方向 · 1 个 Skill + 9 个参考模块 · 场景 · 用法 · 意义</p><div class="toolbar"><div class="zoom" hidden><button type="button" data-zoom="fit" aria-pressed="true">适合宽度</button><button type="button" data-zoom="100" aria-pressed="false">100%</button><button type="button" data-zoom="150" aria-pressed="false">150%</button><span id="zoom-status" aria-live="polite">适合宽度</span></div><a href="capability-summary.png" download>下载 PNG</a><a href="capability-summary.svg" download>下载 SVG</a></div></header><main><p class="hint">图中全部内容属于固定版本研究。放大后可横向滚动；详细分析与原文依据见研究页。</p><div class="map-stage" tabindex="0" role="region" aria-label="能力总览图，可用键盘滚动"><img id="map-image" src="capability-summary.png" width="2000" height="3320" alt="OJO 的产品开发覆盖、效率与品牌方向、核心 Skill 和九个参考模块的能力与场景、六步使用流程、门店补货案例、预期价值和边界。完整文字版见返回研究页链接。"></div></main></body></html>''',encoding='utf-8')

if __name__=='__main__':
    generate_overview()
    make_viewer()
