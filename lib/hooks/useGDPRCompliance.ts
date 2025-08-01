'use client'

import { useCallback, useEffect, useState } from 'react'
import { LeadProfile } from '@/lib/progressive-profiling'

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

interface DataProcessingInfo {
  categories: Array<{
    category: string
    purpose: string
    legalBasis: string
    retentionPeriod: string
    thirdParties?: string[]
  }>
  rights: string[]
  contact: {
    dpo?: string
    email: string
    address?: string
  }
}

interface UseGDPRComplianceReturn {
  saveConsent: (consent: GDPRConsent) => Promise<void>
  getStoredConsent: () => GDPRConsent | null
  exportUserData: (email?: string) => Promise<any>
  deleteUserData: (email?: string) => Promise<void>
  getDataProcessingInfo: () => DataProcessingInfo
  isGDPRRequired: () => boolean
  hasValidConsent: (category?: keyof GDPRConsent) => boolean
  revokeConsent: (category: keyof GDPRConsent) => Promise<void>
  updateConsent: (updates: Partial<GDPRConsent>) => Promise<void>
}

const GDPR_STORAGE_KEY = 'perfecxion_gdpr_consent'
const CONSENT_DURATION_DAYS = 365 // Consent valid for 1 year

export function useGDPRCompliance(): UseGDPRComplianceReturn {
  const [currentConsent, setCurrentConsent] = useState<GDPRConsent | null>(null)

  // Load consent on mount
  useEffect(() => {
    const stored = getStoredConsent()
    setCurrentConsent(stored)
  }, [])

  // Save consent with audit trail
  const saveConsent = useCallback(async (consent: GDPRConsent): Promise<void> => {
    try {
      // Add IP and user agent if available
      const enhancedConsent: GDPRConsent = {
        ...consent,
        timestamp: new Date(),
        ipAddress: await getUserIP(),
        userAgent: navigator.userAgent
      }

      // Store locally
      localStorage.setItem(GDPR_STORAGE_KEY, JSON.stringify(enhancedConsent))
      setCurrentConsent(enhancedConsent)

      // In production, also send to backend for audit trail
      await fetch('/api/gdpr/consent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          consent: enhancedConsent,
          sessionId: getSessionId(),
          url: window.location.href
        })
      }).catch(err => console.warn('Failed to log consent:', err))

      // Update analytics consent
      updateAnalyticsConsent(enhancedConsent)

    } catch (error) {
      console.error('Failed to save consent:', error)
      throw error
    }
  }, [])

  // Get stored consent
  const getStoredConsent = useCallback((): GDPRConsent | null => {
    try {
      const stored = localStorage.getItem(GDPR_STORAGE_KEY)
      if (!stored) return null

      const consent = JSON.parse(stored) as GDPRConsent
      
      // Check if consent is still valid (not expired)
      const consentDate = new Date(consent.timestamp)
      const expiryDate = new Date(consentDate)
      expiryDate.setDate(expiryDate.getDate() + CONSENT_DURATION_DAYS)
      
      if (new Date() > expiryDate) {
        // Consent expired, remove it
        localStorage.removeItem(GDPR_STORAGE_KEY)
        return null
      }

      return consent
    } catch (error) {
      console.error('Failed to get stored consent:', error)
      return null
    }
  }, [])

  // Export user data (GDPR Article 15 & 20)
  const exportUserData = useCallback(async (email?: string): Promise<any> => {
    try {
      // Collect data from localStorage
      const localData = {
        consent: getStoredConsent(),
        leadProfile: localStorage.getItem('leadProfile'),
        downloadHistory: localStorage.getItem('downloadCount'),
        formAnalytics: localStorage.getItem('formAnalytics'),
        sessionData: {
          sessionId: getSessionId(),
          lastActivity: new Date().toISOString()
        }
      }

      // In production, also fetch from backend
      let serverData = {}
      if (email) {
        try {
          const response = await fetch(`/api/gdpr/export?email=${encodeURIComponent(email)}`)
          if (response.ok) {
            serverData = await response.json()
          }
        } catch (err) {
          console.warn('Failed to fetch server data:', err)
        }
      }

      return {
        exportDate: new Date().toISOString(),
        dataSubject: email || 'anonymous',
        localStorageData: localData,
        serverData,
        metadata: {
          userAgent: navigator.userAgent,
          language: navigator.language,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        }
      }
    } catch (error) {
      console.error('Data export failed:', error)
      throw error
    }
  }, [getStoredConsent])

  // Delete user data (GDPR Article 17 - Right to Erasure)
  const deleteUserData = useCallback(async (email?: string): Promise<void> => {
    try {
      // Clear localStorage
      const keysToRemove = [
        GDPR_STORAGE_KEY,
        'leadProfile',
        'downloadCount',
        'formAnalytics'
      ]
      
      keysToRemove.forEach(key => localStorage.removeItem(key))
      setCurrentConsent(null)

      // In production, also request server-side deletion
      if (email) {
        await fetch('/api/gdpr/delete', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            email,
            requestDate: new Date().toISOString(),
            sessionId: getSessionId()
          })
        })
      }

      // Disable analytics
      updateAnalyticsConsent({
        necessary: true,
        marketing: false,
        analytics: false,
        personalization: false,
        thirdParty: false,
        timestamp: new Date()
      })

    } catch (error) {
      console.error('Data deletion failed:', error)
      throw error
    }
  }, [])

  // Get data processing information
  const getDataProcessingInfo = useCallback((): DataProcessingInfo => {
    return {
      categories: [
        {
          category: 'Contact Information',
          purpose: 'Communication and service delivery',
          legalBasis: 'Legitimate interest and consent',
          retentionPeriod: '3 years after last interaction',
          thirdParties: ['Email service providers', 'CRM systems']
        },
        {
          category: 'Profile Information',
          purpose: 'Personalization and content recommendations',
          legalBasis: 'Consent',
          retentionPeriod: '2 years or until consent withdrawn',
          thirdParties: ['Analytics providers']
        },
        {
          category: 'Usage Analytics',
          purpose: 'Website improvement and performance monitoring',
          legalBasis: 'Legitimate interest and consent',
          retentionPeriod: '26 months',
          thirdParties: ['Google Analytics', 'Security monitoring services']
        },
        {
          category: 'Marketing Data',
          purpose: 'Marketing communications and lead nurturing',
          legalBasis: 'Consent',
          retentionPeriod: 'Until consent withdrawn or 3 years of inactivity',
          thirdParties: ['Email marketing platforms', 'CRM systems']
        }
      ],
      rights: [
        'Right of access (Article 15)',
        'Right to rectification (Article 16)',
        'Right to erasure (Article 17)',
        'Right to restrict processing (Article 18)',
        'Right to data portability (Article 20)',
        'Right to object (Article 21)',
        'Right to withdraw consent (Article 7)'
      ],
      contact: {
        dpo: 'Data Protection Officer',
        email: 'privacy@perfecxion.ai',
        address: 'perfecXion.ai Privacy Team, [Company Address]'
      }
    }
  }, [])

  // Check if GDPR applies (EU/EEA visitors)
  const isGDPRRequired = useCallback((): boolean => {
    // Check if user is in EU/EEA based on various signals
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const language = navigator.language

    // EU/EEA timezones and languages (simplified detection)
    const euTimezones = [
      'Europe/Amsterdam', 'Europe/Berlin', 'Europe/Brussels', 'Europe/Budapest',
      'Europe/Copenhagen', 'Europe/Dublin', 'Europe/Helsinki', 'Europe/Lisbon',
      'Europe/Luxembourg', 'Europe/Madrid', 'Europe/Malta', 'Europe/Paris',
      'Europe/Prague', 'Europe/Rome', 'Europe/Stockholm', 'Europe/Vienna',
      'Europe/Warsaw', 'Europe/Zagreb', 'Europe/Athens', 'Europe/Bucharest',
      'Europe/Sofia', 'Europe/Tallinn', 'Europe/Riga', 'Europe/Vilnius',
      'Atlantic/Reykjavik'
    ]

    const euLanguages = [
      'de', 'fr', 'it', 'es', 'pt', 'nl', 'pl', 'ro', 'el', 'cs', 'hu', 'sv',
      'da', 'fi', 'sk', 'hr', 'bg', 'sl', 'lt', 'lv', 'et', 'mt', 'is'
    ]

    const isEUTimezone = euTimezones.includes(timezone)
    const isEULanguage = euLanguages.some(lang => language.startsWith(lang))

    // Also check if explicitly required (can be set via query param for testing)
    const urlParams = new URLSearchParams(window.location.search)
    const forceGDPR = urlParams.get('gdpr') === 'true'

    return isEUTimezone || isEULanguage || forceGDPR
  }, [])

  // Check if user has valid consent for specific category
  const hasValidConsent = useCallback((category?: keyof GDPRConsent): boolean => {
    const consent = currentConsent || getStoredConsent()
    if (!consent) return false

    if (category) {
      return consent[category] === true
    }

    // Check if any non-necessary consent is given
    return consent.marketing || consent.analytics || consent.personalization || consent.thirdParty
  }, [currentConsent, getStoredConsent])

  // Revoke specific consent category
  const revokeConsent = useCallback(async (category: keyof GDPRConsent): Promise<void> => {
    const current = currentConsent || getStoredConsent()
    if (!current) return

    if (category === 'necessary') {
      throw new Error('Necessary consent cannot be revoked')
    }

    const updated = {
      ...current,
      [category]: false,
      timestamp: new Date()
    }

    await saveConsent(updated)
  }, [currentConsent, getStoredConsent, saveConsent])

  // Update consent with partial changes
  const updateConsent = useCallback(async (updates: Partial<GDPRConsent>): Promise<void> => {
    const current = currentConsent || getStoredConsent()
    if (!current) {
      // Create new consent if none exists
      const newConsent: GDPRConsent = {
        necessary: true,
        marketing: false,
        analytics: false,
        personalization: false,
        thirdParty: false,
        timestamp: new Date(),
        ...updates
      }
      await saveConsent(newConsent)
    } else {
      const updated = {
        ...current,
        ...updates,
        timestamp: new Date()
      }
      await saveConsent(updated)
    }
  }, [currentConsent, getStoredConsent, saveConsent])

  return {
    saveConsent,
    getStoredConsent,
    exportUserData,
    deleteUserData,
    getDataProcessingInfo,
    isGDPRRequired,
    hasValidConsent,
    revokeConsent,
    updateConsent
  }
}

// Helper functions

async function getUserIP(): Promise<string | undefined> {
  try {
    const response = await fetch('/api/visitor-ip')
    const data = await response.json()
    return data.ip
  } catch (error) {
    console.warn('Could not get user IP:', error)
    return undefined
  }
}

function getSessionId(): string {
  let sessionId = sessionStorage.getItem('session_id')
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    sessionStorage.setItem('session_id', sessionId)
  }
  return sessionId
}

function updateAnalyticsConsent(consent: GDPRConsent): void {
  // Update Google Analytics consent
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: consent.analytics ? 'granted' : 'denied',
      ad_storage: consent.marketing ? 'granted' : 'denied',
      functionality_storage: consent.personalization ? 'granted' : 'denied',
      personalization_storage: consent.personalization ? 'granted' : 'denied',
      security_storage: 'granted' // Always granted for security
    })
  }

  // Update other analytics services
  if (typeof window !== 'undefined') {
    // Disable analytics tracking if consent revoked
    if (!consent.analytics) {
      // Clear analytics cookies
      document.cookie.split(";").forEach(cookie => {
        const eqPos = cookie.indexOf("=")
        const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim()
        if (name.startsWith('_ga') || name.startsWith('_gid')) {
          document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`
        }
      })
    }
  }
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}