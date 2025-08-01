/**
 * Complete Progressive Profiling Implementation Example
 * 
 * This example demonstrates how to integrate the progressive profiling system
 * into your application with real-world configuration and usage patterns.
 */

'use client'

import React, { useState, useEffect } from 'react'
import { 
  LeadProfile, 
  ProgressiveFormConfig,
  ContentResource,
  DEFAULT_LEAD_SCORING_CONFIG 
} from '@/lib/progressive-profiling'
import ProgressiveForm from '@/components/progressive/ProgressiveForm'
import ContentGate from '@/components/progressive/ContentGate'
import ContentRecommendationEngine from '@/components/progressive/ContentRecommendationEngine'
import GDPRCompliance from '@/components/progressive/GDPRCompliance'
import { FIELD_OPTIONS } from '@/components/progressive/ConditionalField'

// Example: Lead Capture for AI Security Whitepaper
export function WhitepaperLeadCapture() {
  const [userProfile, setUserProfile] = useState<Partial<LeadProfile>>({})
  const [showThankYou, setShowThankYou] = useState(false)

  // Configuration for AI Security Executive Guide
  const formConfig: ProgressiveFormConfig = {
    steps: [
      {
        id: 'contact_info',
        name: 'Contact Information',
        title: 'Download the AI Security Executive Guide',
        description: 'Get strategic insights for AI security leadership. Just provide your contact information.',
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
              { type: 'email', message: 'Please enter a valid work email' }
            ],
            enrichment: { 
              provider: 'domain_lookup', 
              trigger: 'email_complete',
              fields: ['company', 'companySize', 'industry'] 
            }
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
      },
      {
        id: 'company_context',
        name: 'Company Context',
        title: 'About your organization',
        description: 'Help us personalize the content for your specific context.',
        fields: [
          {
            id: 'company',
            name: 'company',
            label: 'Company Name',
            type: 'text',
            required: true,
            placeholder: 'Acme Corporation'
          },
          {
            id: 'jobTitle',
            name: 'jobTitle',
            label: 'Job Title',
            type: 'text',
            required: true,
            placeholder: 'Chief Information Security Officer'
          },
          {
            id: 'companySize',
            name: 'companySize',
            label: 'Company Size',
            type: 'select',
            required: true,
            options: FIELD_OPTIONS.companySize
          },
          {
            id: 'industry',
            name: 'industry',
            label: 'Industry',
            type: 'select',
            required: false,
            options: FIELD_OPTIONS.industry
          }
        ],
        completionThreshold: 3,
        priority: 'medium'
      },
      {
        id: 'ai_context',
        name: 'AI Security Context',
        title: 'Your AI security needs',
        description: 'Tell us about your AI security journey to get the most relevant insights.',
        fields: [
          {
            id: 'aiMaturity',
            name: 'aiMaturity',
            label: 'Current AI/ML Usage',
            type: 'radio',
            required: true,
            options: FIELD_OPTIONS.aiMaturity
          },
          {
            id: 'securityChallenges',
            name: 'securityChallenges',
            label: 'Primary Security Challenges',
            type: 'multiselect',
            required: false,
            options: FIELD_OPTIONS.securityChallenges
          },
          {
            id: 'implementationTimeline',
            name: 'implementationTimeline',
            label: 'Implementation Timeline',
            type: 'radio',
            required: false,
            options: FIELD_OPTIONS.timeline
          }
        ],
        completionThreshold: 1,
        priority: 'low'
      }
    ],
    conditionalLogic: [
      {
        id: 'show_budget_for_decision_makers',
        trigger: {
          field: 'jobTitle',
          event: 'change',
          condition: (value: string) => 
            ['ceo', 'cto', 'ciso', 'vp', 'director'].some(role => 
              value.toLowerCase().includes(role)
            )
        },
        action: {
          type: 'show_field',
          target: 'budgetRange'
        },
        priority: 1
      }
    ],
    contentGating: [],
    leadScoring: DEFAULT_LEAD_SCORING_CONFIG,
    personalization: {
      contentRecommendations: [],
      messagingVariants: [],
      ctaPersonalization: []
    }
  }

  const handleFormComplete = (profile: LeadProfile) => {
    setUserProfile(profile)
    setShowThankYou(true)
    
    // Track conversion
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'lead_capture_complete', {
        lead_score: profile.leadScore,
        company_size: profile.companySize,
        ai_maturity: profile.aiMaturity
      })
    }
    
    // In production: send to CRM, trigger email sequence, etc.
    console.log('Lead captured:', profile)
  }

  if (showThankYou) {
    return <ThankYouPage profile={userProfile} />
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <ProgressiveForm
        config={formConfig}
        initialData={userProfile}
        onFormComplete={handleFormComplete}
        variant="embedded"
        showProgress
        autoAdvance={false}
        allowSkip={false}
      />
    </div>
  )
}

