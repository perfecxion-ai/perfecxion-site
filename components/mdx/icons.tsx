import Link from 'next/link'
import React from 'react'

// Simple icon component exports for MDX
export const AlertCircle = () => null
export const AlertTriangle = () => null
export const Shield = () => null
export const Eye = () => null
export const Cpu = () => null
export const Database = () => null
export const Network = () => null
export const Users = () => null
export const CheckCircle = () => null
export const XCircle = () => null
export const ArrowRight = () => null
export const Info = () => null
export const Zap = () => null
export const Target = () => null
export const Brain = () => null
export const Layers = () => null
export const ShoppingCart = () => null
export const Building = () => null
export const FileText = () => null
export const TrendingUp = () => null
export const Wrench = () => null
export const Briefcase = () => null
export const Bell = () => null
export const Cloud = () => null
export const GraduationCap = () => null
export const ChevronLeft = () => null
export const Calendar = () => null
export const Clock = () => null
export const User = () => null
export const Tag = () => null
export const Star = () => null
export const Lightbulb = () => null
export const BookOpen = () => null
export const Code = () => null
export const GitBranch = () => null
export const Settings = () => null
export const BarChart3 = () => null
export const Lock = () => null

// Component wrappers with proper prop handling
export const AlertBox = ({ 
  children, 
  type = 'info',
  title,
  ...props 
}: { 
  children: React.ReactNode
  type?: 'info' | 'warning' | 'danger' | 'success' | 'tip'
  title?: string
  [key: string]: any
}) => (
  <div className={`alert-box alert-${type}`} {...props}>
    {title && <div className="alert-title">{title}</div>}
    {children}
  </div>
)

export const FeatureGrid = ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => (
  <div className="feature-grid" {...props}>{children}</div>
)

export const FeatureCard = ({ 
  children, 
  title,
  icon,
  color,
  ...props 
}: { 
  children: React.ReactNode
  title?: string
  icon?: string
  color?: string
  [key: string]: any
}) => (
  <div className={`feature-card ${color ? `feature-card-${color}` : ''}`} {...props}>
    {title && <h3>{title}</h3>}
    {children}
  </div>
)

export const StatsBox = ({ 
  stats,
  children,
  ...props 
}: { 
  stats?: Array<{ label: string; value: string; icon?: string }>
  children?: React.ReactNode
  [key: string]: any
}) => (
  <div className="stats-box" {...props}>
    {stats?.map((stat, i) => (
      <div key={i} className="stat-item">
        <div className="stat-value">{stat.value}</div>
        <div className="stat-label">{stat.label}</div>
      </div>
    ))}
    {children}
  </div>
)

export const ComparisonTable = ({ 
  headers,
  rows,
  children,
  ...props 
}: { 
  headers?: string[]
  rows?: string[][]
  children?: React.ReactNode
  [key: string]: any
}) => (
  <table className="comparison-table" {...props}>
    {headers && (
      <thead>
        <tr>
          {headers.map((header, i) => (
            <th key={i}>{header}</th>
          ))}
        </tr>
      </thead>
    )}
    {rows && (
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    )}
    {children}
  </table>
)

export const SectionHeader = ({ 
  title,
  subtitle,
  icon,
  children,
  ...props 
}: { 
  title?: string
  subtitle?: string
  icon?: string
  children?: React.ReactNode
  [key: string]: any
}) => (
  <div className="section-header" {...props}>
    {title && <h2>{title}</h2>}
    {subtitle && <p>{subtitle}</p>}
    {children}
  </div>
)

export const Timeline = ({ 
  items,
  children,
  ...props 
}: { 
  items?: Array<{ date: string; title: string; description: string }>
  children?: React.ReactNode
  [key: string]: any
}) => (
  <div className="timeline" {...props}>
    {items?.map((item, i) => (
      <div key={i} className="timeline-item">
        <div className="timeline-date">{item.date}</div>
        <div className="timeline-content">
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </div>
      </div>
    ))}
    {children}
  </div>
)

// Export Link component
export { Link }