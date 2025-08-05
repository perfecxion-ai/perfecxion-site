import { Metadata } from 'next'
import ContentHub from '@/components/content/ContentHub'

export const metadata: Metadata = {
    title: 'White Papers - AI Security Documentation',
    description: 'Comprehensive white papers on AI security implementation, compliance, and enterprise deployment strategies.',
}

export default function WhitePapersPage() {
    return <ContentHub contentType="whitepaper" />
} 