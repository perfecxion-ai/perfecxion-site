import { Metadata } from 'next'
import { readFile } from 'fs/promises'
import { join } from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { FileText, Download, Clock, Calendar, Shield } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Building AI Security Programs for Enterprise Organizations | perfecXion.ai',
  description: 'Master enterprise AI security program implementation with frameworks, governance, technical controls, and phased deployment strategies. Essential for CISOs and security leaders.',
  keywords: 'AI security programs, enterprise security, NIST AI RMF, SAIF, governance, MLOps security, security implementation',
  openGraph: {
    title: 'Building AI Security Programs for Enterprise Organizations',
    description: 'Comprehensive technical guide for implementing enterprise-grade AI security programs.',
    type: 'article',
    publishedTime: '2025-01-15',
    authors: ['perfecXion.ai Team'],
  },
}

async function getWhitePaperContent() {
  const filePath = join(process.cwd(), 'content', 'white-papers', 'building-ai-security-programs.mdx')
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

export default async function BuildingAISecurityProgramsWhitePaper() {
  const { frontmatter, content } = await getWhitePaperContent()
  
  return (
    <article className="min-h-screen bg-white dark:bg-background-dark">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-4 mb-6">
            <Link 
              href="/learn/building-ai-security-programs"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              ← Back to Building AI Security Programs
            </Link>
            <span className="text-gray-400 dark:text-gray-600">|</span>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>January 15, 2025</span>
            </div>
            <span className="text-gray-400 dark:text-gray-600">|</span>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Clock className="w-4 h-4" />
              <span>60 min read</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {frontmatter.title || 'Building AI Security Programs for Enterprise Organizations'}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl">
            {frontmatter.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/white-papers/building-ai-security-programs.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-semibold"
            >
              <Download className="w-5 h-5" />
              Download PDF Version
            </a>
            <div className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300">
              <Shield className="w-5 h-5" />
              <span>Enterprise Security White Paper</span>
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
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-xl border border-blue-200 dark:border-blue-800">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Ready to Build Your AI Security Program?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            perfecXion.ai provides comprehensive solutions and expert guidance to help organizations build enterprise-grade AI security programs that balance innovation with protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-semibold"
            >
              Explore Our Security Solutions
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              Get Expert Consultation
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}