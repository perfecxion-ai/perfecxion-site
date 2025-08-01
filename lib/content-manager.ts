import { 
  ContentIndex, 
  ContentFilter, 
  SearchResult, 
  LearningContent, 
  BlogContent, 
  WhitePaperContent,
  ContentRecommendation,
  LearningPath,
  ContentCategory,
  ContentTag
} from './content-types'

class ContentManager {
  private contentIndex: ContentIndex = {
    learning: [],
    blog: [],
    whitepapers: [],
    categories: [],
    tags: [],
    learningPaths: []
  }

  private searchIndex: Map<string, string[]> = new Map()

  constructor() {
    this.initializeContentIndex()
  }

  private async initializeContentIndex() {
    try {
      // Load and index all content
      await this.loadLearningContent()
      await this.loadBlogContent()
      await this.loadWhitePapers()
      await this.loadLearningPaths()
      await this.buildSearchIndex()
      await this.generateCategoriesAndTags()
    } catch (error) {
      console.error('Failed to initialize content index:', error)
    }
  }

  private async loadLearningContent() {
    // Load actual learning content
    this.contentIndex.learning = [
      {
        type: 'learning',
        title: 'Getting Started with AI Security',
        description: 'Learn the fundamentals of AI security and best practices for protecting your AI systems',
        publishedAt: '2025-01-21',
        readingTime: 10,
        difficulty: 'beginner',
        category: 'fundamentals',
        tags: ['ai-security', 'getting-started', 'basics', 'fundamentals'],
        slug: 'getting-started',
        featured: true,
        learningPath: 'ai-security-101',
        learningObjectives: [
          'Understand AI security fundamentals',
          'Learn about red team testing',
          'Discover agent monitoring concepts',
          'Understand compliance requirements'
        ],
        progress: {
          estimatedMinutes: 10,
          checkpoints: ['concepts', 'red-team', 'monitoring', 'compliance', 'next-steps']
        }
      },
      {
        type: 'learning',
        title: 'Understanding AI Vulnerabilities',
        description: 'Comprehensive guide to AI security fundamentals and common vulnerabilities that threaten AI systems in production.',
        publishedAt: '2024-01-15',
        readingTime: 25,
        difficulty: 'beginner',
        category: 'fundamentals',
        tags: ['ai-security', 'vulnerabilities', 'basics', 'threat-landscape'],
        slug: 'understanding-ai-vulnerabilities',
        featured: true,
        learningPath: 'ai-security-101',
        learningObjectives: [
          'Identify common AI vulnerabilities and their impact',
          'Understand the unique threat landscape for AI systems',
          'Recognize security risks in AI model lifecycle',
          'Learn foundational concepts for AI security implementation'
        ],
        progress: {
          estimatedMinutes: 25,
          checkpoints: ['introduction', 'vulnerabilities', 'examples', 'mitigation', 'next-steps']
        }
      },
      {
        type: 'learning',
        title: 'Types of AI Attacks',
        description: 'Comprehensive analysis of AI attack methodologies, attack vectors, and real-world case studies with technical implementation details.',
        publishedAt: '2024-01-16',
        readingTime: 30,
        difficulty: 'intermediate',
        category: 'threats',
        tags: ['ai-attacks', 'threat-landscape', 'security-assessment', 'attack-vectors'],
        slug: 'types-of-ai-attacks',
        featured: true,
        learningPath: 'ai-security-101',
        learningObjectives: [
          'Master the taxonomy of AI attack methodologies',
          'Understand technical implementation of different attack types',
          'Analyze real-world attack case studies and their impact',
          'Learn to identify attack indicators and early warning signs'
        ],
        progress: {
          estimatedMinutes: 30,
          checkpoints: ['attack-taxonomy', 'technical-analysis', 'case-studies', 'detection', 'mitigation']
        }
      },
      {
        type: 'learning',
        title: 'Building AI Security Programs',
        description: 'Comprehensive guide to implementing enterprise-grade AI security programs with frameworks, methodologies, and governance structures.',
        publishedAt: '2024-01-17',
        readingTime: 35,
        difficulty: 'intermediate',
        category: 'implementation',
        tags: ['ai-security-program', 'governance', 'framework', 'implementation', 'enterprise'],
        slug: 'building-ai-security-programs',
        featured: true,
        learningPath: 'ai-security-101',
        learningObjectives: [
          'Design comprehensive AI security governance frameworks',
          'Implement risk assessment methodologies for AI systems',
          'Establish security testing and validation processes',
          'Create incident response and monitoring capabilities'
        ],
        progress: {
          estimatedMinutes: 35,
          checkpoints: ['governance', 'risk-assessment', 'implementation', 'testing', 'monitoring']
        }
      },
      {
        type: 'learning',
        title: 'Compliance for AI Systems',
        description: 'Navigate the complex regulatory landscape for AI systems including EU AI Act, NIST AI RMF, GDPR, and industry-specific requirements.',
        publishedAt: '2024-01-18',
        readingTime: 40,
        difficulty: 'intermediate',
        category: 'compliance',
        tags: ['ai-compliance', 'regulation', 'eu-ai-act', 'nist-ai-rmf', 'gdpr', 'audit'],
        slug: 'compliance-for-ai-systems',
        featured: true,
        learningPath: 'ai-security-101',
        learningObjectives: [
          'Master regulatory requirements across major AI frameworks',
          'Implement compliance monitoring and reporting systems',
          'Conduct AI system audits and assessments',
          'Navigate international AI regulation differences'
        ],
        progress: {
          estimatedMinutes: 40,
          checkpoints: ['regulatory-landscape', 'eu-ai-act', 'nist-framework', 'implementation', 'audit']
        }
      },
      {
        type: 'learning',
        title: 'Incident Response for AI',
        description: 'Comprehensive guide to AI-specific incident response procedures, forensics, recovery strategies, and lessons learned from real-world incidents.',
        publishedAt: '2024-01-19',
        readingTime: 35,
        difficulty: 'advanced',
        category: 'operations',
        tags: ['incident-response', 'ai-forensics', 'recovery', 'post-incident', 'operations'],
        slug: 'incident-response-for-ai',
        featured: true,
        learningPath: 'ai-security-101',
        learningObjectives: [
          'Master AI-specific incident response procedures',
          'Conduct forensic analysis of AI security incidents',
          'Implement recovery and containment strategies',
          'Establish post-incident improvement processes'
        ],
        progress: {
          estimatedMinutes: 35,
          checkpoints: ['incident-types', 'detection', 'response-procedures', 'forensics', 'recovery', 'lessons-learned']
        }
      }
    ]
  }

