# 📂 UNIVERSE – Project Structure

This document outlines the full folder and file structure of the UNIVERSE repository, including all modules, submodules, placeholders, and special files.

---

## 🔢 Modular System Overview

| Path                          | Purpose                                                             |
|-------------------------------|---------------------------------------------------------------------|
| `.github/`                    | GitHub Actions, PR/issue templates                                  |
| └── `workflows/`              | CI/CD workflows (e.g. `ci.yml`)                                     |
| `1 #DAO/`                     | DAO governance layer                                                |
| ├── `1.1 contracts/`          | Smart contracts (protected or external repo)                        |
| ├── `1.2 proposals/`          | Proposal logic, templates                                           |
| └── `1.3 voting/`             | DAO voting logic + possible UI integration                          |
| `2 MINDFORGER/`               | Ideological content, strategy, Cipher Punk vision                   |
| `3 identity/`                 | Identity/auth flows                                                 |
| ├── `3.1 #SignUp1/`           | Web2-compatible onboarding                                          |
| ├── `3.2 #SignUp2/`           | Self-sovereign auth, DIDs, zk-proofs                               |
| └── `- README.md`             | Placeholder for future expansion                                    |
| `4 infra/`                    | Infra modules for decentralization                                 |
| ├── `4.1 #infra1/`            | Bootstrapping phase infra                                           |
| ├── `4.2 #infra2/`            | Full decentralized infra (censorship-proof, zero-trust)            |
| └── `4.3 #KPI/`               | zk-KPI, data verification, telemetry                               |
| └── `README.md`               | Module overview placeholder                                         |
| `5 backend/`                  | Core service logic and APIs (Node.js based)                         |
| ├── `- README.md`             | Placeholder info for backend                                        |
| └── `- package.json`          | Placeholder config for future backend setup                         |
| `6 frontend/`                 | Component-based UI logic                                            |
| └── `- README.md`             | Placeholder                                                         |
| `7 nextjs-app/`               | Public-facing app shell                                             |
| └── `- README.md`             | Placeholder                                                         |
| `8 scripts/`                  | Internal tools, automation scripts                                  |
| └── `- README.md`             | Placeholder                                                         |
| `docs/`                       | Whitepapers, governance references, changelogs                      |
| `contracts/`                  | (optional) centralized place for compiled smart contracts (TBD)     |

---

## 📜 Root Files

| File                        | Purpose                                                  |
|-----------------------------|----------------------------------------------------------|
| `README.md`                 | Project intro, philosophy, and repo structure            |
| `FOLDER-STRUCTURE.md`       | You are here — full repo structure breakdown             |
| `BRANCHING-STRATEGY.md`     | Git workflow and branching model                         |
| `CHANGELOG.md`              | Development milestones and version log                   |
| `CONTRIBUTING.md`           | Guidelines for contributors                              |
| `LICENSE`                   | Legal usage license                                      |
| `.gitignore`                | Tells Git what files/folders to ignore                   |

---

## 🧠 Conventions

To visually communicate the state of modules:

| Symbol/File Name          | Meaning                                                       |
|---------------------------|---------------------------------------------------------------|
| `#MODULE` (e.g. `#DAO`)   | 🛡️ Protected — external or private implementation             |
| `- README.md`             | 📎 Minor placeholder — simple marker or folder description    |

---

## 🔜 Next Up

- Implement all **core branches** as defined in [`BRANCHING-STRATEGY.md`](BRANCHING-STRATEGY.md)
- Link protected modules via **Git submodules** (e.g. `dao-contracts`, `auth-core`)
- Start populating active modules (e.g. `3.1 #SignUp1`, `4.3 #KPI`) with starter files

---

> _This structure ensures a future-proof, modular, and decentralized development approach for UNIVERSE._

