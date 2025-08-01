'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface TouchGesturesProps {
  children: ReactNode
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
  onPullToRefresh?: () => Promise<void>
  threshold?: number
  className?: string
}

export default function TouchGestures({
  children,
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  onPullToRefresh,
  threshold = 50,
  className = ''
}: TouchGesturesProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null)
  const pullDistanceRef = useRef(0)
  const isPullingRef = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let rafId: number | null = null

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now()
      }

      // Check if we're at the top for pull-to-refresh
      if (onPullToRefresh && window.scrollY === 0) {
        isPullingRef.current = true
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartRef.current) return

      const touch = e.touches[0]
      const deltaY = touch.clientY - touchStartRef.current.y

      // Handle pull-to-refresh
      if (isPullingRef.current && deltaY > 0 && window.scrollY === 0) {
        e.preventDefault()
        pullDistanceRef.current = Math.min(deltaY * 0.5, 100)

        if (rafId) cancelAnimationFrame(rafId)
        rafId = requestAnimationFrame(() => {
          if (container) {
            container.style.transform = `translateY(${pullDistanceRef.current}px)`
            container.style.transition = 'none'
          }
        })
      }
    }

    const handleTouchEnd = async (e: TouchEvent) => {
      if (!touchStartRef.current) return

      const touch = e.changedTouches[0]
      const deltaX = touch.clientX - touchStartRef.current.x
      const deltaY = touch.clientY - touchStartRef.current.y
      const deltaTime = Date.now() - touchStartRef.current.time

      // Reset pull-to-refresh
      if (isPullingRef.current) {
        container.style.transform = ''
        container.style.transition = 'transform 0.3s ease-out'

        if (pullDistanceRef.current > 60 && onPullToRefresh) {
          // Show loading state
          container.classList.add('opacity-50')
          await onPullToRefresh()
          container.classList.remove('opacity-50')
        }

        isPullingRef.current = false
        pullDistanceRef.current = 0
      }

      // Detect swipe gestures (quick swipes only)
      if (deltaTime < 300) {
        const absX = Math.abs(deltaX)
        const absY = Math.abs(deltaY)

        if (absX > threshold && absX > absY) {
          // Horizontal swipe
          if (deltaX > 0 && onSwipeRight) {
            onSwipeRight()
          } else if (deltaX < 0 && onSwipeLeft) {
            onSwipeLeft()
          }
        } else if (absY > threshold && absY > absX) {
          // Vertical swipe
          if (deltaY > 0 && onSwipeDown) {
            onSwipeDown()
          } else if (deltaY < 0 && onSwipeUp) {
            onSwipeUp()
          }
        }
      }

      touchStartRef.current = null
    }

    const handleTouchCancel = () => {
      touchStartRef.current = null
      isPullingRef.current = false
      pullDistanceRef.current = 0
      container.style.transform = ''
      container.style.transition = 'transform 0.3s ease-out'
    }

    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('touchmove', handleTouchMove, { passive: false })
    container.addEventListener('touchend', handleTouchEnd, { passive: true })
    container.addEventListener('touchcancel', handleTouchCancel, { passive: true })

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('touchend', handleTouchEnd)
      container.removeEventListener('touchcancel', handleTouchCancel)
    }
  }, [onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, onPullToRefresh, threshold])

  return (
    <div ref={containerRef} className={`touch-none ${className}`}>
      {children}
    </div>
  )
}