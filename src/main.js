import './styles/main.css';
import { renderAnnouncement, renderHeader, renderFooter, initMobileMenu } from './components/chrome.js';

function mount(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

export function mountChrome(active = '') {
  mount('announcement', renderAnnouncement());
  mount('site-header', renderHeader(active));
  mount('site-footer', renderFooter());
  initMobileMenu();
}

// Auto-mount based on data-page attribute
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page || '';
  mountChrome(page);
});
