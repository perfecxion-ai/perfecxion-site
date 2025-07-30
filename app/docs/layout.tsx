import { Metadata } from 'next'
import DocsLayoutClient from './DocsLayoutClient'

export const metadata: Metadata = {
    title: {
        default: 'Documentation - perfecXion.ai',
        template: '%s - Documentation - perfecXion.ai'
    },
    description: 'Comprehensive documentation for all perfecXion.ai products.',
}

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <DocsLayoutClient>{children}</DocsLayoutClient>
}