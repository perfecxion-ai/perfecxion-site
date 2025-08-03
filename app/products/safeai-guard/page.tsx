import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import {
    ArrowLeft,
    Shield,
    Users,
    Eye,
    Brain,
    Lock,
    AlertTriangle,
    Play,
    ArrowRight,
    Zap,
    Clock,
    Target,
    Award,
    Settings,
    Search,
    Download,
    ExternalLink,
    CheckCircle,
    FileText,
    BarChart3,
    Globe,
    Heart,
    BookOpen,
    Smartphone,
    Monitor,
    Bell,
    Building,
    Activity
} from 'lucide-react'
import { getProduct } from '@/lib/products'

export const metadata: Metadata = {
    title: 'SafeAI Guard - Advanced AI Safety for Children',
    description: 'Protecting children in the age of artificial intelligence with enterprise-grade browser extension for safe AI interactions.',
}

export default function SafeAIGuardPage() {
    const product = getProduct('safeai-guard')
    
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
                            Child Safety
                        </span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        {product.name}
                    </h1>

                    <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                        Advanced AI Safety for the Next Generation
                    </p>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
                        {product.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8 justify-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
                            8+ Content Categories
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                            Real-Time Monitoring
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400">
                            6+ AI Platforms
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400">
                            Privacy First
                        </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-primary">
                            Get Started Free
                        </Link>
                        <Link href="#demo" className="btn-secondary">
                            <Play className="mr-2 h-4 w-4" />
                            View Demo
                        </Link>
                    </div>
                </div>

                {/* What is SafeAI Guard */}
                <div className="mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                What is SafeAI Guard?
                            </h2>
                            <div className="prose dark:prose-invert max-w-none">
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                    SafeAI Guard is a sophisticated browser extension that acts as an intelligent safety layer between children and AI assistants. Unlike basic keyword filters, our solution uses advanced pattern recognition, context-aware analysis, and educational redirection to provide comprehensive protection without disrupting the learning experience.
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    As AI assistants become integral to education and daily life, children need protection from new risks that traditional parental controls cannot address.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-8 rounded-2xl">
                            <div className="text-center">
                                <Shield className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    Intelligent Safety Layer
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Advanced protection that adapts to real conversations and preserves learning opportunities
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
                            Comprehensive protection and educational enhancement for AI interactions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {product.features.map((feature, index) => {
                            const [title, description] = feature.split(' - ')
                            const icons = [Shield, Target, Activity, Globe, Bell, Lock]
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
                                Enterprise-grade performance and safety capabilities
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                                        <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Content Filtering</h3>
                                </div>
                                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <div><span className="font-medium">Categories:</span> {product.technicalSpecs.contentCategories}</div>
                                    <div><span className="font-medium">Response Time:</span> {product.technicalSpecs.responseTime}</div>
                                    <div><span className="font-medium">Throughput:</span> {product.technicalSpecs.throughput}</div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                                        <Target className="h-5 w-5 text-green-600 dark:text-green-400" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Threat Detection</h3>
                                </div>
                                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <div><span className="font-medium">Detection:</span> {product.technicalSpecs.threatDetection}</div>
                                    <div><span className="font-medium">Availability:</span> {product.technicalSpecs.availability}</div>
                                    <div><span className="font-medium">Latency:</span> {product.technicalSpecs.latency}</div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                                        <Globe className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Platform Support</h3>
                                </div>
                                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <div><span className="font-medium">Platforms:</span> {product.technicalSpecs.platformSupport}</div>
                                    <div><span className="font-medium">Real-time:</span> Streaming modification</div>
                                    <div><span className="font-medium">Integration:</span> Browser extension</div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                                        <Lock className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Privacy & Compliance</h3>
                                </div>
                                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <div><span className="font-medium">Compliance:</span> {product.technicalSpecs.privacyCompliance}</div>
                                    <div><span className="font-medium">Processing:</span> Local only</div>
                                    <div><span className="font-medium">Encryption:</span> Bank-level</div>
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
                                Multi-Layer Protection System
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                                Comprehensive safety through intelligent analysis and filtering
                            </p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            {product.architecture.layers.map((layer, index) => {
                                const icons = [Shield, Activity, Bell, Globe]
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
                                SafeAI Guard operates as a browser extension with local processing
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* JavaScript */}
                            <div className="bg-gray-900 dark:bg-gray-800 rounded-xl p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-white">Browser Extension</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-gray-400">JavaScript</span>
                                    </div>
                                </div>
                                <pre className="text-sm text-gray-300 overflow-x-auto">
                                    <code>{product.integrationExamples.javascript}</code>
                                </pre>
                            </div>

                            {/* API */}
                            <div className="bg-gray-900 dark:bg-gray-800 rounded-xl p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-white">Extension Manifest</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-gray-400">JSON</span>
                                    </div>
                                </div>
                                <pre className="text-sm text-gray-300 overflow-x-auto">
                                    <code>{product.integrationExamples.api}</code>
                                </pre>
                            </div>
                        </div>
                    </div>
                )}

                {/* Supported Platforms */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Supported AI Platforms
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Comprehensive protection across all major AI platforms
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between mb-4">
                                <Brain className="h-8 w-8 text-primary-600" />
                                <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 px-2 py-1 rounded-full">
                                    Supported
                                </span>
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                ChatGPT
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                OpenAI's conversational AI platform
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between mb-4">
                                <Brain className="h-8 w-8 text-primary-600" />
                                <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 px-2 py-1 rounded-full">
                                    Supported
                                </span>
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                Claude
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Anthropic's AI assistant
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between mb-4">
                                <Brain className="h-8 w-8 text-primary-600" />
                                <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 px-2 py-1 rounded-full">
                                    Supported
                                </span>
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                Google Gemini
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Google's AI chatbot and assistant
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between mb-4">
                                <Search className="h-8 w-8 text-primary-600" />
                                <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 px-2 py-1 rounded-full">
                                    Supported
                                </span>
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                Perplexity AI
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                AI-powered search and research platform
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between mb-4">
                                <Search className="h-8 w-8 text-primary-600" />
                                <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 px-2 py-1 rounded-full">
                                    Supported
                                </span>
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                You.com
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                AI search and chat platform
                            </p>
                        </div>
                    </div>
                </div>

                {/* Use Cases */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Perfect for Modern Families
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Comprehensive protection for various family and educational scenarios
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

                {/* Why Choose SafeAI Guard */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Why Choose SafeAI Guard?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {product.benefits?.map((benefit, index) => (
                            <div key={index} className="text-center p-6">
                                <div className={`w-16 h-16 bg-${index === 0 ? 'blue' : index === 1 ? 'green' : 'purple'}-100 dark:bg-${index === 0 ? 'blue' : index === 1 ? 'green' : 'purple'}-900/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                                    {React.createElement(
                                        index === 0 ? Shield : index === 1 ? BookOpen : Lock,
                                        { className: `h-8 w-8 text-${index === 0 ? 'blue' : index === 1 ? 'green' : 'purple'}-600` }
                                    )}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Protect Your Children?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Join families worldwide protecting their children with SafeAI Guard
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                            Get Started Free
                        </Link>
                        <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
} 