import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@walletconnect/utils",
      formats: ["cjs", "es", "umd"],
      fileName: "index",
    },
    outDir: resolve(__dirname, "dist"),
  },
});
