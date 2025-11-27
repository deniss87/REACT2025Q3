# 📘 Pokémon Dashboard

## React Application

A full-featured React SPA developed in iterative stages as part of a multi-week learning program.  
The project evolved from a basic search interface into a production-ready application with **global state management**, **TanStack Query caching**, **theming**, CSV export, pagination, and detailed Pokémon views.

---

## 🚀 Final Functionality

The application includes:

🔍 Search Pokémon by name  
📄 Grid of Pokémon cards (name, image, ID)  
📑 Pagination with URL-sync  
🔎 Master–detail view (detailed Pokémon page)  
☑️ Selectable Pokémon (checkboxes)  
📥 Download selected Pokémon as `.csv`  
❌ Unselect all  
🎨 Light / Dark theme toggle  
🔄 Force refresh using TanStack Query  
⚡ Client-side caching & refetching  
🧭 React Router navigation  
🧪 Unit tests coverage with Vitest + RTL

---

## 🧩 Technologies Used

### **Frontend**

⚛️ React 19 (function components + hooks)  
🧭 React Router 6  
🇹 TypeScript  
🎨 Tailwind CSS 4  
📦 Zustand — global store (selected Pokémon)  
🌐 TanStack Query — caching, fetching, refetching  
🧪 Vitest + React Testing Library + JSDOM

### **API**

🐱‍👤 Pokémon REST API

### **Tooling**

🚦 ESLint + Prettier  
🐶 Husky (pre-commit hooks)

---

## 👨‍🏫 Mentor Review

The project was evaluated by an experienced mentor throughout development.  
Mentor feedback was provided during each stage and included code-quality, architecture, and workflow recommendations.

---

## 🛠️ Development Stages (Modules)

<details>
  <summary>
    <b>1️⃣ Week 1 — Search, Pagination, Error Boundary</b>
  </summary>
  <br>

**✨ Initial features:**

- Project setup
- Pokémon search functionality
- API requests
- Pagination
- Error handling
- Rendering results

**🔗 PR:** [_link_](https://github.com/deniss87/REACT2025Q3/pull/1)

</details>

<details>
  <summary>
    <b>2️⃣ Week 2 — Unit Testing</b>
  </summary>
  <br>

**✅ Coverage included:**

- search behavior
- list rendering
- error states
- localStorage interactions
- mocked API requests
- user interactions

Thresholds:

- **80% statements**
- **50% branches, functions, lines**

**🔗 PR:** [_link_](https://github.com/deniss87/REACT2025Q3/pull/2)

</details>

<details>
  <summary>
    <b>3️⃣ Week 3 — Routing & Hooks</b>
  </summary><br>
  <br>

The entire app was rewritten to functional components + hooks.

💪 Added:

- React Router
- Master–detail layout
- Pagination with query parameters
- Detailed Pokémon page
- Custom hooks (e.g., `useLocalStorage`)
- About page
- 404 Not Found page

**🔗 PR:** [_link_](https://github.com/deniss87/REACT2025Q3/pull/3)

</details>

<details>
  <summary>
    <b>4️⃣ Week 4 — Zustand + Theming</b>
  </summary>
  <br>

✔️ Zustand global store

- selecting Pokémon
- persisting selection between pages
- unselecting items
- “Unselect all” button

✔️ Bottom flyout panel  
Displays when items are selected and contains:

- count
- “Unselect all”
- “Download CSV”

✔️ Theme context

- light/dark themes

**🔗 PR:** [_link_](https://github.com/deniss87/REACT2025Q3/pull/4)

</details>

<details>
  <summary>
    <b>5️⃣ Week 5 — TanStack Query Integration</b>
  </summary>
  <br>

**🧳 All API logic migrated to Query:**

- transparent caching
- refetching
- loading/error states
- per-page caching
- detail caching
- force refresh button

**🔗 PR:** [_link_](https://github.com/deniss87/REACT2025Q3/pull/5)

</details>

## 🚀 Project Setup & Running

#### 1. **Clone the repository**

```bash
git clone https://github.com/deniss87/REACT2025Q3.git
cd rss-ecomm-task
git checkout pokemon-react
```

#### 3. **Install dependencies**

```bash
npm install
```

#### 4. **Run project**

```bash
npm start
```
