import { defineConfig } from "vite";
import createVuePlugin from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    createVuePlugin({
      template: {
        compilerOptions: {
          compatConfig: {
            MODE: 2,
          },
        },
      },
    }),
  ],
  resolve: {
    alias: {
      vue: "@vue/compat",
    },
  },
  server: {
    port: 8081,
  },
});
