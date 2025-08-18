import { notFound } from 'next/navigation'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, Tag, BookOpen, FileText, Zap, Building } from 'lucide-react'
import { loadAllContent } from '@/lib/content-loader'
import { RelatedContent } from '@/components/related-content'
import { mdxComponents } from '@/components/mdx-components'

interface PageProps {
  params: {
    slug: string[]
  }
}

async function getContent(slug: string[]) {
  // Try different content directories
  const contentDirs = [
    path.join(process.cwd(), 'content', 'blog'),
    path.join(process.cwd(), 'content', 'learning'),
    path.join(process.cwd(), 'content', 'knowledge'),
  ]
  
  for (const contentDir of contentDirs) {
    // Try to find the file
    const filePath = path.join(contentDir, ...slug) + '.mdx'
    const altFilePath = path.join(contentDir, ...slug) + '.md'
    
    let fullPath = ''
    if (fs.existsSync(filePath)) {
      fullPath = filePath
    } else if (fs.existsSync(altFilePath)) {
      fullPath = altFilePath
    }
    
    if (fullPath) {
      const fileContent = fs.readFileSync(fullPath, 'utf-8')
      const { data, content } = matter(fileContent)
      
      // Get all content for related items
      const allContent = await loadAllContent()
      const currentItem = allContent.find(item => {
        const itemSlug = item.href.replace('/knowledge/', '')
        return itemSlug === slug.join('/')
      })
      
      return {
        metadata: data,
        content,
        currentItem,
        allContent
      }
    }
  }
  
  return null
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const result = await getContent(params.slug)
  
  if (!result) {
    return {
      title: 'Content Not Found',
    }
  }
  
  return {
    title: result.metadata.title || 'Knowledge Hub',
    description: result.metadata.description || result.metadata.excerpt,
  }
}

export default async function KnowledgeContentPage({ params }: PageProps) {
  const result = await getContent(params.slug)
  
  if (!result) {
    notFound()
  }
  
  const { metadata, content, currentItem, allContent } = result
  
  // Determine format icon
  const getFormatIcon = () => {
    const format = metadata.type || 'article'
    switch(format) {
      case 'article':
      case 'blog': return BookOpen
      case 'whitepaper': return FileText
      case 'learning':
      case 'tutorial': return Zap
      case 'architecture':
      case 'reference': return Building
      default: return BookOpen
    }
  }
  
  const FormatIcon = getFormatIcon()
  
  return (
    <article className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/knowledge" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Knowledge Hub
          </Link>
          
          <div className="flex items-start gap-4 mb-4">
            <div className="p-2 rounded-lg bg-muted">
              <FormatIcon className="h-6 w-6 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                {metadata.title}
              </h1>
              {metadata.description && (
                <p className="text-lg text-muted-foreground">
                  {metadata.description}
                </p>
              )}
            </div>
          </div>
          
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {metadata.date && (
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <time dateTime={metadata.date}>
                  {new Date(metadata.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
            )}
            {metadata.readTime && (
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{metadata.readTime}</span>
              </div>
            )}
            {metadata.author && (
              <div>
                By <span className="font-medium">{metadata.author}</span>
              </div>
            )}
          </div>
          
          {/* Tags */}
          {metadata.tags && metadata.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {metadata.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>
      
      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="prose prose-lg dark:prose-invert max-w-none 
          prose-headings:text-foreground 
          prose-p:text-foreground 
          prose-strong:text-foreground 
          prose-ul:text-foreground 
          prose-ol:text-foreground 
          prose-li:text-foreground
          prose-blockquote:text-muted-foreground
          prose-code:bg-muted prose-code:text-foreground
          prose-pre:bg-muted
          prose-a:text-blue-600 dark:prose-a:text-blue-400
          prose-th:text-foreground
          prose-td:text-foreground">
          <MDXRemote source={content} components={mdxComponents} />
        </div>
        
        {/* Related Content */}
        {currentItem && allContent && (
          <RelatedContent currentItem={currentItem} allContent={allContent} />
        )}
      </div>
    </article>
  )
}