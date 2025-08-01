'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Users,
  MessageSquare,
  Flag,
  Shield,
  Activity,
  TrendingUp,
  AlertTriangle,
  Settings,
  BarChart3,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  Edit,
  Trash2,
  Ban,
  Award,
  Bug,
  DollarSign
} from 'lucide-react'
import { User, ForumPost, ModerationAction, ContentReport, VulnerabilitySubmission } from '@/lib/community-types'
import { useAuth, usePermissions } from '@/components/auth/AuthProvider'

interface AdminStats {
  totalUsers: number
  activeUsers: number
  newUsersToday: number
  totalPosts: number
  newPostsToday: number
  pendingReports: number
  pendingSubmissions: number
  totalRevenue: number
  systemStatus: 'healthy' | 'warning' | 'critical'
}

export default function AdminDashboard() {
  const { user } = useAuth()
  const { canAccessAdminPanel, isAdmin } = usePermissions()
  const [stats, setStats] = useState<AdminStats>({
    totalUsers: 12470,
    activeUsers: 3421,
    newUsersToday: 47,
    totalPosts: 15683,
    newPostsToday: 124,
    pendingReports: 23,
    pendingSubmissions: 8,
    totalRevenue: 342150,
    systemStatus: 'healthy'
  })
  const [recentActivity, setRecentActivity] = useState<any[]>([])
  const [pendingReports, setPendingReports] = useState<ContentReport[]>([])
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'content' | 'reports' | 'security' | 'system'>('overview')
  const [loading, setLoading] = useState(true)

  // Mock data - replace with real API calls
  useEffect(() => {
    const mockActivity = [
      {
        id: '1',
        type: 'user_registration',
        description: 'New user registered: @alex_researcher',
        timestamp: new Date(Date.now() - 1000 * 60 * 15),
        severity: 'info'
      },
      {
        id: '2',
        type: 'content_report',
        description: 'Post reported for spam in Technical Discussions',
        timestamp: new Date(Date.now() - 1000 * 60 * 30),
        severity: 'warning'
      },
      {
        id: '3',
        type: 'bug_submission',
        description: 'Critical vulnerability submitted by @security_researcher',
        timestamp: new Date(Date.now() - 1000 * 60 * 45),
        severity: 'high'
      },
      {
        id: '4',
        type: 'system_alert',
        description: 'API response time spike detected',
        timestamp: new Date(Date.now() - 1000 * 60 * 60),
        severity: 'warning'
      }
    ]

    const mockReports: ContentReport[] = [
      {
        id: 'report-1',
        reporterId: 'user-1',
        targetType: 'post',
        targetId: 'post-123',
        reason: 'spam',
        description: 'This post contains promotional content unrelated to AI security',
        status: 'pending',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2)
      },
      {
        id: 'report-2',
        reporterId: 'user-2',
        targetType: 'reply',
        targetId: 'reply-456',
        reason: 'inappropriate',
        description: 'Contains offensive language and personal attacks',
        status: 'pending',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 4)
      }
    ]

    setRecentActivity(mockActivity)
    setPendingReports(mockReports)
    setLoading(false)
  }, [])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount)
  }

  const formatTimeAgo = (date: Date) => {
    const now = new Date()
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
    
    if (diffInMinutes < 1) return 'Just now'
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`
    return `${Math.floor(diffInMinutes / 1440)}d ago`
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
      case 'high': return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
      case 'warning': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
      case 'info': return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200'
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const getSystemStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200'
      case 'warning': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
      case 'critical': return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  if (!canAccessAdminPanel) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Shield className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Access Denied</h2>
          <p className="text-gray-600 dark:text-gray-400">You don't have permission to access the admin panel.</p>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold dark:text-white">Admin Dashboard</h1>
              <p className="text-gray-600 dark:text-gray-400">
                System overview and management tools
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getSystemStatusColor(stats.systemStatus)}`}>
                System {stats.systemStatus}
              </span>
              <Link
                href="/admin/settings"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              >
                <Settings className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-blue-600 mb-2" />
            </div>
            <div className="text-2xl font-bold dark:text-white">{stats.totalUsers.toLocaleString()}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Users</div>
            <div className="text-xs text-green-600 mt-1">+{stats.newUsersToday} today</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
            <div className="flex items-center">
              <Activity className="w-8 h-8 text-green-600 mb-2" />
            </div>
            <div className="text-2xl font-bold dark:text-white">{stats.activeUsers.toLocaleString()}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Active Users</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
            <div className="flex items-center">
              <MessageSquare className="w-8 h-8 text-purple-600 mb-2" />
            </div>
            <div className="text-2xl font-bold dark:text-white">{stats.totalPosts.toLocaleString()}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Posts</div>
            <div className="text-xs text-green-600 mt-1">+{stats.newPostsToday} today</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
            <div className="flex items-center">
              <Flag className="w-8 h-8 text-yellow-600 mb-2" />
            </div>
            <div className="text-2xl font-bold dark:text-white">{stats.pendingReports}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Pending Reports</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
            <div className="flex items-center">
              <Bug className="w-8 h-8 text-red-600 mb-2" />
            </div>
            <div className="text-2xl font-bold dark:text-white">{stats.pendingSubmissions}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Bug Reports</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
            <div className="flex items-center">
              <DollarSign className="w-8 h-8 text-green-600 mb-2" />
            </div>
            <div className="text-2xl font-bold dark:text-white">{formatCurrency(stats.totalRevenue)}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Revenue</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
            <div className="flex items-center">
              <Award className="w-8 h-8 text-yellow-600 mb-2" />
            </div>
            <div className="text-2xl font-bold dark:text-white">847</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Certificates</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
            <div className="flex items-center">
              <TrendingUp className="w-8 h-8 text-blue-600 mb-2" />
            </div>
            <div className="text-2xl font-bold dark:text-white">98.7%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
          <nav className="-mb-px flex space-x-8 overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'users', label: 'Users', icon: Users },
              { id: 'content', label: 'Content', icon: MessageSquare },
              { id: 'reports', label: 'Reports', icon: Flag },
              { id: 'security', label: 'Security', icon: Shield },
              { id: 'system', label: 'System', icon: Settings }
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                  {tab.id === 'reports' && stats.pendingReports > 0 && (
                    <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
                      {stats.pendingReports}
                    </span>
                  )}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Recent Activity */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
                  <h2 className="text-xl font-semibold dark:text-white mb-6">Recent Activity</h2>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          activity.severity === 'high' ? 'bg-red-500' :
                          activity.severity === 'warning' ? 'bg-yellow-500' :
                          activity.severity === 'info' ? 'bg-blue-500' :
                          'bg-gray-500'
                        }`} />
                        <div className="flex-1">
                          <p className="dark:text-white">{activity.description}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {formatTimeAgo(activity.timestamp)}
                          </p>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${getSeverityColor(activity.severity)}`}>
                          {activity.severity}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
                  <h2 className="text-xl font-semibold dark:text-white mb-6">Quick Actions</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <Link
                      href="/admin/users"
                      className="flex items-center space-x-3 p-4 border dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Users className="w-6 h-6 text-blue-600" />
                      <div>
                        <h3 className="font-semibold dark:text-white">Manage Users</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">View and moderate users</p>
                      </div>
                    </Link>

                    <Link
                      href="/admin/reports"
                      className="flex items-center space-x-3 p-4 border dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Flag className="w-6 h-6 text-yellow-600" />
                      <div>
                        <h3 className="font-semibold dark:text-white">Review Reports</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{stats.pendingReports} pending</p>
                      </div>
                    </Link>

                    <Link
                      href="/admin/bug-bounty"
                      className="flex items-center space-x-3 p-4 border dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Bug className="w-6 h-6 text-red-600" />
                      <div>
                        <h3 className="font-semibold dark:text-white">Bug Reports</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{stats.pendingSubmissions} to review</p>
                      </div>
                    </Link>

                    <Link
                      href="/admin/system"
                      className="flex items-center space-x-3 p-4 border dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Settings className="w-6 h-6 text-gray-600" />
                      <div>
                        <h3 className="font-semibold dark:text-white">System Settings</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Configure platform</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold dark:text-white">Content Reports</h2>
                  <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm font-semibold">
                    {stats.pendingReports} Pending
                  </span>
                </div>

                <div className="space-y-4">
                  {pendingReports.map((report) => (
                    <div key={report.id} className="border dark:border-gray-600 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold dark:text-white">
                              {report.targetType.charAt(0).toUpperCase() + report.targetType.slice(1)} Report
                            </h3>
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${
                              report.reason === 'spam' ? 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200' :
                              report.reason === 'inappropriate' ? 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200' :
                              'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
                            }`}>
                              {report.reason}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 mb-2">
                            {report.description}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-500">
                            Reported {formatTimeAgo(report.createdAt)}
                          </p>
                        </div>
                        
                        <div className="flex space-x-2">
                          <button
                            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                            title="View content"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
                            title="Approve"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </button>
                          <button
                            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                            title="Remove content"
                          >
                            <XCircle className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* System Health */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4">System Health</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm dark:text-white">API Gateway</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600">Healthy</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm dark:text-white">Database</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600">Healthy</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm dark:text-white">Cache</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-yellow-600">Warning</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm dark:text-white">Storage</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600">Healthy</span>
                  </div>
                </div>
              </div>
              
              <Link
                href="/admin/system-status"
                className="block text-center text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm mt-4"
              >
                View Detailed Status →
              </Link>
            </div>

            {/* Recent Moderations */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4">Recent Actions</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm dark:text-white">Post removed for spam</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm dark:text-white">User warned for guideline violation</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">4 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm dark:text-white">Bug report approved</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">6 hours ago</p>
                  </div>
                </div>
              </div>
              
              <Link
                href="/admin/moderation-log"
                className="block text-center text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm mt-4"
              >
                View All Actions →
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4">Today's Activity</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">New Users</span>
                  <span className="font-semibold dark:text-white">{stats.newUsersToday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">New Posts</span>
                  <span className="font-semibold dark:text-white">{stats.newPostsToday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Reports Filed</span>
                  <span className="font-semibold dark:text-white">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Actions Taken</span>
                  <span className="font-semibold dark:text-white">8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}