import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Download, Package, Terminal, CheckCircle, Copy } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Installation Guide - PromptShield Documentation',
    description: 'Complete installation guide for PromptShield SDKs and CLI tools across different platforms and environments.',
}

export default function PromptShieldInstallation() {
    return (
        <div className="bg-white dark:bg-background-dark min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
                    <Link href="/docs" className="hover:text-primary-600 dark:hover:text-primary-400">
                        Docs
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <Link href="/docs/promptshield" className="hover:text-primary-600 dark:hover:text-primary-400">
                        PromptShield
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-gray-900 dark:text-white">Installation</span>
                </nav>

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    Installation Guide
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                    Install PromptShield SDKs and tools for your preferred platform and environment.
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
                                        <span className="text-gray-700 dark:text-gray-300">Python 3.7 or higher</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">pip 19.0+</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">2GB RAM minimum</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">SSL/TLS support</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Node.js SDK</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">Node.js 14.0 or higher</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">npm 6+ or yarn 1.22+</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">2GB RAM minimum</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">TypeScript 4.0+ (optional)</span>
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
                                    pip install prompt-shield
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Using Poetry</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                    poetry add prompt-shield
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Using Conda</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                    conda install -c perfecxion prompt-shield
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Optional Dependencies</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">For async support:</p>
                                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                        <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                            pip install "prompt-shield[async]"
                                        </code>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">For framework integrations:</p>
                                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                        <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                            pip install "prompt-shield[frameworks]"
                                        </code>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">For all features:</p>
                                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                        <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                            pip install "prompt-shield[all]"
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
                                    npm install @prompt-shield/sdk
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Using yarn</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                    yarn add @prompt-shield/sdk
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Using pnpm</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                    pnpm add @prompt-shield/sdk
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
    "types": ["@prompt-shield/sdk"]
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
                                    npm install -g @prompt-shield/cli
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Verify Installation</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`promptshield --version
# Output: PromptShield CLI v1.0.0

promptshield --help
# Shows all available commands

promptshield test --help
# Shows testing options`}</pre>
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
                                    docker pull promptshield/promptshield:latest
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Run with Docker Compose</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# docker-compose.yml
version: '3.8'
services:
  promptshield:
    image: promptshield/promptshield:latest
    environment:
      - PROMPTSHIELD_API_KEY=your-api-key
      - PROMPTSHIELD_LOG_LEVEL=info
      - PROMPTSHIELD_PORT=8080
    ports:
      - "8080:8080"
      - "9090:9090"  # Metrics endpoint
    volumes:
      - ./config:/app/config
      - ./logs:/app/logs
    deploy:
      resources:
        limits:
          cpus: '2'
          memory: 2G
        reservations:
          cpus: '1'
          memory: 1G
          
  # Optional: Local Redis for caching
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis-data:/data

volumes:
  redis-data:`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Kubernetes Installation */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Kubernetes Deployment
                    </h2>
                    
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Helm Chart Installation</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Add Helm repository
helm repo add promptshield https://charts.perfecxion.ai
helm repo update

# Install PromptShield
helm install promptshield promptshield/promptshield \\
  --set apiKey=your-api-key \\
  --set replicas=3 \\
  --set resources.requests.memory=1Gi \\
  --set resources.requests.cpu=500m \\
  --namespace promptshield \\
  --create-namespace`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Custom Values Configuration</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# values.yaml
replicaCount: 3

image:
  repository: promptshield/promptshield
  tag: "1.0.0"
  pullPolicy: IfNotPresent

service:
  type: LoadBalancer
  port: 80
  metricsPort: 9090

ingress:
  enabled: true
  className: nginx
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt
  hosts:
    - host: promptshield.your-domain.com
      paths:
        - path: /
          pathType: Prefix

autoscaling:
  enabled: true
  minReplicas: 3
  maxReplicas: 10
  targetCPUUtilizationPercentage: 70
  targetMemoryUtilizationPercentage: 80

cache:
  enabled: true
  type: redis
  redis:
    host: redis-master
    port: 6379
    
monitoring:
  prometheus:
    enabled: true
    serviceMonitor:
      enabled: true`}</pre>
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
PROMPTSHIELD_API_KEY=your-api-key-here
PROMPTSHIELD_API_URL=https://api.perfecxion.ai/v1
PROMPTSHIELD_LOG_LEVEL=info
PROMPTSHIELD_CACHE_ENABLED=true
PROMPTSHIELD_CACHE_TTL=3600
PROMPTSHIELD_TIMEOUT_MS=5000
PROMPTSHIELD_MAX_RETRIES=3
PROMPTSHIELD_BATCH_SIZE=100`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Configuration File</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# promptshield.config.yaml
api:
  key: \${PROMPTSHIELD_API_KEY}
  endpoint: https://api.perfecxion.ai/v1
  timeout: 5s
  retries: 3

detection:
  default_mode: "standard"
  sensitivity: "balanced"
  
  layers:
    heuristic:
      enabled: true
      patterns_update: "auto"
      
    llm:
      enabled: true
      model: "gpt-3.5-turbo"
      fallback: "heuristic_only"
      
    canary:
      enabled: true
      token_rotation: "daily"

performance:
  cache:
    enabled: true
    ttl: 3600
    max_size: 1000
    
  batching:
    enabled: true
    max_batch_size: 100
    max_wait_ms: 100
    
monitoring:
  metrics:
    enabled: true
    port: 9090
    path: /metrics
    
  logging:
    level: info
    format: json
    output: stdout`}</pre>
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
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`import prompt_shield

# Check version
print(prompt_shield.__version__)

# Test connection
from prompt_shield import PromptShield

shield = PromptShield(api_key="your-api-key")
health = shield.health_check()
print(f"Connection status: {health.status}")
print(f"API version: {health.api_version}")
print(f"Detection layers: {', '.join(health.active_layers)}")`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Node.js</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`const { PromptShield } = require('@prompt-shield/sdk');

// Check version
console.log(PromptShield.VERSION);

// Test connection
const shield = new PromptShield({ apiKey: 'your-api-key' });
const health = await shield.healthCheck();
console.log(\`Connection status: \${health.status}\`);
console.log(\`API version: \${health.apiVersion}\`);
console.log(\`Detection layers: \${health.activeLayers.join(', ')}\`);`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">CLI</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Test CLI connection
promptshield test-connection

# Run detection test
promptshield detect "Sample text to test"

# Validate configuration
promptshield config validate`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Framework-Specific Installation */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Framework-Specific Installation
                    </h2>
                    <div className="space-y-6">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">React</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`npm install @prompt-shield/react

# Usage
import { PromptShieldProvider } from '@prompt-shield/react';

<PromptShieldProvider apiKey={process.env.REACT_APP_PROMPTSHIELD_KEY}>
  <App />
</PromptShieldProvider>`}</pre>
                            </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Django</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`pip install prompt-shield[django]

# settings.py
INSTALLED_APPS = [
    # ...
    'prompt_shield.django',
]

PROMPTSHIELD_API_KEY = 'your-api-key'`}</pre>
                            </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">FastAPI</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`pip install prompt-shield[fastapi]

# main.py
from prompt_shield.fastapi import PromptShieldMiddleware

app.add_middleware(
    PromptShieldMiddleware,
    api_key="your-api-key"
)`}</pre>
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
                            <p className="text-sm">For corporate proxies: <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">export NODE_TLS_REJECT_UNAUTHORIZED=0</code></p>
                        </div>
                        <div>
                            <p className="font-semibold">Permission Denied</p>
                            <p className="text-sm">Use <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">sudo</code> for global installs or use a virtual environment</p>
                        </div>
                        <div>
                            <p className="font-semibold">Network Timeouts</p>
                            <p className="text-sm">Configure proxy settings or increase timeout values in configuration</p>
                        </div>
                        <div>
                            <p className="font-semibold">Version Conflicts</p>
                            <p className="text-sm">Check compatibility matrix in documentation for framework versions</p>
                        </div>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Next Steps
                    </h3>
                    <div className="flex flex-col space-y-3">
                        <Link href="/docs/promptshield/quick-start" className="text-primary-600 dark:text-primary-400 hover:underline">
                            Follow the Quick Start Guide →
                        </Link>
                        <Link href="/docs/promptshield/api" className="text-primary-600 dark:text-primary-400 hover:underline">
                            Explore the API Reference →
                        </Link>
                        <Link href="/docs/promptshield/guides" className="text-primary-600 dark:text-primary-400 hover:underline">
                            View Integration Guides →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}