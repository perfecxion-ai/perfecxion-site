'use client'

import { useEffect, useState } from 'react'
import { Clock, TrendingUp, FileText, Book, Package, File, ArrowRight } from 'lucide-react'
import { useSearch } from './SearchProvider'
import { SearchDocument } from '@/lib/search-index'

interface SearchSuggestionsProps {
  query: string
  onSelect: (suggestion: string) => void
  onClose: () => void
}

export default function SearchSuggestions({ query, onSelect, onClose }: SearchSuggestionsProps) {
  const { search, recentSearches, popularSearches } = useSearch()
  const [results, setResults] = useState<SearchDocument[]>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)

  useEffect(() => {
    if (query) {
      const searchResults = search(query, { limit: 5, fuzzy: true })
      setResults(searchResults)
    } else {
      setResults([])
    }
    setSelectedIndex(-1)
  }, [query, search])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const totalItems = results.length + 
        (query ? 0 : recentSearches.length + popularSearches.length)

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setSelectedIndex(prev => (prev + 1) % totalItems)
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelectedIndex(prev => (prev - 1 + totalItems) % totalItems)
          break
        case 'Enter':
          e.preventDefault()
          if (selectedIndex >= 0) {
            handleItemClick(selectedIndex)
          }
          break
        case 'Escape':
          onClose()
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex, results, recentSearches, popularSearches, query])

  const handleItemClick = (index: number) => {
    if (query) {
      // Results are shown
      if (index < results.length) {
        window.location.href = results[index].url
      }
    } else {
      // Recent and popular searches are shown
      if (index < recentSearches.length) {
        onSelect(recentSearches[index])
      } else {
        const popularIndex = index - recentSearches.length
        onSelect(popularSearches[popularIndex])
      }
    }
  }

  const getIcon = (type: string) => {
    switch (type) {
      case 'product':
        return <Package className="h-4 w-4" />
      case 'blog':
        return <FileText className="h-4 w-4" />
      case 'docs':
        return <Book className="h-4 w-4" />
      case 'whitepaper':
        return <File className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const getCategoryColor = (type: string) => {
    switch (type) {
      case 'product':
        return 'text-blue-600 dark:text-blue-400'
      case 'blog':
        return 'text-green-600 dark:text-green-400'
      case 'docs':
        return 'text-purple-600 dark:text-purple-400'
      case 'whitepaper':
        return 'text-orange-600 dark:text-orange-400'
      default:
        return 'text-gray-600 dark:text-gray-400'
    }
  }

  let itemIndex = 0

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50 max-h-[400px] overflow-y-auto">
      {/* Search results */}
      {query && results.length > 0 && (
        <div className="p-2">
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-3 py-2">
            Results
          </h3>
          {results.map((result, idx) => {
            const currentIndex = itemIndex++
            return (
              <a
                key={result.id}
                href={result.url}
                className={`
                  flex items-start gap-3 px-3 py-2 rounded-lg transition-colors
                  ${selectedIndex === currentIndex 
                    ? 'bg-gray-100 dark:bg-gray-800' 
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                  }
                `}
                onClick={(e) => {
                  e.preventDefault()
                  handleItemClick(currentIndex)
                }}
              >
                <div className="flex-shrink-0 p-2 bg-gray-100 dark:bg-gray-800 rounded">
                  {getIcon(result.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {result.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-1">
                    {result.description}
                  </p>
                  <span className={`inline-block mt-1 text-xs ${getCategoryColor(result.type)}`}>
                    {result.category || result.type}
                  </span>
                </div>
                <ArrowRight className="flex-shrink-0 h-4 w-4 text-gray-400" />
              </a>
            )
          })}
          
          {/* View all results */}
          <button
            onClick={() => onSelect(query)}
            className={`
              w-full text-left px-3 py-2 mt-1 rounded-lg transition-colors
              text-sm text-primary-600 dark:text-primary-400
              ${selectedIndex === results.length 
                ? 'bg-gray-100 dark:bg-gray-800' 
                : 'hover:bg-gray-50 dark:hover:bg-gray-800'
              }
            `}
          >
            View all results for "{query}"
          </button>
        </div>
      )}

      {/* No results */}
      {query && results.length === 0 && (
        <div className="p-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            No results found for "{query}"
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
            Try a different search term
          </p>
        </div>
      )}

      {/* Recent searches */}
      {!query && recentSearches.length > 0 && (
        <div className="p-2 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-3 py-2">
            Recent
          </h3>
          {recentSearches.slice(0, 3).map((search, idx) => {
            const currentIndex = itemIndex++
            return (
              <button
                key={idx}
                onClick={() => handleItemClick(currentIndex)}
                className={`
                  w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left
                  ${selectedIndex === currentIndex 
                    ? 'bg-gray-100 dark:bg-gray-800' 
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                  }
                `}
              >
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{search}</span>
              </button>
            )
          })}
        </div>
      )}

      {/* Popular searches */}
      {!query && (
        <div className="p-2">
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-3 py-2">
            Popular
          </h3>
          <div className="grid grid-cols-2 gap-2 px-3">
            {popularSearches.slice(0, 6).map((search, idx) => {
              const currentIndex = itemIndex++
              return (
                <button
                  key={search}
                  onClick={() => handleItemClick(currentIndex)}
                  className={`
                    flex items-center gap-2 px-3 py-1.5 rounded-full text-sm
                    bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300
                    transition-all duration-200
                    ${selectedIndex === currentIndex 
                      ? 'ring-2 ring-primary-500 bg-gray-200 dark:bg-gray-700' 
                      : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                    }
                  `}
                >
                  <TrendingUp className="h-3 w-3" />
                  {search}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}