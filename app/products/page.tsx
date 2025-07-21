import { Metadata } from 'next'
import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/products'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Products - AI Security Solutions',
  description: 'Explore our comprehensive suite of AI security and compliance products designed to protect your AI systems.',
}

export default function ProductsPage() {
  const categories = Array.from(new Set(products.map(p => p.category)))

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
            AI Security Products
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Comprehensive solutions to secure, monitor, and ensure compliance of your AI systems. 
            From red teaming to real-time monitoring, we've got you covered.
          </p>
        </div>

        {categories.map(category => {
          const categoryProducts = products.filter(p => p.category === category)
          return (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                {category}
              </h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )
        })}

        <div className="mt-16 text-center">
          <div className="bg-background-subtle dark:bg-background-dark-subtle rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Our team can work with you to develop custom AI security solutions 
              tailored to your specific requirements and use cases.
            </p>
            <Link href="/about" className="btn-primary">
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
