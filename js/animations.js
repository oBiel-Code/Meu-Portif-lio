// Animations for the portfolio

document.addEventListener("DOMContentLoaded", () => {
  // Initialize typing effect
  initTypingEffect()

  // Initialize element animations
  initElementAnimations()

  // Initialize parallax effect
  initParallaxEffect()

  // Initialize hover effects
  initHoverEffects()

  // Initialize scroll animations
  initScrollAnimations()

  // Initialize text animations
  initTextAnimations()

  // Initialize image animations
  initImageAnimations()
  
  // Initialize advanced animations
  initAdvancedAnimations()
})

// Typing effect for titles
function initTypingEffect() {
  const titles = document.querySelectorAll(".animate-typing")

  titles.forEach((title) => {
    if (!title.dataset.processed) {
      const text = title.textContent
      title.textContent = ""
      title.dataset.processed = "true"

      let i = 0
      const speed = 80 // typing speed in milliseconds

      function typeWriter() {
        if (i < text.length) {
          title.textContent += text.charAt(i)
          i++
          setTimeout(typeWriter, speed)
        }
      }

      // Start typing when element is in viewport
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                typeWriter()
              }, 500) // Delay start for better effect
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.5 },
      )

      observer.observe(title)
    }
  })
}

// Animations for specific elements
function initElementAnimations() {
  // Social icons animation
  const socialIcons = document.querySelectorAll(".social-icon, .project-link")

  socialIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      const iconElement = icon.querySelector("i")
      if (iconElement) {
        iconElement.style.animation = "bounce 0.5s ease infinite alternate"
      }
    })

    icon.addEventListener("mouseleave", () => {
      const iconElement = icon.querySelector("i")
      if (iconElement) {
        iconElement.style.animation = ""
      }
    })
  })

  // Skill cards animation
  const skillCards = document.querySelectorAll(".skill-card, .soft-skill-card")

  skillCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const icon = card.querySelector(".skill-icon i, .soft-skill-icon i")
      if (icon) {
        icon.style.transform = "scale(1.2) rotateY(180deg)"
        icon.style.color = "var(--accent-green)"
        icon.style.transition = "all 0.5s ease"
      }
    })

    card.addEventListener("mouseleave", () => {
      const icon = card.querySelector(".skill-icon i, .soft-skill-icon i")
      if (icon) {
        icon.style.transform = "scale(1) rotateY(0)"
        icon.style.color = "var(--accent-purple)"
      }
    })
  })

  // Button animations
  const buttons = document.querySelectorAll(".btn")

  buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      btn.style.animation = "pulse 1s infinite alternate"
    })

    btn.addEventListener("mouseleave", () => {
      btn.style.animation = ""
    })
  })
  
  // Tool items animation
  const toolItems = document.querySelectorAll(".tool-item")
  
  toolItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const icon = item.querySelector(".tool-icon i")
      if (icon) {
        icon.style.transform = "scale(1.3) rotate(360deg)"
        icon.style.transition = "all 0.5s ease"
      }
    })
    
    item.addEventListener("mouseleave", () => {
      const icon = item.querySelector(".tool-icon i")
      if (icon) {
        icon.style.transform = "scale(1) rotate(0)"
      }
    })
  })
}

// Parallax effect
function initParallaxEffect() {
  const parallaxElements = document.querySelectorAll(
    ".home, .about-section, .skills-section, .education-section, .projects-section, .contact-section"
  )

  window.addEventListener("scroll", () => {
    parallaxElements.forEach((element) => {
      const scrollPosition = window.scrollY
      const elementPosition = element.offsetTop
      const distance = elementPosition - scrollPosition

      if (Math.abs(distance) < window.innerHeight * 1.5) {
        const parallaxOffset = distance * 0.05
        element.style.backgroundPositionY = `${parallaxOffset}px`
      }
    })
  })

  // Parallax for profile image
  const profileImage = document.querySelector(".image-wrapper")

  if (profileImage) {
    window.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX / window.innerWidth - 0.5
      const mouseY = e.clientY / window.innerHeight - 0.5

      profileImage.style.transform = `translate(${mouseX * 30}px, ${mouseY * 30}px)`
    })
  }
  
  // Parallax for section headers
  const sectionHeaders = document.querySelectorAll('.section-header');
  
  window.addEventListener('scroll', () => {
    sectionHeaders.forEach(header => {
      const scrollPosition = window.scrollY;
      const elementPosition = header.offsetTop;
      const distance = elementPosition - scrollPosition;
      
      if (Math.abs(distance) < window.innerHeight) {
        const title = header.querySelector('.title');
        const subtitle = header.querySelector('.subtitle');
        const separator = header.querySelector('.separator');
        
        if (title) title.style.transform = `translateY(${distance * 0.03}px)`;
        if (subtitle) subtitle.style.transform = `translateY(${distance * -0.02}px)`;
        if (separator) separator.style.transform = `translateX(${distance * 0.01}px)`;
      }
    });
  });
}

