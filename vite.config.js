import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: process.env.BASE_URL || '/',
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
    },
  },
  server: {
    open: true,
  },
})
