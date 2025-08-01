'use client'

import { useState, useEffect } from 'react'
import { 
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  Play,
  RefreshCw,
  Shield,
  Zap,
  Database,
  Globe,
  Server,
  Settings,
  FileText,
  Users,
  Lock,
  Activity,
  Target,
  Gauge,
  Eye,
  Download,
  CheckSquare,
  Square,
  AlertCircle,
  Truck,
  MonitorSpeaker
} from 'lucide-react'

interface ChecklistItem {
  id: string
  category: ChecklistCategory
  name: string
  description: string
  priority: 'critical' | 'high' | 'medium' | 'low'
  status: 'pending' | 'in-progress' | 'passed' | 'failed' | 'warning' | 'skipped'
  automated: boolean
  lastChecked?: Date
  validationCriteria: string[]
  dependencies?: string[]
  remediation?: string
  estimatedTime: number // in minutes
  owner: string
}

interface ChecklistCategory {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  color: string
}

interface ValidationResult {
  itemId: string
  status: 'passed' | 'failed' | 'warning'
  message: string
  details?: string[]
  timestamp: Date
  duration: number
}

interface DeploymentGate {
  id: string
  name: string
  description: string
  requirements: string[]
  status: 'open' | 'blocked' | 'passed'
  blockingItems: string[]
}

