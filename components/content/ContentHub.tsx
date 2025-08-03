'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { Search, Filter, Grid, List, BookOpen, FileText, Newspaper, Star, Clock, User, Tag, ChevronRight, ArrowRight, Shield, Brain, Target, Lock, Eye, Code, AlertTriangle } from 'lucide-react'
import { ContentFilter, SearchResult, ContentCategory, ContentTag, LearningPath } from '@/lib/content-types'
import { contentManager } from '@/lib/content-manager'
import ContentCard from './ContentCard'
import LearningPathCard from './LearningPathCard'

interface ContentHubProps {
  initialView?: 'grid' | 'list'
  showFilters?: boolean
  featuredOnly?: boolean
  contentType?: 'all' | 'blog' | 'learning'
}

export default function ContentHub({
  initialView = 'grid',
  showFilters = true,
  featuredOnly = false,
  contentType = 'all'
}: ContentHubProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [filters, setFilters] = useState<ContentFilter>({
    type: 'all',
    sortBy: 'date',
    sortOrder: 'desc'
  })
  const [view, setView] = useState<'grid' | 'list'>(initialView)
  const [showFiltersPanel, setShowFiltersPanel] = useState(false)
  const [results, setResults] = useState<SearchResult[]>([])
  const [categories, setCategories] = useState<ContentCategory[]>([])
  const [tags, setTags] = useState<ContentTag[]>([])
  const [learningPaths, setLearningPaths] = useState<LearningPath[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true)
      try {
        setCategories(contentManager.getCategories())
        setTags(contentManager.getTags())
        setLearningPaths(contentManager.getLearningPaths())

        if (featuredOnly) {
          const featured = contentManager.getFeaturedContent()
          setResults(featured.map(content => ({
            content,
            score: 1,
            highlights: [],
            matchType: 'title' as const
          })))
        } else {
          performSearch()
        }
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [featuredOnly])

  // Perform search when query or filters change
  useEffect(() => {
    if (!featuredOnly) {
      performSearch()
    }
  }, [searchQuery, filters, contentType])

  const performSearch = () => {
    setIsLoading(true)
    try {
      if (searchQuery.trim() || Object.keys(filters).some(key => filters[key as keyof ContentFilter])) {
        const searchResults = contentManager.search(searchQuery, filters)
        // Filter results based on contentType
        const filteredResults = contentType === 'blog' 
          ? searchResults.filter(result => result.content.type === 'blog')
          : contentType === 'learning'
          ? searchResults.filter(result => result.content.type === 'learning')
          : searchResults
        setResults(filteredResults)
      } else {
        // Show recent content when no search/filters
        let recent
        if (contentType === 'blog') {
          recent = contentManager.getContentByType('blog')
        } else if (contentType === 'learning') {
          recent = contentManager.getContentByType('learning')
        } else {
          recent = contentManager.getRecentContent(20)
        }
        setResults(recent.map(content => ({
          content,
          score: 1,
          highlights: [],
          matchType: 'title' as const
        })))
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleFilterChange = (newFilters: Partial<ContentFilter>) => {
    setFilters(prev => ({ ...prev, ...newFilters }))
  }

  const clearFilters = () => {
    setFilters({
      type: 'all',
      sortBy: 'date',
      sortOrder: 'desc'
    })
    setSearchQuery('')
  }

  const resultsByType = useMemo(() => {
    return results.reduce((acc, result) => {
      const type = result.content.type
      // For blog page, only show blog content
      if (contentType === 'blog' && type !== 'blog') return acc
      // For learning page, only show learning content
      if (contentType === 'learning' && type !== 'learning') return acc
      // For all content, show everything
      if (contentType === 'all') {
        if (!acc[type]) acc[type] = []
        acc[type].push(result)
      }
      return acc
    }, {} as Record<string, SearchResult[]>)
  }, [results, contentType])

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'learning': return <BookOpen className="h-4 w-4" />
      case 'blog': return <Newspaper className="h-4 w-4" />
      case 'whitepaper': return <FileText className="h-4 w-4" />
      default: return <BookOpen className="h-4 w-4" />
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'learning': return 'Learning'
      case 'blog': return 'Blog Posts'

      default: return type
    }
  }

  const getPathIcon = (pathId: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      'ai-security-101': <Shield className="h-8 w-8 text-blue-600" />,
      'red-team-testing': <Target className="h-8 w-8 text-red-600" />,
      'agent-monitoring': <Eye className="h-8 w-8 text-green-600" />,
      'compliance-governance': <Lock className="h-8 w-8 text-purple-600" />,
      'integration-patterns': <Code className="h-8 w-8 text-orange-600" />,
      'performance-optimization': <Brain className="h-8 w-8 text-indigo-600" />
    }
    return iconMap[pathId] || <BookOpen className="h-8 w-8 text-gray-600" />
  }

  const getPathColor = (pathId: string) => {
    const colorMap: Record<string, string> = {
      'ai-security-101': 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800',
      'red-team-testing': 'from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200 dark:border-red-800',
      'agent-monitoring': 'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800',
      'compliance-governance': 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800',
      'integration-patterns': 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800',
      'performance-optimization': 'from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 border-indigo-200 dark:border-indigo-800'
    }
    return colorMap[pathId] || 'from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20 border-gray-200 dark:border-gray-800'
  }

  const getPathLink = (pathId: string) => {
    const linkMap: Record<string, string> = {
      'ai-security-101': '/learn/trad-vs-ai',
      'red-team-testing': '/learn/red-team',
      'agent-monitoring': '/learn/agent-monitoring',
      'compliance-governance': '/learn/compliance',
      'integration-patterns': '/learn/integrations',
      'performance-optimization': '/learn/optimization'
    }
    return linkMap[pathId] || '/learn'
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
          {contentType === 'blog' ? 'Blog' : 'Learn AI Security'}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl">
          {contentType === 'blog'
            ? 'Latest insights, news, and updates from the perfecXion.ai team. Explore our expert analysis, case studies, and industry trends in AI security.'
            : 'Master AI security with our comprehensive learning resources, tutorials, and best practices. Explore our AI Security 101 series, whitepapers, and interactive learning paths designed to help you build robust, secure AI systems.'
          }
        </p>
      </div>

      {/* Learning Paths - Enhanced Design */}
      {contentType !== 'blog' && !searchQuery && !Object.keys(filters).some(key => filters[key as keyof ContentFilter] && key !== 'sortBy' && key !== 'sortOrder') && (
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Learning Paths
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Structured learning journeys for comprehensive AI security mastery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningPaths.map(path => (
              <Link key={path.id} href={getPathLink(path.id)} className="group">
                <div className={`bg-gradient-to-br ${getPathColor(path.id)} border rounded-xl p-8 h-full transition-all duration-300 group-hover:shadow-lg group-hover:scale-[1.02]`}>
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      {getPathIcon(path.id)}
                      <div>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${path.difficulty === 'beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                          path.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400' :
                            'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                          }`}>
                          {path.difficulty}
                        </span>
                        {path.featured && (
                          <Star className="h-4 w-4 text-yellow-500 fill-current ml-2" />
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="h-4 w-4" />
                      {path.estimatedDuration}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {path.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {path.description}
                  </p>

                  {/* Learning Outcomes */}
                  <div className="mb-6">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                      What you'll learn:
                    </p>
                    <div className="space-y-2">
                      {path.outcomes.slice(0, 3).map((outcome, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {outcome}
                          </span>
                        </div>
                      ))}
                      {path.outcomes.length > 3 && (
                        <p className="text-sm text-gray-500 dark:text-gray-500 ml-3.5">
                          +{path.outcomes.length - 3} more outcomes
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Prerequisites */}
                  {path.prerequisites && path.prerequisites.length > 0 && (
                    <div className="mb-6">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Prerequisites:
                      </p>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {path.prerequisites.join(', ')}
                      </div>
                    </div>
                  )}

                  {/* Progress/Stats */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{path.sections.length} sections</span>
                      </div>
                    </div>

                    <div className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                      Start Learning
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Search and Controls */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            {showFilters && (
              <button
                onClick={() => setShowFiltersPanel(!showFiltersPanel)}
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
                <ChevronRight className={`h-4 w-4 ml-2 transform transition-transform ${showFiltersPanel ? 'rotate-90' : ''}`} />
              </button>
            )}

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {results.length} results
              </span>
              {(Object.keys(filters).some(key => filters[key as keyof ContentFilter] && key !== 'sortBy' && key !== 'sortOrder') || searchQuery) && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                >
                  Clear all
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setView('grid')}
              className={`p-2 rounded-lg ${view === 'grid'
                ? 'bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setView('list')}
              className={`p-2 rounded-lg ${view === 'list'
                ? 'bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Filters Panel */}
        {showFiltersPanel && (
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">Filters</h3>
              <p className="text-gray-600 dark:text-gray-400">Advanced filtering options will be available here.</p>
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        </div>
      ) : results.length === 0 ? (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No results found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Try adjusting your search terms or filters
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(resultsByType).map(([type, typeResults]) => (
            <div key={type}>
              <div className="flex items-center gap-2 mb-4">
                {getTypeIcon(type)}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {getTypeLabel(type)}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ({typeResults.length})
                </span>
              </div>

              <div className={view === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-4'
              }>
                {typeResults.map(result => (
                  <ContentCard
                    key={result.content.slug}
                    content={result.content}
                    view={view}
                    highlights={result.highlights}
                    showType={false}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}