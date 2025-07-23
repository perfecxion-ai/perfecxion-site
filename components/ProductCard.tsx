import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Product } from '@/lib/products'
import { clsx } from 'clsx'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
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

  // Handle perfecX product names with proper line breaks
  const formatProductName = (name: string) => {
    if (name.startsWith('perfecX ')) {
      const parts = name.split(' ')
      return (
        <div className="leading-tight">
          <span className="block">{parts[0]}</span>
          <span className="block">{parts.slice(1).join(' ')}</span>
        </div>
      )
    }
    return name
  }

  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 h-96 flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {formatProductName(product.name)}
            </h3>
            <span className={clsx(
              'inline-flex items-center rounded-full px-2.5 py-1 text-sm font-medium',
              statusColors[product.status]
            )}>
              {statusLabels[product.status]}
            </span>
          </div>

          <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
            {product.category}
          </p>
        </div>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm flex-grow">
        {product.description}
      </p>

      <div className="flex items-center justify-end pt-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
        <Link
          href={`/products/${product.id}`}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium transition-colors group/link"
        >
          Learn more
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>

      {/* Hover overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}
