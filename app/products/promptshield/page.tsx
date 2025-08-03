import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import {
    ArrowLeft,
    Shield,
    Zap,
    Code,
    TrendingUp,
    Award,
    Globe,
    Check,
    AlertTriangle,
    Layers,
    Cpu,
    Brain,
    Eye,
    BarChart3,
    Lock,
    Clock,
    Users,
    MessageSquare,
    FileText,
    Building,
    GraduationCap,
    Headphones,
    Search,
    Play,
    Download,
    ExternalLink,
    ArrowRight,
    ChevronRight,
    BookOpen,
    Target,
    Server,
    Activity
} from 'lucide-react'
import { getProduct } from '@/lib/products'

export const metadata: Metadata = {
    title: 'PromptShield - Advanced Prompt Injection Detection',
    description: 'Protect your AI applications from malicious prompt attacks with enterprise-grade, multi-layered security.',
}

export default function PromptShieldPage() {
    const product = getProduct('promptshield')
    
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
                            Prompt Security
                        </span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        {product.name}
                    </h1>

                    <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                        Advanced Prompt Injection Detection
                    </p>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
                        {product.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8 justify-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
                            4-Layer Defense
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                            95%+ Accuracy
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400">
                            &lt; 500ms Response
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400">
                            Enterprise Ready
                        </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-primary">
                            Get Started Free
                        </Link>
                        <Link href="#demo" className="btn-secondary">
                            <Play className="mr-2 h-4 w-4" />
                            Try Demo
                        </Link>
                    </div>
                </div>

                {/* What is PromptShield */}
                <div className="mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                What is PromptShield?
                            </h2>
                            <div className="prose dark:prose-invert max-w-none">
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                    PromptShield is a comprehensive prompt injection detection system designed to safeguard AI applications from sophisticated prompt-based attacks. As organizations increasingly rely on Large Language Models (LLMs) for customer-facing applications, chatbots, and automated systems, the risk of prompt injection attacks has become a critical security concern.
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    PromptShield provides real-time detection and prevention of malicious prompts that attempt to manipulate AI models, extract sensitive information, or bypass safety guidelines.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-8 rounded-2xl">
                            <div className="text-center">
                                <Shield className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    Enterprise-Grade Protection
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Multi-layered defense against sophisticated prompt injection attacks
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Problem Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            The Problem: Prompt Injection Attacks
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Prompt injection attacks are a growing cybersecurity threat where malicious actors craft inputs designed to bypass safety controls and extract sensitive information.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
                            <AlertTriangle className="h-8 w-8 text-red-600 mb-4" />
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Bypass Safety Controls</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">Circumvent content filters and safety guidelines</p>
                        </div>
                        <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
                            <AlertTriangle className="h-8 w-8 text-red-600 mb-4" />
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Extract Sensitive Data</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">Access confidential information from AI systems</p>
                        </div>
                        <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
                            <AlertTriangle className="h-8 w-8 text-red-600 mb-4" />
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Manipulate AI Behavior</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">Force AI to perform unauthorized actions</p>
                        </div>
                    </div>

                    {/* Attack Examples */}
                    <div className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-2xl">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                            Real-World Attack Examples
                        </h3>
                        <div className="space-y-4">
                            {product.attackExamples?.map((example, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mr-4 mt-3"></div>
                                    <code className="text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-3 py-2 rounded text-sm font-mono">
                                        {example}
                                    </code>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* How It Works - Architecture */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            How PromptShield Works
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            PromptShield employs a sophisticated three-layer defense architecture that combines multiple detection methods for comprehensive protection.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {product.architecture?.layers.map((layer, index) => {
                            const colors = [
                                'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20',
                                'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20',
                                'from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20',
                                'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20'
                            ]
                            const bgColors = [
                                'bg-blue-600',
                                'bg-purple-600',
                                'bg-green-600',
                                'bg-orange-600'
                            ]
                            const checkColors = [
                                'text-blue-600',
                                'text-purple-600',
                                'text-green-600',
                                'text-orange-600'
                            ]
                            const icons = [Cpu, Brain, Eye, Activity]
                            
                            return (
                                <div key={index} className="relative">
                                    <div className={`bg-gradient-to-br ${colors[index]} p-8 rounded-2xl h-full`}>
                                        <div className="text-center mb-6">
                                            <div className={`w-16 h-16 ${bgColors[index]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                                {React.createElement(icons[index], { className: "h-8 w-8 text-white" })}
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                                {layer.name}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                                            {layer.description}
                                        </p>
                                        <div className="space-y-2">
                                            {layer.detects.map((detect, detectIndex) => (
                                                <div key={detectIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                                    <Check className={`h-4 w-4 ${checkColors[index]} mr-2`} />
                                                    {detect}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Key Features */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Key Features
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {product.features.map((feature, index) => {
                            const [title, description] = feature.split(' - ')
                            const icons = [Zap, BarChart3, Code, BarChart3, Lock, Clock]
                            const bgColors = [
                                'bg-primary-100 dark:bg-primary-900/20',
                                'bg-green-100 dark:bg-green-900/20',
                                'bg-blue-100 dark:bg-blue-900/20',
                                'bg-purple-100 dark:bg-purple-900/20',
                                'bg-red-100 dark:bg-red-900/20',
                                'bg-yellow-100 dark:bg-yellow-900/20'
                            ]
                            const textColors = [
                                'text-primary-600',
                                'text-green-600',
                                'text-blue-600',
                                'text-purple-600',
                                'text-red-600',
                                'text-yellow-600'
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
                                Enterprise-grade performance and capabilities for production environments
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                                        <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Performance</h3>
                                </div>
                                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <div><span className="font-medium">Response Time:</span> {product.technicalSpecs.responseTime}</div>
                                    <div><span className="font-medium">Throughput:</span> {product.technicalSpecs.throughput}</div>
                                    <div><span className="font-medium">Latency:</span> {product.technicalSpecs.latency}</div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                                        <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Detection</h3>
                                </div>
                                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <div><span className="font-medium">Accuracy:</span> {product.technicalSpecs.detectionAccuracy}</div>
                                    <div><span className="font-medium">Memory Efficiency:</span> {product.technicalSpecs.memoryEfficiency}</div>
                                    <div><span className="font-medium">CPU Optimization:</span> {product.technicalSpecs.cpuOptimization}</div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                                        <Brain className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Optimization</h3>
                                </div>
                                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <div><span className="font-medium">Cache Hit Rate:</span> {product.technicalSpecs.cacheHitRate}</div>
                                    <div><span className="font-medium">Availability:</span> {product.technicalSpecs.availability}</div>
                                    <div><span className="font-medium">Real-time:</span> Enhanced caching</div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                                        <Building className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Enterprise</h3>
                                </div>
                                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <div><span className="font-medium">Security:</span> SOC 2 Type II ready</div>
                                    <div><span className="font-medium">Compliance:</span> GDPR compliant</div>
                                    <div><span className="font-medium">Data:</span> Zero retention by default</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Use Cases */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Use Cases & Applications
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            PromptShield protects AI applications across industries and use cases
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {product.useCases?.map((useCase, index) => (
                            <div key={index} className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700">
                                <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mb-4">
                                    <Target className="h-4 w-4 text-primary-600" />
                                </div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    {useCase}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Integration Examples */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Integration Examples
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Get started with PromptShield in just a few lines of code
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
                                <code>{product.integrationExamples?.python}</code>
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
                                <code>{product.integrationExamples?.javascript}</code>
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
                            <code>{product.integrationExamples?.api}</code>
                        </pre>
                    </div>
                </div>

                {/* Why Choose PromptShield */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Why Choose PromptShield?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {product.benefits?.map((benefit, index) => {
                            const iconMap: { [key: string]: any } = {
                                'Zap': Zap,
                                'Shield': Shield,
                                'Code': Code,
                                'Building': Building,
                                'Award': Award,
                                'Globe': Globe,
                                'Server': Server,
                                'Activity': Activity
                            }
                            const IconComponent = iconMap[benefit.icon] || Shield
                            
                            return (
                                <div key={index} className="text-center p-6">
                                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <IconComponent className="h-8 w-8 text-primary-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        {benefit.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Get Started Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Get Started with PromptShield
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Start protecting your AI applications from prompt injection attacks in minutes
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Link
                            href="/docs/promptshield-quick-start"
                            className="group block p-8 border-2 border-primary-200 dark:border-primary-700 rounded-2xl hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-200 hover:shadow-lg"
                        >
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/40 transition-colors">
                                    <Play className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                                    Quick Start Guide
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Get up and running with PromptShield in under 5 minutes. Includes installation, basic usage, and testing examples.
                                </p>
                                <div className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium">
                                    Start Learning
                                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>

                        <Link
                            href="/docs/promptshield"
                            className="group block p-8 border-2 border-gray-200 dark:border-gray-700 rounded-2xl hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-200 hover:shadow-lg"
                        >
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/20 transition-colors">
                                    <BookOpen className="h-8 w-8 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                                    Full Documentation
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Explore the complete API reference, advanced features, and integration examples for all platforms.
                                </p>
                                <div className="inline-flex items-center text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-medium">
                                    View Docs
                                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Secure Your AI Applications?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Join thousands of organizations protecting their AI systems with PromptShield
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                            Get Started Free
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