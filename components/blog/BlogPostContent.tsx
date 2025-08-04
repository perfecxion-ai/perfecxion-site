'use client'

import { useMermaid } from '@/hooks/useMermaid'
import { useEffect } from 'react'

export default function BlogPostContent({ children }: { children: React.ReactNode }) {
  useMermaid()
  
  // Add fade-in effect once Mermaid diagrams are rendered
  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.add('mermaid-ready')
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <div className="blog-post-content">
      {children}
    </div>
  )
}