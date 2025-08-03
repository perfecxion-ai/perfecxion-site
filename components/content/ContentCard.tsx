'use client'

import Link from 'next/link'
import { Clock, User, Tag, Star, Download, ExternalLink, BookOpen, FileText, Newspaper, Calendar } from 'lucide-react'
import { LearningContent, BlogContent, WhitePaperContent } from '@/lib/content-types'

interface ContentCardProps {
  content: LearningContent | BlogContent | WhitePaperContent
  view: 'grid' | 'list'
  highlights?: string[]
  showType?: boolean
}

export default function ContentCard({ content, view, highlights = [], showType = true }: ContentCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'advanced': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
    }
  }

  const getCategoryColor = (category: string) => {
  switch (category?.toLowerCase()) {
    case 'ai security': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
    case 'threat analysis': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
    case 'best practices': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
    case 'product updates': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
    case 'research': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'
    case 'security automation': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400'
    case 'strategic vision': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
  }
}

  const getTypeIcon = () => {
    switch (content.type) {
      case 'learning': return <BookOpen className="h-4 w-4" />
      case 'blog': return <Newspaper className="h-4 w-4" />
      case 'whitepaper': return <FileText className="h-4 w-4" />
      default: return <BookOpen className="h-4 w-4" />
    }
  }

  const getTypeLabel = () => {
    switch (content.type) {
      case 'learning': return 'Learning'
      case 'blog': return 'Blog'
      case 'whitepaper': return 'White Paper'
      default: return 'Content'
    }
  }

  const getContentUrl = () => {
    switch (content.type) {
      case 'learning': return `/learn/${content.slug}`
      case 'blog': return `/blog/${content.slug}`
      case 'whitepaper': return (content as WhitePaperContent).webUrl || (content as WhitePaperContent).pdfUrl
      default: return '/learn'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const isExternal = content.type === 'whitepaper' && (content as WhitePaperContent).pdfUrl && !(content as WhitePaperContent).webUrl

  if (view === 'list') {
    return (
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              {showType && (
                <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  {getTypeIcon()}
                  <span>{getTypeLabel()}</span>
                </div>
              )}
              {content.type === 'blog' && content.category && (
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(content.category)}`}>
                  {content.category}
                </span>
              )}
              {content.type !== 'blog' && (
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(content.difficulty)}`}>
                  {content.difficulty}
                </span>
              )}
              {content.featured && (
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
              )}
            </div>
            
            <Link href={getContentUrl()} className="group">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-2">
                {content.title}
                {isExternal && <ExternalLink className="inline h-4 w-4 ml-2" />}
              </h3>
            </Link>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
              {content.description}
            </p>
            
            {highlights.length > 0 && (
              <div className="mb-3">
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">Matches:</p>
                {highlights.slice(0, 2).map((highlight, index) => (
                  <p key={index} className="text-sm text-primary-600 dark:text-primary-400 truncate">
                    {highlight}
                  </p>
                ))}
              </div>
            )}
            
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formatDate(content.publishedAt)}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {content.readingTime} min read
              </div>
              {content.type === 'whitepaper' && (
                <div className="flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  {(content as WhitePaperContent).fileSize}
                </div>
              )}
            </div>
          </div>
          
          <div className="ml-6 flex-shrink-0">
            <div className="flex flex-wrap gap-1 max-w-48">
              {content.tags.slice(0, 3).map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
              {content.tags.length > 3 && (
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  +{content.tags.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Grid view
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            {showType && (
              <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                {getTypeIcon()}
                <span>{getTypeLabel()}</span>
              </div>
            )}
            {content.type === 'blog' && content.category && (
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(content.category)}`}>
                {content.category}
              </span>
            )}
            {content.type !== 'blog' && (
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(content.difficulty)}`}>
                {content.difficulty}
              </span>
            )}
          </div>
          {content.featured && (
            <Star className="h-4 w-4 text-yellow-500 fill-current flex-shrink-0" />
          )}
        </div>
        
        <Link href={getContentUrl()} className="group">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-2 line-clamp-2">
            {content.title}
            {isExternal && <ExternalLink className="inline h-4 w-4 ml-2" />}
          </h3>
        </Link>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
          {content.description}
        </p>
        
        {highlights.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">Matches:</p>
            {highlights.slice(0, 1).map((highlight, index) => (
              <p key={index} className="text-sm text-primary-600 dark:text-primary-400 line-clamp-2">
                {highlight}
              </p>
            ))}
          </div>
        )}
        
        <div className="flex flex-wrap gap-1 mb-4">
          {content.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
          {content.tags.length > 3 && (
            <span className="text-xs text-gray-500 dark:text-gray-400">
              +{content.tags.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {formatDate(content.publishedAt)}
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {content.readingTime}m
            </div>
            {content.type === 'whitepaper' && (
              <div className="flex items-center gap-1">
                <Download className="h-4 w-4" />
                {(content as WhitePaperContent).fileSize}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}