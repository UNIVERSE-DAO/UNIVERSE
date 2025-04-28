# STRUCTURE of UNIVERSE

This document outlines the current folder and file structure of the UNIVERSE repository, including symbolic modules, protected folders, development placeholders, and system documentation.

---

## Naming Conventions

| Symbol / Pattern        | Meaning                                                                 |
|--------------------------|-------------------------------------------------------------------------|
| `#FOLDER/` or `#file.md`  | 🔐 Protected — logic gated by symbolic phase or governance unlock      |
| `- README.md`             | 📎 Placeholder — structure exists, implementation pending             |
| `README.md`              | 📘 Active — content live & indexed                                      |

---

## UNIVERSE — Layered Project Map

> Each folder is a living module, unfolding in sync with symbolic phases.  
> This structure is not static — it is ritual, roadmap, and responsibility.

| Layer | Folder                | Phase         | Meaning / Activation Layer                                               |
|-------|-----------------------|---------------|---------------------------------------------------------------------------|
| —     | `.github/`             | —             | CI/CD, symbolic link checks, GitHub automation                            |
| 0     | `0 DAO - Layer Zero/`  | 🌒 Phase 0    | Basic Social Consensus Layer — Root Governance                           |
| 1     | `1 MEMES/`             | 🌒 Phase 0    | Memetic ignition, culture transmission, symbolic onboarding               |
| 2     | `2 MINDFORGER/`        | 🌒 Phase 0    | Ideological refinement, perceptual alignment                             |
| 3     | `3 #INFRA/`            | 🌓 → 🌕        | Infra1 (hosted), Infra2 (decentralized) sovereign backbone                 |
| 4     | `4 #S-ID/`             | 🌓 → 🌕        | Sovereign Identity — Web2 bridge to DID & zk-auth sovereignty             |
| 5     | `5 #D-UI/`             | 🌑 Phase 3    | Federated UI — decentralized front-end node ecosystem                    |
| 6     | `6 FEATURES/`          | 🌕 → 🌑        | Protocol logic modules: KPI, SCRS, TTE, etc.                              |
| —     | `backend/`             | —             | APIs, runner services, infrastructure services                            |
| —     | `docs/`                | —             | Living documentation, contributor grammar, symbolic archives             |
| —     | `media/`               | —             | Images, visual symbolic artifacts                                         |
| —     | Root Files             | —             | CONTRIBUTING.md, LICENSE.md, README.md (portal)                           |

---

## Folder-by-Folder Breakdown

