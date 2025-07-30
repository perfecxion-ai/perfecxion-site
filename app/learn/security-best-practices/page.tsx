import type { Metadata } from 'next'
import { 
  AlertTriangle,
  Award,
  BarChart3,
  BookOpen,
  Brain,
  CheckCircle,
  Clock,
  Code,
  Database,
  FileText,
  GitBranch,
  Globe,
  Key,
  Layers,
  LineChart,
  Lock,
  MessageSquare,
  Monitor,
  Network,
  Package,
  RefreshCw,
  Search,
  Server,
  Settings,
  Shield,
  Target,
  Terminal,
  Timer,
  TrendingUp,
  UserCheck,
  Users,
  Workflow,
  Zap,
  AlertCircle,
  Eye
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Security Best Practices - AI Security Learning Center | perfecXion.ai',
  description: 'Master security best practices for AI systems. Learn defense-in-depth strategies, secure development, operational security, and continuous improvement.',
  keywords: 'AI security best practices, secure AI development, operational security, defense in depth, AI governance, security culture',
}

export default function SecurityBestPracticesPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12 prose prose-invert prose-lg">
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
        Security Best Practices
      </h1>
      <p className="text-xl text-gray-300 mb-12 leading-relaxed">
        Master comprehensive security best practices for AI systems. Learn defense-in-depth strategies, secure development lifecycles, operational excellence, and how to build a security-first culture.
      </p>

      {/* Section 1: Defense in Depth */}
      <section className="mb-16 p-8 bg-gray-800/50 rounded-xl border border-gray-700">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
          <Shield className="w-8 h-8 text-cyan-400" />
          Defense in Depth for AI
        </h2>
        
        <div className="space-y-6 text-gray-300">
          <p>
            Defense in depth creates multiple layers of security controls, ensuring that if one layer fails, others continue to protect your AI systems. This approach is critical for AI due to the unique attack vectors and high-value targets.
          </p>

          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Security Layers</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Network className="w-5 h-5 text-blue-400" />
                  Network Security
                </h4>
                <ul className="space-y-1 text-sm ml-7">
                  <li>• Firewalls and network segmentation</li>
                  <li>• Intrusion detection and prevention</li>
                  <li>• DDoS protection</li>
                  <li>• VPN and secure connectivity</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Server className="w-5 h-5 text-green-400" />
                  Infrastructure Security
                </h4>
                <ul className="space-y-1 text-sm ml-7">
                  <li>• Secure compute environments</li>
                  <li>• Container and orchestration security</li>
                  <li>• Secrets management</li>
                  <li>• Infrastructure as code security</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-purple-400" />
                  Model Security
                </h4>
                <ul className="space-y-1 text-sm ml-7">
                  <li>• Model encryption and signing</li>
                  <li>• Secure model serving</li>
                  <li>• Adversarial robustness</li>
                  <li>• Privacy-preserving techniques</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Database className="w-5 h-5 text-yellow-400" />
                  Data Security
                </h4>
                <ul className="space-y-1 text-sm ml-7">
                  <li>• Encryption at rest and in transit</li>
                  <li>• Data classification and handling</li>
                  <li>• Access control and auditing</li>
                  <li>• Data loss prevention</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-900/20 rounded-lg p-6 border border-blue-700">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Implementation Framework</h3>
            <pre className="bg-gray-950 p-4 rounded-lg overflow-x-auto text-sm">
              <code className="language-python text-gray-300">{`# Defense in Depth Implementation Framework
from dataclasses import dataclass
from typing import Dict, List, Optional, Set
from enum import Enum
import asyncio
import json

class SecurityLayer(Enum):
    NETWORK = "network"
    INFRASTRUCTURE = "infrastructure"
    APPLICATION = "application"
    MODEL = "model"
    DATA = "data"
    IDENTITY = "identity"
    MONITORING = "monitoring"

@dataclass
class SecurityControl:
    name: str
    layer: SecurityLayer
    description: str
    implementation: str
    effectiveness: float  # 0-1
    cost: str  # low, medium, high
    dependencies: List[str] = None
    
class DefenseInDepthFramework:
    def __init__(self):
        self.controls = {}
        self.threat_mappings = {}
        self.implementation_status = {}
        
    def add_control(self, control: SecurityControl):
        """Add security control to framework"""
        if control.layer not in self.controls:
            self.controls[control.layer] = []
        self.controls[control.layer].append(control)
        
    def assess_coverage(self) -> Dict[str, float]:
        """Assess security coverage by layer"""
        coverage = {}
        
        for layer in SecurityLayer:
            if layer in self.controls:
                # Calculate coverage based on implemented controls
                implemented = sum(
                    1 for c in self.controls[layer]
                    if self.implementation_status.get(c.name, False)
                )
                total = len(self.controls[layer])
                coverage[layer.value] = implemented / total if total > 0 else 0
            else:
                coverage[layer.value] = 0
        
        return coverage
    
    def recommend_improvements(self) -> List[Dict]:
        """Recommend security improvements"""
        recommendations = []
        coverage = self.assess_coverage()
        
        # Find layers with low coverage
        for layer, score in coverage.items():
            if score < 0.7:  # Below 70% coverage
                layer_enum = SecurityLayer(layer)
                unimplemented = [
                    c for c in self.controls.get(layer_enum, [])
                    if not self.implementation_status.get(c.name, False)
                ]
                
                # Sort by effectiveness/cost ratio
                unimplemented.sort(
                    key=lambda c: c.effectiveness / self._cost_value(c.cost),
                    reverse=True
                )
                
                recommendations.append({
                    'layer': layer,
                    'current_coverage': score,
                    'priority_controls': [
                        {
                            'name': c.name,
                            'description': c.description,
                            'effectiveness': c.effectiveness,
                            'cost': c.cost
                        }
                        for c in unimplemented[:3]  # Top 3
                    ]
                })
        
        return recommendations
    
    def _cost_value(self, cost: str) -> float:
        """Convert cost string to numeric value"""
        return {'low': 1, 'medium': 2, 'high': 3}.get(cost, 2)

# Security Control Catalog
def build_ai_security_catalog() -> DefenseInDepthFramework:
    """Build comprehensive AI security control catalog"""
    framework = DefenseInDepthFramework()
    
    # Network Layer Controls
    framework.add_control(SecurityControl(
        name="api_gateway",
        layer=SecurityLayer.NETWORK,
        description="Centralized API gateway with security features",
        implementation="Deploy Kong/AWS API Gateway with rate limiting, authentication",
        effectiveness=0.8,
        cost="medium"
    ))
    
    framework.add_control(SecurityControl(
        name="waf",
        layer=SecurityLayer.NETWORK,
        description="Web Application Firewall for AI endpoints",
        implementation="Configure ModSecurity with AI-specific rules",
        effectiveness=0.7,
        cost="low"
    ))
    
    # Model Layer Controls
    framework.add_control(SecurityControl(
        name="model_signing",
        layer=SecurityLayer.MODEL,
        description="Cryptographic signing of models",
        implementation="Implement model signing with GPG/HSM",
        effectiveness=0.9,
        cost="medium"
    ))
    
    framework.add_control(SecurityControl(
        name="adversarial_defense",
        layer=SecurityLayer.MODEL,
        description="Adversarial robustness training",
        implementation="Apply adversarial training techniques",
        effectiveness=0.7,
        cost="high"
    ))
    
    # Data Layer Controls
    framework.add_control(SecurityControl(
        name="data_encryption",
        layer=SecurityLayer.DATA,
        description="End-to-end data encryption",
        implementation="AES-256 encryption with key rotation",
        effectiveness=0.9,
        cost="medium"
    ))
    
    framework.add_control(SecurityControl(
        name="differential_privacy",
        layer=SecurityLayer.DATA,
        description="Privacy-preserving data processing",
        implementation="Implement differential privacy with epsilon budget",
        effectiveness=0.8,
        cost="high"
    ))
    
    return framework`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Section 2: Secure Development Lifecycle */}
      <section className="mb-16 p-8 bg-gray-800/50 rounded-xl border border-gray-700">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
          <Code className="w-8 h-8 text-cyan-400" />
          Secure AI Development Lifecycle
        </h2>

        <div className="space-y-8 text-gray-300">
          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Development Phases</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2">1. Requirements & Design</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Security requirements definition</li>
                  <li>• Threat modeling and risk assessment</li>
                  <li>• Privacy impact assessment</li>
                  <li>• Security architecture review</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2">2. Development</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Secure coding practices</li>
                  <li>• Code review and static analysis</li>
                  <li>• Dependency management</li>
                  <li>• Secret handling</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2">3. Training & Validation</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Data validation and sanitization</li>
                  <li>• Training pipeline security</li>
                  <li>• Model validation and testing</li>
                  <li>• Bias and fairness assessment</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2">4. Deployment</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Secure deployment practices</li>
                  <li>• Configuration management</li>
                  <li>• Access control setup</li>
                  <li>• Monitoring activation</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2">5. Operations</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Continuous monitoring</li>
                  <li>• Incident response</li>
                  <li>• Patch management</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Secure Development Implementation</h3>
            <pre className="bg-gray-950 p-4 rounded-lg overflow-x-auto text-sm">
              <code className="language-python text-gray-300">{`# Secure AI Development Pipeline
import hashlib
import json
from typing import Dict, List, Optional, Tuple
from dataclasses import dataclass
import subprocess
import ast
import re

@dataclass
class SecurityCheckResult:
    check_name: str
    passed: bool
    severity: str
    findings: List[str]
    recommendations: List[str]

class SecureAIDevelopmentPipeline:
    def __init__(self):
        self.security_gates = {
            'code': CodeSecurityGate(),
            'model': ModelSecurityGate(),
            'data': DataSecurityGate(),
            'deployment': DeploymentSecurityGate()
        }
        
    async def run_security_pipeline(self, 
                                  artifact_type: str,
                                  artifact_path: str) -> Dict:
        """Run complete security pipeline"""
        results = {
            'overall_status': 'passed',
            'checks': [],
            'risk_score': 0
        }
        
        # Select appropriate gates
        gates_to_run = self._select_gates(artifact_type)
        
        # Run security checks
        for gate_name in gates_to_run:
            gate = self.security_gates[gate_name]
            gate_results = await gate.run_checks(artifact_path)
            
            results['checks'].extend(gate_results)
            
            # Update overall status
            if any(not r.passed for r in gate_results if r.severity in ['critical', 'high']):
                results['overall_status'] = 'failed'
        
        # Calculate risk score
        results['risk_score'] = self._calculate_risk_score(results['checks'])
        
        # Generate report
        results['report'] = self._generate_security_report(results)
        
        return results
    
    def _calculate_risk_score(self, checks: List[SecurityCheckResult]) -> float:
        """Calculate overall risk score"""
        severity_weights = {
            'critical': 10,
            'high': 5,
            'medium': 2,
            'low': 1,
            'info': 0.1
        }
        
        total_score = 0
        for check in checks:
            if not check.passed:
                weight = severity_weights.get(check.severity, 1)
                total_score += weight * len(check.findings)
        
        # Normalize to 0-100
        return min(total_score, 100)

class CodeSecurityGate:
    def __init__(self):
        self.checks = [
            self._check_secrets,
            self._check_dependencies,
            self._check_code_quality,
            self._check_security_patterns
        ]
        
    async def run_checks(self, code_path: str) -> List[SecurityCheckResult]:
        """Run code security checks"""
        results = []
        
        for check in self.checks:
            result = await check(code_path)
            results.append(result)
        
        return results
    
    async def _check_secrets(self, code_path: str) -> SecurityCheckResult:
        """Check for hardcoded secrets"""
        findings = []
        
        # Common secret patterns
        secret_patterns = [
            r'api[_-]?key\s*=\s*["\'][^"\']+["\']',
            r'password\s*=\s*["\'][^"\']+["\']',
            r'secret\s*=\s*["\'][^"\']+["\']',
            r'token\s*=\s*["\'][^"\']+["\']',
            r'aws_access_key_id\s*=\s*["\'][^"\']+["\']'
        ]
        
        # Scan files
        import os
        for root, dirs, files in os.walk(code_path):
            for file in files:
                if file.endswith(('.py', '.js', '.yml', '.yaml', '.json')):
                    file_path = os.path.join(root, file)
                    with open(file_path, 'r') as f:
                        content = f.read()
                        
                    for pattern in secret_patterns:
                        matches = re.findall(pattern, content, re.IGNORECASE)
                        if matches:
                            findings.append(f"Potential secret in {file_path}: {matches[0][:30]}...")
        
        return SecurityCheckResult(
            check_name="Secret Detection",
            passed=len(findings) == 0,
            severity="critical" if findings else "info",
            findings=findings,
            recommendations=[
                "Use environment variables for secrets",
                "Implement secret management solution (e.g., HashiCorp Vault)",
                "Add .gitignore for sensitive files"
            ] if findings else []
        )
    
    async def _check_dependencies(self, code_path: str) -> SecurityCheckResult:
        """Check for vulnerable dependencies"""
        findings = []
        
        # Check Python dependencies
        requirements_path = os.path.join(code_path, 'requirements.txt')
        if os.path.exists(requirements_path):
            try:
                # Run safety check
                result = subprocess.run(
                    ['safety', 'check', '-r', requirements_path, '--json'],
                    capture_output=True,
                    text=True
                )
                
                if result.returncode != 0:
                    vulnerabilities = json.loads(result.stdout)
                    for vuln in vulnerabilities:
                        findings.append(
                            f"{vuln['package']}: {vuln['vulnerability']}"
                        )
            except Exception as e:
                findings.append(f"Failed to check dependencies: {e}")
        
        return SecurityCheckResult(
            check_name="Dependency Check",
            passed=len(findings) == 0,
            severity="high" if findings else "info",
            findings=findings,
            recommendations=[
                "Update vulnerable dependencies",
                "Use dependency pinning",
                "Implement automated dependency scanning"
            ] if findings else []
        )

class ModelSecurityGate:
    def __init__(self):
        self.checks = [
            self._check_model_integrity,
            self._check_adversarial_robustness,
            self._check_privacy_leakage,
            self._check_bias_fairness
        ]
        
    async def run_checks(self, model_path: str) -> List[SecurityCheckResult]:
        """Run model security checks"""
        results = []
        
        for check in self.checks:
            result = await check(model_path)
            results.append(result)
        
        return results
    
    async def _check_model_integrity(self, model_path: str) -> SecurityCheckResult:
        """Check model file integrity"""
        findings = []
        
        try:
            # Check file hash
            expected_hash = self._get_expected_hash(model_path)
            actual_hash = self._calculate_file_hash(model_path)
            
            if expected_hash and expected_hash != actual_hash:
                findings.append("Model file hash mismatch - potential tampering")
            
            # Check model structure
            import torch
            model = torch.load(model_path, map_location='cpu')
            
            # Verify expected layers
            if not self._verify_model_structure(model):
                findings.append("Unexpected model structure detected")
            
        except Exception as e:
            findings.append(f"Failed to verify model integrity: {e}")
        
        return SecurityCheckResult(
            check_name="Model Integrity",
            passed=len(findings) == 0,
            severity="critical" if findings else "info",
            findings=findings,
            recommendations=[
                "Implement model signing",
                "Store model hashes securely",
                "Use secure model storage"
            ] if findings else []
        )
    
    async def _check_adversarial_robustness(self, 
                                          model_path: str) -> SecurityCheckResult:
        """Test model against adversarial examples"""
        findings = []
        
        try:
            # Load model
            import torch
            import torch.nn as nn
            model = torch.load(model_path, map_location='cpu')
            model.eval()
            
            # Generate adversarial examples
            test_results = self._test_adversarial_robustness(model)
            
            if test_results['success_rate'] > 0.1:  # 10% threshold
                findings.append(
                    f"Model vulnerable to adversarial attacks: "
                    f"{test_results['success_rate']:.1%} success rate"
                )
            
        except Exception as e:
            findings.append(f"Failed to test adversarial robustness: {e}")
        
        return SecurityCheckResult(
            check_name="Adversarial Robustness",
            passed=len(findings) == 0,
            severity="high" if findings else "info",
            findings=findings,
            recommendations=[
                "Implement adversarial training",
                "Add input validation layers",
                "Use certified defenses"
            ] if findings else []
        )

# Secure CI/CD Pipeline
class SecureCICDPipeline:
    def __init__(self):
        self.stages = {
            'build': BuildStage(),
            'test': TestStage(),
            'scan': ScanStage(),
            'deploy': DeployStage()
        }
        self.approvals_required = {
            'critical': ['security_team', 'engineering_lead'],
            'high': ['security_team'],
            'medium': ['tech_lead'],
            'low': []
        }
        
    async def run_pipeline(self, 
                         commit_hash: str,
                         branch: str) -> Dict:
        """Run secure CI/CD pipeline"""
        pipeline_run = {
            'commit': commit_hash,
            'branch': branch,
            'status': 'running',
            'stages': {},
            'security_summary': {}
        }
        
        try:
            # Run each stage
            for stage_name, stage in self.stages.items():
                stage_result = await stage.execute(commit_hash)
                pipeline_run['stages'][stage_name] = stage_result
                
                # Check if stage passed
                if not stage_result['passed']:
                    pipeline_run['status'] = 'failed'
                    break
                
                # Collect security findings
                if 'security_findings' in stage_result:
                    self._aggregate_findings(
                        pipeline_run['security_summary'],
                        stage_result['security_findings']
                    )
            
            # Check if approval needed
            if pipeline_run['status'] == 'running':
                approval_needed = self._check_approval_requirements(
                    pipeline_run['security_summary']
                )
                
                if approval_needed:
                    pipeline_run['status'] = 'awaiting_approval'
                    pipeline_run['approvals_needed'] = approval_needed
                else:
                    pipeline_run['status'] = 'passed'
            
        except Exception as e:
            pipeline_run['status'] = 'error'
            pipeline_run['error'] = str(e)
        
        return pipeline_run`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Section 3: Access Control */}
      <section className="mb-16 p-8 bg-gray-800/50 rounded-xl border border-gray-700">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
          <Key className="w-8 h-8 text-cyan-400" />
          Access Control & Identity Management
        </h2>

        <div className="space-y-8 text-gray-300">
          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Zero Trust Architecture</h3>
            <p className="mb-4">
              Implement zero trust principles for AI systems: never trust, always verify. Every request must be authenticated, authorized, and encrypted.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2">Identity Verification</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Multi-factor authentication</li>
                  <li>• Certificate-based authentication</li>
                  <li>• Continuous verification</li>
                  <li>• Device trust assessment</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2">Access Controls</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Role-based access control (RBAC)</li>
                  <li>• Attribute-based access control (ABAC)</li>
                  <li>• Just-in-time access</li>
                  <li>• Principle of least privilege</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Access Control Implementation</h3>
            <pre className="bg-gray-950 p-4 rounded-lg overflow-x-auto text-sm">
              <code className="language-typescript text-gray-300">{`// Zero Trust Access Control System
interface AccessPolicy {
  id: string;
  name: string;
  resources: string[];
  actions: string[];
  conditions: PolicyCondition[];
  effect: 'allow' | 'deny';
}

interface PolicyCondition {
  type: 'time' | 'location' | 'device' | 'risk' | 'mfa';
  operator: 'equals' | 'contains' | 'greater' | 'less';
  value: any;
}

class ZeroTrustAccessControl {
  private policies: Map<string, AccessPolicy> = new Map();
  private sessionManager: SessionManager;
  private riskEngine: RiskEngine;
  
  async authorizeRequest(
    request: AccessRequest
  ): Promise<AuthorizationResult> {
    // Step 1: Verify identity
    const identity = await this.verifyIdentity(request.credentials);
    if (!identity.verified) {
      return { allowed: false, reason: 'Identity verification failed' };
    }
    
    // Step 2: Assess risk
    const riskScore = await this.riskEngine.assessRisk({
      identity,
      request,
      context: request.context
    });
    
    if (riskScore > 0.8) {
      return { allowed: false, reason: 'High risk score' };
    }
    
    // Step 3: Evaluate policies
    const applicablePolicies = this.findApplicablePolicies(
      identity,
      request.resource,
      request.action
    );
    
    const decision = this.evaluatePolicies(
      applicablePolicies,
      request,
      identity,
      riskScore
    );
    
    // Step 4: Create audit trail
    await this.auditAccess({
      identity,
      request,
      decision,
      riskScore,
      timestamp: new Date()
    });
    
    return decision;
  }
  
  private evaluatePolicies(
    policies: AccessPolicy[],
    request: AccessRequest,
    identity: Identity,
    riskScore: number
  ): AuthorizationResult {
    // Default deny
    let result: AuthorizationResult = {
      allowed: false,
      reason: 'No matching policy'
    };
    
    // Evaluate policies in order
    for (const policy of policies) {
      const conditionsMet = policy.conditions.every(condition =>
        this.evaluateCondition(condition, request, identity, riskScore)
      );
      
      if (conditionsMet) {
        if (policy.effect === 'allow') {
          result = { allowed: true, reason: \`Allowed by policy \${policy.name}\` };
        } else {
          return { allowed: false, reason: \`Denied by policy \${policy.name}\` };
        }
      }
    }
    
    return result;
  }
  
  private evaluateCondition(
    condition: PolicyCondition,
    request: AccessRequest,
    identity: Identity,
    riskScore: number
  ): boolean {
    switch (condition.type) {
      case 'time':
        const now = new Date();
        const hour = now.getHours();
        return this.compareValue(hour, condition.operator, condition.value);
        
      case 'location':
        const location = request.context.location;
        return this.compareValue(location, condition.operator, condition.value);
        
      case 'device':
        const deviceTrust = identity.deviceTrust;
        return this.compareValue(deviceTrust, condition.operator, condition.value);
        
      case 'risk':
        return this.compareValue(riskScore, condition.operator, condition.value);
        
      case 'mfa':
        return identity.mfaVerified === condition.value;
        
      default:
        return false;
    }
  }
}

// AI-Specific Access Policies
class AIAccessPolicyEngine {
  createModelAccessPolicy(): AccessPolicy {
    return {
      id: 'model-access-policy',
      name: 'Production Model Access',
      resources: ['models/*'],
      actions: ['read', 'predict'],
      conditions: [
        {
          type: 'risk',
          operator: 'less',
          value: 0.5
        },
        {
          type: 'mfa',
          operator: 'equals',
          value: true
        }
      ],
      effect: 'allow'
    };
  }
  
  createTrainingDataPolicy(): AccessPolicy {
    return {
      id: 'training-data-policy',
      name: 'Training Data Access',
      resources: ['training-data/*'],
      actions: ['read'],
      conditions: [
        {
          type: 'time',
          operator: 'greater',
          value: 8  // After 8 AM
        },
        {
          type: 'time',
          operator: 'less',
          value: 20  // Before 8 PM
        },
        {
          type: 'location',
          operator: 'equals',
          value: 'corporate-network'
        }
      ],
      effect: 'allow'
    };
  }
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Section 4: Data Protection */}
      <section className="mb-16 p-8 bg-gray-800/50 rounded-xl border border-gray-700">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
          <Database className="w-8 h-8 text-cyan-400" />
          Data Protection Best Practices
        </h2>

        <div className="space-y-8 text-gray-300">
          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Data Lifecycle Security</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2">Collection & Ingestion</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Data source verification</li>
                  <li>• Input validation and sanitization</li>
                  <li>• Consent management</li>
                  <li>• Data minimization</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2">Storage & Processing</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Encryption at rest (AES-256)</li>
                  <li>• Secure key management</li>
                  <li>• Access logging and monitoring</li>
                  <li>• Data classification and tagging</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2">Sharing & Transfer</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Encryption in transit (TLS 1.3)</li>
                  <li>• Data loss prevention (DLP)</li>
                  <li>• Secure APIs and protocols</li>
                  <li>• Partner agreements and audits</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2">Retention & Disposal</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Retention policy enforcement</li>
                  <li>• Secure deletion procedures</li>
                  <li>• Audit trail preservation</li>
                  <li>• Compliance verification</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Privacy-Preserving Techniques</h3>
            <pre className="bg-gray-950 p-4 rounded-lg overflow-x-auto text-sm">
              <code className="language-python text-gray-300">{`# Privacy-Preserving AI Implementation
import numpy as np
from typing import Tuple, List, Dict
import hashlib
from cryptography.fernet import Fernet

class PrivacyPreservingAI:
    def __init__(self, epsilon: float = 1.0):
        self.epsilon = epsilon  # Privacy budget
        self.noise_scale = 1.0 / epsilon
        
    def apply_differential_privacy(self, 
                                 data: np.ndarray,
                                 query_function: callable) -> float:
        """Apply differential privacy to query results"""
        # Calculate true query result
        true_result = query_function(data)
        
        # Calculate sensitivity (max change from single record)
        sensitivity = self._calculate_sensitivity(query_function, data)
        
        # Add Laplacian noise
        noise = np.random.laplace(0, sensitivity * self.noise_scale)
        private_result = true_result + noise
        
        return private_result
    
    def federated_learning_aggregation(self, 
                                     client_updates: List[Dict]) -> Dict:
        """Secure aggregation for federated learning"""
        # Verify client authenticity
        verified_updates = []
        for update in client_updates:
            if self._verify_client(update):
                verified_updates.append(update)
        
        # Apply secure aggregation
        aggregated_weights = self._secure_aggregate(verified_updates)
        
        # Add noise for privacy
        noisy_weights = self._add_noise_to_weights(aggregated_weights)
        
        return {
            'weights': noisy_weights,
            'num_clients': len(verified_updates),
            'privacy_spent': self._calculate_privacy_spent()
        }
    
    def homomorphic_inference(self, 
                            encrypted_input: bytes,
                            model: object) -> bytes:
        """Perform inference on encrypted data"""
        # Note: Simplified example - real implementation would use
        # libraries like TenSEAL or PySyft
        
        # Process encrypted data without decryption
        encrypted_result = self._homomorphic_forward(
            encrypted_input,
            model
        )
        
        return encrypted_result
    
    def implement_k_anonymity(self, 
                            dataset: pd.DataFrame,
                            quasi_identifiers: List[str],
                            k: int = 5) -> pd.DataFrame:
        """Implement k-anonymity for dataset"""
        # Group by quasi-identifiers
        groups = dataset.groupby(quasi_identifiers)
        
        # Suppress groups smaller than k
        anonymous_data = []
        for name, group in groups:
            if len(group) >= k:
                anonymous_data.append(group)
            else:
                # Generalize or suppress
                generalized = self._generalize_records(group, quasi_identifiers)
                anonymous_data.append(generalized)
        
        return pd.concat(anonymous_data)

class SecureDataPipeline:
    def __init__(self):
        self.encryption_key = Fernet.generate_key()
        self.cipher = Fernet(self.encryption_key)
        self.validators = DataValidators()
        
    async def secure_data_ingestion(self, 
                                  data_source: str,
                                  data: bytes) -> Dict:
        """Secure data ingestion pipeline"""
        result = {
            'status': 'success',
            'data_id': None,
            'validations': {},
            'encryption': {}
        }
        
        try:
            # Step 1: Validate data source
            source_valid = await self.validators.validate_source(data_source)
            if not source_valid:
                raise ValueError("Invalid data source")
            
            # Step 2: Scan for malicious content
            scan_result = await self.validators.scan_content(data)
            result['validations']['malware_scan'] = scan_result
            
            # Step 3: Validate data format and schema
            schema_valid = await self.validators.validate_schema(data)
            result['validations']['schema'] = schema_valid
            
            # Step 4: Apply data classification
            classification = self._classify_data(data)
            result['classification'] = classification
            
            # Step 5: Encrypt based on classification
            if classification in ['confidential', 'restricted']:
                encrypted_data = self.cipher.encrypt(data)
                result['encryption']['algorithm'] = 'AES-256'
                result['encryption']['encrypted'] = True
                
                # Store encrypted data
                data_id = await self._store_encrypted_data(
                    encrypted_data,
                    classification
                )
            else:
                # Store with standard protection
                data_id = await self._store_data(data, classification)
            
            result['data_id'] = data_id
            
            # Step 6: Create audit entry
            await self._audit_ingestion(data_id, data_source, classification)
            
        except Exception as e:
            result['status'] = 'failed'
            result['error'] = str(e)
            
        return result
    
    def _classify_data(self, data: bytes) -> str:
        """Classify data sensitivity"""
        # Check for PII patterns
        data_str = data.decode('utf-8', errors='ignore')
        
        pii_patterns = [
            r'\b\d{3}-\d{2}-\d{4}\b',  # SSN
            r'\b[A-Z]{2}\d{6}\b',       # Passport
            r'\b\d{16}\b',              # Credit card
            r'\b[\w\.-]+@[\w\.-]+\.\w+\b'  # Email
        ]
        
        for pattern in pii_patterns:
            if re.search(pattern, data_str):
                return 'restricted'
        
        # Check for sensitive keywords
        sensitive_keywords = ['medical', 'financial', 'legal', 'proprietary']
        if any(keyword in data_str.lower() for keyword in sensitive_keywords):
            return 'confidential'
        
        return 'internal'`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Section 5: Monitoring and Logging */}
      <section className="mb-16 p-8 bg-gray-800/50 rounded-xl border border-gray-700">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
          <Eye className="w-8 h-8 text-cyan-400" />
          Monitoring and Observability
        </h2>

        <div className="space-y-8 text-gray-300">
          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Comprehensive Monitoring Strategy</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2">Security Monitoring</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Real-time threat detection</li>
                  <li>• Anomaly detection</li>
                  <li>• Security event correlation</li>
                  <li>• Compliance monitoring</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2">Performance Monitoring</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Model performance metrics</li>
                  <li>• Resource utilization</li>
                  <li>• Latency tracking</li>
                  <li>• Error rate monitoring</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2">Operational Monitoring</h4>
                <ul className="space-y-1 text-sm">
                  <li>• System health checks</li>
                  <li>• Service availability</li>
                  <li>• Deployment tracking</li>
                  <li>• Capacity planning</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2">Business Monitoring</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Usage analytics</li>
                  <li>• Cost optimization</li>
                  <li>• SLA compliance</li>
                  <li>• User behavior analysis</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Observability Implementation</h3>
            <pre className="bg-gray-950 p-4 rounded-lg overflow-x-auto text-sm">
              <code className="language-yaml text-gray-300">{`# Comprehensive Monitoring Stack Configuration
version: '3.8'

services:
  # Metrics Collection
  prometheus:
    image: prom/prometheus:latest
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus_data:/prometheus
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
      - '--storage.tsdb.retention.time=30d'
    ports:
      - "9090:9090"

  # Logging
  elasticsearch:
    image: elasticsearch:8.11.0
    environment:
      - discovery.type=single-node
      - "ES_JAVA_OPTS=-Xms2g -Xmx2g"
      - xpack.security.enabled=true
      - xpack.security.authc.api_key.enabled=true
    volumes:
      - es_data:/usr/share/elasticsearch/data

  logstash:
    image: logstash:8.11.0
    volumes:
      - ./logstash.conf:/usr/share/logstash/pipeline/logstash.conf
    environment:
      - "LS_JAVA_OPTS=-Xmx1g -Xms1g"

  # Tracing
  jaeger:
    image: jaegertracing/all-in-one:latest
    environment:
      - COLLECTOR_ZIPKIN_HTTP_PORT=9411
    ports:
      - "16686:16686"
      - "14268:14268"

  # Visualization
  grafana:
    image: grafana/grafana:latest
    volumes:
      - grafana_data:/var/lib/grafana
      - ./grafana/dashboards:/etc/grafana/provisioning/dashboards
      - ./grafana/datasources:/etc/grafana/provisioning/datasources
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=secure_password
      - GF_INSTALL_PLUGINS=grafana-piechart-panel
    ports:
      - "3000:3000"

  # AI-Specific Monitoring
  mlflow:
    image: ghcr.io/mlflow/mlflow:latest
    ports:
      - "5000:5000"
    environment:
      - MLFLOW_S3_ENDPOINT_URL=http://minio:9000
      - AWS_ACCESS_KEY_ID=minioadmin
      - AWS_SECRET_ACCESS_KEY=minioadmin
    command: >
      mlflow server
      --backend-store-uri postgresql://mlflow:password@postgres/mlflow
      --default-artifact-root s3://mlflow/
      --host 0.0.0.0

volumes:
  prometheus_data:
  es_data:
  grafana_data:

# Prometheus Configuration
global:
  scrape_interval: 15s
  evaluation_interval: 15s

scrape_configs:
  - job_name: 'ai-models'
    static_configs:
      - targets: ['model-server:8080']
    relabel_configs:
      - source_labels: [__address__]
        target_label: instance
        replacement: 'prod-model-1'

  - job_name: 'api-gateway'
    static_configs:
      - targets: ['api-gateway:8080']
    metric_relabel_configs:
      - source_labels: [__name__]
        regex: 'go_.*'
        action: drop

# Custom AI Metrics
ai_metrics:
  - metric: model_inference_latency
    type: histogram
    help: "Model inference latency in seconds"
    buckets: [0.01, 0.05, 0.1, 0.5, 1, 2.5, 5, 10]
    
  - metric: model_accuracy
    type: gauge
    help: "Current model accuracy score"
    
  - metric: prompt_injection_attempts
    type: counter
    help: "Number of detected prompt injection attempts"
    
  - metric: data_poisoning_detected
    type: counter
    help: "Number of data poisoning attempts detected"`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Section 6: Security Culture */}
      <section className="mb-16 p-8 bg-gray-800/50 rounded-xl border border-gray-700">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
          <Users className="w-8 h-8 text-cyan-400" />
          Building Security Culture
        </h2>

        <div className="space-y-8 text-gray-300">
          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Security Champions Program</h3>
            <div className="space-y-4">
              <p>
                Establish security champions within each team to promote security best practices and serve as the first line of defense.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Champion Responsibilities</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Security awareness in team</li>
                    <li>• Code review participation</li>
                    <li>• Threat modeling facilitation</li>
                    <li>• Incident response support</li>
                    <li>• Security training delivery</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Program Benefits</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Distributed security expertise</li>
                    <li>• Faster security decisions</li>
                    <li>• Improved security posture</li>
                    <li>• Better team engagement</li>
                    <li>• Knowledge sharing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Training and Awareness</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2">AI Security Training Curriculum</h4>
                <ol className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-cyan-400">1.</span>
                    <div>
                      <strong>Fundamentals:</strong> AI threats, attack vectors, security principles
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-cyan-400">2.</span>
                    <div>
                      <strong>Secure Development:</strong> Secure coding, testing, deployment
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-cyan-400">3.</span>
                    <div>
                      <strong>Threat Detection:</strong> Monitoring, anomaly detection, response
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-cyan-400">4.</span>
                    <div>
                      <strong>Compliance:</strong> Regulations, privacy, ethics
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-cyan-400">5.</span>
                    <div>
                      <strong>Hands-on Labs:</strong> Practical exercises and simulations
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="bg-green-900/20 rounded-lg p-6 border border-green-700">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Security Metrics and KPIs</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Process Metrics</h4>
                <ul className="space-y-1">
                  <li>• Security training completion</li>
                  <li>• Code review coverage</li>
                  <li>• Vulnerability remediation time</li>
                  <li>• Security test coverage</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technical Metrics</h4>
                <ul className="space-y-1">
                  <li>• Vulnerabilities per release</li>
                  <li>• Mean time to detect</li>
                  <li>• Patch compliance rate</li>
                  <li>• Security control effectiveness</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Business Metrics</h4>
                <ul className="space-y-1">
                  <li>• Security incident cost</li>
                  <li>• Compliance audit results</li>
                  <li>• Security ROI</li>
                  <li>• Risk reduction percentage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Continuous Improvement */}
      <section className="mb-16 p-8 bg-gray-800/50 rounded-xl border border-gray-700">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
          <RefreshCw className="w-8 h-8 text-cyan-400" />
          Continuous Security Improvement
        </h2>

        <div className="space-y-8 text-gray-300">
          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Security Maturity Model</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2">Level 1: Initial</h4>
                <p className="text-sm">Ad-hoc security practices, reactive approach</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2">Level 2: Managed</h4>
                <p className="text-sm">Basic security controls, documented processes</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2">Level 3: Defined</h4>
                <p className="text-sm">Standardized security practices, proactive monitoring</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2">Level 4: Quantified</h4>
                <p className="text-sm">Metrics-driven security, continuous optimization</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2">Level 5: Optimizing</h4>
                <p className="text-sm">Adaptive security, automated response, innovation</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Improvement Framework</h3>
            <pre className="bg-gray-950 p-4 rounded-lg overflow-x-auto text-sm">
              <code className="language-python text-gray-300">{`# Continuous Security Improvement Framework
class SecurityMaturityAssessment:
    def __init__(self):
        self.domains = {
            'governance': GovernanceDomain(),
            'risk_management': RiskManagementDomain(),
            'technical_controls': TechnicalControlsDomain(),
            'operations': OperationsDomain(),
            'compliance': ComplianceDomain()
        }
        
    def assess_maturity(self) -> Dict[str, float]:
        """Assess security maturity across all domains"""
        results = {}
        
        for domain_name, domain in self.domains.items():
            score = domain.calculate_maturity_score()
            results[domain_name] = score
            
        results['overall'] = np.mean(list(results.values()))
        return results
    
    def generate_roadmap(self, 
                        current_maturity: Dict[str, float],
                        target_maturity: float = 4.0) -> List[Dict]:
        """Generate improvement roadmap"""
        roadmap = []
        
        for domain_name, current_score in current_maturity.items():
            if domain_name == 'overall':
                continue
                
            if current_score < target_maturity:
                improvements = self.domains[domain_name].get_improvements(
                    current_score,
                    target_maturity
                )
                
                for improvement in improvements:
                    roadmap.append({
                        'domain': domain_name,
                        'initiative': improvement['name'],
                        'description': improvement['description'],
                        'effort': improvement['effort'],
                        'impact': improvement['impact'],
                        'dependencies': improvement.get('dependencies', []),
                        'timeline': improvement['timeline']
                    })
        
        # Prioritize roadmap
        return self._prioritize_initiatives(roadmap)
    
    def _prioritize_initiatives(self, 
                              initiatives: List[Dict]) -> List[Dict]:
        """Prioritize improvement initiatives"""
        # Calculate priority score
        for initiative in initiatives:
            effort_score = {'low': 1, 'medium': 2, 'high': 3}[initiative['effort']]
            impact_score = {'low': 1, 'medium': 2, 'high': 3}[initiative['impact']]
            
            # Higher impact, lower effort = higher priority
            initiative['priority_score'] = impact_score / effort_score
        
        # Sort by priority
        initiatives.sort(key=lambda x: x['priority_score'], reverse=True)
        
        # Assign priority levels
        total = len(initiatives)
        for i, initiative in enumerate(initiatives):
            if i < total * 0.2:
                initiative['priority'] = 'critical'
            elif i < total * 0.5:
                initiative['priority'] = 'high'
            elif i < total * 0.8:
                initiative['priority'] = 'medium'
            else:
                initiative['priority'] = 'low'
        
        return initiatives

# Security Automation
class SecurityAutomation:
    def __init__(self):
        self.playbooks = {}
        self.triggers = {}
        
    def create_automated_response(self, 
                                trigger_type: str,
                                response_actions: List[Dict]):
        """Create automated security response"""
        playbook = {
            'trigger': trigger_type,
            'actions': response_actions,
            'enabled': True,
            'created_at': datetime.utcnow()
        }
        
        self.playbooks[trigger_type] = playbook
        
    async def execute_playbook(self, trigger_event: Dict):
        """Execute automated playbook"""
        trigger_type = trigger_event['type']
        
        if trigger_type not in self.playbooks:
            return
            
        playbook = self.playbooks[trigger_type]
        
        if not playbook['enabled']:
            return
            
        for action in playbook['actions']:
            try:
                await self._execute_action(action, trigger_event)
            except Exception as e:
                logging.error(f"Failed to execute action: {e}")
                
                if action.get('critical', False):
                    raise`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Section 8: Resources and Next Steps */}
      <section className="mb-16 p-8 bg-gray-800/50 rounded-xl border border-gray-700">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-cyan-400" />
          Resources and Next Steps
        </h2>

        <div className="space-y-6 text-gray-300">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" />
                Standards and Frameworks
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• NIST Cybersecurity Framework</li>
                <li>• ISO 27001/27002</li>
                <li>• OWASP AI Security Top 10</li>
                <li>• CIS Controls</li>
                <li>• MITRE ATT&CK for AI</li>
                <li>• EU AI Act Guidelines</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-purple-400" />
                Security Tools
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• SAST: SonarQube, Checkmarx</li>
                <li>• DAST: OWASP ZAP, Burp Suite</li>
                <li>• Container: Trivy, Clair</li>
                <li>• Secrets: HashiCorp Vault</li>
                <li>• SIEM: Splunk, ELK Stack</li>
                <li>• AI-specific: Adversarial Robustness Toolbox</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-6 border border-cyan-700">
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">Implementation Checklist</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Immediate Actions</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                    <span>Conduct security assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                    <span>Implement basic monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                    <span>Enable security logging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                    <span>Review access controls</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Long-term Goals</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-blue-400 mt-0.5" />
                    <span>Achieve security maturity level 4</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-blue-400 mt-0.5" />
                    <span>Automate security operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-blue-400 mt-0.5" />
                    <span>Build security culture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-blue-400 mt-0.5" />
                    <span>Continuous improvement</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 flex gap-4">
              <a href="/products" className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors">
                Explore Our Solutions
                <Award className="w-4 h-4" />
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                Get Expert Help
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}