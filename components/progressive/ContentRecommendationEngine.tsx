'use client'

import React, { useMemo, useState } from 'react'
import { 
  Sparkles, 
  TrendingUp, 
  BookOpen, 
  Shield, 
  Target, 
  Clock,
  ChevronRight,
  Star,
  Download,
  Eye
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { 
  LeadProfile, 
  ContentResource, 
  AudienceSegment,
  ResourceType 
} from '@/lib/progressive-profiling'
import { useContentRecommendations } from '@/lib/hooks/useContentRecommendations'
import { useContentGating } from '@/lib/hooks/useContentGating'
import ContentGate from './ContentGate'

interface ContentRecommendationEngineProps {
  userProfile: Partial<LeadProfile>
  onProfileUpdate?: (profile: Partial<LeadProfile>) => void
  maxRecommendations?: number
  showPersonalization?: boolean
  variant?: 'grid' | 'list' | 'carousel'
  className?: string
}

export default function ContentRecommendationEngine({
  userProfile,
  onProfileUpdate,
  maxRecommendations = 6,
  showPersonalization = true,
  variant = 'grid',
  className
}: ContentRecommendationEngineProps) {
  const [selectedResource, setSelectedResource] = useState<ContentResource | null>(null)
  const [viewMode, setViewMode] = useState<'all' | 'accessible' | 'recommended'>('recommended')

  const { 
    getRecommendations, 
    getPersonalizedMessaging,
    getRecommendationReason,
    getContentScore
  } = useContentRecommendations()
  
  const { getAudienceSegment, checkAccess } = useContentGating()

  // Get user's audience segment
  const audienceSegment = useMemo(() => 
    getAudienceSegment(userProfile), 
    [userProfile, getAudienceSegment]
  )

  // Get content recommendations
  const recommendations = useMemo(() => 
    getRecommendations(userProfile, maxRecommendations), 
    [userProfile, maxRecommendations, getRecommendations]
  )

  // Filter recommendations based on view mode
  const filteredRecommendations = useMemo(() => {
    if (viewMode === 'all') return recommendations
    
    if (viewMode === 'accessible') {
      return recommendations.filter(resource => 
        checkAccess(resource, userProfile).hasAccess
      )
    }
    
    // Default to recommended (high-scoring content)
    return recommendations.filter(resource => 
      getContentScore(resource, userProfile) >= 70
    )
  }, [recommendations, viewMode, checkAccess, userProfile, getContentScore])

  // Get personalized messaging
  const messaging = useMemo(() => 
    getPersonalizedMessaging(audienceSegment, userProfile), 
    [audienceSegment, userProfile, getPersonalizedMessaging]
  )

  const resourceIcons = {
    whitepaper: BookOpen,
    guide: BookOpen,
    ebook: BookOpen,
    report: Shield,
    checklist: Target,
    template: BookOpen,
    calculator: TrendingUp,
    assessment: Shield
  }

  const segmentIcons = {
    developers: '👨‍💻',
    security_teams: '🛡️',
    executives: '👔',
    compliance: '📋',
    startups: '🚀',
    enterprise: '🏢',
    evaluators: '🔍',
    implementers: '⚙️'
  }

  if (filteredRecommendations.length === 0) {
    return (
      <div className={cn('text-center py-12', className)}>
        <Sparkles className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          No recommendations yet
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Complete your profile to get personalized content recommendations.
        </p>
      </div>
    )
  }

  return (
    <div className={cn('content-recommendations', className)}>
      {/* Header */}
      {showPersonalization && (
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
              <Sparkles className="h-5 w-5 text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {messaging.headline}
              </h2>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span>Personalized for</span>
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-medium">
                  {segmentIcons[audienceSegment]}
                  {audienceSegment.replace('_', ' ')}
                </span>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {messaging.description}
          </p>

          {/* View Mode Tabs */}
          <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            {[
              { key: 'recommended', label: 'Recommended', icon: Star },
              { key: 'accessible', label: 'Available Now', icon: Download },
              { key: 'all', label: 'All Content', icon: Eye }
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setViewMode(key as any)}
                className={cn(
                  'flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                  viewMode === key
                    ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                )}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Content Grid/List */}
      <div className={cn(
        variant === 'grid' && 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
        variant === 'list' && 'space-y-4',
        variant === 'carousel' && 'flex gap-6 overflow-x-auto pb-4'
      )}>
        {filteredRecommendations.map((resource) => (
          <ContentRecommendationCard
            key={resource.id}
            resource={resource}
            userProfile={userProfile}
            audienceSegment={audienceSegment}
            onSelect={() => setSelectedResource(resource)}
            getRecommendationReason={getRecommendationReason}
            getContentScore={getContentScore}
            variant={variant}
          />
        ))}
      </div>

      {/* Selected Resource Modal */}
      {selectedResource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-auto">
            <ContentGate
              resource={selectedResource}
              userProfile={userProfile}
              onProfileUpdate={onProfileUpdate}
              onAccess={() => setSelectedResource(null)}
              variant="modal"
              showRequirements
            />
            <button
              onClick={() => setSelectedResource(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

// Individual recommendation card component
interface ContentRecommendationCardProps {
  resource: ContentResource
  userProfile: Partial<LeadProfile>
  audienceSegment: AudienceSegment
  onSelect: () => void
  getRecommendationReason: (resource: ContentResource, profile: Partial<LeadProfile>) => string
  getContentScore: (resource: ContentResource, profile: Partial<LeadProfile>) => number
  variant?: 'grid' | 'list' | 'carousel'
}

function ContentRecommendationCard({
  resource,
  userProfile,
  audienceSegment,
  onSelect,
  getRecommendationReason,
  getContentScore,
  variant = 'grid'
}: ContentRecommendationCardProps) {
  const { checkAccess } = useContentGating()
  
  const accessResult = checkAccess(resource, userProfile)
  const contentScore = getContentScore(resource, userProfile)
  const reason = getRecommendationReason(resource, userProfile)
  
  const resourceIcons = {
    whitepaper: BookOpen,
    guide: BookOpen,
    ebook: BookOpen,
    report: Shield,
    checklist: Target,
    template: BookOpen,
    calculator: TrendingUp,
    assessment: Shield
  }
  
  const ResourceIcon = resourceIcons[resource.type] || BookOpen

  return (
    <div className={cn(
      'bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200 cursor-pointer group',
      variant === 'carousel' && 'flex-shrink-0 w-80',
      variant === 'list' && 'flex items-center gap-4 p-4'
    )}>
      <div 
        className={cn(
          'p-6',
          variant === 'list' && 'flex-1 p-0'
        )}
        onClick={onSelect}
      >
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className={cn(
            'flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center',
            accessResult.hasAccess 
              ? 'bg-green-100 dark:bg-green-900/20' 
              : 'bg-primary-100 dark:bg-primary-900/20'
          )}>
            <ResourceIcon className={cn(
              'h-6 w-6',
              accessResult.hasAccess 
                ? 'text-green-600 dark:text-green-400'
                : 'text-primary-600 dark:text-primary-400'
            )} />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-medium uppercase tracking-wide text-primary-600 dark:text-primary-400">
                {resource.type}
              </span>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 text-yellow-500" />
                <span className="text-xs text-gray-500">{contentScore}%</span>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {resource.title}
            </h3>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {resource.description}
            </p>
          </div>
        </div>

        {/* Recommendation Reason */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-xs text-primary-600 dark:text-primary-400 mb-1">
            <Target className="h-3 w-3" />
            <span className="font-medium">Why this is recommended:</span>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {reason}
          </p>
        </div>

        {/* Access Status */}
        <div className={cn(
          'flex items-center justify-between p-3 rounded-lg text-sm',
          accessResult.hasAccess 
            ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300'
            : 'bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300'
        )}>
          <span className="font-medium">
            {accessResult.hasAccess ? 'Ready to download' : 'Complete profile to access'}
          </span>
          <ChevronRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  )
}