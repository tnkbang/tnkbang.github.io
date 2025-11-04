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

// Load saved theme
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    const icon = document.querySelector('.theme-toggle i');
    icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
});

// Language Switcher
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');

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

        if (lang === 'vi') {
            featuresLink.href = '#features';
            featuresLink.textContent = 'Tính Năng';
            shortcutsLink.href = '#shortcuts';
            shortcutsLink.textContent = 'Phím Tắt';
            detailsLink.href = '#details';
            detailsLink.textContent = 'Chi Tiết';
            downloadLink.href = '#download';
            downloadLink.textContent = 'Tải Xuống';
        } else if (lang === 'en') {
            featuresLink.href = '#features-en';
            featuresLink.textContent = 'Features';
            shortcutsLink.href = '#shortcuts-en';
            shortcutsLink.textContent = 'Shortcuts';
            detailsLink.href = '#details-en';
            detailsLink.textContent = 'Details';
            downloadLink.href = '#download-en';
            downloadLink.textContent = 'Download';
        } else if (lang === 'ja') {
            featuresLink.href = '#features-ja';
            featuresLink.textContent = '機能';
            shortcutsLink.href = '#shortcuts-ja';
            shortcutsLink.textContent = 'ショートカット';
            detailsLink.href = '#details-ja';
            detailsLink.textContent = '詳細';
            downloadLink.href = '#download-ja';
            downloadLink.textContent = 'ダウンロード';
        }
    });
});

// Smooth scroll for anchor links
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
