'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, Clock, ChevronRight, ChevronLeft, X, Tag, Rss, Menu, X as CloseIcon } from 'lucide-react'
import React from 'react'
import { ContentItem } from '@/lib/content-loader'
import { searchContent, findRelatedContent } from '@/lib/search-utils'
import { NewsletterSignup } from '@/components/newsletter-signup'

// Content types/formats
const contentFormats = [
  { id: 'all', label: 'All Content', icon: '📚' },
  { id: 'article', label: 'Articles', icon: '📄' },
  { id: 'whitepaper', label: 'White Papers', icon: '📋' },
  { id: 'learning', label: 'Learning Paths', icon: '🎓' },
  { id: 'architecture', label: 'Reference Architectures', icon: '🏗️' }
]

// Difficulty levels
const difficultyLevels = [
  { id: 'all', label: 'All Levels' },
  { id: 'beginner', label: 'Beginner' },
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'advanced', label: 'Advanced' }
]

// Main domains
const domains = [
  { id: 'all', label: 'All Domains' },
  { id: 'infrastructure', label: 'Infrastructure' },
  { id: 'security', label: 'Security' },
  { id: 'compliance', label: 'Compliance' },
  { id: 'operations', label: 'Operations' }
]

// Sort options
const sortOptions = [
  { id: 'newest', label: 'Newest First' },
  { id: 'oldest', label: 'Oldest First' },
  { id: 'recently-added', label: 'Recently Added' },
  { id: 'alphabetical', label: 'Alphabetical' },
  { id: 'relevance', label: 'Relevance' }
]

interface KnowledgeHubClientProps {
  initialContent: ContentItem[]
}

