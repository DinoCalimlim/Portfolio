const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const backToTop = document.getElementById('backToTop');
const loadingOverlay = document.getElementById('loadingOverlay');
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

// Mobile Navigation Toggle
navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  
  // Switch icon between hamburger (☰) and close (✕)
  if (isOpen) {
    navToggle.textContent = '✕';
    navToggle.setAttribute('aria-label', 'Close navigation menu');
  } else {
    navToggle.textContent = '☰';
    navToggle.setAttribute('aria-label', 'Open navigation menu');
  }
});

// Close mobile menu automatically when a link is clicked
navLinks?.addEventListener('click', event => {
  if (event.target.tagName === 'A') {
    navLinks.classList.remove('open');
    if (navToggle) {
      navToggle.textContent = '☰';
      navToggle.setAttribute('aria-label', 'Open navigation menu');
    }
  }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach(element => revealObserver.observe(element));

// Timeline Accordion Setup
function setupTimelineAccordion() {
  document.querySelectorAll('.timeline-content[role="button"]').forEach(content => {
    if (content.dataset.accordionBound) return;
    content.dataset.accordionBound = 'true';

    const toggle = () => {
      const isOpen = content.classList.toggle('open');
      content.setAttribute('aria-expanded', String(isOpen));
    };

    content.addEventListener('click', toggle);
    content.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggle();
      }
    });
  });
}

setupTimelineAccordion();

// Back to Top Button
window.addEventListener('scroll', () => {
  if (window.scrollY > 600) {
    backToTop?.classList.add('show');
  } else {
    backToTop?.classList.remove('show');
  }
});

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact Form Handler
contactForm?.addEventListener('submit', event => {
  event.preventDefault();
  if (formStatus) {
    formStatus.textContent = 'Thanks for your message! I will reply soon.';
  }
  contactForm.reset();
  setTimeout(() => {
    if (formStatus) {
      formStatus.textContent = '';
    }
  }, 5000);
});

// Loading Overlay Remover
window.addEventListener('load', () => {
  if (loadingOverlay) {
    loadingOverlay.classList.add('hidden');
    setTimeout(() => {
      loadingOverlay.remove();
    }, 600);
  }
});