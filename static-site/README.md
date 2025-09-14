# Static Site Deployment

This folder contains the standalone static version of the portfolio (pure HTML/CSS/JS) for deployment on Vercel without invoking the Next.js build system.

## Included
- index.html
- archive.html
- 404.html
- styles.css
- script.js
- favicon.svg
- resume.pdf (add/copy alongside these files)

## Deploy Steps (Vercel)
1. In the Vercel dashboard select this repository.
2. Set the "Root Directory" to `static-site` in project settings (or during first import under Advanced Settings).
3. Framework Preset: `Other`.
4. Leave Build Command empty.
5. Leave Output Directory empty.
6. Deploy.

Any push that changes files here will trigger a new deployment.
