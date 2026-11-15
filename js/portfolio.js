/**
 * DISCIENCE INC. - PORTFOLIO MODULE
 * Interactive category filtering and LocalStorage persistence.
 */

document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterButtons.length || !projectCards.length) return;

  const applyFilter = (category) => {
    projectCards.forEach((card) => {
      const cardCategory = card.getAttribute('data-category');
      if (category === 'all' || cardCategory === category) {
        card.style.display = 'flex';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(16px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 250);
      }
    });

    filterButtons.forEach((btn) => {
      if (btn.getAttribute('data-filter') === category) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Save filter choice to LocalStorage
    if (window.DiScienceStorage) {
      window.DiScienceStorage.setPortfolioFilter(category);
    }
  };

  // Restore saved filter if available
  const savedFilter = window.DiScienceStorage ? window.DiScienceStorage.getPortfolioFilter() : 'all';
  applyFilter(savedFilter);

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetFilter = btn.getAttribute('data-filter');
      applyFilter(targetFilter);
    });
  });
});
