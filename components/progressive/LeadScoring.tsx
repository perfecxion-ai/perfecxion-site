'use client'

import React, { useMemo } from 'react'
import { TrendingUp, Star, Target, Award, Info } from 'lucide-react'
import { cn } from '@/lib/utils'
import { 
  LeadProfile, 
  LeadScoringConfig, 
  QualificationLevel,
  ScoreCategory 
} from '@/lib/progressive-profiling'

interface LeadScoringProps {
  score: number
  breakdown?: ScoreBreakdown
  config?: LeadScoringConfig
  showBreakdown?: boolean
  compact?: boolean
  className?: string
}

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

export default function LeadScoring({
  score,
  breakdown,
  config,
  showBreakdown = false,
  compact = false,
  className
}: LeadScoringProps) {
  // Determine qualification level based on score
  const qualificationLevel = useMemo((): QualificationLevel => {
    if (!config) {
      // Default thresholds if no config provided
      if (score >= 76) return 'sales_ready'
      if (score >= 51) return 'hot'
      if (score >= 26) return 'warm'
      return 'cold'
    }
    
    const threshold = config.thresholds
      .reverse()
      .find(t => score >= t.minScore)
    
    return threshold?.name || 'cold'
  }, [score, config])

  // Get next threshold for progression
  const nextThreshold = useMemo(() => {
    if (!config) return null
    
    const nextLevel = config.thresholds.find(t => score < t.minScore)
    if (!nextLevel) return null
    
    return {
      level: nextLevel.name,
      pointsNeeded: nextLevel.minScore - score
    }
  }, [score, config])

  // Visual indicators for different qualification levels
  const levelConfig = {
    cold: {
      color: 'text-gray-500 dark:text-gray-400',
      bgColor: 'bg-gray-100 dark:bg-gray-800',
      fillColor: 'bg-gray-400',
      icon: Info,
      label: 'Cold Lead'
    },
    warm: {
      color: 'text-yellow-600 dark:text-yellow-400',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      fillColor: 'bg-yellow-500',
      icon: TrendingUp,
      label: 'Warm Lead'
    },
    hot: {
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      fillColor: 'bg-orange-500',
      icon: Target,
      label: 'Hot Lead'
    },
    qualified: {
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      fillColor: 'bg-blue-500',
      icon: Star,
      label: 'Qualified Lead'
    },
    sales_ready: {
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      fillColor: 'bg-green-500',
      icon: Award,
      label: 'Sales Ready'
    }
  }

  const currentLevel = levelConfig[qualificationLevel]
  const Icon = currentLevel.icon

  if (compact) {
    return (
      <div className={cn('flex items-center gap-3 p-3 rounded-lg', currentLevel.bgColor, className)}>
        <div className="flex items-center gap-2">
          <Icon className={cn('h-4 w-4', currentLevel.color)} />
          <span className={cn('text-sm font-medium', currentLevel.color)}>
            Score: {score}/100
          </span>
        </div>
        <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className={cn('h-2 rounded-full transition-all duration-500', currentLevel.fillColor)}
            style={{ width: `${Math.min(score, 100)}%` }}
          />
        </div>
        <span className={cn('text-xs font-medium', currentLevel.color)}>
          {currentLevel.label}
        </span>
      </div>
    )
  }

  return (
    <div className={cn('bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6', className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={cn('p-2 rounded-lg', currentLevel.bgColor)}>
            <Icon className={cn('h-5 w-5', currentLevel.color)} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Lead Score
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {currentLevel.label}
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            {score}
            <span className="text-lg text-gray-500 dark:text-gray-400">/100</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-2">
          <span>Progress</span>
          <span>{score}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div 
            className={cn('h-3 rounded-full transition-all duration-700 ease-out', currentLevel.fillColor)}
            style={{ width: `${Math.min(score, 100)}%` }}
          />
        </div>
      </div>

      {/* Next Threshold */}
      {nextThreshold && (
        <div className={cn('p-3 rounded-lg mb-4', levelConfig[nextThreshold.level].bgColor)}>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Next Level: {levelConfig[nextThreshold.level].label}
            </span>
            <span className={cn('text-sm font-bold', levelConfig[nextThreshold.level].color)}>
              +{nextThreshold.pointsNeeded} points needed
            </span>
          </div>
        </div>
      )}

      {/* Breakdown */}
      {showBreakdown && breakdown && (
        <div className="space-y-4">
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Score Breakdown
            </h4>
            
            {Object.entries(breakdown.categories).map(([category, data]) => (
              <div key={category} className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium capitalize text-gray-700 dark:text-gray-300">
                    {category.replace('_', ' ')}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {data.score}/{data.maxScore}
                  </span>
                </div>
                
                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2 mb-2">
                  <div 
                    className="bg-primary-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(data.score / data.maxScore) * 100}%` }}
                  />
                </div>
                
                {/* Individual Rules */}
                <div className="space-y-1">
                  {data.rules
                    .filter(rule => rule.triggered)
                    .map(rule => (
                      <div key={rule.id} className="flex items-center justify-between text-xs">
                        <span className="text-gray-600 dark:text-gray-400">
                          {rule.description}
                        </span>
                        <span className="text-green-600 dark:text-green-400 font-medium">
                          +{rule.points}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Qualification Levels Reference */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
          Qualification Levels
        </h4>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {Object.entries(levelConfig).map(([level, config]) => (
            <div 
              key={level}
              className={cn(
                'flex items-center gap-2 p-2 rounded',
                qualificationLevel === level 
                  ? config.bgColor 
                  : 'bg-gray-50 dark:bg-gray-800/50'
              )}
            >
              <config.icon className={cn('h-3 w-3', qualificationLevel === level ? config.color : 'text-gray-400')} />
              <span className={cn(
                'font-medium',
                qualificationLevel === level 
                  ? config.color 
                  : 'text-gray-600 dark:text-gray-400'
              )}>
                {config.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Hook for calculating lead scores
export function useLeadScoring(config: LeadScoringConfig) {
  const calculateScore = (profile: Partial<LeadProfile>): number => {
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
          if (Array.isArray(value) && rule.condition.value != null) {
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
    
    return Math.min(Math.max(totalScore, 0), 100)
  }

  const calculateBreakdown = (profile: Partial<LeadProfile>): ScoreBreakdown => {
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
      
      // Evaluate rule (same logic as calculateScore)
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
        description: generateRuleDescription(rule),
        points,
        triggered
      })
      
      categories[rule.category].score += triggered ? points : 0
      categories[rule.category].maxScore += rule.maxPoints || rule.points
    })
    
    const totalScore = calculateScore(profile)
    const qualificationLevel = totalScore >= 76 ? 'sales_ready' :
                              totalScore >= 51 ? 'hot' :
                              totalScore >= 26 ? 'warm' : 'cold'
    
    const nextThreshold = config.thresholds.find(t => totalScore < t.minScore)
    
    return {
      total: totalScore,
      categories,
      qualification: qualificationLevel,
      nextThreshold: nextThreshold ? {
        level: nextThreshold.name,
        pointsNeeded: nextThreshold.minScore - totalScore
      } : undefined
    }
  }

  return {
    calculateScore,
    scoreBreakdown: calculateBreakdown
  }
}

// Helper function to generate human-readable rule descriptions
function generateRuleDescription(rule: any): string {
  const fieldLabels: Record<string, string> = {
    companySize: 'Company Size',
    decisionMakingRole: 'Decision Role',
    implementationTimeline: 'Timeline',
    aiMaturity: 'AI Maturity',
    budgetRange: 'Budget Range',
    jobRole: 'Job Role',
    industry: 'Industry'
  }
  
  const fieldLabel = fieldLabels[rule.field] || rule.field
  
  switch (rule.condition.operator) {
    case 'equals':
      return `${fieldLabel} is ${rule.condition.value}`
    case 'contains':
      return `${fieldLabel} includes ${rule.condition.value}`
    case 'greater_than':
      return `${fieldLabel} > ${rule.condition.value}`
    case 'exists':
      return `${fieldLabel} provided`
    default:
      return `${fieldLabel} criteria met`
  }
}