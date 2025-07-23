import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, BookOpen, Shield, Zap, Users, Code, Settings, Play } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Documentation - perfecXion.ai',
  description: 'Comprehensive documentation for all perfecXion.ai products.',
}

const documentationSections = [
  {
    title: 'Core Products',
    items: [
      { name: 'perfecX Red-T', href: '/docs/perfecxion-red-t', icon: Shield },
      { name: 'perfecX Agent', href: '/docs/perfecxion-agent', icon: Users },
      { name: 'perfecX Comply', href: '/docs/perfecxion-comply', icon: BookOpen },
      { name: 'perfecX G-Rails', href: '/docs/perfecxion-g-rails', icon: Shield },
    ]
  },
  {
    title: 'Security Tools',
    items: [
      { name: 'PromptShield', href: '/docs/promptshield', icon: Shield },
      { name: 'PromptShield Quick Start', href: '/docs/promptshield-quick-start', icon: Play },
      { name: 'SafeAI Guard', href: '/docs/safeai-guard', icon: Shield },
      { name: 'TorScan', href: '/docs/torscan', icon: Zap },
    ]
  },
  {
    title: 'API Reference',
    items: [
      { name: 'REST API', href: '/docs/api/rest', icon: Code },
      { name: 'SDKs', href: '/docs/api/sdks', icon: Code },
      { name: 'Webhooks', href: '/docs/api/webhooks', icon: Zap },
    ]
  },
  {
    title: 'Guides',
    items: [
      { name: 'Security Best Practices', href: '/docs/guides/security', icon: Shield },
      { name: 'Compliance Setup', href: '/docs/guides/compliance', icon: BookOpen },
      { name: 'Integration Examples', href: '/docs/guides/integrations', icon: Code },
    ]
  }
]

export default function DocumentationPage() {
  return (
    <div className="bg-white dark:bg-background-dark min-h-screen">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 border-r border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 min-h-screen overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-6">
              <BookOpen className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Documentation</h2>
            </div>

            <nav className="space-y-8">
              {documentationSections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    {section.title}
                  </h3>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="max-w-4xl mx-auto px-6 py-12">
            <div className="mb-8">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                Documentation
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Comprehensive guides and API references for all perfecXion.ai products.
              </p>
            </div>

            {/* Product Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Core Products
                </h2>
                <div className="space-y-4">
                  <Link
                    href="/docs/perfecxion-red-t"
                    className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">perfecX Red-T</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Advanced red team testing platform</p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/docs/perfecxion-agent"
                    className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">perfecX Agent</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">AI agent monitoring & security</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Security Tools
                </h2>
                <div className="space-y-4">
                  <Link
                    href="/docs/promptshield"
                    className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">PromptShield</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Prompt injection detection</p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    href="/docs/safeai-guard"
                    className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">SafeAI Guard</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">AI safety for children</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* API Reference */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                API Reference
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link
                    href="/docs/api/rest"
                    className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Code className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    <span className="font-medium text-gray-900 dark:text-white">REST API</span>
                  </Link>
                  <Link
                    href="/docs/api/sdks"
                    className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Code className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    <span className="font-medium text-gray-900 dark:text-white">SDKs</span>
                  </Link>
                  <Link
                    href="/docs/api/webhooks"
                    className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Zap className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    <span className="font-medium text-gray-900 dark:text-white">Webhooks</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
