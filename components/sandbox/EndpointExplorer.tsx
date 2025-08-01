'use client'

import { useState } from 'react'
import { Send, ChevronDown, ChevronRight, Info } from 'lucide-react'

interface Endpoint {
  id: string
  name: string
  path: string
  method: string
  category: string
  description: string
  parameters: {
    name: string
    type: string
    required: boolean
    description: string
    example?: any
  }[]
}

const API_ENDPOINTS: Endpoint[] = [
  {
    id: 'scan-model',
    name: 'Scan AI Model',
    path: '/api/v1/scan/model',
    method: 'POST',
    category: 'Security Scanning',
    description: 'Scan an AI model for vulnerabilities and security issues',
    parameters: [
      {
        name: 'model_url',
        type: 'string',
        required: true,
        description: 'URL or path to the model file',
        example: 'https://example.com/model.pkl'
      },
      {
        name: 'scan_types',
        type: 'array',
        required: false,
        description: 'Types of scans to perform',
        example: ['vulnerability', 'compliance', 'privacy']
      },
      {
        name: 'deep_scan',
        type: 'boolean',
        required: false,
        description: 'Enable comprehensive deep scanning',
        example: true
      }
    ]
  },
  {
    id: 'scan-prompt',
    name: 'Scan Prompt',
    path: '/api/v1/scan/prompt',
    method: 'POST',
    category: 'Security Scanning',
    description: 'Check a prompt for injection attempts and malicious content',
    parameters: [
      {
        name: 'prompt',
        type: 'string',
        required: true,
        description: 'The prompt text to analyze',
        example: 'Analyze this prompt for security issues'
      },
      {
        name: 'context',
        type: 'object',
        required: false,
        description: 'Additional context for the analysis',
        example: { model_type: 'gpt-4', use_case: 'customer_service' }
      }
    ]
  },
  {
    id: 'compliance-check',
    name: 'Compliance Check',
    path: '/api/v1/compliance/check',
    method: 'POST',
    category: 'Compliance',
    description: 'Check AI system compliance with regulations',
    parameters: [
      {
        name: 'system_id',
        type: 'string',
        required: true,
        description: 'Identifier for the AI system',
        example: 'prod-chatbot-001'
      },
      {
        name: 'regulations',
        type: 'array',
        required: true,
        description: 'Regulations to check against',
        example: ['GDPR', 'CCPA', 'AI_Act']
      }
    ]
  },
  {
    id: 'threat-model',
    name: 'Generate Threat Model',
    path: '/api/v1/threat/model',
    method: 'POST',
    category: 'Threat Modeling',
    description: 'Generate a comprehensive threat model for your AI system',
    parameters: [
      {
        name: 'architecture',
        type: 'object',
        required: true,
        description: 'System architecture description',
        example: {
          model_type: 'LLM',
          deployment: 'cloud',
          data_sources: ['user_input', 'database']
        }
      }
    ]
  }
]

const CATEGORIES = [...new Set(API_ENDPOINTS.map(e => e.category))]

interface EndpointExplorerProps {
  apiKey: string
  onTestRequest: (endpoint: string, method: string, params: any) => void
  selectedEndpoint: string
  setSelectedEndpoint: (endpoint: string) => void
  isLoading: boolean
}

export default function EndpointExplorer({
  apiKey,
  onTestRequest,
  selectedEndpoint,
  setSelectedEndpoint,
  isLoading
}: EndpointExplorerProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(CATEGORIES)
  const [parameters, setParameters] = useState<Record<string, any>>({})

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const handleEndpointSelect = (endpoint: Endpoint) => {
    setSelectedEndpoint(endpoint.path)
    // Initialize parameters with examples
    const defaultParams: Record<string, any> = {}
    endpoint.parameters.forEach(param => {
      if (param.example !== undefined) {
        defaultParams[param.name] = param.example
      }
    })
    setParameters(defaultParams)
  }

  const handleParameterChange = (name: string, value: any) => {
    setParameters(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleTestRequest = () => {
    const endpoint = API_ENDPOINTS.find(e => e.path === selectedEndpoint)
    if (endpoint) {
      onTestRequest(endpoint.path, endpoint.method, parameters)
    }
  }

  const selectedEndpointData = API_ENDPOINTS.find(e => e.path === selectedEndpoint)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Endpoint List */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Available Endpoints
        </h3>
        
        <div className="space-y-2">
          {CATEGORIES.map(category => (
            <div key={category} className="border border-gray-200 dark:border-gray-700 rounded-lg">
              <button
                onClick={() => toggleCategory(category)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="font-medium text-gray-900 dark:text-white">
                  {category}
                </span>
                {expandedCategories.includes(category) ? (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {expandedCategories.includes(category) && (
                <div className="border-t border-gray-200 dark:border-gray-700">
                  {API_ENDPOINTS.filter(e => e.category === category).map(endpoint => (
                    <button
                      key={endpoint.id}
                      onClick={() => handleEndpointSelect(endpoint)}
                      className={`
                        w-full text-left p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors
                        ${selectedEndpoint === endpoint.path ? 'bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500' : ''}
                      `}
                    >
                      <div className="flex items-start gap-3">
                        <span className={`
                          px-2 py-1 text-xs font-medium rounded
                          ${endpoint.method === 'GET' ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' : ''}
                          ${endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : ''}
                          ${endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' : ''}
                          ${endpoint.method === 'DELETE' ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300' : ''}
                        `}>
                          {endpoint.method}
                        </span>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 dark:text-white">
                            {endpoint.name}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {endpoint.path}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Request Builder */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Request Builder
        </h3>

        {selectedEndpointData ? (
          <div className="space-y-4">
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                {selectedEndpointData.name}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {selectedEndpointData.description}
              </p>
            </div>

            {/* Parameters */}
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900 dark:text-white">
                Parameters
              </h4>
              
              {selectedEndpointData.parameters.map(param => (
                <div key={param.name} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {param.name}
                    </label>
                    {param.required && (
                      <span className="text-xs text-red-500">*required</span>
                    )}
                    <div className="group relative">
                      <Info className="w-4 h-4 text-gray-400" />
                      <div className="hidden group-hover:block absolute z-10 w-64 p-2 bg-gray-900 text-white text-xs rounded shadow-lg -top-2 left-6">
                        {param.description}
                      </div>
                    </div>
                  </div>
                  
                  {param.type === 'string' && (
                    <input
                      type="text"
                      value={parameters[param.name] || ''}
                      onChange={(e) => handleParameterChange(param.name, e.target.value)}
                      placeholder={`Enter ${param.name}`}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  )}
                  
                  {param.type === 'boolean' && (
                    <select
                      value={parameters[param.name] || 'false'}
                      onChange={(e) => handleParameterChange(param.name, e.target.value === 'true')}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="false">false</option>
                      <option value="true">true</option>
                    </select>
                  )}
                  
                  {(param.type === 'array' || param.type === 'object') && (
                    <textarea
                      value={
                        typeof parameters[param.name] === 'string' 
                          ? parameters[param.name]
                          : JSON.stringify(parameters[param.name] || param.example, null, 2)
                      }
                      onChange={(e) => {
                        try {
                          const value = JSON.parse(e.target.value)
                          handleParameterChange(param.name, value)
                        } catch {
                          handleParameterChange(param.name, e.target.value)
                        }
                      }}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Test Button */}
            <button
              onClick={handleTestRequest}
              disabled={!apiKey || isLoading}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Sending Request...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Test Endpoint
                </>
              )}
            </button>
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            Select an endpoint to build a request
          </div>
        )}
      </div>
    </div>
  )
}