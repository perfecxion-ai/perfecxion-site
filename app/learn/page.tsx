import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, BookOpen, Shield, Zap, Users, Code, Settings, Play, Target, Lock, AlertTriangle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Learn AI Security - perfecXion.ai',
  description: 'Master AI security with our comprehensive learning resources, tutorials, and best practices.',
}

const learningSections = [
  {
    title: 'GET STARTED',
    items: [
      { name: 'Quick Start', href: '/learn/quick-start', icon: Play, description: 'Get up and running in minutes' },
      { name: 'Installation', href: '/learn/installation', icon: Code, description: 'Set up your development environment' },
      { name: 'First Security Scan', href: '/learn/first-scan', icon: Shield, description: 'Run your first AI security assessment' },
      { name: 'Basic Configuration', href: '/learn/configuration', icon: Settings, description: 'Configure your security settings' },
    ]
  },
  {
    title: 'LEARN AI SECURITY',
    items: [
      { name: 'Understanding AI Threats', href: '/learn/ai-threats', icon: AlertTriangle, description: 'Common vulnerabilities in AI systems' },
      { name: 'Prompt Injection Attacks', href: '/learn/prompt-injection', icon: Target, description: 'How to detect and prevent prompt attacks' },
      { name: 'Model Security', href: '/learn/model-security', icon: Lock, description: 'Securing your AI models and data' },
      { name: 'Agent Monitoring', href: '/learn/agent-monitoring', icon: Users, description: 'Monitoring AI agent behavior' },
    ]
  },
  {
    title: 'ADVANCED TOPICS',
    items: [
      { name: 'Red Team Testing', href: '/learn/red-team', icon: Shield, description: 'Advanced adversarial testing techniques' },
      { name: 'Compliance & Governance', href: '/learn/compliance', icon: CheckCircle, description: 'Meeting regulatory requirements' },
      { name: 'Integration Patterns', href: '/learn/integrations', icon: Zap, description: 'Best practices for system integration' },
      { name: 'Performance Optimization', href: '/learn/optimization', icon: Zap, description: 'Optimizing security performance' },
    ]
  }
]

export default function LearningCenterPage() {
  return (
    <div className="bg-white dark:bg-background-dark min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Learn AI Security
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Master the fundamentals of AI security with our comprehensive learning resources.
            From basic concepts to advanced techniques, we'll guide you through securing AI systems.
          </p>
        </div>

        {/* Learning Sections */}
        <div className="space-y-16">
          {learningSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                {section.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group block p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-200 hover:shadow-md"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/20 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/40 transition-colors">
                          <item.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {item.name}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Tutorial */}
        <div className="mt-20 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8 border border-primary-200 dark:border-primary-800">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-4">
              <Play className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-semibold text-primary-700 dark:text-primary-300">FEATURED TUTORIAL</span>
            </div>
            <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-4">
              Build Your First AI Security Scanner
            </h3>
            <p className="text-primary-800 dark:text-primary-200 mb-6">
              Learn how to create a comprehensive AI security scanner that detects prompt injections,
              model vulnerabilities, and data leakage. This hands-on tutorial will walk you through
              building a production-ready security tool.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="/learn/tutorial-security-scanner"
                className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                Start Tutorial
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <span className="text-sm text-primary-700 dark:text-primary-300">30 min read</span>
            </div>
          </div>
        </div>

        {/* Learning Path */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
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
        <div className="mt-20 bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
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
      </div>
    </div>
  )
}
