'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, X, Clock, TrendingUp, FileText, Book, Package, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface SearchResult {
  id: string
  title: string
  description: string
  url: string
  type: 'page' | 'blog' | 'docs' | 'product' | 'whitepaper'
  category?: string
  date?: string
}

interface MobileSearchProps {
  onClose: () => void
}

export default function MobileSearch({ onClose }: MobileSearchProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [popularSearches] = useState(['ADAPT-AI', 'Security', 'Compliance', 'Documentation'])
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Focus input when component mounts
    inputRef.current?.focus()

    // Load recent searches from localStorage
    const saved = localStorage.getItem('recentSearches')
    if (saved) {
      setRecentSearches(JSON.parse(saved).slice(0, 5))
    }
  }, [])

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    setIsSearching(true)
    
    // Simulate search delay
    await new Promise(resolve => setTimeout(resolve, 300))

    // Mock search results - in production, this would call your search API
    const mockResults: SearchResult[] = [
      {
        id: '1',
        title: 'ADAPT-AI Security Platform',
        description: 'Advanced AI threat detection and response system',
        url: '/products/adapt-ai',
        type: 'product' as const,
        category: 'Products'
      },
      {
        id: '2',
        title: 'Getting Started with perfecXion',
        description: 'Learn how to integrate our security solutions',
        url: '/docs/quick-start',
        type: 'docs' as const,
        category: 'Documentation'
      },
      {
        id: '3',
        title: 'AI Security Best Practices',
        description: 'Essential guidelines for securing AI systems',
        url: '/blog/ai-security-best-practices',
        type: 'blog' as const,
        date: '2024-01-15'
      }
    ].filter(result => 
      result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.description.toLowerCase().includes(searchQuery.toLowerCase())
    )

    setResults(mockResults)
    setIsSearching(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      // Save to recent searches
      const updated = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5)
      setRecentSearches(updated)
      localStorage.setItem('recentSearches', JSON.stringify(updated))
      
      // Navigate to search results page
      window.location.href = `/search?q=${encodeURIComponent(query)}`
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
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Search panel */}
      <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-900 shadow-xl">
        {/* Search header */}
        <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800">
          <form onSubmit={handleSubmit} className="flex items-center gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  handleSearch(e.target.value)
                }}
                placeholder="Search products, docs, blog..."
                className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close search"
            >
              <X className="h-5 w-5" />
            </button>
          </form>
        </div>

        {/* Search content */}
        <div className="max-h-[calc(100vh-80px)] overflow-y-auto">
          {/* Search results */}
          {query && results.length > 0 && (
            <div className="px-4 py-3">
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                Results
              </h3>
              <div className="space-y-1">
                {results.map((result) => (
                  <Link
                    key={result.id}
                    href={result.url}
                    className="flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    onClick={onClose}
                  >
                    <div className="flex-shrink-0 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                      {getIcon(result.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {result.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 line-clamp-2">
                        {result.description}
                      </p>
                      {result.category && (
                        <span className="inline-block mt-1 text-xs text-primary-600 dark:text-primary-400">
                          {result.category}
                        </span>
                      )}
                    </div>
                    <ArrowRight className="flex-shrink-0 h-4 w-4 text-gray-400" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* No results */}
          {query && results.length === 0 && !isSearching && (
            <div className="px-4 py-8 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                No results found for "{query}"
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                Try searching for products, documentation, or blog posts
              </p>
            </div>
          )}

          {/* Recent searches */}
          {!query && recentSearches.length > 0 && (
            <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800">
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                Recent Searches
              </h3>
              <div className="space-y-1">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setQuery(search)
                      handleSearch(search)
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors text-left"
                  >
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{search}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Popular searches */}
          {!query && (
            <div className="px-4 py-3">
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                Popular Searches
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((search) => (
                  <button
                    key={search}
                    onClick={() => {
                      setQuery(search)
                      handleSearch(search)
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 transition-colors"
                  >
                    <TrendingUp className="h-3 w-3" />
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}