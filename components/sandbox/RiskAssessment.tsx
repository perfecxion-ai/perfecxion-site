'use client'

import { useState } from 'react'
import { ChevronRight, ChevronLeft, AlertTriangle, Shield, CheckCircle, Download, Mail } from 'lucide-react'

interface Question {
  id: string
  category: string
  text: string
  type: 'single' | 'multiple' | 'scale'
  options?: { value: string; label: string; riskScore: number }[]
  scaleMin?: number
  scaleMax?: number
  riskWeight: number
}

interface AssessmentResponse {
  questionId: string
  value: string | string[] | number
}

const ASSESSMENT_QUESTIONS: Question[] = [
  // AI Usage Profile
  {
    id: 'ai_models',
    category: 'AI/ML Usage Profile',
    text: 'What types of AI models does your organization currently deploy?',
    type: 'multiple',
    options: [
      { value: 'llm', label: 'Large Language Models (ChatGPT, Claude, etc.)', riskScore: 8 },
      { value: 'cv', label: 'Computer Vision/Image Recognition', riskScore: 7 },
      { value: 'nlp', label: 'Natural Language Processing', riskScore: 6 },
      { value: 'ml', label: 'Traditional Machine Learning', riskScore: 5 },
      { value: 'deep', label: 'Deep Learning Models', riskScore: 7 },
      { value: 'generative', label: 'Generative AI (DALL-E, Stable Diffusion)', riskScore: 9 }
    ],
    riskWeight: 0.15
  },
  {
    id: 'data_sensitivity',
    category: 'AI/ML Usage Profile',
    text: 'What types of sensitive data do your AI systems process?',
    type: 'multiple',
    options: [
      { value: 'pii', label: 'Personal Identifiable Information (PII)', riskScore: 9 },
      { value: 'financial', label: 'Financial Data', riskScore: 10 },
      { value: 'health', label: 'Health/Medical Records', riskScore: 10 },
      { value: 'proprietary', label: 'Proprietary Business Data', riskScore: 8 },
      { value: 'public', label: 'Only Public Data', riskScore: 2 }
    ],
    riskWeight: 0.20
  },
  {
    id: 'deployment_scale',
    category: 'AI/ML Usage Profile',
    text: 'What is the scale of your AI deployment?',
    type: 'scale',
    scaleMin: 1,
    scaleMax: 5,
    riskWeight: 0.10
  },
  {
    id: 'user_facing',
    category: 'AI/ML Usage Profile',
    text: 'Are your AI systems directly accessible by external users?',
    type: 'single',
    options: [
      { value: 'yes_public', label: 'Yes, publicly accessible', riskScore: 10 },
      { value: 'yes_auth', label: 'Yes, with authentication', riskScore: 7 },
      { value: 'internal', label: 'Internal use only', riskScore: 4 },
      { value: 'no', label: 'No direct access', riskScore: 1 }
    ],
    riskWeight: 0.15
  },
  // Security Controls
  {
    id: 'security_policies',
    category: 'Current Security Measures',
    text: 'Do you have AI-specific security policies in place?',
    type: 'single',
    options: [
      { value: 'comprehensive', label: 'Yes, comprehensive policies', riskScore: 2 },
      { value: 'basic', label: 'Basic policies only', riskScore: 6 },
      { value: 'developing', label: 'Currently developing', riskScore: 8 },
      { value: 'none', label: 'No AI-specific policies', riskScore: 10 }
    ],
    riskWeight: 0.10
  },
  {
    id: 'security_testing',
    category: 'Current Security Measures',
    text: 'How do you currently test AI model security?',
    type: 'single',
    options: [
      { value: 'continuous', label: 'Continuous automated testing', riskScore: 2 },
      { value: 'regular', label: 'Regular manual testing', riskScore: 5 },
      { value: 'occasional', label: 'Occasional testing', riskScore: 8 },
      { value: 'none', label: 'No security testing', riskScore: 10 }
    ],
    riskWeight: 0.10
  },
  {
    id: 'incident_response',
    category: 'Current Security Measures',
    text: 'Do you have an AI incident response plan?',
    type: 'single',
    options: [
      { value: 'yes_tested', label: 'Yes, regularly tested', riskScore: 1 },
      { value: 'yes_untested', label: 'Yes, but not tested', riskScore: 5 },
      { value: 'general', label: 'General security plan only', riskScore: 8 },
      { value: 'none', label: 'No incident response plan', riskScore: 10 }
    ],
    riskWeight: 0.10
  },
  // Compliance
  {
    id: 'regulations',
    category: 'Regulatory Requirements',
    text: 'Which regulations apply to your AI systems?',
    type: 'multiple',
    options: [
      { value: 'gdpr', label: 'GDPR', riskScore: 8 },
      { value: 'ccpa', label: 'CCPA/CPRA', riskScore: 7 },
      { value: 'hipaa', label: 'HIPAA', riskScore: 9 },
      { value: 'ai_act', label: 'EU AI Act', riskScore: 9 },
      { value: 'sox', label: 'SOX', riskScore: 8 },
      { value: 'none', label: 'None/Unsure', riskScore: 5 }
    ],
    riskWeight: 0.10
  }
]

