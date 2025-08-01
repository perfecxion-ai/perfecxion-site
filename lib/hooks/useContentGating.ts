'use client'

import { useCallback, useMemo } from 'react'
import { 
  ContentResource, 
  ContentGatingRule, 
  LeadProfile, 
  ProfileRequirement,
  PersonalizedContent,
  AudienceSegment
} from '@/lib/progressive-profiling'

interface AccessResult {
  hasAccess: boolean
  reason?: string
  score: number
  requirementsMet: number
  totalRequirements: number
}

interface MissingRequirement {
  field: keyof LeadProfile
  description: string
  weight: number
}

interface UseContentGatingReturn {
  checkAccess: (resource: ContentResource, profile: Partial<LeadProfile>) => AccessResult
  getRequirements: (resource: ContentResource, profile: Partial<LeadProfile>) => MissingRequirement[]
  getPersonalizedContent: (resource: ContentResource, profile: Partial<LeadProfile>) => PersonalizedContent | null
  getAudienceSegment: (profile: Partial<LeadProfile>) => AudienceSegment
  getContentRecommendations: (profile: Partial<LeadProfile>) => ContentResource[]
}

export function useContentGating(): UseContentGatingReturn {
  
  // Check if user has access to a resource
  const checkAccess = useCallback((resource: ContentResource, profile: Partial<LeadProfile>): AccessResult => {
    if (!resource.gatingRules || resource.gatingRules.length === 0) {
      return {
        hasAccess: true,
        score: 100,
        requirementsMet: 0,
        totalRequirements: 0
      }
    }

    let totalScore = 0
    let maxScore = 0
    let requirementsMet = 0
    let totalRequirements = 0

    for (const rule of resource.gatingRules) {
      const ruleResult = evaluateGatingRule(rule, profile)
      totalScore += ruleResult.score
      maxScore += ruleResult.maxScore
      
      if (ruleResult.requirementsMet === ruleResult.totalRequirements) {
        requirementsMet++
      }
      totalRequirements++
    }

    const accessScore = maxScore > 0 ? (totalScore / maxScore) * 100 : 0
    const hasAccess = accessScore >= getAccessThreshold(resource.type)

    return {
      hasAccess,
      score: Math.round(accessScore),
      requirementsMet,
      totalRequirements,
      reason: hasAccess ? undefined : generateAccessReason(resource, profile)
    }
  }, [])

  // Get missing requirements for a resource
  const getRequirements = useCallback((resource: ContentResource, profile: Partial<LeadProfile>): MissingRequirement[] => {
    if (!resource.gatingRules) return []

    const missingRequirements: MissingRequirement[] = []

    for (const rule of resource.gatingRules) {
      for (const requirement of rule.profileRequirements) {
        if (!evaluateRequirement(requirement, profile)) {
          missingRequirements.push({
            field: requirement.field,
            description: generateRequirementDescription(requirement),
            weight: requirement.weight
          })
        }
      }
    }

    // Sort by weight (highest impact first)
    return missingRequirements.sort((a, b) => b.weight - a.weight)
  }, [])

  // Get personalized content variant
  const getPersonalizedContent = useCallback((resource: ContentResource, profile: Partial<LeadProfile>): PersonalizedContent | null => {
    if (!resource.personalizedVariants || resource.personalizedVariants.length === 0) {
      return null
    }

    const userSegment = getAudienceSegment(profile)
    
    return resource.personalizedVariants.find(variant => 
      variant.audience === userSegment
    ) || null
  }, [])

  // Determine user's audience segment
  const getAudienceSegment = useCallback((profile: Partial<LeadProfile>): AudienceSegment => {
    const { jobRole, department, companySize, aiMaturity } = profile

    // Executive segment
    if (jobRole === 'executive' || 
        department === 'executive' ||
        ['CEO', 'CTO', 'CISO', 'VP', 'Chief'].some(title => 
          profile.jobTitle?.toLowerCase().includes(title.toLowerCase())
        )) {
      return 'executives'
    }

    // Developer segment
    if (jobRole === 'developer' || 
        department === 'engineering' ||
        ['developer', 'engineer', 'architect'].some(role => 
          profile.jobTitle?.toLowerCase().includes(role)
        )) {
      return 'developers'
    }

    // Security segment
    if (jobRole === 'security' || 
        department === 'security' ||
        ['security', 'infosec', 'cybersecurity'].some(term => 
          profile.jobTitle?.toLowerCase().includes(term)
        )) {
      return 'security_teams'
    }

    // Compliance segment
    if (department === 'compliance' ||
        ['compliance', 'risk', 'audit', 'governance'].some(term => 
          profile.jobTitle?.toLowerCase().includes(term)
        )) {
      return 'compliance'
    }

    // Company size based segmentation
    if (companySize === 'startup' || companySize === 'small') {
      return 'startups'
    }
    
    if (companySize === 'enterprise' || companySize === 'large') {
      return 'enterprise'
    }

    // AI maturity based segmentation
    if (aiMaturity === 'none' || aiMaturity === 'exploring') {
      return 'evaluators'
    }
    
    if (aiMaturity === 'production' || aiMaturity === 'advanced') {
      return 'implementers'
    }

    return 'evaluators' // Default segment
  }, [])

  // Get content recommendations based on profile
  const getContentRecommendations = useCallback((profile: Partial<LeadProfile>): ContentResource[] => {
    // This would typically come from a content management system
    // For now, return mock recommendations based on user segment
    
    const segment = getAudienceSegment(profile)
    const recommendations: ContentResource[] = []

    switch (segment) {
      case 'executives':
        recommendations.push(
          createMockResource('executive-ai-security-guide', 'whitepaper'),
          createMockResource('roi-calculator', 'calculator'),
          createMockResource('compliance-checklist', 'checklist')
        )
        break
      
      case 'developers':
        recommendations.push(
          createMockResource('technical-implementation-guide', 'guide'),
          createMockResource('api-security-template', 'template'),
          createMockResource('threat-modeling-guide', 'guide')
        )
        break
        
      case 'security_teams':
        recommendations.push(
          createMockResource('security-assessment-template', 'assessment'),
          createMockResource('incident-response-playbook', 'guide'),
          createMockResource('monitoring-checklist', 'checklist')
        )
        break
        
      default:
        recommendations.push(
          createMockResource('ai-security-basics', 'guide'),
          createMockResource('getting-started-checklist', 'checklist')
        )
    }

    return recommendations
  }, [])

  return {
    checkAccess,
    getRequirements, 
    getPersonalizedContent,
    getAudienceSegment,
    getContentRecommendations
  }
}

