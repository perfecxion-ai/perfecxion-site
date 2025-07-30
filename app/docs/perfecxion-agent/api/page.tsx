import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Code, Database, Shield, Activity, Bell, Key } from 'lucide-react'

export const metadata: Metadata = {
    title: 'API Reference - perfecX Agent Documentation',
    description: 'Complete API reference for perfecX Agent endpoints, methods, and data structures.',
}

export default function PerfecxionAgentAPI() {
    return (
        <div className="bg-white dark:bg-background-dark min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
                    <Link href="/docs" className="hover:text-primary-600 dark:hover:text-primary-400">
                        Docs
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <Link href="/docs/perfecxion-agent" className="hover:text-primary-600 dark:hover:text-primary-400">
                        perfecX Agent
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-gray-900 dark:text-white">API Reference</span>
                </nav>

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    API Reference
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                    Complete reference for perfecX Agent REST API endpoints and SDK methods.
                </p>

                {/* Base URL */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-10">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Base URL</h3>
                    <code className="text-sm font-mono text-gray-700 dark:text-gray-300">
                        https://api.perfecxion.ai/v1
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
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-100 font-mono whitespace-pre">{`# HTTP Header
Authorization: Bearer YOUR_API_KEY

# Example with curl
curl -H "Authorization: Bearer YOUR_API_KEY" \\
  https://api.perfecxion.ai/v1/agents`}</pre>
                    </div>
                </div>

                {/* Agent Management */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Agent Management
                    </h2>

                    {/* Register Agent */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Register Agent
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-mono">POST</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/agents</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Register a new agent with the monitoring system.
                        </p>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Request Body</p>
                                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                    <pre className="text-sm text-gray-100 font-mono whitespace-pre">{`{
  "agent_id": "my-agent-001",
  "name": "Customer Support Agent",
  "framework": "langchain",
  "version": "1.0.0",
  "capabilities": ["chat", "tool_use", "memory"],
  "metadata": {
    "team": "support",
    "environment": "production"
  }
}`}</pre>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Response</p>
                                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                    <pre className="text-sm text-gray-100 font-mono whitespace-pre">{`{
  "agent_id": "my-agent-001",
  "registration_token": "agt_1234567890abcdef",
  "monitoring_endpoint": "wss://monitor.perfecxion.ai/agents/my-agent-001",
  "created_at": "2024-01-15T10:30:00Z"
}`}</pre>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* List Agents */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            List Agents
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-mono">GET</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/agents</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Retrieve a list of all registered agents.
                        </p>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Query Parameters</p>
                                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                                    <ul className="space-y-2 text-sm">
                                        <li><code className="font-mono">status</code> - Filter by agent status (active, inactive, error)</li>
                                        <li><code className="font-mono">framework</code> - Filter by framework (langchain, autogpt, crewai)</li>
                                        <li><code className="font-mono">limit</code> - Number of results per page (default: 20)</li>
                                        <li><code className="font-mono">offset</code> - Pagination offset</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Update Agent */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Update Agent
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-sm font-mono">PUT</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/agents/{'{agent_id}'}</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Update agent configuration and metadata.
                        </p>
                    </div>

                    {/* Delete Agent */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Delete Agent
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-sm font-mono">DELETE</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/agents/{'{agent_id}'}</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Unregister an agent and stop monitoring.
                        </p>
                    </div>
                </div>

                {/* Monitoring Endpoints */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Monitoring & Analytics
                    </h2>

                    {/* Send Event */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Send Event
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-mono">POST</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/agents/{'{agent_id}'}/events</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Send agent activity events for monitoring.
                        </p>
                        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-100 font-mono whitespace-pre">{`{
  "event_type": "tool_execution",
  "timestamp": "2024-01-15T10:35:00Z",
  "data": {
    "tool": "web_search",
    "input": "latest AI security news",
    "output": "Found 5 relevant articles...",
    "duration_ms": 1250,
    "success": true
  },
  "context": {
    "session_id": "sess_123",
    "user_id": "user_456"
  }
}`}</pre>
                        </div>
                    </div>

                    {/* Get Metrics */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Get Metrics
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-mono">GET</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/agents/{'{agent_id}'}/metrics</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Retrieve performance and security metrics.
                        </p>
                        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-100 font-mono whitespace-pre">{`{
  "agent_id": "my-agent-001",
  "time_range": {
    "start": "2024-01-15T09:00:00Z",
    "end": "2024-01-15T10:00:00Z"
  },
  "metrics": {
    "total_requests": 1523,
    "average_response_time_ms": 245,
    "error_rate": 0.02,
    "anomaly_score": 0.15,
    "policy_violations": 3,
    "security_events": {
      "memory_tampering_attempts": 0,
      "unauthorized_tool_access": 1,
      "suspicious_patterns": 2
    }
  }
}`}</pre>
                        </div>
                    </div>

                    {/* Get Anomalies */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Get Anomalies
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-mono">GET</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/agents/{'{agent_id}'}/anomalies</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Retrieve detected behavioral anomalies.
                        </p>
                    </div>
                </div>

                {/* Security Policies */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Security Policies
                    </h2>

                    {/* Create Policy */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Create Policy
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-mono">POST</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/policies</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Create a new security policy for agents.
                        </p>
                        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-100 font-mono whitespace-pre">{`{
  "name": "production-safety-policy",
  "description": "Safety policy for production agents",
  "rules": [
    {
      "type": "tool_restriction",
      "allowed_tools": ["web_search", "calculator", "file_reader"],
      "forbidden_tools": ["code_executor", "system_command"]
    },
    {
      "type": "execution_limit",
      "max_execution_time_ms": 300000,
      "max_memory_mb": 512
    },
    {
      "type": "content_filter",
      "forbidden_patterns": ["rm -rf", "DROP TABLE", "DELETE FROM"],
      "sensitive_data_detection": true
    }
  ],
  "enforcement": "strict"
}`}</pre>
                        </div>
                    </div>

                    {/* Apply Policy */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Apply Policy to Agent
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-mono">POST</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/agents/{'{agent_id}'}/policies</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Apply security policies to an agent.
                        </p>
                    </div>
                </div>

                {/* WebSocket API */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        WebSocket API
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Real-time monitoring and control via WebSocket connection.
                    </p>
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                        <pre className="text-sm text-gray-100 font-mono whitespace-pre">{`// JavaScript WebSocket example
const ws = new WebSocket('wss://monitor.perfecxion.ai/agents/my-agent-001');

ws.on('open', () => {
  // Send authentication
  ws.send(JSON.stringify({
    type: 'auth',
    token: 'agt_1234567890abcdef'
  }));
});

ws.on('message', (data) => {
  const event = JSON.parse(data);
  
  switch(event.type) {
    case 'anomaly_detected':
      console.warn('Anomaly detected:', event.data);
      break;
    case 'policy_violation':
      console.error('Policy violation:', event.data);
      break;
    case 'metrics_update':
      console.log('Metrics:', event.data);
      break;
  }
});`}</pre>
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
                                    <td className="py-2">Agent Registration</td>
                                    <td className="py-2">100 per hour</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2">Event Ingestion</td>
                                    <td className="py-2">10,000 per minute</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2">Metrics Retrieval</td>
                                    <td className="py-2">1,000 per hour</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Policy Management</td>
                                    <td className="py-2">100 per hour</td>
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
                        <a href="https://pypi.org/project/perfecxion-agent/" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Code className="h-4 w-4" />
                            <span>Python SDK Documentation</span>
                        </a>
                        <a href="https://www.npmjs.com/package/@perfecxion/agent" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Code className="h-4 w-4" />
                            <span>Node.js SDK Documentation</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}