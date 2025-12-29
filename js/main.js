/* js/main.js */

// =============================================
// 1. AUTO FAVICON (ใส่ไอคอนให้อัตโนมัติทุกหน้า)
// =============================================
(function() {
  // ตรวจสอบว่ามี favicon หรือยัง ถ้าไม่มีให้สร้างใหม่
  var link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
  }
  // ใส่ลิงก์รูปตรงนี้ (แนะนำให้ใช้ .png ที่ตัดวงกลมแล้ว ถ้ามี)
  link.href = 'https://i.imgur.com/OWQKhLp.jpeg'; 
})();

// =============================================
// 2. MAIN INITIALIZATION
// =============================================
document.addEventListener('DOMContentLoaded', function() {
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initCounterAnimation(); // สำหรับตัวเลขแบบ Static (ถ้ามี)
  initCommandSearch();
  initFAQ();
  
  // เรียกฟังก์ชันดึงข้อมูลจริงจากบอท
  fetchBotStats();

  // เรียกฟังก์ชันแปลภาษา (จาก i18n.js)
  if (typeof initLanguageSelector === 'function') initLanguageSelector();
});

// =============================================
// 3. REAL-TIME BOT STATS (ดึงข้อมูลจริง)
// =============================================
async function fetchBotStats() {
  const serverEl = document.getElementById('server-count');
  const userEl = document.getElementById('user-count');
  const songEl = document.getElementById('song-count');

  // ถ้าหน้าเว็บไม่มี ID เหล่านี้ (เช่นหน้า Terms) ให้จบการทำงาน
  if (!serverEl) return;

  try {
    // ⚠️ แก้ไข URL นี้ให้ตรงกับ IP เครื่องที่รันบอทของคุณ ⚠️
    // เช่น 'http://123.45.67.89:8080/api/stats'
    const response = await fetch('http://localhost:8080/api/stats');
    
    if (!response.ok) throw new Error('API Connect Failed');
    
    const data = await response.json();

    // อัปเดตตัวเลขพร้อมเอฟเฟกต์
    animateValue(serverEl, 0, data.servers, 2000);
    animateValue(userEl, 0, data.users, 2000);
    animateValue(songEl, 0, data.songs, 2000);

  } catch (error) {
    console.warn('ไม่สามารถดึงข้อมูลบอทได้ (ใช้ค่า Default):', error);
    // กรณีดึงไม่ได้ ให้แสดงค่าสมมติ
    serverEl.textContent = "10K+";
    userEl.textContent = "500K+";
    songEl.textContent = "1.0M+";
  }
}

// ฟังก์ชันทำตัวเลขวิ่ง + แปลงหน่วย K/M
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  
  // ฟังก์ชันจัดรูปแบบตัวเลข (1500 -> 1.5K)
  const format = (n) => {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
    if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
    return n.toLocaleString();
  };

  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    
    obj.textContent = format(value);
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      obj.textContent = format(end);
    }
  };
  window.requestAnimationFrame(step);
}

// =============================================
// 4. EXISTING FUNCTIONS (ฟังก์ชันเดิมของคุณ)
// =============================================

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

// ฟังก์ชันนี้เก็บไว้เผื่อมี Counter อื่นๆ ที่ใช้ data-count (ที่ไม่ใช่ Hero Stats)
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

// Smooth scroll
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