| Path                           | Purpose                                                              |
|--------------------------------|----------------------------------------------------------------------|
| `.github/workflows/`            | CI/CD, link checking (`ci-cd.yml`, `link-check.yml`)                 |
| `.gitignore`                   | Ignore build, backup, node_modules, secret files                    |
|                                |                                                                      |
| `0 DAO - Layer Zero/`           | Governance: root contracts, proposals, voting, signatures           |
| ├── `0.1 contracts/`            | Core smart contracts                                                |
| ├── `0.2 proposals/`            | Proposal system (UIP placeholders)                                 |
| ├── `0.3 voting/`               | Voting logic                                                        |
| ├── `0.4 treasury/`             | Treasury flows and funding logic                                   |
| ├── `0.5 signature/`            | Ritual signing, contributor intent                                |
| └── `DAOIST.md`                 | Ritual identity, social consensus root (Layer Zer0)                 |
|                                |                                                                      |
| `1 MEMES/`                     | Cultural ignition, memetic protocol                                 |
| └── `MEMES.md`                  | Meaning Portal, Memes-as-Movement philosophy                        |
|                                |                                                                      |
| `2 MINDFORGER/`                 | Interactive narrative layer: ethics rehearsal before truth engine   |
| ├── `MINDFORGER.md`             | Narrative reflections, PMF frame                                   |
| ├── `content.js`                | Dynamic content for Mindforger app                                 |
| ├── `main.js`                   | Main logic for interactive mirror                                  |
| └── `mindforger.html`           | Deployment HTML shell                                               |
|                                |                                                                      |
| `3 #INFRA/`                     | Sovereign backbone infra                                            |
| ├── `3.1 #INFRA1/`              | Hosted bootstrap systems                                           |
| ├── `3.2 #INFRA2/`              | Fully decentralized infrastructure layer                           |
|                                |                                                                      |
| `4 #S-ID/`                      | Sovereign identity modules                                          |
| ├── `4.1 #SignUp1/`             | Web2-compatible login bridge                                       |
| ├── `4.2 #SignUp2/`             | zk-auth enabled sovereign ID systems                               |
| └── `- README.md`               | Placeholder                                                        |
|                                |                                                                      |
| `5 #D-UI/`                      | Decentralized UI shell                                              |
| └── `- README.md`               | Placeholder                                                        |
|                                |                                                                      |
| `6 FEATURES/`                   | Core symbolic protocol systems                                     |
| ├── `6.1 #KPI/`                 | Key Purpose Indicators: soulful metrics                            |
| ├── `6.2 #TTE/`                 | The Truth Engine (epistemic resilience)                             |
| ├── `6.3 #THG/`                 | The Holy Grail (crucial solution solver)                            |
| ├── `6.4 #PP/`                  | Prevention and Protection protocol                                 |
| ├── `6.5 #SCRS/`                | Smart Compliance & Resilient Systems                               |
| ├── `6.6 #DSM/`                 | Dark Side of the Moon — social layer corrections                   |
| ├── `6.7 #CPI/`                 | Cipherpunk Integrity (resilience metrics)                          |
| ├── `6.8 SOUL-AGENT/`           | Soul reflections and symbolic snapshots                            |
| │   ├── `#SOUL-AGENT.md`         | SOUL Memory (reflections)                                        |
| │   ├── `SOUL-ETHOS.md`          | Public philosophical expression                                   |
| │   ├── `SOUL-BRIEF.md`          | Brand soul compression                                             |
| │   └── `SOUL-MAP.md`            | Living symbolic audit                                              |
|                                |                                                                      |
| `backend/`                      | APIs, runners, bridge services                                     |
| └── `package.json`              | Backend environment/package control                               |
|                                |                                                                      |
| `docs/`                         | Living documentation and contributor tools                         |
| ├── `ARCHITECTURE.md`           | Layer system mapping                                               |
| ├── `ARCHIVE.md`                | Backup and snapshot tracking                                       |
| ├── `BUIDL4.md`                 | Contributor ethos philosophy                                       |
| ├── `CHANGELOG.md`              | Version and evolution tracking                                    |
| ├── `CONNECT.md`                | Participation and contributor pathways                            |
| ├── `GLOSSARY.md`               | Symbol grammar definitions                                         |
| ├── `GUIDE-#SOULETHOS.md`       | Brand Soul guide                                                    |
| ├── `GUIDE-BACKUP.md`           | Backup naming and rituals                                          |
| ├── `GUIDE-BRANCHING.md`        | Git branching symbolic map                                         |
| ├── `GUIDE-COMMIT.md`           | Commit messages symbolic flow                                     |
| ├── `GUIDE-STRUCTURE.md`        | This file — overview of all structure                              |
| ├── `HIGHLIGHTS.md`             | Key verse, gems, and symbolic flashes                             |
| ├── `MANIFESTO.md`              | UNIVERSE DAO foundational vows                                     |
| ├── `MISSION.md`                | Mission articulation (what we protect and build)                   |
| ├── `PHILOSOPHY.md`             | Core existential philosophical framing                             |
| ├── `ROADMAP.md`                | Phases and modular emergence plan                                 |
| └── `VISION.md`                 | Systems design, Infinite Game alignment                            |
|                                |                                                                      |
| `media/`                        | Visual symbolic assets                                             |
| ├── `UNIVERSE-DAO.png`           | DAO visual banner                                                   |
| ├── `UNIVERSE.png`               | Core system logo                                                    |
| ├── `VISION.png`                 | Vision diagram                                                     |
| ├── `memology.png`               | Memetic ignition visual                                            |
| ├── `universe-favicon.ico`       | Favicon                                                            |
| ├── `universe.mp4`               | Video intro (optional)                                             |
| └── `verse-uni.png`              | Verse-based visual soul map                                        |
|                                |                                                                      |
| `CONTRIBUTING.md`                | Contribution path and how to join                                  |
| `LICENSE.md`                    | Ritual license: UNIVERSE.4ALL                                       |
| `README.md`                     | Portal to the Possible: Living WHITEPAPER                           |

---

> _UNIVERSE is a symbolic protocol —  
> You don’t just build it. You **become** it._
