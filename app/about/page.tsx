import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about perfecXion.ai and our mission to secure AI systems worldwide.',
}

export default function AboutUsPage() {
  return (
    <div className="bg-white dark:bg-background-dark min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
            About Us
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Learn about perfecXion.ai and our mission to secure AI systems worldwide.
          </p>
          <div className="mt-10">
            <p className="text-gray-500 dark:text-gray-400">
              This page is coming soon. Check back later for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
