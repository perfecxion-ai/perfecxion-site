'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FileText, Download, Trash2, Edit3, Shield, Mail, CheckCircle, AlertCircle, Clock } from 'lucide-react'
import { auditLogger, AuditEventType, AuditCategory } from '@/lib/audit-logger'

interface DataRequest {
  type: 'access' | 'deletion' | 'rectification' | 'portability'
  email: string
  firstName: string
  lastName: string
  description: string
  reason?: string
  additionalInfo?: string
}

export default function DataRequestPage() {
  const [requestType, setRequestType] = useState<DataRequest['type']>('access')
  const [formData, setFormData] = useState<Omit<DataRequest, 'type'>>({
    email: '',
    firstName: '',
    lastName: '',
    description: '',
    reason: '',
    additionalInfo: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const requestTypes = [
    {
      id: 'access',
      title: 'Access Your Data',
      description: 'Request a copy of all personal data we hold about you',
      icon: Download,
      color: 'blue',
    },
    {
      id: 'deletion',
      title: 'Delete Your Data',
      description: 'Request permanent deletion of your personal data',
      icon: Trash2,
      color: 'red',
    },
    {
      id: 'rectification',
      title: 'Correct Your Data',
      description: 'Request corrections to inaccurate personal data',
      icon: Edit3,
      color: 'yellow',
    },
    {
      id: 'portability',
      title: 'Export Your Data',
      description: 'Receive your data in a portable, machine-readable format',
      icon: FileText,
      color: 'green',
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Log the data request
    auditLogger.log({
      eventType: AuditEventType.DATA_REQUEST,
      action: `Data ${requestType} request submitted`,
      details: {
        requestType,
        email: formData.email,
        timestamp: new Date().toISOString(),
      },
      category: AuditCategory.PRIVACY,
    })

    // In production, this would send to your backend
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitted(true)
      setIsSubmitting(false)
    } catch (error) {
      setIsSubmitting(false)
      console.error('Failed to submit request:', error)
    }
  }

  if (submitted) {
    return (
      <main className="bg-white dark:bg-background-dark min-h-screen">
        <div className="max-width container-padding section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Request Submitted Successfully
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We've received your data request and will process it within 30 days as required by law.
            </p>
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                What happens next?
              </h2>
              <ul className="text-left space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>You'll receive an email confirmation within 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>We'll verify your identity to protect your data</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Your request will be processed within 30 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>You'll be notified once your request is complete</span>
                </li>
              </ul>
            </div>
            <Link href="/" className="btn-primary">
              Return to Home
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-white dark:bg-background-dark min-h-screen">
      <div className="max-width container-padding section-padding">
        {/* Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="h-4 w-4" />
            Privacy Rights
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Data Subject Request
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Exercise your rights under GDPR and CCPA. Submit a request to access, delete, correct, or export your personal data.
          </p>
        </header>

        {/* Request Type Selection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Select Request Type
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {requestTypes.map((type) => {
              const Icon = type.icon
              const isSelected = requestType === type.id
              return (
                <button
                  key={type.id}
                  onClick={() => setRequestType(type.id as DataRequest['type'])}
                  className={`p-6 rounded-lg border-2 transition-all text-left ${
                    isSelected
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <Icon className={`h-8 w-8 mb-3 text-${type.color}-600 dark:text-${type.color}-400`} />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {type.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {type.description}
                  </p>
                </button>
              )
            })}
          </div>
        </section>

        {/* Request Form */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Submit Your Request
          </h2>
          <form onSubmit={handleSubmit} className="max-w-2xl">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
              />
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Use the email address associated with your perfecXion.ai account
              </p>
            </div>

            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Request Details *
              </label>
              <textarea
                id="description"
                required
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder={`Please describe your ${requestType} request in detail...`}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {requestType === 'deletion' && (
              <div className="mb-6">
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Reason for Deletion (Optional)
                </label>
                <input
                  type="text"
                  id="reason"
                  value={formData.reason || ''}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
                />
              </div>
            )}

            <div className="mb-8">
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Additional Information (Optional)
              </label>
              <textarea
                id="additionalInfo"
                rows={3}
                value={formData.additionalInfo || ''}
                onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Warning for deletion requests */}
            {requestType === 'deletion' && (
              <div className="mb-8 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-red-900 dark:text-red-200 mb-1">
                      Important: Data Deletion
                    </h4>
                    <p className="text-sm text-red-800 dark:text-red-300">
                      Deleting your data is permanent and cannot be undone. You will lose access to all services and historical data.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Clock className="h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Mail className="h-5 w-5" />
                    Submit Request
                  </>
                )}
              </button>
              <Link href="/" className="btn-ghost">
                Cancel
              </Link>
            </div>
          </form>
        </section>

        {/* Information Section */}
        <section className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            About Your Privacy Rights
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Under GDPR (EU Residents)
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Right to access your personal data</li>
                <li>• Right to rectification of inaccurate data</li>
                <li>• Right to erasure ("right to be forgotten")</li>
                <li>• Right to data portability</li>
                <li>• Right to object to processing</li>
                <li>• Right to restriction of processing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Under CCPA (California Residents)
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Right to know what data is collected</li>
                <li>• Right to delete personal information</li>
                <li>• Right to opt-out of sale of data</li>
                <li>• Right to non-discrimination</li>
                <li>• Right to correct inaccurate information</li>
                <li>• Right to limit use of sensitive data</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              For more information about your privacy rights, please read our{' '}
              <Link href="/privacy" className="text-primary-600 dark:text-primary-400 hover:underline">
                Privacy Policy
              </Link>{' '}
              or contact our Data Protection Officer at{' '}
              <a href="mailto:dpo@perfecxion.ai" className="text-primary-600 dark:text-primary-400 hover:underline">
                dpo@perfecxion.ai
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}