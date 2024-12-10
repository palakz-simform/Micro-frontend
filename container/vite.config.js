import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "container-app",
      remotes: {
        dashboard: "http://localhost:3001/dist/assets/dashboard.js",
        cart: "http://localhost:3002/dist/assets/cart.js",
        user: "http://localhost:3003/dist/assets/user.js",
      },
      shared: ["vue", "pinia"],
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "ES2022",
  },
});
