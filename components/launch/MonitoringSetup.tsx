'use client'

import { useState, useEffect } from 'react'
import { 
  Activity,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  TrendingUp,
  TrendingDown,
  Server,
  Globe,
  Zap,
  Shield,
  Database,
  Bell,
  BarChart3,
  Eye,
  Settings,
  RefreshCw,
  Gauge,
  WifiOff,
  Users,
  MousePointer,
  Package,
  AlertCircle,
  Smartphone,
  Monitor,
  Target,
  DollarSign,
  ShoppingCart,
  UserPlus,
  FileText
} from 'lucide-react'

interface HealthCheck {
  id: string
  name: string
  type: 'uptime' | 'api' | 'database' | 'cdn' | 'ssl' | 'dns'
  endpoint: string
  status: 'healthy' | 'degraded' | 'down' | 'checking'
  lastChecked: Date
  responseTime: number
  uptime: number
  alerts: Alert[]
}

interface PerformanceMetric {
  id: string
  name: string
  category: 'web-vitals' | 'api' | 'database' | 'custom'
  value: number
  unit: string
  target: number
  trend: 'up' | 'down' | 'stable'
  status: 'good' | 'warning' | 'critical'
  history: MetricPoint[]
}

interface MetricPoint {
  timestamp: Date
  value: number
}

interface BusinessMetric {
  id: string
  name: string
  category: 'conversion' | 'engagement' | 'revenue' | 'growth'
  value: number
  previousValue: number
  change: number
  changeType: 'percentage' | 'absolute'
  icon: React.ReactNode
  color: string
}

interface Alert {
  id: string
  severity: 'critical' | 'warning' | 'info'
  title: string
  description: string
  timestamp: Date
  acknowledged: boolean
  assignee?: string
  resolution?: string
}

interface MonitoringConfig {
  healthCheckInterval: number
  metricsInterval: number
  alertThresholds: {
    uptime: number
    responseTime: number
    errorRate: number
    cpuUsage: number
    memoryUsage: number
  }
  notificationChannels: NotificationChannel[]
}

interface NotificationChannel {
  id: string
  name: string
  type: 'email' | 'slack' | 'pagerduty' | 'webhook'
  enabled: boolean
  config: any
}

