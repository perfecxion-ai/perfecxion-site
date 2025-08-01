'use client'

import { useState } from 'react'
import { Check, X, Smartphone, Tablet, Monitor, ChevronDown, ChevronUp } from 'lucide-react'

interface TestItem {
  id: string
  category: string
  description: string
  devices: ('mobile' | 'tablet' | 'desktop')[]
  priority: 'critical' | 'high' | 'medium'
}

const testItems: TestItem[] = [
  // Navigation Tests
  {
    id: 'nav-1',
    category: 'Navigation',
    description: 'Mobile menu opens and closes smoothly',
    devices: ['mobile', 'tablet'],
    priority: 'critical'
  },
  {
    id: 'nav-2',
    category: 'Navigation',
    description: 'All navigation links work correctly',
    devices: ['mobile', 'tablet', 'desktop'],
    priority: 'critical'
  },
  {
    id: 'nav-3',
    category: 'Navigation',
    description: 'Bottom tab navigation is visible and functional',
    devices: ['mobile'],
    priority: 'high'
  },
  {
    id: 'nav-4',
    category: 'Navigation',
    description: 'Swipe gestures work for navigation',
    devices: ['mobile', 'tablet'],
    priority: 'medium'
  },
  
  // Search Tests
  {
    id: 'search-1',
    category: 'Search',
    description: 'Search bar is accessible and functional',
    devices: ['mobile', 'tablet', 'desktop'],
    priority: 'critical'
  },
  {
    id: 'search-2',
    category: 'Search',
    description: 'Search suggestions appear correctly',
    devices: ['mobile', 'tablet', 'desktop'],
    priority: 'high'
  },
  {
    id: 'search-3',
    category: 'Search',
    description: 'Search results display properly',
    devices: ['mobile', 'tablet', 'desktop'],
    priority: 'high'
  },
  {
    id: 'search-4',
    category: 'Search',
    description: 'Recent searches are saved and displayed',
    devices: ['mobile', 'tablet', 'desktop'],
    priority: 'medium'
  },
  
  // Touch & Interaction Tests
  {
    id: 'touch-1',
    category: 'Touch & Interaction',
    description: 'All buttons meet minimum 44px touch target size',
    devices: ['mobile', 'tablet'],
    priority: 'critical'
  },
  {
    id: 'touch-2',
    category: 'Touch & Interaction',
    description: 'No double-tap zoom on interactive elements',
    devices: ['mobile', 'tablet'],
    priority: 'high'
  },
  {
    id: 'touch-3',
    category: 'Touch & Interaction',
    description: 'Pull-to-refresh works where implemented',
    devices: ['mobile'],
    priority: 'medium'
  },
  {
    id: 'touch-4',
    category: 'Touch & Interaction',
    description: 'Touch feedback is visible on tap',
    devices: ['mobile', 'tablet'],
    priority: 'medium'
  },
  
  // Code Display Tests
  {
    id: 'code-1',
    category: 'Code Display',
    description: 'Code blocks scroll horizontally on mobile',
    devices: ['mobile'],
    priority: 'critical'
  },
  {
    id: 'code-2',
    category: 'Code Display',
    description: 'Copy button works in code blocks',
    devices: ['mobile', 'tablet', 'desktop'],
    priority: 'high'
  },
  {
    id: 'code-3',
    category: 'Code Display',
    description: 'Code fullscreen mode works on mobile',
    devices: ['mobile'],
    priority: 'high'
  },
  {
    id: 'code-4',
    category: 'Code Display',
    description: 'Syntax highlighting displays correctly',
    devices: ['mobile', 'tablet', 'desktop'],
    priority: 'medium'
  },
  
  // Performance Tests
  {
    id: 'perf-1',
    category: 'Performance',
    description: 'Page loads in under 3 seconds on 3G',
    devices: ['mobile'],
    priority: 'critical'
  },
  {
    id: 'perf-2',
    category: 'Performance',
    description: 'Images lazy load properly',
    devices: ['mobile', 'tablet'],
    priority: 'high'
  },
  {
    id: 'perf-3',
    category: 'Performance',
    description: 'Animations are smooth (60fps)',
    devices: ['mobile', 'tablet'],
    priority: 'medium'
  },
  {
    id: 'perf-4',
    category: 'Performance',
    description: 'Service worker caches key resources',
    devices: ['mobile', 'tablet', 'desktop'],
    priority: 'medium'
  },
  
  // Accessibility Tests
  {
    id: 'a11y-1',
    category: 'Accessibility',
    description: 'Text is readable without zooming',
    devices: ['mobile'],
    priority: 'critical'
  },
  {
    id: 'a11y-2',
    category: 'Accessibility',
    description: 'Color contrast meets WCAG standards',
    devices: ['mobile', 'tablet', 'desktop'],
    priority: 'critical'
  },
  {
    id: 'a11y-3',
    category: 'Accessibility',
    description: 'Form inputs have proper labels',
    devices: ['mobile', 'tablet', 'desktop'],
    priority: 'high'
  },
  {
    id: 'a11y-4',
    category: 'Accessibility',
    description: 'Focus indicators are visible',
    devices: ['mobile', 'tablet', 'desktop'],
    priority: 'high'
  }
]

