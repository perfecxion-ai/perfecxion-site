'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  TrendingUp,
  Users,
  Key,
  CreditCard,
  HelpCircle,
  BarChart3,
  Settings,
  Download,
  ExternalLink,
  AlertCircle,
  CheckCircle,
  Clock,
  DollarSign,
  Activity,
  Shield,
  Zap,
  Calendar
} from 'lucide-react'
import { CustomerProfile, APIUsage, SupportTicket } from '@/lib/community-types'
import { SUBSCRIPTION_PLANS, API_RATE_LIMITS } from '@/lib/community-config'

export default function CustomerDashboard() {
  const [customer, setCustomer] = useState<CustomerProfile | null>(null)
  const [usage, setUsage] = useState<APIUsage | null>(null)
  const [recentTickets, setRecentTickets] = useState<SupportTicket[]>([])
  const [loading, setLoading] = useState(true)

  // Mock data - replace with real API calls
  useEffect(() => {
    const mockCustomer: CustomerProfile = {
      id: 'customer-1',
      userId: 'user-1',
      companyName: 'TechCorp Inc.',
      industry: 'Financial Services',
      companySize: '501-1000',
      accountType: 'professional',
      billingInfo: {
        contactEmail: 'billing@techcorp.com',
        billingAddress: {
          street: '123 Tech Street',
          city: 'San Francisco',
          state: 'CA',
          postalCode: '94105',
          country: 'US'
        },
        paymentMethods: [
          {
            id: 'pm-1',
            type: 'credit_card',
            last4: '4242',
            expiryDate: '12/2025',
            isDefault: true,
            isActive: true
          }
        ],
        invoices: [
          {
            id: 'inv-1',
            number: 'INV-2024-001',
            amount: 99,
            currency: 'USD',
            status: 'paid',
            issuedAt: new Date('2024-01-01'),
            dueAt: new Date('2024-01-15'),
            paidAt: new Date('2024-01-05'),
            downloadUrl: '/invoices/inv-1.pdf'
          }
        ]
      },
      apiUsage: {
        totalRequests: 47832,
        successfulRequests: 46901,
        errorRequests: 931,
        averageResponseTime: 245,
        peakUsage: new Date('2024-01-15T14:30:00Z'),
        monthlyUsage: [
          {
            month: '2024-01',
            requests: 47832,
            bandwidth: 2400000,
            errors: 931,
            averageResponseTime: 245
          }
        ],
        endpointUsage: [
          {
            endpoint: '/v1/detect',
            method: 'POST',
            requests: 35000,
            averageResponseTime: 180,
            errorRate: 1.2
          },
          {
            endpoint: '/v1/analyze',
            method: 'POST',
            requests: 12832,
            averageResponseTime: 420,
            errorRate: 2.8
          }
        ]
      },
      subscriptions: [
        {
          id: 'sub-1',
          productId: 'promptshield',
          planId: 'professional',
          status: 'active',
          currentPeriodStart: new Date('2024-01-01'),
          currentPeriodEnd: new Date('2024-02-01'),
          cancelAtPeriodEnd: false,
          usage: {
            requests: 47832,
            requestsLimit: 100000,
            bandwidth: 2400000,
            bandwidthLimit: 10000000,
            storage: 500000,
            storageLimit: 5000000,
            resetDate: new Date('2024-02-01')
          }
        }
      ],
      supportTickets: []
    }

    const mockTickets: SupportTicket[] = [
      {
        id: 'ticket-1',
        customerId: 'customer-1',
        priority: 'medium',
        category: 'technical',
        title: 'API Response Time Issues',
        description: 'Experiencing slower than usual response times on the /v1/detect endpoint',
        attachments: [],
        status: 'in_progress',
        createdAt: new Date('2024-01-10'),
        updatedAt: new Date('2024-01-12'),
        messages: []
      },
      {
        id: 'ticket-2',
        customerId: 'customer-1',
        priority: 'low',
        category: 'billing',
        title: 'Invoice Download Request',
        description: 'Need to download invoice for December 2023',
        attachments: [],
        status: 'resolved',
        createdAt: new Date('2024-01-05'),
        updatedAt: new Date('2024-01-06'),
        resolvedAt: new Date('2024-01-06'),
        resolutionTime: 1440, // 24 hours
        satisfactionRating: 5,
        messages: []
      }
    ]

    setCustomer(mockCustomer)
    setUsage(mockCustomer.apiUsage)
    setRecentTickets(mockTickets)
    setLoading(false)
  }, [])

  const getCurrentSubscription = () => {
    return customer?.subscriptions.find(sub => sub.status === 'active')
  }

  const formatCurrency = (amount: number, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency
    }).format(amount)
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num)
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getUsagePercentage = (used: number, limit: number) => {
    return Math.min((used / limit) * 100, 100)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200'
      case 'open': return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200'
      case 'in_progress': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
      case 'resolved': return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200'
      case 'closed': return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
      case 'high': return 'text-orange-600 bg-orange-100 dark:bg-orange-900 dark:text-orange-200'
      case 'medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
      case 'low': return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200'
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  const currentSubscription = getCurrentSubscription()
  const currentPlan = currentSubscription ? SUBSCRIPTION_PLANS[currentSubscription.planId as keyof typeof SUBSCRIPTION_PLANS] : null

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold dark:text-white">Customer Dashboard</h1>
              <p className="text-gray-600 dark:text-gray-400">
                Welcome back, {customer?.companyName}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/customer/settings"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              >
                <Settings className="w-6 h-6" />
              </Link>
              <Link
                href="/customer/support"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Account Overview */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">Account Status</p>
                <p className={`font-semibold capitalize px-2 py-1 rounded text-sm ${getStatusColor(currentSubscription?.status || 'inactive')}`}>
                  {currentSubscription?.status || 'Inactive'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">This Month</p>
                <p className="text-2xl font-bold dark:text-white">
                  {formatNumber(usage?.totalRequests || 0)}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">API Requests</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">Avg Response</p>
                <p className="text-2xl font-bold dark:text-white">
                  {usage?.averageResponseTime || 0}ms
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Response Time</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                <Activity className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">Success Rate</p>
                <p className="text-2xl font-bold dark:text-white">
                  {usage ? Math.round((usage.successfulRequests / usage.totalRequests) * 100) : 0}%
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">API Success</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Usage & Billing */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold dark:text-white">Usage & Billing</h2>
                <Link
                  href="/customer/billing"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-semibold"
                >
                  View Details →
                </Link>
              </div>

              {currentSubscription && currentPlan && (
                <div className="space-y-6">
                  {/* Current Plan */}
                  <div className="flex items-center justify-between p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div>
                      <h3 className="font-semibold dark:text-white">{currentPlan.name} Plan</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Renews on {formatDate(currentSubscription.currentPeriodEnd)}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">
                        {formatCurrency(currentPlan.price)}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">per month</div>
                    </div>
                  </div>

                  {/* Usage Metrics */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium dark:text-white">API Requests</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {formatNumber(currentSubscription.usage.requests)} / {formatNumber(currentSubscription.usage.requestsLimit)}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${getUsagePercentage(currentSubscription.usage.requests, currentSubscription.usage.requestsLimit)}%` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium dark:text-white">Bandwidth</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {Math.round(currentSubscription.usage.bandwidth / 1024 / 1024)}MB / {Math.round(currentSubscription.usage.bandwidthLimit / 1024 / 1024)}MB
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${getUsagePercentage(currentSubscription.usage.bandwidth, currentSubscription.usage.bandwidthLimit)}%` }}
                        ></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium dark:text-white">Storage</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {Math.round(currentSubscription.usage.storage / 1024 / 1024)}MB / {Math.round(currentSubscription.usage.storageLimit / 1024 / 1024)}MB
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full"
                          style={{ width: `${getUsagePercentage(currentSubscription.usage.storage, currentSubscription.usage.storageLimit)}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* API Analytics */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold dark:text-white">API Analytics</h2>
                <Link
                  href="/customer/analytics"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-semibold"
                >
                  View Full Analytics →
                </Link>
              </div>

              {usage && (
                <div className="space-y-6">
                  {/* Top Endpoints */}
                  <div>
                    <h3 className="font-semibold dark:text-white mb-4">Top Endpoints</h3>
                    <div className="space-y-3">
                      {usage.endpointUsage.map((endpoint, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <div>
                            <div className="font-medium dark:text-white">
                              {endpoint.method} {endpoint.endpoint}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {formatNumber(endpoint.requests)} requests • {endpoint.averageResponseTime}ms avg
                            </div>
                          </div>
                          <div className={`px-2 py-1 rounded text-sm font-semibold ${
                            endpoint.errorRate < 2 ? 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200' :
                            endpoint.errorRate < 5 ? 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200' :
                            'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
                          }`}>
                            {endpoint.errorRate.toFixed(1)}% errors
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  href="/customer/api-keys"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <Key className="w-5 h-5 text-blue-600" />
                  <span className="dark:text-white">Manage API Keys</span>
                </Link>
                
                <Link
                  href="/customer/billing"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <CreditCard className="w-5 h-5 text-green-600" />
                  <span className="dark:text-white">Billing & Invoices</span>
                </Link>
                
                <Link
                  href="/customer/support"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <HelpCircle className="w-5 h-5 text-purple-600" />
                  <span className="dark:text-white">Get Support</span>
                </Link>
                
                <a
                  href="/docs"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-gray-600" />
                  <span className="dark:text-white">API Documentation</span>
                </a>
              </div>
            </div>

            {/* Recent Support Tickets */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg dark:text-white">Recent Tickets</h3>
                <Link
                  href="/customer/support"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm"
                >
                  View All →
                </Link>
              </div>
              
              {recentTickets.length > 0 ? (
                <div className="space-y-3">
                  {recentTickets.slice(0, 3).map((ticket) => (
                    <div key={ticket.id} className="border dark:border-gray-600 rounded-lg p-3">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium dark:text-white text-sm">
                          {ticket.title}
                        </h4>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(ticket.status)}`}>
                          {ticket.status.replace('_', ' ')}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                        <span className={`px-1 py-0.5 rounded ${getPriorityColor(ticket.priority)}`}>
                          {ticket.priority}
                        </span>
                        <span>{formatDate(ticket.createdAt)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  No recent support tickets
                </p>
              )}
            </div>

            {/* System Status */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border dark:border-gray-700 p-6">
              <h3 className="font-semibold text-lg dark:text-white mb-4">System Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm dark:text-white">API Gateway</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600">Operational</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm dark:text-white">AI Detection</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600">Operational</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm dark:text-white">Dashboard</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-yellow-600">Maintenance</span>
                  </div>
                </div>
              </div>
              
              <a
                href="https://status.perfecxion.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm mt-4"
              >
                View Status Page →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}