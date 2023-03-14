import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      components: path.resolve(__dirname, './src/components'),
      styles: path.resolve(__dirname, './src/styles'),
      utils: path.resolve(__dirname, './src/utils'),
      hooks: path.resolve(__dirname, './src/hooks'),
      services: path.resolve(__dirname, './src/services'),
      conf: path.resolve(__dirname, './src/conf'),
      assets: path.resolve(__dirname, './src/assets'),
    },
  },
});
