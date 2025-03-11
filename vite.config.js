import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/OnlineMarketingCreativoFrontEnd/', // Reemplaza con el nombre de tu repositorio
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
  },
  assetsInclude: ['**/*.xml', '**/*.txt'],
  publicDir: 'public',
})
