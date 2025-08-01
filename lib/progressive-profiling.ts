// Progressive Profiling System - Core Types and Interfaces
// Comprehensive lead capture, qualification, and content personalization

// =============================================================================
// Core Data Interfaces
// =============================================================================

export interface LeadProfile {
  // Basic Information (Always Collected)
  email: string
  firstName?: string
  lastName?: string
  
  // Company Information
  company?: string
  companyDomain?: string
  companySize?: CompanySize
  industry?: Industry
  jobTitle?: string
  jobRole?: JobRole
  department?: Department
  
  // Contact Information
  phone?: string
  linkedInProfile?: string
  
  // AI/ML Context
  aiMaturity?: AIMaturity
  currentAIUsage?: string[]
  securityChallenges?: SecurityChallenge[]
  complianceRequirements?: ComplianceRequirement[]
  
  // Qualification Data
  budgetRange?: BudgetRange
  decisionMakingRole?: DecisionRole
  implementationTimeline?: Timeline
  evaluationCriteria?: string[]
  
  // Technical Context
  techStack?: string[]
  integrationRequirements?: string[]
  scalabilityNeeds?: string
  
  // Behavioral Data
  profileLevel: number
  downloadCount: number
  engagementScore: number
  leadScore: number
  lastActivity: Date
  contentPreferences?: ContentType[]
  
  // Consent and Preferences
  marketingConsent: boolean
  communicationPreferences?: CommunicationChannel[]
  gdprConsent?: boolean
  cookieConsent?: boolean
  
  // Metadata
  source: LeadSource
  utmParameters?: UTMParameters
  ipAddress?: string
  userAgent?: string
  sessionId: string
  createdAt: Date
  updatedAt: Date
}

// =============================================================================
// Progressive Form Configuration
// =============================================================================

export interface ProgressiveFormConfig {
  steps: FormStep[]
  conditionalLogic: ConditionalRule[]
  contentGating: ContentGatingRule[]
  leadScoring: LeadScoringConfig
  personalization: PersonalizationConfig
}

export interface FormStep {
  id: string
  name: string
  title: string
  description?: string
  fields: FormField[]
  conditions?: StepCondition[]
  completionThreshold: number // Minimum fields required
  priority: 'low' | 'medium' | 'high'
}

export interface FormField {
  id: string
  name: keyof LeadProfile
  label: string
  type: FieldType
  required: boolean
  placeholder?: string
  options?: FieldOption[]
  validation?: ValidationRule[]
  conditions?: FieldCondition[]
  enrichment?: EnrichmentSource
}

export interface ConditionalRule {
  id: string
  trigger: ConditionalTrigger
  action: ConditionalAction
  priority: number
}

// =============================================================================
// Content Gating System
// =============================================================================

export interface ContentGatingRule {
  resourceType: ResourceType
  profileRequirements: ProfileRequirement[]
  scoreThreshold?: number
  customLogic?: (profile: LeadProfile) => boolean
}

export interface ProfileRequirement {
  field: keyof LeadProfile
  operator: 'exists' | 'equals' | 'contains' | 'greater_than' | 'less_than'
  value?: any
  weight: number
}

export interface ContentResource {
  id: string
  title: string
  type: ResourceType
  description: string
  url?: string
  fileSize?: string
  coverImage?: string
  gatingRules: ContentGatingRule[]
  personalizedVariants?: PersonalizedContent[]
  trackingId: string
}

// =============================================================================
// Lead Scoring System
// =============================================================================

export interface LeadScoringConfig {
  rules: ScoringRule[]
  thresholds: ScoreThreshold[]
  decayRules: ScoreDecayRule[]
}

export interface ScoringRule {
  id: string
  field: keyof LeadProfile
  condition: ScoringCondition
  points: number
  multiplier?: number
  maxPoints?: number
  category: ScoreCategory
}

export interface ScoreThreshold {
  name: QualificationLevel
  minScore: number
  maxScore: number
  actions: ThresholdAction[]
}

// =============================================================================
// Company Enrichment System
// =============================================================================

export interface CompanyEnrichmentData {
  domain: string
  name: string
  size: CompanySize
  industry: Industry
  revenue?: string
  employees?: number
  techStack?: string[]
  socialProfiles?: SocialProfile[]
  fundingInfo?: FundingInfo
  newsRecent?: NewsItem[]
  location?: CompanyLocation
}

