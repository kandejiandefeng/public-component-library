import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Markdown from 'vite-plugin-md';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr: true
  },
  resolve: {
    alias: {
      "packages": path.resolve(__dirname, 'packages')
    }
  },
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    Markdown()
  ],
})
