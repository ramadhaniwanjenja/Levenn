// Utility function for smooth scrolling with header offset
export const scrollToSection = (href) => {
  setTimeout(() => {
    const element = document.querySelector(href)
    if (element) {
      const headerHeight = 80 // Account for sticky header
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    } else {
      console.log(`Element with selector ${href} not found`)
    }
  }, 100)
}

// Alternative method using scrollIntoView with offset
export const scrollToSectionAlt = (href) => {
  const element = document.querySelector(href)
  if (element) {
    const headerHeight = 80
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  } else {
    console.log(`Element with selector ${href} not found`)
  }
}