export interface EnrichmentProvider {
  name: 'clearbit' | 'zoominfo' | 'apollo' | 'builtwith' | 'ip_geolocation'
  apiKey?: string
  enabled: boolean
  priority: number
}

// =============================================================================
// Personalization Engine
// =============================================================================

export interface PersonalizationConfig {
  contentRecommendations: ContentRecommendationRule[]
  messagingVariants: MessagingVariant[]
  ctaPersonalization: CTAPersonalizationRule[]
}

export interface ContentRecommendationRule {
  trigger: PersonalizationTrigger
  content: RecommendedContent[]
  priority: number
}

export interface PersonalizedContent {
  audience: AudienceSegment
  variant: ContentVariant
}

// =============================================================================
// Analytics and Tracking
// =============================================================================

export interface FormAnalytics {
  sessionId: string
  formId: string
  events: AnalyticsEvent[]
  completionRate: number
  abandonmentPoint?: string
  timeSpent: number
  deviceInfo: DeviceInfo
}

export interface AnalyticsEvent {
  type: EventType
  timestamp: Date
  fieldId?: string
  value?: any
  metadata?: Record<string, any>
}

// =============================================================================
// Enum Types
// =============================================================================

export type CompanySize = 
  | 'startup' | 'small' | 'medium' | 'large' | 'enterprise'

export type Industry = 
  | 'technology' | 'healthcare' | 'financial' | 'retail' | 'manufacturing'
  | 'education' | 'government' | 'consulting' | 'media' | 'other'

export type JobRole = 
  | 'developer' | 'security' | 'executive' | 'manager' | 'analyst'
  | 'architect' | 'consultant' | 'researcher' | 'operations' | 'other'

export type Department = 
  | 'engineering' | 'security' | 'it' | 'operations' | 'compliance'
  | 'risk' | 'product' | 'marketing' | 'sales' | 'executive'

export type AIMaturity = 
  | 'none' | 'exploring' | 'pilot' | 'production' | 'advanced'

export type SecurityChallenge = 
  | 'model_security' | 'data_privacy' | 'compliance' | 'monitoring'
  | 'governance' | 'risk_assessment' | 'incident_response'

export type ComplianceRequirement = 
  | 'gdpr' | 'hipaa' | 'sox' | 'pci' | 'iso27001' | 'nist' | 'other'

export type BudgetRange = 
  | 'under_50k' | '50k_250k' | '250k_1m' | '1m_5m' | 'over_5m' | 'unknown'

export type DecisionRole = 
  | 'decision_maker' | 'influencer' | 'evaluator' | 'user' | 'researcher'

export type Timeline = 
  | 'immediate' | '3_months' | '6_months' | '12_months' | 'research_only'

export type ContentType = 
  | 'technical' | 'business' | 'compliance' | 'case_studies' | 'whitepapers'

export type CommunicationChannel = 
  | 'email' | 'phone' | 'linkedin' | 'webinar' | 'newsletter'

export type LeadSource = 
  | 'organic' | 'paid_search' | 'social' | 'referral' | 'direct'
  | 'email' | 'webinar' | 'event' | 'partner'

export type ResourceType = 
  | 'whitepaper' | 'guide' | 'ebook' | 'report' | 'checklist'
  | 'template' | 'calculator' | 'assessment'

export type FieldType = 
  | 'text' | 'email' | 'phone' | 'select' | 'multiselect'
  | 'checkbox' | 'radio' | 'textarea' | 'number'

export type QualificationLevel = 
  | 'cold' | 'warm' | 'hot' | 'qualified' | 'sales_ready'

export type ScoreCategory = 
  | 'demographic' | 'behavioral' | 'engagement' | 'intent' | 'timing'

export type AudienceSegment = 
  | 'developers' | 'security_teams' | 'executives' | 'compliance'
  | 'startups' | 'enterprise' | 'evaluators' | 'implementers'

export type EventType = 
  | 'form_start' | 'field_focus' | 'field_complete' | 'field_error'
  | 'step_complete' | 'form_submit' | 'form_abandon' | 'form_success'

// =============================================================================
// Supporting Interfaces
// =============================================================================

export interface FieldOption {
  value: string
  label: string
  description?: string
}

export interface ValidationRule {
  type: 'required' | 'email' | 'phone' | 'min_length' | 'max_length' | 'pattern'
  value?: any
  message: string
}

export interface StepCondition {
  field: keyof LeadProfile
  operator: 'equals' | 'not_equals' | 'exists' | 'not_exists'
  value?: any
}

