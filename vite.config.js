import { defineConfig } from 'vite';
import { resolve } from 'path';

const pages = {
  main: 'index.html',
  onzeBoten: 'onze-boten/index.html',
  commodore: 'onze-boten/commodore555tender/index.html',
  qwest: 'onze-boten/qwests580/index.html',
  coastliner: 'onze-boten/coastliner620/index.html',
  corsiva: 'onze-boten/corsiva570/index.html',
  rinovatio: 'onze-boten/rinovatio570/index.html',
  aqua630: 'onze-boten/aqua630tender/index.html',
  silver: 'onze-boten/silver655tender/index.html',
  aquat700: 'onze-boten/aquat700tender/index.html',
  dock: 'onze-boten/dock650steel/index.html',
  solara: 'onze-boten/solara450/index.html',
  ombouw: 'ombouw/index.html',
  technologie: 'technologie/index.html',
  nieuws: 'nieuws/index.html',
  contact: 'contact/index.html',
  solutionslab: 'solutionslab/index.html',
};

export default defineConfig({
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        Object.entries(pages).map(([k, v]) => [k, resolve(__dirname, v)])
      ),
    },
  },
  server: {
    port: 5180,
    strictPort: true,
    host: true,
  },
  preview: {
    port: Number(process.env.PORT) || 4173,
    host: true,
    allowedHosts: true,
  },
});
