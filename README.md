## ✨ Overview

This project is a handcrafted portfolio site emphasizing clarity, performance, and maintainability. It showcases professional experience, selected projects, and a downloadable résumé while incorporating subtle interaction and visual polish (theming, particles, animated reveals) without heavy frameworks.

---

## 🔍 Key Features

| Area | Feature | Notes |
|------|---------|-------|
| Theming | Dark / Light toggle with `localStorage` persistence | Zero dependency toggle logic |
| Visual FX | Particle background + cursor-follow glow | Lightweight external script only |
| UX Polish | IntersectionObserver section fade/slide-in | Enhances perceived smoothness |
| Navigation | Scroll spy & smooth in‑page anchor navigation | Keeps user oriented |
| Typography | Responsive clamp-based scaling | Adapts fluidly to viewport sizes |
| Projects Display | Expand-on-hover contextual enrichment | Reduces initial noise |
| Performance | Minimal JS, no build-time requirement | Fast first paint / low JS cost |
| Resume Access | Direct PDF link (cache-friendly) | Optional download attribute compatible |
| 404 Handling | Custom `404.html` fallback | Friendly dead‑end recovery |
| Micro Delight | Text scramble intro effect | Degrades gracefully if disabled |


## 🧱 Tech Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| Markup & Layout | HTML5 + semantic structure | Accessibility & SEO foundation |
| Styling | Modern CSS (custom properties) | Theming & maintainability |
| Interactivity | Vanilla JavaScript | Lightweight runtime behavior |
| Visual Effects | particles.js (CDN) | Ambient motion background |
| Fonts | Inter, Space Grotesk (Google Fonts) | Professional aesthetic & legibility |
| Icons | Font Awesome (CDN) | Social & UI symbolism |
| Linting (optional) | ESLint config present | Future scalability |


## 📂 Directory Structure

```
portfolio-new/
├─ static-site/               # Site entry point for deployment
│  ├─ index.html
│  ├─ archive.html
│  ├─ 404.html
│  ├─ styles.css
│  ├─ script.js
│  ├─ favicon.svg
│  └─ resume.pdf
│
├─ src/app/                   # (Optional future extension scaffold)
├─ public/                    # (Public assets placeholder)
├─ package.json
├─ next.config.ts
├─ tsconfig.json
├─ eslint.config.mjs
└─ README.md
```

---

## 🚀 Deployment

**Vercel**
1. Import repository
2. Set Root Directory: `static-site`
3. Framework Preset: `Other`
4. Deploy (no build step required)

**GitHub Pages (single repository)**
1. Copy contents of `static-site/` into a `docs/` folder (or configure Pages to use that folder)
2. Settings → Pages → Source: `main` / `/docs`
3. Save & wait for build

**GitHub Pages (dedicated root domain)**
1. Create repo named `<username>.github.io`
2. Copy files from `static-site/`
3. Commit & push → site becomes live automatically

---

## 🛠 Local Development (Static)

Serve locally with any static server:

```powershell
cd static-site
python -m http.server 5500  # or: npx serve .
```

Then open: http://localhost:5500

Change detection is instant—just refresh.

Optional Next.js scaffolding exists for future extension; it does not affect current deployment.

---

## 🔗 Useful References

- Next.js Docs: https://nextjs.org/docs
- GitHub Pages Docs: https://docs.github.com/en/pages
- Vercel Deploy: https://vercel.com
- MDN HTML & CSS: https://developer.mozilla.org/

---

> Built with deliberate simplicity first, leaving architectural runway for future intelligent features.

