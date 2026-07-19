import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // OneDrive doesn't emit reliable filesystem events, so native watching
      // misses edits (stale HMR). Poll instead so changes actually reach the
      // browser live. Still ignore build output + OneDrive-locked office files.
      usePolling: true,
      interval: 300,
      ignored: ['**/dist/**', '**/*.pptx', '**/*.pdf'],
    },
  },
})
