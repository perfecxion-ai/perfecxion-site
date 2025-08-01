export interface ContentMetadata {
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  readingTime: number
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  category: string
  tags: string[]
  featured?: boolean
  slug: string
  author?: {
    name: string
    role: string
    avatar?: string
  }
}

export interface LearningContent extends ContentMetadata {
  type: 'learning'
  learningPath?: string
  prerequisites?: string[]
  learningObjectives?: string[]
  nextSections?: string[]
  relatedContent?: string[]
  progress?: {
    estimatedMinutes: number
    checkpoints: string[]
  }
  interactiveElements?: {
    quiz?: QuizQuestion[]
    assessment?: Assessment
    calculator?: string
    checklist?: ChecklistItem[]
  }
}

export interface BlogContent extends ContentMetadata {
  type: 'blog'
  excerpt?: string
  coverImage?: string
  series?: string
  seriesOrder?: number
}

export interface WhitePaperContent extends ContentMetadata {
  type: 'whitepaper'
  pdfUrl: string
  webUrl?: string
  fileSize: string
  pageCount: number
  downloadCount?: number
  gated: boolean
  summary: string
  keyTopics: string[]
  targetAudience: string[]
}

export interface QuizQuestion {
  id: string
  question: string
  type: 'multiple-choice' | 'true-false' | 'text'
  options?: string[]
  correctAnswer: string | number
  explanation: string
  points: number
}

export interface Assessment {
  id: string
  title: string
  description: string
  questions: QuizQuestion[]
  passingScore: number
  timeLimit?: number
}

export interface ChecklistItem {
  id: string
  task: string
  description?: string
  completed: boolean
  required: boolean
}

export interface ContentFilter {
  type?: 'all' | 'learning' | 'blog' | 'whitepaper'
  category?: string
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  tags?: string[]
  featured?: boolean
  search?: string
  sortBy?: 'date' | 'title' | 'popularity' | 'difficulty'
  sortOrder?: 'asc' | 'desc'
}

export interface LearningPath {
  id: string
  title: string
  description: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  estimatedDuration: string
  sections: LearningPathSection[]
  prerequisites?: string[]
  outcomes: string[]
  featured: boolean
  category: string
}

export interface LearningPathSection {
  id: string
  title: string
  description: string
  order: number
  content: string[]
  estimatedMinutes: number
  required: boolean
}

export interface ContentRecommendation {
  contentId: string
  score: number
  reason: 'similar-topic' | 'next-level' | 'related-path' | 'popular' | 'recent'
}

export interface UserProgress {
  contentId: string
  userId: string
  completed: boolean
  progress: number
  lastAccessed: string
  timeSpent: number
  checkpoints: string[]
  notes?: string
}

export interface ContentRating {
  contentId: string
  userId: string
  rating: number
  review?: string
  helpful: boolean
  createdAt: string
}

export interface ContentAnalytics {
  contentId: string
  views: number
  completions: number
  averageRating: number
  totalRatings: number
  averageTimeSpent: number
  popularityScore: number
  engagementRate: number
  lastUpdated: string
}

export interface ContentCategory {
  id: string
  name: string
  description: string
  icon: string
  color: string
  subcategories?: ContentCategory[]
  contentCount: number
}

export interface ContentTag {
  id: string
  name: string
  description?: string
  category: string
  usage: number
  trending: boolean
}

export interface SearchResult {
  content: LearningContent | BlogContent | WhitePaperContent
  score: number
  highlights: string[]
  matchType: 'title' | 'content' | 'tag' | 'category'
}

export interface ContentIndex {
  learning: LearningContent[]
  blog: BlogContent[]
  whitepapers: WhitePaperContent[]
  categories: ContentCategory[]
  tags: ContentTag[]
  learningPaths: LearningPath[]
}