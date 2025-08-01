'use client'

import { useState, useEffect } from 'react'
import { AlertTriangle, Shield, Zap, Clock, MapPin, User, Target } from 'lucide-react'
import { TimePeriod, AnalyticsFilters, SecurityEvent, EventSeverity, EventType } from '@/lib/analytics-types'

interface AttackTimelineChartProps {
  timeRange: TimePeriod
  filters: AnalyticsFilters
}

interface TimelineEvent extends SecurityEvent {
  duration?: number
  sourceIp?: string
  targetSystem?: string
  attackVector?: string
  mitigationAction?: string
  position: number // Position on timeline (0-100)
}

export default function AttackTimelineChart({ timeRange, filters }: AttackTimelineChartProps) {
  const [events, setEvents] = useState<TimelineEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null)
  const [hoveredEvent, setHoveredEvent] = useState<TimelineEvent | null>(null)

  // Generate mock timeline events
  const generateTimelineEvents = (timeRange: TimePeriod): TimelineEvent[] => {
    const now = new Date()
    const timeRangeMs = timeRange === '1h' ? 60 * 60 * 1000 :
                       timeRange === '24h' ? 24 * 60 * 60 * 1000 :
                       timeRange === '7d' ? 7 * 24 * 60 * 60 * 1000 :
                       timeRange === '30d' ? 30 * 24 * 60 * 60 * 1000 :
                       90 * 24 * 60 * 60 * 1000

    const eventTypes: EventType[] = [
      'vulnerability_discovered',
      'attack_detected',
      'policy_violation',
      'compliance_breach',
      'system_compromise',
      'remediation_completed'
    ]

    const severities: EventSeverity[] = ['critical', 'high', 'medium', 'low', 'info']
    
    const attackVectors = [
      'SQL Injection',
      'Cross-Site Scripting (XSS)',
      'Brute Force Attack',
      'Prompt Injection',
      'Data Poisoning',
      'Model Inversion',
      'Adversarial Examples',
      'DDoS Attack',
      'Privilege Escalation',
      'Remote Code Execution'
    ]

    const systems = [
      'web-server-01',
      'api-gateway',
      'main-database',
      'ml-pipeline',
      'auth-service',
      'file-storage',
      'admin-panel',
      'user-dashboard'
    ]

    const mockEvents: TimelineEvent[] = []
    const numEvents = Math.floor(Math.random() * 15) + 10 // 10-25 events

    for (let i = 0; i < numEvents; i++) {
      const eventTime = new Date(now.getTime() - Math.random() * timeRangeMs)
      const eventType = eventTypes[Math.floor(Math.random() * eventTypes.length)]
      const severity = severities[Math.floor(Math.random() * severities.length)]
      const attackVector = attackVectors[Math.floor(Math.random() * attackVectors.length)]
      const targetSystem = systems[Math.floor(Math.random() * systems.length)]
      
      const position = ((now.getTime() - eventTime.getTime()) / timeRangeMs) * 100

      let description = ''
      let mitigationAction = ''
      
      switch (eventType) {
        case 'attack_detected':
          description = `${attackVector} attack detected targeting ${targetSystem}`
          mitigationAction = severity === 'critical' ? 'System isolated and traffic blocked' :
                           severity === 'high' ? 'Attack signatures updated' :
                           'Monitoring increased'
          break
        case 'vulnerability_discovered':
          description = `${severity.toUpperCase()} vulnerability found in ${targetSystem}`
          mitigationAction = 'Patching scheduled within SLA timeframe'
          break
        case 'policy_violation':
          description = `Security policy violation detected in ${targetSystem}`
          mitigationAction = 'Access privileges reviewed and updated'
          break
        case 'compliance_breach':
          description = `Compliance violation detected: unauthorized data access`
          mitigationAction = 'Audit initiated and access logs reviewed'
          break
        case 'system_compromise':
          description = `Potential system compromise detected on ${targetSystem}`
          mitigationAction = 'System quarantined and forensic analysis initiated'
          break
        case 'remediation_completed':
          description = `Security remediation completed for ${targetSystem}`
          mitigationAction = 'System restored to normal operation'
          break
      }

      mockEvents.push({
        id: `event-${i}`,
        type: eventType,
        severity,
        timestamp: eventTime.toISOString(),
        description,
        affectedSystems: [targetSystem],
        resolution: mitigationAction,
        tags: [attackVector, targetSystem, severity],
        duration: Math.floor(Math.random() * 3600), // Duration in seconds
        sourceIp: `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
        targetSystem,
        attackVector,
        mitigationAction,
        position: Math.max(0, Math.min(100, position))
      })
    }

    return mockEvents.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setEvents(generateTimelineEvents(timeRange))
      setLoading(false)
    }, 500)
  }, [timeRange, filters])

  const getEventIcon = (type: EventType, severity: EventSeverity) => {
    const iconClass = severity === 'critical' ? 'text-red-600' :
                     severity === 'high' ? 'text-orange-600' :
                     severity === 'medium' ? 'text-yellow-600' :
                     severity === 'low' ? 'text-blue-600' : 'text-gray-600'

    switch (type) {
      case 'attack_detected':
        return <AlertTriangle className={`w-5 h-5 ${iconClass}`} />
      case 'vulnerability_discovered':
        return <Target className={`w-5 h-5 ${iconClass}`} />
      case 'system_compromise':
        return <Zap className={`w-5 h-5 ${iconClass}`} />
      case 'remediation_completed':
        return <Shield className={`w-5 h-5 ${iconClass}`} />
      default:
        return <Clock className={`w-5 h-5 ${iconClass}`} />
    }
  }

  const getSeverityColor = (severity: EventSeverity): string => {
    switch (severity) {
      case 'critical': return 'bg-red-500'
      case 'high': return 'bg-orange-500'
      case 'medium': return 'bg-yellow-500'
      case 'low': return 'bg-blue-500'
      case 'info': return 'bg-gray-500'
      default: return 'bg-gray-500'
    }
  }

  const formatDuration = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60

    if (hours > 0) return `${hours}h ${minutes}m`
    if (minutes > 0) return `${minutes}m ${secs}s`
    return `${secs}s`
  }

  const getTimeLabel = (position: number): string => {
    const now = new Date()
    const timeRangeMs = timeRange === '1h' ? 60 * 60 * 1000 :
                       timeRange === '24h' ? 24 * 60 * 60 * 1000 :
                       timeRange === '7d' ? 7 * 24 * 60 * 60 * 1000 :
                       timeRange === '30d' ? 30 * 24 * 60 * 60 * 1000 :
                       90 * 24 * 60 * 60 * 1000

    const eventTime = new Date(now.getTime() - (position / 100) * timeRangeMs)
    
    if (timeRange === '1h' || timeRange === '24h') {
      return eventTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    } else {
      return eventTime.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Timeline Header */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Showing {events.length} security events over the last {timeRange}
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-400">Critical</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-400">High</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-400">Medium</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-400">Low</span>
          </div>
        </div>
      </div>

      {/* Timeline Visualization */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute top-8 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        
        {/* Time Labels */}
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
          <span>{getTimeLabel(0)}</span>
          <span>{getTimeLabel(25)}</span>
          <span>{getTimeLabel(50)}</span>
          <span>{getTimeLabel(75)}</span>
          <span>{getTimeLabel(100)}</span>
        </div>

        {/* Events */}
        <div className="relative pt-4 pb-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="absolute transform -translate-x-1/2 cursor-pointer"
              style={{ left: `${100 - event.position}%`, top: `${(index % 4) * 60 + 20}px` }}
              onMouseEnter={() => setHoveredEvent(event)}
              onMouseLeave={() => setHoveredEvent(null)}
              onClick={() => setSelectedEvent(event)}
            >
              {/* Event Node */}
              <div className={`w-8 h-8 rounded-full ${getSeverityColor(event.severity)} flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}>
                <div className="text-white">
                  {getEventIcon(event.type, event.severity)}
                </div>
              </div>
              
              {/* Event Line */}
              <div className="absolute top-8 left-1/2 w-0.5 h-4 bg-gray-300 dark:bg-gray-600"></div>
            </div>
          ))}
        </div>

        {/* Hover Tooltip */}
        {hoveredEvent && (
          <div className="absolute z-20 p-3 bg-gray-900 text-white rounded-lg shadow-lg text-sm pointer-events-none max-w-xs">
            <div className="font-semibold">{hoveredEvent.type.replace('_', ' ').toUpperCase()}</div>
            <div className="text-gray-300 text-xs mb-1">
              {new Date(hoveredEvent.timestamp).toLocaleString()}
            </div>
            <div className="text-gray-100">{hoveredEvent.description}</div>
            {hoveredEvent.duration && (
              <div className="text-gray-300 text-xs mt-1">
                Duration: {formatDuration(hoveredEvent.duration)}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Event Details Panel */}
      {selectedEvent && (
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full ${getSeverityColor(selectedEvent.severity)} flex items-center justify-center`}>
                {getEventIcon(selectedEvent.type, selectedEvent.severity)}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {selectedEvent.type.replace('_', ' ').toUpperCase()}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {new Date(selectedEvent.timestamp).toLocaleString()}
                </p>
              </div>
            </div>
            <button
              onClick={() => setSelectedEvent(null)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              ✕
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <h5 className="font-medium text-gray-900 dark:text-white mb-2">Event Details</h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-400">Severity:</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium text-white ${getSeverityColor(selectedEvent.severity)}`}>
                    {selectedEvent.severity.toUpperCase()}
                  </span>
                </div>
                {selectedEvent.duration && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                    <span className="text-gray-900 dark:text-white">{formatDuration(selectedEvent.duration)}</span>
                  </div>
                )}
                {selectedEvent.sourceIp && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 dark:text-gray-400">Source IP:</span>
                    <span className="text-gray-900 dark:text-white font-mono">{selectedEvent.sourceIp}</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h5 className="font-medium text-gray-900 dark:text-white mb-2">Attack Vector</h5>
              <div className="space-y-2 text-sm">
                <div className="text-gray-900 dark:text-white">{selectedEvent.attackVector}</div>
                <div className="text-gray-600 dark:text-gray-400">
                  Target: {selectedEvent.targetSystem}
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-medium text-gray-900 dark:text-white mb-2">Mitigation</h5>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {selectedEvent.mitigationAction}
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
            <h5 className="font-medium text-gray-900 dark:text-white mb-2">Description</h5>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {selectedEvent.description}
            </p>
          </div>
        </div>
      )}

      {/* Event List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
        <div className="px-6 py-3 border-b border-gray-200 dark:border-gray-700">
          <h4 className="font-medium text-gray-900 dark:text-white">Recent Events</h4>
        </div>
        <div className="max-h-64 overflow-y-auto">
          {events.slice(0, 10).map((event) => (
            <div
              key={event.id}
              className="flex items-center gap-3 px-6 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer border-b border-gray-100 dark:border-gray-700 last:border-b-0"
              onClick={() => setSelectedEvent(event)}
            >
              <div className={`w-2 h-2 rounded-full ${getSeverityColor(event.severity)}`}></div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {event.description}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {new Date(event.timestamp).toLocaleString()}
                </div>
              </div>
              <div className="text-xs text-gray-400">
                {event.targetSystem}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}