import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'
import { ChevronLeft, ChevronRight, Clock, User, Calendar, Tag, BookOpen, CheckCircle } from 'lucide-react'
import Link from 'next/link'

// Dynamically import MDX content
const MDXContent = dynamic(() => import('@/components/content/MDXRenderer'), {
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

// This would typically come from a content management system or MDX files
const getContentBySlug = async (slug: string) => {
  const contentMap: Record<string, any> = {
    'getting-started': {
      title: 'Getting Started with AI Security',
      description: 'Learn the fundamentals of AI security and best practices for protecting your AI systems',
      publishedAt: '2025-01-21',
      readingTime: 10,
      difficulty: 'beginner',
      category: 'fundamentals',
      tags: ['ai-security', 'getting-started', 'basics', 'fundamentals'],
      author: {
        name: 'perfecXion Security Team',
        role: 'AI Security Experts'
      },
      learningPath: 'ai-security-101',
      learningObjectives: [
        'Understand AI security fundamentals',
        'Learn about red team testing',
        'Discover agent monitoring concepts',
        'Understand compliance requirements'
      ],
      nextSections: ['understanding-ai-vulnerabilities'],
      content: 'getting-started'
    },
    'understanding-ai-vulnerabilities': {
      title: 'Understanding AI Vulnerabilities',
      description: 'Comprehensive guide to AI security fundamentals and common vulnerabilities that threaten AI systems in production.',
      publishedAt: '2024-01-15',
      readingTime: 25,
      difficulty: 'beginner',
      category: 'fundamentals',
      tags: ['ai-security', 'vulnerabilities', 'basics', 'threat-landscape'],
      author: {
        name: 'perfecXion Security Team',
        role: 'AI Security Experts'
      },
      learningPath: 'ai-security-101',
      learningObjectives: [
        'Identify common AI vulnerabilities and their impact',
        'Understand the unique threat landscape for AI systems',
        'Recognize security risks in AI model lifecycle',
        'Learn foundational concepts for AI security implementation'
      ],
      nextSections: ['types-of-ai-attacks'],
      content: 'understanding-ai-vulnerabilities'
    },
    'types-of-ai-attacks': {
      title: 'Types of AI Attacks',
      description: 'Comprehensive analysis of AI attack methodologies, attack vectors, and real-world case studies with technical implementation details.',
      publishedAt: '2024-01-16',
      readingTime: 30,
      difficulty: 'intermediate',
      category: 'threats',
      tags: ['ai-attacks', 'threat-landscape', 'security-assessment', 'attack-vectors'],
      author: {
        name: 'perfecXion Security Team',
        role: 'AI Security Experts'
      },
      learningPath: 'ai-security-101',
      nextSections: ['building-ai-security-programs'],
      content: 'types-of-ai-attacks'
    },
    'building-ai-security-programs': {
      title: 'Building AI Security Programs',
      description: 'Comprehensive guide to implementing enterprise-grade AI security programs with frameworks, methodologies, and governance structures.',
      publishedAt: '2024-01-17',
      readingTime: 35,
      difficulty: 'intermediate',
      category: 'implementation',
      tags: ['ai-security-program', 'governance', 'framework', 'implementation', 'enterprise'],
      author: {
        name: 'perfecXion Security Team',
        role: 'AI Security Experts'
      },
      learningPath: 'ai-security-101',
      nextSections: ['compliance-for-ai-systems'],
      content: 'building-ai-security-programs'
    },
    'compliance-for-ai-systems': {
      title: 'Compliance for AI Systems',
      description: 'Navigate the complex regulatory landscape for AI systems including EU AI Act, NIST AI RMF, GDPR, and industry-specific requirements.',
      publishedAt: '2024-01-18',
      readingTime: 40,
      difficulty: 'intermediate',
      category: 'compliance',
      tags: ['ai-compliance', 'regulation', 'eu-ai-act', 'nist-ai-rmf', 'gdpr', 'audit'],
      author: {
        name: 'perfecXion Legal & Compliance Team',
        role: 'AI Compliance Experts'
      },
      learningPath: 'ai-security-101',
      nextSections: ['incident-response-for-ai'],
      content: 'compliance-for-ai-systems'
    },
    'incident-response-for-ai': {
      title: 'Incident Response for AI',
      description: 'Comprehensive guide to AI-specific incident response procedures, forensics, recovery strategies, and lessons learned from real-world incidents.',
      publishedAt: '2024-01-19',
      readingTime: 35,
      difficulty: 'advanced',
      category: 'operations',
      tags: ['incident-response', 'ai-forensics', 'recovery', 'post-incident', 'operations'],
      author: {
        name: 'perfecXion Incident Response Team',
        role: 'AI Security Operations Experts'
      },
      learningPath: 'ai-security-101',
      content: 'incident-response-for-ai'
    }
  }

  return contentMap[slug] || null
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const content = await getContentBySlug(params.slug)
  
  if (!content) {
    return {
      title: 'Content Not Found - perfecXion.ai'
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

export default async function LearningContentPage({ params }: PageProps) {
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
          href="/learn"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Learning Center
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

        {/* Learning Objectives */}
        {content.learningObjectives && (
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4 flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              What You'll Learn
            </h3>
            <ul className="space-y-2">
              {content.learningObjectives.map((objective: string, index: number) => (
                <li key={index} className="flex items-start gap-2 text-blue-800 dark:text-blue-200">
                  <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <MDXContent slug={content.content} />
      </div>

      {/* Navigation Footer */}
      {content.nextSections && content.nextSections.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Continue Learning
          </h3>
          <div className="grid gap-4">
            {content.nextSections.map((nextSlug: string) => (
              <Link
                key={nextSlug}
                href={`/learn/${nextSlug}`}
                className="group flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-200 hover:shadow-md"
              >
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    Next: {nextSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Continue your AI security learning journey
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}