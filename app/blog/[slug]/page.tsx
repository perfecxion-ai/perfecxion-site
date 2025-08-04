import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'
import { ChevronLeft, Clock, User, Calendar, Tag } from 'lucide-react'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Dynamically import blog content renderer
const BlogContentRenderer = dynamic(() => import('@/components/content/BlogContentRenderer'), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-4"></div>
    </div>
  )
})

interface PageProps {
  params: {
    slug: string
  }
}

// Load blog metadata from MDX files
const getContentBySlug = async (slug: string) => {
  try {
    // Try .mdx extension first
    let filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.mdx`)
    
    if (!fs.existsSync(filePath)) {
      // Try .md extension
      filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.md`)
      if (!fs.existsSync(filePath)) {
        return null
      }
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(fileContent)

    // Map the frontmatter to expected format
    return {
      title: data.title || 'Untitled Post',
      description: data.description || '',
      publishedAt: data.date || new Date().toISOString(),
      readingTime: parseInt(data.readTime?.replace(/\D/g, '') || '10'),
      difficulty: data.difficulty || 'intermediate',
      category: data.category || 'AI Security',
      tags: data.tags || [],
      author: {
        name: data.author || 'perfecXion Security Team',
        role: 'AI Security Experts'
      },
      content: slug
    }
  } catch (error) {
    console.error(`Error loading blog content for slug: ${slug}`, error)
    return null
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const content = await getContentBySlug(params.slug)
  
  if (!content) {
    return {
      title: 'Blog Post Not Found - perfecXion.ai'
    }
  }

  return {
    title: `${content.title} - perfecXion.ai`,
    description: content.description,
    openGraph: {
      title: content.title,
      description: content.description,
      type: 'article',
      publishedTime: content.publishedAt,
      authors: [content.author.name],
      tags: content.tags,
    }
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const content = await getContentBySlug(params.slug)

  if (!content) {
    notFound()
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'advanced': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Navigation */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Blog
        </Link>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(content.difficulty)}`}>
            {content.difficulty}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {content.category}
          </span>
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          {content.title}
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          {content.description}
        </p>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-6">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {formatDate(content.publishedAt)}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {content.readingTime} min read
          </div>
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            {content.author.name}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {content.tags.map((tag: string) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <BlogContentRenderer slug={params.slug} />
    </div>
  )
}