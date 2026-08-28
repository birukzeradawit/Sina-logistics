// Global animations and page transitions
document.addEventListener('DOMContentLoaded', function() {
  
  // Page transition on load
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  }, 100);
  
  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Enhanced scroll reveal with staggered timing
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add staggered delay based on element position
        const delay = index * 50;
        setTimeout(() => {
          entry.target.classList.add('in');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all reveal elements
  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });
  
  // Parallax effect for hero sections
  const heroSections = document.querySelectorAll('.hero, .page-hero');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    heroSections.forEach(hero => {
      if (scrolled < window.innerHeight) {
        const rate = scrolled * 0.3;
        hero.style.transform = `translateY(${rate}px)`;
      }
    });
  });
  
  // Smooth page transition on navigation
  const navLinks = document.querySelectorAll('a[href$=".html"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Check if it's an external link or same page
      const href = this.getAttribute('href');
      const isExternal = href.startsWith('http') || href.startsWith('//');
      const isSamePage = href.startsWith('#');
      
      if (!isExternal && !isSamePage) {
        e.preventDefault();
        
        // Fade out current page
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '0';
        
        // Navigate after transition
        setTimeout(() => {
          window.location.href = href;
        }, 300);
      }
    });
  });
  
  // Back to top button functionality
  const createBackToTop = () => {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Back to top');
    backToTop.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, var(--amber), var(--gold));
      color: var(--ink);
      border: none;
      border-radius: 50%;
      font-size: 24px;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 1000;
      box-shadow: 0 4px 20px rgba(0,0,0,0.2);
      font-weight: bold;
    `;
    
    document.body.appendChild(backToTop);
    
    // Show/hide based on scroll position
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 500) {
        backToTop.style.opacity = '1';
        backToTop.style.visibility = 'visible';
      } else {
        backToTop.style.opacity = '0';
        backToTop.style.visibility = 'hidden';
      }
    });
    
    // Scroll to top on click
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Hover effect
    backToTop.addEventListener('mouseenter', () => {
      backToTop.style.transform = 'scale(1.1)';
    });
    
    backToTop.addEventListener('mouseleave', () => {
      backToTop.style.transform = 'scale(1)';
    });
  };
  
  // Initialize back to top button
  createBackToTop();
  
  // Card hover effects enhancement
  const cards = document.querySelectorAll('.sp-card, .value-card, .why-item, .info-card, .sector-services');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
  
  // Image lazy loading with fade-in effect
  const images = document.querySelectorAll('img');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        
        img.onload = () => {
          img.style.opacity = '1';
        };
        
        // If already loaded
        if (img.complete) {
          img.style.opacity = '1';
        }
        
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => {
    imageObserver.observe(img);
  });
});