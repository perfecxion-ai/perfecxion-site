'use client'

import { useState, useEffect } from 'react'
import { 
  Monitor,
  Smartphone,
  Tablet,
  Chrome,
  Firefox,
  Safari,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  Play,
  Pause,
  Eye,
  Download,
  Settings,
  RefreshCw,
  Wifi,
  Globe,
  Zap,
  Camera,
  Bug,
  Filter
} from 'lucide-react'

interface BrowserConfig {
  id: string
  name: string
  version: string
  engine: string
  icon: React.ReactNode
  marketShare: number
  supported: boolean
}

interface DeviceConfig {
  id: string
  name: string
  type: 'desktop' | 'tablet' | 'mobile'
  resolution: { width: number; height: number }
  userAgent: string
  icon: React.ReactNode
  popularity: number
}

interface TestConfiguration {
  id: string
  name: string
  browsers: string[]
  devices: string[]
  viewports: Array<{ width: number; height: number }>
  features: string[]
  network: 'fast-3g' | '4g' | 'wifi'
  location: string
}

interface CrossBrowserTestResult {
  configId: string
  browser: string
  device: string
  viewport: { width: number; height: number }
  status: 'passed' | 'failed' | 'warning' | 'running' | 'pending'
  issues: TestIssue[]
  screenshots: string[]
  performance: {
    loadTime: number
    timeToInteractive: number
    firstContentfulPaint: number
  }
  compatibility: {
    css: number
    js: number
    html5: number
    overall: number
  }
  timestamp: Date
  duration: number
}

interface TestIssue {
  id: string
  type: 'layout' | 'functionality' | 'performance' | 'compatibility'
  severity: 'critical' | 'high' | 'medium' | 'low'
  description: string
  element?: string
  screenshot?: string
  workaround?: string
}

interface CompatibilityMatrix {
  browser: string
  version: string
  features: Record<string, 'supported' | 'partial' | 'unsupported'>
}

