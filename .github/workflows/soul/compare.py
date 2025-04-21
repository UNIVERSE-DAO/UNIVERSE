import json
import sys

with open(".github/workflows/soul/.soul-controlled.json") as f:
    controlled = json.load(f)["controlled"]

try:
    with open("changed.txt") as f:
        changed = [line.strip() for line in f if line.strip()]
except FileNotFoundError:
    changed = []

uncontrolled = [f for f in changed if f not in controlled]

if uncontrolled:
    print("⚠️ Files changed but not tracked in SOUL-AGENT:")
    for u in uncontrolled:
        print(" -", u)
    sys.exit(1)
else:
    print("✅ All updated .md files are already tracked in SOUL-AGENT.")
