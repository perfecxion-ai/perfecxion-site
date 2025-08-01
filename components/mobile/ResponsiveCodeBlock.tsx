'use client'

import { useState, useRef, useEffect } from 'react'
import { Copy, Check, ChevronDown, ChevronUp, Maximize2, Minimize2 } from 'lucide-react'

interface ResponsiveCodeBlockProps {
  children: string
  language?: string
  filename?: string
  showLineNumbers?: boolean
  collapsible?: boolean
  maxHeight?: number
  className?: string
}

export default function ResponsiveCodeBlock({
  children,
  language = 'text',
  filename,
  showLineNumbers = true,
  collapsible = false,
  maxHeight = 400,
  className = ''
}: ResponsiveCodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(collapsible)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const codeRef = useRef<HTMLPreElement>(null)
  const [hasOverflow, setHasOverflow] = useState(false)

  useEffect(() => {
    const checkOverflow = () => {
      if (codeRef.current) {
        const { scrollHeight, clientHeight } = codeRef.current
        setHasOverflow(scrollHeight > clientHeight)
      }
    }

    checkOverflow()
    window.addEventListener('resize', checkOverflow)
    return () => window.removeEventListener('resize', checkOverflow)
  }, [children])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lines = children.split('\n')
  const lineCount = lines.length

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
    if (!isFullscreen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <>
      <div className={`relative group ${className}`}>
        {/* Code toolbar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-2 bg-gray-900 dark:bg-gray-950 border-b border-gray-800 dark:border-gray-700 rounded-t-lg">
          <div className="flex items-center gap-3">
            {filename && (
              <span className="text-sm text-gray-400 font-mono">{filename}</span>
            )}
            {language && language !== 'text' && (
              <span className="text-xs px-2 py-0.5 bg-gray-800 dark:bg-gray-800 text-gray-400 rounded">
                {language}
              </span>
            )}
            {lineCount > 10 && (
              <span className="text-xs text-gray-500">{lineCount} lines</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {collapsible && (
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="p-1.5 rounded text-gray-400 hover:text-white hover:bg-gray-800 transition-colors min-w-[32px] min-h-[32px] flex items-center justify-center lg:min-w-[28px] lg:min-h-[28px]"
                aria-label={isCollapsed ? 'Expand code' : 'Collapse code'}
              >
                {isCollapsed ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronUp className="h-4 w-4" />
                )}
              </button>
            )}

            <button
              onClick={toggleFullscreen}
              className="p-1.5 rounded text-gray-400 hover:text-white hover:bg-gray-800 transition-colors min-w-[32px] min-h-[32px] flex items-center justify-center lg:hidden"
              aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            >
              {isFullscreen ? (
                <Minimize2 className="h-4 w-4" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
            </button>

            <button
              onClick={handleCopy}
              className="p-1.5 rounded text-gray-400 hover:text-white hover:bg-gray-800 transition-colors min-w-[32px] min-h-[32px] flex items-center justify-center lg:min-w-[28px] lg:min-h-[28px]"
              aria-label="Copy code"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-400" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Code content */}
        <pre
          ref={codeRef}
          className={`
            bg-gray-900 dark:bg-gray-950 text-gray-100 
            overflow-x-auto overflow-y-auto
            text-sm leading-relaxed font-mono
            ${showLineNumbers ? 'pl-12' : 'pl-4'}
            pr-4 py-4 rounded-b-lg
            ${isCollapsed ? 'max-h-[100px]' : ''}
            ${!isCollapsed && !isFullscreen ? `max-h-[${maxHeight}px]` : ''}
          `}
          style={{
            maxHeight: isCollapsed ? '100px' : isFullscreen ? '80vh' : `${maxHeight}px`,
            tabSize: 2,
            scrollbarWidth: 'thin',
            scrollbarColor: '#374151 #111827'
          }}
        >
          {showLineNumbers && (
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gray-800/50 dark:bg-gray-900/50 text-gray-500 text-right pr-3 pt-4 select-none">
              {lines.map((_, i) => (
                <div key={i} className="leading-relaxed">
                  {i + 1}
                </div>
              ))}
            </div>
          )}
          <code className="block">{children}</code>
        </pre>

        {/* Overflow indicator */}
        {hasOverflow && !isCollapsed && !isFullscreen && (
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none rounded-b-lg" />
        )}
      </div>

      {/* Fullscreen overlay */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/90 lg:hidden">
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between p-4 bg-gray-900">
              <span className="text-white font-medium">{filename || 'Code'}</span>
              <button
                onClick={toggleFullscreen}
                className="p-2 rounded text-gray-400 hover:text-white hover:bg-gray-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Exit fullscreen"
              >
                <Minimize2 className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4">
              <pre className="text-gray-100 text-sm font-mono">{children}</pre>
            </div>
          </div>
        </div>
      )}
    </>
  )
}