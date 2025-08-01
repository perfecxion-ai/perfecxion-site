'use client'

import { useState, useEffect } from 'react'
import { 
  TrendingUp,
  TrendingDown,
  BarChart3,
  Target,
  Users,
  Zap,
  Search,
  MousePointer,
  ShoppingCart,
  DollarSign,
  Activity,
  Eye,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Calendar,
  Filter,
  Download,
  Settings,
  Lightbulb,
  TestTube,
  Package,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  RefreshCw,
  ChevronRight,
  Award
} from 'lucide-react'

interface OptimizationMetric {
  id: string
  name: string
  category: 'performance' | 'conversion' | 'engagement' | 'technical' | 'business'
  baseline: number
  current: number
  target: number
  unit: string
  trend: 'improving' | 'declining' | 'stable'
  priority: 'high' | 'medium' | 'low'
  lastUpdated: Date
}

interface ABTest {
  id: string
  name: string
  hypothesis: string
  variant: {
    control: string
    test: string
  }
  metrics: string[]
  status: 'planning' | 'running' | 'completed' | 'paused'
  startDate?: Date
  endDate?: Date
  results?: {
    winner?: 'control' | 'test' | 'no-difference'
    improvement?: number
    confidence?: number
    sampleSize: number
  }
}

interface UserFeedback {
  id: string
  type: 'bug' | 'feature' | 'improvement' | 'praise'
  category: string
  description: string
  impact: 'high' | 'medium' | 'low'
  frequency: number
  source: 'support' | 'survey' | 'social' | 'review'
  sentiment: 'positive' | 'negative' | 'neutral'
  status: 'new' | 'reviewing' | 'planned' | 'implemented' | 'dismissed'
}

interface OptimizationTask {
  id: string
  title: string
  description: string
  category: string
  priority: 'critical' | 'high' | 'medium' | 'low'
  effort: 'small' | 'medium' | 'large'
  impact: 'high' | 'medium' | 'low'
  status: 'backlog' | 'in-progress' | 'testing' | 'completed'
  assignee?: string
  dueDate?: Date
  metrics?: string[]
  completedAt?: Date
}

interface WeeklyProgress {
  week: number
  startDate: Date
  endDate: Date
  tasksCompleted: number
  testsRun: number
  improvementsMade: number
  keyAchievements: string[]
  nextWeekFocus: string[]
}

interface OptimizationInsight {
  id: string
  type: 'opportunity' | 'issue' | 'success'
  title: string
  description: string
  dataPoints: string[]
  recommendation: string
  potentialImpact: string
  priority: 'high' | 'medium' | 'low'
  createdAt: Date
}

