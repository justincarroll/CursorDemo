import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // Use root for local dev; /CursorDemo/ for GitHub Pages production build
  base: process.env.NODE_ENV === 'production' ? '/CursorDemo/' : '/',
  plugins: [vue()],
})
