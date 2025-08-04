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
    // For now, we'll use a static list of blog posts
    // In a real implementation, this would load from MDX files
    this.contentIndex.blog = [
      {
        type: 'blog',
        title: 'The Hidden Risks of Agentic AI: Why Traditional Monitoring Fails',
        description: 'Discover why autonomous AI agents break every security monitoring assumption and learn how to detect threats in systems that think for themselves.',
        publishedAt: '2025-07-02',
        readingTime: 20,
        difficulty: 'intermediate',
        category: 'AI Security',
        tags: ['ai-security', 'agentic-ai', 'monitoring', 'threat-detection'],
        slug: 'hidden-risks-agentic-ai-monitoring-fails',
        featured: true
      },
      {
        type: 'blog',
        title: '50 Attack Vectors: AI Red Team Guide',
        description: 'Comprehensive guide to red team testing for AI systems with 50 different attack vectors.',
        publishedAt: '2024-01-10',
        readingTime: 15,
        difficulty: 'intermediate',
        category: 'Threat Analysis',
        tags: ['red-team', 'testing', 'security-assessment', 'attack-vectors'],
        slug: '50-attack-vectors-ai-red-team-guide',
        featured: true
      },
      {
        type: 'blog',
        title: 'Advanced Prompt Engineering: Security Defense Through Design',
        description: 'Learn advanced techniques for secure prompt engineering and defensive design patterns.',
        publishedAt: '2024-01-15',
        readingTime: 12,
        difficulty: 'advanced',
        category: 'Best Practices',
        tags: ['prompt-engineering', 'security', 'defense', 'design-patterns'],
        slug: 'advanced-prompt-engineering-security-defense-through-design',
        featured: false
      },
      {
        type: 'blog',
        title: 'AI Architecture Security: Building Defensible Systems',
        description: 'Comprehensive guide to securing AI system architecture from the ground up.',
        publishedAt: '2024-01-20',
        readingTime: 18,
        difficulty: 'intermediate',
        category: 'AI Security',
        tags: ['architecture', 'security', 'ai-systems', 'design'],
        slug: 'ai-arch-security',
        featured: true
      },
      {
        type: 'blog',
        title: 'Neural Network Security: Beyond Traditional Defenses',
        description: 'Exploring the unique security challenges of neural networks and advanced defense strategies.',
        publishedAt: '2024-01-25',
        readingTime: 14,
        difficulty: 'advanced',
        category: 'Research',
        tags: ['neural-networks', 'security', 'research', 'advanced-defense'],
        slug: 'neural-network-security-beyond-traditional-defenses',
        featured: false
      },
      {
        type: 'blog',
        title: 'LLM Security: Protecting Language Models in Production',
        description: 'Best practices for securing large language models in production environments.',
        publishedAt: '2024-02-01',
        readingTime: 16,
        difficulty: 'intermediate',
        category: 'AI Security',
        tags: ['llm-security', 'production', 'best-practices', 'language-models'],
        slug: 'llm-security-protecting-language-models-production',
        featured: true
      },
      {
        type: 'blog',
        title: 'Prompt Injection: The Silent Threat to AI Systems - Complete Security Guide',
        description: 'Comprehensive guide to understanding and defending against prompt injection attacks, the #1 security risk in AI systems. Learn detection techniques, defense strategies, and enterprise security frameworks to protect your AI infrastructure from sophisticated attacks.',
        publishedAt: '2025-08-01',
        readingTime: 28,
        difficulty: 'intermediate',
        category: 'AI Security',
        tags: ['AI Security', 'Prompt Injection', 'LLM Security', 'Cybersecurity', 'Enterprise Security', 'OWASP Top 10', 'Machine Learning Security'],
        slug: 'prompt-injection-silent-threat-ai-systems',
        featured: true
      },
      {
        type: 'blog',
        title: 'OWASP Top 10 for AI: Critical Security Vulnerabilities',
        description: 'The OWASP Top 10 vulnerabilities specific to AI and machine learning systems.',
        publishedAt: '2024-02-10',
        readingTime: 12,
        difficulty: 'intermediate',
        category: 'Best Practices',
        tags: ['owasp', 'vulnerabilities', 'ai-security', 'top-10'],
        slug: 'owasp-top-10-ai-critical-security-vulnerabilities',
        featured: true
      },
      {
        type: 'blog',
        title: 'Machine Learning Security: From Theory to Practice',
        description: 'Practical approaches to securing machine learning systems in real-world scenarios.',
        publishedAt: '2024-02-15',
        readingTime: 15,
        difficulty: 'advanced',
        category: 'AI Security',
        tags: ['machine-learning', 'security', 'practice', 'real-world'],
        slug: 'machine-learning-security-theory-practice',
        featured: false
      },
      {
        type: 'blog',
        title: 'AI Incident Response: When Things Go Wrong',
        description: 'Comprehensive guide to responding to AI security incidents and breaches.',
        publishedAt: '2024-02-20',
        readingTime: 14,
        difficulty: 'intermediate',
        category: 'Best Practices',
        tags: ['incident-response', 'ai-security', 'breaches', 'response'],
        slug: 'ai-incident-response-when-things-go-wrong',
        featured: false
      },
      {
        type: 'blog',
        title: 'Adversarial Machine Learning: Attack and Defense',
        description: 'Understanding adversarial attacks on machine learning systems and defense strategies.',
        publishedAt: '2024-02-25',
        readingTime: 16,
        difficulty: 'advanced',
        category: 'Research',
        tags: ['adversarial-ml', 'attacks', 'defense', 'research'],
        slug: 'adversarial-machine-learning-attack-defense',
        featured: true
      },
      {
        type: 'blog',
        title: 'AI Model Poisoning: Detection and Prevention',
        description: 'How to detect and prevent model poisoning attacks in AI systems.',
        publishedAt: '2024-03-01',
        readingTime: 13,
        difficulty: 'intermediate',
        category: 'Threat Analysis',
        tags: ['model-poisoning', 'detection', 'prevention', 'ai-security'],
        slug: 'ai-model-poisoning-detection-prevention',
        featured: false
      },
      {
        type: 'blog',
        title: 'Secure AI Development: Best Practices for Teams',
        description: 'Best practices for developing secure AI systems in team environments.',
        publishedAt: '2024-03-05',
        readingTime: 11,
        difficulty: 'intermediate',
        category: 'Best Practices',
        tags: ['development', 'teams', 'best-practices', 'ai-security'],
        slug: 'secure-ai-development-best-practices-teams',
        featured: false
      },
      {
        type: 'blog',
        title: 'AI Security Testing: Comprehensive Assessment Methods',
        description: 'Methods and tools for comprehensive security testing of AI systems.',
        publishedAt: '2024-03-10',
        readingTime: 15,
        difficulty: 'intermediate',
        category: 'AI Security',
        tags: ['security-testing', 'assessment', 'methods', 'tools'],
        slug: 'ai-security-testing-comprehensive-assessment-methods',
        featured: false
      },
      {
        type: 'blog',
        title: 'Privacy-Preserving AI: Techniques and Implementation',
        description: 'Techniques for building AI systems that preserve user privacy.',
        publishedAt: '2024-03-15',
        readingTime: 14,
        difficulty: 'advanced',
        category: 'Research',
        tags: ['privacy', 'ai-systems', 'techniques', 'implementation'],
        slug: 'privacy-preserving-ai-techniques-implementation',
        featured: false
      },
      {
        type: 'blog',
        title: 'AI Security Compliance: Navigating Regulatory Requirements',
        description: 'Understanding and implementing AI security compliance requirements.',
        publishedAt: '2024-03-20',
        readingTime: 12,
        difficulty: 'intermediate',
        category: 'Best Practices',
        tags: ['compliance', 'regulatory', 'ai-security', 'requirements'],
        slug: 'ai-security-compliance-navigating-regulatory-requirements',
        featured: false
      },
      {
        type: 'blog',
        title: 'Zero-Day AI Vulnerabilities: Detection and Response',
        description: 'How to detect and respond to zero-day vulnerabilities in AI systems.',
        publishedAt: '2024-03-25',
        readingTime: 13,
        difficulty: 'advanced',
        category: 'Threat Analysis',
        tags: ['zero-day', 'vulnerabilities', 'detection', 'response'],
        slug: 'zero-day-ai-vulnerabilities-detection-response',
        featured: false
      },
      {
        type: 'blog',
        title: 'AI Security Metrics: Measuring What Matters',
        description: 'Key metrics for measuring AI security effectiveness and risk.',
        publishedAt: '2024-03-30',
        readingTime: 10,
        difficulty: 'intermediate',
        category: 'AI Security',
        tags: ['metrics', 'measurement', 'security', 'risk'],
        slug: 'ai-security-metrics-measuring-what-matters',
        featured: false
      },
      {
        type: 'blog',
        title: 'Secure AI Deployment: Production Best Practices',
        description: 'Best practices for securely deploying AI systems to production.',
        publishedAt: '2024-04-01',
        readingTime: 14,
        difficulty: 'intermediate',
        category: 'Best Practices',
        tags: ['deployment', 'production', 'best-practices', 'ai-security'],
        slug: 'secure-ai-deployment-production-best-practices',
        featured: false
      },
      {
        type: 'blog',
        title: 'AI Security Automation: Scaling Protection',
        description: 'How to automate AI security processes for better scalability.',
        publishedAt: '2024-04-05',
        readingTime: 11,
        difficulty: 'intermediate',
        category: 'AI Security',
        tags: ['automation', 'scaling', 'security', 'processes'],
        slug: 'ai-security-automation-scaling-protection',
        featured: false
      },
      {
        type: 'blog',
        title: 'Future of AI Security: Emerging Threats and Defenses',
        description: 'Exploring emerging threats and defense strategies in AI security.',
        publishedAt: '2024-04-10',
        readingTime: 16,
        difficulty: 'advanced',
        category: 'Research',
        tags: ['future', 'emerging-threats', 'defenses', 'research'],
        slug: 'future-ai-security-emerging-threats-defenses',
        featured: true
      },
      {
        type: 'blog',
        title: 'The Future of AI Security: Preparing for Next-Generation Threats',
        description: 'Look beyond today\'s AI security challenges to prepare for quantum computing, AGI risks, brain-computer interfaces, and nation-state AI warfare. Learn how leading organizations are building defenses for threats that haven\'t been invented yet.',
        publishedAt: '2025-06-04',
        readingTime: 30,
        difficulty: 'advanced',
        category: 'Strategic Vision',
        tags: ['AI Security', 'Future Threats', 'Quantum Computing', 'AGI Security', 'Emerging Technologies', 'Strategic Planning'],
        slug: 'future-ai-security-preparing-next-generation-threats',
        featured: true
      },
      {
        type: 'blog',
        title: 'Securing AI Systems: Enterprise Frameworks for AI Security Protection',
        description: 'Comprehensive guide to protecting AI systems from threats like data poisoning, adversarial attacks, and supply chain vulnerabilities. Learn enterprise-grade security frameworks and architectural patterns for defending AI systems.',
        publishedAt: '2025-01-15',
        readingTime: 25,
        difficulty: 'intermediate',
        category: 'AI Security',
        tags: ['AI Security', 'Enterprise Security', 'Data Poisoning', 'Adversarial Attacks', 'Supply Chain Security', 'MLSecOps'],
        slug: 'securing-ai-systems-enterprise-frameworks',
        featured: true
      },
      {
        type: 'blog',
        title: 'AI-Powered Security Automation: Transforming Enterprise Cybersecurity Operations',
        description: 'Examine how to use AI to automate security processes including threat detection, incident response, vulnerability management, and compliance. Learn scalable frameworks for AI-driven security transformation.',
        publishedAt: '2025-01-10',
        readingTime: 20,
        difficulty: 'intermediate',
        category: 'Security Automation',
        tags: ['AI Security', 'Security Automation', 'Threat Detection', 'Incident Response', 'Vulnerability Management', 'Compliance'],
        slug: 'ai-powered-security-automation-transforming-enterprise-cybersecurity',
        featured: true
      },
      {
        type: 'blog',
        title: 'Secure AI Deployment: Production Best Practices',
        description: 'A comprehensive CISO\'s guide to deploying AI systems securely in production environments. Learn MLSecOps principles, threat modeling, and governance frameworks for resilient AI security.',
        publishedAt: '2025-01-20',
        readingTime: 30,
        difficulty: 'advanced',
        category: 'Best Practices',
        tags: ['AI Security', 'Production Deployment', 'MLSecOps', 'CISO Guide', 'Threat Modeling', 'Governance', 'Zero Trust', 'Monitoring'],
        slug: 'secure-ai-deployment-production-best-practices',
        featured: true
      },
      {
        type: 'blog',
        title: 'Zero-Day AI Vulnerabilities: Detection and Response',
        description: 'How to detect and respond to zero-day vulnerabilities in AI systems.',
        publishedAt: '2025-01-25',
        readingTime: 35,
        difficulty: 'advanced',
        category: 'Zero-Day AI Vulnerabilities',
        tags: ['AI Security', 'Zero-Day Vulnerabilities', 'Detection', 'Response', 'Threat Intelligence', 'Incident Response', 'AI Governance', 'Security Frameworks'],
        slug: 'zero-day-ai-vulnerabilities-detection-response',
        featured: true
      }
    ]
  }

  private async loadWhitePapers() {
    // Load actual whitepaper metadata
    this.contentIndex.whitepapers = []
  }

  private async loadLearningPaths() {
    this.contentIndex.learningPaths = [
      {
        id: 'ai-security-101',
        title: 'AI Security Fundamentals',
        description: 'Complete beginner to intermediate journey in AI security fundamentals, covering traditional vs AI security, understanding AI threats, and building robust defenses.',
        difficulty: 'beginner',
        estimatedDuration: '8 hours',
        category: 'fundamentals',
        featured: true,
        prerequisites: ['Basic understanding of AI/ML'],
        outcomes: [
          'Understand AI security fundamentals',
          'Identify common vulnerabilities',
          'Implement basic security measures',
          'Recognize AI-specific threats'
        ],
        sections: [
          {
            id: 'foundations',
            title: 'AI Security Foundations',
            description: 'Core concepts and terminology',
            order: 1,
            content: ['trad-vs-ai', 'ai-threats'],
            estimatedMinutes: 120,
            required: true
          }
        ]
      },
      {
        id: 'red-team-testing',
        title: 'Red Team Testing',
        description: 'Advanced offensive security testing for AI systems. Learn to think like an attacker and identify vulnerabilities before they can be exploited.',
        difficulty: 'intermediate',
        estimatedDuration: '12 hours',
        category: 'red-teaming',
        featured: true,
        prerequisites: ['AI Security Fundamentals', 'Basic penetration testing knowledge'],
        outcomes: [
          'Conduct AI system penetration testing',
          'Identify model vulnerabilities',
          'Execute adversarial attacks',
          'Develop defense strategies'
        ],
        sections: [
          {
            id: 'red-team-basics',
            title: 'Red Team Fundamentals',
            description: 'Introduction to AI red teaming',
            order: 1,
            content: ['red-team-basics'],
            estimatedMinutes: 90,
            required: true
          }
        ]
      },
      {
        id: 'agent-monitoring',
        title: 'Agent Monitoring',
        description: 'Comprehensive monitoring and observability for AI agents and autonomous systems. Detect anomalies, track behavior, and ensure safe operation.',
        difficulty: 'intermediate',
        estimatedDuration: '10 hours',
        category: 'monitoring',
        featured: true,
        prerequisites: ['AI Security Fundamentals'],
        outcomes: [
          'Monitor AI agent behavior',
          'Detect anomalous activities',
          'Implement safety controls',
          'Track performance metrics'
        ],
        sections: [
          {
            id: 'monitoring-basics',
            title: 'Monitoring Fundamentals',
            description: 'Core monitoring concepts',
            order: 1,
            content: ['agent-monitoring'],
            estimatedMinutes: 120,
            required: true
          }
        ]
      },
      {
        id: 'compliance-governance',
        title: 'Compliance & Governance',
        description: 'Navigate the complex landscape of AI regulations, compliance requirements, and governance frameworks. Ensure your AI systems meet legal and ethical standards.',
        difficulty: 'intermediate',
        estimatedDuration: '6 hours',
        category: 'compliance',
        featured: true,
        prerequisites: ['AI Security Fundamentals'],
        outcomes: [
          'Understand AI regulations',
          'Implement compliance frameworks',
          'Establish governance policies',
          'Conduct risk assessments'
        ],
        sections: [
          {
            id: 'compliance-basics',
            title: 'Compliance Fundamentals',
            description: 'Core compliance concepts',
            order: 1,
            content: ['compliance-basics'],
            estimatedMinutes: 90,
            required: true
          }
        ]
      },
      {
        id: 'integration-patterns',
        title: 'Integration Patterns',
        description: 'Secure integration patterns for AI systems. Learn best practices for connecting AI components, APIs, and services while maintaining security.',
        difficulty: 'advanced',
        estimatedDuration: '8 hours',
        category: 'implementation',
        featured: false,
        prerequisites: ['AI Security Fundamentals', 'Software development experience'],
        outcomes: [
          'Design secure AI architectures',
          'Implement secure APIs',
          'Integrate AI components safely',
          'Handle data flow securely'
        ],
        sections: [
          {
            id: 'integration-basics',
            title: 'Integration Fundamentals',
            description: 'Core integration concepts',
            order: 1,
            content: ['integration-basics'],
            estimatedMinutes: 120,
            required: true
          }
        ]
      },
      {
        id: 'performance-optimization',
        title: 'Performance Optimization',
        description: 'Optimize AI system performance while maintaining security. Balance speed, accuracy, and security requirements for production deployments.',
        difficulty: 'advanced',
        estimatedDuration: '10 hours',
        category: 'optimization',
        featured: false,
        prerequisites: ['AI Security Fundamentals', 'Performance engineering basics'],
        outcomes: [
          'Optimize AI system performance',
          'Balance security and speed',
          'Implement efficient monitoring',
          'Scale AI systems securely'
        ],
        sections: [
          {
            id: 'optimization-basics',
            title: 'Optimization Fundamentals',
            description: 'Core optimization concepts',
            order: 1,
            content: ['optimization-basics'],
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
      'threats': 'AlertTriangle',
      'optimization': 'Zap'
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
      'threats': 'yellow',
      'optimization': 'indigo'
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