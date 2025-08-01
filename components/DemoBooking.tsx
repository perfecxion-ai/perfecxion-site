'use client'

import React, { useState } from 'react'
import { Calendar, Clock, Globe, User, Mail, Phone, Building, Check, AlertCircle } from 'lucide-react'
import { cn, isValidEmail } from '@/lib/utils'
import PrimaryCTA from './cta/PrimaryCTA'
import SecondaryCTA from './cta/SecondaryCTA'

interface DemoBookingProps {
  productName?: string
  className?: string
  onComplete?: (data: BookingData) => void
}

interface BookingData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  jobTitle: string
  teamSize: string
  productInterest: string[]
  timeSlot?: string
  timezone?: string
  message?: string
}

const timeSlots = [
  { value: '09:00', label: '9:00 AM' },
  { value: '10:00', label: '10:00 AM' },
  { value: '11:00', label: '11:00 AM' },
  { value: '14:00', label: '2:00 PM' },
  { value: '15:00', label: '3:00 PM' },
  { value: '16:00', label: '4:00 PM' },
]

const timezones = [
  { value: 'America/New_York', label: 'Eastern Time (ET)' },
  { value: 'America/Chicago', label: 'Central Time (CT)' },
  { value: 'America/Denver', label: 'Mountain Time (MT)' },
  { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
  { value: 'Europe/London', label: 'GMT/BST (London)' },
  { value: 'Europe/Paris', label: 'CET/CEST (Paris)' },
  { value: 'Asia/Tokyo', label: 'JST (Tokyo)' },
  { value: 'Australia/Sydney', label: 'AEDT (Sydney)' },
]

const teamSizes = [
  '1-10',
  '11-50',
  '51-200',
  '201-500',
  '500+',
]

const products = [
  'ADAPT-AI',
  'perfecX Red-T',
  'perfecX Agent',
  'SafeAI Guard',
  'perfecX Comply',
  'perfecX G-Rails',
  'PromptShield',
  'TorScan',
]

export default function DemoBooking({ productName, className, onComplete }: DemoBookingProps) {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [data, setData] = useState<BookingData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    teamSize: '',
    productInterest: productName ? [productName] : [],
    timezone: 'America/New_York',
    message: '',
  })

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
        if (!data.teamSize) newErrors.teamSize = 'Please select team size'
        if (data.productInterest.length === 0) newErrors.productInterest = 'Please select at least one product'
        break
      case 3:
        if (!data.timeSlot) newErrors.timeSlot = 'Please select a time slot'
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
      // Track demo booking
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'demo_booked', {
          company: data.company,
          team_size: data.teamSize,
          products: data.productInterest.join(','),
        })
      }

      // In production, this would send to your booking system
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      if (onComplete) {
        onComplete(data)
      } else {
        setStep(4) // Success state
      }
    } catch (error) {
      console.error('Booking failed:', error)
      setErrors({ submit: 'Failed to book demo. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  const updateData = (updates: Partial<BookingData>) => {
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
    return (
      <div className={containerClasses}>
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-6">
            <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Demo Scheduled Successfully!
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We've sent a confirmation email to {data.email} with your demo details.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-left mb-6">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Demo Details:</h4>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-gray-600 dark:text-gray-400">Date & Time:</dt>
                <dd className="text-gray-900 dark:text-white font-medium">
                  {data.timeSlot} {data.timezone}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600 dark:text-gray-400">Products:</dt>
                <dd className="text-gray-900 dark:text-white font-medium">
                  {data.productInterest.join(', ')}
                </dd>
              </div>
            </dl>
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
            {step === 3 && 'Schedule Demo'}
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
              Let's get to know you
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Tell us about yourself so we can personalize your demo experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                First Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={data.firstName}
                  onChange={(e) => updateData({ firstName: e.target.value })}
                  className={cn(
                    'w-full px-4 py-2 pl-10 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500',
                    errors.firstName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                  )}
                  placeholder="John"
                />
                <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
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
                placeholder="Doe"
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
            <div className="relative">
              <input
                type="email"
                value={data.email}
                onChange={(e) => updateData({ email: e.target.value })}
                className={cn(
                  'w-full px-4 py-2 pl-10 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500',
                  errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                )}
                placeholder="john.doe@company.com"
              />
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <input
                type="tel"
                value={data.phone}
                onChange={(e) => updateData({ phone: e.target.value })}
                className={cn(
                  'w-full px-4 py-2 pl-10 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500',
                  errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                )}
                placeholder="+1 (555) 123-4567"
              />
              <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
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
              trackingId="demo-booking-step1"
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
              This helps us tailor the demo to your specific needs.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Company Name *
            </label>
            <div className="relative">
              <input
                type="text"
                value={data.company}
                onChange={(e) => updateData({ company: e.target.value })}
                className={cn(
                  'w-full px-4 py-2 pl-10 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500',
                  errors.company ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                )}
                placeholder="Acme Corporation"
              />
              <Building className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            {errors.company && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.company}</p>
            )}
          </div>

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
              placeholder="Chief Security Officer"
            />
            {errors.jobTitle && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.jobTitle}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Team Size *
            </label>
            <select
              value={data.teamSize}
              onChange={(e) => updateData({ teamSize: e.target.value })}
              className={cn(
                'w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500',
                errors.teamSize ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              )}
            >
              <option value="">Select team size</option>
              {teamSizes.map(size => (
                <option key={size} value={size}>{size} employees</option>
              ))}
            </select>
            {errors.teamSize && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.teamSize}</p>
            )}
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
                    checked={data.productInterest.includes(product)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        updateData({ productInterest: [...data.productInterest, product] })
                      } else {
                        updateData({ productInterest: data.productInterest.filter(p => p !== product) })
                      }
                    }}
                    className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">{product}</span>
                </label>
              ))}
            </div>
            {errors.productInterest && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.productInterest}</p>
            )}
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
              trackingId="demo-booking-step2"
            />
          </div>
        </div>
      )}

      {/* Step 3: Schedule Demo */}
      {step === 3 && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Schedule your demo
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Pick a time that works best for you. Demos typically last 30-45 minutes.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Select Time Slot *
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {timeSlots.map(slot => (
                <button
                  key={slot.value}
                  onClick={() => updateData({ timeSlot: slot.value })}
                  className={cn(
                    'px-4 py-3 rounded-lg border-2 font-medium transition-all',
                    data.timeSlot === slot.value
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                      : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500'
                  )}
                >
                  <Clock className="h-4 w-4 mx-auto mb-1" />
                  {slot.label}
                </button>
              ))}
            </div>
            {errors.timeSlot && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.timeSlot}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Time Zone
            </label>
            <div className="relative">
              <select
                value={data.timezone}
                onChange={(e) => updateData({ timezone: e.target.value })}
                className="w-full px-4 py-2 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
              >
                {timezones.map(tz => (
                  <option key={tz.value} value={tz.value}>{tz.label}</option>
                ))}
              </select>
              <Globe className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Additional Information (Optional)
            </label>
            <textarea
              value={data.message}
              onChange={(e) => updateData({ message: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
              placeholder="Tell us about your specific security challenges or what you'd like to focus on during the demo..."
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
              text="Schedule Demo"
              onClick={handleSubmit}
              icon="calendar"
              size="lg"
              loading={loading}
              trackingId="demo-booking-submit"
              trackingData={{
                company: data.company,
                products: data.productInterest.join(','),
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}