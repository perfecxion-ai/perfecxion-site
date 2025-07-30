import { Metadata } from 'next'
import LearnLayoutClient from './LearnLayoutClient'

export const metadata: Metadata = {
    title: 'Learn AI Security - perfecXion.ai',
    description: 'Master AI security with our comprehensive learning resources, tutorials, and best practices.',
}

export default function LearnLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <LearnLayoutClient>{children}</LearnLayoutClient>
} 