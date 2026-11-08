import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages: https://heetae2007.github.io/heetae/
export default defineConfig({
  base: "/heetae/",
  plugins: [react()],
});
