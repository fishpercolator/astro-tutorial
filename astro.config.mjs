// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://cerulean-sfogliatella-b90182.netlify.app/",
  integrations: [preact()]
});