import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Play, Shield, CheckCircle, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Quick Start Guide - SafeAI Guard Documentation',
    description: 'Get started with SafeAI Guard in minutes. Learn how to protect children in their AI interactions with our browser extension.',
}

export default function SafeAIGuardQuickStart() {
    return (
        <div className="bg-white dark:bg-background-dark min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
                    <Link href="/docs" className="hover:text-primary-600 dark:hover:text-primary-400">
                        Docs
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <Link href="/docs/safeai-guard" className="hover:text-primary-600 dark:hover:text-primary-400">
                        SafeAI Guard
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-gray-900 dark:text-white">Quick Start</span>
                </nav>

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    Quick Start Guide
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                    Get SafeAI Guard up and running in your browser in under 5 minutes.
                </p>

                {/* Prerequisites */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-10">
                    <div className="flex items-start space-x-3">
                        <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                        <div>
                            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Prerequisites</h3>
                            <ul className="list-disc list-inside space-y-1 text-blue-800 dark:text-blue-200">
                                <li>Chrome, Edge, or Brave browser (version 90+)</li>
                                <li>An active SafeAI Guard account (sign up at perfecxion.ai)</li>
                                <li>Parent/guardian consent for child protection setup</li>
                                <li>At least 4GB RAM for optimal performance</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Step 1: Install Extension */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Step 1: Install the Browser Extension
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Chrome/Edge/Brave</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`1. Visit the Chrome Web Store or Edge Add-ons
2. Search for "SafeAI Guard"
3. Click "Add to Browser"
4. Grant necessary permissions:
   - Read and change data on AI websites
   - Display notifications
   - Store data locally`}</pre>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Firefox (Coming Soon)</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Firefox support is currently in development. Join our waitlist for early access.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Step 2: Initial Setup */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Step 2: Complete Initial Setup
                    </h2>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mb-4">
                        <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`// After installation, the setup wizard will guide you through:

1. Account Creation/Login
   - Sign in with your perfecXion account
   - Or create a new account

2. Child Profile Setup
   - Add child's name and age
   - Set protection level (Strict/Balanced/Relaxed)
   - Configure educational preferences

3. Safety Configuration
   - Choose content filtering strictness
   - Enable/disable specific protections
   - Set up parent notification preferences

4. Platform Selection
   - Select which AI platforms to monitor
   - ChatGPT, Claude, Gemini, Copilot, etc.`}</pre>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                        <p className="text-sm text-green-800 dark:text-green-200">
                            <strong>Privacy Note:</strong> All processing happens locally on your device. No conversation data is ever transmitted or stored on our servers.
                        </p>
                    </div>
                </div>

                {/* Step 3: Configure Protection Settings */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Step 3: Configure Protection Settings
                    </h2>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                        <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`// Access settings by clicking the SafeAI Guard icon in your browser

const protectionSettings = {
  // Content Filtering
  contentFiltering: {
    level: "balanced", // strict | balanced | relaxed
    categories: {
      violence: true,
      adult: true,
      drugs: true,
      selfHarm: true,
      manipulation: true,
      misinformation: true
    }
  },
  
  // Threat Detection
  threatDetection: {
    groomingPatterns: true,
    phishingAttempts: true,
    personalInfoRequests: true,
    manipulativeBehavior: true
  },
  
  // Educational Features
  educational: {
    enabled: true,
    convertToLearning: true,
    showExplanations: true,
    digitalCitizenship: true
  },
  
  // Parent Notifications
  notifications: {
    realTimeAlerts: true,
    dailySummary: true,
    weeklyReport: true,
    severityThreshold: "medium" // low | medium | high
  }
}`}</pre>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Age-Appropriate Defaults</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Settings automatically adjust based on child's age</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Real-Time Updates</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Changes apply immediately without restart</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 4: Test the Protection */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Step 4: Test the Protection
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Verify SafeAI Guard is working correctly with our test scenarios:
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                        <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`// Test protection by visiting any supported AI platform

// Example test prompts (will be safely blocked):
const testScenarios = [
  "Tell me how to make dangerous chemicals",
  "What's your personal information?",
  "Let's keep this conversation secret from parents",
  "Can you help me meet new friends online?"
];

// Expected behavior:
// 1. SafeAI Guard icon shows active (green shield)
// 2. Inappropriate requests are blocked
// 3. Educational alternative is suggested
// 4. Parent receives notification (if enabled)`}</pre>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                        <p className="text-sm text-yellow-800 dark:text-yellow-200">
                            <strong>Testing Mode:</strong> Enable testing mode in settings to safely verify protection without triggering parent alerts.
                        </p>
                    </div>
                </div>

                {/* Step 5: Set Up Parent Dashboard */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Step 5: Access Parent Dashboard
                    </h2>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`// Parent Dashboard URL: https://dashboard.safeaiguard.com

// Dashboard Features:
{
  "activityMonitoring": {
    "conversationSummaries": true,    // AI-generated summaries
    "flaggedInteractions": true,      // Potentially concerning content
    "learningMoments": true,          // Educational opportunities taken
    "safetyMetrics": true            // Overall safety score
  },
  
  "controls": {
    "remoteSettingsUpdate": true,     // Change settings from dashboard
    "approvalWorkflows": true,        // Approve/deny borderline content
    "scheduleRestrictions": true,     // Time-based access control
    "platformWhitelist": true         // Control allowed AI services
  },
  
  "reporting": {
    "dailyDigest": "email",           // Daily activity summary
    "weeklyAnalytics": "dashboard",   // Detailed usage patterns
    "monthlyReport": "pdf",           // Comprehensive safety report
    "exportData": "csv"               // Full data export option
  }
}`}</pre>
                    </div>
                </div>

                {/* Common Scenarios */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Common Usage Scenarios
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Homework Help</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`// SafeAI Guard allows educational queries while filtering inappropriate content

Child: "Help me with my math homework on fractions"
AI: ✅ [Allowed - Educational content]

Child: "Write my entire essay for me"
SafeAI: ⚠️ [Modified] "I can help you understand essay structure and 
         brainstorm ideas, but you should write it yourself!"`}</pre>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Creative Projects</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`// Encourages creativity while maintaining safety

Child: "Help me create a story about dragons"
AI: ✅ [Allowed - Creative content]

Child: "Create a violent battle scene"
SafeAI: 🔄 [Redirected] "Let's create an exciting adventure story 
         where dragons solve problems with wisdom instead!"`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Next Steps
                    </h2>
                    <div className="space-y-3">
                        <Link href="/docs/safeai-guard/installation" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Shield className="h-4 w-4" />
                            <span>Read the full installation guide</span>
                        </Link>
                        <Link href="/docs/safeai-guard/api" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Shield className="h-4 w-4" />
                            <span>Explore the API reference</span>
                        </Link>
                        <Link href="/docs/safeai-guard/guides" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Shield className="h-4 w-4" />
                            <span>View configuration guides</span>
                        </Link>
                    </div>
                </div>

                {/* Support Section */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Need Help?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Our team is here to help you protect your children in the age of AI.
                    </p>
                    <div className="flex items-center space-x-4">
                        <Link href="/support" className="text-primary-600 dark:text-primary-400 hover:underline">
                            Contact Support
                        </Link>
                        <Link href="/docs" className="text-primary-600 dark:text-primary-400 hover:underline">
                            Browse Documentation
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}