const RISK_LEVELS = {
  low: { min: 0, max: 30, color: 'green', label: 'Low Risk' },
  medium: { min: 31, max: 60, color: 'yellow', label: 'Medium Risk' },
  high: { min: 61, max: 80, color: 'orange', label: 'High Risk' },
  critical: { min: 81, max: 100, color: 'red', label: 'Critical Risk' }
}

export default function RiskAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [responses, setResponses] = useState<AssessmentResponse[]>([])
  const [showResults, setShowResults] = useState(false)
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', company: '' })
  const [showContactForm, setShowContactForm] = useState(false)

  const handleResponse = (value: string | string[] | number) => {
    const newResponse: AssessmentResponse = {
      questionId: ASSESSMENT_QUESTIONS[currentQuestion].id,
      value
    }

    setResponses(prev => [
      ...prev.filter(r => r.questionId !== newResponse.questionId),
      newResponse
    ])

    if (currentQuestion < ASSESSMENT_QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      calculateRiskScore()
    }
  }

  const calculateRiskScore = () => {
    let totalScore = 0
    let maxPossibleScore = 0

    ASSESSMENT_QUESTIONS.forEach(question => {
      const response = responses.find(r => r.questionId === question.id)
      if (!response) return

      let questionScore = 0
      maxPossibleScore += 10 * question.riskWeight

      if (question.type === 'single') {
        const selectedOption = question.options?.find(opt => opt.value === response.value)
        questionScore = (selectedOption?.riskScore || 0) * question.riskWeight
      } else if (question.type === 'multiple') {
        const values = response.value as string[]
        const scores = values.map(v => 
          question.options?.find(opt => opt.value === v)?.riskScore || 0
        )
        questionScore = Math.max(...scores) * question.riskWeight
      } else if (question.type === 'scale') {
        questionScore = ((response.value as number) * 2) * question.riskWeight
      }

      totalScore += questionScore
    })

    const normalizedScore = (totalScore / maxPossibleScore) * 100
    setShowResults(true)
  }

  const getRiskLevel = (score: number) => {
    for (const [level, config] of Object.entries(RISK_LEVELS)) {
      if (score >= config.min && score <= config.max) {
        return { level, ...config }
      }
    }
    return { level: 'unknown', ...RISK_LEVELS.medium }
  }

  const calculateFinalScore = () => {
    let totalScore = 0
    let maxPossibleScore = 0

    ASSESSMENT_QUESTIONS.forEach(question => {
      const response = responses.find(r => r.questionId === question.id)
      if (!response) return

      let questionScore = 0
      maxPossibleScore += 10 * question.riskWeight

      if (question.type === 'single') {
        const selectedOption = question.options?.find(opt => opt.value === response.value)
        questionScore = (selectedOption?.riskScore || 0) * question.riskWeight
      } else if (question.type === 'multiple') {
        const values = response.value as string[]
        const scores = values.map(v => 
          question.options?.find(opt => opt.value === v)?.riskScore || 0
        )
        questionScore = Math.max(...scores) * question.riskWeight
      } else if (question.type === 'scale') {
        questionScore = ((response.value as number) * 2) * question.riskWeight
      }

      totalScore += questionScore
    })

    return Math.round((totalScore / maxPossibleScore) * 100)
  }

  const generateReport = () => {
    const score = calculateFinalScore()
    const riskLevel = getRiskLevel(score)
    
    const recommendations = []
    
    // Generate recommendations based on responses
    responses.forEach(response => {
      const question = ASSESSMENT_QUESTIONS.find(q => q.id === response.questionId)
      if (!question) return

      if (question.id === 'security_policies' && response.value === 'none') {
        recommendations.push('Develop comprehensive AI-specific security policies')
      }
      if (question.id === 'security_testing' && (response.value === 'none' || response.value === 'occasional')) {
        recommendations.push('Implement regular automated security testing for AI models')
      }
      if (question.id === 'incident_response' && response.value === 'none') {
        recommendations.push('Create and test an AI-specific incident response plan')
      }
    })

    return {
      score,
      riskLevel,
      recommendations
    }
  }

  const currentQ = ASSESSMENT_QUESTIONS[currentQuestion]
  const progress = ((currentQuestion + 1) / ASSESSMENT_QUESTIONS.length) * 100

  if (showResults) {
    const report = generateReport()
    const riskColor = report.riskLevel.color

    return (
      <div className="space-y-6">
        {/* Risk Score */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Your AI Security Risk Assessment
          </h2>
          
          <div className="relative w-48 h-48 mx-auto mb-6">
            <svg className="w-48 h-48 transform -rotate-90">
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="12"
                fill="none"
                className="text-gray-200 dark:text-gray-700"
              />
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="12"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 88}`}
                strokeDashoffset={`${2 * Math.PI * 88 * (1 - report.score / 100)}`}
                className={`
                  transition-all duration-1000
                  ${riskColor === 'green' ? 'text-green-500' : ''}
                  ${riskColor === 'yellow' ? 'text-yellow-500' : ''}
                  ${riskColor === 'orange' ? 'text-orange-500' : ''}
                  ${riskColor === 'red' ? 'text-red-500' : ''}
                `}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white">
                  {report.score}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Risk Score
                </div>
              </div>
            </div>
          </div>

          <div className={`
            inline-flex items-center gap-2 px-4 py-2 rounded-full text-white font-medium
            ${riskColor === 'green' ? 'bg-green-500' : ''}
            ${riskColor === 'yellow' ? 'bg-yellow-500' : ''}
            ${riskColor === 'orange' ? 'bg-orange-500' : ''}
            ${riskColor === 'red' ? 'bg-red-500' : ''}
          `}>
            {riskColor === 'green' && <CheckCircle className="w-5 h-5" />}
            {riskColor !== 'green' && <AlertTriangle className="w-5 h-5" />}
            {report.riskLevel.label}
          </div>
        </div>

        {/* Key Findings */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Key Findings
          </h3>
          <div className="space-y-3">
            {report.score > 70 && (
              <div className="flex gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-red-800 dark:text-red-200">
                    Critical Security Gaps Identified
                  </p>
                  <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                    Your AI systems face significant security risks that require immediate attention.
                  </p>
                </div>
              </div>
            )}
            {report.score > 30 && report.score <= 70 && (
              <div className="flex gap-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-yellow-800 dark:text-yellow-200">
                    Moderate Security Risks Detected
                  </p>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                    Several areas need improvement to ensure robust AI security.
                  </p>
                </div>
              </div>
            )}
            {report.score <= 30 && (
              <div className="flex gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-green-800 dark:text-green-200">
                    Good Security Posture
                  </p>
                  <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                    Your AI security measures are relatively strong, but continuous improvement is recommended.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recommended Actions
          </h3>
          <div className="space-y-3">
            {report.recommendations.map((rec, index) => (
              <div key={index} className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {index + 1}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{rec}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Get Report */}
        {!showContactForm ? (
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Get Your Detailed Report
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Receive a comprehensive analysis with personalized recommendations
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setShowContactForm(true)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email Report
              </button>
              <button
                onClick={() => window.print()}
                className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Get Your Detailed Report
            </h3>
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault()
              // Handle form submission
              alert('Report sent! Check your email.')
              setShowContactForm(false)
            }}>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  required
                  value={contactInfo.company}
                  onChange={(e) => setContactInfo(prev => ({ ...prev, company: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Report
              </button>
            </form>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Question {currentQuestion + 1} of {ASSESSMENT_QUESTIONS.length}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
        <div className="mb-2">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {currentQ.category}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
          {currentQ.text}
        </h3>

        {/* Single Choice */}
        {currentQ.type === 'single' && currentQ.options && (
          <div className="space-y-3">
            {currentQ.options.map(option => (
              <button
                key={option.value}
                onClick={() => handleResponse(option.value)}
                className="w-full text-left p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}

        {/* Multiple Choice */}
        {currentQ.type === 'multiple' && currentQ.options && (
          <div className="space-y-3">
            {currentQ.options.map(option => {
              const currentResponse = responses.find(r => r.questionId === currentQ.id)
              const isSelected = currentResponse?.value && 
                (currentResponse.value as string[]).includes(option.value)
              
              return (
                <label
                  key={option.value}
                  className="flex items-start gap-3 p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={isSelected || false}
                    onChange={(e) => {
                      const current = (currentResponse?.value as string[]) || []
                      const updated = e.target.checked
                        ? [...current, option.value]
                        : current.filter(v => v !== option.value)
                      
                      setResponses(prev => [
                        ...prev.filter(r => r.questionId !== currentQ.id),
                        { questionId: currentQ.id, value: updated }
                      ])
                    }}
                    className="mt-1"
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    {option.label}
                  </span>
                </label>
              )
            })}
            <button
              onClick={() => {
                const currentResponse = responses.find(r => r.questionId === currentQ.id)
                if (currentResponse?.value && (currentResponse.value as string[]).length > 0) {
                  handleResponse(currentResponse.value)
                }
              }}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Continue
            </button>
          </div>
        )}

        {/* Scale */}
        {currentQ.type === 'scale' && (
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>Low ({currentQ.scaleMin})</span>
              <span>High ({currentQ.scaleMax})</span>
            </div>
            <input
              type="range"
              min={currentQ.scaleMin}
              max={currentQ.scaleMax}
              defaultValue={currentQ.scaleMin}
              onChange={(e) => {
                setResponses(prev => [
                  ...prev.filter(r => r.questionId !== currentQ.id),
                  { questionId: currentQ.id, value: parseInt(e.target.value) }
                ])
              }}
              className="w-full"
            />
            <button
              onClick={() => {
                const currentResponse = responses.find(r => r.questionId === currentQ.id)
                handleResponse(currentResponse?.value || currentQ.scaleMin || 1)
              }}
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Continue
            </button>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
          disabled={currentQuestion === 0}
          className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>
        
        {currentQuestion === ASSESSMENT_QUESTIONS.length - 1 && (
          <button
            onClick={calculateRiskScore}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Complete Assessment
            <Shield className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  )
}