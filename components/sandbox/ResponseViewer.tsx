'use client'

import { useState } from 'react'
import { FileJson, Clock, Shield, AlertCircle, CheckCircle, Copy, Check } from 'lucide-react'
import ResponsiveCodeBlock from '@/components/code/ResponsiveCodeBlock'

interface ResponseViewerProps {
  response: {
    status: number
    statusText: string
    headers: Record<string, string>
    data: any
    timestamp: string
  } | null
  isLoading: boolean
}

export default function ResponseViewer({ response, isLoading }: ResponseViewerProps) {
  const [activeTab, setActiveTab] = useState<'response' | 'headers' | 'raw'>('response')
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (response) {
      await navigator.clipboard.writeText(JSON.stringify(response.data, null, 2))
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const getStatusColor = (status: number) => {
    if (status >= 200 && status < 300) return 'text-green-600 dark:text-green-400'
    if (status >= 300 && status < 400) return 'text-yellow-600 dark:text-yellow-400'
    if (status >= 400 && status < 500) return 'text-orange-600 dark:text-orange-400'
    return 'text-red-600 dark:text-red-400'
  }

  const getStatusIcon = (status: number) => {
    if (status >= 200 && status < 300) return <CheckCircle className="w-5 h-5" />
    if (status >= 400) return <AlertCircle className="w-5 h-5" />
    return <Shield className="w-5 h-5" />
  }

  if (isLoading) {
    return (
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600 dark:text-gray-400">Sending request...</p>
      </div>
    )
  }

  if (!response) {
    return (
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 text-center">
        <FileJson className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 dark:text-gray-400">
          No response yet. Send a request to see the results here.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Response Status */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={getStatusColor(response.status)}>
              {getStatusIcon(response.status)}
            </div>
            <div>
              <span className={`text-2xl font-bold ${getStatusColor(response.status)}`}>
                {response.status}
              </span>
              <span className="ml-2 text-gray-600 dark:text-gray-400">
                {response.statusText}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Clock className="w-4 h-4" />
            <span>{new Date(response.timestamp).toLocaleTimeString()}</span>
          </div>
        </div>
      </div>

      {/* Response Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex gap-4">
          {(['response', 'headers', 'raw'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                pb-2 px-1 text-sm font-medium border-b-2 transition-colors
                ${activeTab === tab
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }
              `}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'response' && (
        <div className="space-y-4">
          {/* Success Message */}
          {response.data.success && (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <div className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <div>
                  <p className="font-medium text-green-800 dark:text-green-200">
                    {response.data.message || 'Request successful'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Vulnerabilities */}
          {response.data.result?.vulnerabilities && (
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                Vulnerabilities Found ({response.data.result.vulnerabilities.length})
              </h4>
              <div className="space-y-3">
                {response.data.result.vulnerabilities.map((vuln: any, index: number) => (
                  <div
                    key={index}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h5 className="font-medium text-gray-900 dark:text-white">
                        {vuln.type.replace(/_/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}
                      </h5>
                      <span className={`
                        px-2 py-1 text-xs font-medium rounded
                        ${vuln.severity === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300' : ''}
                        ${vuln.severity === 'medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300' : ''}
                        ${vuln.severity === 'low' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' : ''}
                      `}>
                        {vuln.severity}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {vuln.description}
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded p-3">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Remediation:
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {vuln.remediation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Security Score */}
          {response.data.result?.score !== undefined && (
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                Security Score
              </h4>
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {response.data.result.score}/100
                </div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`
                        h-full transition-all duration-500
                        ${response.data.result.score >= 80 ? 'bg-green-500' : ''}
                        ${response.data.result.score >= 60 && response.data.result.score < 80 ? 'bg-yellow-500' : ''}
                        ${response.data.result.score < 60 ? 'bg-red-500' : ''}
                      `}
                      style={{ width: `${response.data.result.score}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === 'headers' && (
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-gray-200 dark:border-gray-700">
                <th className="pb-2 font-medium text-gray-700 dark:text-gray-300">Header</th>
                <th className="pb-2 font-medium text-gray-700 dark:text-gray-300">Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(response.headers).map(([key, value]) => (
                <tr key={key} className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-2 font-mono text-gray-600 dark:text-gray-400">{key}</td>
                  <td className="py-2 text-gray-900 dark:text-white">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'raw' && (
        <div className="relative">
          <button
            onClick={handleCopy}
            className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-gray-800 text-gray-300 rounded hover:bg-gray-700 transition-colors flex items-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-400" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy
              </>
            )}
          </button>
          
          <ResponsiveCodeBlock
            code={JSON.stringify(response.data, null, 2)}
            language="json"
            showLineNumbers
          />
        </div>
      )}

      {/* Response Time */}
      <div className="text-sm text-gray-500 dark:text-gray-400 text-right">
        Response received at {new Date(response.timestamp).toLocaleString()}
      </div>
    </div>
  )
}