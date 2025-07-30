import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Download, Package, Terminal, CheckCircle, Copy } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Installation Guide - perfecX Comply Documentation',
    description: 'Complete installation guide for perfecX Comply SDKs and CLI tools across different platforms and environments.',
}

export default function PerfecxionComplyInstallation() {
    return (
        <div className="bg-white dark:bg-background-dark min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
                    <Link href="/docs" className="hover:text-primary-600 dark:hover:text-primary-400">
                        Docs
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <Link href="/docs/perfecxion-comply" className="hover:text-primary-600 dark:hover:text-primary-400">
                        perfecX Comply
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-gray-900 dark:text-white">Installation</span>
                </nav>

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    Installation Guide
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                    Install perfecX Comply SDKs and tools for your preferred platform and environment.
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
                                        <span className="text-gray-700 dark:text-gray-300">8GB RAM minimum</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">2GB disk space</span>
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
                                        <span className="text-gray-700 dark:text-gray-300">8GB RAM minimum</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">2GB disk space</span>
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
                                    pip install perfecxion-comply
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Using Poetry</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                    poetry add perfecxion-comply
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Using Conda</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                    conda install -c perfecxion perfecxion-comply
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Optional Dependencies</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">For MLflow integration:</p>
                                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                        <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                            pip install "perfecxion-comply[mlflow]"
                                        </code>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">For Kubernetes deployment:</p>
                                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                        <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                            pip install "perfecxion-comply[k8s]"
                                        </code>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">For all integrations:</p>
                                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                        <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                            pip install "perfecxion-comply[all]"
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
                                    npm install @perfecxion/comply
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Using yarn</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                    yarn add @perfecxion/comply
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Using pnpm</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <code className="text-sm text-gray-900 dark:text-gray-100 font-mono">
                                    pnpm add @perfecxion/comply
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
    "types": ["@perfecxion/comply"]
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
                                    npm install -g @perfecxion/comply-cli
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Verify Installation</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`px-comply --version
# Output: perfecX Comply CLI v1.0.0

px-comply --help
# Shows all available commands

px-comply scan --help
# Shows scan command options`}</pre>
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
                                    docker pull perfecxion/comply:latest
                                </code>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Run with Docker Compose</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# docker-compose.yml
version: '3.8'
services:
  perfecx-comply:
    image: perfecxion/comply:latest
    environment:
      - PERFECX_API_KEY=your-api-key
      - PERFECX_ORG_ID=your-org-id
      - PERFECX_ENVIRONMENT=production
    ports:
      - "8080:8080"
    volumes:
      - ./config:/app/config
      - ./reports:/app/reports
      - ./logs:/app/logs
      
  # Optional: Local compliance database
  comply-db:
    image: postgres:15
    environment:
      - POSTGRES_DB=comply
      - POSTGRES_USER=comply_user
      - POSTGRES_PASSWORD=secure_password
    volumes:
      - comply-data:/var/lib/postgresql/data

volumes:
  comply-data:`}</pre>
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

# Install perfecX Comply
helm install perfecx-comply perfecxion/comply \\
  --set apiKey=your-api-key \\
  --set orgId=your-org-id \\
  --set replicas=3 \\
  --namespace compliance \\
  --create-namespace`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Custom Values Configuration</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# values.yaml
replicaCount: 3

image:
  repository: perfecxion/comply
  tag: "1.0.0"
  pullPolicy: IfNotPresent

service:
  type: LoadBalancer
  port: 80

ingress:
  enabled: true
  className: nginx
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt
  hosts:
    - host: comply.your-domain.com
      paths:
        - path: /
          pathType: Prefix

resources:
  limits:
    cpu: 2000m
    memory: 4Gi
  requests:
    cpu: 1000m
    memory: 2Gi

autoscaling:
  enabled: true
  minReplicas: 3
  maxReplicas: 10
  targetCPUUtilizationPercentage: 70
  targetMemoryUtilizationPercentage: 80`}</pre>
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
PERFECX_ORG_ID=your-organization-id
PERFECX_ENVIRONMENT=production
PERFECX_LOG_LEVEL=info
PERFECX_REGION=us-east-1
PERFECX_SCAN_INTERVAL=daily
PERFECX_AUTO_REMEDIATE=true
PERFECX_NOTIFICATION_EMAIL=compliance@company.com`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Configuration File</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# perfecx-comply.yaml
api:
  key: \${PERFECX_API_KEY}
  endpoint: https://api.perfecxion.ai/v1
  timeout: 30s
  retries: 3

organization:
  id: \${PERFECX_ORG_ID}
  name: "Your Organization"
  
compliance:
  frameworks:
    - EU_AI_ACT
    - NIST_AI_RMF
    - SOC_2_TYPE_II
    - ISO_42001
  
  scanning:
    interval: daily
    time: "02:00"
    parallelism: 5
    
  risk:
    thresholds:
      low: 30
      medium: 60
      high: 80
      critical: 90
      
monitoring:
  enabled: true
  exporters:
    - prometheus
    - datadog
    
notifications:
  channels:
    - type: email
      recipients: ["compliance@company.com"]
    - type: slack
      webhook: "https://hooks.slack.com/..."
    - type: pagerduty
      key: "your-pagerduty-key"`}</pre>
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
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`import perfecxion_comply

# Check version
print(perfecxion_comply.__version__)

# Test connection
from perfecxion_comply import ComplianceClient

client = ComplianceClient(api_key="your-api-key")
status = client.health_check()
print(f"Connection status: {status.status}")
print(f"API version: {status.api_version}")
print(f"Available frameworks: {', '.join(status.frameworks)}")`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Node.js</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`const { ComplianceClient } = require('@perfecxion/comply');

// Check version
console.log(ComplianceClient.VERSION);

// Test connection
const client = new ComplianceClient({ 
    apiKey: 'your-api-key' 
});

const status = await client.healthCheck();
console.log(\`Connection status: \${status.status}\`);
console.log(\`API version: \${status.apiVersion}\`);
console.log(\`Available frameworks: \${status.frameworks.join(', ')}\`);`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">CLI</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Test CLI connection
px-comply test-connection

# Run initial compliance scan
px-comply scan --model my-first-model --framework EU_AI_ACT

# Generate compliance report
px-comply report --format pdf --output compliance-report.pdf`}</pre>
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
                            <p className="font-semibold">API Key Invalid</p>
                            <p className="text-sm">Ensure your API key is active and has the correct permissions</p>
                        </div>
                        <div>
                            <p className="font-semibold">Network Timeout</p>
                            <p className="text-sm">Check firewall settings and ensure access to api.perfecxion.ai</p>
                        </div>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Next Steps
                    </h3>
                    <div className="flex flex-col space-y-3">
                        <Link href="/docs/perfecxion-comply/quick-start" className="text-primary-600 dark:text-primary-400 hover:underline">
                            Follow the Quick Start Guide →
                        </Link>
                        <Link href="/docs/perfecxion-comply/api" className="text-primary-600 dark:text-primary-400 hover:underline">
                            Explore the API Reference →
                        </Link>
                        <Link href="/docs/perfecxion-comply/guides" className="text-primary-600 dark:text-primary-400 hover:underline">
                            View Compliance Framework Guides →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}