# 🧬 UNIVERSE Project – Branching Strategy

This document outlines the Git branching system for the UNIVERSE project.  
It supports modular development, decentralization phases, and collaborative workflows.

---

## 🔗 Permanent Core Branches

| Branch         | Purpose                                                                 |
|----------------|-------------------------------------------------------------------------|
| `main`         | ✅ Stable, production-level code (demo-ready, investor-facing)           |
| `dev`          | 🧪 Active development branch — staging zone for merging features         |
| `docs`         | 📚 Documentation, whitepapers, governance processes                      |
| `infra1`       | 🏗️ Infrastructure for the **bootstrapping phase**                        |
| `infra2`       | 🛡️ Fully decentralized, censorship-resistant infrastructure              |
| `identity`     | 🆔 Login/auth flows, DIDs, zk-authentication                             |
| `scrs`         | 🔍 Smart Compliance & Resilient SaaS — zk-KPIs, federated data, etc.     |
| `dao-core`     | 🏛️ DAO smart contracts, governance logic, proposal handling              |
| `ui/nextjs`    | 🎨 Front-end UI/UX logic (Next.js app, UI-polishing, voting, onboarding) |

---

## 🌱 Short-Lived Feature Branches

These are created from the most relevant parent branch (`dev`, `infra1`, etc.), then merged back when complete.

| Branch                     | Based on      | Purpose                                                   |
|----------------------------|---------------|-----------------------------------------------------------|
| `feature/signup1-flow`     | `identity`    | Web2-style onboarding with privacy foundation             |
| `feature/signup2-did`      | `identity`    | Full DIDs, zk-proofs, sovereign login system              |
| `feature/infra1-logging`   | `infra1`      | Logging/telemetry for early infra (privacy-preserving)   |
| `feature/dao-voting-ui`    | `ui/nextjs`   | DAO voting UI component                                   |
| `feature/scrs-zk-kpi`      | `scrs`        | Zero-knowledge KPI verification logic                     |
| `bugfix/dao-smartcontract` | `dao-core`    | Fixes or tweaks to DAO smart contract logic               |
| `feature/ui-polishing`     | `ui/nextjs`   | Styling, layout, animation tweaks to frontend             |

---

## 🔁 Workflow Summary

1. **Create a branch** from the appropriate base (e.g. `dev`, `identity`, `infra1`, etc.)
2. Make changes → commit and push
3. Open a **Pull Request** into the parent branch
4. Test, review, and merge
5. Periodically merge `dev` → `main` when stable

---

## 🧠 Philosophy

> One branch = one clear purpose  
> Build modular, test independently, and merge cleanly.

---

## 📁 Folder & File Naming Conventions

To clarify the state of each module in the codebase, UNIVERSE uses specific file naming patterns:

| Status                  | Naming Pattern         | Meaning                                                                 |
|--------------------------|------------------------|-------------------------------------------------------------------------|
| 📦 Placeholder Module    | `--README.md`          | Indicates the module is **planned** but not yet implemented             |
| 🛡️ Protected Module      | `#MODULE` (e.g. `#DAO`) | Indicates the module exists but is **withheld** for IP/security reasons |

### Example Usage:

- A folder like `dao/` might contain a file: `#DAO`, with a note that smart contracts are being developed externally.
- A folder like `scrs/` might contain a file: `--README.md`, indicating the logic will be implemented in the next stage.

These naming patterns improve clarity for contributors, reviewers, and investors by showing which parts of the system are active, pending, or intentionally hidden.

---
