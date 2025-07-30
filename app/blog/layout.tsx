import { Metadata } from 'next'
import BlogLayoutClient from './BlogLayoutClient'

export const metadata: Metadata = {
    title: 'Blog - AI Security Insights - perfecXion.ai',
    description: 'Latest insights, news, and updates from the perfecXion.ai team.',
}

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <BlogLayoutClient>{children}</BlogLayoutClient>
} 