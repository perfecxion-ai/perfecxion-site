// Community Platform Types and Interfaces

export interface User {
  id: string
  email: string
  username: string
  displayName: string
  avatar?: string
  bio?: string
  location?: string
  website?: string
  joinedAt: Date
  lastActiveAt: Date
  isVerified: boolean
  isExpert: boolean
  isModerator: boolean
  isAdmin: boolean
  reputation: number
  badges: Badge[]
  certifications: Certification[]
  preferences: UserPreferences
}

export interface UserPreferences {
  emailNotifications: boolean
  pushNotifications: boolean
  marketingEmails: boolean
  communityDigest: boolean
  theme: 'light' | 'dark' | 'system'
  language: string
  timezone: string
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  category: 'contribution' | 'expertise' | 'community' | 'special'
  earnedAt: Date
  level?: number
}

// Forum System Types
export interface ForumCategory {
  id: string
  name: string
  description: string
  slug: string
  icon: string
  moderators: string[] // User IDs
  publicAccess: boolean
  requiresVerification: boolean
  requiresCredentials: boolean
  postCount: number
  memberCount: number
  createdAt: Date
  updatedAt: Date
}

export interface ForumPost {
  id: string
  categoryId: string
  authorId: string
  title: string
  content: string
  contentHtml: string
  tags: string[]
  isPinned: boolean
  isLocked: boolean
  isDeleted: boolean
  viewCount: number
  likeCount: number
  replyCount: number
  createdAt: Date
  updatedAt: Date
  editedAt?: Date
  editedBy?: string
  replies: ForumReply[]
}

export interface ForumReply {
  id: string
  postId: string
  authorId: string
  content: string
  contentHtml: string
  parentReplyId?: string // For nested replies
  isDeleted: boolean
  likeCount: number
  createdAt: Date
  updatedAt: Date
  editedAt?: Date
  editedBy?: string
}

export interface PostLike {
  id: string
  postId?: string
  replyId?: string
  userId: string
  createdAt: Date
}

// Certification System Types
export interface CertificationProgram {
  id: string
  title: string
  description: string
  level: 'fundamentals' | 'practitioner' | 'expert'
  duration: number // hours
  modules: CertificationModule[]
  prerequisites: string[] // Program IDs
  certificationType: string
  isActive: boolean
  price: number
  currency: string
  createdAt: Date
  updatedAt: Date
}

export interface CertificationModule {
  id: string
  programId: string
  title: string
  description: string
  content: string
  contentHtml: string
  order: number
  estimatedTime: number // minutes
  resources: Resource[]
  assessments: Assessment[]
  isRequired: boolean
}

export interface Assessment {
  id: string
  moduleId?: string
  programId?: string
  title: string
  description: string
  type: 'multiple_choice' | 'practical' | 'case_study' | 'project'
  questions: Question[]
  timeLimit: number // minutes
  passingScore: number // percentage
  maxAttempts: number
  retakeWaitPeriod: number // days
  isActive: boolean
}

export interface Question {
  id: string
  assessmentId: string
  type: 'multiple_choice' | 'true_false' | 'short_answer' | 'essay' | 'practical'
  question: string
  options?: string[] // For multiple choice
  correctAnswer?: string | string[]
  explanation?: string
  points: number
  order: number
}

export interface UserEnrollment {
  id: string
  userId: string
  programId: string
  status: 'enrolled' | 'in_progress' | 'completed' | 'suspended'
  progress: number // percentage
  enrolledAt: Date
  completedAt?: Date
  certificateIssued?: boolean
  currentModuleId?: string
}

export interface AssessmentAttempt {
  id: string
  userId: string
  assessmentId: string
  answers: AssessmentAnswer[]
  score: number
  passed: boolean
  timeSpent: number // minutes
  startedAt: Date
  completedAt: Date
}

export interface AssessmentAnswer {
  questionId: string
  answer: string | string[]
  isCorrect: boolean
  points: number
}

