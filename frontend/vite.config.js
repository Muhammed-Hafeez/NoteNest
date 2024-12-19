import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "@": "/src", // Optional alias for src
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        notes: path.resolve(__dirname, "notes.html"),
        home: path.resolve(__dirname, "home.html"),
        login: path.resolve(__dirname, "login.html"),
      },
    },
  },
});
