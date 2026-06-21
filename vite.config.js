import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so JS/CSS/images resolve on GitHub Pages (/repo/) and root domains alike.
// (A fixed '/repo-name/' base breaks if the site URL or deploy layout does not match.)
export default defineConfig({
  plugins: [react()],
  base: './',
})