export default function PostLaunchOptimization() {
  const [optimizationMetrics] = useState<OptimizationMetric[]>([
    {
      id: 'page-load-time',
      name: 'Page Load Time',
      category: 'performance',
      baseline: 3.2,
      current: 2.8,
      target: 2.5,
      unit: 's',
      trend: 'improving',
      priority: 'high',
      lastUpdated: new Date()
    },
    {
      id: 'conversion-rate',
      name: 'Lead Conversion Rate',
      category: 'conversion',
      baseline: 2.1,
      current: 2.8,
      target: 3.5,
      unit: '%',
      trend: 'improving',
      priority: 'high',
      lastUpdated: new Date()
    },
    {
      id: 'bounce-rate',
      name: 'Bounce Rate',
      category: 'engagement',
      baseline: 45,
      current: 42,
      target: 35,
      unit: '%',
      trend: 'improving',
      priority: 'medium',
      lastUpdated: new Date()
    },
    {
      id: 'demo-requests',
      name: 'Demo Request Rate',
      category: 'conversion',
      baseline: 0.8,
      current: 1.2,
      target: 2.0,
      unit: '%',
      trend: 'improving',
      priority: 'high',
      lastUpdated: new Date()
    },
    {
      id: 'user-engagement',
      name: 'Avg Session Duration',
      category: 'engagement',
      baseline: 2.5,
      current: 3.1,
      target: 4.0,
      unit: 'min',
      trend: 'improving',
      priority: 'medium',
      lastUpdated: new Date()
    },
    {
      id: 'mobile-performance',
      name: 'Mobile Performance Score',
      category: 'technical',
      baseline: 78,
      current: 82,
      target: 90,
      unit: '/100',
      trend: 'stable',
      priority: 'medium',
      lastUpdated: new Date()
    }
  ])

  const [abTests] = useState<ABTest[]>([
    {
      id: 'test-1',
      name: 'Hero CTA Button Test',
      hypothesis: 'Changing CTA text from "Get Started" to "Start Free Trial" will increase clicks by 15%',
      variant: {
        control: 'Get Started',
        test: 'Start Free Trial'
      },
      metrics: ['Click-through rate', 'Conversion rate'],
      status: 'running',
      startDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      results: {
        sampleSize: 2500,
        improvement: 12.3,
        confidence: 87
      }
    },
    {
      id: 'test-2',
      name: 'Pricing Page Layout',
      hypothesis: 'Horizontal pricing cards will improve plan selection over vertical layout',
      variant: {
        control: 'Vertical cards',
        test: 'Horizontal cards'
      },
      metrics: ['Time to decision', 'Plan selection rate'],
      status: 'completed',
      startDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
      endDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      results: {
        winner: 'test',
        improvement: 23.5,
        confidence: 95,
        sampleSize: 3200
      }
    },
    {
      id: 'test-3',
      name: 'Onboarding Flow Simplification',
      hypothesis: 'Reducing onboarding steps from 5 to 3 will increase completion rate',
      variant: {
        control: '5-step process',
        test: '3-step process'
      },
      metrics: ['Completion rate', 'Time to complete'],
      status: 'planning',
      startDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
    }
  ])

  const [userFeedback] = useState<UserFeedback[]>([
    {
      id: 'feedback-1',
      type: 'improvement',
      category: 'Navigation',
      description: 'Add search functionality to documentation',
      impact: 'high',
      frequency: 23,
      source: 'support',
      sentiment: 'neutral',
      status: 'planned'
    },
    {
      id: 'feedback-2',
      type: 'bug',
      category: 'Mobile',
      description: 'Menu dropdown not working on iOS Safari',
      impact: 'high',
      frequency: 8,
      source: 'support',
      sentiment: 'negative',
      status: 'reviewing'
    },
    {
      id: 'feedback-3',
      type: 'feature',
      category: 'Integration',
      description: 'Request for Slack integration',
      impact: 'medium',
      frequency: 15,
      source: 'survey',
      sentiment: 'positive',
      status: 'reviewing'
    },
    {
      id: 'feedback-4',
      type: 'praise',
      category: 'Performance',
      description: 'Site loads incredibly fast!',
      impact: 'low',
      frequency: 42,
      source: 'review',
      sentiment: 'positive',
      status: 'new'
    }
  ])

  const [optimizationTasks] = useState<OptimizationTask[]>([
    {
      id: 'task-1',
      title: 'Implement lazy loading for images',
      description: 'Add lazy loading to improve initial page load time',
      category: 'Performance',
      priority: 'high',
      effort: 'small',
      impact: 'high',
      status: 'in-progress',
      assignee: 'Frontend Team',
      dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      metrics: ['page-load-time', 'mobile-performance']
    },
    {
      id: 'task-2',
      title: 'Optimize lead capture form',
      description: 'Reduce form fields and add inline validation',
      category: 'Conversion',
      priority: 'high',
      effort: 'medium',
      impact: 'high',
      status: 'testing',
      assignee: 'UX Team',
      metrics: ['conversion-rate']
    },
    {
      id: 'task-3',
      title: 'Add customer testimonials section',
      description: 'Build social proof with customer success stories',
      category: 'Content',
      priority: 'medium',
      effort: 'medium',
      impact: 'medium',
      status: 'backlog',
      metrics: ['conversion-rate', 'bounce-rate']
    },
    {
      id: 'task-4',
      title: 'Implement chat widget',
      description: 'Add live chat support for real-time assistance',
      category: 'Support',
      priority: 'medium',
      effort: 'large',
      impact: 'high',
      status: 'backlog',
      metrics: ['user-engagement', 'conversion-rate']
    }
  ])

  const [weeklyProgress] = useState<WeeklyProgress[]>([
    {
      week: 1,
      startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      endDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      tasksCompleted: 5,
      testsRun: 2,
      improvementsMade: 3,
      keyAchievements: [
        'Fixed critical mobile navigation bug',
        'Improved page load time by 12%',
        'Launched first A/B test'
      ],
      nextWeekFocus: [
        'Complete image optimization',
        'Launch pricing page test',
        'Analyze user feedback patterns'
      ]
    }
  ])

  const [insights] = useState<OptimizationInsight[]>([
    {
      id: 'insight-1',
      type: 'opportunity',
      title: 'High mobile bounce rate detected',
      description: 'Mobile users are bouncing at 58% compared to 35% on desktop',
      dataPoints: [
        'Mobile bounce rate: 58%',
        'Desktop bounce rate: 35%',
        'Mobile page load time: 4.2s'
      ],
      recommendation: 'Prioritize mobile performance optimization and responsive design improvements',
      potentialImpact: '15-20% improvement in mobile conversions',
      priority: 'high',
      createdAt: new Date()
    },
    {
      id: 'insight-2',
      type: 'success',
      title: 'Demo request rate exceeding targets',
      description: 'Demo requests have increased 50% since launch',
      dataPoints: [
        'Current rate: 1.2%',
        'Baseline: 0.8%',
        'Industry average: 0.9%'
      ],
      recommendation: 'Analyze successful conversion paths and replicate across other CTAs',
      potentialImpact: 'Model for other conversion improvements',
      priority: 'medium',
      createdAt: new Date()
    }
  ])

  const [selectedWeek, setSelectedWeek] = useState(1)
  const [selectedView, setSelectedView] = useState<'metrics' | 'tests' | 'tasks' | 'feedback'>('metrics')

  const getMetricTrendIcon = (trend: string) => {
    switch (trend) {
      case 'improving': return <TrendingUp className="w-4 h-4 text-green-500" />
      case 'declining': return <TrendingDown className="w-4 h-4 text-red-500" />
      default: return <Activity className="w-4 h-4 text-gray-400" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
      case 'high': return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
      case 'medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
      case 'low': return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200'
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
      case 'implemented': return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200'
      case 'running':
      case 'in-progress':
      case 'testing': return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200'
      case 'planning':
      case 'reviewing':
      case 'planned': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
      case 'paused':
      case 'dismissed': return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'bug': return <XCircle className="w-4 h-4 text-red-600" />
      case 'feature': return <Package className="w-4 h-4 text-blue-600" />
      case 'improvement': return <Lightbulb className="w-4 h-4 text-yellow-600" />
      case 'praise': return <ThumbsUp className="w-4 h-4 text-green-600" />
      default: return <MessageSquare className="w-4 h-4 text-gray-600" />
    }
  }

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'opportunity': return <Target className="w-5 h-5 text-blue-600" />
      case 'issue': return <AlertTriangle className="w-5 h-5 text-red-600" />
      case 'success': return <Award className="w-5 h-5 text-green-600" />
      default: return <Lightbulb className="w-5 h-5 text-yellow-600" />
    }
  }

  const calculateMetricProgress = (baseline: number, current: number, target: number): number => {
    const totalImprovement = Math.abs(target - baseline)
    const currentImprovement = Math.abs(current - baseline)
    return Math.min((currentImprovement / totalImprovement) * 100, 100)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold dark:text-white flex items-center">
                <TrendingUp className="w-8 h-8 mr-3 text-green-600" />
                Post-Launch Optimization
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                30-day optimization roadmap and continuous improvement tracking
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={selectedWeek}
                onChange={(e) => setSelectedWeek(Number(e.target.value))}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value={1}>Week 1</option>
                <option value={2}>Week 2</option>
                <option value={3}>Week 3</option>
                <option value={4}>Week 4</option>
              </select>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Export Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Insights */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold dark:text-white mb-4">Key Insights</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {insights.map((insight) => (
              <div key={insight.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {getInsightIcon(insight.type)}
                    <h3 className="font-semibold dark:text-white">{insight.title}</h3>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${getPriorityColor(insight.priority)}`}>
                    {insight.priority}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {insight.description}
                </p>
                
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded p-3 mb-3">
                  <div className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">Data Points:</div>
                  <ul className="space-y-1">
                    {insight.dataPoints.map((point, index) => (
                      <li key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-start space-x-2">
                        <span className="text-gray-400">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t dark:border-gray-700 pt-3">
                  <div className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Recommendation:</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{insight.recommendation}</p>
                  <div className="text-xs text-green-600 dark:text-green-400 mt-2">
                    Potential Impact: {insight.potentialImpact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View Selector */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-4 mb-6">
          <div className="flex space-x-4">
            {(['metrics', 'tests', 'tasks', 'feedback'] as const).map((view) => (
              <button
                key={view}
                onClick={() => setSelectedView(view)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedView === view
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {view.charAt(0).toUpperCase() + view.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Content Based on Selected View */}
        {selectedView === 'metrics' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold dark:text-white">Performance Metrics</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {optimizationMetrics.map((metric) => (
                <div key={metric.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium dark:text-white">{metric.name}</h4>
                    <div className="flex items-center space-x-2">
                      {getMetricTrendIcon(metric.trend)}
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${getPriorityColor(metric.priority)}`}>
                        {metric.priority}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-baseline justify-between mb-3">
                    <div>
                      <span className="text-2xl font-bold dark:text-white">
                        {metric.current}{metric.unit}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                        from {metric.baseline}{metric.unit}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Target: {metric.target}{metric.unit}
                    </div>
                  </div>
                  
                  <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="absolute h-full bg-blue-600 transition-all duration-300"
                      style={{ width: `${calculateMetricProgress(metric.baseline, metric.current, metric.target)}%` }}
                    />
                  </div>
                  
                  <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                    Last updated: {metric.lastUpdated.toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedView === 'tests' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold dark:text-white">A/B Tests</h3>
            <div className="space-y-4">
              {abTests.map((test) => (
                <div key={test.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold dark:text-white">{test.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {test.hypothesis}
                      </p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(test.status)}`}>
                      {test.status}
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded p-3">
                      <div className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Control</div>
                      <div className="text-sm dark:text-white">{test.variant.control}</div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-3">
                      <div className="text-xs font-medium text-blue-700 dark:text-blue-300 mb-1">Test</div>
                      <div className="text-sm dark:text-white">{test.variant.test}</div>
                    </div>
                  </div>
                  
                  {test.results && (
                    <div className="border-t dark:border-gray-700 pt-4">
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className="text-gray-600 dark:text-gray-400">Sample Size: </span>
                          <span className="font-medium dark:text-white">{test.results.sampleSize.toLocaleString()}</span>
                        </div>
                        {test.results.improvement && (
                          <div className="text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Improvement: </span>
                            <span className="font-medium text-green-600">+{test.results.improvement}%</span>
                          </div>
                        )}
                        {test.results.confidence && (
                          <div className="text-sm">
                            <span className="text-gray-600 dark:text-gray-400">Confidence: </span>
                            <span className="font-medium dark:text-white">{test.results.confidence}%</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedView === 'tasks' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold dark:text-white">Optimization Tasks</h3>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700">
              <div className="divide-y dark:divide-gray-700">
                {optimizationTasks.map((task) => (
                  <div key={task.id} className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold dark:text-white">{task.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {task.description}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(task.status)}`}>
                          {task.status}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <span>Effort:</span>
                        <span className="font-medium dark:text-white">{task.effort}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>Impact:</span>
                        <span className="font-medium dark:text-white">{task.impact}</span>
                      </div>
                      {task.assignee && (
                        <div className="flex items-center space-x-1">
                          <span>Assignee:</span>
                          <span className="font-medium dark:text-white">{task.assignee}</span>
                        </div>
                      )}
                      {task.dueDate && (
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{task.dueDate.toLocaleDateString()}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedView === 'feedback' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold dark:text-white">User Feedback</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {userFeedback.map((feedback) => (
                <div key={feedback.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      {getTypeIcon(feedback.type)}
                      <span className="font-medium dark:text-white">{feedback.category}</span>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(feedback.status)}`}>
                      {feedback.status}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    {feedback.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-3">
                      <span>Impact: {feedback.impact}</span>
                      <span>Frequency: {feedback.frequency}</span>
                      <span>Source: {feedback.source}</span>
                    </div>
                    <div className={`flex items-center space-x-1 ${
                      feedback.sentiment === 'positive' ? 'text-green-600' :
                      feedback.sentiment === 'negative' ? 'text-red-600' :
                      'text-gray-600'
                    }`}>
                      {feedback.sentiment === 'positive' && <ThumbsUp className="w-3 h-3" />}
                      {feedback.sentiment === 'negative' && <ThumbsDown className="w-3 h-3" />}
                      <span>{feedback.sentiment}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Weekly Progress Summary */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold dark:text-white mb-4">Week {selectedWeek} Progress</h3>
          {weeklyProgress.filter(w => w.week === selectedWeek).map((week) => (
            <div key={week.week}>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{week.tasksCompleted}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Tasks Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{week.testsRun}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Tests Run</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{week.improvementsMade}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Improvements Made</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Key Achievements</h4>
                  <ul className="space-y-2">
                    {week.keyAchievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Next Week Focus</h4>
                  <ul className="space-y-2">
                    {week.nextWeekFocus.map((focus, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <ChevronRight className="w-4 h-4 text-blue-600 mt-0.5" />
                        <span>{focus}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}