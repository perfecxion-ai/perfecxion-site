'use client'

import { useState, useRef, useEffect } from 'react'
import { Copy, Check, ChevronDown, ChevronUp, Maximize2, Minimize2 } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface ResponsiveCodeBlockProps {
  code: string
  language: string
  filename?: string
  showLineNumbers?: boolean
  maxHeight?: number
  collapsible?: boolean
  className?: string
}

export default function ResponsiveCodeBlock({
  code,
  language,
  filename,
  showLineNumbers = true,
  maxHeight = 400,
  collapsible = true,
  className = ''
}: ResponsiveCodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const codeRef = useRef<HTMLDivElement>(null)
  const [codeHeight, setCodeHeight] = useState(0)

  useEffect(() => {
    if (codeRef.current) {
      setCodeHeight(codeRef.current.scrollHeight)
    }
  }, [code])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
    if (!isFullscreen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  const shouldShowCollapse = collapsible && codeHeight > maxHeight

  return (
    <>
      <div
        className={`
          relative group rounded-lg overflow-hidden bg-gray-900 dark:bg-gray-950 
          ${isFullscreen ? 'fixed inset-0 z-50 m-0' : ''}
          ${className}
        `}
      >
        {/* Code toolbar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-2 bg-gray-800 dark:bg-gray-900 border-b border-gray-700 dark:border-gray-800">
          <div className="flex items-center gap-2">
            {filename && (
              <span className="text-sm text-gray-400 font-mono">{filename}</span>
            )}
            <span className="text-xs text-gray-500 uppercase">{language}</span>
          </div>
          
          <div className="flex items-center gap-2">
            {shouldShowCollapse && !isFullscreen && (
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="p-1.5 rounded hover:bg-gray-700 transition-colors"
                aria-label={isCollapsed ? 'Expand code' : 'Collapse code'}
              >
                {isCollapsed ? (
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                ) : (
                  <ChevronUp className="w-4 h-4 text-gray-400" />
                )}
              </button>
            )}
            
            <button
              onClick={toggleFullscreen}
              className="p-1.5 rounded hover:bg-gray-700 transition-colors lg:opacity-0 lg:group-hover:opacity-100"
              aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            >
              {isFullscreen ? (
                <Minimize2 className="w-4 h-4 text-gray-400" />
              ) : (
                <Maximize2 className="w-4 h-4 text-gray-400" />
              )}
            </button>
            
            <button
              onClick={handleCopy}
              className="p-1.5 rounded hover:bg-gray-700 transition-colors"
              aria-label="Copy code"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* Code content */}
        <div
          ref={codeRef}
          className={`
            overflow-x-auto overflow-y-auto
            ${isFullscreen ? 'h-[calc(100vh-48px)]' : ''}
            ${!isFullscreen && shouldShowCollapse && isCollapsed ? 'max-h-32' : ''}
            ${!isFullscreen && !isCollapsed ? `max-h-[${maxHeight}px]` : ''}
          `}
          style={{
            maxHeight: !isFullscreen && !isCollapsed ? `${maxHeight}px` : undefined
          }}
        >
          <div className="min-w-0">
            <SyntaxHighlighter
              language={language}
              style={vscDarkPlus}
              showLineNumbers={showLineNumbers}
              customStyle={{
                margin: 0,
                padding: '1rem',
                background: 'transparent',
                fontSize: '14px',
                lineHeight: '1.5'
              }}
              codeTagProps={{
                className: 'text-sm md:text-base'
              }}
              lineNumberStyle={{
                minWidth: '3em',
                paddingRight: '1em',
                color: '#6b7280',
                userSelect: 'none'
              }}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        </div>

        {/* Collapse gradient */}
        {shouldShowCollapse && isCollapsed && !isFullscreen && (
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
        )}
      </div>

      {/* Fullscreen backdrop */}
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleFullscreen}
        />
      )}
    </>
  )
}