/* ==========================================================================
   CSV Editor Documentation — Shared Core Script
   Theme toggle, Trilingual switcher (VI/EN/JA), Mobile nav, Lightbox, Copy code
   ========================================================================== */

(function () {
  'use strict';

  const STORAGE_THEME = 'theme';
  const STORAGE_LANG = 'selectedLanguage';
  const SUPPORTED_LANGS = ['vi', 'en', 'ja'];

  const ICONS = {
    sun: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
    moon: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>'
  };

  const COPY_LABELS = {
    vi: { copy: 'Sao chép', copied: 'Đã chép' },
    en: { copy: 'Copy', copied: 'Copied' },
    ja: { copy: 'コピー', copied: 'コピー完了' }
  };

  /* ------------------------------------------------------------------
     Theme Management
     ------------------------------------------------------------------ */
  function getInitialTheme() {
    const saved = localStorage.getItem(STORAGE_THEME);
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_THEME, theme);
    document.querySelectorAll('.theme-toggle').forEach((btn) => {
      btn.innerHTML = theme === 'dark' ? ICONS.sun : ICONS.moon;
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }

  /* ------------------------------------------------------------------
     Language Management (VI / EN / JA)
     ------------------------------------------------------------------ */
  function getInitialLang() {
    const saved = localStorage.getItem(STORAGE_LANG);
    return SUPPORTED_LANGS.includes(saved) ? saved : 'vi';
  }

  function applyLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) lang = 'vi';
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    localStorage.setItem(STORAGE_LANG, lang);

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    // Update copy buttons text
    const labels = COPY_LABELS[lang] || COPY_LABELS.vi;
    document.querySelectorAll('.copy-code-btn').forEach((btn) => {
      if (!btn.dataset.copied) btn.textContent = labels.copy;
    });

    document.dispatchEvent(new CustomEvent('csveditor:langchange', { detail: { lang } }));
  }

  /* ------------------------------------------------------------------
     Copy Code Buttons
     ------------------------------------------------------------------ */
  function initCopyButtons() {
    const lang = getInitialLang();
    const labels = COPY_LABELS[lang] || COPY_LABELS.vi;

    document.querySelectorAll('pre').forEach((pre) => {
      if (pre.querySelector('.copy-code-btn')) return;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'copy-code-btn';
      btn.textContent = labels.copy;
      btn.addEventListener('click', () => {
        const code = pre.querySelector('code');
        const text = code ? code.textContent : pre.textContent;
        const currentLang = document.documentElement.getAttribute('data-lang') || 'vi';
        const curLabels = COPY_LABELS[currentLang] || COPY_LABELS.vi;

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text.trim()).then(() => {
            btn.dataset.copied = '1';
            btn.textContent = curLabels.copied;
            setTimeout(() => {
              delete btn.dataset.copied;
              btn.textContent = curLabels.copy;
            }, 1600);
          });
        }
      });
      pre.appendChild(btn);
    });
  }

  /* ------------------------------------------------------------------
     Mobile Navigation Drawer
     ------------------------------------------------------------------ */
  function initMobileNav() {
    const toggleBtn = document.querySelector('.mobile-menu-btn');
    const drawer = document.querySelector('.mobile-nav');
    if (!toggleBtn || !drawer) return;

    const close = () => {
      drawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    };

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = drawer.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', String(isOpen));
    });

    drawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', close);
    });

    document.addEventListener('click', (e) => {
      if (drawer.classList.contains('open') && !drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
        close();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
  }

  /* ------------------------------------------------------------------
     Screenshot Lightbox
     ------------------------------------------------------------------ */
  function initLightbox() {
    const triggers = Array.from(document.querySelectorAll('[data-lightbox]'));
    if (triggers.length === 0) return;

    const modal = document.createElement('div');
    modal.className = 'lightbox-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.innerHTML = `
      <div class="lightbox-toolbar">
        <button type="button" class="lightbox-btn" data-action="zoom-out" aria-label="Zoom out">&minus;</button>
        <button type="button" class="lightbox-btn" data-action="zoom-reset" aria-label="Reset zoom">1:1</button>
        <button type="button" class="lightbox-btn" data-action="zoom-in" aria-label="Zoom in">+</button>
        <button type="button" class="lightbox-btn" data-action="prev" aria-label="Previous">&#8249;</button>
        <button type="button" class="lightbox-btn" data-action="next" aria-label="Next">&#8250;</button>
        <button type="button" class="lightbox-btn" data-action="close" aria-label="Close">&times;</button>
      </div>
      <div class="lightbox-stage"><img src="" alt=""></div>
      <div class="lightbox-caption"></div>
    `;
    document.body.appendChild(modal);

    const imgEl = modal.querySelector('.lightbox-stage img');
    const captionEl = modal.querySelector('.lightbox-caption');
    let currentIndex = 0;
    let scale = 1;

    function render(index) {
      currentIndex = (index + triggers.length) % triggers.length;
      const el = triggers[currentIndex];
      const src = el.tagName === 'IMG' ? el.src : el.getAttribute('data-lightbox');
      const alt = el.tagName === 'IMG' ? el.alt : (el.getAttribute('data-caption') || '');
      imgEl.src = src;
      imgEl.alt = alt;
      captionEl.textContent = alt;
      scale = 1;
      imgEl.style.transform = 'scale(1)';
    }

    function open(index) {
      render(index);
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }

    triggers.forEach((el, idx) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        open(idx);
      });
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) close();
    });

    modal.querySelector('[data-action="close"]').addEventListener('click', close);
    modal.querySelector('[data-action="prev"]').addEventListener('click', () => render(currentIndex - 1));
    modal.querySelector('[data-action="next"]').addEventListener('click', () => render(currentIndex + 1));
    modal.querySelector('[data-action="zoom-in"]').addEventListener('click', () => {
      scale = Math.min(3, scale + 0.35);
      imgEl.style.transform = `scale(${scale})`;
    });
    modal.querySelector('[data-action="zoom-out"]').addEventListener('click', () => {
      scale = Math.max(0.6, scale - 0.35);
      imgEl.style.transform = `scale(${scale})`;
    });
    modal.querySelector('[data-action="zoom-reset"]').addEventListener('click', () => {
      scale = 1;
      imgEl.style.transform = 'scale(1)';
    });

    document.addEventListener('keydown', (e) => {
      if (!modal.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') render(currentIndex - 1);
      else if (e.key === 'ArrowRight') render(currentIndex + 1);
    });
  }

  /* ------------------------------------------------------------------
     Bootstrap
     ------------------------------------------------------------------ */
  // Apply theme & language immediately to prevent flash
  applyTheme(getInitialTheme());
  applyLanguage(getInitialLang());

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(getInitialTheme());
    applyLanguage(getInitialLang());

    document.querySelectorAll('.theme-toggle').forEach((btn) => {
      btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });
    });

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        applyLanguage(btn.getAttribute('data-lang'));
      });
    });

    initMobileNav();
    initCopyButtons();
    initLightbox();
  });
})();
