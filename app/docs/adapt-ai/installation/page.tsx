import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Terminal, CheckCircle, AlertCircle, Server, Database, Package, GitBranch } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Installation - ADAPT-AI Documentation',
  description: 'Complete installation guide for ADAPT-AI including development setup, production deployment, and configuration',
}

export default function AdaptAIInstallationPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          Installation Guide
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Complete guide for installing and configuring ADAPT-AI in development and production environments.
        </p>
      </div>

      {/* Installation Methods */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Installation Methods
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <Package className="h-8 w-8 text-primary-600 dark:text-primary-400 mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Package Installation
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Quick installation via pip for immediate use
            </p>
            <div className="bg-gray-900 rounded-lg p-4">
              <code className="text-sm text-gray-300">pip install adapt-ai[full]</code>
            </div>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <GitBranch className="h-8 w-8 text-primary-600 dark:text-primary-400 mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Development Setup
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Clone repository for development and contributions
            </p>
            <div className="bg-gray-900 rounded-lg p-4">
              <code className="text-sm text-gray-300">git clone https://github.com/perfecxion-ai/adapt-ai.git</code>
            </div>
          </div>
        </div>
      </section>

      {/* Development Installation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Development Installation
        </h2>
        
        {/* Step 1: Clone Repository */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="flex-shrink-0 w-8 h-8 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center text-sm font-bold text-primary-600 dark:text-primary-400">1</span>
            Clone Repository
          </h3>
          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <pre className="text-sm text-gray-300 overflow-x-auto">
{`git clone https://github.com/perfecxion-ai/adapt-ai.git
cd adapt-ai`}
            </pre>
          </div>
        </div>

        {/* Step 2: Virtual Environment */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="flex-shrink-0 w-8 h-8 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center text-sm font-bold text-primary-600 dark:text-primary-400">2</span>
            Create Virtual Environment
          </h3>
          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <pre className="text-sm text-gray-300 overflow-x-auto">
{`# Create virtual environment
python -m venv venv

# Activate virtual environment
# Linux/macOS:
source venv/bin/activate

# Windows:
venv\\Scripts\\activate`}
            </pre>
          </div>
        </div>

        {/* Step 3: Install Dependencies */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="flex-shrink-0 w-8 h-8 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center text-sm font-bold text-primary-600 dark:text-primary-400">3</span>
            Install Dependencies
          </h3>
          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <pre className="text-sm text-gray-300 overflow-x-auto">
{`# Install all dependencies including development tools
pip install -r requirements-dev.txt

# Or install specific components:
pip install -r requirements.txt       # Core dependencies only
pip install -r requirements-ml.txt    # Machine learning components
pip install -r requirements-test.txt  # Testing dependencies`}
            </pre>
          </div>
        </div>

        {/* Step 4: Database Setup */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="flex-shrink-0 w-8 h-8 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center text-sm font-bold text-primary-600 dark:text-primary-400">4</span>
            Database Setup
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Start PostgreSQL and Redis services using Docker:
          </p>
          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <pre className="text-sm text-gray-300 overflow-x-auto">
{`# Start database services
make docker-up

# Or manually with docker-compose:
docker-compose up -d postgres redis

# Wait for services to be ready
sleep 30

# Initialize database schema
alembic upgrade head`}
            </pre>
          </div>
        </div>

        {/* Step 5: Environment Configuration */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="flex-shrink-0 w-8 h-8 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center text-sm font-bold text-primary-600 dark:text-primary-400">5</span>
            Configure Environment
          </h3>
          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <pre className="text-sm text-gray-300 overflow-x-auto">
{`# Copy environment template
cp .env.template .env

# Edit configuration (optional - defaults work for development)
nano .env`}
            </pre>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg p-4 mt-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5" />
              <div>
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  The default configuration works out of the box for development. You only need to modify the .env file for production deployment or custom configurations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Installation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Production Installation
        </h2>
        
        <div className="space-y-6">
          {/* Docker Installation */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Server className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              Docker Deployment
            </h3>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-sm text-gray-300 overflow-x-auto">
{`# Pull production image
docker pull perfecxion/adapt-ai:latest

# Run with environment variables
docker run -d \\
  --name adapt-ai \\
  -p 8000:8000 \\
  -e ADAPT_API_KEY="your-production-key" \\
  -e DATABASE_URL="postgresql://..." \\
  -e REDIS_URL="redis://..." \\
  perfecxion/adapt-ai:latest`}
              </pre>
            </div>
          </div>

          {/* Kubernetes Installation */}
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Database className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              Kubernetes Deployment
            </h3>
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-sm text-gray-300 overflow-x-auto">
{`# Apply Kubernetes manifests
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/secrets.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml

# Verify deployment
kubectl get pods -n adapt-ai
kubectl get svc -n adapt-ai`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration Reference */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Configuration Reference
        </h2>
        
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Environment Variables
          </h3>
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-gray-300">
{`# API Configuration
ADAPT_API_KEY=your-api-key-here
API_GATEWAY_PORT=8000
DISCOVERY_SERVICE_PORT=8001

# Database Configuration
DATABASE_URL=postgresql+asyncpg://postgres:password@localhost:5432/adapt_db
REDIS_URL=redis://localhost:6379

# Security Configuration
JWT_SECRET_KEY=your-secret-key-change-in-production
JWT_EXPIRATION_HOURS=24
ENABLE_CORS=true
CORS_ORIGINS=["http://localhost:3000"]

# ML System Configuration
ML_MODEL_PATH=./models
ML_TRAINING_DATA_PATH=./data/training
ML_ENABLE_GPU=false
ML_BATCH_SIZE=32

# Logging Configuration
LOG_LEVEL=INFO
LOG_FORMAT=json
ENABLE_METRICS=true

# Feature Flags
ENABLE_DISCOVERY=true
ENABLE_TESTING=true
ENABLE_ML_SYSTEM=true
ENABLE_WEBSOCKET=true

# Performance Configuration
MAX_CONCURRENT_WORKERS=10
REQUEST_TIMEOUT_SECONDS=300
CACHE_TTL_SECONDS=3600`}
            </pre>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          System Requirements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              Minimum Requirements
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                <span>Python 3.11 or higher</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                <span>8GB RAM</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                <span>5GB disk space</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                <span>PostgreSQL 14+</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                <span>Redis 6+</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              Recommended for Production
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                <span>16GB+ RAM</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                <span>4+ CPU cores</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                <span>50GB+ SSD storage</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                <span>NVIDIA GPU (for ML features)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                <span>Load balancer for HA</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Verification */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Verify Installation
        </h2>
        
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            After installation, verify everything is working correctly:
          </p>
          <div className="bg-gray-900 rounded-lg p-4">
            <pre className="text-sm text-gray-300 overflow-x-auto">
{`# Check ADAPT-AI version
python -c "import adapt_ai; print(adapt_ai.__version__)"

# Test API connection
adapt-ai test-connection

# Run health checks
curl http://localhost:8000/health
curl http://localhost:8001/health

# Run self-test suite
adapt-ai self-test --verbose

# Check service status
adapt-ai status`}
            </pre>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Next Steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/docs/adapt-ai/quick-start"
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-colors group"
          >
            <Terminal className="h-8 w-8 text-primary-600 dark:text-primary-400 mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 mb-2">
              Quick Start Guide
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Get up and running with your first security test
            </p>
          </Link>
          <Link
            href="/docs/adapt-ai/api"
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary-300 dark:hover:border-primary-600 transition-colors group"
          >
            <Package className="h-8 w-8 text-primary-600 dark:text-primary-400 mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 mb-2">
              API Reference
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Explore the complete API documentation
            </p>
          </Link>
        </div>
      </section>
    </>
  )
}