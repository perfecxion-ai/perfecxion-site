import type { Metadata } from 'next'
import Link from 'next/link'
import { Settings, Shield, Database, Cloud, GitBranch, Lock, Key, AlertCircle, CheckCircle, FileCode, Terminal, Globe, Cpu, Zap, Filter, Bell, BarChart3, Package, Server, Network } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Basic Configuration - AI Security Learning Center | perfecXion.ai',
  description: 'Learn essential configuration settings for AI security systems. Master initial setup, security policies, and optimization techniques.',
  keywords: 'AI security configuration, setup guide, security policies, system configuration, AI security settings',
}

export default function ConfigurationPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link href="/learn" className="hover:underline text-primary-600 dark:text-primary-400">Learn</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-700 dark:text-gray-300">Basic Configuration</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center">
          <Settings className="h-10 w-10 text-blue-600 mr-4" />
          Basic Configuration
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl">
          Learn essential configuration settings for AI security systems. Master initial setup, security policies, 
          and optimization techniques for robust AI deployments across development, staging, and production environments.
        </p>
      </div>

      {/* Configuration Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Configuration Framework</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg">
            <Server className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Infrastructure</h3>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
              <li>• Server and container configuration</li>
              <li>• Network security settings</li>
              <li>• Load balancing and scaling</li>
              <li>• Monitoring and logging setup</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-lg">
            <Shield className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Security</h3>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
              <li>• Authentication and authorization</li>
              <li>• Encryption and key management</li>
              <li>• Access controls and permissions</li>
              <li>• Security policy enforcement</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-lg">
            <Zap className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Performance</h3>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
              <li>• Resource allocation and limits</li>
              <li>• Caching and optimization</li>
              <li>• Performance monitoring</li>
              <li>• Auto-scaling configuration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Initial Setup */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Initial System Setup</h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <FileCode className="h-6 w-6 text-blue-600 mr-3" />
            Configuration File Structure
          </h3>
          
          <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg mb-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Recommended Directory Structure</h4>
            <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`ai-security-system/
├── config/
│   ├── base.yaml              # Base configuration
│   ├── development.yaml       # Development overrides
│   ├── staging.yaml          # Staging overrides
│   ├── production.yaml       # Production overrides
│   └── secrets/
│       ├── api-keys.yaml     # API keys (encrypted)
│       └── certificates/     # SSL certificates
├── policies/
│   ├── security.yaml         # Security policies
│   ├── validation.yaml       # Data validation rules
│   └── monitoring.yaml       # Monitoring configuration
├── docker/
│   ├── Dockerfile
│   └── docker-compose.yaml
└── scripts/
    ├── setup.sh              # Initial setup script
    └── deploy.sh             # Deployment script`}
            </pre>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Base Configuration Template</h4>
            <pre className="text-sm text-blue-800 dark:text-blue-200 overflow-x-auto">
{`# config/base.yaml
application:
  name: ai-security-system
  version: "1.0.0"
  environment: development
  debug: false

server:
  host: "0.0.0.0"
  port: 8080
  workers: 4
  timeout: 30
  max_request_size: "10MB"

security:
  jwt:
    algorithm: "HS256"
    expiration: 3600  # 1 hour
  rate_limiting:
    enabled: true
    requests_per_minute: 100
    burst_size: 20
  cors:
    enabled: true
    allowed_origins: []
    allowed_methods: ["GET", "POST", "PUT", "DELETE"]

ai_models:
  default_model: "gpt-3.5-turbo"
  max_tokens: 4096
  temperature: 0.7
  timeout: 30
  validation:
    input_max_length: 10000
    output_max_length: 5000

database:
  type: "postgresql"
  host: "localhost"
  port: 5432
  name: "ai_security"
  pool_size: 10
  ssl_mode: "require"

logging:
  level: "INFO"
  format: "json"
  file: "/var/log/ai-security.log"
  max_size: "100MB"
  backup_count: 5

monitoring:
  metrics:
    enabled: true
    port: 9090
  health_check:
    enabled: true
    path: "/health"
    timeout: 5
  
cache:
  type: "redis"
  host: "localhost"
  port: 6379
  ttl: 3600  # 1 hour
  max_memory: "1GB"`}
            </pre>
          </div>
        </div>
      </section>

      {/* Security Configuration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Security Configuration</h2>
        
        <div className="space-y-6">
          {/* Authentication Setup */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Key className="h-6 w-6 text-green-600 mr-3" />
              Authentication & Authorization
            </h3>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">JWT Configuration</h4>
              <pre className="text-sm text-green-800 dark:text-green-200 overflow-x-auto">
{`# config/security.yaml
authentication:
  jwt:
    secret_key: "\${JWT_SECRET_KEY}"  # From environment
    algorithm: "HS256"
    access_token_expire: 3600     # 1 hour
    refresh_token_expire: 604800  # 7 days
    issuer: "ai-security-system"
    audience: "api-users"
  
  oauth:
    enabled: true
    providers:
      google:
        client_id: "\${GOOGLE_CLIENT_ID}"
        client_secret: "\${GOOGLE_CLIENT_SECRET}"
        redirect_uri: "/auth/google/callback"
      
authorization:
  rbac:
    enabled: true
    default_role: "user"
    roles:
      admin:
        permissions:
          - "system:manage"
          - "users:manage"
          - "models:manage"
          - "security:configure"
      user:
        permissions:
          - "ai:query"
          - "data:validate"
          - "reports:view"
      readonly:
        permissions:
          - "reports:view"
          - "status:check"

# Python implementation
import jwt
import datetime
from functools import wraps
from flask import request, jsonify, current_app

class AuthManager:
    def __init__(self, app_config):
        self.secret_key = app_config['JWT_SECRET_KEY']
        self.algorithm = app_config.get('JWT_ALGORITHM', 'HS256')
        self.expiration = app_config.get('JWT_EXPIRATION', 3600)
    
    def generate_token(self, user_id, role='user'):
        """Generate JWT token for user"""
        payload = {
            'user_id': user_id,
            'role': role,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(seconds=self.expiration),
            'iat': datetime.datetime.utcnow(),
            'iss': 'ai-security-system'
        }
        
        token = jwt.encode(payload, self.secret_key, algorithm=self.algorithm)
        return token
    
    def verify_token(self, token):
        """Verify and decode JWT token"""
        try:
            payload = jwt.decode(token, self.secret_key, algorithms=[self.algorithm])
            return {'valid': True, 'payload': payload}
        except jwt.ExpiredSignatureError:
            return {'valid': False, 'error': 'Token expired'}
        except jwt.InvalidTokenError:
            return {'valid': False, 'error': 'Invalid token'}
    
    def require_auth(self, required_permission=None):
        """Decorator for protecting endpoints"""
        def decorator(f):
            @wraps(f)
            def decorated_function(*args, **kwargs):
                token = request.headers.get('Authorization')
                if not token or not token.startswith('Bearer '):
                    return jsonify({'error': 'Missing or invalid authorization header'}), 401
                
                token = token.split(' ')[1]
                verification = self.verify_token(token)
                
                if not verification['valid']:
                    return jsonify({'error': verification['error']}), 401
                
                # Check permissions if required
                if required_permission:
                    user_role = verification['payload'].get('role')
                    if not self.has_permission(user_role, required_permission):
                        return jsonify({'error': 'Insufficient permissions'}), 403
                
                request.user = verification['payload']
                return f(*args, **kwargs)
            return decorated_function
        return decorator`}
              </pre>
            </div>
          </div>

          {/* Encryption Configuration */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Lock className="h-6 w-6 text-purple-600 mr-3" />
              Encryption & Data Protection
            </h3>
            
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Encryption Configuration</h4>
              <pre className="text-sm text-purple-800 dark:text-purple-200 overflow-x-auto">
{`# Encryption settings
encryption:
  at_rest:
    algorithm: "AES-256-GCM"
    key_rotation_days: 90
    backup_encryption: true
  
  in_transit:
    tls_version: "1.3"
    cipher_suites:
      - "TLS_AES_256_GCM_SHA384"
      - "TLS_CHACHA20_POLY1305_SHA256"
    certificate_path: "/etc/ssl/certs/"
    private_key_path: "/etc/ssl/private/"
  
  api_keys:
    encryption_key: "\${API_KEY_ENCRYPTION_KEY}"
    storage: "encrypted_database"

# Python encryption utility
import os
import base64
from cryptography.fernet import Fernet
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC

class EncryptionManager:
    def __init__(self, master_key=None):
        if master_key:
            self.key = master_key.encode()
        else:
            self.key = os.environ.get('ENCRYPTION_KEY', '').encode()
        
        if not self.key:
            raise ValueError("Encryption key not provided")
        
        # Derive key using PBKDF2
        salt = b'stable_salt_for_consistency'  # In production, use dynamic salt
        kdf = PBKDF2HMAC(
            algorithm=hashes.SHA256(),
            length=32,
            salt=salt,
            iterations=100000,
        )
        key = base64.urlsafe_b64encode(kdf.derive(self.key))
        self.cipher_suite = Fernet(key)
    
    def encrypt_data(self, data: str) -> str:
        """Encrypt sensitive data"""
        encrypted_data = self.cipher_suite.encrypt(data.encode())
        return base64.urlsafe_b64encode(encrypted_data).decode()
    
    def decrypt_data(self, encrypted_data: str) -> str:
        """Decrypt sensitive data"""
        encrypted_bytes = base64.urlsafe_b64decode(encrypted_data.encode())
        decrypted_data = self.cipher_suite.decrypt(encrypted_bytes)
        return decrypted_data.decode()
    
    def encrypt_api_keys(self, api_keys: dict) -> dict:
        """Encrypt API keys for storage"""
        encrypted_keys = {}
        for service, key in api_keys.items():
            encrypted_keys[service] = self.encrypt_data(key)
        return encrypted_keys`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Configuration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Performance Optimization</h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Cpu className="h-6 w-6 text-orange-600 mr-3" />
            Resource Management
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Memory Configuration</h4>
              <pre className="text-sm text-orange-800 dark:text-orange-200 overflow-x-auto">
{`# Resource limits
resources:
  memory:
    max_heap_size: "2GB"
    model_cache_size: "1GB"
    request_buffer_size: "256MB"
  
  cpu:
    max_workers: 8
    worker_timeout: 30
    max_requests_per_worker: 1000
  
  connections:
    max_concurrent: 1000
    keepalive_timeout: 75
    connection_pool_size: 20

# Docker resource limits
version: '3.8'
services:
  ai-security:
    image: ai-security:latest
    deploy:
      resources:
        limits:
          cpus: '2.0'
          memory: 4G
        reservations:
          cpus: '1.0'
          memory: 2G`}
              </pre>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Caching Strategy</h4>
              <pre className="text-sm text-blue-800 dark:text-blue-200 overflow-x-auto">
{`# Caching configuration
cache:
  redis:
    host: "redis-cluster"
    port: 6379
    db: 0
    password: "\${REDIS_PASSWORD}"
    cluster_mode: true
    
  layers:
    model_responses:
      ttl: 3600  # 1 hour
      max_size: "500MB"
    
    validation_results:
      ttl: 1800  # 30 minutes
      max_size: "100MB"
    
    user_sessions:
      ttl: 86400  # 24 hours
      max_size: "50MB"`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Configuration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Monitoring & Logging</h2>
        
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <BarChart3 className="h-6 w-6 text-green-600 mr-3" />
              Comprehensive Monitoring Setup
            </h3>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Monitoring Configuration</h4>
              <pre className="text-sm text-green-800 dark:text-green-200 overflow-x-auto">
{`# monitoring.yaml
monitoring:
  prometheus:
    enabled: true
    port: 9090
    metrics_path: "/metrics"
    scrape_interval: "15s"
    
  logging:
    level: "INFO"
    format: "json"
    outputs:
      - type: "file"
        path: "/var/log/ai-security/app.log"
        rotation: "daily"
        retention: "30d"
      - type: "elasticsearch"
        hosts: ["elasticsearch:9200"]
        index: "ai-security-logs"
    
  alerts:
    slack:
      webhook_url: "\${SLACK_WEBHOOK_URL}"
      channel: "#ai-security-alerts"
    
    email:
      smtp_server: "smtp.company.com"
      from: "alerts@company.com"
      to: ["security-team@company.com"]
    
    rules:
      high_error_rate:
        condition: "error_rate > 0.05"
        duration: "5m"
        severity: "critical"
      
      high_response_time:
        condition: "response_time_p95 > 2000"
        duration: "10m"
        severity: "warning"
      
      model_failure:
        condition: "model_error_rate > 0.01"
        duration: "1m"
        severity: "critical"

# Python monitoring setup
import logging
import time
from prometheus_client import Counter, Histogram, Gauge, start_http_server
from functools import wraps

class MonitoringManager:
    def __init__(self):
        # Prometheus metrics
        self.request_count = Counter('requests_total', 'Total requests', ['method', 'endpoint', 'status'])
        self.request_duration = Histogram('request_duration_seconds', 'Request duration')
        self.active_connections = Gauge('active_connections', 'Active connections')
        self.model_response_time = Histogram('model_response_time_seconds', 'Model response time')
        
        # Setup logging
        self.setup_logging()
    
    def setup_logging(self):
        """Configure structured logging"""
        logging.basicConfig(
            level=logging.INFO,
            format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
            handlers=[
                logging.FileHandler('/var/log/ai-security.log'),
                logging.StreamHandler()
            ]
        )
        
        self.logger = logging.getLogger('ai-security')
    
    def monitor_endpoint(self, endpoint_name):
        """Decorator to monitor endpoint performance"""
        def decorator(f):
            @wraps(f)
            def decorated_function(*args, **kwargs):
                start_time = time.time()
                
                try:
                    result = f(*args, **kwargs)
                    status = 'success'
                    return result
                except Exception as e:
                    status = 'error'
                    self.logger.error(f"Endpoint {endpoint_name} failed: {str(e)}")
                    raise
                finally:
                    duration = time.time() - start_time
                    self.request_duration.observe(duration)
                    self.request_count.labels(
                        method='POST',
                        endpoint=endpoint_name,
                        status=status
                    ).inc()
                    
            return decorated_function
        return decorator`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Environment-Specific Configurations */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Environment-Specific Settings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">Development</h3>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-2">
              <li>• Debug mode enabled</li>
              <li>• Detailed error messages</li>
              <li>• Hot reloading active</li>
              <li>• Mock external services</li>
              <li>• Relaxed security for testing</li>
            </ul>
            <div className="mt-4 bg-green-100 dark:bg-green-900/40 p-3 rounded">
              <pre className="text-xs text-green-800 dark:text-green-200">
{`# development.yaml
debug: true
log_level: DEBUG
security:
  rate_limiting:
    enabled: false
database:
  name: "ai_security_dev"`}
              </pre>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-4">Staging</h3>
            <ul className="text-yellow-800 dark:text-yellow-200 text-sm space-y-2">
              <li>• Production-like settings</li>
              <li>• Full security enabled</li>
              <li>• Performance testing</li>
              <li>• Load testing ready</li>
              <li>• Integration testing</li>
            </ul>
            <div className="mt-4 bg-yellow-100 dark:bg-yellow-900/40 p-3 rounded">
              <pre className="text-xs text-yellow-800 dark:text-yellow-200">
{`# staging.yaml
debug: false
log_level: INFO
security:
  rate_limiting:
    enabled: true
database:
  name: "ai_security_staging"`}
              </pre>
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-4">Production</h3>
            <ul className="text-red-800 dark:text-red-200 text-sm space-y-2">
              <li>• Maximum security settings</li>
              <li>• Error logging only</li>
              <li>• Performance optimized</li>
              <li>• High availability setup</li>
              <li>• Disaster recovery ready</li>
            </ul>
            <div className="mt-4 bg-red-100 dark:bg-red-900/40 p-3 rounded">
              <pre className="text-xs text-red-800 dark:text-red-200">
{`# production.yaml
debug: false
log_level: ERROR
security:
  rate_limiting:
    requests_per_minute: 60
database:
  name: "ai_security_prod"
  ssl_mode: "require"`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Configuration Management */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Configuration Management</h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <GitBranch className="h-6 w-6 text-purple-600 mr-3" />
            Version Control & Deployment
          </h3>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Configuration Management Script</h4>
            <pre className="text-sm text-purple-800 dark:text-purple-200 overflow-x-auto">
{`#!/bin/bash
# setup.sh - Configuration management script

CONFIG_DIR="/opt/ai-security/config"
ENVIRONMENT=\${1:-development}

echo "Setting up AI Security System for \${ENVIRONMENT} environment..."

# Create directory structure
mkdir -p \${CONFIG_DIR}/{secrets,policies,logs}
mkdir -p /var/log/ai-security

# Set proper permissions
chmod 700 \${CONFIG_DIR}/secrets
chown -R ai-security:ai-security \${CONFIG_DIR}

# Copy environment-specific configuration
cp config/base.yaml \${CONFIG_DIR}/
cp config/\${ENVIRONMENT}.yaml \${CONFIG_DIR}/environment.yaml

# Generate secrets if they don't exist
if [ ! -f \${CONFIG_DIR}/secrets/jwt-secret ]; then
    openssl rand -hex 32 > \${CONFIG_DIR}/secrets/jwt-secret
    chmod 600 \${CONFIG_DIR}/secrets/jwt-secret
fi

# Setup SSL certificates for production
if [ "\${ENVIRONMENT}" = "production" ]; then
    echo "Setting up SSL certificates..."
    certbot certonly --webroot -w /var/www/html -d yourdomain.com
    ln -sf /etc/letsencrypt/live/yourdomain.com/fullchain.pem \${CONFIG_DIR}/ssl/cert.pem
    ln -sf /etc/letsencrypt/live/yourdomain.com/privkey.pem \${CONFIG_DIR}/ssl/key.pem
fi

# Validate configuration
python -c "
import yaml
import sys

try:
    with open('\${CONFIG_DIR}/base.yaml', 'r') as f:
        base_config = yaml.safe_load(f)
    
    with open('\${CONFIG_DIR}/environment.yaml', 'r') as f:
        env_config = yaml.safe_load(f)
    
    # Merge configurations
    merged_config = {**base_config, **env_config}
    
    # Validate required keys
    required_keys = ['server', 'security', 'database', 'logging']
    for key in required_keys:
        if key not in merged_config:
            print(f'Missing required configuration key: {key}')
            sys.exit(1)
    
    print('Configuration validation successful')
    
except Exception as e:
    print(f'Configuration validation failed: {e}')
    sys.exit(1)
"

echo "Configuration setup completed successfully!"

# Start services
if [ "\${ENVIRONMENT}" = "production" ]; then
    systemctl enable ai-security
    systemctl start ai-security
else
    echo "Run 'docker-compose up' to start the development environment"
fi`}
            </pre>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Configuration Best Practices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">Security Best Practices</h3>
            <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Store secrets in environment variables or secret management systems</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Use encryption for configuration files containing sensitive data</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Implement proper file permissions (600 for secrets, 644 for config)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Regularly rotate API keys and certificates</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Use separate configurations for each environment</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">Operational Best Practices</h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Version control all configuration files (except secrets)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Implement configuration validation and testing</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Document all configuration options and their purposes</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Monitor configuration changes and their impact</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Maintain backup copies of working configurations</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quick Setup Guide */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Setup Guide</h2>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full text-sm font-semibold mr-4 mt-0.5">1</div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-1">Download Configuration Templates</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">Get the base configuration files and customize for your environment.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full text-sm font-semibold mr-4 mt-0.5">2</div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-1">Set Environment Variables</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">Configure secrets, API keys, and environment-specific settings.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full text-sm font-semibold mr-4 mt-0.5">3</div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-1">Run Configuration Validation</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">Validate your configuration files before deployment.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full text-sm font-semibold mr-4 mt-0.5">4</div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-1">Deploy and Monitor</h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">Deploy your configured system and monitor for any issues.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/learn/installation"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          ← Installation Guide
        </Link>
        <Link
          href="/learn/first-scan"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          First Security Scan →
        </Link>
      </div>
    </div>
  )
}