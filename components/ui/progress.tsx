import React from 'react'

interface ProgressProps {
  value: number
  max?: number
  className?: string
}

export function Progress({ value, max = 100, className = '' }: ProgressProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))
  
  return (
    <div className={`relative w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-800 ${className}`}>
      <div
        className="h-full w-full flex-1 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-in-out"
        style={{ transform: `translateX(-${100 - percentage}%)` }}
      />
    </div>
  )
}