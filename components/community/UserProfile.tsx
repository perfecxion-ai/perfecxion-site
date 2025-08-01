'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  User,
  MapPin,
  Globe,
  Calendar,
  Award,
  MessageSquare,
  Heart,
  TrendingUp,
  Star,
  Shield,
  Edit,
  Settings,
  Bell,
  Eye,
  Users,
  BookOpen,
  Bug
} from 'lucide-react'
import { User as UserType, Badge, Certification } from '@/lib/community-types'
import { USER_BADGES, REPUTATION_SYSTEM } from '@/lib/community-config'

interface UserProfileProps {
  userId: string
  isOwnProfile?: boolean
}

export default function UserProfile({ userId, isOwnProfile = false }: UserProfileProps) {
  const [user, setUser] = useState<UserType | null>(null)
  const [activeTab, setActiveTab] = useState<'overview' | 'posts' | 'replies' | 'certifications' | 'badges'>('overview')
  const [loading, setLoading] = useState(true)

  // Mock user data - replace with real API call
  useEffect(() => {
    const mockUser: UserType = {
      id: userId,
      email: 'alex.researcher@example.com',
      username: 'alex_researcher',
      displayName: 'Alex Rodriguez',
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userId}`,
      bio: 'Security researcher specializing in AI/ML systems. PhD in Computer Science with focus on adversarial machine learning. 10+ years in cybersecurity.',
      location: 'San Francisco, CA',
      website: 'https://alexresearch.dev',
      joinedAt: new Date('2023-06-15'),
      lastActiveAt: new Date(),
      isVerified: true,
      isExpert: true,
      isModerator: false,
      isAdmin: false,
      reputation: 2847,
      badges: [
        {
          id: '1',
          name: 'AI Security Expert',
          description: 'Recognized expertise in AI security',
          icon: '🛡️',
          category: 'expertise',
          earnedAt: new Date('2023-08-20'),
          level: 3
        },
        {
          id: '2',
          name: 'Research Contributor',
          description: 'Published security research',
          icon: '🔬',
          category: 'expertise',
          earnedAt: new Date('2023-09-10')
        },
        {
          id: '3',
          name: 'Community Mentor',
          description: 'Helped new members',
          icon: '👨‍🏫',
          category: 'community',
          earnedAt: new Date('2023-10-05')
        }
      ],
      certifications: [
        {
          id: '1',
          userId: userId,
          programId: 'fundamentals',
          certificateNumber: 'PX-AI-FUND-2023-1247',
          issuedAt: new Date('2023-08-15'),
          expiresAt: new Date('2025-08-15'),
          verificationUrl: 'https://verify.perfecxion.ai/cert/PX-AI-FUND-2023-1247',
          isRevoked: false
        },
        {
          id: '2',
          userId: userId,
          programId: 'practitioner',
          certificateNumber: 'PX-AI-PRAC-2023-0892',
          issuedAt: new Date('2023-11-20'),
          expiresAt: new Date('2025-11-20'),
          verificationUrl: 'https://verify.perfecxion.ai/cert/PX-AI-PRAC-2023-0892',
          isRevoked: false
        }
      ],
      preferences: {
        emailNotifications: true,
        pushNotifications: true,
        marketingEmails: false,
        communityDigest: true,
        theme: 'dark',
        language: 'en',
        timezone: 'America/Los_Angeles'
      }
    }

    setUser(mockUser)
    setLoading(false)
  }, [userId])

  const getReputationLevel = (reputation: number) => {
    return REPUTATION_SYSTEM.LEVELS.find(level => 
      reputation >= level.min && reputation <= level.max
    ) || REPUTATION_SYSTEM.LEVELS[0]
  }

  const formatJoinDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    })
  }

  const calculateTimeActive = (joinDate: Date) => {
    const now = new Date()
    const diffInMonths = Math.floor((now.getTime() - joinDate.getTime()) / (1000 * 60 * 60 * 24 * 30))
    
    if (diffInMonths < 1) return 'Less than a month'
    if (diffInMonths < 12) return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''}`
    
    const years = Math.floor(diffInMonths / 12)
    const remainingMonths = diffInMonths % 12
    
    if (remainingMonths === 0) return `${years} year${years > 1 ? 's' : ''}`
    return `${years} year${years > 1 ? 's' : ''}, ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">User Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400">The user you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  const reputationLevel = getReputationLevel(user.reputation)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
            {/* Avatar and Basic Info */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative mb-4">
                <img
                  src={user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`}
                  alt={`${user.displayName}'s avatar`}
                  className="w-32 h-32 rounded-full border-4 border-gray-200 dark:border-gray-600"
                />
                {user.isVerified && (
                  <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white rounded-full p-2">
                    <Shield className="w-4 h-4" />
                  </div>
                )}
              </div>
              
              {isOwnProfile && (
                <Link
                  href="/community/profile/edit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
                >
                  <Edit className="w-4 h-4 inline mr-2" />
                  Edit Profile
                </Link>
              )}
            </div>

            {/* Profile Details */}
            <div className="flex-1 mt-6 lg:mt-0">
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-3xl font-bold dark:text-white">{user.displayName}</h1>
                {user.isExpert && (
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm font-semibold">
                    Expert
                  </span>
                )}
                {user.isModerator && (
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-semibold">
                    Moderator
                  </span>
                )}
                {user.isAdmin && (
                  <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-sm font-semibold">
                    Admin
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-1">@{user.username}</p>
              
              {/* Reputation */}
              <div className="flex items-center space-x-2 mb-4">
                <span 
                  className="text-2xl font-bold"
                  style={{ color: reputationLevel.color }}
                >
                  {user.reputation.toLocaleString()}
                </span>
                <span className="text-lg">{reputationLevel.badge}</span>
                <span className="text-gray-600 dark:text-gray-400">{reputationLevel.name}</span>
              </div>

              {/* Bio */}
              {user.bio && (
                <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-3xl">
                  {user.bio}
                </p>
              )}

              {/* Meta Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600 dark:text-gray-400">
                {user.location && (
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{user.location}</span>
                  </div>
                )}
                {user.website && (
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4" />
                    <a
                      href={user.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      Website
                    </a>
                  </div>
                )}
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {formatJoinDate(user.joinedAt)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>Active for {calculateTimeActive(user.joinedAt)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
            <div className="flex items-center">
              <MessageSquare className="w-8 h-8 text-blue-600 mb-2" />
            </div>
            <div className="text-2xl font-bold dark:text-white">142</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Posts</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
            <div className="flex items-center">
              <Heart className="w-8 h-8 text-red-600 mb-2" />
            </div>
            <div className="text-2xl font-bold dark:text-white">1,247</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Likes Received</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
            <div className="flex items-center">
              <Award className="w-8 h-8 text-yellow-600 mb-2" />
            </div>
            <div className="text-2xl font-bold dark:text-white">{user.badges.length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Badges</div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
            <div className="flex items-center">
              <Star className="w-8 h-8 text-purple-600 mb-2" />
            </div>
            <div className="text-2xl font-bold dark:text-white">{user.certifications.length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: User },
              { id: 'posts', label: 'Posts', icon: MessageSquare },
              { id: 'replies', label: 'Replies', icon: TrendingUp },
              { id: 'certifications', label: 'Certifications', icon: Award },
              { id: 'badges', label: 'Badges', icon: Star }
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
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
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
                  <h3 className="font-semibold text-lg mb-4 dark:text-white">Recent Activity</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium dark:text-white">
                          Posted in Advanced Prompt Injection Techniques
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                        <Heart className="w-4 h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium dark:text-white">
                          Received 15 likes on OWASP AI Security post
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">1 day ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                        <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium dark:text-white">
                          Earned "Community Mentor" badge
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">3 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'badges' && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
                <h3 className="font-semibold text-lg mb-4 dark:text-white">Badges ({user.badges.length})</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {user.badges.map((badge) => (
                    <div key={badge.id} className="flex items-start space-x-3 p-4 border dark:border-gray-600 rounded-lg">
                      <div className="text-2xl">{badge.icon}</div>
                      <div>
                        <h4 className="font-semibold dark:text-white">{badge.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {badge.description}
                        </p>
                        <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                          <Calendar className="w-3 h-3" />
                          <span>Earned {badge.earnedAt.toLocaleDateString()}</span>
                          {badge.level && (
                            <>
                              <span>•</span>
                              <span>Level {badge.level}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'certifications' && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
                <h3 className="font-semibold text-lg mb-4 dark:text-white">Certifications ({user.certifications.length})</h3>
                <div className="space-y-4">
                  {user.certifications.map((cert) => (
                    <div key={cert.id} className="border dark:border-gray-600 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold dark:text-white">AI Security Certification</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            Certificate #: {cert.certificateNumber}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>Issued {cert.issuedAt.toLocaleDateString()}</span>
                            </div>
                            {cert.expiresAt && (
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-3 h-3" />
                                <span>Expires {cert.expiresAt.toLocaleDateString()}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <a
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm"
                        >
                          Verify →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg mb-4 dark:text-white">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Forum Reputation</span>
                  <span className="font-semibold dark:text-white">{user.reputation.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Total Posts</span>
                  <span className="font-semibold dark:text-white">142</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Total Replies</span>
                  <span className="font-semibold dark:text-white">387</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Helpful Answers</span>
                  <span className="font-semibold dark:text-white">89</span>
                </div>
              </div>
            </div>

            {/* Recent Badges */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg mb-4 dark:text-white">Recent Badges</h3>
              <div className="space-y-3">
                {user.badges.slice(0, 3).map((badge) => (
                  <div key={badge.id} className="flex items-center space-x-3">
                    <div className="text-lg">{badge.icon}</div>
                    <div>
                      <p className="font-medium text-sm dark:text-white">{badge.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {badge.earnedAt.toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}