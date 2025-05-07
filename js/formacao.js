// Enhanced Formação Page JavaScript

document.addEventListener("DOMContentLoaded", () => {
    // Add scroll reveal for timeline items
    const timelineItems = document.querySelectorAll(".timeline-item")
    const courseCards = document.querySelectorAll(".course-card")
    const certificationCards = document.querySelectorAll(".certification-card")
  
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal")
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)
  
    timelineItems.forEach((item) => {
      observer.observe(item)
    })
  
    courseCards.forEach((card) => {
      observer.observe(card)
    })
  
    certificationCards.forEach((card) => {
      observer.observe(card)
    })
  
    // Add hover effects to timeline dots
    timelineItems.forEach((item) => {
      const dot = item.querySelector(".timeline-dot")
  
      item.addEventListener("mouseenter", () => {
        dot.style.transform = "translateX(-50%) scale(1.2)"
        dot.style.background = "var(--accent-green)"
        dot.style.boxShadow = "0 0 15px var(--accent-green)"
      })
  
      item.addEventListener("mouseleave", () => {
        dot.style.transform = "translateX(-50%) scale(1)"
        dot.style.background = "var(--accent-purple)"
        dot.style.boxShadow = "0 0 10px var(--accent-purple)"
      })
    })
  
    // Add interactive hover effects to course cards
    courseCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        const icon = this.querySelector(".course-icon")
        icon.style.transform = "scale(1.1)"
      })
  
      card.addEventListener("mouseleave", function () {
        const icon = this.querySelector(".course-icon")
        icon.style.transform = "scale(1)"
      })
    })
  
    // Fix any layout issues on mobile
    function checkMobileLayout() {
      if (window.innerWidth <= 992) {
        // Adjust timeline for mobile
        document.querySelectorAll(".timeline-content").forEach((content) => {
          content.style.width = "100%"
        })
      } else {
        // Reset for desktop
        document.querySelectorAll(".timeline-content").forEach((content) => {
          content.style.width = "calc(50% - 50px)"
        })
      }
    }
  
    // Run on load and resize
    checkMobileLayout()
    window.addEventListener("resize", checkMobileLayout)
  })
  