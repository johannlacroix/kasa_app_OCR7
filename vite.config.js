import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // Permet d'utiliser "@" pour référencer /src
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/styles/variables.scss";
          @import "@/styles/mixins.scss";
          @import "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap";
        `,
      },
    },
  },
});
