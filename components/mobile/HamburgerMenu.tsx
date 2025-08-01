'use client'

import { motion } from 'framer-motion'

interface HamburgerMenuProps {
  isOpen: boolean
  onClick: () => void
}

export default function HamburgerMenu({ isOpen, onClick }: HamburgerMenuProps) {
  return (
    <button
      onClick={onClick}
      className="relative w-10 h-10 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      <div className="relative w-6 h-6">
        <motion.span
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 8 : 0
          }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 top-0 w-full h-0.5 bg-current origin-center"
        />
        <motion.span
          animate={{
            opacity: isOpen ? 0 : 1,
            scaleX: isOpen ? 0 : 1
          }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-current"
        />
        <motion.span
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -8 : 0
          }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 bottom-0 w-full h-0.5 bg-current origin-center"
        />
      </div>
    </button>
  )
}