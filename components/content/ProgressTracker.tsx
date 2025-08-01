'use client'

import { useState, useEffect } from 'react'
import { CheckCircle, Clock, BookOpen, Trophy, Star } from 'lucide-react'

interface ProgressTrackerProps {
  userId?: string
  contentId: string
  totalSections: number
  completedSections: number
  estimatedMinutes: number
  difficulty: 'beginner' | 'intermediate' | 'advanced'
}

export default function ProgressTracker({ 
  userId = 'guest',
  contentId,
  totalSections,
  completedSections,
  estimatedMinutes,
  difficulty
}: ProgressTrackerProps) {
  const [progress, setProgress] = useState({
    completed: completedSections,
    total: totalSections,
    percentage: Math.round((completedSections / totalSections) * 100),
    timeSpent: 0,
    lastAccessed: new Date().toISOString()
  })

  const [achievements, setAchievements] = useState<string[]>([])

  useEffect(() => {
    // Load user progress from localStorage or API
    const savedProgress = localStorage.getItem(`progress_${contentId}_${userId}`)
    if (savedProgress) {
      const parsed = JSON.parse(savedProgress)
      setProgress(parsed)
    }

    // Check for achievements
    checkAchievements()
  }, [contentId, userId])

  const checkAchievements = () => {
    const newAchievements: string[] = []
    
    if (progress.percentage === 100) {
      newAchievements.push('Course Complete')
    }
    
    if (progress.percentage >= 50 && difficulty === 'advanced') {
      newAchievements.push('Advanced Learner')
    }
    
    if (progress.timeSpent > estimatedMinutes) {
      newAchievements.push('Dedicated Student')
    }
    
    setAchievements(newAchievements)
  }

  const updateProgress = (sectionIndex: number) => {
    const newCompleted = Math.max(progress.completed, sectionIndex + 1)
    const newPercentage = Math.round((newCompleted / totalSections) * 100)
    
    const updatedProgress = {
      ...progress,
      completed: newCompleted,
      percentage: newPercentage,
      lastAccessed: new Date().toISOString()
    }
    
    setProgress(updatedProgress)
    
    // Save to localStorage
    localStorage.setItem(
      `progress_${contentId}_${userId}`, 
      JSON.stringify(updatedProgress)
    )
    
    checkAchievements()
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600 dark:text-green-400'
      case 'intermediate': return 'text-yellow-600 dark:text-yellow-400'
      case 'advanced': return 'text-red-600 dark:text-red-400'
      default: return 'text-gray-600 dark:text-gray-400'
    }
  }

  const getProgressColor = (percentage: number) => {
    if (percentage >= 100) return 'bg-green-500'
    if (percentage >= 75) return 'bg-blue-500'  
    if (percentage >= 50) return 'bg-yellow-500'
    return 'bg-gray-500'
  }

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Your Progress
        </h3>
        {progress.percentage === 100 && (
          <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
            <Trophy className="h-4 w-4" />
            <span className="text-sm font-medium">Complete!</span>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
          <span>{progress.completed} of {totalSections} sections</span>
          <span>{progress.percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(progress.percentage)}`}
            style={{ width: `${progress.percentage}%` }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 text-gray-500 dark:text-gray-400 mb-1">
            <Clock className="h-4 w-4" />
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Est. {estimatedMinutes} min
          </div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-1 text-gray-500 dark:text-gray-400 mb-1">
            <BookOpen className="h-4 w-4" />
          </div>
          <div className={`text-sm font-medium ${getDifficultyColor(difficulty)}`}>
            {difficulty}
          </div>
        </div>
      </div>

      {/* Section Checklist */}
      <div className="space-y-2 mb-4">
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Sections
        </h4>
        {Array.from({ length: totalSections }, (_, index) => (
          <div 
            key={index}
            className={`flex items-center gap-2 p-2 rounded transition-colors ${
              index < progress.completed 
                ? 'bg-green-50 dark:bg-green-900/20' 
                : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
            }`}
          >
            <CheckCircle 
              className={`h-4 w-4 ${
                index < progress.completed 
                  ? 'text-green-600 dark:text-green-400' 
                  : 'text-gray-300 dark:text-gray-600'
              }`}
            />
            <span className={`text-sm ${
              index < progress.completed 
                ? 'text-green-700 dark:text-green-300 line-through' 
                : 'text-gray-600 dark:text-gray-400'
            }`}>
              Section {index + 1}
            </span>
          </div>
        ))}
      </div>

      {/* Achievements */}
      {achievements.length > 0 && (
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Achievements
          </h4>
          <div className="flex flex-wrap gap-2">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300 rounded-full text-xs"
              >
                <Star className="h-3 w-3" />
                {achievement}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Button */}
      <div className="mt-4">
        {progress.percentage === 100 ? (
          <button
            onClick={() => window.open('/learn', '_blank')}
            className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm font-medium"
          >
            Explore More Content
          </button>
        ) : (
          <button
            onClick={() => updateProgress(progress.completed)}
            className="w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors text-sm font-medium"
          >
            Mark Next Section Complete
          </button>
        )}
      </div>
    </div>
  )
}