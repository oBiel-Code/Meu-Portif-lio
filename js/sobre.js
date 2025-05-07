// Enhanced About Page JavaScript

document.addEventListener("DOMContentLoaded", () => {
    // Add 3D tilt effect to profile image
    const profileImage = document.querySelector(".img-border")
  
    if (profileImage) {
      profileImage.addEventListener("mousemove", function (e) {
        const rect = this.getBoundingClientRect()
        const x = e.clientX - rect.left // x position within the element
        const y = e.clientY - rect.top // y position within the element
  
        const centerX = rect.width / 2
        const centerY = rect.height / 2
  
        const deltaX = (x - centerX) / centerX
        const deltaY = (y - centerY) / centerY
  
        this.style.transform = `perspective(1000px) rotateY(${deltaX * 10}deg) rotateX(${-deltaY * 10}deg)`
      })
  
      profileImage.addEventListener("mouseleave", function () {
        this.style.transform = "perspective(1000px) rotateY(0) rotateX(0)"
      })
    }
  
    // Add scroll reveal for service cards
    const serviceCards = document.querySelectorAll(".service-card")
    const interestCards = document.querySelectorAll(".interest-card")
  
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
  
    serviceCards.forEach((card) => {
      observer.observe(card)
    })
  
    interestCards.forEach((card) => {
      observer.observe(card)
    })
  
    // Add interactive hover effects to service cards
    serviceCards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        const icon = this.querySelector(".service-icon")
        icon.style.transform = "rotateY(180deg)"
  
        setTimeout(() => {
          icon.style.transform = "rotateY(360deg)"
        }, 200)
      })
    })
  
    // Add interactive hover effects to info items
    const infoItems = document.querySelectorAll(".info-item")
  
    infoItems.forEach((item) => {
      item.addEventListener("mouseenter", function () {
        this.style.transform = "translateX(5px)"
      })
  
      item.addEventListener("mouseleave", function () {
        this.style.transform = "translateX(0)"
      })
    })
  
    // Add typing effect to about text
    const aboutText = document.querySelector(".about-text h2")
  
    if (aboutText) {
      const text = aboutText.textContent
      aboutText.textContent = ""
  
      let i = 0
      const typeWriter = () => {
        if (i < text.length) {
          aboutText.textContent += text.charAt(i)
          i++
          setTimeout(typeWriter, 50)
        }
      }
  
      // Start typing effect when element is in viewport
      const aboutTextObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(typeWriter, 500)
              aboutTextObserver.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.5 },
      )
  
      aboutTextObserver.observe(aboutText)
    }
  })
  