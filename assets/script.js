/* =============================================
   AURA Growth Digital — script.js
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* === HEADER SCROLL === */
  var hdr = document.getElementById('hdr');
  window.addEventListener('scroll', function () {
    hdr.classList.toggle('sc', window.scrollY > 20);
  }, { passive: true });

  /* === HAMBURGER === */
  var ham = document.getElementById('ham');
  var mob = document.getElementById('mob');
  ham.addEventListener('click', function () {
    var open = mob.classList.toggle('op');
    ham.classList.toggle('op', open);
    ham.setAttribute('aria-expanded', open);
  });
  mob.querySelectorAll('.ml').forEach(function (link) {
    link.addEventListener('click', function () {
      mob.classList.remove('op');
      ham.classList.remove('op');
      ham.setAttribute('aria-expanded', 'false');
    });
  });

  /* === FAQ ACCORDION === */
  document.querySelectorAll('.faq-i').forEach(function (item) {
    item.querySelector('.faq-q').addEventListener('click', function () {
      var isOpen = item.classList.contains('op');
      document.querySelectorAll('.faq-i').forEach(function (i) {
        i.classList.remove('op');
        i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('op');
        item.querySelector('.faq-q').setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* === SLIDE REVEAL === */
  var allReveal = Array.from(document.querySelectorAll('section, .rv'));
  var revObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('on');
        revObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  allReveal.forEach(function (el) { revObs.observe(el); });

  /* === SMOOTH SCROLL === */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      var offset = hdr.getBoundingClientRect().height;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - offset - 8,
        behavior: 'smooth'
      });
    });
  });

  /* === NAV ATIVO === */
  document.querySelectorAll('section[id]').forEach(function (sec) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          document.querySelectorAll('nav a').forEach(function (a) {
            a.classList.toggle('act', a.getAttribute('href') === '#' + e.target.id);
          });
        }
      });
    }, { threshold: 0.35 }).observe(sec);
  });

});