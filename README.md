# FE Developer Skill Test — Abenson

A lightweight front-end app that displays and filters mattress products by **Types**, **Sizes**, and **Firmness** using **vanilla HTML/CSS/JS**. Data is loaded asynchronously from a local `products.json` (simulating a real API), and items are rendered into a grid with skeleton loading.

---

## 🚀 Quick Start

1) **Clone the repo**
    
    - ```bash 
        git clone git@github.com:Kertsu/FE-Developer-Skill-Test-Abenson.git
        ```
    - ```bash
        cd FE-DEVELOPER-SKILL-TEST-ABENSON
      ```
2) **Open the app**

   - **Option A (direct):** open `src/index.html` in your browser.
   - **Option B (recommended, Live Server):**
     - In VS Code, install the “Live Server” extension by Ritwick Dey.
     - Right-click `src/index.html` → **Open with Live Server**.
     - Your browser should open at something like `http://127.0.0.1:5500/`.

> The app is completely static—no build step required.

---

## 📁 Project Structure

    FE-DEVELOPER-SKILL-TEST-ABENSON/
    ├─ public/
    │  ├─ firmness/
    │  │  ├─ firm.png
    │  │  ├─ medium-firm.png
    │  │  ├─ medium-plush.png
    │  │  └─ plush.png
    │  ├─ sizes/
    │  │  ├─ double-full.png
    │  │  ├─ king-size.png
    │  │  ├─ queen-size.png
    │  │  ├─ single-bed.png
    │  │  └─ twin-bed.png
    │  └─ types/
    │     ├─ foam-mattress.png
    │     ├─ foldable-bed.png
    │     ├─ latex-foam.png
    │     ├─ memory-foam.png
    │     ├─ spring-mattress.png
    │     └─ trundle-bed.png
    │
    ├─ src/
    │  ├─ index.html      # App shell + containers for the product grid
    │  ├─ index.js        # Tab logic, async data loading, rendering, (optional) skeletons
    │  ├─ products.json   # Product data source (single flat array with `category`)
    │  └─ style.css       # Styling (layout, product card, skeleton, tabs)
    │
    └─ README.md

---

## 🧩 How It Works

- **Tabs & Filtering**
  - The navigation tabs (`Types`, `Sizes`, `Firmness`) are wired up in `src/index.js` via a `TabSelector` class.
  - Clicking a tab (or pressing **Enter/Space** when focused) updates the active category and re-renders the grid.

- **Data Loading**
  - `src/products.json` is fetched asynchronously on load.
  - Items are filtered by `category` (`"types" | "sizes" | "firmness"`) and rendered into a `<section class="product-grid">`.
  - Each item uses the schema:
    
        {
          "category": "types" | "sizes" | "firmness",
          "title": "String",
          "description": "String",
          "tags": ["String", ...],
          "image": "../public/<folder>/<file>.png"
        }

- **Images**
  - Images live under `public/<category>/...`.
  - Paths in `products.json` are relative to `src/index.html` (e.g., `../public/types/memory-foam.png`).

---

## ✍️ Adding / Editing Products

1) Add a new object to `src/products.json` with the required fields (`category`, `title`, `description`, `tags`, `image`).
2) Place the corresponding image in the correct `public/<category>/` folder.
3) No restart needed—just refresh the page.

Example item:

    {
      "category": "sizes",
      "title": "Queen Size",
      "description": "Most popular size for couples.",
      "tags": ["60 in x 80 in", "152 cm x 203 cm"],
      "image": "../public/sizes/queen-size.png"
    }

---

## 🧪 What This Tests

- Semantic HTML and responsive layout
- Vanilla JS DOM manipulation and event handling
- Asynchronous data loading + conditional rendering
- Simple state management (active tab/category)
- Optional UX enhancement (skeleton loaders)

---

## 🔧 Troubleshooting

- **Images not showing:** ensure the path in `products.json` points to the correct file in `/public/...`, and that you’re serving `src/index.html` from the `src` folder (Live Server handles this automatically).
- **CORS / fetch errors when opening via file://**: use Live Server (or any static server) instead of double-clicking the HTML file if your browser blocks `fetch` from local files.


---

## 👤 Author

- Kurtd Daniel Bigtas
- Email: kurtddbigtas@gmail.com
- LinkedIn: https://www.linkedin.com/in/kurtd-daniel-bigtas
- Portfolio: https://v2-kurtddanielbigtas.vercel.app
