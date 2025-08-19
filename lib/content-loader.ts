import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface ContentItem {
  id: string
  title: string
  description: string
  format: 'article' | 'whitepaper' | 'learning' | 'architecture'
  domain: 'machine-learning' | 'ai-security' | 'ai-networking' | 'ai-infrastructure' | 'compliance' | 'operations'
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
  'security': 'ai-security',
  'infrastructure': 'ai-infrastructure',
  'compliance': 'compliance',
  'operations': 'operations',
  'industry': 'operations',
  'networking': 'ai-networking',
  'ai-fabrics': 'ai-infrastructure',
  'performance': 'ai-infrastructure',
  'architecture': 'ai-infrastructure',
  'threats': 'ai-security',
  'red-team': 'ai-security',
  'defense': 'ai-security',
  'fundamentals': 'ai-security',
  'standards': 'compliance',
  'regulations': 'compliance',
  'auditing': 'compliance',
  'governance': 'compliance',
  'healthcare': 'compliance',
  'enterprise': 'operations',
  'finance': 'compliance',
  'government': 'compliance',
  // Default mapping for uncategorized content
  'default': 'ai-security'
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

  // AI & Machine Learning Topics
  if (fullText.includes('llm') || fullText.includes('large language model')) topics.push('LLMs')
  if (fullText.includes('neural network') || fullText.includes('deep learning')) topics.push('Neural Networks')
  if (fullText.includes('transformer') || fullText.includes('attention')) topics.push('Transformers')
  if (fullText.includes('machine learning') || fullText.includes('ml')) topics.push('Machine Learning')
  if (fullText.includes('training') || fullText.includes('model training')) topics.push('Model Training')
  if (fullText.includes('fine-tuning') || fullText.includes('finetuning')) topics.push('Fine-tuning')
  if (fullText.includes('prompt engineering') || fullText.includes('prompting')) topics.push('Prompt Engineering')
  if (fullText.includes('rag') || fullText.includes('retrieval augmented')) topics.push('RAG')
  if (fullText.includes('vector database') || fullText.includes('embeddings')) topics.push('Vector Databases')
  if (fullText.includes('multimodal') || fullText.includes('vision')) topics.push('Multimodal AI')
  if (fullText.includes('agent') || fullText.includes('autonomous')) topics.push('AI Agents')

  // AI Security Topics
  if (fullText.includes('prompt injection') || fullText.includes('jailbreak')) topics.push('Prompt Injection')
  if (fullText.includes('adversarial') || fullText.includes('attack')) topics.push('Adversarial Attacks')
  if (fullText.includes('model poisoning') || fullText.includes('data poisoning')) topics.push('Model Poisoning')
  if (fullText.includes('model security') || fullText.includes('llm security')) topics.push('Model Security')
  if (fullText.includes('ai safety') || fullText.includes('alignment')) topics.push('AI Safety')
  if (fullText.includes('red team') || fullText.includes('penetration testing')) topics.push('Red Teaming')
  if (fullText.includes('threat modeling') || fullText.includes('risk assessment')) topics.push('Threat Modeling')
  if (fullText.includes('zero trust') || fullText.includes('trust')) topics.push('Zero Trust')
  if (fullText.includes('guardrails') || fullText.includes('safety measures')) topics.push('Guardrails')

  // AI Infrastructure Topics
  if (fullText.includes('gpu') || fullText.includes('accelerator')) topics.push('GPU Clusters')
  if (fullText.includes('distributed') || fullText.includes('cluster')) topics.push('Distributed Training')
  if (fullText.includes('ai fabric') || fullText.includes('interconnect')) topics.push('AI Fabric')
  if (fullText.includes('scaling') || fullText.includes('performance')) topics.push('Scaling')
  if (fullText.includes('deployment') || fullText.includes('production')) topics.push('Production Deployment')
  if (fullText.includes('monitoring') || fullText.includes('observability')) topics.push('Monitoring')
  if (fullText.includes('mlops') || fullText.includes('devops')) topics.push('MLOps')

  // AI Networking Topics
  if (fullText.includes('rocev2') || fullText.includes('roce')) topics.push('RoCEv2')
  if (fullText.includes('infiniband') || fullText.includes('ib')) topics.push('InfiniBand')
  if (fullText.includes('rdma') || fullText.includes('remote direct')) topics.push('RDMA')
  if (fullText.includes('400g') || fullText.includes('800g')) topics.push('High-Speed Networking')
  if (fullText.includes('latency') || fullText.includes('bandwidth')) topics.push('Network Performance')
  if (fullText.includes('topology') || fullText.includes('network design')) topics.push('Network Topology')

  // Compliance Topics
  if (fullText.includes('hipaa') || fullText.includes('healthcare')) topics.push('HIPAA')
  if (fullText.includes('gdpr') || fullText.includes('privacy')) topics.push('GDPR')
  if (fullText.includes('sox') || fullText.includes('sarbanes')) topics.push('SOX')
  if (fullText.includes('pci') || fullText.includes('payment')) topics.push('PCI DSS')
  if (fullText.includes('fedramp') || fullText.includes('government')) topics.push('FedRAMP')
  if (fullText.includes('compliance') || fullText.includes('regulation')) topics.push('Compliance')
  if (fullText.includes('audit') || fullText.includes('governance')) topics.push('Audit & Governance')

  // Operations Topics
  if (fullText.includes('incident response') || fullText.includes('security operations')) topics.push('Incident Response')
  if (fullText.includes('monitoring') || fullText.includes('detection')) topics.push('Security Monitoring')
  if (fullText.includes('vulnerability') || fullText.includes('assessment')) topics.push('Vulnerability Assessment')
  if (fullText.includes('risk management') || fullText.includes('risk assessment')) topics.push('Risk Management')
  if (fullText.includes('business continuity') || fullText.includes('disaster recovery')) topics.push('Business Continuity')

  // Remove duplicates and limit to 8 topics for better display
  return Array.from(new Set(topics)).slice(0, 8)
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

// Smart format inference based on content
function inferFormat(content: any, defaultFormat: ContentItem['format'] = 'article'): ContentItem['format'] {
  // First check if explicit type is set
  if (content.type) {
    return typeToFormat[content.type] || typeToFormat.default
  }

  const title = content.title?.toLowerCase() || ''
  const description = content.description?.toLowerCase() || ''
  const fullText = `${title} ${description}`

  // Look for white paper indicators
  if (title.includes('white paper') ||
    title.includes('whitepaper') ||
    title.includes('technical white paper') ||
    title.includes('comprehensive technical white paper') ||
    title.includes('executive report') ||
    fullText.includes('executive summary')) {
    return 'whitepaper'
  }

  // Look for learning path indicators  
  if (title.includes('guide') ||
    title.includes('tutorial') ||
    title.includes('complete guide') ||
    title.includes('comprehensive guide') ||
    title.includes('step-by-step') ||
    title.includes('learning path') ||
    title.includes('getting started') ||
    fullText.includes('learn how to')) {
    return 'learning'
  }

  // Look for reference architecture indicators
  if (title.includes('architecture') ||
    title.includes('reference') ||
    title.includes('framework') ||
    title.includes('implementation guide') ||
    title.includes('system design') ||
    title.includes('blueprint') ||
    fullText.includes('architectural') ||
    fullText.includes('implementation strategy')) {
    return 'architecture'
  }

  // Default to article
  return defaultFormat
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
          let domain: ContentItem['domain'] = categoryToDomain.default
          
          if (data.category && categoryToDomain[data.category]) {
            domain = categoryToDomain[data.category]
          } else if (relativePath.includes('security')) {
            domain = 'ai-security'
          } else if (relativePath.includes('infrastructure')) {
            domain = 'ai-infrastructure'
          } else if (relativePath.includes('compliance')) {
            domain = 'compliance'
          } else if (relativePath.includes('operations') || relativePath.includes('industry')) {
            domain = 'operations'
          } else if (relativePath.includes('networking')) {
            domain = 'ai-networking'
          } else if (relativePath.includes('machine-learning') || relativePath.includes('ml')) {
            domain = 'machine-learning'
          }

          // Determine format using smart inference
          const format = inferFormat(data, defaultFormat)

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

  // Load all content from the knowledge directory (the single source of truth)
  const knowledgeContent = await loadContentFromDirectory(
    path.join(process.cwd(), 'content', 'knowledge'),
    '/knowledge',
    'article'
  )
  contentItems.push(...knowledgeContent)

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