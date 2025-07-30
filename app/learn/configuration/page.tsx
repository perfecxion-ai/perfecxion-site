'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Settings, Shield, Database, Cloud, GitBranch, Lock, Key, AlertCircle, CheckCircle2, FileCode, Terminal, Globe, Cpu, Zap, Filter, Bell, BarChart3, Package } from 'lucide-react'

export default function ConfigurationPage() {
  const [activeTab, setActiveTab] = useState('security')
  const [selectedConfig, setSelectedConfig] = useState('basic')
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:50px_50px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              Basic Configuration
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Master the configuration of perfecXion AI Security Platform for optimal protection
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Settings className="h-5 w-5" />
                <span>Comprehensive Setup</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="h-5 w-5" />
                <span>Security First</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Zap className="h-5 w-5" />
                <span>Performance Tuned</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {[
              { id: 'security', label: 'Security Config', icon: Shield },
              { id: 'models', label: 'Model Settings', icon: Cpu },
              { id: 'monitoring', label: 'Monitoring', icon: BarChart3 },
              { id: 'integration', label: 'Integrations', icon: Package },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 pb-4 border-b-2 whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Security Configuration */}
        {activeTab === 'security' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Security Configuration
              </h2>

              <div className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                        Security First Approach
                      </h3>
                      <p className="text-blue-800 dark:text-blue-200">
                        perfecXion uses a layered security model. Start with these essential configurations to establish a strong security baseline.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Authentication & Authorization
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# config/security.yaml
authentication:
  # API Key Configuration
  api_keys:
    enabled: true
    header_name: "X-API-Key"
    rotation_period: 90  # days
    complexity_requirements:
      min_length: 32
      require_alphanumeric: true
      
  # OAuth2 Configuration
  oauth2:
    enabled: true
    providers:
      - name: "azure_ad"
        client_id: "${process.env.AZURE_CLIENT_ID}"
        client_secret: "${process.env.AZURE_CLIENT_SECRET}"
        tenant_id: "${process.env.AZURE_TENANT_ID}"
        scopes: ["api.read", "api.write"]
        
  # JWT Configuration
  jwt:
    algorithm: "RS256"
    expiration: 3600  # seconds
    refresh_enabled: true
    refresh_expiration: 86400  # 24 hours
    
authorization:
  # Role-Based Access Control
  rbac:
    enabled: true
    default_role: "viewer"
    roles:
      - name: "admin"
        permissions: ["*"]
      - name: "operator"
        permissions: ["scan:*", "report:read", "config:read"]
      - name: "viewer"
        permissions: ["report:read", "scan:status"]
        
  # IP Allowlisting
  ip_filtering:
    enabled: true
    mode: "allowlist"  # or "blocklist"
    rules:
      - cidr: "10.0.0.0/8"
        description: "Internal network"
      - cidr: "192.168.1.0/24"
        description: "Office network"`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Encryption Settings
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Encryption configuration
encryption:
  # Data at Rest
  at_rest:
    enabled: true
    algorithm: "AES-256-GCM"
    key_management:
      provider: "aws_kms"  # or "azure_keyvault", "hashicorp_vault"
      key_id: "${process.env.KMS_KEY_ID}"
      rotation_enabled: true
      rotation_period: 365  # days
      
  # Data in Transit
  in_transit:
    tls:
      min_version: "1.2"
      max_version: "1.3"
      cipher_suites:
        - "TLS_AES_256_GCM_SHA384"
        - "TLS_CHACHA20_POLY1305_SHA256"
        - "TLS_AES_128_GCM_SHA256"
      certificate:
        path: "/etc/ssl/certs/server.crt"
        key_path: "/etc/ssl/private/server.key"
        ca_path: "/etc/ssl/certs/ca-bundle.crt"
        
  # Field-Level Encryption
  field_level:
    enabled: true
    fields:
      - name: "api_keys"
        algorithm: "AES-256-GCM"
      - name: "model_weights"
        algorithm: "AES-256-GCM"
      - name: "sensitive_prompts"
        algorithm: "AES-256-GCM"`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Input Validation & Sanitization
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Input validation rules
validation:
  # Global settings
  global:
    max_request_size: "10MB"
    max_prompt_length: 8192
    max_batch_size: 100
    encoding: "utf-8"
    
  # Prompt validation
  prompts:
    # Injection detection
    injection_detection:
      enabled: true
      patterns:
        - pattern: "ignore.*previous.*instructions"
          action: "block"
          severity: "critical"
        - pattern: "system.*prompt"
          action: "flag"
          severity: "high"
        - pattern: "\\\\x[0-9a-fA-F]{2}"
          action: "sanitize"
          severity: "medium"
          
    # Content filtering
    content_filter:
      enabled: true
      categories:
        - name: "pii"
          patterns: ["ssn", "credit_card", "email"]
          action: "redact"
        - name: "secrets"
          patterns: ["api_key", "password", "token"]
          action: "block"
          
  # File upload validation
  file_uploads:
    allowed_types: ["txt", "json", "csv", "jsonl"]
    max_size: "100MB"
    virus_scan: true
    content_validation: true`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Rate Limiting & DDoS Protection
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Rate limiting configuration
rate_limiting:
  # API rate limits
  api:
    enabled: true
    strategy: "sliding_window"  # or "fixed_window", "token_bucket"
    default_limits:
      - rate: 1000
        period: "hour"
      - rate: 100
        period: "minute"
        
    # Per-endpoint limits
    endpoints:
      "/v1/scan":
        limits:
          - rate: 10
            period: "minute"
      "/v1/analyze":
        limits:
          - rate: 100
            period: "minute"
            
    # User-specific limits
    user_tiers:
      free:
        - rate: 100
          period: "hour"
      premium:
        - rate: 10000
          period: "hour"
      enterprise:
        - rate: 100000
          period: "hour"
          
  # DDoS protection
  ddos_protection:
    enabled: true
    provider: "cloudflare"  # or "aws_shield", "azure_ddos"
    thresholds:
      requests_per_second: 10000
      concurrent_connections: 5000
      
  # Circuit breaker
  circuit_breaker:
    enabled: true
    failure_threshold: 5
    timeout: 30  # seconds
    half_open_requests: 3`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Security Headers & CORS
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                    HTTP Security Headers
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Security headers configuration
security_headers:
  # Strict Transport Security
  strict_transport_security:
    enabled: true
    max_age: 31536000  # 1 year
    include_subdomains: true
    preload: true
    
  # Content Security Policy
  content_security_policy:
    enabled: true
    directives:
      default_src: ["'self'"]
      script_src: ["'self'", "'unsafe-inline'", "https://cdn.perfecxion.ai"]
      style_src: ["'self'", "'unsafe-inline'"]
      img_src: ["'self'", "data:", "https:"]
      connect_src: ["'self'", "https://api.perfecxion.ai"]
      
  # Additional headers
  headers:
    X-Frame-Options: "DENY"
    X-Content-Type-Options: "nosniff"
    X-XSS-Protection: "1; mode=block"
    Referrer-Policy: "strict-origin-when-cross-origin"
    Permissions-Policy: "geolocation=(), microphone=(), camera=()"
    
# CORS configuration
cors:
  enabled: true
  allowed_origins:
    - "https://dashboard.perfecxion.ai"
    - "https://app.yourdomain.com"
  allowed_methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
  allowed_headers: ["Authorization", "Content-Type", "X-API-Key"]
  exposed_headers: ["X-Request-ID", "X-Rate-Limit-Remaining"]
  max_age: 86400  # 24 hours
  credentials: true`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Model Settings */}
        {activeTab === 'models' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                AI Model Configuration
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Model Registry
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Model registry configuration
models:
  # Model storage
  registry:
    type: "s3"  # or "azure_blob", "gcs", "local"
    bucket: "perfecxion-models"
    region: "us-east-1"
    encryption: true
    versioning: true
    
  # Registered models
  catalog:
    - name: "threat-detector-v2"
      type: "classification"
      framework: "pytorch"
      version: "2.1.0"
      path: "models/threat-detector/v2/"
      config:
        input_shape: [1, 512]
        output_classes: 10
        threshold: 0.85
        
    - name: "prompt-analyzer-v1"
      type: "transformer"
      framework: "huggingface"
      version: "1.3.0"
      path: "models/prompt-analyzer/v1/"
      config:
        model_name: "perfecxion/prompt-guard"
        max_length: 2048
        temperature: 0.2
        
    - name: "anomaly-detector-v3"
      type: "autoencoder"
      framework: "tensorflow"
      version: "3.0.0"
      path: "models/anomaly-detector/v3/"
      config:
        latent_dim: 128
        reconstruction_threshold: 0.95`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Model Security Settings
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Model security configuration
model_security:
  # Access control
  access_control:
    enabled: true
    default_permission: "deny"
    permissions:
      - model: "threat-detector-v2"
        roles: ["admin", "operator", "scanner"]
        rate_limit: 1000  # requests per hour
      - model: "prompt-analyzer-v1"
        roles: ["admin", "operator"]
        rate_limit: 5000
        
  # Model isolation
  isolation:
    enabled: true
    strategy: "container"  # or "process", "vm"
    resources:
      cpu_limit: "2"
      memory_limit: "4Gi"
      gpu_limit: "1"
      
  # Input/Output monitoring
  monitoring:
    log_inputs: true
    log_outputs: true
    redact_sensitive: true
    retention_days: 30
    
  # Adversarial defense
  adversarial_defense:
    enabled: true
    techniques:
      - type: "input_transformation"
        params:
          noise_level: 0.01
          jpeg_quality: 95
      - type: "ensemble_voting"
        params:
          models: 3
          agreement_threshold: 0.8
      - type: "gradient_masking"
        enabled: true`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    LLM Integration Settings
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# LLM provider configuration
llm_providers:
  # OpenAI Configuration
  openai:
    enabled: true
    api_key: "${process.env.OPENAI_API_KEY}"
    organization: "${process.env.OPENAI_ORG_ID}"
    models:
      - name: "gpt-4"
        max_tokens: 8192
        temperature: 0.3
        timeout: 60
      - name: "gpt-3.5-turbo"
        max_tokens: 4096
        temperature: 0.5
        timeout: 30
        
  # Anthropic Configuration
  anthropic:
    enabled: true
    api_key: "${process.env.ANTHROPIC_API_KEY}"
    models:
      - name: "claude-3-opus"
        max_tokens: 4096
        temperature: 0.2
        
  # Azure OpenAI
  azure_openai:
    enabled: true
    endpoint: "${process.env.AZURE_OPENAI_ENDPOINT}"
    api_key: "${process.env.AZURE_OPENAI_KEY}"
    deployment_name: "gpt-4-deployment"
    
  # Self-hosted models
  local:
    enabled: true
    endpoint: "http://localhost:8080"
    models:
      - name: "llama-2-70b"
        max_tokens: 4096
        gpu_layers: 40
        
# Prompt templates
prompt_templates:
  security_analysis:
    system: |
      You are a security analyst. Analyze the following prompt for potential security risks.
      Focus on: injection attacks, data leakage, instruction manipulation.
    format: "json"
    
  threat_classification:
    system: |
      Classify the security threat level of the input.
      Categories: critical, high, medium, low, none.
    format: "structured"`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Model Performance Tuning
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Performance optimization
performance:
  # Model caching
  caching:
    enabled: true
    backend: "redis"
    ttl: 3600  # 1 hour
    max_size: "10GB"
    
  # Batch processing
  batching:
    enabled: true
    max_batch_size: 32
    max_wait_time: 100  # milliseconds
    
  # Model optimization
  optimization:
    quantization:
      enabled: true
      precision: "int8"  # or "fp16"
    pruning:
      enabled: false
      sparsity: 0.5
    compilation:
      enabled: true
      backend: "tensorrt"  # or "onnx", "tflite"
      
  # GPU configuration
  gpu:
    enabled: true
    device_ids: [0, 1]
    memory_fraction: 0.8
    allow_growth: true
    
  # Load balancing
  load_balancing:
    enabled: true
    strategy: "round_robin"  # or "least_connections", "weighted"
    health_check:
      interval: 30  # seconds
      timeout: 5
      threshold: 3`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Monitoring Configuration */}
        {activeTab === 'monitoring' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Monitoring & Observability
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Metrics Collection
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Metrics configuration
metrics:
  # Prometheus configuration
  prometheus:
    enabled: true
    port: 9090
    path: "/metrics"
    
    # Custom metrics
    custom_metrics:
      - name: "security_threats_detected"
        type: "counter"
        labels: ["severity", "type", "model"]
      - name: "model_inference_duration"
        type: "histogram"
        labels: ["model", "version"]
        buckets: [0.1, 0.5, 1, 2, 5, 10]
      - name: "api_request_rate"
        type: "gauge"
        labels: ["endpoint", "method"]
        
  # StatsD configuration
  statsd:
    enabled: true
    host: "localhost"
    port: 8125
    prefix: "perfecxion"
    
  # OpenTelemetry
  opentelemetry:
    enabled: true
    endpoint: "http://otel-collector:4317"
    service_name: "perfecxion-security"
    traces:
      enabled: true
      sampling_rate: 0.1
    metrics:
      enabled: true
      interval: 60  # seconds`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Logging Configuration
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Logging configuration
logging:
  # Log levels and formats
  level: "INFO"  # DEBUG, INFO, WARN, ERROR
  format: "json"  # or "text"
  
  # Output destinations
  outputs:
    - type: "file"
      path: "/var/log/perfecxion/app.log"
      rotation:
        max_size: "100MB"
        max_age: 30  # days
        max_backups: 10
        
    - type: "elasticsearch"
      hosts:
        - "http://elasticsearch:9200"
      index: "perfecxion-logs"
      
    - type: "cloudwatch"
      region: "us-east-1"
      log_group: "/aws/perfecxion"
      
  # Security event logging
  security_events:
    enabled: true
    include_request_body: false  # PII protection
    include_response_body: false
    events:
      - "authentication_failure"
      - "authorization_denied"
      - "threat_detected"
      - "rate_limit_exceeded"
      - "suspicious_activity"
      
  # Audit logging
  audit:
    enabled: true
    events:
      - "config_change"
      - "user_created"
      - "permission_changed"
      - "model_deployed"
      - "scan_initiated"`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Alerting Rules
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Alerting configuration
alerting:
  # Alert manager
  manager:
    type: "prometheus"  # or "pagerduty", "custom"
    endpoint: "http://alertmanager:9093"
    
  # Alert rules
  rules:
    - name: "critical_threat_detected"
      condition: "threat_severity == 'critical'"
      threshold: 1
      window: "1m"
      severity: "critical"
      channels: ["pagerduty", "slack", "email"]
      
    - name: "high_error_rate"
      condition: "error_rate > 0.05"
      threshold: 5
      window: "5m"
      severity: "high"
      channels: ["slack", "email"]
      
    - name: "model_latency_high"
      condition: "p99_latency > 1000"  # ms
      threshold: 3
      window: "5m"
      severity: "medium"
      channels: ["slack"]
      
    - name: "api_rate_limit_approaching"
      condition: "rate_limit_usage > 0.8"
      threshold: 1
      window: "1m"
      severity: "warning"
      channels: ["email"]
      
  # Notification channels
  channels:
    slack:
      webhook_url: "${process.env.SLACK_WEBHOOK}"
      channel: "#security-alerts"
      
    email:
      smtp_host: "smtp.gmail.com"
      smtp_port: 587
      from: "alerts@perfecxion.ai"
      to: ["security@company.com"]
      
    pagerduty:
      integration_key: "${process.env.PAGERDUTY_KEY}"
      
    webhook:
      url: "https://api.company.com/webhooks/security"
      headers:
        Authorization: "Bearer ${process.env.WEBHOOK_TOKEN}"`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Dashboard Configuration
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Dashboard configuration
dashboards:
  # Grafana integration
  grafana:
    enabled: true
    url: "http://grafana:3000"
    api_key: "${process.env.GRAFANA_API_KEY}"
    
    # Pre-built dashboards
    dashboards:
      - name: "Security Overview"
        uid: "security-overview"
        tags: ["security", "main"]
      - name: "Model Performance"
        uid: "model-performance"
        tags: ["ml", "performance"]
      - name: "API Analytics"
        uid: "api-analytics"
        tags: ["api", "usage"]
        
  # Real-time monitoring
  realtime:
    enabled: true
    websocket_port: 8080
    update_interval: 1000  # ms
    
    # Widgets
    widgets:
      - type: "threat_feed"
        position: "top-left"
        size: "large"
      - type: "api_traffic"
        position: "top-right"
        size: "medium"
      - type: "model_health"
        position: "bottom-left"
        size: "medium"
      - type: "security_score"
        position: "bottom-right"
        size: "small"`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Integration Configuration */}
        {activeTab === 'integration' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Integration Configuration
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    SIEM Integration
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# SIEM integration configuration
siem:
  # Splunk configuration
  splunk:
    enabled: true
    host: "splunk.company.com"
    port: 8089
    token: "${process.env.SPLUNK_HEC_TOKEN}"
    index: "perfecxion_security"
    source_type: "perfecxion:security"
    
    # Event mapping
    event_mapping:
      threat_detected:
        severity: "alert"
        category: "security.threat"
      authentication_failure:
        severity: "warning"
        category: "access.authentication"
        
  # Elastic SIEM
  elastic:
    enabled: true
    hosts:
      - "https://elastic.company.com:9200"
    api_key: "${process.env.ELASTIC_API_KEY}"
    index_pattern: "perfecxion-security-*"
    
  # QRadar
  qradar:
    enabled: false
    host: "qradar.company.com"
    port: 514
    protocol: "TCP"  # or "UDP"
    format: "LEEF"  # or "CEF"`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    CI/CD Integration
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# CI/CD pipeline integration
cicd:
  # GitHub Actions
  github:
    enabled: true
    app_id: "${process.env.GITHUB_APP_ID}"
    private_key: "${process.env.GITHUB_PRIVATE_KEY}"
    webhook_secret: "${process.env.GITHUB_WEBHOOK_SECRET}"
    
    # Automated scanning
    auto_scan:
      enabled: true
      triggers:
        - event: "pull_request"
          scan_type: "quick"
        - event: "push"
          branches: ["main", "develop"]
          scan_type: "comprehensive"
          
  # GitLab CI
  gitlab:
    enabled: true
    url: "https://gitlab.company.com"
    token: "${process.env.GITLAB_TOKEN}"
    
  # Jenkins
  jenkins:
    enabled: true
    url: "http://jenkins.company.com:8080"
    user: "${process.env.JENKINS_USER}"
    token: "${process.env.JENKINS_TOKEN}"
    
  # Container scanning
  container:
    registries:
      - type: "docker"
        url: "https://registry.company.com"
        username: "${process.env.DOCKER_USER}"
        password: "${process.env.DOCKER_PASS}"
      - type: "ecr"
        region: "us-east-1"
        
    scan_on_push: true
    block_vulnerable: true
    severity_threshold: "high"`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Ticketing System Integration
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Ticketing system integration
ticketing:
  # Jira configuration
  jira:
    enabled: true
    url: "https://company.atlassian.net"
    email: "${process.env.JIRA_EMAIL}"
    api_token: "${process.env.JIRA_TOKEN}"
    project_key: "SEC"
    
    # Issue creation rules
    auto_create:
      enabled: true
      rules:
        - severity: "critical"
          issue_type: "Bug"
          priority: "Highest"
          labels: ["security", "critical", "ai-security"]
        - severity: "high"
          issue_type: "Task"
          priority: "High"
          labels: ["security", "high-priority"]
          
    # Custom fields
    custom_fields:
      security_score: "customfield_10001"
      threat_type: "customfield_10002"
      affected_models: "customfield_10003"
      
  # ServiceNow
  servicenow:
    enabled: false
    instance: "company.service-now.com"
    username: "${process.env.SNOW_USER}"
    password: "${process.env.SNOW_PASS}"
    
  # PagerDuty
  pagerduty:
    enabled: true
    integration_key: "${process.env.PAGERDUTY_KEY}"
    escalation_policy: "security-team"
    
    # Incident creation
    incidents:
      critical_only: true
      auto_resolve: true
      dedup_key_pattern: "{threat_type}_{model}_{timestamp}"`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Cloud Provider Integration
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Cloud provider integration
cloud_providers:
  # AWS Integration
  aws:
    enabled: true
    region: "us-east-1"
    
    # IAM role
    role_arn: "arn:aws:iam::123456789012:role/perfecxion-security"
    
    # Services
    services:
      s3:
        scan_buckets: true
        encryption_check: true
      lambda:
        scan_functions: true
        runtime_protection: true
      sagemaker:
        model_scanning: true
        endpoint_monitoring: true
        
  # Azure Integration
  azure:
    enabled: true
    tenant_id: "${process.env.AZURE_TENANT_ID}"
    client_id: "${process.env.AZURE_CLIENT_ID}"
    client_secret: "${process.env.AZURE_CLIENT_SECRET}"
    
    # Services
    services:
      ml_studio:
        scan_models: true
        monitor_endpoints: true
      cognitive_services:
        api_protection: true
        
  # Google Cloud
  gcp:
    enabled: true
    project_id: "my-project"
    credentials_path: "/etc/gcp/credentials.json"
    
    # Services
    services:
      vertex_ai:
        model_scanning: true
        prediction_monitoring: true
      cloud_storage:
        bucket_scanning: true`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Webhook Configuration */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Webhook Configuration
              </h2>
              
              <div className="space-y-4">
                <button
                  onClick={() => toggleSection('webhook-events')}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Bell className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span className="font-medium text-gray-900 dark:text-white">Webhook Events</span>
                  </div>
                  <ArrowRight className={`h-5 w-5 text-gray-600 dark:text-gray-400 transition-transform ${
                    expandedSection === 'webhook-events' ? 'rotate-90' : ''
                  }`} />
                </button>
                {expandedSection === 'webhook-events' && (
                  <div className="mt-4 pl-12 space-y-4">
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-100">
{`# Webhook configuration
webhooks:
  # Global webhook settings
  global:
    retry_attempts: 3
    retry_delay: 1000  # ms
    timeout: 30000  # ms
    
  # Webhook endpoints
  endpoints:
    - url: "https://api.company.com/webhooks/security"
      secret: "${process.env.WEBHOOK_SECRET}"
      events:
        - "threat.detected"
        - "scan.completed"
        - "model.compromised"
      headers:
        X-Custom-Header: "value"
        
  # Event schemas
  events:
    "threat.detected":
      version: "1.0"
      schema:
        threat_id: "string"
        severity: "enum[critical,high,medium,low]"
        type: "string"
        timestamp: "iso8601"
        details: "object"`}
                      </pre>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => toggleSection('api-clients')}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Package className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <span className="font-medium text-gray-900 dark:text-white">API Client Libraries</span>
                  </div>
                  <ArrowRight className={`h-5 w-5 text-gray-600 dark:text-gray-400 transition-transform ${
                    expandedSection === 'api-clients' ? 'rotate-90' : ''
                  }`} />
                </button>
                {expandedSection === 'api-clients' && (
                  <div className="mt-4 pl-12 space-y-4">
                    <p className="text-gray-600 dark:text-gray-400">
                      Configure SDK settings for various programming languages:
                    </p>
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-100">
{`# SDK configuration
sdk:
  # Python SDK
  python:
    package_name: "perfecxion-security"
    pypi_url: "https://pypi.org/project/perfecxion-security/"
    
  # JavaScript/TypeScript SDK
  javascript:
    package_name: "@perfecxion/security-sdk"
    npm_url: "https://www.npmjs.com/package/@perfecxion/security-sdk"
    
  # Go SDK
  go:
    import_path: "github.com/perfecxion/security-sdk-go"
    
  # Java SDK
  java:
    group_id: "ai.perfecxion"
    artifact_id: "security-sdk"
    maven_url: "https://mvnrepository.com/artifact/ai.perfecxion/security-sdk"`}
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Best Practices */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Configuration Best Practices
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <Lock className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Security First
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Use environment variables for secrets</li>
                    <li>• Enable encryption for all sensitive data</li>
                    <li>• Implement least privilege access</li>
                    <li>• Regular security audits</li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <Zap className="h-8 w-8 text-yellow-600 dark:text-yellow-400 mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Performance Optimization
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Enable caching where appropriate</li>
                    <li>• Configure batch processing</li>
                    <li>• Set reasonable timeouts</li>
                    <li>• Monitor resource usage</li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <BarChart3 className="h-8 w-8 text-green-600 dark:text-green-400 mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Monitoring & Alerts
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Configure comprehensive logging</li>
                    <li>• Set up meaningful alerts</li>
                    <li>• Track key security metrics</li>
                    <li>• Regular review of dashboards</li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <GitBranch className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Version Control
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Track configuration changes</li>
                    <li>• Use configuration as code</li>
                    <li>• Implement review process</li>
                    <li>• Maintain change history</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Next Steps
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/learn/first-scan" className="block group">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg hover:shadow-lg transition-all">
                    <Target className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Run First Scan
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Test your configuration with a security scan.
                    </p>
                    <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                      Start scanning →
                    </span>
                  </div>
                </Link>

                <Link href="/learn/optimization" className="block group">
                  <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg hover:shadow-lg transition-all">
                    <Zap className="h-8 w-8 text-green-600 dark:text-green-400 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Performance Tuning
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Optimize your setup for maximum performance.
                    </p>
                    <span className="text-green-600 dark:text-green-400 font-medium group-hover:underline">
                      Learn optimization →
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}