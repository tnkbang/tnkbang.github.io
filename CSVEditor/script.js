// Theme Toggle
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    const icon = document.querySelector('.theme-toggle i');
    icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.mobile-menu-toggle i');
    navLinks.classList.toggle('active');

    // Change icon
    if (navLinks.classList.contains('active')) {
        menuToggle.className = 'fas fa-times';
    } else {
        menuToggle.className = 'fas fa-bars';
    }
}

// Close Mobile Menu
function closeMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.mobile-menu-toggle i');
    if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
        menuToggle.className = 'fas fa-bars';
    }
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');

    if (navLinks.classList.contains('active') &&
        !nav.contains(e.target)) {
        navLinks.classList.remove('active');
        menuToggle.querySelector('i').className = 'fas fa-bars';
    }
});

// Load saved theme and language
window.addEventListener('DOMContentLoaded', () => {
    // Load theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    const icon = document.querySelector('.theme-toggle i');
    if (icon) {
        icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }

    // Load language
    const savedLang = localStorage.getItem('selectedLanguage') || 'vi';
    const langBtn = document.querySelector(`.lang-btn[data-lang="${savedLang}"]`);
    if (langBtn) {
        langBtn.click(); // Trigger the language switch
    }
});

// Language Switcher
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');

        // Save language to localStorage
        localStorage.setItem('selectedLanguage', lang);

        // Update active button
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Show/hide content
        document.querySelectorAll('.content-lang').forEach(content => {
            content.classList.remove('active');
        });
        document.querySelectorAll(`[data-lang="${lang}"]`).forEach(content => {
            content.classList.add('active');
        });

        // Update nav links with correct IDs and text
        const navLinks = document.querySelector('.nav-links');
        const suffix = lang === 'vi' ? '' : `-${lang}`;

        const featuresLink = navLinks.querySelector('a[href^="#features"]');
        const shortcutsLink = navLinks.querySelector('a[href^="#shortcuts"]');
        const detailsLink = navLinks.querySelector('a[href^="#details"]');
        const downloadLink = navLinks.querySelector('a[href^="#download"]');
        const docsLink = navLinks.querySelector('a[href="docs.html"]');

        if (lang === 'vi') {
            if (featuresLink) {
                featuresLink.href = '#features';
                featuresLink.textContent = 'Tính Năng';
            }
            if (shortcutsLink) {
                shortcutsLink.href = '#shortcuts';
                shortcutsLink.textContent = 'Phím Tắt';
            }
            if (detailsLink) {
                detailsLink.href = '#details';
                detailsLink.textContent = 'Chi Tiết';
            }
            if (downloadLink) {
                downloadLink.href = '#download';
                downloadLink.textContent = 'Tải Xuống';
            }
            if (docsLink) {
                docsLink.innerHTML = '<i class="fas fa-book"></i> Tài Liệu';
            }
        } else if (lang === 'en') {
            if (featuresLink) {
                featuresLink.href = '#features-en';
                featuresLink.textContent = 'Features';
            }
            if (shortcutsLink) {
                shortcutsLink.href = '#shortcuts-en';
                shortcutsLink.textContent = 'Shortcuts';
            }
            if (detailsLink) {
                detailsLink.href = '#details-en';
                detailsLink.textContent = 'Details';
            }
            if (downloadLink) {
                downloadLink.href = '#download-en';
                downloadLink.textContent = 'Download';
            }
            if (docsLink) {
                docsLink.innerHTML = '<i class="fas fa-book"></i> Documentation';
            }
        } else if (lang === 'ja') {
            if (featuresLink) {
                featuresLink.href = '#features-ja';
                featuresLink.textContent = '機能';
            }
            if (shortcutsLink) {
                shortcutsLink.href = '#shortcuts-ja';
                shortcutsLink.textContent = 'ショートカット';
            }
            if (detailsLink) {
                detailsLink.href = '#details-ja';
                detailsLink.textContent = '詳細';
            }
            if (downloadLink) {
                downloadLink.href = '#download-ja';
                downloadLink.textContent = 'ダウンロード';
            }
            if (docsLink) {
                docsLink.innerHTML = '<i class="fas fa-book"></i> ドキュメント';
            }
        }
    });
});// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .feature-detail, .shortcut-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Active section highlighting for quick-nav
const sectionObserverOptions = {
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    rootMargin: '-80px 0px -80px 0px'
};

let currentActiveSection = null;

const sectionObserver = new IntersectionObserver((entries) => {
    // Find the section with the highest intersection ratio
    let maxRatio = 0;
    let targetSection = null;

    entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            targetSection = entry.target;
        }
    });

    // If we found a section and it's different from current
    if (targetSection && targetSection.id !== currentActiveSection) {
        currentActiveSection = targetSection.id;
        const sectionId = targetSection.id;

        // Update sidebar TOC only
        document.querySelectorAll('.toc a').forEach(link => {
            link.classList.remove('active');
        });
        const activeTocLink = document.querySelector(`.toc a[href="#${sectionId}"]`);
        if (activeTocLink) {
            activeTocLink.classList.add('active');
        }
    }
}, sectionObserverOptions);

// Observe all doc sections
document.querySelectorAll('.doc-section').forEach(section => {
    sectionObserver.observe(section);
});
