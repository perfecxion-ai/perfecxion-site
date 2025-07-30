import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Download, Package, Terminal, CheckCircle, Server, Shield, AlertTriangle, Cloud } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Installation Guide - perfecX Red-T Documentation',
    description: 'Complete installation guide for perfecX Red-T AI red team testing platform across different environments.',
}

export default function RedTInstallation() {
    return (
        <div className="bg-white dark:bg-background-dark min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
                    <Link href="/docs" className="hover:text-primary-600 dark:hover:text-primary-400">
                        Docs
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <Link href="/docs/perfecxion-red-t" className="hover:text-primary-600 dark:hover:text-primary-400">
                        perfecX Red-T
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-gray-900 dark:text-white">Installation</span>
                </nav>

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    Installation Guide
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                    Deploy perfecX Red-T in various environments for comprehensive AI red team testing.
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
                                        <span className="text-gray-700 dark:text-gray-300">4 CPU cores (x86_64)</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">8GB RAM</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">20GB storage</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">Docker 20.10+</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">Internet connectivity</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Production Requirements</h3>
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
                                        <span className="text-gray-700 dark:text-gray-300">GPU (NVIDIA, optional)</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">Load balancer ready</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Docker Installation */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Package className="h-6 w-6 mr-2" />
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
sudo curl -L "https://github.com/docker/compose/releases/download/v2.23.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Verify installation
docker --version
docker-compose --version

# Log out and back in for group changes to take effect`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">2. Download and Setup</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Create project directory
mkdir perfecx-red-t && cd perfecx-red-t

# Download docker-compose configuration
curl -L https://releases.perfecxion.ai/red-t/docker-compose.yml -o docker-compose.yml

# Create environment file
cat > .env << EOF
# License Configuration
REDTEAM_LICENSE_KEY=your-license-key-here

# Database Configuration
POSTGRES_DB=redteam_db
POSTGRES_USER=redteam
POSTGRES_PASSWORD=secure-random-password

# Security Configuration
JWT_SECRET=your-jwt-secret-key
ENCRYPTION_KEY=your-32-character-encryption-key

# Application Configuration
REDTEAM_PORT=8080
REDTEAM_SSL_PORT=8443
REDTEAM_WORKERS=4

# Optional: AI Model Integration
OPENAI_API_KEY=your-openai-key
HUGGINGFACE_TOKEN=your-huggingface-token
EOF`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">3. Deploy Red-T</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Start all services
docker-compose up -d

# Verify services are running
docker-compose ps

# Check logs
docker-compose logs -f red-t

# Initialize database
docker-compose exec red-t red-t db migrate

# Create admin user
docker-compose exec red-t red-t user create-admin \\
  --username admin \\
  --email admin@yourcompany.com \\
  --password SecurePassword123!`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">4. Verify Installation</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Test web interface
curl -k https://localhost:8443/health

# Test API endpoint
curl -X POST https://localhost:8443/api/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"username":"admin","password":"SecurePassword123!"}'

# Run system diagnostics
docker-compose exec red-t red-t system diagnose`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Kubernetes Installation */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Cloud className="h-6 w-6 mr-2" />
                        Kubernetes Deployment
                    </h2>
                    
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">1. Helm Chart Installation</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Add perfecXion Helm repository
helm repo add perfecxion https://charts.perfecxion.ai
helm repo update

# Create namespace
kubectl create namespace red-t

# Create secrets
kubectl create secret generic red-t-secrets \\
  --from-literal=license-key=your-license-key \\
  --from-literal=jwt-secret=$(openssl rand -base64 32) \\
  --from-literal=encryption-key=$(openssl rand -base64 32) \\
  --from-literal=postgres-password=$(openssl rand -base64 32) \\
  -n red-t

# Install Red-T
helm install red-t perfecxion/red-t \\
  --namespace red-t \\
  --values values-production.yaml`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">2. Production Values Configuration</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# values-production.yaml
replicaCount: 3

image:
  repository: perfecxion/red-t
  tag: "latest"
  pullPolicy: IfNotPresent

resources:
  requests:
    memory: "2Gi"
    cpu: "1000m"
  limits:
    memory: "4Gi"
    cpu: "2000m"

autoscaling:
  enabled: true
  minReplicas: 3
  maxReplicas: 10
  targetCPUUtilizationPercentage: 70
  targetMemoryUtilizationPercentage: 80

service:
  type: LoadBalancer
  port: 80
  httpsPort: 443

ingress:
  enabled: true
  className: nginx
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-prod
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
  hosts:
    - host: red-t.yourcompany.com
      paths:
        - path: /
          pathType: Prefix
  tls:
    - secretName: red-t-tls
      hosts:
        - red-t.yourcompany.com

postgresql:
  enabled: true
  auth:
    existingSecret: red-t-secrets
    secretKeys:
      adminPasswordKey: postgres-password
  primary:
    persistence:
      enabled: true
      size: 20Gi
      storageClass: "fast-ssd"

redis:
  enabled: true
  auth:
    enabled: false
  master:
    persistence:
      enabled: true
      size: 5Gi

monitoring:
  enabled: true
  serviceMonitor:
    enabled: true
  grafana:
    enabled: true
    
securityContext:
  runAsNonRoot: true
  runAsUser: 1000
  fsGroup: 2000`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">3. Verify Kubernetes Deployment</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Check deployment status
kubectl get pods -n red-t

# Check services
kubectl get svc -n red-t

# View logs
kubectl logs -f deployment/red-t -n red-t

# Run database migration
kubectl exec -it deployment/red-t -n red-t -- red-t db migrate

# Create admin user
kubectl exec -it deployment/red-t -n red-t -- red-t user create-admin \\
  --username admin \\
  --email admin@yourcompany.com`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Standalone Installation */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Terminal className="h-6 w-6 mr-2" />
                        Standalone Installation
                    </h2>
                    
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
                        <div className="flex items-start space-x-3">
                            <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-1">
                                    Advanced Installation
                                </h3>
                                <p className="text-yellow-800 dark:text-yellow-200">
                                    Standalone installation requires manual configuration of dependencies and is recommended only for experienced system administrators.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">1. Install Dependencies</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Ubuntu/Debian
sudo apt-get update
sudo apt-get install -y \\
  python3.9 python3-pip python3-venv \\
  postgresql-14 postgresql-contrib \\
  redis-server \\
  nginx certbot python3-certbot-nginx \\
  build-essential libpq-dev

# CentOS/RHEL
sudo yum install -y \\
  python39 python39-pip python39-devel \\
  postgresql14-server postgresql14-contrib \\
  redis \\
  nginx certbot python3-certbot-nginx \\
  gcc gcc-c++ make libpq-devel

# Initialize PostgreSQL
sudo postgresql-setup --initdb
sudo systemctl enable postgresql
sudo systemctl start postgresql`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">2. Download and Install Red-T</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Create application user
sudo useradd -r -s /bin/false red-t
sudo mkdir -p /opt/perfecx-red-t
sudo chown red-t:red-t /opt/perfecx-red-t

# Download Red-T
wget https://releases.perfecxion.ai/red-t/latest/red-t-linux-amd64.tar.gz
tar -xzf red-t-linux-amd64.tar.gz
sudo mv red-t-linux-amd64/* /opt/perfecx-red-t/

# Install Python dependencies
cd /opt/perfecx-red-t
sudo -u red-t python3 -m venv venv
sudo -u red-t ./venv/bin/pip install -r requirements.txt

# Make binary executable
sudo chmod +x /opt/perfecx-red-t/bin/red-t`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">3. Configure Database</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Create database and user
sudo -u postgres psql << EOF
CREATE DATABASE redteam_db;
CREATE USER redteam WITH PASSWORD 'secure_password_here';
GRANT ALL PRIVILEGES ON DATABASE redteam_db TO redteam;
ALTER USER redteam CREATEDB;
\\q
EOF

# Configure Redis
sudo systemctl enable redis-server
sudo systemctl start redis-server

# Set Redis password (optional)
echo "requirepass your_redis_password" | sudo tee -a /etc/redis/redis.conf
sudo systemctl restart redis-server`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">4. Configuration File</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# /opt/perfecx-red-t/config/production.yaml
server:
  host: "0.0.0.0"
  port: 8080
  ssl_port: 8443
  workers: 4
  
security:
  license_key: "your-license-key"
  jwt_secret: "your-jwt-secret"
  encryption_key: "your-32-char-key"
  ssl_cert: "/etc/ssl/certs/red-t.crt"
  ssl_key: "/etc/ssl/private/red-t.key"
  
database:
  host: "localhost"
  port: 5432
  database: "redteam_db"
  username: "redteam"
  password: "secure_password_here"
  ssl_mode: "require"
  
redis:
  host: "localhost"
  port: 6379
  password: "your_redis_password"
  db: 0
  
logging:
  level: "INFO"
  file: "/var/log/red-t/red-t.log"
  max_size: "100MB"
  max_files: 10
  
ai_models:
  openai:
    api_key: "your-openai-key"
    enabled: true
  huggingface:
    token: "your-hf-token"
    enabled: true`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">5. Create System Service</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# /etc/systemd/system/red-t.service
[Unit]
Description=perfecX Red-T AI Security Testing Platform
After=network.target postgresql.service redis-server.service

[Service]
Type=exec
User=red-t
Group=red-t
ExecStart=/opt/perfecx-red-t/bin/red-t server --config /opt/perfecx-red-t/config/production.yaml
Restart=always
RestartSec=10
StandardOutput=journal
StandardError=journal
Environment=PYTHONPATH=/opt/perfecx-red-t
WorkingDirectory=/opt/perfecx-red-t

# Security settings
NoNewPrivileges=true
PrivateTmp=true
ProtectSystem=strict
ProtectHome=true
ReadWritePaths=/var/log/red-t /opt/perfecx-red-t/data

[Install]
WantedBy=multi-user.target`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">6. Start Services</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Create log directory
sudo mkdir -p /var/log/red-t
sudo chown red-t:red-t /var/log/red-t

# Run database migrations
sudo -u red-t /opt/perfecx-red-t/bin/red-t db migrate --config /opt/perfecx-red-t/config/production.yaml

# Enable and start service
sudo systemctl daemon-reload
sudo systemctl enable red-t
sudo systemctl start red-t

# Check service status
sudo systemctl status red-t

# View logs
sudo journalctl -u red-t -f`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SSL/TLS Configuration */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Shield className="h-6 w-6 mr-2" />
                        SSL/TLS Configuration
                    </h2>
                    
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Let's Encrypt (Recommended)</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Install certbot
sudo apt-get install certbot

# Generate certificate
sudo certbot certonly --standalone \\
  -d red-t.yourcompany.com \\
  --email admin@yourcompany.com \\
  --agree-tos \\
  --non-interactive

# Configure automatic renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet

# Update Red-T configuration
# ssl_cert: "/etc/letsencrypt/live/red-t.yourcompany.com/fullchain.pem"
# ssl_key: "/etc/letsencrypt/live/red-t.yourcompany.com/privkey.pem"`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Self-Signed Certificate (Development)</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Generate self-signed certificate
sudo mkdir -p /etc/ssl/red-t
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 \\
  -keyout /etc/ssl/red-t/red-t.key \\
  -out /etc/ssl/red-t/red-t.crt \\
  -subj "/C=US/ST=State/L=City/O=Organization/CN=red-t.yourcompany.com"

# Set permissions
sudo chmod 600 /etc/ssl/red-t/red-t.key
sudo chmod 644 /etc/ssl/red-t/red-t.crt
sudo chown red-t:red-t /etc/ssl/red-t/red-t.*`}</pre>
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
                                    <span className="text-gray-700 dark:text-gray-300">Configure firewall rules (ports 8080, 8443)</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Shield className="h-4 w-4 text-primary-600 dark:text-primary-400 mt-0.5" />
                                    <span className="text-gray-700 dark:text-gray-300">Enable audit logging for all user actions</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Shield className="h-4 w-4 text-primary-600 dark:text-primary-400 mt-0.5" />
                                    <span className="text-gray-700 dark:text-gray-300">Set up monitoring and alerting</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <Shield className="h-4 w-4 text-primary-600 dark:text-primary-400 mt-0.5" />
                                    <span className="text-gray-700 dark:text-gray-300">Configure backup procedures</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Initial Configuration</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Create admin user (if not done during installation)
red-t user create-admin \\
  --username admin \\
  --email admin@yourcompany.com \\
  --password SecurePassword123!

# Verify license
red-t license verify

# Run system diagnostics
red-t system diagnose

# Create first organization
red-t org create \\
  --name "Your Company" \\
  --admin admin@yourcompany.com

# Import default attack patterns
red-t patterns import --file /opt/perfecx-red-t/data/default-patterns.json

# Test system health
red-t health-check --verbose`}</pre>
                            </div>
                        </div>
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
                                License Key Issues
                            </h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mt-3">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Verify license key format
red-t license verify --key your-license-key

# Check license status
red-t license status

# Contact support if license is invalid
# Include system information in your support request
red-t system info > system-info.txt`}</pre>
                            </div>
                        </div>

                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                            <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                                Database Connection Errors
                            </h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mt-3">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Test database connection
red-t db test-connection

# Check PostgreSQL status
sudo systemctl status postgresql

# Verify database user permissions
sudo -u postgres psql -c "\\du redteam"

# Reset database (WARNING: destroys all data)
red-t db reset --force`}</pre>
                            </div>
                        </div>

                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                            <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                                SSL/TLS Certificate Problems
                            </h3>
                            <p className="text-yellow-800 dark:text-yellow-200 mb-3">
                                Common SSL certificate issues and solutions:
                            </p>
                            <ul className="list-disc list-inside space-y-1 text-yellow-700 dark:text-yellow-300">
                                <li>Verify certificate file permissions (600 for key, 644 for cert)</li>
                                <li>Check certificate expiration date</li>
                                <li>Ensure certificate matches the domain name</li>
                                <li>Test with openssl: <code>openssl x509 -in cert.crt -text -noout</code></li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                            <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                                Performance Issues
                            </h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mt-3">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Monitor system resources
red-t system monitor

# Check active connections
red-t system connections

# Analyze performance bottlenecks
red-t system analyze --verbose

# Optimize database
red-t db optimize

# Clear cache
red-t cache clear`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Next Steps
                    </h3>
                    <div className="flex flex-col space-y-3">
                        <Link href="/docs/perfecxion-red-t/quick-start" className="text-primary-600 dark:text-primary-400 hover:underline">
                            🚀 Follow the Quick Start Guide →
                        </Link>
                        <Link href="/docs/perfecxion-red-t/api" className="text-primary-600 dark:text-primary-400 hover:underline">
                            🔌 Explore the API Reference →
                        </Link>
                        <Link href="/docs/perfecxion-red-t/guides" className="text-primary-600 dark:text-primary-400 hover:underline">
                            📚 Advanced Configuration Guides →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}