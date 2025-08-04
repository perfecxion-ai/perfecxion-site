import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

// Configure marked with default settings
marked.setOptions({
  gfm: true,
  breaks: true,
  pedantic: false
})

// Function to convert custom components to HTML
function preprocessMDX(content: string): string {
  // Remove all JSX/React component imports and className attributes
  content = content.replace(/<[A-Z][a-zA-Z]*\s+className="[^"]*"\s*(?:\/)?>/g, '')
  content = content.replace(/className="[^"]*"/g, '')
  
  // Convert div elements with className to regular divs with inline styles
  content = content.replace(/<div\s+className="[^"]*"[^>]*>/g, '<div>')
  
  // Remove icon components (Shield, AlertTriangle, etc.)
  content = content.replace(/<(Shield|AlertTriangle|Target|Clock|User|Calendar|Tag|BookOpen|CheckCircle|ChevronLeft|ChevronRight)[^>]*><\/\1>/g, '')
  content = content.replace(/<(Shield|AlertTriangle|Target|Clock|User|Calendar|Tag|BookOpen|CheckCircle|ChevronLeft|ChevronRight)[^>]*\/>/g, '')
  
  // Convert AlertBox to styled HTML
  content = content.replace(/<AlertBox[^>]*type="([^"]*)"[^>]*title="([^"]*)"[^>]*>([\s\S]*?)<\/AlertBox>/g, 
    (match, type, title, text) => {
      const color = type === 'danger' ? '#dc2626' : '#3b82f6'
      const bg = type === 'danger' ? '#fee2e2' : '#dbeafe'
      return `<div style="padding: 1.5rem; margin: 2rem 0; border-radius: 8px; border-left: 4px solid ${color}; background-color: ${bg};">
        <p style="font-weight: 600; color: ${color}; margin-bottom: 0.5rem;">${title}</p>
        <p style="margin: 0;">${text.trim()}</p>
      </div>`
    })
  
  // Convert StatsBox to grid layout
  content = content.replace(/<StatsBox[^>]*stats=\{(\[[^\]]+\])\}[^>]*\/>/g, (match, statsArray) => {
    try {
      // Parse the stats array
      const stats = eval(statsArray)
      const statsHtml = stats.map((stat: any) => `
        <div style="background-color: #f9fafb; dark:background-color: #1f2937; padding: 1.5rem; border-radius: 8px; text-align: center;">
          <p style="font-size: 2rem; font-weight: 700; margin: 0; color: #1f2937; dark:color: #f9fafb;">${stat.value}</p>
          <p style="margin: 0.5rem 0 0 0; color: #6b7280;">${stat.label}</p>
        </div>
      `).join('')
      
      return `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">
        ${statsHtml}
      </div>`
    } catch (e) {
      return ''
    }
  })
  
  // Convert SectionHeader to styled HTML
  content = content.replace(/<SectionHeader[^>]*icon="([^"]*)"[^>]*title="([^"]*)"[^>]*subtitle="([^"]*)"[^>]*\/>/g,
    '<div style="margin: 2rem 0;"><h2 style="margin-bottom: 0.5rem;">$2</h2><p style="color: #6b7280; margin: 0;">$3</p></div>')
  
  // Convert ComparisonTable to proper HTML table
  content = content.replace(/<ComparisonTable[^>]*headers=\{(\[[^\]]+\])\}[^>]*rows=\{(\[[^\]]+\])\}[^>]*\/>/g,
    (match, headers, rows) => {
      try {
        const headerArray = eval(headers)
        const rowArray = eval(rows)
        
        const headerHtml = headerArray.map((h: string) => 
          `<th style="border: 1px solid #d1d5db; padding: 0.5rem; text-align: left;">${h}</th>`
        ).join('')
        
        const rowsHtml = rowArray.map((row: string[]) => 
          `<tr>${row.map(cell => 
            `<td style="border: 1px solid #d1d5db; padding: 0.5rem;">${cell}</td>`
          ).join('')}</tr>`
        ).join('')
        
        return `<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
          <thead>
            <tr style="background-color: #f3f4f6;">${headerHtml}</tr>
          </thead>
          <tbody>${rowsHtml}</tbody>
        </table>`
      } catch (e) {
        return ''
      }
    })
  
  // Convert Mermaid diagrams to a placeholder
  content = content.replace(/```mermaid\n([\s\S]*?)```/g, (match, diagram) => {
    // For now, just display the diagram as a code block with a note
    return `<div style="background-color: #f3f4f6; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
      <p style="font-weight: 600; color: #1f2937; margin-bottom: 0.5rem;">Diagram:</p>
      <pre style="background-color: transparent; padding: 0;"><code>${diagram.trim()}</code></pre>
    </div>`
  })
  
  // Handle the "text" code blocks that contain mermaid diagrams
  content = content.replace(/text\s*\n\s*graph TD([\s\S]*?)(?=\n\n|\n[A-Z]|$)/g, (match, diagram) => {
    return `<div style="background-color: #f3f4f6; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
      <p style="font-weight: 600; color: #1f2937; margin-bottom: 0.5rem;">System Architecture Diagram:</p>
      <pre style="background-color: transparent; padding: 0; overflow-x: auto;"><code>graph TD${diagram}</code></pre>
    </div>`
  })
  
  // Remove any remaining unhandled custom components
  content = content.replace(/<[A-Z][a-zA-Z]*[^>]*\/>/g, '')
  content = content.replace(/<[A-Z][a-zA-Z]*[^>]*>[\s\S]*?<\/[A-Z][a-zA-Z]*>/g, '')
  
  return content
}

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params
    
    // Path to the MDX file
    const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.mdx`)
    
    // Check if file exists with .mdx extension
    if (!fs.existsSync(filePath)) {
      // Try with .md extension
      const mdPath = path.join(process.cwd(), 'content', 'blog', `${slug}.md`)
      if (!fs.existsSync(mdPath)) {
        return NextResponse.json({ error: 'Blog post not found' }, { status: 404 })
      }
      
      // Read the .md file
      const fileContent = fs.readFileSync(mdPath, 'utf-8')
      const { content } = matter(fileContent)
      
      // Preprocess to convert custom components
      const processedContent = preprocessMDX(content)
      
      // Convert markdown to HTML
      const htmlContent = await marked.parse(processedContent)
      
      return NextResponse.json({ content: htmlContent })
    }
    
    // Read the MDX file
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { content } = matter(fileContent)
    
    // Preprocess to convert custom components
    const processedContent = preprocessMDX(content)
    
    // Convert MDX to HTML
    const htmlContent = await marked.parse(processedContent)
    
    // Wrap content in a properly styled container to ensure proper formatting
    const wrappedContent = `
      <div class="blog-content">
        ${htmlContent}
      </div>
      <style>
        .blog-content h1 { font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; margin-top: 2rem; }
        .blog-content h2 { font-size: 2rem; font-weight: 600; margin-bottom: 0.75rem; margin-top: 1.5rem; }
        .blog-content h3 { font-size: 1.5rem; font-weight: 600; margin-bottom: 0.5rem; margin-top: 1rem; }
        .blog-content h4 { font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem; margin-top: 1rem; }
        .blog-content p { margin-bottom: 1rem; line-height: 1.7; }
        .blog-content ul, .blog-content ol { margin-bottom: 1rem; padding-left: 2rem; }
        .blog-content li { margin-bottom: 0.5rem; }
        .blog-content pre { background-color: #f3f4f6; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; margin-bottom: 1rem; color: #1f2937; }
        .blog-content code { background-color: #f3f4f6; padding: 0.125rem 0.25rem; border-radius: 0.25rem; font-size: 0.875rem; color: #1f2937; }
        .blog-content pre code { background-color: transparent; padding: 0; color: inherit; }
        .blog-content blockquote { border-left: 4px solid #3b82f6; padding-left: 1rem; margin: 1rem 0; color: #4b5563; }
        .blog-content strong { font-weight: 600; }
        .blog-content em { font-style: italic; }
        .blog-content hr { border-top: 1px solid #e5e7eb; margin: 2rem 0; }
        .blog-content table { width: 100%; border-collapse: collapse; margin: 1rem 0; }
        .blog-content th, .blog-content td { border: 1px solid #d1d5db; padding: 0.5rem; text-align: left; }
        .blog-content th { background-color: #f3f4f6; font-weight: 600; }
        @media (prefers-color-scheme: dark) {
          .blog-content pre { background-color: #1f2937; color: #e5e7eb; }
          .blog-content code { background-color: #1f2937; color: #e5e7eb; }
          .blog-content pre code { color: inherit; }
          .blog-content blockquote { color: #9ca3af; }
          .blog-content hr { border-color: #374151; }
          .blog-content th, .blog-content td { border-color: #374151; }
          .blog-content th { background-color: #1f2937; }
        }
      </style>
    `
    
    return NextResponse.json({ content: wrappedContent })
  } catch (error) {
    console.error('Error loading blog content:', error)
    return NextResponse.json({ error: 'Failed to load blog content' }, { status: 500 })
  }
}