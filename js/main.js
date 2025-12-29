document.addEventListener('DOMContentLoaded', function() {
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initCounterAnimation();
  initCommandSearch();
  initFAQ();
  if (typeof initLanguageSelector === 'function') initLanguageSelector();
});

function initNavbar() {
  var navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });
}

function initMobileMenu() {
  var hamburger = document.getElementById('hamburger');
  var navMenu = document.getElementById('navMenu');
  if (!hamburger || !navMenu) return;
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });
  navMenu.querySelectorAll('.nav-link').forEach(function(link){
    link.addEventListener('click', function(){
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

function initScrollAnimations() {
  var animated = document.querySelectorAll('.animate-on-scroll');
  if (!animated.length) return;
  function check() {
    var h = window.innerHeight || document.documentElement.clientHeight;
    animated.forEach(function(el){
      var rect = el.getBoundingClientRect();
      if (rect.top <= h - 50) el.classList.add('visible');
    });
  }
  check();
  window.addEventListener('scroll', check);
}

function initCounterAnimation() {
  var counters = document.querySelectorAll('.stat-number[data-count]');
  if (!counters.length) return;
  function format(n){
    if (n>=1000000) return (n/1000000).toFixed(1)+'M';
    if (n>=1000) return Math.floor(n/1000)+'K';
    return n.toString();
  }
  function animate(el){
    var target = parseInt(el.getAttribute('data-count'),10);
    var dur = 2000, start = null;
    function step(t){
      if (!start) start = t;
      var p = Math.min((t-start)/dur,1);
      var val = Math.floor(p*target);
      el.textContent = format(val);
      if (p<1) requestAnimationFrame(step);
      else el.textContent = format(target);
    }
    requestAnimationFrame(step);
  }
  function check(){
    var h = window.innerHeight || document.documentElement.clientHeight;
    counters.forEach(function(el){
      if (el.getAttribute('data-animated')) return;
      var rect = el.getBoundingClientRect();
      if (rect.top <= h - 50) {
        el.setAttribute('data-animated','true');
        animate(el);
      }
    });
  }
  check();
  window.addEventListener('scroll', check);
}

function initCommandSearch() {
  var input = document.getElementById('commandSearch');
  if (!input) return;
  input.addEventListener('input', function(e){
    var q = e.target.value.toLowerCase();
    document.querySelectorAll('.command-card').forEach(function(card){
      var name = (card.querySelector('.command-name')?.textContent || '').toLowerCase();
      var desc = (card.querySelector('.command-desc')?.textContent || '').toLowerCase();
      card.style.display = (name.indexOf(q)!==-1 || desc.indexOf(q)!==-1) ? '' : 'none';
    });
  });
}

function initFAQ() {
  var items = document.querySelectorAll('.faq-item');
  if (!items.length) return;
  items.forEach(function(it){
    var q = it.querySelector('.faq-question');
    if (!q) return;
    q.addEventListener('click', function(){
      items.forEach(function(o){ if(o!==it) o.classList.remove('active'); });
      it.classList.toggle('active');
    });
  });
}

// smooth scroll for in-page anchors
document.addEventListener('click', function(e){
  var a = e.target.closest('a[href^="#"]');
  if (!a) return;
  var href = a.getAttribute('href');
  if (href && href !== '#') {
    var el = document.querySelector(href);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth',block:'start'});
    }
  }
});
