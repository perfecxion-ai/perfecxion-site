'use client'

import MobileTestChecklist from '@/components/mobile/MobileTestChecklist'
import { useState } from 'react'
import { Smartphone, Info } from 'lucide-react'

export default function MobileTestPage() {
  const [showInfo, setShowInfo] = useState(true)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-width container-padding">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
              <Smartphone className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Mobile Experience Testing
            </h1>
          </div>
          
          {showInfo && (
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    Testing Guidelines
                  </h3>
                  <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                    <li>• Test on actual devices when possible</li>
                    <li>• Use Chrome DevTools device emulation for quick checks</li>
                    <li>• Test on both iOS and Android devices</li>
                    <li>• Check both portrait and landscape orientations</li>
                    <li>• Test with slow network conditions (3G throttling)</li>
                    <li>• Verify touch interactions and gestures</li>
                  </ul>
                </div>
                <button
                  onClick={() => setShowInfo(false)}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200"
                  aria-label="Close info"
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </div>

        <MobileTestChecklist />

        {/* Device Testing Matrix */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Recommended Test Devices
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* iOS Devices */}
            <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                iOS Devices
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• iPhone SE (375×667)</li>
                <li>• iPhone 12/13 (390×844)</li>
                <li>• iPhone 14 Pro (393×852)</li>
                <li>• iPhone 14 Pro Max (430×932)</li>
                <li>• iPad Mini (768×1024)</li>
                <li>• iPad Pro (1024×1366)</li>
              </ul>
            </div>

            {/* Android Devices */}
            <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Android Devices
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Galaxy S8 (360×740)</li>
                <li>• Galaxy S20 (360×800)</li>
                <li>• Pixel 5 (393×851)</li>
                <li>• Pixel 7 (412×915)</li>
                <li>• Galaxy Tab S7 (753×1328)</li>
                <li>• Nexus 10 (800×1280)</li>
              </ul>
            </div>

            {/* Browser Testing */}
            <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Mobile Browsers
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Safari iOS (latest)</li>
                <li>• Chrome Android (latest)</li>
                <li>• Samsung Internet</li>
                <li>• Firefox Mobile</li>
                <li>• Opera Mini</li>
                <li>• Edge Mobile</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Performance Targets
          </h2>
          
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Load Time
                </h4>
                <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  &lt; 3s
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  on 3G network
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  First Contentful Paint
                </h4>
                <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  &lt; 1.8s
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Core Web Vital
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Cumulative Layout Shift
                </h4>
                <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  &lt; 0.1
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Visual stability
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Touch Target Size
                </h4>
                <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  ≥ 44px
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Minimum size
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}