"""Download a pinned public documentation snapshot; never run upstream code."""
import concurrent.futures
import hashlib
import json
from pathlib import Path
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
REPO = 'touchine-ojo/OJO-Design-Skills'
COMMIT = 'fbd2c2d158e5ebda8930f4bc63ed635a8500d31f'

def get(url):
    request = urllib.request.Request(url, headers={'User-Agent': 'OJO-Research-Archive'})
    with urllib.request.urlopen(request, timeout=60) as response:
        return response.read()

def main():
    tree = json.loads(get(f'https://api.github.com/repos/{REPO}/git/trees/{COMMIT}?recursive=1'))
    commit = json.loads(get(f'https://api.github.com/repos/{REPO}/commits/{COMMIT}'))
    entries = [item for item in tree['tree'] if item['type'] == 'blob' and
               (item['path'].startswith('skills/') or item['path'] in
                ['README.md', 'LICENSE', 'CONTRIBUTING.md', 'scripts/install.sh',
                 'docs/README.zh-CN.md', 'docs/comparison-prompts.md'])]
    def save(item):
        path = item['path']
        content = get(f'https://raw.githubusercontent.com/{REPO}/{COMMIT}/{path}')
        target = ROOT / 'sources' / path
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_bytes(content)
        return {'path': path, 'git_blob': item['sha'], 'sha256': hashlib.sha256(content).hexdigest(),
                'url': f'https://github.com/{REPO}/blob/{COMMIT}/{path}'}
    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:
        files = sorted(pool.map(save, entries), key=lambda item: item['path'])
    manifest = {'repository': REPO, 'commit': COMMIT, 'commit_date': commit['commit']['committer']['date'],
                'research_date': '2026-09-29', 'files': files,
                'tree': [{'path': item['path'], 'type': item['type']} for item in tree['tree']]}
    (ROOT / 'sources-manifest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
    print(f'Saved {len(files)} source files at {COMMIT}')

if __name__ == '__main__':
    main()
