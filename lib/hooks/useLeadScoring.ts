'use client'

import { useMemo, useCallback } from 'react'
import { 
  LeadProfile, 
  LeadScoringConfig, 
  QualificationLevel,
  ScoreCategory,
  DEFAULT_LEAD_SCORING_CONFIG 
} from '@/lib/progressive-profiling'

interface ScoreBreakdown {
  total: number
  categories: {
    [key in ScoreCategory]: {
      score: number
      maxScore: number
      rules: Array<{
        id: string
        description: string
        points: number
        triggered: boolean
      }>
    }
  }
  qualification: QualificationLevel
  nextThreshold?: {
    level: QualificationLevel
    pointsNeeded: number
  }
}

interface UseLeadScoringReturn {
  calculateScore: (profile: Partial<LeadProfile>) => number
  scoreBreakdown: (profile: Partial<LeadProfile>) => ScoreBreakdown
  getQualificationLevel: (score: number) => QualificationLevel
  getNextThreshold: (score: number) => { level: QualificationLevel; pointsNeeded: number } | null
}

export function useLeadScoring(config: LeadScoringConfig = DEFAULT_LEAD_SCORING_CONFIG): UseLeadScoringReturn {
  
  // Calculate total lead score
  const calculateScore = useCallback((profile: Partial<LeadProfile>): number => {
    let totalScore = 0
    
    config.rules.forEach(rule => {
      const value = profile[rule.field]
      let points = 0
      
      switch (rule.condition.operator) {
        case 'equals':
          if (value === rule.condition.value) {
            points = rule.points
          }
          break
        case 'contains':
          if (Array.isArray(value)) {
            const includesValue = value.some(item => item === rule.condition.value)
            if (includesValue) {
              points = rule.points
            }
          } else if (typeof value === 'string' && typeof rule.condition.value === 'string' && value.includes(rule.condition.value)) {
            points = rule.points
          }
          break
        case 'greater_than':
          if (typeof value === 'number' && value > rule.condition.value) {
            points = rule.points
          }
          break
        case 'exists':
          if (value !== undefined && value !== null && value !== '') {
            points = rule.points
          }
          break
      }
      
      // Apply multiplier if present
      if (rule.multiplier) {
        points *= rule.multiplier
      }
      
      // Respect max points limit
      if (rule.maxPoints) {
        points = Math.min(points, rule.maxPoints)
      }
      
      totalScore += points
    })
    
    // Apply decay rules if applicable
    config.decayRules?.forEach(decayRule => {
      if (profile.lastActivity) {
        const daysSinceActivity = Math.floor(
          (Date.now() - new Date(profile.lastActivity).getTime()) / (1000 * 60 * 60 * 24)
        )
        const decayAmount = (totalScore * (decayRule.decayRate / 100)) * daysSinceActivity
        totalScore = Math.max(totalScore - decayAmount, decayRule.minimumScore)
      }
    })
    
    return Math.min(Math.max(Math.round(totalScore), 0), 100)
  }, [config])

  // Get qualification level based on score
  const getQualificationLevel = useCallback((score: number): QualificationLevel => {
    const threshold = config.thresholds
      .slice()
      .reverse()
      .find(t => score >= t.minScore)
    
    return threshold?.name || 'cold'
  }, [config])

  // Get next threshold information
  const getNextThreshold = useCallback((score: number) => {
    const nextLevel = config.thresholds.find(t => score < t.minScore)
    if (!nextLevel) return null
    
    return {
      level: nextLevel.name,
      pointsNeeded: nextLevel.minScore - score
    }
  }, [config])

  // Calculate detailed score breakdown by category
  const scoreBreakdown = useCallback((profile: Partial<LeadProfile>): ScoreBreakdown => {
    const categories: ScoreBreakdown['categories'] = {
      demographic: { score: 0, maxScore: 0, rules: [] },
      behavioral: { score: 0, maxScore: 0, rules: [] },
      engagement: { score: 0, maxScore: 0, rules: [] },
      intent: { score: 0, maxScore: 0, rules: [] },
      timing: { score: 0, maxScore: 0, rules: [] }
    }
    
    config.rules.forEach(rule => {
      const value = profile[rule.field]
      let triggered = false
      let points = 0
      
      // Evaluate rule condition
      switch (rule.condition.operator) {
        case 'equals':
          triggered = value === rule.condition.value
          break
        case 'contains':
          if (Array.isArray(value)) {
            triggered = value.some(item => item === rule.condition.value)
          } else if (typeof value === 'string' && typeof rule.condition.value === 'string') {
            triggered = value.includes(rule.condition.value)
          } else {
            triggered = false
          }
          break
        case 'greater_than':
          triggered = typeof value === 'number' && value > rule.condition.value
          break
        case 'exists':
          triggered = value !== undefined && value !== null && value !== ''
          break
      }
      
      if (triggered) {
        points = rule.points
        if (rule.multiplier) points *= rule.multiplier
        if (rule.maxPoints) points = Math.min(points, rule.maxPoints)
      }
      
      categories[rule.category].rules.push({
        id: rule.id,
        description: generateRuleDescription(rule, value),
        points,
        triggered
      })
      
      categories[rule.category].score += triggered ? points : 0
      categories[rule.category].maxScore += rule.maxPoints || rule.points
    })
    
    const totalScore = calculateScore(profile)
    const qualification = getQualificationLevel(totalScore)
    const nextThreshold = getNextThreshold(totalScore)
    
    return {
      total: totalScore,
      categories,
      qualification,
      nextThreshold: nextThreshold || undefined
    }
  }, [config, calculateScore, getQualificationLevel, getNextThreshold])

  return {
    calculateScore,
    scoreBreakdown,
    getQualificationLevel,
    getNextThreshold
  }
}

