'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronRight, BookOpen, Shield, Zap, Users, Code, Settings, Play, Menu, X } from 'lucide-react'

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

export default function DocsLayoutClient({
    children,
}: {
    children: React.ReactNode
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="bg-white dark:bg-background-dark min-h-screen">
            {/* Mobile menu button */}
            <div className="lg:hidden fixed top-4 left-4 z-50">
                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md p-3 min-w-[44px] min-h-[44px] bg-white dark:bg-gray-900 shadow-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    <span className="sr-only">{sidebarOpen ? 'Close sidebar' : 'Open sidebar'}</span>
                    {sidebarOpen ? (
                        <X className="h-6 w-6" aria-hidden="true" />
                    ) : (
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    )}
                </button>
            </div>

            <div className="flex">
                {/* Sidebar - Desktop */}
                <div className="hidden lg:block w-80 border-r border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 min-h-screen overflow-y-auto">
                    <SidebarContent onLinkClick={() => {}} />
                </div>

                {/* Sidebar - Mobile */}
                {sidebarOpen && (
                    <div className="lg:hidden fixed inset-0 z-40 flex">
                        <div className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm" onClick={() => setSidebarOpen(false)}></div>
                        <div className="relative flex w-full max-w-xs flex-col bg-gray-50 dark:bg-gray-900/95 border-r border-gray-200 dark:border-gray-800 overflow-y-auto">
                            <SidebarContent onLinkClick={() => setSidebarOpen(false)} />
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="flex-1">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

function SidebarContent({ onLinkClick }: { onLinkClick: () => void }) {
    return (
        <div className="p-6">
            <Link 
                href="/docs"
                className="flex items-center space-x-2 mb-6 group"
                onClick={onLinkClick}
            >
                <BookOpen className="h-6 w-6 text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300" />
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">Documentation</h2>
            </Link>

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
                                        onClick={onLinkClick}
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
    )
}