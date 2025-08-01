'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Search, 
  Filter, 
  Plus, 
  ChevronDown,
  MessageSquare,
  Heart,
  Eye,
  Clock,
  Pin,
  Lock,
  Trash2,
  Flag,
  MoreHorizontal,
  User,
  Calendar
} from 'lucide-react'
import { ForumPost, ForumCategory, User as UserType } from '@/lib/community-types'
import { FORUM_CATEGORIES } from '@/lib/community-config'

interface ForumInterfaceProps {
  categorySlug?: string
  searchQuery?: string
}

export default function ForumInterface({ categorySlug, searchQuery = '' }: ForumInterfaceProps) {
  const [posts, setPosts] = useState<ForumPost[]>([])
  const [filteredPosts, setFilteredPosts] = useState<ForumPost[]>([])
  const [searchTerm, setSearchTerm] = useState(searchQuery)
  const [sortBy, setSortBy] = useState<'recent' | 'popular' | 'oldest'>('recent')
  const [filterBy, setFilterBy] = useState<'all' | 'pinned' | 'answered' | 'unanswered'>('all')
  const [currentCategory, setCurrentCategory] = useState<string | null>(categorySlug || null)
  const [loading, setLoading] = useState(true)

  // Mock data - replace with real API calls
  useEffect(() => {
    const mockPosts: ForumPost[] = [
      {
        id: '1',
        categoryId: 'technical',
        authorId: 'user1',
        title: 'Advanced Prompt Injection Techniques in Production Systems',
        content: 'I've been researching advanced prompt injection techniques...',
        contentHtml: '<p>I\'ve been researching advanced prompt injection techniques...</p>',
        tags: ['prompt-injection', 'security', 'production'],
        isPinned: true,
        isLocked: false,
        isDeleted: false,
        viewCount: 1247,
        likeCount: 89,
        replyCount: 24,
        createdAt: new Date('2024-01-15T10:30:00Z'),
        updatedAt: new Date('2024-01-15T10:30:00Z'),
        replies: []
      },
      {
        id: '2',
        categoryId: 'general',
        authorId: 'user2',
        title: 'OWASP Top 10 for AI Systems - Discussion',
        content: 'Let\'s discuss the recently released OWASP Top 10 for AI systems...',
        contentHtml: '<p>Let\'s discuss the recently released OWASP Top 10 for AI systems...</p>',
        tags: ['owasp', 'ai-security', 'standards'],
        isPinned: false,
        isLocked: false,
        isDeleted: false,
        viewCount: 892,
        likeCount: 67,
        replyCount: 18,
        createdAt: new Date('2024-01-14T15:22:00Z'),
        updatedAt: new Date('2024-01-14T15:22:00Z'),
        replies: []
      },
      {
        id: '3',
        categoryId: 'research',
        authorId: 'user3',
        title: 'Novel Attack Vector: Multi-Modal Adversarial Examples',
        content: 'Our research team has discovered a new attack vector...',
        contentHtml: '<p>Our research team has discovered a new attack vector...</p>',
        tags: ['research', 'adversarial', 'multimodal'],
        isPinned: false,
        isLocked: false,
        isDeleted: false,
        viewCount: 567,
        likeCount: 43,
        replyCount: 12,
        createdAt: new Date('2024-01-13T09:15:00Z'),
        updatedAt: new Date('2024-01-13T09:15:00Z'),
        replies: []
      }
    ]
    
    setPosts(mockPosts)
    setLoading(false)
  }, [])

  // Filter and sort posts
  useEffect(() => {
    let filtered = [...posts]

    // Filter by category
    if (currentCategory && currentCategory !== 'all') {
      const categoryData = Object.entries(FORUM_CATEGORIES).find(([key, cat]) => cat.slug === currentCategory)
      if (categoryData) {
        filtered = filtered.filter(post => post.categoryId === categoryData[0])
      }
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Filter by type
    switch (filterBy) {
      case 'pinned':
        filtered = filtered.filter(post => post.isPinned)
        break
      case 'answered':
        filtered = filtered.filter(post => post.replyCount > 0)
        break
      case 'unanswered':
        filtered = filtered.filter(post => post.replyCount === 0)
        break
    }

    // Sort posts
    switch (sortBy) {
      case 'recent':
        filtered.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
        break
      case 'popular':
        filtered.sort((a, b) => (b.likeCount + b.replyCount) - (a.likeCount + a.replyCount))
        break
      case 'oldest':
        filtered.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())
        break
    }

    setFilteredPosts(filtered)
  }, [posts, searchTerm, sortBy, filterBy, currentCategory])

  const formatTimeAgo = (date: Date) => {
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours}h ago`
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`
    return `${Math.floor(diffInHours / 168)}w ago`
  }

  const getCategoryInfo = (categoryId: string) => {
    const categoryEntry = Object.entries(FORUM_CATEGORIES).find(([key]) => key === categoryId)
    return categoryEntry ? categoryEntry[1] : null
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold dark:text-white">
              {currentCategory 
                ? FORUM_CATEGORIES[currentCategory as keyof typeof FORUM_CATEGORIES]?.name || 'Forums'
                : 'Forums'
              }
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {currentCategory
                ? FORUM_CATEGORIES[currentCategory as keyof typeof FORUM_CATEGORIES]?.description
                : 'Community discussions and knowledge sharing'
              }
            </p>
          </div>
          <Link
            href="/community/forums/new"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            <Plus className="w-5 h-5 inline mr-2" />
            New Post
          </Link>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
            />
          </div>
          
          <div className="flex gap-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
            >
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
              <option value="oldest">Oldest First</option>
            </select>
            
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value as any)}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
            >
              <option value="all">All Posts</option>
              <option value="pinned">Pinned</option>
              <option value="answered">Answered</option>
              <option value="unanswered">Unanswered</option>
            </select>
          </div>
        </div>

        {/* Category Navigation */}
        {!currentCategory && (
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setCurrentCategory(null)}
              className="px-4 py-2 rounded-full bg-blue-600 text-white font-semibold"
            >
              All Categories
            </button>
            {Object.entries(FORUM_CATEGORIES).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setCurrentCategory(category.slug)}
                className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {category.name}
              </button>
            ))}
          </div>
        )}

        {/* Posts List */}
        <div className="space-y-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                No posts found
              </h3>
              <p className="text-gray-500 dark:text-gray-500">
                {searchTerm ? 'Try adjusting your search terms' : 'Be the first to start a discussion!'}
              </p>
            </div>
          ) : (
            filteredPosts.map((post) => {
              const categoryInfo = getCategoryInfo(post.categoryId)
              return (
                <div
                  key={post.id}
                  className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        {post.isPinned && (
                          <Pin className="w-4 h-4 text-yellow-600" />
                        )}
                        {post.isLocked && (
                          <Lock className="w-4 h-4 text-red-600" />
                        )}
                        {categoryInfo && (
                          <span
                            className="px-2 py-1 rounded text-xs font-semibold text-white"
                            style={{ backgroundColor: categoryInfo.color }}
                          >
                            {categoryInfo.name}
                          </span>
                        )}
                        <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                          <User className="w-4 h-4" />
                          <span>@author_{post.authorId}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span>{formatTimeAgo(post.createdAt)}</span>
                        </div>
                      </div>
                      
                      <Link
                        href={`/community/forums/post/${post.id}`}
                        className="block mb-3"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          {post.title}
                        </h3>
                      </Link>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                        {post.content}
                      </p>
                      
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{post.likeCount}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageSquare className="w-4 h-4" />
                          <span>{post.replyCount} replies</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.viewCount} views</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="ml-6">
                      <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>

        {/* Pagination would go here */}
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-2">
            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
              Previous
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
              3
            </button>
            <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}