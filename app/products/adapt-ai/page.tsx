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

# Run advanced security test
result = await client.attack.gradient_optimize(
    target="https://api.example.com/chat",
    objective="test_jailbreak",
    iterations=100
)

# ML-powered analysis
analysis = await client.ml.analyze_patterns(result)
print(f"Vulnerabilities: {analysis.vulnerabilities}")`}
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

      {/* Benefits */}
      {product.benefits && (
        <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
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