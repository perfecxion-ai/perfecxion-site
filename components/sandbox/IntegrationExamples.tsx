'use client'

import { useState } from 'react'
import { Cloud, Server, GitBranch, Package, Workflow, Zap, CheckCircle, Copy, Check, Clock, Shield } from 'lucide-react'
// ResponsiveCodeBlock removed - using simple code display

interface Integration {
  id: string
  name: string
  icon: React.ReactNode
  description: string
  category: string
  difficulty: 'easy' | 'medium' | 'advanced'
  timeEstimate: string
  code: {
    setup: string
    implementation: string
    testing?: string
  }
}

const INTEGRATIONS: Integration[] = [
  {
    id: 'github-actions',
    name: 'GitHub Actions',
    icon: <GitBranch className="w-6 h-6" />,
    description: 'Automate security scans in your CI/CD pipeline',
    category: 'CI/CD',
    difficulty: 'easy',
    timeEstimate: '10 mins',
    code: {
      setup: `# .github/workflows/ai-security.yml
name: AI Security Scan

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  security-scan:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up Python
      uses: actions/setup-python@v4
      with:
        python-version: '3.9'
    
    - name: Install perfecXion
      run: pip install perfecxion
    
    - name: Run Security Scan
      env:
        PERFECXION_API_KEY: \${{ secrets.PERFECXION_API_KEY }}
      run: |
        perfecxion scan \\
          --model-path ./models/ \\
          --output-format json \\
          --fail-on-high`,
      implementation: `# scan.py - Custom scan script
import os
import sys
from perfecxion import Client

def scan_models():
    client = Client(api_key=os.environ['PERFECXION_API_KEY'])
    
    # Scan all models in the directory
    results = []
    for model_file in os.listdir('./models'):
        if model_file.endswith(('.pkl', '.h5', '.pt')):
            result = client.scan_model(
                model_path=f'./models/{model_file}',
                scan_type='comprehensive'
            )
            results.append(result)
    
    # Check for high-severity vulnerabilities
    high_severity_count = sum(
        len([v for v in r.vulnerabilities if v.severity == 'high'])
        for r in results
    )
    
    if high_severity_count > 0:
        print(f"❌ Found {high_severity_count} high-severity vulnerabilities")
        sys.exit(1)
    else:
        print("✅ All models passed security scan")
        
if __name__ == "__main__":
    scan_models()`,
      testing: `# Test the workflow locally
act -j security-scan --secret-file .env`
    }
  },
  {
    id: 'aws-sagemaker',
    name: 'AWS SageMaker',
    icon: <Cloud className="w-6 h-6" />,
    description: 'Integrate with SageMaker model deployment',
    category: 'Cloud ML',
    difficulty: 'medium',
    timeEstimate: '20 mins',
    code: {
      setup: `# requirements.txt
perfecxion>=1.0.0
boto3>=1.26.0
sagemaker>=2.0.0`,
      implementation: `import boto3
import sagemaker
from perfecxion import Client
from sagemaker.pytorch import PyTorchModel

class SecureModelDeployer:
    def __init__(self, perfecxion_api_key):
        self.perfecxion = Client(api_key=perfecxion_api_key)
        self.sagemaker_session = sagemaker.Session()
        self.role = sagemaker.get_execution_role()
    
    def deploy_with_security_check(self, model_data, endpoint_name):
        # Step 1: Security scan before deployment
        print("Running security scan...")
        scan_result = self.perfecxion.scan_model(
            model_url=model_data,
            scan_type='pre_deployment'
        )
        
        if scan_result.score < 80:
            raise ValueError(f"Model failed security check: {scan_result.score}/100")
        
        # Step 2: Deploy to SageMaker
        print("Deploying secure model...")
        pytorch_model = PyTorchModel(
            model_data=model_data,
            role=self.role,
            entry_point='inference.py',
            framework_version='1.12.0',
            py_version='py39'
        )
        
        predictor = pytorch_model.deploy(
            initial_instance_count=1,
            instance_type='ml.m5.large',
            endpoint_name=endpoint_name
        )
        
        # Step 3: Configure monitoring
        self.setup_security_monitoring(endpoint_name)
        
        return predictor
    
    def setup_security_monitoring(self, endpoint_name):
        # Configure CloudWatch alarms for security metrics
        cloudwatch = boto3.client('cloudwatch')
        
        cloudwatch.put_metric_alarm(
            AlarmName=f'{endpoint_name}-adversarial-detection',
            ComparisonOperator='GreaterThanThreshold',
            EvaluationPeriods=1,
            MetricName='AdversarialInputs',
            Namespace='PerfecXion/Security',
            Period=300,
            Statistic='Sum',
            Threshold=10.0,
            ActionsEnabled=True,
            AlarmDescription='Alert on potential adversarial attacks'
        )

# Usage example
deployer = SecureModelDeployer(perfecxion_api_key='YOUR_API_KEY')
predictor = deployer.deploy_with_security_check(
    model_data='s3://my-bucket/model.tar.gz',
    endpoint_name='secure-model-endpoint'
)`
    }
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    icon: <Server className="w-6 h-6" />,
    description: 'Deploy secure AI models on Kubernetes',
    category: 'Container Orchestration',
    difficulty: 'advanced',
    timeEstimate: '30 mins',
    code: {
      setup: `# namespace.yaml
apiVersion: v1
kind: Namespace
metadata:
  name: ai-models

---
# secret.yaml
apiVersion: v1
kind: Secret
metadata:
  name: perfecxion-api-key
  namespace: ai-models
type: Opaque
data:
  api-key: <base64-encoded-api-key>`,
      implementation: `# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: secure-ai-model
  namespace: ai-models
spec:
  replicas: 3
  selector:
    matchLabels:
      app: secure-ai-model
  template:
    metadata:
      labels:
        app: secure-ai-model
    spec:
      initContainers:
      - name: security-scan
        image: perfecxion/scanner:latest
        env:
        - name: PERFECXION_API_KEY
          valueFrom:
            secretKeyRef:
              name: perfecxion-api-key
              key: api-key
        - name: MODEL_PATH
          value: "/models/model.pkl"
        volumeMounts:
        - name: model-storage
          mountPath: /models
        command: ["/bin/sh", "-c"]
        args:
        - |
          perfecxion scan --model-path $MODEL_PATH --fail-on-high
          if [ $? -eq 0 ]; then
            echo "Security scan passed"
          else
            echo "Security scan failed"
            exit 1
          fi
      
      containers:
      - name: model-server
        image: your-registry/model-server:latest
        ports:
        - containerPort: 8080
        env:
        - name: PERFECXION_API_KEY
          valueFrom:
            secretKeyRef:
              name: perfecxion-api-key
              key: api-key
        livenessProbe:
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10
        volumeMounts:
        - name: model-storage
          mountPath: /models
      
      volumes:
      - name: model-storage
        persistentVolumeClaim:
          claimName: model-pvc

---
# service.yaml
apiVersion: v1
kind: Service
metadata:
  name: secure-ai-model-service
  namespace: ai-models
spec:
  selector:
    app: secure-ai-model
  ports:
  - port: 80
    targetPort: 8080
  type: LoadBalancer

---
# cronjob.yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: security-scan-job
  namespace: ai-models
spec:
  schedule: "0 2 * * *" # Daily at 2 AM
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: scanner
            image: perfecxion/scanner:latest
            env:
            - name: PERFECXION_API_KEY
              valueFrom:
                secretKeyRef:
                  name: perfecxion-api-key
                  key: api-key
            command:
            - /bin/sh
            - -c
            - |
              # Scan all deployed models
              kubectl get pods -n ai-models -l app=secure-ai-model -o json | \\
              jq -r '.items[].metadata.name' | \\
              xargs -I {} kubectl exec {} -n ai-models -- perfecxion scan --model-path /models/
          restartPolicy: OnFailure`
    }
  },
  {
    id: 'mlflow',
    name: 'MLflow',
    icon: <Workflow className="w-6 h-6" />,
    description: 'Add security scanning to MLflow pipelines',
    category: 'MLOps',
    difficulty: 'medium',
    timeEstimate: '15 mins',
    code: {
      setup: `# Install dependencies
pip install mlflow perfecxion

# Set environment variables
export MLFLOW_TRACKING_URI="http://localhost:5000"
export PERFECXION_API_KEY="your-api-key"`,
      implementation: `import mlflow
import mlflow.pytorch
from perfecxion import Client
import torch

class SecureMLflowPipeline:
    def __init__(self):
        self.perfecxion = Client()
        mlflow.set_tracking_uri(os.environ['MLFLOW_TRACKING_URI'])
    
    def train_and_validate_model(self, train_data, test_data):
        with mlflow.start_run() as run:
            # Train model
            model = self.train_model(train_data)
            
            # Log model parameters and metrics
            mlflow.log_params(model.get_params())
            test_score = model.score(test_data)
            mlflow.log_metric("test_score", test_score)
            
            # Save model temporarily for security scan
            model_path = "temp_model.pt"
            torch.save(model, model_path)
            
            # Run security scan
            scan_result = self.perfecxion.scan_model(
                model_path=model_path,
                scan_type='comprehensive'
            )
            
            # Log security metrics
            mlflow.log_metric("security_score", scan_result.score)
            mlflow.log_metric("vulnerabilities_count", len(scan_result.vulnerabilities))
            
            # Log vulnerabilities as artifacts
            with open("security_report.json", "w") as f:
                f.write(scan_result.to_json())
            mlflow.log_artifact("security_report.json")
            
            # Only register model if it passes security checks
            if scan_result.score >= 80:
                mlflow.pytorch.log_model(
                    model, 
                    "model",
                    registered_model_name="secure_model"
                )
                mlflow.set_tag("security_status", "passed")
            else:
                mlflow.set_tag("security_status", "failed")
                raise ValueError(f"Model failed security check: {scan_result.score}/100")
            
            return model, scan_result
    
    def deploy_secure_model(self, model_name, stage="Production"):
        # Get latest model version
        client = mlflow.tracking.MlflowClient()
        model_version = client.get_latest_versions(
            model_name, 
            stages=[stage]
        )[0]
        
        # Verify security status before deployment
        run = client.get_run(model_version.run_id)
        security_status = run.data.tags.get("security_status")
        
        if security_status != "passed":
            raise ValueError("Cannot deploy model that failed security checks")
        
        # Deploy model
        model_uri = f"models:/{model_name}/{model_version.version}"
        return mlflow.pyfunc.load_model(model_uri)

# Usage
pipeline = SecureMLflowPipeline()
model, security_report = pipeline.train_and_validate_model(X_train, X_test)
print(f"Model Security Score: {security_report.score}/100")`
    }
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    icon: <Zap className="w-6 h-6" />,
    description: 'Build secure AI API endpoints',
    category: 'API Framework',
    difficulty: 'easy',
    timeEstimate: '15 mins',
    code: {
      setup: `# requirements.txt
fastapi>=0.100.0
uvicorn>=0.23.0
perfecxion>=1.0.0
python-multipart>=0.0.6`,
      implementation: `from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from perfecxion import Client
import tempfile
import os

app = FastAPI(title="Secure AI Model API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize perfecXion client
perfecxion_client = Client(api_key=os.environ['PERFECXION_API_KEY'])

# Security middleware
@app.middleware("http")
async def security_headers(request, call_next):
    response = await call_next(request)
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["X-XSS-Protection"] = "1; mode=block"
    return response

@app.post("/scan/upload")
async def scan_uploaded_model(file: UploadFile = File(...)):
    """Upload and scan a model file for security vulnerabilities"""
    
    # Validate file type
    allowed_extensions = ['.pkl', '.h5', '.pt', '.onnx', '.pb']
    file_ext = os.path.splitext(file.filename)[1]
    if file_ext not in allowed_extensions:
        raise HTTPException(
            status_code=400, 
            detail=f"Invalid file type. Allowed: {allowed_extensions}"
        )
    
    # Save uploaded file temporarily
    with tempfile.NamedTemporaryFile(delete=False, suffix=file_ext) as tmp_file:
        content = await file.read()
        tmp_file.write(content)
        tmp_file_path = tmp_file.name
    
    try:
        # Scan the model
        scan_result = perfecxion_client.scan_model(
            model_path=tmp_file_path,
            scan_type='comprehensive'
        )
        
        # Prepare response
        response = {
            "filename": file.filename,
            "security_score": scan_result.score,
            "status": "secure" if scan_result.score >= 80 else "vulnerable",
            "vulnerabilities": [
                {
                    "type": v.type,
                    "severity": v.severity,
                    "description": v.description,
                    "remediation": v.remediation
                }
                for v in scan_result.vulnerabilities
            ],
            "scan_time": scan_result.scan_time,
            "recommendations": scan_result.recommendations
        }
        
        return response
        
    finally:
        # Clean up temporary file
        os.unlink(tmp_file_path)

@app.post("/scan/url")
async def scan_model_from_url(model_url: str):
    """Scan a model from a URL"""
    try:
        scan_result = perfecxion_client.scan_model(
            model_url=model_url,
            scan_type='comprehensive'
        )
        
        return {
            "model_url": model_url,
            "security_score": scan_result.score,
            "vulnerabilities": len(scan_result.vulnerabilities),
            "status": "secure" if scan_result.score >= 80 else "vulnerable"
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "service": "Secure AI Model API",
        "perfecxion_connected": perfecxion_client.test_connection()
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)`
    }
  },
  {
    id: 'docker',
    name: 'Docker',
    icon: <Package className="w-6 h-6" />,
    description: 'Containerize models with security scanning',
    category: 'Containerization',
    difficulty: 'medium',
    timeEstimate: '20 mins',
    code: {
      setup: `# Dockerfile
FROM python:3.9-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy model and code
COPY model/ ./model/
COPY src/ ./src/

# Security scan as part of build
ARG PERFECXION_API_KEY
ENV PERFECXION_API_KEY=$PERFECXION_API_KEY

RUN perfecxion scan --model-path ./model/ --fail-on-high

# Run as non-root user
RUN useradd -m -u 1000 modeluser
USER modeluser

EXPOSE 8080
CMD ["python", "src/server.py"]`,
      implementation: `# docker-compose.yml
version: '3.8'

services:
  model-server:
    build:
      context: .
      args:
        PERFECXION_API_KEY: \${PERFECXION_API_KEY}
    image: secure-model:latest
    ports:
      - "8080:8080"
    environment:
      - PERFECXION_API_KEY=\${PERFECXION_API_KEY}
      - MODEL_PATH=/app/model/
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/health"]
      interval: 30s
      timeout: 10s
      retries: 3
    deploy:
      resources:
        limits:
          memory: 2G
          cpus: '1.0'
    security_opt:
      - no-new-privileges:true
    read_only: true
    tmpfs:
      - /tmp

  security-monitor:
    image: perfecxion/monitor:latest
    environment:
      - PERFECXION_API_KEY=\${PERFECXION_API_KEY}
      - TARGET_SERVICE=model-server:8080
    depends_on:
      - model-server

# Build script with security checks
# build-secure.sh
#!/bin/bash
set -e

echo "Building secure model container..."

# Run pre-build security scan
perfecxion scan --model-path ./model/ --output-format json > scan-results.json

# Check scan results
SCORE=$(jq -r '.score' scan-results.json)
if [ "$SCORE" -lt 80 ]; then
    echo "❌ Model failed security check: $SCORE/100"
    exit 1
fi

# Build container
docker-compose build --build-arg PERFECXION_API_KEY=$PERFECXION_API_KEY

# Scan container image
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \\
  aquasec/trivy image secure-model:latest

echo "✅ Secure model container built successfully"`
    }
  }
]

