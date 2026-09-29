"""Mirror the public handraw-style gallery at one pinned Git commit.

Requires requests and network access. The repository tree provides the complete
file list and Git blob hashes so a partial or altered download is rejected.
"""

from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone
from hashlib import sha1, sha256
from pathlib import Path
import json
import threading
import time

import requests


COMMIT = "b5c302e7164f287230ed80bde2f69f35aac39914"
REPO = "yang0/handraw-style"
ROOT = Path(__file__).resolve().parents[1]
DEST = ROOT / "upstream"
TREE_URL = f"https://api.github.com/repos/{REPO}/git/trees/{COMMIT}?recursive=1"
RAW_BASE = f"https://raw.githubusercontent.com/{REPO}/{COMMIT}/"
TOP_LEVEL = {
    "README.md", "STYLES.md", "LAYOUTS.md", "COLORS.md", "TUTORIALS.md",
    "MANIFEST.md", "styles_200_reorganized.md", "LICENSE", "version.json",
}
PREFIXES = (
    "images/individual/", "images/layouts/", "images/colors/",
    "skills/handdraw-style-prompter/references/",
    "skills/handdraw-style-prompter/gallery/",
    "skills/handdraw-style-prompter/scripts/",
)
EXTRA = {"skills/handdraw-style-prompter/SKILL.md"}
HEADERS = {"User-Agent": "codex-handraw-research"}
print_lock = threading.Lock()


def get(url: str) -> bytes:
    last_error = None
    for attempt in range(4):
        try:
            response = requests.get(url, headers=HEADERS, timeout=45)
            response.raise_for_status()
            return response.content
        except requests.RequestException as error:
            last_error = error
            time.sleep(min(2 ** attempt, 8))
    raise RuntimeError(f"Could not fetch {url}: {last_error}")


def wanted(path: str) -> bool:
    return path in TOP_LEVEL or path in EXTRA or path.startswith(PREFIXES)


def verify_blob(data: bytes, entry: dict) -> None:
    expected = entry["sha"]
    actual = sha1(f"blob {len(data)}\0".encode() + data).hexdigest()
    if actual != expected:
        raise ValueError(f"Git blob mismatch for {entry['path']}: {actual} != {expected}")


def fetch_one(entry: dict) -> dict:
    path = entry["path"]
    target = DEST / path
    if target.exists():
        data = target.read_bytes()
        try:
            verify_blob(data, entry)
            return {"path": path, "bytes": len(data), "sha256": sha256(data).hexdigest(), "status": "cached"}
        except ValueError:
            pass
    data = get(RAW_BASE + path)
    verify_blob(data, entry)
    target.parent.mkdir(parents=True, exist_ok=True)
    part = target.with_suffix(target.suffix + ".part")
    part.write_bytes(data)
    part.replace(target)
    return {"path": path, "bytes": len(data), "sha256": sha256(data).hexdigest(), "status": "downloaded"}


def main() -> None:
    tree = json.loads(get(TREE_URL))
    if tree.get("truncated"):
        raise RuntimeError("GitHub returned a truncated file tree")
    entries = [entry for entry in tree["tree"] if entry["type"] == "blob" and wanted(entry["path"])]
    entries.sort(key=lambda entry: entry["path"])
    print(f"Commit {COMMIT}: syncing {len(entries)} files", flush=True)
    results = []
    with ThreadPoolExecutor(max_workers=12) as pool:
        futures = {pool.submit(fetch_one, entry): entry for entry in entries}
        for future in as_completed(futures):
            results.append(future.result())
            if len(results) % 40 == 0 or len(results) == len(entries):
                with print_lock:
                    print(f"Verified {len(results)}/{len(entries)} files", flush=True)
    results.sort(key=lambda item: item["path"])
    manifest = {
        "repo": f"https://github.com/{REPO}",
        "commit": COMMIT,
        "synced_at_utc": datetime.now(timezone.utc).isoformat(),
        "file_count": len(results),
        "total_bytes": sum(item["bytes"] for item in results),
        "files": results,
    }
    (ROOT / "upstream-manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Complete: {manifest['file_count']} files, {manifest['total_bytes'] / 1024**2:.1f} MiB", flush=True)


if __name__ == "__main__":
    main()
