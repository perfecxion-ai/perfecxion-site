'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { 
  Mail, User, Building, Phone, Calendar, Globe, 
  Shield, Briefcase, Users, Clock, Loader2, Eye, EyeOff 
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { 
  FormField, 
  LeadProfile, 
  CompanySize, 
  Industry, 
  JobRole, 
  AIMaturity,
  SecurityChallenge,
  ComplianceRequirement,
  BudgetRange,
  Timeline,
  DecisionRole
} from '@/lib/progressive-profiling'

interface ConditionalFieldProps {
  field: FormField
  value: any
  onChange: (value: any) => void
  error?: string
  formData: Partial<LeadProfile>
  isEnriching?: boolean
  className?: string
}

export default function ConditionalField({
  field,
  value,
  onChange,
  error,
  formData,
  isEnriching = false,
  className
}: ConditionalFieldProps) {
  const [focused, setFocused] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  // Check if field should be visible based on conditions
  const isVisible = useMemo(() => {
    if (!field.conditions || !Array.isArray(field.conditions)) return true
    
    // Process all conditions (field.conditions is an array of FieldCondition)
    return field.conditions.every(conditionGroup => {
      if (conditionGroup.showIf) {
        const showConditions = conditionGroup.showIf.every(condition =>
          evaluateCondition(condition, formData)
        )
        if (!showConditions) return false
      }
      
      if (conditionGroup.hideIf) {
        const hideConditions = conditionGroup.hideIf.some(condition =>
          evaluateCondition(condition, formData)
        )
        if (hideConditions) return false
      }
      
      return true
    })
    
    return true
  }, [field.conditions, formData])

  // Auto-focus on first visible required field
  useEffect(() => {
    if (isVisible && field.required && !value) {
      const fieldElement = document.getElementById(field.id)
      if (fieldElement && document.activeElement !== fieldElement) {
        setTimeout(() => fieldElement.focus(), 100)
      }
    }
  }, [isVisible, field.required, field.id, value])

  if (!isVisible) return null

  const fieldIcons = {
    email: Mail,
    text: User,
    phone: Phone,
    select: Building,
    multiselect: Users,
    checkbox: Shield,
    radio: Briefcase,
    textarea: Globe,
    number: Clock
  }

  const Icon = fieldIcons[field.type] || User

  const baseInputClasses = cn(
    'w-full px-4 py-3 border rounded-lg transition-all duration-200',
    'bg-white dark:bg-gray-800 text-gray-900 dark:text-white',
    'placeholder-gray-400 dark:placeholder-gray-500',
    'focus:ring-2 focus:ring-primary-500 focus:border-transparent',
    error 
      ? 'border-red-500 focus:ring-red-500' 
      : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500',
    focused && 'ring-2 ring-primary-500 border-transparent',
    isEnriching && 'animate-pulse'
  )

  const renderField = () => {
    switch (field.type) {
      case 'email':
        return (
          <div className="relative">
            <input
              id={field.id}
              type="email"
              value={value || ''}
              onChange={(e) => onChange(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className={cn(baseInputClasses, 'pl-12')}
              placeholder={field.placeholder}
              required={field.required}
              disabled={isEnriching}
            />
            <Mail className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            {isEnriching && (
              <Loader2 className="absolute right-4 top-3.5 h-5 w-5 text-primary-500 animate-spin" />
            )}
          </div>
        )

      case 'phone':
        return (
          <div className="relative">
            <input
              id={field.id}
              type="tel"
              value={value || ''}
              onChange={(e) => onChange(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className={cn(baseInputClasses, 'pl-12')}
              placeholder={field.placeholder}
              required={field.required}
            />
            <Phone className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          </div>
        )

      case 'text':
        return (
          <div className="relative">
            <input
              id={field.id}
              type="text"
              value={value || ''}
              onChange={(e) => onChange(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className={cn(baseInputClasses, Icon !== User ? 'pl-12' : '')}
              placeholder={field.placeholder}
              required={field.required}
              disabled={isEnriching}
            />
            {Icon !== User && (
              <Icon className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            )}
            {isEnriching && (
              <Loader2 className="absolute right-4 top-3.5 h-5 w-5 text-primary-500 animate-spin" />
            )}
          </div>
        )

      case 'number':
        return (
          <input
            id={field.id}
            type="number"
            value={value || ''}
            onChange={(e) => onChange(Number(e.target.value))}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={baseInputClasses}
            placeholder={field.placeholder}
            required={field.required}
          />
        )

      case 'textarea':
        return (
          <textarea
            id={field.id}
            rows={4}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={baseInputClasses}
            placeholder={field.placeholder}
            required={field.required}
          />
        )

      case 'select':
        return (
          <select
            id={field.id}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={baseInputClasses}
            required={field.required}
          >
            <option value="">
              {field.placeholder || `Select ${field.label.toLowerCase()}`}
            </option>
            {field.options?.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )

      case 'multiselect':
        return (
          <div className="space-y-2">
            {field.options?.map(option => (
              <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={Array.isArray(value) ? value.includes(option.value) : false}
                  onChange={(e) => {
                    const currentValues = Array.isArray(value) ? value : []
                    if (e.target.checked) {
                      onChange([...currentValues, option.value])
                    } else {
                      onChange(currentValues.filter(v => v !== option.value))
                    }
                  }}
                  className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {option.label}
                </span>
                {option.description && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {option.description}
                  </span>
                )}
              </label>
            ))}
          </div>
        )

      case 'radio':
        return (
          <div className="space-y-2">
            {field.options?.map(option => (
              <label key={option.value} className="flex items-start gap-3 cursor-pointer">
                <input
                  type="radio"
                  name={field.id}
                  value={option.value}
                  checked={value === option.value}
                  onChange={(e) => onChange(e.target.value)}
                  className="mt-0.5 h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500"
                />
                <div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {option.label}
                  </span>
                  {option.description && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {option.description}
                    </p>
                  )}
                </div>
              </label>
            ))}
          </div>
        )

      case 'checkbox':
        return (
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              id={field.id}
              type="checkbox"
              checked={value || false}
              onChange={(e) => onChange(e.target.checked)}
              className="mt-1 h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              required={field.required}
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {field.placeholder || field.label}
            </span>
          </label>
        )

      default:
        return (
          <input
            id={field.id}
            type="text"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={baseInputClasses}
            placeholder={field.placeholder}
            required={field.required}
          />
        )
    }
  }

  return (
    <div className={cn('space-y-2', className)}>
      {field.type !== 'checkbox' && (
        <label 
          htmlFor={field.id} 
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {field.label}
          {field.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      {renderField()}
      
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
          <span className="w-1 h-1 bg-red-500 rounded-full"></span>
          {error}
        </p>
      )}
      
      {isEnriching && (
        <p className="text-xs text-primary-600 dark:text-primary-400 flex items-center gap-1">
          <Loader2 className="h-3 w-3 animate-spin" />
          Enriching company information...
        </p>
      )}
    </div>
  )
}

// Predefined field options for common use cases
export const FIELD_OPTIONS = {
  companySize: [
    { value: 'startup', label: '1-10 employees', description: 'Startup or small team' },
    { value: 'small', label: '11-50 employees', description: 'Small business' },
    { value: 'medium', label: '51-200 employees', description: 'Medium business' },
    { value: 'large', label: '201-1000 employees', description: 'Large business' },
    { value: 'enterprise', label: '1000+ employees', description: 'Enterprise' }
  ] satisfies Array<{ value: CompanySize; label: string; description: string }>,

  industry: [
    { value: 'technology', label: 'Technology' },
    { value: 'healthcare', label: 'Healthcare & Life Sciences' },
    { value: 'financial', label: 'Financial Services' },
    { value: 'retail', label: 'Retail & E-commerce' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'education', label: 'Education' },
    { value: 'government', label: 'Government & Public Sector' },
    { value: 'consulting', label: 'Consulting' },
    { value: 'media', label: 'Media & Entertainment' },
    { value: 'other', label: 'Other' }
  ] satisfies Array<{ value: Industry; label: string }>,

  jobRole: [
    { value: 'developer', label: 'Developer/Engineer' },
    { value: 'security', label: 'Security Professional' },
    { value: 'executive', label: 'Executive (C-Level, VP)' },
    { value: 'manager', label: 'Manager/Director' },
    { value: 'analyst', label: 'Analyst' },
    { value: 'architect', label: 'Architect' },
    { value: 'consultant', label: 'Consultant' },
    { value: 'researcher', label: 'Researcher' },
    { value: 'operations', label: 'Operations' },
    { value: 'other', label: 'Other' }
  ] satisfies Array<{ value: JobRole; label: string }>,

  aiMaturity: [
    { value: 'none', label: 'Not using AI/ML', description: 'Just exploring possibilities' },
    { value: 'exploring', label: 'Exploring AI/ML', description: 'Investigating use cases' },
    { value: 'pilot', label: 'Pilot projects', description: 'Running small experiments' },
    { value: 'production', label: 'Production systems', description: 'AI/ML in live products' },
    { value: 'advanced', label: 'Advanced deployment', description: 'Multiple production systems' }
  ] satisfies Array<{ value: AIMaturity; label: string; description: string }>,

  securityChallenges: [
    { value: 'model_security', label: 'Model Security', description: 'Protecting AI models from attacks' },
    { value: 'data_privacy', label: 'Data Privacy', description: 'Securing training and inference data' },
    { value: 'compliance', label: 'Compliance', description: 'Meeting regulatory requirements' },
    { value: 'monitoring', label: 'Monitoring', description: 'Real-time threat detection' },
    { value: 'governance', label: 'Governance', description: 'AI governance and ethics' },
    { value: 'risk_assessment', label: 'Risk Assessment', description: 'Evaluating AI security risks' },
    { value: 'incident_response', label: 'Incident Response', description: 'Responding to AI security incidents' }
  ] satisfies Array<{ value: SecurityChallenge; label: string; description: string }>,

  complianceRequirements: [
    { value: 'gdpr', label: 'GDPR', description: 'General Data Protection Regulation' },
    { value: 'hipaa', label: 'HIPAA', description: 'Health Insurance Portability and Accountability Act' },
    { value: 'sox', label: 'SOX', description: 'Sarbanes-Oxley Act' },
    { value: 'pci', label: 'PCI DSS', description: 'Payment Card Industry Data Security Standard' },
    { value: 'iso27001', label: 'ISO 27001', description: 'Information Security Management' },
    { value: 'nist', label: 'NIST Framework', description: 'National Institute of Standards and Technology' },
    { value: 'other', label: 'Other', description: 'Industry-specific regulations' }
  ] satisfies Array<{ value: ComplianceRequirement; label: string; description: string }>,

  budgetRange: [
    { value: 'under_50k', label: 'Under $50k' },
    { value: '50k_250k', label: '$50k - $250k' },
    { value: '250k_1m', label: '$250k - $1M' },
    { value: '1m_5m', label: '$1M - $5M' },
    { value: 'over_5m', label: 'Over $5M' },
    { value: 'unknown', label: 'Not sure yet' }
  ] satisfies Array<{ value: BudgetRange; label: string }>,

  timeline: [
    { value: 'immediate', label: 'Immediate (< 1 month)', description: 'Need solution ASAP' },
    { value: '3_months', label: '1-3 months', description: 'Planning to implement soon' },
    { value: '6_months', label: '3-6 months', description: 'Medium-term planning' },
    { value: '12_months', label: '6-12 months', description: 'Long-term planning' },
    { value: 'research_only', label: 'Research only', description: 'Just gathering information' }
  ] satisfies Array<{ value: Timeline; label: string; description: string }>,

  decisionRole: [
    { value: 'decision_maker', label: 'Decision Maker', description: 'I make the final decision' },
    { value: 'influencer', label: 'Influencer', description: 'I influence the decision' },
    { value: 'evaluator', label: 'Evaluator', description: 'I evaluate solutions' },
    { value: 'user', label: 'End User', description: 'I will use the solution' },
    { value: 'researcher', label: 'Researcher', description: 'I research options' }
  ] satisfies Array<{ value: DecisionRole; label: string; description: string }>
}

// Helper function to evaluate conditions
function evaluateCondition(condition: any, data: Partial<LeadProfile>): boolean {
  const value = data[condition.field as keyof LeadProfile]
  
  switch (condition.operator) {
    case 'equals':
      return value === condition.value
    case 'not_equals':
      return value !== condition.value
    case 'exists':
      return value !== undefined && value !== null && value !== ''
    case 'not_exists':
      return value === undefined || value === null || value === ''
    case 'contains':
      if (Array.isArray(value)) {
        return value.some(item => item === condition.value)
      }
      if (typeof value === 'string' && typeof condition.value === 'string') {
        return value.includes(condition.value)
      }
      return false
    case 'greater_than':
      return typeof value === 'number' && value > condition.value
    case 'less_than':
      return typeof value === 'number' && value < condition.value
    default:
      return true
  }
}