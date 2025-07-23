import { Metadata } from 'next'
import Link from 'next/link'
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
    Building
} from 'lucide-react'

export const metadata: Metadata = {
    title: 'SafeAI Guard - Advanced AI Safety for Children',
    description: 'Protecting children in the age of artificial intelligence with enterprise-grade browser extension for safe AI interactions.',
}

export default function SafeAIGuardPage() {
    const keyFeatures = [
        {
            title: 'Real-Time Content Filtering',
            description: 'Advanced pattern recognition and context-aware analysis during AI conversations',
            icon: Eye,
            color: 'blue'
        },
        {
            title: 'Sophisticated Threat Detection',
            description: 'Detects grooming patterns, manipulation tactics, and inappropriate content',
            icon: Shield,
            color: 'red'
        },
        {
            title: 'Educational Enhancement',
            description: 'Transforms filtered content into learning opportunities and digital citizenship lessons',
            icon: BookOpen,
            color: 'green'
        },
        {
            title: 'Parent Approval Workflows',
            description: 'Instant notifications and quick approval options for borderline content',
            icon: Users,
            color: 'purple'
        },
        {
            title: 'Comprehensive Monitoring',
            description: 'Detailed analytics and activity tracking with real-time dashboards',
            icon: BarChart3,
            color: 'yellow'
        },
        {
            title: 'Privacy-First Architecture',
            description: 'Local processing with no data transmission and COPPA/GDPR compliance',
            icon: Lock,
            color: 'indigo'
        }
    ]

    const supportedPlatforms = [
        {
            name: 'ChatGPT',
            description: 'OpenAI\'s conversational AI platform',
            icon: Brain,
            status: 'Supported'
        },
        {
            name: 'Claude',
            description: 'Anthropic\'s AI assistant',
            icon: Brain,
            status: 'Supported'
        },
        {
            name: 'Google Gemini',
            description: 'Google\'s AI chatbot and assistant',
            icon: Brain,
            status: 'Supported'
        },
        {
            name: 'Perplexity AI',
            description: 'AI-powered search and research platform',
            icon: Search,
            status: 'Supported'
        },
        {
            name: 'You.com',
            description: 'AI search and chat platform',
            icon: Search,
            status: 'Supported'
        }
    ]

    const protectionLayers = [
        {
            title: 'Input Analysis',
            description: 'Advanced pattern recognition and context-aware semantic analysis before messages are sent',
            icon: Eye,
            features: ['Pattern recognition', 'Context-aware analysis', 'Age-appropriate scoring', 'Grooming detection']
        },
        {
            title: 'Response Filtering',
            description: 'Real-time monitoring of AI responses with content sanitization and educational alternatives',
            icon: Shield,
            features: ['Inappropriate content removal', 'Educational suggestions', 'Conversation preservation', 'Learning identification']
        },
        {
            title: 'Parent Communication',
            description: 'Instant notifications and approval workflows for borderline content detection',
            icon: Bell,
            features: ['Instant notifications', 'Content analysis', 'Quick approval options', 'Time-limited overrides']
        }
    ]

    const useCases = [
        {
            title: 'Homeschooling Families',
            description: 'Safely integrate AI tutoring into curriculum with monitored educational interactions',
            icon: BookOpen
        },
        {
            title: 'Tech-Savvy Parents',
            description: 'Granular controls and detailed analytics for different children and ages',
            icon: Users
        },
        {
            title: 'Educational Institutions',
            description: 'School-wide deployment with centralized management and compliance',
            icon: Building
        },
        {
            title: 'Modern Families',
            description: 'Comprehensive protection for children using AI in daily life',
            icon: Heart
        }
    ]

    const safetyFeatures = [
        {
            title: 'Grooming Pattern Detection',
            description: 'Advanced detection of predatory communication tactics',
            icon: AlertTriangle
        },
        {
            title: 'Emotional Manipulation Recognition',
            description: 'Identification of attempts to exploit trust or emotions',
            icon: Heart
        },
        {
            title: 'Inappropriate Content Filtering',
            description: 'Age-appropriate filtering for romantic or sexual content',
            icon: Shield
        },
        {
            title: 'Misinformation Detection',
            description: 'Identification of misleading or false information',
            icon: AlertTriangle
        },
        {
            title: 'Self-Harm Content Detection',
            description: 'Detection of content promoting dangerous behaviors',
            icon: AlertTriangle
        },
        {
            title: 'Educational Redirection',
            description: 'Convert inappropriate requests into learning opportunities',
            icon: BookOpen
        }
    ]

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
                        SafeAI Guard
                    </h1>

                    <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                        Advanced AI Safety for the Next Generation
                    </p>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
                        Protecting children in the age of artificial intelligence with enterprise-grade browser extension for safe AI interactions.
                    </p>

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
                        {keyFeatures.map((feature, index) => (
                            <div key={index} className="text-center p-6">
                                <div className={`w-16 h-16 bg-${feature.color}-100 dark:bg-${feature.color}-900/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                                    <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

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
                        {supportedPlatforms.map((platform, index) => (
                            <div key={index} className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700">
                                <div className="flex items-center justify-between mb-4">
                                    <platform.icon className="h-8 w-8 text-primary-600" />
                                    <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 px-2 py-1 rounded-full">
                                        {platform.status}
                                    </span>
                                </div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    {platform.name}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    {platform.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Protection Layers */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Multi-Layer Protection System
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Comprehensive safety through intelligent analysis and filtering
                        </p>
                    </div>

                    <div className="space-y-8">
                        {protectionLayers.map((layer, index) => (
                            <div key={index} className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                                            <layer.icon className="h-8 w-8 text-primary-600" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                            {layer.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                                            {layer.description}
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            {layer.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Safety Features */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Advanced Safety Features
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Sophisticated threat detection and educational enhancement
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {safetyFeatures.map((feature, index) => (
                            <div key={index} className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700">
                                <feature.icon className="h-8 w-8 text-primary-600 mb-4" />
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {useCases.map((useCase, index) => (
                            <div key={index} className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700">
                                <useCase.icon className="h-8 w-8 text-primary-600 mb-4" />
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    {useCase.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    {useCase.description}
                                </p>
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
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Brain className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Beyond Basic Blocking
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Advanced AI technology that understands context, intent, and nuance—providing sophisticated protection that adapts to real conversations.
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <BookOpen className="h-8 w-8 text-green-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Educational Focus
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Empowers children to learn safely by guiding them toward appropriate AI interactions and teaching digital citizenship through positive reinforcement.
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Lock className="h-8 w-8 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                Enterprise-Grade Security
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Local processing with bank-level encryption, COPPA & GDPR compliance, and regular security audits for maximum privacy and protection.
                            </p>
                        </div>
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