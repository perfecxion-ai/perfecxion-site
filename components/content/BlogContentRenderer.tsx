'use client'

import { useState, useEffect } from 'react'

interface BlogContentRendererProps {
  slug: string
}

export default function BlogContentRenderer({ slug }: BlogContentRendererProps) {
  const [content, setContent] = useState<string>('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadContent = async () => {
      try {
        // Fetch processed content from API
        const response = await fetch(`/api/blog-content/${slug}`)
        if (response.ok) {
          const data = await response.json()
          setContent(data.content)
        } else {
          console.error('Failed to load blog content')
        }
      } catch (error) {
        console.error('Error loading blog content:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadContent()
  }, [slug])

  if (isLoading) {
    return (
      <div className="animate-pulse space-y-4">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
        <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5"></div>
      </div>
    )
  }

  return (
    <div 
      className="prose prose-lg dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}