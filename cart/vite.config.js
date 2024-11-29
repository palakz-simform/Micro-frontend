import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'cart',
      filename: 'cart.js',
      exposes: {
        './Cart': './src/App.vue',
      },
      shared: ['vue'],
    }),
  ],
  server: {
    port: 3002,
  },
  build: {
    target: "ES2022"
  }
});
