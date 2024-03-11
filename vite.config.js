import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/sam-pich.github.io/', // Set the base path for GitHub Pages
  build: {
    outDir: 'dist', // Output directory for the build
    emptyOutDir: true, // Clear the output directory before building
    rollupOptions: {
      input: {
        main: '/index.html', // Use the root index.html as the entry point
      },
    },
  },
})