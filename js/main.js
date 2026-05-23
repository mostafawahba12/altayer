/*
================================================================
   Al Tayer Events - Interactive Script
================================================================
*/

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Sticky Navbar Control
  const navbar = document.querySelector('.custom-navbar');
  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
  
  // 2. Active Page Link Selection (URL-based)
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.custom-nav-link');
  
  let pageFound = false;
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref && currentPath.includes(linkHref) && linkHref !== 'index.html' && linkHref !== '/') {
      link.classList.add('active');
      pageFound = true;
    } else {
      link.classList.remove('active');
    }
  });
  
  // Fallback for homepage
  if (!pageFound) {
    const homeLink = document.querySelector('.custom-nav-link[href="index.html"]') || document.querySelector('.custom-nav-link[href="/"]');
    if (homeLink) homeLink.classList.add('active');
  }

  // 3. Scroll Reveal Animations (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Reveal only once
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // 4. Interactive Scope Accordion Toggle
  const scopePanels = document.querySelectorAll('.scope-panel');
  if (scopePanels.length > 0) {
    scopePanels.forEach(panel => {
      panel.addEventListener('click', () => {
        // If clicked panel is already expanded, do nothing (keep it expanded)
        if (panel.classList.contains('expanded')) return;

        // Otherwise, collapse all panels
        scopePanels.forEach(p => p.classList.remove('expanded'));

        // Expand the clicked panel
        panel.classList.add('expanded');
      });
    });
  }

  // 5. Mobile Navbar Menu Toggle Animation
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', () => {
      navbarCollapse.classList.toggle('show');
    });

    // Close menu when clicking outside or clicking a link
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbarCollapse.classList.remove('show');
      });
    });
  }

  // 6. Testimonial Dot Navigation Interactivity
  const dotBtns = document.querySelectorAll('.testimonial-dot-btn');
  const testimonialCards = document.querySelectorAll('.testimonial-circle-card');
  if (dotBtns.length > 0 && testimonialCards.length > 0) {
    dotBtns.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        dotBtns.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        
        testimonialCards.forEach((card, cIndex) => {
          if (index === 0) {
            // First dot: Highlight cards 1 & 2
            if (cIndex === 2) {
              card.style.opacity = '0.35';
              card.style.transform = 'scale(0.93)';
            } else {
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            }
          } else {
            // Second dot: Highlight cards 2 & 3
            if (cIndex === 0) {
              card.style.opacity = '0.35';
              card.style.transform = 'scale(0.93)';
            } else {
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            }
          }
        });
      });
    });
  }

  // 7. Homepage Form Validation & Modal Trigger
  const homeForm = document.getElementById('homeContactForm');
  if (homeForm) {
    const homeInputs = homeForm.querySelectorAll('.contact-input[required]');
    const homeSuccessModal = new bootstrap.Modal(document.getElementById('homeSuccessModal'));

    const validateHomeInput = (input) => {
      if (input.checkValidity()) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        return true;
      } else {
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
        return false;
      }
    };

    homeInputs.forEach(input => {
      input.addEventListener('input', () => validateHomeInput(input));
      input.addEventListener('blur', () => validateHomeInput(input));
    });

    homeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isFormValid = true;
      homeInputs.forEach(input => {
        if (!validateHomeInput(input)) {
          isFormValid = false;
        }
      });

      if (isFormValid) {
        homeSuccessModal.show();
        homeForm.reset();
        
        homeInputs.forEach(input => {
          input.classList.remove('is-valid', 'is-invalid');
        });
      }
    });
  }
});
