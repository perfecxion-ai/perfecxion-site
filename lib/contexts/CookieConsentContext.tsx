'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { auditLogger, AuditEventType, AuditCategory } from '@/lib/audit-logger'

export interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

interface CookieConsentContextType {
  preferences: CookiePreferences
  hasConsented: boolean
  showBanner: boolean
  updatePreferences: (prefs: Partial<CookiePreferences>) => void
  acceptAll: () => void
  rejectAll: () => void
  savePreferences: () => void
  showPreferences: () => void
}

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always true, cannot be disabled
  analytics: false,
  marketing: false,
  functional: false,
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined)

const CONSENT_COOKIE_NAME = 'perfecxion-cookie-consent'
const PREFERENCES_COOKIE_NAME = 'perfecxion-cookie-preferences'
const CONSENT_DURATION_DAYS = 365

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences)
  const [hasConsented, setHasConsented] = useState(false)
  const [showBanner, setShowBanner] = useState(false)

  // Load consent status on mount
  useEffect(() => {
    const loadConsent = () => {
      try {
        const consentValue = localStorage.getItem(CONSENT_COOKIE_NAME)
        const prefsValue = localStorage.getItem(PREFERENCES_COOKIE_NAME)

        if (consentValue === 'true') {
          setHasConsented(true)
          if (prefsValue) {
            const savedPrefs = JSON.parse(prefsValue)
            setPreferences({ ...defaultPreferences, ...savedPrefs, necessary: true })
          }
          setShowBanner(false)
        } else {
          setShowBanner(true)
        }
      } catch (error) {
        console.error('Error loading cookie consent:', error)
        setShowBanner(true)
      }
    }

    loadConsent()
  }, [])

  const updatePreferences = (prefs: Partial<CookiePreferences>) => {
    setPreferences(prev => ({
      ...prev,
      ...prefs,
      necessary: true, // Ensure necessary cookies can't be disabled
    }))
  }

  const saveConsent = (prefs: CookiePreferences) => {
    try {
      localStorage.setItem(CONSENT_COOKIE_NAME, 'true')
      localStorage.setItem(PREFERENCES_COOKIE_NAME, JSON.stringify(prefs))
      
      // Set actual cookies based on preferences
      const expires = new Date()
      expires.setDate(expires.getDate() + CONSENT_DURATION_DAYS)
      
      // Create audit log entry
      if (window.gtag && prefs.analytics) {
        window.gtag('consent', 'update', {
          analytics_storage: prefs.analytics ? 'granted' : 'denied',
          ad_storage: prefs.marketing ? 'granted' : 'denied',
        })
      }

      // Dispatch custom event for other parts of the app
      window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { 
        detail: { preferences: prefs, timestamp: new Date().toISOString() } 
      }))
      
      // Log consent event
      auditLogger.log({
        eventType: AuditEventType.CONSENT_GRANTED,
        action: 'Cookie preferences updated',
        details: { preferences: prefs },
        category: AuditCategory.PRIVACY,
      })

      setHasConsented(true)
      setShowBanner(false)
    } catch (error) {
      console.error('Error saving cookie consent:', error)
    }
  }

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    }
    setPreferences(allAccepted)
    saveConsent(allAccepted)
  }

  const rejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    }
    setPreferences(onlyNecessary)
    saveConsent(onlyNecessary)
  }

  const savePreferences = () => {
    saveConsent(preferences)
  }

  const showPreferences = () => {
    setShowBanner(true)
  }

  return (
    <CookieConsentContext.Provider
      value={{
        preferences,
        hasConsented,
        showBanner,
        updatePreferences,
        acceptAll,
        rejectAll,
        savePreferences,
        showPreferences,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext)
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider')
  }
  return context
}

// Utility function to check if a specific cookie type is allowed
export function isCookieTypeAllowed(type: keyof CookiePreferences): boolean {
  try {
    const prefsValue = localStorage.getItem(PREFERENCES_COOKIE_NAME)
    if (prefsValue) {
      const prefs = JSON.parse(prefsValue)
      return prefs[type] === true
    }
  } catch (error) {
    console.error('Error checking cookie permission:', error)
  }
  return type === 'necessary' // Only necessary cookies are allowed by default
}

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}