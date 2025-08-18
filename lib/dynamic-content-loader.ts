import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { glob } from 'glob'
import readingTime from 'reading-time'

export interface ContentMetadata {
  title: string
  description: string
  date: string
  lastModified?: string
  author?: string
  category: string
  subcategory?: string
  tags: string[]
  difficulty?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  readTime?: string
  readingTime?: number
  featured?: boolean
  toc?: boolean
  slug: string
  filePath: string
  type: 'blog' | 'learning' | 'knowledge' | 'whitepaper'
  prerequisites?: string[]
  relatedContent?: string[]
}

export interface ContentItem extends ContentMetadata {
  content: string
  excerpt?: string
}

class DynamicContentLoader {
  private contentDir = path.join(process.cwd(), 'content')
  private cache = new Map<string, ContentItem[]>()
  private allContent: ContentItem[] = []
  private isInitialized = false

  constructor() {
    // Initialize on first use
  }

  private async initialize() {
    if (this.isInitialized) return
    await this.loadAllContent()
    this.isInitialized = true
  }

  private generateSlug(filePath: string): string {
    // Extract slug from file path
    const relativePath = path.relative(this.contentDir, filePath)
    const slug = relativePath
      .replace(/\\/g, '/')
      .replace(/\.mdx?$/, '')
      .replace(/\/index$/, '')
    return slug
  }

  private extractCategory(filePath: string): string {
    // Extract category from file path
    const relativePath = path.relative(this.contentDir, filePath)
    const parts = relativePath.split(path.sep)
    return parts[0] || 'uncategorized'
  }

  private determineContentType(filePath: string): ContentItem['type'] {
    const relativePath = path.relative(this.contentDir, filePath)
    if (relativePath.startsWith('blog')) return 'blog'
    if (relativePath.startsWith('learning')) return 'learning'
    if (relativePath.startsWith('whitepapers')) return 'whitepaper'
    return 'knowledge'
  }

