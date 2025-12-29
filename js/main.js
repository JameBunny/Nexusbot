// =============================================
// NEXUS BOT - MAIN JAVASCRIPT
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initMobileMenu();
    initScrollAnimations();
    initCounterAnimation();
    initCommandSearch();
    initFAQ();
});

// =============================================
// NAVBAR
// =============================================
function initNavbar() {
    var navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar. classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// =============================================
// MOBILE MENU
// =============================================
function initMobileMenu() {
    var hamburger = document.getElementById('hamburger');
    var navMenu = document.getElementById('navMenu') || document.querySelector('. nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList. toggle('active');
            
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style. overflow = '';
            }
        });

        // Close menu when clicking on links
        var navLinks = navMenu. querySelectorAll('. nav-link');
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList. remove('active');
                document.body.style. overflow = '';
            });
        }
    }
}

// =============================================
// SCROLL ANIMATIONS
// =============================================
function initScrollAnimations() {
    var animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements. length === 0) return;

    function checkVisibility() {
        for (var i = 0; i < animatedElements.length; i++) {
            var element = animatedElements[i];
            var rect = element.getBoundingClientRect();
            var windowHeight = window.innerHeight || document.documentElement. clientHeight;
            
            if (rect. top <= windowHeight - 50) {
                element.classList.add('visible');
            }
        }
    }

    // Check on load
    checkVisibility();

    // Check on scroll
    window. addEventListener('scroll', checkVisibility);
}

// =============================================
// COUNTER ANIMATION
// =============================================
function initCounterAnimation() {
    var counters = document.querySelectorAll('.stat-number[data-count]');
    
    if (counters.length === 0) return;

    function formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return Math.floor(num / 1000) + 'K';
        }
        return num. toString();
    }

    function animateCounter(counter) {
        var target = parseInt(counter.getAttribute('data-count'));
        var duration = 2000;
        var startTime = null;

        function updateCounter(currentTime) {
            if (! startTime) startTime = currentTime;
            var elapsed = currentTime - startTime;
            var progress = Math. min(elapsed / duration, 1);
            
            var current = Math.floor(progress * target);
            counter.textContent = formatNumber(current);

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = formatNumber(target);
            }
        }

        requestAnimationFrame(updateCounter);
    }

    function checkCounters() {
        for (var i = 0; i < counters.length; i++) {
            var counter = counters[i];
            if (counter.getAttribute('data-animated')) continue;

            var rect = counter.getBoundingClientRect();
            var windowHeight = window.innerHeight || document.documentElement. clientHeight;

            if (rect. top <= windowHeight - 50) {
                counter.setAttribute('data-animated', 'true');
                animateCounter(counter);
            }
        }
    }

    checkCounters();
    window.addEventListener('scroll', checkCounters);
}

// =============================================
// COMMAND SEARCH
// =============================================
function initCommandSearch() {
    var searchInput = document.getElementById('commandSearch');
    
    if (!searchInput) return;

    searchInput.addEventListener('input', function(e) {
        var query = e.target. value.toLowerCase();
        var commandCards = document.querySelectorAll('.command-card');

        for (var i = 0; i < commandCards.length; i++) {
            var card = commandCards[i];
            var nameEl = card.querySelector('. command-name');
            var descEl = card.querySelector('.command-desc');
            
            var commandName = nameEl ?  nameEl.textContent.toLowerCase() : '';
            var commandDesc = descEl ? descEl.textContent. toLowerCase() : '';

            if (commandName.indexOf(query) !== -1 || commandDesc.indexOf(query) !== -1) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// =============================================
// FAQ ACCORDION
// =============================================
function initFAQ() {
    var faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length === 0) return;

    for (var i = 0; i < faqItems.length; i++) {
        var item = faqItems[i];
        var question = item.querySelector('. faq-question');

        if (question) {
            question.addEventListener('click', function(e) {
                var currentItem = this.parentElement;
                
                // Close others
                for (var j = 0; j < faqItems.length; j++) {
                    if (faqItems[j] !== currentItem) {
                        faqItems[j].classList.remove('active');
                    }
                }

                // Toggle current
                currentItem.classList.toggle('active');
            });
        }
    }
}

// =============================================
// SMOOTH SCROLL
// =============================================
document.addEventListener('click', function(e) {
    var target = e.target. closest('a[href^="#"]');
    if (target) {
        var href = target.getAttribute('href');
        if (href && href !== '#') {
            var element = document.querySelector(href);
            if (element) {
                e.preventDefault();
                element.scrollIntoView({
                    behavior: 'smooth',
                    block:  'start'
                });
            }
        }
    }
});

// =============================================
// PARALLAX EFFECT
// =============================================
window.addEventListener('scroll', function() {
    var scrolled = window.pageYOffset;
    var heroContent = document.querySelector('. hero-content');

    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = 'translateY(' + (scrolled * 0.3) + 'px)';
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});
