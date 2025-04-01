🧠 MINDFORGER

**MINDFORGER** is a conceptual storytelling experience that explores how meaning shifts depending on perspective. It adapts philosophical and social concepts based on user-selected filters such as **Age**, **Emotion**, **Ideology**, and **Framing Style** — revealing how narratives transform through different lenses.

---

## 🚀 Project Purpose

To help users reflect on how perception shapes reality.  
Users can explore core human topics (like *Motivation*, *Realization*, etc.) through:

- A base interpretation
- Adaptive re-interpretations based on selected filters:
  - Stage of Life
  - Emotion
  - Ideological Bias
  - Framing/Manipulation Style

The aim is to promote **critical thinking**, **media literacy**, and **emotional awareness**.

---

## 🧩 Project Structure

\`\`\`
project-root/
├── index.html       # UI layout, style, and structure
├── main.js          # Core logic: filters, matching, interaction
├── content.js       # Topic content + adaptive variants
\`\`\`

---

## 🎨 UI Overview (`index.html`)

- **Dark-themed**, two-column layout:
  - **Left**: Topic navigation
  - **Right (Top)**: Original/base concept
  - **Right (Bottom)**: Adaptive interpretation
- **Dropdown filters** with subtle animation and icons
  - Stage of Life: Elementary, Adult, Pension Age
  - Emotion: Hope, Fear, Curiosity
  - Ideology: Left, Right, Socialist, Capitalist
  - Manipulation Style: Reassuring, Provocative, Manipulative
- Fully responsive across devices

---

## 🧠 Filter Logic (`main.js`)

When filters are selected, the system builds **combo keys** and tries to find the best matching adaptation in the following order:

### Combo Matching Tiers:

1. \`age_ideology_emotion_manipulation\`
2. \`age_ideology_emotion\`
3. \`ideology_emotion_manipulation\`
4. \`age_emotion\`
5. \`ideology_emotion\`
6. \`emotion_manipulation\`
7. \`emotion\`
8. \`manipulation\`
9. \`ideology\`
10. \`age\`
11. \`base\`

### Behavior:
- On topic select: loads original text + applies any active filters
- On filter change: updates adaptive interpretation dynamically
- On no match: falls back gracefully to simpler keys or base
- On first load or cleared filters: prompts user to choose filters
- Adaptive title updates to show topic name when a match is found

---

## 🗃️ Content Format (`content.js`)

Each topic follows the structure:

\`\`\`js
adaptedMap.topicName = {
  base: "...",         // Default text
  Elementary: "...",   // Age-specific base
  Adult: "...",
  Pension: "...",

  // Optional combo entries
  "Adult_Left_Hope_Manipulative": "...",
  ...
};
\`\`\`

### Topics Implemented:
| Topic          | Base | Age Variants | Combo Variants |
|----------------|------|--------------|----------------|
| Motivation      | ✅   | ✅            | ✅ (108 entries scaffolded) |
| Escalation      | ✅   | ✅            | ❌              |
| Realization     | ✅   | ✅            | ❌              |
| Interpretation  | ✅   | ✅            | ❌              |
| Clarification   | ✅   | ✅            | ❌              |
| Determination   | ✅   | ✅            | ❌              |

---

## ✨ Optional Features (Future Ideas)

- LocalStorage: Save last visited topic + filters
- Export/Share: Session export or deep-linking
- Custom Prompt Input (Coming Soon)
- Visual fallback indicator (e.g. "Closest match used")
- Admin/CMS UI for content editing

---

## 👨‍💻 Development Notes

- Entire app runs client-side (HTML + JS)
- Easily extendable by adding new topics or filter dimensions
- Clean code with modular logic and maintainable styles

---

## 🛠️ To Contribute

Want to contribute stories or adapted interpretations?

- Fork the repo
- Add new entries to `content.js`
- Match formatting from existing combo keys
- Submit a pull request!

---

## 📄 License

MIT — use freely, adapt creatively, and give credit where due 💙

---

## 🔮 Final Thought

MINDFORGER is a mirror.  
It doesn’t tell you what’s true — it shows you how truth bends.
