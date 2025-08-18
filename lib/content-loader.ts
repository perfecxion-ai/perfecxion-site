import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface ContentItem {
  id: string
  title: string
  description: string
  format: 'article' | 'whitepaper' | 'learning' | 'architecture'
  domain: 'infrastructure' | 'security' | 'compliance' | 'operations'
  topics: string[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  readTime: string
  href: string
  isNew?: boolean
  date?: string
  author?: string
  excerpt?: string
}

// Map old categories to new domains
const categoryToDomain: Record<string, ContentItem['domain']> = {
  'security': 'security',
  'infrastructure': 'infrastructure',
  'compliance': 'compliance',
  'operations': 'operations',
  'industry': 'operations',
  // Default mapping for uncategorized content
  'default': 'security'
}

// Map old types to new formats
const typeToFormat: Record<string, ContentItem['format']> = {
  'blog': 'article',
  'article': 'article',
  'whitepaper': 'whitepaper',
  'learning': 'learning',
  'tutorial': 'learning',
  'architecture': 'architecture',
  'reference': 'architecture',
  // Default
  'default': 'article'
}

// Extract topics from content
function extractTopics(content: any): string[] {
  const topics: string[] = []
  
  // Add tags if they exist
  if (content.tags && Array.isArray(content.tags)) {
    topics.push(...content.tags)
  }
  
  // Add specific technology mentions
  const title = content.title?.toLowerCase() || ''
  const description = content.description?.toLowerCase() || ''
  const fullText = `${title} ${description}`
  
  // Technology detection
  if (fullText.includes('rocev2') || fullText.includes('roce')) topics.push('RoCEv2')
  if (fullText.includes('infiniband')) topics.push('InfiniBand')
  if (fullText.includes('llm')) topics.push('LLM Training')
  if (fullText.includes('prompt injection')) topics.push('Prompt Injection')
  if (fullText.includes('neural network')) topics.push('Neural Networks')
  if (fullText.includes('gpu')) topics.push('GPU Clusters')
  if (fullText.includes('400g')) topics.push('400G Networking')
  if (fullText.includes('800g')) topics.push('800G Networking')
  if (fullText.includes('hipaa')) topics.push('HIPAA Compliance')
  if (fullText.includes('distributed')) topics.push('Distributed Training')
  if (fullText.includes('ai fabric')) topics.push('AI Fabric')
  if (fullText.includes('zero trust')) topics.push('Zero Trust')
  if (fullText.includes('model security')) topics.push('Model Security')
  if (fullText.includes('rdma')) topics.push('RDMA')
  if (fullText.includes('networking')) topics.push('Networking')
  
  // Remove duplicates
  return Array.from(new Set(topics)).slice(0, 5) // Limit to 5 topics
}

// Determine difficulty based on content
function determineDifficulty(content: any): ContentItem['difficulty'] {
  if (content.difficulty) return content.difficulty
  
  const text = `${content.title} ${content.description}`.toLowerCase()
  
  if (text.includes('advanced') || text.includes('deep dive') || text.includes('expert')) {
    return 'advanced'
  }
  if (text.includes('beginner') || text.includes('getting started') || text.includes('introduction')) {
    return 'beginner'
  }
  
  return 'intermediate'
}

// Load content from a directory
async function loadContentFromDirectory(
  contentDir: string,
  baseUrl: string,
  defaultFormat: ContentItem['format'] = 'article'
): Promise<ContentItem[]> {
  const items: ContentItem[] = []
  
  try {
    // Check if directory exists
    if (!fs.existsSync(contentDir)) {
      return items
    }
    
    // Read all subdirectories and files
    const walkDir = (dir: string, relativePath: string = '') => {
      const files = fs.readdirSync(dir)
      
      files.forEach(file => {
        const filePath = path.join(dir, file)
        const stat = fs.statSync(filePath)
        
        if (stat.isDirectory()) {
          // Recursively walk subdirectories
          walkDir(filePath, path.join(relativePath, file))
        } else if (file.endsWith('.mdx') || file.endsWith('.md')) {
          // Process MDX/MD files
          const fileContent = fs.readFileSync(filePath, 'utf-8')
          const { data } = matter(fileContent)
          
          // Skip drafts
          if (data.draft) return
          
          // Determine URL path - preserve the full directory structure
          const slug = file.replace(/\.(mdx|md)$/, '')
          const fullRelativePath = relativePath ? `${relativePath}/${slug}` : slug
          const urlPath = `${baseUrl}/${fullRelativePath}`
          
          // Determine domain from category or path
          const domain = data.category ? 
            (categoryToDomain[data.category] || categoryToDomain.default) :
            (relativePath.includes('security') ? 'security' :
             relativePath.includes('infrastructure') ? 'infrastructure' :
             relativePath.includes('compliance') ? 'compliance' :
             'operations')
          
          // Determine format
          const format = data.type ? 
            (typeToFormat[data.type] || typeToFormat.default) :
            defaultFormat
          
          // Check if new (within last 30 days)
          const isNew = data.date ? 
            (new Date().getTime() - new Date(data.date).getTime()) < 30 * 24 * 60 * 60 * 1000 :
            false
          
          items.push({
            id: urlPath,
            title: data.title || 'Untitled',
            description: data.description || data.excerpt || '',
            format,
            domain,
            topics: extractTopics(data),
            difficulty: determineDifficulty(data),
            readTime: data.readTime || data.readingTime || '10 min',
            href: urlPath,
            isNew,
            date: data.date,
            author: data.author,
            excerpt: data.excerpt
          })
        }
      })
    }
    
    walkDir(contentDir)
  } catch (error) {
    console.error(`Error loading content from ${contentDir}:`, error)
  }
  
  return items
}

// Main function to load all content
export async function loadAllContent(): Promise<ContentItem[]> {
  const contentItems: ContentItem[] = []
  
  // Load blog content (as articles)
  const blogContent = await loadContentFromDirectory(
    path.join(process.cwd(), 'content', 'blog'),
    '/knowledge',
    'article'
  )
  contentItems.push(...blogContent)
  
  // Load learning content
  const learningContent = await loadContentFromDirectory(
    path.join(process.cwd(), 'content', 'learning'),
    '/knowledge',
    'learning'
  )
  contentItems.push(...learningContent)
  
  // Load white papers
  const whitepaperContent = await loadContentFromDirectory(
    path.join(process.cwd(), 'content', 'white-papers'),
    '/knowledge',
    'whitepaper'
  )
  contentItems.push(...whitepaperContent)
  
  // Note: knowledge directory doesn't exist yet
  // const knowledgeContent = await loadContentFromDirectory(
  //   path.join(process.cwd(), 'content', 'knowledge'),
  //   '/knowledge',
  //   'article'
  // )
  // contentItems.push(...knowledgeContent)
  
  // Sort by date (newest first)
  contentItems.sort((a, b) => {
    if (!a.date && !b.date) return 0
    if (!a.date) return 1
    if (!b.date) return -1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
  
  return contentItems
}

// Function to get content for the Knowledge Hub page
export async function getKnowledgeHubContent(): Promise<ContentItem[]> {
  return loadAllContent()
}