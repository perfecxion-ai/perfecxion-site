'use client'

import { useState, useEffect } from 'react'
import { 
  Play,
  Pause,
  CheckCircle,
  XCircle,
  Clock,
  Zap,
  Server,
  Database,
  Globe,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Activity,
  Shield,
  Key,
  RefreshCw,
  Download,
  Eye,
  Filter
} from 'lucide-react'

interface APIEndpoint {
  id: string
  name: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  url: string
  description: string
  category: 'core' | 'security' | 'analytics' | 'billing' | 'admin'
  priority: 'critical' | 'high' | 'medium' | 'low'
  auth: 'none' | 'api-key' | 'jwt' | 'basic'
  expectedStatus: number
  timeout: number
  rateLimit?: {
    requests: number
    window: number // seconds
  }
  payload?: any
  headers?: Record<string, string>
}

interface APITestResult {
  endpointId: string
  status: 'pending' | 'running' | 'passed' | 'failed'
  responseTime: number
  responseSize: number
  statusCode: number
  headers: Record<string, string>
  body?: any
  error?: string
  timestamp: Date
  retryAttempts: number
}

interface LoadTestResult {
  endpointId: string
  concurrent: number
  duration: number
  totalRequests: number
  successfulRequests: number
  failedRequests: number
  averageResponseTime: number
  minResponseTime: number
  maxResponseTime: number
  p50ResponseTime: number
  p95ResponseTime: number
  p99ResponseTime: number
  throughput: number
  errorRate: number
  errors: Array<{
    type: string
    count: number
    message: string
  }>
}

interface PerformanceBenchmark {
  metric: string
  target: number
  actual: number
  status: 'pass' | 'warning' | 'fail'
  improvement?: string
}

