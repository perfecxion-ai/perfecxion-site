'use client'

import { useState, useEffect } from 'react'
import { 
  Key,
  Plus,
  Eye,
  EyeOff,
  Copy,
  Trash2,
  RotateCcw,
  AlertTriangle,
  Calendar,
  Activity,
  Shield,
  Settings,
  Check,
  X,
  Info
} from 'lucide-react'
import { APIKey, APIPermission } from '@/lib/community-types'

interface APIKeyManagerProps {
  customerId: string
}

export default function APIKeyManager({ customerId }: APIKeyManagerProps) {
  const [apiKeys, setApiKeys] = useState<APIKey[]>([])
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState<string | null>(null)
  const [visibleKeys, setVisibleKeys] = useState<Set<string>>(new Set())
  const [copiedKey, setCopiedKey] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  // Mock data - replace with real API calls
  useEffect(() => {
    const mockApiKeys: APIKey[] = [
      {
        id: 'key-1',
        customerId,
        name: 'Production API Key',
        key: 'px_live_1234567890abcdef1234567890abcdef12345678',
        permissions: [
          { resource: 'detect', actions: ['read', 'write'] },
          { resource: 'analyze', actions: ['read', 'write'] },
          { resource: 'history', actions: ['read'] }
        ],
        isActive: true,
        expiresAt: new Date('2024-12-31'),
        lastUsedAt: new Date('2024-01-15T10:30:00Z'),
        createdAt: new Date('2023-06-01'),
        rateLimit: 1000,
        usageQuota: 100000,
        currentUsage: 47832
      },
      {
        id: 'key-2',
        customerId,
        name: 'Development API Key',
        key: 'px_dev_abcdef1234567890abcdef1234567890abcdef12',
        permissions: [
          { resource: 'detect', actions: ['read', 'write'] },
          { resource: 'analyze', actions: ['read'] }
        ],
        isActive: true,
        lastUsedAt: new Date('2024-01-10T15:45:00Z'),
        createdAt: new Date('2023-08-15'),
        rateLimit: 100,
        usageQuota: 10000,
        currentUsage: 3456
      },
      {
        id: 'key-3',
        customerId,
        name: 'Legacy API Key',
        key: 'px_legacy_fedcba0987654321fedcba0987654321fedcba09',
        permissions: [
          { resource: 'detect', actions: ['read'] }
        ],
        isActive: false,
        lastUsedAt: new Date('2023-12-01T08:20:00Z'),
        createdAt: new Date('2023-01-01'),
        rateLimit: 50,
        usageQuota: 5000,
        currentUsage: 4892
      }
    ]

    setApiKeys(mockApiKeys)
    setLoading(false)
  }, [customerId])

  const toggleKeyVisibility = (keyId: string) => {
    setVisibleKeys(prev => {
      const newSet = new Set(prev)
      if (newSet.has(keyId)) {
        newSet.delete(keyId)
      } else {
        newSet.add(keyId)
      }
      return newSet
    })
  }

  const copyToClipboard = async (text: string, keyId: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedKey(keyId)
      setTimeout(() => setCopiedKey(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const maskApiKey = (key: string) => {
    const prefix = key.substring(0, 8)
    const suffix = key.substring(key.length - 4)
    return `${prefix}${'•'.repeat(32)}${suffix}`
  }

  const handleCreateKey = (keyData: Partial<APIKey>) => {
    const newKey: APIKey = {
      id: `key-${Date.now()}`,
      customerId,
      name: keyData.name || 'Untitled Key',
      key: `px_${keyData.name?.toLowerCase().includes('prod') ? 'live' : 'dev'}_${Math.random().toString(36).substring(2, 50)}`,
      permissions: keyData.permissions || [],
      isActive: true,
      createdAt: new Date(),
      rateLimit: keyData.rateLimit || 100,
      usageQuota: keyData.usageQuota || 10000,
      currentUsage: 0,
      expiresAt: keyData.expiresAt
    }

    setApiKeys(prev => [newKey, ...prev])
    setShowCreateModal(false)
  }

  const handleDeleteKey = (keyId: string) => {
    setApiKeys(prev => prev.filter(key => key.id !== keyId))
    setShowDeleteModal(null)
  }

  const handleToggleKey = (keyId: string) => {
    setApiKeys(prev => prev.map(key => 
      key.id === keyId ? { ...key, isActive: !key.isActive } : key
    ))
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getUsagePercentage = (used: number, quota: number) => {
    return Math.min((used / quota) * 100, 100)
  }

  const isKeyExpiringSoon = (key: APIKey) => {
    if (!key.expiresAt) return false
    const daysUntilExpiry = Math.ceil((key.expiresAt.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    return daysUntilExpiry <= 30
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold dark:text-white">API Key Management</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Create and manage API keys for accessing perfecXion services
              </p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              <Plus className="w-5 h-5 inline mr-2" />
              Create API Key
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* API Keys List */}
        <div className="space-y-6">
          {apiKeys.map((apiKey) => (
            <div
              key={apiKey.id}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border ${
                apiKey.isActive ? 'border-gray-200 dark:border-gray-700' : 'border-red-200 dark:border-red-800'
              } p-6`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold dark:text-white">
                      {apiKey.name}
                    </h3>
                    <span className={`px-2 py-1 rounded text-sm font-semibold ${
                      apiKey.isActive 
                        ? 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200'
                        : 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
                    }`}>
                      {apiKey.isActive ? 'Active' : 'Inactive'}
                    </span>
                    {isKeyExpiringSoon(apiKey) && (
                      <span className="px-2 py-1 rounded text-sm font-semibold text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200">
                        Expires Soon
                      </span>
                    )}
                  </div>
                  
                  {/* API Key Display */}
                  <div className="flex items-center space-x-2 mb-3">
                    <code className="flex-1 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded font-mono text-sm dark:text-white">
                      {visibleKeys.has(apiKey.id) ? apiKey.key : maskApiKey(apiKey.key)}
                    </code>
                    <button
                      onClick={() => toggleKeyVisibility(apiKey.id)}
                      className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      title={visibleKeys.has(apiKey.id) ? 'Hide key' : 'Show key'}
                    >
                      {visibleKeys.has(apiKey.id) ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => copyToClipboard(apiKey.key, apiKey.id)}
                      className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      title="Copy to clipboard"
                    >
                      {copiedKey === apiKey.id ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Key Info */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div>
                      <span className="font-medium">Created:</span> {formatDate(apiKey.createdAt)}
                    </div>
                    <div>
                      <span className="font-medium">Last Used:</span> {apiKey.lastUsedAt ? formatDate(apiKey.lastUsedAt) : 'Never'}
                    </div>
                    <div>
                      <span className="font-medium">Rate Limit:</span> {apiKey.rateLimit}/min
                    </div>
                    <div>
                      <span className="font-medium">Expires:</span> {apiKey.expiresAt ? formatDate(apiKey.expiresAt) : 'Never'}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleToggleKey(apiKey.id)}
                    className={`p-2 rounded-lg ${
                      apiKey.isActive
                        ? 'text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20'
                        : 'text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20'
                    }`}
                    title={apiKey.isActive ? 'Deactivate key' : 'Activate key'}
                  >
                    {apiKey.isActive ? <X className="w-4 h-4" /> : <Check className="w-4 h-4" />}
                  </button>
                  <button
                    className="p-2 text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg"
                    title="Regenerate key"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setShowDeleteModal(apiKey.id)}
                    className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
                    title="Delete key"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Usage Stats */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium dark:text-white">Usage This Month</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {apiKey.currentUsage.toLocaleString()} / {apiKey.usageQuota.toLocaleString()} requests
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      getUsagePercentage(apiKey.currentUsage, apiKey.usageQuota) > 90 
                        ? 'bg-red-600' 
                        : getUsagePercentage(apiKey.currentUsage, apiKey.usageQuota) > 75
                        ? 'bg-yellow-600'
                        : 'bg-blue-600'
                    }`}
                    style={{ width: `${getUsagePercentage(apiKey.currentUsage, apiKey.usageQuota)}%` }}
                  />
                </div>
              </div>

              {/* Permissions */}
              <div>
                <h4 className="text-sm font-medium dark:text-white mb-2">Permissions</h4>
                <div className="flex flex-wrap gap-2">
                  {apiKey.permissions.map((permission, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm"
                    >
                      {permission.resource}: {permission.actions.join(', ')}
                    </span>
                  ))}
                </div>
              </div>

              {/* Warnings */}
              {(isKeyExpiringSoon(apiKey) || getUsagePercentage(apiKey.currentUsage, apiKey.usageQuota) > 90) && (
                <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-yellow-800 dark:text-yellow-200">
                      {isKeyExpiringSoon(apiKey) && (
                        <p>This API key expires on {apiKey.expiresAt?.toLocaleDateString()}. Consider renewing it soon.</p>
                      )}
                      {getUsagePercentage(apiKey.currentUsage, apiKey.usageQuota) > 90 && (
                        <p>This API key is approaching its usage quota. Consider upgrading your plan or creating additional keys.</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {apiKeys.length === 0 && (
            <div className="text-center py-12">
              <Key className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                No API Keys
              </h3>
              <p className="text-gray-500 dark:text-gray-500 mb-6">
                Create your first API key to start using our services
              </p>
              <button
                onClick={() => setShowCreateModal(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                <Plus className="w-5 h-5 inline mr-2" />
                Create API Key
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Create API Key Modal */}
      {showCreateModal && (
        <CreateAPIKeyModal
          onClose={() => setShowCreateModal(false)}
          onSubmit={handleCreateKey}
        />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold dark:text-white mb-4">Delete API Key</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Are you sure you want to delete this API key? This action cannot be undone and will
              immediately revoke access for any applications using this key.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowDeleteModal(null)}
                className="flex-1 px-4 py-2 border dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteKey(showDeleteModal)}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Delete Key
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Create API Key Modal Component
interface CreateAPIKeyModalProps {
  onClose: () => void
  onSubmit: (keyData: Partial<APIKey>) => void
}

function CreateAPIKeyModal({ onClose, onSubmit }: CreateAPIKeyModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    rateLimit: 100,
    usageQuota: 10000,
    expiresAt: '',
    permissions: [
      { resource: 'detect', actions: ['read', 'write'] }
    ] as APIPermission[]
  })

  const availableResources = ['detect', 'analyze', 'history', 'reports']
  const availableActions = ['read', 'write', 'delete']

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const keyData: Partial<APIKey> = {
      name: formData.name,
      rateLimit: formData.rateLimit,
      usageQuota: formData.usageQuota,
      permissions: formData.permissions,
      expiresAt: formData.expiresAt ? new Date(formData.expiresAt) : undefined
    }

    onSubmit(keyData)
  }

  const updatePermission = (index: number, field: 'resource' | 'actions', value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      permissions: prev.permissions.map((perm, i) => 
        i === index ? { ...perm, [field]: value } : perm
      )
    }))
  }

  const addPermission = () => {
    setFormData(prev => ({
      ...prev,
      permissions: [...prev.permissions, { resource: 'detect', actions: ['read'] }]
    }))
  }

  const removePermission = (index: number) => {
    setFormData(prev => ({
      ...prev,
      permissions: prev.permissions.filter((_, i) => i !== index)
    }))
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold dark:text-white">Create New API Key</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Key Name */}
          <div>
            <label className="block text-sm font-medium dark:text-white mb-2">
              API Key Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="e.g., Production API Key"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Rate Limit */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium dark:text-white mb-2">
                Rate Limit (requests/minute)
              </label>
              <input
                type="number"
                value={formData.rateLimit}
                onChange={(e) => setFormData(prev => ({ ...prev, rateLimit: parseInt(e.target.value) }))}
                min="1"
                max="10000"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium dark:text-white mb-2">
                Monthly Quota
              </label>
              <input
                type="number"
                value={formData.usageQuota}
                onChange={(e) => setFormData(prev => ({ ...prev, usageQuota: parseInt(e.target.value) }))}
                min="1000"
                max="1000000"
                step="1000"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          {/* Expiration */}
          <div>
            <label className="block text-sm font-medium dark:text-white mb-2">
              Expiration Date (Optional)
            </label>
            <input
              type="date"
              value={formData.expiresAt}
              onChange={(e) => setFormData(prev => ({ ...prev, expiresAt: e.target.value }))}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Permissions */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="block text-sm font-medium dark:text-white">
                Permissions
              </label>
              <button
                type="button"
                onClick={addPermission}
                className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400"
              >
                + Add Permission
              </button>
            </div>

            <div className="space-y-3">
              {formData.permissions.map((permission, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 border dark:border-gray-600 rounded-lg">
                  <select
                    value={permission.resource}
                    onChange={(e) => updatePermission(index, 'resource', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    {availableResources.map(resource => (
                      <option key={resource} value={resource}>{resource}</option>
                    ))}
                  </select>

                  <div className="flex space-x-2">
                    {availableActions.map(action => (
                      <label key={action} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={permission.actions.includes(action)}
                          onChange={(e) => {
                            const actions = e.target.checked
                              ? [...permission.actions, action]
                              : permission.actions.filter(a => a !== action)
                            updatePermission(index, 'actions', actions)
                          }}
                          className="mr-1"
                        />
                        <span className="text-sm dark:text-white">{action}</span>
                      </label>
                    ))}
                  </div>

                  {formData.permissions.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removePermission(index)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Security Notice */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-800 dark:text-blue-200">
                <p className="font-semibold mb-1">Security Best Practices:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Store API keys securely and never commit them to code repositories</li>
                  <li>Use different keys for different environments (dev, staging, prod)</li>
                  <li>Set appropriate rate limits and quotas based on your usage patterns</li>
                  <li>Regularly rotate your API keys</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Create API Key
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}