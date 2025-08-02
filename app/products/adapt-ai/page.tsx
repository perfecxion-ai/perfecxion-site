import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Shield, Code, Brain, TrendingUp, Layers, Building, Zap, Target, Users, Eye, BookOpen } from 'lucide-react'
import { getProduct } from '@/lib/products'
import { notFound } from 'next/navigation'
import DemoRequestButton from '@/components/DemoRequestButton'

export const metadata: Metadata = {
  title: 'ADAPT-AI - Advanced AI Attack Testing Framework',
  description: 'A comprehensive security testing platform implementing state-of-the-art adversarial AI research techniques with machine learning capabilities.',
}

export default function AdaptAIPage() {
  const product = getProduct('adapt-ai')

  if (!product) {
    notFound()
  }

  const iconMap = {
    'Brain': Brain,
    'TrendingUp': TrendingUp,
    'Layers': Layers,
    'Building': Building,
  }

  return (
    <main className="bg-white dark:bg-background-dark">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="max-width container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="h-4 w-4" />
                Enterprise-Ready AI Security Testing
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
                  10+ Attack Categories
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400">
                  Multi-Modal Support
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                  ML-Powered Learning
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400">
                  Enterprise Ready
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <DemoRequestButton product={product} />
                <Link href="/docs/adapt-ai/quick-start" className="btn-secondary">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/docs/adapt-ai" className="btn-ghost">
                  <Code className="mr-2 h-4 w-4" />
                  View Documentation
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-2xl">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  {`# Initialize ADAPT-AI
from adapt_ai import AdaptClient

client = AdaptClient(api_key="your-api-key")

# Run comprehensive attack suite
result = await client.attack.comprehensive({
    target="https://api.example.com/chat",
    techniques=["gradient", "multimodal", "social_engineering"],
    evasion=True,
    ml_analysis=True
})

# ML-powered analysis
analysis = await client.ml.analyze_patterns(result)
print(f"Success rate: {analysis.success_rate}")
print(f"Vulnerabilities: {analysis.vulnerabilities}")
print(f"Recommended defenses: {analysis.defenses}")`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
        <div className="max-width container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Advanced Security Testing Capabilities
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive AI security testing with state-of-the-art attack techniques and adaptive learning
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.features.map((feature, index) => {
              const [title, description] = feature.split(' - ')
              return (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Advanced Attack Techniques */}
      <section className="section-padding">
        <div className="max-width container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              State-of-the-Art Attack Techniques
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              10+ advanced attack categories implementing cutting-edge adversarial AI research
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-6 border border-blue-200 dark:border-blue-700">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">Gradient-Based Attacks</h3>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Adam optimizer with momentum</li>
                <li>• Gradient clipping & adaptive learning</li>
                <li>• Adversarial suffix generation</li>
                <li>• Token-level manipulation</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-6 border border-purple-200 dark:border-purple-700">
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">Multi-Modal Attacks</h3>
              <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                <li>• Image + text prompt injection</li>
                <li>• Audio manipulation & steganography</li>
                <li>• Video content attacks</li>
                <li>• File upload exploitation</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-6 border border-green-200 dark:border-green-700">
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-3">Social Engineering</h3>
              <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                <li>• Authority figure impersonation</li>
                <li>• Emotional manipulation techniques</li>
                <li>• Trust building sequences</li>
                <li>• Consensus pressure tactics</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-lg p-6 border border-red-200 dark:border-red-700">
              <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-3">Evasion Techniques</h3>
              <ul className="text-sm text-red-800 dark:text-red-200 space-y-1">
                <li>• Dynamic obfuscation</li>
                <li>• Fingerprint randomization</li>
                <li>• Real-time strategy adaptation</li>
                <li>• Defense mechanism detection</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg p-6 border border-orange-200 dark:border-orange-700">
              <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-3">ML Learning System</h3>
              <ul className="text-sm text-orange-800 dark:text-orange-200 space-y-1">
                <li>• Ensemble learning algorithms</li>
                <li>• Reinforcement learning</li>
                <li>• Genetic optimization</li>
                <li>• Real-time pattern evolution</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 rounded-lg p-6 border border-indigo-200 dark:border-indigo-700">
              <h3 className="text-lg font-semibold text-indigo-900 dark:text-indigo-100 mb-3">Enterprise Features</h3>
              <ul className="text-sm text-indigo-800 dark:text-indigo-200 space-y-1">
                <li>• Docker & Kubernetes support</li>
                <li>• PostgreSQL & Redis</li>
                <li>• Comprehensive monitoring</li>
                <li>• Production-ready architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      {product.architecture && (
        <section className="section-padding">
          <div className="max-width container-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Multi-Layered Architecture
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Enterprise-grade architecture designed for scalability and performance
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
                      <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400">
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

      {/* Technical Specifications */}
      {product.technicalSpecs && (
        <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
          <div className="max-width container-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Technical Specifications
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
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
                  <h3 className="font-semibold text-gray-900 dark:text-white">Reliability</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div><span className="font-medium">Availability:</span> {product.technicalSpecs.availability}</div>
                  <div><span className="font-medium">Attack Categories:</span> {product.technicalSpecs.attackCategories}</div>
                  <div><span className="font-medium">Multi-Modal:</span> {product.technicalSpecs.multiModalSupport}</div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                    <Brain className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">ML Capabilities</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div><span className="font-medium">Learning:</span> {product.technicalSpecs.mlCapabilities}</div>
                  <div><span className="font-medium">Real-time:</span> Pattern evolution</div>
                  <div><span className="font-medium">Adaptation:</span> Strategy optimization</div>
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
                  <div><span className="font-medium">Infrastructure:</span> {product.technicalSpecs.enterpriseFeatures}</div>
                  <div><span className="font-medium">Monitoring:</span> Comprehensive</div>
                  <div><span className="font-medium">Security:</span> Production-ready</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      {product.benefits && (
        <section className="section-padding">
          <div className="max-width container-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose ADAPT-AI?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Industry-leading capabilities for comprehensive AI security testing
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {product.benefits.map((benefit, index) => {
                const Icon = iconMap[benefit.icon as keyof typeof iconMap] || Shield
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
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

      {/* Use Cases */}
      {product.useCases && (
        <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
          <div className="max-width container-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Comprehensive Use Cases
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                ADAPT-AI serves diverse security testing needs across industries
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.useCases.map((useCase, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                      <Target className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{useCase}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Code Examples */}
      {product.integrationExamples && (
        <section className="section-padding">
          <div className="max-width container-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Quick Integration
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Get started with ADAPT-AI in minutes using our SDKs and REST API
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

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-700 dark:to-primary-900">
        <div className="max-width container-padding text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Secure Your AI Systems?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Start testing your AI systems with the most advanced security framework available
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary bg-white text-primary-700 hover:bg-gray-100">
              Request Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/docs/adapt-ai" className="btn-secondary bg-primary-700/20 text-white border-white hover:bg-primary-700/30">
              <BookOpen className="mr-2 h-4 w-4" />
              Read Documentation
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}