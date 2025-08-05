'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronRight, BookOpen, Shield, Zap, Users, Code, Settings, Play, Target, Lock, AlertTriangle, CheckCircle, Brain, Database, Eye, BarChart3, Calendar, Clock, Tag, Search, Filter, Menu, X } from 'lucide-react'

const sidebarSections = [
    {
        title: 'CATEGORIES',
        items: [
            { name: 'All Posts', href: '/blog', icon: BookOpen },
            { name: 'AI Security', href: '/blog/category/ai-security', icon: Shield },
            { name: 'Threat Analysis', href: '/blog/category/threat-analysis', icon: Target },
            { name: 'Best Practices', href: '/blog/category/best-practices', icon: CheckCircle },
            { name: 'Product Updates', href: '/blog/category/product-updates', icon: Zap },
            { name: 'Research', href: '/blog/category/research', icon: Brain },
        ]
    },
    {
        title: 'FEATURED',
        items: [
            { name: 'AI Architecture Security', href: '/blog/ai-arch-security', icon: Shield },
            { name: 'Welcome to perfecXion.ai', href: '/blog/welcome', icon: BookOpen },
        ]
    },
    {
        title: 'TAGS',
        items: [
            { name: 'AI Security', href: '/blog/tag/ai-security', icon: Tag },
            { name: 'Neural Networks', href: '/blog/tag/neural-networks', icon: Brain },
            { name: 'LLM Security', href: '/blog/tag/llm-security', icon: Lock },
            { name: 'Prompt Injection', href: '/blog/tag/prompt-injection', icon: Target },
            { name: 'OWASP', href: '/blog/tag/owasp', icon: Shield },
            { name: 'Machine Learning', href: '/blog/tag/machine-learning', icon: Database },
        ]
    }
]

export default function BlogLayoutClient({
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
                <div className="hidden lg:block w-80 bg-gray-50 dark:bg-gray-900/50 border-r border-gray-200 dark:border-gray-800 min-h-screen p-6 overflow-y-auto">
                    <SidebarContent onLinkClick={() => { }} />
                </div>

                {/* Sidebar - Mobile */}
                {sidebarOpen && (
                    <div className="lg:hidden fixed inset-0 z-40 flex">
                        <div className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm" onClick={() => setSidebarOpen(false)}></div>
                        <div className="relative flex w-full max-w-xs flex-col bg-gray-50 dark:bg-gray-900/95 border-r border-gray-200 dark:border-gray-800 p-6 overflow-y-auto">
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
        <>
            <div className="mb-8">
                <Link
                    href="/blog"
                    className="flex items-center space-x-2 text-lg font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    onClick={onLinkClick}
                >
                    <BookOpen className="h-6 w-6" />
                    <span>Blog</span>
                </Link>
            </div>

            {/* Search */}
            <div className="mb-8">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search posts..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                    />
                </div>
            </div>

            <nav className="space-y-8">
                {sidebarSections.map((section) => (
                    <div key={section.title}>
                        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                            {section.title}
                        </h3>
                        <ul className="space-y-1">
                            {section.items.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-800 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
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

            {/* Quick Links */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                    RESOURCES
                </h3>
                <ul className="space-y-1">
                    <li>
                        <Link
                            href="/learn"
                            className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-800 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                            onClick={onLinkClick}
                        >
                            <BookOpen className="h-4 w-4" />
                            <span>Learn</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/docs"
                            className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-800 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                            onClick={onLinkClick}
                        >
                            <Shield className="h-4 w-4" />
                            <span>Documentation</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/products"
                            className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-800 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                            onClick={onLinkClick}
                        >
                            <Zap className="h-4 w-4" />
                            <span>Products</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-800 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                            onClick={onLinkClick}
                        >
                            <Users className="h-4 w-4" />
                            <span>Contact</span>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                    STAY UPDATED
                </h3>
                <div className="space-y-3">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                    />
                    <button className="w-full px-3 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors text-sm font-medium">
                        Subscribe
                    </button>
                </div>
            </div>
        </>
    )
}