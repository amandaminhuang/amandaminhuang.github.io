import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Don't watch build output or OneDrive-locked office files —
      // OneDrive holds locks on them and crashes the file watcher (EBUSY).
      ignored: ['**/dist/**', '**/*.pptx', '**/*.pdf'],
    },
  },
})
