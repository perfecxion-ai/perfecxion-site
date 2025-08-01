'use client'

import { useState } from 'react'
import { Copy, Check, Download, Share2, Maximize2 } from 'lucide-react'

interface CodeToolbarProps {
  code: string
  language: string
  filename?: string
  onFullscreen?: () => void
}

export default function CodeToolbar({ code, language, filename, onFullscreen }: CodeToolbarProps) {
  const [copied, setCopied] = useState(false)
  const [shared, setShared] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename || `code.${language}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: filename || 'Code snippet',
          text: code,
        })
        setShared(true)
        setTimeout(() => setShared(false), 2000)
      } catch (err) {
        // User cancelled or share failed
      }
    } else {
      // Fallback to copy
      handleCopy()
    }
  }

  const languageLabels: Record<string, string> = {
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    python: 'Python',
    bash: 'Bash',
    json: 'JSON',
    yaml: 'YAML',
    css: 'CSS',
    html: 'HTML',
    jsx: 'JSX',
    tsx: 'TSX',
  }

  return (
    <div className="flex items-center justify-between px-3 py-2 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-800 rounded-t-lg">
      <div className="flex items-center gap-3">
        {filename && (
          <span className="text-sm text-gray-300 font-mono truncate max-w-[150px]">
            {filename}
          </span>
        )}
        <span className="text-xs px-2 py-0.5 bg-gray-700 dark:bg-gray-800 text-gray-400 rounded">
          {languageLabels[language] || language}
        </span>
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={handleCopy}
          className="p-2 rounded text-gray-400 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
          aria-label="Copy code"
          title="Copy code"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-400" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>

        <button
          onClick={handleDownload}
          className="p-2 rounded text-gray-400 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center hidden sm:flex"
          aria-label="Download code"
          title="Download code"
        >
          <Download className="h-4 w-4" />
        </button>

        {navigator.share && (
          <button
            onClick={handleShare}
            className="p-2 rounded text-gray-400 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center lg:hidden"
            aria-label="Share code"
            title="Share code"
          >
            {shared ? (
              <Check className="h-4 w-4 text-green-400" />
            ) : (
              <Share2 className="h-4 w-4" />
            )}
          </button>
        )}

        {onFullscreen && (
          <button
            onClick={onFullscreen}
            className="p-2 rounded text-gray-400 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center lg:hidden"
            aria-label="View fullscreen"
            title="View fullscreen"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  )
}