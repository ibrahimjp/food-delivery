import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true, // Listen on all network interfaces
    port: process.env.PORT || 5173, // Use Render's port or default
    strictPort: true,
  },
  preview: {
    port: process.env.PORT || 5173,
    strictPort: true,
  },
  build: {
    outDir: 'dist',
  }
})