export default function ProductionReadinessChecklist() {
  const categories: ChecklistCategory[] = [
    {
      id: 'infrastructure',
      name: 'Infrastructure',
      description: 'Server, hosting, and deployment infrastructure readiness',
      icon: <Server className="w-5 h-5" />,
      color: 'blue'
    },
    {
      id: 'performance',
      name: 'Performance',
      description: 'Application performance optimization and validation',
      icon: <Zap className="w-5 h-5" />,
      color: 'yellow'
    },
    {
      id: 'security',
      name: 'Security',
      description: 'Security configuration and vulnerability assessment',
      icon: <Shield className="w-5 h-5" />,
      color: 'red'
    },
    {
      id: 'functionality',
      name: 'Functionality',
      description: 'Core functionality and user experience validation',
      icon: <Target className="w-5 h-5" />,
      color: 'green'
    },
    {
      id: 'monitoring',
      name: 'Monitoring',
      description: 'Monitoring, logging, and alerting systems',
      icon: <Activity className="w-5 h-5" />,
      color: 'purple'
    },
    {
      id: 'compliance',
      name: 'Compliance',
      description: 'Legal, regulatory, and accessibility compliance',
      icon: <FileText className="w-5 h-5" />,
      color: 'indigo'
    }
  ]

  const [checklistItems] = useState<ChecklistItem[]>([
    // Infrastructure Items
    {
      id: 'ssl-certificate',
      category: categories[0],
      name: 'SSL Certificate Configuration',
      description: 'Verify SSL certificate is properly configured and valid',
      priority: 'critical',
      status: 'pending',
      automated: true,
      validationCriteria: ['Valid SSL certificate', 'HTTPS redirect working', 'Certificate expiry > 30 days'],
      estimatedTime: 5,
      owner: 'DevOps Team'
    },
    {
      id: 'dns-configuration',
      category: categories[0],
      name: 'DNS Configuration',
      description: 'Validate DNS records and domain configuration',
      priority: 'critical',
      status: 'pending',
      automated: true,
      validationCriteria: ['A records configured', 'CNAME records working', 'TTL values appropriate'],
      estimatedTime: 10,
      owner: 'DevOps Team'
    },
    {
      id: 'server-capacity',
      category: categories[0],
      name: 'Server Capacity Planning',
      description: 'Ensure adequate server resources for expected load',
      priority: 'high',
      status: 'pending',
      automated: false,
      validationCriteria: ['CPU usage < 70%', 'Memory usage < 80%', 'Disk space > 20% free'],
      estimatedTime: 30,
      owner: 'Infrastructure Team'
    },
    {
      id: 'cdn-configuration',
      category: categories[0],
      name: 'CDN Configuration',
      description: 'Content delivery network setup and cache validation',
      priority: 'medium',
      status: 'pending',
      automated: true,
      validationCriteria: ['CDN endpoints responding', 'Cache headers configured', 'Purge mechanism working'],
      estimatedTime: 15,
      owner: 'DevOps Team'
    },
    {
      id: 'backup-system',
      category: categories[0],
      name: 'Backup System Validation',
      description: 'Verify backup systems are functioning properly',
      priority: 'high',
      status: 'pending',
      automated: true,
      validationCriteria: ['Automated backups running', 'Backup restoration tested', 'Retention policy implemented'],
      estimatedTime: 45,
      owner: 'Infrastructure Team'
    },

    // Performance Items
    {
      id: 'page-load-speed',
      category: categories[1],
      name: 'Page Load Speed Optimization',
      description: 'Ensure all pages load within 3 second target',
      priority: 'critical',
      status: 'pending',
      automated: true,
      validationCriteria: ['LCP < 2.5s', 'FID < 100ms', 'CLS < 0.1'],
      estimatedTime: 60,
      owner: 'Frontend Team'
    },
    {
      id: 'api-response-times',
      category: categories[1],
      name: 'API Response Time Validation',
      description: 'Validate API endpoints respond within acceptable timeframes',
      priority: 'high',
      status: 'pending',
      automated: true,
      validationCriteria: ['Average response time < 500ms', '95th percentile < 1s', 'No timeouts under normal load'],
      estimatedTime: 30,
      owner: 'Backend Team'
    },
    {
      id: 'image-optimization',
      category: categories[1],
      name: 'Image Optimization',
      description: 'Ensure all images are optimized for web delivery',
      priority: 'medium',
      status: 'pending',
      automated: true,
      validationCriteria: ['WebP format supported', 'Lazy loading implemented', 'Responsive images configured'],
      estimatedTime: 45,
      owner: 'Frontend Team'
    },
    {
      id: 'bundle-size',
      category: categories[1],
      name: 'JavaScript Bundle Size',
      description: 'Validate JavaScript bundle sizes are optimized',
      priority: 'medium',
      status: 'pending',
      automated: true,
      validationCriteria: ['Main bundle < 250KB', 'Vendor bundle < 500KB', 'Code splitting implemented'],
      estimatedTime: 30,
      owner: 'Frontend Team'
    },

    // Security Items
    {
      id: 'vulnerability-scan',
      category: categories[2],
      name: 'Security Vulnerability Scan',
      description: 'Complete security vulnerability assessment',
      priority: 'critical',
      status: 'pending',
      automated: true,
      validationCriteria: ['No critical vulnerabilities', 'High vulnerabilities < 5', 'Security headers configured'],
      estimatedTime: 120,
      owner: 'Security Team'
    },
    {
      id: 'authentication-system',
      category: categories[2],
      name: 'Authentication System Validation',
      description: 'Verify authentication and authorization systems',
      priority: 'critical',
      status: 'pending',
      automated: false,
      validationCriteria: ['Multi-factor authentication working', 'Session management secure', 'Password policies enforced'],
      estimatedTime: 60,
      owner: 'Security Team'
    },
    {
      id: 'data-encryption',
      category: categories[2],
      name: 'Data Encryption Verification',
      description: 'Ensure sensitive data is properly encrypted',
      priority: 'high',
      status: 'pending',
      automated: true,
      validationCriteria: ['Data encrypted at rest', 'Data encrypted in transit', 'Key management system secure'],
      estimatedTime: 45,
      owner: 'Security Team'
    },
    {
      id: 'cors-configuration',
      category: categories[2],
      name: 'CORS Configuration',
      description: 'Validate Cross-Origin Resource Sharing settings',
      priority: 'medium',
      status: 'pending',
      automated: true,
      validationCriteria: ['CORS headers configured', 'Origins whitelist verified', 'Preflight requests handled'],
      estimatedTime: 20,
      owner: 'Backend Team'
    },

    // Functionality Items
    {
      id: 'user-workflows',
      category: categories[3],
      name: 'Critical User Workflows',
      description: 'Test all critical user journeys end-to-end',
      priority: 'critical',
      status: 'pending',
      automated: true,
      validationCriteria: ['Registration flow working', 'Payment processing functional', 'Core features accessible'],
      estimatedTime: 90,
      owner: 'QA Team'
    },
    {
      id: 'error-handling',
      category: categories[3],
      name: 'Error Handling Validation',
      description: 'Ensure graceful error handling throughout application',
      priority: 'high',
      status: 'pending',
      automated: false,
      validationCriteria: ['404 pages styled', '500 errors handled gracefully', 'User-friendly error messages'],
      estimatedTime: 45,
      owner: 'Frontend Team'
    },
    {
      id: 'cross-browser-testing',
      category: categories[3],
      name: 'Cross-Browser Compatibility',
      description: 'Verify functionality across supported browsers',
      priority: 'high',
      status: 'pending',
      automated: true,
      validationCriteria: ['Chrome compatibility verified', 'Firefox compatibility verified', 'Safari compatibility verified'],
      estimatedTime: 120,
      owner: 'QA Team'
    },
    {
      id: 'mobile-responsiveness',
      category: categories[3],
      name: 'Mobile Responsiveness',
      description: 'Ensure optimal mobile user experience',
      priority: 'high',
      status: 'pending',
      automated: true,
      validationCriteria: ['Mobile layouts working', 'Touch interactions functional', 'Performance on mobile devices'],
      estimatedTime: 60,
      owner: 'Frontend Team'
    },

    // Monitoring Items
    {
      id: 'application-monitoring',
      category: categories[4],
      name: 'Application Performance Monitoring',
      description: 'Set up comprehensive application monitoring',
      priority: 'critical',
      status: 'pending',
      automated: false,
      validationCriteria: ['APM tools configured', 'Alerts set up', 'Dashboards accessible'],
      estimatedTime: 90,
      owner: 'DevOps Team'
    },
    {
      id: 'error-tracking',
      category: categories[4],
      name: 'Error Tracking System',
      description: 'Implement error tracking and reporting',
      priority: 'high',
      status: 'pending',
      automated: true,
      validationCriteria: ['Error tracking configured', 'Notification alerts working', 'Error categorization setup'],
      estimatedTime: 45,
      owner: 'Development Team'
    },
    {
      id: 'uptime-monitoring',
      category: categories[4],
      name: 'Uptime Monitoring',
      description: 'Configure uptime monitoring and alerts',
      priority: 'high',
      status: 'pending',
      automated: true,
      validationCriteria: ['Uptime checks configured', 'Alert notifications working', 'SLA monitoring active'],
      estimatedTime: 30,
      owner: 'DevOps Team'
    },

    // Compliance Items
    {
      id: 'accessibility-compliance',
      category: categories[5],
      name: 'Accessibility Compliance (WCAG 2.1)',
      description: 'Ensure application meets accessibility standards',
      priority: 'high',
      status: 'pending',
      automated: true,
      validationCriteria: ['WCAG 2.1 AA compliance', 'Screen reader compatibility', 'Keyboard navigation working'],
      estimatedTime: 120,
      owner: 'Frontend Team'
    },
    {
      id: 'privacy-policy',
      category: categories[5],
      name: 'Privacy Policy and Terms',
      description: 'Legal documentation review and compliance',
      priority: 'medium',
      status: 'pending',
      automated: false,
      validationCriteria: ['Privacy policy updated', 'Terms of service current', 'Cookie policy implemented'],
      estimatedTime: 60,
      owner: 'Legal Team'
    },
    {
      id: 'data-retention',
      category: categories[5],
      name: 'Data Retention Policies',
      description: 'Implement data retention and deletion policies',  
      priority: 'medium',
      status: 'pending',
      automated: false,
      validationCriteria: ['Retention periods defined', 'Automated cleanup processes', 'User data deletion capability'],
      estimatedTime: 90,
      owner: 'Backend Team'
    }
  ])

  const [validationResults, setValidationResults] = useState<Map<string, ValidationResult>>(new Map())
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [isRunningValidation, setIsRunningValidation] = useState(false)
  const [overallProgress, setOverallProgress] = useState(0)
  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  const deploymentGates: DeploymentGate[] = [
    {
      id: 'security-gate',
      name: 'Security Gate',
      description: 'All critical security requirements must pass',
      requirements: ['ssl-certificate', 'vulnerability-scan', 'authentication-system'],
      status: 'blocked',
      blockingItems: ['vulnerability-scan', 'authentication-system']
    },
    {
      id: 'performance-gate',
      name: 'Performance Gate', 
      description: 'Core performance metrics must meet targets',
      requirements: ['page-load-speed', 'api-response-times'],
      status: 'blocked',
      blockingItems: ['page-load-speed', 'api-response-times']
    },
    {
      id: 'functionality-gate',
      name: 'Functionality Gate',
      description: 'Critical user workflows must be functional',
      requirements: ['user-workflows', 'cross-browser-testing'],
      status: 'blocked',
      blockingItems: ['user-workflows', 'cross-browser-testing']
    }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? checklistItems 
    : checklistItems.filter(item => item.category.id === selectedCategory)

  const getStatusStats = () => {
    const stats = {
      total: checklistItems.length,
      passed: 0,
      failed: 0,
      warning: 0,
      pending: 0,
      inProgress: 0
    }

    checklistItems.forEach(item => {
      const result = validationResults.get(item.id)
      const status = result?.status || item.status
      
      switch (status) {
        case 'passed': stats.passed++; break
        case 'failed': stats.failed++; break
        case 'warning': stats.warning++; break
        case 'in-progress': stats.inProgress++; break
        default: stats.pending++; break
      }
    })

    return stats
  }

  const runAutomatedValidation = async () => {
    setIsRunningValidation(true)
    setOverallProgress(0)

    const automatedItems = checklistItems.filter(item => item.automated)
    
    try {
      for (let i = 0; i < automatedItems.length; i++) {
        const item = automatedItems[i]
        
        setOverallProgress(Math.floor((i / automatedItems.length) * 100))
        await validateChecklistItem(item.id)
        
        // Small delay for realistic progress
        await new Promise(resolve => setTimeout(resolve, 800))
      }
      
      setOverallProgress(100)
    } catch (error) {
      console.error('Validation error:', error)
    } finally {
      setIsRunningValidation(false)
    }
  }

  const validateChecklistItem = async (itemId: string) => {
    const item = checklistItems.find(i => i.id === itemId)
    if (!item) return

    const startTime = Date.now()

    try {
      // Simulate validation logic based on item type
      await new Promise(resolve => setTimeout(resolve, Math.random() * 2000 + 500))
      
      const result = generateValidationResult(item)
      
      setValidationResults(prev => new Map(prev).set(itemId, {
        itemId,
        status: result.status,
        message: result.message,
        details: result.details,
        timestamp: new Date(),
        duration: Date.now() - startTime
      }))

    } catch (error) {
      setValidationResults(prev => new Map(prev).set(itemId, {
        itemId,
        status: 'failed',
        message: 'Validation failed due to system error',
        timestamp: new Date(),
        duration: Date.now() - startTime
      }))
    }
  }

  const generateValidationResult = (item: ChecklistItem): Omit<ValidationResult, 'itemId' | 'timestamp' | 'duration'> => {
    // Simulate different validation outcomes based on item characteristics
    const passRate = item.priority === 'critical' ? 0.7 : 
                    item.priority === 'high' ? 0.8 : 
                    item.priority === 'medium' ? 0.9 : 0.95

    const outcome = Math.random()
    
    if (outcome < passRate) {
      return {
        status: 'passed',
        message: `${item.name} validation passed successfully`,
        details: item.validationCriteria.map(criteria => `✓ ${criteria}`)
      }
    } else if (outcome < passRate + 0.15) {
      return {
        status: 'warning',
        message: `${item.name} passed with warnings`,
        details: [
          ...item.validationCriteria.slice(0, -1).map(criteria => `✓ ${criteria}`),
          `⚠ ${item.validationCriteria.slice(-1)[0]} - needs attention`
        ]
      }
    } else {
      return {
        status: 'failed',
        message: `${item.name} validation failed`,
        details: [
          ...item.validationCriteria.slice(0, -2).map(criteria => `✓ ${criteria}`),
          ...item.validationCriteria.slice(-2).map(criteria => `✗ ${criteria}`)
        ]
      }
    }
  }

  const getStatusIcon = (item: ChecklistItem) => {
    const result = validationResults.get(item.id)
    const status = result?.status || item.status

    switch (status) {
      case 'passed': return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'failed': return <XCircle className="w-5 h-5 text-red-600" />
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-600" />
      case 'in-progress': return <Clock className="w-5 h-5 text-blue-600 animate-pulse" />
      default: return <Square className="w-5 h-5 text-gray-400" />
    }
  }

  const getStatusColor = (item: ChecklistItem) => {
    const result = validationResults.get(item.id)
    const status = result?.status || item.status

    switch (status) {
      case 'passed': return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200'
      case 'failed': return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
      case 'warning': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
      case 'in-progress': return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200'
      default: return 'text-gray-500 bg-gray-50 dark:bg-gray-800 dark:text-gray-400'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
      case 'high': return 'text-orange-600 bg-orange-100 dark:bg-orange-900 dark:text-orange-200'
      case 'medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
      case 'low': return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200'
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const getCategoryColor = (color: string) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200',
      yellow: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200',
      red: 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200',
      green: 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200',
      purple: 'text-purple-600 bg-purple-100 dark:bg-purple-900 dark:text-purple-200',
      indigo: 'text-indigo-600 bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-200'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const formatDuration = (ms: number) => {
    if (ms < 1000) return `${ms}ms`
    const seconds = Math.floor(ms / 1000)
    if (seconds < 60) return `${seconds}s`
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}m ${remainingSeconds}s`
  }

  const stats = getStatusStats()
  const completionRate = ((stats.passed + stats.warning) / stats.total) * 100

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold dark:text-white flex items-center">
                <Truck className="w-8 h-8 mr-3 text-green-600" />
                Production Readiness Checklist
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Comprehensive validation checklist for production deployment
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {isRunningValidation && (
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <RefreshCw className="w-4 h-4 text-blue-600 animate-spin" />
                    <span className="text-sm text-blue-800 dark:text-blue-200">
                      Validation Progress: {overallProgress}%
                    </span>
                  </div>
                </div>
              )}
              <button
                onClick={runAutomatedValidation}
                disabled={isRunningValidation}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isRunningValidation ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                <span>{isRunningValidation ? 'Running Validation...' : 'Run Automated Validation'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold dark:text-white">Overall Progress</h2>
            <div className="text-2xl font-bold text-green-600">
              {completionRate.toFixed(1)}%
            </div>
          </div>
          
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-4">
            <div 
              className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${completionRate}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{stats.passed}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Passed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">{stats.warning}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Warning</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">{stats.failed}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Failed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.inProgress}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-600">{stats.pending}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Pending</div>
            </div>
          </div>
        </div>

        {/* Deployment Gates */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6 mb-8">
          <h2 className="text-xl font-semibold dark:text-white mb-4">Deployment Gates</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {deploymentGates.map((gate) => (
              <div key={gate.id} className="border dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium dark:text-white">{gate.name}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    gate.status === 'passed' ? 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200' :
                    gate.status === 'blocked' ? 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200' :
                    'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
                  }`}>
                    {gate.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{gate.description}</p>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  <div>Requirements: {gate.requirements.length}</div>
                  <div>Blocking: {gate.blockingItems.length}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Category Filter */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4">Categories</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedCategory === 'all' 
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' 
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  All Categories ({checklistItems.length})
                </button>
                {categories.map((category) => {
                  const count = checklistItems.filter(item => item.category.id === category.id).length
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center space-x-2 ${
                        selectedCategory === category.id 
                          ? `bg-${category.color}-100 dark:bg-${category.color}-900 text-${category.color}-800 dark:text-${category.color}-200` 
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      {category.icon}
                      <span>{category.name} ({count})</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2">
                  <FileText className="w-4 h-4" />
                  <span>Export Checklist</span>
                </button>
                
                <button className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download Report</span>
                </button>
                
                <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center justify-center space-x-2">
                  <MonitorSpeaker className="w-4 h-4" />
                  <span>Schedule Review</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700">
              <div className="p-6 border-b dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold dark:text-white">
                    {selectedCategory === 'all' ? 'All Checklist Items' : 
                     categories.find(c => c.id === selectedCategory)?.name || 'Checklist Items'}
                  </h2>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {filteredItems.length} items
                  </div>
                </div>
              </div>

              <div className="divide-y dark:divide-gray-700">
                {filteredItems.map((item) => {
                  const result = validationResults.get(item.id)

                  return (
                    <div key={item.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            {getStatusIcon(item)}
                            <div className="flex items-center space-x-2">
                              <span className={`p-1 rounded ${getCategoryColor(item.category.color)}`}>
                                {item.category.icon}
                              </span>
                              <h3 className="font-semibold dark:text-white">{item.name}</h3>
                            </div>
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${getPriorityColor(item.priority)}`}>
                              {item.priority}
                            </span>
                            {item.automated && (
                              <span className="px-2 py-1 rounded text-xs font-semibold text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200">
                                Automated
                              </span>
                            )}
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                            {item.description}
                          </p>

                          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{item.estimatedTime}m</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{item.owner}</span>
                            </div>
                            {result && (
                              <div className="flex items-center space-x-1">
                                <Activity className="w-4 h-4" />
                                <span>{formatDuration(result.duration)}</span>
                              </div>
                            )}
                          </div>

                          {/* Validation Criteria */}
                          <div className="mb-3">
                            <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">Validation Criteria:</div>
                            <div className="space-y-1">
                              {item.validationCriteria.map((criteria, index) => (
                                <div key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-center space-x-2">
                                  <CheckSquare className="w-3 h-3" />
                                  <span>{criteria}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Validation Results */}
                          {result && (
                            <div className={`rounded-lg p-4 ${
                              result.status === 'passed' ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' :
                              result.status === 'failed' ? 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800' :
                              'bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800'
                            }`}>
                              <div className="flex items-center justify-between mb-2">
                                <h4 className={`font-medium ${
                                  result.status === 'passed' ? 'text-green-900 dark:text-green-200' :
                                  result.status === 'failed' ? 'text-red-900 dark:text-red-200' :
                                  'text-yellow-900 dark:text-yellow-200'
                                }`}>
                                  {result.message}
                                </h4>
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                  {result.timestamp.toLocaleString()}
                                </span>
                              </div>
                              
                              {result.details && (
                                <div className="space-y-1">
                                  {result.details.map((detail, index) => (
                                    <div key={index} className={`text-sm ${
                                      result.status === 'passed' ? 'text-green-800 dark:text-green-300' :
                                      result.status === 'failed' ? 'text-red-800 dark:text-red-300' :
                                      'text-yellow-800 dark:text-yellow-300'
                                    }`}>
                                      {detail}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>

                        <div className="flex items-center space-x-2 ml-4">
                          {item.automated && (
                            <button
                              onClick={() => validateChecklistItem(item.id)}
                              disabled={isRunningValidation}
                              className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                              title="Run validation"
                            >
                              <Play className="w-5 h-5" />
                            </button>
                          )}
                          
                          <button
                            onClick={() => setSelectedItem(item.id)}
                            className="p-2 text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
                            title="View details"
                          >
                            <Eye className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {filteredItems.length === 0 && (
                <div className="p-12 text-center">
                  <CheckSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    No Items Found
                  </h3>
                  <p className="text-gray-500 dark:text-gray-500">
                    No checklist items match your current selection.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}