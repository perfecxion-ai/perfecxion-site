import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Sparkles, Clock, BookOpen, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products - Coming Soon',
  description: 'Our AI security products are coming soon. Stay tuned for comprehensive solutions to protect your AI systems.',
}

export default function ProductsPage() {
  return (
    <main className="bg-white dark:bg-background-dark min-h-screen">
      <div className="max-width container-padding section-padding">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Coming Soon
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
            AI Security Products
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're building comprehensive solutions to secure, monitor, and ensure compliance of your AI systems.
            Our products are currently in development and will be available soon.
          </p>
        </header>

        {/* Coming Soon Message */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-12 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-full text-lg font-semibold text-primary-700 dark:text-primary-300 mb-6">
              <Clock className="h-6 w-6" />
              Coming Soon
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Products Are in Development
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We're working hard to bring you cutting-edge AI security solutions.
              Our team is developing comprehensive tools for red teaming, monitoring,
              and compliance that will revolutionize how you protect your AI systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Early Access <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/learn" className="btn-secondary">
                Learn About AI Security
              </Link>
            </div>
          </div>
        </div>

        {/* Alternative Resources */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Explore Our Resources
            </h2>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/learn" className="group block p-8 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-600">
              <BookOpen className="w-12 h-12 mb-4 text-primary-600 group-hover:text-primary-700 dark:text-primary-400 dark:group-hover:text-primary-300 mx-auto" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Learn</h3>
              <p className="text-gray-600 dark:text-gray-400">Comprehensive guides on AI security, threats, and best practices</p>
            </Link>

            <Link href="/blog" className="group block p-8 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-600">
              <FileText className="w-12 h-12 mb-4 text-primary-600 group-hover:text-primary-700 dark:text-primary-400 dark:group-hover:text-primary-300 mx-auto" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Blog</h3>
              <p className="text-gray-600 dark:text-gray-400">Latest insights, research, and updates in AI security</p>
            </Link>

            <Link href="/docs" className="group block p-8 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-600">
              <FileText className="w-12 h-12 mb-4 text-primary-600 group-hover:text-primary-700 dark:text-primary-400 dark:group-hover:text-primary-300 mx-auto" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Documentation</h3>
              <p className="text-gray-600 dark:text-gray-400">White papers, reference architectures, and technical resources</p>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Be the first to know when our products launch. Contact us to join our
              early access program and get exclusive insights into our development process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Our Team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/blog" className="btn-secondary">
                Read Our Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
