import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Download, Package, Terminal, CheckCircle, Copy } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Installation Guide - perfecX Agent Documentation',
    description: 'Complete installation guide for perfecX Agent SDKs and CLI tools across different platforms and frameworks.',
}

export default function PerfecxionAgentInstallation() {
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
                    <span className="text-gray-900 dark:text-white">Installation</span>
                </nav>

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    Installation Guide
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                    Install perfecX Agent SDKs and tools for your preferred platform and framework.
                </p>

                {/* System Requirements */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        System Requirements
                    </h2>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Python SDK</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">Python 3.8 or higher</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">pip 20.0+</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">4GB RAM minimum</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Node.js SDK</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">Node.js 16.0 or higher</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">npm 7+ or yarn 1.22+</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">4GB RAM minimum</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Python Installation */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Python SDK Installation
                    </h2>
                    
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Using pip</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                    pip install perfecxion-agent
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Using Poetry</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                    poetry add perfecxion-agent
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Using Conda</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                    conda install -c perfecxion perfecxion-agent
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Framework-Specific Installation</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">For LangChain:</p>
                                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                        <code className="text-sm text-gray-100 font-mono">
                                            pip install "perfecxion-agent[langchain]"
                                        </code>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">For AutoGPT:</p>
                                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                        <code className="text-sm text-gray-100 font-mono">
                                            pip install "perfecxion-agent[autogpt]"
                                        </code>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">For CrewAI:</p>
                                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                        <code className="text-sm text-gray-100 font-mono">
                                            pip install "perfecxion-agent[crewai]"
                                        </code>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Node.js Installation */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Node.js SDK Installation
                    </h2>
                    
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Using npm</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                    npm install @perfecxion/agent
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Using yarn</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                    yarn add @perfecxion/agent
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Using pnpm</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                    pnpm add @perfecxion/agent
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">TypeScript Support</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-2">
                                TypeScript definitions are included. No additional @types package needed.
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`// tsconfig.json
{
  "compilerOptions": {
    "types": ["@perfecxion/agent"]
  }
}`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CLI Installation */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        CLI Tool Installation
                    </h2>
                    
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Global Installation</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                    npm install -g @perfecxion/cli
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Verify Installation</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`perfecx --version
# Output: perfecX CLI v1.0.0

perfecx agent --help
# Shows all available agent commands`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Docker Installation */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Docker Installation
                    </h2>
                    
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Pull the Docker Image</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                    docker pull perfecxion/agent:latest
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Run with Docker Compose</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# docker-compose.yml
version: '3.8'
services:
  perfecx-agent:
    image: perfecxion/agent:latest
    environment:
      - PERFECX_API_KEY=your-api-key
      - PERFECX_ENVIRONMENT=production
    ports:
      - "8080:8080"
    volumes:
      - ./config:/app/config
      - ./logs:/app/logs`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Environment Setup */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Environment Configuration
                    </h2>
                    
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Environment Variables</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# .env file
PERFECX_API_KEY=your-api-key-here
PERFECX_ENVIRONMENT=production
PERFECX_LOG_LEVEL=info
PERFECX_AGENT_ID=my-agent-001
PERFECX_REGION=us-east-1`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Configuration File</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# perfecx.config.json
{
  "apiKey": "${process.env.PERFECX_API_KEY}",
  "environment": "production",
  "monitoring": {
    "enabled": true,
    "interval": 1000,
    "batchSize": 100
  },
  "security": {
    "encryptMemory": true,
    "validateTools": true,
    "enforceTimeout": 300000
  }
}`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Verification */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Verify Your Installation
                    </h2>
                    
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Python</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`import perfecxion_agent

# Check version
print(perfecxion_agent.__version__)

# Test connection
client = perfecxion_agent.Client(api_key="your-api-key")
status = client.health_check()
print(f"Connection status: {status}")`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Node.js</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`const { PerfecXAgent } = require('@perfecxion/agent');

// Check version
console.log(PerfecXAgent.VERSION);

// Test connection
const client = new PerfecXAgent({ apiKey: 'your-api-key' });
const status = await client.healthCheck();
console.log(\`Connection status: \${status}\`);`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Troubleshooting */}
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-10">
                    <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                        Common Installation Issues
                    </h3>
                    <div className="space-y-3 text-yellow-800 dark:text-yellow-200">
                        <div>
                            <p className="font-semibold">SSL Certificate Errors</p>
                            <p className="text-sm">If behind a corporate proxy, set: <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">NODE_TLS_REJECT_UNAUTHORIZED=0</code></p>
                        </div>
                        <div>
                            <p className="font-semibold">Permission Denied</p>
                            <p className="text-sm">Use <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">sudo</code> for global installs or use a Node version manager</p>
                        </div>
                        <div>
                            <p className="font-semibold">Version Conflicts</p>
                            <p className="text-sm">Clear cache: <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">npm cache clean --force</code></p>
                        </div>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Next Steps
                    </h3>
                    <div className="flex flex-col space-y-3">
                        <Link href="/docs/perfecxion-agent/quick-start" className="text-primary-600 dark:text-primary-400 hover:underline">
                            Follow the Quick Start Guide →
                        </Link>
                        <Link href="/docs/perfecxion-agent/api" className="text-primary-600 dark:text-primary-400 hover:underline">
                            Explore the API Reference →
                        </Link>
                        <Link href="/docs/perfecxion-agent/guides" className="text-primary-600 dark:text-primary-400 hover:underline">
                            View Integration Examples →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}