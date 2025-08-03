'use client'

import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

interface MermaidDiagramProps {
  chart: string
  className?: string
}

export default function MermaidDiagram({ chart, className = '' }: MermaidDiagramProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (elementRef.current) {
      mermaid.initialize({
        startOnLoad: true,
        theme: 'default',
        securityLevel: 'loose',
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: 14,
        themeVariables: {
          primaryColor: '#3b82f6',
          primaryTextColor: '#1f2937',
          primaryBorderColor: '#3b82f6',
          lineColor: '#6b7280',
          secondaryColor: '#f3f4f6',
          tertiaryColor: '#ffffff',
          errorBkgColor: '#fee2e2',
          errorTextColor: '#dc2626',
          successBkgColor: '#dcfce7',
          successTextColor: '#16a34a',
          warningBkgColor: '#fef3c7',
          warningTextColor: '#d97706',
          infoBkgColor: '#dbeafe',
          infoTextColor: '#2563eb',
        }
      })

      const renderDiagram = async () => {
        try {
          const { svg } = await mermaid.render('mermaid-diagram', chart)
          if (elementRef.current) {
            elementRef.current.innerHTML = svg
          }
        } catch (error) {
          console.error('Error rendering Mermaid diagram:', error)
          if (elementRef.current) {
            elementRef.current.innerHTML = '<div class="text-red-500 p-4 border border-red-200 rounded">Error rendering diagram</div>'
          }
        }
      }

      renderDiagram()
    }
  }, [chart])

  return (
    <div 
      ref={elementRef} 
      className={`mermaid-diagram ${className}`}
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        minHeight: '200px'
      }}
    />
  )
} 