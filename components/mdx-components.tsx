import Image from 'next/image'
import Link from 'next/link'
import { MDXComponents } from 'mdx/types'

// Custom components for MDX rendering
export const mdxComponents: MDXComponents = {
  // Headings
  h1: (props) => (
    <h1 className="text-4xl font-bold mt-8 mb-4 text-foreground" {...props} />
  ),
  h2: (props) => (
    <h2 className="text-3xl font-semibold mt-8 mb-4 text-foreground" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-2xl font-semibold mt-6 mb-3 text-foreground" {...props} />
  ),
  h4: (props) => (
    <h4 className="text-xl font-semibold mt-6 mb-3 text-foreground" {...props} />
  ),
  h5: (props) => (
    <h5 className="text-lg font-semibold mt-4 mb-2 text-foreground" {...props} />
  ),
  h6: (props) => (
    <h6 className="text-base font-semibold mt-4 mb-2 text-foreground" {...props} />
  ),
  
  // Paragraphs and text
  p: (props) => (
    <p className="mb-4 leading-relaxed text-foreground" {...props} />
  ),
  
  // Lists
  ul: (props) => (
    <ul className="list-disc list-inside mb-4 space-y-2 pl-4" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 pl-4" {...props} />
  ),
  li: (props) => (
    <li className="text-foreground" {...props} />
  ),
  
  // Links
  a: (props) => {
    const href = props.href
    const isInternal = href && (href.startsWith('/') || href.startsWith('#'))
    
    if (isInternal) {
      return (
        <Link href={href} className="text-blue-600 dark:text-blue-400 hover:underline">
          {props.children}
        </Link>
      )
    }
    
    return (
      <a 
        {...props}
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 hover:underline"
      />
    )
  },
  
  // Code blocks
  pre: (props) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-sm" {...props} />
  ),
  code: (props) => (
    <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
  ),
  
  // Blockquotes
  blockquote: (props) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground" {...props} />
  ),
  
  // Tables
  table: (props) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full divide-y divide-border" {...props} />
    </div>
  ),
  thead: (props) => (
    <thead className="bg-muted" {...props} />
  ),
  tbody: (props) => (
    <tbody className="divide-y divide-border" {...props} />
  ),
  tr: (props) => (
    <tr {...props} />
  ),
  th: (props) => (
    <th className="px-4 py-2 text-left font-semibold text-foreground" {...props} />
  ),
  td: (props) => (
    <td className="px-4 py-2 text-foreground" {...props} />
  ),
  
  // Horizontal rule
  hr: (props) => <hr className="my-8 border-border" {...props} />,
  
  // Strong and emphasis
  strong: (props) => (
    <strong className="font-semibold" {...props} />
  ),
  em: (props) => (
    <em className="italic" {...props} />
  ),
  
  // Images
  img: (props) => {
    if (!props.src) return null
    return (
      <div className="my-4">
        <img
          {...props}
          className="rounded-lg max-w-full h-auto"
        />
      </div>
    )
  },
}