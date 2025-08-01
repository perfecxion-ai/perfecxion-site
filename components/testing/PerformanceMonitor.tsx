'use client'

import { useState, useEffect, useRef } from 'react'
import { 
  Activity,
  Zap,
  Clock,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Monitor,
  Smartphone,
  Wifi,
  HardDrive,
  Cpu,
  MemoryStick,
  Image,
  Download,
  Upload,
  Globe,
  BarChart3,
  LineChart,
  PieChart,
  Settings,
  Play,
  Pause,
  RefreshCw,
  Type,
  Target
} from 'lucide-react'

interface PerformanceMetric {
  id: string
  name: string
  value: number
  unit: string
  target: number
  status: 'good' | 'needs-improvement' | 'poor'
  trend: 'up' | 'down' | 'stable'
  description: string
  category: 'loading' | 'interactivity' | 'visual-stability' | 'network' | 'resource'
}

interface CoreWebVitals {
  lcp: number // Largest Contentful Paint
  fid: number // First Input Delay  
  cls: number // Cumulative Layout Shift
  fcp: number // First Contentful Paint
  ttfb: number // Time to First Byte
  si: number // Speed Index
}

interface ResourceTiming {
  name: string
  type: 'document' | 'stylesheet' | 'script' | 'image' | 'font' | 'xhr' | 'other'
  size: number
  duration: number
  startTime: number
  endTime: number
  transferSize: number
  encodedBodySize: number
  decodedBodySize: number
}

interface PerformanceBudget {
  id: string
  name: string
  metric: string
  budget: number
  actual: number
  unit: string
  status: 'under' | 'at' | 'over'
  impact: 'low' | 'medium' | 'high'
}

interface OptimizationRecommendation {
  id: string
  title: string
  description: string
  category: 'critical' | 'important' | 'moderate' | 'minor'
  impact: number // 0-100
  effort: 'low' | 'medium' | 'high'
  implementation: string
  estimatedSavings: string
}

