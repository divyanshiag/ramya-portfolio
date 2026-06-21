# Ramya portfolio

Single-page React (Vite + Tailwind v4) site for GitHub Pages.

## Local dev

The app is built for the repo path **`/ramya-portfolio/`** (same as `https://<user>.github.io/ramya-portfolio/`).

```bash
npm install
npm run dev
```

Open the URL Vite prints — it should end with **`/ramya-portfolio/`**.  
If you open only `http://localhost:5173/`, assets will not load correctly.

## Build & deploy

```bash
npm run build
npm run deploy
```

`npm run deploy` runs `gh-pages` with the `dist` output. GitHub Pages should use the **`gh-pages`** branch (or your chosen source) with the site at the project URL above.

## Custom domain at the site root

If you later host this at the **root** of a domain (not under `/ramya-portfolio/`), change `base` in `vite.config.js` to `'/'` and redeploy.
