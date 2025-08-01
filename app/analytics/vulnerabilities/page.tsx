import VulnerabilityAnalysis from '@/components/analytics/VulnerabilityAnalysis'

export const metadata = {
  title: 'Vulnerability Analysis | perfecXion.ai',
  description: 'Comprehensive vulnerability analysis with CVSS scoring, risk prioritization, and remediation recommendations.',
}

export default function VulnerabilityAnalysisPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Vulnerability Analysis
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Advanced vulnerability assessment with CVSS scoring, risk prioritization, and compliance impact analysis.
          </p>
        </div>
        
        <VulnerabilityAnalysis />
      </div>
    </div>
  )
}