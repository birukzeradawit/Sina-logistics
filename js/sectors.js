// Sectors page functionality
document.addEventListener('DOMContentLoaded', function() {
  const reveals = document.querySelectorAll('.reveal');
  const navItems = document.querySelectorAll('.nav-item');
  const sectorBlocks = document.querySelectorAll('.sector-block');
  
  // Reveal animations on scroll
  const revealOnScroll = () => {
    reveals.forEach(element => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const revealPoint = 150;
      
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('in');
      }
    });
  };
  
  // Initial check
  revealOnScroll();
  
  // Check on scroll
  window.addEventListener('scroll', revealOnScroll);
  
  // Smooth scroll for navigation
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 100;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        // Update active state
        navItems.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });
  
  // Update active nav item on scroll
  const updateActiveNav = () => {
    const scrollPosition = window.scrollY + 150;
    
    sectorBlocks.forEach((block, index) => {
      const blockTop = block.offsetTop;
      const blockBottom = blockTop + block.offsetHeight;
      
      if (scrollPosition >= blockTop && scrollPosition < blockBottom) {
        navItems.forEach(nav => nav.classList.remove('active'));
        navItems[index].classList.add('active');
      }
    });
  };
  
  window.addEventListener('scroll', updateActiveNav);
  
  // Initial active state
  updateActiveNav();
});