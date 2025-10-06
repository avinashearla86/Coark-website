import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],

    base: "./", // ensures relative asset paths

    build: {
      rollupOptions: {
        input: resolve(__dirname, "index.html"),
      },
      assetsDir: "assets",
    },

    server: {
      port: 5173,
      open: true,
    },

    publicDir: "public", // ✅ ensures favicon.ico gets copied
  };
});
