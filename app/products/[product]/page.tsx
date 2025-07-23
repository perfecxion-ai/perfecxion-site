import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Check, Star, Shield, Zap, Users, Clock } from 'lucide-react'
import { getProduct } from '@/lib/products'

interface ProductPageProps {
  params: {
    product: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProduct(params.product)

  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.name} - ${product.category}`,
    description: product.description,
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProduct(params.product)

  if (!product) {
    notFound()
  }

  const statusColors = {
    available: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    beta: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    'coming-soon': 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
  }

  const statusLabels = {
    available: 'Available',
    beta: 'Beta',
    'coming-soon': 'Coming Soon'
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
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              {product.name}
            </h1>
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${statusColors[product.status]}`}>
              {statusLabels[product.status]}
            </span>
          </div>

          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium">
              <Shield className="h-4 w-4" />
              {product.category}
            </span>
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl">
            {product.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Features Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                    <Check className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                How It Works
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="mb-4">
                    {product.name} integrates seamlessly with your existing AI infrastructure to provide
                    comprehensive security and monitoring capabilities. Our advanced algorithms continuously
                    analyze your AI systems for potential vulnerabilities and threats.
                  </p>
                  <p className="mb-4">
                    With real-time monitoring and automated response capabilities, you can ensure your AI
                    systems remain secure and compliant with industry standards and regulations.
                  </p>
                  <p>
                    The system provides detailed analytics and reporting, giving you complete visibility
                    into your AI security posture and enabling proactive threat mitigation.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Why Choose {product.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl">
                  <Shield className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Enterprise Security
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Military-grade protection for your AI systems with advanced threat detection
                  </p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl">
                  <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Real-time Protection
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Instant threat detection and automated response to keep your systems safe
                  </p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Easy Integration
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Simple setup and seamless integration with your existing infrastructure
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card-hover sticky top-24">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Get Started
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Ready to secure your AI systems with {product.name}?
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">
                    24/7 Expert Support
                  </span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Free Trial Available
                  </span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Enterprise Integration
                  </span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">
                    SLA Guarantee
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <Link href="/contact" className="btn-primary w-full text-center block">
                  Contact Sales
                </Link>
                <Link href="/docs" className="btn-secondary w-full text-center block">
                  View Documentation
                </Link>
                <Link href="/contact" className="btn-ghost w-full text-center block">
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
