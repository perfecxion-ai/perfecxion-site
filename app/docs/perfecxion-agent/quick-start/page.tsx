import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Play, Code, CheckCircle, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Quick Start Guide - perfecX Agent Documentation',
    description: 'Get started with perfecX Agent in minutes. Learn how to integrate agent monitoring and security into your AI applications.',
}

export default function PerfecxionAgentQuickStart() {
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
                    <span className="text-gray-900 dark:text-white">Quick Start</span>
                </nav>

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    Quick Start Guide
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                    Get perfecX Agent up and running in your AI application in under 5 minutes.
                </p>

                {/* Prerequisites */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-10">
                    <div className="flex items-start space-x-3">
                        <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                        <div>
                            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Prerequisites</h3>
                            <ul className="list-disc list-inside space-y-1 text-blue-800 dark:text-blue-200">
                                <li>Python 3.8+ or Node.js 16+</li>
                                <li>An AI agent framework (LangChain, AutoGPT, CrewAI, or Semantic Kernel)</li>
                                <li>A perfecX Agent API key (sign up at perfecxion.ai)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Step 1: Installation */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Step 1: Install the SDK
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Python</h3>
                            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-gray-100 font-mono">
                                    pip install perfecxion-agent
                                </code>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Node.js</h3>
                            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-gray-100 font-mono">
                                    npm install @perfecxion/agent
                                </code>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 2: Initialize */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Step 2: Initialize perfecX Agent
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Python Example</h3>
                            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-100 font-mono whitespace-pre">{`from perfecxion_agent import PerfecXAgent
from langchain.agents import create_react_agent

# Initialize perfecX Agent
px_agent = PerfecXAgent(
    api_key="your-api-key",
    environment="production"
)

# Wrap your existing agent
my_agent = create_react_agent(...)
secure_agent = px_agent.wrap(my_agent)

# Enable real-time monitoring
px_agent.enable_monitoring(
    detect_anomalies=True,
    protect_memory=True,
    enforce_policies=True
)`}</pre>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Node.js Example</h3>
                            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-100 font-mono whitespace-pre">{`import { PerfecXAgent } from '@perfecxion/agent';
import { createAgent } from 'langchain/agents';

// Initialize perfecX Agent
const pxAgent = new PerfecXAgent({
    apiKey: 'your-api-key',
    environment: 'production'
});

// Wrap your existing agent
const myAgent = createAgent(...);
const secureAgent = pxAgent.wrap(myAgent);

// Enable real-time monitoring
pxAgent.enableMonitoring({
    detectAnomalies: true,
    protectMemory: true,
    enforcePolicies: true
});`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Step 3: Configure Security Policies */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Step 3: Configure Security Policies
                    </h2>
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-4">
                        <pre className="text-sm text-gray-100 font-mono whitespace-pre">{`# Define security policies
px_agent.set_policies({
    "max_execution_time": 300,  # 5 minutes
    "allowed_tools": ["web_search", "calculator", "file_reader"],
    "forbidden_patterns": ["rm -rf", "DELETE FROM", "DROP TABLE"],
    "memory_encryption": True,
    "require_authentication": True
})

# Set up alerts
px_agent.set_alerts({
    "anomaly_threshold": 0.8,
    "notification_channels": ["email", "slack"],
    "alert_on": ["policy_violation", "anomaly_detected", "memory_tampering"]
})`}</pre>
                    </div>
                </div>

                {/* Step 4: Monitor and Analyze */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Step 4: Monitor Your Agents
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Once integrated, perfecX Agent provides real-time monitoring through our dashboard:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Behavioral Analytics</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Track agent behavior patterns and detect anomalies</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Security Events</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Real-time alerts for policy violations and threats</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Performance Metrics</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Monitor response times and resource usage</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Audit Trails</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Complete logs of all agent activities</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-100 font-mono whitespace-pre">{`# Access monitoring data programmatically
metrics = px_agent.get_metrics(
    agent_id="my-agent-001",
    time_range="last_hour"
)

print(f"Anomaly Score: {metrics.anomaly_score}")
print(f"Policy Violations: {metrics.violations_count}")
print(f"Average Response Time: {metrics.avg_response_time}ms")`}</pre>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Next Steps
                    </h2>
                    <div className="space-y-3">
                        <Link href="/docs/perfecxion-agent/installation" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Code className="h-4 w-4" />
                            <span>Read the full installation guide</span>
                        </Link>
                        <Link href="/docs/perfecxion-agent/api" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Code className="h-4 w-4" />
                            <span>Explore the API reference</span>
                        </Link>
                        <Link href="/docs/perfecxion-agent/guides" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Code className="h-4 w-4" />
                            <span>View integration examples</span>
                        </Link>
                    </div>
                </div>

                {/* Support Section */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Need Help?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Our team is here to help you get started with perfecX Agent.
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