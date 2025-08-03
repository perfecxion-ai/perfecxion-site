import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import {
    ArrowLeft,
    Shield,
    Zap,
    Brain,
    Users,
    Activity,
    Lock,
    Eye,
    BarChart3,
    Cpu,
    Network,
    MessageSquare,
    Check,
    AlertTriangle,
    Play,
    ArrowRight,
    Layers,
    Database,
    Globe,
    Building,
    Code,
    Server,
    Search,
    Target,
    CheckCircle
} from 'lucide-react'
import { getProduct } from '@/lib/products'

export const metadata: Metadata = {
    title: 'perfecX Agent - AI Agent & Multi-Agent System Security Platform',
    description: 'Secure autonomous AI agents and multi-agent systems with real-time monitoring, behavioral analysis, and policy enforcement.',
}

export default function PerfecXAgentPage() {
    const product = getProduct('perfecxion-agent')
    
    if (!product) {
        return <div>Product not found</div>
    }

    return (
        <div className="bg-white dark:bg-background-dark min-h-screen">
            <div className="max-width container-padding section-padding">
                <Link
                    href="/products"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 mb-8 text-sm font-medium transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Products
                </Link>

                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div className="mb-6">
                        <span className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium">
                            <Shield className="h-4 w-4" />
                            Agent Monitoring
                        </span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        {product.name}
                    </h1>

                    <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                        AI Agent & Multi-Agent System Security Platform
                    </p>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
                        {product.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8 justify-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
                            70+ Security Tests
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                            AI Agent Discovery
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400">
                            Data Privacy Protection
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400">
                            Enterprise Ready
                        </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-primary">
                            Get Started
                        </Link>
                        <Link href="#demo" className="btn-secondary">
                            <Play className="mr-2 h-4 w-4" />
                            View Demo
                        </Link>
                    </div>
                </div>

                {/* What is perfecX Agent */}
                <div className="mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                What is perfecX Agent?
                            </h2>
                            <div className="prose dark:prose-invert max-w-none">
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                    perfecX Agent is a cutting-edge security platform designed to secure autonomous AI agents and multi-agent systems in enterprise environments. Built with a security-first approach, it provides comprehensive protection for AI agents operating at scale.
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    The platform monitors agent behavior in real-time, detects threats, enforces security policies, and protects against sophisticated attacks targeting AI systems.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-8 rounded-2xl">
                            <div className="text-center">
                                <Shield className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    Enterprise-Grade Security
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Comprehensive protection for AI agents and multi-agent systems
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Features */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Key Features
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Comprehensive security and monitoring capabilities for AI agents
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {product.features.map((feature, index) => {
                            const [title, description] = feature.split(' - ')
                            const icons = [Search, Shield, Lock, Target, Server, Building]
                            const bgColors = [
                                'bg-blue-100 dark:bg-blue-900/20',
                                'bg-green-100 dark:bg-green-900/20',
                                'bg-red-100 dark:bg-red-900/20',
                                'bg-purple-100 dark:bg-purple-900/20',
                                'bg-yellow-100 dark:bg-yellow-900/20',
                                'bg-indigo-100 dark:bg-indigo-900/20'
                            ]
                            const textColors = [
                                'text-blue-600',
                                'text-green-600',
                                'text-red-600',
                                'text-purple-600',
                                'text-yellow-600',
                                'text-indigo-600'
                            ]
                            
                            return (
                                <div key={index} className="text-center p-6">
                                    <div className={`w-16 h-16 ${bgColors[index]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                        {React.createElement(icons[index], { className: `h-8 w-8 ${textColors[index]}` })}
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        {title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        {description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Technical Specifications */}
                {product.technicalSpecs && (
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Technical Specifications
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                                Enterprise-grade performance and security capabilities
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                                        <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Security Testing</h3>
                                </div>
                                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <div><span className="font-medium">Tests:</span> {product.technicalSpecs.securityTests}</div>
                                    <div><span className="font-medium">Response Time:</span> {product.technicalSpecs.responseTime}</div>
                                    <div><span className="font-medium">Throughput:</span> {product.technicalSpecs.throughput}</div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                                        <Search className="h-5 w-5 text-green-600 dark:text-green-400" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Discovery</h3>
                                </div>
                                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <div><span className="font-medium">Capabilities:</span> {product.technicalSpecs.discoveryCapabilities}</div>
                                    <div><span className="font-medium">Availability:</span> {product.technicalSpecs.availability}</div>
                                    <div><span className="font-medium">Latency:</span> {product.technicalSpecs.latency}</div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                                        <Lock className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Data Protection</h3>
                                </div>
                                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <div><span className="font-medium">PII Types:</span> {product.technicalSpecs.dataProtection}</div>
                                    <div><span className="font-medium">Privacy Testing:</span> Comprehensive</div>
                                    <div><span className="font-medium">Compliance:</span> GDPR, CCPA</div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                                        <Building className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Enterprise</h3>
                                </div>
                                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <div><span className="font-medium">Features:</span> {product.technicalSpecs.enterpriseFeatures}</div>
                                    <div><span className="font-medium">Authentication:</span> JWT-based</div>
                                    <div><span className="font-medium">RBAC:</span> Role-based access</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Architecture */}
                {product.architecture && (
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Platform Architecture
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                                Multi-layered security architecture designed for enterprise scale
                            </p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            {product.architecture.layers.map((layer, index) => {
                                const icons = [Search, Shield, Target, Server]
                                const bgColors = [
                                    'bg-blue-100 dark:bg-blue-900/30',
                                    'bg-green-100 dark:bg-green-900/30',
                                    'bg-red-100 dark:bg-red-900/30',
                                    'bg-purple-100 dark:bg-purple-900/30'
                                ]
                                const iconColors = [
                                    'text-blue-600 dark:text-blue-400',
                                    'text-green-600 dark:text-green-400',
                                    'text-red-600 dark:text-red-400',
                                    'text-purple-600 dark:text-purple-400'
                                ]
                                
                                return (
                                    <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                                        <div className={`w-16 h-16 ${bgColors[index]} rounded-xl flex items-center justify-center mb-6`}>
                                            {React.createElement(icons[index], { className: `h-8 w-8 ${iconColors[index]}` })}
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                            {layer.name}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                                            {layer.description}
                                        </p>
                                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                            {layer.detects.map((detect, detectIndex) => (
                                                <li key={detectIndex} className="flex items-center">
                                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                                    {detect}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}

                {/* Integration Examples */}
                {product.integrationExamples && (
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Integration Examples
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                                Get started with perfecX Agent in just a few lines of code
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Python */}
                            <div className="bg-gray-900 dark:bg-gray-800 rounded-xl p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-white">Python Integration</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-gray-400">Python</span>
                                    </div>
                                </div>
                                <pre className="text-sm text-gray-300 overflow-x-auto">
                                    <code>{product.integrationExamples.python}</code>
                                </pre>
                            </div>

                            {/* JavaScript */}
                            <div className="bg-gray-900 dark:bg-gray-800 rounded-xl p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-white">JavaScript Integration</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-gray-400">JavaScript</span>
                                    </div>
                                </div>
                                <pre className="text-sm text-gray-300 overflow-x-auto">
                                    <code>{product.integrationExamples.javascript}</code>
                                </pre>
                            </div>
                        </div>

                        {/* REST API */}
                        <div className="mt-8 bg-gray-900 dark:bg-gray-800 rounded-xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-white">REST API</h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-400">cURL</span>
                                </div>
                            </div>
                            <pre className="text-sm text-gray-300 overflow-x-auto">
                                <code>{product.integrationExamples.api}</code>
                            </pre>
                        </div>
                    </div>
                )}

                {/* Use Cases */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Use Cases
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Protect AI agents across various deployment scenarios
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {product.useCases?.map((useCase, index) => (
                            <div key={index} className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700">
                                <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mb-4">
                                    <CheckCircle className="h-4 w-4 text-primary-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    {useCase}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Performance Metrics */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Performance & Scale
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
                            <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                            <div className="text-gray-600 dark:text-gray-300">Uptime SLA</div>
                        </div>
                        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl">
                            <div className="text-3xl font-bold text-green-600 mb-2">&lt;50ms</div>
                            <div className="text-gray-600 dark:text-gray-300">Agent Registration</div>
                        </div>
                        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
                            <div className="text-3xl font-bold text-purple-600 mb-2">&lt;100ms</div>
                            <div className="text-gray-600 dark:text-gray-300">Behavioral Analysis</div>
                        </div>
                        <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-xl">
                            <div className="text-3xl font-bold text-yellow-600 mb-2">1000+</div>
                            <div className="text-gray-600 dark:text-gray-300">Concurrent Agents</div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Secure Your AI Agents?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Join organizations protecting their AI agent ecosystems with perfecX Agent
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                            Contact Sales
                        </Link>
                        <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                            Schedule Demo
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
} 