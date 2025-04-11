## 📘 Commit Types & Usage

| Type        | Description                                                       | Example                                                  |
|-------------|-------------------------------------------------------------------|----------------------------------------------------------|
| `feat`      | ✨ New feature or capability                                       | `feat(kpi): add zk-proof verifier to dashboard`          |
| `fix`       | 🐛 Bug fix                                                        | `fix(auth): handle null token edge case`                 |
| `chore`     | 🧹 Routine tasks, no logic change (e.g. docs, config, cleanup)    | `chore(changelog): add entry for version 0.1.3`          |
| `docs`      | 📝 Documentation changes only                                     | `docs(vision): update narrative on decentralization`     |
| `style`     | 🎨 Code formatting, linting — no functional change                | `style(ui): apply Prettier across JSX files`             |
| `refactor`  | 🔄 Code restructuring without changing behavior                   | `refactor(dao): extract voting logic to utils`           |
| `perf`      | ⚡ Performance improvement                                        | `perf(scrs): optimize query latency on metrics API`      |
| `test`      | 🧪 Add/update tests                                               | `test(infra): add coverage for bootstrap script`         |
| `build`     | 📦 Changes to build tooling or dependencies                       | `build: migrate to pnpm and update workspace config`     |
| `ci`        | ⚙️ CI/CD setup or adjustments                                    | `ci: update node version matrix in GitHub Actions`       |
| `revert`    | ⏪ Revert a previous commit                                       | `revert: undo DAO proposal logic due to breaking error`  |

---

## 🧠 Guidelines

- Keep descriptions short, clear, and **in present tense**
- Use `()` to define the **scope** (optional but recommended)
- Use `:` to separate scope and message
- Avoid long commit messages in the title — expand in body if needed

---

## 📌 Examples from This Repo

```bash
chore(changelog): add version [0.1.3] entry for 2025-04-03 updates
docs(archive): add backup and snapshot log strategy
feat(signup2): add placeholder for zk-login UI
fix(ci): correct pipeline trigger for pull requests
refactor(dao): split proposals and contracts into subfolders
