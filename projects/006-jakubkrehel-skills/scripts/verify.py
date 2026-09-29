"""Verify the research inventory, source integrity, and local document links."""
from pathlib import Path
import hashlib
import json
import re
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parents[1]
manifest = json.loads((ROOT / "sources-manifest.json").read_text(encoding="utf-8-sig"))
errors = []
entries = manifest["files"]
skills = sorted(p.parent.name for p in (ROOT / "sources/skills").glob("*/SKILL.md"))
capabilities = (ROOT / "CAPABILITIES.md").read_text(encoding="utf-8")
sections = re.split(r"(?m)^## \d+\. ", capabilities)[1:]
described = [section.split(" ·", 1)[0] for section in sections]
if sorted(described) != skills:
    errors.append("Skill detail coverage differs from source inventory")
required_fields = ["**职责：**", "**需要提供：**", "**交付物：**", "**前后示例：**", "**验收重点：**", "**边界：**", "**示例请求：**", "**来源：**"]
for section in sections:
    for field in required_fields:
        if field not in section:
            errors.append(f"Missing {field} in {section.splitlines()[0]}")
for entry in entries:
    path = ROOT / "sources" / entry["path"]
    if not path.is_file():
        errors.append(f"Missing source: {entry['path']}")
    elif hashlib.sha256(path.read_bytes()).hexdigest() != entry["sha256"]:
        errors.append(f"Changed source: {entry['path']}")
    if f"/{manifest['commit']}/" not in entry["url"]:
        errors.append(f"Unpinned source: {entry['path']}")
explicit = []
for skill in skills:
    body = (ROOT / "sources/skills" / skill / "SKILL.md").read_text(encoding="utf-8-sig")
    policy = (ROOT / "sources/skills" / skill / "agents/openai.yaml").read_text(encoding="utf-8-sig")
    manual = bool(re.search(r"disable-model-invocation:\s*true", body))
    yaml_manual = bool(re.search(r"allow_implicit_invocation:\s*false", policy))
    if manual != yaml_manual:
        errors.append(f"Invocation policy mismatch: {skill}")
    if manual:
        explicit.append(skill)
if explicit != ["break", "explain-interface", "interface-review", "variant"]:
    errors.append("Unexpected explicit-only skill set")
link_count = 0
for document in ROOT.glob("*.md"):
    body = document.read_text(encoding="utf-8-sig")
    for target in re.findall(r"\[[^\]]*\]\(([^)]+)\)", body):
        if re.match(r"^[a-zA-Z][\w+.-]*:", target):
            continue
        filename, _, anchor = unquote(target).partition("#")
        path = (document.parent / filename).resolve() if filename else document
        link_count += 1
        if not path.exists():
            errors.append(f"Broken link in {document.name}: {target}")
        elif anchor and path.suffix == ".md":
            linked = path.read_text(encoding="utf-8-sig")
            explicit_anchor = f'id="{anchor}"' in linked
            headings = re.findall(r"(?m)^#{1,6}\s+(.+)$", linked)
            slugs = [re.sub(r"[^\w\- ]", "", h.lower()).replace(" ", "-") for h in headings]
            if not explicit_anchor and anchor not in slugs:
                errors.append(f"Missing anchor in {document.name}: {target}")
reference_count = sum(1 for e in entries if e["path"].startswith("skills/") and e["path"].endswith(".md") and not e["path"].endswith("/SKILL.md"))
capability_count = 0
for section in sections:
    table = re.search(r"(?m)^\| 具体能力 \|.*(?:\n\|.*)+", section)
    if table:
        capability_count += len(table.group(0).splitlines()) - 2
report = [
    "# 研究资料验证记录", "", "验证日期：2026-09-29。", "",
    f"固定上游提交：`{manifest['commit']}`。", "",
    "此检查验证资料完整性、技能覆盖和本地链接，不验证上游技能实际运行效果。", "",
    "| 检查 | 结果 |", "| --- | --- |",
    f"| 技能正文与详细章节一一对应 | {len(skills)} 项 |",
    f"| 每项必备说明字段 | {len(required_fields)} 类 |",
    f"| 具体能力与效果条目 | {capability_count} 条 |",
    f"| 辅助参考文档 | {reference_count} 份 |",
    f"| 来源文件 SHA-256 与固定 URL | {len(entries)} 份 |",
    f"| 用户主动调用配置一致性 | {len(explicit)} 项 |",
    f"| 研究文档本地链接 | {link_count} 个 |",
    f"| 总结果 | {'失败' if errors else '通过'} |", "",
    "外部网页链接按固定提交构造；未逐一进行 HTTP 可用性测试。", "",
    "未安装技能、未运行修复任务、未执行浏览器或辅助技术验收。", "",
    "[返回项目入口](README.md)",
]
if errors:
    report += ["", "## 问题", ""] + [f"- {error}" for error in errors]
(ROOT / "VERIFICATION.md").write_text("\n".join(report) + "\n", encoding="utf-8")
print(json.dumps({"skills": len(skills), "capability_items": capability_count, "references": reference_count, "sources": len(entries), "local_links": link_count, "errors": errors}, ensure_ascii=False, indent=2))
raise SystemExit(1 if errors else 0)
