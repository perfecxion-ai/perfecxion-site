'use client'

import { useState, useEffect } from 'react'
import { 
  BarChart3,
  TrendingUp,
  TrendingDown,
  Activity,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  Target,
  Users,
  Calendar,
  FileText,
  Download,
  Filter,
  Settings,
  RefreshCw,
  Eye,
  Bug,
  Shield,
  Accessibility,
  Zap,
  Globe,
  Server
} from 'lucide-react'

interface QAMetrics {
  totalTests: number
  passedTests: number
  failedTests: number
  skippedTests: number
  testCoverage: number
  passRate: number
  averageExecutionTime: number
  criticalIssues: number
  highIssues: number
  mediumIssues: number
  lowIssues: number
}

interface TestSuiteResult {
  id: string
  name: string
  category: 'unit' | 'integration' | 'e2e' | 'performance' | 'security' | 'accessibility'
  status: 'passed' | 'failed' | 'running' | 'skipped'
  totalTests: number
  passedTests: number
  failedTests: number
  duration: number
  coverage: number
  lastRun: Date
  trends: {
    passRate: 'up' | 'down' | 'stable'
    duration: 'up' | 'down' | 'stable'
    coverage: 'up' | 'down' | 'stable'
  }
}

interface QualityGate {
  id: string
  name: string
  metric: string
  threshold: number
  currentValue: number
  status: 'passed' | 'failed' | 'warning'
  required: boolean
  description: string
}

interface TestTrend {
  date: string
  totalTests: number
  passedTests: number
  failedTests: number
  passRate: number
  coverage: number
  duration: number
}

interface DefectAnalysis {
  category: string
  count: number
  severity: 'critical' | 'high' | 'medium' | 'low'
  trend: 'up' | 'down' | 'stable'
  resolution: number // percentage resolved
}

