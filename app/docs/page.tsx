import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, FileText, Layout, BookOpen, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Documentation & Resources',
  description: 'Access white papers, reference architectures, and technical resources for AI security.',
}

export default function DocumentationPage() {
  return (
    <>
      <div className="max-width container-padding section-padding">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Documentation & Resources
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Access our comprehensive collection of white papers, reference architectures, and technical resources for AI security.
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8 mb-12">
          <div className="flex items-start space-x-4">
            <Clock className="h-8 w-8 text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Product Documentation Coming Soon
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our product documentation is currently in development. In the meantime, explore our white papers,
                reference architectures, and learning resources to understand AI security best practices.
              </p>
              <Link href="/learn" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
                Explore Learning Resources <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Available Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              White Papers
            </h2>
            <div className="space-y-4">
              <Link
                href="/docs/white-papers"
                className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">White Papers</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">In-depth research and analysis on AI security topics</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Reference Architectures
            </h2>
            <div className="space-y-4">
              <Link
                href="/docs/reference-architectures"
                className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Layout className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Reference Architectures</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Security patterns and architectural guidance</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Learning Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Learning Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/learn"
              className="group block p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <BookOpen className="h-6 w-6 text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Learning Center</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Comprehensive guides on AI security fundamentals and advanced topics</p>
                </div>
              </div>
            </Link>

            <Link
              href="/blog"
              className="group block p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <FileText className="h-6 w-6 text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Blog & Insights</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Latest research, threat analysis, and industry insights</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Learn More?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Dive deep into AI security with our comprehensive learning resources.
              From fundamentals to advanced techniques, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/learn" className="btn-primary">
                Start Learning <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
