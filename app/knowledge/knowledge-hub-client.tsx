'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, BookOpen, FileText, Zap, Building, X, Clock, ChevronRight, Tag, ChevronLeft, Rss, Calendar, TrendingUp, ChevronDown } from 'lucide-react'
import React from 'react'
import { ContentItem } from '@/lib/content-loader'
import { searchContent, findRelatedContent } from '@/lib/search-utils'
import { NewsletterSignup } from '@/components/newsletter-signup'

// Content types/formats
const contentFormats = [
  { id: 'all', label: 'All Content', icon: null },
  { id: 'article', label: 'Articles', icon: BookOpen },
  { id: 'whitepaper', label: 'White Papers', icon: FileText },
  { id: 'learning', label: 'Learning Paths', icon: Zap },
  { id: 'architecture', label: 'Reference Architectures', icon: Building }
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
  { id: 'newest', label: 'Newest First', icon: Calendar },
  { id: 'oldest', label: 'Oldest First', icon: Calendar },
  { id: 'recently-added', label: 'Recently Added', icon: TrendingUp },
  { id: 'alphabetical', label: 'Alphabetical', icon: null },
  { id: 'relevance', label: 'Relevance', icon: null }
]

// Items per page options
const itemsPerPageOptions = [12, 24, 48, 96]

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
  const [showItemsDropdown, setShowItemsDropdown] = useState(false)

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
          // Sort by date, newest first
          if (!a.date && !b.date) return 0
          if (!a.date) return 1
          if (!b.date) return -1
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        
        case 'oldest':
          // Sort by date, oldest first
          if (!a.date && !b.date) return 0
          if (!a.date) return 1
          if (!b.date) return -1
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        
        case 'recently-added':
          // Sort by isNew flag and then by date
          if (a.isNew && !b.isNew) return -1
          if (!a.isNew && b.isNew) return 1
          if (!a.date && !b.date) return 0
          if (!a.date) return 1
          if (!b.date) return -1
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        
        case 'alphabetical':
          // Sort alphabetically by title
          return a.title.localeCompare(b.title)
        
        case 'relevance':
        default:
          // Keep original order (relevance from search)
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
    switch(format) {
      case 'article': return BookOpen
      case 'whitepaper': return FileText
      case 'learning': return Zap
      case 'architecture': return Building
      default: return BookOpen
    }
  }

  // Get difficulty color
  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'beginner': return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
      case 'intermediate': return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
      case 'advanced': return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
      default: return 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Knowledge Hub
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              One place for all AI infrastructure and security knowledge. 
              Search by topic or filter by your preferred format.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search topics, technologies, or concepts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  <X className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border bg-background/95 backdrop-blur-sm lg:sticky lg:top-[64px] z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Filter buttons */}
          <div className="space-y-4">
            {/* Format filters */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-sm font-medium text-muted-foreground mr-2 hidden sm:inline">Format:</span>
              {contentFormats.map(format => (
                <button
                  key={format.id}
                  onClick={() => setSelectedFormat(format.id)}
                  className={`inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                    selectedFormat === format.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-muted hover:bg-muted/80 text-foreground'
                  }`}
                >
                  {format.icon && React.createElement(format.icon, { className: 'h-3 w-3 sm:h-4 sm:w-4 sm:mr-2' })}
                  <span className={format.icon ? 'hidden sm:inline' : ''}>{format.label}</span>
                </button>
              ))}
            </div>

            {/* Difficulty and Domain filters */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">Level:</span>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="px-3 py-1.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {difficultyLevels.map(level => (
                    <option key={level.id} value={level.id}>{level.label}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">Domain:</span>
                <select
                  value={selectedDomain}
                  onChange={(e) => setSelectedDomain(e.target.value)}
                  className="px-3 py-1.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {domains.map(domain => (
                    <option key={domain.id} value={domain.id}>{domain.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sort and Display Options */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {sortOptions.map(option => (
                    <option key={option.id} value={option.id}>{option.label}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-muted-foreground">Show:</span>
                <div className="relative">
                  <button
                    onClick={() => setShowItemsDropdown(!showItemsDropdown)}
                    className="px-3 py-1.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center gap-2"
                  >
                    {itemsPerPage} items
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {showItemsDropdown && (
                    <div className="absolute top-full mt-1 right-0 bg-background border border-border rounded-lg shadow-lg z-10">
                      {itemsPerPageOptions.map(option => (
                        <button
                          key={option}
                          onClick={() => {
                            setItemsPerPage(option)
                            setShowItemsDropdown(false)
                            setCurrentPage(1)
                          }}
                          className={`block w-full px-4 py-2 text-sm text-left hover:bg-muted transition-colors ${
                            option === itemsPerPage ? 'bg-muted' : ''
                          }`}
                        >
                          {option} items
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Popular topics */}
          {popularTopics.length > 0 && (
            <div className="mt-4">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <span className="text-sm font-medium text-muted-foreground mr-2 hidden sm:inline">Trending:</span>
                <div className="flex flex-wrap justify-center gap-2">
                  {popularTopics.map(topic => (
                    <button
                      key={topic}
                      onClick={() => setSelectedTopic(selectedTopic === topic ? null : topic)}
                      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium transition-colors min-h-[32px] ${
                        selectedTopic === topic
                          ? 'bg-blue-600 text-white'
                          : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                      }`}
                    >
                      <Tag className="h-3 w-3 mr-1 flex-shrink-0" />
                      <span className="whitespace-nowrap">{topic}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Results count */}
          <div className="mt-4 text-sm text-muted-foreground text-center">
            Showing {filteredContent.length} of {initialContent.length} items
            {selectedTopic && (
              <button
                onClick={() => setSelectedTopic(null)}
                className="ml-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                Clear topic filter
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* RSS Feed Link */}
          <div className="mb-6 flex justify-end">
            <Link
              href="/api/rss"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Rss className="h-4 w-4" />
              RSS Feed
            </Link>
          </div>
          {filteredContent.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {paginatedContent.map(item => {
                const Icon = getFormatIcon(item.format)
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="group block p-4 sm:p-6 bg-background rounded-lg border border-border hover:border-blue-500/50 hover:shadow-lg transition-all duration-200 touch-manipulation"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded bg-muted">
                          <Icon className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground capitalize">
                          {item.format}
                        </span>
                      </div>
                      {item.isNew && (
                        <span className="px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded">
                          NEW
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Topics */}
                    {item.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {item.topics.slice(0, 3).map(topic => (
                          <span
                            key={topic}
                            className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                          >
                            {topic}
                          </span>
                        ))}
                        {item.topics.length > 3 && (
                          <span className="px-2 py-1 text-xs text-muted-foreground">
                            +{item.topics.length - 3}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-1 text-xs font-medium rounded ${getDifficultyColor(item.difficulty)}`}>
                          {item.difficulty}
                        </span>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {item.readTime}
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all group-hover:translate-x-1" />
                    </div>
                  </Link>
                )
              })}
            </div>
            
            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-8 flex items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-border bg-background hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                
                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => {
                    // Show first page, last page, current page, and pages around current
                    if (
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-3 py-1 rounded-lg transition-colors ${
                            page === currentPage
                              ? 'bg-blue-600 text-white'
                              : 'bg-background border border-border hover:bg-muted'
                          }`}
                        >
                          {page}
                        </button>
                      )
                    }
                    // Show ellipsis for gaps
                    if (page === currentPage - 2 || page === currentPage + 2) {
                      return <span key={page} className="px-2 py-1">...</span>
                    }
                    return null
                  })}
                </div>
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-border bg-background hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">
                No content found matching your filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedFormat('all')
                  setSelectedDifficulty('all')
                  setSelectedDomain('all')
                  setSelectedTopic(null)
                }}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
          
          {/* Newsletter Signup */}
          <div className="mt-16">
            <NewsletterSignup />
          </div>
        </div>
      </section>
    </div>
  )
}