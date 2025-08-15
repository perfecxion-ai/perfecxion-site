'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronRight, BookOpen, FileText, Layout, Menu, X, Clock } from 'lucide-react'

const documentationSections = [
    {
        title: 'Resources',
        items: [
            { name: 'White Papers', href: '/docs/white-papers', icon: FileText },
            { name: 'Reference Architectures', href: '/docs/reference-architectures', icon: Layout },
        ]
    },
    {
        title: 'Coming Soon',
        items: [
            { name: 'Product Documentation', href: '#', icon: BookOpen, disabled: true },
            { name: 'API Reference', href: '#', icon: FileText, disabled: true },
        ]
    },
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
                    <SidebarContent onLinkClick={() => { }} />
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

            {/* Coming Soon Notice */}
            <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2 mb-2">
                    <Clock className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                    <span className="text-sm font-medium text-primary-700 dark:text-primary-300">Coming Soon</span>
                </div>
                <p className="text-xs text-primary-600 dark:text-primary-400">
                    Product documentation is in development. Explore our resources below.
                </p>
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
                                    {item.disabled ? (
                                        <div className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-400 dark:text-gray-500 cursor-not-allowed">
                                            <item.icon className="h-4 w-4" />
                                            <span>{item.name}</span>
                                            <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Soon</span>
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                                            onClick={onLinkClick}
                                        >
                                            <item.icon className="h-4 w-4" />
                                            <span>{item.name}</span>
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </nav>

            {/* Quick Links */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Quick Links
                </h3>
                <ul className="space-y-1">
                    <li>
                        <Link
                            href="/learn"
                            className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                            onClick={onLinkClick}
                        >
                            <BookOpen className="h-4 w-4" />
                            <span>Learning Center</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/blog"
                            className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                            onClick={onLinkClick}
                        >
                            <FileText className="h-4 w-4" />
                            <span>Blog & Insights</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}