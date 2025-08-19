import { Metadata } from 'next'
import { getKnowledgeHubContent } from '@/lib/content-loader'
import KnowledgeNavigation from './components/KnowledgeNavigation'

export const metadata: Metadata = {
    title: 'Knowledge Hub - AI Infrastructure & Security Resources',
    description: 'Comprehensive knowledge base for AI infrastructure, security, compliance, and operations. Articles, white papers, and learning paths.',
}

export default async function KnowledgeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // Load all content for navigation
    const content = await getKnowledgeHubContent()

    return (
        <div className="min-h-screen bg-background">
            {children}
        </div>
    )
}
