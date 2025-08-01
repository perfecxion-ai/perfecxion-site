import AnalyticsDashboard from '@/components/analytics/AnalyticsDashboard'

export const metadata = {
  title: 'Analytics Dashboard | perfecXion.ai',
  description: 'Comprehensive AI security analytics dashboard with real-time metrics, vulnerability analysis, and threat intelligence.',
}

export default function AnalyticsDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Security Analytics Dashboard
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Monitor AI security metrics, analyze vulnerabilities, and track threat intelligence in real-time.
          </p>
        </div>
        
        <AnalyticsDashboard />
      </div>
    </div>
  )
}