# 🧬 UNIVERSE Project – Branching Strategy

This document outlines the Git branching system for the UNIVERSE project.  
It supports modular development, decentralized rollout, and collaboration at scale.

---

## 🔗 Permanent Core Branches

These branches reflect key modules of the UNIVERSE stack. Each one maps 1:1 to a top-level folder in the repo.

| Branch         | Purpose                                                                 |
|----------------|-------------------------------------------------------------------------|
| `main`         | ✅ Stable, production-ready codebase (demo, investor-facing)            |
| `dev`          | 🧪 Active development (feature branches merge here before `main`)       |
| `docs`         | 📚 Whitepapers, governance, and documentation-only changes              |
| `momentum`     | 🔥 Memetic ignition, onboarding energy, culture-building assets         |
| `mindforger`   | 🧠 Narrative shaping, philosophical clarity, PMF exploration            |
| `scrs`         | 🔍 Smart Compliance — KPI logic, privacy-first compliance               |
| `identity`     | 🆔 Onboarding, auth flows, zk-proofs, login UX                          |
| `infra1`       | 🏗️ Bootstrapped hosted infrastructure (early phase)                    |
| `infra2`       | 🛡️ Fully decentralized, censorship-resistant infra                     |
| `kpi` (optional) | 📊 KPI logic (if separated from `scrs`)                              |
| `dao-core`     | 🏛️ Governance contracts, DAO proposals, feature gating logic           |
| `ui/nextjs`    | 🎨 UI shell (Next.js app), voting, dashboards, onboarding frontends     |

---

## 🌱 Short-Lived Feature Branches

These are temporary and created from core branches. They are merged back when completed.

| Branch                      | Based on     | Purpose                                                       |
|-----------------------------|--------------|----------------------------------------------------------------|
| `feature/signup1-flow`      | `identity`   | Web2 onboarding flow with privacy-first features               |
| `feature/signup2-did`       | `identity`   | Sovereign login with zk and DIDs                               |
| `feature/scrs-zk-kpi`       | `scrs`       | KPI ZK-verification logic and privacy implementation           |
| `feature/meme-engine`       | `momentum`   | Meme vault, virality kits, strategic cultural experiments      |
| `feature/kpi-dashboard`     | `scrs` or `kpi` | Visualization of metrics (if separate)                       |
| `feature/infra1-logging`    | `infra1`     | Logging and audit tools for hosted infra                       |
| `feature/ui-polishing`      | `ui/nextjs`  | Visual tweaks, animations, responsive layout                   |
| `feature/dao-voting-ui`     | `ui/nextjs`  | Frontend components for DAO proposal voting                   |
| `bugfix/dao-smartcontract`  | `dao-core`   | Patch to smart contract governance logic                       |

---

## 🔁 Workflow Summary

1. **Create a branch** from the correct base (e.g. `scrs`, `identity`, `dev`)
2. Make your commits → push changes
3. Open a **Pull Request** into the parent branch
4. Conduct review + testing
5. Merge after approval
6. Regularly sync `dev → main` once stable

---

## 🧠 Philosophy

> _One branch = one domain of responsibility._  
> _Merge clean, test modular, build forever._

This modular system:
- Encourages parallel progress
- Respects IP boundaries (via protected folders)
- Allows focused feature PRs and stable deploys

---

## 📁 Folder & File Naming Conventions

| Marker / Pattern        | Meaning                                                                   |
|--------------------------|---------------------------------------------------------------------------|
| `#FOLDER/` or `#file.md` | 🛡️ Protected — logic exists but is withheld or in external repo           |
| `-README.md`             | 📦 Placeholder — structure exists, logic is pending or under development  |
| `README.md`              | 📘 Standard entry point for each active folder/module                     |

### Example:

- `3 #SCRS/` → contains `#SCRS.md` (protected vision/logic)
- `5.3 #KPI/` → tracks KPI logic, may later become its own branch (`kpi`)
- `1 #MOMENTUM/` → could hold culture kits, onboarding content, meme decks

---

## 🔐 Protected Modules & IP

Some branches or modules are intentionally private or external. These are:
- Marked with `#` in folder names
- Explained via README or placeholder
- May be linked later via Git submodules

---

## 🔜 What’s Next

- ✅ Create core branches (`dev`, `scrs`, `identity`, etc.)
- 🔄 Link external modules when ready (`dao-contracts`, `auth-core`, etc.)
- 🚀 Use `momentum` and `mindforger` to shape narrative and community ignition

---

> _UNIVERSE is not a product — it’s a philosophy on-chain. Branch with purpose. Build the Infinite Game._