export default function PerformanceMonitor() {
  const [isMonitoring, setIsMonitoring] = useState(false)
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([])
  const [coreWebVitals, setCoreWebVitals] = useState<CoreWebVitals>({
    lcp: 0,
    fid: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0,
    si: 0
  })
  const [resourceTimings, setResourceTimings] = useState<ResourceTiming[]>([])
  const [performanceBudgets, setPerformanceBudgets] = useState<PerformanceBudget[]>([])
  const [recommendations, setRecommendations] = useState<OptimizationRecommendation[]>([])
  const [selectedTab, setSelectedTab] = useState<'overview' | 'vitals' | 'resources' | 'budgets' | 'recommendations'>('overview')
  const [deviceType, setDeviceType] = useState<'desktop' | 'mobile'>('desktop')
  const [connectionType, setConnectionType] = useState<'4g' | '3g' | 'slow-3g'>('4g')
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Initialize with mock data
    initializePerformanceData()
    
    // Start monitoring if enabled
    if (isMonitoring) {
      startPerformanceMonitoring()
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isMonitoring])

  const initializePerformanceData = () => {
    // Initialize Core Web Vitals
    const initialVitals: CoreWebVitals = {
      lcp: 2400,
      fid: 85,
      cls: 0.08,
      fcp: 1800,
      ttfb: 320,
      si: 2100
    }
    setCoreWebVitals(initialVitals)

    // Initialize performance metrics
    const initialMetrics: PerformanceMetric[] = [
      {
        id: 'lcp',
        name: 'Largest Contentful Paint',
        value: initialVitals.lcp,
        unit: 'ms',
        target: 2500,
        status: 'good',
        trend: 'stable',
        description: 'Time until the largest content element is rendered',
        category: 'loading'
      },
      {
        id: 'fid',
        name: 'First Input Delay',
        value: initialVitals.fid,
        unit: 'ms',
        target: 100,
        status: 'good',
        trend: 'down',
        description: 'Time from first user interaction to browser response',
        category: 'interactivity'
      },
      {
        id: 'cls',
        name: 'Cumulative Layout Shift',
        value: initialVitals.cls,
        unit: '',
        target: 0.1,
        status: 'good',
        trend: 'stable',
        description: 'Amount of unexpected layout shift during page load',
        category: 'visual-stability'
      },
      {
        id: 'ttfb',
        name: 'Time to First Byte',
        value: initialVitals.ttfb,
        unit: 'ms',
        target: 600,
        status: 'good',
        trend: 'down',
        description: 'Time until first byte is received from server',
        category: 'network'
      },
      {
        id: 'bundle-size',
        name: 'JavaScript Bundle Size',
        value: 245,
        unit: 'KB',
        target: 200,
        status: 'needs-improvement',
        trend: 'up',
        description: 'Total size of JavaScript bundles',
        category: 'resource'
      },
      {
        id: 'image-optimization',
        name: 'Image Optimization',
        value: 87,
        unit: '%',
        target: 90,
        status: 'needs-improvement',
        trend: 'up',
        description: 'Percentage of optimized images',
        category: 'resource'
      }
    ]
    setMetrics(initialMetrics)

    // Initialize resource timings
    const initialResources: ResourceTiming[] = [
      {
        name: '/main.js',
        type: 'script',
        size: 85600,
        duration: 142,
        startTime: 245,
        endTime: 387,
        transferSize: 85600,
        encodedBodySize: 245678,
        decodedBodySize: 245678
      },
      {
        name: '/styles.css',
        type: 'stylesheet',
        size: 24800,
        duration: 78,
        startTime: 156,
        endTime: 234,
        transferSize: 24800,
        encodedBodySize: 64500,
        decodedBodySize: 64500
      },
      {
        name: '/hero-image.jpg',
        type: 'image',
        size: 156000,
        duration: 245,
        startTime: 567,
        endTime: 812,
        transferSize: 156000,
        encodedBodySize: 156000,
        decodedBodySize: 156000
      },
      {
        name: '/api/data',
        type: 'xhr',
        size: 3400,
        duration: 89,
        startTime: 1245,
        endTime: 1334,
        transferSize: 3400,
        encodedBodySize: 3400,
        decodedBodySize: 3400
      }
    ]
    setResourceTimings(initialResources)

    // Initialize performance budgets
    const initialBudgets: PerformanceBudget[] = [
      {
        id: 'js-budget',
        name: 'JavaScript Budget',
        metric: 'Total JS Size',
        budget: 200,
        actual: 245,
        unit: 'KB',
        status: 'over',
        impact: 'high'
      },
      {
        id: 'css-budget',
        name: 'CSS Budget',
        metric: 'Total CSS Size',
        budget: 50,
        actual: 48,
        unit: 'KB',
        status: 'under',
        impact: 'low'
      },
      {
        id: 'image-budget',
        name: 'Image Budget',
        metric: 'Total Image Size',
        budget: 500,
        actual: 634,
        unit: 'KB',
        status: 'over',
        impact: 'medium'
      },
      {
        id: 'font-budget',
        name: 'Font Budget',
        metric: 'Total Font Size',
        budget: 100,
        actual: 78,
        unit: 'KB',
        status: 'under',
        impact: 'low'
      }
    ]
    setPerformanceBudgets(initialBudgets)

    // Initialize recommendations
    const initialRecommendations: OptimizationRecommendation[] = [
      {
        id: 'code-splitting',
        title: 'Implement Code Splitting',
        description: 'Break up large JavaScript bundles using dynamic imports and route-based code splitting',
        category: 'critical',
        impact: 85,
        effort: 'medium',
        implementation: 'Use Next.js dynamic imports and lazy loading for non-critical components',
        estimatedSavings: '45% reduction in initial bundle size'
      },
      {
        id: 'image-optimization',
        title: 'Optimize Images',
        description: 'Convert images to modern formats (WebP, AVIF) and implement responsive images',
        category: 'important',
        impact: 72,
        effort: 'low',
        implementation: 'Use Next.js Image component with automatic format optimization',
        estimatedSavings: '60% reduction in image payload'
      },
      {
        id: 'preload-critical',
        title: 'Preload Critical Resources',
        description: 'Preload critical CSS and fonts to improve render times',
        category: 'important',
        impact: 68,
        effort: 'low',
        implementation: 'Add <link rel="preload"> for critical resources in document head',
        estimatedSavings: '300ms faster First Contentful Paint'
      },
      {
        id: 'service-worker',
        title: 'Implement Service Worker Caching',
        description: 'Cache static assets and API responses using service worker',
        category: 'moderate',
        impact: 55,
        effort: 'high',
        implementation: 'Implement Workbox for intelligent caching strategies',
        estimatedSavings: '80% faster repeat visits'
      },
      {
        id: 'eliminate-render-blocking',
        title: 'Eliminate Render-Blocking Resources',
        description: 'Defer non-critical CSS and JavaScript to improve page load times',
        category: 'important',
        impact: 64,
        effort: 'medium',
        implementation: 'Use media queries for non-critical CSS and defer non-essential JavaScript',
        estimatedSavings: '25% faster page load'
      }
    ]
    setRecommendations(initialRecommendations)
  }

  const startPerformanceMonitoring = () => {
    intervalRef.current = setInterval(() => {
      // Simulate real-time performance data updates
      updatePerformanceMetrics()
    }, 2000)
  }

  const updatePerformanceMetrics = () => {
    // Simulate metric fluctuations
    setMetrics(prev => prev.map(metric => {
      const variation = (Math.random() - 0.5) * 0.1 // ±5% variation
      const newValue = metric.value * (1 + variation)
      
      // Update status based on target
      let status: 'good' | 'needs-improvement' | 'poor'
      if (metric.id === 'cls') {
        status = newValue <= metric.target ? 'good' : 
                newValue <= metric.target * 1.5 ? 'needs-improvement' : 'poor'
      } else if (metric.unit === '%') {
        status = newValue >= metric.target ? 'good' :
                newValue >= metric.target * 0.8 ? 'needs-improvement' : 'poor'
      } else {
        status = newValue <= metric.target ? 'good' : 
                newValue <= metric.target * 1.5 ? 'needs-improvement' : 'poor'
      }

      return {
        ...metric,
        value: Math.round(newValue * 100) / 100,
        status
      }
    }))

    // Update Core Web Vitals
    setCoreWebVitals(prev => ({
      lcp: Math.round((prev.lcp + (Math.random() - 0.5) * 200) * 100) / 100,
      fid: Math.round((prev.fid + (Math.random() - 0.5) * 10) * 100) / 100,
      cls: Math.round((prev.cls + (Math.random() - 0.5) * 0.02) * 1000) / 1000,
      fcp: Math.round((prev.fcp + (Math.random() - 0.5) * 150) * 100) / 100,
      ttfb: Math.round((prev.ttfb + (Math.random() - 0.5) * 50) * 100) / 100,
      si: Math.round((prev.si + (Math.random() - 0.5) * 180) * 100) / 100
    }))
  }

  const toggleMonitoring = () => {
    setIsMonitoring(!isMonitoring)
    if (!isMonitoring) {
      startPerformanceMonitoring()
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }

  const runPerformanceAudit = async () => {
    // Simulate performance audit
    setIsMonitoring(true)
    
    // Simulate audit duration
    setTimeout(() => {
      setIsMonitoring(false)
      // Update metrics with audit results
      initializePerformanceData()
    }, 5000)
  }

  const getMetricStatus = (status: string) => {
    switch (status) {
      case 'good': return { color: 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200', icon: <CheckCircle className="w-4 h-4" /> }
      case 'needs-improvement': return { color: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200', icon: <AlertTriangle className="w-4 h-4" /> }
      case 'poor': return { color: 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200', icon: <AlertTriangle className="w-4 h-4" /> }
      default: return { color: 'text-gray-500 bg-gray-100 dark:bg-gray-800 dark:text-gray-400', icon: <Clock className="w-4 h-4" /> }
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-red-500" />
      case 'down': return <TrendingDown className="w-4 h-4 text-green-500" />
      default: return <Activity className="w-4 h-4 text-gray-400" />
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'loading': return <Clock className="w-4 h-4" />
      case 'interactivity': return <Zap className="w-4 h-4" />
      case 'visual-stability': return <Monitor className="w-4 h-4" />
      case 'network': return <Wifi className="w-4 h-4" />
      case 'resource': return <HardDrive className="w-4 h-4" />
      default: return <Activity className="w-4 h-4" />
    }
  }

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'script': return <Cpu className="w-4 h-4 text-yellow-600" />
      case 'stylesheet': return <BarChart3 className="w-4 h-4 text-blue-600" />
      case 'image': return <Image className="w-4 h-4 text-green-600" />
      case 'font': return <Type className="w-4 h-4 text-purple-600" />
      case 'xhr': return <Globe className="w-4 h-4 text-orange-600" />
      default: return <HardDrive className="w-4 h-4 text-gray-400" />
    }
  }

  const formatBytes = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  const formatDuration = (ms: number) => {
    if (ms < 1000) return `${Math.round(ms)}ms`
    return `${(ms / 1000).toFixed(2)}s`
  }

  const getCWVStatus = (metric: string, value: number) => {
    const thresholds = {
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      fcp: { good: 1800, poor: 3000 },
      ttfb: { good: 600, poor: 1500 },
      si: { good: 3400, poor: 5800 }
    }

    const threshold = thresholds[metric as keyof typeof thresholds]
    if (!threshold) return 'good'

    if (value <= threshold.good) return 'good'
    if (value <= threshold.poor) return 'needs-improvement'
    return 'poor'
  }

  const getBudgetStatus = (status: string) => {
    switch (status) {
      case 'under': return { color: 'text-green-600', icon: <CheckCircle className="w-4 h-4" /> }
      case 'at': return { color: 'text-yellow-600', icon: <AlertTriangle className="w-4 h-4" /> }
      case 'over': return { color: 'text-red-600', icon: <AlertTriangle className="w-4 h-4" /> }
      default: return { color: 'text-gray-500', icon: <Clock className="w-4 h-4" /> }
    }
  }

  const getRecommendationIcon = (category: string) => {
    switch (category) {
      case 'critical': return <AlertTriangle className="w-5 h-5 text-red-600" />
      case 'important': return <AlertTriangle className="w-5 h-5 text-orange-600" />
      case 'moderate': return <AlertTriangle className="w-5 h-5 text-yellow-600" />
      case 'minor': return <AlertTriangle className="w-5 h-5 text-blue-600" />
      default: return <Activity className="w-5 h-5 text-gray-400" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold dark:text-white flex items-center">
                <Activity className="w-8 h-8 mr-3 text-blue-600" />
                Performance Monitor
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Real-time performance monitoring and optimization insights
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {/* Device & Connection Selector */}
              <div className="flex items-center space-x-2">
                <select
                  value={deviceType}
                  onChange={(e) => setDeviceType(e.target.value as any)}
                  className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-sm"
                >
                  <option value="desktop">Desktop</option>
                  <option value="mobile">Mobile</option>
                </select>
                <select
                  value={connectionType}
                  onChange={(e) => setConnectionType(e.target.value as any)}
                  className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-sm"
                >
                  <option value="4g">4G</option>
                  <option value="3g">3G</option>
                  <option value="slow-3g">Slow 3G</option>
                </select>
              </div>

              <button
                onClick={toggleMonitoring}
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                  isMonitoring 
                    ? 'bg-red-600 text-white hover:bg-red-700' 
                    : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                {isMonitoring ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}</span>
              </button>

              <button
                onClick={runPerformanceAudit}
                disabled={isMonitoring}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <RefreshCw className={`w-4 h-4 ${isMonitoring ? 'animate-spin' : ''}`} />
                <span>Run Audit</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
          <nav className="-mb-px flex space-x-8 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'vitals', label: 'Core Web Vitals', icon: Zap },
              { id: 'resources', label: 'Resource Analysis', icon: HardDrive },
              { id: 'budgets', label: 'Performance Budgets', icon: Target },
              { id: 'recommendations', label: 'Recommendations', icon: TrendingUp }
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id as any)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 whitespace-nowrap ${
                    selectedTab === tab.id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </nav>
        </div>

        {/* Tab Content */}
        {selectedTab === 'overview' && (
          <div className="space-y-8">
            {/* Performance Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {metrics.map((metric) => {
                const status = getMetricStatus(metric.status)
                
                return (
                  <div key={metric.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        {getCategoryIcon(metric.category)}
                        <h3 className="font-semibold dark:text-white">{metric.name}</h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getTrendIcon(metric.trend)}
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${status.color}`}>
                          {status.icon}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-2">
                      <div className="text-2xl font-bold dark:text-white">
                        {metric.value.toFixed(metric.unit === '' ? 3 : 0)}{metric.unit}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Target: {metric.target.toFixed(metric.unit === '' ? 1 : 0)}{metric.unit}
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {metric.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {selectedTab === 'vitals' && (
          <div className="space-y-8">
            {/* Core Web Vitals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(coreWebVitals).map(([key, value]) => {
                const status = getCWVStatus(key, value)
                const statusStyle = getMetricStatus(status)
                
                return (
                  <div key={key} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold dark:text-white uppercase">
                        {key === 'lcp' ? 'Largest Contentful Paint' :
                         key === 'fid' ? 'First Input Delay' :
                         key === 'cls' ? 'Cumulative Layout Shift' :
                         key === 'fcp' ? 'First Contentful Paint' :
                         key === 'ttfb' ? 'Time to First Byte' :
                         'Speed Index'}
                      </h3>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${statusStyle.color}`}>
                        {statusStyle.icon}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-3xl font-bold dark:text-white">
                        {key === 'cls' ? value.toFixed(3) : Math.round(value)}
                        {key === 'cls' ? '' : 'ms'}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                      <div 
                        className={`h-2 rounded-full ${
                          status === 'good' ? 'bg-green-500' :
                          status === 'needs-improvement' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ 
                          width: `${Math.min(100, (value / (key === 'cls' ? 0.25 : key === 'lcp' ? 4000 : key === 'fid' ? 300 : 3000)) * 100)}%` 
                        }}
                      ></div>
                    </div>
                    
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {status === 'good' ? 'Good' : status === 'needs-improvement' ? 'Needs Improvement' : 'Poor'}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {selectedTab === 'resources' && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700">
            <div className="p-6 border-b dark:border-gray-700">
              <h2 className="text-xl font-semibold dark:text-white">Resource Analysis</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Breakdown of resource loading performance
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Resource
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Size
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Duration
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Compression
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y dark:divide-gray-700">
                  {resourceTimings.map((resource, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          {getResourceIcon(resource.type)}
                          <span className="text-sm font-medium dark:text-white">
                            {resource.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                          {resource.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm dark:text-white">
                        {formatBytes(resource.transferSize)}
                      </td>
                      <td className="px-6 py-4 text-sm dark:text-white">
                        {formatDuration(resource.duration)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm dark:text-white">
                            {((1 - resource.transferSize / resource.decodedBodySize) * 100).toFixed(1)}%
                          </span>
                          {resource.transferSize / resource.decodedBodySize < 0.7 ? (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          ) : (
                            <AlertTriangle className="w-4 h-4 text-yellow-500" />
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedTab === 'budgets' && (
          <div className="space-y-6">
            {performanceBudgets.map((budget) => {
              const status = getBudgetStatus(budget.status)
              const percentage = (budget.actual / budget.budget) * 100
              
              return (
                <div key={budget.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold dark:text-white">{budget.name}</h3>
                    <div className="flex items-center space-x-2">
                      {status.icon}
                      <span className={`text-sm font-medium ${status.color}`}>
                        {budget.status.charAt(0).toUpperCase() + budget.status.slice(1)} Budget
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600 dark:text-gray-400">
                        {budget.actual}{budget.unit} / {budget.budget}{budget.unit}
                      </span>
                      <span className={`font-medium ${status.color}`}>
                        {percentage.toFixed(1)}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          budget.status === 'under' ? 'bg-green-500' :
                          budget.status === 'at' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${Math.min(100, percentage)}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      Impact: {budget.impact}
                    </span>
                    {budget.status === 'over' && (
                      <span className="text-red-600">
                        Over by {budget.actual - budget.budget}{budget.unit}
                      </span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {selectedTab === 'recommendations' && (
          <div className="space-y-6">
            {recommendations.map((recommendation) => (
              <div key={recommendation.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-3">
                    {getRecommendationIcon(recommendation.category)}
                    <div>
                      <h3 className="font-semibold dark:text-white">{recommendation.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        {recommendation.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="text-center">
                      <div className="font-semibold dark:text-white">{recommendation.impact}%</div>
                      <div className="text-gray-500 dark:text-gray-400">Impact</div>
                    </div>
                    <div className="text-center">
                      <div className={`font-semibold ${
                        recommendation.effort === 'low' ? 'text-green-600' :
                        recommendation.effort === 'medium' ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {recommendation.effort.charAt(0).toUpperCase() + recommendation.effort.slice(1)}
                      </div>
                      <div className="text-gray-500 dark:text-gray-400">Effort</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium dark:text-white text-sm mb-1">Implementation:</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {recommendation.implementation}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium dark:text-white text-sm mb-1">Estimated Savings:</h4>
                    <p className="text-green-600 dark:text-green-400 text-sm font-medium">
                      {recommendation.estimatedSavings}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}