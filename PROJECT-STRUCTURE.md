# 📂 UNIVERSE – Project Structure

This document outlines the full folder and file structure of the UNIVERSE repository, including all modules, submodules, placeholders, and special files.

---

## 🔢 Modular System Overview

| Path                                | Purpose                                                                 |
|-------------------------------------|-------------------------------------------------------------------------|
| `.github/`                          | GitHub configuration                                                    |
| └── `workflows/`                    | CI/CD workflows (e.g. `ci.yml`)                                         |
| `0 #DAO - The Layer Zero/`          | 🏛️ Root layer of trust, governance, and smart contracts                 |
| ├── `1.1 contracts/`                | Smart contracts (protected or external repo)                            |
| ├── `1.2 proposals/`                | Proposal logic, drafts, and governance flows                            |
| └── `1.3 voting/`                   | DAO voting logic and (future) UI integration                            |
| `1 #MOMENTUM/`                      | 🔥 Cultural ignition layer — virality, onboarding emotion               |
| └── `- README.md`                   | Placeholder or vision doc                                               |
| `2 MINDFORGER/`                     | 🧠 Ideology, narrative design, philosophical clarity                     |
| ├── `README.md`                     | Explains the role of Mindforger                                         |
| ├── `content.js`                    | Placeholder for future content logic                                    |
| ├── `index.html`                    | Placeholder for interface experiments                                   |
| └── `main.js`                       | Placeholder for interaction logic                                       |
| `3 identity/`                       | 🆔 Self-sovereign login & auth                                          |
| ├── `3.1 #SignUp1/`                 | Web2-compatible onboarding                                              |
| │   └── `#SignUp1.md`               | Protected module placeholder                                            |
| ├── `3.2 #SignUp2/`                 | zk-auth, DIDs, decentralized onboarding                                 |
| │   └── `#SignUp2.md`               | Protected module placeholder                                            |
| └── `- README.md`                   | Identity system structure overview                                      |
| `4 infra/`                          | 🏗️ Privacy-preserving, resilient infrastructure                        |
| ├── `4.1 #infra1/`                  | Early-stage hosted infra (bootstrapping)                                |
| │   └── `#infra1.md`                | Protected logic or notes                                                |
| ├── `4.2 #infra2/`                  | Fully decentralized, censorship-resistant layer                         |
| │   └── `#infra2.md`                | Protected logic or notes                                                |
| ├── `4.3 #KPI/`                     | ZK-KPI systems, verifiable performance tracking                         |
| │   └── `#KPI.md`                   | Placeholder or protected logic                                          |
| └── `README.md`                     | Overview of infrastructure roadmap                                      |
| `5 backend/`                        | ⚙️ APIs, service logic, data handlers                                   |
| ├── `- README.md`                   | Placeholder or module index                                             |
| └── `- package.json`                | Future Node.js configuration                                            |
| `6 frontend/`                       | 🎨 UI components, styling, logic                                        |
| └── `- README.md`                   | Placeholder                                                             |
| `7 nextjs-app/`                     | 🌐 Public-facing web app shell                                          |
| └── `- README.md`                   | Placeholder                                                             |
| `8 scripts/`                        | 🛠️ Internal dev tools and automation                                   |
| └── `- README.md`                   | Placeholder                                                             |
| `docs/`                             | 📚 Documentation, governance references, whitepapers                    |
| `contracts/`                        | 🔐 (Optional) smart contract export or aggregation                      |

---

## 📜 Root Files

| File                        | Purpose                                                  |
|-----------------------------|----------------------------------------------------------|
| `README.md`                 | Project intro, philosophy, and repo structure            |
| `PROJECT-STRUCTURE.md`      | You are here — full repo structure breakdown             |
| `BRANCHING-STRATEGY.md`     | Git workflow and modular branching model                |
| `CHANGELOG.md`              | Development milestones and version log                   |
| `CONTRIBUTING.md`           | Guidelines for contributors                              |
| `LICENSE`                   | Legal usage license                                      |
| `.gitignore`                | Files/folders excluded from version control              |

---

## 🧠 File & Naming Conventions

To clearly communicate the state of each module:

| Symbol/File Name          | Meaning                                                       |
|---------------------------|---------------------------------------------------------------|
| `#MODULE` (e.g. `#DAO`)   | 🛡️ Protected — logic exists privately or externally           |
| `- README.md`             | 📎 Placeholder — descriptive marker or inactive module         |

---

## 🔜 Next Up

- Implement core branches as defined in [`BRANCHING-STRATEGY.md`](BRANCHING-STRATEGY.md)
- Link key protected modules via **Git submodules**
- Begin populating active modules