export default function CrossBrowserTests() {
  const [browsers] = useState<BrowserConfig[]>([
    {
      id: 'chrome',
      name: 'Chrome',
      version: '91.0.4472.124',
      engine: 'Blink',
      icon: <Chrome className="w-6 h-6 text-yellow-500" />,
      marketShare: 65.2,
      supported: true
    },
    {
      id: 'firefox',
      name: 'Firefox',
      version: '89.0.2',
      engine: 'Gecko',
      icon: <Firefox className="w-6 h-6 text-orange-500" />,
      marketShare: 8.7,
      supported: true
    },
    {
      id: 'safari',
      name: 'Safari',
      version: '14.1.1',
      engine: 'WebKit',
      icon: <Safari className="w-6 h-6 text-blue-500" />,
      marketShare: 18.4,
      supported: true
    },
    {
      id: 'edge',
      name: 'Edge',
      version: '91.0.864.59',
      engine: 'Blink',
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      marketShare: 4.2,
      supported: true
    },
    {
      id: 'ie11',
      name: 'Internet Explorer 11',
      version: '11.0.19041.1566',
      engine: 'Trident',
      icon: <Globe className="w-6 h-6 text-blue-700" />,
      marketShare: 1.2,
      supported: false
    }
  ])

  const [devices] = useState<DeviceConfig[]>([
    {
      id: 'desktop-1920',
      name: 'Desktop (1920×1080)',
      type: 'desktop',
      resolution: { width: 1920, height: 1080 },
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      icon: <Monitor className="w-5 h-5" />,
      popularity: 35
    },
    {
      id: 'desktop-1366',
      name: 'Desktop (1366×768)',
      type: 'desktop',
      resolution: { width: 1366, height: 768 },
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      icon: <Monitor className="w-5 h-5" />,
      popularity: 25
    },
    {
      id: 'iphone-12',
      name: 'iPhone 12',
      type: 'mobile',
      resolution: { width: 390, height: 844 },
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X)',
      icon: <Smartphone className="w-5 h-5" />,
      popularity: 18
    },
    {
      id: 'samsung-galaxy',
      name: 'Samsung Galaxy S21',
      type: 'mobile',
      resolution: { width: 384, height: 854 },
      userAgent: 'Mozilla/5.0 (Linux; Android 11; SM-G991B)',
      icon: <Smartphone className="w-5 h-5" />,
      popularity: 12
    },
    {
      id: 'ipad-pro',
      name: 'iPad Pro',
      type: 'tablet',
      resolution: { width: 1024, height: 1366 },
      userAgent: 'Mozilla/5.0 (iPad; CPU OS 14_6 like Mac OS X)',
      icon: <Tablet className="w-5 h-5" />,
      popularity: 8
    },
    {
      id: 'surface-pro',
      name: 'Surface Pro',
      type: 'tablet',
      resolution: { width: 1368, height: 912 },
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; Touch)',
      icon: <Tablet className="w-5 h-5" />,
      popularity: 2
    }
  ])

  const [testConfigurations] = useState<TestConfiguration[]>([
    {
      id: 'comprehensive',
      name: 'Comprehensive Testing',
      browsers: ['chrome', 'firefox', 'safari', 'edge'],
      devices: ['desktop-1920', 'iphone-12', 'samsung-galaxy', 'ipad-pro'],
      viewports: [
        { width: 1920, height: 1080 },
        { width: 1366, height: 768 },
        { width: 390, height: 844 },
        { width: 1024, height: 1366 }
      ],
      features: ['responsive-design', 'javascript', 'css-grid', 'flexbox', 'webp', 'service-worker'],
      network: '4g',
      location: 'US-East'
    },
    {
      id: 'mobile-focused',
      name: 'Mobile-First Testing',
      browsers: ['chrome', 'safari'],
      devices: ['iphone-12', 'samsung-galaxy'],
      viewports: [
        { width: 390, height: 844 },
        { width: 384, height: 854 }
      ],
      features: ['touch-events', 'responsive-design', 'pwa', 'offline-support'],
      network: 'fast-3g',
      location: 'Global'
    },
    {
      id: 'legacy-support',
      name: 'Legacy Browser Support',
      browsers: ['chrome', 'firefox', 'safari', 'edge', 'ie11'],
      devices: ['desktop-1920', 'desktop-1366'],
      viewports: [
        { width: 1920, height: 1080 },
        { width: 1366, height: 768 }
      ],
      features: ['polyfills', 'graceful-degradation', 'basic-functionality'],
      network: 'wifi',
      location: 'US-West'
    }
  ])

  const [results, setResults] = useState<Map<string, CrossBrowserTestResult>>(new Map())
  const [isRunning, setIsRunning] = useState(false)
  const [selectedConfig, setSelectedConfig] = useState<string>('comprehensive')
  const [filter, setFilter] = useState<{
    browser: 'all' | string
    device: 'all' | string
    status: 'all' | string
  }>({
    browser: 'all',
    device: 'all',
    status: 'all'
  })
  const [compatibilityMatrix, setCompatibilityMatrix] = useState<CompatibilityMatrix[]>([])

  useEffect(() => {
    // Initialize with mock compatibility data
    initializeCompatibilityMatrix()
  }, [])

  const initializeCompatibilityMatrix = () => {
    const features = ['css-grid', 'flexbox', 'webp', 'service-worker', 'es2020', 'web-components']
    const matrix: CompatibilityMatrix[] = browsers.map(browser => ({
      browser: browser.name,
      version: browser.version,
      features: features.reduce((acc, feature) => {
        // Simulate realistic browser support patterns
        let support: 'supported' | 'partial' | 'unsupported' = 'supported'
        
        if (browser.id === 'ie11') {
          support = feature === 'flexbox' ? 'partial' : 'unsupported'
        } else if (browser.id === 'safari' && feature === 'webp') {
          support = 'partial'
        } else if (browser.id === 'firefox' && feature === 'web-components') {
          support = 'partial'
        }
        
        acc[feature] = support
        return acc
      }, {} as Record<string, 'supported' | 'partial' | 'unsupported'>)
    }))
    
    setCompatibilityMatrix(matrix)
  }

  const runCrossBrowserTests = async () => {
    setIsRunning(true)
    const config = testConfigurations.find(c => c.id === selectedConfig)
    if (!config) return

    try {
      // Clear previous results
      setResults(new Map())

      // Run tests for each browser/device combination
      for (const browserId of config.browsers) {
        for (const deviceId of config.devices) {
          const browser = browsers.find(b => b.id === browserId)
          const device = devices.find(d => d.id === deviceId)
          
          if (browser && device) {
            await runSingleTest(config.id, browser, device)
            // Small delay for realistic progress
            await new Promise(resolve => setTimeout(resolve, 1000))
          }
        }
      }
    } finally {
      setIsRunning(false)
    }
  }

  const runSingleTest = async (configId: string, browser: BrowserConfig, device: DeviceConfig) => {
    const testId = `${configId}-${browser.id}-${device.id}`
    
    // Set test as running
    setResults(prev => new Map(prev).set(testId, {
      configId,
      browser: browser.name,
      device: device.name,
      viewport: device.resolution,
      status: 'running',
      issues: [],
      screenshots: [],
      performance: {
        loadTime: 0,
        timeToInteractive: 0,
        firstContentfulPaint: 0
      },
      compatibility: {
        css: 0,
        js: 0,
        html5: 0,
        overall: 0
      },
      timestamp: new Date(),
      duration: 0
    }))

    const startTime = Date.now()

    try {
      // Simulate test execution
      await new Promise(resolve => setTimeout(resolve, Math.random() * 3000 + 2000))

      // Generate realistic test results
      const { status, issues, performance, compatibility } = generateTestResult(browser, device)

      const result: CrossBrowserTestResult = {
        configId,
        browser: browser.name,
        device: device.name,
        viewport: device.resolution,
        status,
        issues,
        screenshots: generateScreenshots(testId),
        performance,
        compatibility,
        timestamp: new Date(),
        duration: Date.now() - startTime
      }

      setResults(prev => new Map(prev).set(testId, result))

    } catch (error) {
      setResults(prev => new Map(prev).set(testId, {
        configId,
        browser: browser.name,
        device: device.name,
        viewport: device.resolution,
        status: 'failed',
        issues: [{
          id: `error-${Date.now()}`,
          type: 'functionality',
          severity: 'critical',
          description: 'Test execution failed'
        }],
        screenshots: [],
        performance: {
          loadTime: 0,
          timeToInteractive: 0,
          firstContentfulPaint: 0
        },
        compatibility: {
          css: 0,
          js: 0,
          html5: 0,
          overall: 0
        },
        timestamp: new Date(),
        duration: Date.now() - startTime
      }))
    }
  }

  const generateTestResult = (browser: BrowserConfig, device: DeviceConfig) => {
    // Simulate different outcomes based on browser and device characteristics
    const isLegacyBrowser = browser.id === 'ie11'
    const isMobile = device.type === 'mobile'
    
    // Generate issues based on realistic scenarios
    const issues: TestIssue[] = []
    
    if (isLegacyBrowser) {
      issues.push({
        id: 'css-grid-unsupported',
        type: 'layout',
        severity: 'high',
        description: 'CSS Grid not supported, layout falls back to flexbox',
        element: '.grid-container',
        workaround: 'Use flexbox fallback for IE11'
      })
    }
    
    if (isMobile && Math.random() < 0.3) {
      issues.push({
        id: 'touch-target-small',
        type: 'functionality',
        severity: 'medium',
        description: 'Touch targets smaller than recommended 44px',
        element: '.small-button',
        workaround: 'Increase button padding for mobile devices'
      })
    }
    
    if (browser.id === 'safari' && Math.random() < 0.2) {
      issues.push({
        id: 'webp-unsupported',
        type: 'performance',
        severity: 'low',
        description: 'WebP images not supported, falling back to JPEG',
        element: 'img[src$=".webp"]',
        workaround: 'Provide JPEG fallback for Safari'
      })
    }

    // Generate performance metrics
    const baseLoadTime = isMobile ? 3500 : 2200
    const browserMultiplier = isLegacyBrowser ? 1.8 : browser.id === 'safari' ? 1.2 : 1.0
    
    const performance = {
      loadTime: Math.round(baseLoadTime * browserMultiplier * (0.8 + Math.random() * 0.4)),
      timeToInteractive: Math.round(baseLoadTime * browserMultiplier * 1.3 * (0.8 + Math.random() * 0.4)),
      firstContentfulPaint: Math.round(baseLoadTime * browserMultiplier * 0.6 * (0.8 + Math.random() * 0.4))
    }

    // Generate compatibility scores
    const compatibility = {
      css: isLegacyBrowser ? 70 : 95 + Math.floor(Math.random() * 5),
      js: isLegacyBrowser ? 65 : 90 + Math.floor(Math.random() * 10),
      html5: isLegacyBrowser ? 60 : 95 + Math.floor(Math.random() * 5),
      overall: 0
    }
    compatibility.overall = Math.round((compatibility.css + compatibility.js + compatibility.html5) / 3)

    // Determine status
    let status: 'passed' | 'failed' | 'warning' = 'passed'
    if (issues.some(issue => issue.severity === 'critical')) {
      status = 'failed'
    } else if (issues.some(issue => issue.severity === 'high') || compatibility.overall < 80) {
      status = 'warning'
    }

    return { status, issues, performance, compatibility }
  }

  const generateScreenshots = (testId: string) => {
    return [
      `screenshot-${testId}-home.png`,
      `screenshot-${testId}-product.png`,
      `screenshot-${testId}-contact.png`
    ]
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'passed': return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'failed': return <XCircle className="w-5 h-5 text-red-600" />
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-600" />
      case 'running': return <Clock className="w-5 h-5 text-blue-600 animate-spin" />
      default: return <Clock className="w-5 h-5 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'passed': return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200'
      case 'failed': return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
      case 'warning': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
      case 'running': return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200'
      default: return 'text-gray-500 bg-gray-50 dark:bg-gray-800 dark:text-gray-400'
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
      case 'high': return 'text-orange-600 bg-orange-100 dark:bg-orange-900 dark:text-orange-200'
      case 'medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
      case 'low': return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200'
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const getCompatibilityColor = (support: string) => {
    switch (support) {
      case 'supported': return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200'
      case 'partial': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
      case 'unsupported': return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const formatDuration = (ms: number) => {
    if (ms < 1000) return `${ms}ms`
    const seconds = Math.floor(ms / 1000)
    if (seconds < 60) return `${seconds}s`
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}m ${remainingSeconds}s`
  }

  const filteredResults = Array.from(results.values()).filter(result => {
    if (filter.browser !== 'all' && !result.browser.toLowerCase().includes(filter.browser.toLowerCase())) return false
    if (filter.device !== 'all' && !result.device.toLowerCase().includes(filter.device.toLowerCase())) return false
    if (filter.status !== 'all' && result.status !== filter.status) return false
    return true
  })

  // Calculate summary statistics
  const totalTests = results.size
  const passedTests = Array.from(results.values()).filter(r => r.status === 'passed').length
  const failedTests = Array.from(results.values()).filter(r => r.status === 'failed').length
  const warningTests = Array.from(results.values()).filter(r => r.status === 'warning').length

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold dark:text-white flex items-center">
                <Globe className="w-8 h-8 mr-3 text-green-600" />
                Cross-Browser & Device Testing
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Automated testing across browsers, devices, and screen sizes
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={selectedConfig}
                onChange={(e) => setSelectedConfig(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              >
                {testConfigurations.map(config => (
                  <option key={config.id} value={config.id}>{config.name}</option>
                ))}
              </select>

              <button
                onClick={runCrossBrowserTests}
                disabled={isRunning}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isRunning ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                <span>{isRunning ? 'Running Tests...' : 'Start Testing'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Stats */}
        {totalTests > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Tests</p>
                  <p className="text-2xl font-bold dark:text-white">{totalTests}</p>
                </div>
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Passed</p>
                  <p className="text-2xl font-bold text-green-600">{passedTests}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Warnings</p>
                  <p className="text-2xl font-bold text-yellow-600">{warningTests}</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-yellow-600" />
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Failed</p>
                  <p className="text-2xl font-bold text-red-600">{failedTests}</p>
                </div>
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Browser Support */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4">Browser Support</h3>
              <div className="space-y-3">
                {browsers.map((browser) => (
                  <div key={browser.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {browser.icon}
                      <div>
                        <div className="font-medium dark:text-white text-sm">{browser.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{browser.version}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium dark:text-white">{browser.marketShare}%</div>
                      <div className={`text-xs ${browser.supported ? 'text-green-600' : 'text-red-600'}`}>
                        {browser.supported ? 'Supported' : 'Deprecated'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Device Coverage */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4">Device Coverage</h3>
              <div className="space-y-3">
                {devices.map((device) => (
                  <div key={device.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {device.icon}
                      <div>
                        <div className="font-medium dark:text-white text-sm">{device.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {device.resolution.width}×{device.resolution.height}
                        </div>
                      </div>
                    </div>
                    <div className="text-sm font-medium dark:text-white">{device.popularity}%</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Browser
                  </label>
                  <select
                    value={filter.browser}
                    onChange={(e) => setFilter(prev => ({ ...prev, browser: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white text-sm"
                  >
                    <option value="all">All Browsers</option>
                    <option value="chrome">Chrome</option>
                    <option value="firefox">Firefox</option>
                    <option value="safari">Safari</option>
                    <option value="edge">Edge</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Device Type
                  </label>
                  <select
                    value={filter.device}
                    onChange={(e) => setFilter(prev => ({ ...prev, device: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white text-sm"
                  >
                    <option value="all">All Devices</option>
                    <option value="desktop">Desktop</option>
                    <option value="mobile">Mobile</option>
                    <option value="tablet">Tablet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Status
                  </label>
                  <select
                    value={filter.status}
                    onChange={(e) => setFilter(prev => ({ ...prev, status: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white text-sm"
                  >
                    <option value="all">All Status</option>
                    <option value="passed">Passed</option>
                    <option value="warning">Warning</option>
                    <option value="failed">Failed</option>
                    <option value="running">Running</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Test Results */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700">
              <div className="p-6 border-b dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold dark:text-white">Test Results</h2>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {filteredResults.length} results
                  </div>
                </div>
              </div>

              <div className="divide-y dark:divide-gray-700">
                {filteredResults.map((result, index) => (
                  <div key={index} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(result.status)}
                        <div>
                          <h3 className="font-semibold dark:text-white">
                            {result.browser} on {result.device}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {result.viewport.width}×{result.viewport.height} • {formatDuration(result.duration)}
                          </p>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(result.status)}`}>
                          {result.status}
                        </span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                          <Camera className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
                        <div className="text-xs text-gray-600 dark:text-gray-400">Load Time</div>
                        <div className="font-semibold dark:text-white">
                          {formatDuration(result.performance.loadTime)}
                        </div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
                        <div className="text-xs text-gray-600 dark:text-gray-400">Interactive</div>
                        <div className="font-semibold dark:text-white">
                          {formatDuration(result.performance.timeToInteractive)}
                        </div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
                        <div className="text-xs text-gray-600 dark:text-gray-400">First Paint</div>
                        <div className="font-semibold dark:text-white">
                          {formatDuration(result.performance.firstContentfulPaint)}
                        </div>
                      </div>
                    </div>

                    {/* Compatibility Scores */}
                    <div className="grid grid-cols-4 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-sm text-gray-600 dark:text-gray-400">CSS</div>
                        <div className={`text-lg font-semibold ${
                          result.compatibility.css >= 90 ? 'text-green-600' :
                          result.compatibility.css >= 70 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {result.compatibility.css}%
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-600 dark:text-gray-400">JavaScript</div>
                        <div className={`text-lg font-semibold ${
                          result.compatibility.js >= 90 ? 'text-green-600' :
                          result.compatibility.js >= 70 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {result.compatibility.js}%
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-600 dark:text-gray-400">HTML5</div>
                        <div className={`text-lg font-semibold ${
                          result.compatibility.html5 >= 90 ? 'text-green-600' :
                          result.compatibility.html5 >= 70 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {result.compatibility.html5}%
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-600 dark:text-gray-400">Overall</div>
                        <div className={`text-lg font-semibold ${
                          result.compatibility.overall >= 90 ? 'text-green-600' :
                          result.compatibility.overall >= 70 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {result.compatibility.overall}%
                        </div>
                      </div>
                    </div>

                    {/* Issues */}
                    {result.issues.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-medium dark:text-white text-sm">Issues Found:</h4>
                        {result.issues.map((issue) => (
                          <div key={issue.id} className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded p-3">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-1">
                                  <span className={`px-2 py-1 rounded text-xs font-semibold ${getSeverityColor(issue.severity)}`}>
                                    {issue.severity}
                                  </span>
                                  <span className="text-xs text-gray-600 dark:text-gray-400">{issue.type}</span>
                                </div>
                                <p className="text-sm text-red-900 dark:text-red-200">{issue.description}</p>
                                {issue.element && (
                                  <p className="text-xs text-red-700 dark:text-red-400 mt-1">
                                    Element: <code>{issue.element}</code>
                                  </p>
                                )}
                                {issue.workaround && (
                                  <p className="text-xs text-blue-700 dark:text-blue-400 mt-1">
                                    <strong>Workaround:</strong> {issue.workaround}
                                  </p>
                                )}
                              </div>
                              <Bug className="w-4 h-4 text-red-600 ml-2" />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {filteredResults.length === 0 && (
                <div className="p-12 text-center">
                  <Globe className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    No Test Results
                  </h3>
                  <p className="text-gray-500 dark:text-gray-500">
                    Run cross-browser tests to see compatibility results here.
                  </p>
                </div>
              )}
            </div>

            {/* Compatibility Matrix */}
            {compatibilityMatrix.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700">
                <div className="p-6 border-b dark:border-gray-700">
                  <h2 className="text-xl font-semibold dark:text-white">Feature Compatibility Matrix</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Browser support for modern web features
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Browser
                        </th>
                        {Object.keys(compatibilityMatrix[0]?.features || {}).map(feature => (
                          <th key={feature} className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            {feature.replace('-', ' ')}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y dark:divide-gray-700">
                      {compatibilityMatrix.map((browser) => (
                        <tr key={browser.browser} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                          <td className="px-6 py-4">
                            <div className="font-medium dark:text-white">{browser.browser}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{browser.version}</div>
                          </td>
                          {Object.entries(browser.features).map(([feature, support]) => (
                            <td key={feature} className="px-6 py-4 text-center">
                              <span className={`px-2 py-1 rounded text-xs font-semibold ${getCompatibilityColor(support)}`}>
                                {support === 'supported' ? '✓' : support === 'partial' ? '~' : '✗'}
                              </span>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}