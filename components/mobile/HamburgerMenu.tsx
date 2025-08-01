'use client'

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
        <span
          className={`absolute left-0 top-0 w-full h-0.5 bg-current origin-center transition-all duration-200 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-current transition-all duration-200 ${
            isOpen ? 'opacity-0 scale-x-0' : ''
          }`}
        />
        <span
          className={`absolute left-0 bottom-0 w-full h-0.5 bg-current origin-center transition-all duration-200 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </div>
    </button>
  )
}