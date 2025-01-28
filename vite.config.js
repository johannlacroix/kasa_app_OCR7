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
          @use "@/styles/variables.scss" as vars;
          @use "@/styles/mixins.scss" as mixins;
        `,
      },
    },
  },
});