  private generateExcerpt(content: string, maxLength: number = 160): string {
    // Remove MDX/markdown syntax and generate excerpt
    const plainText = content
      .replace(/^---[\s\S]*?---/, '') // Remove frontmatter
      .replace(/#{1,6}\s+/g, '') // Remove headers
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Replace links with text
      .replace(/[*_`~]/g, '') // Remove formatting
      .replace(/<[^>]+>/g, '') // Remove HTML tags
      .replace(/\n+/g, ' ') // Replace newlines with spaces
      .trim()
    
    if (plainText.length <= maxLength) return plainText
    return plainText.substring(0, maxLength).trim() + '...'
  }

  async loadAllContent(): Promise<ContentItem[]> {
    try {
      // Clear cache
      this.cache.clear()
      this.allContent = []

      // Find all MDX files
      const pattern = path.join(this.contentDir, '**/*.{md,mdx}')
      const files = await glob(pattern, { 
        ignore: ['**/node_modules/**', '**/.git/**']
      })

      // Process each file
      const contentItems = await Promise.all(
        files.map(async (filePath) => {
          try {
            const fileContent = await fs.promises.readFile(filePath, 'utf8')
            const { data: frontmatter, content } = matter(fileContent)
            
            // Calculate reading time
            const stats = readingTime(content)
            
            // Generate metadata
            const slug = this.generateSlug(filePath)
            const category = frontmatter.category || this.extractCategory(filePath)
            const type = this.determineContentType(filePath)
            
            const item: ContentItem = {
              title: frontmatter.title || 'Untitled',
              description: frontmatter.description || '',
              date: frontmatter.date || frontmatter.publishedAt || new Date().toISOString(),
              lastModified: frontmatter.lastModified || frontmatter.date,
              author: frontmatter.author || 'perfecXion AI Team',
              category,
              subcategory: frontmatter.subcategory,
              tags: frontmatter.tags || [],
              difficulty: frontmatter.difficulty || 'intermediate',
              readTime: frontmatter.readTime || `${Math.ceil(stats.minutes)} min read`,
              readingTime: Math.ceil(stats.minutes),
              featured: frontmatter.featured || false,
              toc: frontmatter.toc !== false,
              slug,
              filePath,
              type,
              prerequisites: frontmatter.prerequisites || [],
              relatedContent: frontmatter.relatedContent || [],
              content,
              excerpt: frontmatter.excerpt || this.generateExcerpt(content)
            }
            
            return item
          } catch (error) {
            console.error(`Error processing file ${filePath}:`, error)
            return null
          }
        })
      )

      // Filter out null items and store
      this.allContent = contentItems.filter((item): item is ContentItem => item !== null)
      
      // Sort by date (newest first)
      this.allContent.sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      )

      return this.allContent
    } catch (error) {
      console.error('Failed to load content:', error)
      return []
    }
  }

  async getAllContent(): Promise<ContentItem[]> {
    await this.initialize()
    return this.allContent
  }

  async getContentByCategory(category: string): Promise<ContentItem[]> {
    await this.initialize()
    return this.allContent.filter(item => 
      item.category.toLowerCase() === category.toLowerCase()
    )
  }

  async getContentByType(type: ContentItem['type']): Promise<ContentItem[]> {
    await this.initialize()
    return this.allContent.filter(item => item.type === type)
  }

  async getContentBySlug(slug: string): Promise<ContentItem | null> {
    await this.initialize()
    return this.allContent.find(item => item.slug === slug) || null
  }

  async getFeaturedContent(): Promise<ContentItem[]> {
    await this.initialize()
    return this.allContent.filter(item => item.featured)
  }

  async getContentByTag(tag: string): Promise<ContentItem[]> {
    await this.initialize()
    return this.allContent.filter(item => 
      item.tags.some(t => t.toLowerCase() === tag.toLowerCase())
    )
  }

  async getContentByDifficulty(difficulty: ContentMetadata['difficulty']): Promise<ContentItem[]> {
    await this.initialize()
    return this.allContent.filter(item => item.difficulty === difficulty)
  }

  async searchContent(query: string): Promise<ContentItem[]> {
    await this.initialize()
    const searchTerm = query.toLowerCase()
    
    return this.allContent.filter(item => {
      const searchableText = `
        ${item.title} 
        ${item.description} 
        ${item.tags.join(' ')} 
        ${item.content}
      `.toLowerCase()
      
      return searchableText.includes(searchTerm)
    })
  }

  async getRelatedContent(slug: string, limit: number = 5): Promise<ContentItem[]> {
    await this.initialize()
    const currentItem = await this.getContentBySlug(slug)
    if (!currentItem) return []

    // Find related by tags and category
    const related = this.allContent
      .filter(item => item.slug !== slug)
      .map(item => {
        let score = 0
        
        // Same category = 3 points
        if (item.category === currentItem.category) score += 3
        
        // Same subcategory = 2 points
        if (item.subcategory && item.subcategory === currentItem.subcategory) score += 2
        
        // Shared tags = 1 point per tag
        const sharedTags = item.tags.filter(tag => 
          currentItem.tags.includes(tag)
        )
        score += sharedTags.length
        
        // Explicitly listed as related
        if (currentItem.relatedContent?.includes(item.slug)) score += 5
        
        return { item, score }
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(({ item }) => item)
    
    return related
  }

  async getCategories(): Promise<Array<{ name: string; count: number }>> {
    await this.initialize()
    const categoryMap = new Map<string, number>()
    
    this.allContent.forEach(item => {
      const count = categoryMap.get(item.category) || 0
      categoryMap.set(item.category, count + 1)
    })
    
    return Array.from(categoryMap.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
  }

  async getTags(): Promise<Array<{ name: string; count: number }>> {
    await this.initialize()
    const tagMap = new Map<string, number>()
    
    this.allContent.forEach(item => {
      item.tags.forEach(tag => {
        const count = tagMap.get(tag) || 0
        tagMap.set(tag, count + 1)
      })
    })
    
    return Array.from(tagMap.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
  }

  async getContentStats(): Promise<{
    total: number
    byType: Record<string, number>
    byCategory: Record<string, number>
    byDifficulty: Record<string, number>
  }> {
    await this.initialize()
    
    const stats = {
      total: this.allContent.length,
      byType: {} as Record<string, number>,
      byCategory: {} as Record<string, number>,
      byDifficulty: {} as Record<string, number>
    }
    
    this.allContent.forEach(item => {
      // By type
      stats.byType[item.type] = (stats.byType[item.type] || 0) + 1
      
      // By category
      stats.byCategory[item.category] = (stats.byCategory[item.category] || 0) + 1
      
      // By difficulty
      if (item.difficulty) {
        stats.byDifficulty[item.difficulty] = (stats.byDifficulty[item.difficulty] || 0) + 1
      }
    })
    
    return stats
  }
}

// Export singleton instance
export const contentLoader = new DynamicContentLoader()

// Export for use in API routes
export default DynamicContentLoader