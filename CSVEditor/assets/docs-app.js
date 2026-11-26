/* ==========================================================================
   CSV Editor Documentation — Interactive Docs Controller
   Collapsible sidebar, Right TOC with scroll-spy, Breadcrumb, Ctrl+K Search,
   Scroll progress bar, Mobile sidebar drawer
   ========================================================================== */

(function () {
  'use strict';

  const SEARCH_COPY = {
    vi: {
      placeholder: 'Tìm kiếm hướng dẫn, phím tắt, tính năng...',
      empty: 'Không tìm thấy kết quả phù hợp.',
      hint: 'Nhập từ khóa để tìm trong tài liệu (VD: SQL, Fill Handle, Encoding, Dark Mode)...'
    },
    en: {
      placeholder: 'Search guides, shortcuts, features...',
      empty: 'No matching documentation found.',
      hint: 'Type a keyword to search (e.g., SQL, Fill Handle, Encoding, Dark Mode)...'
    },
    ja: {
      placeholder: 'ガイド、ショートカット、機能を検索...',
      empty: '一致するドキュメントが見つかりませんでした。',
      hint: 'キーワードを入力して検索（例: SQL, オートフィル, エンコーディング, ダークモード）...'
    }
  };

  function getActiveLang() {
    return document.documentElement.getAttribute('data-lang') || 'vi';
  }

  function getVisibleText(container) {
    if (!container) return '';
    const lang = getActiveLang();
    const localized = container.querySelector(`.lang-inline[data-lang="${lang}"], .lang-block[data-lang="${lang}"]`);
    return (localized ? localized.textContent : container.textContent).trim();
  }

  /* ------------------------------------------------------------------
     Sidebar Accordion & Mobile Drawer
     ------------------------------------------------------------------ */
  function initSidebar() {
    document.querySelectorAll('.sidebar-group-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const group = btn.closest('.sidebar-group');
        const collapsed = group.classList.toggle('collapsed');
        btn.setAttribute('aria-expanded', String(!collapsed));
      });
    });

    const sidebar = document.querySelector('.docs-sidebar');
    const toggleBtn = document.querySelector('.sidebar-toggle-btn');
    const backdrop = document.querySelector('.sidebar-backdrop');
    if (!sidebar || !toggleBtn || !backdrop) return;

    const closeDrawer = () => {
      sidebar.classList.remove('open');
      backdrop.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    };

    toggleBtn.addEventListener('click', () => {
      const open = sidebar.classList.toggle('open');
      backdrop.classList.toggle('open', open);
      toggleBtn.setAttribute('aria-expanded', String(open));
    });

    backdrop.addEventListener('click', closeDrawer);
    sidebar.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeDrawer);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDrawer();
    });
  }

  /* ------------------------------------------------------------------
     Right Table of Contents & Active Section Scroll-Spy
     ------------------------------------------------------------------ */
  let sectionObserver = null;

  function buildRightTOC() {
    const tocList = document.getElementById('docs-toc-list');
    if (!tocList) return;

    const lang = getActiveLang();
    const sections = Array.from(document.querySelectorAll('.doc-section'));
    tocList.innerHTML = '';

    sections.forEach((sec) => {
      const h2 = sec.querySelector('h2');
      if (!h2) return;
      const title = getVisibleText(h2);
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `#${sec.id}`;
      a.textContent = title;
      a.dataset.targetId = sec.id;
      li.appendChild(a);
      tocList.appendChild(li);

      // Include h3 headings inside active language block if present
      const langBlock = sec.querySelector(`.lang-block[data-lang="${lang}"]`);
      if (langBlock) {
        langBlock.querySelectorAll('h3[id]').forEach((h3) => {
          const subLi = document.createElement('li');
          const subA = document.createElement('a');
          subA.href = `#${h3.id}`;
          subA.textContent = h3.textContent.trim();
          subA.className = 'toc-sub';
          subA.dataset.targetId = h3.id;
          subLi.appendChild(subA);
          tocList.appendChild(subLi);
        });
      }
    });

    initScrollSpy();
  }

  function setActiveSection(sectionId) {
    if (!sectionId) return;

    // Highlight sidebar link
    document.querySelectorAll('.sidebar-links a').forEach((a) => {
      const match = a.getAttribute('href') === `#${sectionId}`;
      a.classList.toggle('active', match);
      if (match) {
        const group = a.closest('.sidebar-group');
        if (group && group.classList.contains('collapsed')) {
          group.classList.remove('collapsed');
          const btn = group.querySelector('.sidebar-group-btn');
          if (btn) btn.setAttribute('aria-expanded', 'true');
        }
      }
    });

    // Highlight right TOC link
    document.querySelectorAll('#docs-toc-list a').forEach((a) => {
      a.classList.toggle('active', a.dataset.targetId === sectionId);
    });

    // Update breadcrumb current label
    const crumbCurrent = document.getElementById('breadcrumb-current');
    const sec = document.getElementById(sectionId);
    if (crumbCurrent && sec) {
      const h2 = sec.querySelector('h2');
      if (h2) crumbCurrent.textContent = getVisibleText(h2);
    }
  }

  function initScrollSpy() {
    if (sectionObserver) sectionObserver.disconnect();
    const sections = Array.from(document.querySelectorAll('.doc-section'));
    if (sections.length === 0) return;

    sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-76px 0px -65% 0px', threshold: 0.01 }
    );

    sections.forEach((sec) => sectionObserver.observe(sec));

    const hashId = window.location.hash ? window.location.hash.slice(1) : sections[0].id;
    setActiveSection(hashId);
  }

  /* ------------------------------------------------------------------
     Scroll Progress Bar
     ------------------------------------------------------------------ */
  function initScrollProgress() {
    const bar = document.querySelector('.scroll-progress');
    if (!bar) return;

    const update = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      bar.style.width = `${pct}%`;
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  /* ------------------------------------------------------------------
     Instant Search Modal (Ctrl+K)
     ------------------------------------------------------------------ */
  let searchIndex = [];

  function buildSearchIndex() {
    const lang = getActiveLang();
    searchIndex = [];

    document.querySelectorAll('.doc-section').forEach((sec) => {
      const h2 = sec.querySelector('h2');
      const title = h2 ? getVisibleText(h2) : sec.id;
      const langBlock = sec.querySelector(`.lang-block[data-lang="${lang}"]`);
      const bodyText = langBlock ? langBlock.textContent.replace(/\s+/g, ' ').trim() : '';

      searchIndex.push({
        id: sec.id,
        title,
        text: bodyText,
        lowerTitle: title.toLowerCase(),
        lowerText: bodyText.toLowerCase()
      });
    });
  }

  function escapeHtml(str) {
    return str.replace(/[&<>"']/g, (ch) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[ch]));
  }

  function initSearchModal() {
    const modal = document.getElementById('search-modal');
    const input = document.getElementById('search-input');
    const resultsEl = document.getElementById('search-results');
    const triggers = document.querySelectorAll('.search-trigger');
    if (!modal || !input || !resultsEl) return;

    let selectedIdx = -1;

    function updateCopy() {
      const copy = SEARCH_COPY[getActiveLang()] || SEARCH_COPY.vi;
      input.placeholder = copy.placeholder;
      if (!input.value.trim()) {
        resultsEl.innerHTML = `<div class="search-empty">${escapeHtml(copy.hint)}</div>`;
      }
    }

    function openSearch() {
      buildSearchIndex();
      updateCopy();
      modal.classList.add('open');
      input.value = '';
      selectedIdx = -1;
      setTimeout(() => input.focus(), 20);
    }

    function closeSearch() {
      modal.classList.remove('open');
    }

    function renderResults(query) {
      const copy = SEARCH_COPY[getActiveLang()] || SEARCH_COPY.vi;
      const q = query.trim().toLowerCase();
      selectedIdx = -1;

      if (!q) {
        resultsEl.innerHTML = `<div class="search-empty">${escapeHtml(copy.hint)}</div>`;
        return;
      }

      const matches = searchIndex
        .filter((item) => item.lowerTitle.includes(q) || item.lowerText.includes(q))
        .slice(0, 10);

      if (matches.length === 0) {
        resultsEl.innerHTML = `<div class="search-empty">${escapeHtml(copy.empty)}</div>`;
        return;
      }

      const safeRe = new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');

      resultsEl.innerHTML = matches
        .map((item, idx) => {
          let pos = item.lowerText.indexOf(q);
          let start = Math.max(0, pos - 48);
          let snippet = pos >= 0
            ? (start > 0 ? '…' : '') + item.text.slice(start, start + 145) + (start + 145 < item.text.length ? '…' : '')
            : item.text.slice(0, 140) + '…';

          const highlightedTitle = escapeHtml(item.title).replace(safeRe, '<mark>$1</mark>');
          const highlightedSnippet = escapeHtml(snippet).replace(safeRe, '<mark>$1</mark>');

          return `
            <a href="#${item.id}" class="search-result-item${idx === 0 ? ' selected' : ''}" data-idx="${idx}">
              <div class="search-result-title">${highlightedTitle}</div>
              <div class="search-result-snippet">${highlightedSnippet}</div>
            </a>
          `;
        })
        .join('');

      selectedIdx = 0;

      resultsEl.querySelectorAll('.search-result-item').forEach((link) => {
        link.addEventListener('click', () => {
          closeSearch();
        });
      });
    }

    triggers.forEach((btn) => btn.addEventListener('click', openSearch));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeSearch();
    });

    input.addEventListener('input', () => renderResults(input.value));

    input.addEventListener('keydown', (e) => {
      const items = Array.from(resultsEl.querySelectorAll('.search-result-item'));
      if (e.key === 'ArrowDown' && items.length > 0) {
        e.preventDefault();
        selectedIdx = (selectedIdx + 1) % items.length;
        items.forEach((el, i) => el.classList.toggle('selected', i === selectedIdx));
        items[selectedIdx].scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'ArrowUp' && items.length > 0) {
        e.preventDefault();
        selectedIdx = (selectedIdx - 1 + items.length) % items.length;
        items.forEach((el, i) => el.classList.toggle('selected', i === selectedIdx));
        items[selectedIdx].scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'Enter' && selectedIdx >= 0 && items[selectedIdx]) {
        e.preventDefault();
        const href = items[selectedIdx].getAttribute('href');
        closeSearch();
        if (href) {
          window.location.hash = href;
          const target = document.querySelector(href);
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });

    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (modal.classList.contains('open')) closeSearch();
        else openSearch();
      } else if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeSearch();
      }
    });

    document.addEventListener('csveditor:langchange', () => {
      buildSearchIndex();
      updateCopy();
    });
  }

  /* ------------------------------------------------------------------
     Bootstrap
     ------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    buildRightTOC();
    initScrollProgress();
    initSearchModal();

    document.addEventListener('csveditor:langchange', () => {
      buildRightTOC();
    });
  });
})();
