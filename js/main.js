// Main JavaScript for Portfolio

document.addEventListener("DOMContentLoaded", () => {
  // Initialize preloader
  initPreloader()

  // Initialize mobile menu
  initMobileMenu()

  // Initialize scroll animations
  initScrollAnimations()

  // Initialize particles background
  initParticles()

  // Initialize skill bars animation
  initSkillBars()

  // Initialize back to top button
  initBackToTop()

  // Initialize header scroll effect
  initHeaderScroll()

  // Initialize smooth scrolling
  initSmoothScroll()
  
  // Initialize 3D effects
  init3DEffects()
})

// Preloader
function initPreloader() {
  const preloader = document.querySelector(".preloader")

  if (preloader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        preloader.style.opacity = "0"
        setTimeout(() => {
          preloader.style.display = "none"
          
          // Animate elements after preloader is gone
          document.querySelectorAll('.animate-on-load').forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('visible');
            }, 100 * index);
          });
        }, 500)
      }, 500) // Added delay for better effect
    })
  }
}

// Mobile Menu
function initMobileMenu() {
  const menuBtn = document.querySelector(".menu-btn")
  const navLinks = document.querySelector(".nav-links")

  if (menuBtn && navLinks) {
    let menuOpen = false

    menuBtn.addEventListener("click", () => {
      if (!menuOpen) {
        menuBtn.classList.add("open")
        navLinks.classList.add("open")
        document.body.style.overflow = "hidden"
        menuOpen = true
      } else {
        menuBtn.classList.remove("open")
        navLinks.classList.remove("open")
        document.body.style.overflow = "auto"
        menuOpen = false
      }
    })

    // Close menu when clicking on a link
    const links = navLinks.querySelectorAll("a")

    links.forEach((link) => {
      link.addEventListener("click", () => {
        menuBtn.classList.remove("open")
        navLinks.classList.remove("open")
        document.body.style.overflow = "auto"
        menuOpen = false
      })
    })
  }
}

// Scroll Animations
function initScrollAnimations() {
  // Animate elements on scroll
  const animateElements = document.querySelectorAll(".animate-on-scroll")

  if (animateElements.length > 0) {
    const checkScroll = () => {
      animateElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        if (elementTop < windowHeight * 0.8) {
          const animationClass = element.dataset.animation || "animate-fade-in-up"
          element.classList.add(animationClass)
        }
      })
    }

    window.addEventListener("scroll", checkScroll)
    checkScroll() // Check on load
  }

  // Animate featured items
  const featuredItems = document.querySelectorAll(".featured-item")

  if (featuredItems.length > 0) {
    const animateFeatured = () => {
      featuredItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("animate")
        }, 200 * index)
      })
    }

    const featuredSection = document.querySelector(".featured-projects")

    if (featuredSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateFeatured()
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.2 },
      )

      observer.observe(featuredSection)
    }
  }
}

// Particles Background
function initParticles() {
  if (document.getElementById("particles-js")) {
    // Check if particlesJS is a function before calling it
    if (typeof particlesJS === "function") {
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#b413ec",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#00ff9d",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      })
    } else {
      console.warn("particlesJS is not a function. Make sure the particles.js library is loaded correctly.")
    }
  }
}

// Skill Bars Animation
function initSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress")

  if (skillBars.length > 0) {
    const animateSkillBars = () => {
      skillBars.forEach((bar) => {
        const percent = bar.dataset.percent || bar.parentElement.dataset.percent
        bar.style.width = `${percent}%`
      })
    }

    const skillsSection = document.querySelector(".skills-section") || document.querySelector(".skills-summary")

    if (skillsSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateSkillBars()
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.2 },
      )

      observer.observe(skillsSection)
    } else {
      // If no skills section, animate on load
      window.addEventListener("load", animateSkillBars)
    }
  }
}

// Back to Top Button
function initBackToTop() {
  const backToTop = document.querySelector(".back-to-top")

  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTop.classList.add("active")
      } else {
        backToTop.classList.remove("active")
      }
    })

    backToTop.addEventListener("click", (e) => {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }
}

// Header Scroll Effect
function initHeaderScroll() {
  const header = document.querySelector("header")

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })
  }
}

// Smooth Scrolling
function initSmoothScroll() {
  const scrollLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])')

  scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()

      const targetId = link.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })
}

// 3D Effects
function init3DEffects() {
  // 3D tilt effect for cards
  const cards = document.querySelectorAll('.featured-card, .project-card, .service-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top; // y position within the element
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const deltaX = (x - centerX) / centerX * 10; // max 10 degrees
      const deltaY = (y - centerY) / centerY * 10; // max 10 degrees
      
      card.style.transform = `perspective(1000px) rotateX(${-deltaY}deg) rotateY(${deltaX}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      card.style.transition = 'transform 0.5s ease';
    });
  });
  
  // Parallax effect for geometric shapes
  const shapes = document.querySelectorAll('.geometric-shape');
  
  window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    shapes.forEach(shape => {
      const speed = shape.getAttribute('data-speed') || 0.05;
      const x = (mouseX - 0.5) * 100 * speed;
      const y = (mouseY - 0.5) * 100 * speed;
      
      shape.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
}

// Initialize FAQ accordions
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    });
  });
});

// Initialize image hover effects
document.addEventListener('DOMContentLoaded', function() {
  const profileImages = document.querySelectorAll('.image-wrapper');
  
  profileImages.forEach(wrapper => {
    wrapper.addEventListener('mousemove', (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const moveX = (x - centerX) / 10;
      const moveY = (y - centerY) / 10;
      
      wrapper.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    
    wrapper.addEventListener('mouseleave', () => {
      wrapper.style.transform = 'translate(0, 0)';
      wrapper.style.transition = 'transform 0.5s ease';
    });
  });
});
