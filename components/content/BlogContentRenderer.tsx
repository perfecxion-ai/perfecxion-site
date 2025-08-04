'use client'

import { marked } from 'marked'

interface BlogContentRendererProps {
  content: string
}

export default function BlogContentRenderer({ content }: BlogContentRendererProps) {
  // Configure marked for clean, consistent output
  marked.setOptions({
    breaks: true,
    gfm: true,
    headerIds: false,
    mangle: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  })

  // Convert markdown to HTML
  const html = marked.parse(content)

  return (
    <div 
      className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-8 prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-8 prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-6 prose-h4:text-xl prose-h4:mb-2 prose-h4:mt-4 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-ul:space-y-2 prose-ol:space-y-2 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-a:text-primary-600 prose-a:hover:text-primary-700 dark:prose-a:text-primary-400 dark:prose-a:hover:text-primary-300 prose-a:underline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
} 