import { products } from './products'

export interface SearchDocument {
  id: string
  title: string
  description: string
  content: string
  url: string
  type: 'page' | 'blog' | 'docs' | 'product' | 'whitepaper' | 'learn'
  category?: string
  tags?: string[]
  date?: string
  score?: number
}

export interface SearchIndex {
  documents: SearchDocument[]
  terms: Map<string, Set<string>> // term -> document IDs
}

// Stop words to ignore in search
const STOP_WORDS = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from',
  'has', 'he', 'in', 'is', 'it', 'its', 'of', 'on', 'that', 'the',
  'to', 'was', 'will', 'with', 'the', 'this', 'but', 'they', 'have',
  'had', 'what', 'when', 'where', 'who', 'which', 'why', 'how'
])

// Tokenize and normalize text for indexing
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(token => token.length > 2 && !STOP_WORDS.has(token))
}

// Calculate TF-IDF score
function calculateScore(
  term: string,
  documentId: string,
  documents: SearchDocument[],
  termFrequencies: Map<string, Map<string, number>>
): number {
  const totalDocs = documents.length
  const docsWithTerm = termFrequencies.get(term)?.size || 0
  const termFreq = termFrequencies.get(term)?.get(documentId) || 0
  
  if (docsWithTerm === 0 || termFreq === 0) return 0
  
  const tf = termFreq
  const idf = Math.log(totalDocs / docsWithTerm)
  
  return tf * idf
}

// Build search index from documents
export function buildSearchIndex(documents: SearchDocument[]): SearchIndex {
  const terms = new Map<string, Set<string>>()
  const termFrequencies = new Map<string, Map<string, number>>()
  
  documents.forEach(doc => {
    const allText = `${doc.title} ${doc.description} ${doc.content}`.toLowerCase()
    const tokens = tokenize(allText)
    
    tokens.forEach(token => {
      // Add to terms index
      if (!terms.has(token)) {
        terms.set(token, new Set())
      }
      terms.get(token)!.add(doc.id)
      
      // Track term frequency
      if (!termFrequencies.has(token)) {
        termFrequencies.set(token, new Map())
      }
      const docFreqs = termFrequencies.get(token)!
      docFreqs.set(doc.id, (docFreqs.get(doc.id) || 0) + 1)
    })
  })
  
  return { documents, terms }
}

// Search function with ranking
export function search(
  query: string,
  index: SearchIndex,
  options?: {
    limit?: number
    type?: SearchDocument['type']
    fuzzy?: boolean
  }
): SearchDocument[] {
  const { limit = 20, type, fuzzy = true } = options || {}
  const queryTokens = tokenize(query)
  
  if (queryTokens.length === 0) return []
  
  // Find matching documents
  const documentScores = new Map<string, number>()
  const termFrequencies = new Map<string, Map<string, number>>()
  
  // Build term frequencies for scoring
  index.documents.forEach(doc => {
    const allText = `${doc.title} ${doc.description} ${doc.content}`.toLowerCase()
    const tokens = tokenize(allText)
    
    tokens.forEach(token => {
      if (!termFrequencies.has(token)) {
        termFrequencies.set(token, new Map())
      }
      const docFreqs = termFrequencies.get(token)!
      docFreqs.set(doc.id, (docFreqs.get(doc.id) || 0) + 1)
    })
  })
  
  queryTokens.forEach(queryToken => {
    // Exact matches
    const exactMatches = index.terms.get(queryToken)
    if (exactMatches) {
      exactMatches.forEach(docId => {
        const currentScore = documentScores.get(docId) || 0
        const tfIdfScore = calculateScore(queryToken, docId, index.documents, termFrequencies)
        documentScores.set(docId, currentScore + tfIdfScore)
      })
    }
    
    // Fuzzy matching
    if (fuzzy) {
      index.terms.forEach((docIds, term) => {
        if (term.includes(queryToken) || queryToken.includes(term)) {
          const similarity = Math.min(queryToken.length, term.length) / Math.max(queryToken.length, term.length)
          docIds.forEach(docId => {
            const currentScore = documentScores.get(docId) || 0
            const tfIdfScore = calculateScore(term, docId, index.documents, termFrequencies)
            documentScores.set(docId, currentScore + (tfIdfScore * similarity * 0.7))
          })
        }
      })
    }
  })
  
  // Get matching documents with scores
  const results = index.documents
    .filter(doc => {
      if (!documentScores.has(doc.id)) return false
      if (type && doc.type !== type) return false
      return true
    })
    .map(doc => ({
      ...doc,
      score: documentScores.get(doc.id) || 0
    }))
  
  // Boost scores based on match location
  results.forEach(doc => {
    const lowerQuery = query.toLowerCase()
    const titleMatch = doc.title.toLowerCase().includes(lowerQuery)
    const descMatch = doc.description.toLowerCase().includes(lowerQuery)
    
    if (titleMatch) doc.score! *= 2
    if (descMatch) doc.score! *= 1.5
    
    // Boost recent content
    if (doc.date) {
      const age = Date.now() - new Date(doc.date).getTime()
      const ageInDays = age / (1000 * 60 * 60 * 24)
      if (ageInDays < 30) doc.score! *= 1.2
      else if (ageInDays < 90) doc.score! *= 1.1
    }
  })
  
  // Sort by score and return top results
  return results
    .sort((a, b) => (b.score || 0) - (a.score || 0))
    .slice(0, limit)
}

// Generate search documents from site content
export async function generateSearchDocuments(): Promise<SearchDocument[]> {
  const documents: SearchDocument[] = []
  
  // Add products
  products.forEach(product => {
    documents.push({
      id: `product-${product.id}`,
      title: product.name,
      description: product.description,
      content: `${product.features.join(' ')} ${product.benefits?.join(' ') || ''} ${product.useCases?.join(' ') || ''}`,
      url: `/products/${product.id}`,
      type: 'product',
      category: product.category,
      tags: product.features
    })
  })
  
  // Add static pages
  const staticPages = [
    {
      id: 'home',
      title: 'perfecXion.ai - AI Security and Compliance Solutions',
      description: 'Enterprise-grade AI security platform protecting your AI infrastructure',
      content: 'AI security compliance threat detection vulnerability scanning red teaming',
      url: '/',
      type: 'page' as const
    },
    {
      id: 'about',
      title: 'About perfecXion.ai',
      description: 'Learn about our mission to secure AI systems worldwide',
      content: 'company mission vision team leadership AI security experts',
      url: '/about',
      type: 'page' as const
    },
    {
      id: 'contact',
      title: 'Contact Us',
      description: 'Get in touch with our AI security experts',
      content: 'contact sales support demo consultation enterprise',
      url: '/contact',
      type: 'page' as const
    }
  ]
  
  documents.push(...staticPages)
  
  // TODO: Add blog posts, documentation, and white papers dynamically
  
  return documents
}

// Highlight search terms in text
export function highlightSearchTerms(text: string, query: string): string {
  const terms = tokenize(query)
  let highlighted = text
  
  terms.forEach(term => {
    const regex = new RegExp(`\\b(${term})\\b`, 'gi')
    highlighted = highlighted.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-800">$1</mark>')
  })
  
  return highlighted
}