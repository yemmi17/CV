// @ts-check

import mdx from "@astrojs/mdx";
import sitemap, { ChangeFreqEnum } from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  trailingSlash: "never",
  markdown: {
    shikiConfig: {
      themes: { light: "min-light", dark: "night-owl" },
      wrap: true,
    },
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => {
        if (!SITE.showArchives && page.endsWith("/archives")) return false;

        return true;
      },
      serialize: (item) => {
        if (item.url.endsWith("/") && item.url !== SITE.website + "/") {
          item.url = item.url.slice(0, -1);
        }

        const url = item.url;
        item.changefreq = ChangeFreqEnum.MONTHLY;
        item.priority = 0.5;

        if (url === SITE.website || url === SITE.website + "/") {
          item.priority = 1.0;
          item.changefreq = ChangeFreqEnum.WEEKLY;
          item.lastmod = new Date().toISOString();
        } else if (url.endsWith("/about") || url.endsWith("/ru/about")) {
          item.priority = 0.8;
          item.changefreq = ChangeFreqEnum.MONTHLY;
        }

        return item;
      },
    }),
  ],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    plugins: [tailwindcss()],
  },
});
