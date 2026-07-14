/* ==========================================================================
   Terra Floor — Premium Design System (behavior layer)
   Один файл, подключаемый на всех страницах. Автоматически находит
   элементы по существующим классам верстки — переписывать HTML не нужно.
   Тяжёлые hover-эффекты отключаются на touch-устройствах и при
   prefers-reduced-motion — по духу задачи "не облегчать дизайн,
   но снижать тяжёлые эффекты на слабых устройствах".
   ========================================================================== */
(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const heavyEffectsAllowed = !prefersReduced && !isCoarsePointer;

  /* ---------------- Header shrink-on-scroll ---------------- */
  function initHeaderShrink() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    let ticking = false;
    function update() {
      if (window.scrollY > 24) header.classList.add('tf-scrolled');
      else header.classList.remove('tf-scrolled');
      ticking = false;
    }
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ---------------- Tilt + cursor-light on cards ---------------- */
  const TILT_SELECTORS = [
    '.collection-card', '.cat-card', '.acc-card', '.related-card',
    '.stat-card', '.info-card', '.pay-card', '.feature', '.value-item'
  ].join(',');

  function initTiltCards() {
    const cards = document.querySelectorAll(TILT_SELECTORS);
    cards.forEach(card => {
      card.classList.add('tf-tilt');
      if (!heavyEffectsAllowed) return; // оставляем только тень/свет из CSS :hover, без 3D

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const px = (x / rect.width) * 100;
        const py = (y / rect.height) * 100;
        card.style.setProperty('--tf-mx', px + '%');
        card.style.setProperty('--tf-my', py + '%');

        const cx = x / rect.width - 0.5;
        const cy = y / rect.height - 0.5;
        const rotateX = (-cy * 4).toFixed(2);
        const rotateY = (cx * 4).toFixed(2);
        card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  /* ---------------- Magnetic buttons ---------------- */
  function initMagneticButtons() {
    if (!heavyEffectsAllowed) return;
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  /* ---------------- Scroll reveal ---------------- */
  function initScrollReveal() {
    const REVEAL_SELECTORS = [
      '.section-head', '.collection-card', '.cat-card', '.acc-card',
      '.stat-card', '.info-card', '.pay-card', '.feature', '.value-item',
      '.related-card', '.faq-item'
    ].join(',');

    const items = document.querySelectorAll(REVEAL_SELECTORS);
    if (!items.length) return;

    items.forEach((el, i) => {
      el.classList.add('tf-reveal', 'tf-reveal-stagger');
      el.style.setProperty('--tf-delay', Math.min(i % 6, 6) * 0.07 + 's');
    });

    if (!('IntersectionObserver' in window)) {
      items.forEach(el => el.classList.add('tf-in'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('tf-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    items.forEach(el => io.observe(el));
  }

  document.addEventListener('DOMContentLoaded', () => {
    initHeaderShrink();
    initTiltCards();
    initMagneticButtons();
    initScrollReveal();
  });
})();
