import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'White Papers - AI Security Research',
  description: 'Access our comprehensive white papers on AI security, red teaming, compliance, and emerging threats. Deep technical insights from our research team.',
}

export default function WhitePapersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-background-dark">
      {children}
    </div>
  )
} 