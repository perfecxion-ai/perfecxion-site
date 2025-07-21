import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Product } from '@/lib/products'
import { clsx } from 'clsx'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const statusColors = {
    available: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    beta: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    'coming-soon': 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
  }

  return (
    <div className="card group hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {product.name}
            </h3>
            <span className={clsx(
              'px-2 py-1 text-xs font-medium rounded-full',
              statusColors[product.status]
            )}>
              {product.status === 'coming-soon' ? 'Coming Soon' : 
               product.status === 'beta' ? 'Beta' : 'Available'}
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            {product.category}
          </p>
        </div>
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
        {product.description}
      </p>
      
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
          Key Features:
        </h4>
        <ul className="space-y-1">
          {product.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 flex-shrink-0"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
        <div>
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
            {product.pricing}
          </span>
        </div>
        <Link 
          href={`/products/${product.id}`}
          className="inline-flex items-center text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-200"
        >
          Learn More <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
