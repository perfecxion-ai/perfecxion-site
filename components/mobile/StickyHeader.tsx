'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

interface StickyHeaderProps {
  children: React.ReactNode
  hideOnScroll?: boolean
  threshold?: number
  className?: string
}

export default function StickyHeader({
  children,
  hideOnScroll = true,
  threshold = 5,
  className = ''
}: StickyHeaderProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isAtTop, setIsAtTop] = useState(true)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)
  const pathname = usePathname()

  useEffect(() => {
    // Always show header when route changes
    setIsVisible(true)
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    if (!hideOnScroll) return

    const updateHeader = () => {
      const currentScrollY = window.scrollY

      // Check if at top of page
      setIsAtTop(currentScrollY < 10)

      // Determine scroll direction and visibility
      if (currentScrollY < threshold) {
        // Always show when near top
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setIsVisible(true)
      }

      lastScrollY.current = currentScrollY
      ticking.current = false
    }

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateHeader)
        ticking.current = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hideOnScroll, threshold])

  return (
    <div
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-transform duration-300 ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        ${isAtTop ? '' : 'shadow-lg'}
        ${className}
      `}
    >
      {children}
    </div>
  )
}