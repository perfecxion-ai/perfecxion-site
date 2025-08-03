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
  title: 'Blog - AI Security Insights',
  description: 'Latest insights, news, and updates from the perfecXion.ai team.',
}

export default function BlogPage() {
  return <ContentHub contentType="blog" />
}
