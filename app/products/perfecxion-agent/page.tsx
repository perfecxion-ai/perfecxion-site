import { Metadata } from 'next'
import Link from 'next/link'
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
    Server
} from 'lucide-react'

export const metadata: Metadata = {
    title: 'perfecX Agent - AI Agent & Multi-Agent System Security Platform',
    description: 'Secure autonomous AI agents and multi-agent systems with real-time monitoring, behavioral analysis, and policy enforcement.',
}

export default function PerfecXAgentPage() {
    const keyFeatures = [
        {
            title: 'Real-Time Agent Monitoring',
            description: 'Continuous behavioral analysis and anomaly detection across all AI agents',
            icon: Activity,
            color: 'blue'
        },
        {
            title: 'Multi-Agent Security',
            description: 'Protect agent-to-agent communications and prevent coordinated attacks',
            icon: Network,
            color: 'purple'
        },
        {
            title: 'Memory Protection',
            description: 'Cryptographic memory signing and integrity verification',
            icon: Brain,
            color: 'green'
        },
        {
            title: 'Policy Enforcement',
            description: 'Rule-based security controls and dynamic permission management',
            icon: Lock,
            color: 'red'
        },
        {
            title: 'Framework Integration',
            description: 'Seamless integration with LangChain, AutoGPT, CrewAI, and Semantic Kernel',
            icon: Cpu,
            color: 'yellow'
        },
        {
            title: 'Enterprise Scale',
            description: 'Monitor thousands of agents with 99.9% uptime and sub-second response times',
            icon: Globe,
            color: 'indigo'
        }
    ]

    const securityCapabilities = [
        {
            title: 'Identity & Access Management',
            description: 'Hierarchical agent identity system with role-based permissions',
            icon: Users
        },
        {
            title: 'Threat Detection',
            description: 'ML-powered detection of memory poisoning, tool misuse, and goal hijacking',
            icon: Shield
        },
        {
            title: 'Behavioral Analysis',
            description: 'Real-time baseline establishment and anomaly detection',
            icon: BarChart3
        },
        {
            title: 'Incident Response',
            description: 'Automated threat mitigation and security incident management',
            icon: AlertTriangle
        }
    ]

    const useCases = [
        {
            title: 'Enterprise AI Operations',
            description: 'Secure large-scale AI agent deployments across organizations',
            icon: Building
        },
        {
            title: 'Multi-Agent Workflows',
            description: 'Protect complex agent collaboration and communication networks',
            icon: Network
        },
        {
            title: 'AI Development Teams',
            description: 'Safeguard AI development and testing environments',
            icon: Code
        },
        {
            title: 'Production AI Systems',
            description: 'Monitor and secure AI systems in production environments',
            icon: Server
        }
    ]

    const architectureLayers = [
        {
            name: 'Management Layer',
            description: 'Web dashboard, mobile app, CLI tools, and external APIs',
            color: 'from-blue-500 to-blue-600'
        },
        {
            name: 'Security Enforcement',
            description: 'Authentication, policy engine, threat detection, and incident response',
            color: 'from-red-500 to-red-600'
        },
        {
            name: 'Core Platform Services',
            description: 'Agent discovery, behavioral monitoring, memory guardian, and communication hub',
            color: 'from-green-500 to-green-600'
        },
        {
            name: 'Data & Analytics',
            description: 'Graph database, time-series data, event streams, and ML pipeline',
            color: 'from-purple-500 to-purple-600'
        },
        {
            name: 'Agent Integration',
            description: 'Framework adapters for LangChain, AutoGPT, CrewAI, and Semantic Kernel',
            color: 'from-yellow-500 to-yellow-600'
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
                            Agent Monitoring
                        </span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        perfecX Agent
                    </h1>

                    <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                        AI Agent & Multi-Agent System Security Platform
                    </p>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
                        Secure autonomous AI agents and multi-agent systems with real-time monitoring, behavioral analysis, and policy enforcement.
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

                {/* Architecture Overview */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Platform Architecture
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Multi-layered security architecture designed for enterprise scale
                        </p>
                    </div>

                    <div className="space-y-4">
                        {architectureLayers.map((layer, index) => (
                            <div key={index} className={`bg-gradient-to-r ${layer.color} p-6 rounded-xl text-white`}>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{layer.name}</h3>
                                        <p className="opacity-90">{layer.description}</p>
                                    </div>
                                    <div className="text-3xl font-bold opacity-50">{index + 1}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Security Capabilities */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Security Capabilities
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Advanced security features to protect your AI agents
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {securityCapabilities.map((capability, index) => (
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
                            Protect AI agents across various deployment scenarios
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