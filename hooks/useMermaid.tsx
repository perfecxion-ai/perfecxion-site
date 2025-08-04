'use client'

import { useEffect } from 'react'
import mermaid from 'mermaid'

export function useMermaid() {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
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

    // Find all code blocks with language-mermaid class
    const renderDiagrams = async () => {
      const mermaidCodeBlocks = document.querySelectorAll('pre code.language-mermaid')
      
      for (let i = 0; i < mermaidCodeBlocks.length; i++) {
        const codeBlock = mermaidCodeBlocks[i]
        const pre = codeBlock.parentElement
        
        if (pre && !pre.getAttribute('data-mermaid-rendered')) {
          try {
            const graphDefinition = codeBlock.textContent || ''
            const graphId = `mermaid-${Math.random().toString(36).substr(2, 9)}`
            
            // Create a container for the diagram
            const container = document.createElement('div')
            container.className = 'mermaid-container my-8 flex justify-center'
            
            // Render the diagram
            const { svg } = await mermaid.render(graphId, graphDefinition)
            container.innerHTML = svg
            
            // Replace the pre element with the rendered diagram
            pre.style.display = 'none'
            pre.setAttribute('data-mermaid-rendered', 'true')
            pre.parentNode?.insertBefore(container, pre.nextSibling)
          } catch (error) {
            console.error('Failed to render Mermaid diagram:', error)
          }
        }
      }
    }

    // Run on mount and whenever content changes
    renderDiagrams()

    // Set up a MutationObserver to handle dynamic content
    const observer = new MutationObserver(() => {
      renderDiagrams()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => {
      observer.disconnect()
    }
  }, [])
}