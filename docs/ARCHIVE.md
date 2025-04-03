# 🗃️ Backup & Archive Strategy

UNIVERSE maintains layered backups to ensure long-term resilience, decentralization, and continuity — aligned with the Infinite Game ethos.

---

## 📦 Branch ZIP Snapshots

Snapshot archives of single branches (no Git history).  
Used for development milestones, releases, and external sharing.

| Date       | Version              | Stage               | Notes                                     |
|------------|----------------------|----------------------|--------------------------------------------|
| 2025-04-03 | UNIVERSE-MAIN-v0.1.0.zip      | Infra1 Prep          | Snapshot after changelog + structure fix   |

---

## 🧬 Full Git Clone Archives

Complete `.git` mirrors zipped for offline backup.  
Contains full history, tags, and all branches.

| Date       | File Name                   | Stage              | Notes                                     |
|------------|-----------------------------|---------------------|--------------------------------------------|
| 2025-04-??? | UNIVERSE-FULL-v0.1.0.zip     | Safe Full Backup    | Includes all Git history and branches      |

---

## 🔒 Mirrored Private Repositories

Redundant Git mirrors pushed to external platforms (shadow clones).  
Ensures continuity across platforms or sovereign storage.

| Date       | Target Repo                | Source Branch | Stage              | Notes                                      |
|------------|----------------------------|----------------|---------------------|---------------------------------------------|
| 2025-04-??? | shadow-gitlab              | dev            | UNIVERSE-FULL-v0.1.0   | Synced via push to private GitLab repo      |

---

## 🧠 Why This Matters

> *Preserving the code is preserving the mission.*  
Each backup is a timestamped reflection of what matters most: continuity, sovereignty, and co-authorship of the Infinite Game.

We don’t just save versions.  
We store our story.

---
