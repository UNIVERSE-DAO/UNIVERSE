import json
from pathlib import Path

# Load controlled docs
with open(".github/workflows/soul/.soul-controlled.json") as f:
    controlled = set(json.load(f)["controlled"])

# Read changed files
try:
    with open("changed.txt") as f:
        changed = set(line.strip() for line in f if line.strip())
except FileNotFoundError:
    changed = set()

# Compare lists
new_files = changed - controlled
removed_from_control = controlled - changed

# Output results
print("\n📄 Changed Markdown Files:")
print("\n".join(f" - {f}" for f in changed) if changed else " - None")

print("\n📘 Controlled Files:")
print("\n".join(f" - {f}" for f in controlled))

if new_files:
    print("\n⚠️ New/Untracked Files (not in SOUL-AGENT):")
    for file in sorted(new_files):
        print(f" - {file}")
else:
    print("\n✅ All changed files are tracked in SOUL-AGENT.")

# Exit with warning if untracked files exist
if new_files:
    exit(1)