export default function KnowledgeHubClient({ initialContent }: KnowledgeHubClientProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFormat, setSelectedFormat] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [selectedDomain, setSelectedDomain] = useState('all')
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(24)
  const [sortBy, setSortBy] = useState('newest')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Extract popular topics from content
  const popularTopics = useMemo(() => {
    const topicCounts: Record<string, number> = {}
    initialContent.forEach(item => {
      if (item.topics && Array.isArray(item.topics)) {
        item.topics.forEach(topic => {
          if (topic && typeof topic === 'string') {
            const trimmedTopic = topic.trim()
            topicCounts[trimmedTopic] = (topicCounts[trimmedTopic] || 0) + 1
          }
        })
      }
    })
    // Get top 12 topics
    return Object.entries(topicCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 12)
      .map(([topic]) => topic)
  }, [initialContent])

  // Filter and sort content based on all criteria
  const filteredContent = useMemo(() => {
    let filtered = initialContent

    // Apply advanced search if query exists
    if (searchQuery) {
      filtered = searchContent(filtered, searchQuery)
    }

    // Apply other filters
    filtered = filtered.filter(item => {
      // Format filter
      if (selectedFormat !== 'all' && item.format !== selectedFormat) return false

      // Difficulty filter
      if (selectedDifficulty !== 'all' && item.difficulty !== selectedDifficulty) return false

      // Domain filter
      if (selectedDomain !== 'all' && item.domain !== selectedDomain) return false

      // Topic filter (case-insensitive with trimming)
      if (selectedTopic) {
        const hasMatchingTopic = item.topics && Array.isArray(item.topics) &&
          item.topics.some(topic =>
            topic.trim().toLowerCase() === selectedTopic.trim().toLowerCase()
          )
        if (!hasMatchingTopic) return false
      }

      return true
    })

    // Apply sorting
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          if (!a.date && !b.date) return 0
          if (!a.date) return 1
          if (!b.date) return -1
          return new Date(b.date).getTime() - new Date(a.date).getTime()

        case 'oldest':
          if (!a.date && !b.date) return 0
          if (!a.date) return 1
          if (!b.date) return -1
          return new Date(a.date).getTime() - new Date(b.date).getTime()

        case 'recently-added':
          if (a.isNew && !b.isNew) return -1
          if (!a.isNew && b.isNew) return 1
          if (!a.date && !b.date) return 0
          if (!a.date) return 1
          if (!b.date) return -1
          return new Date(b.date).getTime() - new Date(a.date).getTime()

        case 'alphabetical':
          return a.title.localeCompare(b.title)

        case 'relevance':
        default:
          return 0
      }
    })

    // Reset to page 1 when filters change
    if (currentPage > Math.ceil(filtered.length / itemsPerPage)) {
      setCurrentPage(1)
    }

    return filtered
  }, [searchQuery, selectedFormat, selectedDifficulty, selectedDomain, selectedTopic, sortBy, initialContent, currentPage, itemsPerPage])

  // Paginated content
  const paginatedContent = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return filteredContent.slice(startIndex, endIndex)
  }, [filteredContent, currentPage, itemsPerPage])

  const totalPages = Math.ceil(filteredContent.length / itemsPerPage)

  // Get format icon
  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'article': return '📄'
      case 'whitepaper': return '📋'
      case 'learning': return '🎓'
      case 'architecture': return '🏗️'
      default: return '📄'
    }
  }

  // Get difficulty color
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800'
      case 'intermediate': return 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800'
      case 'advanced': return 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-800'
      default: return 'bg-slate-100 dark:bg-slate-900/30 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-slate-800'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Mobile Header */}
      <div className="lg:hidden border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Knowledge Hub</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            {sidebarOpen ? <CloseIcon className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 dark:from-white dark:via-blue-300 dark:to-white bg-clip-text text-transparent mb-3">
              Knowledge Hub
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              One place for all AI infrastructure and security knowledge.
              Navigate through our comprehensive collection of resources.
            </p>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Left Sidebar Navigation - Two Sizes Smaller */}
        <div className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-r border-slate-200 dark:border-slate-700 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 shadow-xl
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="h-full flex flex-col">
            {/* Sidebar Header */}
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
              <div className="lg:hidden flex items-center justify-between mb-3">
                <h2 className="text-base font-semibold text-slate-900 dark:text-white">Navigation</h2>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-1.5 rounded-lg hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <CloseIcon className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search knowledge..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-8 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <X className="h-3.5 w-3.5 text-slate-400" />
                  </button>
                )}
              </div>
            </div>

            {/* Navigation Tree */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Content Type Navigation */}
              <div>
                <h3 className="text-xs font-semibold text-slate-900 dark:text-white mb-2 uppercase tracking-wider">Content Type</h3>
                <div className="space-y-1.5">
                  {contentFormats.map(format => (
                    <button
                      key={format.id}
                      onClick={() => setSelectedFormat(format.id)}
                      className={`w-full flex items-center px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${selectedFormat === format.id
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:shadow-md'
                        }`}
                    >
                      <span className="mr-2 text-base">{format.icon}</span>
                      {format.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Domain Navigation */}
              <div>
                <h3 className="text-xs font-semibold text-slate-900 dark:text-white mb-2 uppercase tracking-wider">Domains</h3>
                <div className="space-y-1.5">
                  {domains.map(domain => (
                    <button
                      key={domain.id}
                      onClick={() => setSelectedDomain(domain.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${selectedDomain === domain.id
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                        : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:shadow-md'
                        }`}
                    >
                      {domain.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Difficulty Filter */}
              <div>
                <h3 className="text-xs font-semibold text-slate-900 dark:text-white mb-2 uppercase tracking-wider">Level</h3>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                >
                  {difficultyLevels.map(level => (
                    <option key={level.id} value={level.id}>{level.label}</option>
                  ))}
                </select>
              </div>

              {/* Sort Options */}
              <div>
                <h3 className="text-xs font-semibold text-slate-900 dark:text-white mb-2 uppercase tracking-wider">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                >
                  {sortOptions.map(option => (
                    <option key={option.id} value={option.id}>{option.label}</option>
                  ))}
                </select>
              </div>

              {/* Trending Topics */}
              {popularTopics.length > 0 && (
                <div>
                  <h3 className="text-xs font-semibold text-slate-900 dark:text-white mb-2 uppercase tracking-wider">Trending</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {popularTopics.slice(0, 6).map(topic => (
                      <button
                        key={topic}
                        onClick={() => setSelectedTopic(selectedTopic === topic ? null : topic)}
                        className={`inline-flex items-center px-2.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${selectedTopic === topic
                          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                          : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 hover:shadow-md'
                          }`}
                      >
                        <Tag className="h-2.5 w-2.5 mr-1" />
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Results count */}
              <div className="text-xs text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <span>{filteredContent.length} of {initialContent.length} items</span>
                  {selectedTopic && (
                    <button
                      onClick={() => setSelectedTopic(null)}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline text-xs"
                    >
                      Clear topic
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* RSS Feed Link */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800/50 dark:to-blue-900/20">
              <Link
                href="/api/rss"
                className="inline-flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Rss className="h-3.5 w-3.5" />
                RSS Feed
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content Area - One Size Smaller */}
        <div className="flex-1 p-4 lg:p-8">
          <div className="max-w-5xl mx-auto">
            {/* Mobile Search (hidden on desktop) */}
            <div className="lg:hidden mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                />
              </div>
            </div>

            {/* Content Grid */}
            {filteredContent.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
                  {paginatedContent.map(item => {
                    return (
                      <div
                        key={item.id}
                        className="group cursor-pointer bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden"
                      >
                        {/* Header */}
                        <div className="p-4 pb-3">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-2.5">
                              <div className="p-1.5 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30">
                                <span className="text-xl">{getFormatIcon(item.format)}</span>
                              </div>
                              <span className="text-xs font-medium text-slate-600 dark:text-slate-400 capitalize">
                                {item.format}
                              </span>
                            </div>
                            {item.isNew && (
                              <span className="px-2.5 py-1 text-xs font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full shadow-lg shadow-emerald-500/25">
                                NEW
                              </span>
                            )}
                          </div>

                          {/* Title */}
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2.5 leading-tight transition-colors">
                            {item.title}
                          </h3>

                          {/* Description */}
                          <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 line-clamp-3 leading-relaxed">
                            {item.description}
                          </p>

                          {/* Topics */}
                          {item.topics.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mb-3">
                              {item.topics.slice(0, 3).map(topic => (
                                <span
                                  key={topic}
                                  className="px-2.5 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-600"
                                >
                                  {topic}
                                </span>
                              ))}
                              {item.topics.length > 3 && (
                                <span className="px-2.5 py-1 text-xs text-slate-500 dark:text-slate-500">
                                  +{item.topics.length - 3}
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Footer */}
                        <div className="px-4 pb-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                              <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${getDifficultyColor(item.difficulty)}`}>
                                {item.difficulty}
                              </span>
                              <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
                                <Clock className="h-3 w-3 mr-1" />
                                {item.readTime}
                              </div>
                            </div>
                            <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-all group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="mt-10 flex items-center justify-center gap-2.5">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                      className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
                    >
                      <ChevronLeft className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                    </button>

                    <div className="flex gap-1.5">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => {
                        if (
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        ) {
                          return (
                            <button
                              key={page}
                              onClick={() => setCurrentPage(page)}
                              className={`px-3 py-2.5 rounded-lg transition-all duration-200 ${page === currentPage
                                ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/25'
                                : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 shadow-sm'
                                }`}
                            >
                              {page}
                            </button>
                          )
                        }
                        if (page === currentPage - 2 || page === currentPage + 2) {
                          return <span key={page} className="px-3 py-2.5 text-slate-400">...</span>
                        }
                        return null
                      })}
                    </div>

                    <button
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                      className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-sm"
                    >
                      <ChevronRight className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-slate-100 to-blue-100 dark:from-slate-800 dark:to-blue-900 flex items-center justify-center">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2.5">
                    No content found
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-5">
                    Try adjusting your filters or search terms.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('')
                      setSelectedFormat('all')
                      setSelectedDifficulty('all')
                      setSelectedDomain('all')
                      setSelectedTopic(null)
                    }}
                    className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 shadow-lg shadow-blue-500/25"
                  >
                    Clear all filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-slate-200 dark:border-slate-700 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <NewsletterSignup />
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}