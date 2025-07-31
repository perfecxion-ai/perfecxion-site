'use client'

import { Download, ArrowRight } from 'lucide-react'

interface DownloadButtonProps {
  href: string
  variant?: 'primary' | 'link'
  className?: string
  children?: React.ReactNode
}

export default function DownloadButton({ href, variant = 'primary', className = '', children }: DownloadButtonProps) {
  if (variant === 'primary') {
    return (
      <a
        href={href}
        className={`inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium text-sm ${className}`}
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        <Download className="mr-2 h-4 w-4" />
        {children || 'Download PDF'}
      </a>
    )
  }

  return (
    <a
      href={href}
      className={`inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm ${className}`}
      download
      target="_blank"
      rel="noopener noreferrer"
    >
      {children || 'Download'} <ArrowRight className="ml-1 h-3 w-3" />
    </a>
  )
}