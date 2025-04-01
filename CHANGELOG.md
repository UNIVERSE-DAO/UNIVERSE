# 📜 CHANGELOG

All notable changes to this project will be documented here.

---

## [0.1.0] – 2025-04-01

### 🆕 Added
- Created full **modular folder structure** following staged decentralization roadmap
- Numbered all top-level modules for logical hierarchy:
  - `1 #DAO/`, `2 MINDFORGER/`, `3 identity/`, `4 infra/`, etc.
- Added nested subfolders for:
  - `1.1 contracts/`, `1.2 proposals/`, `1.3 voting/`
  - `3.1 #SignUp1/`, `3.2 #SignUp2/`
- Introduced placeholder files (`-README.md`, `-package.json`) for protected or future modules
- Cleaned up `.gitignore`, `.github/`, and special files to stay unnumbered
- Updated `README.md` with live folder structure and purpose-based descriptions

### 🛠️ Refactored
- Renamed several folders to match roadmap hierarchy (e.g. `infra → 4 infra`, `backend → 5 backend`)
- Removed or relocated unused boilerplate files to improve clarity

### 🧭 Next Step
- Begin **implementing the branching strategy** using the documented `BRANCHING-STRATEGY.md`
  - Create base branches: `main`, `dev`, `docs`, `infra1`, etc.
  - Set up consistent naming for feature branches (e.g. `feature/signup1-flow`)

---

> This marks the foundational structure of the UNIVERSE codebase:  
> future-proofed, modular, and ready for the Infinite Game 🌌

