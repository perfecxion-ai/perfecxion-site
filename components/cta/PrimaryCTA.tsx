'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar, FileText, Download, ChevronRight, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface PrimaryCTAProps {
  text: string
  href?: string
  onClick?: () => void
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'gradient' | 'glow' | 'pulse'
  icon?: 'arrow' | 'calendar' | 'download' | 'file' | 'none'
  fullWidth?: boolean
  loading?: boolean
  disabled?: boolean
  className?: string
  target?: string
  rel?: string
  trackingId?: string
  trackingData?: Record<string, any>
}

export default function PrimaryCTA({
  text,
  href,
  onClick,
  size = 'md',
  variant = 'default',
  icon = 'arrow',
  fullWidth = false,
  loading = false,
  disabled = false,
  className,
  target,
  rel,
  trackingId,
  trackingData,
}: PrimaryCTAProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  }

  const variantClasses = {
    default: 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl',
    gradient: 'bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white shadow-lg hover:shadow-xl',
    glow: 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl hover:shadow-primary-500/25',
    pulse: 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl animate-pulse-slow',
  }

  const iconComponents = {
    arrow: ArrowRight,
    calendar: Calendar,
    download: Download,
    file: FileText,
    none: null,
  }

  const Icon = iconComponents[icon]

  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
    sizeClasses[size],
    variantClasses[variant],
    fullWidth && 'w-full',
    (disabled || loading) && 'opacity-50 cursor-not-allowed hover:scale-100',
    className
  )

  const handleClick = (e: React.MouseEvent) => {
    if (disabled || loading) {
      e.preventDefault()
      return
    }

    // Track CTA click with analytics
    if (trackingId && typeof window !== 'undefined') {
      // Fire custom event for analytics
      window.dispatchEvent(new CustomEvent('ctaClick', {
        detail: { 
          id: trackingId, 
          text, 
          href,
          type: 'primary',
          ...trackingData 
        }
      }))

      // Google Analytics tracking
      if (window.gtag) {
        window.gtag('event', 'cta_click', {
          cta_id: trackingId,
          cta_text: text,
          cta_type: 'primary',
          cta_destination: href,
          ...trackingData
        })
      }
    }

    if (onClick) {
      onClick()
    }
  }

  const content = (
    <>
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Processing...</span>
        </>
      ) : (
        <>
          <span>{text}</span>
          {Icon && <Icon className="h-5 w-5" />}
        </>
      )}
    </>
  )

  if (href && !onClick) {
    return (
      <Link
        href={href}
        className={baseClasses}
        onClick={handleClick}
        target={target}
        rel={rel}
        aria-label={text}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      type="button"
      className={baseClasses}
      onClick={handleClick}
      disabled={disabled || loading}
      aria-label={text}
      aria-busy={loading}
    >
      {content}
    </button>
  )
}

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}