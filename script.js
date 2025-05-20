document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
              
              // Close mobile menu if open
              if (nav.classList.contains('active')) {
                  toggleMobileMenu();
              }
          }
      });
  });

  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('.nav-links li');
  
  function toggleMobileMenu() {
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
  }
  
  hamburger.addEventListener('click', toggleMobileMenu);
  
  navLinks.forEach(link => {
      link.addEventListener('click', toggleMobileMenu);
  });

  // Project filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Update active button
          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          
          const filterValue = button.getAttribute('data-filter');
          
          // Filter projects
          projectCards.forEach(card => {
              if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                  card.style.display = 'block';
              } else {
                  card.style.display = 'none';
              }
          });
      });
  });

  // Project image slider
  const projectsWithMultipleImages = document.querySelectorAll('.project-images');
  
  projectsWithMultipleImages.forEach(project => {
      const images = project.querySelectorAll('img');
      if (images.length > 1) {
          let currentImageIndex = 0;
          
          // Show first image initially
          images.forEach((img, index) => {
              img.style.display = index === 0 ? 'block' : 'none';
          });
          
          // Set interval to cycle through images
          setInterval(() => {
              images[currentImageIndex].style.display = 'none';
              currentImageIndex = (currentImageIndex + 1) % images.length;
              images[currentImageIndex].style.display = 'block';
          }, 3000);
      }
  });

  // Form submission
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Get form values
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const subject = document.getElementById('subject').value;
          const message = document.getElementById('message').value;
          
          // Here you would typically send the form data to a server
          // For demonstration, we'll just show an alert
          alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
          
          // Reset form
          contactForm.reset();
      });
  }

  // Scroll reveal animation
  const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 1000,
      delay: 200,
      reset: true
  });

  sr.reveal('.hero-text, .hero-image, .section-title', { origin: 'top' });
  sr.reveal('.about-image, .about-text', { origin: 'left' });
  sr.reveal('.skills-category, .project-card, .contact-info, .contact-form', { interval: 200 });

  // Active section highlighting in navigation
  const sections = document.querySelectorAll('section');
  
  window.addEventListener('scroll', () => {
      let current = '';
      
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          
          if (pageYOffset >= (sectionTop - 200)) {
              current = section.getAttribute('id');
          }
      });
      
      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.querySelector('a').getAttribute('href') === `#${current}`) {
              link.classList.add('active');
          }
      });
  });

  // Tech icons animation in hero section
  const techIcons = document.querySelectorAll('.tech-icons i');
  
  techIcons.forEach((icon, index) => {
      // Random initial position and delay
      const delay = index * 0.1;
      const x = (Math.random() * 20) - 10;
      const y = (Math.random() * 20) - 10;
      
      icon.style.transform = `translate(${x}px, ${y}px)`;
      icon.style.transition = `all 0.5s ease ${delay}s`;
      
      // Animate to final position
      setTimeout(() => {
          icon.style.transform = 'translate(0, 0)';
      }, 100);
      
      // Add hover effect
      icon.addEventListener('mouseover', () => {
          icon.style.transform = 'scale(1.2)';
      });
      
      icon.addEventListener('mouseout', () => {
          icon.style.transform = 'scale(1)';
      });
  });

  // Add animation to buttons
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
      button.addEventListener('mouseover', () => {
          button.style.transform = 'translateY(-3px)';
          button.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
      });
      
      button.addEventListener('mouseout', () => {
          button.style.transform = 'translateY(0)';
          button.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
    // Project filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});


    document.addEventListener('DOMContentLoaded', function() {
        const certificateIcons = document.querySelectorAll('.certificate-icon');
        const modal = document.querySelector('.certificate-modal');
        const modalImage = document.querySelector('.certificate-image');
        const closeModal = document.querySelector('.close-modal');
        const modalOverlay = document.querySelector('.modal-overlay');
        
        certificateIcons.forEach(icon => {
            icon.addEventListener('click', function() {
                const imagePath = this.getAttribute('data-image');
                modalImage.src = imagePath;
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        });
        
        closeModal.addEventListener('click', closeModalFunction);
        modalOverlay.addEventListener('click', closeModalFunction);
        
        function closeModalFunction() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        // Close with ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                closeModalFunction();
            }
        });
    });
// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Toggle body scroll when menu is open
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    });
});


    

