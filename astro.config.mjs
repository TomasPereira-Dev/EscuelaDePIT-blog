import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    react(), 
    sanity({
      projectId: '3k9ety47',
      dataset: 'production',
      useCdn: false,
      apiVersion: "2024-10-11",
      studioBasePath: "/studio",
      stega: {
        studioUrl: "/studio",
      },
      output: "static"
    })
  ]
});