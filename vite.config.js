import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
              @import "./src/assets/main.scss";
            `,
      },
    },
  },
  // icons: {
  //   defaultSet: "mdi",
  //   aliases,
  //   sets: {
  //     mdi,
  //   },
  // },
});
