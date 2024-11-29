import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'user',
      filename: 'user.js',
      exposes: {
        './User': './src/App.vue',
      },
      shared: ['vue'],
    }),
  ],
  server: {
    port: 3003,
  },
  build: {
    target: "ES2022"
  }
});
