'use client'

import { useState, useEffect } from 'react'
import { 
  Users,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  Headphones,
  MessageSquare,
  FileText,
  Book,
  Zap,
  Shield,
  Target,
  BarChart3,
  Phone,
  Mail,
  HelpCircle,
  Search,
  Filter,
  Eye,
  Download,
  RefreshCw,
  Award,
  TrendingUp,
  TrendingDown,
  Activity,
  AlertCircle,
  Lightbulb,
  Settings,
  ChevronRight,
  Package
} from 'lucide-react'

interface SupportAgent {
  id: string
  name: string
  email: string
  role: 'tier1' | 'tier2' | 'tier3' | 'manager'
  specialties: string[]
  status: 'available' | 'busy' | 'offline' | 'training'
  currentLoad: number // number of active tickets
  trainingCompleted: TrainingModule[]
  performance: {
    avgResponseTime: number
    resolutionRate: number
    customerSatisfaction: number
  }
}

interface TrainingModule {
  id: string
  name: string
  category: 'product' | 'process' | 'tools' | 'soft-skills'
  duration: number // in minutes
  completedAt?: Date
  score?: number
  required: boolean
}

interface KnowledgeArticle {
  id: string
  title: string
  category: string
  content: string
  tags: string[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  views: number
  helpful: number
  lastUpdated: Date
  author: string
}

interface SupportProcess {
  id: string
  name: string
  type: 'escalation' | 'resolution' | 'communication' | 'technical'
  steps: ProcessStep[]
  owner: string
  validated: boolean
  lastReviewed: Date
}

interface ProcessStep {
  id: string
  action: string
  responsible: string
  duration: string
  tools?: string[]
  notes?: string
}

interface SupportTool {
  id: string
  name: string
  type: 'ticketing' | 'communication' | 'monitoring' | 'knowledge'
  status: 'configured' | 'testing' | 'ready' | 'error'
  configuration: any
  integrations: string[]
  testResults?: {
    passed: boolean
    issues?: string[]
  }
}

interface ResponseTemplate {
  id: string
  name: string
  category: string
  trigger: string
  content: string
  variables: string[]
  usage: number
  effectiveness: number
}

interface SupportMetric {
  id: string
  name: string
  value: number
  target: number
  unit: string
  trend: 'up' | 'down' | 'stable'
  status: 'good' | 'warning' | 'critical'
}

export default function SupportReadiness() {
  const [agents] = useState<SupportAgent[]>([
    {
      id: 'agent-1',
      name: 'Alice Johnson',
      email: 'alice@perfecxion.ai',
      role: 'tier2',
      specialties: ['Security', 'API Integration'],
      status: 'available',
      currentLoad: 3,
      trainingCompleted: [
        { id: 'prod-101', name: 'Product Fundamentals', category: 'product', duration: 120, required: true, completedAt: new Date(), score: 95 },
        { id: 'sec-201', name: 'Security Features Deep Dive', category: 'product', duration: 90, required: true, completedAt: new Date(), score: 88 }
      ],
      performance: {
        avgResponseTime: 12,
        resolutionRate: 89,
        customerSatisfaction: 4.7
      }
    },
    {
      id: 'agent-2',
      name: 'Bob Smith',
      email: 'bob@perfecxion.ai',
      role: 'tier1',
      specialties: ['Onboarding', 'Billing'],
      status: 'training',
      currentLoad: 0,
      trainingCompleted: [
        { id: 'prod-101', name: 'Product Fundamentals', category: 'product', duration: 120, required: true, completedAt: new Date(), score: 92 }
      ],
      performance: {
        avgResponseTime: 18,
        resolutionRate: 78,
        customerSatisfaction: 4.5
      }
    },
    {
      id: 'agent-3',
      name: 'Carol Williams',
      email: 'carol@perfecxion.ai',
      role: 'tier3',
      specialties: ['Enterprise', 'Technical Architecture'],
      status: 'available',
      currentLoad: 2,
      trainingCompleted: [
        { id: 'prod-101', name: 'Product Fundamentals', category: 'product', duration: 120, required: true, completedAt: new Date(), score: 98 },
        { id: 'ent-301', name: 'Enterprise Solutions', category: 'product', duration: 180, required: true, completedAt: new Date(), score: 94 }
      ],
      performance: {
        avgResponseTime: 25,
        resolutionRate: 94,
        customerSatisfaction: 4.8
      }
    },
    {
      id: 'agent-4',
      name: 'David Brown',
      email: 'david@perfecxion.ai',
      role: 'manager',
      specialties: ['Team Management', 'Escalations'],
      status: 'available',
      currentLoad: 1,
      trainingCompleted: [
        { id: 'mgmt-401', name: 'Support Management', category: 'process', duration: 240, required: true, completedAt: new Date(), score: 91 }
      ],
      performance: {
        avgResponseTime: 15,
        resolutionRate: 92,
        customerSatisfaction: 4.9
      }
    }
  ])

  const [trainingModules] = useState<TrainingModule[]>([
    {
      id: 'prod-101',
      name: 'Product Fundamentals',
      category: 'product',
      duration: 120,
      required: true
    },
    {
      id: 'sec-201',
      name: 'Security Features Deep Dive',
      category: 'product',
      duration: 90,
      required: true
    },
    {
      id: 'api-202',
      name: 'API Integration Guide',
      category: 'product',
      duration: 60,
      required: false
    },
    {
      id: 'esc-301',
      name: 'Escalation Procedures',
      category: 'process',
      duration: 45,
      required: true
    },
    {
      id: 'comm-101',
      name: 'Customer Communication',
      category: 'soft-skills',
      duration: 60,
      required: true
    },
    {
      id: 'tools-101',
      name: 'Support Tools Training',
      category: 'tools',
      duration: 90,
      required: true
    }
  ])

  const [knowledgeArticles] = useState<KnowledgeArticle[]>([
    {
      id: 'kb-001',
      title: 'Getting Started with perfecXion.ai',
      category: 'Onboarding',
      content: 'Step-by-step guide for new users...',
      tags: ['beginner', 'setup', 'quickstart'],
      difficulty: 'beginner',
      views: 1234,
      helpful: 89,
      lastUpdated: new Date(Date.now() - 86400000),
      author: 'Product Team'
    },
    {
      id: 'kb-002',
      title: 'API Authentication Best Practices',
      category: 'Integration',
      content: 'How to securely authenticate API requests...',
      tags: ['api', 'security', 'authentication'],
      difficulty: 'intermediate',
      views: 567,
      helpful: 92,
      lastUpdated: new Date(Date.now() - 172800000),
      author: 'Engineering Team'
    },
    {
      id: 'kb-003',
      title: 'Troubleshooting Common Issues',
      category: 'Troubleshooting',
      content: 'Solutions for frequently encountered problems...',
      tags: ['troubleshooting', 'errors', 'solutions'],
      difficulty: 'intermediate',
      views: 2345,
      helpful: 87,
      lastUpdated: new Date(Date.now() - 259200000),
      author: 'Support Team'
    }
  ])

  const [supportProcesses] = useState<SupportProcess[]>([
    {
      id: 'proc-esc',
      name: 'Ticket Escalation Process',
      type: 'escalation',
      owner: 'Support Manager',
      validated: true,
      lastReviewed: new Date(Date.now() - 604800000),
      steps: [
        {
          id: 'step-1',
          action: 'Identify escalation criteria',
          responsible: 'Tier 1 Agent',
          duration: '5 minutes',
          tools: ['Ticket System'],
          notes: 'Check for: critical severity, enterprise customer, repeated issues'
        },
        {
          id: 'step-2',
          action: 'Document issue details',
          responsible: 'Tier 1 Agent',
          duration: '10 minutes',
          tools: ['Ticket System', 'Knowledge Base']
        },
        {
          id: 'step-3',
          action: 'Assign to appropriate tier',
          responsible: 'Tier 1 Agent',
          duration: '2 minutes',
          tools: ['Ticket System']
        },
        {
          id: 'step-4',
          action: 'Review and accept escalation',
          responsible: 'Tier 2/3 Agent',
          duration: '5 minutes',
          tools: ['Ticket System']
        }
      ]
    },
    {
      id: 'proc-comm',
      name: 'Customer Communication Protocol',
      type: 'communication',
      owner: 'Support Manager',
      validated: true,
      lastReviewed: new Date(Date.now() - 1209600000),
      steps: [
        {
          id: 'step-1',
          action: 'Initial response within SLA',
          responsible: 'Assigned Agent',
          duration: '< 2 hours',
          tools: ['Email', 'Ticket System']
        },
        {
          id: 'step-2',
          action: 'Set expectations and timeline',
          responsible: 'Assigned Agent',
          duration: '5 minutes',
          notes: 'Be specific about next steps and timing'
        },
        {
          id: 'step-3',
          action: 'Provide regular updates',
          responsible: 'Assigned Agent',
          duration: 'Every 24 hours',
          tools: ['Email', 'Ticket System']
        }
      ]
    }
  ])

  const [supportTools] = useState<SupportTool[]>([
    {
      id: 'tool-ticketing',
      name: 'Zendesk',
      type: 'ticketing',
      status: 'ready',
      configuration: {
        url: 'https://perfecxion.zendesk.com',
        apiKey: '***configured***',
        workflows: ['standard', 'escalation', 'enterprise']
      },
      integrations: ['Slack', 'Email', 'API'],
      testResults: {
        passed: true
      }
    },
    {
      id: 'tool-chat',
      name: 'Intercom',
      type: 'communication',
      status: 'testing',
      configuration: {
        appId: 'perfecxion-prod',
        enabled: true
      },
      integrations: ['Website', 'Mobile App'],
      testResults: {
        passed: false,
        issues: ['Mobile SDK not fully configured']
      }
    },
    {
      id: 'tool-kb',
      name: 'Knowledge Base',
      type: 'knowledge',
      status: 'ready',
      configuration: {
        url: 'https://help.perfecxion.ai',
        searchEnabled: true
      },
      integrations: ['Website', 'Support Portal'],
      testResults: {
        passed: true
      }
    }
  ])

  const [supportMetrics] = useState<SupportMetric[]>([
    {
      id: 'response-time',
      name: 'First Response Time',
      value: 1.8,
      target: 2,
      unit: 'hours',
      trend: 'down',
      status: 'good'
    },
    {
      id: 'resolution-time',
      name: 'Avg Resolution Time',
      value: 12.5,
      target: 24,
      unit: 'hours',
      trend: 'stable',
      status: 'good'
    },
    {
      id: 'satisfaction',
      name: 'Customer Satisfaction',
      value: 4.6,
      target: 4.5,
      unit: '/5',
      trend: 'up',
      status: 'good'
    },
    {
      id: 'ticket-volume',
      name: 'Daily Ticket Volume',
      value: 45,
      target: 50,
      unit: 'tickets',
      trend: 'stable',
      status: 'good'
    }
  ])

  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [readinessScore, setReadinessScore] = useState(0)

  useEffect(() => {
    // Calculate overall readiness score
    const factors = {
      agentReadiness: agents.filter(a => a.status === 'available').length / agents.length,
      trainingCompletion: agents.reduce((acc, agent) => {
        const requiredModules = trainingModules.filter(m => m.required).length
        const completedRequired = agent.trainingCompleted.filter(t => 
          trainingModules.find(m => m.id === t.id && m.required)
        ).length
        return acc + (completedRequired / requiredModules)
      }, 0) / agents.length,
      toolsReady: supportTools.filter(t => t.status === 'ready').length / supportTools.length,
      processValidation: supportProcesses.filter(p => p.validated).length / supportProcesses.length,
      metricsHealth: supportMetrics.filter(m => m.status === 'good').length / supportMetrics.length
    }

    const score = Object.values(factors).reduce((acc, val) => acc + val, 0) / Object.keys(factors).length
    setReadinessScore(Math.round(score * 100))
  }, [agents, trainingModules, supportTools, supportProcesses, supportMetrics])

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'tier1': return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200'
      case 'tier2': return 'text-purple-600 bg-purple-100 dark:bg-purple-900 dark:text-purple-200'
      case 'tier3': return 'text-indigo-600 bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-200'
      case 'manager': return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200'
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
      case 'ready':
      case 'good': return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200'
      case 'busy':
      case 'testing':
      case 'warning': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
      case 'offline':
      case 'error':
      case 'critical': return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
      case 'training':
      case 'configured': return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200'
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200'
      case 'intermediate': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
      case 'advanced': return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'product': return <Package className="w-4 h-4" />
      case 'process': return <Settings className="w-4 h-4" />
      case 'tools': return <Zap className="w-4 h-4" />
      case 'soft-skills': return <Users className="w-4 h-4" />
      default: return <FileText className="w-4 h-4" />
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-500" />
      case 'down': return <TrendingDown className="w-4 h-4 text-red-500" />
      default: return <Activity className="w-4 h-4 text-gray-400" />
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
                <Headphones className="w-8 h-8 mr-3 text-indigo-600" />
                Support Team Readiness
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Training, processes, and tools validation for launch support
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">{readinessScore}%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Readiness Score</div>
              </div>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 flex items-center space-x-2">
                <RefreshCw className="w-4 h-4" />
                <span>Run Validation</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Support Metrics */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold dark:text-white mb-4">Support Metrics</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {supportMetrics.map((metric) => (
              <div key={metric.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-2xl font-bold ${
                    metric.status === 'good' ? 'text-green-600' :
                    metric.status === 'warning' ? 'text-yellow-600' :
                    'text-red-600'
                  }`}>
                    {metric.value}{metric.unit}
                  </span>
                  {getTrendIcon(metric.trend)}
                </div>
                <div className="text-sm font-medium dark:text-white">{metric.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Target: {metric.target}{metric.unit}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Team Readiness */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700">
              <div className="p-6 border-b dark:border-gray-700">
                <h2 className="text-xl font-semibold dark:text-white">Team Readiness</h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {agents.map((agent) => (
                    <div key={agent.id} className="border dark:border-gray-700 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold dark:text-white">{agent.name}</h3>
                          <div className="flex items-center space-x-3 text-sm text-gray-600 dark:text-gray-400 mt-1">
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${getRoleColor(agent.role)}`}>
                              {agent.role.toUpperCase()}
                            </span>
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(agent.status)}`}>
                              {agent.status}
                            </span>
                            <span>Load: {agent.currentLoad} tickets</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-500 dark:text-gray-400">Performance</div>
                          <div className="flex items-center space-x-2 text-sm">
                            <span title="Response Time">{agent.performance.avgResponseTime}m</span>
                            <span title="Resolution Rate">{agent.performance.resolutionRate}%</span>
                            <span title="CSAT">⭐ {agent.performance.customerSatisfaction}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Specialties</div>
                        <div className="flex flex-wrap gap-2">
                          {agent.specialties.map((specialty, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Training Progress ({agent.trainingCompleted.length}/{trainingModules.filter(m => m.required).length} required)
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                            style={{ 
                              width: `${(agent.trainingCompleted.length / trainingModules.filter(m => m.required).length) * 100}%` 
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Processes */}
          <div className="lg:col-span-1 space-y-6">
            {/* Support Tools */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4">Support Tools</h3>
              <div className="space-y-3">
                {supportTools.map((tool) => (
                  <div key={tool.id} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium dark:text-white">{tool.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{tool.type}</div>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(tool.status)}`}>
                      {tool.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Training Modules */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4">Training Modules</h3>
              <div className="space-y-2">
                {trainingModules.filter(m => m.required).map((module) => {
                  const completionRate = agents.filter(a => 
                    a.trainingCompleted.some(t => t.id === module.id)
                  ).length / agents.length

                  return (
                    <div key={module.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {getCategoryIcon(module.category)}
                        <span className="text-sm dark:text-white">{module.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {Math.round(completionRate * 100)}%
                        </span>
                        {completionRate === 1 && <CheckCircle className="w-4 h-4 text-green-600" />}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 flex items-center justify-center space-x-2">
                  <Book className="w-4 h-4" />
                  <span>View Runbooks</span>
                </button>
                <button className="w-full bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 flex items-center justify-center space-x-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Test Response Templates</span>
                </button>
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center justify-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>Schedule Team Call</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Knowledge Base */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700">
          <div className="p-6 border-b dark:border-gray-700">
            <h2 className="text-xl font-semibold dark:text-white">Knowledge Base</h2>
          </div>
          
          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-4">
              {knowledgeArticles.map((article) => (
                <div key={article.id} className="border dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium dark:text-white">{article.title}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getDifficultyColor(article.difficulty)}`}>
                      {article.difficulty}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {article.category}
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>{article.views} views</span>
                    <span>{article.helpful}% helpful</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {article.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}