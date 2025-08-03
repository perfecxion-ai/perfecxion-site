import { Metadata } from 'next'
import { Shield, Zap, Code, BarChart3, TestTube, GitBranch, FileText, Users, Lock, ArrowRight, CheckCircle, AlertTriangle, Clock, Database, Cpu, Brain, Target, Building, Award } from 'lucide-react'
import Link from 'next/link'
import { getProduct } from '@/lib/products'
import { notFound } from 'next/navigation'
import DemoRequestButton from '@/components/DemoRequestButton'

export const metadata: Metadata = {
    title: 'perfecX Red-T - Advanced Red Team Testing Platform for AI Systems',
    description: 'Advanced red team testing platform for AI systems. Comprehensive adversarial testing to identify vulnerabilities before they become threats.',
}

export default function PerfecXionRedTPage() {
    const product = getProduct('perfecxion-red-t')
    
    if (!product) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white dark:bg-gray-900 py-20 lg:py-32">
                <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20"></div>
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="inline-flex items-center rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-800 dark:bg-red-900/20 dark:text-red-400 mb-8">
                            <Shield className="mr-2 h-4 w-4" />
                            Advanced Red Team Testing
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
                            {product.name}
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                                AI Security Platform
                            </span>
                        </h1>

                        <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                            {product.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-8 justify-center">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                                OWASP Top 10 LLM
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400">
                                10+ Attack Techniques
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
                                Enterprise Ready
                            </span>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                                SOC2 Compliant
                            </span>
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <DemoRequestButton product={product} />
                            <Link
                                href="#architecture"
                                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-700 shadow-lg hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors"
                            >
                                View Architecture
                            </Link>
                            <Link
                                href="/docs/perfecxion-red-t"
                                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-700 shadow-lg hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors"
                            >
                                <Code className="mr-2 h-5 w-5" />
                                Documentation
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
                            Comprehensive Red Team Testing Platform
                        </h2>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                            Built for security professionals, developers, and researchers to systematically identify and assess vulnerabilities in AI systems.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {product.features.map((feature, index) => {
                            const [title, description] = feature.split(' - ')
                            return (
                                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-8 border border-red-200 dark:border-red-800">
                                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-6">
                                        <Shield className="h-6 w-6 text-red-600 dark:text-red-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                        {title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Advanced Attack Techniques */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                            Advanced Attack Techniques
                        </h2>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                            State-of-the-art adversarial attack methods implementing cutting-edge research
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">TAP (Tree of Attacks with Pruning)</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Advanced tree-based attack generation with intelligent pruning for maximum effectiveness</p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">PAIR (Prompt Automatic Iterative Refinement)</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Automated prompt refinement for sophisticated injection attacks</p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">AutoDAN</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Gradient-based attack optimization with advanced evasion techniques</p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">GPTFuzz</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Intelligent fuzzing techniques for discovering novel vulnerabilities</p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">CodeChameleon</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Code injection testing with polymorphic payload generation</p>
                        </div>
                        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">DeepInception</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Multi-layer attack techniques for complex model manipulation</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            {product.technicalSpecs && (
                <section className="py-20 bg-gray-50 dark:bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                Technical Specifications
                            </h2>
                            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                                Enterprise-grade performance and capabilities for production environments
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
                                        <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Security</h3>
                                </div>
                                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <div><span className="font-medium">Availability:</span> {product.technicalSpecs.availability}</div>
                                    <div><span className="font-medium">Attack Techniques:</span> {product.technicalSpecs.attackCategories}</div>
                                    <div><span className="font-medium">Model Support:</span> {product.technicalSpecs.multiModalSupport}</div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                                        <Award className="h-5 w-5 text-green-600 dark:text-green-400" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Compliance</h3>
                                </div>
                                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <div><span className="font-medium">Frameworks:</span> {product.technicalSpecs.complianceFrameworks}</div>
                                    <div><span className="font-medium">Certifications:</span> SOC2, ISO27001</div>
                                    <div><span className="font-medium">Standards:</span> OWASP Top 10 LLM</div>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                                        <Building className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white">Deployment</h3>
                                </div>
                                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <div><span className="font-medium">Options:</span> {product.technicalSpecs.deploymentOptions}</div>
                                    <div><span className="font-medium">Infrastructure:</span> Multi-cloud ready</div>
                                    <div><span className="font-medium">Security:</span> Air-gap capable</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Architecture Section */}
            {product.architecture && (
                <section id="architecture" className="py-20 bg-white dark:bg-gray-900">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                Four-Layer Enterprise Architecture
                            </h2>
                            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                                Built around a robust, scalable architecture designed for enterprise red team testing.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {product.architecture.layers.map((layer, index) => (
                                <div key={index} className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        {layer.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        {layer.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {layer.detects.map((capability, idx) => (
                                            <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                                                {capability}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Vulnerability Categories */}
            <section className="py-20 bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                            Comprehensive Attack Vector Coverage
                        </h2>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                            Advanced testing capabilities covering all major AI security vulnerabilities and attack patterns.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-red-800 dark:text-red-400">Prompt Injection Attacks</h3>
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
                            And 10+ additional attack vectors with continuous updates...
                        </p>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            {product.useCases && (
                <section className="py-20 bg-gray-50 dark:bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                Comprehensive Use Cases
                            </h2>
                            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                                perfecX Red-T serves diverse security testing needs across industries
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
                </section>
            )}

            {/* Integration Examples */}
            {product.integrationExamples && (
                <section className="py-20 bg-white dark:bg-gray-900">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                Quick Integration
                            </h2>
                            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                                Get started with perfecX Red-T in minutes using our SDKs and REST API
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
                </section>
            )}

            {/* Benefits */}
            {product.benefits && (
                <section className="py-20 bg-white dark:bg-gray-900">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                                Why Choose perfecX Red-T?
                            </h2>
                            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                                Industry-leading capabilities for comprehensive AI security testing
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {product.benefits.map((benefit, index) => {
                                const iconMap = {
                                    'Shield': Shield,
                                    'Zap': Zap,
                                    'Server': Building,
                                    'FileText': FileText,
                                    'Brain': Brain,
                                    'Target': Target,
                                    'Award': Award
                                }
                                const Icon = iconMap[benefit.icon as keyof typeof iconMap] || Shield
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
                </section>
            )}

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
                        Ready to Secure Your AI Systems?
                    </h2>
                    <p className="text-xl text-red-100 mb-10 max-w-3xl mx-auto">
                        Join security professionals worldwide in systematically testing and securing AI models
                        with the most advanced red team testing platform available.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-red-600 shadow-lg hover:bg-gray-50 transition-colors"
                        >
                            <Shield className="mr-2 h-5 w-5" />
                            Schedule Demo
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-red-600 transition-colors"
                        >
                            Contact Sales
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center justify-center space-x-8 text-red-100">
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