export interface Certification {
  id: string
  userId: string
  programId: string
  certificateNumber: string
  issuedAt: Date
  expiresAt?: Date
  verificationUrl: string
  blockchainHash?: string
  isRevoked: boolean
}

// Bug Bounty System Types
export interface BugBountyProgram {
  id: string
  name: string
  description: string
  scope: string[]
  rewards: RewardTier[]
  rules: string
  isActive: boolean
  startDate: Date
  endDate?: Date
  totalPaid: number
  participantCount: number
}

export interface RewardTier {
  severity: 'critical' | 'high' | 'medium' | 'low'
  minAmount: number
  maxAmount: number
  currency: string
}

export interface VulnerabilitySubmission {
  id: string
  programId: string
  researcherId: string
  title: string
  description: string
  affectedSystems: string[]
  severity: 'critical' | 'high' | 'medium' | 'low'
  cvssScore: number
  proofOfConcept: {
    steps: string[]
    evidence: File[]
    videoDemo?: string
  }
  impact: string
  remediation: string
  status: 'submitted' | 'triaging' | 'validated' | 'fixed' | 'rejected' | 'duplicate'
  reward?: {
    amount: number
    currency: string
    paymentStatus: 'pending' | 'approved' | 'paid'
  }
  submittedAt: Date
  updatedAt: Date
  triageNotes?: string
  assignedTo?: string
}

export interface ResearcherProfile {
  id: string
  userId: string
  bio: string
  skills: string[]
  specializations: string[]
  totalEarnings: number
  submissionCount: number
  validSubmissionCount: number
  averageSeverity: number
  reputation: number
  hallOfFame: boolean
  badges: ResearcherBadge[]
}

export interface ResearcherBadge {
  id: string
  name: string
  description: string
  icon: string
  earnedAt: Date
  criteria: string
}

export interface DisclosureTimeline {
  submissionId: string
  events: DisclosureEvent[]
  publicDisclosureDate?: Date
  coordinatedDisclosure: boolean
}

export interface DisclosureEvent {
  id: string
  type: 'submitted' | 'acknowledged' | 'triaged' | 'validated' | 'fix_started' | 'fix_deployed' | 'disclosed'
  description: string
  timestamp: Date
  actor: string
  notes?: string
}

// Customer Portal Types
export interface CustomerProfile {
  id: string
  userId: string
  companyName: string
  industry: string
  companySize: string
  accountType: 'free' | 'starter' | 'professional' | 'enterprise'
  billingInfo: BillingInfo
  apiUsage: APIUsage
  subscriptions: Subscription[]
  supportTickets: SupportTicket[]
}

export interface BillingInfo {
  contactEmail: string
  billingAddress: Address
  paymentMethods: PaymentMethod[]
  invoices: Invoice[]
}

export interface Address {
  street: string
  city: string
  state: string
  postalCode: string
  country: string
}

export interface PaymentMethod {
  id: string
  type: 'credit_card' | 'bank_transfer' | 'paypal'
  last4?: string
  expiryDate?: string
  isDefault: boolean
  isActive: boolean
}

export interface Invoice {
  id: string
  number: string
  amount: number
  currency: string
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'void'
  issuedAt: Date
  dueAt: Date
  paidAt?: Date
  downloadUrl: string
}

export interface Subscription {
  id: string
  productId: string
  planId: string
  status: 'active' | 'cancelled' | 'expired' | 'suspended'
  currentPeriodStart: Date
  currentPeriodEnd: Date
  cancelAtPeriodEnd: boolean
  usage: SubscriptionUsage
}

export interface SubscriptionUsage {
  requests: number
  requestsLimit: number
  bandwidth: number
  bandwidthLimit: number
  storage: number
  storageLimit: number
  resetDate: Date
}

export interface APIUsage {
  totalRequests: number
  successfulRequests: number
  errorRequests: number
  averageResponseTime: number
  peakUsage: Date
  monthlyUsage: MonthlyUsage[]
  endpointUsage: EndpointUsage[]
}

export interface MonthlyUsage {
  month: string
  requests: number
  bandwidth: number
  errors: number
  averageResponseTime: number
}

