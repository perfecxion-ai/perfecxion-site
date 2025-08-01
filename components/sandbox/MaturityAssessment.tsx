'use client'

import { useState } from 'react'
import { TrendingUp, CheckCircle, AlertCircle, Shield, Download, ChevronRight } from 'lucide-react'

interface MaturityLevel {
  level: number
  name: string
  color: string
  description: string
}

interface MaturityCategory {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  criteria: {
    id: string
    text: string
    level: number
  }[]
}

const MATURITY_LEVELS: MaturityLevel[] = [
  {
    level: 1,
    name: 'Initial',
    color: 'red',
    description: 'Ad-hoc processes, reactive approach to AI security'
  },
  {
    level: 2,
    name: 'Developing',
    color: 'orange',
    description: 'Basic policies in place, some proactive measures'
  },
  {
    level: 3,
    name: 'Defined',
    color: 'yellow',
    description: 'Standardized processes, regular security assessments'
  },
  {
    level: 4,
    name: 'Managed',
    color: 'blue',
    description: 'Metrics-driven approach, continuous monitoring'
  },
  {
    level: 5,
    name: 'Optimized',
    color: 'green',
    description: 'Industry-leading practices, continuous improvement'
  }
]

const MATURITY_CATEGORIES: MaturityCategory[] = [
  {
    id: 'governance',
    name: 'AI Governance',
    description: 'Policies, procedures, and oversight for AI systems',
    icon: <Shield className="w-5 h-5" />,
    criteria: [
      { id: 'g1', text: 'No formal AI governance structure', level: 1 },
      { id: 'g2', text: 'Basic AI usage policies exist', level: 2 },
      { id: 'g3', text: 'Comprehensive AI governance framework', level: 3 },
      { id: 'g4', text: 'AI risk committee and regular reviews', level: 4 },
      { id: 'g5', text: 'Board-level AI oversight with KPIs', level: 5 }
    ]
  },
  {
    id: 'security_controls',
    name: 'Security Controls',
    description: 'Technical security measures for AI systems',
    icon: <Shield className="w-5 h-5" />,
    criteria: [
      { id: 's1', text: 'Minimal or no AI-specific security controls', level: 1 },
      { id: 's2', text: 'Basic access controls and monitoring', level: 2 },
      { id: 's3', text: 'Comprehensive security testing for AI models', level: 3 },
      { id: 's4', text: 'Automated threat detection and response', level: 4 },
      { id: 's5', text: 'Advanced AI security operations center', level: 5 }
    ]
  },
  {
    id: 'data_protection',
    name: 'Data Protection',
    description: 'Safeguarding training data and model outputs',
    icon: <Shield className="w-5 h-5" />,
    criteria: [
      { id: 'd1', text: 'No specific data protection for AI', level: 1 },
      { id: 'd2', text: 'Basic data classification and handling', level: 2 },
      { id: 'd3', text: 'Encrypted data pipelines and storage', level: 3 },
      { id: 'd4', text: 'Privacy-preserving ML techniques', level: 4 },
      { id: 'd5', text: 'Federated learning and differential privacy', level: 5 }
    ]
  },
  {
    id: 'model_lifecycle',
    name: 'Model Lifecycle',
    description: 'Managing AI models from development to retirement',
    icon: <TrendingUp className="w-5 h-5" />,
    criteria: [
      { id: 'm1', text: 'No formal model management process', level: 1 },
      { id: 'm2', text: 'Basic version control for models', level: 2 },
      { id: 'm3', text: 'Model registry and deployment pipeline', level: 3 },
      { id: 'm4', text: 'Continuous model monitoring and updates', level: 4 },
      { id: 'm5', text: 'MLOps with automated governance', level: 5 }
    ]
  },
  {
    id: 'compliance',
    name: 'Compliance & Ethics',
    description: 'Regulatory compliance and ethical AI practices',
    icon: <CheckCircle className="w-5 h-5" />,
    criteria: [
      { id: 'c1', text: 'Limited awareness of AI regulations', level: 1 },
      { id: 'c2', text: 'Basic compliance with key regulations', level: 2 },
      { id: 'c3', text: 'Comprehensive compliance program', level: 3 },
      { id: 'c4', text: 'Proactive regulatory engagement', level: 4 },
      { id: 'c5', text: 'Industry leadership in AI ethics', level: 5 }
    ]
  },
  {
    id: 'incident_response',
    name: 'Incident Response',
    description: 'Handling AI security incidents and breaches',
    icon: <AlertCircle className="w-5 h-5" />,
    criteria: [
      { id: 'i1', text: 'No AI-specific incident response plan', level: 1 },
      { id: 'i2', text: 'Basic incident response procedures', level: 2 },
      { id: 'i3', text: 'Dedicated AI incident response team', level: 3 },
      { id: 'i4', text: 'Automated incident detection and response', level: 4 },
      { id: 'i5', text: 'AI-powered threat hunting and response', level: 5 }
    ]
  }
]