  private async loadBlogContent() {
    // This would load from MDX files in content/blog/
    // Using existing blog posts as reference
    this.contentIndex.blog = [
      {
        type: 'blog',
        title: 'AI Red Team Testing: Complete Guide',
        description: 'Comprehensive guide to red team testing for AI systems',
        publishedAt: '2024-01-10',
        readingTime: 15,
        difficulty: 'intermediate',
        category: 'red-teaming',
        tags: ['red-team', 'testing', 'security-assessment'],
        slug: 'ai-red-team-testing-complete-guide',
        featured: true
      }
    ]
  }

  private async loadWhitePapers() {
    // Load actual whitepaper metadata
    this.contentIndex.whitepapers = [
      {
        type: 'whitepaper',
        title: 'What is AI Security?',
        description: 'Comprehensive overview of AI security landscape, challenges, and foundational concepts for securing AI systems',
        publishedAt: '2024-01-01',
        readingTime: 45,
        difficulty: 'beginner',
        category: 'fundamentals',
        tags: ['ai-security', 'overview', 'fundamentals', 'introduction'],
        slug: 'what-is-ai-security',
        pdfUrl: '/white-papers/what-is-ai-security.pdf',
        webUrl: '/white-papers/what-is-ai-security',
        fileSize: '2.5 MB',
        pageCount: 28,
        gated: false,
        featured: true,
        summary: 'Introduction to AI security concepts, challenges, and solutions for modern AI deployments',
        keyTopics: ['AI Threats', 'Security Models', 'Best Practices', 'Risk Assessment'],
        targetAudience: ['Security Teams', 'AI Engineers', 'Business Leaders', 'Compliance Officers']
      },
      {
        type: 'whitepaper',
        title: 'AI Agent Security Framework',
        description: 'Comprehensive security framework for protecting AI agents and multi-agent systems in production environments',
        publishedAt: '2024-02-15',
        readingTime: 55,
        difficulty: 'intermediate',
        category: 'implementation',
        tags: ['ai-agents', 'security-framework', 'multi-agent', 'production'],
        slug: 'ai-agent-security',
        pdfUrl: '/white-papers/ai-agent-security.pdf',
        fileSize: '3.2 MB',
        pageCount: 35,
        gated: true,
        featured: true,
        summary: 'Deep dive into securing AI agents, covering architecture, monitoring, and risk management strategies',
        keyTopics: ['Agent Architecture', 'Security Monitoring', 'Risk Assessment', 'Incident Response'],
        targetAudience: ['AI Engineers', 'Security Architects', 'DevOps Teams']
      },
      {
        type: 'whitepaper',
        title: 'AI Compliance Frameworks',
        description: 'Navigate regulatory requirements and compliance frameworks for AI systems across global jurisdictions',
        publishedAt: '2024-03-10',
        readingTime: 50,
        difficulty: 'intermediate',
        category: 'compliance',
        tags: ['compliance', 'regulation', 'eu-ai-act', 'nist', 'governance'],
        slug: 'ai-compliance-frameworks',
        pdfUrl: '/white-papers/ai-compliance-frameworks.pdf',
        fileSize: '2.8 MB',
        pageCount: 32,
        gated: true,
        featured: true,
        summary: 'Comprehensive guide to AI compliance including EU AI Act, NIST AI RMF, and industry-specific requirements',
        keyTopics: ['EU AI Act', 'NIST AI RMF', 'Compliance Automation', 'Audit Procedures'],
        targetAudience: ['Compliance Officers', 'Legal Teams', 'Risk Managers', 'CISOs']
      },
      {
        type: 'whitepaper',
        title: 'AI Red Team Methodology',
        description: 'Advanced methodologies and techniques for red team testing of AI systems and models',
        publishedAt: '2024-04-05',
        readingTime: 60,
        difficulty: 'advanced',
        category: 'red-teaming',
        tags: ['red-team', 'penetration-testing', 'adversarial', 'security-assessment'],
        slug: 'ai-red-team-methodology',
        pdfUrl: '/white-papers/ai-red-team-methodology.pdf',
        fileSize: '4.1 MB',
        pageCount: 42,
        gated: true,
        summary: 'Comprehensive methodology for conducting red team exercises against AI systems',
        keyTopics: ['Attack Methodologies', 'Testing Frameworks', 'Adversarial Techniques', 'Assessment Metrics'],
        targetAudience: ['Security Researchers', 'Red Team Operators', 'Penetration Testers']
      },
      {
        type: 'whitepaper',
        title: 'AI Supply Chain Security',
        description: 'Securing AI models and components throughout the development and deployment supply chain',
        publishedAt: '2024-05-20',
        readingTime: 45,
        difficulty: 'intermediate',
        category: 'supply-chain',
        tags: ['supply-chain', 'model-security', 'third-party-risk', 'vendor-management'],
        slug: 'ai-supply-chain-security',
        pdfUrl: '/white-papers/ai-supply-chain-security.pdf',
        fileSize: '2.9 MB',
        pageCount: 30,
        gated: true,
        summary: 'Framework for securing AI supply chains from model development to deployment',
        keyTopics: ['Supply Chain Risks', 'Model Provenance', 'Vendor Assessment', 'Security Controls'],
        targetAudience: ['Security Teams', 'Procurement Teams', 'AI Engineers', 'Risk Managers']
      },
      {
        type: 'whitepaper',
        title: 'Model Extraction Attacks: Detection and Prevention',
        description: 'Advanced techniques for detecting and preventing model extraction attacks against proprietary AI systems',
        publishedAt: '2024-06-12',
        readingTime: 40,
        difficulty: 'advanced',
        category: 'threats',
        tags: ['model-extraction', 'ip-protection', 'attack-detection', 'adversarial'],
        slug: 'model-extraction-attacks',
        pdfUrl: '/white-papers/model-extraction-attacks.pdf',
        fileSize: '2.6 MB',
        pageCount: 25,
        gated: true,
        summary: 'Deep dive into model extraction attack techniques and comprehensive defense strategies',
        keyTopics: ['Extraction Techniques', 'Detection Methods', 'Prevention Strategies', 'IP Protection'],
        targetAudience: ['AI Researchers', 'Security Engineers', 'Data Scientists', 'IP Attorneys']
      },
      {
        type: 'whitepaper',
        title: 'Prompt Injection Defense Strategies',
        description: 'Comprehensive defense strategies against prompt injection attacks in large language models',
        publishedAt: '2024-07-08',
        readingTime: 35,
        difficulty: 'intermediate',
        category: 'defense',
        tags: ['prompt-injection', 'llm-security', 'defense-strategies', 'input-validation'],
        slug: 'prompt-injection-defense',
        pdfUrl: '/white-papers/prompt-injection-defense.pdf',
        fileSize: '2.3 MB',
        pageCount: 22,
        gated: false,
        featured: true,
        summary: 'Practical defense strategies and implementation guidance for protecting against prompt injection attacks',
        keyTopics: ['Attack Vectors', 'Defense Mechanisms', 'Input Sanitization', 'Monitoring Strategies'],
        targetAudience: ['AI Engineers', 'Security Teams', 'Product Managers', 'DevOps Teams']
      },
      {
        type: 'whitepaper',
        title: 'From Data to Dialogue: Training Large Language Models',
        description: 'Deep dive into LLM training processes, security considerations, and best practices for safe model development',
        publishedAt: '2024-08-15',
        readingTime: 75,
        difficulty: 'advanced',
        category: 'training',
        tags: ['llm-training', 'model-development', 'security', 'best-practices'],
        slug: 'from-data-to-dialogue-llm-training-deep-dive',
        pdfUrl: '/white-papers/from-data-to-dialogue-llm-training-deep-dive.pdf',
        webUrl: '/White Papers/page',
        fileSize: '5.2 MB',
        pageCount: 58,
        gated: true,
        featured: true,
        summary: 'Comprehensive guide to secure LLM training including data preparation, model architecture, and safety measures',
        keyTopics: ['Training Methodologies', 'Data Security', 'Model Architecture', 'Safety Measures'],
        targetAudience: ['ML Engineers', 'Data Scientists', 'AI Researchers', 'Security Teams']
      }
    ]
  }

