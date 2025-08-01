'use client'

import React, { useState, useEffect } from 'react'
import { Mail, User, Building, Download, FileText, Check, AlertCircle, ChevronRight } from 'lucide-react'
import { cn, isValidEmail } from '@/lib/utils'
import PrimaryCTA from './cta/PrimaryCTA'
import SecondaryCTA from './cta/SecondaryCTA'

interface LeadCaptureFormProps {
  resourceTitle: string
  resourceType: 'whitepaper' | 'guide' | 'ebook' | 'report' | 'checklist'
  resourceUrl?: string
  onComplete?: (data: LeadData) => void
  className?: string
  variant?: 'inline' | 'modal' | 'embedded'
}

interface LeadData {
  email: string
  firstName?: string
  lastName?: string
  company?: string
  jobTitle?: string
  phone?: string
  marketingConsent: boolean
  profileLevel: number // 1 = email only, 2 = basic info, 3 = full profile
}

// Progressive profiling thresholds
const PROFILE_THRESHOLDS = {
  BASIC: 2,    // After 2 downloads, ask for name
  FULL: 4,     // After 4 downloads, ask for company details
}

export default function LeadCaptureForm({
  resourceTitle,
  resourceType,
  resourceUrl,
  onComplete,
  className,
  variant = 'embedded',
}: LeadCaptureFormProps) {
  const [profileLevel, setProfileLevel] = useState(1)
  const [downloadCount, setDownloadCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [data, setData] = useState<LeadData>({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    phone: '',
    marketingConsent: false,
    profileLevel: 1,
  })

  // Load user profile and download count from localStorage
  useEffect(() => {
    const storedProfile = localStorage.getItem('leadProfile')
    const storedCount = localStorage.getItem('downloadCount')
    
    if (storedProfile) {
      const profile = JSON.parse(storedProfile)
      setData(prev => ({ ...prev, ...profile }))
    }
    
    if (storedCount) {
      const count = parseInt(storedCount, 10)
      setDownloadCount(count)
      
      // Determine profile level based on download count
      if (count >= PROFILE_THRESHOLDS.FULL) {
        setProfileLevel(3)
      } else if (count >= PROFILE_THRESHOLDS.BASIC) {
        setProfileLevel(2)
      }
    }
  }, [])

  // Pre-fill form if data exists
  useEffect(() => {
    const storedProfile = localStorage.getItem('leadProfile')
    if (storedProfile && profileLevel === 1) {
      const profile = JSON.parse(storedProfile)
      if (profile.email) {
        // If we have their email, skip to download
        setSubmitted(true)
      }
    }
  }, [profileLevel])

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {}

    // Always validate email
    if (!data.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!isValidEmail(data.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    // Validate based on profile level
    if (profileLevel >= 2) {
      if (!data.firstName?.trim()) newErrors.firstName = 'First name is required'
      if (!data.lastName?.trim()) newErrors.lastName = 'Last name is required'
    }

    if (profileLevel >= 3) {
      if (!data.company?.trim()) newErrors.company = 'Company is required'
      if (!data.jobTitle?.trim()) newErrors.jobTitle = 'Job title is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault()
    
    if (!validate()) return

    setLoading(true)

    try {
      // Update download count
      const newCount = downloadCount + 1
      setDownloadCount(newCount)
      localStorage.setItem('downloadCount', newCount.toString())

      // Save lead data
      const leadData = { ...data, profileLevel }
      localStorage.setItem('leadProfile', JSON.stringify(leadData))

      // Track download
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'resource_download', {
          resource_title: resourceTitle,
          resource_type: resourceType,
          profile_level: profileLevel,
          download_count: newCount,
        })
      }

      // In production, send to CRM/marketing automation
      await new Promise(resolve => setTimeout(resolve, 1000))

      if (onComplete) {
        onComplete(leadData)
      }

      setSubmitted(true)

      // Trigger download if URL provided
      if (resourceUrl) {
        setTimeout(() => {
          window.open(resourceUrl, '_blank')
        }, 500)
      }
    } catch (error) {
      console.error('Lead capture failed:', error)
      setErrors({ submit: 'Failed to process request. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  const updateData = (updates: Partial<LeadData>) => {
    setData(prev => ({ ...prev, ...updates }))
    // Clear errors for updated fields
    const errorKeys = Object.keys(updates)
    setErrors(prev => {
      const newErrors = { ...prev }
      errorKeys.forEach(key => delete newErrors[key])
      return newErrors
    })
  }

  const containerClasses = cn(
    variant === 'inline' && 'bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6',
    variant === 'modal' && 'bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-8',
    variant === 'embedded' && 'bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6',
    className
  )

  if (submitted) {
    return (
      <div className={containerClasses}>
        <div className="text-center">
          <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-4">
            <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Success! Your download is ready.
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Check your email for the download link and additional resources.
          </p>
          {resourceUrl && (
            <SecondaryCTA
              text="Download Now"
              href={resourceUrl}
              target="_blank"
              icon="download"
              variant="outline"
            />
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={containerClasses}>
      <div className="mb-4">
        <div className="flex items-start gap-3 mb-2">
          <FileText className="h-6 w-6 text-primary-600 dark:text-primary-400 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Download: {resourceTitle}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {profileLevel === 1 && 'Enter your email to download instantly'}
              {profileLevel === 2 && 'Just a few more details to personalize your experience'}
              {profileLevel === 3 && 'Complete your profile for full access to all resources'}
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email field - always shown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Work Email *
          </label>
          <div className="relative">
            <input
              type="email"
              value={data.email}
              onChange={(e) => updateData({ email: e.target.value })}
              className={cn(
                'w-full px-4 py-2 pl-10 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500',
                errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              )}
              placeholder="you@company.com"
            />
            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
          )}
        </div>

        {/* Progressive fields - shown based on profile level */}
        {profileLevel >= 2 && (
          <>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  value={data.firstName}
                  onChange={(e) => updateData({ firstName: e.target.value })}
                  className={cn(
                    'w-full px-3 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500',
                    errors.firstName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  )}
                />
                {errors.firstName && (
                  <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  value={data.lastName}
                  onChange={(e) => updateData({ lastName: e.target.value })}
                  className={cn(
                    'w-full px-3 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500',
                    errors.lastName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  )}
                />
                {errors.lastName && (
                  <p className="mt-1 text-xs text-red-600 dark:text-red-400">{errors.lastName}</p>
                )}
              </div>
            </div>
          </>
        )}

        {profileLevel >= 3 && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Company *
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={data.company}
                  onChange={(e) => updateData({ company: e.target.value })}
                  className={cn(
                    'w-full px-4 py-2 pl-10 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500',
                    errors.company ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  )}
                />
                <Building className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              {errors.company && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.company}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Job Title *
              </label>
              <input
                type="text"
                value={data.jobTitle}
                onChange={(e) => updateData({ jobTitle: e.target.value })}
                className={cn(
                  'w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500',
                  errors.jobTitle ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                )}
              />
              {errors.jobTitle && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.jobTitle}</p>
              )}
            </div>
          </>
        )}

        {/* Marketing consent */}
        <div className="flex items-start">
          <input
            type="checkbox"
            id="consent"
            checked={data.marketingConsent}
            onChange={(e) => updateData({ marketingConsent: e.target.checked })}
            className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 mt-0.5"
          />
          <label htmlFor="consent" className="ml-2 text-sm text-gray-600 dark:text-gray-300">
            I agree to receive marketing communications about AI security best practices and product updates.
          </label>
        </div>

        {errors.submit && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800 dark:text-red-300">{errors.submit}</p>
            </div>
          </div>
        )}

        <PrimaryCTA
          text={loading ? 'Processing...' : `Download ${resourceType.charAt(0).toUpperCase() + resourceType.slice(1)}`}
          onClick={() => handleSubmit()}
          icon="download"
          fullWidth
          loading={loading}
          trackingId={`lead-capture-${resourceType}`}
          trackingData={{
            resource: resourceTitle,
            profile_level: profileLevel,
          }}
        />

        {profileLevel === 1 && (
          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            No credit card required. Instant download.
          </p>
        )}
      </form>
    </div>
  )
}