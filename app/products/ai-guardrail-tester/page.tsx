import { Metadata } from 'next'
import { Shield, Zap, Code, BarChart3, TestTube, GitBranch, FileText, Users, Lock, ArrowRight, CheckCircle, AlertTriangle, Clock, Database, Cpu, Target, Rocket } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'AI Guardrail Tester - Focused AI Security Testing Tool',
    description: 'Focused AI security testing tool. A specialized platform for testing AI models against specific security vulnerabilities with targeted testing capabilities.',
}

export default function AIGuardrailTesterPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white dark:bg-gray-900 py-20 lg:py-32">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20"></div>
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="inline-flex items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-800 dark:bg-purple-900/20 dark:text-purple-400 mb-8">
                            <Target className="mr-2 h-4 w-4" />
                            Focused Security Testing
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
                            AI Guardrail Tester
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                                Specialized Platform
                            </span>
                        </h1>

                        <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                            Focused AI security testing tool. A specialized platform for testing AI models against specific security
                            vulnerabilities with targeted testing capabilities and rapid results.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="#get-started"
                                className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-purple-700 transition-colors"
                            >
                                Start Testing
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                href="#features"
                                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-700 shadow-lg hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors"
                            >
                                View Features
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section id="features" className="py-20 bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                            Focused Security Testing Platform
                        </h2>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                            Built for developers and security researchers who need targeted, efficient AI security testing.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-8 border border-purple-200 dark:border-purple-800">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
                                <Target className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Targeted Security Testing
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Focused testing for specific AI security vulnerabilities and attack vectors.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                                <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Simple Integration
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Easy-to-use API and SDKs for quick integration with existing AI systems.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-8 border border-green-200 dark:border-green-800">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6">
                                <Rocket className="h-6 w-6 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Rapid Testing
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Fast execution of security tests with quick results and minimal setup.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl p-8 border border-orange-200 dark:border-orange-800">
                            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-6">
                                <GitBranch className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Custom Test Creation
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Create and run custom security tests tailored to your specific needs.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl p-8 border border-red-200 dark:border-red-800">
                            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-6">
                                <BarChart3 className="h-6 w-6 text-red-600 dark:text-red-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Basic Reporting
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Essential reporting and analysis for security test results.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-indigo-200 dark:border-indigo-800">
                            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-6">
                                <Users className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Developer Friendly
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Designed for developers and security researchers with minimal overhead.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                            Perfect For Quick Security Assessment
                        </h2>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                            Ideal for developers and researchers who need fast, focused security testing.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-6">
                                <Rocket className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Quick Security Assessment
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Rapid evaluation of AI model security with targeted testing for specific vulnerabilities.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Fast setup and execution
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Immediate results
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Minimal configuration
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                                <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Developer Testing
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Easy integration into development workflows with simple APIs and SDKs.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Simple API integration
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Developer-friendly SDKs
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    CI/CD ready
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6">
                                <TestTube className="h-8 w-8 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Research & Development
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Custom test creation for research projects and experimental AI models.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Custom test creation
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Flexible testing
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Research support
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-6">
                                <Shield className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Basic Security Validation
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Essential security validation for AI models with straightforward reporting.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Basic reporting
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Essential validation
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Quick insights
                                </li>
                            </ul>
                        </div>
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
                            Simple setup and configuration for immediate security testing.
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
                                                <h4 className="font-semibold text-gray-900 dark:text-white">Install Package</h4>
                                                <code className="block mt-1 text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                                                    pip install ai-guardrail-tester
                                                </code>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-3">
                                            <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="text-green-600 dark:text-green-400 text-sm font-semibold">2</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 dark:text-white">Configure API Key</h4>
                                                <code className="block mt-1 text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                                                    export AI_GUARDRAIL_API_KEY="your-api-key"
                                                </code>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-3">
                                            <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="text-green-600 dark:text-green-400 text-sm font-semibold">3</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 dark:text-white">Start Testing</h4>
                                                <code className="block mt-1 text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded">
                                                    python -m ai_guardrail_tester test
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
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Quick Security Test</h4>
                                            <code className="text-sm text-gray-600 dark:text-gray-400">
                                                python -m ai_guardrail_tester test --model gpt-4
                                            </code>
                                        </div>

                                        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Custom Test</h4>
                                            <code className="text-sm text-gray-600 dark:text-gray-400">
                                                python -m ai_guardrail_tester custom --test my_test.py
                                            </code>
                                        </div>

                                        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Generate Report</h4>
                                            <code className="text-sm text-gray-600 dark:text-gray-400">
                                                python -m ai_guardrail_tester report --output results.json
                                            </code>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
                        Ready for Quick Security Testing?
                    </h2>
                    <p className="text-xl text-purple-100 mb-10 max-w-3xl mx-auto">
                        Start testing your AI models for security vulnerabilities with our focused,
                        developer-friendly testing platform.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-purple-600 shadow-lg hover:bg-gray-50 transition-colors"
                        >
                            <Target className="mr-2 h-5 w-5" />
                            Get Started
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-purple-600 transition-colors"
                        >
                            Contact Support
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center justify-center space-x-8 text-purple-100">
                        <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            <span>Fast Setup</span>
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            <span>Developer Friendly</span>
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            <span>Quick Results</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
} 