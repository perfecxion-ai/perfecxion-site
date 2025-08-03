'use client'

import React from 'react'
import Link from 'next/link'
import {
  Shield,
  AlertTriangle,
  Lock,
  Eye,
  Cpu,
  Database,
  Network,
  Users,
  CheckCircle,
  XCircle,
  ArrowRight,
  Info,
  AlertCircle,
  Zap,
  Target,
  Brain,
  Layers,
  ShoppingCart,
  Building,
  FileText,
  TrendingUp,
  Wrench,
  Briefcase,
  Bell,
  Cloud,
  GraduationCap,
  ChevronLeft,
  Calendar,
  Clock,
  User,
  Tag,
  Star,
  Lightbulb,
  BookOpen,
  Code,
  GitBranch,
  Settings,
  BarChart3
} from 'lucide-react'
import MermaidDiagram from '@/components/MermaidDiagram'
import MermaidCodeBlock from '@/components/MermaidCodeBlock'

// Alert Box Component
export const AlertBox = ({ type = 'info', title, children }: { type?: 'info' | 'warning' | 'danger' | 'success' | 'tip', title?: string, children: React.ReactNode }) => {
  const styles = {
    info: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-100',
    warning: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-900 dark:text-yellow-100',
    danger: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-900 dark:text-red-100',
    success: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-900 dark:text-green-100',
    tip: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 text-purple-900 dark:text-purple-100'
  }

  const icons = {
    info: <Info className="h-5 w-5" />,
    warning: <AlertTriangle className="h-5 w-5" />,
    danger: <AlertCircle className="h-5 w-5" />,
    success: <CheckCircle className="h-5 w-5" />,
    tip: <Lightbulb className="h-5 w-5" />
  }

  return (
    <div className={`${styles[type]} border-l-4 p-6 rounded-r-lg my-6`}>
      {title && (
        <div className="flex items-center gap-2 mb-3">
          {icons[type]}
          <h4 className="font-semibold text-lg">{title}</h4>
        </div>
      )}
      <div className="prose-sm dark:prose-invert max-w-none">{children}</div>
    </div>
  )
}

// Feature Grid Component
export const FeatureGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
    {children}
  </div>
)

// Feature Card Component
export const FeatureCard = ({ icon, title, children, color = 'blue' }: { icon?: React.ReactNode, title: string, children: React.ReactNode, color?: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'yellow' }) => {
  const colorStyles = {
    blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
    green: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    purple: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
    orange: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800',
    red: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
    yellow: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
  }

  return (
    <div className={`${colorStyles[color]} border rounded-lg p-6 h-full`}>
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="font-semibold text-lg mb-3">{title}</h3>
      <div className="prose-sm dark:prose-invert max-w-none">{children}</div>
    </div>
  )
}

// Stats Box Component
export const StatsBox = ({ stats }: { stats: Array<{ label: string, value: string, icon?: React.ReactNode }> }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
    {stats.map((stat, index) => (
      <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center">
        {stat.icon && <div className="mb-3 flex justify-center">{stat.icon}</div>}
        <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
      </div>
    ))}
  </div>
)

