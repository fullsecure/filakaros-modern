/**
 * Smooth scroll utility for anchor navigation
 */

export function smoothScrollTo(elementId: string, offset: number = 80) {
  const element = document.getElementById(elementId.replace('#', ''))
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

export function handleAnchorClick(
  event: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  onComplete?: () => void
) {
  // Only handle anchor links (starting with #)
  if (href.startsWith('#')) {
    event.preventDefault()
    smoothScrollTo(href)
    
    // Call completion callback after scroll animation
    if (onComplete) {
      setTimeout(onComplete, 800) // Approximate scroll duration
    }
    
    // Update URL without triggering navigation
    if (window.history && window.history.pushState) {
      window.history.pushState(null, '', href)
    }
  }
}

export function isAnchorLink(href: string): boolean {
  return href.startsWith('#')
}

export function getActiveSection(sections: string[]): string {
  const scrollPosition = window.scrollY + 100 // Offset for header

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = document.getElementById(sections[i])
    if (section && section.offsetTop <= scrollPosition) {
      return `#${sections[i]}`
    }
  }

  return sections[0] ? `#${sections[0]}` : ''
}

// Hook for tracking active section
export function useActiveSection(sections: string[]) {
  const [activeSection, setActiveSection] = React.useState('')

  React.useEffect(() => {
    const handleScroll = () => {
      const active = getActiveSection(sections)
      setActiveSection(active)
    }

    // Set initial active section
    handleScroll()

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sections])

  return activeSection
}

// React import for the hook
import * as React from 'react'
