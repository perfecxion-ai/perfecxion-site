'use client'

import { useState } from 'react'
import { X, Search, Calendar, Filter, AlertTriangle, Server, Tag } from 'lucide-react'
import { AnalyticsFilters, VulnerabilitySeverity, VulnerabilityCategory, VulnerabilityStatus } from '@/lib/analytics-types'

interface InteractiveFiltersProps {
  filters: AnalyticsFilters
  onFiltersChange: (filters: AnalyticsFilters) => void
  onClose: () => void
}

export default function InteractiveFilters({ filters, onFiltersChange, onClose }: InteractiveFiltersProps) {
  const [localFilters, setLocalFilters] = useState<AnalyticsFilters>(filters)

  const severityOptions: VulnerabilitySeverity[] = ['critical', 'high', 'medium', 'low', 'info']
  const categoryOptions: VulnerabilityCategory[] = [
    'injection',
    'broken_auth',
    'sensitive_data',
    'xxe',
    'broken_access',
    'security_misconfig',
    'xss',
    'insecure_deserialization',
    'known_vulnerabilities',
    'insufficient_logging'
  ]
  const statusOptions: VulnerabilityStatus[] = ['open', 'in_progress', 'resolved', 'false_positive', 'accepted_risk']
  
  const systemOptions = [
    'web-server-01',
    'web-server-02',
    'api-gateway',
    'main-database',
    'analytics-db',
    'ml-pipeline',
    'auth-service',
    'file-storage',
    'admin-panel',
    'user-dashboard'
  ]

  const tagOptions = [
    'production',
    'staging',
    'development',
    'high-traffic',
    'customer-facing',
    'internal',
    'api',
    'database',
    'ai-ml',
    'authentication',
    'payment',
    'pii',
    'gdpr',
    'hipaa',
    'sox'
  ]

  const handleFilterChange = (key: keyof AnalyticsFilters, value: any) => {
    const updatedFilters = { ...localFilters, [key]: value }
    setLocalFilters(updatedFilters)
  }

  const handleArrayFilterToggle = (key: keyof AnalyticsFilters, value: string) => {
    const currentArray = (localFilters[key] as string[]) || []
    const updatedArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value]
    
    handleFilterChange(key, updatedArray.length > 0 ? updatedArray : undefined)
  }

  const applyFilters = () => {
    onFiltersChange(localFilters)
    onClose()
  }

  const clearFilters = () => {
    const clearedFilters: AnalyticsFilters = {}
    setLocalFilters(clearedFilters)
    onFiltersChange(clearedFilters)
  }

  const getActiveFiltersCount = (): number => {
    let count = 0
    if (localFilters.severity?.length) count++
    if (localFilters.category?.length) count++
    if (localFilters.status?.length) count++
    if (localFilters.systems?.length) count++
    if (localFilters.tags?.length) count++
    if (localFilters.search) count++
    return count
  }

  const getSeverityColor = (severity: VulnerabilitySeverity): string => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800'
      case 'high': return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800'
      case 'low': return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800'
      case 'info': return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700'
      default: return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700'
    }
  }

  const getStatusColor = (status: VulnerabilityStatus): string => {
    switch (status) {
      case 'open': return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800'
      case 'in_progress': return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800'
      case 'resolved': return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800'
      case 'false_positive': return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700'
      case 'accepted_risk': return 'bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800'
      default: return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700'
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Advanced Filters
          </h3>
          {getActiveFiltersCount() > 0 && (
            <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300 text-xs font-medium rounded-full">
              {getActiveFiltersCount()} active
            </span>
          )}
        </div>
        <button
          onClick={onClose}
          className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Search */}
        <div className="col-span-full">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <Search className="w-4 h-4 inline mr-1" />
            Search
          </label>
          <input
            type="text"
            value={localFilters.search || ''}
            onChange={(e) => handleFilterChange('search', e.target.value || undefined)}
            placeholder="Search vulnerabilities, systems, or descriptions..."
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Severity Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <AlertTriangle className="w-4 h-4 inline mr-1" />
            Severity
          </label>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {severityOptions.map(severity => (
              <label key={severity} className="flex items-center">
                <input
                  type="checkbox"
                  checked={localFilters.severity?.includes(severity) || false}
                  onChange={() => handleArrayFilterToggle('severity', severity)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className={`ml-2 px-2 py-1 text-xs font-medium rounded border ${getSeverityColor(severity)}`}>
                  {severity.charAt(0).toUpperCase() + severity.slice(1)}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Category
          </label>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {categoryOptions.map(category => (
              <label key={category} className="flex items-center">
                <input
                  type="checkbox"
                  checked={localFilters.category?.includes(category) || false}
                  onChange={() => handleArrayFilterToggle('category', category)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  {category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Status Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Status
          </label>
          <div className="space-y-2">
            {statusOptions.map(status => (
              <label key={status} className="flex items-center">
                <input
                  type="checkbox"
                  checked={localFilters.status?.includes(status) || false}
                  onChange={() => handleArrayFilterToggle('status', status)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className={`ml-2 px-2 py-1 text-xs font-medium rounded border ${getStatusColor(status)}`}>
                  {status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Systems Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <Server className="w-4 h-4 inline mr-1" />
            Systems
          </label>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {systemOptions.map(system => (
              <label key={system} className="flex items-center">
                <input
                  type="checkbox"
                  checked={localFilters.systems?.includes(system) || false}
                  onChange={() => handleArrayFilterToggle('systems', system)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300 font-mono">
                  {system}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Tags Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <Tag className="w-4 h-4 inline mr-1" />
            Tags
          </label>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {tagOptions.map(tag => (
              <label key={tag} className="flex items-center">
                <input
                  type="checkbox"
                  checked={localFilters.tags?.includes(tag) || false}
                  onChange={() => handleArrayFilterToggle('tags', tag)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded">
                  {tag}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Active Filters Summary */}
      {getActiveFiltersCount() > 0 && (
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Active Filters:</h4>
          <div className="flex flex-wrap gap-2">
            {localFilters.search && (
              <span className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300 text-xs font-medium rounded">
                Search: "{localFilters.search}"
              </span>
            )}
            {localFilters.severity?.map(severity => (
              <span key={severity} className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded ${getSeverityColor(severity)}`}>
                {severity}
              </span>
            ))}
            {localFilters.category?.map(category => (
              <span key={category} className="inline-flex items-center px-2 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300 text-xs font-medium rounded">
                {category.replace('_', ' ')}
              </span>
            ))}
            {localFilters.status?.map(status => (
              <span key={status} className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded ${getStatusColor(status)}`}>
                {status.replace('_', ' ')}
              </span>
            ))}
            {localFilters.systems?.map(system => (
              <span key={system} className="inline-flex items-center px-2 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-300 text-xs font-medium rounded font-mono">
                {system}
              </span>
            ))}
            {localFilters.tags?.map(tag => (
              <span key={tag} className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300 text-xs font-medium rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={clearFilters}
          className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm font-medium"
        >
          Clear All Filters
        </button>
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 text-sm font-medium"
          >
            Cancel
          </button>
          <button
            onClick={applyFilters}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  )
}