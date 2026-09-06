#!/usr/bin/env python3
"""Rebuild precache.json after adding photos or site files. Bump CACHE in sw.js too."""
from pathlib import Path
import json

ROOT = Path(__file__).resolve().parent.parent
SKIP_DIRS = {".git", ".github", "scripts"}
SKIP_FILES = {".gitignore", "README.md", "wrangler.jsonc", "_headers"}
SKIP_NAMES = {".gitkeep"}

files = []
for path in ROOT.rglob("*"):
    if not path.is_file():
        continue
    if any(part in SKIP_DIRS for part in path.parts):
        continue
    if path.name in SKIP_NAMES or path.name in SKIP_FILES:
        continue
    rel = "./" + path.relative_to(ROOT).as_posix()
    files.append(rel)

files = sorted(set(files))

(ROOT / "precache.json").write_text(json.dumps(files, indent=2) + "\n")
print(f"wrote {len(files)} entries to precache.json")
