import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

// Custom components for MDX rendering
export const mdxComponents = {
  // Headings
  h1: ({ children }: { children: ReactNode }) => (
    <h1 className="text-4xl font-bold mt-8 mb-4 text-foreground">{children}</h1>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <h2 className="text-3xl font-semibold mt-8 mb-4 text-foreground">{children}</h2>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <h3 className="text-2xl font-semibold mt-6 mb-3 text-foreground">{children}</h3>
  ),
  h4: ({ children }: { children: ReactNode }) => (
    <h4 className="text-xl font-semibold mt-6 mb-3 text-foreground">{children}</h4>
  ),
  h5: ({ children }: { children: ReactNode }) => (
    <h5 className="text-lg font-semibold mt-4 mb-2 text-foreground">{children}</h5>
  ),
  h6: ({ children }: { children: ReactNode }) => (
    <h6 className="text-base font-semibold mt-4 mb-2 text-foreground">{children}</h6>
  ),
  
  // Paragraphs and text
  p: ({ children }: { children: ReactNode }) => (
    <p className="mb-4 leading-relaxed text-foreground">{children}</p>
  ),
  
  // Lists
  ul: ({ children }: { children: ReactNode }) => (
    <ul className="list-disc list-inside mb-4 space-y-2 pl-4">{children}</ul>
  ),
  ol: ({ children }: { children: ReactNode }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 pl-4">{children}</ol>
  ),
  li: ({ children }: { children: ReactNode }) => (
    <li className="text-foreground">{children}</li>
  ),
  
  // Links
  a: ({ href, children }: { href?: string; children: ReactNode }) => {
    const isInternal = href && (href.startsWith('/') || href.startsWith('#'))
    
    if (isInternal) {
      return (
        <Link href={href} className="text-blue-600 dark:text-blue-400 hover:underline">
          {children}
        </Link>
      )
    }
    
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        {children}
      </a>
    )
  },
  
  // Code blocks
  pre: ({ children }: { children: ReactNode }) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm">
      {children}
    </pre>
  ),
  code: ({ children }: { children: ReactNode }) => (
    <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">
      {children}
    </code>
  ),
  
  // Blockquotes
  blockquote: ({ children }: { children: ReactNode }) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">
      {children}
    </blockquote>
  ),
  
  // Tables
  table: ({ children }: { children: ReactNode }) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full divide-y divide-border">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }: { children: ReactNode }) => (
    <thead className="bg-muted">{children}</thead>
  ),
  tbody: ({ children }: { children: ReactNode }) => (
    <tbody className="divide-y divide-border">{children}</tbody>
  ),
  tr: ({ children }: { children: ReactNode }) => (
    <tr>{children}</tr>
  ),
  th: ({ children }: { children: ReactNode }) => (
    <th className="px-4 py-2 text-left font-semibold text-foreground">{children}</th>
  ),
  td: ({ children }: { children: ReactNode }) => (
    <td className="px-4 py-2 text-foreground">{children}</td>
  ),
  
  // Horizontal rule
  hr: () => <hr className="my-8 border-border" />,
  
  // Strong and emphasis
  strong: ({ children }: { children: ReactNode }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  em: ({ children }: { children: ReactNode }) => (
    <em className="italic">{children}</em>
  ),
  
  // Images
  img: ({ src, alt }: { src?: string; alt?: string }) => {
    if (!src) return null
    return (
      <div className="my-4">
        <img
          src={src}
          alt={alt || ''}
          className="rounded-lg max-w-full h-auto"
        />
      </div>
    )
  },
}