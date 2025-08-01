'use client'

import { useState } from 'react'
import { ChevronRight, ChevronLeft, AlertTriangle, Shield, CheckCircle, Download, Mail } from 'lucide-react'
import QuestionnaireEngine from './QuestionnaireEngine'
import { RiskCalculator } from './RiskCalculator'
import RiskReport from './RiskReport'
import { AssessmentResponse, RiskLevel } from '@/lib/assessment-types'

export default function RiskAssessment() {
  const [currentStep, setCurrentStep] = useState<'questionnaire' | 'calculating' | 'report'>('questionnaire')
  const [responses, setResponses] = useState<AssessmentResponse[]>([])
  const [riskScore, setRiskScore] = useState<number | null>(null)
  const [showEmailCapture, setShowEmailCapture] = useState(false)
  const [userInfo, setUserInfo] = useState({
    email: '',
    name: '',
    company: '',
    role: ''
  })

  const handleQuestionnaireComplete = (assessmentResponses: AssessmentResponse[]) => {
    setResponses(assessmentResponses)
    setCurrentStep('calculating')
    
    // Simulate calculation time
    setTimeout(() => {
      const score = RiskCalculator.calculateRiskScore(assessmentResponses)
      setRiskScore(score)
      setCurrentStep('report')
    }, 2000)
  }

  const handleDownloadReport = () => {
    setShowEmailCapture(true)
  }

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Here you would integrate with your CRM/email service
    console.log('Lead captured:', userInfo)
    
    // Generate and download report
    const report = RiskCalculator.generateDetailedReport(responses, riskScore!)
    
    // In production, you'd generate a PDF here
    const reportJson = JSON.stringify(report, null, 2)
    const blob = new Blob([reportJson], { type: 'application/json' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `ai-risk-assessment-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    
    // Reset form
    setShowEmailCapture(false)
    
    // Show success message
    alert('Report sent! Check your email for the detailed assessment.')
  }

  const getRiskLevel = (score: number): RiskLevel => {
    if (score >= 80) return 'critical'
    if (score >= 60) return 'high'
    if (score >= 40) return 'medium'
    if (score >= 20) return 'low'
    return 'minimal'
  }

  if (currentStep === 'calculating') {
    return (
      <div className="flex flex-col items-center justify-center py-24">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mb-8"></div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Calculating Your Risk Score
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Analyzing your responses and generating personalized recommendations...
        </p>
      </div>
    )
  }

  if (currentStep === 'report' && riskScore !== null) {
    const riskLevel = getRiskLevel(riskScore)
    
    return (
      <div className="space-y-6">
        <RiskReport 
          responses={responses}
          riskScore={riskScore}
          riskLevel={riskLevel}
          onDownload={handleDownloadReport}
        />
        
        {/* Email Capture Modal */}
        {showEmailCapture && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Get Your Detailed Report
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Enter your information to receive a comprehensive AI security assessment report.
              </p>
              
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={userInfo.name}
                    onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={userInfo.company}
                    onChange={(e) => setUserInfo({ ...userInfo, company: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Role
                  </label>
                  <input
                    type="text"
                    value={userInfo.role}
                    onChange={(e) => setUserInfo({ ...userInfo, role: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Get Report
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowEmailCapture(false)}
                    className="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={() => {
              setCurrentStep('questionnaire')
              setResponses([])
              setRiskScore(null)
            }}
            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
          >
            Start New Assessment
          </button>
          <button
            onClick={() => window.location.href = '/contact/sales'}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Schedule a Demo
          </button>
        </div>
      </div>
    )
  }

  return (
    <QuestionnaireEngine onComplete={handleQuestionnaireComplete} />
  )
}