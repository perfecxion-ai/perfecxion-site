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

  private initializeContentIndex() {
    try {
      // Load and index all content synchronously
      this.loadLearningContent()
      this.loadBlogContent()
      this.loadWhitePapers()
      this.loadLearningPaths()
      this.buildSearchIndex()
      this.generateCategoriesAndTags()
    } catch (error) {
      console.error('Failed to initialize content index:', error)
    }
  }

  private loadLearningContent() {
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
        publishedAt: '2025-01-08',
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
        publishedAt: '2025-01-10',
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

  private loadBlogContent() {
    // Load all blog posts from MDX files
    this.contentIndex.blog = [
      {
        type: 'blog',
        title: 'AI and HIPAA: The Complete Compliance Guide for Healthcare Organizations',
        description: 'Master the complex intersection of AI technology and HIPAA compliance with this comprehensive guide. Learn practical frameworks for building robust compliance programs, navigating regulatory requirements, and implementing technical safeguards for healthcare AI systems.',
        publishedAt: '2025-01-15',
        readingTime: 45,
        difficulty: 'intermediate',
        category: 'Compliance & Governance',
        tags: ["HIPAA Compliance", "Healthcare AI", "AI Security", "Regulatory Compliance", "Patient Privacy", "Healthcare Cybersecurity", "AI Governance", "Medical AI"],
        slug: 'ai-and-hipaa-compliance-guide',
        featured: true
      },
      {
        type: 'blog',
        title: 'Welcome to perfecXion.ai',
        description: 'Introducing our comprehensive AI security platform',
        publishedAt: '2025-01-05',
        readingTime: 15,
        difficulty: 'intermediate',
        category: 'Company',
        tags: ["AI Security", "Platform Introduction", "AI Safety", "Compliance", "AI Governance", "Security Tools"],
        slug: 'welcome',
        featured: true
      },
      {
        type: 'blog',
        title: 'Securing AI Infrastructure: From Training to Deployment',
        description: 'A comprehensive technical guide to securing every layer of AI infrastructure, from data pipelines and training environments to model serving and edge deployment.',
        publishedAt: '2025-01-25',
        readingTime: 22,
        difficulty: 'intermediate',
        category: 'Technical Research',
        tags: ["AI Infrastructure", "AI Security", "Technical Research", "MLSecOps", "AI Deployment", "Security Architecture"],
        slug: 'securing-ai-infrastructure-training-to-deployment',
        featured: true
      },
      {
        type: 'blog',
        title: 'Securing AI in Critical Infrastructure: Lessons from the Field',
        description: 'Real-world insights from securing AI systems in power grids, transportation networks, water systems, and telecommunications. Learn from actual deployments and incidents that shaped modern critical infrastructure security.',
        publishedAt: '2025-02-25',
        readingTime: 28,
        difficulty: 'intermediate',
        category: 'Industry Applications',
        tags: ["Critical Infrastructure", "AI Security", "SCADA Systems", "Industrial AI", "Cyber-Physical Security", "National Security"],
        slug: 'securing-ai-critical-infrastructure-lessons-from-field',
        featured: true
      },
      {
        type: 'blog',
        title: 'The Prompt Injection Playbook: Attack Techniques and Defenses',
        description: 'A comprehensive guide to understanding, executing, and defending against prompt injection attacks on AI systems. Learn the complete arsenal of techniques used by attackers and the proven defense strategies that actually work.',
        publishedAt: '2025-03-01',
        readingTime: 22,
        difficulty: 'intermediate',
        category: 'Technical Research',
        tags: ["AI Security", "Prompt Injection", "Red Team Testing", "LLM Security", "Attack Prevention", "AI Defense"],
        slug: 'prompt-injection-playbook-attack-techniques-defenses',
        featured: true
      },
      {
        type: 'blog',
        title: 'Navigating AI Compliance: A Framework for 15+ Security Standards',
        description: 'Master the complex landscape of AI compliance with a unified framework that addresses GDPR, CCPA, SOC 2, ISO 27001, NIST, and emerging AI-specific regulations.',
        publishedAt: '2025-02-20',
        readingTime: 18,
        difficulty: 'intermediate',
        category: 'Compliance & Governance',
        tags: ["AI Compliance", "GDPR", "EU AI Act", "Regulatory Framework", "Data Governance", "Security Standards", "Privacy Regulation"],
        slug: 'navigating-ai-compliance-framework-security-standards',
        featured: true
      },
      {
        type: 'blog',
        title: 'Data Poisoning Attacks: The Silent Sabotage in AI Security',
        description: 'Comprehensive analysis of data poisoning threats in AI systems, from subtle backdoors to systemic bias injection, with detection strategies and defense mechanisms.',
        publishedAt: '2025-01-28',
        readingTime: 15,
        difficulty: 'intermediate',
        category: 'AI Security',
        tags: ["Data Poisoning", "AI Security", "ML Security", "Training Attacks", "Backdoors", "Defense Strategies", "Machine Learning", "Neural Networks", "Model Security", "AI Training"],
        slug: 'data-poisoning-attacks',
        featured: true
      },
      {
        type: 'blog',
        title: 'Prompt Injection: The Silent Threat to AI Systems - Complete Security Guide',
        description: 'Comprehensive guide to understanding and defending against prompt injection attacks, the #1 security risk in AI systems. Learn detection techniques, defense strategies, and enterprise security frameworks to protect your AI infrastructure from sophisticated attacks.',
        publishedAt: '2025-01-08',
        readingTime: 28,
        difficulty: 'intermediate',
        category: 'AI Security',
        tags: ["AI Security", "Prompt Injection", "LLM Security", "Cybersecurity", "Enterprise Security", "OWASP", "Machine Learning Security"],
        slug: 'prompt-injection-silent-threat-ai-systems',
        featured: true
      },
      {
        type: 'blog',
        title: 'Multi-Cloud AI Security: Strategies for Hybrid AI Deployments',
        description: 'Master the complexities of securing AI systems across multiple cloud providers, edge locations, and hybrid architectures with practical implementation strategies.',
        publishedAt: '2025-02-15',
        readingTime: 19,
        difficulty: 'intermediate',
        category: 'AI Security',
        tags: ["Multi-Cloud Security", "AI Deployments", "Hybrid Cloud", "Cloud Architecture", "Enterprise AI", "Security Strategy", "Machine Learning", "Neural Networks", "Cloud Security", "AI Infrastructure"],
        slug: 'multi-cloud-ai-security-strategies-hybrid-deployments',
        featured: true
      },
      {
        type: 'blog',
        title: 'Multi-Agent Systems Security: Orchestrating Safe AI Collaboration',
        description: 'Master the complex security challenges of multi-agent AI systems where autonomous agents interact, compete, and collaborate in unpredictable ways.',
        publishedAt: '2025-02-20',
        readingTime: 22,
        difficulty: 'intermediate',
        category: 'AI Security',
        tags: ["Multi-Agent Systems", "AI Orchestration", "Agent Security", "Distributed AI", "Collaboration Security"],
        slug: 'multi-agent-systems-security-safe-ai-collaboration',
        featured: true
      },
      {
        type: 'blog',
        title: 'The Hidden Risks of Agentic AI: Why Traditional Monitoring Fails',
        description: 'Discover why autonomous AI agents break every security monitoring assumption and learn how to detect threats in systems that think for themselves.',
        publishedAt: '2025-03-08',
        readingTime: 20,
        difficulty: 'intermediate',
        category: 'AI Security',
        tags: ["Agentic AI", "Security Monitoring", "Autonomous Systems", "AI Detection", "Enterprise Security"],
        slug: 'hidden-risks-agentic-ai-monitoring-fails',
        featured: true
      },
      {
        type: 'blog',
        title: 'Healthcare AI Security: Protecting Patient Data and Ensuring Safety',
        description: 'Navigate the unique security challenges of healthcare AI systems. From HIPAA compliance to patient safety, learn how leading healthcare organizations are deploying secure AI while protecting lives and data.',
        publishedAt: '2025-03-18',
        readingTime: 26,
        difficulty: 'intermediate',
        category: 'Industry Applications',
        tags: ["Healthcare AI", "HIPAA Compliance", "Patient Safety", "Medical AI Security", "PHI Protection", "Healthcare Cybersecurity"],
        slug: 'healthcare-ai-security-protecting-patient-data-safety',
        featured: true
      },

      {
        type: 'blog',
        title: 'From Chatbots to Autonomous Agents: The Evolution of AI Security',
        description: 'Explore the dramatic shift from simple rule-based chatbots to fully autonomous AI agents, and how security challenges have evolved alongside this transformation.',
        publishedAt: '2025-03-18',
        readingTime: 15,
        difficulty: 'intermediate',
        category: 'AI Evolution',
        tags: ["AI Evolution", "Autonomous Agents", "AI Security", "Agent Security", "AI Development", "Neural Networks", "Machine Learning", "AI Architecture", "Agentic AI"],
        slug: 'from-chatbots-to-autonomous-agents-evolution-ai-security',
        featured: true
      },
      {
        type: 'blog',
        title: 'The Executive\'s Guide to AI Risk Management and Liability',
        description: 'A comprehensive guide for C-suite executives on understanding AI risks, managing liability exposure, and building resilient AI strategies that protect shareholder value while enabling innovation.',
        publishedAt: '2025-03-15',
        readingTime: 18,
        difficulty: 'intermediate',
        category: 'Compliance & Governance',
        tags: ["Executive Leadership", "AI Risk Management", "Legal Liability", "Board Governance", "C-Suite Strategy", "AI Compliance"],
        slug: 'executives-guide-ai-risk-management-liability',
        featured: true
      },
      {
        type: 'blog',
        title: 'Building a Mature AI Security Program: From Startup to Enterprise',
        description: 'A comprehensive roadmap for scaling AI security from early-stage startups to enterprise organizations. Learn the essential phases, key milestones, and proven strategies for building world-class AI security programs.',
        publishedAt: '2025-03-22',
        readingTime: 32,
        difficulty: 'intermediate',
        category: 'Implementation Guides',
        tags: ["AI Security Program", "Enterprise Security", "Startup Security", "Security Maturity", "Organizational Development", "Strategic Planning"],
        slug: 'building-mature-ai-security-program-startup-to-enterprise',
        featured: true
      },
      {
        type: 'blog',
        title: 'AI Security in Financial Services: Regulatory Requirements and Best Practices',
        description: 'Navigate the complex landscape of AI security in financial services. From GDPR to Basel III, learn how leading financial institutions are securing AI systems while meeting stringent regulatory requirements.',
        publishedAt: '2025-03-25',
        readingTime: 24,
        difficulty: 'intermediate',
        category: 'Industry Applications',
        tags: ["Financial Services", "AI Security", "Regulatory Compliance", "Banking AI", "FinTech Security", "Risk Management"],
        slug: 'ai-security-financial-services-regulatory-requirements',
        featured: true
      },
      {
        type: 'blog',
        title: 'AI Red Team Testing in Production: Lessons from 1000+ Assessments',
        description: 'Deep insights into production AI security testing, revealing patterns, methodologies, and critical lessons learned from extensive red team assessments in live environments.',
        publishedAt: '2025-03-26',
        readingTime: 18,
        difficulty: 'intermediate',
        category: 'AI Security',
        tags: ["Red Team", "Production Security", "AI Testing", "Security Assessment", "Enterprise AI"],
        slug: 'ai-red-team-testing-production-lessons',
        featured: true
      },
      {
        type: 'blog',
        title: 'The Complete Guide to AI Red Team Testing: Beyond Traditional Security',
        description: 'Master AI red team testing with comprehensive methodologies, real-world attack vectors, and ROI analysis. Learn how AI systems require fundamentally different security approaches.',
        publishedAt: '2025-03-12',
        readingTime: 22,
        difficulty: 'intermediate',
        category: 'Red Team Testing',
        tags: ["AI Security", "Red Team Testing", "LLM Security", "Penetration Testing", "AI Vulnerabilities"],
        slug: 'ai-red-team-testing-complete-guide',
        featured: true
      },
      {
        type: 'blog',
        title: 'AI Guardrails That Actually Work: Beyond Basic Content Filtering',
        description: 'Discover advanced AI guardrail techniques that go beyond simple keyword filtering to create truly intelligent, context-aware safety systems for AI applications.',
        publishedAt: '2025-02-26',
        readingTime: 17,
        difficulty: 'intermediate',
        category: 'AI Safety & Guardrails',
        tags: ["AI Guardrails", "AI Safety", "Content Filtering", "LLM Security", "AI Safety Systems", "Intelligent Guardrails"],
        slug: 'ai-guardrails-that-actually-work-beyond-basic-content-filtering',
        featured: true
      },
      {
        type: 'blog',
        title: 'AI Governance at Scale: Enterprise Strategies for Responsible AI',
        description: 'Learn how leading enterprises build comprehensive AI governance frameworks that balance innovation with responsibility, risk management with business value, and compliance with competitive advantage.',
        publishedAt: '2025-03-05',
        readingTime: 20,
        difficulty: 'intermediate',
        category: 'Governance & Strategy',
        tags: ["AI Governance", "Enterprise Strategy", "Responsible AI", "Risk Management", "AI Ethics", "Compliance"],
        slug: 'ai-governance-at-scale-enterprise-strategies-responsible-ai',
        featured: true
      },
      {
        type: 'blog',
        title: 'Zero-Day AI Vulnerabilities: Detection and Response',
        description: 'How to detect and respond to zero-day vulnerabilities in AI systems.',
        publishedAt: '2025-01-25',
        readingTime: 35,
        difficulty: 'intermediate',
        category: 'Zero-Day AI Vulnerabilities',
        tags: ["AI Security", "Zero-Day Vulnerabilities", "Detection", "Response", "Threat Intelligence", "Incident Response", "AI Governance", "Security Frameworks"],
        slug: 'zero-day-ai-vulnerabilities-detection-response',
        featured: true
      },
      {
        type: 'blog',
        title: 'Zero Trust Architecture for AI Systems: A Practical Implementation Guide',
        description: 'Learn how to implement Zero Trust principles specifically for AI systems, with practical examples, architecture patterns, and step-by-step implementation guidance.',
        publishedAt: '2025-01-22',
        readingTime: 20,
        difficulty: 'intermediate',
        category: 'AI Security',
        tags: ["Zero Trust", "AI Security", "Architecture", "Implementation", "Security Frameworks", "AI Governance", "Network Security", "Access Control"],
        slug: 'zero-trust-architecture-ai-systems-implementation-guide',
        featured: true
      },
      {
        type: 'blog',
        title: 'Secure AI Deployment: Production Best Practices',
        description: 'A comprehensive CISO\'s guide to deploying AI systems securely in production environments. Learn MLSecOps principles, threat modeling, and governance frameworks for resilient AI security.',
        publishedAt: '2025-01-20',
        readingTime: 30,
        difficulty: 'intermediate',
        category: 'Best Practices',
        tags: ["AI Security", "Production Deployment", "MLSecOps", "CISO Guide", "Threat Modeling", "Governance", "Zero Trust", "Monitoring"],
        slug: 'secure-ai-deployment-production-best-practices',
        featured: true
      },
      {
        type: 'blog',
        title: 'Advanced Prompt Engineering for Security: Defense Through Design',
        description: 'Master defensive prompt engineering techniques to build AI systems that resist manipulation, prevent injection attacks, and maintain security by design.',
        publishedAt: '2025-03-03',
        readingTime: 21,
        difficulty: 'intermediate',
        category: 'Prompt Security',
        tags: ["Prompt Engineering", "AI Security", "Prompt Injection", "Defense Strategies", "AI Safety", "Security Design", "LLM Security", "AI Defense"],
        slug: 'advanced-prompt-engineering-security-defense-through-design',
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
        tags: ["AI Security", "Enterprise Security", "Data Poisoning", "Adversarial Attacks", "Supply Chain Security", "MLSecOps"],
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
        tags: ["AI Security", "Security Automation", "Threat Detection", "Incident Response", "Vulnerability Management", "Compliance"],
        slug: 'ai-powered-security-automation-transforming-enterprise-cybersecurity',
        featured: true
      },
      {
        type: 'blog',
        title: '50+ Attack Vectors - A Red Teamer\'s Guide to Breaking AI Systems',
        description: 'Master the complete taxonomy of AI attack vectors with detailed techniques, real-world examples, and defensive strategies. The definitive guide for security professionals testing AI systems.',
        publishedAt: '2025-01-01',
        readingTime: 28,
        difficulty: 'intermediate',
        category: 'Red Team Testing',
        tags: ["AI Attack Vectors", "Prompt Injection", "LLM Security", "AI Vulnerabilities", "Red Team Testing"],
        slug: '50-attack-vectors-ai-red-team-guide',
        featured: true
      },
      {
        type: 'blog',
        title: 'Future of AI Security: Emerging Threats and Defenses',
        description: 'Exploring emerging threats and defense strategies in AI security.',
        publishedAt: '2025-03-20',
        readingTime: 16,
        difficulty: 'intermediate',
        category: 'Research',
        tags: ["Future AI Security", "Emerging Threats", "AI Defenses", "Research", "AI Security", "Threat Landscape", "Advanced Security", "AI Evolution", "Threat Analysis"],
        slug: 'future-ai-security-emerging-threats-defenses',
        featured: true
      },
      {
        type: 'blog',
        title: 'Neural Network Security: Beyond Traditional Defenses',
        description: 'Exploring the unique security challenges of neural networks and advanced defense strategies in an era where traditional cybersecurity approaches fall short.',
        publishedAt: '2025-01-12',
        readingTime: 14,
        difficulty: 'advanced',
        category: 'Research',
        tags: ["Neural Networks", "AI Security", "Research", "Advanced Defense", "Machine Learning", "Cybersecurity", "Deep Learning", "Model Security", "Adversarial Attacks"],
        slug: 'neural-network-security-beyond-traditional-defenses',
        featured: true
      },
      {
        type: 'blog',
        title: 'Understanding AI Vulnerabilities',
        description: 'Comprehensive guide to AI security fundamentals and common vulnerabilities that threaten AI systems in production.',
        publishedAt: '2025-01-08',
        readingTime: 25,
        difficulty: 'beginner',
        category: 'AI Security',
        tags: ["AI Security", "Vulnerabilities", "Basics", "Threat Landscape"],
        slug: 'test-learn-page-rendering',
        featured: true
      },
      {
        type: 'blog',
        title: 'OWASP Top 10 for AI: Critical Security Vulnerabilities',
        description: 'The OWASP Top 10 vulnerabilities specific to AI and machine learning systems.',
        publishedAt: '2025-01-10',
        readingTime: 12,
        difficulty: 'intermediate',
        category: 'Best Practices',
        tags: ["OWASP", "AI Vulnerabilities", "AI Security", "Top 10", "Security Standards", "Best Practices", "AI Security Framework", "Vulnerability Management"],
        slug: 'owasp-top-10-ai-critical-security-vulnerabilities',
        featured: true
      },
      {
        type: 'blog',
        title: 'LLM Security: Protecting Language Models in Production',
        description: 'Best practices for securing large language models in production environments.',
        publishedAt: '2025-01-08',
        readingTime: 16,
        difficulty: 'intermediate',
        category: 'AI Security',
        tags: ["llm-security", "production", "best-practices", "language-models"],
        slug: 'llm-security-protecting-language-models-production',
        featured: true
      },
      {
        type: 'blog',
        title: 'AI Architecture from First Principles: A Technical and Security Analysis',
        description: 'Comprehensive technical guide deconstructing AI systems layer by layer, from neural computation fundamentals to modern architectures, with integrated security analysis for system builders.',
        publishedAt: '2024-01-25',
        readingTime: 60,
        difficulty: 'intermediate',
        category: 'AI Architecture',
        tags: ["ai-architecture", "neural-networks", "transformers", "ai-security", "llm-security", "system-design"],
        slug: 'ai-arch-security',
        featured: true
      },
      {
        type: 'blog',
        title: 'The Agentic Leap: Understanding and Building Modern AI Agents',
        description: 'Comprehensive guide to understanding AI agents, from foundational concepts through advanced implementation with multi-agent systems and evaluation frameworks.',
        publishedAt: '2024-01-20',
        readingTime: 45,
        difficulty: 'intermediate',
        category: 'implementation',
        tags: ["ai-agents", "llm", "rag", "multi-agent-systems", "langchain", "implementation"],
        slug: 'the-agentic-leap-understanding-and-building-modern-ai-agents',
        featured: true
      },
      {
        type: 'blog',
        title: 'The Agentic AI Revolution: An Executive Report on Architecture, Implementation, and Security',
        description: 'A comprehensive guide to understanding, implementing, and securing AI agents in the modern enterprise - from basic concepts to multi-agent systems and advanced security frameworks.',
        publishedAt: '2025-03-10',
        readingTime: 45,
        difficulty: 'intermediate',
        category: 'AI Architecture',
        tags: ["agentic-ai", "ai-architecture", "multi-agent-systems", "ai-security", "enterprise-ai", "autonomous-systems"],
        slug: 'agentic-ai-complete-guide',
        featured: true
      }
    ]

  }

  private loadWhitePapers() {
    // Load actual whitepaper metadata
    this.contentIndex.whitepapers = [
      {
        type: 'whitepaper',
        title: 'AI-Specific Incident Response: A Comprehensive Guide for Technical Practitioners',
        description: 'Master AI-specific incident response with comprehensive guidance on detection, forensics, and recovery strategies for machine learning systems. Essential for security teams and CISOs navigating the evolving AI threat landscape.',
        publishedAt: '2025-01-15',
        readingTime: 45,
        difficulty: 'advanced',
        category: 'Incident Response',
        tags: ["AI Security", "Incident Response", "Forensics", "Machine Learning", "Recovery", "CISO", "Enterprise Security"],
        slug: 'ai-incident-response',
        featured: true,
        pdfUrl: '/white-papers/ai-incident-response.pdf',
        fileSize: '2.1 MB',
        pageCount: 45,
        gated: false,
        summary: 'Comprehensive framework for AI-specific incident response procedures, forensic techniques, and recovery strategies.',
        keyTopics: ['AI Incident Detection', 'Forensic Analysis', 'Recovery Procedures', 'Regulatory Compliance'],
        targetAudience: ['Security Teams', 'CISOs', 'Technical Practitioners', 'Enterprise Security']
      },
      {
        type: 'whitepaper',
        title: 'AI Regulatory Compliance: A Framework for 15+ Security Standards',
        description: 'Master the complex landscape of AI compliance with a unified framework that addresses GDPR, CCPA, SOC 2, ISO 27001, NIST, and emerging AI-specific regulations.',
        publishedAt: '2025-01-10',
        readingTime: 35,
        difficulty: 'intermediate',
        category: 'Compliance & Governance',
        tags: ["AI Compliance", "GDPR", "CCPA", "SOC 2", "ISO 27001", "NIST", "Regulatory Framework"],
        slug: 'ai-regulatory-compliance',
        featured: true,
        pdfUrl: '/white-papers/ai-regulatory-compliance.pdf',
        fileSize: '1.8 MB',
        pageCount: 38,
        gated: false,
        summary: 'Unified framework for navigating AI compliance across multiple regulatory standards and industry requirements.',
        keyTopics: ['Regulatory Compliance', 'AI Governance', 'Risk Management', 'Audit Preparation'],
        targetAudience: ['Compliance Officers', 'Legal Teams', 'CISOs', 'Enterprise Leaders']
      },
      {
        type: 'whitepaper',
        title: 'Building AI Security Programs: From Startup to Enterprise',
        description: 'A comprehensive roadmap for scaling AI security from early-stage startups to enterprise organizations. Learn the essential phases, key milestones, and proven strategies for building world-class AI security programs.',
        publishedAt: '2025-01-05',
        readingTime: 40,
        difficulty: 'intermediate',
        category: 'Implementation Guides',
        tags: ["AI Security Program", "Enterprise Security", "Startup Security", "Security Maturity", "Organizational Development"],
        slug: 'building-ai-security-programs',
        featured: true,
        pdfUrl: '/white-papers/building-ai-security-programs.pdf',
        fileSize: '2.3 MB',
        pageCount: 42,
        gated: false,
        summary: 'Comprehensive roadmap for building and scaling AI security programs across organizational maturity levels.',
        keyTopics: ['Program Development', 'Maturity Assessment', 'Resource Planning', 'Implementation Strategy'],
        targetAudience: ['Security Leaders', 'CISOs', 'Startup Founders', 'Enterprise Architects']
      },
      {
        type: 'whitepaper',
        title: 'AI Attack Surface Analysis: Reference Architecture for Enterprise Security',
        description: 'Comprehensive reference architecture for analyzing and securing AI attack surfaces in enterprise environments. Includes threat modeling, vulnerability assessment, and defense-in-depth strategies.',
        publishedAt: '2025-01-20',
        readingTime: 50,
        difficulty: 'advanced',
        category: 'Reference Architecture',
        tags: ["Attack Surface Analysis", "Reference Architecture", "Threat Modeling", "Enterprise Security", "AI Defense"],
        slug: 'ai-attack-surface-analysis-reference-architecture',
        featured: true,
        pdfUrl: '/white-papers/ai-attack-surface-guide.pdf',
        fileSize: '2.5 MB',
        pageCount: 48,
        gated: false,
        summary: 'Reference architecture for comprehensive AI attack surface analysis and defense strategies.',
        keyTopics: ['Attack Surface Mapping', 'Threat Modeling', 'Defense Architecture', 'Risk Assessment'],
        targetAudience: ['Security Architects', 'CISOs', 'Enterprise Security Teams', 'Technical Leaders']
      },
      {
        type: 'whitepaper',
        title: 'Multi-Agent System Security: Reference Architecture for Autonomous AI',
        description: 'Reference architecture for securing multi-agent AI systems with comprehensive security controls, monitoring, and governance frameworks for autonomous AI collaboration.',
        publishedAt: '2025-01-25',
        readingTime: 55,
        difficulty: 'advanced',
        category: 'Reference Architecture',
        tags: ["Multi-Agent Systems", "Autonomous AI", "Reference Architecture", "Agent Security", "AI Orchestration"],
        slug: 'multi-agent-system-security-reference-architecture',
        featured: true,
        pdfUrl: '/white-papers/multi-agent-security-architecture.pdf',
        fileSize: '2.8 MB',
        pageCount: 52,
        gated: false,
        summary: 'Comprehensive reference architecture for securing multi-agent AI systems and autonomous AI collaboration.',
        keyTopics: ['Agent Security', 'Multi-Agent Architecture', 'Autonomous Systems', 'AI Governance'],
        targetAudience: ['AI Architects', 'Security Engineers', 'System Designers', 'Technical Leaders']
      }
    ]
  }

  private loadLearningPaths() {
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
        featured: true,
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
        featured: true,
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

  private buildSearchIndex() {
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

  private generateCategoriesAndTags() {
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
      'optimization': 'Zap',
      'incident response': 'AlertTriangle',
      'compliance & governance': 'FileText',
      'implementation guides': 'Code',
      'reference architecture': 'Layout',
      'ai architecture': 'Cpu',
      'ai security': 'Shield',
      'technical research': 'Search',
      'industry applications': 'Building',
      'strategic vision': 'Target',
      'cloud security': 'Cloud',
      'ai safety & guardrails': 'Shield',
      'governance & strategy': 'FileText',
      'zero-day ai vulnerabilities': 'AlertTriangle',
      'best practices': 'CheckCircle',
      'prompt security': 'MessageSquare',
      'security automation': 'Zap',
      'red team testing': 'Target',
      'research': 'Search'
    }
    return iconMap[category.toLowerCase()] || 'BookOpen'
  }

  private getCategoryColor(category: string): string {
    const colorMap: Record<string, string> = {
      'fundamentals': 'blue',
      'red-teaming': 'red',
      'compliance': 'green',
      'monitoring': 'purple',
      'implementation': 'orange',
      'threats': 'yellow',
      'optimization': 'indigo',
      'incident response': 'red',
      'compliance & governance': 'green',
      'implementation guides': 'orange',
      'reference architecture': 'purple',
      'ai architecture': 'blue',
      'ai security': 'red',
      'technical research': 'indigo',
      'industry applications': 'green',
      'strategic vision': 'yellow',
      'cloud security': 'blue',
      'ai safety & guardrails': 'red',
      'governance & strategy': 'green',
      'zero-day ai vulnerabilities': 'red',
      'best practices': 'green',
      'prompt security': 'orange',
      'security automation': 'indigo',
      'red team testing': 'red',
      'research': 'indigo'
    }
    return colorMap[category.toLowerCase()] || 'gray'
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

  public findContentById(id: string): LearningContent | BlogContent | WhitePaperContent | null {
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
    const content = this.contentIndex[type === 'whitepaper' ? 'whitepapers' : type] || []
    // Sort blog content by date (newest first)
    if (type === 'blog') {
      return [...content].sort((a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      )
    }
    return content
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