// Helper functions

function evaluateGatingRule(rule: ContentGatingRule, profile: Partial<LeadProfile>) {
  let score = 0
  let maxScore = 0
  let requirementsMet = 0
  let totalRequirements = rule.profileRequirements.length

  for (const requirement of rule.profileRequirements) {
    const metRequirement = evaluateRequirement(requirement, profile)
    if (metRequirement) {
      score += requirement.weight
      requirementsMet++
    }
    maxScore += requirement.weight
  }

  // Apply custom logic if present
  if (rule.customLogic) {
    const customResult = rule.customLogic(profile as LeadProfile)
    if (customResult) {
      score = maxScore // Grant full score if custom logic passes
    }
  }

  return {
    score,
    maxScore,
    requirementsMet,
    totalRequirements
  }
}

function evaluateRequirement(requirement: ProfileRequirement, profile: Partial<LeadProfile>): boolean {
  const value = profile[requirement.field]

  switch (requirement.operator) {
    case 'exists':
      return value !== undefined && value !== null && value !== ''
    
    case 'equals':
      return value === requirement.value
    
    case 'contains':
      if (Array.isArray(value)) {
        return value.some(item => item === requirement.value)
      }
      if (typeof value === 'string' && typeof requirement.value === 'string') {
        return value.includes(requirement.value)
      }
      return false
    
    case 'greater_than':
      return typeof value === 'number' && value > requirement.value
    
    case 'less_than':
      return typeof value === 'number' && value < requirement.value
    
    default:
      return false
  }
}

function getAccessThreshold(resourceType: string): number {
  // Different resource types have different access thresholds
  const thresholds = {
    'whitepaper': 60,   // Medium barrier
    'guide': 40,        // Low barrier
    'ebook': 60,        // Medium barrier
    'report': 70,       // High barrier
    'checklist': 30,    // Low barrier
    'template': 50,     // Medium barrier
    'calculator': 80,   // High barrier - requires qualification
    'assessment': 70    // High barrier
  }

  return thresholds[resourceType as keyof typeof thresholds] || 50
}

function generateAccessReason(resource: ContentResource, profile: Partial<LeadProfile>): string {
  const missingFields = []
  
  if (!profile.email) missingFields.push('email address')
  if (!profile.company) missingFields.push('company information')
  if (!profile.jobTitle) missingFields.push('job title')
  
  if (missingFields.length === 0) {
    return 'Additional profile information needed to qualify for this resource.'
  }
  
  const lastField = missingFields.pop()
  const fieldList = missingFields.length === 0 
    ? lastField 
    : `${missingFields.join(', ')} and ${lastField}`
    
  return `Please provide your ${fieldList} to access this resource.`
}

function generateRequirementDescription(requirement: ProfileRequirement): string {
  const fieldLabels: Record<string, string> = {
    email: 'Work email address',
    firstName: 'First name', 
    lastName: 'Last name',
    company: 'Company name',
    jobTitle: 'Job title',
    companySize: 'Company size',
    industry: 'Industry',
    aiMaturity: 'AI/ML maturity level',
    securityChallenges: 'Security challenges you face',
    implementationTimeline: 'Implementation timeline',
    budgetRange: 'Budget range'
  }

  const fieldLabel = fieldLabels[requirement.field] || requirement.field

  switch (requirement.operator) {
    case 'exists':
      return fieldLabel
    case 'equals':
      return `${fieldLabel}: ${requirement.value}`
    case 'contains':
      return `${fieldLabel} including ${requirement.value}`
    default:
      return fieldLabel
  }
}

function createMockResource(id: string, type: any): ContentResource {
  const titles: Record<string, string> = {
    'executive-ai-security-guide': 'Executive Guide to AI Security',
    'roi-calculator': 'AI Security ROI Calculator',
    'compliance-checklist': 'AI Compliance Checklist',
    'technical-implementation-guide': 'Technical Implementation Guide',
    'api-security-template': 'API Security Template',
    'threat-modeling-guide': 'AI Threat Modeling Guide',
    'security-assessment-template': 'Security Assessment Template',
    'incident-response-playbook': 'AI Incident Response Playbook',
    'monitoring-checklist': 'AI Monitoring Checklist',
    'ai-security-basics': 'AI Security Basics Guide',
    'getting-started-checklist': 'Getting Started Checklist'
  }

  return {
    id,
    title: titles[id] || 'Resource',
    type,
    description: `Comprehensive ${type} for AI security professionals`,
    gatingRules: [{
      resourceType: type,
      profileRequirements: [
        { field: 'email', operator: 'exists', value: undefined, weight: 10 }
      ]
    }],
    trackingId: `resource-${id}`
  }
}