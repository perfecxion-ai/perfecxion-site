import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Code, Shield, Zap, Brain, Target, Eye, Users, Terminal } from 'lucide-react'

export const metadata: Metadata = {
  title: 'API Reference - ADAPT-AI Documentation',
  description: 'Complete API reference for ADAPT-AI with endpoints, examples, and SDK documentation',
}

export default function AdaptAIAPIPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          API Reference
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Complete reference for ADAPT-AI's REST API, WebSocket endpoints, and SDKs.
        </p>
      </div>

      {/* Base URL */}
      <section className="mb-12">
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Base URL</h2>
          <code className="text-primary-600 dark:text-primary-400">https://api.adapt-ai.com/v1</code>
        </div>
      </section>

      {/* Authentication */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Authentication
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          All API requests require authentication using your API key. Include your key in the Authorization header:
        </p>
        <div className="bg-gray-900 rounded-lg p-4">
          <pre className="text-sm text-gray-300">
{`Authorization: Bearer your-api-key`}
          </pre>
        </div>
      </section>

      {/* Core Endpoints */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Core Endpoints
        </h2>

        {/* Discovery API */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Discovery API</h3>
          </div>
          
          {/* Scan Endpoint */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-medium rounded">POST</span>
              <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/discovery/scan</code>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Scan domains for AI endpoints and services
            </p>
            <div className="bg-gray-900 rounded-lg p-4 mb-4">
              <pre className="text-sm text-gray-300 overflow-x-auto">
{`{
  "targets": ["example.com", "api.example.com"],
  "options": {
    "depth": 3,
    "include_subdomains": true,
    "fingerprint_services": true,
    "concurrent_requests": 10
  }
}`}
              </pre>
            </div>
            <div className="text-sm">
              <p className="font-medium text-gray-700 dark:text-gray-300 mb-2">Response:</p>
              <div className="bg-gray-900 rounded-lg p-4">
                <pre className="text-sm text-gray-300 overflow-x-auto">
{`{
  "task_id": "550e8400-e29b-41d4-a716-446655440000",
  "status": "processing",
  "targets_found": 0,
  "estimated_time": 300
}`}
                </pre>
              </div>
            </div>
          </div>

          {/* Task Status */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-xs font-medium rounded">GET</span>
              <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/discovery/tasks/{'{task_id}'}</code>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Get status and results of a discovery scan
            </p>
          </div>
        </div>

        {/* Attack API */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Target className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Attack API</h3>
          </div>
          
          {/* Gradient Attack */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-medium rounded">POST</span>
              <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/attack/gradient-optimize</code>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Execute gradient-based attack optimization
            </p>
            <div className="bg-gray-900 rounded-lg p-4 mb-4">
              <pre className="text-sm text-gray-300 overflow-x-auto">
{`{
  "target": "https://api.example.com/chat",
  "objective": "jailbreak",
  "parameters": {
    "iterations": 100,
    "learning_rate": 0.01,
    "momentum": 0.9,
    "gradient_clipping": true,
    "temperature": 0.7
  },
  "initial_prompt": "You are a helpful assistant",
  "constraints": {
    "max_tokens": 500,
    "preserve_coherence": true
  }
}`}
              </pre>
            </div>
          </div>

          {/* Multi-Modal Attack */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-medium rounded">POST</span>
              <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/attack/multimodal</code>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Execute coordinated multi-modal attacks
            </p>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-sm text-gray-300 overflow-x-auto">
{`{
  "target": "https://api.example.com/multimodal",
  "modes": ["text", "image", "audio"],
  "strategy": "synchronized",
  "attack_configs": {
    "text": {
      "type": "adversarial_suffix",
      "iterations": 50
    },
    "image": {
      "type": "pixel_perturbation",
      "epsilon": 0.1
    },
    "audio": {
      "type": "frequency_injection",
      "frequency": 19000
    }
  }
}`}
              </pre>
            </div>
          </div>

          {/* Test Session */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-medium rounded">POST</span>
              <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/attack/session</code>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Create and execute a comprehensive test session
            </p>
          </div>
        </div>

        {/* ML API */}
        <div className="mb-8 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Brain className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Machine Learning API</h3>
          </div>
          
          {/* Pattern Analysis */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-medium rounded">POST</span>
              <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/ml/analyze-patterns</code>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Analyze attack patterns and get ML insights
            </p>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-sm text-gray-300 overflow-x-auto">
{`{
  "session_id": "attack-session-123",
  "analysis_type": "comprehensive",
  "include_predictions": true,
  "ml_models": ["pattern_recognizer", "genetic_optimizer"]
}`}
              </pre>
            </div>
          </div>

          {/* Train Model */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs font-medium rounded">POST</span>
              <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/ml/train</code>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Train custom ML models on your attack data
            </p>
          </div>

          {/* Get Insights */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-xs font-medium rounded">GET</span>
              <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/ml/insights</code>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Get aggregated ML insights and recommendations
            </p>
          </div>
        </div>
      </section>

      {/* WebSocket API */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          WebSocket API
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Real-time updates for long-running operations:
        </p>
        <div className="bg-gray-900 rounded-lg p-4 mb-6">
          <pre className="text-sm text-gray-300">
{`ws://api.adapt-ai.com/v1/ws?token=your-api-key`}
          </pre>
        </div>
        
        <div className="space-y-4">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Subscribe to Task Updates</h4>
            <div className="bg-gray-900 rounded-lg p-3">
              <pre className="text-sm text-gray-300">
{`{
  "action": "subscribe",
  "task_id": "550e8400-e29b-41d4-a716-446655440000"
}`}
              </pre>
            </div>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Receive Updates</h4>
            <div className="bg-gray-900 rounded-lg p-3">
              <pre className="text-sm text-gray-300">
{`{
  "event": "task_progress",
  "task_id": "550e8400-e29b-41d4-a716-446655440000",
  "progress": 0.75,
  "targets_found": 12,
  "current_target": "api.example.com/v2/chat"
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Response Codes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Response Codes
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Code</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">200</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Success</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">201</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Created</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">400</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Bad Request - Invalid parameters</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">401</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Unauthorized - Invalid API key</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">429</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Too Many Requests - Rate limit exceeded</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">500</td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Internal Server Error</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Rate Limits */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Rate Limits
        </h2>
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg p-6">
          <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-3">Default Limits</h3>
          <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-200">
            <li>• 100 requests per minute for discovery operations</li>
            <li>• 50 requests per minute for attack operations</li>
            <li>• 1000 requests per hour total</li>
            <li>• WebSocket: 10 concurrent connections</li>
          </ul>
          <p className="mt-4 text-sm text-amber-700 dark:text-amber-300">
            Contact support for enterprise rate limits.
          </p>
        </div>
      </section>

      {/* SDKs */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          SDK Documentation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Code className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Python SDK</h3>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Installation:</p>
              <div className="bg-gray-900 rounded-lg p-3">
                <code className="text-sm text-gray-300">pip install adapt-ai</code>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Quick Example:</p>
              <div className="bg-gray-900 rounded-lg p-3">
                <pre className="text-sm text-gray-300 overflow-x-auto">
{`from adapt_ai import AdaptClient

client = AdaptClient(api_key="your-key")

# Discover targets
targets = await client.discovery.scan(
    domain="example.com"
)

# Run attack
result = await client.attack.test(
    target=targets[0],
    strategy="adaptive"
)`}
                </pre>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Code className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">JavaScript SDK</h3>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Installation:</p>
              <div className="bg-gray-900 rounded-lg p-3">
                <code className="text-sm text-gray-300">npm install @adapt-ai/sdk</code>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Quick Example:</p>
              <div className="bg-gray-900 rounded-lg p-3">
                <pre className="text-sm text-gray-300 overflow-x-auto">
{`import { AdaptAI } from '@adapt-ai/sdk';

const adapt = new AdaptAI({ 
  apiKey: 'your-key' 
});

// Discover targets
const targets = await adapt.discovery.scan({
  domain: 'example.com'
});

// Run attack
const result = await adapt.attack.test({
  target: targets[0],
  strategy: 'adaptive'
});`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Error Handling */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Error Handling
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          All errors follow a consistent format:
        </p>
        <div className="bg-gray-900 rounded-lg p-4">
          <pre className="text-sm text-gray-300 overflow-x-auto">
{`{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "You have exceeded the rate limit of 100 requests per minute",
    "details": {
      "limit": 100,
      "reset_at": "2024-01-15T10:30:00Z",
      "retry_after": 30
    }
  }
}`}
          </pre>
        </div>
      </section>

      {/* Next Steps */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Next Steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/docs/adapt-ai/guides"
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-colors group"
          >
            <Shield className="h-8 w-8 text-primary-600 dark:text-primary-400 mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 mb-2">
              Advanced Guides
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Learn advanced attack techniques and ML integration
            </p>
          </Link>
          <Link
            href="/support"
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-colors group"
          >
            <Users className="h-8 w-8 text-primary-600 dark:text-primary-400 mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 mb-2">
              Support
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Get help from our security experts
            </p>
          </Link>
        </div>
      </section>
    </>
  )
}