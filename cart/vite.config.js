import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "cart",
      filename: "cart.js",
      exposes: {
        "./Cart": "./src/components/Cart.vue",
        "./OrderSummary": "./src/components/OrderSummary.vue",
        "./CartIcon": "./src/components/CartIcon.vue",
      },
      shared: ["vue", "pinia"],
    }),
  ],
  server: {
    port: 3002,
  },
  build: {
    target: "esnext",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
