import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Must match the GitHub Pages path: https://<user>.github.io/ramya-portfolio/
// so JS/CSS load when you open /ramya-portfolio/ locally or on Pages.
// For a custom domain at the site root, change this to '/' and redeploy.
export default defineConfig({
  plugins: [react()],
  base: '/ramya-portfolio/',
})