// Advanced scoring utilities
export function useAdvancedLeadScoring(config: LeadScoringConfig = DEFAULT_LEAD_SCORING_CONFIG) {
  const { calculateScore, scoreBreakdown } = useLeadScoring(config)

  // Calculate score trend over time
  const calculateScoreTrend = useCallback((profileHistory: Array<{ profile: Partial<LeadProfile>; date: Date }>) => {
    return profileHistory.map(({ profile, date }) => ({
      date,
      score: calculateScore(profile)
    }))
  }, [calculateScore])

  // Predict next best action based on score
  const predictNextAction = useCallback((profile: Partial<LeadProfile>) => {
    const breakdown = scoreBreakdown(profile)
    const lowCategories = Object.entries(breakdown.categories)
      .filter(([_, data]) => data.score < data.maxScore * 0.5)
      .sort(([_, a], [__, b]) => a.score - b.score)

    if (lowCategories.length === 0) {
      return {
        action: 'schedule_demo',
        reason: 'Lead is highly qualified across all categories'
      }
    }

    const [lowestCategory] = lowCategories
    const categoryActions = {
      demographic: 'collect_company_info',
      behavioral: 'send_relevant_content',
      engagement: 'schedule_webinar',
      intent: 'provide_roi_calculator',
      timing: 'discuss_implementation_timeline'
    }

    return {
      action: categoryActions[lowestCategory[0] as ScoreCategory],
      reason: `Improve ${lowestCategory[0]} scoring through targeted engagement`,
      category: lowestCategory[0]
    }
  }, [scoreBreakdown])

  // Calculate lead temperature (urgency indicator)
  const calculateLeadTemperature = useCallback((profile: Partial<LeadProfile>) => {
    const score = calculateScore(profile)
    const hasUrgentTimeline = profile.implementationTimeline === 'immediate'
    const hasHighBudget = ['1m_5m', 'over_5m'].includes(profile.budgetRange || '')
    const isDecisionMaker = profile.decisionMakingRole === 'decision_maker'
    
    let temperature = score
    
    if (hasUrgentTimeline) temperature += 15
    if (hasHighBudget) temperature += 10
    if (isDecisionMaker) temperature += 10
    
    return Math.min(temperature, 100)
  }, [calculateScore])

  return {
    calculateScore,
    scoreBreakdown,
    calculateScoreTrend,
    predictNextAction,
    calculateLeadTemperature
  }
}

// Helper function to generate human-readable rule descriptions
function generateRuleDescription(rule: any, value: any): string {
  const fieldLabels: Record<string, string> = {
    companySize: 'Company Size',
    decisionMakingRole: 'Decision Role', 
    implementationTimeline: 'Implementation Timeline',
    aiMaturity: 'AI Maturity Level',
    budgetRange: 'Budget Range',
    jobRole: 'Job Role',
    industry: 'Industry',
    securityChallenges: 'Security Challenges',
    complianceRequirements: 'Compliance Requirements',
    email: 'Email Address',
    company: 'Company Name',
    phone: 'Phone Number'
  }
  
  const fieldLabel = fieldLabels[rule.field] || rule.field.replace(/([A-Z])/g, ' $1').replace(/^./, (str: string) => str.toUpperCase())
  
  switch (rule.condition.operator) {
    case 'equals':
      return `${fieldLabel}: ${formatValue(rule.condition.value)}`
    case 'contains':
      return `${fieldLabel} includes: ${formatValue(rule.condition.value)}`
    case 'greater_than':
      return `${fieldLabel} > ${formatValue(rule.condition.value)}`
    case 'exists':
      return `${fieldLabel} provided`
    default:
      return `${fieldLabel} criteria met`
  }
}

// Helper function to format values for display
function formatValue(value: any): string {
  if (typeof value === 'string') {
    return value.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').toLowerCase()
      .replace(/^\w/, c => c.toUpperCase())
  }
  return String(value)
}