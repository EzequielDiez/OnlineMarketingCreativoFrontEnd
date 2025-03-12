import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // O '/' si prefieres rutas absolutas
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    },
    copyPublicDir: true,
    // Asegurarse de que los assets se manejen correctamente
    assetsDir: 'assets',
    // Generar un manifest.json
    manifest: true,
  },
  assetsInclude: ['**/*.xml', '**/*.txt', '**/*.htaccess'],
  publicDir: 'public',
  server: {
    // Configuración para desarrollo
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
})
