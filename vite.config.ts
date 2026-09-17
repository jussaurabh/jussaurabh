import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/jussaurabh/', // Required for GitHub Pages deployment (repo name)
  plugins: [react(), tailwindcss()],
})
