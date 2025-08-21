import { Metadata } from 'next'
import { getKnowledgeHubContent } from '@/lib/content-loader'
import KnowledgeHubClient from './knowledge-hub-client'

export const metadata: Metadata = {
  title: 'Knowledge Hub - AI Security, Infrastructure & Quantum Computing',
  description: 'Comprehensive knowledge base for AI security, infrastructure, networking, quantum computing, and compliance. Articles, white papers, and learning paths.',
}

export default async function KnowledgeHubPage() {
  // Load all content from the file system
  const content = await getKnowledgeHubContent()
  
  return <KnowledgeHubClient initialContent={content} />
}