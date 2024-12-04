import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'cart',
      filename: 'cart.js',
      exposes: {
        './Cart': './src/App.vue',
        './CartStore': './src/stores/cart.js',
        './CartIcon': './src/components/CartIcon.vue'
      },
      shared: ['vue', 'pinia']
    }),
  ],
  server: {
    port: 3002,
  },
  build: {
    target: 'esnext', // Or a target higher than 'es2020'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
