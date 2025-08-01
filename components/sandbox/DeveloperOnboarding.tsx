'use client'

import { useState } from 'react'
import { ChevronRight, CheckCircle, Clock, Code, Terminal, BookOpen, Zap, ArrowRight, Shield } from 'lucide-react'
import ResponsiveCodeBlock from '@/components/code/ResponsiveCodeBlock'

interface OnboardingStep {
  id: string
  title: string
  description: string
  timeEstimate: string
  completed: boolean
  content: React.ReactNode
}

export default function DeveloperOnboarding() {
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set())
  const [selectedLanguage, setSelectedLanguage] = useState('python')

  const handleStepComplete = (stepId: string) => {
    setCompletedSteps(prev => new Set(Array.from(prev).concat([stepId])))
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const quickStartCode = {
    python: `# Install the perfecXion SDK
pip install perfecxion

# Initialize the client
from perfecxion import Client

client = Client(api_key="YOUR_API_KEY")

# Run your first security scan
result = client.scan_model(
    model_path="./model.pkl",
    scan_type="comprehensive"
)

print(f"Security Score: {result.score}/100")
print(f"Vulnerabilities Found: {len(result.vulnerabilities)}")`,
    
    javascript: `// Install the perfecXion SDK
npm install @perfecxion/sdk

// Initialize the client
const { PerfecXionClient } = require('@perfecxion/sdk');

const client = new PerfecXionClient({
  apiKey: 'YOUR_API_KEY'
});

// Run your first security scan
const result = await client.scanModel({
  modelPath: './model.h5',
  scanType: 'comprehensive'
});

console.log(\`Security Score: \${result.score}/100\`);
console.log(\`Vulnerabilities Found: \${result.vulnerabilities.length}\`);`,

    curl: `# Get your API key from the dashboard
export PERFECXION_API_KEY="YOUR_API_KEY"

# Run your first security scan
curl -X POST https://api.perfecxion.ai/v1/scan/model \\
  -H "Authorization: Bearer $PERFECXION_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model_url": "https://example.com/model.pkl",
    "scan_type": "comprehensive"
  }'`
  }

  const steps: OnboardingStep[] = [
    {
      id: 'welcome',
      title: 'Welcome to perfecXion.ai',
      description: 'Get started with AI security in minutes',
      timeEstimate: '1 min',
      completed: completedSteps.has('welcome'),
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to the Future of AI Security 🚀
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              perfecXion.ai provides comprehensive security testing for your AI models. 
              This quick start guide will have you scanning models in under 5 minutes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-4">
                <Zap className="w-8 h-8 text-yellow-500 mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Fast Integration</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  SDK available in 7+ languages
                </p>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-4">
                <Shield className="w-8 h-8 text-green-500 mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Comprehensive Scans</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  20+ vulnerability types detected
                </p>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-4">
                <BookOpen className="w-8 h-8 text-blue-500 mb-2" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Full Documentation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Detailed guides and examples
                </p>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => handleStepComplete('welcome')}
            className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )
    },
    {
      id: 'api-key',
      title: 'Get Your API Key',
      description: 'Create an account and grab your API key',
      timeEstimate: '2 min',
      completed: completedSteps.has('api-key'),
      content: (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Step 1: Sign Up for an Account
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              If you haven't already, create a free account to get your API key.
            </p>
            <a
              href="/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create Free Account
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Step 2: Find Your API Key
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Navigate to the Dashboard</li>
              <li>Click on "API Keys" in the sidebar</li>
              <li>Copy your default API key or create a new one</li>
            </ol>
            
            <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
              <p className="text-sm text-amber-800 dark:text-amber-200">
                <strong>Pro Tip:</strong> Use environment variables to store your API key securely. 
                Never commit API keys to version control.
              </p>
            </div>
          </div>

          <button
            onClick={() => handleStepComplete('api-key')}
            className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
          >
            <CheckCircle className="w-5 h-5" />
            I Have My API Key
          </button>
        </div>
      )
    },
    {
      id: 'quick-start',
      title: 'Quick Start Code',
      description: 'Run your first security scan',
      timeEstimate: '2 min',
      completed: completedSteps.has('quick-start'),
      content: (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Choose Your Language
            </h3>
            <div className="flex gap-2 mb-4">
              {['python', 'javascript', 'curl'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`
                    px-4 py-2 rounded-lg transition-colors
                    ${selectedLanguage === lang
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }
                  `}
                >
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </button>
              ))}
            </div>

            <ResponsiveCodeBlock
              code={quickStartCode[selectedLanguage as keyof typeof quickStartCode]}
              language={selectedLanguage === 'curl' ? 'bash' : selectedLanguage}
              showLineNumbers
            />
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
            <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
              What This Code Does:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-blue-800 dark:text-blue-200">
              <li>Initializes the perfecXion client with your API key</li>
              <li>Scans a model file for security vulnerabilities</li>
              <li>Returns a comprehensive security report</li>
              <li>Displays the security score and vulnerability count</li>
            </ul>
          </div>

          <button
            onClick={() => handleStepComplete('quick-start')}
            className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
          >
            <Terminal className="w-5 h-5" />
            I've Run My First Scan
          </button>
        </div>
      )
    },
    {
      id: 'explore',
      title: 'Explore Features',
      description: 'Discover what perfecXion.ai can do',
      timeEstimate: '1 min',
      completed: completedSteps.has('explore'),
      content: (
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Core Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  🔍 Model Scanning
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Detect vulnerabilities in PyTorch, TensorFlow, scikit-learn, and more
                </p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  🛡️ Prompt Injection Protection
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Safeguard LLMs against malicious prompt attacks
                </p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  📊 Data Poisoning Detection
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Identify compromised training data
                </p>
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  🎯 Adversarial Testing
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Test model robustness against adversarial examples
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Next Steps
            </h3>
            <div className="space-y-3">
              <a
                href="/docs"
                className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Read the Documentation
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Deep dive into all features and APIs
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </a>
              
              <a
                href="/examples"
                className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Browse Code Examples
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Production-ready integration patterns
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </a>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 text-center">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
              You're All Set! 🎉
            </h3>
            <p className="text-green-800 dark:text-green-200">
              You've successfully completed the quick start guide. 
              Your AI models are now ready for comprehensive security testing.
            </p>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Quick Start Guide
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {completedSteps.size} of {steps.length} completed
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(completedSteps.size / steps.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Steps Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {steps.map((step, index) => (
          <button
            key={step.id}
            onClick={() => setCurrentStep(index)}
            className={`
              p-4 rounded-lg border-2 transition-all text-left
              ${currentStep === index
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                : step.completed
                ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }
            `}
          >
            <div className="flex items-start justify-between mb-2">
              <span className={`
                text-sm font-medium
                ${currentStep === index ? 'text-blue-600 dark:text-blue-400' : ''}
                ${step.completed ? 'text-green-600 dark:text-green-400' : 'text-gray-900 dark:text-white'}
              `}>
                Step {index + 1}
              </span>
              {step.completed && (
                <CheckCircle className="w-4 h-4 text-green-500" />
              )}
            </div>
            <h3 className={`
              font-semibold mb-1
              ${currentStep === index ? 'text-blue-900 dark:text-blue-100' : 'text-gray-900 dark:text-white'}
            `}>
              {step.title}
            </h3>
            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
              <Clock className="w-3 h-3" />
              {step.timeEstimate}
            </div>
          </button>
        ))}
      </div>

      {/* Current Step Content */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
        {steps[currentStep].content}
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Previous
        </button>
        
        {currentStep < steps.length - 1 && (
          <button
            onClick={() => setCurrentStep(currentStep + 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Next Step
          </button>
        )}
      </div>
    </div>
  )
}