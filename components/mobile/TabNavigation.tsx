'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Home, Package, BookOpen, FileText, Search } from 'lucide-react'

interface TabItem {
  name: string
  href: string
  icon: React.ElementType
}

const tabs: TabItem[] = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Products', href: '/products', icon: Package },
  { name: 'Learn', href: '/learn', icon: BookOpen },
  { name: 'Blog', href: '/blog', icon: FileText },
  { name: 'Search', href: '/search', icon: Search },
]

export default function TabNavigation() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <nav className="flex items-center justify-around px-2 py-2 safe-area-inset-bottom">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const active = isActive(tab.href)

          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={`
                flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg
                transition-all duration-200 min-w-[64px] min-h-[56px]
                ${active 
                  ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }
              `}
            >
              <Icon 
                className={`h-5 w-5 transition-transform ${active ? 'scale-110' : ''}`} 
                strokeWidth={active ? 2.5 : 2}
              />
              <span className={`text-xs font-medium ${active ? 'font-semibold' : ''}`}>
                {tab.name}
              </span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}