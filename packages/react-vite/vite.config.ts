import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import appdevDesignMode from '@xagi/vite-plugin-design-mode';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), appdevDesignMode()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
});