export default function IntegrationExamples() {
  const [selectedIntegration, setSelectedIntegration] = useState<Integration | null>(null)
  const [activeTab, setActiveTab] = useState<'setup' | 'implementation' | 'testing'>('setup')
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const handleCopy = async (code: string, id: string) => {
    await navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
      case 'medium': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
      case 'advanced': return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  const categories = Array.from(new Set(INTEGRATIONS.map(i => i.category)))

  return (
    <div className="space-y-6">
      {!selectedIntegration ? (
        <>
          {/* Introduction */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Integration Examples
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Ready-to-use code examples for integrating perfecXion.ai with popular platforms and frameworks. 
              Each example includes setup instructions and production-ready code.
            </p>
          </div>

          {/* Integration Grid */}
          {categories.map(category => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {INTEGRATIONS.filter(i => i.category === category).map(integration => (
                  <button
                    key={integration.id}
                    onClick={() => setSelectedIntegration(integration)}
                    className="text-left p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-blue-600 dark:text-blue-400">
                        {integration.icon}
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded ${getDifficultyColor(integration.difficulty)}`}>
                        {integration.difficulty}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {integration.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {integration.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                      <Clock className="w-3 h-3" />
                      {integration.timeEstimate}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="space-y-6">
          {/* Integration Header */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex gap-4">
                <div className="text-blue-600 dark:text-blue-400">
                  {selectedIntegration.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedIntegration.name} Integration
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedIntegration.description}
                  </p>
                  <div className="flex items-center gap-4 mt-3 text-sm">
                    <span className={`px-2 py-1 font-medium rounded ${getDifficultyColor(selectedIntegration.difficulty)}`}>
                      {selectedIntegration.difficulty}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {selectedIntegration.timeEstimate}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setSelectedIntegration(null)
                  setActiveTab('setup')
                }}
                className="px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                Back to Examples
              </button>
            </div>
          </div>

          {/* Code Tabs */}
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="flex">
                {(['setup', 'implementation', 'testing'] as const).map((tab) => {
                  if (tab === 'testing' && !selectedIntegration.code.testing) return null
                  
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`
                        px-6 py-3 text-sm font-medium border-b-2 transition-colors
                        ${activeTab === tab
                          ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                          : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                        }
                      `}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  )
                })}
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'setup' && (
                <div className="space-y-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                    Setup Instructions
                  </h3>
                  <div className="relative">
                    <button
                      onClick={() => handleCopy(selectedIntegration.code.setup, 'setup')}
                      className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-gray-800 text-gray-300 rounded hover:bg-gray-700 transition-colors flex items-center gap-2"
                    >
                      {copiedCode === 'setup' ? (
                        <>
                          <Check className="w-4 h-4 text-green-400" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </button>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{selectedIntegration.code.setup}</code>
                    </pre>
                  </div>
                </div>
              )}

              {activeTab === 'implementation' && (
                <div className="space-y-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                    Implementation Code
                  </h3>
                  <div className="relative">
                    <button
                      onClick={() => handleCopy(selectedIntegration.code.implementation, 'implementation')}
                      className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-gray-800 text-gray-300 rounded hover:bg-gray-700 transition-colors flex items-center gap-2"
                    >
                      {copiedCode === 'implementation' ? (
                        <>
                          <Check className="w-4 h-4 text-green-400" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </button>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{selectedIntegration.code.implementation}</code>
                    </pre>
                  </div>
                </div>
              )}

              {activeTab === 'testing' && selectedIntegration.code.testing && (
                <div className="space-y-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                    Testing Instructions
                  </h3>
                  <div className="relative">
                    <button
                      onClick={() => handleCopy(selectedIntegration.code.testing!, 'testing')}
                      className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-gray-800 text-gray-300 rounded hover:bg-gray-700 transition-colors flex items-center gap-2"
                    >
                      {copiedCode === 'testing' ? (
                        <>
                          <Check className="w-4 h-4 text-green-400" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </button>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{selectedIntegration.code.testing}</code>
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Success Message */}
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
            <div className="flex gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                  Next Steps
                </h3>
                <ul className="list-disc list-inside text-sm text-green-800 dark:text-green-200 space-y-1">
                  <li>Copy the code examples and adapt them to your specific use case</li>
                  <li>Ensure you have your API key configured in environment variables</li>
                  <li>Test the integration in a development environment first</li>
                  <li>Monitor security scan results and adjust thresholds as needed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}