  private async loadLearningPaths() {
    this.contentIndex.learningPaths = [
      {
        id: 'ai-security-101',
        title: 'AI Security 101',
        description: 'Complete beginner to intermediate journey in AI security',
        difficulty: 'beginner',
        estimatedDuration: '8 hours',
        category: 'fundamentals',
        featured: true,
        prerequisites: ['Basic understanding of AI/ML'],
        outcomes: [
          'Understand AI security fundamentals',
          'Identify common vulnerabilities',
          'Implement basic security measures'
        ],
        sections: [
          {
            id: 'foundations',
            title: 'AI Security Foundations',
            description: 'Core concepts and terminology',
            order: 1,
            content: ['understanding-ai-vulnerabilities', 'threat-landscape'],
            estimatedMinutes: 120,
            required: true
          }
        ]
      }
    ]
  }

  private async buildSearchIndex() {
    // Build search index for fast content discovery
    const allContent = [
      ...this.contentIndex.learning,
      ...this.contentIndex.blog,
      ...this.contentIndex.whitepapers
    ]

    allContent.forEach(content => {
      const searchTerms = [
        content.title.toLowerCase(),
        content.description.toLowerCase(),
        ...content.tags.map(tag => tag.toLowerCase()),
        content.category.toLowerCase()
      ]
      
      this.searchIndex.set(content.slug, searchTerms)
    })
  }

