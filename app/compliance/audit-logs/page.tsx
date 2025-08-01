'use client'

import { useState, useEffect } from 'react'
import { FileText, Filter, Download, Calendar, User, Activity, Shield, AlertCircle, CheckCircle, XCircle } from 'lucide-react'
import { auditLogger, AuditEvent, AuditEventType, AuditCategory } from '@/lib/audit-logger'

export default function AuditLogsPage() {
  const [logs, setLogs] = useState<AuditEvent[]>([])
  const [filteredLogs, setFilteredLogs] = useState<AuditEvent[]>([])
  const [filters, setFilters] = useState({
    category: 'all',
    outcome: 'all',
    dateRange: '7days',
  })

  useEffect(() => {
    // Load audit logs
    const allLogs = auditLogger.query()
    setLogs(allLogs)
  }, [])

  useEffect(() => {
    applyFilters(logs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, logs])

  const applyFilters = (logsToFilter: AuditEvent[]) => {
    let filtered = [...logsToFilter]

    // Category filter
    if (filters.category !== 'all') {
      filtered = filtered.filter(log => log.category === filters.category)
    }

    // Outcome filter
    if (filters.outcome !== 'all') {
      filtered = filtered.filter(log => log.outcome === filters.outcome)
    }

    // Date range filter
    if (filters.dateRange !== 'all') {
      const now = new Date()
      let startDate: Date

      switch (filters.dateRange) {
        case '24hours':
          startDate = new Date(now.getTime() - 24 * 60 * 60 * 1000)
          break
        case '7days':
          startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
          break
        case '30days':
          startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
          break
        default:
          startDate = new Date(0)
      }

      filtered = filtered.filter(log => new Date(log.timestamp) >= startDate)
    }

    setFilteredLogs(filtered)
  }

  const handleExport = (format: 'json' | 'csv') => {
    const data = auditLogger.export(format)
    const blob = new Blob([data], { type: format === 'json' ? 'application/json' : 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `audit-logs-${new Date().toISOString().split('T')[0]}.${format}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const getCategoryIcon = (category: AuditCategory) => {
    switch (category) {
      case AuditCategory.AUTHENTICATION:
        return User
      case AuditCategory.DATA_ACCESS:
        return FileText
      case AuditCategory.PRIVACY:
        return Shield
      case AuditCategory.SECURITY:
        return AlertCircle
      case AuditCategory.COMPLIANCE:
        return Activity
      default:
        return FileText
    }
  }

  const getOutcomeIcon = (outcome: string) => {
    switch (outcome) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'failure':
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <AlertCircle className="h-4 w-4 text-yellow-500" />
    }
  }

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  }

  return (
    <main className="bg-white dark:bg-background-dark min-h-screen">
      <div className="max-width container-padding section-padding">
        {/* Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FileText className="h-4 w-4" />
            Compliance
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Audit Logs
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Track and monitor all compliance-related activities and data access events across the platform.
          </p>
        </header>

        {/* Filters and Actions */}
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Category
                </label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">All Categories</option>
                  <option value={AuditCategory.AUTHENTICATION}>Authentication</option>
                  <option value={AuditCategory.DATA_ACCESS}>Data Access</option>
                  <option value={AuditCategory.PRIVACY}>Privacy</option>
                  <option value={AuditCategory.SECURITY}>Security</option>
                  <option value={AuditCategory.COMPLIANCE}>Compliance</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Outcome
                </label>
                <select
                  value={filters.outcome}
                  onChange={(e) => setFilters({ ...filters, outcome: e.target.value })}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">All Outcomes</option>
                  <option value="success">Success</option>
                  <option value="failure">Failure</option>
                  <option value="pending">Pending</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Date Range
                </label>
                <select
                  value={filters.dateRange}
                  onChange={(e) => setFilters({ ...filters, dateRange: e.target.value })}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500"
                >
                  <option value="24hours">Last 24 Hours</option>
                  <option value="7days">Last 7 Days</option>
                  <option value="30days">Last 30 Days</option>
                  <option value="all">All Time</option>
                </select>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => handleExport('json')}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Export JSON
              </button>
              <button
                onClick={() => handleExport('csv')}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Export CSV
              </button>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredLogs.length} of {logs.length} events
          </div>
        </div>

        {/* Audit Log Table */}
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Timestamp
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Event
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Action
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Outcome
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                {filteredLogs.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-gray-500 dark:text-gray-400">
                      No audit logs found for the selected filters.
                    </td>
                  </tr>
                ) : (
                  filteredLogs.map((log) => {
                    const CategoryIcon = getCategoryIcon(log.category)
                    return (
                      <tr key={log.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            {formatTimestamp(log.timestamp)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex items-center gap-2">
                            <CategoryIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <span className="text-gray-900 dark:text-white capitalize">
                              {log.category.replace('_', ' ')}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-300">
                          {log.eventType}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                          {log.action}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex items-center gap-2">
                            {getOutcomeIcon(log.outcome)}
                            <span className="capitalize">{log.outcome}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                          {log.resource && (
                            <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                              {log.resource}
                            </span>
                          )}
                        </td>
                      </tr>
                    )
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Information Box */}
        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-2">
                About Audit Logging
              </h3>
              <p className="text-blue-800 dark:text-blue-300 mb-3">
                Audit logs help maintain compliance with regulations like GDPR, CCPA, and SOC 2 by tracking:
              </p>
              <ul className="space-y-1 text-blue-800 dark:text-blue-300 text-sm">
                <li>• All data access and modifications</li>
                <li>• User authentication events</li>
                <li>• Privacy preference changes</li>
                <li>• Security-related activities</li>
                <li>• Compliance report generation</li>
              </ul>
              <p className="text-blue-800 dark:text-blue-300 text-sm mt-3">
                Logs are retained for 90 days and can be exported for long-term storage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}