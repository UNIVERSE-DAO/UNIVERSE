# 🗂 UNIVERSE Backup Naming Guide

Naming patterns for backing up the UNIVERSE repository — including branch snapshots, full `.git` mirrors, and mirrored private repositories (a.k.a. “shadow clones”).

---

## 🔖 Overview Table

| Backup Type               | Naming Format                          | Contains                        | Use When                           |
|---------------------------|-----------------------------------------|----------------------------------|------------------------------------|
| Branch ZIP Snapshot       | `UNIVERSE-v[ver]-[branch]-[note].zip`   | Files from one branch (no Git)  | Sharing, releasing, quick backup   |
| Full Git Clone ZIP        | `UNIVERSE-full-repo-[date].zip`         | All branches, commits, tags     | Archival, migration, max safety    |
| Mirrored Private Repo     | `universe-shadow-[provider]`            | All Git data via remote push    | Off-site redundancy & continuity   |

---

## 📦 1. Branch ZIP Snapshots

**Purpose**: `.zip` archive of a single branch’s working directory (no commit history).

**Naming Format**  
`UNIVERSE-v[version]-[branch]-[note].zip`

**Examples**  
- `UNIVERSE-v0.1.3-main.zip`  
- `UNIVERSE-dev-backup-2025-04-03.zip`  
- `UNIVERSE-v0.2.0-signup-alpha.zip`

**Log in `ARCHIVE.md`**  
`2025-04-03 | v0.1.3-main.zip | Infra1 Prep | Snapshot after changelog + structure fix`

---

## 🧬 2. Full Git Clone ZIPs

**Purpose**: Archive of the full repository, including all branches, tags, and commit history.

**Naming Format**  
`UNIVERSE-full-repo-[date].zip`

**Example**  
- `UNIVERSE-full-repo-2025-04-03.zip`

**How to Create**

```bash
git clone --mirror https://github.com/your/repo.git
cd repo.git
zip -r UNIVERSE-full-repo-2025-04-03.zip .
```

**Log in `ARCHIVE.md`**  
`2025-04-03 | full-repo zip | Safe full backup | Includes all Git history and branches`

---

## 🔒 3. Mirrored Private Repositories (aka "Shadow Clones")

**Purpose**: Redundant Git mirrors pushed to a separate platform or backup account for resilience and censorship resistance.

**Naming Format**  
`universe-shadow-[account|provider]`

**Examples**  
- `universe-shadow-gitlab` → GitLab-hosted mirror  
- `universe-shadow-selfhost` → Gitea/self-hosted backup repo

**Log in `ARCHIVE.md`**  
`2025-04-03 | Mirror Push | dev → shadow-gitlab | Post-v0.1.3 merge`

> Also referred to as: mirrored repositories, Git remotes, or “shadow clones” in internal UNIVERSE vocabulary. 🕶️

---

## ✅ Optional Enhancements

- Add a `scripts/backup.sh` to automate snapshots
- Include `📦 Backup: Enabled` badge in `README.md`
- Update PR template to include backup version reference

---

> You're not just backing up code — you're archiving intention.  
> Each snapshot is a checkpoint in the Infinite Game 🌌

