'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cookie, Shield, BarChart3, Megaphone, Settings2, Check, X, Info, Download, Trash2 } from 'lucide-react'
import { useCookieConsent, CookiePreferences } from '@/lib/contexts/CookieConsentContext'

export default function PrivacyPreferencesPage() {
  const {
    preferences,
    updatePreferences,
    savePreferences,
  } = useCookieConsent()

  const [localPreferences, setLocalPreferences] = useState<CookiePreferences>(preferences)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setLocalPreferences(preferences)
  }, [preferences])

  const handleSave = () => {
    updatePreferences(localPreferences)
    savePreferences()
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const cookieCategories = [
    {
      id: 'necessary',
      name: 'Necessary Cookies',
      icon: Shield,
      description: 'These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas.',
      examples: ['Session cookies', 'Security cookies', 'Load balancing cookies'],
      required: true,
      color: 'green',
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      icon: BarChart3,
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      examples: ['Google Analytics', 'Performance monitoring', 'User behavior tracking'],
      required: false,
      color: 'blue',
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      icon: Megaphone,
      description: 'These cookies are used to track visitors across websites to display relevant and engaging advertisements.',
      examples: ['Retargeting cookies', 'Social media cookies', 'Ad performance tracking'],
      required: false,
      color: 'purple',
    },
    {
      id: 'functional',
      name: 'Functional Cookies',
      icon: Settings2,
      description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.',
      examples: ['Language preferences', 'Theme settings', 'User preferences'],
      required: false,
      color: 'amber',
    },
  ]

  const privacyRights = [
    {
      title: 'Right to Access',
      description: 'Request a copy of your personal data',
      icon: Download,
      action: 'Request Data',
      href: '/contact?subject=data-access',
    },
    {
      title: 'Right to Delete',
      description: 'Request deletion of your personal data',
      icon: Trash2,
      action: 'Request Deletion',
      href: '/contact?subject=data-deletion',
    },
    {
      title: 'Right to Rectification',
      description: 'Correct inaccurate personal data',
      icon: Settings2,
      action: 'Update Data',
      href: '/contact?subject=data-update',
    },
  ]

  return (
    <main className="bg-white dark:bg-background-dark min-h-screen">
      <div className="max-width container-padding section-padding">
        {/* Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Cookie className="h-4 w-4" />
            Privacy Center
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Privacy Preferences
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Control how your data is collected and used. We respect your privacy and give you full control over your preferences.
          </p>
        </header>

        {/* Cookie Preferences Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Cookie Preferences</h2>
          
          <div className="grid gap-6">
            {cookieCategories.map((category) => {
              const Icon = category.icon
              const isEnabled = localPreferences[category.id as keyof CookiePreferences]
              
              return (
                <div
                  key={category.id}
                  className={`bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 border-2 transition-all ${
                    isEnabled 
                      ? 'border-primary-500 dark:border-primary-400' 
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-${category.color}-100 dark:bg-${category.color}-900/20`}>
                        <Icon className={`h-6 w-6 text-${category.color}-600 dark:text-${category.color}-400`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {category.name}
                          {category.required && (
                            <span className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                              (Always Active)
                            </span>
                          )}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">
                          {category.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {category.examples.map((example, index) => (
                            <span
                              key={index}
                              className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
                            >
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="ml-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isEnabled}
                          disabled={category.required}
                          onChange={(e) => {
                            setLocalPreferences(prev => ({
                              ...prev,
                              [category.id]: e.target.checked
                            }))
                          }}
                          className="sr-only peer"
                        />
                        <div className={`w-11 h-6 bg-gray-300 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600 ${
                          category.required ? 'opacity-50 cursor-not-allowed' : ''
                        }`}></div>
                      </label>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Save Button */}
          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
            >
              {saved ? (
                <>
                  <Check className="h-5 w-5" />
                  Preferences Saved
                </>
              ) : (
                'Save Preferences'
              )}
            </button>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your preferences will be saved for 365 days
            </p>
          </div>
        </section>

        {/* Privacy Rights Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Your Privacy Rights</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Under data protection laws, you have rights regarding your personal data. We're committed to helping you exercise these rights.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6">
            {privacyRights.map((right) => {
              const Icon = right.icon
              return (
                <div key={right.title} className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <Icon className="h-8 w-8 text-primary-600 dark:text-primary-400 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {right.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {right.description}
                  </p>
                  <Link
                    href="/privacy/data-request"
                    className="text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
                  >
                    {right.action} →
                  </Link>
                </div>
              )
            })}
          </div>
        </section>

        {/* Information Box */}
        <section className="mb-12">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <Info className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-2">
                  How We Protect Your Privacy
                </h3>
                <p className="text-blue-800 dark:text-blue-300 mb-3">
                  We implement industry-standard security measures to protect your personal data:
                </p>
                <ul className="space-y-2 text-blue-800 dark:text-blue-300">
                  <li>• End-to-end encryption for sensitive data</li>
                  <li>• Regular security audits and penetration testing</li>
                  <li>• Strict access controls and authentication</li>
                  <li>• Compliance with GDPR, CCPA, and other privacy regulations</li>
                  <li>• Transparent data processing practices</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Links Section */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/privacy" className="text-primary-600 dark:text-primary-400 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-primary-600 dark:text-primary-400 hover:underline">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-primary-600 dark:text-primary-400 hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}