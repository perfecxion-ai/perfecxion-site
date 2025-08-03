import { Metadata } from 'next'
import Link from 'next/link'
import {
    ArrowLeft,
    Search,
    Shield,
    Eye,
    Database,
    Zap,
    Clock,
    Target,
    AlertTriangle,
    Play,
    ArrowRight,
    Download,
    ExternalLink,
    CheckCircle,
    FileText,
    BarChart3,
    Globe,
    Lock,
    Brain,
    Network,
    Cpu,
    Server,
    Bell,
    Settings,
    Code,
    Users,
    Building,
    Award
} from 'lucide-react'
import { getProduct } from '@/lib/products'
import { notFound } from 'next/navigation'
import DemoRequestButton from '@/components/DemoRequestButton'

export const metadata: Metadata = {
    title: 'TorScan - Advanced Dark Web Intelligence Platform',
    description: 'Production-ready dark web scanner with advanced search capabilities, authentication, and enterprise-grade security features for monitoring and analyzing .onion sites.',
}

export default function TorScanPage() {
    const product = getProduct('torscan')
    
    if (!product) {
        notFound()
    }

    const keyFeatures = [
        {
            title: 'Tor-Enabled Web Crawler',
            description: 'Secure crawling of .onion sites with circuit rotation and advanced anonymity',
            icon: Network,
            color: 'blue'
        },
        {
            title: 'Advanced Pattern Matching',
            description: 'Regex-based search with custom patterns and intelligent threat detection',
            icon: Search,
            color: 'green'
        },
        {
            title: 'Elasticsearch Integration',
            description: 'Full-text search with fuzzy matching, aggregations, and real-time indexing',
            icon: Database,
            color: 'yellow'
        },
        {
            title: 'Threat Intelligence',
            description: 'MISP and OpenCTI integration with automatic IOC extraction and correlation',
            icon: Shield,
            color: 'red'
        },
        {
            title: 'Scheduled Scans',
            description: 'Automated recurring scans with cron, interval, and date scheduling',
            icon: Clock,
            color: 'purple'
        },
        {
            title: 'Plugin System',
            description: 'Extensible architecture with hot-reload capabilities for custom functionality',
            icon: Code,
            color: 'indigo'
        }
    ]

    const coreCapabilities = [
        {
            title: 'Dark Web Monitoring',
            description: 'Comprehensive scanning and analysis of .onion sites with secure Tor integration',
            icon: Eye,
            features: ['Circuit rotation', 'Anonymous crawling', 'Real-time monitoring', 'Historical tracking']
        },
        {
            title: 'Advanced Search & Analytics',
            description: 'Powerful search capabilities with fuzzy matching, aggregations, and full-text indexing',
            icon: Search,
            features: ['Full-text search', 'Fuzzy matching', 'Multi-field search', 'Search suggestions']
        },
        {
            title: 'Threat Intelligence Integration',
            description: 'Connect to MISP and OpenCTI platforms for comprehensive threat correlation',
            icon: Shield,
            features: ['MISP integration', 'OpenCTI support', 'IOC extraction', 'Threat correlation']
        },
        {
            title: 'Enterprise Security',
            description: 'Production-ready security features with authentication, rate limiting, and audit logging',
            icon: Lock,
            features: ['User authentication', 'Rate limiting', 'Input validation', 'Audit logging']
        }
    ]

    const useCases = [
        {
            title: 'Security Operations',
            description: 'Monitor dark web for data breaches, stolen credentials, and threat actor activity',
            icon: Shield
        },
        {
            title: 'Threat Intelligence',
            description: 'Gather intelligence on emerging threats, malware, and attack campaigns',
            icon: Brain
        },
        {
            title: 'Compliance & Risk',
            description: 'Meet regulatory requirements for dark web monitoring and threat assessment',
            icon: FileText
        },
        {
            title: 'Incident Response',
            description: 'Rapid investigation and correlation of security incidents with dark web data',
            icon: AlertTriangle
        }
    ]

    const technicalSpecs = [
        {
            title: 'Architecture',
            description: 'Microservices-based architecture with Docker containerization',
            icon: Server
        },
        {
            title: 'Storage',
            description: 'MongoDB for persistent data with Elasticsearch for search and analytics',
            icon: Database
        },
        {
            title: 'Processing',
            description: 'Celery-based asynchronous processing with Redis for task management',
            icon: Cpu
        },
        {
            title: 'Security',
            description: 'Non-root containers, environment-based config, and comprehensive validation',
            icon: Lock
        }
    ]

    const integrations = [
        {
            name: 'MISP',
            description: 'Threat intelligence sharing platform integration',
            icon: Shield,
            status: 'Supported'
        },
        {
            name: 'OpenCTI',
            description: 'Cyber threat intelligence platform connector',
            icon: Brain,
            status: 'Supported'
        },
        {
            name: 'Elasticsearch',
            description: 'Advanced search and analytics engine',
            icon: Search,
            status: 'Integrated'
        },
        {
            name: 'MongoDB',
            description: 'Document database for persistent storage',
            icon: Database,
            status: 'Integrated'
        },
        {
            name: 'Redis',
            description: 'In-memory data store for caching and queues',
            icon: Zap,
            status: 'Integrated'
        },
        {
            name: 'Tor Network',
            description: 'Anonymous network access for .onion sites',
            icon: Network,
            status: 'Required'
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
                        <span className="inline-flex items-center gap-2 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 px-4 py-2 rounded-full text-sm font-medium">
                            <Eye className="h-4 w-4" />
                            Dark Web Intelligence
                        </span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                        {product.name}
                    </h1>

                    <p className="text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                        Advanced Dark Web Intelligence Platform
                    </p>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
                        {product.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8 justify-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                            ML-Powered Intelligence
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
                            Advanced Tor Crawler
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                            Threat Intelligence
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400">
                            Enterprise Ready
                        </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <DemoRequestButton product={product} />
                        <Link href="#demo" className="btn-secondary">
                            <Play className="mr-2 h-4 w-4" />
                            View Demo
                        </Link>
                        <Link href="/docs/torscan" className="btn-secondary">
                            <Code className="mr-2 h-4 w-4" />
                            Documentation
                        </Link>
                    </div>
                </div>

                {/* What is TorScan */}
                <div className="mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                What is TorScan?
                            </h2>
                            <div className="prose dark:prose-invert max-w-none">
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                    TorScan is a sophisticated dark web intelligence platform that provides comprehensive monitoring and analysis of .onion sites. Built with enterprise-grade security and scalability in mind, it combines advanced crawling capabilities with powerful search and threat intelligence integration.
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    From automated scheduled scans to real-time threat correlation, TorScan delivers the intelligence you need to protect your organization from emerging dark web threats.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-8 rounded-2xl">
                            <div className="text-center">
                                <Eye className="h-16 w-16 text-red-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    Dark Web Intelligence
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Advanced monitoring and analysis of .onion sites with enterprise-grade security
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
                            Comprehensive dark web intelligence with enterprise-grade capabilities
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {product.features.map((feature, index) => {
                            const [title, description] = feature.split(' - ')
                            return (
                                <div key={index} className="text-center p-6">
                                    <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Eye className="h-8 w-8 text-red-600" />
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

                {/* ML Intelligence Section */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            ML-Powered Intelligence
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Advanced machine learning capabilities for comprehensive threat detection and analysis
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Anomaly Detection</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Multi-algorithm approach with Isolation Forest, One-Class SVM, and Autoencoders for real-time threat detection</p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Pattern Recognition</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">NLP-based malicious content detection with entity extraction for emails, URLs, and crypto addresses</p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Predictive Analytics</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">24-hour ahead threat prediction with confidence intervals and trend analysis</p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Risk Assessment</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Multi-factor risk scoring with threat likelihood and business impact evaluation</p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Automated Response</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">8 response types with workflow orchestration and policy-based automation</p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Model Management</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Complete lifecycle management with versioning, drift detection, and automated retraining</p>
                        </div>
                    </div>
                </div>

                {/* Core Capabilities */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Core Capabilities
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Advanced features for comprehensive dark web intelligence gathering
                        </p>
                    </div>

                    <div className="space-y-8">
                        {coreCapabilities.map((capability, index) => (
                            <div key={index} className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
                                            <capability.icon className="h-8 w-8 text-primary-600" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                            {capability.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                                            {capability.description}
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            {capability.features.map((feature, featureIndex) => (
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

                {/* Technical Specifications */}
                {product.technicalSpecs && (
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Technical Specifications
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                                Enterprise-grade architecture designed for scalability and security
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
                                        <Zap className="h-5 w-5 text-red-600 dark:text-red-400" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Performance</h3>
                                </div>
                                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <div><span className="font-medium">Response Time:</span> {product.technicalSpecs.responseTime}</div>
                                    <div><span className="font-medium">Throughput:</span> {product.technicalSpecs.throughput}</div>
                                    <div><span className="font-medium">Latency:</span> {product.technicalSpecs.latency}</div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                                        <Brain className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">ML Capabilities</h3>
                                </div>
                                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <div><span className="font-medium">Intelligence:</span> {product.technicalSpecs.mlCapabilities}</div>
                                    <div><span className="font-medium">Real-time:</span> Anomaly detection</div>
                                    <div><span className="font-medium">Predictive:</span> Threat forecasting</div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                                        <Target className="h-5 w-5 text-green-600 dark:text-green-400" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Threat Intelligence</h3>
                                </div>
                                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <div><span className="font-medium">Platforms:</span> {product.technicalSpecs.threatIntelligence}</div>
                                    <div><span className="font-medium">Search:</span> {product.technicalSpecs.searchCapabilities}</div>
                                    <div><span className="font-medium">Deployment:</span> {product.technicalSpecs.deploymentOptions}</div>
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
                                    <div><span className="font-medium">Availability:</span> {product.technicalSpecs.availability}</div>
                                    <div><span className="font-medium">Security:</span> Authentication & audit</div>
                                    <div><span className="font-medium">Scalability:</span> Multi-cloud ready</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Use Cases */}
                {product.useCases && (
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Use Cases
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                                Comprehensive dark web intelligence for various security scenarios
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {product.useCases.map((useCase, index) => (
                                <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <div className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
                                            <Target className="h-4 w-4 text-red-600 dark:text-red-400" />
                                        </div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">{useCase}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Integration Examples */}
                {product.integrationExamples && (
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Quick Integration
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                                Get started with TorScan in minutes using our SDKs and REST API
                            </p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="space-y-4">
                                <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                                    <Code className="h-5 w-5" />
                                    Python SDK
                                </h3>
                                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                    <pre className="text-sm text-gray-300">
                                        <code>{product.integrationExamples.python}</code>
                                    </pre>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                                    <Code className="h-5 w-5" />
                                    JavaScript SDK
                                </h3>
                                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                    <pre className="text-sm text-gray-300">
                                        <code>{product.integrationExamples.javascript}</code>
                                    </pre>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                                    <Code className="h-5 w-5" />
                                    REST API
                                </h3>
                                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                    <pre className="text-sm text-gray-300">
                                        <code>{product.integrationExamples.api}</code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Integrations */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Integrations & Dependencies
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Seamless integration with leading threat intelligence and data platforms
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {integrations.map((integration, index) => (
                            <div key={index} className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700">
                                <div className="flex items-center justify-between mb-4">
                                    <integration.icon className="h-8 w-8 text-primary-600" />
                                    <span className={`text-xs px-2 py-1 rounded-full ${integration.status === 'Supported'
                                            ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                                            : integration.status === 'Integrated'
                                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                                                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                                        }`}>
                                        {integration.status}
                                    </span>
                                </div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    {integration.name}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    {integration.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits */}
                {product.benefits && (
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Why Choose TorScan?
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                                Industry-leading capabilities for comprehensive dark web intelligence
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {product.benefits.map((benefit, index) => {
                                const iconMap = {
                                    'Brain': Brain,
                                    'Eye': Eye,
                                    'Shield': Shield,
                                    'Target': Target
                                }
                                const Icon = iconMap[benefit.icon as keyof typeof iconMap] || Eye
                                return (
                                    <div key={index} className="text-center">
                                        <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                            <Icon className="h-8 w-8 text-red-600 dark:text-red-400" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            {benefit.description}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Monitor the Dark Web?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Join security teams worldwide using TorScan for comprehensive dark web intelligence
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                            Get Started
                        </Link>
                        <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                            Schedule Demo
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
} 