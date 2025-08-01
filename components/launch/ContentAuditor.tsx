'use client'

import { useState, useEffect } from 'react'
import { 
  FileText,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  Search,
  Filter,
  Eye,
  Edit,
  MessageSquare,
  Globe,
  Shield,
  Zap,
  Target,
  BarChart,
  BookOpen,
  Hash,
  Link,
  Image,
  Code,
  AlertCircle,
  ThumbsUp,
  ThumbsDown,
  RefreshCw
} from 'lucide-react'

interface ContentItem {
  id: string
  type: ContentType
  title: string
  path: string
  lastModified: Date
  author: string
  status: 'pending' | 'reviewing' | 'approved' | 'rejected' | 'needs-revision'
  priority: 'high' | 'medium' | 'low'
  checks: ContentCheck[]
  issues: ContentIssue[]
  seoScore?: number
  readabilityScore?: number
  wordCount?: number
  reviewer?: string
  reviewedAt?: Date
  comments?: string[]
}

interface ContentType {
  id: string
  name: string
  icon: React.ReactNode
  color: string
}

interface ContentCheck {
  id: string
  name: string
  status: 'passed' | 'failed' | 'warning' | 'pending'
  category: 'grammar' | 'brand' | 'technical' | 'legal' | 'seo' | 'accessibility'
  details?: string
  automated: boolean
}

interface ContentIssue {
  id: string
  type: 'error' | 'warning' | 'suggestion'
  category: string
  description: string
  location?: string
  suggestedFix?: string
}

interface ContentAuditReport {
  totalItems: number
  approved: number
  rejected: number
  pending: number
  needsRevision: number
  overallScore: number
  criticalIssues: number
  recommendations: string[]
}

