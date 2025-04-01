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
| ├── `5.2 #infra2/`                     | Fully decentralized infrastructure                                      |
| ├── `5.3 #KPI/`                        | zk-KPI and verifiable telemetry                                         |
| └── `- README.md`                      | Infra module roadmap                                                    |
| `6 scripts/`                           | 🛠️ Internal tools, automation, setup helpers                           |
| └── `- README.md`                      | Placeholder                                                             |
| `7 nextjs-app/`                        | 🌐 Public-facing web shell                                              |
| └── `- README.md`                      | Placeholder                                                             |
| `backend/`                             | ⚙️ API logic, Node.js service layer                                     |
| ├── `package.json`                     | Config with test placeholder                                            |
| └── `index.js`                         | (Recommended) Entry point for future services                           |
| `docs/`                                | 📚 Whitepapers, governance, changelogs                                  |
| `contracts/`                           | 🔐 Smart contract aggregation or deployment exports                      |
| └── `- README.md`                      | Placeholder or purpose description                                      |

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

> Use `#` to mark protected folders, and `-README.md` as placeholder markers. Avoid special characters in system-critical files like `package.json`.

---

## 🔜 Next Steps

- Create core branches as defined in [`BRANCHING-STRATEGY.md`](BRANCHING-STRATEGY.md)
- Connect external submodules (e.g. DAO contracts, auth core)
- Begin implementation inside:
  - `4.1 #SignUp1/` — onboarding logic  
  - `5.3 #KPI/` — metrics and telemetry  
  - `1 #MOMENTUM/` — cultural traction tools
- Use `2 MINDFORGER/` to shape the narrative and uncover product–market fit signals

---

> _UNIVERSE is not just a project. It’s a structured invitation to co-create the Infinite Game._
