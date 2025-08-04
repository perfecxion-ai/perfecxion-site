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
  // Preserve code blocks
  const codeBlocks: string[] = []
  let codeBlockIndex = 0
  content = content.replace(/```[\s\S]*?```/g, (match) => {
    codeBlocks.push(match)
    return `__CODE_BLOCK_${codeBlockIndex++}__`
  })

  // Remove all icon components completely
  content = content.replace(/<(Shield|AlertTriangle|Target|Clock|User|Calendar|Tag|BookOpen|CheckCircle|ChevronLeft|ChevronRight|Brain|Database|TrendingUp|Briefcase|Info|Bell)\s*\/>/g, '')
  content = content.replace(/<(Shield|AlertTriangle|Target|Clock|User|Calendar|Tag|BookOpen|CheckCircle|ChevronLeft|ChevronRight|Brain|Database|TrendingUp|Briefcase|Info|Bell)[^>]*><\/\1>/g, '')
  
  // Convert AlertBox
  content = content.replace(/<AlertBox\s+type="([^"]*)"[^>]*title="([^"]*)"[^>]*>([\s\S]*?)<\/AlertBox>/g, 
    (match, type, title, text) => {
      const color = type === 'danger' ? '#dc2626' : type === 'warning' ? '#f59e0b' : type === 'success' ? '#10b981' : '#3b82f6'
      const bg = type === 'danger' ? '#fee2e2' : type === 'warning' ? '#fef3c7' : type === 'success' ? '#d1fae5' : '#dbeafe'
      return `
<div style="padding: 1.5rem; margin: 2rem 0; border-radius: 8px; border-left: 4px solid ${color}; background-color: ${bg};">
  <p style="font-weight: 600; color: ${color}; margin-bottom: 0.5rem;">${title}</p>
  <div style="margin: 0; color: #374151;">${text.trim()}</div>
</div>`
    })
  
  // Convert SectionHeader
  content = content.replace(/<SectionHeader[^>]*title="([^"]*)"[^>]*subtitle="([^"]*)"[^>]*\/>/g,
    (match, title, subtitle) => {
      return `
<div style="margin: 3rem 0 2rem 0; border-bottom: 2px solid #e5e7eb; padding-bottom: 1rem;">
  <h2 style="margin-bottom: 0.5rem; font-size: 1.875rem; font-weight: 700;">${title}</h2>
  <p style="color: #6b7280; margin: 0;">${subtitle}</p>
</div>`
    })
  
  // Convert StatsBox
  content = content.replace(/<StatsBox\s+stats=\{(\[[\s\S]*?\])\}[^>]*\/>/g, (match, statsArray) => {
    try {
      const cleanedStats = statsArray
        .replace(/\n/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
      const stats = eval(cleanedStats)
      const statsHtml = stats.map((stat: any) => `
<div style="background-color: #f9fafb; padding: 1.5rem; border-radius: 8px; text-align: center; border: 1px solid #e5e7eb;">
  <p style="font-size: 2rem; font-weight: 700; margin: 0; color: #1f2937;">${stat.value}</p>
  <p style="margin: 0.5rem 0 0 0; color: #6b7280;">${stat.label}</p>
</div>`).join('')
      
      return `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">${statsHtml}</div>`
    } catch (e) {
      return ''
    }
  })
  
  // Convert ComparisonTable
  content = content.replace(/<ComparisonTable[^>]*headers=\{(\[[\s\S]*?\])\}[^>]*rows=\{(\[[\s\S]*?\])\}[^>]*\/>/g,
    (match, headers, rows) => {
      try {
        const headerArray = eval(headers)
        const rowArray = eval(rows)
        
        const headerHtml = headerArray.map((h: string) => 
          `<th style="border: 1px solid #d1d5db; padding: 0.75rem; text-align: left; background-color: #f3f4f6; font-weight: 600;">${h}</th>`
        ).join('')
        
        const rowsHtml = rowArray.map((row: string[]) => 
          `<tr>${row.map(cell => 
            `<td style="border: 1px solid #d1d5db; padding: 0.75rem; vertical-align: top;">${cell}</td>`
          ).join('')}</tr>`
        ).join('')
        
        return `
<table style="width: 100%; border-collapse: collapse; margin: 2rem 0;">
  <thead>
    <tr>${headerHtml}</tr>
  </thead>
  <tbody>${rowsHtml}</tbody>
</table>`
      } catch (e) {
        return ''
      }
    })
  
  // Convert FeatureGrid and FeatureCard
  content = content.replace(/<FeatureGrid>([\s\S]*?)<\/FeatureGrid>/g, (match, gridContent) => {
    const processedCards = gridContent.replace(/<FeatureCard[^>]*title="([^"]*)"[^>]*(?:color="([^"]*)")?[^>]*>([\s\S]*?)<\/FeatureCard>/g,
      (cardMatch: string, title: string, color: string, cardContent: string) => {
        const borderColor = color === 'red' ? '#ef4444' : color === 'orange' ? '#f97316' : color === 'purple' ? '#a855f7' : color === 'blue' ? '#3b82f6' : color === 'green' ? '#10b981' : '#6b7280'
        return `
<div style="padding: 1.5rem; border: 1px solid #e5e7eb; border-left: 4px solid ${borderColor}; border-radius: 8px; background-color: #ffffff;">
  <h3 style="font-weight: 600; margin-bottom: 0.75rem; color: #1f2937;">${title}</h3>
  <p style="color: #4b5563; margin: 0;">${cardContent.trim()}</p>
</div>`
      })
    
    return `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">${processedCards}</div>`
  })
  
  // Convert Timeline
  content = content.replace(/<Timeline[^>]*items=\{(\[[\s\S]*?\])\}[^>]*\/>/g, (match, itemsArray) => {
    try {
      const items = eval(itemsArray)
      const timelineHtml = items.map((item: any, index: number) => `
<div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
  <div style="flex-shrink: 0;">
    <div style="width: 2rem; height: 2rem; background-color: #3b82f6; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600;">
      ${index + 1}
    </div>
    ${index < items.length - 1 ? '<div style="width: 2px; height: 3rem; background-color: #e5e7eb; margin-left: 1rem;"></div>' : ''}
  </div>
  <div style="flex-grow: 1; padding-bottom: 1rem;">
    <div style="font-weight: 600; color: #3b82f6; margin-bottom: 0.25rem;">${item.date || ''}</div>
    <h4 style="font-weight: 600; margin-bottom: 0.5rem;">${item.title}</h4>
    <p style="color: #6b7280; margin: 0;">${item.description}</p>
  </div>
</div>`).join('')
      
      return `<div style="margin: 2rem 0;">${timelineHtml}</div>`
    } catch (e) {
      return ''
    }
  })
  
  // Remove all divs with className attributes - just strip the attributes
  content = content.replace(/<div\s+className="[^"]*"([^>]*)>/g, '<div$1>')
  
  // Remove all className attributes from any remaining elements
  content = content.replace(/\s+className="[^"]*"/g, '')
  
  // Remove icon attributes
  content = content.replace(/\s+icon="[^"]*"/g, '')
  
  // Handle Mermaid diagrams
  let diagramId = 0
  content = content.replace(/```mermaid\n([\s\S]*?)```/g, (match, diagram) => {
    diagramId++
    return `<div id="mermaid-${diagramId}" class="mermaid" style="background-color: #f3f4f6; padding: 1rem; border-radius: 8px; margin: 2rem 0; text-align: center;">${diagram.trim()}</div>`
  })
  
  // Handle text-based mermaid diagrams
  content = content.replace(/text\s*\n\s*(graph TD[\s\S]*?)(?=\n\n|\n[A-Z]|$)/g, (match, diagram) => {
    diagramId++
    return `<div id="mermaid-${diagramId}" class="mermaid" style="background-color: #f3f4f6; padding: 1rem; border-radius: 8px; margin: 2rem 0; text-align: center;">${diagram.trim()}</div>`
  })
  
  // Restore code blocks
  content = content.replace(/__CODE_BLOCK_(\d+)__/g, (match, index) => {
    return codeBlocks[parseInt(index)]
  })
  
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
      
      return NextResponse.json({ content: wrapContent(htmlContent) })
    }
    
    // Read the MDX file
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { content } = matter(fileContent)
    
    // Preprocess to convert custom components
    const processedContent = preprocessMDX(content)
    
    // Convert MDX to HTML
    const htmlContent = await marked.parse(processedContent)
    
    return NextResponse.json({ content: wrapContent(htmlContent) })
  } catch (error) {
    console.error('Error loading blog content:', error)
    return NextResponse.json({ error: 'Failed to load blog content' }, { status: 500 })
  }
}

