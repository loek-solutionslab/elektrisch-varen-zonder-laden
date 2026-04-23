import { SITE, BOATS } from '../lib/constants.js';

const FRAMED_TAG = '';

export function renderAnnouncement() {
  return `
<div class="bg-black text-white text-[11px] md:text-xs font-medium tracking-wider uppercase">
  <a href="/solutionslab/" class="flex items-center justify-center gap-2 py-2.5 px-4 text-center hover:bg-[#FFD500] hover:text-black transition-colors" style="font-family:'Bricolage Grotesque',sans-serif;">
    <span class="inline-block w-2 h-2 rounded-full bg-[#FFD500]"></span>
    <span>This is a demo site built by <span style="color:#FFD500">solutions lab</span></span>
    <span class="opacity-80 hidden sm:inline">—</span>
    <span class="hidden sm:inline">see the full analysis</span>
    <span class="ml-1">→</span>
  </a>
</div>`;
}

export function renderHeader(active = '') {
  const navItems = [
    { href: '/', label: 'Home', match: 'home' },
    { href: '/onze-boten/', label: 'Onze sloepen', match: 'boten' },
    { href: '/technologie/', label: 'Technologie', match: 'tech' },
    { href: '/nieuws/', label: 'Nieuws', match: 'nieuws' },
    { href: '/contact/', label: 'Contact', match: 'contact' },
  ];
  return `
<header class="sticky top-0 z-40 backdrop-blur-md bg-paper/85 border-b hairline">
  <div class="max-w-[1500px] mx-auto px-5 md:px-10 flex items-center justify-between h-16 md:h-20">
    <a href="/" class="flex items-center gap-3 group">
      <span class="w-9 h-9 rounded-full bg-ink text-sun flex items-center justify-center">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8">
          <circle cx="12" cy="12" r="4" fill="currentColor"/>
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke-linecap="round"/>
        </svg>
      </span>
      <div class="leading-none">
        <div class="display text-[17px] md:text-[19px] tracking-tight font-medium">Elektrisch Varen<span class="display-italic"> zonder laden</span></div>
        <div class="text-[10px] tracking-[0.2em] uppercase text-ink/50 mt-1">by ${SITE.brandParent}</div>
      </div>
    </a>
    <nav class="hidden lg:flex items-center gap-8">
      ${navItems.map(n => `<a href="${n.href}" class="text-sm tracking-tight ${active === n.match ? 'text-ink font-medium' : 'text-ink/70 hover:text-ink'}">${n.label}</a>`).join('')}
    </nav>
    <div class="flex items-center gap-3">
      <a href="${SITE.phoneLink}" class="hidden md:inline-flex items-center gap-2 text-sm text-ink/70 hover:text-ink">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        ${SITE.phone}
      </a>
      <a href="/contact/#proefvaart" class="btn-primary hidden md:inline-flex text-[11px] !px-5 !py-3">Plan proefvaart</a>
      <button id="menu-btn" class="lg:hidden p-2 -mr-2" aria-label="Menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="3" y1="8" x2="21" y2="8"/><line x1="3" y1="16" x2="21" y2="16"/></svg>
      </button>
    </div>
  </div>
  <div id="mobile-menu" class="hidden lg:hidden border-t hairline bg-paper">
    <nav class="px-5 py-6 flex flex-col gap-1">
      ${navItems.map(n => `<a href="${n.href}" class="py-2.5 text-lg display tracking-tight">${n.label}</a>`).join('')}
      <a href="/contact/#proefvaart" class="btn-primary mt-4 w-fit">Plan proefvaart</a>
    </nav>
  </div>
</header>`;
}

export function renderFooter() {
  const boatLinks = BOATS.slice(0, 6).map(b => `<a href="${b.href}" class="block text-ink/70 hover:text-sun py-1 text-sm">${b.name}</a>`).join('');
  const moreBoats = BOATS.slice(6).map(b => `<a href="${b.href}" class="block text-ink/70 hover:text-sun py-1 text-sm">${b.name}</a>`).join('');
  return `
<footer class="bg-ink text-paper mt-24">
  <div class="max-w-[1500px] mx-auto px-5 md:px-10 pt-20 pb-10">

    <div class="grid md:grid-cols-12 gap-10 pb-16 border-b border-paper/15">
      <div class="md:col-span-5">
        <div class="eyebrow text-paper/50 mb-5">— Klaar om ervaren?</div>
        <h2 class="display text-big">Plan uw <span class="display-italic text-sun">proefvaart</span></h2>
        <p class="mt-5 text-paper/70 max-w-md">Ervaar zelf hoe het is om fluisterstil te varen op de zon. Vrijblijvend, 45 minuten, met een kop koffie voor of na.</p>
        <div class="mt-8 flex flex-wrap gap-3">
          <a href="/contact/#proefvaart" class="btn-sun">Boek nu je proefvaart</a>
          <a href="${SITE.phoneLink}" class="btn-ghost border-paper/30 text-paper hover:bg-paper hover:text-ink">Bel ${SITE.phone}</a>
        </div>
      </div>

      <div class="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <div class="eyebrow text-paper/40 mb-4">Sloepen</div>
          ${boatLinks}
        </div>
        <div>
          <div class="eyebrow text-paper/40 mb-4">Meer modellen</div>
          ${moreBoats}
        </div>
        <div>
          <div class="eyebrow text-paper/40 mb-4">Bedrijf</div>
          <a href="/technologie/" class="block text-paper/70 hover:text-sun py-1 text-sm">Technologie</a>
          <a href="/nieuws/" class="block text-paper/70 hover:text-sun py-1 text-sm">Nieuws</a>
          <a href="/contact/" class="block text-paper/70 hover:text-sun py-1 text-sm">Contact</a>
          <a href="/solutionslab/" class="block text-paper/40 hover:text-paper py-1 text-[11px] mt-4 tracking-wider uppercase">● site audit</a>
        </div>
      </div>
    </div>

    <div class="pt-10 grid md:grid-cols-3 gap-8 text-sm">
      <div>
        <div class="display italic text-xl mb-2">Bezoekadres</div>
        <div class="text-paper/70">${SITE.address}</div>
      </div>
      <div>
        <div class="display italic text-xl mb-2">Contact</div>
        <a href="mailto:${SITE.email}" class="block text-paper/70 hover:text-sun">${SITE.email}</a>
        <a href="${SITE.phoneLink}" class="block text-paper/70 hover:text-sun">${SITE.phone}</a>
      </div>
      <div>
        <div class="display italic text-xl mb-2">Solar powered by</div>
        <div class="text-paper/70">${SITE.brandParent}</div>
      </div>
    </div>

    <div class="mt-12 pt-8 border-t border-paper/10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-paper/40">
      <div>© 2026 ${SITE.brandParent} — Algemene voorwaarden · Privacy · Disclaimer</div>
      <div class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-sun"></span> 100% uitstootvrij · Made in Hoogkarspel</div>
    </div>
  </div>
</footer>
${FRAMED_TAG}`;
}

export function initMobileMenu() {
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => menu.classList.toggle('hidden'));
  }
}
