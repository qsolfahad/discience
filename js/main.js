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
