import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "dashboard",
      filename: "dashboard.js",
      exposes: {
        "./Dashboard": "./src/App.vue",
      },
      shared: ["vue"],
    }),
  ],
  server: {
    port: 3001,
  },
  build: {
    target: "ES2022",
  },
});
