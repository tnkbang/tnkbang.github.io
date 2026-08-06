// Lightbox translations
const lightboxTranslations = {
    vi: {
        zoomIn: 'Phóng to',
        zoomOut: 'Thu nhỏ',
        zoomReset: 'Đặt lại',
        fullscreen: 'Toàn màn hình',
        exitFullscreen: 'Thoát toàn màn hình'
    },
    en: {
        zoomIn: 'Zoom In',
        zoomOut: 'Zoom Out',
        zoomReset: 'Reset Zoom',
        fullscreen: 'Fullscreen',
        exitFullscreen: 'Exit Fullscreen'
    },
    ja: {
        zoomIn: '拡大',
        zoomOut: '縮小',
        zoomReset: 'リセット',
        fullscreen: 'フルスクリーン',
        exitFullscreen: 'フルスクリーン終了'
    }
};

// Update lightbox button tooltips
function updateLightboxLanguage(lang) {
    const translations = lightboxTranslations[lang] || lightboxTranslations.vi;
    const zoomInBtn = document.querySelector('#zoom-in');
    const zoomOutBtn = document.querySelector('#zoom-out');
    const zoomResetBtn = document.querySelector('#zoom-reset');
    const fullscreenBtn = document.querySelector('#fullscreen');

    if (zoomInBtn) zoomInBtn.title = translations.zoomIn;
    if (zoomOutBtn) zoomOutBtn.title = translations.zoomOut;
    if (zoomResetBtn) zoomResetBtn.title = translations.zoomReset;
    if (fullscreenBtn) {
        if (document.fullscreenElement) {
            fullscreenBtn.title = translations.exitFullscreen;
        } else {
            fullscreenBtn.title = translations.fullscreen;
        }
    }
}

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

    // Initialize screenshot lightbox
    initializeScreenshotLightbox();

    // Update lightbox tooltips with current language
    const currentLang = localStorage.getItem('selectedLanguage') || 'vi';
    updateLightboxLanguage(currentLang);
});

// Screenshot Lightbox Functionality
function initializeScreenshotLightbox() {
    // Create lightbox element if not exists
    let lightbox = document.querySelector('.lightbox');
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <span class="lightbox-close">&times;</span>
            <span class="lightbox-nav lightbox-prev">&#10094;</span>
            <div class="lightbox-image-container">
                <img src="" alt="Screenshot">
            </div>
            <span class="lightbox-nav lightbox-next">&#10095;</span>
            <div class="lightbox-controls">
                <button class="lightbox-btn" id="zoom-in" title="Phóng to"><i class="fas fa-search-plus"></i></button>
                <button class="lightbox-btn" id="zoom-out" title="Thu nhỏ"><i class="fas fa-search-minus"></i></button>
                <button class="lightbox-btn" id="zoom-reset" title="Đặt lại"><i class="fas fa-compress"></i></button>
                <button class="lightbox-btn" id="fullscreen" title="Toàn màn hình"><i class="fas fa-expand"></i></button>
            </div>
        `;
        document.body.appendChild(lightbox);
    }

    const screenshots = document.querySelectorAll('.screenshot-item img');
    const lightboxContainer = lightbox.querySelector('.lightbox-image-container');
    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    const zoomInBtn = lightbox.querySelector('#zoom-in');
    const zoomOutBtn = lightbox.querySelector('#zoom-out');
    const zoomResetBtn = lightbox.querySelector('#zoom-reset');
    const fullscreenBtn = lightbox.querySelector('#fullscreen');
    let currentIndex = 0;
    let currentZoom = 1;
    let isPanning = false;
    let startX, startY, translateX = 0, translateY = 0;

    // Open lightbox on image click
    screenshots.forEach((img, index) => {
        img.parentElement.addEventListener('click', (e) => {
            e.preventDefault();
            currentIndex = index;
            showImage(currentIndex);
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close lightbox
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Navigation
    const showImage = (index) => {
        if (index >= 0 && index < screenshots.length) {
            lightboxImg.src = screenshots[index].src;
            lightboxImg.alt = screenshots[index].alt;
            currentIndex = index;
            resetZoom();
        }
    };

    // Zoom functions
    const resetZoom = () => {
        currentZoom = 1;
        translateX = 0;
        translateY = 0;
        updateTransform();
        lightboxContainer.style.cursor = 'default';
    };

    const updateTransform = () => {
        lightboxImg.style.transform = `scale(${currentZoom}) translate(${translateX}px, ${translateY}px)`;
    };

    const zoom = (delta) => {
        const oldZoom = currentZoom;
        currentZoom = Math.min(Math.max(0.5, currentZoom + delta), 5);

        if (currentZoom > 1) {
            lightboxContainer.style.cursor = 'move';
        } else {
            lightboxContainer.style.cursor = 'default';
            translateX = 0;
            translateY = 0;
        }

        updateTransform();
    };

    // Zoom controls
    zoomInBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        zoom(0.3);
    });

    zoomOutBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        zoom(-0.3);
    });

    zoomResetBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        resetZoom();
    });

    // Mouse wheel zoom
    lightboxContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        zoom(delta);
    });

    // Pan functionality
    lightboxImg.addEventListener('mousedown', (e) => {
        if (currentZoom > 1) {
            isPanning = true;
            startX = e.clientX - translateX;
            startY = e.clientY - translateY;
            lightboxImg.style.cursor = 'grabbing';
        }
    });

    document.addEventListener('mousemove', (e) => {
        if (isPanning) {
            translateX = e.clientX - startX;
            translateY = e.clientY - startY;
            updateTransform();
        }
    });

    document.addEventListener('mouseup', () => {
        if (isPanning) {
            isPanning = false;
            if (currentZoom > 1) {
                lightboxImg.style.cursor = 'grab';
            }
        }
    });

    // Fullscreen
    fullscreenBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const currentLang = localStorage.getItem('selectedLanguage') || 'vi';
        const translations = lightboxTranslations[currentLang];

        if (!document.fullscreenElement) {
            lightbox.requestFullscreen().catch(err => {
                console.log('Fullscreen error:', err);
            });
            fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
            fullscreenBtn.title = translations.exitFullscreen;
        } else {
            document.exitFullscreen();
            fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
            fullscreenBtn.title = translations.fullscreen;
        }
    });

    // Update fullscreen button on fullscreen change
    document.addEventListener('fullscreenchange', () => {
        const currentLang = localStorage.getItem('selectedLanguage') || 'vi';
        const translations = lightboxTranslations[currentLang];

        if (!document.fullscreenElement) {
            fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
            fullscreenBtn.title = translations.fullscreen;
        }
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + screenshots.length) % screenshots.length;
        showImage(currentIndex);
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % screenshots.length;
        showImage(currentIndex);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + screenshots.length) % screenshots.length;
            showImage(currentIndex);
        } else if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % screenshots.length;
            showImage(currentIndex);
        }
    });
}

// Language Switcher
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');

        // Save language to localStorage
        localStorage.setItem('selectedLanguage', lang);

        // Update active button
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Update lightbox tooltips
        updateLightboxLanguage(lang);

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
