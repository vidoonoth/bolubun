 const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navOverlay = document.getElementById('nav-overlay');

  menuToggle.addEventListener('click', function() {
    // Toggle menu slide
    navMenu.classList.toggle('translate-x-full');
    navMenu.classList.toggle('translate-x-0');
    
    // Toggle overlay
    navOverlay.classList.toggle('hidden');
    
    // Prevent body scroll when menu is open
    document.body.classList.toggle('overflow-hidden');
  });

  // Close menu when clicking overlay
  navOverlay.addEventListener('click', function() {
    navMenu.classList.add('translate-x-full');
    navMenu.classList.remove('translate-x-0');
    navOverlay.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  });