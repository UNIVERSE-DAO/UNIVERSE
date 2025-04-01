# 🧬 UNIVERSE Project – Branching Strategy

This document outlines the Git branching system for the UNIVERSE project.  
It supports modular development, decentralization phases, and collaborative workflows.

---

## 🔗 Permanent Core Branches

| Branch         | Purpose                                                                 |
|----------------|-------------------------------------------------------------------------|
| `main`         | ✅ Stable, production-level code (demo-ready, investor-facing)          |
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

These branches are created from a relevant core branch (like `dev`, `infra1`, `identity`, etc.) and merged back when completed and reviewed.

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
2. Make your changes → commit and push
3. Open a **Pull Request** into the parent branch
4. Review and test changes
5. Merge the PR after approval
6. Periodically merge `dev` → `main` when stable

---

## 🧠 Philosophy

> One branch = one clear purpose  
> Build modular, test independently, and merge cleanly.

This strategy supports collaborative scaling while keeping complexity under control.

---

## 📁 Folder & File Naming Conventions

To clarify the state of each module, UNIVERSE uses consistent naming markers:

| Status                  | Naming Pattern      | Meaning                                                             |
|-------------------------|---------------------|----------------------------------------------------------------------|
| 📦 Placeholder Module    | `-README.md`        | Module is **planned** but not yet implemented                       |
| 🛡️ Protected Module      | `#MODULE`           | Logic exists but is **withheld** for IP or security reasons         |

### 📌 Example Usage

- A file or folder prefixed with `#`, such as `#DAO`, indicates protected content developed externally or under NDA.
- A file like `-README.md` inside a module marks it as a placeholder for planned but not-yet-implemented logic.

These naming conventions improve clarity for contributors, reviewers, and investors — helping everyone quickly understand what’s public, planned, or protected.

---

> _Branch with purpose. Merge with clarity. Build the Infinite Game._
