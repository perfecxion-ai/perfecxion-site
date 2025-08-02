'use client'

interface DashboardWidgetProps {
  title: string
  description: string
  children: React.ReactNode
  fullWidth?: boolean
}

export default function DashboardWidget({ title, description, children, fullWidth }: DashboardWidgetProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm ${fullWidth ? 'col-span-full' : ''}`}>
      <div className="border-b border-gray-200 dark:border-gray-700 p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  )
}