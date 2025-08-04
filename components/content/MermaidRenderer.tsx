'use client'

import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

interface MermaidRendererProps {
  chart: string
  id: string
}

export default function MermaidRenderer({ chart, id }: MermaidRendererProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      mermaid.initialize({ 
        startOnLoad: true,
        theme: 'default',
        themeVariables: {
          primaryColor: '#3b82f6',
          primaryTextColor: '#1f2937',
          primaryBorderColor: '#3b82f6',
          lineColor: '#6b7280',
          secondaryColor: '#e5e7eb',
          tertiaryColor: '#f3f4f6',
          background: '#ffffff',
          mainBkg: '#ffffff',
          secondBkg: '#f3f4f6',
          tertiaryBkg: '#e5e7eb',
          darkMode: false
        }
      })
      
      try {
        mermaid.render(`mermaid-${id}`, chart).then(({ svg }) => {
          if (ref.current) {
            ref.current.innerHTML = svg
          }
        })
      } catch (error) {
        console.error('Mermaid rendering error:', error)
        if (ref.current) {
          ref.current.innerHTML = `<pre style="color: red;">Error rendering diagram: ${error}</pre>`
        }
      }
    }
  }, [chart, id])

  return (
    <div className="mermaid-container my-6 flex justify-center">
      <div ref={ref} className="mermaid" />
    </div>
  )
}