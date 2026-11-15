/**
 * DISCIENCE INC. - NAVIGATION MODULE
 * Sticky navbar, mobile drawer interactions, active links, and accessible navigation.
 */

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const drawerOverlay = document.querySelector('.mobile-drawer-overlay');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  // Sticky Header Effect
  const handleScroll = () => {
    if (!header) return;
    if (window.scrollY > 30) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile Drawer Toggle
  const openDrawer = () => {
    if (mobileToggle) mobileToggle.classList.add('is-active');
    if (mobileDrawer) mobileDrawer.classList.add('is-open');
    if (drawerOverlay) drawerOverlay.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    if (mobileToggle) mobileToggle.classList.remove('is-active');
    if (mobileDrawer) mobileDrawer.classList.remove('is-open');
    if (drawerOverlay) drawerOverlay.classList.remove('is-visible');
    document.body.style.overflow = '';
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer && mobileDrawer.classList.contains('is-open');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', closeDrawer);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

  // Active Navigation Highlighting
  const currentPath = window.location.pathname.toLowerCase();
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;
    const cleanHref = href.toLowerCase();

    // Check if matches homepage or specific page
    const isHome = (currentPath.endsWith('/') || currentPath.endsWith('index.html') || currentPath === '') && (cleanHref === 'index.html' || cleanHref === './' || cleanHref === '/');
    const isMatch = isHome || (cleanHref !== 'index.html' && cleanHref !== './' && currentPath.includes(cleanHref));

    if (isMatch) {
      link.classList.add('active');
    }

    link.addEventListener('click', () => {
      closeDrawer();
    });
  });
});
