'use client'

import { useState, useEffect } from 'react'

interface BlogContentRendererProps {
    content: string
}

export default function BlogContentRenderer({ content }: BlogContentRendererProps) {
    const [html, setHtml] = useState<string>('')

    useEffect(() => {
        // Simple, reliable markdown to HTML conversion
        const convertMarkdownToHtml = (markdown: string) => {
            // Split content into lines
            const lines = markdown.split('\n')
            let html = ''
            let inList = false
            
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i].trim()
                
                if (!line) {
                    // Empty line - close any open list and add paragraph break
                    if (inList) {
                        html += '</ul>\n'
                        inList = false
                    }
                    html += '\n'
                    continue
                }
                
                // Headers
                if (line.startsWith('### ')) {
                    if (inList) {
                        html += '</ul>\n'
                        inList = false
                    }
                    html += `<h3>${line.substring(4)}</h3>\n`
                } else if (line.startsWith('## ')) {
                    if (inList) {
                        html += '</ul>\n'
                        inList = false
                    }
                    html += `<h2>${line.substring(3)}</h2>\n`
                } else if (line.startsWith('# ')) {
                    if (inList) {
                        html += '</ul>\n'
                        inList = false
                    }
                    html += `<h1>${line.substring(2)}</h1>\n`
                }
                // Lists
                else if (line.startsWith('- ') || line.startsWith('* ')) {
                    if (!inList) {
                        html += '<ul>\n'
                        inList = true
                    }
                    html += `<li>${line.substring(2)}</li>\n`
                }
                // Numbered lists
                else if (/^\d+\. /.test(line)) {
                    if (!inList) {
                        html += '<ol>\n'
                        inList = true
                    }
                    html += `<li>${line.replace(/^\d+\. /, '')}</li>\n`
                }
                // Regular paragraphs
                else {
                    if (inList) {
                        html += '</ul>\n'
                        inList = false
                    }
                    // Convert markdown formatting within the line
                    let processedLine = line
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\*(.*?)\*/g, '<em>$1</em>')
                        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 underline">$1</a>')
                    
                    html += `<p>${processedLine}</p>\n`
                }
            }
            
            // Close any open list
            if (inList) {
                html += '</ul>\n'
            }
            
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