export default function QADashboard() {
  const [metrics, setMetrics] = useState<QAMetrics>({
    totalTests: 1247,
    passedTests: 1189,
    failedTests: 42,
    skippedTests: 16,
    testCoverage: 87.3,
    passRate: 95.3,
    averageExecutionTime: 342,
    criticalIssues: 2,
    highIssues: 8,
    mediumIssues: 15,
    lowIssues: 23
  })

  const [testSuites, setTestSuites] = useState<TestSuiteResult[]>([
    {
      id: 'unit-tests',
      name: 'Unit Tests',
      category: 'unit',
      status: 'passed',
      totalTests: 456,
      passedTests: 451,
      failedTests: 5,
      duration: 45.2,
      coverage: 91.2,
      lastRun: new Date(Date.now() - 1000 * 60 * 15),
      trends: {
        passRate: 'up',
        duration: 'down',
        coverage: 'up'
      }
    },
    {
      id: 'integration-tests',
      name: 'Integration Tests',
      category: 'integration',
      status: 'passed',
      totalTests: 234,
      passedTests: 228,
      failedTests: 6,
      duration: 127.8,
      coverage: 83.4,
      lastRun: new Date(Date.now() - 1000 * 60 * 30),
      trends: {
        passRate: 'stable',
        duration: 'up',
        coverage: 'stable'
      }
    },
    {
      id: 'e2e-tests',
      name: 'End-to-End Tests',
      category: 'e2e',
      status: 'failed',
      totalTests: 89,
      passedTests: 82,
      failedTests: 7,
      duration: 456.3,
      coverage: 78.9,
      lastRun: new Date(Date.now() - 1000 * 60 * 45),
      trends: {
        passRate: 'down',
        duration: 'up',
        coverage: 'down'
      }
    },
    {
      id: 'performance-tests',
      name: 'Performance Tests',
      category: 'performance',
      status: 'passed',
      totalTests: 67,
      passedTests: 63,
      failedTests: 4,
      duration: 234.5,
      coverage: 85.6,
      lastRun: new Date(Date.now() - 1000 * 60 * 60),
      trends: {
        passRate: 'up',
        duration: 'stable',
        coverage: 'up'
      }
    },
    {
      id: 'security-tests',
      name: 'Security Tests',
      category: 'security',
      status: 'passed',
      totalTests: 143,
      passedTests: 135,
      failedTests: 8,
      duration: 189.7,
      coverage: 92.1,
      lastRun: new Date(Date.now() - 1000 * 60 * 90),
      trends: {
        passRate: 'stable',
        duration: 'down',
        coverage: 'up'
      }
    },
    {
      id: 'accessibility-tests',
      name: 'Accessibility Tests',
      category: 'accessibility',
      status: 'passed',
      totalTests: 258,
      passedTests: 230,
      failedTests: 12,
      duration: 98.4,
      coverage: 88.7,
      lastRun: new Date(Date.now() - 1000 * 60 * 120),
      trends: {
        passRate: 'up',
        duration: 'stable',
        coverage: 'stable'
      }
    }
  ])

  const [qualityGates, setQualityGates] = useState<QualityGate[]>([
    {
      id: 'pass-rate',
      name: 'Test Pass Rate',
      metric: 'Pass Rate',
      threshold: 95,
      currentValue: 95.3,
      status: 'passed',
      required: true,
      description: 'Minimum percentage of tests that must pass'
    },
    {
      id: 'coverage',
      name: 'Code Coverage',
      metric: 'Coverage',
      threshold: 85,
      currentValue: 87.3,
      status: 'passed',
      required: true,
      description: 'Minimum code coverage percentage'
    },
    {
      id: 'critical-issues',
      name: 'Critical Issues',
      metric: 'Critical Defects',
      threshold: 0,
      currentValue: 2,
      status: 'failed',
      required: true,
      description: 'Maximum number of critical issues allowed'
    },
    {
      id: 'security-score',
      name: 'Security Score',
      metric: 'Security Rating',
      threshold: 8.5,
      currentValue: 9.2,
      status: 'passed',
      required: true,
      description: 'Minimum security rating score'
    },
    {
      id: 'performance-score',
      name: 'Performance Score',
      metric: 'Performance Rating',
      threshold: 85,
      currentValue: 92.1,
      status: 'passed',
      required: false,
      description: 'Minimum performance score'
    },
    {
      id: 'accessibility-score',
      name: 'Accessibility Score',
      metric: 'WCAG Compliance',
      threshold: 90,
      currentValue: 88.4,
      status: 'warning',
      required: false,
      description: 'Minimum accessibility compliance score'
    }
  ])

  const [defectAnalysis, setDefectAnalysis] = useState<DefectAnalysis[]>([
    {
      category: 'Functional',
      count: 18,
      severity: 'high',
      trend: 'down',
      resolution: 72
    },
    {
      category: 'Performance',
      count: 12,
      severity: 'medium',
      trend: 'stable',
      resolution: 85
    },
    {
      category: 'Security',
      count: 8,
      severity: 'critical',
      trend: 'down',
      resolution: 90
    },
    {
      category: 'UI/UX',
      count: 15,
      severity: 'low',
      trend: 'up',
      resolution: 60
    },
    {
      category: 'Accessibility',
      count: 7,
      severity: 'medium',
      trend: 'down',
      resolution: 78
    }
  ])

  const [selectedTimeRange, setSelectedTimeRange] = useState<'24h' | '7d' | '30d' | '90d'>('7d')
  const [selectedCategory, setSelectedCategory] = useState<'all' | string>('all')
  const [isRefreshing, setIsRefreshing] = useState(false)

  // Mock trend data for the last 7 days
  const [trendData] = useState<TestTrend[]>([
    { date: '2024-01-01', totalTests: 1205, passedTests: 1152, failedTests: 53, passRate: 95.6, coverage: 86.1, duration: 356 },
    { date: '2024-01-02', totalTests: 1215, passedTests: 1164, failedTests: 51, passRate: 95.8, coverage: 86.3, duration: 348 },
    { date: '2024-01-03', totalTests: 1223, passedTests: 1169, failedTests: 54, passRate: 95.6, coverage: 86.7, duration: 352 },
    { date: '2024-01-04', totalTests: 1234, passedTests: 1175, failedTests: 59, passRate: 95.2, coverage: 87.0, duration: 359 },
    { date: '2024-01-05', totalTests: 1241, passedTests: 1183, failedTests: 58, passRate: 95.3, coverage: 87.1, duration: 347 },
    { date: '2024-01-06', totalTests: 1245, passedTests: 1187, failedTests: 58, passRate: 95.3, coverage: 87.2, duration: 344 },
    { date: '2024-01-07', totalTests: 1247, passedTests: 1189, failedTests: 58, passRate: 95.3, coverage: 87.3, duration: 342 }
  ])

  const refreshData = async () => {
    setIsRefreshing(true)
    
    // Simulate data refresh
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Update metrics with slight variations
    setMetrics(prev => ({
      ...prev,
      passedTests: prev.passedTests + Math.floor(Math.random() * 10 - 5),
      failedTests: Math.max(0, prev.failedTests + Math.floor(Math.random() * 6 - 3)),
      testCoverage: Math.max(0, Math.min(100, prev.testCoverage + (Math.random() - 0.5) * 2)),
      passRate: Math.max(0, Math.min(100, prev.passRate + (Math.random() - 0.5) * 1))
    }))

    setIsRefreshing(false)
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'unit': return <Target className="w-4 h-4" />
      case 'integration': return <Server className="w-4 h-4" />
      case 'e2e': return <Globe className="w-4 h-4" />
      case 'performance': return <Zap className="w-4 h-4" />
      case 'security': return <Shield className="w-4 h-4" />
      case 'accessibility': return <Accessibility className="w-4 h-4" />
      default: return <Bug className="w-4 h-4" />
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-500" />
      case 'down': return <TrendingDown className="w-4 h-4 text-red-500" />
      default: return <Activity className="w-4 h-4 text-gray-400" />
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

  const formatDuration = (seconds: number) => {
    if (seconds < 60) return `${seconds.toFixed(1)}s`
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    return `${minutes}m ${remainingSeconds}s`
  }

  const formatTimeAgo = (date: Date) => {
    const now = new Date()
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
    
    if (diffInMinutes < 1) return 'Just now'
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`
    return `${Math.floor(diffInMinutes / 1440)}d ago`
  }

  const filteredTestSuites = selectedCategory === 'all' 
    ? testSuites 
    : testSuites.filter(suite => suite.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold dark:text-white flex items-center">
                <BarChart3 className="w-8 h-8 mr-3 text-blue-600" />
                Quality Assurance Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Comprehensive testing metrics and quality insights
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {/* Time Range Selector */}
              <select
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value as any)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
              </select>

              <button
                onClick={refreshData}
                disabled={isRefreshing}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Test Pass Rate</p>
                <p className="text-2xl font-bold text-green-600">{metrics.passRate.toFixed(1)}%</p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-600">+2.1%</span>
              <span className="text-gray-600 dark:text-gray-400 ml-2">from last week</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Code Coverage</p>
                <p className="text-2xl font-bold text-blue-600">{metrics.testCoverage.toFixed(1)}%</p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-600">+1.2%</span>
              <span className="text-gray-600 dark:text-gray-400 ml-2">from last week</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Critical Issues</p>
                <p className="text-2xl font-bold text-red-600">{metrics.criticalIssues}</p>
              </div>
              <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-full">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingDown className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-600">-3 issues</span>
              <span className="text-gray-600 dark:text-gray-400 ml-2">from last week</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg Execution Time</p>
                <p className="text-2xl font-bold text-purple-600">{formatDuration(metrics.averageExecutionTime)}</p>
              </div>
              <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingDown className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-600">-15s</span>
              <span className="text-gray-600 dark:text-gray-400 ml-2">from last week</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quality Gates */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700">
              <div className="p-6 border-b dark:border-gray-700">
                <h2 className="text-xl font-semibold dark:text-white">Quality Gates</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Automated quality criteria that must be met for deployment
                </p>
              </div>

              <div className="p-6 space-y-4">
                {qualityGates.map((gate) => (
                  <div key={gate.id} className="flex items-center justify-between p-4 border dark:border-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(gate.status)}
                      <div>
                        <h3 className="font-medium dark:text-white">{gate.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{gate.description}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-semibold dark:text-white">
                        {gate.currentValue.toFixed(1)}
                        {gate.metric.includes('Rate') || gate.metric.includes('Coverage') || gate.metric.includes('Compliance') ? '%' : ''}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Target: {gate.threshold}
                        {gate.metric.includes('Rate') || gate.metric.includes('Coverage') || gate.metric.includes('Compliance') ? '%' : ''}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Test Suites */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700">
              <div className="p-6 border-b dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold dark:text-white">Test Suites</h2>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-sm"
                  >
                    <option value="all">All Categories</option>
                    <option value="unit">Unit Tests</option>
                    <option value="integration">Integration Tests</option>
                    <option value="e2e">End-to-End Tests</option>
                    <option value="performance">Performance Tests</option>
                    <option value="security">Security Tests</option>
                    <option value="accessibility">Accessibility Tests</option>
                  </select>
                </div>
              </div>

              <div className="divide-y dark:divide-gray-700">
                {filteredTestSuites.map((suite) => (
                  <div key={suite.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(suite.status)}
                        <div className="flex items-center space-x-2">
                          {getCategoryIcon(suite.category)}
                          <h3 className="font-semibold dark:text-white">{suite.name}</h3>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(suite.status)}`}>
                          {suite.status}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                        <span>Last run: {formatTimeAgo(suite.lastRun)}</span>
                        <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400">
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 mb-4">
                      <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
                        <div className="text-xs text-gray-600 dark:text-gray-400">Tests</div>
                        <div className="font-semibold dark:text-white">
                          {suite.passedTests}/{suite.totalTests}
                        </div>
                        <div className="flex items-center space-x-1 text-xs">
                          {getTrendIcon(suite.trends.passRate)}
                          <span className={suite.trends.passRate === 'up' ? 'text-green-600' : 
                                        suite.trends.passRate === 'down' ? 'text-red-600' : 'text-gray-600'}>
                            {((suite.passedTests / suite.totalTests) * 100).toFixed(1)}%
                          </span>
                        </div>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
                        <div className="text-xs text-gray-600 dark:text-gray-400">Duration</div>
                        <div className="font-semibold dark:text-white">
                          {formatDuration(suite.duration)}
                        </div>
                        <div className="flex items-center space-x-1 text-xs">
                          {getTrendIcon(suite.trends.duration)}
                          <span className={suite.trends.duration === 'down' ? 'text-green-600' : 
                                        suite.trends.duration === 'up' ? 'text-red-600' : 'text-gray-600'}>
                            Trend
                          </span>
                        </div>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
                        <div className="text-xs text-gray-600 dark:text-gray-400">Coverage</div>
                        <div className="font-semibold dark:text-white">
                          {suite.coverage.toFixed(1)}%
                        </div>
                        <div className="flex items-center space-x-1 text-xs">
                          {getTrendIcon(suite.trends.coverage)}
                          <span className={suite.trends.coverage === 'up' ? 'text-green-600' : 
                                        suite.trends.coverage === 'down' ? 'text-red-600' : 'text-gray-600'}>
                            Trend
                          </span>
                        </div>
                      </div>

                      <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
                        <div className="text-xs text-gray-600 dark:text-gray-400">Failed</div>
                        <div className="font-semibold text-red-600">
                          {suite.failedTests}
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          suite.status === 'passed' ? 'bg-green-500' :
                          suite.status === 'failed' ? 'bg-red-500' : 'bg-blue-500'
                        }`}
                        style={{ width: `${(suite.passedTests / suite.totalTests) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Defect Analysis */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4">Defect Analysis</h3>
              <div className="space-y-4">
                {defectAnalysis.map((defect, index) => (
                  <div key={index} className="border-b dark:border-gray-700 pb-4 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium dark:text-white">{defect.category}</span>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${getSeverityColor(defect.severity)}`}>
                          {defect.severity}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getTrendIcon(defect.trend)}
                        <span className="font-semibold dark:text-white">{defect.count}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>Resolution: {defect.resolution}%</span>
                      <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-1">
                        <div 
                          className="h-1 rounded-full bg-green-500"
                          style={{ width: `${defect.resolution}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Test Execution Summary */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4">Test Execution Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Total Tests</span>
                  <span className="font-semibold dark:text-white">{metrics.totalTests.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Passed</span>
                  <span className="font-semibold text-green-600">{metrics.passedTests.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Failed</span>
                  <span className="font-semibold text-red-600">{metrics.failedTests}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Skipped</span>
                  <span className="font-semibold text-yellow-600">{metrics.skippedTests}</span>
                </div>
                
                <div className="pt-4 border-t dark:border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Issues by Severity</span>
                  </div>
                  <div className="mt-2 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-red-600">Critical</span>
                      <span className="font-semibold text-red-600">{metrics.criticalIssues}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-orange-600">High</span>
                      <span className="font-semibold text-orange-600">{metrics.highIssues}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-yellow-600">Medium</span>
                      <span className="font-semibold text-yellow-600">{metrics.mediumIssues}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-600">Low</span>
                      <span className="font-semibold text-blue-600">{metrics.lowIssues}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center space-x-2">
                  <FileText className="w-4 h-4" />
                  <span>Generate Report</span>
                </button>
                
                <button className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Export Data</span>
                </button>
                
                <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center justify-center space-x-2">
                  <Settings className="w-4 h-4" />
                  <span>Configure Gates</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}