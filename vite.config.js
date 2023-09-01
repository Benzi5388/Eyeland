import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()], // Add any Vite plugins you need
  base: '/',
  build: {
    // Add build-related configurations here
    chunkSizeWarningLimit: 1000, // Example: Adjust the chunk size warning limit
  },
  server: {
    // Add server-related configurations here
    host: '0.0.0.0',
    port: 5173,
  },
});

