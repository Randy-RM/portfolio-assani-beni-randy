import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      include: ["**/*.tsx", "**/*.ts"],
    }),
  ],
  site: process.env.HOME_LOCATION,
  output: "static",
  // Astro utilise "public/" par défaut, mais ce projet utilise "static/"
  publicDir: "./static",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
  },
});