export default function APIIntegrationTests() {
  const [endpoints] = useState<APIEndpoint[]>([
    {
      id: 'health-check',
      name: 'Health Check',
      method: 'GET',
      url: '/api/health',
      description: 'System health and status endpoint',
      category: 'core',
      priority: 'critical',
      auth: 'none',
      expectedStatus: 200,
      timeout: 5000
    },
    {
      id: 'scan-endpoint',
      name: 'Security Scan',
      method: 'POST',
      url: '/api/v1/scan',
      description: 'Initiate security scan of target URL',
      category: 'security',
      priority: 'critical',
      auth: 'api-key',
      expectedStatus: 202,
      timeout: 10000,
      rateLimit: { requests: 100, window: 3600 },
      payload: {
        url: 'https://example.com',
        scan_type: 'comprehensive',
        notify_on_completion: true
      },
      headers: {
        'Content-Type': 'application/json'
      }
    },
    {
      id: 'scan-results',
      name: 'Scan Results',
      method: 'GET',
      url: '/api/v1/scan/results/{scanId}',
      description: 'Retrieve security scan results',
      category: 'security',
      priority: 'critical',
      auth: 'api-key',
      expectedStatus: 200,
      timeout: 5000
    },
    {
      id: 'user-profile',
      name: 'User Profile',
      method: 'GET',
      url: '/api/v1/user/profile',
      description: 'Get user profile information',
      category: 'core',
      priority: 'high',
      auth: 'jwt',
      expectedStatus: 200,
      timeout: 3000
    },
    {
      id: 'api-usage',
      name: 'API Usage Analytics',
      method: 'GET',
      url: '/api/v1/analytics/usage',
      description: 'Get API usage statistics',
      category: 'analytics',
      priority: 'medium',
      auth: 'api-key',
      expectedStatus: 200,
      timeout: 5000
    },
    {
      id: 'billing-info',
      name: 'Billing Information',
      method: 'GET',
      url: '/api/v1/billing/info',
      description: 'Get current billing information',
      category: 'billing',
      priority: 'high',
      auth: 'jwt',
      expectedStatus: 200,
      timeout: 3000
    },
    {
      id: 'admin-stats',
      name: 'Admin Statistics',
      method: 'GET',
      url: '/api/v1/admin/stats',
      description: 'Get system administration statistics',
      category: 'admin',
      priority: 'medium',
      auth: 'jwt',
      expectedStatus: 200,
      timeout: 5000
    }
  ])

  const [isRunning, setIsRunning] = useState(false)
  const [isLoadTesting, setIsLoadTesting] = useState(false)
  const [results, setResults] = useState<Map<string, APITestResult>>(new Map())
  const [loadTestResults, setLoadTestResults] = useState<Map<string, LoadTestResult>>(new Map())
  const [filter, setFilter] = useState<{
    category: 'all' | string
    status: 'all' | string
    priority: 'all' | string
  }>({
    category: 'all',
    status: 'all',
    priority: 'all'
  })
  const [selectedEndpoint, setSelectedEndpoint] = useState<string | null>(null)
  const [loadTestConfig, setLoadTestConfig] = useState({
    concurrentUsers: 10,
    duration: 60,
    rampUpTime: 10
  })

  const filteredEndpoints = endpoints.filter(endpoint => {
    if (filter.category !== 'all' && endpoint.category !== filter.category) return false
    if (filter.priority !== 'all' && endpoint.priority !== filter.priority) return false
    if (filter.status !== 'all') {
      const result = results.get(endpoint.id)
      if (!result || result.status !== filter.status) return false
    }
    return true
  })

  // Performance benchmarks
  const performanceBenchmarks: PerformanceBenchmark[] = [
    {
      metric: 'Average Response Time',
      target: 500,
      actual: Array.from(results.values()).reduce((sum, r) => sum + r.responseTime, 0) / results.size || 0,
      status: 'pass'
    },
    {
      metric: 'Success Rate',
      target: 99,
      actual: (Array.from(results.values()).filter(r => r.status === 'passed').length / results.size) * 100 || 0,
      status: 'pass'
    },
    {
      metric: 'Error Rate',
      target: 1,
      actual: (Array.from(results.values()).filter(r => r.status === 'failed').length / results.size) * 100 || 0,
      status: 'pass'
    }
  ]

  // Update benchmark statuses
  performanceBenchmarks.forEach(benchmark => {
    if (benchmark.metric === 'Error Rate') {
      benchmark.status = benchmark.actual <= benchmark.target ? 'pass' : 'fail'
    } else {
      if (benchmark.actual >= benchmark.target * 0.9) benchmark.status = 'pass'
      else if (benchmark.actual >= benchmark.target * 0.7) benchmark.status = 'warning'
      else benchmark.status = 'fail'
    }
  })

  const runSingleTest = async (endpointId: string) => {
    const endpoint = endpoints.find(e => e.id === endpointId)
    if (!endpoint) return

    // Set test as running
    setResults(prev => new Map(prev).set(endpointId, {
      endpointId,
      status: 'running',
      responseTime: 0,
      responseSize: 0,
      statusCode: 0,
      headers: {},
      timestamp: new Date(),
      retryAttempts: 0
    }))

    // Simulate API test execution
    const startTime = Date.now()
    
    try {
      // Mock API call - in real implementation, this would make actual HTTP requests
      await new Promise(resolve => setTimeout(resolve, Math.random() * 2000 + 500))
      
      const responseTime = Date.now() - startTime
      const success = Math.random() > 0.1 // 90% success rate for demo
      
      const result: APITestResult = {
        endpointId,
        status: success ? 'passed' : 'failed',
        responseTime,
        responseSize: Math.floor(Math.random() * 5000 + 500),
        statusCode: success ? endpoint.expectedStatus : 500,
        headers: {
          'content-type': 'application/json',
          'x-response-time': `${responseTime}ms`,
          'x-ratelimit-remaining': '99'
        },
        body: success ? { status: 'success', data: {} } : undefined,
        error: success ? undefined : 'Internal server error',
        timestamp: new Date(),
        retryAttempts: 0
      }

      setResults(prev => new Map(prev).set(endpointId, result))
    } catch (error) {
      setResults(prev => new Map(prev).set(endpointId, {
        endpointId,
        status: 'failed',
        responseTime: Date.now() - startTime,
        responseSize: 0,
        statusCode: 0,
        headers: {},
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date(),
        retryAttempts: 1
      }))
    }
  }

  const runAllTests = async () => {
    setIsRunning(true)
    
    try {
      // Run tests in parallel
      const promises = endpoints.map(endpoint => runSingleTest(endpoint.id))
      await Promise.all(promises)
    } finally {
      setIsRunning(false)
    }
  }

  const runLoadTest = async (endpointId: string) => {
    const endpoint = endpoints.find(e => e.id === endpointId)
    if (!endpoint) return

    setIsLoadTesting(true)

    try {
      // Simulate load test execution
      await new Promise(resolve => setTimeout(resolve, 3000))

      // Generate mock load test results
      const totalRequests = loadTestConfig.concurrentUsers * (loadTestConfig.duration / 10)
      const successfulRequests = Math.floor(totalRequests * (0.95 + Math.random() * 0.04))
      const failedRequests = totalRequests - successfulRequests
      
      const responseTimes = Array.from({ length: 1000 }, () => Math.random() * 1000 + 200)
      responseTimes.sort((a, b) => a - b)

      const result: LoadTestResult = {
        endpointId,
        concurrent: loadTestConfig.concurrentUsers,
        duration: loadTestConfig.duration,
        totalRequests,
        successfulRequests,
        failedRequests,
        averageResponseTime: responseTimes.reduce((sum, rt) => sum + rt, 0) / responseTimes.length,
        minResponseTime: responseTimes[0],
        maxResponseTime: responseTimes[responseTimes.length - 1],
        p50ResponseTime: responseTimes[Math.floor(responseTimes.length * 0.5)],
        p95ResponseTime: responseTimes[Math.floor(responseTimes.length * 0.95)],
        p99ResponseTime: responseTimes[Math.floor(responseTimes.length * 0.99)],
        throughput: totalRequests / loadTestConfig.duration,
        errorRate: (failedRequests / totalRequests) * 100,
        errors: failedRequests > 0 ? [
          { type: 'timeout', count: Math.floor(failedRequests * 0.6), message: 'Request timeout' },
          { type: 'server_error', count: Math.floor(failedRequests * 0.4), message: 'Internal server error' }
        ] : []
      }

      setLoadTestResults(prev => new Map(prev).set(endpointId, result))
    } finally {
      setIsLoadTesting(false)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'passed': return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'failed': return <XCircle className="w-5 h-5 text-red-600" />
      case 'running': return <Clock className="w-5 h-5 text-blue-600 animate-spin" />
      default: return <Clock className="w-5 h-5 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'passed': return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200'
      case 'failed': return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
      case 'running': return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200'
      default: return 'text-gray-500 bg-gray-50 dark:bg-gray-800 dark:text-gray-400'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'core': return <Server className="w-4 h-4" />
      case 'security': return <Shield className="w-4 h-4" />
      case 'analytics': return <Activity className="w-4 h-4" />
      case 'billing': return <Database className="w-4 h-4" />
      case 'admin': return <Key className="w-4 h-4" />
      default: return <Globe className="w-4 h-4" />
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

  const getBenchmarkIcon = (status: string) => {
    switch (status) {
      case 'pass': return <TrendingUp className="w-4 h-4 text-green-600" />
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-600" />
      case 'fail': return <TrendingDown className="w-4 h-4 text-red-600" />
      default: return <Activity className="w-4 h-4 text-gray-400" />
    }
  }

  const formatResponseTime = (ms: number) => {
    if (ms < 1000) return `${Math.round(ms)}ms`
    return `${(ms / 1000).toFixed(2)}s`
  }

  const formatBytes = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold dark:text-white">API Integration Testing</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Automated testing of API endpoints and performance validation
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={runAllTests}
                disabled={isRunning}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isRunning ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                <span>{isRunning ? 'Running Tests...' : 'Run All Tests'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Performance Benchmarks */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4">Performance Benchmarks</h3>
              <div className="space-y-4">
                {performanceBenchmarks.map((benchmark, index) => (
                  <div key={index} className="border-b dark:border-gray-700 pb-3 last:border-b-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium dark:text-white">{benchmark.metric}</span>
                      {getBenchmarkIcon(benchmark.status)}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Target: {benchmark.metric.includes('Time') ? formatResponseTime(benchmark.target) : `${benchmark.target}%`}
                      </span>
                      <span className={`font-medium ${
                        benchmark.status === 'pass' ? 'text-green-600' :
                        benchmark.status === 'warning' ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {benchmark.metric.includes('Time') ? formatResponseTime(benchmark.actual) : `${benchmark.actual.toFixed(1)}%`}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Load Test Configuration */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4">Load Test Config</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Concurrent Users
                  </label>
                  <input
                    type="number"
                    value={loadTestConfig.concurrentUsers}
                    onChange={(e) => setLoadTestConfig(prev => ({ ...prev, concurrentUsers: parseInt(e.target.value) || 10 }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    min="1"
                    max="1000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Duration (seconds)
                  </label>
                  <input
                    type="number"
                    value={loadTestConfig.duration}
                    onChange={(e) => setLoadTestConfig(prev => ({ ...prev, duration: parseInt(e.target.value) || 60 }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    min="10"
                    max="3600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Ramp Up Time (seconds)
                  </label>
                  <input
                    type="number"
                    value={loadTestConfig.rampUpTime}
                    onChange={(e) => setLoadTestConfig(prev => ({ ...prev, rampUpTime: parseInt(e.target.value) || 10 }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    min="1"
                    max="300"
                  />
                </div>
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
                    Category
                  </label>
                  <select
                    value={filter.category}
                    onChange={(e) => setFilter(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white text-sm"
                  >
                    <option value="all">All Categories</option>
                    <option value="core">Core</option>
                    <option value="security">Security</option>
                    <option value="analytics">Analytics</option>
                    <option value="billing">Billing</option>
                    <option value="admin">Admin</option>
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
                    <option value="failed">Failed</option>
                    <option value="running">Running</option>
                    <option value="pending">Pending</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700">
              <div className="p-6 border-b dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold dark:text-white">API Endpoints</h2>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {filteredEndpoints.length} endpoints
                  </div>
                </div>
              </div>

              <div className="divide-y dark:divide-gray-700">
                {filteredEndpoints.map((endpoint) => {
                  const result = results.get(endpoint.id)
                  const loadTestResult = loadTestResults.get(endpoint.id)

                  return (
                    <div key={endpoint.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            {getStatusIcon(result?.status || 'pending')}
                            <div className="flex items-center space-x-2">
                              {getCategoryIcon(endpoint.category)}
                              <span className={`px-2 py-1 rounded text-xs font-mono ${
                                endpoint.method === 'GET' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                                endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                                endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                                endpoint.method === 'DELETE' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                                'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                              }`}>
                                {endpoint.method}
                              </span>
                            </div>
                            <h3 className="font-semibold dark:text-white">{endpoint.name}</h3>
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${getPriorityColor(endpoint.priority)}`}>
                              {endpoint.priority}
                            </span>
                          </div>
                          
                          <div className="text-gray-600 dark:text-gray-400 text-sm font-mono mb-2">
                            {endpoint.url}
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                            {endpoint.description}
                          </p>

                          {/* Test Results */}
                          {result && (
                            <div className="grid grid-cols-4 gap-4 mb-4">
                              <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
                                <div className="text-xs text-gray-600 dark:text-gray-400">Response Time</div>
                                <div className="font-semibold dark:text-white">
                                  {formatResponseTime(result.responseTime)}
                                </div>
                              </div>
                              <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
                                <div className="text-xs text-gray-600 dark:text-gray-400">Status Code</div>
                                <div className={`font-semibold ${
                                  result.statusCode >= 200 && result.statusCode < 300 ? 'text-green-600' :
                                  result.statusCode >= 400 ? 'text-red-600' : 'text-yellow-600'
                                }`}>
                                  {result.statusCode}
                                </div>
                              </div>
                              <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
                                <div className="text-xs text-gray-600 dark:text-gray-400">Response Size</div>
                                <div className="font-semibold dark:text-white">
                                  {formatBytes(result.responseSize)}
                                </div>
                              </div>
                              <div className="bg-gray-50 dark:bg-gray-700 rounded p-3">
                                <div className="text-xs text-gray-600 dark:text-gray-400">Timestamp</div>
                                <div className="font-semibold dark:text-white text-xs">
                                  {result.timestamp.toLocaleTimeString()}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Load Test Results */}
                          {loadTestResult && (
                            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
                              <h4 className="font-medium text-blue-900 dark:text-blue-200 mb-3">Load Test Results</h4>
                              <div className="grid grid-cols-4 gap-4 text-sm">
                                <div>
                                  <div className="text-blue-700 dark:text-blue-300">Throughput</div>
                                  <div className="font-semibold text-blue-900 dark:text-blue-100">
                                    {loadTestResult.throughput.toFixed(1)} RPS
                                  </div>
                                </div>
                                <div>
                                  <div className="text-blue-700 dark:text-blue-300">P95 Response</div>
                                  <div className="font-semibold text-blue-900 dark:text-blue-100">
                                    {formatResponseTime(loadTestResult.p95ResponseTime)}
                                  </div>
                                </div>
                                <div>
                                  <div className="text-blue-700 dark:text-blue-300">Success Rate</div>
                                  <div className="font-semibold text-blue-900 dark:text-blue-100">
                                    {((loadTestResult.successfulRequests / loadTestResult.totalRequests) * 100).toFixed(1)}%
                                  </div>
                                </div>
                                <div>
                                  <div className="text-blue-700 dark:text-blue-300">Error Rate</div>
                                  <div className="font-semibold text-blue-900 dark:text-blue-100">
                                    {loadTestResult.errorRate.toFixed(2)}%
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Error Display */}
                          {result?.error && (
                            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded p-3 mb-4">
                              <div className="text-red-800 dark:text-red-200 text-sm font-medium mb-1">
                                Error
                              </div>
                              <div className="text-red-700 dark:text-red-300 text-sm">
                                {result.error}
                              </div>
                            </div>
                          )}

                          {/* Rate Limiting Info */}
                          {endpoint.rateLimit && (
                            <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                              <div className="flex items-center space-x-1">
                                <Zap className="w-3 h-3" />
                                <span>Rate Limit: {endpoint.rateLimit.requests}/{endpoint.rateLimit.window}s</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Key className="w-3 h-3" />
                                <span>Auth: {endpoint.auth}</span>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center space-x-2 ml-4">
                          <button
                            onClick={() => runSingleTest(endpoint.id)}
                            disabled={isRunning}
                            className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            title="Run single test"
                          >
                            <Play className="w-5 h-5" />
                          </button>
                          
                          <button
                            onClick={() => runLoadTest(endpoint.id)}
                            disabled={isLoadTesting}
                            className="p-2 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            title="Run load test"
                          >
                            {isLoadTesting ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Zap className="w-5 h-5" />}
                          </button>
                          
                          {result && (
                            <button
                              onClick={() => setSelectedEndpoint(endpoint.id)}
                              className="p-2 text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
                              title="View details"
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

              {filteredEndpoints.length === 0 && (
                <div className="p-12 text-center">
                  <Server className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    No API Endpoints Found
                  </h3>
                  <p className="text-gray-500 dark:text-gray-500">
                    No endpoints match your current filters.
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