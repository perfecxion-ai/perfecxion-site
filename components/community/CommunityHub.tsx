'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  MessageSquare, 
  Users, 
  TrendingUp, 
  Star, 
  Award,
  Calendar,
  Search,
  Filter,
  Plus
} from 'lucide-react'
import { FORUM_CATEGORIES } from '@/lib/community-config'

interface CommunityStats {
  totalMembers: number
  totalPosts: number
  totalReplies: number
  onlineNow: number
  newThisWeek: number
}

interface RecentActivity {
  id: string
  type: 'post' | 'reply' | 'member'
  title: string
  author: string
  timestamp: Date
  category?: string
  replies?: number
}

export default function CommunityHub() {
  const [stats, setStats] = useState<CommunityStats>({
    totalMembers: 1247,
    totalPosts: 3892,
    totalReplies: 15673,
    onlineNow: 89,
    newThisWeek: 156
  })

  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([
    {
      id: '1',
      type: 'post',
      title: 'Advanced Prompt Injection Techniques in Production',
      author: 'alex_researcher',
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
      category: 'technical',
      replies: 8
    },
    {
      id: '2',
      type: 'reply',
      title: 'Re: OWASP Top 10 for AI Systems',
      author: 'security_pro',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      category: 'general'
    },
    {
      id: '3',
      type: 'member',
      title: 'Joined the community',
      author: 'new_member_99',
      timestamp: new Date(Date.now() - 1000 * 60 * 45)
    }
  ])

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const formatTimeAgo = (date: Date) => {
    const now = new Date()
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60))
    
    if (diffInMinutes < 1) return 'Just now'
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`
    return `${Math.floor(diffInMinutes / 1440)}d ago`
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              AI Security Community
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Connect with security professionals, researchers, and experts. 
              Share knowledge, learn together, and advance AI security.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/community/forums"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <MessageSquare className="w-5 h-5 inline mr-2" />
                Browse Forums
              </Link>
              <Link
                href="/community/certification"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
              >
                <Award className="w-5 h-5 inline mr-2" />
                Get Certified
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-blue-600 mb-2" />
            </div>
            <div className="text-2xl font-bold dark:text-white">{stats.totalMembers.toLocaleString()}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Members</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700">
            <div className="flex items-center">
              <MessageSquare className="w-8 h-8 text-green-600 mb-2" />
            </div>
            <div className="text-2xl font-bold dark:text-white">{stats.totalPosts.toLocaleString()}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Forum Posts</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700">
            <div className="flex items-center">
              <TrendingUp className="w-8 h-8 text-purple-600 mb-2" />
            </div>
            <div className="text-2xl font-bold dark:text-white">{stats.totalReplies.toLocaleString()}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Replies</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            </div>
            <div className="text-2xl font-bold dark:text-white">{stats.onlineNow}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Online Now</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border dark:border-gray-700">
            <div className="flex items-center">
              <Star className="w-8 h-8 text-yellow-600 mb-2" />
            </div>
            <div className="text-2xl font-bold dark:text-white">{stats.newThisWeek}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">New This Week</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Forum Categories */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold dark:text-white">Forum Categories</h2>
              <Link
                href="/community/forums/new"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                <Plus className="w-4 h-4 inline mr-1" />
                New Post
              </Link>
            </div>
            
            <div className="space-y-4">
              {Object.entries(FORUM_CATEGORIES).map(([key, category]) => (
                <Link
                  key={key}
                  href={`/community/forums/${category.slug}`}
                  className="block bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center text-white"
                        style={{ backgroundColor: category.color }}
                      >
                        <MessageSquare className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg dark:text-white">
                          {category.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          {category.description}
                        </p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                          <span>245 posts</span>
                          <span>•</span>
                          <span>1.2k replies</span>
                          {!category.publicAccess && (
                            <>
                              <span>•</span>
                              <span className="text-yellow-600">Members Only</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-500 dark:text-gray-400">
                      <div>Last post 2h ago</div>
                      <div>by @security_expert</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recent Activity */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg mb-4 dark:text-white">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      {activity.type === 'post' && (
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          <MessageSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </div>
                      )}
                      {activity.type === 'reply' && (
                        <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                        </div>
                      )}
                      {activity.type === 'member' && (
                        <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                          <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium dark:text-white">
                        {activity.title}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        by @{activity.author}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {formatTimeAgo(activity.timestamp)}
                        </span>
                        {activity.category && (
                          <>
                            <span className="text-xs text-gray-400">•</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                              {activity.category}
                            </span>
                          </>
                        )}
                        {activity.replies && (
                          <>
                            <span className="text-xs text-gray-400">•</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {activity.replies} replies
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/community/activity"
                className="block text-center text-blue-600 hover:text-blue-700 text-sm mt-4"
              >
                View All Activity
              </Link>
            </div>

            {/* Quick Links */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg mb-4 dark:text-white">Quick Links</h3>
              <div className="space-y-3">
                <Link
                  href="/community/certification"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Award className="w-4 h-4 mr-3" />
                  Certification Programs
                </Link>
                <Link
                  href="/community/bug-bounty"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Star className="w-4 h-4 mr-3" />
                  Bug Bounty Program
                </Link>
                <Link
                  href="/community/events"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Calendar className="w-4 h-4 mr-3" />
                  Upcoming Events
                </Link>
                <Link
                  href="/community/leaderboard"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <TrendingUp className="w-4 h-4 mr-3" />
                  Community Leaderboard
                </Link>
              </div>
            </div>

            {/* Community Guidelines */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2 text-yellow-800 dark:text-yellow-200">
                Community Guidelines
              </h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-3">
                Help us maintain a respectful and productive community.
              </p>
              <Link
                href="/community/guidelines"
                className="text-sm text-yellow-800 dark:text-yellow-200 hover:underline"
              >
                Read Guidelines →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}