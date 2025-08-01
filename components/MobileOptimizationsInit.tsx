'use client'

import { useEffect } from 'react'
import { initMobileOptimizations } from '@/lib/mobile-performance'

export default function MobileOptimizationsInit() {
  useEffect(() => {
    initMobileOptimizations()
  }, [])

  return null
}