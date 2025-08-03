import { Metadata } from 'next'
import dynamic from 'next/dynamic'

// Dynamically import ContentHub to avoid SSR issues
const ContentHub = dynamic(() => import('@/components/content/ContentHub'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-12">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
    </div>
  )
})

export const metadata: Metadata = {
  title: 'Learn AI Security - perfecXion.ai',
  description: 'Master AI security with our comprehensive learning resources, tutorials, and best practices. Explore our AI Security 101 series, whitepapers, and interactive learning paths.',
}

export default function LearningCenterPage() {
  return <ContentHub contentType="learning" />
}