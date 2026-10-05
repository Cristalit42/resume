import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

const page = (path: string) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  plugins: [react()],
  base: '/resume/', // ВАЖНО: имя репозитория на GitHub Pages
  build: {
    rollupOptions: {
      // Многостраничная сборка: хаб + два резюме
      input: {
        main: page('./index.html'),
        react: page('./react/index.html'),
        wp: page('./wp/index.html'),
      },
    },
  },
})
