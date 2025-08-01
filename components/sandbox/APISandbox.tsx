'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import EndpointExplorer from './EndpointExplorer'
import CodeGenerator from './CodeGenerator'
import AuthenticationDemo from './AuthenticationDemo'
import ResponseViewer from './ResponseViewer'
import { Code2, Lock, Send, FileJson } from 'lucide-react'

interface APIResponse {
  status: number
  statusText: string
  headers: Record<string, string>
  data: any
  timestamp: string
}

export default function APISandbox() {
  const [selectedEndpoint, setSelectedEndpoint] = useState<string>('')
  const [apiKey, setApiKey] = useState<string>('')
  const [response, setResponse] = useState<APIResponse | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleTestRequest = async (endpoint: string, method: string, params: any) => {
    setIsLoading(true)
    
    // Simulate API call (in production, this would call actual endpoints)
    try {
      const mockResponse: APIResponse = {
        status: 200,
        statusText: 'OK',
        headers: {
          'Content-Type': 'application/json',
          'X-RateLimit-Limit': '1000',
          'X-RateLimit-Remaining': '999',
          'X-RateLimit-Reset': new Date(Date.now() + 3600000).toISOString()
        },
        data: {
          success: true,
          message: 'API request successful',
          result: {
            vulnerabilities: [
              {
                id: 'vuln-001',
                type: 'prompt_injection',
                severity: 'high',
                description: 'Model susceptible to prompt injection attacks',
                remediation: 'Implement input validation and output filtering'
              }
            ],
            score: 85,
            timestamp: new Date().toISOString()
          }
        },
        timestamp: new Date().toISOString()
      }
      
      setResponse(mockResponse)
    } catch (error) {
      setResponse({
        status: 500,
        statusText: 'Internal Server Error',
        headers: {},
        data: { error: 'Failed to process request' },
        timestamp: new Date().toISOString()
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* API Key Input */}
      <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          API Key
        </label>
        <div className="flex gap-2">
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your API key or use demo mode"
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            onClick={() => setApiKey('demo-api-key')}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            Use Demo Key
          </button>
        </div>
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
          Use your API key for production testing or demo key for sandbox mode
        </p>
      </div>

      {/* Main Sandbox Interface */}
      <Tabs defaultValue="explorer" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="explorer" className="flex items-center gap-2">
            <Send className="w-4 h-4" />
            Explorer
          </TabsTrigger>
          <TabsTrigger value="code" className="flex items-center gap-2">
            <Code2 className="w-4 h-4" />
            Code
          </TabsTrigger>
          <TabsTrigger value="auth" className="flex items-center gap-2">
            <Lock className="w-4 h-4" />
            Auth
          </TabsTrigger>
          <TabsTrigger value="response" className="flex items-center gap-2">
            <FileJson className="w-4 h-4" />
            Response
          </TabsTrigger>
        </TabsList>

        <TabsContent value="explorer">
          <EndpointExplorer
            apiKey={apiKey}
            onTestRequest={handleTestRequest}
            selectedEndpoint={selectedEndpoint}
            setSelectedEndpoint={setSelectedEndpoint}
            isLoading={isLoading}
          />
        </TabsContent>

        <TabsContent value="code">
          <CodeGenerator
            endpoint={selectedEndpoint}
            apiKey={apiKey}
            lastRequest={{
              method: 'POST',
              endpoint: selectedEndpoint,
              params: {}
            }}
          />
        </TabsContent>

        <TabsContent value="auth">
          <AuthenticationDemo apiKey={apiKey} setApiKey={setApiKey} />
        </TabsContent>

        <TabsContent value="response">
          <ResponseViewer response={response} isLoading={isLoading} />
        </TabsContent>
      </Tabs>
    </div>
  )
}