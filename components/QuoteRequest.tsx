'use client'

import React, { useState } from 'react'
import { Calculator, Building, Users, Shield, DollarSign, FileText, Check, AlertCircle, Loader2 } from 'lucide-react'
import { cn, isValidEmail } from '@/lib/utils'
import PrimaryCTA from './cta/PrimaryCTA'
import SecondaryCTA from './cta/SecondaryCTA'

interface QuoteRequestProps {
  productName?: string
  className?: string
  onComplete?: (data: QuoteData) => void
}

interface QuoteData {
  // Contact Info
  firstName: string
  lastName: string
  email: string
  phone: string
  
  // Company Info
  company: string
  jobTitle: string
  website: string
  industry: string
  companySize: string
  
  // Requirements
  products: string[]
  users: string
  budget: string
  timeline: string
  
  // Additional
  currentSolution?: string
  painPoints?: string
  requirements?: string
  
  // Lead Score (calculated)
  leadScore?: number
}

const industries = [
  'Technology',
  'Financial Services',
  'Healthcare',
  'Retail & E-commerce',
  'Manufacturing',
  'Government',
  'Education',
  'Media & Entertainment',
  'Telecommunications',
  'Other',
]

const companySizes = [
  { value: '1-50', label: 'Startup (1-50)', score: 10 },
  { value: '51-200', label: 'Small Business (51-200)', score: 20 },
  { value: '201-1000', label: 'Mid-Market (201-1000)', score: 30 },
  { value: '1001-5000', label: 'Enterprise (1001-5000)', score: 40 },
  { value: '5000+', label: 'Large Enterprise (5000+)', score: 50 },
]

const budgetRanges = [
  { value: '<10k', label: 'Less than $10,000', score: 5 },
  { value: '10k-50k', label: '$10,000 - $50,000', score: 15 },
  { value: '50k-100k', label: '$50,000 - $100,000', score: 25 },
  { value: '100k-500k', label: '$100,000 - $500,000', score: 40 },
  { value: '500k+', label: 'More than $500,000', score: 50 },
]

const timelines = [
  { value: 'immediate', label: 'Immediate (< 1 month)', score: 50 },
  { value: '1-3months', label: '1-3 months', score: 40 },
  { value: '3-6months', label: '3-6 months', score: 30 },
  { value: '6-12months', label: '6-12 months', score: 20 },
  { value: '12months+', label: 'More than 12 months', score: 10 },
]

const products = [
  'ADAPT-AI - Advanced Adversarial Testing',
  'perfecX Red-T - Red Team Testing',
  'perfecX Agent - Autonomous Security',
  'SafeAI Guard - Real-time Protection',
  'perfecX Comply - Compliance Management',
  'perfecX G-Rails - AI Guardrails',
  'PromptShield - Prompt Injection Defense',
  'TorScan - Dark Web Monitoring',
]

