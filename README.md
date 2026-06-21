# Ramya portfolio

Single-page React (Vite + Tailwind v4) site for GitHub Pages at  
`https://<your-username>.github.io/ramya-portfolio/`.

---

## Blank white screen? (most common)

That almost always means GitHub Pages is serving the **source** `index.html` from the repo (with `/src/main.jsx`) instead of the **built** app from `dist/`.

**Check the live HTML:** View → Page Source. If you see `<script type="module" src="/src/main.jsx">`, Pages is **not** deploying the Vite build.

### Fix A — GitHub Actions (matches this repo’s workflow)

1. On GitHub: **Settings → Pages → Build and deployment**
2. Under **Source**, choose **GitHub Actions** (not “Deploy from a branch”).
3. Push to **`main`** (or merge a PR). Open **Actions** and wait for **Deploy GitHub Pages** to finish green.
4. Open **`https://<username>.github.io/ramya-portfolio/`** (trailing slash is fine).

If Source stays on **branch `main` / (root)`**, GitHub will publish your **raw** project files — there is no compiled JS, so the screen stays white.

### Fix B — `gh-pages` branch instead

1. Locally: `npm install` then `npm run deploy` (builds `dist` and pushes it to branch **`gh-pages`**).
2. **Settings → Pages → Source:** **Deploy from a branch** → branch **`gh-pages`**, folder **`/ (root)`**.
3. Turn **off** or ignore the Actions deploy if you only use this method, so one clear pipeline wins.

---

## Local dev

The app expects the repo URL path **`/ramya-portfolio/`** (see `vite.config.js` → `base`).

```bash
npm install
npm run dev
```

Use the URL Vite prints (it should include **`/ramya-portfolio/`**).  
Opening only `http://localhost:5173/` will load the wrong base and assets will break.

```bash
npm run build    # output in dist/
npm run preview  # optional local check of production build
```

---

## `base` and custom domains

- **Project site** (`…github.io/ramya-portfolio/`): keep `base: '/ramya-portfolio/'`.
- **Site at domain root** (custom domain, or a `username.github.io` user site): set `base: '/'` in `vite.config.js` and redeploy.

---

## Files that matter for deploy

| What | Role |
|------|------|
| `dist/` after `npm run build` | **This** is what must be published — compiled JS/CSS/assets. |
| `.github/workflows/deploy-github-pages.yml` | Builds and deploys **`dist`** when you use **GitHub Actions** as Pages source. |
| `npm run deploy` | Publishes **`dist`** to the **`gh-pages`** branch for branch-based Pages. |
