// Community Platform Configuration

export const FORUM_CATEGORIES = {
  general: {
    name: "General Discussion",
    description: "General AI security topics and news",
    slug: "general",
    icon: "MessageSquare",
    moderators: ["expert1", "expert2"],
    publicAccess: true,
    requiresVerification: false,
    requiresCredentials: false,
    color: "#3B82F6"
  },
  technical: {
    name: "Technical Discussions",
    description: "Deep technical AI security topics",
    slug: "technical",
    icon: "Code",
    moderators: ["tech_expert1", "tech_expert2"],
    publicAccess: false, // Registered users only
    requiresVerification: true,
    requiresCredentials: false,
    color: "#10B981"
  },
  research: {
    name: "Security Research",
    description: "Academic and industry research discussions",
    slug: "research",
    icon: "Search",
    moderators: ["researcher1", "researcher2"],
    publicAccess: false,
    requiresVerification: true,
    requiresCredentials: true,
    color: "#8B5CF6"
  },
  announcements: {
    name: "Announcements",
    description: "Official perfecXion.ai announcements",
    slug: "announcements",
    icon: "Megaphone",
    moderators: ["admin"],
    publicAccess: true,
    requiresVerification: false,
    requiresCredentials: false,
    readOnly: true,
    color: "#F59E0B"
  },
  help: {
    name: "Help & Support",
    description: "Get help with perfecXion products",
    slug: "help",
    icon: "HelpCircle",
    moderators: ["support1", "support2"],
    publicAccess: true,
    requiresVerification: false,
    requiresCredentials: false,
    color: "#EF4444"
  },
  showcase: {
    name: "Project Showcase",
    description: "Share your AI security projects",
    slug: "showcase",
    icon: "Star",
    moderators: ["showcase_mod1", "showcase_mod2"],
    publicAccess: true,
    requiresVerification: true,
    requiresCredentials: false,
    color: "#EC4899"
  }
} as const;

export const CERTIFICATION_PROGRAMS = {
  fundamentals: {
    title: "AI Security Fundamentals",
    description: "Basic AI security concepts and practices",
    level: "fundamentals" as const,
    duration: 40, // hours
    price: 299,
    currency: "USD",
    modules: [
      "Introduction to AI Security",
      "Common AI Vulnerabilities", 
      "Basic Defense Strategies",
      "Compliance Basics",
      "Incident Response Fundamentals"
    ],
    prerequisites: [],
    certification: "AI Security Associate",
    color: "#3B82F6"
  },
  practitioner: {
    title: "AI Security Practitioner",
    description: "Hands-on AI security implementation",
    level: "practitioner" as const,
    duration: 80, // hours
    price: 599,
    currency: "USD",
    modules: [
      "Advanced Threat Detection",
      "Security Testing Methodologies",
      "Implementation Best Practices",
      "Advanced Compliance",
      "Security Architecture Design"
    ],
    prerequisites: ["fundamentals"],
    certification: "AI Security Practitioner",
    color: "#10B981"
  },
  expert: {
    title: "AI Security Expert",
    description: "Advanced AI security research and leadership",
    level: "expert" as const,
    duration: 120, // hours
    price: 999,
    currency: "USD",
    modules: [
      "Cutting-edge Research",
      "Security Program Leadership",
      "Advanced Analytics",
      "Industry Standards Development",
      "Capstone Project"
    ],
    prerequisites: ["practitioner"],
    certification: "AI Security Expert",
    color: "#8B5CF6"
  }
} as const;

export const REPUTATION_SYSTEM = {
  // Points for positive actions
  HELPFUL_ANSWER: 10,
  QUALITY_POST: 5,
  RESEARCH_CONTRIBUTION: 25,
  COMMENT_RECEIVED: 2,
  THANKS_RECEIVED: 3,
  MENTORSHIP_HOUR: 15,
  
  // Bonuses
  VERIFIED_EXPERT_BONUS: 100,
  CERTIFIED_BONUS: 50,
  
  // Penalties
  FLAGGED_CONTENT: -20,
  SPAM_REPORT: -10,
  
  // Reputation levels
  LEVELS: [
    { min: 0, max: 99, name: "Newcomer", badge: "👋", color: "#6B7280" },
    { min: 100, max: 299, name: "Community Member", badge: "🌱", color: "#3B82F6" },
    { min: 300, max: 699, name: "Regular Contributor", badge: "⭐", color: "#10B981" },
    { min: 700, max: 1499, name: "Trusted Member", badge: "🏆", color: "#F59E0B" },
    { min: 1500, max: 2999, name: "Expert Contributor", badge: "💎", color: "#8B5CF6" },
    { min: 3000, max: Infinity, name: "Community Leader", badge: "👑", color: "#EC4899" }
  ]
} as const;

export const BUG_BOUNTY_REWARDS = {
  critical: { min: 2000, max: 10000, currency: "USD" },
  high: { min: 1000, max: 5000, currency: "USD" },
  medium: { min: 500, max: 2000, currency: "USD" },
  low: { min: 100, max: 500, currency: "USD" }
} as const;

export const DISCLOSURE_TIMELINE = {
  initialSubmission: 0,        // Day 0
  initialResponse: 5,          // 5 business days
  triageComplete: 10,          // 10 business days
  fixDevelopment: 45,          // 45 days for fix
  fixDeployment: 60,           // 60 days total
  publicDisclosure: 90,        // 90 days maximum
  
  // Escalation triggers
  escalationPoints: [
    { day: 5, action: "Send reminder to security team" },
    { day: 15, action: "Escalate to security manager" },
    { day: 30, action: "Escalate to CISO" },
    { day: 75, action: "Prepare for public disclosure" }
  ]
} as const;

