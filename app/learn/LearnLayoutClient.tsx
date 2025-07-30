'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronRight, BookOpen, Shield, Zap, Users, Code, Settings, Play, Target, Lock, AlertTriangle, CheckCircle, Brain, Database, Eye, BarChart3, Menu, X } from 'lucide-react'

const sidebarSections = [
    {
        title: 'FUNDAMENTALS',
        items: [
            { name: 'Traditional vs AI Security', href: '/learn/trad-vs-ai', icon: Brain },
            { name: 'Understanding AI Threats', href: '/learn/ai-threats', icon: AlertTriangle },
            { name: 'Prompt Injection Attacks', href: '/learn/prompt-injection', icon: Target },
            { name: 'Model Security', href: '/learn/model-security', icon: Lock },
            { name: 'Agent Monitoring', href: '/learn/agent-monitoring', icon: Users },
        ]
    },
    {
        title: 'ADVANCED TOPICS',
        items: [
            { name: 'Red Team Testing', href: '/learn/red-team', icon: Shield },
            { name: 'Compliance & Governance', href: '/learn/compliance', icon: CheckCircle },
            { name: 'Integration Patterns', href: '/learn/integrations', icon: Zap },
            { name: 'Performance Optimization', href: '/learn/optimization', icon: Zap },
        ]
    },
    {
        title: 'TOOLS & PRACTICES',
        items: [
            { name: 'Data Validation', href: '/learn/data-validation', icon: Database },
            { name: 'Behavioral Monitoring', href: '/learn/behavioral-monitoring', icon: Eye },
            { name: 'Threat Modeling', href: '/learn/threat-modeling', icon: BarChart3 },
            { name: 'Incident Response', href: '/learn/incident-response', icon: AlertTriangle },
        ]
    }
]

export default function LearnLayoutClient({
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
                    <SidebarContent onLinkClick={() => {}} />
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
                    href="/learn" 
                    className="flex items-center space-x-2 text-lg font-semibold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    onClick={onLinkClick}
                >
                    <BookOpen className="h-6 w-6" />
                    <span>Learn</span>
                </Link>
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
                                        className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
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
                            href="/docs"
                            className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                            onClick={onLinkClick}
                        >
                            <BookOpen className="h-4 w-4" />
                            <span>Documentation</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/products"
                            className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                            onClick={onLinkClick}
                        >
                            <Shield className="h-4 w-4" />
                            <span>Products</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                            onClick={onLinkClick}
                        >
                            <Users className="h-4 w-4" />
                            <span>Get Support</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}