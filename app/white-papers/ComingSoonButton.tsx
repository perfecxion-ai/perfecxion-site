'use client'

import { Clock } from 'lucide-react'

interface ComingSoonButtonProps {
  variant?: 'primary' | 'link'
  className?: string
}

export default function ComingSoonButton({ variant = 'primary', className = '' }: ComingSoonButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    alert('This white paper is coming soon! Please check back later.')
  }

  if (variant === 'primary') {
    return (
      <button
        onClick={handleClick}
        className={`inline-flex items-center px-4 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed font-medium text-sm ${className}`}
        disabled
      >
        <Clock className="mr-2 h-4 w-4" />
        Coming Soon
      </button>
    )
  }

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center text-gray-500 dark:text-gray-400 cursor-not-allowed font-medium text-sm ${className}`}
      disabled
    >
      Coming Soon
    </button>
  )
}