import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "date-fns/locale": "date-fns/locale/index.js",
    },
  },
  build: {
    rollupOptions: {
      external: ["date-fns/locale"],
    },
  },
});
