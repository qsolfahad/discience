/**
 * DISCIENCE INC. - MAIN APPLICATION SCRIPT
 * Coordinates Lucide icons, cookie consent banner, modal handlers, and global utilities.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Dynamic Current Year
  const yearElements = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearElements.forEach((el) => {
    el.textContent = currentYear;
  });

  // Cookie Consent Handling
  const cookieBanner = document.getElementById('cookieBanner');
  const cookieSettingsModal = document.getElementById('cookieSettingsModal');
  const acceptCookiesBtn = document.getElementById('acceptCookiesBtn');
  const rejectCookiesBtn = document.getElementById('rejectCookiesBtn');
  const openCookieSettingsBtn = document.getElementById('openCookieSettingsBtn');
  const closeCookieSettingsBtn = document.getElementById('closeCookieSettingsBtn');
  const saveCookieSettingsBtn = document.getElementById('saveCookieSettingsBtn');
  const analyticsConsentCheckbox = document.getElementById('analyticsConsentCheckbox');

  if (window.DiScienceStorage && cookieBanner) {
    const existingConsent = window.DiScienceStorage.getCookieConsent();

    if (!existingConsent) {
      setTimeout(() => {
        cookieBanner.classList.add('is-active');
      }, 800);
    }

    if (acceptCookiesBtn) {
      acceptCookiesBtn.addEventListener('click', () => {
        window.DiScienceStorage.setCookieConsent('accepted', { essential: true, analytics: true });
        cookieBanner.classList.remove('is-active');
      });
    }

    if (rejectCookiesBtn) {
      rejectCookiesBtn.addEventListener('click', () => {
        window.DiScienceStorage.setCookieConsent('rejected', { essential: true, analytics: false });
        cookieBanner.classList.remove('is-active');
      });
    }

    if (openCookieSettingsBtn && cookieSettingsModal) {
      openCookieSettingsBtn.addEventListener('click', () => {
        cookieSettingsModal.classList.add('is-open');
      });
    }

    if (closeCookieSettingsBtn && cookieSettingsModal) {
      closeCookieSettingsBtn.addEventListener('click', () => {
        cookieSettingsModal.classList.remove('is-open');
      });
    }

    if (saveCookieSettingsBtn && cookieSettingsModal) {
      saveCookieSettingsBtn.addEventListener('click', () => {
        const isAnalyticsChecked = analyticsConsentCheckbox ? analyticsConsentCheckbox.checked : false;
        window.DiScienceStorage.setCookieConsent('custom', { essential: true, analytics: isAnalyticsChecked });
        cookieSettingsModal.classList.remove('is-open');
        cookieBanner.classList.remove('is-active');
      });
    }

    // Close modal on backdrop click
    if (cookieSettingsModal) {
      cookieSettingsModal.addEventListener('click', (e) => {
        if (e.target === cookieSettingsModal) {
          cookieSettingsModal.classList.remove('is-open');
        }
      });
    }
  }
});
// Animated counter on scroll
function animateCounters() {
  const counters = document.querySelectorAll('.counter-number');
  if (!counters.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || entry.target.dataset.animated) return;
      entry.target.dataset.animated = 'true';
      const target = parseInt(entry.target.dataset.target || '0', 10);
      const duration = 1800;
      const start = performance.now();
      function step(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        entry.target.textContent = Math.round(ease * target) + (entry.target.dataset.suffix || '');
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }, { threshold: 0.4 });
  counters.forEach(c => obs.observe(c));
}
animateCounters();

