import { Metadata } from 'next'
import { readFile } from 'fs/promises'
import { join } from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { FileText, Download, Clock, Calendar } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI-Specific Incident Response: A Comprehensive Guide | perfecXion.ai',
  description: 'Master AI-specific incident response with comprehensive guidance on detection, forensics, and recovery strategies for machine learning systems.',
  keywords: 'AI incident response, machine learning security, AI forensics, incident recovery, CISO guide, enterprise AI security',
  openGraph: {
    title: 'AI-Specific Incident Response: A Comprehensive Guide',
    description: 'Essential guidance for security teams and CISOs on AI-specific incident response procedures.',
    type: 'article',
    publishedTime: '2025-01-15',
    authors: ['perfecXion.ai Team'],
  },
}

async function getWhitePaperContent() {
  const filePath = join(process.cwd(), 'content', 'white-papers', 'ai-incident-response.mdx')
  const fileContent = await readFile(filePath, 'utf8')
  
  // Extract frontmatter and content
  const match = fileContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { frontmatter: {}, content: fileContent }
  
  const frontmatter = match[1].split('\n').reduce((acc, line) => {
    const [key, ...valueParts] = line.split(':')
    if (key && valueParts.length) {
      const value = valueParts.join(':').trim()
      acc[key.trim()] = value.replace(/^["']|["']$/g, '')
    }
    return acc
  }, {} as Record<string, string>)
  
  return { frontmatter, content: match[2] }
}

export default async function AIIncidentResponseWhitePaper() {
  const { frontmatter, content } = await getWhitePaperContent()
  
  return (
    <article className="min-h-screen bg-white dark:bg-background-dark">
      {/* Header */}
      <header className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              href="/learn/incident-response"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              ← Back to Incident Response
            </Link>
            <span className="text-gray-400 dark:text-gray-600">|</span>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>January 15, 2025</span>
            </div>
            <span className="text-gray-400 dark:text-gray-600">|</span>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Clock className="w-4 h-4" />
              <span>45 min read</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {frontmatter.title || 'AI-Specific Incident Response'}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl">
            {frontmatter.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/white-papers/ai-incident-response.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-semibold"
            >
              <Download className="w-5 h-5" />
              Download PDF Version
            </a>
            <div className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300">
              <FileText className="w-5 h-5" />
              <span>White Paper</span>
            </div>
          </div>
        </div>
      </header>
      
      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <MDXRemote source={content} />
        </div>
        
        {/* Footer CTA */}
        <div className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-xl border border-cyan-200 dark:border-cyan-800">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Ready to Implement AI-Specific Incident Response?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            perfecXion.ai provides comprehensive AI security solutions designed to protect your machine learning systems from emerging threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products/perfecx-guard"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-semibold"
            >
              Explore perfecX Guard
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              Contact Our Experts
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}