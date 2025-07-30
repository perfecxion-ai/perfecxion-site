import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Download, Package, Terminal, CheckCircle, Copy } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Installation Guide - perfecX G-Rails Documentation',
    description: 'Complete installation guide for perfecX G-Rails SDKs and CLI tools across different platforms and environments.',
}

export default function PerfecxionGRailsInstallation() {
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
                    <span className="text-gray-900 dark:text-white">Installation</span>
                </nav>

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    Installation Guide
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                    Install perfecX G-Rails SDKs and tools for your preferred platform and environment.
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
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">GPU recommended for real-time analysis</span>
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
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">TypeScript 4.5+ (optional)</span>
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
                                    pip install perfecxion-g-rails
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Using Poetry</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                    poetry add perfecxion-g-rails
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Using Conda</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                    conda install -c perfecxion perfecxion-g-rails
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Optional Dependencies</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">For GPU acceleration:</p>
                                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                        <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                            pip install "perfecxion-g-rails[gpu]"
                                        </code>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">For LangChain integration:</p>
                                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                        <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                            pip install "perfecxion-g-rails[langchain]"
                                        </code>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">For all integrations:</p>
                                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                        <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                            pip install "perfecxion-g-rails[all]"
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
                                    npm install @perfecxion/g-rails
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Using yarn</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                    yarn add @perfecxion/g-rails
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Using pnpm</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                    pnpm add @perfecxion/g-rails
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
    "types": ["@perfecxion/g-rails"]
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
                                    npm install -g @perfecxion/g-rails-cli
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Verify Installation</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`grails --version
# Output: perfecX G-Rails CLI v1.0.0

grails --help
# Shows all available commands

grails test --help
# Shows guardrail testing options`}</pre>
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
                                    docker pull perfecxion/g-rails:latest
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Run with Docker Compose</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# docker-compose.yml
version: '3.8'
services:
  g-rails:
    image: perfecxion/g-rails:latest
    environment:
      - GRAILS_API_KEY=your-api-key
      - GRAILS_ENVIRONMENT=production
      - GRAILS_LOG_LEVEL=info
    ports:
      - "8080:8080"
      - "9090:9090"  # Metrics endpoint
    volumes:
      - ./config:/app/config
      - ./guardrails:/app/guardrails
      - ./logs:/app/logs
    deploy:
      resources:
        limits:
          cpus: '2'
          memory: 4G
        reservations:
          cpus: '1'
          memory: 2G
          
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
helm repo add perfecxion https://charts.perfecxion.ai
helm repo update

# Install G-Rails
helm install g-rails perfecxion/g-rails \\
  --set apiKey=your-api-key \\
  --set replicas=3 \\
  --set resources.requests.memory=2Gi \\
  --set resources.requests.cpu=1000m \\
  --namespace g-rails \\
  --create-namespace`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Custom Values Configuration</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# values.yaml
replicaCount: 3

image:
  repository: perfecxion/g-rails
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
    - host: g-rails.your-domain.com
      paths:
        - path: /
          pathType: Prefix

autoscaling:
  enabled: true
  minReplicas: 3
  maxReplicas: 10
  targetCPUUtilizationPercentage: 70
  targetMemoryUtilizationPercentage: 80

guardrails:
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
GRAILS_API_KEY=your-api-key-here
GRAILS_ENVIRONMENT=production
GRAILS_LOG_LEVEL=info
GRAILS_CACHE_ENABLED=true
GRAILS_CACHE_TTL=3600
GRAILS_METRICS_ENABLED=true
GRAILS_METRICS_PORT=9090
GRAILS_MAX_BATCH_SIZE=100
GRAILS_TIMEOUT_MS=5000`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Configuration File</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# g-rails.config.yaml
api:
  key: \${GRAILS_API_KEY}
  endpoint: https://api.perfecxion.ai/v1/g-rails
  timeout: 5s
  retries: 3

guardrails:
  default_action: "warn"
  strict_mode: false
  
  toxicity:
    enabled: true
    threshold: 0.7
    models: ["perspective", "detoxify"]
    
  bias:
    enabled: true
    protected_attributes: ["gender", "race", "age", "religion"]
    max_disparity: 0.05
    
  pii:
    enabled: true
    types: ["email", "phone", "ssn", "credit_card"]
    action: "redact"
    
  hallucination:
    enabled: true
    fact_check_api: "https://factcheck.api.com"
    confidence_threshold: 0.8

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
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`import perfecxion_g_rails

# Check version
print(perfecxion_g_rails.__version__)

# Test connection
from perfecxion_g_rails import GRailsClient

client = GRailsClient(api_key="your-api-key")
status = client.health_check()
print(f"Connection status: {status.status}")
print(f"API version: {status.api_version}")
print(f"Available guardrails: {', '.join(status.guardrails)}")`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Node.js</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`const { GRailsClient } = require('@perfecxion/g-rails');

// Check version
console.log(GRailsClient.VERSION);

// Test connection
const client = new GRailsClient({ apiKey: 'your-api-key' });
const status = await client.healthCheck();
console.log(\`Connection status: \${status.status}\`);
console.log(\`API version: \${status.apiVersion}\`);
console.log(\`Available guardrails: \${status.guardrails.join(', ')}\`);`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">CLI</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Test CLI connection
grails test-connection

# Run guardrail test
grails test --input "Sample text" --guardrails toxicity,bias

# Validate configuration
grails config validate`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Performance Optimization */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Performance Optimization
                    </h2>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">GPU Acceleration</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            For real-time guardrail processing at scale, GPU acceleration is recommended:
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Install with CUDA support
pip install "perfecxion-g-rails[gpu]"

# Verify GPU availability
import perfecxion_g_rails
print(perfecxion_g_rails.cuda_available())  # Should return True

# Configure GPU usage
client = GRailsClient(
    api_key="your-api-key",
    device="cuda:0",  # Use first GPU
    batch_size=32,    # Optimize for GPU
    fp16=True         # Use mixed precision
)`}</pre>
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
                            <p className="font-semibold">GPU Not Detected</p>
                            <p className="text-sm">Ensure CUDA drivers are installed and <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">nvidia-smi</code> works</p>
                        </div>
                        <div>
                            <p className="font-semibold">Memory Issues</p>
                            <p className="text-sm">Reduce batch size or disable caching if running on limited resources</p>
                        </div>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Next Steps
                    </h3>
                    <div className="flex flex-col space-y-3">
                        <Link href="/docs/perfecxion-g-rails/quick-start" className="text-primary-600 dark:text-primary-400 hover:underline">
                            Follow the Quick Start Guide →
                        </Link>
                        <Link href="/docs/perfecxion-g-rails/api" className="text-primary-600 dark:text-primary-400 hover:underline">
                            Explore the API Reference →
                        </Link>
                        <Link href="/docs/perfecxion-g-rails/guides" className="text-primary-600 dark:text-primary-400 hover:underline">
                            View Guardrail Configuration Guides →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}