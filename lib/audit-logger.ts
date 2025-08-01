/**
 * Audit Logger for Compliance Tracking
 * 
 * This module provides audit logging capabilities for tracking user actions,
 * data access, and compliance-related events. Logs are stored in localStorage
 * for demo purposes but should be sent to a backend service in production.
 */

export interface AuditEvent {
  id: string
  timestamp: string
  eventType: AuditEventType
  userId?: string
  userAgent: string
  ipAddress?: string // Would be set by backend in production
  action: string
  resource?: string
  details?: Record<string, any>
  outcome: 'success' | 'failure' | 'pending'
  category: AuditCategory
}

export enum AuditEventType {
  // Authentication Events
  LOGIN = 'auth.login',
  LOGOUT = 'auth.logout',
  PASSWORD_CHANGE = 'auth.password_change',
  
  // Data Access Events
  DATA_VIEW = 'data.view',
  DATA_EXPORT = 'data.export',
  DATA_DELETE = 'data.delete',
  DATA_MODIFY = 'data.modify',
  
  // Privacy Events
  CONSENT_GRANTED = 'privacy.consent_granted',
  CONSENT_WITHDRAWN = 'privacy.consent_withdrawn',
  PREFERENCES_UPDATED = 'privacy.preferences_updated',
  DATA_REQUEST = 'privacy.data_request',
  
  // Security Events
  SECURITY_SCAN = 'security.scan',
  VULNERABILITY_DETECTED = 'security.vulnerability_detected',
  ACCESS_DENIED = 'security.access_denied',
  
  // Compliance Events
  POLICY_ACCEPTED = 'compliance.policy_accepted',
  AUDIT_VIEWED = 'compliance.audit_viewed',
  REPORT_GENERATED = 'compliance.report_generated',
}

export enum AuditCategory {
  AUTHENTICATION = 'authentication',
  DATA_ACCESS = 'data_access',
  PRIVACY = 'privacy',
  SECURITY = 'security',
  COMPLIANCE = 'compliance',
}

const AUDIT_LOG_KEY = 'perfecxion-audit-log'
const MAX_LOG_ENTRIES = 1000 // Limit stored entries

class AuditLogger {
  private static instance: AuditLogger
  
  private constructor() {
    // Initialize audit logger
    if (typeof window !== 'undefined') {
      this.setupEventListeners()
    }
  }
  
  static getInstance(): AuditLogger {
    if (!AuditLogger.instance) {
      AuditLogger.instance = new AuditLogger()
    }
    return AuditLogger.instance
  }
  
  private setupEventListeners() {
    // Listen for cookie consent events
    window.addEventListener('cookieConsentUpdated', (event: any) => {
      this.log({
        eventType: AuditEventType.CONSENT_GRANTED,
        action: 'Cookie consent updated',
        details: event.detail,
        category: AuditCategory.PRIVACY,
      })
    })
  }
  
  /**
   * Log an audit event
   */
  log(params: {
    eventType: AuditEventType
    action: string
    resource?: string
    details?: Record<string, any>
    outcome?: 'success' | 'failure' | 'pending'
    category: AuditCategory
    userId?: string
  }): AuditEvent {
    const event: AuditEvent = {
      id: this.generateId(),
      timestamp: new Date().toISOString(),
      eventType: params.eventType,
      userId: params.userId || this.getCurrentUserId(),
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      action: params.action,
      resource: params.resource,
      details: params.details,
      outcome: params.outcome || 'success',
      category: params.category,
    }
    
    this.saveEvent(event)
    
    // In production, send to backend
    if (process.env.NODE_ENV === 'production') {
      this.sendToBackend(event)
    }
    
    return event
  }
  
  /**
   * Query audit logs
   */
  query(filters?: {
    startDate?: Date
    endDate?: Date
    eventType?: AuditEventType
    category?: AuditCategory
    userId?: string
    outcome?: 'success' | 'failure' | 'pending'
  }): AuditEvent[] {
    const logs = this.getLogs()
    
    if (!filters) return logs
    
    return logs.filter(log => {
      if (filters.startDate && new Date(log.timestamp) < filters.startDate) return false
      if (filters.endDate && new Date(log.timestamp) > filters.endDate) return false
      if (filters.eventType && log.eventType !== filters.eventType) return false
      if (filters.category && log.category !== filters.category) return false
      if (filters.userId && log.userId !== filters.userId) return false
      if (filters.outcome && log.outcome !== filters.outcome) return false
      
      return true
    })
  }
  
  /**
   * Export audit logs
   */
  export(format: 'json' | 'csv' = 'json'): string {
    const logs = this.getLogs()
    
    if (format === 'json') {
      return JSON.stringify(logs, null, 2)
    }
    
    // CSV export
    const headers = ['ID', 'Timestamp', 'Event Type', 'User ID', 'Action', 'Resource', 'Outcome', 'Category']
    const rows = logs.map(log => [
      log.id,
      log.timestamp,
      log.eventType,
      log.userId || '',
      log.action,
      log.resource || '',
      log.outcome,
      log.category,
    ])
    
    const csv = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(',')),
    ].join('\n')
    
    return csv
  }
  
  /**
   * Clear audit logs (requires admin permission in production)
   */
  clear(olderThan?: Date): void {
    if (olderThan) {
      const logs = this.getLogs()
      const filtered = logs.filter(log => new Date(log.timestamp) >= olderThan)
      this.saveLogs(filtered)
    } else {
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem(AUDIT_LOG_KEY)
      }
    }
  }
  
  private generateId(): string {
    return `audit_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  }
  
  private getCurrentUserId(): string | undefined {
    // In production, get from auth context
    return undefined
  }
  
  private saveEvent(event: AuditEvent): void {
    const logs = this.getLogs()
    logs.unshift(event) // Add to beginning
    
    // Limit log size
    if (logs.length > MAX_LOG_ENTRIES) {
      logs.splice(MAX_LOG_ENTRIES)
    }
    
    this.saveLogs(logs)
  }
  
  private getLogs(): AuditEvent[] {
    if (typeof localStorage === 'undefined') return []
    
    try {
      const stored = localStorage.getItem(AUDIT_LOG_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  }
  
  private saveLogs(logs: AuditEvent[]): void {
    if (typeof localStorage === 'undefined') return
    
    try {
      localStorage.setItem(AUDIT_LOG_KEY, JSON.stringify(logs))
    } catch (error) {
      console.error('Failed to save audit logs:', error)
    }
  }
  
  private async sendToBackend(event: AuditEvent): Promise<void> {
    // In production, send to backend API
    try {
      // await fetch('/api/audit-log', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(event),
      // })
    } catch (error) {
      console.error('Failed to send audit log to backend:', error)
    }
  }
}

// Export singleton instance
export const auditLogger = AuditLogger.getInstance()

// Convenience functions
export function logDataAccess(resource: string, action: string, details?: Record<string, any>) {
  return auditLogger.log({
    eventType: AuditEventType.DATA_VIEW,
    action,
    resource,
    details,
    category: AuditCategory.DATA_ACCESS,
  })
}

export function logPrivacyEvent(eventType: AuditEventType, action: string, details?: Record<string, any>) {
  return auditLogger.log({
    eventType,
    action,
    details,
    category: AuditCategory.PRIVACY,
  })
}

export function logSecurityEvent(eventType: AuditEventType, action: string, resource?: string, outcome: 'success' | 'failure' = 'success') {
  return auditLogger.log({
    eventType,
    action,
    resource,
    outcome,
    category: AuditCategory.SECURITY,
  })
}