'use client'

import { useState, useEffect } from 'react'
import { 
  Play,
  Pause,
  Square,
  CheckCircle,
  XCircle,
  Clock,
  User,
  Route,
  Target,
  AlertTriangle,
  TrendingUp,
  Monitor,
  Smartphone,
  Tablet,
  Eye,
  Download,
  Filter,
  BarChart3
} from 'lucide-react'
import { 
  TestScenario,
  TestResult,
  UserJourney,
  TestStatus,
  TestSummary
} from '@/lib/testing/integration-types'
import { IntegrationTestSuite } from '@/lib/testing/integration-test-suite'

interface UserJourneyTestsProps {
  config?: {
    baseUrl: string
    parallel: boolean
    timeout: number
  }
}

export default function UserJourneyTests({ config = { baseUrl: 'https://perfecxion.ai', parallel: true, timeout: 30000 } }: UserJourneyTestsProps) {
  const [testSuite] = useState(() => new IntegrationTestSuite({
    baseUrl: config.baseUrl,
    timeout: config.timeout,
    retryAttempts: 3,
    screenshotOnFailure: true,
    videoRecording: false,
    headless: false,
    browsers: ['chrome', 'firefox', 'safari'],
    devices: ['desktop', 'tablet', 'mobile'],
    environments: [{
      name: 'production',
      url: config.baseUrl,
      credentials: {},
      features: ['all']
    }],
    parallel: config.parallel,
    maxWorkers: 4
  }))

  const [isRunning, setIsRunning] = useState(false)
  const [currentTest, setCurrentTest] = useState<string | null>(null)
  const [results, setResults] = useState<Map<string, TestResult>>(new Map())
  const [selectedJourney, setSelectedJourney] = useState<string>('visitor-to-customer')
  const [filter, setFilter] = useState<{
    status: 'all' | TestStatus
    category: 'all' | string
    priority: 'all' | string
  }>({
    status: 'all',
    category: 'all',
    priority: 'all'
  })
  const [summary, setSummary] = useState<TestSummary>({
    total: 0,
    passed: 0,
    failed: 0,
    skipped: 0,
    passRate: 0,
    failureRate: 0,
    averageDuration: 0
  })

  // Mock user journeys data
  const userJourneys: UserJourney[] = [
    {
      id: 'visitor-to-customer',
      name: 'Visitor to Customer Conversion',
      description: 'Complete journey from anonymous visitor to paying customer',
      persona: {
        id: 'security-developer',
        name: 'Security-Conscious Developer',
        role: 'developer',
        goals: ['Find security solution', 'Evaluate integration', 'Implement in production'],
        painPoints: ['Complex setup', 'Inaccurate results', 'Poor documentation'],
        technicalLevel: 'advanced',
        devicePreference: 'desktop'
      },
      scenarios: ['visitor-to-lead-conversion', 'developer-onboarding-journey', 'customer-success-journey'],
      criticalPath: true,
      conversionGoal: 'paid-subscription',
      estimatedDuration: 45
    },
    {
      id: 'enterprise-evaluation',
      name: 'Enterprise Evaluation Process',
      description: 'Enterprise customer evaluation and procurement journey',
      persona: {
        id: 'enterprise-security-manager',
        name: 'Enterprise Security Manager',
        role: 'customer',
        goals: ['Evaluate enterprise features', 'Assess compliance', 'Plan deployment'],
        painPoints: ['Lack of enterprise features', 'Complex deployment', 'Poor support'],
        technicalLevel: 'intermediate',
        devicePreference: 'both'
      },
      scenarios: ['enterprise-demo-request', 'compliance-validation', 'enterprise-onboarding'],
      criticalPath: true,
      conversionGoal: 'enterprise-contract',
      estimatedDuration: 120
    },
    {
      id: 'mobile-user-experience',
      name: 'Mobile User Experience',
      description: 'Mobile-first user experience validation across devices',
      persona: {
        id: 'mobile-developer',
        name: 'Mobile Developer',
        role: 'developer',
        goals: ['Quick security assessment', 'Mobile-optimized tools', 'Fast integration'],
        painPoints: ['Slow mobile performance', 'Poor touch interfaces', 'Limited mobile features'],
        technicalLevel: 'advanced',
        devicePreference: 'mobile'
      },
      scenarios: ['mobile-performance-validation', 'mobile-form-interaction', 'mobile-dashboard-usage'],
      criticalPath: false,
      conversionGoal: 'api-integration',
      estimatedDuration: 30
    }
  ]

  const scenarios = testSuite.getAllScenarios()
  const filteredScenarios = scenarios.filter(scenario => {
    if (filter.status !== 'all') {
      const result = results.get(scenario.id)
      if (!result || result.status !== filter.status) return false
    }
    if (filter.category !== 'all' && scenario.category !== filter.category) return false
    if (filter.priority !== 'all' && scenario.priority !== filter.priority) return false
    return true
  })

  useEffect(() => {
    // Update summary when results change
    const resultArray = Array.from(results.values())
    const total = resultArray.length
    const passed = resultArray.filter(r => r.status === 'passed').length
    const failed = resultArray.filter(r => r.status === 'failed').length
    const skipped = resultArray.filter(r => r.status === 'skipped').length
    const averageDuration = total > 0 
      ? resultArray.reduce((sum, r) => sum + r.duration, 0) / total 
      : 0

    setSummary({
      total,
      passed,
      failed,
      skipped,
      passRate: total > 0 ? (passed / total) * 100 : 0,
      failureRate: total > 0 ? (failed / total) * 100 : 0,
      averageDuration
    })
  }, [results])

  const runSingleScenario = async (scenarioId: string) => {
    setIsRunning(true)
    setCurrentTest(scenarioId)

    try {
      const result = await testSuite.runScenario(scenarioId)
      setResults(prev => new Map(prev).set(scenarioId, result))
    } catch (error) {
      console.error('Test execution failed:', error)
    } finally {
      setIsRunning(false)
      setCurrentTest(null)
    }
  }

  const runAllScenarios = async () => {
    setIsRunning(true)

    try {
      const report = await testSuite.runSuite()
      const newResults = new Map<string, TestResult>()
      report.results.forEach(result => {
        newResults.set(result.scenarioId, result)
      })
      setResults(newResults)
    } catch (error) {
      console.error('Test suite execution failed:', error)
    } finally {
      setIsRunning(false)
    }
  }

  const runJourneyScenarios = async (journeyId: string) => {
    const journey = userJourneys.find(j => j.id === journeyId)
    if (!journey) return

    setIsRunning(true)

    try {
      // Run scenarios in sequence for user journey
      for (const scenarioId of journey.scenarios) {
        setCurrentTest(scenarioId)
        const result = await testSuite.runScenario(scenarioId)
        setResults(prev => new Map(prev).set(scenarioId, result))
      }
    } catch (error) {
      console.error('Journey execution failed:', error)
    } finally {
      setIsRunning(false)
      setCurrentTest(null)
    }
  }

  const getStatusIcon = (status: TestStatus) => {
    switch (status) {
      case 'passed': return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'failed': return <XCircle className="w-5 h-5 text-red-600" />
      case 'running': return <Clock className="w-5 h-5 text-blue-600 animate-spin" />
      case 'skipped': return <Square className="w-5 h-5 text-gray-400" />
      default: return <Square className="w-5 h-5 text-gray-300" />
    }
  }

  const getStatusColor = (status: TestStatus) => {
    switch (status) {
      case 'passed': return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200'
      case 'failed': return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
      case 'running': return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200'
      case 'skipped': return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
      default: return 'text-gray-500 bg-gray-50 dark:bg-gray-800 dark:text-gray-400'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
      case 'high': return 'text-orange-600 bg-orange-100 dark:bg-orange-900 dark:text-orange-200'
      case 'medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
      case 'low': return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200'
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

  const getDeviceIcon = (deviceType: string) => {
    switch (deviceType) {
      case 'mobile': return <Smartphone className="w-4 h-4" />
      case 'tablet': return <Tablet className="w-4 h-4" />
      default: return <Monitor className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold dark:text-white">User Journey Testing</h1>
              <p className="text-gray-600 dark:text-gray-400">
                End-to-end testing of critical user conversion paths
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  summary.passRate >= 95 ? 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200' :
                  summary.passRate >= 80 ? 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200' :
                  'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {summary.passRate.toFixed(1)}% Pass Rate
                </span>
                <button
                  onClick={runAllScenarios}
                  disabled={isRunning}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isRunning ? 'Running...' : 'Run All Tests'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - User Journeys */}
          <div className="lg:col-span-1 space-y-6">
            {/* Test Summary */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4">Test Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Total Tests</span>
                  <span className="font-semibold dark:text-white">{summary.total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Passed</span>
                  <span className="font-semibold text-green-600">{summary.passed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Failed</span>
                  <span className="font-semibold text-red-600">{summary.failed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Avg Duration</span>
                  <span className="font-semibold dark:text-white">{formatDuration(summary.averageDuration)}</span>
                </div>
              </div>
            </div>

            {/* User Journeys */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4">User Journeys</h3>
              <div className="space-y-3">
                {userJourneys.map((journey) => (
                  <div key={journey.id} className="border dark:border-gray-600 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className="font-medium dark:text-white text-sm">{journey.name}</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                          {journey.description}
                        </p>
                      </div>
                      {journey.criticalPath && (
                        <AlertTriangle className="w-4 h-4 text-orange-500 ml-2" title="Critical Path" />
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center space-x-2">
                        <User className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          {journey.persona.name}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          {journey.estimatedDuration}m
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => runJourneyScenarios(journey.id)}
                      disabled={isRunning}
                      className="w-full mt-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-2 rounded text-sm hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Run Journey Tests
                    </button>
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
                    Status
                  </label>
                  <select
                    value={filter.status}
                    onChange={(e) => setFilter(prev => ({ ...prev, status: e.target.value as any }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white text-sm"
                  >
                    <option value="all">All Status</option>
                    <option value="passed">Passed</option>
                    <option value="failed">Failed</option>
                    <option value="pending">Pending</option>
                    <option value="running">Running</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Category
                  </label>
                  <select
                    value={filter.category}
                    onChange={(e) => setFilter(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white text-sm"
                  >
                    <option value="all">All Categories</option>
                    <option value="e2e">End-to-End</option>
                    <option value="performance">Performance</option>
                    <option value="integration">Integration</option>
                    <option value="security">Security</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Priority
                  </label>
                  <select
                    value={filter.priority}
                    onChange={(e) => setFilter(prev => ({ ...prev, priority: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white text-sm"
                  >
                    <option value="all">All Priorities</option>
                    <option value="critical">Critical</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Test Scenarios */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700">
              <div className="p-6 border-b dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold dark:text-white">Test Scenarios</h2>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>{filteredScenarios.length} scenarios</span>
                    {isRunning && currentTest && (
                      <span className="text-blue-600 dark:text-blue-400">
                        Running: {currentTest}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="divide-y dark:divide-gray-700">
                {filteredScenarios.map((scenario) => {
                  const result = results.get(scenario.id)
                  const isCurrentlyRunning = isRunning && currentTest === scenario.id

                  return (
                    <div key={scenario.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            {getStatusIcon(result?.status || 'pending')}
                            <h3 className="font-semibold dark:text-white">{scenario.name}</h3>
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${getPriorityColor(scenario.priority)}`}>
                              {scenario.priority}
                            </span>
                            {scenario.tags.includes('critical-path') && (
                              <Route className="w-4 h-4 text-orange-500" title="Critical Path" />
                            )}
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                            {scenario.description}
                          </p>

                          <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center space-x-1">
                              <BarChart3 className="w-4 h-4" />
                              <span>{scenario.steps.length} steps</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Target className="w-4 h-4" />
                              <span>{scenario.validations.length} validations</span>
                            </div>
                            {result && (
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{formatDuration(result.duration)}</span>
                              </div>
                            )}
                            <div className="flex items-center space-x-1">
                              {getDeviceIcon(result?.metadata.device.type || 'desktop')}
                              <span>{result?.metadata.browser.name || 'Chrome'}</span>
                            </div>
                          </div>

                          {/* Performance Metrics */}
                          {result?.performance && (
                            <div className="mt-3 grid grid-cols-3 gap-4 text-sm">
                              <div className="bg-gray-50 dark:bg-gray-700 rounded p-2">
                                <div className="text-gray-600 dark:text-gray-400">Page Load</div>
                                <div className="font-semibold dark:text-white">
                                  {formatDuration(result.performance.metrics.loadTime || 0)}
                                </div>
                              </div>
                              <div className="bg-gray-50 dark:bg-gray-700 rounded p-2">
                                <div className="text-gray-600 dark:text-gray-400">LCP</div>
                                <div className="font-semibold dark:text-white">
                                  {formatDuration(result.performance.coreWebVitals.lcp)}
                                </div>
                              </div>
                              <div className="bg-gray-50 dark:bg-gray-700 rounded p-2">
                                <div className="text-gray-600 dark:text-gray-400">CLS</div>
                                <div className="font-semibold dark:text-white">
                                  {result.performance.coreWebVitals.cls.toFixed(3)}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Error Messages */}
                          {result?.errors && result.errors.length > 0 && (
                            <div className="mt-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded p-3">
                              <div className="text-red-800 dark:text-red-200 text-sm font-medium mb-1">
                                Errors ({result.errors.length})
                              </div>
                              {result.errors.slice(0, 3).map((error, index) => (
                                <div key={index} className="text-red-700 dark:text-red-300 text-sm">
                                  {error.message}
                                </div>
                              ))}
                              {result.errors.length > 3 && (
                                <div className="text-red-600 dark:text-red-400 text-sm">
                                  +{result.errors.length - 3} more errors
                                </div>
                              )}
                            </div>
                          )}
                        </div>

                        <div className="flex items-center space-x-2 ml-4">
                          <button
                            onClick={() => runSingleScenario(scenario.id)}
                            disabled={isRunning}
                            className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            title="Run test"
                          >
                            {isCurrentlyRunning ? (
                              <Clock className="w-5 h-5 animate-spin" />
                            ) : (
                              <Play className="w-5 h-5" />
                            )}
                          </button>
                          
                          {result?.screenshots && result.screenshots.length > 0 && (
                            <button
                              className="p-2 text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
                              title="View screenshots"
                            >
                              <Eye className="w-5 h-5" />
                            </button>
                          )}
                          
                          <button
                            className="p-2 text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
                            title="Download report"
                          >
                            <Download className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {filteredScenarios.length === 0 && (
                <div className="p-12 text-center">
                  <Route className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    No Test Scenarios Found
                  </h3>
                  <p className="text-gray-500 dark:text-gray-500">
                    No scenarios match your current filters.
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