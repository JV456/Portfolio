import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // This is crucial for GitHub Pages
  build: {
    outDir: 'dist'
  }
})
