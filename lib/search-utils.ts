import { ContentItem } from './content-loader'

// Calculate relevance score for search
export function calculateRelevanceScore(item: ContentItem, query: string): number {
  const searchTerms = query.toLowerCase().split(/\s+/).filter(term => term.length > 0)
  let score = 0
  
  searchTerms.forEach(term => {
    // Title matches (highest weight)
    if (item.title.toLowerCase().includes(term)) {
      // Exact word match in title
      if (new RegExp(`\\b${term}\\b`, 'i').test(item.title)) {
        score += 10
      } else {
        score += 5
      }
    }
    
    // Description matches (medium weight)
    if (item.description.toLowerCase().includes(term)) {
      // Exact word match in description
      if (new RegExp(`\\b${term}\\b`, 'i').test(item.description)) {
        score += 5
      } else {
        score += 2
      }
    }
    
    // Topic matches (medium-high weight)
    item.topics.forEach(topic => {
      if (topic.toLowerCase().includes(term)) {
        score += 7
      }
    })
    
    // Domain match
    if (item.domain.toLowerCase().includes(term)) {
      score += 3
    }
    
    // Format match
    if (item.format.toLowerCase().includes(term)) {
      score += 2
    }
    
    // Difficulty match
    if (item.difficulty.toLowerCase().includes(term)) {
      score += 1
    }
  })
  
  // Boost recent content slightly
  if (item.isNew) {
    score += 1
  }
  
  // Boost by exact phrase match
  if (item.title.toLowerCase().includes(query.toLowerCase())) {
    score += 15
  }
  if (item.description.toLowerCase().includes(query.toLowerCase())) {
    score += 8
  }
  
  return score
}

// Fuzzy search with Levenshtein distance
function levenshteinDistance(str1: string, str2: string): number {
  const matrix = []
  
  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i]
  }
  
  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j
  }
  
  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1]
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        )
      }
    }
  }
  
  return matrix[str2.length][str1.length]
}

// Check if a term is similar enough to consider a match
export function isFuzzyMatch(term: string, text: string, threshold: number = 2): boolean {
  const words = text.toLowerCase().split(/\s+/)
  for (const word of words) {
    if (word.length > 3 && term.length > 3) {
      const distance = levenshteinDistance(term.toLowerCase(), word)
      if (distance <= threshold) {
        return true
      }
    }
  }
  return false
}

// Advanced search function
export function searchContent(items: ContentItem[], query: string): ContentItem[] {
  if (!query || query.trim() === '') {
    return items
  }
  
  const searchQuery = query.trim().toLowerCase()
  
  // Score and filter items
  const scoredItems = items.map(item => {
    const exactScore = calculateRelevanceScore(item, searchQuery)
    
    // Add fuzzy matching bonus
    let fuzzyScore = 0
    const searchTerms = searchQuery.split(/\s+/)
    searchTerms.forEach(term => {
      if (term.length > 3) {
        if (isFuzzyMatch(term, item.title)) fuzzyScore += 3
        if (isFuzzyMatch(term, item.description)) fuzzyScore += 1
      }
    })
    
    const totalScore = exactScore + fuzzyScore
    
    return {
      item,
      score: totalScore
    }
  })
  
  // Filter out items with no matches
  const matchedItems = scoredItems.filter(({ score }) => score > 0)
  
  // Sort by relevance score (highest first)
  matchedItems.sort((a, b) => b.score - a.score)
  
  return matchedItems.map(({ item }) => item)
}

// Highlight search terms in text
export function highlightSearchTerms(text: string, query: string): string {
  if (!query || !text) return text
  
  const searchTerms = query.trim().split(/\s+/).filter(term => term.length > 0)
  let highlightedText = text
  
  searchTerms.forEach(term => {
    const regex = new RegExp(`(${term})`, 'gi')
    highlightedText = highlightedText.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-800">$1</mark>')
  })
  
  return highlightedText
}

// Get search suggestions based on existing content
export function getSearchSuggestions(items: ContentItem[], query: string): string[] {
  if (!query || query.length < 2) return []
  
  const suggestions = new Set<string>()
  const lowerQuery = query.toLowerCase()
  
  // Collect suggestions from titles
  items.forEach(item => {
    if (item.title.toLowerCase().includes(lowerQuery)) {
      // Extract relevant portion of title
      const words = item.title.split(/\s+/)
      words.forEach(word => {
        if (word.toLowerCase().startsWith(lowerQuery)) {
          suggestions.add(word)
        }
      })
    }
    
    // Add matching topics
    item.topics.forEach(topic => {
      if (topic.toLowerCase().includes(lowerQuery)) {
        suggestions.add(topic)
      }
    })
  })
  
  return Array.from(suggestions).slice(0, 5)
}

// Find related content based on topics and domain
export function findRelatedContent(
  currentItem: ContentItem, 
  allItems: ContentItem[], 
  limit: number = 3
): ContentItem[] {
  // Filter out the current item
  const otherItems = allItems.filter(item => item.id !== currentItem.id)
  
  // Score each item based on similarity
  const scoredItems = otherItems.map(item => {
    let score = 0
    
    // Same domain (high weight)
    if (item.domain === currentItem.domain) {
      score += 5
    }
    
    // Same format (medium weight)
    if (item.format === currentItem.format) {
      score += 3
    }
    
    // Same difficulty (low weight)
    if (item.difficulty === currentItem.difficulty) {
      score += 1
    }
    
    // Shared topics (highest weight)
    const sharedTopics = item.topics.filter(topic => 
      currentItem.topics.includes(topic)
    )
    score += sharedTopics.length * 8
    
    return { item, score }
  })
  
  // Sort by score and return top items
  scoredItems.sort((a, b) => b.score - a.score)
  
  return scoredItems
    .slice(0, limit)
    .filter(({ score }) => score > 0)
    .map(({ item }) => item)
}