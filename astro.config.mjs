import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Los alias de rutas (@, @components) se declaran en `paths` de tsconfig.json.
// Astro los resuelve de forma nativa: no hace falta vite.resolve.alias.
// https://astro.build/config
export default defineConfig({
  site: "https://luisworks.dev",
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
