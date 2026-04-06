// ==========================================
// BREAKTHROUGH AUTHOR LIVE — Main JS
// ==========================================

(function () {
  'use strict';

  // --- Theme Toggle ---
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('bal-theme');

  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.setAttribute('data-theme', 'dark');
  }

  function toggleTheme() {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('bal-theme', next);
  }

  document.addEventListener('click', function (e) {
    if (e.target.closest('#themeToggle') || e.target.closest('#themeToggleMobile')) {
      toggleTheme();
    }
  });

  // --- Mobile Menu ---
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', function () {
      mobileBtn.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
      });
    });
  }

  // --- Navbar Scroll Effect ---
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    if (navbar) {
      if (scrollY > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    }
    lastScroll = scrollY;
  });

  // --- Scroll Animations ---
  const fadeElements = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  fadeElements.forEach(function (el) {
    observer.observe(el);
  });

  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (question && answer) {
      question.addEventListener('click', function () {
        const isActive = item.classList.contains('active');

        // Close all
        faqItems.forEach(function (other) {
          other.classList.remove('active');
          var otherAnswer = other.querySelector('.faq-answer');
          if (otherAnswer) otherAnswer.style.maxHeight = '0';
        });

        // Toggle current
        if (!isActive) {
          item.classList.add('active');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    }
  });

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var offset = 80;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // --- Counter Animation ---
  function animateCounters() {
    var counters = document.querySelectorAll('.stat-number, .stat-card-number');
    counters.forEach(function (counter) {
      if (counter.dataset.animated) return;
      var text = counter.textContent.trim();
      var match = text.match(/^(\d+)/);
      if (!match) return;
      var target = parseInt(match[1], 10);
      var suffix = text.replace(match[1], '');
      var duration = 1500;
      var start = 0;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = Math.floor(eased * target) + suffix;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          counter.textContent = target + suffix;
        }
      }

      var counterObserver = new IntersectionObserver(
        function (entries) {
          if (entries[0].isIntersecting) {
            counter.dataset.animated = 'true';
            requestAnimationFrame(step);
            counterObserver.unobserve(counter);
          }
        },
        { threshold: 0.5 }
      );
      counterObserver.observe(counter);
    });
  }

  animateCounters();
})();
