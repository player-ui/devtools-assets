import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    // https://github.com/uiwjs/react-codemirror/issues/216
    alias: {
      "@codemirror/state": path.resolve(
        __dirname,
        "../../node_modules/@codemirror/state/dist/index.cjs"
      ),
      "@codemirror/lang-json": path.resolve(
        __dirname,
        "../../node_modules/@codemirror/lang-json/dist/index.cjs"
      ),
    },
  },
  build: {
    rollupOptions: {
      external: ["@monaco-editor/react"],
    },
  },
});