export default function ContentAuditor() {
  const contentTypes: ContentType[] = [
    { id: 'page', name: 'Web Pages', icon: <Globe className="w-4 h-4" />, color: 'blue' },
    { id: 'blog', name: 'Blog Posts', icon: <BookOpen className="w-4 h-4" />, color: 'green' },
    { id: 'product', name: 'Product Content', icon: <Target className="w-4 h-4" />, color: 'purple' },
    { id: 'legal', name: 'Legal Documents', icon: <Shield className="w-4 h-4" />, color: 'red' },
    { id: 'api', name: 'API Documentation', icon: <Code className="w-4 h-4" />, color: 'yellow' },
    { id: 'marketing', name: 'Marketing Copy', icon: <BarChart className="w-4 h-4" />, color: 'indigo' }
  ]

  const [contentItems] = useState<ContentItem[]>([
    {
      id: 'homepage',
      type: contentTypes[0],
      title: 'Homepage - Main Landing',
      path: '/',
      lastModified: new Date(Date.now() - 86400000),
      author: 'Marketing Team',
      status: 'pending',
      priority: 'high',
      checks: [
        { id: 'grammar-1', name: 'Grammar & Spelling', status: 'pending', category: 'grammar', automated: true },
        { id: 'brand-1', name: 'Brand Voice Consistency', status: 'pending', category: 'brand', automated: false },
        { id: 'tech-1', name: 'Technical Accuracy', status: 'pending', category: 'technical', automated: false },
        { id: 'seo-1', name: 'SEO Optimization', status: 'pending', category: 'seo', automated: true },
        { id: 'a11y-1', name: 'Accessibility Compliance', status: 'pending', category: 'accessibility', automated: true }
      ],
      issues: [],
      seoScore: 0,
      readabilityScore: 0,
      wordCount: 1250
    },
    {
      id: 'products-page',
      type: contentTypes[2],
      title: 'Products - AI Security Scanner',
      path: '/products/ai-security-scanner',
      lastModified: new Date(Date.now() - 172800000),
      author: 'Product Team',
      status: 'pending',
      priority: 'high',
      checks: [
        { id: 'grammar-2', name: 'Grammar & Spelling', status: 'pending', category: 'grammar', automated: true },
        { id: 'brand-2', name: 'Brand Voice Consistency', status: 'pending', category: 'brand', automated: false },
        { id: 'tech-2', name: 'Technical Accuracy', status: 'pending', category: 'technical', automated: false },
        { id: 'seo-2', name: 'SEO Optimization', status: 'pending', category: 'seo', automated: true }
      ],
      issues: [],
      wordCount: 2100
    },
    {
      id: 'privacy-policy',
      type: contentTypes[3],
      title: 'Privacy Policy',
      path: '/privacy',
      lastModified: new Date(Date.now() - 259200000),
      author: 'Legal Team',
      status: 'pending',
      priority: 'high',
      checks: [
        { id: 'legal-1', name: 'Legal Compliance', status: 'pending', category: 'legal', automated: false },
        { id: 'grammar-3', name: 'Grammar & Spelling', status: 'pending', category: 'grammar', automated: true },
        { id: 'a11y-2', name: 'Accessibility Compliance', status: 'pending', category: 'accessibility', automated: true }
      ],
      issues: [],
      wordCount: 3500
    },
    {
      id: 'api-docs',
      type: contentTypes[4],
      title: 'API Documentation - REST API',
      path: '/docs/api',
      lastModified: new Date(Date.now() - 345600000),
      author: 'Engineering Team',
      status: 'pending',
      priority: 'medium',
      checks: [
        { id: 'tech-3', name: 'Technical Accuracy', status: 'pending', category: 'technical', automated: false },
        { id: 'grammar-4', name: 'Grammar & Spelling', status: 'pending', category: 'grammar', automated: true },
        { id: 'code-1', name: 'Code Examples Validation', status: 'pending', category: 'technical', automated: true }
      ],
      issues: [],
      wordCount: 5200
    },
    {
      id: 'blog-security',
      type: contentTypes[1],
      title: 'Blog - AI Security Best Practices',
      path: '/blog/ai-security-best-practices',
      lastModified: new Date(Date.now() - 432000000),
      author: 'Content Team',
      status: 'pending',
      priority: 'medium',
      checks: [
        { id: 'grammar-5', name: 'Grammar & Spelling', status: 'pending', category: 'grammar', automated: true },
        { id: 'seo-3', name: 'SEO Optimization', status: 'pending', category: 'seo', automated: true },
        { id: 'brand-3', name: 'Brand Voice Consistency', status: 'pending', category: 'brand', automated: false }
      ],
      issues: [],
      seoScore: 0,
      readabilityScore: 0,
      wordCount: 1800
    },
    {
      id: 'terms-service',
      type: contentTypes[3],
      title: 'Terms of Service',
      path: '/terms',
      lastModified: new Date(Date.now() - 518400000),
      author: 'Legal Team',
      status: 'pending',
      priority: 'high',
      checks: [
        { id: 'legal-2', name: 'Legal Compliance', status: 'pending', category: 'legal', automated: false },
        { id: 'grammar-6', name: 'Grammar & Spelling', status: 'pending', category: 'grammar', automated: true }
      ],
      issues: [],
      wordCount: 4200
    }
  ])

  const [auditResults, setAuditResults] = useState<Map<string, ContentItem>>(new Map())
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [isRunningAudit, setIsRunningAudit] = useState(false)
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const [auditProgress, setAuditProgress] = useState(0)

  const filteredItems = contentItems.filter(item => {
    const matchesType = selectedType === 'all' || item.type.id === selectedType
    const matchesStatus = selectedStatus === 'all' || item.status === selectedStatus
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.path.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesType && matchesStatus && matchesSearch
  })

  const runAutomatedAudit = async () => {
    setIsRunningAudit(true)
    setAuditProgress(0)

    try {
      for (let i = 0; i < contentItems.length; i++) {
        const item = contentItems[i]
        
        setAuditProgress(Math.floor((i / contentItems.length) * 100))
        
        // Run automated checks for this item
        await auditContentItem(item.id)
        
        // Simulate processing time
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
      
      setAuditProgress(100)
      
    } catch (error) {
      console.error('Audit error:', error)
    } finally {
      setIsRunningAudit(false)
    }
  }

  const auditContentItem = async (itemId: string) => {
    const item = contentItems.find(i => i.id === itemId)
    if (!item) return

    // Simulate automated checks
    const updatedChecks = item.checks.map(check => {
      if (!check.automated) return check

      const passRate = check.category === 'grammar' ? 0.9 :
                      check.category === 'seo' ? 0.8 :
                      check.category === 'accessibility' ? 0.85 : 0.75

      const passed = Math.random() < passRate

      return {
        ...check,
        status: passed ? 'passed' as const : 
                Math.random() < 0.5 ? 'warning' as const : 'failed' as const,
        details: passed ? 'All checks passed' : 'Issues detected'
      }
    })

    // Generate issues based on failed checks
    const issues: ContentIssue[] = []
    
    updatedChecks.forEach(check => {
      if (check.status === 'failed') {
        issues.push(generateIssue(check.category, 'error'))
      } else if (check.status === 'warning') {
        issues.push(generateIssue(check.category, 'warning'))
      }
    })

    // Calculate scores
    const seoScore = Math.floor(Math.random() * 30 + 70)
    const readabilityScore = Math.floor(Math.random() * 20 + 75)

    // Determine overall status
    const hasFailedChecks = updatedChecks.some(c => c.status === 'failed')
    const hasWarnings = updatedChecks.some(c => c.status === 'warning')
    
    const status = hasFailedChecks ? 'needs-revision' as const :
                  hasWarnings ? 'reviewing' as const : 'reviewing' as const

    const updatedItem: ContentItem = {
      ...item,
      checks: updatedChecks,
      issues,
      seoScore,
      readabilityScore,
      status
    }

    setAuditResults(prev => new Map(prev).set(itemId, updatedItem))
  }

  const generateIssue = (category: string, type: 'error' | 'warning' | 'suggestion'): ContentIssue => {
    const issues = {
      grammar: {
        error: 'Multiple spelling errors detected',
        warning: 'Complex sentences may affect readability',
        suggestion: 'Consider using active voice'
      },
      seo: {
        error: 'Missing meta description',
        warning: 'Title tag length not optimal',
        suggestion: 'Add more internal links'
      },
      accessibility: {
        error: 'Missing alt text for images',
        warning: 'Color contrast may not meet WCAG standards',
        suggestion: 'Add skip navigation link'
      },
      brand: {
        error: 'Inconsistent terminology used',
        warning: 'Tone differs from brand guidelines',
        suggestion: 'Update to match latest messaging'
      },
      technical: {
        error: 'Code example contains syntax errors',
        warning: 'API endpoint deprecated',
        suggestion: 'Add more detailed examples'
      },
      legal: {
        error: 'Missing required disclosure',
        warning: 'Terms may need update for new regulations',
        suggestion: 'Clarify data retention policy'
      }
    }

    const categoryIssues = issues[category as keyof typeof issues] || issues.grammar

    return {
      id: `issue-${Date.now()}-${Math.random()}`,
      type,
      category,
      description: categoryIssues[type] || 'Issue detected',
      suggestedFix: 'Review and update content accordingly'
    }
  }

  const approveContent = (itemId: string) => {
    const item = auditResults.get(itemId) || contentItems.find(i => i.id === itemId)
    if (!item) return

    setAuditResults(prev => new Map(prev).set(itemId, {
      ...item,
      status: 'approved',
      reviewer: 'Content Manager',
      reviewedAt: new Date()
    }))
  }

  const rejectContent = (itemId: string) => {
    const item = auditResults.get(itemId) || contentItems.find(i => i.id === itemId)
    if (!item) return

    setAuditResults(prev => new Map(prev).set(itemId, {
      ...item,
      status: 'rejected',
      reviewer: 'Content Manager',
      reviewedAt: new Date()
    }))
  }

  const getAuditReport = (): ContentAuditReport => {
    const allItems = contentItems.map(item => auditResults.get(item.id) || item)
    
    const report: ContentAuditReport = {
      totalItems: allItems.length,
      approved: allItems.filter(i => i.status === 'approved').length,
      rejected: allItems.filter(i => i.status === 'rejected').length,
      pending: allItems.filter(i => i.status === 'pending').length,
      needsRevision: allItems.filter(i => i.status === 'needs-revision').length,
      overallScore: 0,
      criticalIssues: 0,
      recommendations: []
    }

    // Calculate overall score
    const scores = allItems
      .filter(i => i.seoScore && i.readabilityScore)
      .map(i => (i.seoScore! + i.readabilityScore!) / 2)
    
    report.overallScore = scores.length > 0 
      ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
      : 0

    // Count critical issues
    report.criticalIssues = allItems
      .flatMap(i => i.issues)
      .filter(issue => issue.type === 'error').length

    // Generate recommendations
    if (report.criticalIssues > 0) {
      report.recommendations.push(`Address ${report.criticalIssues} critical content issues before launch`)
    }
    if (report.needsRevision > 0) {
      report.recommendations.push(`${report.needsRevision} items need revision`)
    }
    if (report.overallScore < 80) {
      report.recommendations.push('Improve SEO and readability scores across content')
    }

    return report
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'rejected': return <XCircle className="w-5 h-5 text-red-600" />
      case 'needs-revision': return <AlertTriangle className="w-5 h-5 text-yellow-600" />
      case 'reviewing': return <Clock className="w-5 h-5 text-blue-600" />
      default: return <Clock className="w-5 h-5 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200'
      case 'rejected': return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
      case 'needs-revision': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
      case 'reviewing': return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200'
      default: return 'text-gray-500 bg-gray-50 dark:bg-gray-800 dark:text-gray-400'
    }
  }

  const getIssueIcon = (type: string) => {
    switch (type) {
      case 'error': return <XCircle className="w-4 h-4 text-red-600" />
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-600" />
      default: return <AlertCircle className="w-4 h-4 text-blue-600" />
    }
  }

  const getCheckIcon = (status: string) => {
    switch (status) {
      case 'passed': return <CheckCircle className="w-4 h-4 text-green-600" />
      case 'failed': return <XCircle className="w-4 h-4 text-red-600" />
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-600" />
      default: return <Clock className="w-4 h-4 text-gray-400" />
    }
  }

  const report = getAuditReport()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold dark:text-white flex items-center">
                <FileText className="w-8 h-8 mr-3 text-blue-600" />
                Content Audit System
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Comprehensive content review and approval workflow
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {isRunningAudit && (
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <RefreshCw className="w-4 h-4 text-blue-600 animate-spin" />
                    <span className="text-sm text-blue-800 dark:text-blue-200">
                      Audit Progress: {auditProgress}%
                    </span>
                  </div>
                </div>
              )}
              <button
                onClick={runAutomatedAudit}
                disabled={isRunningAudit}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {isRunningAudit ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                <span>{isRunningAudit ? 'Running Audit...' : 'Run Content Audit'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Audit Report Summary */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6 mb-8">
          <h2 className="text-xl font-semibold dark:text-white mb-4">Content Audit Summary</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 dark:text-gray-200">{report.totalItems}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Items</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">{report.approved}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Approved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">{report.needsRevision}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Needs Revision</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">{report.rejected}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Rejected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{report.overallScore}%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Overall Score</div>
            </div>
          </div>

          {report.recommendations.length > 0 && (
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">
                Recommendations:
              </h3>
              <ul className="space-y-1">
                {report.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm text-yellow-700 dark:text-yellow-300">
                    <AlertCircle className="w-4 h-4 mt-0.5" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
            
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="all">All Types</option>
              {contentTypes.map(type => (
                <option key={type.id} value={type.id}>{type.name}</option>
              ))}
            </select>
            
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="reviewing">Reviewing</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="needs-revision">Needs Revision</option>
            </select>
          </div>
        </div>

        {/* Content Items */}
        <div className="space-y-4">
          {filteredItems.map((item) => {
            const auditedItem = auditResults.get(item.id) || item
            
            return (
              <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(auditedItem.status)}
                    <div>
                      <h3 className="font-semibold dark:text-white flex items-center space-x-2">
                        <span className={`p-1 rounded ${
                          item.type.color === 'blue' ? 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200' :
                          item.type.color === 'green' ? 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200' :
                          item.type.color === 'purple' ? 'text-purple-600 bg-purple-100 dark:bg-purple-900 dark:text-purple-200' :
                          item.type.color === 'red' ? 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200' :
                          item.type.color === 'yellow' ? 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200' :
                          'text-indigo-600 bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-200'
                        }`}>
                          {item.type.icon}
                        </span>
                        <span>{item.title}</span>
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-1">
                        <span className="flex items-center space-x-1">
                          <Link className="w-4 h-4" />
                          <span>{item.path}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Hash className="w-4 h-4" />
                          <span>{item.wordCount} words</span>
                        </span>
                        <span>By {item.author}</span>
                        <span>Modified {item.lastModified.toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(auditedItem.status)}`}>
                      {auditedItem.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>

                {/* Content Checks */}
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Content Checks</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {auditedItem.checks.map((check) => (
                      <div key={check.id} className="flex items-center space-x-2 text-sm">
                        {getCheckIcon(check.status)}
                        <span className="text-gray-600 dark:text-gray-400">{check.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scores */}
                {(auditedItem.seoScore || auditedItem.readabilityScore) && (
                  <div className="flex items-center space-x-6 mb-4">
                    {auditedItem.seoScore !== undefined && (
                      <div className="flex items-center space-x-2">
                        <Zap className="w-4 h-4 text-yellow-600" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          SEO Score: <span className="font-medium">{auditedItem.seoScore}%</span>
                        </span>
                      </div>
                    )}
                    {auditedItem.readabilityScore !== undefined && (
                      <div className="flex items-center space-x-2">
                        <BookOpen className="w-4 h-4 text-green-600" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Readability: <span className="font-medium">{auditedItem.readabilityScore}%</span>
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Issues */}
                {auditedItem.issues.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Issues Found</h4>
                    <div className="space-y-2">
                      {auditedItem.issues.slice(0, 3).map((issue) => (
                        <div key={issue.id} className="flex items-start space-x-2 text-sm">
                          {getIssueIcon(issue.type)}
                          <div className="flex-1">
                            <span className="text-gray-700 dark:text-gray-300">{issue.description}</span>
                            {issue.suggestedFix && (
                              <div className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                                Fix: {issue.suggestedFix}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                      {auditedItem.issues.length > 3 && (
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          +{auditedItem.issues.length - 3} more issues
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between border-t dark:border-gray-700 pt-4">
                  <div className="flex items-center space-x-2">
                    <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>Preview</span>
                    </button>
                    <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 flex items-center space-x-1">
                      <Edit className="w-4 h-4" />
                      <span>Edit</span>
                    </button>
                    <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 flex items-center space-x-1">
                      <MessageSquare className="w-4 h-4" />
                      <span>Comment</span>
                    </button>
                  </div>
                  
                  {auditedItem.status === 'reviewing' && (
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => approveContent(item.id)}
                        className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 flex items-center space-x-1"
                      >
                        <ThumbsUp className="w-4 h-4" />
                        <span>Approve</span>
                      </button>
                      <button
                        onClick={() => rejectContent(item.id)}
                        className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 flex items-center space-x-1"
                      >
                        <ThumbsDown className="w-4 h-4" />
                        <span>Reject</span>
                      </button>
                    </div>
                  )}
                  
                  {auditedItem.reviewedAt && (
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Reviewed by {auditedItem.reviewer} at {auditedItem.reviewedAt.toLocaleString()}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-12 text-center">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
              No Content Found
            </h3>
            <p className="text-gray-500 dark:text-gray-500">
              No content items match your current filters.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}