export interface FieldCondition {
  showIf: StepCondition[]
  hideIf?: StepCondition[]
}

export interface ConditionalTrigger {
  field: keyof LeadProfile
  event: 'change' | 'complete' | 'focus' | 'blur'
  condition: any
}

export interface ConditionalAction {
  type: 'show_field' | 'hide_field' | 'set_value' | 'validate' | 'enrich'
  target: string
  value?: any
}

export interface EnrichmentSource {
  provider: 'domain_lookup' | 'ip_geolocation' | 'social_lookup'
  trigger: 'email_complete' | 'company_complete'
  fields: string[]
}

export interface ScoringCondition {
  operator: 'equals' | 'contains' | 'greater_than' | 'exists'
  value?: any
}

export interface ThresholdAction {
  type: 'notification' | 'lead_routing' | 'content_unlock' | 'priority_flag'
  config: Record<string, any>
}

export interface ScoreDecayRule {
  category: ScoreCategory
  decayRate: number // percentage per day
  minimumScore: number
}

export interface SocialProfile {
  platform: string
  url: string
}

export interface FundingInfo {
  stage?: string
  amount?: number
  investors?: string[]
}

export interface NewsItem {
  title: string
  url: string
  date: Date
  source: string
}

export interface CompanyLocation {
  country: string
  region?: string
  city?: string
  timezone?: string
}

export interface MessagingVariant {
  audience: AudienceSegment
  headline: string
  description: string
  cta: string
}

export interface CTAPersonalizationRule {
  condition: PersonalizationTrigger
  variants: CTAVariant[]
}

export interface PersonalizationTrigger {
  field: keyof LeadProfile
  operator: 'equals' | 'contains' | 'greater_than'
  value: any
}

export interface RecommendedContent {
  resourceId: string
  priority: number
  reason: string
}

export interface ContentVariant {
  title: string
  description: string
  cta: string
  url?: string
}

export interface CTAVariant {
  text: string
  style: 'primary' | 'secondary' | 'outline'
  icon?: string
}

export interface DeviceInfo {
  userAgent: string
  screenResolution: string
  deviceType: 'desktop' | 'tablet' | 'mobile'
  browser: string
  os: string
}

export interface UTMParameters {
  source?: string
  medium?: string
  campaign?: string
  term?: string
  content?: string
}

// =============================================================================
// Default Configurations
// =============================================================================

export const DEFAULT_LEAD_SCORING_CONFIG: LeadScoringConfig = {
  rules: [
    {
      id: 'company_size_enterprise',
      field: 'companySize',
      condition: { operator: 'equals', value: 'enterprise' },
      points: 25,
      category: 'demographic'
    },
    {
      id: 'role_decision_maker',
      field: 'decisionMakingRole',
      condition: { operator: 'equals', value: 'decision_maker' },
      points: 20,
      category: 'demographic'
    },
    {
      id: 'timeline_immediate',
      field: 'implementationTimeline',
      condition: { operator: 'equals', value: 'immediate' },
      points: 15,
      category: 'timing'
    },
    {
      id: 'ai_maturity_production',
      field: 'aiMaturity',
      condition: { operator: 'equals', value: 'production' },
      points: 20,
      category: 'intent'
    }
  ],
  thresholds: [
    {
      name: 'cold',
      minScore: 0,
      maxScore: 25,
      actions: [{ type: 'lead_routing', config: { queue: 'nurture' } }]
    },
    {
      name: 'warm',
      minScore: 26,
      maxScore: 50,
      actions: [{ type: 'lead_routing', config: { queue: 'marketing' } }]
    },
    {
      name: 'hot',
      minScore: 51,
      maxScore: 75,
      actions: [{ type: 'lead_routing', config: { queue: 'sales' } }]
    },
    {
      name: 'sales_ready',
      minScore: 76,
      maxScore: 100,
      actions: [
        { type: 'notification', config: { channel: 'slack', urgent: true } },
        { type: 'lead_routing', config: { queue: 'sales', priority: 'high' } }
      ]
    }
  ],
  decayRules: [
    {
      category: 'behavioral',
      decayRate: 5, // 5% per day
      minimumScore: 0
    }
  ]
}

export const PROFILE_PROGRESSION_THRESHOLDS = {
  BASIC: 2,    // After 2 interactions, ask for name
  QUALIFIED: 4, // After 4 interactions, ask for company details
  ADVANCED: 8   // After 8 interactions, ask for technical details
} as const