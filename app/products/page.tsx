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
    <main className="bg-background min-h-screen">
      <div className="flex justify-center px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        <section className="w-full max-w-5xl">
          <header className="mb-16 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4 leading-tight">
              AI Security Products
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Comprehensive solutions to secure, monitor, and ensure compliance of your AI systems.
              From red teaming to real-time monitoring, we've got you covered.
            </p>
          </header>

          <div className="space-y-20">
            {categories.map(category => {
              const categoryProducts = products.filter(p => p.category === category)
              return (
                <section key={category} className="">
                  <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-2">
                    {category}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </section>
              )
            })}
          </div>

          <div className="mt-24 text-center">
            <div className="bg-zinc-50 dark:bg-zinc-800 rounded-2xl shadow p-10 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 mb-6">
                Our team can work with you to develop custom AI security solutions
                tailored to your specific requirements and use cases.
              </p>
              <Link href="/about" className="btn-primary">
                Contact Our Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
