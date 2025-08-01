'use client'

import { useCallback, useMemo } from 'react'
import { 
  LeadProfile, 
  ContentResource, 
  AudienceSegment,
  ResourceType,
  MessagingVariant
} from '@/lib/progressive-profiling'
import { useContentGating } from './useContentGating'

interface ContentRecommendation extends ContentResource {
  score: number
  reason: string
  priority: 'high' | 'medium' | 'low'
}

interface UseContentRecommendationsReturn {
  getRecommendations: (profile: Partial<LeadProfile>, limit?: number) => ContentRecommendation[]
  getPersonalizedMessaging: (segment: AudienceSegment, profile: Partial<LeadProfile>) => MessagingVariant
  getRecommendationReason: (resource: ContentResource, profile: Partial<LeadProfile>) => string
  getContentScore: (resource: ContentResource, profile: Partial<LeadProfile>) => number
  getContentByCategory: (category: ResourceType, profile: Partial<LeadProfile>) => ContentResource[]
  getTrendingContent: (profile: Partial<LeadProfile>) => ContentResource[]
}

// Mock content database - in production this would come from a CMS/API
const CONTENT_LIBRARY: ContentResource[] = [
  {
    id: 'ai-security-executive-guide',
    title: 'Executive Guide to AI Security',
    type: 'whitepaper',
    description: 'Comprehensive guide for executives on AI security strategy, risk management, and implementation roadmaps.',
    gatingRules: [{
      resourceType: 'whitepaper',
      profileRequirements: [
        { field: 'email', operator: 'exists', value: undefined, weight: 10 },
        { field: 'jobTitle', operator: 'exists', value: undefined, weight: 15 },
        { field: 'companySize', operator: 'exists', value: undefined, weight: 10 }
      ]
    }],
    personalizedVariants: [
      {
        audience: 'executives',
        variant: {
          title: 'Executive Guide to AI Security Strategy',
          description: 'Strategic insights for C-level executives on building robust AI security programs.',
          cta: 'Download Executive Guide'
        }
      },
      {
        audience: 'startups',
        variant: {
          title: 'AI Security for Growing Companies',
          description: 'Practical AI security guidance for fast-growing startups and scale-ups.',
          cta: 'Get Startup Guide'
        }
      }
    ],
    trackingId: 'executive-ai-security-guide'
  },
  {
    id: 'technical-implementation-guide',
    title: 'Technical Implementation Guide',
    type: 'guide',
    description: 'Step-by-step technical guide for implementing AI security controls in production environments.',
    gatingRules: [{
      resourceType: 'guide',
      profileRequirements: [
        { field: 'email', operator: 'exists', value: undefined, weight: 10 },
        { field: 'jobRole', operator: 'equals', value: 'developer', weight: 20 }
      ]
    }],
    personalizedVariants: [
      {
        audience: 'developers',
        variant: {
          title: 'Developer Guide to AI Security Implementation',
          description: 'Technical deep-dive into secure AI development practices and implementation patterns.',
          cta: 'Download Dev Guide'
        }
      }
    ],
    trackingId: 'technical-implementation-guide'
  },
  {
    id: 'roi-calculator',
    title: 'AI Security ROI Calculator',
    type: 'calculator',
    description: 'Calculate the ROI of your AI security investments and build business cases for security initiatives.',
    gatingRules: [{
      resourceType: 'calculator',
      profileRequirements: [
        { field: 'email', operator: 'exists', value: undefined, weight: 10 },
        { field: 'company', operator: 'exists', value: undefined, weight: 15 },
        { field: 'budgetRange', operator: 'exists', value: undefined, weight: 20 },
        { field: 'implementationTimeline', operator: 'exists', value: undefined, weight: 15 }
      ]
    }],
    personalizedVariants: [
      {
        audience: 'executives',
        variant: {
          title: 'Executive ROI Calculator for AI Security',
          description: 'Build compelling business cases for AI security investments with our ROI calculator.',
          cta: 'Calculate ROI'
        }
      }
    ],
    trackingId: 'ai-security-roi-calculator'
  },
  {
    id: 'compliance-checklist',
    title: 'AI Compliance Checklist',
    type: 'checklist',
    description: 'Comprehensive checklist covering GDPR, HIPAA, SOX, and other regulatory requirements for AI systems.',
    gatingRules: [{
      resourceType: 'checklist',
      profileRequirements: [
        { field: 'email', operator: 'exists', value: undefined, weight: 10 },
        { field: 'complianceRequirements', operator: 'exists', value: undefined, weight: 15 }
      ]
    }],
    personalizedVariants: [
      {
        audience: 'compliance',
        variant: {
          title: 'Regulatory Compliance Checklist for AI',
          description: 'Ensure your AI systems meet all regulatory requirements with our comprehensive checklist.',
          cta: 'Get Compliance Checklist'
        }
      }
    ],
    trackingId: 'ai-compliance-checklist'
  },
  {
    id: 'security-assessment-template',
    title: 'AI Security Assessment Template',
    type: 'assessment',
    description: 'Ready-to-use template for conducting comprehensive AI security assessments and audits.',
    gatingRules: [{
      resourceType: 'assessment',
      profileRequirements: [
        { field: 'email', operator: 'exists', value: undefined, weight: 10 },
        { field: 'jobRole', operator: 'equals', value: 'security', weight: 20 },
        { field: 'aiMaturity', operator: 'contains', value: 'production', weight: 15 }
      ]
    }],
    personalizedVariants: [
      {
        audience: 'security_teams',
        variant: {
          title: 'Security Assessment Template for AI Systems',
          description: 'Professional template for security teams to assess and audit AI system security.',
          cta: 'Download Template'
        }
      }
    ],
    trackingId: 'security-assessment-template'
  },
  {
    id: 'incident-response-playbook',
    title: 'AI Incident Response Playbook',
    type: 'guide',
    description: 'Comprehensive playbook for responding to AI security incidents, including detection, containment, and recovery procedures.',
    gatingRules: [{
      resourceType: 'guide',
      profileRequirements: [
        { field: 'email', operator: 'exists', value: undefined, weight: 10 },
        { field: 'securityChallenges', operator: 'contains', value: 'incident_response', weight: 20 }
      ]
    }],
    personalizedVariants: [
      {
        audience: 'security_teams',
        variant: {
          title: 'AI Security Incident Response Playbook',
          description: 'Step-by-step playbook for security teams to handle AI-specific security incidents.',
          cta: 'Get Playbook'
        }
      }
    ],
    trackingId: 'ai-incident-response-playbook'
  }
]

