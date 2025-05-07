import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portfolio-builder/", // ← add this line
  plugins: [react()],
  server: {
    proxy: {
      "/v0": {
        target: "https://firebasestorage.googleapis.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/v0/, "/v0"),
      },
    },
  },
});
