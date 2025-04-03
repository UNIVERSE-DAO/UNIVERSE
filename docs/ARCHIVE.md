# 🗃️ Backup & Archive Strategy

UNIVERSE maintains layered backups to ensure long-term resilience, decentralization, and continuity — aligned with the Infinite Game ethos.

---

## 🧩 Backup Layers

- **📦 Branch ZIP Snapshots**  
  Lightweight `.zip` archives of individual branches without Git history. Ideal for external sharing, MVP releases, and milestone checkpoints.

- **🧬 Full Git Repository Clones**  
  `.zip` archives of the full `.git` repo including all branches, tags, and commit history. Used for archival redundancy and offline migration.

- **🔒 Mirrored Private Repositories**  
  Shadow clones — full Git mirrors pushed to alternate platforms or private accounts (e.g. GitLab, Gitea). Enables platform redundancy and censorship resistance.

---

## 📅 Archive Log

| Date       | Type                  | Version / Ref                     | Stage               | Notes                                 |
|------------|------------------------|------------------------------------|----------------------|----------------------------------------|
| 2025-04-03 | Branch ZIP Snapshot    | v0.1.3-main.zip                   | Infra1 Prep          | Snapshot after changelog + structure fix |
| 2025-04-03 | Full Git Clone ZIP     | full-repo-2025-04-03.zip          | Safe full backup     | Includes all Git history and branches   |
| 2025-04-03 | Mirrored Repo          | shadow-gitlab (dev)               | Post-v0.1.3 merge     | Synced via Git push to off-site mirror  |

> Snapshots include committed code, docs, and public assets, but exclude `.env`, credentials, and untracked files.

---

## 🧠 Why This Matters

> *Preserving the code is preserving the mission.*  
Each backup is a resilience checkpoint — a reflection of alignment, intent, and continuity.

We back up not just code, but context.

---
