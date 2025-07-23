import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, FileText, Bot, Search } from 'lucide-react';

export const metadata: Metadata = {
    title: 'TorScan Documentation - perfecXion.ai',
    description: 'Documentation hub for TorScan, the dark web intelligence and monitoring tool.',
};

export default function TorScanDocsPage() {
    return (
        <div className="bg-white dark:bg-background-dark min-h-screen">
            <div className="max-w-5xl mx-auto px-6 py-12">
                {/* Breadcrumb */}
                <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
                    <ol className="list-none p-0 inline-flex">
                        <li className="flex items-center">
                            <Link href="/docs" className="hover:underline text-primary-600 dark:text-primary-400">Docs</Link>
                            <span className="mx-2">/</span>
                        </li>
                        <li className="text-gray-700 dark:text-gray-300">TorScan</li>
                    </ol>
                </nav>

                {/* Title & Intro */}
                <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">TorScan Documentation</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Welcome to the TorScan documentation hub. Here you can find guides, API references, and integration tips for using TorScan to monitor and analyze the dark web.
                </p>

                {/* Quick Start Guide Button */}
                <div className="mb-10">
                    <Link
                        href="/docs/torscan/quick-start"
                        className="inline-flex items-center px-5 py-3 bg-primary-600 text-white rounded-lg font-semibold shadow hover:bg-primary-700 transition-colors"
                    >
                        <BookOpen className="w-5 h-5 mr-2" />
                        Quick Start Guide
                    </Link>
                </div>

                {/* Docs Sections Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <Link href="/docs/torscan/quick-start" className="group block p-5 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition">
                        <BookOpen className="w-6 h-6 mb-2 text-primary-600 group-hover:text-primary-700 dark:text-primary-400 dark:group-hover:text-primary-300" />
                        <div className="font-semibold mb-1">Quick Start</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Get up and running with TorScan in minutes.</div>
                    </Link>
                    <Link href="/docs/torscan/installation" className="group block p-5 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition">
                        <FileText className="w-6 h-6 mb-2 text-primary-600 group-hover:text-primary-700 dark:text-primary-400 dark:group-hover:text-primary-300" />
                        <div className="font-semibold mb-1">Installation</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">How to install and configure TorScan.</div>
                    </Link>
                    <Link href="/docs/torscan/api" className="group block p-5 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition">
                        <Bot className="w-6 h-6 mb-2 text-primary-600 group-hover:text-primary-700 dark:text-primary-400 dark:group-hover:text-primary-300" />
                        <div className="font-semibold mb-1">API Reference</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Explore the TorScan API endpoints.</div>
                    </Link>
                    <Link href="/docs/torscan/guides" className="group block p-5 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-lg transition">
                        <Search className="w-6 h-6 mb-2 text-primary-600 group-hover:text-primary-700 dark:text-primary-400 dark:group-hover:text-primary-300" />
                        <div className="font-semibold mb-1">Guides</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Best practices and advanced usage.</div>
                    </Link>
                </div>
            </div>
        </div>
    );
} 