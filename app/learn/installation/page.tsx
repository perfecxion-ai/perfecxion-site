import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Terminal, Package, Server, Cloud, Database, Shield, CheckCircle, AlertCircle, Settings, Code, GitBranch, Zap, Key, Globe, Monitor, Cpu, HardDrive, Download, Play, ArrowRight, FileText, Lock, Users, BarChart3, TrendingUp, Workflow, Package as PackageIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Installation Guide - Learn AI Security - perfecXion.ai',
  description: 'Complete step-by-step guide to installing and configuring perfecXion AI Security Platform with security-first approach.',
  keywords: 'AI security installation, perfecXion setup, security platform installation, AI security configuration, deployment guide',
}

export default function InstallationPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link href="/learn" className="hover:underline text-primary-600 dark:text-primary-400">Learn</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-700 dark:text-gray-300">Installation Guide</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center">
          <Package className="h-10 w-10 text-primary-600 mr-4" />
          Installation Guide
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl">
          Complete step-by-step guide to installing and configuring perfecXion AI Security Platform. 
          Follow our security-first approach to deploy robust AI security controls across development, 
          staging, and production environments with confidence.
        </p>
      </div>

      {/* Installation Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
          <Download className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">5 min</div>
          <div className="text-sm text-blue-700 dark:text-blue-300">Quick Install</div>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
          <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-900 dark:text-green-100">100%</div>
          <div className="text-sm text-green-700 dark:text-green-300">Security First</div>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
          <Zap className="h-8 w-8 text-purple-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">3 Steps</div>
          <div className="text-sm text-purple-700 dark:text-purple-300">To Production</div>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center">
          <CheckCircle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">24/7</div>
          <div className="text-sm text-orange-700 dark:text-orange-300">Support Available</div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="mb-12 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Table of Contents</h2>
        <ul className="space-y-2 text-sm">
          <li><a href="#prerequisites" className="text-primary-600 dark:text-primary-400 hover:underline">Prerequisites: System Requirements</a></li>
          <li><a href="#installation" className="text-primary-600 dark:text-primary-400 hover:underline">Installation: Step-by-Step Setup</a></li>
          <li><a href="#configuration" className="text-primary-600 dark:text-primary-400 hover:underline">Configuration: Security Settings</a></li>
          <li><a href="#verification" className="text-primary-600 dark:text-primary-400 hover:underline">Verification: Testing Your Setup</a></li>
          <li><a href="#deployment" className="text-primary-600 dark:text-primary-400 hover:underline">Deployment: Production Ready</a></li>
          <li><a href="#troubleshooting" className="text-primary-600 dark:text-primary-400 hover:underline">Troubleshooting: Common Issues</a></li>
          <li><a href="#next-steps" className="text-primary-600 dark:text-primary-400 hover:underline">Next Steps: Advanced Configuration</a></li>
        </ul>
      </div>

      {/* Prerequisites */}
      <section id="prerequisites" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
          Prerequisites: System Requirements
        </h2>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            Before installing perfecXion AI Security Platform, ensure your system meets the minimum requirements 
            for optimal performance and security. Our platform is designed to work across various environments 
            while maintaining enterprise-grade security standards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Cpu className="h-6 w-6 text-blue-600 mr-3" />
                Hardware Requirements
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>CPU:</strong> Minimum 4 cores, Recommended 8+ cores</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>RAM:</strong> Minimum 8GB, Recommended 16GB+</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Storage:</strong> Minimum 50GB, SSD recommended</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Network:</strong> Stable internet connection required</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Server className="h-6 w-6 text-green-600 mr-3" />
                Software Requirements
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>OS:</strong> Linux (Ubuntu 20.04+), macOS 11+, Windows 10+</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Docker:</strong> Version 20.10+ (recommended)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Python:</strong> Version 3.8+ (if not using Docker)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span><strong>Node.js:</strong> Version 16+ (for web interface)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section id="installation" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <Download className="h-6 w-6 text-blue-500 mr-3" />
          Installation: Step-by-Step Setup
        </h2>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            Follow these steps to install perfecXion AI Security Platform. We provide multiple installation 
            methods to suit your environment and security requirements.
          </p>

          <div className="space-y-6">
            {/* Docker Installation */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <PackageIcon className="h-6 w-6 text-blue-600 mr-3" />
                Docker Installation (Recommended)
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                The fastest and most secure way to deploy perfecXion. Docker ensures consistent environments 
                and isolates the application for enhanced security.
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Quick Install Command</h4>
                <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`# Download and run the installation script
curl -fsSL https://install.perfecxion.ai | bash

# Or use Docker Compose
docker-compose up -d perfecxion`}
                </pre>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Security Features</h4>
                <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                  <li>• Container isolation and security</li>
                  <li>• Automatic security updates</li>
                  <li>• Built-in vulnerability scanning</li>
                  <li>• Secure default configurations</li>
                </ul>
              </div>
            </div>

            {/* Manual Installation */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Terminal className="h-6 w-6 text-green-600 mr-3" />
                Manual Installation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                For environments where Docker isn't available or for custom deployments with specific requirements.
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Python Installation</h4>
                <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`# Clone the repository
git clone https://github.com/perfecxion/ai-security-platform.git
cd ai-security-platform

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate

# Install dependencies
pip install -r requirements.txt

# Run the application
python main.py`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration */}
      <section id="configuration" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <Settings className="h-6 w-6 text-purple-500 mr-3" />
          Configuration: Security Settings
        </h2>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            Configure perfecXion with your specific security requirements and environment settings. 
            Our platform provides flexible configuration options while maintaining security best practices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg">
              <Lock className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Security Configuration</h3>
              <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                <li>• API key management</li>
                <li>• Authentication settings</li>
                <li>• Encryption configuration</li>
                <li>• Access control policies</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-lg">
              <Database className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Data Configuration</h3>
              <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                <li>• Database connections</li>
                <li>• Logging configuration</li>
                <li>• Backup settings</li>
                <li>• Data retention policies</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-lg">
              <Globe className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Network Configuration</h3>
              <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
                <li>• Proxy settings</li>
                <li>• Firewall rules</li>
                <li>• SSL/TLS configuration</li>
                <li>• Load balancer setup</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <FileText className="h-6 w-6 text-blue-600 mr-3" />
              Configuration File Example
            </h3>
            <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
              <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`# config.yaml
security:
  api_keys:
    - name: "production-key"
      key: "${process.env.PERFECXION_API_KEY}"
      permissions: ["read", "write", "admin"]
  
  authentication:
    method: "jwt"
    session_timeout: 3600
    max_login_attempts: 5

monitoring:
  log_level: "info"
  metrics_enabled: true
  alerting:
    email: "security@company.com"
    webhook: "https://hooks.slack.com/..."

database:
  type: "postgresql"
  host: "localhost"
  port: 5432
  name: "perfecxion_security"
  ssl_mode: "require"`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Verification */}
      <section id="verification" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
          Verification: Testing Your Setup
        </h2>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            Verify that your perfecXion installation is working correctly and all security features 
            are properly configured before deploying to production.
          </p>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Play className="h-6 w-6 text-green-600 mr-3" />
                Health Check
              </h3>
              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Run Health Check</h4>
                <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`# Check system health
curl -X GET http://localhost:8080/health

# Expected response:
{
  "status": "healthy",
  "version": "2.1.0",
  "services": {
    "database": "connected",
    "security_engine": "running",
    "monitoring": "active"
  }
}`}
                </pre>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Shield className="h-6 w-6 text-blue-600 mr-3" />
                Security Test
              </h3>
              <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Run Security Scan</h4>
                <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`# Test security features
curl -X POST http://localhost:8080/api/v1/scan \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"target": "test-system", "scan_type": "quick"}'`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link href="/learn/quick-start" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
          <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
          Quick Start Guide
        </Link>
        <Link href="/learn/configuration" className="flex items-center text-primary-600 dark:text-primary-400 hover:underline">
          Basic Configuration
          <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </div>
    </div>
  )
}