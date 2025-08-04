'use client'

import { useState, useEffect } from 'react'

interface BlogContentRendererProps {
    content: string
}

export default function BlogContentRenderer({ content }: BlogContentRendererProps) {
    const [html, setHtml] = useState<string>('')

    useEffect(() => {
        // Convert the markdown content to HTML using a simple, reliable approach
        const convertMarkdownToHtml = (markdown: string) => {
            let html = markdown
                // Convert headers
                .replace(/^### (.*$)/gim, '<h3>$1</h3>')
                .replace(/^## (.*$)/gim, '<h2>$1</h2>')
                .replace(/^# (.*$)/gim, '<h1>$1</h1>')
                // Convert bold text
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                // Convert italic text
                .replace(/\*(.*?)\*/g, '<em>$1</em>')
                // Convert links
                .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 underline">$1</a>')
                // Convert unordered lists
                .replace(/^\- (.*$)/gim, '<li>$1</li>')
                // Convert ordered lists
                .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
                // Convert paragraphs (lines that don't start with HTML tags)
                .replace(/^([^<].*)$/gm, '<p>$1</p>')
                // Clean up empty paragraphs
                .replace(/<p><\/p>/g, '')
                // Clean up multiple line breaks
                .replace(/\n\n+/g, '\n\n')
                // Wrap lists in ul/ol tags
                .replace(/(<li>.*<\/li>)/g, '<ul>$1</ul>')
                // Clean up multiple ul tags
                .replace(/<\/ul>\s*<ul>/g, '')

            return html
        }

        setHtml(convertMarkdownToHtml(content))
    }, [content])

    return (
        <div
            className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-8 prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-8 prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-6 prose-h4:text-xl prose-h4:mb-2 prose-h4:mt-4 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-ul:space-y-2 prose-ol:space-y-2 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-a:text-primary-600 prose-a:hover:text-primary-700 dark:prose-a:text-primary-400 dark:prose-a:hover:text-primary-300 prose-a:underline"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    )
} 