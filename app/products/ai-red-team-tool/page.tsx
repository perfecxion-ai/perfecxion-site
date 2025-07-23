import { Metadata } from 'next'
import { Shield, Zap, Code, BarChart3, TestTube, GitBranch, FileText, Users, Lock, ArrowRight, CheckCircle, AlertTriangle, Clock, Database, Cpu, Github, Globe } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'AI Red Team Tool (AIRT) - Open Source AI Security Testing Framework',
    description: 'Open-source AI security testing framework implementing OWASP Top 10 for LLMs, NIST AI Risk Management Framework, and MITRE ATLAS methodologies.',
}

export default function AIRedTeamToolPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white dark:bg-gray-900 py-20 lg:py-32">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20"></div>
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900/20 dark:text-blue-400 mb-8">
                            <Github className="mr-2 h-4 w-4" />
                            Open Source AI Security
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
                            AI Red Team Tool
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                (AIRT)
                            </span>
                        </h1>

                        <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                            Open-source AI security testing framework that unifies the OWASP Top 10 for LLMs,
                            NIST AI Risk Management Framework, and MITRE ATLAS methodologies into a single, powerful testing platform.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="https://github.com/ai-red-team-tool/airt"
                                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-blue-700 transition-colors"
                            >
                                <Github className="mr-2 h-5 w-5" />
                                View on GitHub
                            </Link>
                            <Link
                                href="#get-started"
                                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-700 shadow-lg hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                            Community-Driven Security Testing
                        </h2>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                            Built by security professionals for the open source community to systematically test AI systems.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                                <GitBranch className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Modular Plugin Architecture
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Extensible system for adding new vulnerability tests with entry point-based discovery.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-8 border border-green-200 dark:border-green-800">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6">
                                <Zap className="h-6 w-6 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Unified API Interface
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Works seamlessly with OpenAI, Anthropic, and local model endpoints through a single interface.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl p-8 border border-purple-200 dark:border-purple-800">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
                                <BarChart3 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Comprehensive Reporting
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Detailed analysis with JSON/CSV export capabilities and actionable insights.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl p-8 border border-orange-200 dark:border-orange-800">
                            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-6">
                                <Shield className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Ethical Testing Controls
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Built-in safeguards with rate limiting, cost tracking, and safety measures.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl p-8 border border-red-200 dark:border-red-800">
                            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-6">
                                <Cpu className="h-6 w-6 text-red-600 dark:text-red-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Industry Standards
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Implements OWASP Top 10 for LLMs, NIST AI RMF, and MITRE ATLAS methodologies.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-indigo-200 dark:border-indigo-800">
                            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-6">
                                <Github className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Open Source
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                MIT licensed with transparent development and community contributions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* OWASP Coverage */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                            OWASP Top 10 for LLM Coverage
                        </h2>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                            Comprehensive implementation of industry-standard AI security vulnerabilities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-red-800 dark:text-red-400">LLM01 - Prompt Injection</h3>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                                    Critical
                                </span>
                            </div>
                            <p className="text-red-700 dark:text-red-300 text-sm">✅ Implemented</p>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-400">LLM02 - Insecure Output Handling</h3>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                                    High
                                </span>
                            </div>
                            <p className="text-orange-700 dark:text-orange-300 text-sm">🚧 Planned</p>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-400">LLM03 - Training Data Poisoning</h3>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                                    High
                                </span>
                            </div>
                            <p className="text-orange-700 dark:text-orange-300 text-sm">🚧 Planned</p>
                        </div>

                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-400">LLM04 - Model Denial of Service</h3>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                                    Medium
                                </span>
                            </div>
                            <p className="text-yellow-700 dark:text-yellow-300 text-sm">🚧 Planned</p>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-400">LLM05 - Supply Chain Vulnerabilities</h3>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                                    High
                                </span>
                            </div>
                            <p className="text-orange-700 dark:text-orange-300 text-sm">🚧 Planned</p>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-400">LLM06 - Sensitive Information Disclosure</h3>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                                    High
                                </span>
                            </div>
                            <p className="text-orange-700 dark:text-orange-300 text-sm">🚧 Planned</p>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-gray-600 dark:text-gray-400">
                            And 4 more vulnerability categories in development...
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Start Section */}
            <section id="get-started" className="py-20 bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                            Get Started in Minutes
                        </h2>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                            Simple installation and configuration for immediate security testing.
                        </p>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                        <div className="p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                        Installation & Setup
                                    </h3>

                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-3">
                                            <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="text-green-600 dark:text-green-400 text-sm font-semibold">1</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 dark:text-white">Clone Repository</h4>
                                                <code className="block mt-1 text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                                                    git clone https://github.com/ai-red-team-tool/airt.git
                                                </code>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-3">
                                            <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="text-green-600 dark:text-green-400 text-sm font-semibold">2</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 dark:text-white">Install Dependencies</h4>
                                                <code className="block mt-1 text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                                                    pip install -e ".[all]"
                                                </code>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-3">
                                            <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="text-green-600 dark:text-green-400 text-sm font-semibold">3</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 dark:text-white">Configure Endpoints</h4>
                                                <code className="block mt-1 text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                                                    airt configure --interactive
                                                </code>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                        Basic Usage
                                    </h3>

                                    <div className="space-y-4">
                                        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">List Available Tests</h4>
                                            <code className="text-sm text-gray-600 dark:text-gray-400">
                                                airt list-tests
                                            </code>
                                        </div>

                                        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Run Security Tests</h4>
                                            <code className="text-sm text-gray-600 dark:text-gray-400">
                                                airt run --target openai-gpt4 --test prompt_injection
                                            </code>
                                        </div>

                                        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Generate Report</h4>
                                            <code className="text-sm text-gray-600 dark:text-gray-400">
                                                airt report session-123 --format json
                                            </code>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                            Join the Community
                        </h2>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                            Contribute to the future of AI security testing with our open source community.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Github className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Open Source
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                MIT licensed with transparent development and community contributions.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Community Driven
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Active development with contributions from security researchers worldwide.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <FileText className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Comprehensive Docs
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Extensive documentation, tutorials, and examples for all skill levels.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
                        Ready to Contribute to AI Security?
                    </h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                        Join the open source community in building the future of AI security testing
                        with transparent, community-driven development.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="https://github.com/ai-red-team-tool/airt"
                            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg hover:bg-gray-50 transition-colors"
                        >
                            <Github className="mr-2 h-5 w-5" />
                            View on GitHub
                        </Link>
                        <Link
                            href="https://github.com/ai-red-team-tool/airt/issues"
                            className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-blue-600 transition-colors"
                        >
                            Report Issues
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center justify-center space-x-8 text-blue-100">
                        <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            <span>MIT License</span>
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            <span>Open Source</span>
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            <span>Community Driven</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
} 