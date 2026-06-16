// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kannohi1.github.io',
  base: '/hachinohe-trip-2026',
  trailingSlash: 'ignore',
  devToolbar: {
    enabled: false,
  },
  vite: {
    optimizeDeps: {
      disabled: true,
      exclude: ['aria-query', 'axobject-query', 'astro/runtime/client/dev-toolbar/entrypoint.js'],
    },
  },
});
