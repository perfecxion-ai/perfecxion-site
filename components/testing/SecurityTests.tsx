'use client'

import { useState, useEffect } from 'react'
import { 
  Play,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Key,
  Globe,
  Database,
  Server,
  Code,
  FileText,
  Download,
  Filter,
  Clock,
  Zap,
  Bug,
  Settings
} from 'lucide-react'
import { 
  SecurityTest, 
  SecurityVulnerability, 
  VulnerabilityType,
  SecurityCategory,
  SecuritySeverity 
} from '@/lib/testing/integration-types'

interface SecurityTestResult {
  testId: string
  status: 'pending' | 'running' | 'passed' | 'failed' | 'warning'
  vulnerabilities: SecurityVulnerability[]
  executionTime: number
  timestamp: Date
  evidence?: string
  recommendations: string[]
}

interface SecurityScan {
  id: string
  name: string
  description: string
  target: string
  status: 'idle' | 'running' | 'completed' | 'failed'
  progress: number
  startTime?: Date
  endTime?: Date
  testsRun: number
  vulnerabilitiesFound: number
  riskScore: number
}

export default function SecurityTests() {
  const [securityTests] = useState<SecurityTest[]>([
    {
      id: 'sql-injection-test',
      name: 'SQL Injection Vulnerability Test',
      category: 'input-validation',
      severity: 'critical',
      description: 'Tests for SQL injection vulnerabilities in input fields and API endpoints',
      targetUrl: '/api/v1/search',
      payload: "'; DROP TABLE users; --",
      expectedResponse: 'Error: Invalid input detected',
      vulnerabilityType: 'sql-injection',
      mitigationRequired: true
    },
    {
      id: 'xss-test',
      name: 'Cross-Site Scripting (XSS) Test',
      category: 'input-validation',
      severity: 'high',
      description: 'Tests for reflected and stored XSS vulnerabilities',
      targetUrl: '/api/v1/comments',
      payload: '<script>alert("XSS")</script>',
      expectedResponse: 'Input sanitized',
      vulnerabilityType: 'xss',
      mitigationRequired: true
    },
    {
      id: 'csrf-test',
      name: 'Cross-Site Request Forgery Test',
      category: 'session-management',
      severity: 'high',
      description: 'Tests for CSRF token validation and protection',
      targetUrl: '/api/v1/user/update',
      expectedResponse: 'CSRF token required',
      vulnerabilityType: 'csrf',
      mitigationRequired: true
    },
    {
      id: 'auth-bypass-test',
      name: 'Authentication Bypass Test',
      category: 'authentication',
      severity: 'critical',
      description: 'Tests for authentication bypass vulnerabilities',
      targetUrl: '/api/v1/admin',
      expectedResponse: 'Authentication required',
      vulnerabilityType: 'authentication-bypass',
      mitigationRequired: true
    },
    {
      id: 'privilege-escalation-test',
      name: 'Privilege Escalation Test',
      category: 'authorization',
      severity: 'critical',
      description: 'Tests for unauthorized privilege escalation',
      targetUrl: '/api/v1/user/promote',
      expectedResponse: 'Insufficient privileges',
      vulnerabilityType: 'privilege-escalation',
      mitigationRequired: true
    },
    {
      id: 'information-disclosure-test',
      name: 'Information Disclosure Test',
      category: 'data-protection',
      severity: 'medium',
      description: 'Tests for unintended information disclosure',
      targetUrl: '/api/v1/error',
      expectedResponse: 'Generic error message',
      vulnerabilityType: 'information-disclosure',
      mitigationRequired: false
    },
    {
      id: 'session-fixation-test',
      name: 'Session Fixation Test',
      category: 'session-management',
      severity: 'medium',
      description: 'Tests for session fixation vulnerabilities',
      targetUrl: '/api/v1/login',
      expectedResponse: 'New session created',
      vulnerabilityType: 'authentication-bypass',
      mitigationRequired: true
    },
    {
      id: 'rate-limit-test',
      name: 'Rate Limiting Test',
      category: 'infrastructure',
      severity: 'low',
      description: 'Tests rate limiting implementation',
      targetUrl: '/api/v1/scan',
      expectedResponse: 'Rate limit exceeded',
      vulnerabilityType: 'denial-of-service',
      mitigationRequired: false
    }
  ])

  const [results, setResults] = useState<Map<string, SecurityTestResult>>(new Map())
  const [currentScan, setCurrentScan] = useState<SecurityScan | null>(null)
  const [filter, setFilter] = useState<{
    category: 'all' | SecurityCategory
    severity: 'all' | SecuritySeverity
    status: 'all' | string
  }>({
    category: 'all',
    severity: 'all',
    status: 'all'
  })
  const [isRunning, setIsRunning] = useState(false)
  const [selectedTest, setSelectedTest] = useState<string | null>(null)
  const [showPayloads, setShowPayloads] = useState(false)

  const filteredTests = securityTests.filter(test => {
    if (filter.category !== 'all' && test.category !== filter.category) return false
    if (filter.severity !== 'all' && test.severity !== filter.severity) return false
    if (filter.status !== 'all') {
      const result = results.get(test.id)
      if (!result || result.status !== filter.status) return false
    }
    return true
  })

  // Security scan simulation
  const runSecurityScan = async () => {
    setIsRunning(true)
    
    const scan: SecurityScan = {
      id: `scan-${Date.now()}`,
      name: 'Comprehensive Security Scan',
      description: 'Full security vulnerability assessment',
      target: 'https://perfecxion.ai',
      status: 'running',
      progress: 0,
      startTime: new Date(),
      testsRun: 0,
      vulnerabilitiesFound: 0,
      riskScore: 0
    }
    
    setCurrentScan(scan)

    try {
      // Run each test sequentially with progress updates
      for (let i = 0; i < securityTests.length; i++) {
        const test = securityTests[i]
        
        // Update scan progress
        setCurrentScan(prev => prev ? {
          ...prev,
          progress: Math.floor((i / securityTests.length) * 100),
          testsRun: i
        } : null)

        await runSingleSecurityTest(test.id)
        
        // Small delay for realistic progress
        await new Promise(resolve => setTimeout(resolve, 1000))
      }

      // Complete scan
      const vulnerabilityCount = Array.from(results.values())
        .reduce((count, result) => count + result.vulnerabilities.length, 0)
      
      const riskScore = calculateRiskScore(Array.from(results.values()))

      setCurrentScan(prev => prev ? {
        ...prev,
        status: 'completed',
        progress: 100,
        endTime: new Date(),
        testsRun: securityTests.length,
        vulnerabilitiesFound: vulnerabilityCount,
        riskScore
      } : null)

    } catch (error) {
      setCurrentScan(prev => prev ? {
        ...prev,
        status: 'failed'
      } : null)
    } finally {
      setIsRunning(false)
    }
  }

  const runSingleSecurityTest = async (testId: string) => {
    const test = securityTests.find(t => t.id === testId)
    if (!test) return

    // Set test as running
    setResults(prev => new Map(prev).set(testId, {
      testId,
      status: 'running',
      vulnerabilities: [],
      executionTime: 0,
      timestamp: new Date(),
      recommendations: []
    }))

    const startTime = Date.now()

    try {
      // Simulate security test execution
      await new Promise(resolve => setTimeout(resolve, Math.random() * 3000 + 1000))
      
      // Generate realistic test results based on test type
      const { status, vulnerabilities, recommendations } = generateSecurityTestResult(test)

      const result: SecurityTestResult = {
        testId,
        status,
        vulnerabilities,
        executionTime: Date.now() - startTime,
        timestamp: new Date(),
        evidence: vulnerabilities.length > 0 ? generateEvidence(test) : undefined,
        recommendations
      }

      setResults(prev => new Map(prev).set(testId, result))

    } catch (error) {
      setResults(prev => new Map(prev).set(testId, {
        testId,
        status: 'failed',
        vulnerabilities: [],
        executionTime: Date.now() - startTime,
        timestamp: new Date(),
        recommendations: ['Test execution failed - review test configuration']
      }))
    }
  }

  const generateSecurityTestResult = (test: SecurityTest) => {
    // Simulate different outcomes based on test type and severity
    const shouldFindVulnerability = Math.random() < (test.severity === 'critical' ? 0.3 : 
                                                    test.severity === 'high' ? 0.2 : 
                                                    test.severity === 'medium' ? 0.1 : 0.05)

    if (shouldFindVulnerability) {
      const vulnerability: SecurityVulnerability = {
        id: `vuln-${test.id}-${Date.now()}`,
        type: test.vulnerabilityType,
        severity: test.severity,
        title: `${test.name} - Vulnerability Found`,
        description: getVulnerabilityDescription(test.vulnerabilityType),
        location: test.targetUrl,
        evidence: generateEvidence(test),
        remediation: getRemediationAdvice(test.vulnerabilityType),
        references: getSecurityReferences(test.vulnerabilityType)
      }

      return {
        status: 'failed' as const,
        vulnerabilities: [vulnerability],
        recommendations: getSecurityRecommendations(test.vulnerabilityType)
      }
    }

    return {
      status: 'passed' as const,
      vulnerabilities: [],
      recommendations: getPreventiveRecommendations(test.vulnerabilityType)
    }
  }

  const getVulnerabilityDescription = (type: VulnerabilityType): string => {
    const descriptions = {
      'sql-injection': 'SQL injection vulnerability allows attackers to manipulate database queries',
      'xss': 'Cross-site scripting vulnerability allows injection of malicious scripts',
      'csrf': 'Cross-site request forgery allows unauthorized actions on behalf of users',
      'authentication-bypass': 'Authentication bypass allows unauthorized access to protected resources',
      'privilege-escalation': 'Privilege escalation allows users to gain higher access levels',
      'information-disclosure': 'Information disclosure exposes sensitive data to unauthorized users',
      'denial-of-service': 'Denial of service vulnerability allows disruption of service availability'
    }
    return descriptions[type] || 'Security vulnerability detected'
  }

  const getRemediationAdvice = (type: VulnerabilityType): string => {
    const advice = {
      'sql-injection': 'Use parameterized queries and input validation to prevent SQL injection',
      'xss': 'Implement proper input sanitization and output encoding',
      'csrf': 'Implement CSRF tokens and validate origin headers',
      'authentication-bypass': 'Strengthen authentication mechanisms and access controls',
      'privilege-escalation': 'Implement proper authorization checks and principle of least privilege',
      'information-disclosure': 'Remove sensitive information from error messages and responses',
      'denial-of-service': 'Implement rate limiting and resource usage controls'
    }
    return advice[type] || 'Implement security best practices'
  }

  const getSecurityReferences = (type: VulnerabilityType): string[] => {
    const references = {
      'sql-injection': ['OWASP Top 10 A03:2021', 'CWE-89', 'NIST 800-53 SI-10'],
      'xss': ['OWASP Top 10 A03:2021', 'CWE-79', 'NIST 800-53 SI-10'],
      'csrf': ['OWASP Top 10 A01:2021', 'CWE-352', 'NIST 800-53 SC-8'],
      'authentication-bypass': ['OWASP Top 10 A07:2021', 'CWE-287', 'NIST 800-53 IA-2'],
      'privilege-escalation': ['OWASP Top 10 A01:2021', 'CWE-269', 'NIST 800-53 AC-6'],
      'information-disclosure': ['OWASP Top 10 A02:2021', 'CWE-200', 'NIST 800-53 SI-11'],
      'denial-of-service': ['CWE-400', 'NIST 800-53 SC-5']
    }
    return references[type] || ['OWASP Security Guidelines']
  }

  const getSecurityRecommendations = (type: VulnerabilityType): string[] => {
    const recommendations = {
      'sql-injection': [
        'Implement parameterized queries',
        'Use stored procedures with proper validation',
        'Apply principle of least privilege to database accounts',
        'Regular security code reviews'
      ],
      'xss': [
        'Implement Content Security Policy (CSP)',
        'Use proper output encoding',
        'Validate and sanitize all user inputs',
        'Use HTTP-only cookies'
      ],
      'csrf': [
        'Implement anti-CSRF tokens',
        'Validate HTTP referer headers',
        'Use SameSite cookie attributes',
        'Implement proper CORS policies'
      ],
      'authentication-bypass': [
        'Implement multi-factor authentication',
        'Use secure session management',
        'Regular security audits',
        'Strong password policies'
      ],
      'privilege-escalation': [
        'Implement role-based access control',
        'Regular privilege reviews',
        'Use principle of least privilege',
        'Secure API endpoints'
      ],
      'information-disclosure': [
        'Generic error messages',
        'Remove debug information',
        'Secure logging practices',
        'Data classification and protection'
      ],
      'denial-of-service': [
        'Implement rate limiting',
        'Use load balancing',
        'Monitor resource usage',
        'Implement circuit breakers'
      ]
    }
    return recommendations[type] || ['Follow security best practices']
  }

  const getPreventiveRecommendations = (type: VulnerabilityType): string[] => {
    return [
      'Continue following current security practices',
      'Regular security assessments recommended',
      'Stay updated with latest security patches'
    ]
  }

  const generateEvidence = (test: SecurityTest): string => {
    return `Test payload: ${test.payload || 'N/A'}\nTarget: ${test.targetUrl}\nTimestamp: ${new Date().toISOString()}`
  }

  const calculateRiskScore = (results: SecurityTestResult[]): number => {
    const vulnerabilities = results.flatMap(r => r.vulnerabilities)
    let score = 0
    
    vulnerabilities.forEach(vuln => {
      switch (vuln.severity) {
        case 'critical': score += 10; break
        case 'high': score += 7; break
        case 'medium': score += 4; break
        case 'low': score += 1; break
        case 'info': score += 0.5; break
      }
    })
    
    return Math.min(100, score)
  }

  const getSeverityIcon = (severity: SecuritySeverity) => {
    switch (severity) {
      case 'critical': return <AlertTriangle className="w-5 h-5 text-red-600" />
      case 'high': return <AlertTriangle className="w-5 h-5 text-orange-600" />
      case 'medium': return <AlertTriangle className="w-5 h-5 text-yellow-600" />
      case 'low': return <AlertTriangle className="w-5 h-5 text-blue-600" />
      case 'info': return <AlertTriangle className="w-5 h-5 text-gray-600" />
      default: return <Shield className="w-5 h-5 text-gray-400" />
    }
  }

  const getSeverityColor = (severity: SecuritySeverity) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
      case 'high': return 'text-orange-600 bg-orange-100 dark:bg-orange-900 dark:text-orange-200'
      case 'medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
      case 'low': return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200'
      case 'info': return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
      default: return 'text-gray-500 bg-gray-50 dark:bg-gray-800 dark:text-gray-400'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'passed': return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'failed': return <XCircle className="w-5 h-5 text-red-600" />
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-600" />
      case 'running': return <Clock className="w-5 h-5 text-blue-600 animate-spin" />
      default: return <Shield className="w-5 h-5 text-gray-400" />
    }
  }

  const getCategoryIcon = (category: SecurityCategory) => {
    switch (category) {
      case 'authentication': return <Key className="w-4 h-4" />
      case 'authorization': return <Lock className="w-4 h-4" />
      case 'input-validation': return <Code className="w-4 h-4" />
      case 'data-protection': return <Database className="w-4 h-4" />
      case 'session-management': return <Globe className="w-4 h-4" />
      case 'infrastructure': return <Server className="w-4 h-4" />
      default: return <Shield className="w-4 h-4" />
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold dark:text-white flex items-center">
                <Shield className="w-8 h-8 mr-3 text-red-600" />
                Security Vulnerability Testing
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Comprehensive security testing and vulnerability assessment
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {currentScan && (
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-600 animate-spin" />
                    <span className="text-sm text-blue-800 dark:text-blue-200">
                      Scan Progress: {currentScan.progress}%
                    </span>
                  </div>
                </div>
              )}
              <button
                onClick={runSecurityScan}
                disabled={isRunning}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isRunning ? <Clock className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                <span>{isRunning ? 'Running Scan...' : 'Start Security Scan'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Security Summary */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4">Security Summary</h3>
              <div className="space-y-4">
                <div className="border-b dark:border-gray-700 pb-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Tests Run</span>
                    <span className="font-semibold dark:text-white">{results.size}</span>
                  </div>
                </div>
                <div className="border-b dark:border-gray-700 pb-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Vulnerabilities</span>
                    <span className="font-semibold text-red-600">
                      {Array.from(results.values()).reduce((count, r) => count + r.vulnerabilities.length, 0)}
                    </span>
                  </div>
                </div>
                <div className="border-b dark:border-gray-700 pb-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Risk Score</span>
                    <span className={`font-semibold ${
                      currentScan && currentScan.riskScore > 50 ? 'text-red-600' :
                      currentScan && currentScan.riskScore > 20 ? 'text-yellow-600' : 'text-green-600'
                    }`}>
                      {currentScan?.riskScore.toFixed(1) || '0.0'}/100
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Pass Rate</span>
                    <span className="font-semibold text-green-600">
                      {results.size > 0 ? 
                        ((Array.from(results.values()).filter(r => r.status === 'passed').length / results.size) * 100).toFixed(1)
                        : '0.0'
                      }%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scan Configuration */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4 flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                Scan Settings
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Show Payloads</span>
                  <button
                    onClick={() => setShowPayloads(!showPayloads)}
                    className={`p-1 rounded ${showPayloads ? 'text-blue-600' : 'text-gray-400'}`}
                  >
                    {showPayloads ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Toggle visibility of test payloads and attack vectors
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
                    onChange={(e) => setFilter(prev => ({ ...prev, category: e.target.value as any }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white text-sm"
                  >
                    <option value="all">All Categories</option>
                    <option value="authentication">Authentication</option>
                    <option value="authorization">Authorization</option>
                    <option value="input-validation">Input Validation</option>
                    <option value="data-protection">Data Protection</option>
                    <option value="session-management">Session Management</option>
                    <option value="infrastructure">Infrastructure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Severity
                  </label>
                  <select
                    value={filter.severity}
                    onChange={(e) => setFilter(prev => ({ ...prev, severity: e.target.value as any }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white text-sm"
                  >
                    <option value="all">All Severities</option>
                    <option value="critical">Critical</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                    <option value="info">Info</option>
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
                    <option value="warning">Warning</option>
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
                  <h2 className="text-xl font-semibold dark:text-white">Security Tests</h2>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {filteredTests.length} tests
                  </div>
                </div>
              </div>

              <div className="divide-y dark:divide-gray-700">
                {filteredTests.map((test) => {
                  const result = results.get(test.id)

                  return (
                    <div key={test.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            {getStatusIcon(result?.status || 'pending')}
                            <div className="flex items-center space-x-2">
                              {getCategoryIcon(test.category)}
                              <h3 className="font-semibold dark:text-white">{test.name}</h3>
                            </div>
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${getSeverityColor(test.severity)}`}>
                              {test.severity}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                            {test.description}
                          </p>

                          <div className="text-gray-600 dark:text-gray-400 text-sm font-mono mb-3">
                            Target: {test.targetUrl}
                          </div>

                          {/* Show payload if enabled */}
                          {showPayloads && test.payload && (
                            <div className="bg-gray-100 dark:bg-gray-700 rounded p-2 mb-3">
                              <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Test Payload:</div>
                              <code className="text-xs text-red-600 dark:text-red-400 break-all">
                                {test.payload}
                              </code>
                            </div>
                          )}

                          {/* Test Results */}
                          {result && (
                            <div className="space-y-3">
                              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                                <div className="flex items-center space-x-1">
                                  <Clock className="w-4 h-4" />
                                  <span>{formatDuration(result.executionTime)}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Bug className="w-4 h-4" />
                                  <span>{result.vulnerabilities.length} vulnerabilities</span>
                                </div>
                              </div>

                              {/* Vulnerabilities */}
                              {result.vulnerabilities.map((vuln, index) => (
                                <div key={index} className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                                  <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center space-x-2">
                                      {getSeverityIcon(vuln.severity)}
                                      <h4 className="font-medium text-red-900 dark:text-red-200">
                                        {vuln.title}
                                      </h4>
                                    </div>
                                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getSeverityColor(vuln.severity)}`}>
                                      {vuln.severity}
                                    </span>
                                  </div>
                                  
                                  <p className="text-red-800 dark:text-red-300 text-sm mb-3">
                                    {vuln.description}
                                  </p>

                                  <div className="text-red-700 dark:text-red-400 text-sm mb-3">
                                    <strong>Location:</strong> {vuln.location}
                                  </div>

                                  <div className="text-red-700 dark:text-red-400 text-sm mb-3">
                                    <strong>Remediation:</strong> {vuln.remediation}
                                  </div>

                                  {vuln.references.length > 0 && (
                                    <div className="text-red-600 dark:text-red-400 text-xs">
                                      <strong>References:</strong> {vuln.references.join(', ')}
                                    </div>
                                  )}
                                </div>
                              ))}

                              {/* Recommendations */}
                              {result.recommendations.length > 0 && (
                                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                                  <h4 className="font-medium text-blue-900 dark:text-blue-200 mb-2">
                                    Recommendations
                                  </h4>
                                  <ul className="text-blue-800 dark:text-blue-300 text-sm space-y-1">
                                    {result.recommendations.map((rec, index) => (
                                      <li key={index} className="flex items-start space-x-2">
                                        <span className="text-blue-600 mt-1">•</span>
                                        <span>{rec}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          )}
                        </div>

                        <div className="flex items-center space-x-2 ml-4">
                          <button
                            onClick={() => runSingleSecurityTest(test.id)}
                            disabled={isRunning}
                            className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            title="Run security test"
                          >
                            <Play className="w-5 h-5" />
                          </button>
                          
                          {result && (
                            <button
                              onClick={() => setSelectedTest(test.id)}
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

              {filteredTests.length === 0 && (
                <div className="p-12 text-center">
                  <Shield className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    No Security Tests Found
                  </h3>
                  <p className="text-gray-500 dark:text-gray-500">
                    No tests match your current filters.
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