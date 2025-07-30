import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Download, Package, Terminal, CheckCircle, Server, Shield, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Installation Guide - TorScan Documentation',
    description: 'Complete installation guide for TorScan dark web intelligence platform across different environments.',
}

export default function TorScanInstallation() {
    return (
        <div className="bg-white dark:bg-background-dark min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
                    <Link href="/docs" className="hover:text-primary-600 dark:hover:text-primary-400">
                        Docs
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <Link href="/docs/torscan" className="hover:text-primary-600 dark:hover:text-primary-400">
                        TorScan
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-gray-900 dark:text-white">Installation</span>
                </nav>

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    Installation Guide
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                    Deploy TorScan in various environments with our comprehensive installation guide.
                </p>

                {/* System Requirements */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        System Requirements
                    </h2>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Minimum Requirements</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">4 CPU cores</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">8GB RAM</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">50GB storage</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">Docker 20.10+</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">Docker Compose 1.29+</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Recommended for Production</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">8+ CPU cores</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">16GB+ RAM</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">100GB+ SSD storage</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">Ubuntu 20.04+ or RHEL 8+</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">Dedicated network connection</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Docker Installation */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Docker Installation (Recommended)
                    </h2>
                    
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">1. Prerequisites</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Install Docker (Ubuntu/Debian)
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Verify installation
docker --version
docker-compose --version`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">2. Clone and Configure</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Clone the repository
git clone https://github.com/perfecxion-ai/TorScan.git
cd TorScan

# Create environment configuration
cp .env.example .env

# Generate secure passwords
openssl rand -base64 32  # Use for SECRET_KEY
openssl rand -base64 32  # Use for MONGODB_PASSWORD
openssl rand -base64 32  # Use for ELASTICSEARCH_PASSWORD`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">3. Configure Environment</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-2">Edit the <code>.env</code> file with your secure values:</p>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Security Settings
SECRET_KEY=your-generated-secret-key
FLASK_DEBUG=False
FLASK_ENV=production

# Database Configuration
MONGODB_USERNAME=torscan
MONGODB_PASSWORD=your-secure-password
MONGODB_DATABASE=torscan_db

# Elasticsearch Configuration
ELASTICSEARCH_USERNAME=elastic
ELASTICSEARCH_PASSWORD=your-secure-password

# Tor Configuration
TOR_SOCKS_PORT=9050
TOR_CONTROL_PORT=9051
TOR_CONTROL_PASSWORD=your-control-password

# Redis Configuration
REDIS_PASSWORD=your-redis-password

# API Settings
API_RATE_LIMIT=100/hour
API_TIMEOUT=300

# Threat Intelligence (Optional)
MISP_URL=https://your-misp-instance.com
MISP_KEY=your-misp-api-key
OPENCTI_URL=https://your-opencti-instance.com
OPENCTI_TOKEN=your-opencti-token`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">4. Deploy TorScan</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Start all services
docker-compose up -d

# Verify services are running
docker-compose ps

# Check logs
docker-compose logs -f

# Initialize the database
docker-compose exec web python scripts/init_db.py

# Create admin user
docker-compose exec web python scripts/create_admin.py`}</pre>
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
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">1. Helm Chart Installation</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Add Helm repository
helm repo add torscan https://charts.torscan.io
helm repo update

# Create namespace
kubectl create namespace torscan

# Create secrets
kubectl create secret generic torscan-secrets \\
  --from-literal=secret-key=$(openssl rand -base64 32) \\
  --from-literal=mongodb-password=$(openssl rand -base64 32) \\
  --from-literal=elasticsearch-password=$(openssl rand -base64 32) \\
  -n torscan

# Install TorScan
helm install torscan torscan/torscan \\
  --namespace torscan \\
  --values values-production.yaml`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">2. Production Values Configuration</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# values-production.yaml
replicaCount:
  web: 3
  worker: 5
  scheduler: 1

resources:
  web:
    requests:
      memory: "2Gi"
      cpu: "1000m"
    limits:
      memory: "4Gi"
      cpu: "2000m"
  worker:
    requests:
      memory: "1Gi"
      cpu: "500m"
    limits:
      memory: "2Gi"
      cpu: "1000m"

persistence:
  enabled: true
  storageClass: "fast-ssd"
  size: "100Gi"

ingress:
  enabled: true
  className: nginx
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-prod
  hosts:
    - host: torscan.your-domain.com
      paths:
        - path: /
          pathType: Prefix
  tls:
    - secretName: torscan-tls
      hosts:
        - torscan.your-domain.com

autoscaling:
  enabled: true
  minReplicas: 3
  maxReplicas: 10
  targetCPUUtilizationPercentage: 70
  targetMemoryUtilizationPercentage: 80

monitoring:
  prometheus:
    enabled: true
  grafana:
    enabled: true`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Manual Installation */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Manual Installation
                    </h2>
                    
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
                        <div className="flex items-start space-x-3">
                            <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-1">
                                    Advanced Users Only
                                </h3>
                                <p className="text-yellow-800 dark:text-yellow-200">
                                    Manual installation requires extensive knowledge of system administration, networking, and security configurations.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">1. Install Dependencies</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# System packages
sudo apt-get update
sudo apt-get install -y \\
  python3.9 python3-pip python3-venv \\
  tor tor-geoipdb privoxy \\
  mongodb-org elasticsearch redis-server \\
  nginx certbot python3-certbot-nginx

# Python dependencies
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">2. Configure Tor</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# /etc/tor/torrc
SocksPort 9050
ControlPort 9051
HashedControlPassword your_hashed_password
CookieAuthentication 1
MaxCircuitDirtiness 60
CircuitBuildTimeout 30
NewCircuitPeriod 30

# Generate hashed password
tor --hash-password your_password

# Restart Tor
sudo systemctl restart tor`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">3. Configure Services</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# MongoDB
sudo systemctl start mongod
mongo admin --eval "db.createUser({
  user: 'torscan',
  pwd: 'your_password',
  roles: [{role: 'readWrite', db: 'torscan_db'}]
})"

# Elasticsearch
sudo systemctl start elasticsearch
curl -X PUT "localhost:9200/_security/user/torscan" \\
  -H "Content-Type: application/json" \\
  -d '{"password":"your_password","roles":["superuser"]}'

# Redis
sudo systemctl start redis-server
redis-cli CONFIG SET requirepass "your_password"`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Post-Installation */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Post-Installation Setup
                    </h2>
                    
                    <div className="space-y-6">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Security Hardening</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start space-x-2">
                                    <Shield className="h-4 w-4 text-primary-600 dark:text-primary-400 mt-0.5" />
                                    <span className="text-gray-700 dark:text-gray-300">Change all default passwords immediately</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Shield className="h-4 w-4 text-primary-600 dark:text-primary-400 mt-0.5" />
                                    <span className="text-gray-700 dark:text-gray-300">Enable firewall rules (allow only necessary ports)</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Shield className="h-4 w-4 text-primary-600 dark:text-primary-400 mt-0.5" />
                                    <span className="text-gray-700 dark:text-gray-300">Configure SSL/TLS certificates</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Shield className="h-4 w-4 text-primary-600 dark:text-primary-400 mt-0.5" />
                                    <span className="text-gray-700 dark:text-gray-300">Enable audit logging</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Shield className="h-4 w-4 text-primary-600 dark:text-primary-400 mt-0.5" />
                                    <span className="text-gray-700 dark:text-gray-300">Set up backup procedures</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Initial Configuration</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Create initial admin user
docker-compose exec web python scripts/create_admin.py \\
  --username admin \\
  --email admin@your-domain.com \\
  --password your-secure-password

# Import default patterns
docker-compose exec web python scripts/import_patterns.py \\
  --file config/default_patterns.json

# Test Tor connectivity
docker-compose exec web python scripts/test_tor.py

# Verify all services
docker-compose exec web python scripts/health_check.py`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Environment Variables Reference */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Environment Variables Reference
                    </h2>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th className="text-left py-2 font-semibold text-gray-900 dark:text-white">Variable</th>
                                    <th className="text-left py-2 font-semibold text-gray-900 dark:text-white">Description</th>
                                    <th className="text-left py-2 font-semibold text-gray-900 dark:text-white">Default</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 dark:text-gray-300">
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2 font-mono text-sm">SECRET_KEY</td>
                                    <td className="py-2">Flask secret key for sessions</td>
                                    <td className="py-2">Required</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2 font-mono text-sm">FLASK_ENV</td>
                                    <td className="py-2">Flask environment</td>
                                    <td className="py-2">production</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2 font-mono text-sm">MONGODB_URI</td>
                                    <td className="py-2">MongoDB connection string</td>
                                    <td className="py-2">mongodb://localhost:27017</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2 font-mono text-sm">ELASTICSEARCH_URL</td>
                                    <td className="py-2">Elasticsearch URL</td>
                                    <td className="py-2">http://localhost:9200</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2 font-mono text-sm">REDIS_URL</td>
                                    <td className="py-2">Redis connection URL</td>
                                    <td className="py-2">redis://localhost:6379</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2 font-mono text-sm">TOR_PROXY</td>
                                    <td className="py-2">Tor SOCKS proxy address</td>
                                    <td className="py-2">socks5://127.0.0.1:9050</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2 font-mono text-sm">MAX_WORKERS</td>
                                    <td className="py-2">Maximum concurrent crawl workers</td>
                                    <td className="py-2">10</td>
                                </tr>
                                <tr>
                                    <td className="py-2 font-mono text-sm">LOG_LEVEL</td>
                                    <td className="py-2">Logging level</td>
                                    <td className="py-2">INFO</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Troubleshooting */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Troubleshooting Installation
                    </h2>
                    
                    <div className="space-y-6">
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                            <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                                Docker Permission Errors
                            </h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mt-3">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Add user to docker group
sudo usermod -aG docker $USER

# Log out and back in, then verify
docker run hello-world`}</pre>
                            </div>
                        </div>

                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                            <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                                Port Conflicts
                            </h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mt-3">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Check ports in use
sudo netstat -tlnp | grep -E '5000|9200|27017|6379'

# Modify docker-compose.yml to use different ports
# Example: Change 5000:5000 to 5001:5000`}</pre>
                            </div>
                        </div>

                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                            <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                                Memory Issues
                            </h3>
                            <p className="text-yellow-800 dark:text-yellow-200 mb-3">
                                If containers are being killed due to memory limits:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-yellow-700 dark:text-yellow-300">
                                <li>Increase Docker memory allocation</li>
                                <li>Reduce worker count in configuration</li>
                                <li>Enable swap memory on host</li>
                                <li>Use resource limits in docker-compose.yml</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Next Steps
                    </h3>
                    <div className="flex flex-col space-y-3">
                        <Link href="/docs/torscan/quick-start" className="text-primary-600 dark:text-primary-400 hover:underline">
                            Follow the Quick Start Guide →
                        </Link>
                        <Link href="/docs/torscan/api" className="text-primary-600 dark:text-primary-400 hover:underline">
                            Explore the API Reference →
                        </Link>
                        <Link href="/docs/torscan/guides" className="text-primary-600 dark:text-primary-400 hover:underline">
                            Read Configuration Guides →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}