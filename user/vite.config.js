import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";
import { fileURLToPath, URL } from "node:url";
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "user",
      filename: "user.js",
      exposes: {
        "./User": "./src/App.vue",
        "./UserInfo": "./src/components/ShowUserInfo.vue",
      },
      shared: ["vue", "pinia"],
    }),
  ],
  server: {
    port: 3003,
  },
  build: {
    target: "ES2022",
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