export default function MobileTestChecklist() {
  const [results, setResults] = useState<Record<string, boolean>>({})
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])
  const [selectedDevice, setSelectedDevice] = useState<'all' | 'mobile' | 'tablet' | 'desktop'>('all')

  const categories = Array.from(new Set(testItems.map(item => item.category)))

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const toggleResult = (id: string) => {
    setResults(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const filteredItems = testItems.filter(item =>
    selectedDevice === 'all' || item.devices.includes(selectedDevice as any)
  )

  const getCompletionRate = (category?: string) => {
    const items = category
      ? filteredItems.filter(item => item.category === category)
      : filteredItems
    
    const completed = items.filter(item => results[item.id]).length
    return Math.round((completed / items.length) * 100)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20'
      case 'high':
        return 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20'
      case 'medium':
        return 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20'
      default:
        return 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20'
    }
  }

  const getDeviceIcon = (device: string) => {
    switch (device) {
      case 'mobile':
        return <Smartphone className="h-4 w-4" />
      case 'tablet':
        return <Tablet className="h-4 w-4" />
      case 'desktop':
        return <Monitor className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Mobile Testing Checklist
        </h2>
        
        {/* Device filter */}
        <div className="flex flex-wrap gap-2 mb-4">
          {(['all', 'mobile', 'tablet', 'desktop'] as const).map(device => (
            <button
              key={device}
              onClick={() => setSelectedDevice(device)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${selectedDevice === device
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }
              `}
            >
              {device !== 'all' && getDeviceIcon(device)}
              {device.charAt(0).toUpperCase() + device.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Overall progress */}
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Overall Completion
            </span>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {getCompletionRate()}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-primary-600 dark:bg-primary-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${getCompletionRate()}%` }}
            />
          </div>
        </div>
      </div>

      {/* Test categories */}
      <div className="space-y-4">
        {categories.map(category => {
          const categoryItems = filteredItems.filter(item => item.category === category)
          const isExpanded = expandedCategories.includes(category)
          
          return (
            <div
              key={category}
              className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
            >
              {/* Category header */}
              <button
                onClick={() => toggleCategory(category)}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {category}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {categoryItems.length} tests
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {getCompletionRate(category)}%
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </button>

              {/* Category items */}
              {isExpanded && (
                <div className="border-t border-gray-200 dark:border-gray-700">
                  {categoryItems.map((item, index) => (
                    <div
                      key={item.id}
                      className={`
                        px-4 py-3 flex items-start gap-3
                        ${index < categoryItems.length - 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''}
                      `}
                    >
                      <button
                        onClick={() => toggleResult(item.id)}
                        className={`
                          flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-colors
                          ${results[item.id]
                            ? 'bg-green-500 border-green-500 text-white'
                            : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                          }
                        `}
                      >
                        {results[item.id] && <Check className="h-4 w-4" />}
                      </button>
                      
                      <div className="flex-1">
                        <p className={`text-sm ${results[item.id] ? 'text-gray-500 line-through' : 'text-gray-700 dark:text-gray-300'}`}>
                          {item.description}
                        </p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${getPriorityColor(item.priority)}`}>
                            {item.priority}
                          </span>
                          <div className="flex items-center gap-1">
                            {item.devices.map(device => (
                              <span key={device} className="text-gray-400">
                                {getDeviceIcon(device)}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Export results */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => {
            const report = {
              date: new Date().toISOString(),
              device: selectedDevice,
              completionRate: getCompletionRate(),
              results: results,
              items: filteredItems.map(item => ({
                ...item,
                passed: results[item.id] || false
              }))
            }
            
            const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' })
            const url = URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = `mobile-test-report-${new Date().toISOString().split('T')[0]}.json`
            a.click()
            URL.revokeObjectURL(url)
          }}
          className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
        >
          Export Test Report
        </button>
      </div>
    </div>
  )
}