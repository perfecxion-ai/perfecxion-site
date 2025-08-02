'use client'

import { useState, useEffect, useMemo } from 'react'
import { Search, Filter, Grid, List, BookOpen, FileText, Newspaper, Star, Clock, User, Tag, ChevronDown } from 'lucide-react'
import { ContentFilter, SearchResult, ContentCategory, ContentTag, LearningPath } from '@/lib/content-types'
import { contentManager } from '@/lib/content-manager'
import ContentCard from './ContentCard'
import { default as FilterComponent } from './ContentFilter'
import LearningPathCard from './LearningPathCard'

interface ContentHubProps {
  initialView?: 'grid' | 'list'
  showFilters?: boolean
  featuredOnly?: boolean
}

export default function ContentHub({ 
  initialView = 'grid', 
  showFilters = true,
  featuredOnly = false 
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
  }, [searchQuery, filters])

  const performSearch = () => {
    setIsLoading(true)
    try {
      if (searchQuery.trim() || Object.keys(filters).some(key => filters[key as keyof ContentFilter])) {
        const searchResults = contentManager.search(searchQuery, filters)
        setResults(searchResults)
      } else {
        // Show recent content when no search/filters
        const recent = contentManager.getRecentContent(20)
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
      if (!acc[type]) acc[type] = []
      acc[type].push(result)
      return acc
    }, {} as Record<string, SearchResult[]>)
  }, [results])

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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Resource Center
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          Explore our comprehensive collection of AI security resources, from beginner guides to advanced research papers.
        </p>
      </div>

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
                <ChevronDown className={`h-4 w-4 ml-2 transform transition-transform ${showFiltersPanel ? 'rotate-180' : ''}`} />
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
            <FilterComponent
              filters={filters}
              categories={categories}
              tags={tags}
              onChange={handleFilterChange}
            />
          </div>
        )}
      </div>

      {/* Learning Paths */}
      {!searchQuery && !Object.keys(filters).some(key => filters[key as keyof ContentFilter] && key !== 'sortBy' && key !== 'sortOrder') && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Learning Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningPaths.map(path => (
              <LearningPathCard key={path.id} path={path} />
            ))}
          </div>
        </div>
      )}

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