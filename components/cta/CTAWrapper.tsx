'use client'

import React from 'react'
import PrimaryCTA from './PrimaryCTA'
import SecondaryCTA from './SecondaryCTA'
import { cn } from '@/lib/utils'

export interface CTAWrapperProps {
  primary: {
    text: string
    href?: string
    onClick?: () => void
    icon?: 'arrow' | 'calendar' | 'download' | 'file' | 'none'
    variant?: 'default' | 'gradient' | 'glow' | 'pulse'
    loading?: boolean
    disabled?: boolean
  }
  secondary?: {
    text: string
    href?: string
    onClick?: () => void
    icon?: 'arrow' | 'external' | 'info' | 'chevron' | 'play' | 'download' | 'none'
    variant?: 'outline' | 'ghost' | 'link' | 'subtle'
  }
  layout?: 'horizontal' | 'vertical' | 'inline'
  align?: 'left' | 'center' | 'right'
  spacing?: 'tight' | 'normal' | 'loose'
  className?: string
  primarySize?: 'sm' | 'md' | 'lg' | 'xl'
  secondarySize?: 'sm' | 'md' | 'lg'
  trackingPrefix?: string
  trackingData?: Record<string, any>
}

export default function CTAWrapper({
  primary,
  secondary,
  layout = 'horizontal',
  align = 'left',
  spacing = 'normal',
  className,
  primarySize = 'md',
  secondarySize = 'md',
  trackingPrefix = 'cta',
  trackingData,
}: CTAWrapperProps) {
  const layoutClasses = {
    horizontal: 'flex-row flex-wrap',
    vertical: 'flex-col',
    inline: 'inline-flex',
  }

  const alignClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  }

  const spacingClasses = {
    tight: 'gap-2',
    normal: 'gap-4',
    loose: 'gap-6',
  }

  const containerClasses = cn(
    'flex items-center',
    layoutClasses[layout],
    alignClasses[align],
    spacingClasses[spacing],
    className
  )

  return (
    <div className={containerClasses}>
      <PrimaryCTA
        {...primary}
        size={primarySize}
        trackingId={`${trackingPrefix}-primary`}
        trackingData={trackingData}
      />
      {secondary && (
        <SecondaryCTA
          {...secondary}
          size={secondarySize}
          trackingId={`${trackingPrefix}-secondary`}
          trackingData={trackingData}
        />
      )}
    </div>
  )
}

// Pre-configured CTA combinations for common use cases
export const CTAPresets = {
  bookDemo: {
    primary: {
      text: 'Book a Demo',
      href: '/demo',
      icon: 'calendar' as const,
      variant: 'gradient' as const,
    },
    secondary: {
      text: 'Watch Video',
      href: '#video',
      icon: 'play' as const,
      variant: 'ghost' as const,
    },
  },
  getQuote: {
    primary: {
      text: 'Get a Quote',
      href: '/quote',
      icon: 'arrow' as const,
    },
    secondary: {
      text: 'View Pricing',
      href: '/pricing',
      icon: 'info' as const,
      variant: 'link' as const,
    },
  },
  startTrial: {
    primary: {
      text: 'Start Free Trial',
      href: '/trial',
      icon: 'arrow' as const,
      variant: 'glow' as const,
    },
    secondary: {
      text: 'Compare Plans',
      href: '/pricing',
      icon: 'chevron' as const,
    },
  },
  downloadGuide: {
    primary: {
      text: 'Download Guide',
      href: '#download',
      icon: 'download' as const,
    },
    secondary: {
      text: 'Read Online',
      href: '#read',
      icon: 'file' as const,
      variant: 'subtle' as const,
    },
  },
  securityAssessment: {
    primary: {
      text: 'Book Security Assessment',
      href: '/assessment',
      icon: 'calendar' as const,
      variant: 'gradient' as const,
    },
    secondary: {
      text: 'Learn More',
      href: '/services/assessment',
      icon: 'arrow' as const,
    },
  },
  contactSales: {
    primary: {
      text: 'Contact Sales',
      href: '/contact/sales',
      icon: 'arrow' as const,
    },
    secondary: {
      text: 'Schedule a Call',
      href: '/demo',
      icon: 'calendar' as const,
      variant: 'outline' as const,
    },
  },
  apiAccess: {
    primary: {
      text: 'Get API Key',
      href: '/api/register',
      icon: 'arrow' as const,
      variant: 'glow' as const,
    },
    secondary: {
      text: 'View Documentation',
      href: '/docs/api',
      icon: 'external' as const,
      variant: 'link' as const,
    },
  },
}