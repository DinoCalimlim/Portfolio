const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const backToTop = document.getElementById('backToTop');
const loadingOverlay = document.getElementById('loadingOverlay');
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks?.addEventListener('click', event => {
  if (event.target.tagName === 'A') {
    navLinks.classList.remove('open');
  }
});

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

contactForm?.addEventListener('submit', event => {
  event.preventDefault();
  formStatus.textContent = 'Thanks for your message! I will reply soon.';
  contactForm.reset();
  setTimeout(() => {
    formStatus.textContent = '';
  }, 5000);
});

window.addEventListener('load', () => {
  if (loadingOverlay) {
    loadingOverlay.classList.add('hidden');
    setTimeout(() => {
      loadingOverlay.remove();
    }, 600);
  }
});
