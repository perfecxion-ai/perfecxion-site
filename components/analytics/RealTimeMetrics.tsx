'use client'

import { useState, useEffect } from 'react'
import { Activity, Cpu, HardDrive, Network, Clock, AlertCircle, CheckCircle, TrendingUp } from 'lucide-react'
import { TimePeriod, RealTimeMetrics as RealTimeMetricsType } from '@/lib/analytics-types'

interface RealTimeMetricsProps {
  timeRange: TimePeriod
}

interface MetricDisplay {
  id: string
  label: string
  value: number
  unit: string
  icon: React.ReactNode
  color: string
  threshold: {
    warning: number
    critical: number
  }
  format: 'percentage' | 'number' | 'bytes' | 'ms'
}

export default function RealTimeMetrics({ timeRange }: RealTimeMetricsProps) {
  const [metrics, setMetrics] = useState<RealTimeMetricsType>({
    timestamp: new Date().toISOString(),
    activeScans: 8,
    threatsDetected: 3,
    systemsOnline: 47,
    alertsTriggered: 12,
    cpuUsage: 68.5,
    memoryUsage: 74.2,
    networkTraffic: 2847,
    responseTime: 145
  })

  const [isConnected, setIsConnected] = useState(true)
  const [lastUpdate, setLastUpdate] = useState(new Date())

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        timestamp: new Date().toISOString(),
        activeScans: Math.max(0, prev.activeScans + Math.floor((Math.random() - 0.5) * 4)),
        threatsDetected: Math.max(0, prev.threatsDetected + Math.floor((Math.random() - 0.7) * 3)),
        systemsOnline: Math.max(40, Math.min(50, prev.systemsOnline + Math.floor((Math.random() - 0.5) * 2))),
        alertsTriggered: Math.max(0, prev.alertsTriggered + Math.floor((Math.random() - 0.8) * 3)),
        cpuUsage: Math.max(10, Math.min(95, prev.cpuUsage + (Math.random() - 0.5) * 10)),
        memoryUsage: Math.max(20, Math.min(90, prev.memoryUsage + (Math.random() - 0.5) * 8)),
        networkTraffic: Math.max(100, prev.networkTraffic + Math.floor((Math.random() - 0.5) * 1000)),
        responseTime: Math.max(50, Math.min(500, prev.responseTime + Math.floor((Math.random() - 0.5) * 50)))
      }))
      setLastUpdate(new Date())
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const formatValue = (value: number, format: MetricDisplay['format']): string => {
    switch (format) {
      case 'percentage':
        return `${value.toFixed(1)}%`
      case 'bytes':
        if (value >= 1024 * 1024 * 1024) {
          return `${(value / (1024 * 1024 * 1024)).toFixed(1)} GB`
        } else if (value >= 1024 * 1024) {
          return `${(value / (1024 * 1024)).toFixed(1)} MB`
        } else if (value >= 1024) {
          return `${(value / 1024).toFixed(1)} KB`
        }
        return `${value} B`
      case 'ms':
        return `${value}ms`
      case 'number':
      default:
        return value.toLocaleString()
    }
  }

  const getStatusColor = (value: number, threshold: MetricDisplay['threshold']): string => {
    if (value >= threshold.critical) return 'text-red-600 bg-red-100 dark:bg-red-900/20'
    if (value >= threshold.warning) return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20'
    return 'text-green-600 bg-green-100 dark:bg-green-900/20'
  }

  const getProgressColor = (value: number, threshold: MetricDisplay['threshold']): string => {
    if (value >= threshold.critical) return 'bg-red-500'
    if (value >= threshold.warning) return 'bg-yellow-500'
    return 'bg-green-500'
  }

  const displayMetrics: MetricDisplay[] = [
    {
      id: 'cpu',
      label: 'CPU Usage',
      value: metrics.cpuUsage,
      unit: '%',
      icon: <Cpu className="w-5 h-5" />,
      color: 'text-blue-600',
      threshold: { warning: 70, critical: 85 },
      format: 'percentage'
    },
    {
      id: 'memory',
      label: 'Memory Usage',
      value: metrics.memoryUsage,
      unit: '%',
      icon: <HardDrive className="w-5 h-5" />,
      color: 'text-purple-600',
      threshold: { warning: 75, critical: 90 },
      format: 'percentage'
    },
    {
      id: 'network',
      label: 'Network Traffic',
      value: metrics.networkTraffic,
      unit: 'MB/s',
      icon: <Network className="w-5 h-5" />,
      color: 'text-green-600',
      threshold: { warning: 5000, critical: 8000 },
      format: 'bytes'
    },
    {
      id: 'response',
      label: 'Response Time',
      value: metrics.responseTime,
      unit: 'ms',
      icon: <Clock className="w-5 h-5" />,
      color: 'text-orange-600',
      threshold: { warning: 200, critical: 400 },
      format: 'ms'
    }
  ]

  const activityMetrics = [
    {
      id: 'scans',
      label: 'Active Scans',
      value: metrics.activeScans,
      icon: <Activity className="w-5 h-5 text-blue-600" />,
      change: '+2'
    },
    {
      id: 'threats',
      label: 'Threats Detected',
      value: metrics.threatsDetected,
      icon: <AlertCircle className="w-5 h-5 text-red-600" />,
      change: '+1'
    },
    {
      id: 'systems',
      label: 'Systems Online',
      value: metrics.systemsOnline,
      icon: <CheckCircle className="w-5 h-5 text-green-600" />,
      change: '0'
    },
    {
      id: 'alerts',
      label: 'Active Alerts',
      value: metrics.alertsTriggered,
      icon: <TrendingUp className="w-5 h-5 text-yellow-600" />,
      change: '+3'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Connection Status */}
      <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
          <span className="font-medium text-gray-900 dark:text-white">
            Real-time Monitoring
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {isConnected ? 'Connected' : 'Disconnected'}
          </span>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Last updated: {lastUpdate.toLocaleTimeString()}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* System Performance Metrics */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            System Performance
          </h3>
          <div className="space-y-4">
            {displayMetrics.map((metric) => (
              <div key={metric.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={metric.color}>
                      {metric.icon}
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {metric.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-lg font-semibold text-gray-900 dark:text-white">
                      {formatValue(metric.value, metric.format)}
                    </span>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(metric.value, metric.threshold)}`}>
                      {metric.value >= metric.threshold.critical ? 'Critical' : 
                       metric.value >= metric.threshold.warning ? 'Warning' : 'Normal'}
                    </div>
                  </div>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${getProgressColor(metric.value, metric.threshold)}`}
                    style={{ 
                      width: `${Math.min(100, Math.max(0, metric.format === 'percentage' ? metric.value : (metric.value / (metric.threshold.critical * 1.2)) * 100))}%` 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Metrics */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Activity Overview
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {activityMetrics.map((metric) => (
              <div key={metric.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  {metric.icon}
                  <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${
                    metric.change.startsWith('+') && metric.change !== '+0' 
                      ? 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                      : metric.change === '0' || metric.change === '+0'
                      ? 'bg-gray-100 text-gray-700 dark:bg-gray-600 dark:text-gray-300'
                      : 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {metric.value.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity Timeline */}
          <div className="mt-6">
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">Recent Activity</h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {[
                { time: '2 min ago', event: 'Vulnerability scan completed on web-server-03', type: 'success' },
                { time: '5 min ago', event: 'SQL injection attempt blocked from 192.168.1.45', type: 'warning' },
                { time: '8 min ago', event: 'New threat signature deployed', type: 'info' },
                { time: '12 min ago', event: 'Critical vulnerability patched on database-01', type: 'success' },
                { time: '15 min ago', event: 'Unusual network traffic detected', type: 'warning' }
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    activity.type === 'success' ? 'bg-green-500' :
                    activity.type === 'warning' ? 'bg-yellow-500' :
                    activity.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
                  }`} />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-gray-900 dark:text-white">{activity.event}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}