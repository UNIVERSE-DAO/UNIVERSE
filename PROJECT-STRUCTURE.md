# 📂 UNIVERSE – Project Structure

This document outlines the current folder and file structure of the UNIVERSE repository, including all modules, protected areas, and development placeholders.

---

## 🔢 Modular System Overview

| Path                                   | Purpose                                                                 |
|----------------------------------------|-------------------------------------------------------------------------|
| `.github/`                             | GitHub configuration and automation                                     |
| `0 #DAO - The Layer Zero/`             | 🏛️ Root consensus layer — DAO governance, contracts, proposals          |
| ├── `1.1 contracts/`                   | Smart contracts (protected or external)                                 |
| ├── `1.2 proposals/`                   | DAO proposal templates and governance flows                             |
| └── `1.3 voting/`                      | Voting logic and UI integration                                         |
| `1 #MOMENTUM/`                         | 🔥 Cultural ignition — virality, onboarding emotion                     |
| └── `- README.md`                      | Placeholder or overview                                                 |
| `2 MINDFORGER/`                        | 🧠 Ideology layer — vision, PMF insight, narrative refinement           |
| ├── `README.md`                        | Introduction to the Mindforger layer                                    |
| ├── `content.js`                       | Placeholder content logic (future)                                      |
| ├── `index.html`                       | Prototype or storytelling draft                                         |
| └── `main.js`                          | Placeholder for interface interaction                                   |
| `3 #SCRS/`                             | 🔍 Smart Compliance & Resilient SaaS — privacy-first KPI infrastructure |
| └── `#SCRS.md`                         | Protected description or architecture overview                          |
| `4 identity/`                          | 🆔 Self-sovereign identity and onboarding systems                        |
| ├── `4.1 #SignUp1/`                    | Web2-style login with privacy-first foundation                          |
| │   └── `#SignUp1.md`                  | Protected logic or private documentation                                |
| ├── `4.2 #SignUp2/`                    | zk-login, DIDs, decentralized identity                                  |
| │   └── `#SignUp2.md`                  | Protected logic or private documentation                                |
| └── `- README.md`                      | Identity system overview (placeholder)                                  |
| `5 infra/`                             | 🏗️ Infrastructure modules for decentralization                         |
| ├── `5.1 #infra1/`                     | Hosted infra (bootstrapping)                                            |
| │   └── `#infra1.md`                   | Protected logic or private implementation notes                         |
| ├── `5.2 #infra2/`                     | Fully decentralized infrastructure                                      |
| │   └── `#infra2.md`                   | Protected logic or private implementation notes                         |
| ├── `5.3 #KPI/`                        | zk-KPI and verifiable telemetry                                         |
| │   └── `#KPI.md`                      | Protected logic or placeholder                                          |
| └── `- README.md`                      | Infra module roadmap                                                    |
| `6 backend/`                           | ⚙️ Service logic, APIs (currently empty)                                |
| ├── `- README.md`                      | Placeholder                                                             |
| └── `- package.json`                   | Placeholder config                                                      |
| `7 nextjs-app/`                        | 🌐 Public-facing web shell                                              |
| └── `- README.md`                      | Placeholder                                                             |
| `8 scripts/`                           | 🛠️ Internal tools, setup automation                                    |
| └── `- README.md`                      | Placeholder                                                             |
| `docs/`                                | 📚 Whitepapers, governance, changelogs                                  |

---

## 📜 Root Files

| File                        | Purpose                                                  |
|-----------------------------|----------------------------------------------------------|
| `README.md`                 | Project introduction and overview                        |
| `PROJECT-STRUCTURE.md`      | You are here — the full module layout                    |
| `BRANCHING-STRATEGY.md`     | Git strategy and branch naming conventions               |
| `CHANGELOG.md`              | Dev history, milestone tracking                          |
| `CONTRIBUTING.md`           | Contribution guidelines                                  |
| `LICENSE`                   | Open-source license details                              |
| `.gitignore`                | Files/folders excluded from version control              |

---

## 🧠 Naming Conventions

| Marker / Pattern           | Meaning                                                                 |
|----------------------------|-------------------------------------------------------------------------|
| `#FOLDER/` or `#file.md`   | 🛡️ Protected — logic is intentionally withheld or in a private repo     |
| `- README.md`              | 📎 Placeholder — module exists but implementation is pending            |
| `README.md`                | 📘 Entry point for active folders — always use for clarity              |

> Folder names may contain `#` to mark protection, but for cross-platform compatibility, keep inner logic clean. Use `README.md` for previews and clarity in GitHub’s UI.

---

## 🔜 Next Steps

- Implement modular branches from [`BRANCHING-STRATEGY.md`](BRANCHING-STRATEGY.md)
- Begin linking protected modules (e.g. `dao-contracts`, `auth-core`) as submodules
- Fill key logic in:  
  - `4.1 #SignUp1` (onboarding)  
  - `5.3 #KPI` (metrics)  
  - `1 #MOMENTUM` (cultural engine)
- Use `2 MINDFORGER` to document evolving narrative, user signal, and PMF learning

---

> _UNIVERSE is not just code — it’s protocol, philosophy, and participation.  
> This structure is your blueprint for building the Infinite Game._