export const USER_BADGES = {
  // Contribution badges
  FIRST_POST: { name: "First Post", description: "Made your first post", icon: "✍️", category: "contribution" },
  HELPFUL_MEMBER: { name: "Helpful Member", description: "Received 25+ helpful votes", icon: "🤝", category: "contribution" },
  KNOWLEDGE_SHARER: { name: "Knowledge Sharer", description: "Posted 50+ quality answers", icon: "📚", category: "contribution" },
  
  // Expertise badges
  AI_SECURITY_EXPERT: { name: "AI Security Expert", description: "Recognized expertise in AI security", icon: "🛡️", category: "expertise" },
  RESEARCHER: { name: "Researcher", description: "Published security research", icon: "🔬", category: "expertise" },
  BUG_HUNTER: { name: "Bug Hunter", description: "Found critical vulnerabilities", icon: "🐛", category: "expertise" },
  
  // Community badges
  MENTOR: { name: "Mentor", description: "Helped new members", icon: "👨‍🏫", category: "community" },
  MODERATOR: { name: "Moderator", description: "Community moderator", icon: "🛠️", category: "community" },
  CONFERENCE_SPEAKER: { name: "Conference Speaker", description: "Spoke at security conferences", icon: "🎤", category: "community" },
  
  // Special badges
  EARLY_ADOPTER: { name: "Early Adopter", description: "Joined in the first month", icon: "🚀", category: "special" },
  BETA_TESTER: { name: "Beta Tester", description: "Participated in beta testing", icon: "🧪", category: "special" },
  HALL_OF_FAME: { name: "Hall of Fame", description: "Top bug bounty researcher", icon: "🏆", category: "special" }
} as const;

export const NOTIFICATION_TYPES = {
  FORUM_REPLY: { title: "New Reply", icon: "MessageCircle", color: "#3B82F6" },
  FORUM_MENTION: { title: "You were mentioned", icon: "AtSign", color: "#10B981" },
  CERTIFICATION_COMPLETE: { title: "Certification Earned", icon: "Award", color: "#F59E0B" },
  CERTIFICATION_REMINDER: { title: "Course Reminder", icon: "Clock", color: "#6B7280" },
  BUG_BOUNTY_UPDATE: { title: "Submission Update", icon: "Bug", color: "#EF4444" },
  BUG_BOUNTY_REWARD: { title: "Reward Approved", icon: "DollarSign", color: "#10B981" },
  SUPPORT_TICKET: { title: "Support Response", icon: "HelpCircle", color: "#8B5CF6" },
  SYSTEM_ANNOUNCEMENT: { title: "System Update", icon: "Bell", color: "#EC4899" }
} as const;

export const API_RATE_LIMITS = {
  FREE: { requests: 1000, period: "month" },
  STARTER: { requests: 10000, period: "month" },
  PROFESSIONAL: { requests: 100000, period: "month" },
  ENTERPRISE: { requests: 1000000, period: "month" }
} as const;

export const SUBSCRIPTION_PLANS = {
  free: {
    name: "Free",
    price: 0,
    currency: "USD",
    features: [
      "1,000 API requests/month",
      "Community support",
      "Basic documentation"
    ],
    limits: {
      apiRequests: 1000,
      projects: 1,
      users: 1
    }
  },
  starter: {
    name: "Starter",
    price: 29,
    currency: "USD",
    features: [
      "10,000 API requests/month",
      "Email support",
      "Advanced documentation",
      "Basic analytics"
    ],
    limits: {
      apiRequests: 10000,
      projects: 5,
      users: 3
    }
  },
  professional: {
    name: "Professional", 
    price: 99,
    currency: "USD",
    features: [
      "100,000 API requests/month",
      "Priority support",
      "Advanced analytics",
      "Custom integrations"
    ],
    limits: {
      apiRequests: 100000,
      projects: 25,
      users: 10
    }
  },
  enterprise: {
    name: "Enterprise",
    price: 499,
    currency: "USD",
    features: [
      "1,000,000 API requests/month",
      "Dedicated support",
      "Custom SLA",
      "On-premise deployment"
    ],
    limits: {
      apiRequests: 1000000,
      projects: -1, // Unlimited
      users: -1 // Unlimited
    }
  }
} as const;

export const CONTENT_LIMITS = {
  POST_TITLE_MAX: 200,
  POST_CONTENT_MAX: 50000,
  REPLY_CONTENT_MAX: 10000,
  BIO_MAX: 500,
  SUBMISSION_TITLE_MAX: 200,
  SUBMISSION_DESCRIPTION_MAX: 10000,
  TICKET_TITLE_MAX: 200,
  TICKET_DESCRIPTION_MAX: 5000
} as const;

export const FILE_UPLOAD_LIMITS = {
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_TYPES: [
    'image/jpeg',
    'image/png', 
    'image/gif',
    'image/webp',
    'application/pdf',
    'text/plain',
    'application/json',
    'video/mp4',
    'video/webm'
  ],
  MAX_FILES_PER_UPLOAD: 5
} as const;

export const MODERATION_CONFIG = {
  SPAM_THRESHOLD: 5, // Reports needed for auto-hide
  REPUTATION_THRESHOLD: 100, // Min reputation to avoid auto-moderation
  RATE_LIMITS: {
    POSTS_PER_HOUR: 10,
    REPLIES_PER_HOUR: 20,
    REPORTS_PER_DAY: 5
  },
  AUTO_ACTIONS: {
    HIDE_POST: 5, // Reports needed
    SUSPEND_USER: 10, // Reports needed
    BAN_USER: 20 // Reports needed
  }
} as const;