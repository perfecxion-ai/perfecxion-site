import { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, Play, Code, FileText, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
    title: 'PromptShield Documentation - perfecXion.ai',
    description: 'Documentation hub for PromptShield: quick start, installation, API, and guides.',
}

export default function PromptShieldDocsHub() {
    return (
        <div className="bg-white dark:bg-background-dark min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
                    <Link href="/docs" className="hover:text-primary-600 dark:hover:text-primary-400">
                        Docs
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-gray-900 dark:text-white">PromptShield</span>
                </nav>

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    PromptShield Documentation
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                    Everything you need to get started, integrate, and master PromptShield for AI prompt injection protection.
                </p>

                <div className="mb-8">
                    <Link href="/docs/promptshield/quick-start" className="inline-flex items-center px-5 py-3 bg-primary-600 text-white rounded-lg font-semibold shadow hover:bg-primary-700 transition-colors">
                        <Play className="h-5 w-5 mr-2" />
                        Quick Start Guide
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <Link href="/docs/promptshield/quick-start" className="block p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-colors">
                        <div className="flex items-center space-x-3 mb-2">
                            <Play className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                            <h2 className="font-semibold text-gray-900 dark:text-white">Quick Start</h2>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Get up and running with PromptShield in minutes.</p>
                    </Link>
                    <Link href="/docs/promptshield/installation" className="block p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-colors">
                        <div className="flex items-center space-x-3 mb-2">
                            <Code className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                            <h2 className="font-semibold text-gray-900 dark:text-white">Installation</h2>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">How to install PromptShield SDKs and CLI.</p>
                    </Link>
                    <Link href="/docs/promptshield/api" className="block p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-colors">
                        <div className="flex items-center space-x-3 mb-2">
                            <BookOpen className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                            <h2 className="font-semibold text-gray-900 dark:text-white">API Reference</h2>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Full API documentation for PromptShield endpoints.</p>
                    </Link>
                    <Link href="/docs/promptshield/guides" className="block p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-colors">
                        <div className="flex items-center space-x-3 mb-2">
                            <FileText className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                            <h2 className="font-semibold text-gray-900 dark:text-white">Guides & Examples</h2>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Integration guides, best practices, and real-world examples.</p>
                    </Link>
                </div>
            </div>
        </div>
    )
} 