import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Code, Zap, Shield, Brain, Layers, Users, GitBranch, Terminal, Server, Database } from 'lucide-react'

export const metadata: Metadata = {
  title: 'ADAPT-AI Documentation',
  description: 'Complete documentation for ADAPT-AI - Advanced AI Attack Testing Framework',
}

export default function AdaptAIDocsPage() {
  return (
    <>
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Brain className="h-4 w-4" />
          Advanced AI Security Testing
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          ADAPT-AI Documentation
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Learn how to use ADAPT-AI for comprehensive AI security testing with state-of-the-art attack techniques.
        </p>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <Link
          href="/docs/adapt-ai/quick-start"
          className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-colors group"
        >
          <Zap className="h-6 w-6 text-primary-600 dark:text-primary-400 mb-2" />
          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
            Quick Start
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Get up and running in 5 minutes
          </p>
        </Link>
        <Link
          href="/docs/adapt-ai/installation"
          className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-colors group"
        >
          <Terminal className="h-6 w-6 text-primary-600 dark:text-primary-400 mb-2" />
          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
            Installation
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Setup and configuration guide
          </p>
        </Link>
        <Link
          href="/docs/adapt-ai/api"
          className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-colors group"
        >
          <Code className="h-6 w-6 text-primary-600 dark:text-primary-400 mb-2" />
          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
            API Reference
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Complete API documentation
          </p>
        </Link>
        <Link
          href="/docs/adapt-ai/guides"
          className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-colors group"
        >
          <BookOpen className="h-6 w-6 text-primary-600 dark:text-primary-400 mb-2" />
          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
            Guides
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            In-depth tutorials and examples
          </p>
        </Link>
      </div>

      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          What is ADAPT-AI?
        </h2>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            ADAPT-AI is an advanced AI attack testing framework that implements state-of-the-art adversarial AI research 
            techniques. It provides comprehensive security testing capabilities with integrated machine learning for 
            continuous improvement and adaptation.
          </p>
          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 my-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Key Capabilities
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-0.5" />
                <span>Gradient-based prompt optimization with advanced ML algorithms</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-0.5" />
                <span>Multi-modal attack testing across text, image, audio, and video</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-0.5" />
                <span>Adaptive learning system with pattern recognition and optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-0.5" />
                <span>Enterprise-grade microservices architecture with real-time monitoring</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Architecture Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <Server className="h-8 w-8 text-primary-600 dark:text-primary-400 mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              API Layer
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              FastAPI microservices with authentication, rate limiting, and WebSocket support for real-time updates.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <Layers className="h-8 w-8 text-primary-600 dark:text-primary-400 mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Core Domain
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Advanced attack engine with ML algorithms, pattern recognition, and adaptive strategies.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <Database className="h-8 w-8 text-primary-600 dark:text-primary-400 mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              ML System
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Integrated machine learning with ensemble learning, genetic algorithms, and reinforcement learning.
            </p>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Getting Started
        </h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">1</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                Install ADAPT-AI
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Install via pip or clone the repository for development
              </p>
              <div className="bg-gray-900 rounded-lg p-3 inline-block">
                <code className="text-sm text-gray-300">pip install adapt-ai</code>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">2</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                Configure Authentication
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Set up your API key for secure access
              </p>
              <Link href="/docs/adapt-ai/installation#authentication" className="text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center gap-1">
                View authentication guide <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">3</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                Run Your First Test
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Execute a basic security test to verify setup
              </p>
              <Link href="/docs/adapt-ai/quick-start" className="text-primary-600 dark:text-primary-400 hover:underline inline-flex items-center gap-1">
                Go to Quick Start <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Additional Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="https://github.com/perfecxion-ai/adapt-ai"
            className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-colors group"
          >
            <GitBranch className="h-6 w-6 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                GitHub Repository
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                View source code and contribute
              </p>
            </div>
          </Link>
          <Link
            href="/support"
            className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-colors group"
          >
            <Users className="h-6 w-6 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                Support
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Get help from our team
              </p>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}