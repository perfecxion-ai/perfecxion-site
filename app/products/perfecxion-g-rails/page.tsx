import { Metadata } from 'next'
import { Shield, Zap, Code, BarChart3, TestTube, GitBranch, FileText, Users, Lock, ArrowRight, CheckCircle, AlertTriangle, Clock, Database, Cpu, Settings, Gauge } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'perfecX G-Rails - Advanced Guardrail Management System for AI Safety',
    description: 'Advanced guardrail management system for AI safety. Monitor, validate, and optimize your AI safety mechanisms in real-time with enterprise-grade security testing.',
}

export default function PerfecXionGRailsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white dark:bg-gray-900 py-20 lg:py-32">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20"></div>
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400 mb-8">
                            <Shield className="mr-2 h-4 w-4" />
                            AI Safety & Guardrails
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
                            perfecX G-Rails
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                                AI Safety Platform
                            </span>
                        </h1>

                        <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                            Advanced guardrail management system for AI safety. Monitor, validate, and optimize your AI safety mechanisms
                            in real-time with comprehensive enterprise-grade security testing capabilities.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="#get-started"
                                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-emerald-700 transition-colors"
                            >
                                Start Monitoring
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                            <Link
                                href="#architecture"
                                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-700 shadow-lg hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors"
                            >
                                View Architecture
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
                            Comprehensive Guardrail Management
                        </h2>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                            Built for security professionals and AI safety teams to systematically monitor and optimize AI safety mechanisms.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-8 border border-emerald-200 dark:border-emerald-800">
                            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-6">
                                <Gauge className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Guardrail Effectiveness Testing
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Comprehensive testing of guardrail effectiveness with real-time performance monitoring.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                                <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Safety Mechanism Validation
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Validate and verify AI safety mechanisms with automated testing and validation workflows.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-8 border border-green-200 dark:border-green-800">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6">
                                <BarChart3 className="h-6 w-6 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Performance Impact Monitoring
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Monitor the performance impact of safety mechanisms with detailed analytics and reporting.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl p-8 border border-purple-200 dark:border-purple-800">
                            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
                                <Clock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Continuous Safety Assessment
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Continuous assessment of AI safety with real-time monitoring and automated alerts.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl p-8 border border-yellow-200 dark:border-yellow-800">
                            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mb-6">
                                <Settings className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Custom Guardrail Configuration
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Customize and configure guardrails for your specific AI models and use cases.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-indigo-200 dark:border-indigo-800">
                            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-6">
                                <Zap className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                ML Pipeline Integration
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Seamless integration with ML pipelines and MLOps platforms for automated safety testing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Architecture Section */}
            <section id="architecture" className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                            Three Core Architectural Pillars
                        </h2>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                            Built around a robust, scalable architecture designed for enterprise AI safety management.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-6">
                                <Gauge className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Guardrail Testing Engine
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Advanced testing engine for evaluating guardrail effectiveness with comprehensive validation workflows.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Automated testing workflows
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Effectiveness validation
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Performance benchmarking
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                                <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Safety Validation Layer
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Unified interface for different AI model providers with seamless safety mechanism integration.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Safety mechanism testing
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Validation workflows
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Compliance verification
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-6">
                                <BarChart3 className="h-8 w-8 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Monitoring & Analytics
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Orchestrates safety workflows and manages results with comprehensive monitoring and analytics.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Real-time monitoring
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Performance analytics
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                    Safety reporting
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security Testing Categories */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                            Comprehensive Security Testing
                        </h2>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                            Advanced testing capabilities covering all major AI security vulnerabilities and safety mechanisms.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-red-800 dark:text-red-400">Prompt Injection Testing</h3>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                                    Critical
                                </span>
                            </div>
                            <p className="text-red-700 dark:text-red-300 text-sm">✅ Advanced detection and prevention</p>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-400">Social Engineering</h3>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                                    High
                                </span>
                            </div>
                            <p className="text-orange-700 dark:text-orange-300 text-sm">✅ Sophisticated manipulation detection</p>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-400">Model Manipulation</h3>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                                    High
                                </span>
                            </div>
                            <p className="text-orange-700 dark:text-orange-300 text-sm">✅ Behavioral analysis and detection</p>
                        </div>

                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-400">Data Poisoning</h3>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                                    Medium
                                </span>
                            </div>
                            <p className="text-yellow-700 dark:text-yellow-300 text-sm">✅ Training data integrity validation</p>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-400">Adversarial Examples</h3>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                                    High
                                </span>
                            </div>
                            <p className="text-orange-700 dark:text-orange-300 text-sm">✅ Robustness testing and validation</p>
                        </div>

                        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-400">Supply Chain Attacks</h3>
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                                    High
                                </span>
                            </div>
                            <p className="text-orange-700 dark:text-orange-300 text-sm">✅ Dependency and model validation</p>
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <p className="text-gray-600 dark:text-gray-400">
                            And 10+ additional security testing categories with continuous updates...
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Start Section */}
            <section id="get-started" className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                            Get Started in Minutes
                        </h2>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                            Simple setup and configuration for immediate guardrail monitoring and testing.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
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
                                                <h4 className="font-semibold text-gray-900 dark:text-white">Deploy Platform</h4>
                                                <code className="block mt-1 text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded">
                                                    docker-compose up -d
                                                </code>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-3">
                                            <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="text-green-600 dark:text-green-400 text-sm font-semibold">2</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 dark:text-white">Configure Guardrails</h4>
                                                <code className="block mt-1 text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded">
                                                    perfecx-grails configure --guardrails
                                                </code>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-3">
                                            <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="text-green-600 dark:text-green-400 text-sm font-semibold">3</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 dark:text-white">Start Monitoring</h4>
                                                <code className="block mt-1 text-sm bg-gray-100 dark:bg-gray-800 p-2 rounded">
                                                    perfecx-grails monitor --start
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
                                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Test Guardrail Effectiveness</h4>
                                            <code className="text-sm text-gray-600 dark:text-gray-400">
                                                perfecx-grails test --guardrail prompt-injection
                                            </code>
                                        </div>

                                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Generate Safety Report</h4>
                                            <code className="text-sm text-gray-600 dark:text-gray-400">
                                                perfecx-grails report --format pdf --output safety-assessment.pdf
                                            </code>
                                        </div>

                                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ML Pipeline Integration</h4>
                                            <code className="text-sm text-gray-600 dark:text-gray-400">
                                                perfecx-grails ci --threshold high --fail-on-vulnerabilities
                                            </code>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enterprise Features */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                            Enterprise-Grade Features
                        </h2>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                            Built for AI safety teams and organizations requiring comprehensive guardrail management.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Team Collaboration
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Multi-user support with role-based access control and shared safety monitoring sessions.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <FileText className="h-8 w-8 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Compliance Reporting
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Generate detailed reports for SOC2, ISO 27001, and other compliance requirements.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Lock className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Security Controls
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Built-in rate limiting, audit logging, and ethical testing safeguards.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Database className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Audit Logging
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Complete activity tracking and audit trails for all guardrail operations.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <BarChart3 className="h-8 w-8 text-red-600 dark:text-red-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Advanced Analytics
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Detailed metrics, safety trends, and performance analysis.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Zap className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                API Integration
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                RESTful API with webhooks, batch testing, and enterprise integrations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
                        Ready to Secure Your AI Systems?
                    </h2>
                    <p className="text-xl text-emerald-100 mb-10 max-w-3xl mx-auto">
                        Join AI safety professionals worldwide in systematically monitoring and securing AI models
                        with the most advanced guardrail management platform available.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-emerald-600 shadow-lg hover:bg-gray-50 transition-colors"
                        >
                            <Shield className="mr-2 h-5 w-5" />
                            Schedule Demo
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-emerald-600 transition-colors"
                        >
                            Contact Sales
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center justify-center space-x-8 text-emerald-100">
                        <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            <span>Enterprise Ready</span>
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            <span>SOC2 Compliant</span>
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            <span>24/7 Support</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
} 