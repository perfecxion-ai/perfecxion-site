'use client'

import { useState, useEffect } from 'react'
import { 
  Rocket,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  Play,
  Pause,
  RotateCcw,
  Calendar,
  Users,
  MessageSquare,
  Bell,
  Activity,
  Target,
  Zap,
  Shield,
  Globe,
  FileText,
  Settings,
  ChevronRight,
  Timer,
  Flag,
  Radio,
  Send,
  Coffee,
  PartyPopper,
  TrendingUp,
  BarChart3,
  Eye,
  AlertCircle
} from 'lucide-react'

interface LaunchPhase {
  id: string
  name: string
  time: string // T-24h, T-2h, T-0, T+1h, etc.
  status: 'pending' | 'active' | 'completed' | 'skipped'
  tasks: LaunchTask[]
  criticalPath: boolean
  duration?: number
  startTime?: Date
  endTime?: Date
}

interface LaunchTask {
  id: string
  name: string
  owner: string
  status: 'pending' | 'in-progress' | 'completed' | 'failed' | 'blocked'
  priority: 'critical' | 'high' | 'medium' | 'low'
  dependencies?: string[]
  duration?: number
  notes?: string
  blockers?: string[]
}

interface TeamMember {
  id: string
  name: string
  role: string
  status: 'ready' | 'busy' | 'offline'
  currentTask?: string
  contact: {
    email: string
    phone?: string
    slack?: string
  }
}

interface LaunchMetric {
  id: string
  name: string
  value: number
  target: number
  unit: string
  status: 'good' | 'warning' | 'critical'
  icon: React.ReactNode
}

interface CommunicationChannel {
  id: string
  name: string
  type: 'internal' | 'external'
  status: 'active' | 'scheduled' | 'completed'
  time?: string
  message?: string
}

interface IssueReport {
  id: string
  severity: 'critical' | 'high' | 'medium' | 'low'
  title: string
  description: string
  reporter: string
  assignee?: string
  status: 'open' | 'investigating' | 'resolved' | 'closed'
  timestamp: Date
  resolution?: string
}

