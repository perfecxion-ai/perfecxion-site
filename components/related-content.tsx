import Link from 'next/link'
import { ContentItem } from '@/lib/content-loader'
import { findRelatedContent } from '@/lib/search-utils'
import { BookOpen, FileText, Zap, Building, ArrowRight } from 'lucide-react'

interface RelatedContentProps {
  currentItem: ContentItem
  allContent: ContentItem[]
}

export function RelatedContent({ currentItem, allContent }: RelatedContentProps) {
  const relatedItems = findRelatedContent(currentItem, allContent, 4)
  
  if (relatedItems.length === 0) return null
  
  const getIcon = (format: string) => {
    switch(format) {
      case 'article': return BookOpen
      case 'whitepaper': return FileText
      case 'learning': return Zap
      case 'architecture': return Building
      default: return BookOpen
    }
  }
  
  return (
    <div className="mt-12 pt-8 border-t border-border">
      <h2 className="text-2xl font-bold mb-6">Related Content</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {relatedItems.map(item => {
          const Icon = getIcon(item.format)
          return (
            <Link
              key={item.id}
              href={item.href}
              className="group p-4 border border-border rounded-lg hover:border-blue-500/50 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-muted">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="capitalize">{item.format}</span>
                    <span>•</span>
                    <span>{item.readTime}</span>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 mt-1 transition-all group-hover:translate-x-1" />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}