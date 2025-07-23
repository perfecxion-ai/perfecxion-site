import { Metadata } from 'next'
import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/products'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products - AI Security Solutions',
  description: 'Explore our comprehensive suite of AI security and compliance products designed to protect your AI systems.',
}

export default function ProductsPage() {
  return (
    <main className="bg-white dark:bg-background-dark min-h-screen">
      <div className="max-width container-padding section-padding">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            AI Security Platform
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
            AI Security Products
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions to secure, monitor, and ensure compliance of your AI systems.
            From red teaming to real-time monitoring, we've got you covered.
          </p>
        </header>

        {/* All Products Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Products
            </h2>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="animate-slide-up">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Products by Category (for future when we have multiple products per category) */}
        {/* <div className="space-y-20">
          {categories.map(category => {
            const categoryProducts = products.filter(p => p.category === category)
            return (
              <section key={category} className="animate-fade-in">
                <div className="flex items-center gap-4 mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {category}
                  </h2>
                  <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryProducts.map((product) => (
                    <div key={product.id} className="animate-slide-up">
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </section>
            )
          })}
        </div> */}

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team can work with you to develop custom AI security solutions
              tailored to your specific requirements and use cases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Our Team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/docs" className="btn-secondary">
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
