'use client'

import { useState, useMemo } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

interface FoldableSection {
  startLine: number
  endLine: number
  level: number
  type: string
}

interface CodeFoldingProps {
  code: string
  language: string
  onToggleFold?: (lineNumber: number) => void
}

export default function CodeFolding({ code, language }: CodeFoldingProps) {
  const [foldedSections, setFoldedSections] = useState<Set<number>>(new Set())

  // Parse code to find foldable sections
  const foldableSections = useMemo(() => {
    const sections: FoldableSection[] = []
    const lines = code.split('\n')
    const stack: { line: number; type: string; level: number }[] = []

    lines.forEach((line, index) => {
      const lineNum = index + 1
      const trimmed = line.trim()
      const indentLevel = line.length - line.trimStart().length

      // JavaScript/TypeScript patterns
      if (['javascript', 'typescript', 'jsx', 'tsx'].includes(language)) {
        // Functions
        if (trimmed.match(/^(function|const|let|var)\s+\w+\s*=.*{$/) ||
            trimmed.match(/^\w+\s*\(.*\)\s*{$/) ||
            trimmed.match(/^(async\s+)?function\s*\w*\s*\(.*\)\s*{$/)) {
          stack.push({ line: lineNum, type: 'function', level: indentLevel })
        }
        // Classes
        else if (trimmed.match(/^class\s+\w+.*{$/)) {
          stack.push({ line: lineNum, type: 'class', level: indentLevel })
        }
        // Objects
        else if (trimmed.match(/^(const|let|var)?\s*\w+\s*=\s*{$/) ||
                 trimmed.match(/^\w+:\s*{$/)) {
          stack.push({ line: lineNum, type: 'object', level: indentLevel })
        }
        // Arrays
        else if (trimmed.match(/^(const|let|var)?\s*\w+\s*=\s*\[$/) ||
                 trimmed.match(/^\w+:\s*\[$/)) {
          stack.push({ line: lineNum, type: 'array', level: indentLevel })
        }
        // Closing braces
        else if (trimmed === '}' || trimmed === '},' || trimmed === '};' ||
                 trimmed === ']' || trimmed === '],' || trimmed === '];') {
          const opener = stack.pop()
          if (opener && lineNum - opener.line > 2) {
            sections.push({
              startLine: opener.line,
              endLine: lineNum,
              level: opener.level,
              type: opener.type
            })
          }
        }
      }

      // Python patterns
      if (language === 'python') {
        if (trimmed.match(/^(def|class|if|for|while|with|try)\s+.*:$/)) {
          const type = trimmed.split(/\s+/)[0]
          stack.push({ line: lineNum, type, level: indentLevel })
          
          // Find the end of the block
          let endLine = lineNum
          for (let i = index + 1; i < lines.length; i++) {
            const nextLine = lines[i]
            const nextIndent = nextLine.length - nextLine.trimStart().length
            if (nextLine.trim() && nextIndent <= indentLevel) {
              break
            }
            endLine = i + 1
          }
          
          if (endLine - lineNum > 2) {
            sections.push({
              startLine: lineNum,
              endLine,
              level: indentLevel,
              type
            })
          }
        }
      }
    })

    return sections
  }, [code, language])

  const toggleFold = (startLine: number) => {
    setFoldedSections(prev => {
      const next = new Set(prev)
      if (next.has(startLine)) {
        next.delete(startLine)
      } else {
        next.add(startLine)
      }
      return next
    })
  }

  const renderCode = () => {
    const lines = code.split('\n')
    const renderedLines: JSX.Element[] = []
    let skipUntil = 0

    lines.forEach((line, index) => {
      const lineNum = index + 1
      
      if (lineNum <= skipUntil) return

      const foldableSection = foldableSections.find(s => s.startLine === lineNum)
      const isFolded = foldableSection && foldedSections.has(lineNum)

      if (isFolded && foldableSection) {
        // Show folded indicator
        renderedLines.push(
          <div key={lineNum} className="flex">
            <span className="select-none w-12 pr-4 text-gray-500 text-right">
              {lineNum}
            </span>
            <button
              onClick={() => toggleFold(lineNum)}
              className="flex-1 flex items-center gap-1 hover:bg-gray-800 px-2 py-0.5 rounded text-left"
            >
              <ChevronRight className="w-3 h-3 text-gray-500" />
              <span className="text-gray-400 font-mono text-sm">
                {line.trim()} 
                <span className="text-gray-600 ml-2">
                  ... ({foldableSection.endLine - foldableSection.startLine - 1} lines)
                </span>
              </span>
            </button>
          </div>
        )
        skipUntil = foldableSection.endLine
      } else {
        // Show normal line with fold indicator if applicable
        renderedLines.push(
          <div key={lineNum} className="flex group">
            <span className="select-none w-12 pr-4 text-gray-500 text-right">
              {lineNum}
            </span>
            <div className="flex-1 flex items-start">
              {foldableSection && (
                <button
                  onClick={() => toggleFold(lineNum)}
                  className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronDown className="w-3 h-3 text-gray-500 hover:text-gray-300" />
                </button>
              )}
              <pre className="flex-1 font-mono text-sm">
                <code>{line}</code>
              </pre>
            </div>
          </div>
        )
      }
    })

    return renderedLines
  }

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="p-4 overflow-x-auto">
        {renderCode()}
      </div>
    </div>
  )
}