export default function QuoteRequest({ productName, className, onComplete }: QuoteRequestProps) {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [data, setData] = useState<QuoteData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    website: '',
    industry: '',
    companySize: '',
    products: productName ? [`${productName} - ${products.find(p => p.startsWith(productName))?.split(' - ')[1] || ''}`] : [],
    users: '',
    budget: '',
    timeline: '',
    currentSolution: '',
    painPoints: '',
    requirements: '',
  })

  const calculateLeadScore = (): number => {
    let score = 0
    
    // Company size score
    const sizeScore = companySizes.find(s => s.value === data.companySize)?.score || 0
    score += sizeScore
    
    // Budget score
    const budgetScore = budgetRanges.find(b => b.value === data.budget)?.score || 0
    score += budgetScore
    
    // Timeline score
    const timelineScore = timelines.find(t => t.value === data.timeline)?.score || 0
    score += timelineScore
    
    // Product interest score (5 points per product)
    score += data.products.length * 5
    
    // Additional qualification
    if (data.currentSolution) score += 10
    if (data.painPoints) score += 10
    if (data.industry === 'Financial Services' || data.industry === 'Healthcare') score += 10
    
    return Math.min(score, 100) // Cap at 100
  }

  const validateStep = (stepNumber: number): boolean => {
    const newErrors: Record<string, string> = {}

    switch (stepNumber) {
      case 1:
        if (!data.firstName.trim()) newErrors.firstName = 'First name is required'
        if (!data.lastName.trim()) newErrors.lastName = 'Last name is required'
        if (!data.email.trim()) {
          newErrors.email = 'Email is required'
        } else if (!isValidEmail(data.email)) {
          newErrors.email = 'Please enter a valid email'
        }
        if (!data.phone.trim()) newErrors.phone = 'Phone number is required'
        break
      case 2:
        if (!data.company.trim()) newErrors.company = 'Company name is required'
        if (!data.jobTitle.trim()) newErrors.jobTitle = 'Job title is required'
        if (!data.industry) newErrors.industry = 'Please select an industry'
        if (!data.companySize) newErrors.companySize = 'Please select company size'
        break
      case 3:
        if (data.products.length === 0) newErrors.products = 'Please select at least one product'
        if (!data.users.trim()) newErrors.users = 'Number of users is required'
        if (!data.budget) newErrors.budget = 'Please select a budget range'
        if (!data.timeline) newErrors.timeline = 'Please select a timeline'
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleSubmit = async () => {
    if (!validateStep(3)) return

    setLoading(true)
    
    try {
      const leadScore = calculateLeadScore()
      const quoteData = { ...data, leadScore }
      
      // Track quote request
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'quote_requested', {
          company_size: data.companySize,
          budget: data.budget,
          timeline: data.timeline,
          lead_score: leadScore,
          products: data.products.join(','),
        })
      }

      // In production, this would send to your CRM/quote system
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      if (onComplete) {
        onComplete(quoteData)
      } else {
        setStep(4) // Success state
      }
    } catch (error) {
      console.error('Quote request failed:', error)
      setErrors({ submit: 'Failed to submit quote request. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  const updateData = (updates: Partial<QuoteData>) => {
    setData(prev => ({ ...prev, ...updates }))
    // Clear errors for updated fields
    const errorKeys = Object.keys(updates)
    setErrors(prev => {
      const newErrors = { ...prev }
      errorKeys.forEach(key => delete newErrors[key])
      return newErrors
    })
  }

  const containerClasses = cn(
    'bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8',
    className
  )

  if (step === 4) {
    const leadScore = calculateLeadScore()
    const isHighValue = leadScore >= 60
    
    return (
      <div className={containerClasses}>
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-6">
            <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Quote Request Submitted!
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {isHighValue 
              ? "Thank you for your interest! Our enterprise sales team will contact you within 24 hours with a customized quote."
              : "Thank you for your interest! Our sales team will review your requirements and send you a quote within 2 business days."
            }
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-left mb-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What happens next:</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>You'll receive a confirmation email at {data.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Our team will review your requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>You'll receive a customized quote based on your needs</span>
              </li>
              {isHighValue && (
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>A dedicated account executive will be assigned to you</span>
                </li>
              )}
            </ul>
          </div>
          <SecondaryCTA
            text="Back to Homepage"
            href="/"
            icon="arrow"
            size="lg"
          />
        </div>
      </div>
    )
  }

  return (
    <div className={containerClasses}>
      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Step {step} of 3
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-500">
            {step === 1 && 'Contact Information'}
            {step === 2 && 'Company Details'}
            {step === 3 && 'Requirements & Budget'}
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1: Contact Information */}
      {step === 1 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Get Your Custom Quote
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Tell us about yourself and we'll prepare a tailored pricing proposal.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                First Name *
              </label>
              <input
                type="text"
                value={data.firstName}
                onChange={(e) => updateData({ firstName: e.target.value })}
                className={cn(
                  'w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500',
                  errors.firstName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                )}
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Last Name *
              </label>
              <input
                type="text"
                value={data.lastName}
                onChange={(e) => updateData({ lastName: e.target.value })}
                className={cn(
                  'w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500',
                  errors.lastName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                )}
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Work Email *
            </label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => updateData({ email: e.target.value })}
              className={cn(
                'w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500',
                errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              )}
              placeholder="john.doe@company.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              value={data.phone}
              onChange={(e) => updateData({ phone: e.target.value })}
              className={cn(
                'w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500',
                errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              )}
              placeholder="+1 (555) 123-4567"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone}</p>
            )}
          </div>

          <div className="flex justify-end">
            <PrimaryCTA
              text="Next"
              onClick={handleNext}
              icon="arrow"
              size="lg"
              trackingId="quote-request-step1"
            />
          </div>
        </div>
      )}

      {/* Step 2: Company Details */}
      {step === 2 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Tell us about your company
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              This helps us understand your needs and provide accurate pricing.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Company Name *
            </label>
            <input
              type="text"
              value={data.company}
              onChange={(e) => updateData({ company: e.target.value })}
              className={cn(
                'w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500',
                errors.company ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              )}
            />
            {errors.company && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.company}</p>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Job Title *
              </label>
              <input
                type="text"
                value={data.jobTitle}
                onChange={(e) => updateData({ jobTitle: e.target.value })}
                className={cn(
                  'w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500',
                  errors.jobTitle ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                )}
              />
              {errors.jobTitle && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.jobTitle}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Company Website
              </label>
              <input
                type="url"
                value={data.website}
                onChange={(e) => updateData({ website: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
                placeholder="https://company.com"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Industry *
              </label>
              <select
                value={data.industry}
                onChange={(e) => updateData({ industry: e.target.value })}
                className={cn(
                  'w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500',
                  errors.industry ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                )}
              >
                <option value="">Select industry</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
              {errors.industry && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.industry}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Company Size *
              </label>
              <select
                value={data.companySize}
                onChange={(e) => updateData({ companySize: e.target.value })}
                className={cn(
                  'w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500',
                  errors.companySize ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                )}
              >
                <option value="">Select company size</option>
                {companySizes.map(size => (
                  <option key={size.value} value={size.value}>{size.label}</option>
                ))}
              </select>
              {errors.companySize && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.companySize}</p>
              )}
            </div>
          </div>

          <div className="flex justify-between">
            <SecondaryCTA
              text="Back"
              onClick={handleBack}
              icon="chevron"
              iconPosition="left"
              variant="ghost"
              size="lg"
            />
            <PrimaryCTA
              text="Next"
              onClick={handleNext}
              icon="arrow"
              size="lg"
              trackingId="quote-request-step2"
            />
          </div>
        </div>
      )}

      {/* Step 3: Requirements & Budget */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Your Requirements & Budget
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Help us understand your needs to provide the most accurate quote.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Products of Interest * (Select all that apply)
            </label>
            <div className="space-y-2">
              {products.map(product => (
                <label key={product} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={data.products.includes(product)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        updateData({ products: [...data.products, product] })
                      } else {
                        updateData({ products: data.products.filter(p => p !== product) })
                      }
                    }}
                    className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">{product}</span>
                </label>
              ))}
            </div>
            {errors.products && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.products}</p>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Number of Users *
              </label>
              <input
                type="text"
                value={data.users}
                onChange={(e) => updateData({ users: e.target.value })}
                className={cn(
                  'w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500',
                  errors.users ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                )}
                placeholder="e.g., 100"
              />
              {errors.users && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.users}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Budget Range *
              </label>
              <select
                value={data.budget}
                onChange={(e) => updateData({ budget: e.target.value })}
                className={cn(
                  'w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500',
                  errors.budget ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                )}
              >
                <option value="">Select budget range</option>
                {budgetRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
              {errors.budget && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.budget}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Implementation Timeline *
            </label>
            <select
              value={data.timeline}
              onChange={(e) => updateData({ timeline: e.target.value })}
              className={cn(
                'w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500',
                errors.timeline ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              )}
            >
              <option value="">Select timeline</option>
              {timelines.map(timeline => (
                <option key={timeline.value} value={timeline.value}>{timeline.label}</option>
              ))}
            </select>
            {errors.timeline && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.timeline}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Current Security Solution (Optional)
            </label>
            <input
              type="text"
              value={data.currentSolution}
              onChange={(e) => updateData({ currentSolution: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
              placeholder="e.g., In-house solution, Competitor X"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Key Requirements or Pain Points (Optional)
            </label>
            <textarea
              value={data.requirements}
              onChange={(e) => updateData({ requirements: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
              placeholder="Tell us about your specific security challenges or requirements..."
            />
          </div>

          {errors.submit && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-800 dark:text-red-300">{errors.submit}</p>
              </div>
            </div>
          )}

          <div className="flex justify-between">
            <SecondaryCTA
              text="Back"
              onClick={handleBack}
              icon="chevron"
              iconPosition="left"
              variant="ghost"
              size="lg"
            />
            <PrimaryCTA
              text="Get Quote"
              onClick={handleSubmit}
              icon="arrow"
              size="lg"
              loading={loading}
              trackingId="quote-request-submit"
              trackingData={{
                company_size: data.companySize,
                budget: data.budget,
                products: data.products.join(','),
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}