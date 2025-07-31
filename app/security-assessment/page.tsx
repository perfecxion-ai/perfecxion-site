'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/container'
import { SectionHeader } from '@/components/ui/section-header'
import { Button } from '@/components/ui/button'
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react'

interface Question {
  id: string
  question: string
  category: string
  answers: {
    text: string
    score: number
    risk: 'low' | 'medium' | 'high' | 'critical'
  }[]
}

export default function SecurityAssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [showResults, setShowResults] = useState(false)

  const questions: Question[] = [
    {
      id: 'models',
      question: 'How many AI/ML models does your organization currently have in production?',
      category: 'Scale',
      answers: [
        { text: 'None yet', score: 0, risk: 'low' },
        { text: '1-10 models', score: 1, risk: 'medium' },
        { text: '11-50 models', score: 2, risk: 'high' },
        { text: '50+ models', score: 3, risk: 'critical' }
      ]
    },
    {
      id: 'security',
      question: 'Do you currently have dedicated AI security measures in place?',
      category: 'Security Posture',
      answers: [
        { text: 'Yes, comprehensive AI security program', score: 0, risk: 'low' },
        { text: 'Some basic security measures', score: 2, risk: 'medium' },
        { text: 'Using general cybersecurity tools', score: 3, risk: 'high' },
        { text: 'No specific AI security measures', score: 4, risk: 'critical' }
      ]
    },
    {
      id: 'incidents',
      question: 'Have you experienced any AI-related security incidents in the past year?',
      category: 'Incident History',
      answers: [
        { text: 'No incidents', score: 0, risk: 'low' },
        { text: '1-2 minor incidents', score: 2, risk: 'medium' },
        { text: '3-5 incidents', score: 3, risk: 'high' },
        { text: 'More than 5 or major breach', score: 4, risk: 'critical' }
      ]
    },
    {
      id: 'data',
      question: 'What type of data do your AI models process?',
      category: 'Data Sensitivity',
      answers: [
        { text: 'Public or non-sensitive data', score: 1, risk: 'low' },
        { text: 'Internal business data', score: 2, risk: 'medium' },
        { text: 'Customer personal data', score: 3, risk: 'high' },
        { text: 'Highly sensitive (financial, health, etc.)', score: 4, risk: 'critical' }
      ]
    },
    {
      id: 'compliance',
      question: 'Are you subject to AI-specific regulations or compliance requirements?',
      category: 'Compliance',
      answers: [
        { text: 'No specific requirements', score: 1, risk: 'low' },
        { text: 'Industry best practices only', score: 2, risk: 'medium' },
        { text: 'Some regulatory requirements', score: 3, risk: 'high' },
        { text: 'Strict regulatory compliance (GDPR, HIPAA, etc.)', score: 4, risk: 'critical' }
      ]
    },
    {
      id: 'supply_chain',
      question: 'How do you manage third-party AI models and dependencies?',
      category: 'Supply Chain',
      answers: [
        { text: 'Comprehensive vetting and monitoring', score: 0, risk: 'low' },
        { text: 'Basic security reviews', score: 2, risk: 'medium' },
        { text: 'Limited oversight', score: 3, risk: 'high' },
        { text: 'No formal process', score: 4, risk: 'critical' }
      ]
    },
    {
      id: 'monitoring',
      question: 'How do you monitor AI models in production?',
      category: 'Monitoring',
      answers: [
        { text: '24/7 automated monitoring with alerts', score: 0, risk: 'low' },
        { text: 'Regular manual reviews', score: 2, risk: 'medium' },
        { text: 'Occasional checks', score: 3, risk: 'high' },
        { text: 'No systematic monitoring', score: 4, risk: 'critical' }
      ]
    },
    {
      id: 'team',
      question: 'Does your team have AI security expertise?',
      category: 'Expertise',
      answers: [
        { text: 'Dedicated AI security team', score: 0, risk: 'low' },
        { text: 'Security team with AI knowledge', score: 2, risk: 'medium' },
        { text: 'General IT security only', score: 3, risk: 'high' },
        { text: 'No dedicated security resources', score: 4, risk: 'critical' }
      ]
    }
  ]

  const handleAnswer = (score: number, risk: string) => {
    const questionId = questions[currentQuestion].id
    setAnswers(prev => ({ ...prev, [questionId]: score }))
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const calculateResults = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0)
    const maxScore = questions.length * 4
    const percentage = (totalScore / maxScore) * 100

    let riskLevel: string
    let riskColor: string
    let recommendations: string[]

    if (percentage < 25) {
      riskLevel = 'Low Risk'
      riskColor = 'text-green-600'
      recommendations = [
        'Maintain current security practices',
        'Consider AI Sentinel for proactive monitoring',
        'Implement regular security audits'
      ]
    } else if (percentage < 50) {
      riskLevel = 'Medium Risk'
      riskColor = 'text-yellow-600'
      recommendations = [
        'Implement Model Guard for vulnerability scanning',
        'Establish AI security policies',
        'Train team on AI security best practices',
        'Consider ComplianceAI for regulatory requirements'
      ]
    } else if (percentage < 75) {
      riskLevel = 'High Risk'
      riskColor = 'text-orange-600'
      recommendations = [
        'Urgently deploy AI Sentinel for threat detection',
        'Implement SecurePipe for pipeline security',
        'Conduct comprehensive security audit',
        'Establish 24/7 monitoring',
        'Consider DataShield for data protection'
      ]
    } else {
      riskLevel = 'Critical Risk'
      riskColor = 'text-red-600'
      recommendations = [
        'Immediate deployment of full security suite required',
        'Engage professional services for rapid implementation',
        'Implement ResponseOrchestrator for incident management',
        'Conduct emergency security assessment',
        'Consider temporary model suspension for critical systems'
      ]
    }

    return { totalScore, percentage, riskLevel, riskColor, recommendations }
  }

  const results = showResults ? calculateResults() : null

  const resetAssessment = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

  return (
    <div className="bg-white dark:bg-gray-950 py-16">
      <Container>
        <SectionHeader
          title="AI Security Assessment"
          subtitle="Evaluate your organization's AI security posture in 2 minutes"
          centered
        />
        
        <div className="max-w-3xl mx-auto mt-12">
          {!showResults ? (
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                  <span>{Math.round(((currentQuestion) / questions.length) * 100)}% Complete</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                    style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                  {questions[currentQuestion].category}
                </p>
                <h2 className="text-2xl font-bold mb-6">
                  {questions[currentQuestion].question}
                </h2>

                {/* Answers */}
                <div className="space-y-3">
                  {questions[currentQuestion].answers.map((answer, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(answer.score, answer.risk)}
                      className="w-full text-left p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    >
                      <span className="text-lg">{answer.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Results Summary */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Your AI Security Assessment Results</h2>
                
                <div className="text-center mb-8">
                  <div className={`text-6xl font-bold ${results!.riskColor} mb-2`}>
                    {results!.riskLevel}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Risk Score: {results!.totalScore} / {questions.length * 4}
                  </p>
                </div>

                {/* Risk Visualization */}
                <div className="mb-8">
                  <div className="h-8 bg-gradient-to-r from-green-500 via-yellow-500 via-orange-500 to-red-500 rounded-full relative">
                    <div 
                      className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border-2 border-gray-800 rounded-full"
                      style={{ left: `${results!.percentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-2">
                    <span>Low Risk</span>
                    <span>Medium Risk</span>
                    <span>High Risk</span>
                    <span>Critical Risk</span>
                  </div>
                </div>

                {/* Key Findings */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-4">Key Risk Areas</h3>
                  <div className="space-y-2">
                    {Object.entries(answers).map(([questionId, score]) => {
                      const question = questions.find(q => q.id === questionId)
                      if (!question || score <= 2) return null
                      
                      return (
                        <div key={questionId} className="flex items-center gap-2">
                          {score >= 4 ? (
                            <XCircle className="w-5 h-5 text-red-500" />
                          ) : (
                            <AlertCircle className="w-5 h-5 text-orange-500" />
                          )}
                          <span className="text-sm">{question.category}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">Recommended Actions</h3>
                  <div className="space-y-3">
                    {results!.recommendations.map((rec, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Personalized Solution */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Your Personalized Security Solution
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Based on your assessment, we recommend the following perfecXion.ai products:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {results!.percentage >= 50 && (
                    <div className="bg-white/10 rounded-lg p-4">
                      <h4 className="font-semibold">AI Sentinel</h4>
                      <p className="text-sm opacity-90">Real-time threat detection</p>
                    </div>
                  )}
                  {results!.percentage >= 25 && (
                    <div className="bg-white/10 rounded-lg p-4">
                      <h4 className="font-semibold">Model Guard</h4>
                      <p className="text-sm opacity-90">Vulnerability scanning</p>
                    </div>
                  )}
                  {Object.values(answers).some(score => score >= 3) && (
                    <div className="bg-white/10 rounded-lg p-4">
                      <h4 className="font-semibold">ComplianceAI</h4>
                      <p className="text-sm opacity-90">Regulatory compliance</p>
                    </div>
                  )}
                  {results!.percentage >= 75 && (
                    <div className="bg-white/10 rounded-lg p-4">
                      <h4 className="font-semibold">ResponseOrchestrator</h4>
                      <p className="text-sm opacity-90">Incident response</p>
                    </div>
                  )}
                </div>

                <div className="flex gap-4">
                  <Button variant="secondary" size="lg">
                    Download Full Report
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="bg-white text-gray-900 hover:bg-gray-100"
                  >
                    Get Security Roadmap
                  </Button>
                </div>
              </div>

              {/* Reset Option */}
              <div className="text-center">
                <button
                  onClick={resetAssessment}
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Take Assessment Again
                </button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}