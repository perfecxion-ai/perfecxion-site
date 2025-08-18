import { NextResponse } from 'next/server'
import { loadAllContent } from '@/lib/content-loader'

export async function GET() {
  const content = await loadAllContent()
  
  // Sort by date and take the most recent 20 items
  const recentContent = content
    .filter(item => item.date)
    .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime())
    .slice(0, 20)
  
  const baseUrl = 'https://perfecxion.ai'
  
  // Generate RSS XML
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>PerfecXion AI Knowledge Hub</title>
    <description>The definitive source for AI infrastructure and security knowledge - articles, white papers, and learning paths.</description>
    <link>${baseUrl}</link>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/api/rss" rel="self" type="application/rss+xml"/>
    ${recentContent.map(item => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <description>${escapeXml(item.description)}</description>
      <link>${baseUrl}${item.href}</link>
      <guid isPermaLink="true">${baseUrl}${item.href}</guid>
      ${item.date ? `<pubDate>${new Date(item.date).toUTCString()}</pubDate>` : ''}
      ${item.author ? `<dc:creator>${escapeXml(item.author)}</dc:creator>` : ''}
      <category>${item.domain}</category>
      <category>${item.format}</category>
      ${item.topics.map(topic => `<category>${escapeXml(topic)}</category>`).join('')}
    </item>`).join('')}
  </channel>
</rss>`
  
  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    }
  })
}

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}