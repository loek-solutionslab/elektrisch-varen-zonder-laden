import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const DIST = new URL('../dist', import.meta.url).pathname;
const TAG = '<script src="https://app.framed.dev/tm.js" data-framed-project="ad5476a4-8b84-4203-9cb8-83e627ddc4b6" async></script>';

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const s = statSync(p);
    if (s.isDirectory()) walk(p);
    else if (p.endsWith('.html')) inject(p);
  }
}

function inject(path) {
  let html = readFileSync(path, 'utf8');
  if (html.includes('app.framed.dev/tm.js')) return;
  html = html.replace('</head>', `  ${TAG}\n</head>`);
  writeFileSync(path, html);
  console.log('  framed:', path.replace(DIST, ''));
}

walk(DIST);
console.log('done.');