  private async generateCategoriesAndTags() {
    // Generate categories from content
    const categoryMap = new Map<string, number>()
    const tagMap = new Map<string, number>()

    const allContent = [
      ...this.contentIndex.learning,
      ...this.contentIndex.blog,
      ...this.contentIndex.whitepapers
    ]

    allContent.forEach(content => {
      // Count categories
      categoryMap.set(content.category, (categoryMap.get(content.category) || 0) + 1)
      
      // Count tags
      content.tags.forEach(tag => {
        tagMap.set(tag, (tagMap.get(tag) || 0) + 1)
      })
    })

    // Convert to category objects
    this.contentIndex.categories = Array.from(categoryMap.entries()).map(([name, count]) => ({
      id: name,
      name: name.charAt(0).toUpperCase() + name.slice(1).replace('-', ' '),
      description: `Content related to ${name}`,
      icon: this.getCategoryIcon(name),
      color: this.getCategoryColor(name),
      contentCount: count
    }))

    // Convert to tag objects
    this.contentIndex.tags = Array.from(tagMap.entries()).map(([name, usage]) => ({
      id: name,
      name: name,
      category: 'general',
      usage,
      trending: usage > 5
    }))
  }

  private getCategoryIcon(category: string): string {
    const iconMap: Record<string, string> = {
      'fundamentals': 'BookOpen',
      'red-teaming': 'Target',
      'compliance': 'FileText',
      'monitoring': 'Eye',
      'implementation': 'Code',
      'threats': 'AlertTriangle'
    }
    return iconMap[category] || 'BookOpen'
  }

