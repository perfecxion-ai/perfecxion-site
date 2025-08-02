'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import SearchBar from '@/components/search/SearchBar'
import SearchResults from '@/components/search/SearchResults'
import { SearchProvider } from '@/components/search/SearchProvider'

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-width container-padding py-8">
        {/* Search header */}
        <div className="mb-8">
          <SearchBar
            placeholder="Search products, documentation, blog posts..."
            className="max-w-2xl mx-auto"
            autoFocus
            showSuggestions={false}
          />
        </div>

        {/* Search results */}
        {query && <SearchResults query={query} />}

        {/* Empty state */}
        {!query && (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              What are you looking for?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              Search for products, documentation, blog posts, and more.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <SearchProvider>
      <Suspense fallback={
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <div className="text-gray-600 dark:text-gray-400">Loading search...</div>
        </div>
      }>
        <SearchContent />
      </Suspense>
    </SearchProvider>
  )
}