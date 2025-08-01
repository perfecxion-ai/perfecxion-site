'use client'

import { useState, useEffect } from 'react'
import { 
  Flag,
  Eye,
  CheckCircle,
  XCircle,
  AlertTriangle,
  MessageSquare,
  User,
  Calendar,
  Clock,
  ThumbsUp,
  ThumbsDown,
  Ban,
  RotateCcw,
  MoreHorizontal,
  Filter,
  Search,
  ArrowUpDown
} from 'lucide-react'
import { ContentReport, ModerationAction, ForumPost, User as UserType } from '@/lib/community-types'
import { useAuth, usePermissions } from '@/components/auth/AuthProvider'

interface ContentModerationProps {
  showReportsOnly?: boolean
}

export default function ContentModeration({ showReportsOnly = false }: ContentModerationProps) {
  const { user } = useAuth()
  const { canModerateForum } = usePermissions()
  const [reports, setReports] = useState<ContentReport[]>([])
  const [posts, setPosts] = useState<ForumPost[]>([])
  const [selectedReport, setSelectedReport] = useState<ContentReport | null>(null)
  const [filter, setFilter] = useState<{
    status: 'all' | 'pending' | 'reviewed' | 'resolved'
    reason: 'all' | 'spam' | 'inappropriate' | 'harassment' | 'misinformation'
    sortBy: 'newest' | 'oldest' | 'priority'
  }>({
    status: 'pending',
    reason: 'all',
    sortBy: 'newest'
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)

  // Mock data - replace with real API calls
  useEffect(() => {
    const mockReports: ContentReport[] = [
      {
        id: 'report-1',
        reporterId: 'user-123',
        targetType: 'post',
        targetId: 'post-456',
        reason: 'spam',
        description: 'This post contains promotional content unrelated to AI security discussions',
        status: 'pending',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2)
      },
      {
        id: 'report-2',
        reporterId: 'user-789',
        targetType: 'reply',
        targetId: 'reply-101',
        reason: 'inappropriate',
        description: 'Contains offensive language and personal attacks against another user',
        status: 'pending',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 4)
      },
      {
        id: 'report-3',
        reporterId: 'user-456',
        targetType: 'post',
        targetId: 'post-789',
        reason: 'misinformation',
        description: 'Spreading false information about AI security practices',
        status: 'reviewed',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
        reviewedAt: new Date(Date.now() - 1000 * 60 * 60 * 12),
        reviewedBy: 'moderator-1',
        action: 'Content warning added'
      },
      {
        id: 'report-4',
        reporterId: 'user-321',
        targetType: 'user',
        targetId: 'user-654',
        reason: 'harassment',
        description: 'User is consistently harassing other community members',
        status: 'resolved',
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48),
        reviewedAt: new Date(Date.now() - 1000 * 60 * 60 * 36),
        reviewedBy: 'moderator-2',
        action: 'User suspended for 7 days'
      }
    ]

    const mockPosts: ForumPost[] = [
      {
        id: 'post-456',
        categoryId: 'general',
        authorId: 'user-spammer',
        title: 'Check out this amazing AI tool!',
        content: 'Hey everyone! I found this incredible AI tool that will revolutionize your workflow. Click here to get 50% off: [promotional link]',
        contentHtml: '<p>Hey everyone! I found this incredible AI tool that will revolutionize your workflow. Click here to get 50% off: [promotional link]</p>',
        tags: ['ai', 'tools'],
        isPinned: false,
        isLocked: false,
        isDeleted: false,
        viewCount: 45,
        likeCount: 2,
        replyCount: 8,
        createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3),
        updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 3),
        replies: []
      }
    ]

    setReports(mockReports)
    setPosts(mockPosts)
    setLoading(false)
  }, [])

  const filteredReports = reports.filter(report => {
    if (filter.status !== 'all' && report.status !== filter.status) return false
    if (filter.reason !== 'all' && report.reason !== filter.reason) return false
    if (searchTerm && !report.description.toLowerCase().includes(searchTerm.toLowerCase())) return false
    return true
  }).sort((a, b) => {
    switch (filter.sortBy) {
      case 'newest':
        return b.createdAt.getTime() - a.createdAt.getTime()
      case 'oldest':
        return a.createdAt.getTime() - b.createdAt.getTime()
      case 'priority':
        const priorityOrder = { harassment: 4, inappropriate: 3, misinformation: 2, spam: 1 }
        return (priorityOrder[b.reason as keyof typeof priorityOrder] || 0) - 
               (priorityOrder[a.reason as keyof typeof priorityOrder] || 0)
      default:
        return 0
    }
  })

  const handleReportAction = async (reportId: string, action: 'approve' | 'reject' | 'resolve', actionNote?: string) => {
    setReports(prev => prev.map(report => 
      report.id === reportId 
        ? {
            ...report,
            status: action === 'resolve' ? 'resolved' : 'reviewed',
            reviewedAt: new Date(),
            reviewedBy: user?.id || 'current-moderator',
            action: actionNote || `Report ${action}d by moderator`
          }
        : report
    ))
    
    // Close modal if open
    if (selectedReport?.id === reportId) {
      setSelectedReport(null)
    }
  }

  const handleContentAction = async (contentId: string, contentType: 'post' | 'reply', action: 'remove' | 'warn' | 'lock') => {
    // Update content based on action
    if (contentType === 'post') {
      setPosts(prev => prev.map(post => 
        post.id === contentId 
          ? {
              ...post,
              isDeleted: action === 'remove',
              isLocked: action === 'lock' || post.isLocked
            }
          : post
      ))
    }

    // Log moderation action
    const moderationAction: ModerationAction = {
      id: `action-${Date.now()}`,
      moderatorId: user?.id || 'current-moderator',
      targetType: contentType,
      targetId: contentId,
      action: action === 'remove' ? 'delete' : action === 'warn' ? 'warn' : 'suspend',
      reason: `Content ${action} by moderator`,
      createdAt: new Date()
    }

    console.log('Moderation action:', moderationAction)
  }

  const getReasonColor = (reason: string) => {
    switch (reason) {
      case 'harassment': return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
      case 'inappropriate': return 'text-orange-600 bg-orange-100 dark:bg-orange-900 dark:text-orange-200'
      case 'misinformation': return 'text-purple-600 bg-purple-100 dark:bg-purple-900 dark:text-purple-200'
      case 'spam': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
      case 'reviewed': return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200'
      case 'resolved': return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200'
      case 'dismissed': return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const formatTimeAgo = (date: Date) => {
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Less than an hour ago'
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`
    return `${Math.floor(diffInHours / 24)} day${Math.floor(diffInHours / 24) > 1 ? 's' : ''} ago`
  }

  const getReportedContent = (report: ContentReport) => {
    if (report.targetType === 'post') {
      return posts.find(post => post.id === report.targetId)
    }
    // In a real app, you'd fetch replies and users as well
    return null
  }

  if (!canModerateForum) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Flag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Access Denied</h2>
          <p className="text-gray-600 dark:text-gray-400">You don't have permission to moderate content.</p>
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
              <h1 className="text-2xl font-bold dark:text-white">Content Moderation</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Review and moderate community content and reports
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-semibold">
                {filteredReports.filter(r => r.status === 'pending').length} Pending
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Search */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search reports..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <select
                value={filter.status}
                onChange={(e) => setFilter(prev => ({ ...prev, status: e.target.value as any }))}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="reviewed">Reviewed</option>
                <option value="resolved">Resolved</option>
              </select>

              <select
                value={filter.reason}
                onChange={(e) => setFilter(prev => ({ ...prev, reason: e.target.value as any }))}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="all">All Reasons</option>
                <option value="spam">Spam</option>
                <option value="inappropriate">Inappropriate</option>
                <option value="harassment">Harassment</option>
                <option value="misinformation">Misinformation</option>
              </select>

              <select
                value={filter.sortBy}
                onChange={(e) => setFilter(prev => ({ ...prev, sortBy: e.target.value as any }))}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="priority">By Priority</option>
              </select>
            </div>
          </div>
        </div>

        {/* Reports List */}
        <div className="space-y-4">
          {filteredReports.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-8 text-center">
              <Flag className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                No Reports Found
              </h3>
              <p className="text-gray-500 dark:text-gray-500">
                No reports match your current filters.
              </p>
            </div>
          ) : (
            filteredReports.map((report) => {
              const reportedContent = getReportedContent(report)
              
              return (
                <div
                  key={report.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold dark:text-white">
                          {report.targetType.charAt(0).toUpperCase() + report.targetType.slice(1)} Report
                        </h3>
                        <span className={`px-2 py-1 rounded text-sm font-semibold ${getReasonColor(report.reason)}`}>
                          {report.reason}
                        </span>
                        <span className={`px-2 py-1 rounded text-sm font-semibold ${getStatusColor(report.status)}`}>
                          {report.status}
                        </span>
                        {report.reason === 'harassment' && (
                          <AlertTriangle className="w-5 h-5 text-red-600" />
                        )}
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        <strong>Report Description:</strong> {report.description}
                      </p>

                      {reportedContent && (
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                          <h4 className="font-semibold dark:text-white mb-2">Reported Content:</h4>
                          <h5 className="font-medium text-blue-600 dark:text-blue-400 mb-2">
                            {reportedContent.title}
                          </h5>
                          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                            {reportedContent.content}
                          </p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                            <span>By @{reportedContent.authorId}</span>
                            <span>{formatTimeAgo(reportedContent.createdAt)}</span>
                            <span>{reportedContent.likeCount} likes</span>
                            <span>{reportedContent.replyCount} replies</span>
                          </div>
                        </div>
                      )}

                      <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>Reported {formatTimeAgo(report.createdAt)}</span>
                        </div>
                        {report.reviewedAt && (
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>Reviewed {formatTimeAgo(report.reviewedAt)}</span>
                          </div>
                        )}
                        {report.action && (
                          <div className="flex items-center space-x-1">
                            <CheckCircle className="w-4 h-4" />
                            <span>{report.action}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    {report.status === 'pending' && (
                      <div className="flex items-center space-x-2 ml-4">
                        <button
                          onClick={() => setSelectedReport(report)}
                          className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg"
                          title="View details"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleReportAction(report.id, 'approve', 'Content removed by moderator')}
                          className="p-2 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg"
                          title="Approve report and take action"
                        >
                          <CheckCircle className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleReportAction(report.id, 'reject', 'Report dismissed - no violation found')}
                          className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
                          title="Reject report"
                        >
                          <XCircle className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                          <MoreHorizontal className="w-5 h-5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>

      {/* Report Detail Modal */}
      {selectedReport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold dark:text-white">Report Details</h2>
                <button
                  onClick={() => setSelectedReport(null)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Report Info */}
              <div>
                <h3 className="font-semibold dark:text-white mb-3">Report Information</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Type:</span>
                    <span className="ml-2 font-medium dark:text-white">{selectedReport.targetType}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Reason:</span>
                    <span className={`ml-2 px-2 py-1 rounded text-xs font-semibold ${getReasonColor(selectedReport.reason)}`}>
                      {selectedReport.reason}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Status:</span>
                    <span className={`ml-2 px-2 py-1 rounded text-xs font-semibold ${getStatusColor(selectedReport.status)}`}>
                      {selectedReport.status}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Reported:</span>
                    <span className="ml-2 font-medium dark:text-white">{formatTimeAgo(selectedReport.createdAt)}</span>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="text-gray-600 dark:text-gray-400">Description:</span>
                  <p className="mt-1 text-gray-900 dark:text-white">{selectedReport.description}</p>
                </div>
              </div>

              {/* Content Preview */}
              {getReportedContent(selectedReport) && (
                <div>
                  <h3 className="font-semibold dark:text-white mb-3">Reported Content</h3>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="border-b dark:border-gray-600 pb-3 mb-3">
                      <h4 className="font-medium text-lg dark:text-white">
                        {getReportedContent(selectedReport)!.title}
                      </h4>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                        <span>By @{getReportedContent(selectedReport)!.authorId}</span>
                        <span>{formatTimeAgo(getReportedContent(selectedReport)!.createdAt)}</span>
                      </div>
                    </div>
                    <div className="prose dark:prose-invert max-w-none">
                      <p>{getReportedContent(selectedReport)!.content}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Moderation Actions */}
              {selectedReport.status === 'pending' && (
                <div>
                  <h3 className="font-semibold dark:text-white mb-3">Take Action</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium text-green-600">Approve Report</h4>
                      <button
                        onClick={() => {
                          handleContentAction(selectedReport.targetId, selectedReport.targetType as any, 'remove')
                          handleReportAction(selectedReport.id, 'approve', 'Content removed')
                        }}
                        className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 text-sm"
                      >
                        Remove Content
                      </button>
                      <button
                        onClick={() => {
                          handleContentAction(selectedReport.targetId, selectedReport.targetType as any, 'warn')
                          handleReportAction(selectedReport.id, 'approve', 'Content warning added')
                        }}
                        className="w-full bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 text-sm"
                      >
                        Add Warning
                      </button>
                      <button
                        onClick={() => {
                          handleContentAction(selectedReport.targetId, selectedReport.targetType as any, 'lock')
                          handleReportAction(selectedReport.id, 'approve', 'Content locked')
                        }}
                        className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 text-sm"
                      >
                        Lock Content
                      </button>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-red-600">Reject Report</h4>
                      <button
                        onClick={() => handleReportAction(selectedReport.id, 'reject', 'No violation found')}
                        className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 text-sm"
                      >
                        No Violation
                      </button>
                      <button
                        onClick={() => handleReportAction(selectedReport.id, 'reject', 'Insufficient evidence')}
                        className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 text-sm"
                      >
                        Insufficient Evidence
                      </button>
                      <button
                        onClick={() => handleReportAction(selectedReport.id, 'reject', 'Already addressed')}
                        className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 text-sm"
                      >
                        Already Addressed
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}