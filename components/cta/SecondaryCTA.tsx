'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Info, ChevronRight, Play, Download } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface SecondaryCTAProps {
  text: string
  href?: string
  onClick?: () => void
  size?: 'sm' | 'md' | 'lg'
  variant?: 'outline' | 'ghost' | 'link' | 'subtle'
  icon?: 'arrow' | 'external' | 'info' | 'chevron' | 'play' | 'download' | 'none'
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  className?: string
  target?: string
  rel?: string
  trackingId?: string
  trackingData?: Record<string, any>
}

export default function SecondaryCTA({
  text,
  href,
  onClick,
  size = 'md',
  variant = 'outline',
  icon = 'arrow',
  iconPosition = 'right',
  fullWidth = false,
  className,
  target,
  rel,
  trackingId,
  trackingData,
}: SecondaryCTAProps) {
  const sizeClasses = {
    sm: variant === 'link' ? 'text-sm' : 'px-3 py-1.5 text-sm',
    md: variant === 'link' ? 'text-base' : 'px-4 py-2 text-base',
    lg: variant === 'link' ? 'text-lg' : 'px-6 py-3 text-lg',
  }

  const variantClasses = {
    outline: 'border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20',
    ghost: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400',
    link: 'text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 underline-offset-4 hover:underline',
    subtle: 'text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-900/50',
  }

  const iconComponents = {
    arrow: ArrowRight,
    external: ExternalLink,
    info: Info,
    chevron: ChevronRight,
    play: Play,
    download: Download,
    none: null,
  }

  const Icon = iconComponents[icon]

  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none',
    variant !== 'link' && 'rounded-lg transform hover:scale-105 active:scale-100 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
    sizeClasses[size],
    variantClasses[variant],
    fullWidth && 'w-full',
    className
  )

  const handleClick = (e: React.MouseEvent) => {
    // Track CTA click with analytics
    if (trackingId && typeof window !== 'undefined') {
      // Fire custom event for analytics
      window.dispatchEvent(new CustomEvent('ctaClick', {
        detail: { 
          id: trackingId, 
          text, 
          href,
          type: 'secondary',
          variant,
          ...trackingData 
        }
      }))

      // Google Analytics tracking
      if (window.gtag) {
        window.gtag('event', 'cta_click', {
          cta_id: trackingId,
          cta_text: text,
          cta_type: 'secondary',
          cta_variant: variant,
          cta_destination: href,
          ...trackingData
        })
      }
    }

    if (onClick) {
      onClick()
    }
  }

  const iconClass = variant === 'link' ? 'h-4 w-4' : size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4'

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className={iconClass} />}
      <span>{text}</span>
      {Icon && iconPosition === 'right' && <Icon className={iconClass} />}
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
      aria-label={text}
    >
      {content}
    </button>
  )
}