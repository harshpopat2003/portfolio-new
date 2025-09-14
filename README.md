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

## 🔧 Customization

| Task | Where | Notes |
|------|-------|-------|
| Add new project | `static-site/index.html` (projects section) | Mirror existing `.project-item` block |
| Adjust theme colors | `styles.css` root CSS variables | Maintain light + dark parity |
| Change resume | Replace `static-site/resume.pdf` | Keep filename stable for caching |
| Add analytics | Insert `<script>` before closing `</body>` | Keep async / defer |
| Improve SEO | Add meta tags / OpenGraph / favicon variants | Put inside `<head>` of `index.html` |
| Add blog | Introduce new section or leverage scaffold | Optional future enhancement |

---

## ⚙️ Performance & Accessibility

| Aspect | Approach |
|--------|----------|
| FCP / TTFB | Pure static hosting → near-instant |
| JS Weight | Only one small custom script + particles.js CDN |
| Fonts | Preconnected via Google; could self-host later |
| Accessibility | Semantic headings, focusable links, contrast-friendly palette |
| Progressive Enhancement | Effects (scramble, particles) do not block core content |

Potential upgrades: prefetch resume, add `<link rel="preload" as="image">` for hero assets (if added later), compress PDF.

---

## 🧪 Roadmap (Aspirational)

- [ ] Migrate to full Next.js + API routes (contact form backend)
- [ ] Add blog (MDX or CMS)
- [ ] Light/dark system preference auto-detect
- [ ] Replace particles.js with WebGL / Canvas custom renderer
- [ ] Add structured data (JSON-LD) for rich snippets
- [ ] Lighthouse automation in CI
- [ ] Add PWA manifest & service worker

---

## 🐛 Troubleshooting

| Problem | Likely Cause | Fix |
|---------|--------------|-----|
| Resume 404 | File not deployed / wrong root | Ensure `resume.pdf` in `static-site` & redeploy |
| Favicon not showing | Path mismatch | Use `<link rel="icon" href="/favicon.svg">` if at root deploy |
| 404 on GitHub Pages | Wrong Pages source | Reconfigure branch or folder in Settings |
| Light theme not persisting | LocalStorage blocked | Check browser privacy settings |
| Slow first paint | External fonts blocking | Add `rel="preconnect"` to Google font domains |

---

## 🤝 Contributions

Currently personal, but feel free to open an issue with suggestions or performance ideas. If/when the dynamic layer begins, a CONTRIBUTING guide will be added.

---

## 📄 License

All rights reserved. Content (text, experience descriptions, résumé) may not be reproduced without permission. Code snippets can be adapted with attribution.

---

## 🙋 FAQ

**Why a minimal approach?** Faster load, clearer code, easier iteration.

**Why no build tool?** Current feature set doesn’t require one.

**Can this be containerized?** Yes—serve `static-site/` via any static server.

---

## 🔗 Useful References

- Next.js Docs: https://nextjs.org/docs
- GitHub Pages Docs: https://docs.github.com/en/pages
- Vercel Deploy: https://vercel.com
- MDN HTML & CSS: https://developer.mozilla.org/

---

> Built with deliberate simplicity first, leaving architectural runway for future intelligent features.

