// Mobile performance optimization utilities

// Lazy load images with Intersection Observer
export function setupImageLazyLoading() {
  if (typeof window === 'undefined') return

  const images = document.querySelectorAll('img[data-src]')
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement
        img.src = img.dataset.src!
        img.removeAttribute('data-src')
        imageObserver.unobserve(img)
      }
    })
  }, {
    rootMargin: '50px 0px', // Start loading 50px before entering viewport
  })

  images.forEach(img => imageObserver.observe(img))
}

// Progressive image loading with blur placeholder
export function loadProgressiveImage(
  lowQualitySrc: string,
  highQualitySrc: string,
  element: HTMLImageElement
) {
  const lowQualityImage = new Image()
  lowQualityImage.src = lowQualitySrc
  
  lowQualityImage.onload = () => {
    element.src = lowQualitySrc
    element.classList.add('blur-sm', 'scale-110')
    
    const highQualityImage = new Image()
    highQualityImage.src = highQualitySrc
    
    highQualityImage.onload = () => {
      element.src = highQualitySrc
      element.classList.remove('blur-sm', 'scale-110')
      element.classList.add('transition-all', 'duration-300')
    }
  }
}

// Debounce function for performance
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Throttle function for scroll events
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  }
}

// Detect if device is mobile
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false
  
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth < 768
}

// Detect if device has touch support
export function hasTouchSupport(): boolean {
  if (typeof window === 'undefined') return false
  
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

// Request idle callback with fallback
export function requestIdleCallbackShim(
  callback: IdleRequestCallback,
  options?: IdleRequestOptions
): number {
  if ('requestIdleCallback' in window) {
    return window.requestIdleCallback(callback, options)
  }
  
  // Fallback for browsers without requestIdleCallback
  const start = Date.now()
  return (window as any).setTimeout(() => {
    callback({
      didTimeout: false,
      timeRemaining: () => Math.max(0, 50 - (Date.now() - start))
    } as IdleDeadline)
  }, 1)
}

// Cancel idle callback with fallback
export function cancelIdleCallbackShim(handle: number): void {
  if ('cancelIdleCallback' in window) {
    window.cancelIdleCallback(handle)
  } else {
    clearTimeout(handle)
  }
}

// Optimize animations for mobile
export function optimizeAnimations() {
  if (typeof window === 'undefined') return
  
  // Reduce motion if user prefers
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  if (prefersReducedMotion) {
    document.documentElement.classList.add('reduce-motion')
  }
  
  // Disable animations on low-end devices
  if (isMobileDevice() && navigator.hardwareConcurrency <= 2) {
    document.documentElement.classList.add('low-performance')
  }
}

// Preload critical resources
export function preloadCriticalResources(resources: string[]) {
  if (typeof document === 'undefined') return
  
  resources.forEach(resource => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = resource
    
    // Determine resource type
    if (resource.endsWith('.css')) {
      link.as = 'style'
    } else if (resource.endsWith('.js')) {
      link.as = 'script'
    } else if (resource.match(/\.(jpg|jpeg|png|webp|avif)$/i)) {
      link.as = 'image'
    } else if (resource.match(/\.(woff|woff2)$/i)) {
      link.as = 'font'
      link.type = 'font/woff2'
      link.crossOrigin = 'anonymous'
    }
    
    document.head.appendChild(link)
  })
}

// Optimize form inputs for mobile
export function optimizeMobileInputs() {
  if (typeof document === 'undefined') return
  
  // Add appropriate input types and attributes
  const inputs = document.querySelectorAll('input, textarea')
  
  inputs.forEach((input: Element) => {
    const inputElement = input as HTMLInputElement | HTMLTextAreaElement
    
    // Prevent zoom on focus (iOS)
    inputElement.style.fontSize = '16px'
    
    // Add appropriate attributes based on type
    if (inputElement.type === 'email') {
      inputElement.autocomplete = 'email'
      inputElement.inputMode = 'email'
    } else if (inputElement.type === 'tel') {
      inputElement.autocomplete = 'tel'
      inputElement.inputMode = 'tel'
    } else if (inputElement.type === 'url') {
      inputElement.setAttribute('autocomplete', 'url')
      inputElement.inputMode = 'url'
    } else if (inputElement.type === 'number') {
      inputElement.inputMode = 'numeric'
    }
  })
}

// Service Worker registration for offline support
export async function registerServiceWorker() {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return
  
  try {
    const registration = await navigator.serviceWorker.register('/sw.js')
    console.log('Service Worker registered:', registration)
  } catch (error) {
    console.error('Service Worker registration failed:', error)
  }
}

// Network connection detection
export function getNetworkConnection(): 'slow' | 'fast' | 'unknown' {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return 'unknown'
  }
  
  const connection = (navigator as any).connection
  const effectiveType = connection?.effectiveType
  
  if (effectiveType === 'slow-2g' || effectiveType === '2g') {
    return 'slow'
  } else if (effectiveType === '3g') {
    return 'slow'
  } else if (effectiveType === '4g') {
    return 'fast'
  }
  
  return 'unknown'
}

// Adaptive loading based on network and device
export function shouldLoadHighQualityAssets(): boolean {
  const connection = getNetworkConnection()
  const deviceMemory = (navigator as any).deviceMemory || 4
  
  return connection === 'fast' && deviceMemory >= 4
}

// Initialize all mobile optimizations
export function initMobileOptimizations() {
  if (typeof window === 'undefined') return
  
  // Run optimizations when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setupImageLazyLoading()
      optimizeAnimations()
      optimizeMobileInputs()
    })
  } else {
    setupImageLazyLoading()
    optimizeAnimations()
    optimizeMobileInputs()
  }
  
  // Register service worker
  if ('serviceWorker' in navigator) {
    registerServiceWorker()
  }
}