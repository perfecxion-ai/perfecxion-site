import { Metadata } from 'next'
import Link from 'next/link'
import {
    ArrowLeft,
    Shield,
    CheckCircle,
    FileText,
    BarChart3,
    Users,
    Building,
    Lock,
    Eye,
    AlertTriangle,
    Play,
    ArrowRight,
    Layers,
    Database,
    Globe,
    Zap,
    Clock,
    Target,
    Award,
    Settings,
    Search,
    Download,
    ExternalLink
} from 'lucide-react'

export const metadata: Metadata = {
    title: 'perfecX Comply - AI Governance & Compliance Automation Platform',
    description: 'Automate AI governance and compliance across multiple regulatory frameworks with real-time monitoring and comprehensive audit capabilities.',
}

export default function PerfecXComplyPage() {
    const keyFeatures = [
        {
            title: 'Multi-Framework Compliance',
            description: 'Support for EU AI Act, NIST AI RMF, SOC 2 Type II, and ISO 42001',
            icon: FileText,
            color: 'blue'
        },
        {
            title: 'Automated Risk Assessment',
            description: 'AI-powered bias detection and fairness testing with custom risk scoring',
            icon: Target,
            color: 'red'
        },
        {
            title: 'Real-Time Monitoring',
            description: 'Continuous compliance monitoring with automated violation detection',
            icon: Eye,
            color: 'green'
        },
        {
            title: 'Enterprise Integration',
            description: 'Seamless integration with MLOps platforms and enterprise systems',
            icon: Building,
            color: 'purple'
        },
        {
            title: 'Comprehensive Auditing',
            description: 'Complete audit trails and automated report generation',
            icon: BarChart3,
            color: 'yellow'
        },
        {
            title: 'Asset Management',
            description: 'AI model discovery, cataloging, and lifecycle tracking',
            icon: Database,
            color: 'indigo'
        }
    ]

    const complianceFrameworks = [
        {
            name: 'EU AI Act',
            description: 'Comprehensive compliance with European AI regulations',
            icon: Globe,
            status: 'Supported'
        },
        {
            name: 'NIST AI RMF',
            description: 'Risk management framework for AI systems',
            icon: Shield,
            status: 'Supported'
        },
        {
            name: 'SOC 2 Type II',
            description: 'Security and compliance controls automation',
            icon: Lock,
            status: 'Supported'
        },
        {
            name: 'ISO 42001',
            description: 'AI management system standards',
            icon: Award,
            status: 'Supported'
        }
    ]

    const useCases = [
        {
            title: 'Enterprise AI Governance',
            description: 'Centralized governance for large-scale AI deployments',
            icon: Building
        },
        {
            title: 'Regulatory Compliance',
            description: 'Automated compliance with industry regulations',
            icon: CheckCircle
        },
        {
            title: 'Risk Management',
            description: 'Proactive risk assessment and mitigation',
            icon: AlertTriangle
        },
        {
            title: 'Audit Preparation',
            description: 'Streamlined audit processes and evidence collection',
            icon: FileText
        }
    ]

    const platformCapabilities = [
        {
            title: 'AI Asset Discovery',
            description: 'Automated discovery and cataloging of AI models and systems',
            icon: Search
        },
        {
            title: 'Bias Detection',
            description: 'Advanced algorithms for detecting and mitigating AI bias',
            icon: Target
        },
        {
            title: 'Policy Enforcement',
            description: 'Automated policy enforcement and violation alerting',
            icon: Shield
        },
        {
            title: 'Report Generation',
            description: 'Automated compliance reports and audit documentation',
            icon: Download
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
                            Compliance Management
                        </span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        perfecX Comply
                    </h1>

                    <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                        AI Governance & Compliance Automation Platform
                    </p>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
                        Automate AI governance and compliance across multiple regulatory frameworks with real-time monitoring and comprehensive audit capabilities.
                    </p>

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

                {/* What is perfecX Comply */}
                <div className="mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                What is perfecX Comply?
                            </h2>
                            <div className="prose dark:prose-invert max-w-none">
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                    perfecX Comply is a comprehensive enterprise solution for automating AI governance and compliance across multiple regulatory frameworks. Built as a cloud-native, security-first platform, it provides real-time monitoring, automated compliance checking, and comprehensive audit capabilities for AI systems at enterprise scale.
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    The platform helps organizations navigate complex AI regulations, automate compliance processes, and maintain continuous governance over their AI systems.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-8 rounded-2xl">
                            <div className="text-center">
                                <CheckCircle className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    Automated Compliance
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Streamlined compliance processes with automated risk assessment and monitoring
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
                            Comprehensive governance and compliance capabilities for AI systems
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

                {/* Compliance Frameworks */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Supported Compliance Frameworks
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Comprehensive support for major AI governance and compliance standards
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {complianceFrameworks.map((framework, index) => (
                            <div key={index} className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700">
                                <div className="flex items-center justify-between mb-4">
                                    <framework.icon className="h-8 w-8 text-primary-600" />
                                    <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 px-2 py-1 rounded-full">
                                        {framework.status}
                                    </span>
                                </div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    {framework.name}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    {framework.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Platform Capabilities */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Platform Capabilities
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Advanced features for comprehensive AI governance
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {platformCapabilities.map((capability, index) => (
                            <div key={index} className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700">
                                <capability.icon className="h-8 w-8 text-primary-600 mb-4" />
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    {capability.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    {capability.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Use Cases */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Use Cases
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Comprehensive governance solutions for various scenarios
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

                {/* Performance Metrics */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Performance & Scale
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
                            <div className="text-3xl font-bold text-blue-600 mb-2">&lt;200ms</div>
                            <div className="text-gray-600 dark:text-gray-300">API Response Time</div>
                        </div>
                        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl">
                            <div className="text-3xl font-bold text-green-600 mb-2">&lt;10min</div>
                            <div className="text-gray-600 dark:text-gray-300">Report Generation</div>
                        </div>
                        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
                            <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
                            <div className="text-gray-600 dark:text-gray-300">Concurrent Users</div>
                        </div>
                        <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-xl">
                            <div className="text-3xl font-bold text-yellow-600 mb-2">99.9%</div>
                            <div className="text-gray-600 dark:text-gray-300">Uptime SLA</div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Automate Your AI Compliance?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Join organizations streamlining their AI governance with perfecX Comply
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