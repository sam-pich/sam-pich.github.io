import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/sam-pich.github.io/', // Set the base path for GitHub Pages
  build: {
    outDir: 'dist', // Output directory for the build
    emptyOutDir: true, // Clear the output directory before building
  },
  root: './', // Add this line to specify the root directory
  resolve: {
    alias: {
      '@': '/src' // Add this line to alias the 'src' directory
    }
  }
})