// =============================================
// NEXUS BOT - MAIN JAVASCRIPT
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavbar();
    initLanguageSelector();
    initScrollAnimations();
    initCounterAnimation();
    initCommandSearch();
    initFAQ();
    initMobileMenu();
});

// =============================================
// NAVBAR
// =============================================
function initNavbar() {
    const navbar = document.querySelector('. navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// =============================================
// MOBILE MENU
// =============================================
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList. toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList. remove('active');
                document.body. style.overflow = '';
            });
        });
    }
}

// =============================================
// LANGUAGE SELECTOR
// =============================================
function initLanguageSelector() {
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    
    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
        });
        
        document.addEventListener('click', () => {
            langDropdown.classList.remove('active');
        });
    }
}

// Change language function (called from HTML)
function changeLanguage(lang) {
    localStorage.setItem('nexus-language', lang);
    
    const currentLang = document.getElementById('currentLang');
    const langMap = { th: 'TH', en: 'EN', ja: 'JP' };
    if (currentLang) {
        currentLang.textContent = langMap[lang];
    }
    
    // Apply translations
    applyTranslations(lang);
    
    // Close dropdown
    const langDropdown = document. getElementById('langDropdown');
    if (langDropdown) {
        langDropdown.classList.remove('active');
    }
}

// =============================================
// SCROLL ANIMATIONS
// =============================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target. classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => observer.observe(el));
}

// =============================================
// COUNTER ANIMATION
// =============================================
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = formatNumber(Math.floor(current));
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = formatNumber(target);
            }
        };
        
        updateCounter();
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer. observe(counter));
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
}

// =============================================
// COMMAND SEARCH
// =============================================
function initCommandSearch() {
    const searchInput = document.getElementById('commandSearch');
    
    if (searchInput) {
        searchInput. addEventListener('input', (e) => {
            const query = e.target.value. toLowerCase();
            const commandCards = document.querySelectorAll('.command-card');
            
            commandCards.forEach(card => {
                const commandName = card.querySelector('.command-name')?.textContent.toLowerCase() || '';
                const commandDesc = card.querySelector('. command-desc')?.textContent.toLowerCase() || '';
                
                if (commandName.includes(query) || commandDesc.includes(query)) {
                    card. style.display = '';
                    card.style.opacity = '1';
                } else {
                    card.style. display = 'none';
                }
            });
        });
    }
}

// =============================================
// FAQ ACCORDION
// =============================================
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('. faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                // Close other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        }
    });
}

// =============================================
// SMOOTH SCROLL
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior:  'smooth',
                    block:  'start'
                });
            }
        }
    });
});

// =============================================
// PARALLAX EFFECT FOR HERO
// =============================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('. hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// =============================================
// LOADING ANIMATION
// =============================================
window.addEventListener('load', () => {
    document.body.classList. add('loaded');
    
    // Initialize language from storage
    const savedLang = localStorage.getItem('nexus-language') || 'th';
    changeLanguage(savedLang);
});