export function useContentRecommendations(): UseContentRecommendationsReturn {
  const { getAudienceSegment } = useContentGating()

  // Get personalized content recommendations
  const getRecommendations = useCallback((profile: Partial<LeadProfile>, limit: number = 10): ContentRecommendation[] => {
    const scoredContent = CONTENT_LIBRARY.map(resource => ({
      ...resource,
      score: calculateContentScore(resource, profile),
      reason: generateRecommendationReason(resource, profile),
      priority: getContentPriority(resource, profile)
    }))

    // Sort by score and return top recommendations
    return scoredContent
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
  }, [])

  // Get personalized messaging for audience segment
  const getPersonalizedMessaging = useCallback((segment: AudienceSegment, profile: Partial<LeadProfile>): MessagingVariant => {
    const messagingMap: Record<AudienceSegment, MessagingVariant> = {
      developers: {
        audience: 'developers',
        headline: 'Technical Resources for Secure AI Development',
        description: 'Implementation guides, code templates, and best practices for building secure AI systems.',
        cta: 'Explore Technical Content'
      },
      security_teams: {
        audience: 'security_teams',
        headline: 'Security Resources for AI Protection',
        description: 'Assessment tools, incident response guides, and security frameworks for AI systems.',
        cta: 'Access Security Resources'
      },
      executives: {
        audience: 'executives',
        headline: 'Strategic AI Security Insights',
        description: 'Executive guides, ROI calculators, and strategic frameworks for AI security leadership.',
        cta: 'View Executive Content'
      },
      compliance: {
        audience: 'compliance',
        headline: 'AI Compliance and Governance Resources',
        description: 'Regulatory checklists, compliance frameworks, and audit templates for AI systems.',
        cta: 'Get Compliance Resources'
      },
      startups: {
        audience: 'startups',
        headline: 'AI Security for Growing Companies',
        description: 'Practical, cost-effective AI security solutions for startups and scale-ups.',
        cta: 'Explore Startup Resources'
      },
      enterprise: {
        audience: 'enterprise',
        headline: 'Enterprise AI Security Solutions',
        description: 'Comprehensive security frameworks and implementation guides for large-scale AI deployments.',
        cta: 'Access Enterprise Content'
      },
      evaluators: {
        audience: 'evaluators',
        headline: 'AI Security Evaluation Resources',
        description: 'Guides, checklists, and assessment tools to help you evaluate AI security solutions.',
        cta: 'Start Evaluating'
      },
      implementers: {
        audience: 'implementers',
        headline: 'Implementation Resources for AI Security',
        description: 'Technical guides, templates, and best practices for implementing AI security controls.',
        cta: 'Begin Implementation'
      }
    }

    return messagingMap[segment] || messagingMap.evaluators
  }, [])

  // Get recommendation reason for a specific resource
  const getRecommendationReason = useCallback((resource: ContentResource, profile: Partial<LeadProfile>): string => {
    return generateRecommendationReason(resource, profile)
  }, [])

  // Get content score for a specific resource
  const getContentScore = useCallback((resource: ContentResource, profile: Partial<LeadProfile>): number => {
    return calculateContentScore(resource, profile)
  }, [])

  // Get content by category/type
  const getContentByCategory = useCallback((category: ResourceType, profile: Partial<LeadProfile>): ContentResource[] => {
    return CONTENT_LIBRARY
      .filter(resource => resource.type === category)
      .sort((a, b) => calculateContentScore(b, profile) - calculateContentScore(a, profile))
  }, [])

  // Get trending content (based on engagement and relevance)
  const getTrendingContent = useCallback((profile: Partial<LeadProfile>): ContentResource[] => {
    // Mock trending logic - in production this would use analytics data
    const trendingIds = ['ai-security-executive-guide', 'roi-calculator', 'technical-implementation-guide']
    
    return CONTENT_LIBRARY
      .filter(resource => trendingIds.includes(resource.id))
      .sort((a, b) => calculateContentScore(b, profile) - calculateContentScore(a, profile))
  }, [])

  return {
    getRecommendations,
    getPersonalizedMessaging,
    getRecommendationReason,
    getContentScore,
    getContentByCategory,
    getTrendingContent
  }
}

