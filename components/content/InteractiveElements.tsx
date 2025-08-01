'use client'

import { useState } from 'react'
import { CheckCircle, XCircle, HelpCircle, Calculator, FileText, Brain, AlertTriangle } from 'lucide-react'

interface QuizQuestion {
  id: string
  question: string
  type: 'multiple-choice' | 'true-false' | 'text'
  options?: string[]
  correctAnswer: string | number
  explanation: string
  points: number
}

interface QuizProps {
  questions: QuizQuestion[]
  onComplete: (score: number) => void
}

export function InteractiveQuiz({ questions, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string | number>>({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswer = (questionId: string, answer: string | number) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateScore()
    }
  }

  const calculateScore = () => {
    let totalScore = 0
    let maxScore = 0

    questions.forEach(question => {
      maxScore += question.points
      if (answers[question.id] === question.correctAnswer) {
        totalScore += question.points
      }
    })

    const finalScore = Math.round((totalScore / maxScore) * 100)
    setScore(finalScore)
    setShowResults(true)
    onComplete(finalScore)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
    setScore(0)
  }

  if (showResults) {
    return (
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <div className="text-center mb-6">
          <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
            score >= 80 ? 'bg-green-100 dark:bg-green-900/20' : 
            score >= 60 ? 'bg-yellow-100 dark:bg-yellow-900/20' : 
            'bg-red-100 dark:bg-red-900/20'
          }`}>
            {score >= 80 ? (
              <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
            ) : score >= 60 ? (
              <HelpCircle className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
            ) : (
              <XCircle className="h-8 w-8 text-red-600 dark:text-red-400" />
            )}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Quiz Complete!
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Your Score: <span className="font-semibold">{score}%</span>
          </p>
        </div>

        {/* Results breakdown */}
        <div className="space-y-4 mb-6">
          {questions.map((question, index) => {
            const userAnswer = answers[question.id]
            const isCorrect = userAnswer === question.correctAnswer
            
            return (
              <div key={question.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className={`mt-1 ${isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {isCorrect ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 dark:text-white mb-2">
                      {index + 1}. {question.question}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      Your answer: <span className="font-medium">{userAnswer}</span>
                    </p>
                    {!isCorrect && (
                      <p className="text-sm text-green-600 dark:text-green-400 mb-2">
                        Correct answer: <span className="font-medium">{question.correctAnswer}</span>
                      </p>
                    )}
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {question.explanation}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex gap-4">
          <button
            onClick={resetQuiz}
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            Retake Quiz
          </button>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
          >
            Continue Learning
          </button>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]
  
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Knowledge Check
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
          <div 
            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="mb-6">
        <p className="text-lg text-gray-900 dark:text-white mb-4">
          {question.question}
        </p>

        {question.type === 'multiple-choice' && question.options && (
          <div className="space-y-2">
            {question.options.map((option, index) => (
              <label key={index} className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer transition-colors">
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  onChange={(e) => handleAnswer(question.id, e.target.value)}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 dark:border-gray-600"
                />
                <span className="ml-3 text-gray-700 dark:text-gray-300">{option}</span>
              </label>
            ))}
          </div>
        )}

        {question.type === 'true-false' && (
          <div className="space-y-2">
            {[true, false].map((option) => (
              <label key={option.toString()} className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer transition-colors">
                <input
                  type="radio"
                  name={question.id}
                  value={option.toString()}
                  onChange={(e) => handleAnswer(question.id, e.target.value === 'true' ? 'true' : 'false')}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 dark:border-gray-600"
                />
                <span className="ml-3 text-gray-700 dark:text-gray-300">
                  {option ? 'True' : 'False'}
                </span>
              </label>
            ))}
          </div>
        )}

        {question.type === 'text' && (
          <input
            type="text"
            placeholder="Enter your answer..."
            onChange={(e) => handleAnswer(question.id, e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        )}
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
          disabled={currentQuestion === 0}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        
        <button
          onClick={handleNext}
          disabled={!answers[question.id]}
          className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  )
}

interface RiskCalculatorProps {
  title: string
  description: string
  factors: {
    name: string
    description: string
    weight: number
    options: { label: string; value: number }[]
  }[]
}

export function RiskCalculator({ title, description, factors }: RiskCalculatorProps) {
  const [selections, setSelections] = useState<Record<string, number>>({})
  const [result, setResult] = useState<number | null>(null)

  const calculateRisk = () => {
    let totalScore = 0
    let totalWeight = 0

    factors.forEach(factor => {
      if (selections[factor.name] !== undefined) {
        totalScore += selections[factor.name] * factor.weight
        totalWeight += factor.weight
      }
    })

    const riskScore = totalWeight > 0 ? Math.round((totalScore / totalWeight) * 100) : 0
    setResult(riskScore)
  }

  const getRiskLevel = (score: number) => {
    if (score >= 80) return { level: 'High', color: 'text-red-600 dark:text-red-400', bg: 'bg-red-100 dark:bg-red-900/20' }
    if (score >= 60) return { level: 'Medium', color: 'text-yellow-600 dark:text-yellow-400', bg: 'bg-yellow-100 dark:bg-yellow-900/20' }
    if (score >= 40) return { level: 'Low-Medium', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-900/20' }
    return { level: 'Low', color: 'text-green-600 dark:text-green-400', bg: 'bg-green-100 dark:bg-green-900/20' }
  }

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <Calculator className="h-5 w-5 text-primary-600 dark:text-primary-400" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        {description}
      </p>

      <div className="space-y-6">
        {factors.map((factor, index) => (
          <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0">
            <h4 className="font-medium text-gray-900 dark:text-white mb-2">
              {factor.name}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {factor.description}
            </p>
            <div className="space-y-2">
              {factor.options.map((option, optionIndex) => (
                <label key={optionIndex} className="flex items-center p-2 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded cursor-pointer">
                  <input
                    type="radio"
                    name={factor.name}
                    value={option.value}
                    onChange={(e) => setSelections(prev => ({ ...prev, [factor.name]: Number(e.target.value) }))}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 dark:border-gray-600"
                  />
                  <span className="ml-3 text-sm text-gray-700 dark:text-gray-300">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <button
          onClick={calculateRisk}
          disabled={Object.keys(selections).length !== factors.length}
          className="w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Calculate Risk Score
        </button>
      </div>

      {result !== null && (
        <div className="mt-6 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="text-center">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${getRiskLevel(result).bg} mb-2`}>
              <AlertTriangle className={`h-4 w-4 ${getRiskLevel(result).color}`} />
              <span className={`font-semibold ${getRiskLevel(result).color}`}>
                Risk Level: {getRiskLevel(result).level}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {result}/100
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Based on your responses, this represents a {getRiskLevel(result).level.toLowerCase()} risk profile.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

interface ChecklistItem {
  id: string
  task: string
  description?: string
  completed: boolean
  required: boolean
}

interface SecurityChecklistProps {
  title: string
  items: ChecklistItem[]
  onItemToggle: (itemId: string) => void
}

export function SecurityChecklist({ title, items, onItemToggle }: SecurityChecklistProps) {
  const completedCount = items.filter(item => item.completed).length
  const requiredCount = items.filter(item => item.required).length
  const completedRequired = items.filter(item => item.required && item.completed).length

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="h-5 w-5 text-primary-600 dark:text-primary-400" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>

      {/* Progress Summary */}
      <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Overall Progress
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {completedCount}/{items.length} items
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-2">
          <div 
            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(completedCount / items.length) * 100}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
          <span>Required: {completedRequired}/{requiredCount}</span>
          <span>{Math.round((completedCount / items.length) * 100)}% complete</span>
        </div>
      </div>

      {/* Checklist Items */}
      <div className="space-y-3">
        {items.map((item) => (
          <div 
            key={item.id}
            className={`flex items-start gap-3 p-3 rounded-lg border transition-colors ${
              item.completed 
                ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' 
                : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50'
            }`}
          >
            <button
              onClick={() => onItemToggle(item.id)}
              className={`mt-0.5 flex-shrink-0 h-5 w-5 rounded border-2 flex items-center justify-center transition-colors ${
                item.completed
                  ? 'bg-green-600 border-green-600 text-white'
                  : 'border-gray-300 dark:border-gray-600 hover:border-primary-500'
              }`}
            >
              {item.completed && <CheckCircle className="h-3 w-3" />}
            </button>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className={`text-sm font-medium ${
                  item.completed 
                    ? 'text-green-700 dark:text-green-300 line-through' 
                    : 'text-gray-900 dark:text-white'
                }`}>
                  {item.task}
                </h4>
                {item.required && (
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                    Required
                  </span>
                )}
              </div>
              {item.description && (
                <p className={`text-xs ${
                  item.completed 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      {completedRequired === requiredCount && requiredCount > 0 && (
        <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <div className="flex items-center gap-2 text-green-800 dark:text-green-200">
            <CheckCircle className="h-4 w-4" />
            <span className="text-sm font-medium">
              All required items completed!
            </span>
          </div>
        </div>
      )}
    </div>
  )
}