# 🗂 UNIVERSE Backup Naming Guide

Naming patterns for backup snapshots, full `.git` mirrors, and remote shadows.

---

## 🔖 Overview Table

| Backup Type         | Naming Format                          | Contains                        | Use When                           |
|---------------------|-----------------------------------------|----------------------------------|------------------------------------|
| Shadow Repo Clone   | `universe-shadow-[provider]`            | All Git data via remote push    | Continuous off-site redundancy     |
| Branch ZIP Snapshot | `UNIVERSE-v[ver]-[branch]-[note].zip`   | Files from one branch (no Git)  | Sharing, releasing, quick backup   |
| Full Git Clone ZIP  | `UNIVERSE-full-repo-[date].zip`         | All branches, commits, tags     | Archival, migration, max safety    |

---

## 🔒 Shadow Repo Clone Backups

**Purpose**: Remote `.git` mirrors for redundancy.

**Naming Format**:  
`universe-shadow-[account|provider]`

Examples:  
- `universe-shadow-gitlab` → GitLab backup  
- `universe-shadow-selfhost` → Self-hosted mirror

**Log in ARCHIVE.md**:  
`2025-04-03 | Mirror Push | dev → shadow-gitlab | Post-v0.1.3 merge`

---

## 📦 Branch ZIP Snapshots

**Purpose**: `.zip` of one branch’s working directory (no `.git`).

**Naming Format**:  
`UNIVERSE-v[version]-[branch]-[note].zip`

Examples:  
- `UNIVERSE-v0.1.3-main.zip`  
- `UNIVERSE-dev-backup-2025-04-03.zip`  
- `UNIVERSE-v0.2.0-signup-alpha.zip`

**Log in ARCHIVE.md**:  
`2025-04-03 | v0.1.3-main.zip | Infra1 Prep | Snapshot after changelog + structure fix`

---

## 🧬 Full Git Clone ZIPs

**Purpose**: Backup of all branches, tags, and history.

**Naming Format**:  
`UNIVERSE-full-repo-[date].zip`

Example:  
- `UNIVERSE-full-repo-2025-04-03.zip`

**How to Create**:
1. `git clone --mirror https://github.com/your/repo.git`
2. `cd repo.git`
3. `zip -r UNIVERSE-full-repo-2025-04-03.zip .`

**Log in ARCHIVE.md**:  
`2025-04-03 | full-repo zip | Safe full backup | Includes all Git history and branches`

---

## ✅ Optional Enhancements

- Shell script to auto-archive current branch  
- `📦 Backup: Enabled` badge in README  
- PR template for version logging

> You’re not just saving code — you’re anchoring the Infinite Game 🌌

---

Let me know if you want this turned into a file — or dropped into your `/docs` folder with a simple commit.
