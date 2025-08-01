'use client'

import React, { useState } from 'react'
import { X, Cookie, Settings2, Shield, ChevronDown, ChevronUp } from 'lucide-react'
import { useCookieConsent } from '@/lib/contexts/CookieConsentContext'
import Link from 'next/link'

export default function CookieConsentBanner() {
  const {
    preferences,
    showBanner,
    updatePreferences,
    acceptAll,
    rejectAll,
    savePreferences,
  } = useCookieConsent()

  const [showDetails, setShowDetails] = useState(false)

  if (!showBanner) return null

  const cookieTypes = [
    {
      id: 'necessary',
      name: 'Necessary Cookies',
      description: 'Essential for the website to function properly. These cannot be disabled.',
      icon: Shield,
      required: true,
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website to improve user experience.',
      icon: Cookie,
      required: false,
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'Used to track visitors across websites to display relevant advertisements.',
      icon: Cookie,
      required: false,
    },
    {
      id: 'functional',
      name: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization, such as remembering preferences.',
      icon: Settings2,
      required: false,
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-2xl">
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="flex flex-col gap-4">
          {/* Main Banner Content */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Cookie className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Cookie Preferences
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                We use cookies to enhance your experience, analyze site traffic, and for marketing purposes. 
                You can customize your preferences or accept all cookies. Read our{' '}
                <Link href="/privacy" className="text-primary-600 dark:text-primary-400 hover:underline">
                  Privacy Policy
                </Link>{' '}
                for more information.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors flex items-center justify-center gap-2"
                aria-expanded={showDetails}
              >
                <Settings2 className="h-4 w-4" />
                Manage Preferences
                {showDetails ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
              <button
                onClick={rejectAll}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>

          {/* Detailed Preferences */}
          {showDetails && (
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-2">
              <div className="grid gap-4 mb-4">
                {cookieTypes.map(type => {
                  const Icon = type.icon
                  const isChecked = preferences[type.id as keyof typeof preferences]
                  
                  return (
                    <div key={type.id} className="flex items-start gap-3">
                      <div className="flex items-center mt-0.5">
                        <input
                          type="checkbox"
                          id={`cookie-${type.id}`}
                          checked={isChecked}
                          disabled={type.required}
                          onChange={(e) => updatePreferences({ [type.id]: e.target.checked })}
                          className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                      </div>
                      <div className="flex-1">
                        <label
                          htmlFor={`cookie-${type.id}`}
                          className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white cursor-pointer"
                        >
                          <Icon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          {type.name}
                          {type.required && (
                            <span className="text-xs text-gray-500 dark:text-gray-400">(Required)</span>
                          )}
                        </label>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={savePreferences}
                  className="px-6 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Accessibility: Close button for keyboard users */}
      <button
        onClick={rejectAll}
        className="absolute top-4 right-4 p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        aria-label="Close cookie banner"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  )
}