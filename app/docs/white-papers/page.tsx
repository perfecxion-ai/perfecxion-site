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
    title: 'White Papers - AI Security Documentation',
    description: 'Comprehensive white papers on AI security implementation, compliance, and enterprise deployment strategies.',
}

export default function WhitePapersPage() {
    return <ContentHub contentType="whitepaper" />
} 