export interface EndpointUsage {
  endpoint: string
  method: string
  requests: number
  averageResponseTime: number
  errorRate: number
}

export interface APIKey {
  id: string
  customerId: string
  name: string
  key: string // Hashed in database
  permissions: APIPermission[]
  isActive: boolean
  expiresAt?: Date
  lastUsedAt?: Date
  createdAt: Date
  rateLimit: number
  usageQuota: number
  currentUsage: number
}

export interface APIPermission {
  resource: string
  actions: string[]
}

export interface SupportTicket {
  id: string
  customerId: string
  priority: 'low' | 'medium' | 'high' | 'critical'
  category: 'technical' | 'billing' | 'feature_request' | 'bug_report'
  title: string
  description: string
  attachments: File[]
  status: 'open' | 'in_progress' | 'waiting_customer' | 'resolved' | 'closed'
  assignedAgentId?: string
  createdAt: Date
  updatedAt: Date
  resolvedAt?: Date
  resolutionTime?: number // minutes
  satisfactionRating?: number // 1-5 scale
  messages: TicketMessage[]
}

export interface TicketMessage {
  id: string
  ticketId: string
  authorId: string
  authorType: 'customer' | 'agent' | 'system'
  content: string
  attachments: File[]
  isInternal: boolean
  createdAt: Date
}

export interface SupportAgent {
  id: string
  userId: string
  department: string
  specializations: string[]
  isAvailable: boolean
  currentTicketCount: number
  averageResponseTime: number
  satisfactionRating: number
}

// Content and Resource Types
export interface Resource {
  id: string
  title: string
  description: string
  type: 'document' | 'video' | 'link' | 'code' | 'image'
  url: string
  fileSize?: number
  duration?: number // For videos
  downloadCount: number
  createdAt: Date
  updatedAt: Date
}

// Notification System Types
export interface Notification {
  id: string
  userId: string
  type: 'forum_reply' | 'certification_update' | 'bug_bounty' | 'support_ticket' | 'system'
  title: string
  message: string
  data?: Record<string, any>
  isRead: boolean
  createdAt: Date
  expiresAt?: Date
}

// Moderation Types
export interface ModerationAction {
  id: string
  moderatorId: string
  targetType: 'post' | 'reply' | 'user' | 'submission'
  targetId: string
  action: 'warn' | 'delete' | 'suspend' | 'ban' | 'approve' | 'reject'
  reason: string
  duration?: number // For suspensions/bans in days
  notes?: string
  createdAt: Date
}

export interface ContentReport {
  id: string
  reporterId: string
  targetType: 'post' | 'reply' | 'user'
  targetId: string
  reason: 'spam' | 'inappropriate' | 'harassment' | 'misinformation' | 'other'
  description: string
  status: 'pending' | 'reviewed' | 'resolved' | 'dismissed'
  reviewedBy?: string
  reviewedAt?: Date
  action?: string
  createdAt: Date
}

// Analytics Types
export interface CommunityAnalytics {
  period: string
  userStats: {
    totalUsers: number
    activeUsers: number
    newUsers: number
    userRetention: number
  }
  forumStats: {
    totalPosts: number
    newPosts: number
    totalReplies: number
    newReplies: number
    avgResponseTime: number
  }
  certificationStats: {
    totalEnrollments: number
    newEnrollments: number
    completionRate: number
    avgCompletionTime: number
  }
  bugBountyStats: {
    totalSubmissions: number
    newSubmissions: number
    totalPaid: number
    avgResolutionTime: number
  }
}

// Search Types
export interface SearchResult {
  id: string
  type: 'post' | 'user' | 'certification' | 'resource'
  title: string
  description: string
  url: string
  relevanceScore: number
  createdAt: Date
  author?: string
  category?: string
  tags?: string[]
}

export interface SearchFilters {
  type?: string[]
  category?: string[]
  dateRange?: {
    start: Date
    end: Date
  }
  author?: string
  tags?: string[]
  minRelevance?: number
}