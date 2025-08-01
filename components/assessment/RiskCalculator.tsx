import { AssessmentResponse, RiskFactor, RiskAssessmentResult, RecommendedAction, ComplianceGap } from '@/lib/assessment-types'
import { assessmentQuestions } from '@/lib/assessment-questions'

export const RiskCalculator = {
  calculateRiskScore: (responses: AssessmentResponse[]): number => {
    let totalScore = 0
    let totalWeight = 0

    responses.forEach(response => {
      const question = assessmentQuestions.find(q => q.id === response.questionId)
      if (!question) return

      let questionScore = 0
      
      if (question.type === 'single') {
        const option = question.options?.find(opt => opt.value === response.value)
        questionScore = option?.riskScore || 0
      } else if (question.type === 'multiple') {
        const selectedValues = response.value as string[]
        let maxScore = 0
        let hasNegativeScores = false
        
        selectedValues.forEach(value => {
          const option = question.options?.find(opt => opt.value === value)
          if (option) {
            if (option.riskScore < 0) {
              hasNegativeScores = true
              questionScore += option.riskScore
            } else {
              maxScore = Math.max(maxScore, option.riskScore)
            }
          }
        })
        
        // If no negative scores (mitigations), use the highest risk
        if (!hasNegativeScores) {
          questionScore = maxScore
        } else {
          // Apply mitigations to the max risk
          questionScore = Math.max(0, maxScore + questionScore)
        }
      } else if (question.type === 'scale') {
        questionScore = (response.value as number) || 0
      }

      totalScore += questionScore * question.weight
      totalWeight += question.weight
    })

    // Normalize to 0-100 scale
    const normalizedScore = Math.round((totalScore / totalWeight) * 10)
    return Math.min(100, Math.max(0, normalizedScore))
  },

  generateDetailedReport: (responses: AssessmentResponse[], overallScore: number): RiskAssessmentResult => {
    const factors = RiskCalculator.analyzeRiskFactors(responses)
    const vulnerabilities = RiskCalculator.identifyTopVulnerabilities(responses)
    const actions = RiskCalculator.generateRecommendedActions(responses, factors)
    const complianceGaps = RiskCalculator.identifyComplianceGaps(responses)

    return {
      overallScore,
      riskLevel: RiskCalculator.getRiskLevel(overallScore),
      factors,
      topVulnerabilities: vulnerabilities,
      prioritizedActions: actions,
      complianceGaps,
      estimatedRemediationTime: RiskCalculator.estimateRemediationTime(actions),
      estimatedCost: RiskCalculator.estimateRemediationCost(actions)
    }
  },

  analyzeRiskFactors: (responses: AssessmentResponse[]): RiskFactor[] => {
    const categoryScores = new Map<string, { score: number; weight: number; findings: string[]; recommendations: string[] }>()

    responses.forEach(response => {
      const question = assessmentQuestions.find(q => q.id === response.questionId)
      if (!question) return

      if (!categoryScores.has(question.category)) {
        categoryScores.set(question.category, { score: 0, weight: 0, findings: [], recommendations: [] })
      }

      const category = categoryScores.get(question.category)!
      
      // Calculate score for this response
      let responseScore = 0
      const findings: string[] = []
      const recommendations: string[] = []

      if (question.type === 'single') {
        const option = question.options?.find(opt => opt.value === response.value)
        if (option) {
          responseScore = option.riskScore
          if (option.riskScore >= 7) {
            findings.push(`High risk: ${option.label}`)
            recommendations.push(RiskCalculator.getRecommendationForOption(question.id, option.value))
          }
        }
      } else if (question.type === 'multiple') {
        const selectedValues = response.value as string[]
        selectedValues.forEach(value => {
          const option = question.options?.find(opt => opt.value === value)
          if (option && option.riskScore >= 7) {
            findings.push(`Risk area: ${option.label}`)
            recommendations.push(RiskCalculator.getRecommendationForOption(question.id, option.value))
          }
        })
      }

      category.score += responseScore * question.weight
      category.weight += question.weight
      category.findings.push(...findings)
      category.recommendations.push(...recommendations)
    })

    return Array.from(categoryScores.entries()).map(([name, data]) => ({
      category: name,
      score: Math.round((data.score / data.weight) * 10),
      weight: data.weight,
      findings: Array.from(new Set(data.findings)), // Remove duplicates
      recommendations: Array.from(new Set(data.recommendations))
    }))
  },

  identifyTopVulnerabilities: (responses: AssessmentResponse[]): string[] => {
    const vulnerabilities: string[] = []

    responses.forEach(response => {
      const question = assessmentQuestions.find(q => q.id === response.questionId)
      if (!question) return

      // Check for high-risk responses
      if (question.id === 'security_policies' && response.value === 'none') {
        vulnerabilities.push('No AI-specific security policies in place')
      }
      if (question.id === 'security_testing' && (response.value === 'none' || response.value === 'occasional')) {
        vulnerabilities.push('Inadequate security testing for AI models')
      }
      if (question.id === 'monitoring' && (response.value as string[]).includes('none')) {
        vulnerabilities.push('No AI-specific monitoring implemented')
      }
      if (question.id === 'incident_response' && response.value === 'none') {
        vulnerabilities.push('No incident response plan for AI security')
      }
      if (question.id === 'data_sensitivity') {
        const sensitiveData = response.value as string[]
        if (sensitiveData.includes('financial') || sensitiveData.includes('health')) {
          vulnerabilities.push('Processing highly sensitive data without adequate controls')
        }
      }
      if (question.id === 'user_access' && response.value === 'public') {
        vulnerabilities.push('AI systems exposed to public internet access')
      }
    })

    return vulnerabilities.slice(0, 5) // Top 5 vulnerabilities
  },

  generateRecommendedActions: (responses: AssessmentResponse[], factors: RiskFactor[]): RecommendedAction[] => {
    const actions: RecommendedAction[] = []

    // Critical actions based on responses
    responses.forEach(response => {
      const question = assessmentQuestions.find(q => q.id === response.questionId)
      if (!question) return

      if (question.id === 'security_policies' && response.value === 'none') {
        actions.push({
          priority: 'critical',
          title: 'Develop AI Security Policy Framework',
          description: 'Create comprehensive AI-specific security policies covering model development, deployment, and monitoring',
          effort: 'medium',
          impact: 'high',
          timeframe: '1-2 months',
          resources: ['Security team', 'AI/ML team', 'Legal/Compliance', 'Policy templates']
        })
      }

      if (question.id === 'security_testing' && response.value === 'none') {
        actions.push({
          priority: 'critical',
          title: 'Implement AI Security Testing Program',
          description: 'Establish automated security testing for all AI models before deployment',
          effort: 'high',
          impact: 'high',
          timeframe: '2-3 months',
          resources: ['Security testing tools', 'AI security experts', 'Testing automation framework']
        })
      }

      if (question.id === 'monitoring' && (response.value as string[]).includes('none')) {
        actions.push({
          priority: 'high',
          title: 'Deploy AI-Specific Monitoring',
          description: 'Implement monitoring for adversarial inputs, model drift, and anomalous behavior',
          effort: 'medium',
          impact: 'high',
          timeframe: '1-2 months',
          resources: ['Monitoring tools', 'Security operations team', 'ML operations platform']
        })
      }
    })

    // Sort by priority
    const priorityOrder = { critical: 0, high: 1, medium: 2, low: 3 }
    return actions.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])
  },

  identifyComplianceGaps: (responses: AssessmentResponse[]): ComplianceGap[] => {
    const gaps: ComplianceGap[] = []
    const regulationsResponse = responses.find(r => r.questionId === 'regulations')
    
    if (regulationsResponse) {
      const regulations = regulationsResponse.value as string[]
      
      if (regulations.includes('gdpr')) {
        gaps.push({
          framework: 'GDPR',
          requirement: 'AI Transparency and Explainability',
          currentState: 'Limited documentation of AI decision-making',
          gap: 'Need explainable AI implementation',
          remediation: 'Implement model interpretability tools and documentation'
        })
      }
      
      if (regulations.includes('ai_act')) {
        gaps.push({
          framework: 'EU AI Act',
          requirement: 'High-Risk AI System Requirements',
          currentState: 'No formal risk categorization',
          gap: 'Missing risk assessment and categorization process',
          remediation: 'Conduct AI system risk assessment and implement required controls'
        })
      }
      
      if (regulations.includes('hipaa')) {
        gaps.push({
          framework: 'HIPAA',
          requirement: 'PHI Protection in AI Systems',
          currentState: 'Standard data protection measures',
          gap: 'Need AI-specific PHI safeguards',
          remediation: 'Implement differential privacy and secure multi-party computation'
        })
      }
    }

    return gaps
  },

  getRiskLevel: (score: number): 'minimal' | 'low' | 'medium' | 'high' | 'critical' => {
    if (score >= 80) return 'critical'
    if (score >= 60) return 'high'
    if (score >= 40) return 'medium'
    if (score >= 20) return 'low'
    return 'minimal'
  },

  getRecommendationForOption: (questionId: string, optionValue: string): string => {
    const recommendations: Record<string, Record<string, string>> = {
      security_policies: {
        none: 'Develop comprehensive AI security policies and procedures',
        basic: 'Enhance existing policies with AI-specific controls',
        developing: 'Accelerate policy development with industry frameworks'
      },
      security_testing: {
        none: 'Implement automated security testing in CI/CD pipeline',
        occasional: 'Increase testing frequency to at least monthly',
        regular: 'Move to continuous automated testing'
      },
      monitoring: {
        none: 'Deploy AI-specific monitoring and alerting systems'
      },
      data_sensitivity: {
        financial: 'Implement PCI DSS controls for AI systems',
        health: 'Ensure HIPAA compliance for AI processing PHI',
        pii: 'Apply privacy-preserving techniques like differential privacy'
      }
    }

    return recommendations[questionId]?.[optionValue] || 'Review and enhance current practices'
  },

  estimateRemediationTime: (actions: RecommendedAction[]): string => {
    const totalMonths = actions.reduce((sum, action) => {
      const match = action.timeframe.match(/(\d+)-(\d+)\s+months?/)
      if (match) {
        return sum + parseInt(match[2])
      }
      return sum
    }, 0)

    if (totalMonths <= 6) return '3-6 months'
    if (totalMonths <= 12) return '6-12 months'
    return '12-18 months'
  },

  estimateRemediationCost: (actions: RecommendedAction[]): { min: number; max: number } => {
    const costPerAction = {
      critical: { min: 50000, max: 150000 },
      high: { min: 25000, max: 75000 },
      medium: { min: 10000, max: 30000 },
      low: { min: 5000, max: 15000 }
    }

    let minTotal = 0
    let maxTotal = 0

    actions.forEach(action => {
      const cost = costPerAction[action.priority]
      minTotal += cost.min
      maxTotal += cost.max
    })

    return { min: minTotal, max: maxTotal }
  }
}