'use client'

import { useState } from 'react'
import { TrendingUp, CheckCircle, AlertCircle, Shield, ChevronRight, BarChart3, Target } from 'lucide-react'
import { MaturityLevel, MaturityDimension, MaturityAssessmentResult } from '@/lib/assessment-types'
import { maturityFramework } from '@/lib/maturity-framework'

export default function MaturityAssessment() {
  const [currentDimension, setCurrentDimension] = useState(0)
  const [responses, setResponses] = useState<Record<string, MaturityLevel>>({})
  const [showResults, setShowResults] = useState(false)
  const [assessmentResult, setAssessmentResult] = useState<MaturityAssessmentResult | null>(null)

  const dimensions = maturityFramework.dimensions
  const currentDim = dimensions[currentDimension]
  const progress = ((currentDimension + 1) / dimensions.length) * 100

  const handleLevelSelect = (level: MaturityLevel) => {
    const newResponses = { ...responses, [currentDim.id]: level }
    setResponses(newResponses)

    if (currentDimension < dimensions.length - 1) {
      setCurrentDimension(currentDimension + 1)
    } else {
      // Calculate results
      const result = calculateMaturityResults(newResponses)
      setAssessmentResult(result)
      setShowResults(true)
    }
  }

  const calculateMaturityResults = (responses: Record<string, MaturityLevel>): MaturityAssessmentResult => {
    const dimensionResults: MaturityDimension[] = dimensions.map(dim => {
      const currentLevel = responses[dim.id] || 1
      const targetLevel = Math.min(currentLevel + 1, 5) as MaturityLevel
      
      return {
        id: dim.id,
        name: dim.name,
        description: dim.description,
        currentLevel,
        targetLevel,
        gaps: dim.levelDescriptions[targetLevel]?.gaps || [],
        improvements: dim.levelDescriptions[targetLevel]?.improvements || [],
        metrics: dim.metrics.map(metric => ({
          ...metric,
          current: metric.baseline + (currentLevel - 1) * metric.increment,
          trend: currentLevel >= 3 ? 'improving' : 'stable'
        }))
      }
    })

    const overallLevel = Math.round(
      Object.values(responses).reduce((sum, level) => sum + level, 0) / Object.values(responses).length
    ) as MaturityLevel

    const strengths = dimensionResults
      .filter(dim => dim.currentLevel >= 4)
      .map(dim => `Strong ${dim.name.toLowerCase()} practices`)

    const weaknesses = dimensionResults
      .filter(dim => dim.currentLevel <= 2)
      .map(dim => `Limited ${dim.name.toLowerCase()} maturity`)

    return {
      overallLevel,
      dimensions: dimensionResults,
      strengths,
      weaknesses,
      roadmap: generateRoadmap(dimensionResults),
      benchmarkComparison: {
        industryAverage: 2.4,
        topPerformers: 4.1,
        yourScore: overallLevel,
        percentile: Math.min(95, Math.max(5, (overallLevel / 5) * 100)),
        peerComparison: [
          { category: 'Technology Companies', yourScore: overallLevel, peerAverage: 2.8 },
          { category: 'Financial Services', yourScore: overallLevel, peerAverage: 3.1 },
          { category: 'Healthcare', yourScore: overallLevel, peerAverage: 2.6 },
          { category: 'Government', yourScore: overallLevel, peerAverage: 2.2 }
        ]
      }
    }
  }

  const generateRoadmap = (dimensions: MaturityDimension[]) => {
    const roadmapItems = []
    
    // Phase 1: Foundation (Level 1 -> 2)
    const foundationDims = dimensions.filter(d => d.currentLevel === 1)
    if (foundationDims.length > 0) {
      roadmapItems.push({
        phase: 1,
        title: 'Foundation Building',
        duration: '3-6 months',
        objectives: foundationDims.map(d => `Establish basic ${d.name.toLowerCase()}`),
        deliverables: ['Security policy framework', 'Basic monitoring setup', 'Team training program'],
        dependencies: ['Executive sponsorship', 'Initial budget allocation'],
        estimatedCost: { min: 50000, max: 150000 },
        resources: { internal: 2, external: 1 }
      })
    }

    // Phase 2: Development (Level 2 -> 3)
    const developmentDims = dimensions.filter(d => d.currentLevel === 2)
    if (developmentDims.length > 0) {
      roadmapItems.push({
        phase: 2,
        title: 'Process Standardization',
        duration: '6-9 months',
        objectives: developmentDims.map(d => `Standardize ${d.name.toLowerCase()} processes`),
        deliverables: ['Documented procedures', 'Automated workflows', 'Compliance framework'],
        dependencies: ['Phase 1 completion', 'Tool procurement'],
        estimatedCost: { min: 100000, max: 300000 },
        resources: { internal: 3, external: 2 }
      })
    }

    // Phase 3: Optimization (Level 3+)
    const optimizationDims = dimensions.filter(d => d.currentLevel >= 3)
    if (optimizationDims.length > 0) {
      roadmapItems.push({
        phase: 3,
        title: 'Continuous Improvement',
        duration: '9-12 months',
        objectives: ['Implement advanced capabilities', 'Drive continuous improvement'],
        deliverables: ['Advanced analytics', 'Predictive capabilities', 'Industry leadership'],
        dependencies: ['Phase 2 completion', 'Advanced tooling'],
        estimatedCost: { min: 200000, max: 500000 },
        resources: { internal: 4, external: 3 }
      })
    }

    return roadmapItems
  }

  const getLevelColor = (level: MaturityLevel) => {
    switch (level) {
      case 1: return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      case 2: return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400'
      case 3: return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 4: return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
      case 5: return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
    }
  }

  const getLevelName = (level: MaturityLevel) => {
    const names = ['', 'Initial', 'Developing', 'Defined', 'Managed', 'Optimized']
    return names[level]
  }

  if (showResults && assessmentResult) {
    return (
      <div className="space-y-6">
        {/* Overall Maturity Score */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            AI Security Maturity Assessment Results
          </h2>
          
          <div className="mb-8">
            <div className="text-6xl font-bold text-gray-900 dark:text-white mb-2">
              {assessmentResult.overallLevel}
            </div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${getLevelColor(assessmentResult.overallLevel)}`}>
              <TrendingUp className="w-5 h-5" />
              {getLevelName(assessmentResult.overallLevel)} Maturity
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {assessmentResult.overallLevel >= 4 ? 'Advanced AI security maturity' : 
               assessmentResult.overallLevel >= 3 ? 'Solid foundation with room for improvement' :
               'Significant opportunity for security enhancement'}
            </p>
          </div>

          {/* Dimension Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {assessmentResult.dimensions.map(dimension => (
              <div key={dimension.id} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {dimension.name}
                  </h4>
                  <span className={`text-2xl font-bold ${getLevelColor(dimension.currentLevel).replace('bg-', 'text-').split(' ')[0]}`}>
                    {dimension.currentLevel}
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      dimension.currentLevel >= 4 ? 'bg-green-500' :
                      dimension.currentLevel >= 3 ? 'bg-blue-500' :
                      dimension.currentLevel >= 2 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${(dimension.currentLevel / 5) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benchmark Comparison */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Industry Benchmark Comparison
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-3">Overall Comparison</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Your Score</span>
                  <span className="font-bold text-gray-900 dark:text-white">{assessmentResult.overallLevel}/5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Industry Average</span>
                  <span className="font-bold text-gray-900 dark:text-white">{assessmentResult.benchmarkComparison.industryAverage}/5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Top Performers</span>
                  <span className="font-bold text-gray-900 dark:text-white">{assessmentResult.benchmarkComparison.topPerformers}/5</span>
                </div>
                <div className="flex items-center justify-between border-t pt-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Percentile Rank</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">{Math.round(assessmentResult.benchmarkComparison.percentile)}th</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-3">Peer Comparison</h4>
              <div className="space-y-3">
                {assessmentResult.benchmarkComparison.peerComparison.map((peer, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">{peer.category}</span>
                    <div className="flex items-center gap-2">
                      <span className={`font-medium ${
                        peer.yourScore > peer.peerAverage ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                      }`}>
                        {peer.yourScore > peer.peerAverage ? '+' : ''}{(peer.yourScore - peer.peerAverage).toFixed(1)}
                      </span>
                      <span className="text-xs text-gray-500">vs {peer.peerAverage}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Maturity Roadmap */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Target className="w-5 h-5" />
            Maturity Improvement Roadmap
          </h3>
          
          <div className="space-y-4">
            {assessmentResult.roadmap.map((phase, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Phase {phase.phase}: {phase.title}
                  </h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {phase.duration}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Objectives:</h5>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                      {phase.objectives.map((obj, i) => (
                        <li key={i}>{obj}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Key Deliverables:</h5>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                      {phase.deliverables.map((deliverable, i) => (
                        <li key={i}>{deliverable}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>Cost: ${phase.estimatedCost.min.toLocaleString()} - ${phase.estimatedCost.max.toLocaleString()}</span>
                    <span>Team: {phase.resources.internal} internal, {phase.resources.external} external</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths and Weaknesses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Strengths
            </h3>
            {assessmentResult.strengths.length > 0 ? (
              <ul className="space-y-2">
                {assessmentResult.strengths.map((strength, index) => (
                  <li key={index} className="text-green-800 dark:text-green-200 flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    {strength}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-green-800 dark:text-green-200">
                Focus on building foundational capabilities to establish future strengths.
              </p>
            )}
          </div>
          
          <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6">
            <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Areas for Improvement
            </h3>
            {assessmentResult.weaknesses.length > 0 ? (
              <ul className="space-y-2">
                {assessmentResult.weaknesses.map((weakness, index) => (
                  <li key={index} className="text-amber-800 dark:text-amber-200 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    {weakness}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-amber-800 dark:text-amber-200">
                Strong performance across all maturity dimensions.
              </p>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => window.print()}
            className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-medium"
          >
            Download Report
          </button>
          <button
            onClick={() => window.location.href = '/contact/sales'}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Get Expert Consultation
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
          <span>Dimension {currentDimension + 1} of {dimensions.length}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Current Dimension Assessment */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {currentDim.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {currentDim.description}
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium text-gray-900 dark:text-white">
            Select the level that best describes your current state:
          </h4>
          
          {([1, 2, 3, 4, 5] as MaturityLevel[]).map(level => {
            const levelDesc = currentDim.levelDescriptions[level]
            if (!levelDesc) return null
            
            return (
              <button
                key={level}
                onClick={() => handleLevelSelect(level)}
                className="w-full text-left p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(level)}`}>
                      Level {level}
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {getLevelName(level)}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {levelDesc.description}
                </p>
                
                <div className="text-sm text-gray-500 dark:text-gray-500">
                  <strong>Characteristics:</strong>
                  <ul className="list-disc list-inside mt-1 space-y-1">
                    {levelDesc.characteristics.slice(0, 2).map((char, index) => (
                      <li key={index}>{char}</li>
                    ))}
                  </ul>
                </div>
              </button>
            )
          })}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setCurrentDimension(Math.max(0, currentDimension - 1))}
            disabled={currentDimension === 0}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors
              ${currentDimension === 0
                ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }
            `}
          >
            Previous
          </button>
          
          <span className="text-sm text-gray-500 dark:text-gray-400 self-center">
            Select a level to continue
          </span>
        </div>
      </div>
    </div>
  )
}