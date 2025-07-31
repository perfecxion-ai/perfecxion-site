'use client'

import { useState } from 'react'
import { Calendar, ArrowRight } from 'lucide-react'
import { Product } from '@/lib/products'
import DemoRequestModal from './DemoRequestModal'

interface DemoRequestButtonProps {
  product: Product
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children?: React.ReactNode
}

export default function DemoRequestButton({ 
  product, 
  variant = 'primary', 
  size = 'md',
  className = '',
  children 
}: DemoRequestButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const baseClasses = 'inline-flex items-center gap-2 font-medium transition-all duration-200 rounded-lg'
  
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900/20'
  }

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  }

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      >
        <Calendar className={size === 'sm' ? 'h-4 w-4' : size === 'lg' ? 'h-6 w-6' : 'h-5 w-5'} />
        {children || 'Request Demo'}
        <ArrowRight className={size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'} />
      </button>

      <DemoRequestModal 
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}