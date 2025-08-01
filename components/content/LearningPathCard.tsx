'use client'

import Link from 'next/link'
import { Clock, BookOpen, CheckCircle, Users, Star, ChevronRight } from 'lucide-react'
import { LearningPath } from '@/lib/content-types'

interface LearningPathCardProps {
  path: LearningPath
}

export default function LearningPathCard({ path }: LearningPathCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
      case 'advanced': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
    }
  }

  const totalSections = path.sections.length
  const requiredSections = path.sections.filter(section => section.required).length
  const totalMinutes = path.sections.reduce((sum, section) => sum + section.estimatedMinutes, 0)

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow group">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getDifficultyColor(path.difficulty)}`}>
              {path.difficulty}
            </span>
            {path.featured && (
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
            )}
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <Clock className="h-4 w-4" />
            {path.estimatedDuration}
          </div>
        </div>

        {/* Title and Description */}
        <Link href={`/learn/paths/${path.id}`} className="group">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-2">
            {path.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
          {path.description}
        </p>

        {/* Prerequisites */}
        {path.prerequisites && path.prerequisites.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
              Prerequisites:
            </p>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              {path.prerequisites.join(', ')}
            </div>
          </div>
        )}

        {/* Learning Outcomes */}
        <div className="mb-4">
          <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
            What you'll learn:
          </p>
          <div className="space-y-1">
            {path.outcomes.slice(0, 3).map((outcome, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                  {outcome}
                </span>
              </div>
            ))}
            {path.outcomes.length > 3 && (
              <p className="text-xs text-gray-500 dark:text-gray-500 ml-5">
                +{path.outcomes.length - 3} more outcomes
              </p>
            )}
          </div>
        </div>

        {/* Progress/Stats */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              <span>{totalSections} sections</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{Math.floor(totalMinutes / 60)}h {totalMinutes % 60}m</span>
            </div>
          </div>
          
          <Link
            href={`/learn/paths/${path.id}`}
            className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors group"
          >
            Start Learning
            <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Progress Bar (if user has progress) */}
      <div className="bg-gray-50 dark:bg-gray-700/50 px-6 py-3">
        <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
          <span>Progress</span>
          <span>0% complete</span>
        </div>
        <div className="mt-1 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
          <div 
            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
            style={{ width: '0%' }}
          />
        </div>
      </div>
    </div>
  )
}