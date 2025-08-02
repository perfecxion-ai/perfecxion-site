'use client'

import { useState, useEffect } from 'react'
import { Play, Pause, RotateCcw, ChevronRight, Shield, AlertTriangle, CheckCircle, BookOpen } from 'lucide-react'
// ResponsiveCodeBlock removed - using simple code display
import { ThreatScenario, SimulationStep } from '@/lib/assessment-types'
import { threatScenarios } from '@/lib/threat-scenarios'

export default function ThreatSimulator() {
  const [selectedScenario, setSelectedScenario] = useState<ThreatScenario | null>(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())
  const [showEducationalContent, setShowEducationalContent] = useState(false)

  const handleScenarioSelect = (scenario: ThreatScenario) => {
    setSelectedScenario(scenario)
    setCurrentStep(0)
    setIsRunning(false)
    setCompletedSteps(new Set())
    setShowEducationalContent(false)
  }

  const runSimulation = async () => {
    if (!selectedScenario || isRunning) return
    
    setIsRunning(true)
    
    for (let i = 0; i <= currentStep; i++) {
      if (i === currentStep) {
        // Simulate execution delay for current step
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // Mark step as completed
        setCompletedSteps(prev => new Set(Array.from(prev).concat([i])))
        
        // Move to next step if not at the end
        if (i < selectedScenario.steps.length - 1) {
          setCurrentStep(i + 1)
        }
        break
      }
    }
    
    setIsRunning(false)
  }

  const resetSimulation = () => {
    if (selectedScenario) {
      setCurrentStep(0)
      setIsRunning(false)
      setCompletedSteps(new Set())
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
      case 'intermediate': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
      case 'advanced': return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  const getStepStatus = (stepIndex: number) => {
    if (completedSteps.has(stepIndex)) return 'completed'
    if (stepIndex === currentStep && isRunning) return 'running'
    if (stepIndex === currentStep) return 'current'
    if (stepIndex < currentStep) return 'completed'
    return 'pending'
  }

  const getStepIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'running': return <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      case 'current': return <div className="w-5 h-5 rounded-full bg-blue-500" />
      default: return <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600" />
    }
  }

  if (!selectedScenario) {
    return (
      <div className="space-y-6">
        {/* Safety Notice */}
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
          <div className="flex gap-3">
            <Shield className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-amber-800 dark:text-amber-200">
              <p className="font-semibold mb-1">Safe Testing Environment</p>
              <p>All simulations run in an isolated sandbox. No actual attacks are performed, and no real systems are affected. This is purely educational.</p>
            </div>
          </div>
        </div>

        {/* Scenario Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {threatScenarios.map(scenario => (
            <button
              key={scenario.id}
              onClick={() => handleScenarioSelect(scenario)}
              className="text-left p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {scenario.title}
                </h3>
                <span className={`px-2 py-1 text-xs font-medium rounded ${getDifficultyColor(scenario.difficulty)}`}>
                  {scenario.difficulty}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {scenario.description}
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                <span>{scenario.category}</span>
                <span>{scenario.steps.length} steps</span>
              </div>
              
              {/* Learning Objectives Preview */}
              <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">You'll learn:</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {scenario.learningObjectives[0]}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Scenario Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedScenario.title}
              </h2>
              <span className={`px-2 py-1 text-xs font-medium rounded ${getDifficultyColor(selectedScenario.difficulty)}`}>
                {selectedScenario.difficulty}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              {selectedScenario.description}
            </p>
            <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
              {selectedScenario.category}
            </span>
          </div>
          <button
            onClick={() => setSelectedScenario(null)}
            className="px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Back to Scenarios
          </button>
        </div>

        {/* Control Buttons */}
        <div className="flex gap-3">
          <button
            onClick={runSimulation}
            disabled={isRunning || (currentStep === selectedScenario.steps.length - 1 && completedSteps.has(currentStep))}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isRunning ? (
              <>
                <Pause className="w-4 h-4" />
                Running...
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                {currentStep === 0 ? 'Start Simulation' : 'Continue'}
              </>
            )}
          </button>
          
          <button
            onClick={resetSimulation}
            disabled={isRunning}
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
          
          <button
            onClick={() => setShowEducationalContent(!showEducationalContent)}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            {showEducationalContent ? 'Hide' : 'Show'} Learning Content
          </button>
        </div>
      </div>

      {/* Educational Content */}
      {showEducationalContent && (
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-4">Learning Objectives</h3>
          <ul className="list-disc list-inside space-y-2 text-blue-800 dark:text-blue-200 mb-6">
            {selectedScenario.learningObjectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
          
          {selectedScenario.realWorldExamples.length > 0 && (
            <>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-4">Real-World Examples</h3>
              <ul className="list-disc list-inside space-y-2 text-blue-800 dark:text-blue-200">
                {selectedScenario.realWorldExamples.map((example, index) => (
                  <li key={index}>{example}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}

      {/* Simulation Steps */}
      <div className="space-y-4">
        {selectedScenario.steps.map((step: SimulationStep, index) => {
          const status = getStepStatus(index)
          const isVisible = index <= currentStep || completedSteps.has(index)
          
          if (!isVisible) return null
          
          return (
            <div
              key={step.id}
              className={`
                bg-white dark:bg-gray-800 rounded-lg p-6 border-2 transition-all
                ${status === 'current' ? 'border-blue-500' : 'border-gray-200 dark:border-gray-700'}
                ${status === 'completed' ? 'opacity-90' : ''}
              `}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {getStepIcon(status)}
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Step {index + 1}: {step.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {step.description}
                  </p>
                  
                  {/* Action Code */}
                  {step.action && (
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Action:</h4>
                      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{step.action}</code>
                      </pre>
                    </div>
                  )}
                  
                  {/* Results */}
                  {(status === 'completed' || status === 'running') && (
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Expected Result:</h4>
                        <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg text-sm text-gray-600 dark:text-gray-400">
                          {step.expectedResult}
                        </div>
                      </div>
                      
                      {step.actualResult && status === 'completed' && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Actual Result:</h4>
                          <div className={`
                            p-3 rounded-lg text-sm
                            ${step.success 
                              ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200' 
                              : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200'
                            }
                          `}>
                            {step.actualResult}
                          </div>
                        </div>
                      )}
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Explanation:</h4>
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-sm text-blue-800 dark:text-blue-200">
                          {step.explanation}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Completion Summary */}
      {completedSteps.size === selectedScenario.steps.length && (
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
          <div className="flex gap-3">
            <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                Simulation Complete! 🎉
              </h3>
              <p className="text-sm text-green-800 dark:text-green-200 mb-4">
                You've successfully completed the {selectedScenario.title} simulation. 
                This demonstration showed how real attacks work and how to defend against them.
              </p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">Key Takeaways:</h4>
                  <ul className="list-disc list-inside text-sm text-green-800 dark:text-green-200 space-y-1">
                    <li>Understanding attack vectors helps build better defenses</li>
                    <li>Proactive security measures are essential for AI systems</li>
                    <li>Regular security testing can identify vulnerabilities early</li>
                    <li>perfecXion.ai provides comprehensive protection against these threats</li>
                  </ul>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => setSelectedScenario(null)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Try Another Scenario
                  </button>
                  <button
                    onClick={() => window.location.href = '/contact/sales'}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Learn More About Protection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}