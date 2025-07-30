import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Code, Database, Shield, Activity, Bell, Key, BarChart, Settings } from 'lucide-react'

export const metadata: Metadata = {
    title: 'API Reference - perfecX G-Rails Documentation',
    description: 'Complete API reference for perfecX G-Rails endpoints, methods, and data structures.',
}

export default function PerfecxionGRailsAPI() {
    return (
        <div className="bg-white dark:bg-background-dark min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
                    <Link href="/docs" className="hover:text-primary-600 dark:hover:text-primary-400">
                        Docs
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <Link href="/docs/perfecxion-g-rails" className="hover:text-primary-600 dark:hover:text-primary-400">
                        perfecX G-Rails
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-gray-900 dark:text-white">API Reference</span>
                </nav>

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    API Reference
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                    Complete reference for perfecX G-Rails REST API endpoints and SDK methods.
                </p>

                {/* Base URL */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-10">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Base URL</h3>
                    <code className="text-sm font-mono text-gray-700 dark:text-gray-300">
                        https://api.perfecxion.ai/v1/g-rails
                    </code>
                </div>

                {/* Authentication */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Key className="h-6 w-6 mr-2" />
                        Authentication
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        All API requests require authentication using an API key.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# HTTP Header
Authorization: Bearer YOUR_API_KEY

# Example with curl
curl -H "Authorization: Bearer YOUR_API_KEY" \\
  https://api.perfecxion.ai/v1/g-rails/guardrails`}</pre>
                    </div>
                </div>

                {/* Guardrail Management */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Guardrail Management
                    </h2>

                    {/* Create Guardrail Set */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Create Guardrail Set
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-mono">POST</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/guardrails</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Create a new set of guardrails for your AI application.
                        </p>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Request Body</p>
                                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                    <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "name": "production_guardrails",
  "description": "Safety guardrails for production chatbot",
  "guardrails": [
    {
      "type": "toxicity",
      "config": {
        "threshold": 0.7,
        "categories": ["hate", "threat", "insult", "profanity"],
        "action": "block",
        "models": ["perspective", "detoxify"]
      }
    },
    {
      "type": "bias",
      "config": {
        "protected_attributes": ["gender", "race", "age"],
        "max_disparity": 0.05,
        "action": "warn",
        "mitigation": "rebalance"
      }
    },
    {
      "type": "pii",
      "config": {
        "detect_types": ["email", "phone", "ssn", "credit_card"],
        "action": "redact",
        "replacement": "[REDACTED]"
      }
    },
    {
      "type": "hallucination",
      "config": {
        "fact_check": true,
        "confidence_threshold": 0.8,
        "sources": ["wikipedia", "trusted_kb"],
        "action": "flag"
      }
    }
  ],
  "metadata": {
    "team": "ai-safety",
    "environment": "production",
    "version": "1.0"
  }
}`}</pre>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Response</p>
                                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                    <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "id": "gs_1234567890abcdef",
  "name": "production_guardrails",
  "status": "active",
  "created_at": "2024-01-15T10:30:00Z",
  "guardrails_count": 4,
  "api_endpoint": "https://api.perfecxion.ai/v1/g-rails/check/gs_1234567890abcdef"
}`}</pre>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* List Guardrail Sets */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            List Guardrail Sets
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-mono">GET</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/guardrails</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Retrieve all guardrail sets for your organization.
                        </p>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Query Parameters</p>
                                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                                    <ul className="space-y-2 text-sm">
                                        <li><code className="font-mono">status</code> - Filter by status (active, inactive, testing)</li>
                                        <li><code className="font-mono">environment</code> - Filter by environment (production, staging, development)</li>
                                        <li><code className="font-mono">limit</code> - Number of results per page (default: 20)</li>
                                        <li><code className="font-mono">offset</code> - Pagination offset</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Update Guardrail Set */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Update Guardrail Set
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-sm font-mono">PUT</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/guardrails/{'{guardrail_set_id}'}</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Update guardrail configurations and thresholds.
                        </p>
                    </div>

                    {/* Delete Guardrail Set */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Delete Guardrail Set
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-sm font-mono">DELETE</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/guardrails/{'{guardrail_set_id}'}</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Remove a guardrail set from your organization.
                        </p>
                    </div>
                </div>

                {/* Guardrail Checking */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Guardrail Checking
                    </h2>

                    {/* Check Input */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Check Input
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-mono">POST</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/check/input</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Check user input against guardrails before processing.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "guardrail_set_id": "gs_1234567890abcdef",
  "input": "User message to check",
  "context": {
    "user_id": "user_123",
    "session_id": "sess_456",
    "previous_messages": 3
  },
  "options": {
    "explain_violations": true,
    "suggest_alternatives": true
  }
}`}</pre>
                        </div>
                    </div>

                    {/* Check Output */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Check Output
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-mono">POST</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/check/output</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Check model output before returning to user.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "guardrail_set_id": "gs_1234567890abcdef",
  "input": "Original user input",
  "output": "Model generated response",
  "model_metadata": {
    "model_name": "gpt-4",
    "temperature": 0.7,
    "max_tokens": 150
  }
}`}</pre>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Response Example</p>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "passed": false,
  "action": "block",
  "violations": [
    {
      "guardrail": "toxicity",
      "score": 0.85,
      "threshold": 0.7,
      "categories": ["profanity"],
      "explanation": "Output contains inappropriate language"
    }
  ],
  "modified_output": null,
  "suggestions": [
    "Consider rephrasing without profanity",
    "Use more professional language"
  ],
  "metadata": {
    "processing_time_ms": 45,
    "guardrails_checked": 4
  }
}`}</pre>
                            </div>
                        </div>
                    </div>

                    {/* Batch Check */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Batch Check
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-mono">POST</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/check/batch</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Check multiple inputs/outputs in a single request.
                        </p>
                    </div>
                </div>

                {/* Analytics & Monitoring */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Analytics & Monitoring
                    </h2>

                    {/* Get Metrics */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Get Metrics
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-mono">GET</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/metrics</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Retrieve guardrail performance metrics and statistics.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "guardrail_set_id": "gs_1234567890abcdef",
  "time_range": {
    "start": "2024-01-15T00:00:00Z",
    "end": "2024-01-15T23:59:59Z"
  },
  "metrics": {
    "total_checks": 15423,
    "blocked": 342,
    "warnings": 1205,
    "modifications": 892,
    "pass_rate": 0.89,
    "avg_latency_ms": 23.5,
    "violations_by_type": {
      "toxicity": 145,
      "bias": 89,
      "pii": 567,
      "hallucination": 34
    },
    "top_violation_patterns": [
      {"pattern": "profanity", "count": 78},
      {"pattern": "email_exposure", "count": 234},
      {"pattern": "gender_bias", "count": 45}
    ]
  }
}`}</pre>
                        </div>
                    </div>

                    {/* Get Violations */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Get Violations Log
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-mono">GET</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/violations</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Retrieve detailed violation logs for analysis.
                        </p>
                    </div>

                    {/* Performance Analysis */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Performance Impact Analysis
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-mono">GET</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/analytics/performance</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Analyze the performance impact of guardrails on your system.
                        </p>
                    </div>
                </div>

                {/* Configuration */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Configuration & Testing
                    </h2>

                    {/* Test Guardrails */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Test Guardrails
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-mono">POST</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/test</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Test guardrails with sample inputs without affecting metrics.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "guardrail_set_id": "gs_1234567890abcdef",
  "test_cases": [
    {
      "name": "toxic_input",
      "input": "This is a hate speech example",
      "expected_action": "block"
    },
    {
      "name": "pii_detection",
      "input": "My email is john@example.com",
      "expected_action": "redact"
    }
  ]
}`}</pre>
                        </div>
                    </div>

                    {/* Get Recommendations */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Get Optimization Recommendations
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-mono">GET</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/recommendations/{'{guardrail_set_id}'}</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Get AI-powered recommendations to optimize your guardrails.
                        </p>
                    </div>
                </div>

                {/* WebSocket API */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        WebSocket API
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Real-time guardrail checking via WebSocket connection.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                        <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`// JavaScript WebSocket example
const ws = new WebSocket('wss://api.perfecxion.ai/v1/g-rails/stream');

ws.on('open', () => {
  // Authenticate
  ws.send(JSON.stringify({
    type: 'auth',
    api_key: 'YOUR_API_KEY',
    guardrail_set_id: 'gs_1234567890abcdef'
  }));
});

// Send input for checking
ws.send(JSON.stringify({
  type: 'check_input',
  id: 'msg_123',
  input: 'User message to check'
}));

// Receive results
ws.on('message', (data) => {
  const result = JSON.parse(data);
  if (result.type === 'check_result') {
    console.log('Guardrail result:', result);
  }
});`}</pre>
                    </div>
                </div>

                {/* SDK Methods */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        SDK Methods
                    </h2>
                    
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Python SDK</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`from perfecxion_g_rails import GRailsClient

client = GRailsClient(api_key="your-api-key")

# Create guardrail set
guardrails = client.create_guardrail_set(
    name="my_guardrails",
    guardrails=[...]
)

# Check input
result = client.check_input(
    guardrail_set_id=guardrails.id,
    input="User message"
)

# Check output
result = client.check_output(
    guardrail_set_id=guardrails.id,
    input="User input",
    output="Model response"
)

# Get metrics
metrics = client.get_metrics(
    guardrail_set_id=guardrails.id,
    time_range="last_hour"
)`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Node.js SDK</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`import { GRailsClient } from '@perfecxion/g-rails';

const client = new GRailsClient({ apiKey: 'your-api-key' });

// Create guardrail set
const guardrails = await client.createGuardrailSet({
  name: 'my_guardrails',
  guardrails: [...]
});

// Check input
const result = await client.checkInput({
  guardrailSetId: guardrails.id,
  input: 'User message'
});

// Stream checks
const stream = client.streamChecks({
  guardrailSetId: guardrails.id
});

stream.on('violation', (event) => {
  console.log('Violation detected:', event);
});`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Rate Limits */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Rate Limits
                    </h2>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th className="text-left py-2 font-semibold text-gray-900 dark:text-white">Endpoint</th>
                                    <th className="text-left py-2 font-semibold text-gray-900 dark:text-white">Rate Limit</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 dark:text-gray-300">
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2">Guardrail Creation</td>
                                    <td className="py-2">100 per hour</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2">Check Input/Output</td>
                                    <td className="py-2">10,000 per minute</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2">Batch Check</td>
                                    <td className="py-2">1,000 per minute</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2">Metrics Retrieval</td>
                                    <td className="py-2">1,000 per hour</td>
                                </tr>
                                <tr>
                                    <td className="py-2">WebSocket Connections</td>
                                    <td className="py-2">100 concurrent</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Error Codes */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Error Codes
                    </h2>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th className="text-left py-2 font-semibold text-gray-900 dark:text-white">Code</th>
                                    <th className="text-left py-2 font-semibold text-gray-900 dark:text-white">Description</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 dark:text-gray-300">
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2 font-mono">400</td>
                                    <td className="py-2">Bad Request - Invalid parameters</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2 font-mono">401</td>
                                    <td className="py-2">Unauthorized - Invalid API key</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2 font-mono">403</td>
                                    <td className="py-2">Forbidden - Insufficient permissions</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2 font-mono">404</td>
                                    <td className="py-2">Not Found - Resource does not exist</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2 font-mono">429</td>
                                    <td className="py-2">Too Many Requests - Rate limit exceeded</td>
                                </tr>
                                <tr>
                                    <td className="py-2 font-mono">500</td>
                                    <td className="py-2">Internal Server Error</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* SDK Reference Links */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        SDK Documentation
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a href="https://pypi.org/project/perfecxion-g-rails/" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Code className="h-4 w-4" />
                            <span>Python SDK Documentation</span>
                        </a>
                        <a href="https://www.npmjs.com/package/@perfecxion/g-rails" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Code className="h-4 w-4" />
                            <span>Node.js SDK Documentation</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}