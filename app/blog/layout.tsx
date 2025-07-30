import { Metadata, Viewport } from 'next'
import BlogLayoutClient from './BlogLayoutClient'

export const metadata: Metadata = {
    title: 'Blog - AI Security Insights - perfecXion.ai',
    description: 'Latest insights, news, and updates from the perfecXion.ai team.',
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
}

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <BlogLayoutClient>{children}</BlogLayoutClient>
} 