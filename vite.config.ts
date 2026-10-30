import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { prerenderPlugin } from './vite-prerender-plugin';
import { hreflangPlugin } from './vite-hreflang-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), prerenderPlugin(), hreflangPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
