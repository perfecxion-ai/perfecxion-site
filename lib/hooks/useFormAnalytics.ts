'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { AnalyticsEvent, FormAnalytics, DeviceInfo } from '@/lib/progressive-profiling'

interface UseFormAnalyticsReturn {
  trackEvent: (event: Omit<AnalyticsEvent, 'timestamp'>) => void
  analytics: FormAnalytics
  getCompletionRate: () => number
  getTimeSpent: () => number
}

export function useFormAnalytics(formId: string): UseFormAnalyticsReturn {
  const startTime = useRef<Date>(new Date())
  const sessionId = useRef<string>(`session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`)
  
  const [analytics, setAnalytics] = useState<FormAnalytics>(() => ({
    sessionId: sessionId.current,
    formId,
    events: [],
    completionRate: 0,
    timeSpent: 0,
    deviceInfo: getDeviceInfo()
  }))

  // Track event
  const trackEvent = useCallback((event: Omit<AnalyticsEvent, 'timestamp'>) => {
    const fullEvent: AnalyticsEvent = {
      ...event,
      timestamp: new Date()
    }

    setAnalytics(prev => ({
      ...prev,
      events: [...prev.events, fullEvent],
      timeSpent: Date.now() - startTime.current.getTime()
    }))

    // Send to analytics service (if configured)
    if (typeof window !== 'undefined') {
      // Google Analytics 4
      if (window.gtag) {
        window.gtag('event', event.type, {
          form_id: formId,
          session_id: sessionId.current,
          field_id: event.fieldId,
          custom_parameters: event.metadata
        })
      }

      // Custom analytics endpoint
      fetch('/api/analytics/form-events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: sessionId.current,
          formId,
          event: fullEvent
        })
      }).catch(err => console.warn('Analytics tracking failed:', err))
    }
  }, [formId])

  // Calculate completion rate
  const getCompletionRate = useCallback((): number => {
    const events = analytics.events
    const fieldCompleteEvents = events.filter(e => e.type === 'field_complete')
    const fieldErrorEvents = events.filter(e => e.type === 'field_error')
    const uniqueFields = new Set([
      ...fieldCompleteEvents.map(e => e.fieldId),
      ...fieldErrorEvents.map(e => e.fieldId)
    ]).size

    if (uniqueFields === 0) return 0
    return (fieldCompleteEvents.length / uniqueFields) * 100
  }, [analytics.events])

  // Calculate time spent
  const getTimeSpent = useCallback((): number => {
    return Date.now() - startTime.current.getTime()
  }, [])

  // Update analytics periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setAnalytics(prev => ({
        ...prev,
        completionRate: getCompletionRate(),
        timeSpent: getTimeSpent()
      }))
    }, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [getCompletionRate, getTimeSpent])

  // Track form abandonment on page unload
  useEffect(() => {
    const handleUnload = () => {
      const finalAnalytics = {
        ...analytics,
        completionRate: getCompletionRate(),
        timeSpent: getTimeSpent(),
        abandonmentPoint: analytics.events[analytics.events.length - 1]?.fieldId
      }

      // Send final analytics (using sendBeacon for reliability)
      if (navigator.sendBeacon) {
        navigator.sendBeacon(
          '/api/analytics/form-abandonment',
          JSON.stringify(finalAnalytics)
        )
      }
    }

    window.addEventListener('beforeunload', handleUnload)
    return () => window.removeEventListener('beforeunload', handleUnload)
  }, [analytics, getCompletionRate, getTimeSpent])

  return {
    trackEvent,
    analytics,
    getCompletionRate,
    getTimeSpent
  }
}

// Helper function to get device information
function getDeviceInfo(): DeviceInfo {
  if (typeof window === 'undefined') {
    return {
      userAgent: '',
      screenResolution: '',
      deviceType: 'desktop',
      browser: '',
      os: ''
    }
  }

  const userAgent = navigator.userAgent
  const screenResolution = `${screen.width}x${screen.height}`
  
  // Detect device type
  const deviceType = /Mobi|Android/i.test(userAgent) ? 'mobile' :
                    /Tablet|iPad/i.test(userAgent) ? 'tablet' : 'desktop'
  
  // Detect browser
  let browser = 'unknown'
  if (userAgent.indexOf('Chrome') > -1) browser = 'Chrome'
  else if (userAgent.indexOf('Firefox') > -1) browser = 'Firefox'
  else if (userAgent.indexOf('Safari') > -1) browser = 'Safari'
  else if (userAgent.indexOf('Edge') > -1) browser = 'Edge'
  
  // Detect OS
  let os = 'unknown'
  if (userAgent.indexOf('Windows') > -1) os = 'Windows'
  else if (userAgent.indexOf('Mac') > -1) os = 'macOS'
  else if (userAgent.indexOf('Linux') > -1) os = 'Linux'
  else if (userAgent.indexOf('Android') > -1) os = 'Android'
  else if (userAgent.indexOf('iOS') > -1) os = 'iOS'

  return {
    userAgent,
    screenResolution,
    deviceType,
    browser,
    os
  }
}

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}