  private getCategoryColor(category: string): string {
    const colorMap: Record<string, string> = {
      'fundamentals': 'blue',
      'red-teaming': 'red',
      'compliance': 'green',
      'monitoring': 'purple',
      'implementation': 'orange',
      'threats': 'yellow'
    }
    return colorMap[category] || 'gray'
  }

  public search(query: string, filters: ContentFilter = {}): SearchResult[] {
    const results: SearchResult[] = []
    const searchTerms = query.toLowerCase().split(' ')

    // Get content based on type filter
    let contentToSearch: (LearningContent | BlogContent | WhitePaperContent)[] = []
    
    if (!filters.type || filters.type === 'all') {
      contentToSearch = [
        ...this.contentIndex.learning,
        ...this.contentIndex.blog,
        ...this.contentIndex.whitepapers
      ]
    } else {
      contentToSearch = this.contentIndex[filters.type === 'whitepaper' ? 'whitepapers' : filters.type] || []
    }

    // Apply filters
    contentToSearch = contentToSearch.filter(content => {
      if (filters.category && content.category !== filters.category) return false
      if (filters.difficulty && content.difficulty !== filters.difficulty) return false
      if (filters.tags && !filters.tags.every(tag => content.tags.includes(tag))) return false
      if (filters.featured !== undefined && content.featured !== filters.featured) return false
      return true
    })

    // Score and rank results
    contentToSearch.forEach(content => {
      const contentTerms = this.searchIndex.get(content.slug) || []
      let score = 0
      const highlights: string[] = []

      searchTerms.forEach(term => {
        // Title match (highest weight)
        if (content.title.toLowerCase().includes(term)) {
          score += 10
          highlights.push(content.title)
        }
        
        // Description match
        if (content.description.toLowerCase().includes(term)) {
          score += 5
          highlights.push(content.description.substring(0, 100) + '...')
        }
        
        // Tag match
        if (content.tags.some(tag => tag.toLowerCase().includes(term))) {
          score += 3
          highlights.push(`Tag: ${content.tags.find(tag => tag.toLowerCase().includes(term))}`)
        }
        
        // Category match
        if (content.category.toLowerCase().includes(term)) {
          score += 2
          highlights.push(`Category: ${content.category}`)
        }
      })

      if (score > 0) {
        results.push({
          content,
          score,
          highlights: Array.from(new Set(highlights)), // Remove duplicates
          matchType: score >= 10 ? 'title' : score >= 5 ? 'content' : score >= 3 ? 'tag' : 'category'
        })
      }
    })

    // Sort by score and apply sorting preferences
    results.sort((a, b) => {
      if (filters.sortBy === 'title') {
        return filters.sortOrder === 'desc' 
          ? b.content.title.localeCompare(a.content.title)
          : a.content.title.localeCompare(b.content.title)
      }
      if (filters.sortBy === 'date') {
        return filters.sortOrder === 'desc'
          ? new Date(b.content.publishedAt).getTime() - new Date(a.content.publishedAt).getTime()
          : new Date(a.content.publishedAt).getTime() - new Date(b.content.publishedAt).getTime()
      }
      // Default: sort by score descending
      return b.score - a.score
    })

    return results
  }

