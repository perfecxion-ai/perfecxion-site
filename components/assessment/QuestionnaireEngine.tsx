'use client'

import { useState, useEffect } from 'react'
import { ChevronRight, ChevronLeft, Info, AlertCircle } from 'lucide-react'
import { AssessmentQuestion, AssessmentResponse, QuestionOption } from '@/lib/assessment-types'
import { assessmentQuestions } from '@/lib/assessment-questions'

interface QuestionnaireEngineProps {
  onComplete: (responses: AssessmentResponse[]) => void
}

export default function QuestionnaireEngine({ onComplete }: QuestionnaireEngineProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [responses, setResponses] = useState<AssessmentResponse[]>([])
  const [currentAnswer, setCurrentAnswer] = useState<string | string[] | number | null>(null)
  const [validationError, setValidationError] = useState<string | null>(null)

  const currentQuestion = assessmentQuestions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / assessmentQuestions.length) * 100

  useEffect(() => {
    // Reset current answer when question changes
    setCurrentAnswer(null)
    setValidationError(null)
    
    // Load previous answer if exists
    const previousResponse = responses.find(r => r.questionId === currentQuestion?.id)
    if (previousResponse) {
      setCurrentAnswer(previousResponse.value)
    }
  }, [currentQuestionIndex, currentQuestion?.id, responses])

  const handleAnswer = (value: string | string[] | number) => {
    setCurrentAnswer(value)
    setValidationError(null)
  }

  const validateAnswer = (): boolean => {
    if (currentQuestion.required && !currentAnswer) {
      setValidationError('This question is required')
      return false
    }
    
    if (currentQuestion.type === 'multiple' && Array.isArray(currentAnswer) && currentAnswer.length === 0) {
      setValidationError('Please select at least one option')
      return false
    }
    
    return true
  }

  const handleNext = () => {
    if (!validateAnswer()) return
    
    // Save response
    const newResponse: AssessmentResponse = {
      questionId: currentQuestion.id,
      value: currentAnswer!,
      timestamp: new Date()
    }
    
    const updatedResponses = responses.filter(r => r.questionId !== currentQuestion.id)
    updatedResponses.push(newResponse)
    setResponses(updatedResponses)
    
    // Move to next question or complete
    if (currentQuestionIndex < assessmentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      onComplete(updatedResponses)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const handleSkip = () => {
    if (!currentQuestion.required) {
      if (currentQuestionIndex < assessmentQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
      } else {
        onComplete(responses)
      }
    }
  }

  const renderQuestionInput = () => {
    switch (currentQuestion.type) {
      case 'single':
        return (
          <div className="space-y-3">
            {currentQuestion.options?.map((option: QuestionOption) => (
              <label
                key={option.value}
                className={`
                  block p-4 rounded-lg border-2 cursor-pointer transition-all
                  ${currentAnswer === option.value
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }
                `}
              >
                <div className="flex items-start">
                  <input
                    type="radio"
                    name={currentQuestion.id}
                    value={option.value}
                    checked={currentAnswer === option.value}
                    onChange={() => handleAnswer(option.value)}
                    className="mt-1 mr-3"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {option.label}
                    </div>
                    {option.description && (
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {option.description}
                      </div>
                    )}
                  </div>
                </div>
              </label>
            ))}
          </div>
        )
        
      case 'multiple':
        const selectedValues = (currentAnswer as string[]) || []
        return (
          <div className="space-y-3">
            {currentQuestion.options?.map((option: QuestionOption) => (
              <label
                key={option.value}
                className={`
                  block p-4 rounded-lg border-2 cursor-pointer transition-all
                  ${selectedValues.includes(option.value)
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }
                `}
              >
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    value={option.value}
                    checked={selectedValues.includes(option.value)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        handleAnswer([...selectedValues, option.value])
                      } else {
                        handleAnswer(selectedValues.filter(v => v !== option.value))
                      }
                    }}
                    className="mt-1 mr-3"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 dark:text-white">
                      {option.label}
                    </div>
                    {option.description && (
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {option.description}
                      </div>
                    )}
                  </div>
                </div>
              </label>
            ))}
          </div>
        )
        
      case 'scale':
        const scaleValue = (currentAnswer as number) || 1
        return (
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>Low Risk</span>
              <span>High Risk</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={scaleValue}
              onChange={(e) => handleAnswer(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <span key={num}>{num}</span>
              ))}
            </div>
            <div className="text-center">
              <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {scaleValue}
              </span>
            </div>
          </div>
        )
        
      case 'text':
        return (
          <textarea
            value={(currentAnswer as string) || ''}
            onChange={(e) => handleAnswer(e.target.value)}
            placeholder="Please provide details..."
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        )
        
      default:
        return null
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
          <span>Question {currentQuestionIndex + 1} of {assessmentQuestions.length}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 mb-2">
            <Info className="w-4 h-4" />
            <span>{currentQuestion.category}</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {currentQuestion.text}
          </h3>
          {currentQuestion.required && (
            <span className="text-sm text-red-600 dark:text-red-400">* Required</span>
          )}
        </div>

        {/* Question Input */}
        {renderQuestionInput()}

        {/* Validation Error */}
        {validationError && (
          <div className="mt-4 flex items-center gap-2 text-red-600 dark:text-red-400">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">{validationError}</span>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors
              ${currentQuestionIndex === 0
                ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }
            `}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          <div className="flex gap-3">
            {!currentQuestion.required && (
              <button
                onClick={handleSkip}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
              >
                Skip
              </button>
            )}
            
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              {currentQuestionIndex === assessmentQuestions.length - 1 ? 'Complete' : 'Next'}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}