'use client'

import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

interface MermaidRendererProps {
  chart: string
  id?: string
}

export default function MermaidRenderer({ chart, id }: MermaidRendererProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const renderRef = useRef<boolean>(false)

  useEffect(() => {
    if (!renderRef.current && elementRef.current) {
      renderRef.current = true
      
      mermaid.initialize({
        startOnLoad: true,
        theme: 'default',
        themeVariables: {
          darkMode: false,
          primaryColor: '#3b82f6',
          primaryTextColor: '#fff',
          primaryBorderColor: '#2563eb',
          lineColor: '#6b7280',
          secondaryColor: '#f3f4f6',
          tertiaryColor: '#e5e7eb'
        }
      })

      const renderDiagram = async () => {
        try {
          const graphId = id || `mermaid-${Math.random().toString(36).substr(2, 9)}`
          const { svg } = await mermaid.render(graphId, chart)
          if (elementRef.current) {
            elementRef.current.innerHTML = svg
          }
        } catch (error) {
          console.error('Mermaid rendering error:', error)
          if (elementRef.current) {
            elementRef.current.innerHTML = `<pre>${chart}</pre>`
          }
        }
      }

      renderDiagram()
    }
  }, [chart, id])

  return (
    <div className="my-8 flex justify-center">
      <div 
        ref={elementRef} 
        className="mermaid-diagram"
        // Hide the initial flash by starting with opacity 0
        style={{ opacity: 0, transition: 'opacity 0.3s' }}
        onLoad={() => {
          if (elementRef.current) {
            elementRef.current.style.opacity = '1'
          }
        }}
      />
    </div>
  )
}