// Hover effects
function initHoverEffects() {
  // Navigation links hover effect
  const navLinks = document.querySelectorAll(".nav-links a")

  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.textShadow = "0 0 10px var(--accent-purple)"
    })

    link.addEventListener("mouseleave", () => {
      link.style.textShadow = "none"
    })
  })

  // Logo hover effect
  const logo = document.querySelector(".logo a")

  if (logo) {
    logo.addEventListener("mouseenter", () => {
      logo.style.textShadow = "0 0 20px var(--accent-purple)"
      logo.style.transform = "scale(1.1)"
    })

    logo.addEventListener("mouseleave", () => {
      logo.style.textShadow = "none"
      logo.style.transform = "scale(1)"
    })
  }

  // Profile image hover effect
  const imgBorder = document.querySelector(".img-border")

  if (imgBorder) {
    imgBorder.addEventListener("mouseenter", () => {
      const img = imgBorder.querySelector("img")
      if (img) {
        img.style.transform = "scale(1.05)"
      }
      imgBorder.style.boxShadow = "0 0 30px rgba(180, 19, 236, 0.5)"
    })

    imgBorder.addEventListener("mouseleave", () => {
      const img = imgBorder.querySelector("img")
      if (img) {
        img.style.transform = "scale(1)"
      }
      imgBorder.style.boxShadow = ""
    })
  }

  // Card hover effects with 3D tilt
  const cards = document.querySelectorAll(
    ".project-card, .service-card, .interest-card, .course-card, .certification-card, .contact-card"
  )

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const deltaX = (x - centerX) / centerX * 5; // max 5 degrees
      const deltaY = (y - centerY) / centerY * 5; // max 5 degrees
      
      card.style.transform = `perspective(1000px) rotateX(${-deltaY}deg) rotateY(${deltaX}deg) translateY(-10px)`;
      card.style.boxShadow = `0 15px 30px rgba(0, 0, 0, 0.3), 
                             ${deltaX * 2}px ${deltaY * 2}px 10px rgba(0, 0, 0, 0.1)`;
    });
    
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) rotateX(0) rotateY(0)";
      card.style.boxShadow = "var(--shadow-md)";
      card.style.transition = "all 0.5s ease";
    });
  });
}

// Scroll animations
function initScrollAnimations() {
  // Animate sections on scroll
  function animateSections() {
    const sections = document.querySelectorAll("section")

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (sectionTop < windowHeight * 0.75) {
        section.classList.add("animate-section")
      }
    })
  }

  // Add event listener for scroll
  window.addEventListener("scroll", animateSections)

  // Call once on load to animate visible sections
  window.addEventListener("load", animateSections)

  // Animate timeline items
  const timelineItems = document.querySelectorAll(".timeline-item")

  timelineItems.forEach((item, index) => {
    item.style.opacity = "0"
    item.style.transform = "translateY(50px)"
    item.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    item.style.transitionDelay = `${index * 0.2}s`

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            item.style.opacity = "1"
            item.style.transform = "translateY(0)"
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    observer.observe(item)
  })
  
  // Animate cards with staggered effect
  const cardContainers = document.querySelectorAll('.services-grid, .soft-skills-grid, .tools-grid, .projects-grid');
  
  cardContainers.forEach(container => {
    const cards = container.querySelectorAll('.service-card, .soft-skill-card, .tool-item, .project-card');
    
    cards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      card.style.transitionDelay = `${index * 0.1}s`;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      observer.observe(card);
    });
  });
}