// Helper functions

function calculateContentScore(resource: ContentResource, profile: Partial<LeadProfile>): number {
  let score = 50 // Base score

  // Role-based scoring
  const roleBoosts = {
    'ai-security-executive-guide': { executive: 30, manager: 20 },
    'technical-implementation-guide': { developer: 35, security: 25 },
    'roi-calculator': { executive: 35, manager: 25 },
    'compliance-checklist': { compliance: 40, security: 20 },
    'security-assessment-template': { security: 40, developer: 15 },
    'incident-response-playbook': { security: 35, operations: 20 }
  }

  if (profile.jobRole && roleBoosts[resource.id as keyof typeof roleBoosts]?.[profile.jobRole as keyof typeof roleBoosts[keyof typeof roleBoosts]]) {
    score += roleBoosts[resource.id as keyof typeof roleBoosts][profile.jobRole as keyof typeof roleBoosts[keyof typeof roleBoosts]]
  }

  // AI maturity scoring
  if (profile.aiMaturity) {
    const maturityBoosts = {
      'none': { 'ai-security-executive-guide': 20, 'compliance-checklist': 15 },
      'exploring': { 'ai-security-executive-guide': 25, 'technical-implementation-guide': 15 },
      'pilot': { 'technical-implementation-guide': 25, 'security-assessment-template': 20 },
      'production': { 'incident-response-playbook': 30, 'security-assessment-template': 25 },
      'advanced': { 'incident-response-playbook': 35, 'security-assessment-template': 30 }
    }

    const maturityBoost = maturityBoosts[profile.aiMaturity as keyof typeof maturityBoosts]
    if (maturityBoost && maturityBoost[resource.id as keyof typeof maturityBoost]) {
      score += maturityBoost[resource.id as keyof typeof maturityBoost]
    }
  }

  // Company size scoring
  if (profile.companySize) {
    const sizeBoosts = {
      'startup': { 'ai-security-executive-guide': 10, 'technical-implementation-guide': 15 },
      'small': { 'compliance-checklist': 15, 'roi-calculator': 10 },
      'medium': { 'security-assessment-template': 15, 'roi-calculator': 15 },
      'large': { 'incident-response-playbook': 20, 'security-assessment-template': 20 },
      'enterprise': { 'incident-response-playbook': 25, 'security-assessment-template': 25 }
    }

    const sizeBoost = sizeBoosts[profile.companySize as keyof typeof sizeBoosts]
    if (sizeBoost && sizeBoost[resource.id as keyof typeof sizeBoost]) {
      score += sizeBoost[resource.id as keyof typeof sizeBoost]
    }
  }

  // Security challenges alignment
  if (profile.securityChallenges && Array.isArray(profile.securityChallenges)) {
    const challengeBoosts = {
      'model_security': { 'technical-implementation-guide': 20, 'security-assessment-template': 25 },
      'compliance': { 'compliance-checklist': 30, 'ai-security-executive-guide': 15 },
      'incident_response': { 'incident-response-playbook': 35 },
      'monitoring': { 'security-assessment-template': 20, 'incident-response-playbook': 15 },
      'governance': { 'ai-security-executive-guide': 25, 'compliance-checklist': 20 }
    }

    profile.securityChallenges.forEach(challenge => {
      const challengeBoost = challengeBoosts[challenge as keyof typeof challengeBoosts]
      if (challengeBoost && challengeBoost[resource.id as keyof typeof challengeBoost]) {
        score += challengeBoost[resource.id as keyof typeof challengeBoost]
      }
    })
  }

  // Timeline urgency
  if (profile.implementationTimeline === 'immediate') {
    score += 10 // Boost for urgent needs
  }

  return Math.min(Math.max(score, 0), 100)
}

