/* ─────────────────────────────────────────
   Luas Creative Solutions — script.js
   Shared nav + footer injection + video lightbox
   ───────────────────────────────────────── */

(function () {

  /* ── NAV ── */
  const navHTML = `
<a href="index.html" class="nav-logo">
  <img src="assets/Logo.png" alt="Luas" onerror="this.style.display='none'">
  LUAS<span>.</span>
</a>
<div class="nav-right">
  <ul class="nav-links" id="navLinks">
    <li><a href="portfolio.html" data-page="portfolio">Portfolio</a></li>
    <li><a href="diensten.html" data-page="diensten">Diensten</a></li>
    <li><a href="over-saul.html" data-page="over-saul">Over Saul</a></li>
    <li><a href="contact.html" data-page="contact">Contact</a></li>
  </ul>
  <a href="https://www.instagram.com/luascreativesolutions" target="_blank" rel="noopener" class="nav-ig" aria-label="Instagram">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  </a>
  <button class="nav-theme" id="themeToggle" aria-label="Thema wisselen">
    <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
    <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  </button>
  <button class="nav-toggle" id="navToggle" aria-label="Menu openen">
    <span></span><span></span><span></span>
  </button>
</div>`;

  const footerHTML = `
<p>© 2026 Luas Creative Solutions — Saul Walet</p>
<p>
  <a href="mailto:info@csluas.com">info@csluas.com</a>
  &nbsp;·&nbsp;
  <a href="tel:+31620596561">06-20596561</a>
</p>`;

  /* Inject nav */
  const navEl = document.getElementById('nav');
  if (navEl) navEl.innerHTML = navHTML;

  /* Inject footer */
  const footerEl = document.getElementById('footer');
  if (footerEl) footerEl.innerHTML = footerHTML;

  /* Set active link based on filename */
  const path = window.location.pathname;
  const file = path.split('/').pop().replace('.html', '') || 'index';
  document.querySelectorAll('.nav-links a[data-page]').forEach(function (a) {
    if (a.dataset.page === file) a.classList.add('active');
  });

  /* Hamburger toggle */
  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });
    /* Close on link click */
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.classList.remove('open');
        links.classList.remove('open');
      });
    });
  }

  /* ── THEME TOGGLE ── */
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('luas-theme', next);
    });
  }

  /* ── VIDEO LIGHTBOX ── */
  document.addEventListener('click', function (e) {
    const card = e.target.closest('[data-video-id]');
    if (!card) return;

    const id = card.dataset.videoId;
    const overlay = document.createElement('div');
    overlay.className = 'video-iframe-wrap';
    overlay.innerHTML = `
      <div class="video-iframe-inner">
        <button class="video-close" id="videoClose">&#x2715; Sluiten</button>
        <iframe
          src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>`;
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    function close() {
      overlay.remove();
      document.body.style.overflow = '';
    }

    document.getElementById('videoClose').addEventListener('click', close);
    overlay.addEventListener('click', function (ev) {
      if (ev.target === overlay) close();
    });
    document.addEventListener('keydown', function esc(ev) {
      if (ev.key === 'Escape') { close(); document.removeEventListener('keydown', esc); }
    });
  });

})();