function wrapContent(htmlContent: string): string {
  return `
    <div class="blog-content prose prose-lg max-w-none">
      ${htmlContent}
    </div>
    <style>
      .blog-content {
        color: #1f2937;
        line-height: 1.75;
      }
      .blog-content h1 { 
        font-size: 2.5rem; 
        font-weight: 700; 
        margin-bottom: 1rem; 
        margin-top: 2rem; 
        color: #111827;
      }
      .blog-content h2 { 
        font-size: 2rem; 
        font-weight: 600; 
        margin-bottom: 0.75rem; 
        margin-top: 1.5rem; 
        color: #111827;
      }
      .blog-content h3 { 
        font-size: 1.5rem; 
        font-weight: 600; 
        margin-bottom: 0.5rem; 
        margin-top: 1rem; 
        color: #111827;
      }
      .blog-content h4 { 
        font-size: 1.25rem; 
        font-weight: 600; 
        margin-bottom: 0.5rem; 
        margin-top: 1rem; 
        color: #111827;
      }
      .blog-content p { 
        margin-bottom: 1.25rem; 
        line-height: 1.75; 
        color: #374151;
      }
      .blog-content ul, .blog-content ol { 
        margin-bottom: 1.25rem; 
        padding-left: 2rem; 
        color: #374151;
      }
      .blog-content li { 
        margin-bottom: 0.5rem; 
        line-height: 1.75;
      }
      .blog-content pre { 
        background-color: #f3f4f6; 
        padding: 1rem; 
        border-radius: 0.5rem; 
        overflow-x: auto; 
        margin-bottom: 1.25rem; 
        color: #1f2937;
        border: 1px solid #e5e7eb;
      }
      .blog-content code { 
        background-color: #f3f4f6; 
        padding: 0.125rem 0.25rem; 
        border-radius: 0.25rem; 
        font-size: 0.875rem; 
        color: #1f2937;
        font-family: 'Menlo', 'Monaco', 'Consolas', monospace;
      }
      .blog-content pre code { 
        background-color: transparent; 
        padding: 0; 
        color: inherit; 
      }
      .blog-content blockquote { 
        border-left: 4px solid #3b82f6; 
        padding-left: 1rem; 
        margin: 1.25rem 0; 
        color: #4b5563; 
        font-style: italic;
      }
      .blog-content strong { 
        font-weight: 600; 
        color: #111827;
      }
      .blog-content em { 
        font-style: italic; 
      }
      .blog-content hr { 
        border-top: 1px solid #e5e7eb; 
        margin: 2rem 0; 
      }
      .blog-content table { 
        width: 100%; 
        border-collapse: collapse; 
        margin: 1.25rem 0; 
      }
      .blog-content th, .blog-content td { 
        border: 1px solid #d1d5db; 
        padding: 0.75rem; 
        text-align: left; 
      }
      .blog-content th { 
        background-color: #f3f4f6; 
        font-weight: 600; 
        color: #111827;
      }
      .blog-content .mermaid { 
        max-width: 100%; 
        overflow-x: auto; 
      }
      @media (prefers-color-scheme: dark) {
        .blog-content { color: #e5e7eb; }
        .blog-content h1, .blog-content h2, .blog-content h3, .blog-content h4 { color: #f9fafb; }
        .blog-content p, .blog-content li, .blog-content ul, .blog-content ol { color: #d1d5db; }
        .blog-content strong { color: #f3f4f6; }
        .blog-content pre { 
          background-color: #1f2937; 
          color: #e5e7eb; 
          border-color: #374151;
        }
        .blog-content code { 
          background-color: #1f2937; 
          color: #e5e7eb; 
        }
        .blog-content pre code { color: inherit; }
        .blog-content blockquote { color: #9ca3af; }
        .blog-content hr { border-color: #374151; }
        .blog-content th, .blog-content td { border-color: #374151; }
        .blog-content th { 
          background-color: #1f2937; 
          color: #f3f4f6;
        }
        .blog-content .mermaid { background-color: #1f2937; }
      }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
    <script>
      document.addEventListener('DOMContentLoaded', function() {
        mermaid.initialize({ 
          startOnLoad: true,
          theme: 'default',
          themeVariables: {
            primaryColor: '#3b82f6',
            primaryTextColor: '#1f2937',
            primaryBorderColor: '#3b82f6',
            lineColor: '#6b7280',
            secondaryColor: '#e5e7eb',
            tertiaryColor: '#f3f4f6'
          }
        });
        mermaid.contentLoaded();
      });
    </script>
  `
}