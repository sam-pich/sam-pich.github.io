import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/sam-pich.github.io/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})