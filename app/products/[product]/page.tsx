import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Check, Star } from 'lucide-react'
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

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        <Link 
          href="/products"
          className="inline-flex items-center text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mb-8 text-sm font-medium"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              {product.name}
            </h1>
            <span className={`px-3 py-1 text-sm font-medium rounded-full ${
              product.status === 'available' 
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                : product.status === 'beta'
                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
            }`}>
              {product.status === 'coming-soon' ? 'Coming Soon' : 
               product.status === 'beta' ? 'Beta' : 'Available'}
            </span>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            {product.category}
          </p>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            {product.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Key Features
              </h2>
              <div className="space-y-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                How It Works
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300">
                  {product.name} integrates seamlessly with your existing AI infrastructure to provide 
                  comprehensive security and monitoring capabilities. Our advanced algorithms continuously 
                  analyze your AI systems for potential vulnerabilities and threats.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  With real-time monitoring and automated response capabilities, you can ensure your AI 
                  systems remain secure and compliant with industry standards and regulations.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="card sticky top-24">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  Pricing
                </h3>
                <div className="text-3xl font-bold text-primary-500 mb-4">
                  {product.pricing}
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    24/7 Support
                  </span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    30-day Free Trial
                  </span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-2" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Enterprise Integration
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <Link href="/contact" className="btn-primary w-full text-center block">
                  Get Started
                </Link>
                <Link href="/docs" className="btn-secondary w-full text-center block">
                  View Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
