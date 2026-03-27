/* ─────────────────────────────────────────
   Luas Creative Solutions — script.js
   Shared nav + footer injection + video lightbox
   ───────────────────────────────────────── */

(function () {

  /* ── NAV ── */
  const navHTML = `
<a href="index.html" class="nav-logo">
  <img src="assets/logo.png" alt="Luas" onerror="this.style.display='none'">
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
