# 🗂 UNIVERSE Backup Naming Guide

Naming patterns for backing up the UNIVERSE repository — including branch snapshots, full `.git` mirrors, and mirrored private repositories (a.k.a. “shadow clones”).

---

## 🔖 Overview Table

| Backup Type               | Naming Format                       | Contains                        | Use When                           |
|---------------------------|--------------------------------------|----------------------------------|------------------------------------|
| Branch ZIP Snapshot       | `UNIVERSE-MAIN-v[version].zip`       | Files from one branch (no Git)  | Milestones, releases, sharing      |
| Full Git Clone ZIP        | `UNIVERSE-FULL-v[version].zip`       | All branches, commits, tags     | Offline archive, migration         |
| Mirrored Private Repo     | `universe-shadow-[provider]`         | Git mirror via remote push      | Off-site redundancy & continuity   |

---

## 📦 1. Branch ZIP Snapshots

**Purpose**  
`.zip` archive of a single branch’s working directory.  
Excludes commit history, suitable for public or external release.

**Naming Format**  
`UNIVERSE-MAIN-v[version].zip`

**Examples**  
- `UNIVERSE-MAIN-v0.1.0.zip`  
- `UNIVERSE-MAIN-v0.2.0-beta.zip`  
- `UNIVERSE-DEV-v0.1.3-experiment.zip`

**Log in `ARCHIVE.md`**  
`2025-04-03 | UNIVERSE-MAIN-v0.1.0.zip | Infra1 Prep | Snapshot after changelog + structure fix`

---

## 🧬 2. Full Git Clone ZIPs

**Purpose**  
`.zip` archive of the full `.git` repo with all history, tags, and branches.  
Ideal for offline storage or repo migration.

**Naming Format**  
`UNIVERSE-FULL-v[version].zip`

**Example**  
- `UNIVERSE-FULL-v0.1.0.zip`

**How to Create**

```bash
git clone --mirror https://github.com/your/repo.git UNIVERSE-FULL-v0.1.0.git
cd UNIVERSE-FULL-v0.1.0.git
zip -r UNIVERSE-FULL-v0.1.0.zip .
```

**Log in `ARCHIVE.md`**  
`2025-04-03 | UNIVERSE-FULL-v0.1.0.zip | Safe Full Backup | Includes all Git history and branches`

---

## 🔒 3. Mirrored Private Repositories (aka "Shadow Clones")

**Purpose**  
Redundant Git mirrors pushed to another platform (e.g. GitLab, self-hosted).  
Used for resilience, censorship resistance, and continuity.

**Naming Format**  
`universe-shadow-[provider]`

**Examples**  
- `universe-shadow-gitlab` → GitLab-hosted private backup  
- `universe-shadow-selfhost` → Gitea or other sovereign storage

**Log in `ARCHIVE.md`**  
`2025-04-03 | shadow-gitlab | dev | UNIVERSE-FULL-v0.1.0 | Synced to GitLab mirror repo`

> Also referred to as: mirrored repositories, Git remotes, or "shadow clones" in internal UNIVERSE vocabulary. 🕶️

---

## ✅ Optional Enhancements

- Add `scripts/backup.sh` to automate zip + logging  
- Display `📦 Backup: Enabled` badge in your `README.md`  
- Add a `Backup Version` field to your PR template

---

> You're not just backing up code — you're archiving intention.  
> Every snapshot is a timestamp in the Infinite Game 🌌
