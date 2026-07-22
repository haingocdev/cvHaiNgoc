import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';

// GitHub Pages project site: https://haingocdev.github.io/cvHaiNgoc/
const repoName = 'cvHaiNgoc';

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
