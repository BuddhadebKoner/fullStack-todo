import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // This will make it accessible on the local network
    port: 3000,  // You can change the port if needed
  },
})
