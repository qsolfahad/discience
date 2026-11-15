/**
 * DISCIENCE INC. - CONTACT FORM MODULE
 * Real-time form validation, LocalStorage persistence, and submission management.
 */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('discienceContactForm');
  const alertSuccess = document.getElementById('contactSuccessAlert');
  const alertError = document.getElementById('contactErrorAlert');
  const inquiriesListContainer = document.getElementById('inquiriesList');
  const toggleInquiriesBtn = document.getElementById('toggleInquiriesBtn');

  if (!contactForm) return;

  const fields = {
    fullName: document.getElementById('fullName'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    subject: document.getElementById('subject'),
    message: document.getElementById('message')
  };

  // Helper validation functions
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateField = (input, condition) => {
    if (!condition) {
      input.classList.add('is-invalid');
      return false;
    } else {
      input.classList.remove('is-invalid');
      return true;
    }
  };

  // Render stored submissions
  const renderStoredInquiries = () => {
    if (!inquiriesListContainer || !window.DiScienceStorage) return;
    const inquiries = window.DiScienceStorage.getInquiries();

    if (inquiries.length === 0) {
      inquiriesListContainer.innerHTML = '<p style="color: var(--text-secondary); font-size: 0.875rem;">No local inquiries saved yet.</p>';
      return;
    }

    inquiriesListContainer.innerHTML = inquiries.map((item) => `
      <div class="inquiry-item">
        <div class="inquiry-meta">
          <span><strong>${escapeHtml(item.fullName)}</strong> (${escapeHtml(item.email)})</span>
          <span>${new Date(item.submittedAt).toLocaleDateString()}</span>
        </div>
        <div style="font-weight: 600; color: var(--primary-navy); margin-bottom: 2px;">Subject: ${escapeHtml(item.subject)}</div>
        <p style="color: var(--text-secondary); line-height: 1.4;">${escapeHtml(item.message)}</p>
      </div>
    `).join('');
  };

  const escapeHtml = (str) => {
    return String(str).replace(/[&<>"']/g, (m) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[m]));
  };

  if (toggleInquiriesBtn) {
    toggleInquiriesBtn.addEventListener('click', () => {
      if (inquiriesListContainer) {
        inquiriesListContainer.classList.toggle('is-expanded');
        renderStoredInquiries();
      }
    });
  }

  // Live input validation
  if (fields.fullName) {
    fields.fullName.addEventListener('input', () => {
      validateField(fields.fullName, fields.fullName.value.trim().length >= 2);
    });
  }

  if (fields.email) {
    fields.email.addEventListener('input', () => {
      validateField(fields.email, validateEmail(fields.email.value.trim()));
    });
  }

  if (fields.subject) {
    fields.subject.addEventListener('input', () => {
      validateField(fields.subject, fields.subject.value.trim().length >= 3);
    });
  }

  if (fields.message) {
    fields.message.addEventListener('input', () => {
      validateField(fields.message, fields.message.value.trim().length >= 10);
    });
  }

  // Form submission handler
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateField(fields.fullName, fields.fullName.value.trim().length >= 2);
    const isEmailValid = validateField(fields.email, validateEmail(fields.email.value.trim()));
    const isSubjectValid = validateField(fields.subject, fields.subject.value.trim().length >= 3);
    const isMsgValid = validateField(fields.message, fields.message.value.trim().length >= 10);

    if (!isNameValid || !isEmailValid || !isSubjectValid || !isMsgValid) {
      if (alertError) {
        alertError.style.display = 'block';
        alertError.textContent = 'Please fill out all required fields with valid information.';
      }
      return;
    }

    if (alertError) alertError.style.display = 'none';

    // Prepare record
    const inquiryData = {
      fullName: fields.fullName.value.trim(),
      email: fields.email.value.trim(),
      phone: fields.phone ? fields.phone.value.trim() : '',
      subject: fields.subject.value.trim(),
      message: fields.message.value.trim()
    };

    // Save to LocalStorage
    if (window.DiScienceStorage) {
      const saved = window.DiScienceStorage.saveInquiry(inquiryData);
      if (saved) {
        if (alertSuccess) {
          alertSuccess.style.display = 'block';
          alertSuccess.innerHTML = `
            <strong>Thank you! We have received your submission.</strong><br>
            <span style="font-size: 0.8125rem;">Your inquiry has been successfully stored in your browser's LocalStorage. Please note that this is a static frontend deployment and data is saved locally on your device rather than sent over an email server.</span>
          `;
        }
        contactForm.reset();
        renderStoredInquiries();
      } else {
        if (alertError) {
          alertError.style.display = 'block';
          alertError.textContent = 'Unable to save inquiry to browser storage. LocalStorage may be disabled or full.';
        }
      }
    }
  });

  renderStoredInquiries();
});
