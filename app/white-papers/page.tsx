import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, FileText, Download, Calendar, User, Eye, BookOpen, Shield, Target, Brain, Database, Network } from 'lucide-react'
import DownloadButton from './DownloadButton'
import ComingSoonButton from './ComingSoonButton'
import fs from 'fs'
import path from 'path'

export const metadata: Metadata = {
  title: 'White Papers - AI Security Research',
  description: 'Access our comprehensive white papers on AI security, red teaming, compliance, and emerging threats. Deep technical insights from our research team.',
}

// White paper data structure
interface WhitePaper {
  id: string
  title: string
  description: string
  author: string
  date: string
  category: string
  downloadUrl: string
  readTime: string
  featured: boolean
  icon: React.ComponentType<any>
}

const whitePapers: WhitePaper[] = [
  {
    id: 'what-is-ai-security',
    title: 'What is AI Security? A Beginner\'s Guide to Protecting Your Most Valuable Intelligence',
    description: 'An introductory guide to AI security fundamentals, covering the unique threats facing AI systems and practical strategies for protecting artificial intelligence in enterprise environments.',
    author: 'perfecXion AI Security Team',
    date: '2025-01-31',
    category: 'AI Security Fundamentals',
    downloadUrl: '/white-papers/what-is-ai-security.pdf',
    readTime: '20 min read',
    featured: true,
    icon: Shield
  },
  {
    id: 'ai-red-team-methodology',
    title: 'AI Red Team Testing Methodology: A Comprehensive Framework',
    description: 'Comprehensive guide to AI-specific red team testing, covering unique attack vectors, methodology frameworks, vulnerability discovery techniques, and practical exploitation strategies for AI systems.',
    author: 'perfecXion Security Research Team',
    date: '2025-02-01',
    category: 'Red Team Testing',
    downloadUrl: '/white-papers/ai-red-team-methodology.pdf',
    readTime: '60 min read',
    featured: true,
    icon: Target
  },
  {
    id: 'prompt-injection-defense',
    title: 'Advanced Prompt Injection Defense Strategies',
    description: 'Comprehensive guide to defending against prompt injection attacks in LLM applications, covering attack vectors, detection methods, prevention techniques, and real-world case studies with practical implementation frameworks.',
    author: 'perfecXion Security Research Team',
    date: '2025-02-01',
    category: 'Technical Research',
    downloadUrl: '/white-papers/prompt-injection-defense.pdf',
    readTime: '40 min read',
    featured: true,
    icon: Brain
  },
  {
    id: 'ai-agent-security',
    title: 'Securing Autonomous AI Agents: Challenges and Solutions',
    description: 'Comprehensive guide to securing autonomous AI agents, covering behavioral analysis, privilege escalation prevention, monitoring strategies, and defense mechanisms for protecting against agent-based attacks.',
    author: 'perfecXion AI Research Team',
    date: '2025-02-01',
    category: 'AI Architecture',
    downloadUrl: '/white-papers/ai-agent-security.pdf',
    readTime: '50 min read',
    featured: true,
    icon: Network
  }
]

const categories = [
  { name: 'All Papers', value: 'all', count: whitePapers.length },
  { name: 'AI Security Fundamentals', value: 'AI Security Fundamentals', count: whitePapers.filter(wp => wp.category === 'AI Security Fundamentals').length },
  { name: 'Technical Research', value: 'Technical Research', count: whitePapers.filter(wp => wp.category === 'Technical Research').length },
  { name: 'Red Team Testing', value: 'Red Team Testing', count: whitePapers.filter(wp => wp.category === 'Red Team Testing').length },
  { name: 'AI Architecture', value: 'AI Architecture', count: whitePapers.filter(wp => wp.category === 'AI Architecture').length },
]

export default function WhitePapersPage() {
  // Check which PDFs actually exist and have content
  const checkPdfExists = (downloadUrl: string): boolean => {
    try {
      const filePath = path.join(process.cwd(), 'public', downloadUrl)
      const stats = fs.statSync(filePath)
      return stats.size > 0 // Only return true if file has content
    } catch {
      return false
    }
  }
  return (
    <main className="bg-white dark:bg-background-dark min-h-screen">
      <div className="max-width container-padding section-padding">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="h-4 w-4" />
            Research & Insights
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
            White Papers
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Deep technical insights and research findings from our AI security experts.
            Download comprehensive white papers covering red teaming, compliance, and emerging threats.
          </p>

          {/* Notice Banner */}
          <div className="mt-8 mx-auto max-w-2xl">
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg p-4">
              <p className="text-sm text-amber-800 dark:text-amber-200">
                <strong>Note:</strong> Our white papers are currently being finalized. Please check back soon for downloadable PDFs.
              </p>
            </div>
          </div>
        </header>

        {/* Featured White Papers */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Featured Research
            </h2>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whitePapers.filter(wp => wp.featured).map((paper) => (
              <div key={paper.id} className="group block p-8 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-200 hover:shadow-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/20 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/40 transition-colors">
                      <paper.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400">
                        Featured
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400">
                        {paper.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-3">
                      {paper.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {paper.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{paper.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{paper.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{paper.readTime}</span>
                        </div>
                      </div>
                      {checkPdfExists(paper.downloadUrl) ? (
                        <DownloadButton href={paper.downloadUrl} variant="primary">
                          Download PDF
                        </DownloadButton>
                      ) : (
                        <ComingSoonButton variant="primary" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All White Papers */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              All White Papers
            </h2>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.value}
                className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* White Papers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whitePapers.map((paper) => (
              <div key={paper.id} className="group block p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-200 hover:shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/20 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/40 transition-colors">
                      <paper.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400">
                        {paper.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-2">
                      {paper.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {paper.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                        <Calendar className="h-3 w-3" />
                        <span>{paper.date}</span>
                        <span>•</span>
                        <Eye className="h-3 w-3" />
                        <span>{paper.readTime}</span>
                      </div>
                      {checkPdfExists(paper.downloadUrl) ? (
                        <DownloadButton href={paper.downloadUrl} variant="link">
                          Download
                        </DownloadButton>
                      ) : (
                        <ComingSoonButton variant="link" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated with Our Research
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Get notified when we publish new white papers and research findings.
              Join our community of AI security professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Subscribe to Updates <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/docs" className="btn-secondary">
                <BookOpen className="mr-2 h-4 w-4" />
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 