export default function MaturityAssessment() {
  const [selectedCriteria, setSelectedCriteria] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const handleCriteriaSelect = (categoryId: string, criteriaId: string) => {
    setSelectedCriteria(prev => ({
      ...prev,
      [categoryId]: criteriaId
    }))
  }

  const calculateMaturityScores = () => {
    const categoryScores: Record<string, number> = {}
    
    MATURITY_CATEGORIES.forEach(category => {
      const selectedCriterion = selectedCriteria[category.id]
      if (selectedCriterion) {
        const criterion = category.criteria.find(c => c.id === selectedCriterion)
        if (criterion) {
          categoryScores[category.id] = criterion.level
        }
      }
    })

    const overallScore = Object.values(categoryScores).length > 0
      ? Object.values(categoryScores).reduce((a, b) => a + b, 0) / Object.values(categoryScores).length
      : 0

    return { categoryScores, overallScore }
  }

  const getMaturityLevel = (score: number): MaturityLevel => {
    return MATURITY_LEVELS.find(level => level.level === Math.round(score)) || MATURITY_LEVELS[0]
  }

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'red':
        return {
          bg: 'bg-red-100 dark:bg-red-900/20',
          border: 'border-red-500',
          text: 'text-red-700 dark:text-red-300',
          fill: 'bg-red-500'
        }
      case 'orange':
        return {
          bg: 'bg-orange-100 dark:bg-orange-900/20',
          border: 'border-orange-500',
          text: 'text-orange-700 dark:text-orange-300',
          fill: 'bg-orange-500'
        }
      case 'yellow':
        return {
          bg: 'bg-yellow-100 dark:bg-yellow-900/20',
          border: 'border-yellow-500',
          text: 'text-yellow-700 dark:text-yellow-300',
          fill: 'bg-yellow-500'
        }
      case 'blue':
        return {
          bg: 'bg-blue-100 dark:bg-blue-900/20',
          border: 'border-blue-500',
          text: 'text-blue-700 dark:text-blue-300',
          fill: 'bg-blue-500'
        }
      case 'green':
        return {
          bg: 'bg-green-100 dark:bg-green-900/20',
          border: 'border-green-500',
          text: 'text-green-700 dark:text-green-300',
          fill: 'bg-green-500'
        }
      default:
        return {
          bg: 'bg-gray-100 dark:bg-gray-900/20',
          border: 'border-gray-500',
          text: 'text-gray-700 dark:text-gray-300',
          fill: 'bg-gray-500'
        }
    }
  }

  const generateRoadmap = (categoryScores: Record<string, number>) => {
    const roadmap: { category: string; current: number; target: number; actions: string[] }[] = []
    
    MATURITY_CATEGORIES.forEach(category => {
      const currentLevel = categoryScores[category.id] || 1
      const targetLevel = Math.min(currentLevel + 1, 5)
      
      const actions = []
      if (currentLevel < 5) {
        const nextCriterion = category.criteria.find(c => c.level === targetLevel)
        if (nextCriterion) {
          actions.push(`Achieve: ${nextCriterion.text}`)
        }
        
        // Add specific recommendations based on category and level
        if (category.id === 'governance' && currentLevel < 3) {
          actions.push('Establish AI ethics committee')
          actions.push('Create AI risk assessment framework')
        }
        if (category.id === 'security_controls' && currentLevel < 3) {
          actions.push('Implement automated security testing')
          actions.push('Deploy AI-specific monitoring tools')
        }
      }
      
      roadmap.push({
        category: category.name,
        current: currentLevel,
        target: targetLevel,
        actions
      })
    })
    
    return roadmap
  }

  const allCategoriesCompleted = MATURITY_CATEGORIES.every(
    category => selectedCriteria[category.id] !== undefined
  )

  if (showResults) {
    const { categoryScores, overallScore } = calculateMaturityScores()
    const overallLevel = getMaturityLevel(overallScore)
    const roadmap = generateRoadmap(categoryScores)

    return (
      <div className="space-y-6">
        {/* Overall Maturity Score */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            AI Security Maturity Assessment Results
          </h2>
          
          <div className="mb-8">
            <div className="text-6xl font-bold text-gray-900 dark:text-white mb-2">
              {overallScore.toFixed(1)}
            </div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${getColorClasses(overallLevel.color).bg} ${getColorClasses(overallLevel.color).text}`}>
              <TrendingUp className="w-5 h-5" />
              {overallLevel.name} Maturity
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {overallLevel.description}
            </p>
          </div>

          {/* Category Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {MATURITY_CATEGORIES.map(category => {
              const score = categoryScores[category.id] || 1
              const level = getMaturityLevel(score)
              const colors = getColorClasses(level.color)
              
              return (
                <div key={category.id} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {category.name}
                    </h4>
                    <span className={`text-2xl font-bold ${colors.text}`}>
                      {score}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${colors.fill}`}
                      style={{ width: `${(score / 5) * 100}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Maturity Roadmap */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Your Maturity Roadmap
          </h3>
          <div className="space-y-4">
            {roadmap.map((item, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {item.category}
                  </h4>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">Level</span>
                    <span className="font-bold text-gray-900 dark:text-white">
                      {item.current}
                    </span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="font-bold text-blue-600 dark:text-blue-400">
                      {item.target}
                    </span>
                  </div>
                </div>
                {item.actions.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Next Steps:
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {item.actions.map((action, actionIndex) => (
                        <li key={actionIndex}>{action}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Benchmark Comparison */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
            Industry Benchmark Comparison
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-blue-800 dark:text-blue-200">Your Score</span>
              <span className="font-bold text-blue-900 dark:text-blue-100">
                {overallScore.toFixed(1)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-blue-800 dark:text-blue-200">Industry Average</span>
              <span className="font-bold text-blue-900 dark:text-blue-100">2.8</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-blue-800 dark:text-blue-200">Top Performers</span>
              <span className="font-bold text-blue-900 dark:text-blue-100">4.2</span>
            </div>
          </div>
          <p className="text-sm text-blue-700 dark:text-blue-300 mt-4">
            {overallScore > 2.8
              ? "You're above the industry average! Continue improving to join the top performers."
              : "There's room for improvement. Focus on the roadmap recommendations to enhance your AI security maturity."}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Report
          </button>
          <button
            onClick={() => {
              setShowResults(false)
              setSelectedCriteria({})
              setExpandedCategory(null)
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start New Assessment
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          AI Security Maturity Assessment
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Evaluate your organization's AI security program against industry best practices. 
          This assessment covers six key areas of AI security maturity.
        </p>
        <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
          <Shield className="w-4 h-4" />
          <span>Takes approximately 5 minutes to complete</span>
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-4">
        {MATURITY_CATEGORIES.map((category) => {
          const isExpanded = expandedCategory === category.id
          const isCompleted = selectedCriteria[category.id] !== undefined
          
          return (
            <div
              key={category.id}
              className={`
                bg-white dark:bg-gray-800 rounded-lg border-2 transition-all
                ${isCompleted ? 'border-green-500' : 'border-gray-200 dark:border-gray-700'}
              `}
            >
              <button
                onClick={() => setExpandedCategory(isExpanded ? null : category.id)}
                className="w-full p-6 text-left"
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className={`mt-1 ${isCompleted ? 'text-green-500' : 'text-gray-400'}`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {isCompleted && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                    <ChevronRight
                      className={`
                        w-5 h-5 text-gray-400 transition-transform
                        ${isExpanded ? 'rotate-90' : ''}
                      `}
                    />
                  </div>
                </div>
              </button>

              {isExpanded && (
                <div className="border-t border-gray-200 dark:border-gray-700 p-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Select the statement that best describes your current state:
                  </p>
                  <div className="space-y-3">
                    {category.criteria.map((criterion) => {
                      const isSelected = selectedCriteria[category.id] === criterion.id
                      const level = getMaturityLevel(criterion.level)
                      
                      return (
                        <label
                          key={criterion.id}
                          className={`
                            flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all
                            ${isSelected
                              ? `${getColorClasses(level.color).border} ${getColorClasses(level.color).bg}`
                              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                            }
                          `}
                        >
                          <input
                            type="radio"
                            name={category.id}
                            value={criterion.id}
                            checked={isSelected}
                            onChange={() => handleCriteriaSelect(category.id, criterion.id)}
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`
                                text-sm font-medium
                                ${isSelected ? getColorClasses(level.color).text : 'text-gray-700 dark:text-gray-300'}
                              `}>
                                Level {criterion.level} - {level.name}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {criterion.text}
                            </p>
                          </div>
                        </label>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          onClick={() => setShowResults(true)}
          disabled={!allCategoriesCompleted}
          className={`
            px-6 py-3 rounded-lg font-medium transition-all
            ${allCategoriesCompleted
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
            }
          `}
        >
          View Assessment Results
        </button>
        {!allCategoriesCompleted && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Please complete all categories to view results
          </p>
        )}
      </div>
    </div>
  )
}