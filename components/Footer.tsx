import Link from 'next/link'
import Image from 'next/image'

const navigation = {
  product: [
    { name: 'perfecXion Red-T', href: '/products/perfecxion-red-t' },
    { name: 'perfecXion Agent', href: '/products/perfecxion-agent' },
    { name: 'perfecXion Browse', href: '/products/perfecxion-browse' },
    { name: 'perfecXion Comply', href: '/products/perfecxion-comply' },
    { name: 'perfecXion G-Rails', href: '/products/perfecxion-g-rails' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'Learning Center', href: '/learning' },
    { name: 'Blog', href: '/blog' },
    { name: 'Support', href: '/support' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-background-dark-subtle border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Image 
                src="/logo-perfecxion.svg" 
                alt="perfecXion.ai" 
                width={160} 
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Leading AI security and compliance solutions for the modern enterprise.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Products
            </h3>
            <ul className="space-y-2">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            &copy; 2025 perfecXion.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
