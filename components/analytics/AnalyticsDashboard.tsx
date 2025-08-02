'use client'

import { useState, useEffect } from 'react'
import { Settings, RefreshCw, Download, Calendar, Filter, BarChart3, Shield, AlertTriangle } from 'lucide-react'
import { SecurityMetrics, TimePeriod, AnalyticsFilters } from '@/lib/analytics-types'

// Simple placeholder components
const KPIGrid = ({ metrics }: { metrics: SecurityMetrics }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Threat Detection Rate</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{metrics.threatDetectionRate.toFixed(1)}%</p>
        </div>
        <Shield className="w-8 h-8 text-green-500" />
      </div>
    </div>
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Active Threats</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{metrics.activeThreats}</p>
        </div>
        <AlertTriangle className="w-8 h-8 text-red-500" />
      </div>
    </div>
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Compliance Score</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{metrics.complianceScore.toFixed(1)}%</p>
        </div>
        <BarChart3 className="w-8 h-8 text-blue-500" />
      </div>
    </div>
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400">System Uptime</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{metrics.systemUptime.toFixed(1)}%</p>
        </div>
        <Shield className="w-8 h-8 text-green-500" />
      </div>
    </div>
  </div>
)

const DashboardWidget = ({ title, description, children, fullWidth }: { 
  title: string; 
  description: string; 
  children: React.ReactNode; 
  fullWidth?: boolean 
}) => (
  <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm ${fullWidth ? 'col-span-full' : ''}`}>
    <div className="border-b border-gray-200 dark:border-gray-700 p-4">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </div>
    {children}
  </div>
)

export default function AnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState<TimePeriod>('24h')
  const [filters, setFilters] = useState<AnalyticsFilters>({})
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())
  const [showFilters, setShowFilters] = useState(false)

  // Mock data - replace with real API calls
  const [securityMetrics, setSecurityMetrics] = useState<SecurityMetrics>({
    id: 'current',
    timestamp: new Date().toISOString(),
    threatDetectionRate: 94.2,
    vulnerabilityResolutionTime: 2.3,
    complianceScore: 87.5,
    attacksPrevented: 1247,
    falsePosivitiveRate: 2.1,
    systemUptime: 99.8,
    responseTime: 145,
    activeThreats: 12
  })

  const handleRefresh = async () => {
    setIsRefreshing(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setLastUpdated(new Date())
      
      // Update metrics with slight variations
      setSecurityMetrics(prev => ({
        ...prev,
        timestamp: new Date().toISOString(),
        threatDetectionRate: prev.threatDetectionRate + (Math.random() - 0.5) * 2,
        vulnerabilityResolutionTime: Math.max(0.5, prev.vulnerabilityResolutionTime + (Math.random() - 0.5) * 0.5),
        complianceScore: Math.min(100, Math.max(0, prev.complianceScore + (Math.random() - 0.5) * 5)),
        activeThreats: Math.max(0, prev.activeThreats + Math.floor((Math.random() - 0.5) * 6))
      }))
    } finally {
      setIsRefreshing(false)
    }
  }

  const handleExport = () => {
    // Implement export functionality
    console.log('Exporting dashboard data...')
  }

  const handleTimeRangeChange = (newRange: TimePeriod) => {
    setTimeRange(newRange)
    // Trigger data reload with new time range
  }

  useEffect(() => {
    // Set up real-time updates
    const interval = setInterval(() => {
      setLastUpdated(new Date())
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      {/* Dashboard Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Calendar className="w-4 h-4" />
            <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Time Range:
            </label>
            <select
              value={timeRange}
              onChange={(e) => handleTimeRangeChange(e.target.value as TimePeriod)}
              className="px-3 py-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="1h">Last Hour</option>
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center gap-2 text-sm"
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>
          
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2 text-sm"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            Refresh
          </button>
          
          <button
            onClick={handleExport}
            className="px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center gap-2 text-sm"
          >
            <Download className="w-4 h-4" />
            Export
          </button>
          
          <button className="p-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Interactive Filters */}
      {showFilters && (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Filters</h3>
          <p className="text-gray-600 dark:text-gray-400">Advanced filtering options will be available here.</p>
          <button 
            onClick={() => setShowFilters(false)}
            className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      )}

      {/* KPI Grid */}
      <KPIGrid metrics={securityMetrics} />

      {/* Placeholder for charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardWidget
          title="Vulnerability Heat Map"
          description="System vulnerability distribution by severity"
          fullWidth={false}
        >
          <div className="p-8 text-center text-gray-500 dark:text-gray-400">
            <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>Vulnerability heatmap visualization</p>
          </div>
        </DashboardWidget>

        <DashboardWidget
          title="Security Trends"
          description="Key security metrics over time"
          fullWidth={false}
        >
          <div className="p-8 text-center text-gray-500 dark:text-gray-400">
            <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>Trend analysis chart</p>
          </div>
        </DashboardWidget>
      </div>

      {/* Attack Timeline */}
      <DashboardWidget
        title="Attack Timeline"
        description="Chronological view of security events and incidents"
        fullWidth={true}
      >
        <div className="p-8 text-center text-gray-500 dark:text-gray-400">
          <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <p>Attack timeline visualization</p>
        </div>
      </DashboardWidget>

      {/* Additional Widgets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardWidget
          title="Compliance Status"
          description="Current compliance across frameworks"
          fullWidth={false}
        >
          <div className="space-y-4 p-4">
            {[
              { name: 'SOC 2', score: 92, status: 'compliant' },
              { name: 'ISO 27001', score: 88, status: 'compliant' },
              { name: 'GDPR', score: 95, status: 'compliant' },
              { name: 'HIPAA', score: 76, status: 'attention_needed' }
            ].map((compliance, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="font-medium text-gray-900 dark:text-white">
                  {compliance.name}
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        compliance.status === 'compliant' 
                          ? 'bg-green-500' 
                          : compliance.status === 'attention_needed'
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                      }`}
                      style={{ width: `${compliance.score}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {compliance.score}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </DashboardWidget>

        <DashboardWidget
          title="System Health"
          description="Current system status and performance"
          fullWidth={false}
        >
          <div className="space-y-4 p-4">
            {[
              { name: 'API Gateway', status: 'online', uptime: '99.9%' },
              { name: 'Threat Scanner', status: 'online', uptime: '99.8%' },
              { name: 'ML Pipeline', status: 'warning', uptime: '97.2%' },
              { name: 'Data Lake', status: 'online', uptime: '99.9%' }
            ].map((system, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    system.status === 'online' 
                      ? 'bg-green-500' 
                      : system.status === 'warning'
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  }`} />
                  <span className="font-medium text-gray-900 dark:text-white">
                    {system.name}
                  </span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {system.uptime}
                </span>
              </div>
            ))}
          </div>
        </DashboardWidget>

        <DashboardWidget
          title="Recent Alerts"
          description="Latest security alerts and notifications"
          fullWidth={false}
        >
          <div className="space-y-3 p-4">
            {[
              { type: 'critical', message: 'SQL injection attempt blocked', time: '2 min ago' },
              { type: 'warning', message: 'Unusual API traffic pattern', time: '15 min ago' },
              { type: 'info', message: 'Security scan completed', time: '1 hour ago' },
              { type: 'success', message: 'Vulnerability patched', time: '2 hours ago' }
            ].map((alert, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                  alert.type === 'critical' 
                    ? 'bg-red-500' 
                    : alert.type === 'warning'
                    ? 'bg-yellow-500'
                    : alert.type === 'info'
                    ? 'bg-blue-500'
                    : 'bg-green-500'
                }`} />
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-gray-900 dark:text-white">
                    {alert.message}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {alert.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </DashboardWidget>
      </div>
    </div>
  )
}