function generateRecommendationReason(resource: ContentResource, profile: Partial<LeadProfile>): string {
  const reasons = []

  // Role-based reasons
  if (profile.jobRole) {
    const roleReasons = {
      'executive': 'matches your executive role',
      'security': 'aligns with your security responsibilities',
      'developer': 'provides technical implementation guidance',
      'manager': 'helps with team leadership and strategy'
    }
    
    if (roleReasons[profile.jobRole as keyof typeof roleReasons]) {
      reasons.push(roleReasons[profile.jobRole as keyof typeof roleReasons])
    }
  }

  // AI maturity reasons
  if (profile.aiMaturity) {
    const maturityReasons = {
      'none': 'perfect for AI security beginners',
      'exploring': 'ideal for those exploring AI security',
      'pilot': 'relevant for pilot implementation',
      'production': 'essential for production systems',
      'advanced': 'advanced content for mature AI programs'
    }
    
    if (maturityReasons[profile.aiMaturity]) {
      reasons.push(maturityReasons[profile.aiMaturity])
    }
  }

  // Company size reasons
  if (profile.companySize) {
    const sizeReasons = {
      'startup': 'tailored for growing companies',
      'enterprise': 'designed for large-scale implementations'
    }
    
    if (sizeReasons[profile.companySize as keyof typeof sizeReasons]) {
      reasons.push(sizeReasons[profile.companySize as keyof typeof sizeReasons])
    }
  }

  // Security challenges reasons
  if (profile.securityChallenges && Array.isArray(profile.securityChallenges)) {
    const challengeReasons = {
      'compliance': 'addresses your compliance needs',
      'incident_response': 'helps with incident response planning',
      'model_security': 'focuses on model security challenges'
    }
    
    profile.securityChallenges.forEach(challenge => {
      if (challengeReasons[challenge as keyof typeof challengeReasons]) {
        reasons.push(challengeReasons[challenge as keyof typeof challengeReasons])
      }
    })
  }

  if (reasons.length === 0) {
    return 'highly relevant to AI security professionals'
  }

  return reasons.slice(0, 2).join(' and ')
}

function getContentPriority(resource: ContentResource, profile: Partial<LeadProfile>): 'high' | 'medium' | 'low' {
  const score = calculateContentScore(resource, profile)
  
  if (score >= 80) return 'high'
  if (score >= 60) return 'medium'
  return 'low'
}