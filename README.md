# MySQL Mastery Hub

A professional-grade, self-hosted educational platform for learning MySQL from zero to expert level. Built with pure HTML, CSS, and JavaScript — no frameworks, no dependencies.

---

## Overview

MySQL Mastery Hub is a structured, interactive curriculum covering the full MySQL learning path. Each module features practical code examples, visual diagrams, comparison tables, and hands-on normalization labs, prioritizing technical depth over surface-level syntax.

The platform is designed to be used offline, hosted locally, or deployed as a static site.

---

## Modules

| Module | Topics Covered |
|--------|----------------|
| **01 — Architecture** | Server internals, query life cycle, storage engines (InnoDB vs MyISAM) |
| **02 — Schema Design** | Data types, DDL commands, keys, constraints, foreign key actions |
| **03 — Normalization** | Anomalies lab, 1NF through BCNF with before/after table decompositions |
| **04 — Query Mastery** | SELECT, all JOIN types, GROUP BY, HAVING, subqueries and CTEs |
| **05 — Performance** | B-Tree indexing internals, EXPLAIN analysis, ACID and transaction isolation |

---

## Project Structure

```
mysql_edu/
├── index.html          # Landing page with curriculum overview
├── course.html         # Full course page with sidebar navigation
├── style.css           # All styles (landing + course)
├── script.js           # TOC active state, copy buttons, quiz logic
└── sections/           # Standalone HTML partials (used for reference)
    ├── arch.html
    ├── schema.html
    ├── norm.html
    ├── queries.html
    └── perf.html
```

---

## Features

- **Sidebar TOC** — fixed navigation with active section highlighting via IntersectionObserver
- **Code copy buttons** — every code block has a one-click copy button with SVG icon feedback
- **Syntax highlighting** — hand-crafted SQL keyword coloring using `<span>` classes (no third-party library)
- **Normalization labs** — side-by-side before/after table comparisons for 1NF, 2NF, 3NF, and BCNF
- **Architecture diagrams** — layered visual flow maps for query life cycle and B-Tree structure
- **Mobile responsive** — hamburger menu for sidebar on small screens, stacked layouts for all grids
- **Zero dependencies** — no npm, no build step, no framework. Open in a browser and it works.

---

## Getting Started

No server required. Open directly in any modern browser:

```bash
# Clone the repository
git clone https://github.com/your-username/mysql-mastery-hub.git

# Navigate to the project folder
cd mysql-mastery-hub/mysql_edu

# Open the landing page
start index.html         # Windows
open index.html          # macOS
xdg-open index.html      # Linux
```

Or serve with a local static server for full path resolution:

```bash
# Using Python
python -m http.server 8080

# Using Node.js (npx)
npx serve .

# Then open:
# http://localhost:8080
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5 (semantic) |
| Styling | Vanilla CSS (CSS custom properties, Grid, Flexbox) |
| Logic | Vanilla JavaScript (ES5 compatible) |
| Fonts | Google Fonts — Outfit, Inter, JetBrains Mono |

---

## Browser Support

Tested and functional in all modern browsers:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## Deployment

This is a fully static site. Deploy to any static host:

- **GitHub Pages** — push the `mysql_edu/` folder and enable Pages in settings
- **Netlify** — drag and drop the folder into the Netlify UI
- **Vercel** — `vercel deploy` from the project directory
- **Any web server** — copy files to your public HTML directory

---

## Content Philosophy

- Depth over breadth — every section explains the *why*, not just the *what*
- Visual first — diagrams and tables before text blocks
- Production-oriented — real-world examples using actual schema patterns
- No emojis in UI — SVG icons and semantic HTML used throughout

---

## License

Open source under the [MIT License](LICENSE).

---

## Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you would like to change.

When adding new sections, follow the established pattern:
- Use `.doc-section` as the wrapper with a unique `id`
- Add a `.section-badge` label
- Use `.code-editor` blocks with `.editor-header` for all SQL examples
- Add the new section to the TOC in `course.html`
