'use client'

import { useState, useEffect } from 'react'
import { Copy, Check } from 'lucide-react'
import ResponsiveCodeBlock from './mobile/ResponsiveCodeBlock'

interface CodeBlockProps {
  children: string
  language?: string
  filename?: string
  className?: string
}

export default function CodeBlock({ children, language = 'text', filename, className = '' }: CodeBlockProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Use responsive code block on mobile
  if (isMobile) {
    return (
      <ResponsiveCodeBlock
        language={language}
        filename={filename}
        showLineNumbers={true}
        className={className}
      >
        {children}
      </ResponsiveCodeBlock>
    )
  }

  // Desktop version
  return (
    <div className="relative group">
      <pre className={`bg-gray-900 dark:bg-gray-950 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed ${className}`}>
        <code className="font-mono">{children}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
    </div>
  )
}