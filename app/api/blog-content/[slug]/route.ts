import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

// Configure marked for better formatting
marked.setOptions({
  gfm: true,
  breaks: true,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: true
})

// Custom renderer for marked to match learn page styling
const renderer = new marked.Renderer()

// Override heading rendering to match learn pages
renderer.heading = function(text, level) {
  const tag = `h${level}`
  return `<${tag}>${text}</${tag}>\n`
}

// Override table rendering to match learn pages
renderer.table = function(header, body) {
  return `<table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
    <thead>
      ${header}
    </thead>
    <tbody>
      ${body}
    </tbody>
  </table>\n`
}

renderer.tablerow = function(content) {
  return `<tr style="background-color: #f3f4f6;">\n${content}</tr>\n`
}

renderer.tablecell = function(content, flags) {
  const type = flags.header ? 'th' : 'td'
  const style = 'border: 1px solid #d1d5db; padding: 0.5rem; text-align: left;'
  return `<${type} style="${style}">${content}</${type}>\n`
}

// Override code block rendering
renderer.code = function(code, language) {
  return `<pre style="background-color: #f3f4f6; dark:background-color: #1f2937; padding: 1rem; border-radius: 8px; overflow-x: auto; margin: 1rem 0;"><code>${code}</code></pre>\n`
}

// Override blockquote rendering
renderer.blockquote = function(quote) {
  return `<blockquote style="border-left: 4px solid #3b82f6; padding-left: 1rem; margin: 1rem 0; color: #4b5563; dark:color: #9ca3af;">${quote}</blockquote>\n`
}

// Override list rendering
renderer.list = function(body, ordered) {
  const tag = ordered ? 'ol' : 'ul'
  return `<${tag}>${body}</${tag}>\n`
}

// Override paragraph rendering
renderer.paragraph = function(text) {
  return `<p>${text}</p>\n`
}

marked.setOptions({ renderer })

// Function to convert custom components to HTML
function preprocessMDX(content: string): string {
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
    
    return NextResponse.json({ content: htmlContent })
  } catch (error) {
    console.error('Error loading blog content:', error)
    return NextResponse.json({ error: 'Failed to load blog content' }, { status: 500 })
  }
}