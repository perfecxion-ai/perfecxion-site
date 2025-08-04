import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

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
      
      // Convert markdown to HTML
      const htmlContent = await marked.parse(content)
      
      return NextResponse.json({ content: htmlContent })
    }
    
    // Read the MDX file
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { content } = matter(fileContent)
    
    // Convert MDX to HTML (for now, treat it as markdown)
    const htmlContent = await marked.parse(content)
    
    return NextResponse.json({ content: htmlContent })
  } catch (error) {
    console.error('Error loading blog content:', error)
    return NextResponse.json({ error: 'Failed to load blog content' }, { status: 500 })
  }
}