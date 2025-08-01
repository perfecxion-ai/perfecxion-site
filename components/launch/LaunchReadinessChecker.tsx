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
  Globe,
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
  MonitorSpeaker,
  Server,
  Database,
  Code,
  BarChart3,
  Settings,
  Briefcase
} from 'lucide-react'

interface ReadinessCheck {
  id: string
  category: CheckCategory
  name: string
  description: string
  status: 'pending' | 'checking' | 'passed' | 'failed' | 'warning'
  automated: boolean
  responsible: string
  lastChecked?: Date
  details?: string[]
  actions?: string[]
  estimatedTime: number // in minutes
  critical: boolean
}

interface CheckCategory {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  color: string
}

interface LaunchReadinessReport {
  overallStatus: 'ready' | 'not-ready' | 'pending'
  readinessScore: number
  criticalIssues: number
  warnings: number
  timestamp: Date
  approvals: ApprovalStatus[]
  recommendations: string[]
}

interface ApprovalStatus {
  role: string
  name: string
  status: 'pending' | 'approved' | 'rejected'
  timestamp?: Date
  comments?: string
}

export default function LaunchReadinessChecker() {
  const categories: CheckCategory[] = [
    {
      id: 'technical',
      name: 'Technical Readiness',
      description: 'Infrastructure, deployment, and system validation',
      icon: <Server className="w-5 h-5" />,
      color: 'blue'
    },
    {
      id: 'content',
      name: 'Content & Legal',
      description: 'Content review, legal compliance, and documentation',
      icon: <FileText className="w-5 h-5" />,
      color: 'green'
    },
    {
      id: 'security',
      name: 'Security & Compliance',
      description: 'Security validation and compliance requirements',
      icon: <Shield className="w-5 h-5" />,
      color: 'red'
    },
    {
      id: 'performance',
      name: 'Performance & Monitoring',
      description: 'Performance benchmarks and monitoring setup',
      icon: <Zap className="w-5 h-5" />,
      color: 'yellow'
    },
    {
      id: 'support',
      name: 'Support & Operations',
      description: 'Support team readiness and operational procedures',
      icon: <Users className="w-5 h-5" />,
      color: 'purple'
    },
    {
      id: 'marketing',
      name: 'Marketing & Launch',
      description: 'Marketing materials and launch campaign readiness',
      icon: <Target className="w-5 h-5" />,
      color: 'indigo'
    }
  ]

  const [readinessChecks] = useState<ReadinessCheck[]>([
    // Technical Readiness
    {
      id: 'integration-tests',
      category: categories[0],
      name: 'All Integration Tests Passing',
      description: 'Verify all integration tests are passing with >95% success rate',
      status: 'pending',
      automated: true,
      responsible: 'Development Team',
      estimatedTime: 30,
      critical: true
    },
    {
      id: 'deployment-automation',
      category: categories[0],
      name: 'Deployment Automation Ready',
      description: 'CI/CD pipeline configured and tested for production deployment',
      status: 'pending',
      automated: true,
      responsible: 'DevOps Team',
      estimatedTime: 60,
      critical: true
    },
    {
      id: 'staging-validation',
      category: categories[0],
      name: 'Staging Environment Validated',
      description: 'Staging environment mirrors production and all tests pass',
      status: 'pending',
      automated: true,
      responsible: 'QA Team',
      estimatedTime: 120,
      critical: true
    },
    {
      id: 'rollback-procedures',
      category: categories[0],
      name: 'Rollback Procedures Tested',
      description: 'Deployment rollback procedures documented and tested',
      status: 'pending',
      automated: false,
      responsible: 'DevOps Team',
      estimatedTime: 45,
      critical: true
    },
    {
      id: 'dns-configuration',
      category: categories[0],
      name: 'DNS Configuration Ready',
      description: 'DNS records configured and propagation tested',
      status: 'pending',
      automated: true,
      responsible: 'Infrastructure Team',
      estimatedTime: 30,
      critical: true
    },
    {
      id: 'ssl-certificates',
      category: categories[0],
      name: 'SSL Certificates Valid',
      description: 'SSL certificates installed and validated with auto-renewal',
      status: 'pending',
      automated: true,
      responsible: 'Infrastructure Team',
      estimatedTime: 15,
      critical: true
    },

    // Content & Legal
    {
      id: 'content-review',
      category: categories[1],
      name: 'Content Review Complete',
      description: 'All website content reviewed for accuracy and brand consistency',
      status: 'pending',
      automated: false,
      responsible: 'Marketing Team',
      estimatedTime: 240,
      critical: true
    },
    {
      id: 'legal-compliance',
      category: categories[1],
      name: 'Legal Compliance Approved',
      description: 'Privacy policy, terms of service, and compliance requirements met',
      status: 'pending',
      automated: false,
      responsible: 'Legal Team',
      estimatedTime: 180,
      critical: true
    },
    {
      id: 'seo-optimization',
      category: categories[1],
      name: 'SEO Optimization Complete',
      description: 'Meta tags, schema markup, and SEO elements optimized',
      status: 'pending',
      automated: true,
      responsible: 'Marketing Team',
      estimatedTime: 60,
      critical: false
    },
    {
      id: 'documentation-complete',
      category: categories[1],
      name: 'Documentation Finalized',
      description: 'User guides, API docs, and support documentation complete',
      status: 'pending',
      automated: false,
      responsible: 'Product Team',
      estimatedTime: 120,
      critical: false
    },

    // Security & Compliance
    {
      id: 'security-scan',
      category: categories[2],
      name: 'Security Scan Passed',
      description: 'No critical or high security vulnerabilities detected',
      status: 'pending',
      automated: true,
      responsible: 'Security Team',
      estimatedTime: 90,
      critical: true
    },
    {
      id: 'penetration-testing',
      category: categories[2],
      name: 'Penetration Testing Complete',
      description: 'Third-party penetration testing completed with issues resolved',
      status: 'pending',
      automated: false,
      responsible: 'Security Team',
      estimatedTime: 480,
      critical: true
    },
    {
      id: 'data-encryption',
      category: categories[2],
      name: 'Data Encryption Verified',
      description: 'All sensitive data encrypted at rest and in transit',
      status: 'pending',
      automated: true,
      responsible: 'Security Team',
      estimatedTime: 30,
      critical: true
    },
    {
      id: 'access-controls',
      category: categories[2],
      name: 'Access Controls Configured',
      description: 'Role-based access control and authentication systems verified',
      status: 'pending',
      automated: true,
      responsible: 'Security Team',
      estimatedTime: 45,
      critical: true
    },

    // Performance & Monitoring
    {
      id: 'performance-benchmarks',
      category: categories[3],
      name: 'Performance Benchmarks Met',
      description: 'Page load times <3s and Core Web Vitals in green',
      status: 'pending',
      automated: true,
      responsible: 'Development Team',
      estimatedTime: 60,
      critical: true
    },
    {
      id: 'monitoring-setup',
      category: categories[3],
      name: 'Monitoring Systems Active',
      description: 'Application, infrastructure, and business monitoring configured',
      status: 'pending',
      automated: true,
      responsible: 'DevOps Team',
      estimatedTime: 90,
      critical: true
    },
    {
      id: 'alerting-configured',
      category: categories[3],
      name: 'Alerting Rules Configured',
      description: 'Critical alerts configured with escalation procedures',
      status: 'pending',
      automated: true,
      responsible: 'DevOps Team',
      estimatedTime: 60,
      critical: true
    },
    {
      id: 'load-testing',
      category: categories[3],
      name: 'Load Testing Completed',
      description: 'System handles expected traffic with 2x capacity',
      status: 'pending',
      automated: true,
      responsible: 'QA Team',
      estimatedTime: 120,
      critical: false
    },

    // Support & Operations
    {
      id: 'support-team-trained',
      category: categories[4],
      name: 'Support Team Trained',
      description: 'Customer support team trained on product and procedures',
      status: 'pending',
      automated: false,
      responsible: 'Customer Success',
      estimatedTime: 240,
      critical: true
    },
    {
      id: 'runbooks-created',
      category: categories[4],
      name: 'Operational Runbooks Created',
      description: 'Incident response and operational procedures documented',
      status: 'pending',
      automated: false,
      responsible: 'Operations Team',
      estimatedTime: 180,
      critical: true
    },
    {
      id: 'escalation-procedures',
      category: categories[4],
      name: 'Escalation Procedures Defined',
      description: 'Issue escalation paths and contact lists established',
      status: 'pending',
      automated: false,
      responsible: 'Operations Team',
      estimatedTime: 60,
      critical: true
    },
    {
      id: 'backup-procedures',
      category: categories[4],
      name: 'Backup Procedures Tested',
      description: 'Backup and recovery procedures validated',
      status: 'pending',
      automated: true,
      responsible: 'Infrastructure Team',
      estimatedTime: 90,
      critical: true
    },

    // Marketing & Launch
    {
      id: 'marketing-materials',
      category: categories[5],
      name: 'Marketing Materials Ready',
      description: 'All launch marketing materials finalized and approved',
      status: 'pending',
      automated: false,
      responsible: 'Marketing Team',
      estimatedTime: 180,
      critical: false
    },
    {
      id: 'pr-announcement',
      category: categories[5],
      name: 'PR Announcement Prepared',
      description: 'Press release and media kit ready for distribution',
      status: 'pending',
      automated: false,
      responsible: 'Marketing Team',
      estimatedTime: 120,
      critical: false
    },
    {
      id: 'social-media-ready',
      category: categories[5],
      name: 'Social Media Campaign Ready',
      description: 'Social media content scheduled and team briefed',
      status: 'pending',
      automated: false,
      responsible: 'Marketing Team',
      estimatedTime: 90,
      critical: false
    },
    {
      id: 'analytics-tracking',
      category: categories[5],
      name: 'Analytics Tracking Configured',
      description: 'Google Analytics, conversion tracking, and attribution setup',
      status: 'pending',
      automated: true,
      responsible: 'Marketing Team',
      estimatedTime: 45,
      critical: false
    }
  ])

  const [checkResults, setCheckResults] = useState<Map<string, ReadinessCheck>>(new Map())
  const [isRunningChecks, setIsRunningChecks] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [overallProgress, setOverallProgress] = useState(0)
  const [report, setReport] = useState<LaunchReadinessReport | null>(null)
  
  const [approvals, setApprovals] = useState<ApprovalStatus[]>([
    { role: 'CEO', name: 'Business Readiness', status: 'pending' },
    { role: 'CTO', name: 'Technical Readiness', status: 'pending' },
    { role: 'Legal Counsel', name: 'Compliance Readiness', status: 'pending' },
    { role: 'Marketing Lead', name: 'Content Readiness', status: 'pending' },
    { role: 'Customer Success', name: 'Support Readiness', status: 'pending' }
  ])

  const filteredChecks = selectedCategory === 'all' 
    ? readinessChecks 
    : readinessChecks.filter(check => check.category.id === selectedCategory)

  const runAutomatedChecks = async () => {
    setIsRunningChecks(true)
    setOverallProgress(0)

    const automatedChecks = readinessChecks.filter(check => check.automated)
    const totalChecks = automatedChecks.length
    
    try {
      for (let i = 0; i < automatedChecks.length; i++) {
        const check = automatedChecks[i]
        
        setOverallProgress(Math.floor((i / totalChecks) * 100))
        
        // Set check as running
        setCheckResults(prev => new Map(prev).set(check.id, {
          ...check,
          status: 'checking'
        }))

        // Simulate check execution
        await new Promise(resolve => setTimeout(resolve, Math.random() * 2000 + 500))
        
        // Generate check result
        const result = generateCheckResult(check)
        setCheckResults(prev => new Map(prev).set(check.id, result))
      }
      
      setOverallProgress(100)
      
      // Generate overall report
      generateLaunchReport()
      
    } catch (error) {
      console.error('Check error:', error)
    } finally {
      setIsRunningChecks(false)
    }
  }

  const generateCheckResult = (check: ReadinessCheck): ReadinessCheck => {
    // Simulate different outcomes based on check characteristics
    const passRate = check.critical ? 0.8 : 0.9
    const outcome = Math.random()
    
    if (outcome < passRate) {
      return {
        ...check,
        status: 'passed',
        lastChecked: new Date(),
        details: [
          '✓ All validation criteria met',
          '✓ No issues detected',
          '✓ System ready for production'
        ]
      }
    } else if (outcome < passRate + 0.1) {
      return {
        ...check,
        status: 'warning',
        lastChecked: new Date(),
        details: [
          '⚠ Minor issues detected',
          '⚠ Recommendations provided',
          '⚠ Not blocking launch'
        ],
        actions: [
          'Review recommendations',
          'Schedule post-launch fixes',
          'Monitor closely after launch'
        ]
      }
    } else {
      return {
        ...check,
        status: 'failed',
        lastChecked: new Date(),
        details: [
          '✗ Critical issues found',
          '✗ Requirements not met',
          '✗ Must be resolved before launch'
        ],
        actions: [
          'Address critical issues immediately',
          'Re-run validation after fixes',
          'Escalate to responsible team'
        ]
      }
    }
  }

  const generateLaunchReport = () => {
    const allResults = Array.from(checkResults.values())
    const criticalResults = allResults.filter(r => r.critical)
    
    const criticalIssues = criticalResults.filter(r => r.status === 'failed').length
    const warnings = allResults.filter(r => r.status === 'warning').length
    const passed = allResults.filter(r => r.status === 'passed').length
    
    const readinessScore = Math.floor((passed / allResults.length) * 100)
    const overallStatus = criticalIssues > 0 ? 'not-ready' : 
                         readinessScore >= 95 ? 'ready' : 'pending'
    
    const recommendations = []
    
    if (criticalIssues > 0) {
      recommendations.push('Resolve all critical issues before proceeding with launch')
    }
    if (warnings > 5) {
      recommendations.push('Address warning items to ensure smooth launch')
    }
    if (readinessScore < 95) {
      recommendations.push('Complete remaining checks to achieve 95%+ readiness')
    }
    
    setReport({
      overallStatus,
      readinessScore,
      criticalIssues,
      warnings,
      timestamp: new Date(),
      approvals,
      recommendations
    })
  }

  const runManualCheck = async (checkId: string) => {
    const check = readinessChecks.find(c => c.id === checkId)
    if (!check) return

    setCheckResults(prev => new Map(prev).set(checkId, {
      ...check,
      status: 'checking'
    }))

    // Simulate manual check process
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const result = generateCheckResult(check)
    setCheckResults(prev => new Map(prev).set(checkId, result))
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'passed': return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'failed': return <XCircle className="w-5 h-5 text-red-600" />
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-600" />
      case 'checking': return <Clock className="w-5 h-5 text-blue-600 animate-spin" />
      default: return <Square className="w-5 h-5 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'passed': return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200'
      case 'failed': return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
      case 'warning': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
      case 'checking': return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200'
      default: return 'text-gray-500 bg-gray-50 dark:bg-gray-800 dark:text-gray-400'
    }
  }

  const getCategoryColor = (color: string) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200',
      green: 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200',
      red: 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200',
      yellow: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200',
      purple: 'text-purple-600 bg-purple-100 dark:bg-purple-900 dark:text-purple-200',
      indigo: 'text-indigo-600 bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-200'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getCheckStats = () => {
    const results = Array.from(checkResults.values())
    const criticalChecks = readinessChecks.filter(c => c.critical)
    const criticalResults = results.filter(r => r.critical)
    
    const stats = {
      total: readinessChecks.length,
      checked: results.length,
      passed: results.filter(r => r.status === 'passed').length,
      failed: results.filter(r => r.status === 'failed').length,
      warnings: results.filter(r => r.status === 'warning').length,
      pending: readinessChecks.length - results.length,
      criticalPassed: criticalResults.filter(r => r.status === 'passed').length,
      criticalTotal: criticalChecks.length
    }
    
    return stats
  }

  const stats = getCheckStats()

  const updateApproval = (role: string, status: 'approved' | 'rejected') => {
    setApprovals(prev => prev.map(approval => 
      approval.role === role 
        ? { ...approval, status, timestamp: new Date() }
        : approval
    ))
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold dark:text-white flex items-center">
                <Truck className="w-8 h-8 mr-3 text-green-600" />
                Launch Readiness Checker
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Comprehensive validation for production deployment
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {isRunningChecks && (
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <RefreshCw className="w-4 h-4 text-blue-600 animate-spin" />
                    <span className="text-sm text-blue-800 dark:text-blue-200">
                      Progress: {overallProgress}%
                    </span>
                  </div>
                </div>
              )}
              <button
                onClick={runAutomatedChecks}
                disabled={isRunningChecks}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isRunningChecks ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
                <span>{isRunningChecks ? 'Running Checks...' : 'Run Automated Checks'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overall Status */}
        {report && (
          <div className={`mb-8 rounded-lg shadow-sm border p-6 ${
            report.overallStatus === 'ready' 
              ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
              : report.overallStatus === 'not-ready'
              ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
              : 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className={`text-2xl font-bold ${
                  report.overallStatus === 'ready' 
                    ? 'text-green-800 dark:text-green-200'
                    : report.overallStatus === 'not-ready'
                    ? 'text-red-800 dark:text-red-200'
                    : 'text-yellow-800 dark:text-yellow-200'
                }`}>
                  Launch Status: {report.overallStatus === 'ready' ? 'READY FOR LAUNCH' : 
                                  report.overallStatus === 'not-ready' ? 'NOT READY' : 
                                  'PENDING COMPLETION'}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Last checked: {report.timestamp.toLocaleString()}
                </p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                  {report.readinessScore}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Readiness Score
                </div>
              </div>
            </div>

            {report.recommendations.length > 0 && (
              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Recommendations:
                </h3>
                <ul className="space-y-1">
                  {report.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start space-x-2 text-gray-700 dark:text-gray-300">
                      <AlertCircle className="w-4 h-4 mt-0.5" />
                      <span className="text-sm">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600">{stats.passed}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Passed</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-red-600">{stats.failed}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Failed</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-600">{stats.warnings}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Warnings</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-gray-600">{stats.pending}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Pending</div>
              </div>
            </div>
          </div>
        )}

        {/* Critical Path Status */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6 mb-8">
          <h2 className="text-xl font-semibold dark:text-white mb-4">Critical Path Status</h2>
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Critical checks must pass before launch
            </div>
            <div className="text-lg font-semibold dark:text-white">
              {stats.criticalPassed} / {stats.criticalTotal} Passed
            </div>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div 
              className={`h-3 rounded-full transition-all duration-300 ${
                stats.criticalPassed === stats.criticalTotal 
                  ? 'bg-green-500' 
                  : 'bg-red-500'
              }`}
              style={{ width: `${(stats.criticalPassed / stats.criticalTotal) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Go-Live Approvals */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6 mb-8">
          <h2 className="text-xl font-semibold dark:text-white mb-4">Go-Live Approvals</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {approvals.map((approval) => (
              <div key={approval.role} className="border dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium dark:text-white">{approval.role}</div>
                  {approval.status === 'approved' && <CheckCircle className="w-5 h-5 text-green-600" />}
                  {approval.status === 'rejected' && <XCircle className="w-5 h-5 text-red-600" />}
                  {approval.status === 'pending' && <Clock className="w-5 h-5 text-gray-400" />}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                  {approval.name}
                </div>
                {approval.status === 'pending' && (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => updateApproval(approval.role, 'approved')}
                      className="flex-1 text-xs px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateApproval(approval.role, 'rejected')}
                      className="flex-1 text-xs px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                      Reject
                    </button>
                  </div>
                )}
                {approval.timestamp && (
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    {approval.timestamp.toLocaleString()}
                  </div>
                )}
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
                  All Categories ({readinessChecks.length})
                </button>
                {categories.map((category) => {
                  const count = readinessChecks.filter(check => check.category.id === category.id).length
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center space-x-2 ${
                        selectedCategory === category.id 
                          ? getCategoryColor(category.color)
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
                  <span>Export Report</span>
                </button>
                
                <button className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download Checklist</span>
                </button>
                
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center justify-center space-x-2">
                  <Briefcase className="w-4 h-4" />
                  <span>View Runbooks</span>
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
                    Readiness Checks
                  </h2>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {filteredChecks.length} items
                  </div>
                </div>
              </div>

              <div className="divide-y dark:divide-gray-700">
                {filteredChecks.map((check) => {
                  const result = checkResults.get(check.id) || check

                  return (
                    <div key={check.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            {getStatusIcon(result.status)}
                            <div className="flex items-center space-x-2">
                              <span className={`p-1 rounded ${getCategoryColor(check.category.color)}`}>
                                {check.category.icon}
                              </span>
                              <h3 className="font-semibold dark:text-white">{check.name}</h3>
                            </div>
                            {check.critical && (
                              <span className="px-2 py-1 rounded text-xs font-semibold text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200">
                                Critical
                              </span>
                            )}
                            {check.automated && (
                              <span className="px-2 py-1 rounded text-xs font-semibold text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200">
                                Automated
                              </span>
                            )}
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                            {check.description}
                          </p>

                          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{check.responsible}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{check.estimatedTime}m</span>
                            </div>
                            {result.lastChecked && (
                              <div className="flex items-center space-x-1">
                                <Activity className="w-4 h-4" />
                                <span>Checked {result.lastChecked.toLocaleTimeString()}</span>
                              </div>
                            )}
                          </div>

                          {/* Check Results */}
                          {result.status !== 'pending' && result.details && (
                            <div className={`rounded-lg p-4 mb-3 ${
                              result.status === 'passed' ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' :
                              result.status === 'failed' ? 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800' :
                              result.status === 'warning' ? 'bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800' :
                              'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'
                            }`}>
                              <div className="space-y-1">
                                {result.details.map((detail, index) => (
                                  <div key={index} className={`text-sm ${
                                    result.status === 'passed' ? 'text-green-800 dark:text-green-300' :
                                    result.status === 'failed' ? 'text-red-800 dark:text-red-300' :
                                    result.status === 'warning' ? 'text-yellow-800 dark:text-yellow-300' :
                                    'text-blue-800 dark:text-blue-300'
                                  }`}>
                                    {detail}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Actions */}
                          {result.actions && (
                            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                              <h4 className="font-medium text-sm text-gray-700 dark:text-gray-300 mb-2">
                                Required Actions:
                              </h4>
                              <ul className="space-y-1">
                                {result.actions.map((action, index) => (
                                  <li key={index} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                                    <span className="text-gray-400">•</span>
                                    <span>{action}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        <div className="flex items-center space-x-2 ml-4">
                          {!check.automated && (
                            <button
                              onClick={() => runManualCheck(check.id)}
                              disabled={isRunningChecks || result.status === 'checking'}
                              className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                              title="Run manual check"
                            >
                              <Play className="w-5 h-5" />
                            </button>
                          )}
                          
                          <button
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

              {filteredChecks.length === 0 && (
                <div className="p-12 text-center">
                  <CheckSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                    No Checks Found
                  </h3>
                  <p className="text-gray-500 dark:text-gray-500">
                    No readiness checks match your current selection.
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