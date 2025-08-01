'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Download, FileText, BookOpen, FileCheck, Shield, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import PrimaryCTA from './PrimaryCTA'
import LeadCaptureForm from '../LeadCaptureForm'

interface ResourceDownloadCTAProps {
  title: string
  description: string
  resourceType: 'whitepaper' | 'guide' | 'ebook' | 'report' | 'checklist'
  resourceUrl?: string
  fileSize?: string
  variant?: 'inline' | 'card' | 'banner'
  className?: string
  coverImage?: string
}

export default function ResourceDownloadCTA({
  title,
  description,
  resourceType,
  resourceUrl,
  fileSize,
  variant = 'card',
  className,
  coverImage,
}: ResourceDownloadCTAProps) {
  const [showForm, setShowForm] = useState(false)

  const resourceIcons = {
    whitepaper: FileText,
    guide: BookOpen,
    ebook: BookOpen,
    report: FileCheck,
    checklist: Shield,
  }

  const Icon = resourceIcons[resourceType] || FileText

  const handleComplete = () => {
    // Analytics tracking handled in LeadCaptureForm
    setTimeout(() => {
      setShowForm(false)
    }, 3000)
  }

  if (variant === 'inline') {
    return (
      <div className={cn('bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6', className)}>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
              <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              {description}
            </p>
            <PrimaryCTA
              text={`Download ${resourceType.charAt(0).toUpperCase() + resourceType.slice(1)}`}
              onClick={() => setShowForm(true)}
              icon="download"
              size="sm"
              trackingId={`resource-download-inline-${resourceType}`}
            />
          </div>
        </div>

        {/* Modal form */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="relative max-w-md w-full">
              <button
                onClick={() => setShowForm(false)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
              >
                <X className="h-6 w-6" />
              </button>
              <LeadCaptureForm
                resourceTitle={title}
                resourceType={resourceType}
                resourceUrl={resourceUrl}
                onComplete={handleComplete}
                variant="modal"
              />
            </div>
          </div>
        )}
      </div>
    )
  }

  if (variant === 'banner') {
    return (
      <div className={cn(
        'bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg p-8 text-white',
        className
      )}>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Icon className="h-6 w-6" />
              <span className="text-sm font-medium uppercase tracking-wide opacity-90">
                Free {resourceType}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="opacity-90">{description}</p>
          </div>
          <div className="flex-shrink-0">
            <PrimaryCTA
              text="Download Now"
              onClick={() => setShowForm(true)}
              icon="download"
              variant="default"
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-100"
              trackingId={`resource-download-banner-${resourceType}`}
            />
          </div>
        </div>

        {/* Modal form */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="relative max-w-md w-full">
              <button
                onClick={() => setShowForm(false)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300"
              >
                <X className="h-6 w-6" />
              </button>
              <LeadCaptureForm
                resourceTitle={title}
                resourceType={resourceType}
                resourceUrl={resourceUrl}
                onComplete={handleComplete}
                variant="modal"
              />
            </div>
          </div>
        )}
      </div>
    )
  }

  // Default card variant
  return (
    <div className={cn(
      'bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow',
      className
    )}>
      {coverImage && (
        <div className="aspect-[16/9] bg-gray-100 dark:bg-gray-800 relative">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      {showForm ? (
        <LeadCaptureForm
          resourceTitle={title}
          resourceType={resourceType}
          resourceUrl={resourceUrl}
          onComplete={handleComplete}
          variant="embedded"
        />
      ) : (
        <div className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-medium uppercase tracking-wide text-primary-600 dark:text-primary-400">
                  {resourceType}
                </span>
                {fileSize && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    • {fileSize}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {description}
              </p>
            </div>
          </div>
          
          <PrimaryCTA
            text="Download Free"
            onClick={() => setShowForm(true)}
            icon="download"
            fullWidth
            trackingId={`resource-download-card-${resourceType}`}
            trackingData={{
              resource_title: title,
              resource_type: resourceType,
            }}
          />
        </div>
      )}
    </div>
  )
}