/**
 * Build a URL for files in `public/` so they work with any Vite `base`
 * (e.g. GitHub Pages at /repo-name/).
 *
 * @param {string} path - Path under public, e.g. `photos/ramya-hero.png` (no leading slash)
 * @returns {string}
 */
export function publicUrl(path) {
  const base = import.meta.env.BASE_URL || '/'
  const trimmed = path.replace(/^\/+/, '')
  return `${base}${trimmed}`.replace(/\/{2,}/g, '/')
}