// Comparison Table Component
export const ComparisonTable = ({ headers, rows }: { headers: string[], rows: string[][] }) => (
  <div className="overflow-x-auto my-8">
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead className="bg-gray-50 dark:bg-gray-800">
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800/50' : ''}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

// Code Block with Title
export const CodeBlock = ({ title, language = 'typescript', children }: { title?: string, language?: string, children: string }) => (
  <div className="my-6">
    {title && (
      <div className="bg-gray-800 dark:bg-gray-900 text-white px-4 py-2 rounded-t-lg text-sm font-mono">
        {title}
      </div>
    )}
    <pre className={`language-${language} ${title ? 'rounded-t-none' : 'rounded-lg'}`}>
      <code>{children}</code>
    </pre>
  </div>
)

// Section Header Component
export const SectionHeader = ({ icon, title, subtitle }: { icon?: React.ReactNode, title: string, subtitle?: string }) => (
  <div className="border-l-4 border-primary-500 pl-4 my-8">
    <div className="flex items-center gap-3">
      {icon && <div className="text-primary-600 dark:text-primary-400">{icon}</div>}
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
    </div>
    {subtitle && <p className="text-gray-600 dark:text-gray-400 mt-2">{subtitle}</p>}
  </div>
)

// Timeline Component
export const Timeline = ({ items }: { items: Array<{ date: string, title: string, description: string }> }) => (
  <div className="relative my-8">
    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
    {items.map((item, index) => (
      <div key={index} className="relative pl-10 pb-8">
        <div className="absolute left-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{item.date}</div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.title}</h4>
          <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
)

// Custom pre component to handle Mermaid diagrams
const Pre = ({ children, ...props }: any) => {
  const child = children?.props?.children
  const className = children?.props?.className || ''

  if (className.includes('language-mermaid')) {
    return <MermaidCodeBlock>{child}</MermaidCodeBlock>
  }

  return <pre {...props}>{children}</pre>
}

// Enhanced table component
const Table = ({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
  <div className="overflow-x-auto my-8">
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700" {...props}>
      {children}
    </table>
  </div>
)

const THead = ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <thead className="bg-gray-50 dark:bg-gray-800" {...props}>{children}</thead>
)

const TBody = ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700" {...props}>{children}</tbody>
)

const TR = ({ children, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50" {...props}>{children}</tr>
)

const TH = ({ children, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider" {...props}>
    {children}
  </th>
)

const TD = ({ children, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
  <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100" {...props}>{children}</td>
)

// Enhanced heading components
const H1 = ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 mt-8" {...props}>
    {children}
  </h1>
)

const H2 = ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 mt-8" {...props}>
    {children}
  </h2>
)

const H3 = ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3 mt-6" {...props}>
    {children}
  </h3>
)

const H4 = ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 mt-4" {...props}>
    {children}
  </h4>
)

// Enhanced list components
const UL = ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
  <ul className="space-y-2 my-4" {...props}>{children}</ul>
)

const OL = ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
  <ol className="space-y-2 my-4 list-decimal list-inside" {...props}>{children}</ol>
)

const LI = ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
  <li className="text-gray-700 dark:text-gray-300" {...props}>
    <span className="text-gray-900 dark:text-gray-100">{children}</span>
  </li>
)

// Enhanced paragraph
const P = ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className="text-gray-700 dark:text-gray-300 leading-relaxed my-4" {...props}>{children}</p>
)

// Enhanced blockquote
const Blockquote = ({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
  <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 my-6 italic text-gray-700 dark:text-gray-300" {...props}>
    {children}
  </blockquote>
)

// Export all MDX components
export const mdxComponents = {
  // Basic HTML elements
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  ul: UL,
  ol: OL,
  li: LI,
  table: Table,
  thead: THead,
  tbody: TBody,
  tr: TR,
  th: TH,
  td: TD,
  blockquote: Blockquote,
  pre: Pre,
  
  // Custom components
  AlertBox,
  FeatureGrid,
  FeatureCard,
  StatsBox,
  ComparisonTable,
  CodeBlock,
  SectionHeader,
  Timeline,
  
  // Icons
  Shield,
  AlertTriangle,
  Lock,
  Eye,
  Cpu,
  Database,
  Network,
  Users,
  CheckCircle,
  XCircle,
  ArrowRight,
  Info,
  AlertCircle,
  Zap,
  Target,
  Brain,
  Layers,
  ShoppingCart,
  Building,
  FileText,
  TrendingUp,
  Wrench,
  Briefcase,
  Bell,
  Cloud,
  GraduationCap,
  ChevronLeft,
  Calendar,
  Clock,
  User,
  Tag,
  Star,
  Lightbulb,
  BookOpen,
  Code,
  GitBranch,
  Settings,
  BarChart3,
  
  // Next.js components
  Link,
  
  // Mermaid components
  MermaidDiagram,
}