export default function GoLiveController() {
  const [launchPhases] = useState<LaunchPhase[]>([
    {
      id: 'prep-24h',
      name: 'T-24 Hours: Final Preparation',
      time: 'T-24h',
      status: 'completed',
      criticalPath: true,
      tasks: [
        {
          id: 'final-testing',
          name: 'Final Staging Testing',
          owner: 'QA Team',
          status: 'completed',
          priority: 'critical'
        },
        {
          id: 'team-briefing',
          name: 'All-Hands Team Briefing',
          owner: 'Project Manager',
          status: 'completed',
          priority: 'high'
        },
        {
          id: 'monitoring-activation',
          name: 'Activate Monitoring Systems',
          owner: 'DevOps Team',
          status: 'completed',
          priority: 'critical'
        },
        {
          id: 'support-briefing',
          name: 'Support Team Briefing',
          owner: 'Customer Success',
          status: 'completed',
          priority: 'high'
        }
      ]
    },
    {
      id: 'prep-2h',
      name: 'T-2 Hours: Pre-Launch',
      time: 'T-2h',
      status: 'active',
      criticalPath: true,
      startTime: new Date(Date.now() - 3600000),
      tasks: [
        {
          id: 'prod-deployment',
          name: 'Production Deployment',
          owner: 'DevOps Team',
          status: 'completed',
          priority: 'critical',
          duration: 25
        },
        {
          id: 'dns-propagation',
          name: 'DNS Propagation Check',
          owner: 'Infrastructure Team',
          status: 'in-progress',
          priority: 'critical'
        },
        {
          id: 'cdn-warming',
          name: 'CDN Cache Warming',
          owner: 'DevOps Team',
          status: 'in-progress',
          priority: 'high'
        },
        {
          id: 'final-health-check',
          name: 'Final Health Checks',
          owner: 'DevOps Team',
          status: 'pending',
          priority: 'critical',
          dependencies: ['prod-deployment', 'dns-propagation']
        }
      ]
    },
    {
      id: 'go-live',
      name: 'T-0: GO LIVE! 🚀',
      time: 'T-0',
      status: 'pending',
      criticalPath: true,
      tasks: [
        {
          id: 'announce-launch',
          name: 'Public Launch Announcement',
          owner: 'Marketing Team',
          status: 'pending',
          priority: 'critical'
        },
        {
          id: 'social-media',
          name: 'Social Media Campaign',
          owner: 'Marketing Team',
          status: 'pending',
          priority: 'high'
        },
        {
          id: 'pr-release',
          name: 'Press Release Distribution',
          owner: 'PR Team',
          status: 'pending',
          priority: 'high'
        },
        {
          id: 'team-celebration',
          name: 'Team Celebration! 🎉',
          owner: 'Everyone',
          status: 'pending',
          priority: 'medium'
        }
      ]
    },
    {
      id: 'post-1h',
      name: 'T+1 Hour: Initial Monitoring',
      time: 'T+1h',
      status: 'pending',
      criticalPath: true,
      tasks: [
        {
          id: 'performance-review',
          name: 'Performance Metrics Review',
          owner: 'DevOps Team',
          status: 'pending',
          priority: 'critical'
        },
        {
          id: 'user-feedback',
          name: 'Monitor User Feedback',
          owner: 'Customer Success',
          status: 'pending',
          priority: 'high'
        },
        {
          id: 'error-tracking',
          name: 'Error Tracking Review',
          owner: 'Development Team',
          status: 'pending',
          priority: 'critical'
        },
        {
          id: 'support-tickets',
          name: 'Support Ticket Monitoring',
          owner: 'Support Team',
          status: 'pending',
          priority: 'high'
        }
      ]
    },
    {
      id: 'post-24h',
      name: 'T+24 Hours: Day 1 Review',
      time: 'T+24h',
      status: 'pending',
      criticalPath: false,
      tasks: [
        {
          id: 'metrics-analysis',
          name: 'Launch Metrics Analysis',
          owner: 'Analytics Team',
          status: 'pending',
          priority: 'high'
        },
        {
          id: 'performance-optimization',
          name: 'Performance Optimization',
          owner: 'Development Team',
          status: 'pending',
          priority: 'medium'
        },
        {
          id: 'feedback-analysis',
          name: 'User Feedback Analysis',
          owner: 'Product Team',
          status: 'pending',
          priority: 'high'
        },
        {
          id: 'issue-resolution',
          name: 'Issue Resolution Review',
          owner: 'Project Manager',
          status: 'pending',
          priority: 'medium'
        }
      ]
    }
  ])

  const [teamMembers] = useState<TeamMember[]>([
    {
      id: 'john-doe',
      name: 'John Doe',
      role: 'DevOps Lead',
      status: 'ready',
      currentTask: 'DNS Propagation Check',
      contact: {
        email: 'john@perfecxion.ai',
        slack: '@john'
      }
    },
    {
      id: 'jane-smith',
      name: 'Jane Smith',
      role: 'Marketing Director',
      status: 'ready',
      contact: {
        email: 'jane@perfecxion.ai',
        slack: '@jane'
      }
    },
    {
      id: 'mike-johnson',
      name: 'Mike Johnson',
      role: 'Customer Success Lead',
      status: 'ready',
      contact: {
        email: 'mike@perfecxion.ai',
        slack: '@mike'
      }
    },
    {
      id: 'sarah-wilson',
      name: 'Sarah Wilson',
      role: 'QA Manager',
      status: 'ready',
      contact: {
        email: 'sarah@perfecxion.ai',
        slack: '@sarah'
      }
    }
  ])

  const [launchMetrics] = useState<LaunchMetric[]>([
    {
      id: 'uptime',
      name: 'System Uptime',
      value: 100,
      target: 99.9,
      unit: '%',
      status: 'good',
      icon: <Activity className="w-5 h-5" />
    },
    {
      id: 'response-time',
      name: 'Avg Response Time',
      value: 245,
      target: 500,
      unit: 'ms',
      status: 'good',
      icon: <Zap className="w-5 h-5" />
    },
    {
      id: 'active-users',
      name: 'Active Users',
      value: 342,
      target: 100,
      unit: '',
      status: 'good',
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 'error-rate',
      name: 'Error Rate',
      value: 0.08,
      target: 0.1,
      unit: '%',
      status: 'good',
      icon: <AlertCircle className="w-5 h-5" />
    }
  ])

  const [communications] = useState<CommunicationChannel[]>([
    {
      id: 'internal-standup',
      name: 'Internal Stand-up',
      type: 'internal',
      status: 'active',
      time: 'Every 2 hours',
      message: 'Team sync on launch progress'
    },
    {
      id: 'twitter-announcement',
      name: 'Twitter Announcement',
      type: 'external',
      status: 'scheduled',
      time: 'T-0',
      message: 'We are excited to announce...'
    },
    {
      id: 'customer-email',
      name: 'Customer Email',
      type: 'external',
      status: 'scheduled',
      time: 'T-0',
      message: 'Introducing perfecXion.ai...'
    },
    {
      id: 'status-page',
      name: 'Status Page Updates',
      type: 'external',
      status: 'active',
      time: 'Real-time',
      message: 'All systems operational'
    }
  ])

  const [issues, setIssues] = useState<IssueReport[]>([])
  const [countdown, setCountdown] = useState<string>('')
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(1) // Currently at T-2h
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const launchTime = new Date(Date.now() + 2 * 3600000) // 2 hours from now
    
    const updateCountdown = () => {
      const now = new Date()
      const diff = launchTime.getTime() - now.getTime()
      
      if (diff <= 0) {
        setCountdown('LIVE! 🚀')
        return
      }
      
      const hours = Math.floor(diff / 3600000)
      const minutes = Math.floor((diff % 3600000) / 60000)
      const seconds = Math.floor((diff % 60000) / 1000)
      
      setCountdown(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`)
    }
    
    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    
    return () => clearInterval(interval)
  }, [])

  const reportIssue = (issue: Omit<IssueReport, 'id' | 'timestamp'>) => {
    const newIssue: IssueReport = {
      ...issue,
      id: `issue-${Date.now()}`,
      timestamp: new Date()
    }
    setIssues(prev => [newIssue, ...prev])
  }

  const updateTaskStatus = (phaseId: string, taskId: string, status: LaunchTask['status']) => {
    // Update task status logic here
    console.log(`Updating task ${taskId} in phase ${phaseId} to ${status}`)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'active':
      case 'in-progress': return <Clock className="w-5 h-5 text-blue-600 animate-pulse" />
      case 'failed': return <XCircle className="w-5 h-5 text-red-600" />
      case 'blocked': return <AlertTriangle className="w-5 h-5 text-yellow-600" />
      default: return <Clock className="w-5 h-5 text-gray-400" />
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

  const getMetricStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-600'
      case 'warning': return 'text-yellow-600'
      case 'critical': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  const getTeamStatusColor = (status: string) => {
    switch (status) {
      case 'ready': return 'bg-green-500'
      case 'busy': return 'bg-yellow-500'
      case 'offline': return 'bg-gray-400'
      default: return 'bg-gray-400'
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
                <Rocket className="w-8 h-8 mr-3 text-purple-600" />
                Go-Live Mission Control
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Launch orchestration and real-time coordination
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-sm text-gray-600 dark:text-gray-400">Launch Countdown</div>
                <div className="text-3xl font-bold text-purple-600 font-mono">
                  {countdown}
                </div>
              </div>
              <button
                onClick={() => setIsPaused(!isPaused)}
                className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                  isPaused 
                    ? 'bg-yellow-600 text-white hover:bg-yellow-700' 
                    : 'bg-gray-600 text-white hover:bg-gray-700'
                }`}
              >
                {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                <span>{isPaused ? 'Resume' : 'Pause'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Critical Metrics */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold dark:text-white mb-4">Launch Metrics</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {launchMetrics.map((metric) => (
              <div key={metric.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className={getMetricStatusColor(metric.status)}>
                    {metric.icon}
                  </div>
                  <span className={`text-2xl font-bold ${getMetricStatusColor(metric.status)}`}>
                    {metric.value}{metric.unit}
                  </span>
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
          {/* Launch Timeline */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700">
              <div className="p-6 border-b dark:border-gray-700">
                <h2 className="text-xl font-semibold dark:text-white">Launch Timeline</h2>
              </div>
              
              <div className="p-6">
                {launchPhases.map((phase, index) => (
                  <div key={phase.id} className="relative">
                    <div className={`border rounded-lg p-6 ${
                      phase.status === 'active' 
                        ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20' 
                        : 'border-gray-200 dark:border-gray-700'
                    }`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(phase.status)}
                          <div>
                            <h3 className="font-semibold dark:text-white">{phase.name}</h3>
                            {phase.startTime && (
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Started: {phase.startTime.toLocaleTimeString()}
                              </p>
                            )}
                          </div>
                        </div>
                        {phase.criticalPath && (
                          <span className="px-2 py-1 rounded text-xs font-semibold text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200">
                            Critical Path
                          </span>
                        )}
                      </div>

                      {/* Tasks */}
                      <div className="space-y-2">
                        {phase.tasks.map((task) => (
                          <div key={task.id} className="ml-8 flex items-center justify-between p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700/50">
                            <div className="flex items-center space-x-3">
                              {getStatusIcon(task.status)}
                              <div>
                                <span className="text-sm font-medium dark:text-white">{task.name}</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                                  ({task.owner})
                                </span>
                              </div>
                            </div>
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${
                              getPriorityColor(task.priority)
                            }`}>
                              {task.priority}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {index < launchPhases.length - 1 && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-300 dark:bg-gray-600" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team & Communications */}
          <div className="lg:col-span-1 space-y-6">
            {/* Team Status */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4">Team Status</h3>
              <div className="space-y-3">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${getTeamStatusColor(member.status)}`} />
                      <div>
                        <div className="text-sm font-medium dark:text-white">{member.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{member.role}</div>
                      </div>
                    </div>
                    <button className="text-xs text-blue-600 hover:text-blue-700">
                      <MessageSquare className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Communications */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4">Communications</h3>
              <div className="space-y-3">
                {communications.map((channel) => (
                  <div key={channel.id} className="border dark:border-gray-700 rounded p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium dark:text-white">{channel.name}</span>
                      <Radio className={`w-4 h-4 ${
                        channel.status === 'active' ? 'text-green-600 animate-pulse' : 'text-gray-400'
                      }`} />
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {channel.time} • {channel.type}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 flex items-center justify-center space-x-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Report Issue</span>
                </button>
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center justify-center space-x-2">
                  <Bell className="w-4 h-4" />
                  <span>Send Update</span>
                </button>
                <button className="w-full bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 flex items-center justify-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>View Runbook</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Active Issues */}
        {issues.length > 0 && (
          <div className="mt-8 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800 p-6">
            <h3 className="font-semibold text-lg text-red-800 dark:text-red-200 mb-4">
              Active Issues ({issues.filter(i => i.status !== 'closed').length})
            </h3>
            <div className="space-y-4">
              {issues.filter(i => i.status !== 'closed').map((issue) => (
                <div key={issue.id} className="bg-white dark:bg-gray-800 rounded-lg p-4 border dark:border-gray-700">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium dark:text-white">{issue.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {issue.description}
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400 mt-2">
                        <span>Reporter: {issue.reporter}</span>
                        {issue.assignee && <span>Assigned to: {issue.assignee}</span>}
                        <span>{issue.timestamp.toLocaleTimeString()}</span>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      getPriorityColor(issue.severity)
                    }`}>
                      {issue.severity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}