/**
 * DISCIENCE INC. - STORAGE MODULE
 * Dedicated browser LocalStorage manager with versioned keys and safe error handling.
 */

const StorageKeys = {
  COOKIE_CONSENT: 'discience_cookie_consent_v1',
  CONTACT_INQUIRIES: 'discience_contact_inquiries_v1',
  PORTFOLIO_FILTER: 'discience_portfolio_filter_v1'
};

const DiScienceStorage = {
  /**
   * Safely retrieve and parse JSON data from LocalStorage
   */
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      if (item === null || item === undefined) return defaultValue;
      return JSON.parse(item);
    } catch (err) {
      console.warn(`[DiScienceStorage] Error reading key "${key}":`, err);
      return defaultValue;
    }
  },

  /**
   * Safely serialize and save data to LocalStorage
   */
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (err) {
      console.error(`[DiScienceStorage] Error writing key "${key}":`, err);
      return false;
    }
  },

  /**
   * Remove item from LocalStorage
   */
  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (err) {
      console.warn(`[DiScienceStorage] Error removing key "${key}":`, err);
      return false;
    }
  },

  /* Cookie Consent API */
  getCookieConsent() {
    return this.get(StorageKeys.COOKIE_CONSENT, null);
  },

  setCookieConsent(status, preferences = { essential: true, analytics: false }) {
    const data = {
      status, // 'accepted' | 'rejected' | 'custom'
      preferences,
      timestamp: new Date().toISOString()
    };
    return this.set(StorageKeys.COOKIE_CONSENT, data);
  },

  /* Contact Inquiries API */
  getInquiries() {
    return this.get(StorageKeys.CONTACT_INQUIRIES, []);
  },

  saveInquiry(inquiry) {
    const list = this.getInquiries();
    const newRecord = {
      id: 'inq_' + Date.now(),
      ...inquiry,
      submittedAt: new Date().toISOString()
    };
    list.unshift(newRecord);
    return this.set(StorageKeys.CONTACT_INQUIRIES, list) ? newRecord : null;
  },

  clearInquiries() {
    return this.remove(StorageKeys.CONTACT_INQUIRIES);
  },

  /* Portfolio Filter State */
  getPortfolioFilter() {
    return this.get(StorageKeys.PORTFOLIO_FILTER, 'all');
  },

  setPortfolioFilter(filter) {
    return this.set(StorageKeys.PORTFOLIO_FILTER, filter);
  }
};

window.DiScienceStorage = DiScienceStorage;