// Text animations
function initTextAnimations() {
  // Highlight text animation
  const highlights = document.querySelectorAll(".highlight")

  highlights.forEach((highlight) => {
    highlight.style.position = "relative"

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            highlight.classList.add("animate-neon")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(highlight)
  })

  // Section titles animation
  const sectionTitles = document.querySelectorAll(".section-header .title")

  sectionTitles.forEach((title) => {
    title.style.opacity = "0"
    title.style.transform = "translateY(30px)"
    title.style.transition = "opacity 0.5s ease, transform 0.5s ease"

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            title.style.opacity = "1"
            title.style.transform = "translateY(0)"
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(title)
  })
  
  // Animate text paragraphs with staggered effect
  const textContainers = document.querySelectorAll('.about-text, .contact-info, .skills-text');
  
  textContainers.forEach(container => {
    const paragraphs = container.querySelectorAll('p');
    
    paragraphs.forEach((paragraph, index) => {
      paragraph.style.opacity = "0";
      paragraph.style.transform = "translateY(20px)";
      paragraph.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      paragraph.style.transitionDelay = `${index * 0.2}s`;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              paragraph.style.opacity = "1";
              paragraph.style.transform = "translateY(0)";
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      
      observer.observe(paragraph);
    });
  });
}

// Image animations
function initImageAnimations() {
  // Project images animation
  const projectImages = document.querySelectorAll(".project-img, .featured-img")

  projectImages.forEach((imgContainer) => {
    const img = imgContainer.querySelector("img")

    if (img) {
      imgContainer.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.1)"
        img.style.filter = "brightness(1.1) contrast(1.1)"
      })

      imgContainer.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)"
        img.style.filter = "brightness(1) contrast(1)"
      })
    }
  })

  // Profile image animation
  const profileImg = document.querySelector(".home-image img")

  if (profileImg) {
    profileImg.style.animation = "float 4s ease-in-out infinite"
  }
  
  // Image border glow effect
  const imageBorders = document.querySelectorAll('.img-border, .image-wrapper');
  
  imageBorders.forEach(border => {
    border.addEventListener('mouseenter', () => {
      border.classList.add('animate-border-glow');
    });
    
    border.addEventListener('mouseleave', () => {
      border.classList.remove('animate-border-glow');
    });
  });
}

// Advanced animations
function initAdvancedAnimations() {
  // 3D geometric shapes animation
  const shapes = document.querySelectorAll('.geometric-shape');
  
  shapes.forEach(shape => {
    shape.addEventListener('mouseenter', () => {
      const cube = shape.querySelector('.cube');
      const pyramid = shape.querySelector('.pyramid');
      const sphere = shape.querySelector('.sphere');
      const torus = shape.querySelector('.torus');
      
      if (cube) cube.style.animation = 'cube-spin 8s linear infinite';
      if (pyramid) pyramid.style.animation = 'pyramid-spin 8s linear infinite';
      if (sphere) sphere.style.animation = 'sphere-pulse 2s ease-in-out infinite';
      if (torus) torus.style.animation = 'torus-spin 10s linear infinite';
    });
    
    shape.addEventListener('mouseleave', () => {
      const cube = shape.querySelector('.cube');
      const pyramid = shape.querySelector('.pyramid');
      const sphere = shape.querySelector('.sphere');
      const torus = shape.querySelector('.torus');
      
      if (cube) cube.style.animation = 'cube-spin 15s linear infinite';
      if (pyramid) pyramid.style.animation = 'pyramid-spin 12s linear infinite';
      if (sphere) sphere.style.animation = 'sphere-pulse 4s ease-in-out infinite';
      if (torus) torus.style.animation = 'torus-spin 20s linear infinite';
    });
  });
  
  // Animated background gradients
  const gradientElements = document.querySelectorAll('.home::before, .about-section::before, .skills-section::before');
  
  gradientElements.forEach(element => {
    element.style.animation = 'gradientShift 10s ease infinite alternate';
  });
  
  // Scroll indicator animation
  const scrollIndicator = document.querySelector(".scroll-indicator")

  if (scrollIndicator) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        scrollIndicator.style.opacity = "0"
        scrollIndicator.style.transform = "translateX(-50%) translateY(20px)"
      } else {
        scrollIndicator.style.opacity = "1"
        scrollIndicator.style.transform = "translateX(-50%) translateY(0)"
      }
    })
  }
  
  // Animate skill bars with gradient movement
  const skillBars = document.querySelectorAll('.skill-progress');
  
  skillBars.forEach(bar => {
    bar.style.backgroundSize = '200% 100%';
    bar.style.animation = 'gradientShift 3s linear infinite';
  });
}
