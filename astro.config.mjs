// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import mdx from '@astrojs/mdx';
import { SITE } from './src/constants/consts';
import astroIcon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: SITE.site,
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: [
        '0783-103-127-20-121.ngrok-free.app'
      ]
    }

  },

  integrations: [
    react(), 
    mdx(),
    astroIcon()
  ]
});