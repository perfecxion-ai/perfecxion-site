'use client'

import { useState, useEffect, useCallback } from 'react'
import { 
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Flag,
  Eye,
  EyeOff,
  Play,
  Pause,
  RefreshCw
} from 'lucide-react'
import { Assessment, Question, AssessmentAttempt, AssessmentAnswer } from '@/lib/community-types'

interface AssessmentEngineProps {
  assessment: Assessment
  onComplete: (attempt: AssessmentAttempt) => void
  onExit?: () => void
}

export default function AssessmentEngine({ assessment, onComplete, onExit }: AssessmentEngineProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({})
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<string>>(new Set())
  const [timeRemaining, setTimeRemaining] = useState(assessment.timeLimit * 60) // Convert to seconds
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false)
  const [attempt, setAttempt] = useState<AssessmentAttempt | null>(null)
  
  const currentQuestion = assessment.questions[currentQuestionIndex]
  const totalQuestions = assessment.questions.length

  // Timer effect
  useEffect(() => {
    if (isSubmitted || isPaused || timeRemaining <= 0) return

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          // Auto-submit when time runs out
          handleSubmit()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isSubmitted, isPaused, timeRemaining])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60
    
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
    }
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const handleAnswerChange = (questionId: string, answer: string | string[]) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }))
  }

  const toggleFlag = (questionId: string) => {
    setFlaggedQuestions(prev => {
      const newSet = new Set(prev)
      if (newSet.has(questionId)) {
        newSet.delete(questionId)
      } else {
        newSet.add(questionId)
      }
      return newSet
    })
  }

  const navigateToQuestion = (index: number) => {
    if (index >= 0 && index < totalQuestions) {
      setCurrentQuestionIndex(index)
    }
  }

  const handleSubmit = useCallback(() => {
    if (isSubmitted) return

    const startTime = new Date(Date.now() - ((assessment.timeLimit * 60 - timeRemaining) * 1000))
    const endTime = new Date()
    
    // Calculate score and create attempt
    const assessmentAnswers: AssessmentAnswer[] = assessment.questions.map(question => {
      const userAnswer = answers[question.id] || ''
      const isCorrect = Array.isArray(question.correctAnswer) 
        ? Array.isArray(userAnswer) 
          ? question.correctAnswer.every(correct => userAnswer.includes(correct)) && 
            userAnswer.every(answer => question.correctAnswer?.includes(answer))
          : question.correctAnswer.includes(userAnswer)
        : question.correctAnswer === userAnswer

      return {
        questionId: question.id,
        answer: userAnswer,
        isCorrect,
        points: isCorrect ? question.points : 0
      }
    })

    const totalPoints = assessmentAnswers.reduce((sum, answer) => sum + answer.points, 0)
    const maxPoints = assessment.questions.reduce((sum, question) => sum + question.points, 0)
    const score = Math.round((totalPoints / maxPoints) * 100)
    const passed = score >= assessment.passingScore

    const newAttempt: AssessmentAttempt = {
      id: Date.now().toString(),
      userId: 'current-user',
      assessmentId: assessment.id,
      answers: assessmentAnswers,
      score,
      passed,
      timeSpent: Math.round((assessment.timeLimit * 60 - timeRemaining) / 60),
      startedAt: startTime,
      completedAt: endTime
    }

    setAttempt(newAttempt)
    setIsSubmitted(true)
    setShowResults(true)
    onComplete(newAttempt)
  }, [assessment, answers, timeRemaining, isSubmitted, onComplete])

  const getQuestionStatus = (questionId: string) => {
    if (answers[questionId] !== undefined && answers[questionId] !== '') {
      return 'answered'
    }
    return 'unanswered'
  }

  const getAnsweredCount = () => {
    return Object.keys(answers).filter(questionId => 
      answers[questionId] !== undefined && answers[questionId] !== ''
    ).length
  }

  if (showResults && attempt) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className={`w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center ${
              attempt.passed ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'
            }`}>
              {attempt.passed ? (
                <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
              ) : (
                <XCircle className="w-12 h-12 text-red-600 dark:text-red-400" />
              )}
            </div>
            
            <h1 className="text-3xl font-bold dark:text-white mb-2">
              Assessment {attempt.passed ? 'Passed!' : 'Not Passed'}
            </h1>
            
            <div className="text-6xl font-bold mb-4">
              <span className={attempt.passed ? 'text-green-600' : 'text-red-600'}>
                {attempt.score}%
              </span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              {attempt.passed 
                ? `Congratulations! You scored above the passing threshold of ${assessment.passingScore}%.`
                : `You scored below the passing threshold of ${assessment.passingScore}%. You can retake this assessment.`
              }
            </p>
          </div>

          {/* Results Summary */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-6 text-center">
              <div className="text-2xl font-bold dark:text-white">{attempt.answers.filter(a => a.isCorrect).length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Correct Answers</div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-6 text-center">
              <div className="text-2xl font-bold dark:text-white">{attempt.timeSpent}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Minutes Used</div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-6 text-center">
              <div className="text-2xl font-bold dark:text-white">
                {assessment.maxAttempts - 1}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Attempts Remaining</div>
            </div>
          </div>

          {/* Question Review */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-6 mb-8">
            <h2 className="text-xl font-bold dark:text-white mb-6">Question Review</h2>
            <div className="space-y-6">
              {assessment.questions.map((question, index) => {
                const answer = attempt.answers.find(a => a.questionId === question.id)
                return (
                  <div key={question.id} className="border-b dark:border-gray-600 pb-6 last:border-b-0">
                    <div className="flex items-start space-x-3 mb-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                        answer?.isCorrect ? 'bg-green-600' : 'bg-red-600'
                      }`}>
                        {answer?.isCorrect ? '✓' : '✗'}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold dark:text-white mb-2">
                          Question {index + 1}: {question.question}
                        </h3>
                        
                        {question.type === 'multiple_choice' && question.options && (
                          <div className="space-y-2">
                            {question.options.map((option, optionIndex) => {
                              const isUserAnswer = Array.isArray(answer?.answer) 
                                ? answer?.answer.includes(option)
                                : answer?.answer === option
                              const isCorrect = Array.isArray(question.correctAnswer)
                                ? question.correctAnswer.includes(option)
                                : question.correctAnswer === option
                              
                              return (
                                <div 
                                  key={optionIndex}
                                  className={`p-2 rounded border ${
                                    isCorrect ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' :
                                    isUserAnswer ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800' :
                                    'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                                  }`}
                                >
                                  <div className="flex items-center space-x-2">
                                    {isCorrect && <CheckCircle className="w-4 h-4 text-green-600" />}
                                    {isUserAnswer && !isCorrect && <XCircle className="w-4 h-4 text-red-600" />}
                                    <span className="dark:text-white">{option}</span>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        )}
                        
                        {question.explanation && (
                          <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
                            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">Explanation:</h4>
                            <p className="text-blue-700 dark:text-blue-300 text-sm">{question.explanation}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => window.print()}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Print Results
            </button>
            {!attempt.passed && assessment.maxAttempts > 1 && (
              <button
                onClick={() => window.location.reload()}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <RefreshCw className="w-5 h-5 inline mr-2" />
                Retake Assessment
              </button>
            )}
            <button
              onClick={onExit}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Continue Course
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="border-b dark:border-gray-700 bg-white dark:bg-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={onExit}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="font-semibold text-lg dark:text-white">{assessment.title}</h1>
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Timer */}
              <div className={`flex items-center space-x-2 px-3 py-1 rounded-lg ${
                timeRemaining < 300 ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200' :
                timeRemaining < 900 ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' :
                'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}>
                <Clock className="w-4 h-4" />
                <span className="font-mono font-semibold">
                  {formatTime(timeRemaining)}
                </span>
              </div>

              {/* Pause/Resume */}
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                title={isPaused ? 'Resume' : 'Pause'}
              >
                {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
              </button>

              {/* Submit Button */}
              <button
                onClick={() => setShowConfirmSubmit(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Submit Assessment
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Question Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-6 sticky top-24">
              <h2 className="font-semibold text-lg dark:text-white mb-4">Questions</h2>
              <div className="grid grid-cols-5 lg:grid-cols-4 gap-2 mb-6">
                {assessment.questions.map((question, index) => {
                  const status = getQuestionStatus(question.id)
                  const isFlagged = flaggedQuestions.has(question.id)
                  
                  return (
                    <button
                      key={question.id}
                      onClick={() => navigateToQuestion(index)}
                      className={`relative w-10 h-10 rounded text-sm font-semibold transition-colors ${
                        index === currentQuestionIndex 
                          ? 'bg-blue-600 text-white'
                          : status === 'answered'
                          ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {index + 1}
                      {isFlagged && (
                        <Flag className="absolute -top-1 -right-1 w-3 h-3 text-red-600" />
                      )}
                    </button>
                  )
                })}
              </div>
              
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <div>Answered: {getAnsweredCount()} of {totalQuestions}</div>
                <div>Flagged: {flaggedQuestions.size}</div>
              </div>
            </div>
          </div>

          {/* Main Question Area */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-8">
              {/* Question Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold dark:text-white mb-2">
                    Question {currentQuestionIndex + 1} of {totalQuestions}
                  </h2>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <span>Points: {currentQuestion.points}</span>
                    <span>Type: {currentQuestion.type.replace('_', ' ')}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => toggleFlag(currentQuestion.id)}
                  className={`p-2 rounded-lg transition-colors ${
                    flaggedQuestions.has(currentQuestion.id)
                      ? 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                  title="Flag for review"
                >
                  <Flag className="w-5 h-5" />
                </button>
              </div>

              {/* Question Content */}
              <div className="mb-8">
                <p className="text-lg dark:text-white mb-6">
                  {currentQuestion.question}
                </p>

                {/* Answer Options */}
                {currentQuestion.type === 'multiple_choice' && currentQuestion.options && (
                  <div className="space-y-3">
                    {currentQuestion.options.map((option, index) => {
                      const isSelected = Array.isArray(answers[currentQuestion.id])
                        ? (answers[currentQuestion.id] as string[]).includes(option)
                        : answers[currentQuestion.id] === option
                      
                      return (
                        <label
                          key={index}
                          className={`flex items-center p-4 rounded-lg border cursor-pointer transition-colors ${
                            isSelected
                              ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
                              : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
                          }`}
                        >
                          <input
                            type="radio"
                            name={`question-${currentQuestion.id}`}
                            value={option}
                            checked={isSelected}
                            onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
                            className="mr-3 w-4 h-4 text-blue-600"
                          />
                          <span className="dark:text-white">{option}</span>
                        </label>
                      )
                    })}
                  </div>
                )}

                {currentQuestion.type === 'true_false' && (
                  <div className="space-y-3">
                    {['True', 'False'].map((option) => (
                      <label
                        key={option}
                        className={`flex items-center p-4 rounded-lg border cursor-pointer transition-colors ${
                          answers[currentQuestion.id] === option
                            ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
                            : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${currentQuestion.id}`}
                          value={option}
                          checked={answers[currentQuestion.id] === option}
                          onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
                          className="mr-3 w-4 h-4 text-blue-600"
                        />
                        <span className="dark:text-white">{option}</span>
                      </label>
                    ))}
                  </div>
                )}

                {(currentQuestion.type === 'short_answer' || currentQuestion.type === 'essay') && (
                  <textarea
                    value={answers[currentQuestion.id] as string || ''}
                    onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
                    placeholder="Enter your answer..."
                    rows={currentQuestion.type === 'essay' ? 8 : 3}
                    className="w-full p-4 border dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white resize-none"
                  />
                )}
              </div>

              {/* Navigation */}
              <div className="flex justify-between">
                <button
                  onClick={() => navigateToQuestion(currentQuestionIndex - 1)}
                  disabled={currentQuestionIndex === 0}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg border dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
                
                <button
                  onClick={() => navigateToQuestion(currentQuestionIndex + 1)}
                  disabled={currentQuestionIndex === totalQuestions - 1}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg border dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold dark:text-white mb-4">Submit Assessment?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              You have answered {getAnsweredCount()} of {totalQuestions} questions. 
              {getAnsweredCount() < totalQuestions && ' Unanswered questions will be marked as incorrect.'}
              <br /><br />
              Time remaining: {formatTime(timeRemaining)}
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowConfirmSubmit(false)}
                className="flex-1 px-4 py-2 border dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowConfirmSubmit(false)
                  handleSubmit()
                }}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pause Overlay */}
      {isPaused && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
            <Pause className="w-16 h-16 text-gray-600 dark:text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold dark:text-white mb-2">Assessment Paused</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Your progress has been saved. Click resume to continue.
            </p>
            <button
              onClick={() => setIsPaused(false)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Play className="w-5 h-5 inline mr-2" />
              Resume Assessment
            </button>
          </div>
        </div>
      )}
    </div>
  )
}