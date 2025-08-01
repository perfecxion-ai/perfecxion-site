'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { 
  SearchDocument, 
  SearchIndex, 
  buildSearchIndex, 
  generateSearchDocuments,
  search as performSearch 
} from '@/lib/search-index'

interface SearchContextType {
  isIndexing: boolean
  search: (query: string, options?: SearchOptions) => SearchDocument[]
  recentSearches: string[]
  addRecentSearch: (query: string) => void
  clearRecentSearches: () => void
  popularSearches: string[]
}

interface SearchOptions {
  limit?: number
  type?: SearchDocument['type']
  fuzzy?: boolean
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function useSearch() {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearch must be used within SearchProvider')
  }
  return context
}

interface SearchProviderProps {
  children: ReactNode
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [searchIndex, setSearchIndex] = useState<SearchIndex | null>(null)
  const [isIndexing, setIsIndexing] = useState(true)
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [popularSearches] = useState([
    'ADAPT-AI',
    'Security',
    'Compliance',
    'Documentation',
    'Red Team',
    'Vulnerability',
    'Integration',
    'API'
  ])

  // Initialize search index
  useEffect(() => {
    const initializeIndex = async () => {
      setIsIndexing(true)
      try {
        const documents = await generateSearchDocuments()
        const index = buildSearchIndex(documents)
        setSearchIndex(index)
      } catch (error) {
        console.error('Failed to build search index:', error)
      } finally {
        setIsIndexing(false)
      }
    }

    initializeIndex()
  }, [])

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches')
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved))
      } catch (e) {
        console.error('Failed to load recent searches:', e)
      }
    }
  }, [])

  const search = (query: string, options?: SearchOptions): SearchDocument[] => {
    if (!searchIndex || !query.trim()) return []
    return performSearch(query, searchIndex, options)
  }

  const addRecentSearch = (query: string) => {
    if (!query.trim()) return
    
    const updated = [
      query,
      ...recentSearches.filter(s => s.toLowerCase() !== query.toLowerCase())
    ].slice(0, 10)
    
    setRecentSearches(updated)
    localStorage.setItem('recentSearches', JSON.stringify(updated))
  }

  const clearRecentSearches = () => {
    setRecentSearches([])
    localStorage.removeItem('recentSearches')
  }

  const value: SearchContextType = {
    isIndexing,
    search,
    recentSearches,
    addRecentSearch,
    clearRecentSearches,
    popularSearches
  }

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  )
}