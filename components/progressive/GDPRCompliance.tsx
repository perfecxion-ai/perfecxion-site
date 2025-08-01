'use client'

import React, { useState, useEffect } from 'react'
import { Shield, Info, Check, X, Download, Trash2, Eye, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'
import { LeadProfile } from '@/lib/progressive-profiling'
import { useGDPRCompliance } from '@/lib/hooks/useGDPRCompliance'

interface GDPRComplianceProps {
  userProfile?: Partial<LeadProfile>
  onConsentChange?: (consent: GDPRConsent) => void
  onDataRequest?: (requestType: DataRequestType) => void
  showFullControls?: boolean
  variant?: 'banner' | 'modal' | 'settings' | 'inline'
  className?: string
}

interface GDPRConsent {
  necessary: boolean
  marketing: boolean
  analytics: boolean
  personalization: boolean
  thirdParty: boolean
  timestamp: Date
  ipAddress?: string
  userAgent?: string
}

type DataRequestType = 'access' | 'portability' | 'deletion' | 'rectification'

export default function GDPRCompliance({
  userProfile,
  onConsentChange,
  onDataRequest,
  showFullControls = false,
  variant = 'banner',
  className
}: GDPRComplianceProps) {
  const [showDetails, setShowDetails] = useState(false)
  const [consent, setConsent] = useState<GDPRConsent>({
    necessary: true, // Always required
    marketing: false,
    analytics: false,
    personalization: false,
    thirdParty: false,
    timestamp: new Date()
  })

  const {
    saveConsent,
    getStoredConsent,
    exportUserData,
    deleteUserData,
    getDataProcessingInfo,
    isGDPRRequired
  } = useGDPRCompliance()

  // Load existing consent on mount
  useEffect(() => {
    const existingConsent = getStoredConsent()
    if (existingConsent) {
      setConsent(existingConsent)
    }
  }, [getStoredConsent])

  // Handle consent changes
  const handleConsentChange = (category: keyof Omit<GDPRConsent, 'timestamp' | 'ipAddress' | 'userAgent'>, value: boolean) => {
    const newConsent = {
      ...consent,
      [category]: value,
      timestamp: new Date()
    }
    
    setConsent(newConsent)
    saveConsent(newConsent)
    onConsentChange?.(newConsent)
  }

  // Handle data requests
  const handleDataRequest = async (requestType: DataRequestType) => {
    try {
      switch (requestType) {
        case 'access':
        case 'portability':
          const userData = await exportUserData(userProfile?.email)
          if (userData) {
            const blob = new Blob([JSON.stringify(userData, null, 2)], { type: 'application/json' })
            const url = URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = `personal-data-${new Date().toISOString().split('T')[0]}.json`
            a.click()
            URL.revokeObjectURL(url)
          }
          break
        case 'deletion':
          if (confirm('Are you sure you want to delete all your personal data? This action cannot be undone.')) {
            await deleteUserData(userProfile?.email)
            alert('Your data deletion request has been submitted. Processing may take up to 30 days.')
          }
          break
        case 'rectification':
          alert('To update your personal information, please contact privacy@perfecxion.ai with your correction request.')
          break
      }
      
      onDataRequest?.(requestType)
    } catch (error) {
      console.error('Data request failed:', error)
      alert('Request failed. Please try again or contact support.')
    }
  }

  // Don't show if GDPR not required for this user
  if (!isGDPRRequired()) {
    return null
  }

  const consentCategories = [
    {
      key: 'necessary' as const,
      title: 'Necessary Cookies',
      description: 'Required for basic website functionality and security.',
      required: true,
      details: 'These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility.'
    },
    {
      key: 'marketing' as const,
      title: 'Marketing & Communications',
      description: 'Email marketing, product updates, and personalized offers.',
      required: false,
      details: 'We use this information to send you relevant product updates, security insights, and educational content about AI security.'
    },
    {
      key: 'analytics' as const,
      title: 'Analytics & Performance',
      description: 'Website usage analytics to improve our services.',
      required: false,
      details: 'We collect anonymous usage data to understand how visitors interact with our website and improve the user experience.'
    },
    {
      key: 'personalization' as const,
      title: 'Personalization',
      description: 'Customize content and recommendations based on your profile.',
      required: false,
      details: 'We personalize content recommendations, messaging, and resources based on your role, company size, and AI security interests.'
    },
    {
      key: 'thirdParty' as const,
      title: 'Third-Party Services',
      description: 'Integration with external services for enhanced functionality.',
      required: false,
      details: 'Includes services like CRM integration, company enrichment, and social media widgets. Data may be shared with trusted partners.'
    }
  ]

  if (variant === 'banner') {
    return (
      <div className={cn(
        'fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg',
        className
      )}>
        <div className="max-w-7xl mx-auto p-4">
          <div className="flex items-start gap-4">
            <Shield className="h-6 w-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" />
            
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                Privacy & Cookie Settings
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                We use cookies and similar technologies to provide, protect and improve our services. 
                By continuing, you consent to our use of these technologies.
              </p>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    handleConsentChange('marketing', true)
                    handleConsentChange('analytics', true)
                    handleConsentChange('personalization', true)
                  }}
                  className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Accept All
                </button>
                
                <button
                  onClick={() => setShowDetails(true)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Customize
                </button>
                
                <button
                  onClick={() => {
                    handleConsentChange('marketing', false)
                    handleConsentChange('analytics', false)
                    handleConsentChange('personalization', false)
                    handleConsentChange('thirdParty', false)
                  }}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                >
                  Reject Optional
                </button>
              </div>
            </div>
            
            <button
              onClick={() => setShowDetails(false)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'settings' || showDetails) {
    return (
      <div className={cn(
        variant === 'settings' ? 'bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6' : 
        'fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4',
        className
      )}>
        <div className={cn(
          variant === 'settings' ? '' : 'bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-auto'
        )}>
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Privacy & Data Control
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Manage your privacy preferences and data rights
                </p>
              </div>
            </div>
            
            {variant !== 'settings' && (
              <button
                onClick={() => setShowDetails(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X className="h-6 w-6" />
              </button>
            )}
          </div>

          {/* Consent Categories */}
          <div className="space-y-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Cookie & Data Processing Preferences
            </h3>
            
            {consentCategories.map(category => (
              <div key={category.key} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                        {category.title}
                      </h4>
                      {category.required && (
                        <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {category.description}
                    </p>
                    <details className="text-xs text-gray-500 dark:text-gray-500">
                      <summary className="cursor-pointer hover:text-gray-700 dark:hover:text-gray-300">
                        Learn more
                      </summary>
                      <p className="mt-2 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                        {category.details}
                      </p>
                    </details>
                  </div>
                  
                  <label className="relative inline-flex items-center cursor-pointer ml-4">
                    <input
                      type="checkbox"
                      checked={consent[category.key]}
                      onChange={(e) => handleConsentChange(category.key, e.target.checked)}
                      disabled={category.required}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                  </label>
                </div>
              </div>
            ))}
          </div>

          {/* Data Rights */}
          {showFullControls && (
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Your Data Rights
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => handleDataRequest('access')}
                  className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
                >
                  <Eye className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      Access Your Data
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Download a copy of your personal data
                    </p>
                  </div>
                </button>
                
                <button
                  onClick={() => handleDataRequest('portability')}
                  className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
                >
                  <Download className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      Data Portability
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Export your data in a portable format
                    </p>
                  </div>
                </button>
                
                <button
                  onClick={() => handleDataRequest('rectification')}
                  className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left"
                >
                  <Settings className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                      Correct Your Data
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Request corrections to your information
                    </p>
                  </div>
                </button>
                
                <button
                  onClick={() => handleDataRequest('deletion')}
                  className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors text-left"
                >
                  <Trash2 className="h-5 w-5 text-red-600 dark:text-red-400" />
                  <div>
                    <h4 className="text-sm font-semibold text-red-900 dark:text-red-300">
                      Delete Your Data
                    </h4>
                    <p className="text-xs text-red-700 dark:text-red-400">
                      Request deletion of your personal data
                    </p>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-2">
              <Info className="h-4 w-4" />
              <span>
                Last updated: {consent.timestamp.toLocaleDateString()}
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              For questions about our privacy practices, contact us at{' '}
              <a href="mailto:privacy@perfecxion.ai" className="text-primary-600 dark:text-primary-400 hover:underline">
                privacy@perfecxion.ai
              </a>
              . Read our full{' '}
              <a href="/privacy" className="text-primary-600 dark:text-primary-400 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    )
  }

  return null
}