export default function MonitoringSetup() {
  const [healthChecks] = useState<HealthCheck[]>([
    {
      id: 'main-site',
      name: 'Main Website',
      type: 'uptime',
      endpoint: 'https://perfecxion.ai',
      status: 'healthy',
      lastChecked: new Date(),
      responseTime: 234,
      uptime: 99.99,
      alerts: []
    },
    {
      id: 'api-health',
      name: 'API Health',
      type: 'api',
      endpoint: 'https://api.perfecxion.ai/health',
      status: 'healthy',
      lastChecked: new Date(),
      responseTime: 89,
      uptime: 99.95,
      alerts: []
    },
    {
      id: 'database',
      name: 'Database Connection',
      type: 'database',
      endpoint: 'postgresql://db.perfecxion.ai',
      status: 'healthy',
      lastChecked: new Date(),
      responseTime: 12,
      uptime: 99.98,
      alerts: []
    },
    {
      id: 'cdn-status',
      name: 'CDN Performance',
      type: 'cdn',
      endpoint: 'https://cdn.perfecxion.ai',
      status: 'healthy',
      lastChecked: new Date(),
      responseTime: 45,
      uptime: 100,
      alerts: []
    },
    {
      id: 'ssl-cert',
      name: 'SSL Certificate',
      type: 'ssl',
      endpoint: 'https://perfecxion.ai',
      status: 'healthy',
      lastChecked: new Date(),
      responseTime: 156,
      uptime: 100,
      alerts: []
    }
  ])

  const [performanceMetrics] = useState<PerformanceMetric[]>([
    {
      id: 'lcp',
      name: 'Largest Contentful Paint',
      category: 'web-vitals',
      value: 2.1,
      unit: 's',
      target: 2.5,
      trend: 'down',
      status: 'good',
      history: generateMetricHistory(2.5, 0.3)
    },
    {
      id: 'fid',
      name: 'First Input Delay',
      category: 'web-vitals',
      value: 78,
      unit: 'ms',
      target: 100,
      trend: 'stable',
      status: 'good',
      history: generateMetricHistory(80, 20)
    },
    {
      id: 'cls',
      name: 'Cumulative Layout Shift',
      category: 'web-vitals',
      value: 0.08,
      unit: '',
      target: 0.1,
      trend: 'stable',
      status: 'good',
      history: generateMetricHistory(0.08, 0.02)
    },
    {
      id: 'api-latency',
      name: 'API Response Time',
      category: 'api',
      value: 234,
      unit: 'ms',
      target: 500,
      trend: 'down',
      status: 'good',
      history: generateMetricHistory(250, 50)
    },
    {
      id: 'error-rate',
      name: 'Error Rate',
      category: 'custom',
      value: 0.12,
      unit: '%',
      target: 0.1,
      trend: 'up',
      status: 'warning',
      history: generateMetricHistory(0.1, 0.05)
    }
  ])

  const [businessMetrics] = useState<BusinessMetric[]>([
    {
      id: 'visitors',
      name: 'Unique Visitors',
      category: 'engagement',
      value: 12453,
      previousValue: 10234,
      change: 21.7,
      changeType: 'percentage',
      icon: <Users className="w-5 h-5" />,
      color: 'blue'
    },
    {
      id: 'conversions',
      name: 'Lead Conversions',
      category: 'conversion',
      value: 347,
      previousValue: 289,
      change: 20.1,
      changeType: 'percentage',
      icon: <Target className="w-5 h-5" />,
      color: 'green'
    },
    {
      id: 'demo-requests',
      name: 'Demo Requests',
      category: 'conversion',
      value: 89,
      previousValue: 67,
      change: 32.8,
      changeType: 'percentage',
      icon: <MousePointer className="w-5 h-5" />,
      color: 'purple'
    },
    {
      id: 'signup-rate',
      name: 'Signup Rate',
      category: 'growth',
      value: 4.2,
      previousValue: 3.8,
      change: 10.5,
      changeType: 'percentage',
      icon: <UserPlus className="w-5 h-5" />,
      color: 'indigo'
    }
  ])

  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: 'alert-1',
      severity: 'warning',
      title: 'Elevated Error Rate Detected',
      description: 'Error rate has increased to 0.12% (threshold: 0.1%)',
      timestamp: new Date(Date.now() - 1800000),
      acknowledged: false
    },
    {
      id: 'alert-2',
      severity: 'info',
      title: 'Scheduled Maintenance Reminder',
      description: 'Database maintenance window scheduled for tonight 2-4 AM PST',
      timestamp: new Date(Date.now() - 3600000),
      acknowledged: true,
      assignee: 'DevOps Team'
    }
  ])

  const [config] = useState<MonitoringConfig>({
    healthCheckInterval: 30,
    metricsInterval: 60,
    alertThresholds: {
      uptime: 99.9,
      responseTime: 1000,
      errorRate: 0.1,
      cpuUsage: 80,
      memoryUsage: 85
    },
    notificationChannels: [
      {
        id: 'email',
        name: 'Email Notifications',
        type: 'email',
        enabled: true,
        config: { recipients: ['ops@perfecxion.ai'] }
      },
      {
        id: 'slack',
        name: 'Slack Alerts',
        type: 'slack',
        enabled: true,
        config: { channel: '#alerts', webhook: 'https://hooks.slack.com/...' }
      },
      {
        id: 'pagerduty',
        name: 'PagerDuty Integration',
        type: 'pagerduty',
        enabled: true,
        config: { serviceKey: 'pd-service-key' }
      }
    ]
  })

  const [selectedTimeRange, setSelectedTimeRange] = useState<'1h' | '24h' | '7d' | '30d'>('24h')
  const [isAutoRefresh, setIsAutoRefresh] = useState(true)
  const [lastRefresh, setLastRefresh] = useState(new Date())

  // Generate mock metric history
  function generateMetricHistory(baseValue: number, variance: number): MetricPoint[] {
    const points: MetricPoint[] = []
    const now = new Date()
    
    for (let i = 24; i >= 0; i--) {
      const timestamp = new Date(now.getTime() - i * 3600000) // 1 hour intervals
      const value = baseValue + (Math.random() - 0.5) * 2 * variance
      points.push({ timestamp, value })
    }
    
    return points
  }

  useEffect(() => {
    if (!isAutoRefresh) return

    const interval = setInterval(() => {
      setLastRefresh(new Date())
      // Refresh data here
    }, 30000) // 30 seconds

    return () => clearInterval(interval)
  }, [isAutoRefresh])

  const acknowledgeAlert = (alertId: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === alertId 
        ? { ...alert, acknowledged: true, assignee: 'Current User' }
        : alert
    ))
  }

  const getHealthIcon = (type: string) => {
    switch (type) {
      case 'uptime': return <Globe className="w-4 h-4" />
      case 'api': return <Server className="w-4 h-4" />
      case 'database': return <Database className="w-4 h-4" />
      case 'cdn': return <Package className="w-4 h-4" />
      case 'ssl': return <Shield className="w-4 h-4" />
      case 'dns': return <Globe className="w-4 h-4" />
      default: return <Activity className="w-4 h-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': 
      case 'good': return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200'
      case 'degraded':
      case 'warning': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
      case 'down':
      case 'critical': return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical': return <XCircle className="w-5 h-5 text-red-600" />
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-600" />
      case 'info': return <AlertCircle className="w-5 h-5 text-blue-600" />
      default: return <Bell className="w-5 h-5 text-gray-600" />
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-500" />
      case 'down': return <TrendingDown className="w-4 h-4 text-red-500" />
      default: return <Activity className="w-4 h-4 text-gray-400" />
    }
  }

  const getBusinessMetricColor = (color: string) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200',
      green: 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200',
      purple: 'text-purple-600 bg-purple-100 dark:bg-purple-900 dark:text-purple-200',
      indigo: 'text-indigo-600 bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-200'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold dark:text-white flex items-center">
                <Activity className="w-8 h-8 mr-3 text-green-600" />
                Production Monitoring Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Real-time monitoring, alerting, and performance tracking
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value as any)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="1h">Last Hour</option>
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
              </select>
              
              <button
                onClick={() => setIsAutoRefresh(!isAutoRefresh)}
                className={`px-3 py-2 rounded-lg border ${
                  isAutoRefresh 
                    ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300' 
                    : 'bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'
                }`}
              >
                <RefreshCw className={`w-4 h-4 ${isAutoRefresh ? 'animate-spin' : ''}`} />
              </button>
              
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Last refresh: {lastRefresh.toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Active Alerts */}
        {alerts.filter(a => !a.acknowledged).length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold dark:text-white mb-4">Active Alerts</h2>
            <div className="space-y-4">
              {alerts.filter(a => !a.acknowledged).map((alert) => (
                <div key={alert.id} className={`rounded-lg p-4 border ${
                  alert.severity === 'critical' 
                    ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                    : alert.severity === 'warning'
                    ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
                    : 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
                }`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      {getSeverityIcon(alert.severity)}
                      <div>
                        <h3 className={`font-semibold ${
                          alert.severity === 'critical' 
                            ? 'text-red-800 dark:text-red-200'
                            : alert.severity === 'warning'
                            ? 'text-yellow-800 dark:text-yellow-200'
                            : 'text-blue-800 dark:text-blue-200'
                        }`}>
                          {alert.title}
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                          {alert.description}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                          {alert.timestamp.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => acknowledgeAlert(alert.id)}
                      className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      Acknowledge
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Business Metrics */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold dark:text-white mb-4">Business Metrics</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {businessMetrics.map((metric) => (
              <div key={metric.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded ${getBusinessMetricColor(metric.color)}`}>
                    {metric.icon}
                  </div>
                  <div className={`text-sm font-semibold ${
                    metric.change > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {metric.change > 0 ? '+' : ''}{metric.change}%
                  </div>
                </div>
                <div className="text-2xl font-bold dark:text-white">
                  {metric.value.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {metric.name}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  Previous: {metric.previousValue.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Health Checks */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700">
              <div className="p-6 border-b dark:border-gray-700">
                <h3 className="font-semibold text-lg dark:text-white">System Health</h3>
              </div>
              <div className="p-6 space-y-4">
                {healthChecks.map((check) => (
                  <div key={check.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded ${
                        check.status === 'healthy' 
                          ? 'bg-green-100 dark:bg-green-900/20' 
                          : check.status === 'degraded'
                          ? 'bg-yellow-100 dark:bg-yellow-900/20'
                          : 'bg-red-100 dark:bg-red-900/20'
                      }`}>
                        {getHealthIcon(check.type)}
                      </div>
                      <div>
                        <div className="font-medium dark:text-white">{check.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {check.responseTime}ms • {check.uptime}% uptime
                        </div>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      getStatusColor(check.status)
                    }`}>
                      {check.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700">
              <div className="p-6 border-b dark:border-gray-700">
                <h3 className="font-semibold text-lg dark:text-white">Performance Metrics</h3>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {performanceMetrics.map((metric) => (
                    <div key={metric.id}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <h4 className="font-medium dark:text-white">{metric.name}</h4>
                          {getTrendIcon(metric.trend)}
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            getStatusColor(metric.status)
                          }`}>
                            {metric.status}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold dark:text-white">
                            {metric.value}{metric.unit}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            Target: {metric.target}{metric.unit}
                          </div>
                        </div>
                      </div>
                      
                      {/* Simple metric visualization */}
                      <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className={`absolute h-full transition-all duration-300 ${
                            metric.status === 'good' ? 'bg-green-500' :
                            metric.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ 
                            width: `${Math.min((metric.value / metric.target) * 100, 100)}%` 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notification Channels */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
          <h3 className="font-semibold text-lg dark:text-white mb-4">Notification Channels</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {config.notificationChannels.map((channel) => (
              <div key={channel.id} className="border dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium dark:text-white">{channel.name}</h4>
                  <div className={`w-3 h-3 rounded-full ${
                    channel.enabled ? 'bg-green-500' : 'bg-gray-400'
                  }`} />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Type: {channel.type}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  {channel.enabled ? 'Active' : 'Inactive'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}