// Contact form functionality

document.addEventListener("DOMContentLoaded", () => {
  // Initialize contact form
  initContactForm()

  // Initialize FAQ accordions
  initFAQAccordions()

  // Initialize map interactions
  initMapInteractions()

  // Initialize contact card animations
  initContactCardAnimations()
})

// Contact form validation and submission
function initContactForm() {
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value.trim()
      const email = document.getElementById("email").value.trim()
      const subject = document.getElementById("subject").value.trim()
      const message = document.getElementById("message").value.trim()

      // Validate form
      if (name === "" || email === "" || subject === "" || message === "") {
        showFormMessage("Por favor, preencha todos os campos.", "error")
        return
      }

      if (!isValidEmail(email)) {
        showFormMessage("Por favor, insira um email válido.", "error")
        return
      }

      // Simulate form submission
      const submitButton = contactForm.querySelector(".form-submit")
      const originalButtonText = submitButton.innerHTML

      submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...'
      submitButton.disabled = true

      // Simulate API call with timeout
      setTimeout(() => {
        showFormMessage("Mensagem enviada com sucesso! Entrarei em contato em breve.", "success")
        contactForm.reset()

        submitButton.innerHTML = originalButtonText
        submitButton.disabled = false
      }, 2000)
    })
  }
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Show form message
function showFormMessage(message, type) {
  const messageElement = document.querySelector(".form-message")

  if (messageElement) {
    messageElement.textContent = message
    messageElement.className = "form-message"
    messageElement.classList.add(type)

    // Auto hide message after 5 seconds
    setTimeout(() => {
      messageElement.style.opacity = "0"
      setTimeout(() => {
        messageElement.style.display = "none"
        messageElement.style.opacity = "1"
      }, 500)
    }, 5000)
  }
}

// FAQ accordions
function initFAQAccordions() {
  const faqItems = document.querySelectorAll(".faq-item")

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question")

    question.addEventListener("click", () => {
      // Close all other items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active")
        }
      })

      // Toggle current item
      item.classList.toggle("active")
    })
  })
}

// Map interactions
function initMapInteractions() {
  const mapContainer = document.querySelector(".map-container")

  if (mapContainer) {
    mapContainer.addEventListener("mouseenter", () => {
      const iframe = mapContainer.querySelector("iframe")
      if (iframe) {
        iframe.style.filter = "grayscale(0) contrast(1)"
      }
      mapContainer.style.transform = "scale(1.01)"
      mapContainer.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.3)"
    })

    mapContainer.addEventListener("mouseleave", () => {
      const iframe = mapContainer.querySelector("iframe")
      if (iframe) {
        iframe.style.filter = "grayscale(0.8) contrast(1.2)"
      }
      mapContainer.style.transform = "scale(1)"
      mapContainer.style.boxShadow = "var(--shadow-lg)"
    })
  }
}

// Contact card animations
function initContactCardAnimations() {
  const contactCards = document.querySelectorAll(".contact-card")

  contactCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const icon = card.querySelector(".contact-card-icon i")
      if (icon) {
        icon.style.transform = "rotateY(180deg)"
        icon.style.color = "var(--accent-green)"
      }
    })

    card.addEventListener("mouseleave", () => {
      const icon = card.querySelector(".contact-card-icon i")
      if (icon) {
        icon.style.transform = "rotateY(0)"
        icon.style.color = "var(--accent-purple)"
      }
    })

    // Add hover effect for social links
    const socialLinks = document.querySelectorAll(".social-link")

    socialLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        const icon = link.querySelector("i")
        if (icon) {
          icon.style.transform = "scale(1.2)"
        }
      })

      link.addEventListener("mouseleave", () => {
        const icon = link.querySelector("i")
        if (icon) {
          icon.style.transform = "scale(1)"
        }
      })
    })
  })
}