  public getRecommendations(contentId: string, userId?: string): ContentRecommendation[] {
    const currentContent = this.findContentById(contentId)
    if (!currentContent) return []

    const recommendations: ContentRecommendation[] = []
    
    // Similar topic recommendations
    const similarContent = this.findSimilarContent(currentContent)
    similarContent.forEach(content => {
      recommendations.push({
        contentId: content.slug,
        score: 0.8,
        reason: 'similar-topic'
      })
    })

    // Next level recommendations
    if (currentContent.difficulty === 'beginner') {
      const intermediateContent = this.getContentByDifficulty('intermediate')
        .filter(content => content.category === currentContent.category)
      
      intermediateContent.forEach(content => {
        recommendations.push({
          contentId: content.slug,
          score: 0.9,
          reason: 'next-level'
        })
      })
    }

    return recommendations.slice(0, 6) // Return top 6 recommendations
  }

  private findContentById(id: string): LearningContent | BlogContent | WhitePaperContent | null {
    const allContent = [
      ...this.contentIndex.learning,
      ...this.contentIndex.blog,
      ...this.contentIndex.whitepapers
    ]
    return allContent.find(content => content.slug === id) || null
  }

  private findSimilarContent(content: LearningContent | BlogContent | WhitePaperContent): (LearningContent | BlogContent | WhitePaperContent)[] {
    const allContent = [
      ...this.contentIndex.learning,
      ...this.contentIndex.blog,
      ...this.contentIndex.whitepapers
    ]

    return allContent
      .filter(c => c.slug !== content.slug)
      .filter(c => {
        // Same category
        if (c.category === content.category) return true
        // Shared tags
        const sharedTags = c.tags.filter(tag => content.tags.includes(tag))
        return sharedTags.length > 0
      })
      .slice(0, 4)
  }

  private getContentByDifficulty(difficulty: string): (LearningContent | BlogContent | WhitePaperContent)[] {
    const allContent = [
      ...this.contentIndex.learning,
      ...this.contentIndex.blog,
      ...this.contentIndex.whitepapers
    ]
    return allContent.filter(content => content.difficulty === difficulty)
  }

  public getCategories(): ContentCategory[] {
    return this.contentIndex.categories
  }

  public getTags(): ContentTag[] {
    return this.contentIndex.tags
  }

  public getLearningPaths(): LearningPath[] {
    return this.contentIndex.learningPaths
  }

  public getFeaturedContent(): (LearningContent | BlogContent | WhitePaperContent)[] {
    const allContent = [
      ...this.contentIndex.learning,
      ...this.contentIndex.blog,
      ...this.contentIndex.whitepapers
    ]
    return allContent.filter(content => content.featured)
  }

  public getContentByType(type: 'learning' | 'blog' | 'whitepaper'): (LearningContent | BlogContent | WhitePaperContent)[] {
    return this.contentIndex[type === 'whitepaper' ? 'whitepapers' : type] || []
  }

  public getRecentContent(limit: number = 10): (LearningContent | BlogContent | WhitePaperContent)[] {
    const allContent = [
      ...this.contentIndex.learning,
      ...this.contentIndex.blog,
      ...this.contentIndex.whitepapers
    ]
    
    return allContent
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, limit)
  }
}

export const contentManager = new ContentManager()
export default ContentManager