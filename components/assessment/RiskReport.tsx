'use client'

import { useState } from 'react'
import { AlertTriangle, Shield, TrendingUp, Download, ChevronDown, ChevronUp, CheckCircle, XCircle, AlertCircle } from 'lucide-react'
import { AssessmentResponse, RiskLevel, RiskFactor, RecommendedAction, ComplianceGap } from '@/lib/assessment-types'
import { RiskCalculator } from './RiskCalculator'

interface RiskReportProps {
  responses: AssessmentResponse[]
  riskScore: number
  riskLevel: RiskLevel
  onDownload: () => void
}

export default function RiskReport({ responses, riskScore, riskLevel, onDownload }: RiskReportProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['summary']))
  const report = RiskCalculator.generateDetailedReport(responses, riskScore)

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(section)) {
      newExpanded.delete(section)
    } else {
      newExpanded.add(section)
    }
    setExpandedSections(newExpanded)
  }

  const getRiskLevelColor = (level: RiskLevel) => {
    switch (level) {
      case 'critical': return 'text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-900/20'
      case 'high': return 'text-orange-600 bg-orange-50 dark:text-orange-400 dark:bg-orange-900/20'
      case 'medium': return 'text-yellow-600 bg-yellow-50 dark:text-yellow-400 dark:bg-yellow-900/20'
      case 'low': return 'text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-900/20'
      case 'minimal': return 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20'
    }
  }

  const getRiskLevelIcon = (level: RiskLevel) => {
    switch (level) {
      case 'critical':
      case 'high':
        return <XCircle className="w-8 h-8" />
      case 'medium':
        return <AlertCircle className="w-8 h-8" />
      case 'low':
      case 'minimal':
        return <CheckCircle className="w-8 h-8" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      case 'high': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'low': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
    }
  }

  return (
    <div className="space-y-6">
      {/* Executive Summary */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
        <button
          onClick={() => toggleSection('summary')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-3">
            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            Executive Summary
          </h2>
          {expandedSections.has('summary') ? <ChevronUp /> : <ChevronDown />}
        </button>
        
        {expandedSections.has('summary') && (
          <div className="px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Risk Score */}
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full ${getRiskLevelColor(riskLevel)}`}>
                  <div>
                    {getRiskLevelIcon(riskLevel)}
                    <div className="text-3xl font-bold mt-2">{riskScore}</div>
                    <div className="text-sm uppercase">{riskLevel} Risk</div>
                  </div>
                </div>
              </div>
              
              {/* Key Metrics */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">Key Findings</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Vulnerabilities</span>
                    <span className="font-medium">{report.topVulnerabilities.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Critical Actions</span>
                    <span className="font-medium">{report.prioritizedActions.filter(a => a.priority === 'critical').length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Compliance Gaps</span>
                    <span className="font-medium">{report.complianceGaps.length}</span>
                  </div>
                </div>
              </div>
              
              {/* Remediation Estimates */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">Remediation Estimates</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Timeline</span>
                    <span className="font-medium">{report.estimatedRemediationTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Cost Range</span>
                    <span className="font-medium">
                      ${report.estimatedCost.min.toLocaleString()} - ${report.estimatedCost.max.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Summary Text */}
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400">
                Based on our comprehensive assessment, your organization's AI security posture presents a 
                <span className={`font-semibold ${riskLevel === 'critical' || riskLevel === 'high' ? 'text-red-600 dark:text-red-400' : ''}`}>
                  {' '}{riskLevel} risk level
                </span> with an overall score of {riskScore}/100. 
                {report.topVulnerabilities.length > 0 && (
                  <> We identified {report.topVulnerabilities.length} key vulnerabilities that require immediate attention.</>
                )}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Risk Factors by Category */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
        <button
          onClick={() => toggleSection('factors')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            Risk Analysis by Category
          </h2>
          {expandedSections.has('factors') ? <ChevronUp /> : <ChevronDown />}
        </button>
        
        {expandedSections.has('factors') && (
          <div className="px-6 pb-6">
            {report.factors.map((factor: RiskFactor) => (
              <div key={factor.category} className="mb-6 last:mb-0">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{factor.category}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    factor.score >= 7 ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400' :
                    factor.score >= 4 ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400' :
                    'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                  }`}>
                    Risk Score: {factor.score}/10
                  </span>
                </div>
                
                {factor.findings.length > 0 && (
                  <div className="mb-3">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Key Findings:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {factor.findings.map((finding, index) => (
                        <li key={index} className="text-sm text-gray-600 dark:text-gray-400">{finding}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {factor.recommendations.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Recommendations:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {factor.recommendations.map((rec, index) => (
                        <li key={index} className="text-sm text-gray-600 dark:text-gray-400">{rec}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Top Vulnerabilities */}
      {report.topVulnerabilities.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
          <button
            onClick={() => toggleSection('vulnerabilities')}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
              Critical Vulnerabilities
            </h2>
            {expandedSections.has('vulnerabilities') ? <ChevronUp /> : <ChevronDown />}
          </button>
          
          {expandedSections.has('vulnerabilities') && (
            <div className="px-6 pb-6">
              <div className="space-y-3">
                {report.topVulnerabilities.map((vulnerability, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-red-800 dark:text-red-200">{vulnerability}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Prioritized Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
        <button
          onClick={() => toggleSection('actions')}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
            Recommended Actions
          </h2>
          {expandedSections.has('actions') ? <ChevronUp /> : <ChevronDown />}
        </button>
        
        {expandedSections.has('actions') && (
          <div className="px-6 pb-6">
            <div className="space-y-4">
              {report.prioritizedActions.map((action: RecommendedAction, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{action.title}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(action.priority)}`}>
                      {action.priority.toUpperCase()}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{action.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500 dark:text-gray-500">Effort:</span>
                      <span className="ml-2 font-medium">{action.effort}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 dark:text-gray-500">Impact:</span>
                      <span className="ml-2 font-medium">{action.impact}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 dark:text-gray-500">Timeline:</span>
                      <span className="ml-2 font-medium">{action.timeframe}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 dark:text-gray-500">Resources:</span>
                      <span className="ml-2 font-medium">{action.resources.length}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Compliance Gaps */}
      {report.complianceGaps.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
          <button
            onClick={() => toggleSection('compliance')}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-3">
              <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              Compliance Gaps
            </h2>
            {expandedSections.has('compliance') ? <ChevronUp /> : <ChevronDown />}
          </button>
          
          {expandedSections.has('compliance') && (
            <div className="px-6 pb-6">
              <div className="space-y-4">
                {report.complianceGaps.map((gap: ComplianceGap, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold text-gray-900 dark:text-white">{gap.framework}</span>
                      <span className="text-sm text-gray-500">- {gap.requirement}</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">Gap:</span>
                        <span className="ml-2 text-gray-600 dark:text-gray-400">{gap.gap}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700 dark:text-gray-300">Remediation:</span>
                        <span className="ml-2 text-gray-600 dark:text-gray-400">{gap.remediation}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Download Report Button */}
      <div className="text-center">
        <button
          onClick={onDownload}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          <Download className="w-5 h-5" />
          Download Full Report
        </button>
      </div>
    </div>
  )
}