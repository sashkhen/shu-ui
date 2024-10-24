/// <reference types="vitest" />
// import glob from "glob";
// import { fileURLToPath } from "node:url";
// import { extname, relative } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

import { name, peerDependencies } from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts", // Specifies the entry point for building the library.
      name: name, // Sets the name of the generated library.
      fileName: (format) => `index.${format}.js`, // Generates the output file name based on the format.
      formats: ["cjs", "es"], // Specifies the output formats (CommonJS and ES modules).
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)], // Defines external dependencies for Rollup bundling.
      // todo: setup code splitting
      // input: Object.fromEntries(
      //   glob
      //     .sync("src/**/*.{ts,tsx}", {
      //       ignore: ["src/**/*.d.ts", "src/**/__docs__/*", "src/**/__test__/*"],
      //     })
      //     .map((file) => [
      //       // The name of the entry point
      //       // src/nested/foo.ts becomes nested/foo
      //       relative("src", file.slice(0, file.length - extname(file).length)),
      //       // The absolute path to the entry file
      //       // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
      //       fileURLToPath(new URL(file, import.meta.url)),
      //     ]),
      // ),
      // output: {
      //   assetFileNames: "assets/[name][extname]",
      //   entryFileNames: "[name].js",
      // },
    },
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
  },
  plugins: [dts(), libInjectCss()], // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
      },
    },
  },
});
