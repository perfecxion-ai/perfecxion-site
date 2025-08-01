'use client'

import { useState } from 'react'
import { Lock, Key, Shield, CheckCircle, AlertCircle, Copy, Check } from 'lucide-react'
import ResponsiveCodeBlock from '@/components/code/ResponsiveCodeBlock'

interface AuthenticationDemoProps {
  apiKey: string
  setApiKey: (key: string) => void
}

export default function AuthenticationDemo({ apiKey, setApiKey }: AuthenticationDemoProps) {
  const [activeMethod, setActiveMethod] = useState<'api-key' | 'oauth' | 'jwt'>('api-key')
  const [showTokenDetails, setShowTokenDetails] = useState(false)
  const [copiedItem, setCopiedItem] = useState<string | null>(null)

  const handleCopy = async (text: string, item: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedItem(item)
    setTimeout(() => setCopiedItem(null), 2000)
  }

  const mockJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwidGVhbSI6InBlcmZlY1hpb24iLCJzY29wZXMiOlsicmVhZDpzY2FucyIsIndyaXRlOnNjYW5zIiwicmVhZDpyZXBvcnRzIl0sImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNTE2MjQyNjIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

  return (
    <div className="space-y-6">
      {/* Authentication Methods */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={() => setActiveMethod('api-key')}
          className={`
            p-4 rounded-lg border-2 transition-all
            ${activeMethod === 'api-key' 
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
            }
          `}
        >
          <Key className="w-8 h-8 mb-2 text-blue-600 dark:text-blue-400" />
          <h3 className="font-semibold text-gray-900 dark:text-white">API Key</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Simple authentication with API keys
          </p>
        </button>

        <button
          onClick={() => setActiveMethod('oauth')}
          className={`
            p-4 rounded-lg border-2 transition-all
            ${activeMethod === 'oauth' 
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
            }
          `}
        >
          <Shield className="w-8 h-8 mb-2 text-green-600 dark:text-green-400" />
          <h3 className="font-semibold text-gray-900 dark:text-white">OAuth 2.0</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Industry standard OAuth flow
          </p>
        </button>

        <button
          onClick={() => setActiveMethod('jwt')}
          className={`
            p-4 rounded-lg border-2 transition-all
            ${activeMethod === 'jwt' 
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
            }
          `}
        >
          <Lock className="w-8 h-8 mb-2 text-purple-600 dark:text-purple-400" />
          <h3 className="font-semibold text-gray-900 dark:text-white">JWT Token</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            JSON Web Token authentication
          </p>
        </button>
      </div>

      {/* API Key Authentication */}
      {activeMethod === 'api-key' && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            API Key Authentication
          </h3>
          
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              API keys are the simplest way to authenticate with our API. Include your key in the Authorization header of every request.
            </p>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your API Key
                </label>
                <div className="flex gap-2">
                  <input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="pk_live_..."
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={() => handleCopy(apiKey, 'api-key')}
                    className="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  >
                    {copiedItem === 'api-key' ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Usage Example
                </h4>
                <ResponsiveCodeBlock
                  code={`curl -H "Authorization: Bearer ${apiKey || 'YOUR_API_KEY'}" \\
  https://api.perfecxion.ai/v1/scan/model`}
                  language="bash"
                  showLineNumbers={false}
                />
              </div>

              <div className="flex items-start gap-2 text-sm text-amber-600 dark:text-amber-400">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p>
                  Keep your API key secure. Never commit it to version control or expose it in client-side code.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* OAuth 2.0 Flow */}
      {activeMethod === 'oauth' && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            OAuth 2.0 Flow
          </h3>

          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              OAuth 2.0 provides secure delegated access. Perfect for applications that need to act on behalf of users.
            </p>

            {/* OAuth Flow Steps */}
            <div className="space-y-3">
              {[
                {
                  step: 1,
                  title: 'Redirect to Authorization',
                  description: 'Redirect users to our authorization endpoint',
                  code: `https://auth.perfecxion.ai/oauth/authorize?
  client_id=YOUR_CLIENT_ID&
  redirect_uri=YOUR_REDIRECT_URI&
  response_type=code&
  scope=read:scans write:scans&
  state=RANDOM_STATE`
                },
                {
                  step: 2,
                  title: 'User Authorizes',
                  description: 'User logs in and approves access',
                  code: null
                },
                {
                  step: 3,
                  title: 'Exchange Code for Token',
                  description: 'Exchange authorization code for access token',
                  code: `POST https://auth.perfecxion.ai/oauth/token
Content-Type: application/json

{
  "grant_type": "authorization_code",
  "code": "AUTHORIZATION_CODE",
  "client_id": "YOUR_CLIENT_ID",
  "client_secret": "YOUR_CLIENT_SECRET",
  "redirect_uri": "YOUR_REDIRECT_URI"
}`
                },
                {
                  step: 4,
                  title: 'Use Access Token',
                  description: 'Include token in API requests',
                  code: `curl -H "Authorization: Bearer ACCESS_TOKEN" \\
  https://api.perfecxion.ai/v1/scan/model`
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {item.description}
                    </p>
                    {item.code && (
                      <div className="mt-2">
                        <ResponsiveCodeBlock
                          code={item.code}
                          language="bash"
                          showLineNumbers={false}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                Available Scopes
              </h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  { scope: 'read:scans', desc: 'View scan results' },
                  { scope: 'write:scans', desc: 'Create new scans' },
                  { scope: 'read:reports', desc: 'Access reports' },
                  { scope: 'write:reports', desc: 'Generate reports' },
                  { scope: 'admin:team', desc: 'Manage team' },
                  { scope: 'admin:billing', desc: 'Manage billing' }
                ].map(({ scope, desc }) => (
                  <div key={scope} className="flex items-center gap-2">
                    <code className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">
                      {scope}
                    </code>
                    <span className="text-gray-600 dark:text-gray-400">{desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* JWT Authentication */}
      {activeMethod === 'jwt' && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            JWT Token Authentication
          </h3>

          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              JSON Web Tokens provide stateless authentication with embedded claims and permissions.
            </p>

            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900 dark:text-white">
                  Example JWT Token
                </h4>
                <button
                  onClick={() => setShowTokenDetails(!showTokenDetails)}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {showTokenDetails ? 'Hide' : 'Show'} Details
                </button>
              </div>

              <div className="relative">
                <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg font-mono text-xs break-all">
                  {mockJWT}
                </div>
                <button
                  onClick={() => handleCopy(mockJWT, 'jwt')}
                  className="absolute top-2 right-2 p-1.5 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  {copiedItem === 'jwt' ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {showTokenDetails && (
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-1">
                    Header
                  </h5>
                  <ResponsiveCodeBlock
                    code={JSON.stringify({
                      alg: 'HS256',
                      typ: 'JWT'
                    }, null, 2)}
                    language="json"
                    showLineNumbers={false}
                  />
                </div>

                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white mb-1">
                    Payload
                  </h5>
                  <ResponsiveCodeBlock
                    code={JSON.stringify({
                      sub: '1234567890',
                      name: 'John Doe',
                      team: 'perfecXion',
                      scopes: ['read:scans', 'write:scans', 'read:reports'],
                      iat: 1516239022,
                      exp: 1516242622
                    }, null, 2)}
                    language="json"
                    showLineNumbers={false}
                  />
                </div>
              </div>
            )}

            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                Using JWT Tokens
              </h4>
              <ResponsiveCodeBlock
                code={`// Include JWT in Authorization header
fetch('https://api.perfecxion.ai/v1/scan/model', {
  headers: {
    'Authorization': 'Bearer ' + jwtToken,
    'Content-Type': 'application/json'
  },
  method: 'POST',
  body: JSON.stringify(requestData)
})`}
                language="javascript"
                showLineNumbers={false}
              />
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
              <div className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                <div className="text-sm text-green-800 dark:text-green-200">
                  <p className="font-medium">JWT Benefits</p>
                  <ul className="mt-1 space-y-0.5 list-disc list-inside">
                    <li>Stateless authentication</li>
                    <li>Embedded permissions and scopes</li>
                    <li>Can be verified without database lookup</li>
                    <li>Short-lived with refresh token support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Rate Limiting Info */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
          Rate Limiting
        </h4>
        <div className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
          <p>All API endpoints are rate limited to ensure fair usage:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Free tier: 100 requests per hour</li>
            <li>Pro tier: 1,000 requests per hour</li>
            <li>Enterprise: Custom limits</li>
          </ul>
          <p>Rate limit headers are included in every response:</p>
          <code className="block mt-2 p-2 bg-blue-100 dark:bg-blue-800 rounded">
            X-RateLimit-Limit: 1000<br />
            X-RateLimit-Remaining: 999<br />
            X-RateLimit-Reset: 1516242622
          </code>
        </div>
      </div>
    </div>
  )
}