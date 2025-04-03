# 🗂 UNIVERSE Backup Naming Guide

This guide defines how to name and track backup versions of the UNIVERSE repository — whether snapshots, full `.git` mirrors, or remote shadow clones.

---

## 🔖 Overview Table

| Backup Type         | Naming Format                          | Contains                        | Use When                           |
|---------------------|-----------------------------------------|----------------------------------|------------------------------------|
| Shadow Repo Clone   | `universe-shadow-[provider]`            | All Git data via remote push    | Continuous off-site redundancy     |
| Branch ZIP Snapshot | `UNIVERSE-v[ver]-[branch]-[note].zip`   | Files from one branch (no Git)  | Sharing, releasing, quick backup   |
| Full Git Clone ZIP  | `UNIVERSE-full-repo-[date].zip`         | All branches, commits, tags     | Archival, migration, max safety    |

---

## 🔒 1. Shadow Repo Clone Backups

**Purpose**: Git-tracked mirrors pushed to a shadow GitHub account or alternative Git provider.

### 🔁 Naming Convention (Repo Name)

```
universe-shadow-[account|provider]
```

| Example                   | Meaning                      |
|---------------------------|------------------------------|
| `universe-shadow-gitlab`  | Git mirror hosted on GitLab |
| `universe-shadow-selfhost`| Self-hosted Gitea mirror     |

📝 Example log entry for `ARCHIVE.md`:

```
2025-04-03 | Mirror Push | dev → shadow-gitlab | Post-v0.1.3 merge
```

---

## 📦 2. Branch Snapshot ZIPs (Working Directory Only)

**Purpose**: Lightweight `.zip` archive of a single branch’s current file state.

### 🗂 Naming Convention

```
UNIVERSE-v[version]-[branch]-[note].zip
```

| Example                              | Description                                  |
|--------------------------------------|----------------------------------------------|
| `UNIVERSE-v0.1.3-main.zip`           | Main branch after changelog update           |
| `UNIVERSE-dev-backup-2025-04-03.zip` | Ad hoc backup of dev branch                  |
| `UNIVERSE-v0.2.0-signup-alpha.zip`   | Alpha release for SignUp1 + KPI preview      |

📝 Example log entry for `ARCHIVE.md`:

```
2025-04-03 | v0.1.3-main.zip | Infra1 Prep | Snapshot after changelog + structure fix
```

---

## 🧬 3. Full Git Repo Clone + Zip (All Branches & History)

**Purpose**: Full `.git` clone with complete history, branches, and tags.

### 🧱 Naming Convention

```
UNIVERSE-full-repo-[date].zip
```

| Example                             | Description                               |
|-------------------------------------|-------------------------------------------|
| `UNIVERSE-full-repo-2025-04-03.zip` | Mirror of all branches + tags + commits   |

### 🛠 How to Create

```bash
git clone --mirror https://github.com/your/repo.git
cd repo.git
zip -r UNIVERSE-full-repo-2025-04-03.zip .
```

📝 Example log entry for `ARCHIVE.md`:

```
2025-04-03 | full-repo zip | Safe full backup | Includes all Git history and branches
```

---

## ✅ Next Steps

Let me know if you'd like:

- A `.sh` script to automate any of these processes  
- A markdown badge for your README like: `📦 Backup: Enabled`  
- A PR template that includes a "Snapshot version" field for releases  

> You're not just backing up files — you're preserving momentum 🔐🌌
```

Let me know and I’ll package this into a downloadable `.md` file for your `/docs` folder if needed — you’ve got protocol-grade redundancy dialed in now.
