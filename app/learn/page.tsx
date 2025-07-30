import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, BookOpen, Shield, Zap, Users, Code, Settings, Play, Target, Lock, AlertTriangle, CheckCircle, Brain, Database, Eye, BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Learn AI Security - perfecXion.ai',
  description: 'Master AI security with our comprehensive learning resources, tutorials, and best practices.',
}

export default function LearningCenterPage() {
  return (
    <>
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6">
          Learn AI Security
        </h1>
        <p className="text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-3xl">
          Master the fundamentals of AI security with our comprehensive learning resources.
          From basic concepts to advanced techniques, we'll guide you through securing AI systems.
        </p>
      </div>

      {/* Featured Content */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Start Here
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/learn/trad-vs-ai"
            className="group block p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-200 hover:shadow-md bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/20 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/40 transition-colors">
                  <Brain className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Traditional vs AI Security
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Understand why traditional cybersecurity tools fail against AI-specific threats and how to build effective defenses.
                </p>
                <div className="mt-4 flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium">
                  Read Guide
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </Link>


        </div>
      </div>

      {/* Learning Path */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Learning Path
        </h2>
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          <div className="space-y-8">
            <div className="relative flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                  <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Foundation</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Understand basic AI security concepts, threats, and vulnerabilities.
                  Learn about prompt injection, model security, and data protection.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                    Complete
                  </span>
                </div>
              </div>
            </div>

            <div className="relative flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">
                  <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Implementation</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Build and deploy security tools. Implement monitoring, testing,
                  and compliance solutions for your AI systems.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
                    In Progress
                  </span>
                </div>
              </div>
            </div>

            <div className="relative flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                  <Target className="h-8 w-8 text-gray-400 dark:text-gray-500" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Advanced</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Master advanced techniques including red team testing,
                  threat modeling, and security architecture design.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Join the Community
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Connect with other AI security professionals, share knowledge, and stay updated with the latest threats and solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/docs"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Read Documentation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              <Users className="mr-2 h-5 w-5" />
              Get Support
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