// Example: Content Hub with Progressive Gating
export function ContentHub() {
  const [userProfile, setUserProfile] = useState<Partial<LeadProfile>>({})

  useEffect(() => {
    // Load stored profile
    const stored = localStorage.getItem('leadProfile')
    if (stored) {
      setUserProfile(JSON.parse(stored))
    }
  }, [])

  const handleProfileUpdate = (updates: Partial<LeadProfile>) => {
    const newProfile = { ...userProfile, ...updates }
    setUserProfile(newProfile)
    localStorage.setItem('leadProfile', JSON.stringify(newProfile))
  }

  // Sample gated resources
  const resources: ContentResource[] = [
    {
      id: 'ai-security-executive-guide',
      title: 'Executive Guide to AI Security',
      type: 'whitepaper',
      description: 'Strategic framework for building enterprise AI security programs.',
      url: '/resources/ai-security-executive-guide.pdf',
      fileSize: '2.5 MB',
      gatingRules: [{
        resourceType: 'whitepaper',
        profileRequirements: [
          { field: 'email', operator: 'exists', value: undefined, weight: 10 },
          { field: 'company', operator: 'exists', value: undefined, weight: 15 },
          { field: 'jobTitle', operator: 'exists', value: undefined, weight: 10 }
        ]
      }],
      personalizedVariants: [
        {
          audience: 'executives',
          variant: {
            title: 'Executive Guide to AI Security Strategy',
            description: 'C-level insights on building AI security programs that drive business value.',
            cta: 'Download Executive Guide'
          }
        },
        {
          audience: 'startups',
          variant: {
            title: 'AI Security for Growing Companies',
            description: 'Practical AI security guidance for resource-conscious growing companies.',
            cta: 'Get Startup Guide'
          }
        }
      ],
      trackingId: 'executive-ai-security-guide'
    },
    {
      id: 'technical-implementation-checklist',
      title: 'AI Security Implementation Checklist',
      type: 'checklist',
      description: 'Step-by-step checklist for implementing AI security controls.',
      url: '/resources/ai-security-checklist.pdf',
      gatingRules: [{
        resourceType: 'checklist',
        profileRequirements: [
          { field: 'email', operator: 'exists', value: undefined, weight: 10 }
        ]
      }],
      trackingId: 'implementation-checklist'
    },
    {
      id: 'roi-calculator',
      title: 'AI Security ROI Calculator',
      type: 'calculator',
      description: 'Calculate the return on investment for your AI security initiatives.',
      url: '/tools/roi-calculator',
      gatingRules: [{
        resourceType: 'calculator',
        profileRequirements: [
          { field: 'email', operator: 'exists', value: undefined, weight: 10 },
          { field: 'company', operator: 'exists', value: undefined, weight: 15 },
          { field: 'companySize', operator: 'exists', value: undefined, weight: 10 },
          { field: 'budgetRange', operator: 'exists', value: undefined, weight: 20 }
        ]
      }],
      trackingId: 'roi-calculator'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          AI Security Resource Hub
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Comprehensive resources to help you build and maintain secure AI systems.
        </p>
      </div>

      {/* Personalized Recommendations */}
      <div className="mb-12">
        <ContentRecommendationEngine
          userProfile={userProfile}
          onProfileUpdate={handleProfileUpdate}
          maxRecommendations={6}
          showPersonalization
          variant="grid"
        />
      </div>

      {/* Featured Resources */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Featured Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map(resource => (
            <ContentGate
              key={resource.id}
              resource={resource}
              userProfile={userProfile}
              onProfileUpdate={handleProfileUpdate}
              variant="card"
              showRequirements
            />
          ))}
        </div>
      </div>

      {/* GDPR Compliance */}
      <GDPRCompliance
        userProfile={userProfile}
        variant="settings"
        showFullControls
      />
    </div>
  )
}

// Example: Thank You Page with Additional Recommendations
function ThankYouPage({ profile }: { profile: Partial<LeadProfile> }) {
  return (
    <div className="text-center py-12">
      <div className="mb-8">
        <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-4">
          <svg className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Thank you, {profile.firstName}!
        </h1>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Your download is ready and we've sent it to <strong>{profile.email}</strong>. 
          Check your inbox in the next few minutes.
        </p>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/20 text-primary-800 dark:text-primary-200 rounded-lg text-sm">
          <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
          Lead Score: {profile.leadScore || 0}/100
        </div>
      </div>

      {/* Additional Recommendations */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          You might also be interested in:
        </h2>
        
        <ContentRecommendationEngine
          userProfile={profile}
          maxRecommendations={3}
          showPersonalization={false}
          variant="grid"
        />
      </div>
    </div>
  )
}

// Example: Embedded Lead Capture Widget
export function EmbeddedLeadWidget({ 
  trigger = 'Download',
  resource,
  compact = false 
}: {
  trigger?: string
  resource?: ContentResource
  compact?: boolean
}) {
  const [showForm, setShowForm] = useState(false)
  const [userProfile, setUserProfile] = useState<Partial<LeadProfile>>({})

  const quickCaptureConfig: ProgressiveFormConfig = {
    steps: [{
      id: 'quick_capture',
      name: 'Quick Access',
      title: `${trigger} Resource`,
      description: 'Get instant access with your email address.',
      fields: [
        {
          id: 'email',
          name: 'email',
          label: 'Work Email',
          type: 'email',
          required: true,
          placeholder: 'you@company.com'
        }
      ],
      completionThreshold: 1,
      priority: 'high'
    }],
    conditionalLogic: [],
    contentGating: [],
    leadScoring: DEFAULT_LEAD_SCORING_CONFIG,
    personalization: {
      contentRecommendations: [],
      messagingVariants: [],
      ctaPersonalization: []
    }
  }

  if (showForm) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-6 max-w-md w-full">
          <ProgressiveForm
            config={quickCaptureConfig}
            onFormComplete={(profile) => {
              setUserProfile(profile)
              setShowForm(false)
              // Trigger download or access
            }}
            variant="embedded"
            showProgress={false}
          />
          
          <button
            onClick={() => setShowForm(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>
      </div>
    )
  }

  return (
    <button
      onClick={() => setShowForm(true)}
      className={`
        inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 
        text-white font-medium rounded-lg transition-colors
        ${compact ? 'text-sm' : 'text-base'}
      `}
    >
      {trigger}
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    </button>
  )
}

// Example: A/B Testing Integration
export function ABTestProgressiveForm() {
  const [variant, setVariant] = useState<'control' | 'experimental'>('control')

  useEffect(() => {
    // Simple A/B test implementation
    const testVariant = Math.random() < 0.5 ? 'control' : 'experimental'
    setVariant(testVariant)
    
    // Track test assignment
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'ab_test_assignment', {
        test_name: 'progressive_form_v1',
        variant: testVariant
      })
    }
  }, [])

  const controlConfig = {
    // Standard 3-step form
    steps: [
      { id: 'step1', name: 'Contact', title: 'Contact Information', fields: [], completionThreshold: 2, priority: 'high' as const },
      { id: 'step2', name: 'Company', title: 'Company Details', fields: [], completionThreshold: 2, priority: 'medium' as const },
      { id: 'step3', name: 'Context', title: 'AI Context', fields: [], completionThreshold: 1, priority: 'low' as const }
    ],
    conditionalLogic: [],
    contentGating: [],
    leadScoring: DEFAULT_LEAD_SCORING_CONFIG,
    personalization: { contentRecommendations: [], messagingVariants: [], ctaPersonalization: [] }
  }

  const experimentalConfig = {
    // Condensed 2-step form with smart defaults
    steps: [
      { id: 'step1', name: 'Essential', title: 'Get Started', fields: [], completionThreshold: 3, priority: 'high' as const },
      { id: 'step2', name: 'Context', title: 'Tell Us More', fields: [], completionThreshold: 1, priority: 'medium' as const }
    ],
    conditionalLogic: [],
    contentGating: [],
    leadScoring: DEFAULT_LEAD_SCORING_CONFIG,
    personalization: { contentRecommendations: [], messagingVariants: [], ctaPersonalization: [] }
  }

  return (
    <ProgressiveForm
      config={variant === 'control' ? controlConfig : experimentalConfig}
      onFormComplete={(profile) => {
        // Track conversion by variant
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'form_completion', {
            test_variant: variant,
            lead_score: profile.leadScore
          })
        }
      }}
      variant="embedded"
      showProgress
    />
  )
}

export default {
  WhitepaperLeadCapture,
  ContentHub,
  EmbeddedLeadWidget,
  ABTestProgressiveForm
}