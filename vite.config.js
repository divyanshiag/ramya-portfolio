import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Must match GitHub Pages project site path (https://<user>.github.io/<repo>/).
// If you deploy to a root domain, set to '/'. Image paths use import.meta.env.BASE_URL via publicUrl().
export default defineConfig({
  plugins: [react()],
  base: '/ramya-portfolio/',
})
