import React from 'react'
import Image from 'next/image'
import { Shield, Lock, Award, CheckCircle, Globe, Scale } from 'lucide-react'

interface ComplianceBadge {
  id: string
  name: string
  description: string
  icon?: React.ElementType
  imageSrc?: string
  link?: string
  verified: boolean
}

const badges: ComplianceBadge[] = [
  {
    id: 'gdpr',
    name: 'GDPR Compliant',
    description: 'EU General Data Protection Regulation',
    icon: Globe,
    verified: true,
  },
  {
    id: 'ccpa',
    name: 'CCPA Compliant',
    description: 'California Consumer Privacy Act',
    icon: Shield,
    verified: true,
  },
  {
    id: 'soc2',
    name: 'SOC 2 Type II',
    description: 'Service Organization Control 2',
    icon: Award,
    verified: true,
  },
  {
    id: 'iso27001',
    name: 'ISO 27001',
    description: 'Information Security Management',
    icon: CheckCircle,
    verified: true,
  },
  {
    id: 'hipaa',
    name: 'HIPAA Compliant',
    description: 'Health Insurance Portability Act',
    icon: Lock,
    verified: true,
  },
  {
    id: 'nist',
    name: 'NIST Framework',
    description: 'National Institute of Standards',
    icon: Scale,
    verified: true,
  },
]

interface ComplianceBadgesProps {
  variant?: 'compact' | 'detailed'
  showAll?: boolean
  className?: string
}

export default function ComplianceBadges({ 
  variant = 'compact', 
  showAll = true,
  className = '' 
}: ComplianceBadgesProps) {
  const displayBadges = showAll ? badges : badges.slice(0, 4)

  if (variant === 'detailed') {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
        {displayBadges.map((badge) => {
          const Icon = badge.icon
          return (
            <div
              key={badge.id}
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                {Icon && (
                  <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                    <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                )}
                {badge.verified && (
                  <span className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                    Verified
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {badge.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {badge.description}
              </p>
            </div>
          )
        })}
      </div>
    )
  }

  // Compact variant
  return (
    <div className={`flex flex-wrap items-center gap-6 ${className}`}>
      {displayBadges.map((badge) => {
        const Icon = badge.icon
        return (
          <div
            key={badge.id}
            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
            title={badge.description}
          >
            {Icon && <Icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />}
            <span className="font-medium">{badge.name}</span>
            {badge.verified && (
              <CheckCircle className="h-4 w-4 text-green-500" />
            )}
          </div>
        )
      })}
    </div>
  )
}

// Trust signals component for displaying security features
export function TrustSignals({ className = '' }: { className?: string }) {
  const signals = [
    {
      icon: Lock,
      title: 'Bank-Level Security',
      description: '256-bit SSL encryption',
    },
    {
      icon: Shield,
      title: '99.9% Uptime SLA',
      description: 'Enterprise reliability',
    },
    {
      icon: Award,
      title: '24/7 Support',
      description: 'Expert assistance',
    },
    {
      icon: CheckCircle,
      title: 'Regular Audits',
      description: 'Third-party verified',
    },
  ]

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 ${className}`}>
      {signals.map((signal, index) => {
        const Icon = signal.icon
        return (
          <div
            key={index}
            className="text-center p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg"
          >
            <Icon className="h-8 w-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
              {signal.title}
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              {signal.description}
            </p>
          </div>
        )
      })}
    </div>
  )
}