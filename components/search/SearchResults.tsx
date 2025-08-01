'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FileText, Book, Package, File, Calendar, Tag, Filter, X } from 'lucide-react'
import { useSearch } from './SearchProvider'
import { SearchDocument, highlightSearchTerms } from '@/lib/search-index'

interface SearchResultsProps {
  query: string
  initialResults?: SearchDocument[]
}

export default function SearchResults({ query, initialResults = [] }: SearchResultsProps) {
  const { search } = useSearch()
  const [results, setResults] = useState<SearchDocument[]>(initialResults)
  const [filteredResults, setFilteredResults] = useState<SearchDocument[]>(initialResults)
  const [selectedType, setSelectedType] = useState<SearchDocument['type'] | 'all'>('all')
  const [sortBy, setSortBy] = useState<'relevance' | 'date'>('relevance')
  const [page, setPage] = useState(1)
  const resultsPerPage = 10

  useEffect(() => {
    if (query) {
      const searchResults = search(query, { limit: 100, fuzzy: true })
      setResults(searchResults)
      setFilteredResults(searchResults)
      setPage(1)
    }
  }, [query, search])

  useEffect(() => {
    // Apply filters
    let filtered = [...results]
    
    // Type filter
    if (selectedType !== 'all') {
      filtered = filtered.filter(r => r.type === selectedType)
    }
    
    // Sort
    if (sortBy === 'date') {
      filtered.sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0
        const dateB = b.date ? new Date(b.date).getTime() : 0
        return dateB - dateA
      })
    }
    
    setFilteredResults(filtered)
    setPage(1)
  }, [selectedType, sortBy, results])

  const getIcon = (type: string) => {
    switch (type) {
      case 'product':
        return <Package className="h-5 w-5" />
      case 'blog':
        return <FileText className="h-5 w-5" />
      case 'docs':
        return <Book className="h-5 w-5" />
      case 'whitepaper':
        return <File className="h-5 w-5" />
      default:
        return <FileText className="h-5 w-5" />
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'product':
        return 'Product'
      case 'blog':
        return 'Blog Post'
      case 'docs':
        return 'Documentation'
      case 'whitepaper':
        return 'White Paper'
      case 'learn':
        return 'Learning'
      default:
        return 'Page'
    }
  }

  const typeCounts = results.reduce((acc, result) => {
    acc[result.type] = (acc[result.type] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const paginatedResults = filteredResults.slice(
    (page - 1) * resultsPerPage,
    page * resultsPerPage
  )

  const totalPages = Math.ceil(filteredResults.length / resultsPerPage)

  return (
    <div className="max-w-4xl mx-auto">
      {/* Results header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Search Results
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {filteredResults.length} results for "{query}"
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters sidebar */}
        <aside className="lg:w-64 space-y-4">
          {/* Type filter */}
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <h3 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter by Type
            </h3>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedType('all')}
                className={`
                  w-full text-left px-3 py-2 rounded-lg text-sm transition-colors
                  ${selectedType === 'all'
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }
                `}
              >
                All Results ({results.length})
              </button>
              {Object.entries(typeCounts).map(([type, count]) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type as SearchDocument['type'])}
                  className={`
                    w-full text-left px-3 py-2 rounded-lg text-sm transition-colors
                    ${selectedType === type
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                    }
                  `}
                >
                  {getTypeLabel(type)} ({count})
                </button>
              ))}
            </div>
          </div>

          {/* Sort options */}
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <h3 className="font-medium text-gray-900 dark:text-white mb-3">
              Sort By
            </h3>
            <div className="space-y-2">
              <button
                onClick={() => setSortBy('relevance')}
                className={`
                  w-full text-left px-3 py-2 rounded-lg text-sm transition-colors
                  ${sortBy === 'relevance'
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }
                `}
              >
                Relevance
              </button>
              <button
                onClick={() => setSortBy('date')}
                className={`
                  w-full text-left px-3 py-2 rounded-lg text-sm transition-colors
                  ${sortBy === 'date'
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }
                `}
              >
                Most Recent
              </button>
            </div>
          </div>
        </aside>

        {/* Results list */}
        <div className="flex-1">
          {paginatedResults.length > 0 ? (
            <div className="space-y-4">
              {paginatedResults.map((result) => (
                <article
                  key={result.id}
                  className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
                >
                  <Link href={result.url} className="block group">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                        {getIcon(result.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          <span dangerouslySetInnerHTML={{ __html: highlightSearchTerms(result.title, query) }} />
                        </h2>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                          <span dangerouslySetInnerHTML={{ __html: highlightSearchTerms(result.description, query) }} />
                        </p>
                        <div className="mt-3 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                          <span className="flex items-center gap-1">
                            <Tag className="h-3 w-3" />
                            {getTypeLabel(result.type)}
                          </span>
                          {result.category && (
                            <span>{result.category}</span>
                          )}
                          {result.date && (
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(result.date).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">
                No results found. Try a different search term or adjust your filters.
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
                  <button
                    key={pageNum}
                    onClick={() => setPage(pageNum)}
                    className={`
                      px-3 py-1 text-sm font-medium rounded-lg transition-colors
                      ${pageNum === page
                        ? 'bg-primary-600 text-white'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }
                    `}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}