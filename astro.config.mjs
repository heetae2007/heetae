import { defineConfig } from "astro/config";

// GitHub Pages: https://heetae2007.github.io/heetae/
export default defineConfig({
  site: "https://heetae2007.github.io",
  base: "/heetae",
  build: {
    // projects.html처럼 기존 주소를 그대로 유지
    format: "file",
  },
});
