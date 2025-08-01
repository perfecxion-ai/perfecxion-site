'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Bug,
  Shield,
  DollarSign,
  TrendingUp,
  Clock,
  Users,
  Award,
  Target,
  AlertTriangle,
  CheckCircle,
  Eye,
  Upload,
  Calendar,
  Star,
  Trophy,
  FileText,
  Search,
  Filter
} from 'lucide-react'
import { VulnerabilitySubmission, BugBountyProgram, ResearcherProfile } from '@/lib/community-types'
import { BUG_BOUNTY_REWARDS, DISCLOSURE_TIMELINE } from '@/lib/community-config'

interface BugBountyStats {
  totalPaid: number
  totalSubmissions: number
  activeResearchers: number
  avgResolutionTime: number
  criticalVulns: number
  highVulns: number
}

export default function BugBountyPortal() {
  const [activeTab, setActiveTab] = useState<'overview' | 'submit' | 'submissions' | 'leaderboard' | 'rules'>('overview')
  const [submissions, setSubmissions] = useState<VulnerabilitySubmission[]>([])
  const [stats, setStats] = useState<BugBountyStats>({
    totalPaid: 247500,
    totalSubmissions: 1847,
    activeResearchers: 329,
    avgResolutionTime: 12,
    criticalVulns: 23,
    highVulns: 89
  })
  const [program, setProgram] = useState<BugBountyProgram | null>(null)
  const [topResearchers, setTopResearchers] = useState<ResearcherProfile[]>([])
  const [loading, setLoading] = useState(true)

  // Mock data - replace with real API calls
  useEffect(() => {
    const mockProgram: BugBountyProgram = {
      id: 'main-program',
      name: 'perfecXion AI Security Bug Bounty',
      description: 'Help us secure the future of AI by finding vulnerabilities in our AI security products.',
      scope: [
        'https://api.perfecxion.ai/*',
        'https://app.perfecxion.ai/*',
        'Mobile applications',
        'AI model endpoints',
        'Authentication systems'
      ],
      rewards: [
        { severity: 'critical', minAmount: 2000, maxAmount: 10000, currency: 'USD' },
        { severity: 'high', minAmount: 1000, maxAmount: 5000, currency: 'USD' },
        { severity: 'medium', minAmount: 500, maxAmount: 2000, currency: 'USD' },
        { severity: 'low', minAmount: 100, maxAmount: 500, currency: 'USD' }
      ],
      rules: 'Follow responsible disclosure guidelines. No DoS attacks. No social engineering.',
      isActive: true,
      startDate: new Date('2023-01-01'),
      totalPaid: 247500,
      participantCount: 329
    }

    const mockSubmissions: VulnerabilitySubmission[] = [
      {
        id: '1',
        programId: 'main-program',
        researcherId: 'researcher1',
        title: 'Prompt Injection Leading to Model Extraction',
        description: 'Discovered a method to extract internal model weights through carefully crafted prompts...',
        affectedSystems: ['https://api.perfecxion.ai/v1/chat'],
        severity: 'critical',
        cvssScore: 9.2,
        proofOfConcept: {
          steps: [
            'Send specially crafted prompt with embedded instructions',
            'Observe model response revealing internal architecture',
            'Extract sensitive model parameters'
          ],
          evidence: [],
          videoDemo: 'https://example.com/demo.mp4'
        },
        impact: 'Allows attackers to extract proprietary AI model weights and intellectual property',
        remediation: 'Implement stronger input validation and output filtering',
        status: 'validated',
        reward: {
          amount: 8500,
          currency: 'USD',
          paymentStatus: 'paid'
        },
        submittedAt: new Date('2024-01-10'),
        updatedAt: new Date('2024-01-15'),
        triageNotes: 'Excellent finding with clear reproduction steps'
      },
      {
        id: '2',
        programId: 'main-program',
        researcherId: 'researcher2',
        title: 'Authentication Bypass in API Gateway',
        description: 'Found a way to bypass authentication checks in the API gateway...',
        affectedSystems: ['https://api.perfecxion.ai/auth'],
        severity: 'high',
        cvssScore: 8.1,
        proofOfConcept: {
          steps: [
            'Send request with malformed JWT token',
            'Server fails to properly validate token',
            'Gain unauthorized access to protected endpoints'
          ],
          evidence: []
        },
        impact: 'Unauthorized access to user accounts and sensitive data',
        remediation: 'Fix JWT validation logic and add additional security checks',
        status: 'triaging',
        submittedAt: new Date('2024-01-12'),
        updatedAt: new Date('2024-01-12'),
        assignedTo: 'security-team'
      }
    ]

    const mockResearchers: ResearcherProfile[] = [
      {
        id: '1',
        userId: 'researcher1',
        bio: 'AI Security researcher with 8 years experience',
        skills: ['Prompt Injection', 'Model Extraction', 'API Security'],
        specializations: ['AI/ML Security', 'Web Application Security'],
        totalEarnings: 45000,
        submissionCount: 28,
        validSubmissionCount: 24,
        averageSeverity: 7.8,
        reputation: 9850,
        hallOfFame: true,
        badges: []
      },
      {
        id: '2',
        userId: 'researcher2',
        bio: 'Cybersecurity consultant specializing in AI systems',
        skills: ['Authentication', 'Authorization', 'API Testing'],
        specializations: ['Authentication Systems', 'Cloud Security'],
        totalEarnings: 32000,
        submissionCount: 19,
        validSubmissionCount: 17,
        averageSeverity: 6.9,
        reputation: 8240,
        hallOfFame: true,
        badges: []
      }
    ]

    setProgram(mockProgram)
    setSubmissions(mockSubmissions)
    setTopResearchers(mockResearchers)
    setLoading(false)
  }, [])

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
      case 'high': return 'text-orange-600 bg-orange-100 dark:bg-orange-900 dark:text-orange-200'
      case 'medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
      case 'low': return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200'
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted': return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200'
      case 'triaging': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
      case 'validated': return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200'
      case 'fixed': return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200'
      case 'rejected': return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
      case 'duplicate': return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount)
  }

  const formatTimeAgo = (date: Date) => {
    const now = new Date()
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
    
    if (diffInDays === 0) return 'Today'
    if (diffInDays === 1) return 'Yesterday'
    if (diffInDays < 7) return `${diffInDays} days ago`
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`
    return `${Math.floor(diffInDays / 30)} months ago`
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <Bug className="w-16 h-16 mx-auto mb-6 text-red-100" />
            <h1 className="text-4xl font-bold mb-4">
              AI Security Bug Bounty
            </h1>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Help us secure the future of AI. Find vulnerabilities in our systems and earn rewards 
              while contributing to safer AI for everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#submit"
                onClick={() => setActiveTab('submit')}
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
              >
                Submit Vulnerability
              </Link>
              <Link
                href="#rules"
                onClick={() => setActiveTab('rules')}
                className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-400 transition-colors"
              >
                Program Rules
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700 text-center">
            <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold dark:text-white">{formatCurrency(stats.totalPaid)}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Paid</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700 text-center">
            <Bug className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold dark:text-white">{stats.totalSubmissions}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Submissions</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700 text-center">
            <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold dark:text-white">{stats.activeResearchers}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Researchers</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700 text-center">
            <Clock className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <div className="text-2xl font-bold dark:text-white">{stats.avgResolutionTime}d</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Avg Resolution</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700 text-center">
            <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <div className="text-2xl font-bold dark:text-white">{stats.criticalVulns}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Critical Fixed</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700 text-center">
            <Shield className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold dark:text-white">{stats.highVulns}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">High Fixed</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
          <nav className="-mb-px flex space-x-8 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview', icon: Eye },
              { id: 'submit', label: 'Submit Vulnerability', icon: Upload },
              { id: 'submissions', label: 'My Submissions', icon: FileText },
              { id: 'leaderboard', label: 'Hall of Fame', icon: Trophy },
              { id: 'rules', label: 'Program Rules', icon: Shield }
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-red-500 text-red-600 dark:text-red-400'
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
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Reward Structure */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-8">
              <h2 className="text-2xl font-bold dark:text-white mb-6">Reward Structure</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {program?.rewards.map((reward) => (
                  <div
                    key={reward.severity}
                    className={`p-6 rounded-lg border-2 ${
                      reward.severity === 'critical' ? 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/10' :
                      reward.severity === 'high' ? 'border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/10' :
                      reward.severity === 'medium' ? 'border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/10' :
                      'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10'
                    }`}
                  >
                    <div className="text-center">
                      <h3 className={`font-bold text-lg mb-2 capitalize ${
                        reward.severity === 'critical' ? 'text-red-600 dark:text-red-400' :
                        reward.severity === 'high' ? 'text-orange-600 dark:text-orange-400' :
                        reward.severity === 'medium' ? 'text-yellow-600 dark:text-yellow-400' :
                        'text-blue-600 dark:text-blue-400'
                      }`}>
                        {reward.severity}
                      </h3>
                      <div className="text-2xl font-bold dark:text-white mb-2">
                        {formatCurrency(reward.minAmount)} - {formatCurrency(reward.maxAmount)}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {reward.severity === 'critical' && 'RCE, privilege escalation, data breach'}
                        {reward.severity === 'high' && 'Authentication bypass, significant data exposure'}
                        {reward.severity === 'medium' && 'XSS, CSRF, information disclosure'}
                        {reward.severity === 'low' && 'Minor security issues, best practices'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Submissions */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold dark:text-white">Recent Submissions</h2>
                <Link
                  href="#submissions"
                  onClick={() => setActiveTab('submissions')}
                  className="text-red-600 hover:text-red-700 dark:text-red-400 font-semibold"
                >
                  View All →
                </Link>
              </div>
              
              <div className="space-y-4">
                {submissions.slice(0, 3).map((submission) => (
                  <div key={submission.id} className="border dark:border-gray-600 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg dark:text-white mb-2">
                          {submission.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className={`px-2 py-1 rounded font-semibold ${getSeverityColor(submission.severity)}`}>
                            {submission.severity.toUpperCase()}
                          </span>
                          <span className={`px-2 py-1 rounded font-semibold ${getStatusColor(submission.status)}`}>
                            {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                          </span>
                          <span className="text-gray-600 dark:text-gray-400">
                            CVSS: {submission.cvssScore}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        {submission.reward && (
                          <div className="text-lg font-bold text-green-600">
                            {formatCurrency(submission.reward.amount)}
                          </div>
                        )}
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {formatTimeAgo(submission.submittedAt)}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {submission.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Affected: {submission.affectedSystems.join(', ')}
                      </div>
                      <Link
                        href={`/community/bug-bounty/submission/${submission.id}`}
                        className="text-red-600 hover:text-red-700 dark:text-red-400 font-semibold text-sm"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'leaderboard' && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-8">
            <h2 className="text-2xl font-bold dark:text-white mb-6">Hall of Fame</h2>
            <div className="space-y-6">
              {topResearchers.map((researcher, index) => (
                <div key={researcher.id} className="flex items-center space-x-6 p-6 border dark:border-gray-600 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                      index === 0 ? 'bg-yellow-500' :
                      index === 1 ? 'bg-gray-400' :
                      index === 2 ? 'bg-amber-600' :
                      'bg-blue-600'
                    }`}>
                      {index < 3 ? (
                        <Trophy className="w-6 h-6" />
                      ) : (
                        index + 1
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-lg dark:text-white">
                        @researcher_{researcher.userId}
                      </h3>
                      {researcher.hallOfFame && (
                        <Star className="w-5 h-5 text-yellow-500" />
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {researcher.bio}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {researcher.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {formatCurrency(researcher.totalEarnings)}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {researcher.validSubmissionCount} valid submissions
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Avg severity: {researcher.averageSeverity.toFixed(1)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'rules' && program && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-8">
            <h2 className="text-2xl font-bold dark:text-white mb-6">Program Rules & Guidelines</h2>
            
            <div className="space-y-8">
              {/* Scope */}
              <div>
                <h3 className="text-xl font-semibold dark:text-white mb-4">In Scope</h3>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <ul className="space-y-2">
                    {program.scope.map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="dark:text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Guidelines */}
              <div>
                <h3 className="text-xl font-semibold dark:text-white mb-4">Guidelines</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold dark:text-white">Responsible Disclosure</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Report vulnerabilities directly to our security team. Do not publicly disclose until we've had time to fix.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-1" />
                    <div>
                      <h4 className="font-semibold dark:text-white">No Harmful Activities</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Do not perform DoS attacks, data destruction, or access user accounts without permission.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold dark:text-white">No Social Engineering</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Do not engage in social engineering attacks against our employees or users.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <FileText className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold dark:text-white">Quality Reports</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Provide clear reproduction steps, impact assessment, and suggested remediation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Disclosure Timeline */}
              <div>
                <h3 className="text-xl font-semibold dark:text-white mb-4">Disclosure Timeline</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">0</span>
                    </div>
                    <div>
                      <span className="font-semibold dark:text-white">Day 0:</span>
                      <span className="text-gray-600 dark:text-gray-400 ml-2">Vulnerability submitted</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
                      <span className="text-yellow-600 dark:text-yellow-400 font-bold text-sm">5</span>
                    </div>
                    <div>
                      <span className="font-semibold dark:text-white">Day 5:</span>
                      <span className="text-gray-600 dark:text-gray-400 ml-2">Initial response and triage</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 dark:text-orange-400 font-bold text-sm">45</span>
                    </div>
                    <div>
                      <span className="font-semibold dark:text-white">Day 45:</span>
                      <span className="text-gray-600 dark:text-gray-400 ml-2">Fix development and testing</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                      <span className="text-green-600 dark:text-green-400 font-bold text-sm">90</span>
                    </div>
                    <div>
                      <span className="font-semibold dark:text-white">Day 90:</span>
                      <span className="text-gray-600 dark:text-gray-400 ml-2">Public disclosure (if not fixed sooner)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}