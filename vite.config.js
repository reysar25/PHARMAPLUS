import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Allows external access
    port: 5173,       // Fixed port
    strictPort: true,  // Don't try other ports
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173      // Match server port
    }
  }
})