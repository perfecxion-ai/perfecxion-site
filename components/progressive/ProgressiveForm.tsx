'use client'

import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { ChevronLeft, ChevronRight, Check, AlertCircle, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { 
  LeadProfile, 
  ProgressiveFormConfig, 
  FormStep, 
  AnalyticsEvent,
  FormAnalytics 
} from '@/lib/progressive-profiling'
import ConditionalField from './ConditionalField'
import LeadScoring from './LeadScoring'
import { useFormAnalytics } from '@/lib/hooks/useFormAnalytics'
import { useLeadScoring } from '@/lib/hooks/useLeadScoring'
import { useCompanyEnrichment } from '@/lib/hooks/useCompanyEnrichment'

interface ProgressiveFormProps {
  config: ProgressiveFormConfig
  initialData?: Partial<LeadProfile>
  onStepComplete?: (step: FormStep, data: Partial<LeadProfile>) => void
  onFormComplete?: (data: LeadProfile) => void
  onFormAbandon?: (data: Partial<LeadProfile>, lastStep: string) => void
  variant?: 'inline' | 'modal' | 'embedded'
  className?: string
  autoAdvance?: boolean
  showProgress?: boolean
  allowSkip?: boolean
}

export default function ProgressiveForm({
  config,
  initialData = {},
  onStepComplete,
  onFormComplete,
  onFormAbandon,
  variant = 'embedded',
  className,
  autoAdvance = false,
  showProgress = true,
  allowSkip = false
}: ProgressiveFormProps) {
  // State Management
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [formData, setFormData] = useState<Partial<LeadProfile>>(initialData)
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set())
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  // Custom Hooks
  const { trackEvent, analytics } = useFormAnalytics('progressive-form')
  const { calculateScore, scoreBreakdown } = useLeadScoring(config.leadScoring)
  const { enrichCompany, isEnriching } = useCompanyEnrichment()

  // Computed Values
  const currentStep = config.steps[currentStepIndex]
  const isFirstStep = currentStepIndex === 0
  const isLastStep = currentStepIndex === config.steps.length - 1
  const leadScore = useMemo(() => calculateScore(formData), [formData, calculateScore])

  // Filtered steps based on conditional logic
  const availableSteps = useMemo(() => {
    return config.steps.filter(step =>
      step.conditions?.every(condition =>
        evaluateCondition(condition, formData)
      ) ?? true
    )
  }, [config.steps, formData])

  // Form validation
  const validateStep = useCallback((step: FormStep, data: Partial<LeadProfile>): Record<string, string> => {
    const stepErrors: Record<string, string> = {}
    
    step.fields.forEach(field => {
      if (field.required && !data[field.name]) {
        stepErrors[field.name] = `${field.label} is required`
      }
      
      if (field.validation && data[field.name]) {
        field.validation.forEach(rule => {
          const value = data[field.name]
          let isValid = true
          
          switch (rule.type) {
            case 'email':
              isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value as string)
              break
            case 'phone':
              isValid = /^\+?[\d\s\-\(\)]+$/.test(value as string)
              break
            case 'min_length':
              isValid = (value as string).length >= (rule.value || 0)
              break
            case 'max_length':
              isValid = (value as string).length <= (rule.value || Infinity)
              break
            case 'pattern':
              isValid = new RegExp(rule.value).test(value as string)
              break
          }
          
          if (!isValid) {
            stepErrors[field.name] = rule.message
          }
        })
      }
    })
    
    return stepErrors
  }, [])

  // Check if step is complete
  const isStepComplete = useCallback((step: FormStep, data: Partial<LeadProfile>): boolean => {
    const requiredFields = step.fields.filter(f => f.required)
    const completedFields = requiredFields.filter(f => data[f.name])
    return completedFields.length >= step.completionThreshold
  }, [])

  // Handle field changes
  const handleFieldChange = useCallback(async (fieldName: keyof LeadProfile, value: any) => {
    const newData = { ...formData, [fieldName]: value }
    setFormData(newData)
    
    // Clear errors for this field
    if (errors[fieldName]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[fieldName]
        return newErrors
      })
    }
    
    // Track field completion
    trackEvent({
      type: 'field_complete',
      fieldId: fieldName,
      value: typeof value === 'string' ? value.slice(0, 50) : value // Truncate for privacy
    })
    
    // Trigger enrichment if applicable
    const field = currentStep.fields.find(f => f.name === fieldName)
    if (field?.enrichment) {
      await handleEnrichment(field.enrichment, newData)
    }
    
    // Auto-advance if step is complete and autoAdvance is enabled
    if (autoAdvance && isStepComplete(currentStep, newData) && !isLastStep) {
      setTimeout(() => handleNext(), 1000)
    }
    
    // Call step complete callback if step threshold is met
    if (isStepComplete(currentStep, newData) && !completedSteps.has(currentStep.id)) {
      setCompletedSteps(prev => {
        const newSet = new Set(prev)
        newSet.add(currentStep.id)
        return newSet
      })
      onStepComplete?.(currentStep, newData)
    }
  }, [formData, errors, currentStep, isStepComplete, autoAdvance, isLastStep, trackEvent, completedSteps, onStepComplete])

  // Handle enrichment
  const handleEnrichment = useCallback(async (enrichmentConfig: any, data: Partial<LeadProfile>) => {
    if (enrichmentConfig.provider === 'domain_lookup' && data.email) {
      const domain = data.email.split('@')[1]
      if (domain && !data.company) {
        const companyData = await enrichCompany(domain)
        if (companyData) {
          setFormData(prev => ({
            ...prev,
            company: companyData.name,
            companyDomain: domain,
            companySize: companyData.size,
            industry: companyData.industry
          }))
        }
      }
    }
  }, [enrichCompany])

  // Navigation handlers
  const handleNext = useCallback(() => {
    const stepErrors = validateStep(currentStep, formData)
    
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors)
      trackEvent({
        type: 'field_error',
        metadata: { errors: Object.keys(stepErrors) }
      })
      return
    }
    
    trackEvent({
      type: 'step_complete',
      metadata: { stepId: currentStep.id, stepIndex: currentStepIndex }
    })
    
    if (isLastStep) {
      handleSubmit()
    } else {
      setCurrentStepIndex(prev => Math.min(prev + 1, availableSteps.length - 1))
    }
  }, [currentStep, formData, validateStep, trackEvent, isLastStep, currentStepIndex, availableSteps.length])

  const handlePrevious = useCallback(() => {
    if (!isFirstStep) {
      setCurrentStepIndex(prev => Math.max(prev - 1, 0))
    }
  }, [isFirstStep])

  const handleSkip = useCallback(() => {
    if (allowSkip && !isLastStep) {
      trackEvent({
        type: 'form_abandon',
        metadata: { stepId: currentStep.id, reason: 'skipped' }
      })
      setCurrentStepIndex(prev => Math.min(prev + 1, availableSteps.length - 1))
    }
  }, [allowSkip, isLastStep, trackEvent, currentStep.id, availableSteps.length])

  // Form submission
  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true)
    
    try {
      const finalData: LeadProfile = {
        ...formData,
        profileLevel: completedSteps.size,
        leadScore,
        lastActivity: new Date(),
        sessionId: analytics.sessionId,
        createdAt: formData.createdAt || new Date(),
        updatedAt: new Date()
      } as LeadProfile
      
      trackEvent({
        type: 'form_submit',
        metadata: { completedSteps: completedSteps.size, leadScore }
      })
      
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      trackEvent({
        type: 'form_success'
      })
      
      setIsComplete(true)
      onFormComplete?.(finalData)
      
    } catch (error) {
      console.error('Form submission failed:', error)
      setErrors({ submit: 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, completedSteps.size, leadScore, analytics.sessionId, trackEvent, onFormComplete])

  // Form abandonment detection
  useEffect(() => {
    const handleUnload = () => {
      if (!isComplete && Object.keys(formData).length > 0) {
        onFormAbandon?.(formData, currentStep.id)
      }
    }
    
    window.addEventListener('beforeunload', handleUnload)
    return () => window.removeEventListener('beforeunload', handleUnload)
  }, [formData, currentStep.id, isComplete, onFormAbandon])

  // Initialize form tracking
  useEffect(() => {
    trackEvent({
      type: 'form_start'
    })
  }, [trackEvent])

  // Success state
  if (isComplete) {
    return (
      <div className={cn('text-center py-8', className)}>
        <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-4">
          <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Thank you for your information!
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          We'll be in touch soon with personalized recommendations based on your needs.
        </p>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Lead Score: <span className="font-semibold text-primary-600 dark:text-primary-400">{leadScore}/100</span>
        </div>
      </div>
    )
  }

  const containerClasses = cn(
    'progressive-form',
    variant === 'inline' && 'bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6',
    variant === 'modal' && 'bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-8 max-w-2xl mx-auto',
    variant === 'embedded' && 'bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6',
    className
  )

  return (
    <div className={containerClasses}>
      {/* Progress Indicator */}
      {showProgress && (
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>Step {currentStepIndex + 1} of {availableSteps.length}</span>
            <span>{Math.round((currentStepIndex / (availableSteps.length - 1)) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStepIndex / (availableSteps.length - 1)) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Lead Score Display */}
      <LeadScoring 
        score={leadScore}
        breakdown={scoreBreakdown(formData)}
        compact
        className="mb-6"
      />

      {/* Step Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {currentStep.title}
        </h2>
        {currentStep.description && (
          <p className="text-gray-600 dark:text-gray-300">
            {currentStep.description}
          </p>
        )}
      </div>

      {/* Form Fields */}
      <div className="space-y-4 mb-8">
        {currentStep.fields.map(field => (
          <ConditionalField
            key={field.id}
            field={field}
            value={formData[field.name]}
            onChange={(value) => handleFieldChange(field.name, value)}
            error={errors[field.name]}
            formData={formData}
            isEnriching={isEnriching && field.enrichment?.provider === 'domain_lookup'}
          />
        ))}
      </div>

      {/* Submit Error */}
      {errors.submit && (
        <div className="mb-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0" />
            <p className="text-sm text-red-800 dark:text-red-300">{errors.submit}</p>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrevious}
          disabled={isFirstStep}
          className={cn(
            'flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors',
            isFirstStep
              ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
              : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
          )}
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </button>

        <div className="flex items-center gap-3">
          {allowSkip && !isLastStep && (
            <button
              onClick={handleSkip}
              className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            >
              Skip for now
            </button>
          )}

          <button
            onClick={handleNext}
            disabled={isSubmitting}
            className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {isLastStep ? 'Submitting...' : 'Processing...'}
              </>
            ) : (
              <>
                {isLastStep ? 'Complete Profile' : 'Continue'}
                {!isLastStep && <ChevronRight className="h-4 w-4" />}
              </>
            )}
          </button>
        </div>
      </div>

      {/* Privacy Notice */}
      <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-6">
        Your information is secure and will be used only to provide personalized recommendations.{' '}
        <a href="/privacy" className="text-primary-600 dark:text-primary-400 hover:underline">
          Privacy Policy
        </a>
      </p>
    </div>
  )
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
    default:
      return true
  }
}