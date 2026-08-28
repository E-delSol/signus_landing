document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuBtn = document.querySelector('.mobile-menu-btn')
  const mobileMenu = document.querySelector('.mobile-menu')

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden')
    })

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden')
      })
    })
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault()
      const target = document.querySelector(anchor.getAttribute('href'))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  })

  // Active nav link on scroll (IntersectionObserver)
  const sections = document.querySelectorAll('section[id]')
  const navLinks = document.querySelectorAll('.nav-link')

  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.classList.remove('border-b-2', 'border-primary-fixed')
              link.classList.add('text-outline-variant')
            })
            const activeLink = document.querySelector(
              `.nav-link[href="#${entry.target.id}"]`
            )
            if (activeLink) {
              activeLink.classList.add('border-b-2', 'border-primary-fixed')
              activeLink.classList.remove('text-outline-variant')
            }
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach((section) => observer.observe(section))
  }

  // Privacy accordion toggle
  const privacyToggle = document.getElementById('privacy-toggle')
  const privacyContent = document.getElementById('privacy-content')

  if (privacyToggle && privacyContent) {
    privacyToggle.addEventListener('click', () => {
      privacyContent.classList.toggle('hidden')
    })
  }
})
