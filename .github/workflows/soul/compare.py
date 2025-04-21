import json
import sys

# --- Load controlled list (from SOUL-AGENT)
with open(".github/workflows/soul/.soul-controlled.json") as f:
    controlled = json.load(f)["controlled"]

# --- Load changed files from git diff
try:
    with open("changed.txt") as f:
        changed = [line.strip() for line in f if line.strip()]
except FileNotFoundError:
    changed = []

# --- Check what's not yet tracked in SOUL-AGENT
uncontrolled = [f for f in changed if f not in controlled]

if uncontrolled:
    print("⚠️ Files changed but not tracked in SOUL-AGENT:")
    for u in uncontrolled:
        print(" -", u)
else:
    print("✅ All updated .md files are already tracked in SOUL-AGENT.")

# --- Check what's not reflected in SOUL-MAP.md
# Manual list based on current SOUL-MAP.md entries
soul_map_tracked = [
    "README.md",
    "MISSION.md",
    "VISION.md",
    "PHILOSOPHY.md",
    "CONTRIBUTING.md",
    "MANIFESTO.md",
    "ROADMAP.md",
    "GLOSSARY.md",
    "LICENSE.md",
    "MEMES.md",
    "ARCHITECTURE.md",
    "GUIDE-STRUCTURE.md",
    "CHANGELOG.md"
]

missing_from_map = [f for f in changed if f not in soul_map_tracked]

if missing_from_map:
    print("\n📌 These changed files are not listed in `SOUL-MAP.md`:")
    for m in missing_from_map:
        print(" -", m)
    print("📎 Consider updating the SOUL-MAP to reflect the symbolic state.\n")

# Exit with error only if controlled check fails
if uncontrolled:
    sys.exit(1)
