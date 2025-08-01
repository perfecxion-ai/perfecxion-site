'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import APISandbox from '@/components/sandbox/APISandbox'
import SecurityPlayground from '@/components/sandbox/SecurityPlayground'
import DeveloperOnboarding from '@/components/sandbox/DeveloperOnboarding'
import IntegrationExamples from '@/components/sandbox/IntegrationExamples'
import { Code2, Shield, Rocket, Puzzle } from 'lucide-react'

export default function DeveloperSandboxPage() {
  const [activeTab, setActiveTab] = useState('api-explorer')

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Developer Sandbox
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Test our APIs, explore security features, and integrate with your applications
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
            <TabsTrigger value="api-explorer" className="flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span className="hidden sm:inline">API Explorer</span>
              <span className="sm:hidden">API</span>
            </TabsTrigger>
            <TabsTrigger value="security-testing" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">Security Testing</span>
              <span className="sm:hidden">Security</span>
            </TabsTrigger>
            <TabsTrigger value="onboarding" className="flex items-center gap-2">
              <Rocket className="w-4 h-4" />
              <span className="hidden sm:inline">Quick Start</span>
              <span className="sm:hidden">Start</span>
            </TabsTrigger>
            <TabsTrigger value="integrations" className="flex items-center gap-2">
              <Puzzle className="w-4 h-4" />
              <span className="hidden sm:inline">Integrations</span>
              <span className="sm:hidden">Integrate</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="api-explorer" className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Interactive API Explorer
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Test our API endpoints in real-time, generate code samples, and explore authentication flows.
              </p>
              <APISandbox />
            </div>
          </TabsContent>

          <TabsContent value="security-testing" className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Security Testing Playground
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Test AI security features in a safe, sandboxed environment with pre-deployed vulnerable models.
              </p>
              <SecurityPlayground />
            </div>
          </TabsContent>

          <TabsContent value="onboarding" className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                5-Minute Quick Start
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Get up and running with our platform in minutes with guided tutorials and interactive examples.
              </p>
              <DeveloperOnboarding />
            </div>
          </TabsContent>

          <TabsContent value="integrations" className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Platform Integrations
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Ready-to-use integration examples for popular platforms and frameworks.
              </p>
              <IntegrationExamples />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}