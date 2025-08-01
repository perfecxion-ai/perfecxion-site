'use client'

import { useState } from 'react'
import { Copy, Check, Download, Maximize2, Code2, Terminal } from 'lucide-react'

interface CodeToolbarProps {
  code: string
  language: string
  filename?: string
  onFullscreen?: () => void
  onLanguageChange?: (lang: string) => void
  supportedLanguages?: string[]
}

export default function CodeToolbar({
  code,
  language,
  filename,
  onFullscreen,
  onLanguageChange,
  supportedLanguages = []
}: CodeToolbarProps) {
  const [copied, setCopied] = useState(false)
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
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

  const getLanguageIcon = () => {
    if (['js', 'javascript', 'jsx', 'ts', 'typescript', 'tsx'].includes(language)) {
      return <Code2 className="w-4 h-4" />
    }
    if (['bash', 'sh', 'shell'].includes(language)) {
      return <Terminal className="w-4 h-4" />
    }
    return <Code2 className="w-4 h-4" />
  }

  return (
    <div className="flex items-center justify-between px-3 py-2 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-800 rounded-t-lg">
      <div className="flex items-center gap-3">
        {/* Language indicator */}
        <div className="flex items-center gap-1.5 text-gray-400">
          {getLanguageIcon()}
          <span className="text-sm font-mono">{language}</span>
        </div>

        {/* Filename */}
        {filename && (
          <>
            <span className="text-gray-600">•</span>
            <span className="text-sm text-gray-400 font-mono">{filename}</span>
          </>
        )}

        {/* Language switcher */}
        {supportedLanguages.length > 1 && onLanguageChange && (
          <div className="relative">
            <button
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Switch language
            </button>
            
            {showLanguageMenu && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setShowLanguageMenu(false)}
                />
                <div className="absolute top-full left-0 mt-1 py-1 bg-gray-800 rounded-md shadow-lg border border-gray-700 z-20">
                  {supportedLanguages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        onLanguageChange(lang)
                        setShowLanguageMenu(false)
                      }}
                      className={`
                        block w-full px-3 py-1.5 text-left text-sm
                        ${lang === language ? 'text-blue-400 bg-gray-700' : 'text-gray-300 hover:bg-gray-700'}
                      `}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1">
        {/* Download button */}
        <button
          onClick={handleDownload}
          className="p-1.5 rounded hover:bg-gray-700 transition-colors group"
          aria-label="Download code"
          title="Download code"
        >
          <Download className="w-4 h-4 text-gray-500 group-hover:text-gray-300" />
        </button>

        {/* Fullscreen button */}
        {onFullscreen && (
          <button
            onClick={onFullscreen}
            className="p-1.5 rounded hover:bg-gray-700 transition-colors group"
            aria-label="Fullscreen"
            title="Fullscreen"
          >
            <Maximize2 className="w-4 h-4 text-gray-500 group-hover:text-gray-300" />
          </button>
        )}

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className={`
            p-1.5 rounded transition-all
            ${copied ? 'bg-green-900 hover:bg-green-800' : 'hover:bg-gray-700'}
          `}
          aria-label="Copy code"
          title={copied ? 'Copied!' : 'Copy code'}
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-gray-500 group-hover:text-gray-300" />
          )}
        </button>
      </div>
    </div>
  )
}