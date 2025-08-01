'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { Lock, Unlock, Star, Award, FileText, Download, CheckCircle, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { 
  ContentResource, 
  ContentGatingRule, 
  LeadProfile, 
  ProfileRequirement,
  ResourceType 
} from '@/lib/progressive-profiling'
import ProgressiveForm from './ProgressiveForm'
import LeadScoring from './LeadScoring'
import { useContentGating } from '@/lib/hooks/useContentGating'
import { useLeadScoring } from '@/lib/hooks/useLeadScoring'

interface ContentGateProps {
  resource: ContentResource
  userProfile?: Partial<LeadProfile>
  onAccess?: (resource: ContentResource, profile: LeadProfile) => void
  onProfileUpdate?: (profile: Partial<LeadProfile>) => void
  variant?: 'card' | 'inline' | 'modal'
  showRequirements?: boolean
  className?: string
}

export default function ContentGate({
  resource,
  userProfile = {},
  onAccess,
  onProfileUpdate,
  variant = 'card',
  showRequirements = true,
  className
}: ContentGateProps) {
  const [showForm, setShowForm] = useState(false)
  const [isAccessing, setIsAccessing] = useState(false)
  const [accessGranted, setAccessGranted] = useState(false)

  const { checkAccess, getRequirements, getPersonalizedContent } = useContentGating()
  const { calculateScore } = useLeadScoring()

  // Check if user has access to this resource
  const accessResult = useMemo(() => 
    checkAccess(resource, userProfile), 
    [resource, userProfile, checkAccess]
  )

  // Get missing requirements
  const missingRequirements = useMemo(() => 
    getRequirements(resource, userProfile),
    [resource, userProfile, getRequirements]
  )

  // Get personalized content variant
  const personalizedContent = useMemo(() => 
    getPersonalizedContent(resource, userProfile),
    [resource, userProfile, getPersonalizedContent]
  )

  // Calculate current lead score
  const leadScore = useMemo(() => 
    calculateScore(userProfile), 
    [userProfile, calculateScore]
  )

  // Handle access attempt
  const handleAccessAttempt = () => {
    if (accessResult.hasAccess) {
      handleGrantAccess()
    } else {
      setShowForm(true)
    }
  }

  // Handle access granted
  const handleGrantAccess = async () => {
    setIsAccessing(true)
    
    try {
      // Track access event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'resource_access', {
          resource_id: resource.id,
          resource_type: resource.type,
          lead_score: leadScore,
          access_method: accessResult.hasAccess ? 'qualified' : 'form_completion'
        })
      }

      // Trigger download or access
      if (resource.url) {
        window.open(resource.url, '_blank')
      }

      setAccessGranted(true)
      onAccess?.(resource, userProfile as LeadProfile)
      
    } catch (error) {
      console.error('Access failed:', error)
    } finally {
      setIsAccessing(false)
    }
  }

  // Handle form completion
  const handleFormComplete = (completedProfile: LeadProfile) => {
    onProfileUpdate?.(completedProfile)
    
    // Re-check access with updated profile
    const newAccessResult = checkAccess(resource, completedProfile)
    if (newAccessResult.hasAccess) {
      setShowForm(false)
      handleGrantAccess()
    }
  }

  const resourceIcons = {
    whitepaper: FileText,
    guide: FileText,
    ebook: FileText,
    report: FileText,
    checklist: FileText,
    template: FileText,
    calculator: FileText,
    assessment: FileText
  }

  const ResourceIcon = resourceIcons[resource.type] || FileText

  // Success state
  if (accessGranted) {
    return (
      <div className={cn('text-center py-8', className)}>
        <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Access Granted!
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Your download should begin shortly. Check your email for additional resources.
        </p>
        {resource.url && (
          <button
            onClick={() => window.open(resource.url, '_blank')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
          >
            <Download className="h-4 w-4" />
            Download Again
          </button>
        )}
      </div>
    )
  }

  const containerClasses = cn(
    'content-gate',
    variant === 'card' && 'bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden',
    variant === 'inline' && 'bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6',
    variant === 'modal' && 'bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-8 max-w-2xl mx-auto',
    className
  )

  return (
    <div className={containerClasses}>
      {/* Resource Header */}
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0">
            <div className={cn(
              'w-12 h-12 rounded-lg flex items-center justify-center',
              accessResult.hasAccess 
                ? 'bg-green-100 dark:bg-green-900/20' 
                : 'bg-gray-100 dark:bg-gray-800'
            )}>
              {accessResult.hasAccess ? (
                <Unlock className="h-6 w-6 text-green-600 dark:text-green-400" />
              ) : (
                <Lock className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              )}
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <ResourceIcon className="h-4 w-4 text-primary-600 dark:text-primary-400" />
              <span className="text-xs font-medium uppercase tracking-wide text-primary-600 dark:text-primary-400">
                {resource.type}
              </span>
              {resource.fileSize && (
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  • {resource.fileSize}
                </span>
              )}
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              {personalizedContent?.variant?.title || resource.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {personalizedContent?.variant?.description || resource.description}
            </p>
          </div>
        </div>

        {/* Access Status */}
        <div className={cn(
          'p-4 rounded-lg border mb-4',
          accessResult.hasAccess 
            ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
            : 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800'
        )}>
          <div className="flex items-start gap-3">
            {accessResult.hasAccess ? (
              <Unlock className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            ) : (
              <Lock className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            )}
            
            <div className="flex-1">
              <p className={cn(
                'text-sm font-medium',
                accessResult.hasAccess 
                  ? 'text-green-800 dark:text-green-300'
                  : 'text-amber-800 dark:text-amber-300'
              )}>
                {accessResult.hasAccess 
                  ? 'You have access to this resource!'
                  : 'Complete your profile to unlock this resource'
                }
              </p>
              
              {!accessResult.hasAccess && accessResult.reason && (
                <p className="text-xs text-amber-700 dark:text-amber-400 mt-1">
                  {accessResult.reason}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Requirements */}
        {showRequirements && !accessResult.hasAccess && missingRequirements && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
              To access this resource, we need:
            </h4>
            <ul className="space-y-1">
              {missingRequirements.map((req, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                  {req.description}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Lead Score Display */}
        {leadScore > 0 && (
          <LeadScoring 
            score={leadScore}
            compact
            className="mb-4"
          />
        )}

        {/* Action Button */}
        <button
          onClick={handleAccessAttempt}
          disabled={isAccessing}
          className={cn(
            'w-full flex items-center justify-center gap-2 px-6 py-3 font-medium rounded-lg transition-colors',
            accessResult.hasAccess
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'bg-primary-600 hover:bg-primary-700 text-white',
            isAccessing && 'opacity-50 cursor-not-allowed'
          )}
        >
          {isAccessing ? (
            <>
              <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Accessing...
            </>
          ) : accessResult.hasAccess ? (
            <>
              <Download className="h-4 w-4" />
              Download Now
            </>
          ) : (
            <>
              <Lock className="h-4 w-4" />
              Complete Profile
            </>
          )}
        </button>
      </div>

      {/* Progressive Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-auto">
            <button
              onClick={() => setShowForm(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 z-10"
            >
              <X className="h-6 w-6" />
            </button>
            
            <ProgressiveForm
              config={generateFormConfig(resource, missingRequirements)}
              initialData={userProfile}
              onFormComplete={handleFormComplete}
              variant="modal"
              showProgress
              allowSkip={false}
            />
          </div>
        </div>
      )}
    </div>
  )
}

// Helper function to generate form configuration based on gating requirements
function generateFormConfig(resource: ContentResource, requirements?: any[]): any {
  const steps = []
  
  // Basic step (always required)
  steps.push({
    id: 'basic_info',
    name: 'Basic Information',
    title: 'Tell us about yourself',
    description: 'We need some basic information to personalize your experience.',
    fields: [
      {
        id: 'email',
        name: 'email',
        label: 'Work Email',
        type: 'email',
        required: true,
        placeholder: 'you@company.com',
        validation: [
          { type: 'required', message: 'Email is required' },
          { type: 'email', message: 'Please enter a valid email' }
        ]
      },
      {
        id: 'firstName',
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        required: true,
        placeholder: 'John'
      },
      {
        id: 'lastName',
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        required: true,
        placeholder: 'Doe'
      }
    ],
    completionThreshold: 3,
    priority: 'high'
  })

  // Company step for higher-value resources
  if (['whitepaper', 'report', 'calculator'].includes(resource.type)) {
    steps.push({
      id: 'company_info',
      name: 'Company Information',
      title: 'About your organization',
      description: 'Help us understand your company context.',
      fields: [
        {
          id: 'company',
          name: 'company',
          label: 'Company Name',
          type: 'text',
          required: true,
          enrichment: { provider: 'domain_lookup', trigger: 'email_complete' }
        },
        {
          id: 'jobTitle',
          name: 'jobTitle',
          label: 'Job Title',
          type: 'text',
          required: true,
          placeholder: 'Chief Security Officer'
        },
        {
          id: 'companySize',
          name: 'companySize',
          label: 'Company Size',
          type: 'select',
          required: true,
          options: [
            { value: 'startup', label: '1-10 employees' },
            { value: 'small', label: '11-50 employees' },
            { value: 'medium', label: '51-200 employees' },
            { value: 'large', label: '201-1000 employees' },
            { value: 'enterprise', label: '1000+ employees' }
          ]
        }
      ],
      completionThreshold: 3,
      priority: 'medium'
    })
  }

  // Technical context for technical resources
  if (['guide', 'template'].includes(resource.type)) {
    steps.push({
      id: 'technical_context',
      name: 'Technical Context',
      title: 'Your AI security needs',
      description: 'Help us personalize the content for your specific needs.',
      fields: [
        {
          id: 'aiMaturity',
          name: 'aiMaturity',
          label: 'AI/ML Maturity Level',
          type: 'radio',
          required: true,
          options: [
            { value: 'none', label: 'Not using AI/ML', description: 'Just exploring possibilities' },
            { value: 'exploring', label: 'Exploring AI/ML', description: 'Investigating use cases' },
            { value: 'pilot', label: 'Pilot projects', description: 'Running small experiments' },  
            { value: 'production', label: 'Production systems', description: 'AI/ML in live products' }
          ]
        },
        {
          id: 'securityChallenges',
          name: 'securityChallenges',
          label: 'Primary Security Challenges',
          type: 'multiselect',
          required: false,
          options: [
            { value: 'model_security', label: 'Model Security' },
            { value: 'data_privacy', label: 'Data Privacy' },
            { value: 'compliance', label: 'Compliance' },
            { value: 'monitoring', label: 'Monitoring' },
            { value: 'governance', label: 'Governance' }
          ]
        }
      ],
      completionThreshold: 1,
      priority: 'low'
    })
  }

  return {
    steps,
    conditionalLogic: [],
    contentGating: resource.gatingRules,
    leadScoring: {
      rules: [],
      thresholds: [],
      decayRules: []
    },
    personalization: {
      contentRecommendations: [],
      messagingVariants: [],
      ctaPersonalization: []
    }
  }
}