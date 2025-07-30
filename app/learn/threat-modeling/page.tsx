import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Shield, Target, AlertTriangle, Lock, Users, Database, Search, FileText, CheckCircle, GitBranch, Layers, Activity, Eye, BarChart3, TrendingUp, Zap, Settings, Clock, Key } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Threat Modeling - AI Security Learning Center | perfecXion.ai',
  description: 'Master threat modeling for AI systems. Learn STRIDE, attack trees, threat matrices, and risk assessment methodologies for comprehensive AI security.',
  keywords: 'threat modeling, AI security, STRIDE, attack trees, risk assessment, security analysis, threat identification',
}

export default function ThreatModelingPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link href="/learn" className="hover:underline text-primary-600 dark:text-primary-400">Learn</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-700 dark:text-gray-300">Threat Modeling</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center">
          <Target className="h-10 w-10 text-red-600 mr-4" />
          AI Threat Modeling Mastery
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl">
          Master systematic approaches to identify, analyze, and mitigate threats in AI systems. Learn industry-standard 
          methodologies like STRIDE, attack trees, and comprehensive risk assessment for robust AI security.
        </p>
      </div>

      {/* Key Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg text-center">
          <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-red-900 dark:text-red-100">78%</div>
          <div className="text-sm text-red-700 dark:text-red-300">of AI Attacks Preventable</div>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center">
          <Zap className="h-8 w-8 text-orange-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">5x</div>
          <div className="text-sm text-orange-700 dark:text-orange-300">ROI on Threat Modeling</div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
          <Eye className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">99%</div>
          <div className="text-sm text-blue-700 dark:text-blue-300">Threat Coverage Achievable</div>
        </div>
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
          <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-900 dark:text-green-100">85%</div>
          <div className="text-sm text-green-700 dark:text-green-300">Risk Reduction Rate</div>
        </div>
      </div>

      {/* Core Methodologies */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Core Threat Modeling Methodologies</h2>
        
        <div className="space-y-8">
          {/* STRIDE Methodology */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Layers className="h-6 w-6 text-purple-600 mr-3" />
              STRIDE Methodology for AI Systems
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Microsoft's STRIDE framework adapted for AI systems, providing systematic threat identification 
              across six categories: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, and Elevation of Privilege.
            </p>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">AI-STRIDE Framework Implementation</h4>
              <pre className="text-sm text-purple-800 dark:text-purple-200 overflow-x-auto">
{`import json
import uuid
from typing import Dict, List, Any, Optional
from dataclasses import dataclass, asdict
from enum import Enum
import networkx as nx
import matplotlib.pyplot as plt

class ThreatCategory(Enum):
    SPOOFING = "spoofing"
    TAMPERING = "tampering"
    REPUDIATION = "repudiation"
    INFORMATION_DISCLOSURE = "information_disclosure"
    DENIAL_OF_SERVICE = "denial_of_service"
    ELEVATION_OF_PRIVILEGE = "elevation_of_privilege"

class Severity(Enum):
    CRITICAL = "critical"
    HIGH = "high"
    MEDIUM = "medium"
    LOW = "low"

@dataclass
class AIThreat:
    id: str
    category: ThreatCategory
    title: str
    description: str
    ai_component: str
    attack_vector: str
    impact: str
    likelihood: str
    severity: Severity
    mitigation_strategies: List[str]
    detection_methods: List[str]
    
class AIStrideAnalyzer:
    def __init__(self):
        self.threats: List[AIThreat] = []
        self.ai_components = [
            'model_training', 'data_pipeline', 'inference_engine',
            'api_gateway', 'model_storage', 'feedback_loop',
            'monitoring_system', 'user_interface'
        ]
        
        # AI-specific threat templates
        self.threat_templates = {
            ThreatCategory.SPOOFING: {
                'model_impersonation': {
                    'title': 'Model Impersonation Attack',
                    'description': 'Attacker deploys fake AI model to impersonate legitimate service',
                    'attack_vector': 'Model substitution, API endpoint spoofing',
                    'impact': 'Malicious outputs, data harvesting, reputation damage'
                },
                'data_source_spoofing': {
                    'title': 'Training Data Source Spoofing',
                    'description': 'Malicious data sources masquerading as legitimate',
                    'attack_vector': 'Compromised data feeds, DNS spoofing',
                    'impact': 'Model poisoning, biased outputs'
                }
            },
            ThreatCategory.TAMPERING: {
                'model_poisoning': {
                    'title': 'Model Poisoning Attack',
                    'description': 'Malicious modification of training data or model parameters',
                    'attack_vector': 'Data injection, gradient manipulation',
                    'impact': 'Compromised model behavior, backdoor insertion'
                },
                'adversarial_examples': {
                    'title': 'Adversarial Input Tampering',
                    'description': 'Crafted inputs designed to fool AI models',
                    'attack_vector': 'Pixel manipulation, feature perturbation',
                    'impact': 'Misclassification, system bypass'
                }
            },
            ThreatCategory.REPUDIATION: {
                'model_decision_denial': {
                    'title': 'AI Decision Repudiation',
                    'description': 'Lack of audit trails for AI decision-making',
                    'attack_vector': 'Missing logs, tampered audit trails',
                    'impact': 'Legal liability, compliance violations'
                }
            },
            ThreatCategory.INFORMATION_DISCLOSURE: {
                'model_extraction': {
                    'title': 'Model Extraction Attack',
                    'description': 'Unauthorized access to model architecture and parameters',
                    'attack_vector': 'API queries, side-channel analysis',
                    'impact': 'IP theft, competitive disadvantage'
                },
                'training_data_leak': {
                    'title': 'Training Data Inference',
                    'description': 'Extracting sensitive training data through model queries',
                    'attack_vector': 'Membership inference, model inversion',
                    'impact': 'Privacy violations, regulatory penalties'
                }
            },
            ThreatCategory.DENIAL_OF_SERVICE: {
                'inference_overload': {
                    'title': 'Inference Resource Exhaustion',
                    'description': 'Overwhelming AI system with expensive computations',
                    'attack_vector': 'Adversarial queries, resource-intensive inputs',
                    'impact': 'Service unavailability, financial losses'
                }
            },
            ThreatCategory.ELEVATION_OF_PRIVILEGE: {
                'prompt_injection': {
                    'title': 'Prompt Injection Privilege Escalation',
                    'description': 'Manipulating AI prompts to gain unauthorized access',
                    'attack_vector': 'Crafted prompts, system instruction override',
                    'impact': 'Unauthorized data access, system control'
                }
            }
        }
    
    def analyze_component(self, component: str) -> List[AIThreat]:
        """Generate STRIDE threats for a specific AI component"""
        component_threats = []
        
        for category in ThreatCategory:
            threats = self._generate_threats_for_category(component, category)
            component_threats.extend(threats)
        
        return component_threats
    
    def _generate_threats_for_category(self, component: str, category: ThreatCategory) -> List[AIThreat]:
        """Generate threats for a specific category and component"""
        threats = []
        
        if category in self.threat_templates:
            for threat_key, template in self.threat_templates[category].items():
                # Customize threat based on component
                customized_description = f"{template['description']} targeting {component}"
                
                threat = AIThreat(
                    id=str(uuid.uuid4()),
                    category=category,
                    title=template['title'],
                    description=customized_description,
                    ai_component=component,
                    attack_vector=template['attack_vector'],
                    impact=template['impact'],
                    likelihood=self._assess_likelihood(component, category),
                    severity=self._assess_severity(component, category),
                    mitigation_strategies=self._get_mitigations(component, category),
                    detection_methods=self._get_detection_methods(component, category)
                )
                threats.append(threat)
        
        return threats
    
    def _assess_likelihood(self, component: str, category: ThreatCategory) -> str:
        """Assess likelihood based on component and threat category"""
        likelihood_matrix = {
            ('model_training', ThreatCategory.TAMPERING): 'High',
            ('inference_engine', ThreatCategory.SPOOFING): 'Medium',
            ('api_gateway', ThreatCategory.DENIAL_OF_SERVICE): 'High',
            ('data_pipeline', ThreatCategory.INFORMATION_DISCLOSURE): 'Medium'
        }
        
        return likelihood_matrix.get((component, category), 'Medium')
    
    def _assess_severity(self, component: str, category: ThreatCategory) -> Severity:
        """Assess severity based on component and threat category"""
        if category in [ThreatCategory.ELEVATION_OF_PRIVILEGE, ThreatCategory.TAMPERING]:
            return Severity.CRITICAL
        elif category in [ThreatCategory.INFORMATION_DISCLOSURE, ThreatCategory.DENIAL_OF_SERVICE]:
            return Severity.HIGH
        else:
            return Severity.MEDIUM
    
    def _get_mitigations(self, component: str, category: ThreatCategory) -> List[str]:
        """Get mitigation strategies for component and threat category"""
        mitigations = {
            ThreatCategory.SPOOFING: [
                'Model signing and verification',
                'Certificate-based authentication',
                'Cryptographic model sealing'
            ],
            ThreatCategory.TAMPERING: [
                'Input validation and sanitization',
                'Model integrity checks',
                'Differential privacy techniques'
            ],
            ThreatCategory.REPUDIATION: [
                'Comprehensive audit logging',
                'Digital signatures for decisions',
                'Immutable decision trails'
            ],
            ThreatCategory.INFORMATION_DISCLOSURE: [
                'Access controls and authorization',
                'Data anonymization',
                'Query rate limiting'
            ],
            ThreatCategory.DENIAL_OF_SERVICE: [
                'Resource quotas and throttling',
                'Input complexity analysis',
                'Distributed inference architecture'
            ],
            ThreatCategory.ELEVATION_OF_PRIVILEGE: [
                'Prompt sanitization',
                'Context isolation',
                'Least privilege principles'
            ]
        }
        
        return mitigations.get(category, [])
    
    def _get_detection_methods(self, component: str, category: ThreatCategory) -> List[str]:
        """Get detection methods for component and threat category"""
        detection_methods = {
            ThreatCategory.SPOOFING: [
                'Model fingerprinting',
                'Behavioral analysis',
                'Certificate validation'
            ],
            ThreatCategory.TAMPERING: [
                'Statistical analysis of outputs',
                'Model drift detection',
                'Input anomaly detection'
            ],
            ThreatCategory.INFORMATION_DISCLOSURE: [
                'Query pattern analysis',
                'Response correlation monitoring',
                'Access pattern analysis'
            ]
        }
        
        return detection_methods.get(category, ['System monitoring', 'Log analysis'])
    
    def generate_threat_model(self) -> Dict[str, Any]:
        """Generate complete STRIDE threat model for AI system"""
        all_threats = []
        
        for component in self.ai_components:
            component_threats = self.analyze_component(component)
            all_threats.extend(component_threats)
        
        # Organize by severity
        threats_by_severity = {}
        for severity in Severity:
            threats_by_severity[severity.value] = [
                threat for threat in all_threats if threat.severity == severity
            ]
        
        return {
            'total_threats': len(all_threats),
            'threats_by_component': self._group_by_component(all_threats),
            'threats_by_category': self._group_by_category(all_threats),
            'threats_by_severity': threats_by_severity,
            'risk_score': self._calculate_risk_score(all_threats),
            'recommendations': self._generate_recommendations(all_threats)
        }
    
    def _group_by_component(self, threats: List[AIThreat]) -> Dict[str, int]:
        """Group threats by AI component"""
        component_counts = {}
        for threat in threats:
            component_counts[threat.ai_component] = component_counts.get(threat.ai_component, 0) + 1
        return component_counts
    
    def _group_by_category(self, threats: List[AIThreat]) -> Dict[str, int]:
        """Group threats by STRIDE category"""
        category_counts = {}
        for threat in threats:
            category_counts[threat.category.value] = category_counts.get(threat.category.value, 0) + 1
        return category_counts
    
    def _calculate_risk_score(self, threats: List[AIThreat]) -> float:
        """Calculate overall risk score"""
        severity_weights = {
            Severity.CRITICAL: 4,
            Severity.HIGH: 3,
            Severity.MEDIUM: 2,
            Severity.LOW: 1
        }
        
        total_score = sum(severity_weights[threat.severity] for threat in threats)
        max_possible = len(threats) * 4
        
        return (total_score / max_possible) * 100 if max_possible > 0 else 0
    
    def _generate_recommendations(self, threats: List[AIThreat]) -> List[str]:
        """Generate prioritized recommendations"""
        critical_threats = [t for t in threats if t.severity == Severity.CRITICAL]
        high_threats = [t for t in threats if t.severity == Severity.HIGH]
        
        recommendations = []
        
        if critical_threats:
            recommendations.append(f"Immediately address {len(critical_threats)} critical threats")
        
        if high_threats:
            recommendations.append(f"Prioritize {len(high_threats)} high-severity threats")
            
        recommendations.extend([
            "Implement comprehensive monitoring and detection",
            "Establish incident response procedures",
            "Regular threat model updates and reviews"
        ])
        
        return recommendations`}
              </pre>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
                <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">STRIDE Categories</h5>
                <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
                  <li>• <strong>S</strong>poofing - Identity impersonation</li>
                  <li>• <strong>T</strong>ampering - Unauthorized modification</li>
                  <li>• <strong>R</strong>epudiation - Denial of actions</li>
                  <li>• <strong>I</strong>nformation Disclosure - Data leaks</li>
                  <li>• <strong>D</strong>enial of Service - Availability attacks</li>
                  <li>• <strong>E</strong>levation of Privilege - Access escalation</li>
                </ul>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">AI-Specific Adaptations</h5>
                <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                  <li>• Model poisoning and backdoors</li>
                  <li>• Adversarial example generation</li>
                  <li>• Training data extraction</li>
                  <li>• Model stealing attacks</li>
                  <li>• Prompt injection vulnerabilities</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Attack Trees */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <GitBranch className="h-6 w-6 text-green-600 mr-3" />
              Attack Trees for AI Systems
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Hierarchical diagrams that represent attack paths against AI systems, helping visualize how attackers 
              might combine multiple techniques to achieve their objectives.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Attack Tree Builder Framework</h4>
              <pre className="text-sm text-green-800 dark:text-green-200 overflow-x-auto">
{`import json
import networkx as nx
from typing import Dict, List, Optional, Union
from dataclasses import dataclass
from enum import Enum

class AttackType(Enum):
    AND = "and"  # All child attacks must succeed
    OR = "or"    # Any child attack can succeed

class AttackComplexity(Enum):
    LOW = 1
    MEDIUM = 2
    HIGH = 3
    VERY_HIGH = 4

@dataclass
class AttackNode:
    id: str
    name: str
    description: str
    attack_type: AttackType
    complexity: AttackComplexity
    cost: float  # Estimated cost for attacker
    probability: float  # Success probability
    detection_difficulty: AttackComplexity
    impact_level: int  # 1-10 scale
    prerequisites: List[str]
    mitigations: List[str]
    children: List['AttackNode'] = None
    
    def __post_init__(self):
        if self.children is None:
            self.children = []

class AIAttackTreeBuilder:
    def __init__(self):
        self.attack_graph = nx.DiGraph()
        self.nodes: Dict[str, AttackNode] = {}
        
        # Common AI attack patterns
        self.ai_attack_patterns = {
            'model_compromise': {
                'name': 'Compromise AI Model',
                'description': 'Gain unauthorized control over AI model behavior',
                'attack_type': AttackType.OR,
                'complexity': AttackComplexity.HIGH,
                'cost': 10000,
                'probability': 0.3,
                'impact_level': 9
            },
            'data_poisoning': {
                'name': 'Training Data Poisoning',
                'description': 'Inject malicious data into training pipeline',
                'attack_type': AttackType.AND,
                'complexity': AttackComplexity.MEDIUM,
                'cost': 2000,
                'probability': 0.6,
                'impact_level': 8
            },
            'model_extraction': {
                'name': 'Model Extraction Attack',
                'description': 'Steal proprietary model through API queries',
                'attack_type': AttackType.OR,
                'complexity': AttackComplexity.MEDIUM,
                'cost': 1000,
                'probability': 0.7,
                'impact_level': 6
            }
        }
    
    def create_attack_tree(self, root_objective: str) -> AttackNode:
        """Create comprehensive attack tree for AI system"""
        
        # Root objective
        root = AttackNode(
            id="root",
            name=root_objective,
            description=f"Primary attack objective: {root_objective}",
            attack_type=AttackType.OR,
            complexity=AttackComplexity.VERY_HIGH,
            cost=50000,
            probability=0.1,
            detection_difficulty=AttackComplexity.LOW,
            impact_level=10,
            prerequisites=[],
            mitigations=[
                "Comprehensive security monitoring",
                "Multi-layered defense strategy",
                "Regular security assessments"
            ]
        )
        
        # Build specific attack paths based on objective
        if "compromise" in root_objective.lower():
            self._build_model_compromise_tree(root)
        elif "steal" in root_objective.lower() or "extract" in root_objective.lower():
            self._build_model_extraction_tree(root)
        elif "poison" in root_objective.lower():
            self._build_data_poisoning_tree(root)
        else:
            self._build_generic_ai_attack_tree(root)
        
        self.nodes[root.id] = root
        return root
    
    def _build_model_compromise_tree(self, root: AttackNode):
        """Build attack tree for model compromise objective"""
        
        # Level 1: Primary attack vectors
        backdoor_attack = AttackNode(
            id="backdoor_insertion",
            name="Insert Model Backdoor",
            description="Embed hidden triggers in model behavior",
            attack_type=AttackType.AND,
            complexity=AttackComplexity.HIGH,
            cost=15000,
            probability=0.4,
            detection_difficulty=AttackComplexity.VERY_HIGH,
            impact_level=9,
            prerequisites=["Access to training pipeline"],
            mitigations=[
                "Training data validation",
                "Model behavior monitoring",
                "Differential privacy"
            ]
        )
        
        adversarial_attack = AttackNode(
            id="adversarial_manipulation",
            name="Adversarial Input Manipulation",
            description="Craft inputs to manipulate model outputs",
            attack_type=AttackType.OR,
            complexity=AttackComplexity.MEDIUM,
            cost=5000,
            probability=0.8,
            detection_difficulty=AttackComplexity.MEDIUM,
            impact_level=6,
            prerequisites=["Model access", "Domain knowledge"],
            mitigations=[
                "Input validation",
                "Adversarial training",
                "Output monitoring"
            ]
        )
        
        # Level 2: Supporting attacks for backdoor insertion
        data_source_compromise = AttackNode(
            id="compromise_data_source",
            name="Compromise Training Data Source",
            description="Gain access to training data repositories",
            attack_type=AttackType.OR,
            complexity=AttackComplexity.MEDIUM,
            cost=3000,
            probability=0.6,
            detection_difficulty=AttackComplexity.LOW,
            impact_level=7,
            prerequisites=["Network access"],
            mitigations=[
                "Access controls",
                "Data integrity monitoring",
                "Network segmentation"
            ]
        )
        
        insider_access = AttackNode(
            id="insider_threat",
            name="Malicious Insider Access",
            description="Leverage insider access to training systems",
            attack_type=AttackType.AND,
            complexity=AttackComplexity.LOW,
            cost=1000,
            probability=0.3,
            detection_difficulty=AttackComplexity.HIGH,
            impact_level=9,
            prerequisites=["Insider recruitment", "System access"],
            mitigations=[
                "Background checks",
                "Access monitoring",
                "Segregation of duties"
            ]
        )
        
        # Level 3: Specific techniques
        credential_theft = AttackNode(
            id="steal_credentials",
            name="Steal System Credentials",
            description="Obtain authentication credentials for data systems",
            attack_type=AttackType.OR,
            complexity=AttackComplexity.MEDIUM,
            cost=500,
            probability=0.7,
            detection_difficulty=AttackComplexity.MEDIUM,
            impact_level=5,
            prerequisites=["Target identification"],
            mitigations=[
                "Multi-factor authentication",
                "Credential rotation",
                "Anomaly detection"
            ]
        )
        
        # Build tree structure
        root.children = [backdoor_attack, adversarial_attack]
        backdoor_attack.children = [data_source_compromise, insider_access]
        data_source_compromise.children = [credential_theft]
        
        # Add nodes to tracking
        for node in [backdoor_attack, adversarial_attack, data_source_compromise, 
                    insider_access, credential_theft]:
            self.nodes[node.id] = node
    
    def calculate_attack_probability(self, node: AttackNode) -> float:
        """Calculate probability of attack success considering tree structure"""
        if not node.children:
            return node.probability
        
        if node.attack_type == AttackType.AND:
            # All child attacks must succeed
            child_probs = [self.calculate_attack_probability(child) for child in node.children]
            return min(child_probs) * node.probability
        else:  # OR gate
            # At least one child attack must succeed
            child_probs = [self.calculate_attack_probability(child) for child in node.children]
            combined_failure = 1.0
            for prob in child_probs:
                combined_failure *= (1 - prob)
            return (1 - combined_failure) * node.probability
    
    def calculate_attack_cost(self, node: AttackNode) -> float:
        """Calculate expected cost of attack path"""
        if not node.children:
            return node.cost
        
        if node.attack_type == AttackType.AND:
            # Must execute all child attacks
            child_costs = [self.calculate_attack_cost(child) for child in node.children]
            return sum(child_costs) + node.cost
        else:  # OR gate
            # Choose cheapest successful path
            child_costs = [self.calculate_attack_cost(child) for child in node.children]
            return min(child_costs) + node.cost
    
    def identify_critical_paths(self, root: AttackNode) -> List[List[str]]:
        """Identify most critical attack paths"""
        critical_paths = []
        
        def traverse_paths(node: AttackNode, current_path: List[str]):
            current_path.append(node.id)
            
            if not node.children:
                # Leaf node - complete path
                if node.probability > 0.5 and node.impact_level >= 7:
                    critical_paths.append(current_path.copy())
            else:
                for child in node.children:
                    traverse_paths(child, current_path)
            
            current_path.pop()
        
        traverse_paths(root, [])
        return critical_paths
    
    def generate_mitigation_priorities(self, root: AttackNode) -> List[Dict[str, Any]]:
        """Generate prioritized mitigation recommendations"""
        mitigations = {}
        
        def collect_mitigations(node: AttackNode):
            node_risk = node.probability * node.impact_level
            for mitigation in node.mitigations:
                if mitigation not in mitigations:
                    mitigations[mitigation] = {
                        'total_risk_reduction': 0,
                        'applicable_nodes': [],
                        'cost_effectiveness': 0
                    }
                
                mitigations[mitigation]['total_risk_reduction'] += node_risk
                mitigations[mitigation]['applicable_nodes'].append(node.id)
            
            for child in node.children:
                collect_mitigations(child)
        
        collect_mitigations(root)
        
        # Sort by risk reduction potential
        sorted_mitigations = sorted(
            mitigations.items(),
            key=lambda x: x[1]['total_risk_reduction'],
            reverse=True
        )
        
        return [
            {
                'mitigation': name,
                'risk_reduction': data['total_risk_reduction'],
                'coverage': len(data['applicable_nodes']),
                'priority': 'High' if data['total_risk_reduction'] > 20 else 'Medium'
            }
            for name, data in sorted_mitigations[:10]
        ]
    
    def export_tree_analysis(self, root: AttackNode) -> Dict[str, Any]:
        """Export comprehensive attack tree analysis"""
        return {
            'root_objective': root.name,
            'total_attack_probability': self.calculate_attack_probability(root),
            'minimum_attack_cost': self.calculate_attack_cost(root),
            'critical_paths': self.identify_critical_paths(root),
            'mitigation_priorities': self.generate_mitigation_priorities(root),
            'risk_score': root.probability * root.impact_level,
            'node_count': len(self.nodes),
            'recommendations': [
                "Focus on highest-impact mitigations first",
                "Monitor critical attack paths continuously",
                "Regular attack tree updates as threats evolve",
                "Implement defense-in-depth strategies"
            ]
        }`}
              </pre>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2">Attack Tree Benefits</h5>
                <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
                  <li>• Visual attack path representation</li>
                  <li>• Quantitative risk assessment</li>
                  <li>• Critical path identification</li>
                  <li>• Mitigation prioritization</li>
                  <li>• Cost-benefit analysis</li>
                </ul>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Components</h5>
                <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                  <li>• AND/OR gate logic</li>
                  <li>• Probability calculations</li>
                  <li>• Cost estimations</li>
                  <li>• Impact assessments</li>
                  <li>• Detection difficulty ratings</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Risk Assessment Matrix */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <BarChart3 className="h-6 w-6 text-blue-600 mr-3" />
              AI Risk Assessment Matrix
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Comprehensive risk assessment framework for AI systems, combining threat likelihood, impact severity, 
              and AI-specific risk factors to prioritize security investments and mitigation strategies.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">AI Risk Assessment Engine</h4>
              <pre className="text-sm text-blue-800 dark:text-blue-200 overflow-x-auto">
{`import numpy as np
import pandas as pd
from typing import Dict, List, Any, Optional
from dataclasses import dataclass
from enum import Enum
import json

class RiskCategory(Enum):
    TECHNICAL = "technical"
    OPERATIONAL = "operational"
    REPUTATIONAL = "reputational"
    COMPLIANCE = "compliance"
    FINANCIAL = "financial"

class AIRiskFactor(Enum):
    MODEL_COMPLEXITY = "model_complexity"
    DATA_SENSITIVITY = "data_sensitivity"
    DEPLOYMENT_SCALE = "deployment_scale"
    USER_IMPACT = "user_impact"
    REGULATORY_EXPOSURE = "regulatory_exposure"

@dataclass
class RiskScenario:
    id: str
    name: str
    description: str
    category: RiskCategory
    threat_sources: List[str]
    vulnerabilities: List[str]
    likelihood_score: float  # 1-5 scale
    impact_score: float      # 1-5 scale
    ai_risk_factors: Dict[AIRiskFactor, float]
    existing_controls: List[str]
    residual_risk: float
    
class AIRiskAssessment:
    def __init__(self):
        self.risk_scenarios: List[RiskScenario] = []
        self.risk_matrix = np.zeros((5, 5))  # 5x5 likelihood x impact matrix
        
        # AI-specific risk factor weights
        self.ai_factor_weights = {
            AIRiskFactor.MODEL_COMPLEXITY: 0.25,
            AIRiskFactor.DATA_SENSITIVITY: 0.30,
            AIRiskFactor.DEPLOYMENT_SCALE: 0.20,
            AIRiskFactor.USER_IMPACT: 0.15,
            AIRiskFactor.REGULATORY_EXPOSURE: 0.10
        }
        
        # Risk tolerance thresholds
        self.risk_thresholds = {
            'critical': 20,
            'high': 15,
            'medium': 10,
            'low': 5
        }
    
    def assess_ai_system_risk(self, system_profile: Dict[str, Any]) -> Dict[str, Any]:
        """Comprehensive risk assessment for AI system"""
        
        # Generate risk scenarios based on system profile
        scenarios = self._generate_risk_scenarios(system_profile)
        
        # Calculate risk scores
        risk_analysis = {
            'system_profile': system_profile,
            'total_scenarios': len(scenarios),
            'risk_by_category': self._categorize_risks(scenarios),
            'critical_risks': self._identify_critical_risks(scenarios),
            'risk_heat_map': self._generate_risk_heatmap(scenarios),
            'overall_risk_score': self._calculate_overall_risk(scenarios),
            'recommendations': self._generate_risk_recommendations(scenarios),
            'mitigation_priorities': self._prioritize_mitigations(scenarios)
        }
        
        return risk_analysis
    
    def _generate_risk_scenarios(self, system_profile: Dict[str, Any]) -> List[RiskScenario]:
        """Generate relevant risk scenarios based on system characteristics"""
        scenarios = []
        
        # Model-specific risks
        if system_profile.get('model_type') in ['llm', 'generative']:
            scenarios.extend(self._generate_generative_ai_risks(system_profile))
        
        if system_profile.get('handles_pii', False):
            scenarios.extend(self._generate_privacy_risks(system_profile))
        
        if system_profile.get('public_facing', False):
            scenarios.extend(self._generate_public_facing_risks(system_profile))
        
        # Always include common AI risks
        scenarios.extend(self._generate_common_ai_risks(system_profile))
        
        return scenarios
    
    def _generate_generative_ai_risks(self, profile: Dict[str, Any]) -> List[RiskScenario]:
        """Generate risks specific to generative AI systems"""
        risks = []
        
        # Harmful content generation
        harmful_content_risk = RiskScenario(
            id="gen_ai_harmful_content",
            name="Harmful Content Generation",
            description="AI system generates inappropriate, biased, or harmful content",
            category=RiskCategory.REPUTATIONAL,
            threat_sources=["Malicious users", "Unintended model behavior", "Training data bias"],
            vulnerabilities=["Insufficient content filtering", "Inadequate training data curation"],
            likelihood_score=self._assess_likelihood(profile, "harmful_content"),
            impact_score=4.0,
            ai_risk_factors={
                AIRiskFactor.MODEL_COMPLEXITY: 4.0,
                AIRiskFactor.DATA_SENSITIVITY: 3.0,
                AIRiskFactor.USER_IMPACT: 5.0,
                AIRiskFactor.REGULATORY_EXPOSURE: 4.0
            },
            existing_controls=profile.get('content_controls', []),
            residual_risk=0.0
        )
        
        # Prompt injection
        prompt_injection_risk = RiskScenario(
            id="prompt_injection",
            name="Prompt Injection Attack",
            description="Malicious prompts manipulate AI behavior to bypass safety measures",
            category=RiskCategory.TECHNICAL,
            threat_sources=["External attackers", "Malicious users"],
            vulnerabilities=["Insufficient input validation", "Lack of prompt sanitization"],
            likelihood_score=self._assess_likelihood(profile, "prompt_injection"),
            impact_score=3.5,
            ai_risk_factors={
                AIRiskFactor.MODEL_COMPLEXITY: 3.0,
                AIRiskFactor.DEPLOYMENT_SCALE: 4.0,
                AIRiskFactor.USER_IMPACT: 3.0
            },
            existing_controls=profile.get('input_controls', []),
            residual_risk=0.0
        )
        
        risks.extend([harmful_content_risk, prompt_injection_risk])
        return risks
    
    def _generate_privacy_risks(self, profile: Dict[str, Any]) -> List[RiskScenario]:
        """Generate privacy-related risks"""
        risks = []
        
        data_leakage_risk = RiskScenario(
            id="training_data_leakage",
            name="Training Data Leakage",
            description="Sensitive training data exposed through model outputs",
            category=RiskCategory.COMPLIANCE,
            threat_sources=["Model inversion attacks", "Membership inference"],
            vulnerabilities=["Insufficient differential privacy", "Model overfitting"],
            likelihood_score=self._assess_likelihood(profile, "data_leakage"),
            impact_score=4.5,
            ai_risk_factors={
                AIRiskFactor.DATA_SENSITIVITY: 5.0,
                AIRiskFactor.REGULATORY_EXPOSURE: 5.0,
                AIRiskFactor.USER_IMPACT: 4.0
            },
            existing_controls=profile.get('privacy_controls', []),
            residual_risk=0.0
        )
        
        risks.append(data_leakage_risk)
        return risks
    
    def _assess_likelihood(self, profile: Dict[str, Any], risk_type: str) -> float:
        """Assess likelihood based on system profile and risk type"""
        base_likelihood = {
            'harmful_content': 3.0,
            'prompt_injection': 3.5,
            'data_leakage': 2.5,
            'model_theft': 2.0,
            'adversarial_attack': 3.0
        }
        
        likelihood = base_likelihood.get(risk_type, 2.5)
        
        # Adjust based on system characteristics
        if profile.get('public_facing', False):
            likelihood += 0.5
        
        if profile.get('high_value_target', False):
            likelihood += 1.0
        
        if len(profile.get('security_controls', [])) > 5:
            likelihood -= 0.5
        
        return min(5.0, max(1.0, likelihood))
    
    def _calculate_ai_adjusted_risk(self, scenario: RiskScenario) -> float:
        """Calculate risk score adjusted for AI-specific factors"""
        base_risk = scenario.likelihood_score * scenario.impact_score
        
        # Calculate AI factor adjustment
        ai_adjustment = 0
        for factor, score in scenario.ai_risk_factors.items():
            weight = self.ai_factor_weights[factor]
            ai_adjustment += (score - 3.0) * weight  # 3.0 is baseline
        
        # Apply adjustment (can increase or decrease risk)
        adjusted_risk = base_risk * (1 + ai_adjustment)
        
        # Factor in existing controls
        control_reduction = min(0.4, len(scenario.existing_controls) * 0.05)
        final_risk = adjusted_risk * (1 - control_reduction)
        
        scenario.residual_risk = final_risk
        return final_risk
    
    def _identify_critical_risks(self, scenarios: List[RiskScenario]) -> List[Dict[str, Any]]:
        """Identify and rank critical risks"""
        critical_risks = []
        
        for scenario in scenarios:
            risk_score = self._calculate_ai_adjusted_risk(scenario)
            
            if risk_score >= self.risk_thresholds['critical']:
                critical_risks.append({
                    'scenario': scenario.name,
                    'risk_score': risk_score,
                    'category': scenario.category.value,
                    'likelihood': scenario.likelihood_score,
                    'impact': scenario.impact_score,
                    'key_factors': [
                        factor.value for factor, score in scenario.ai_risk_factors.items()
                        if score >= 4.0
                    ],
                    'immediate_actions': self._get_immediate_actions(scenario)
                })
        
        # Sort by risk score
        critical_risks.sort(key=lambda x: x['risk_score'], reverse=True)
        return critical_risks
    
    def _generate_risk_heatmap(self, scenarios: List[RiskScenario]) -> Dict[str, Any]:
        """Generate risk heatmap data"""
        heatmap_data = np.zeros((5, 5))
        scenario_mapping = {}
        
        for scenario in scenarios:
            likelihood_bucket = min(4, int(scenario.likelihood_score) - 1)
            impact_bucket = min(4, int(scenario.impact_score) - 1)
            
            heatmap_data[likelihood_bucket][impact_bucket] += 1
            
            cell_key = f"{likelihood_bucket}_{impact_bucket}"
            if cell_key not in scenario_mapping:
                scenario_mapping[cell_key] = []
            scenario_mapping[cell_key].append(scenario.name)
        
        return {
            'matrix': heatmap_data.tolist(),
            'scenario_mapping': scenario_mapping,
            'risk_distribution': {
                'critical': int(np.sum(heatmap_data[3:, 3:])),
                'high': int(np.sum(heatmap_data[2:, 2:]) - np.sum(heatmap_data[3:, 3:])),
                'medium': int(np.sum(heatmap_data[1:, 1:]) - np.sum(heatmap_data[2:, 2:])),
                'low': int(np.sum(heatmap_data) - np.sum(heatmap_data[1:, 1:]))
            }
        }
    
    def _prioritize_mitigations(self, scenarios: List[RiskScenario]) -> List[Dict[str, Any]]:
        """Prioritize mitigation strategies across all scenarios"""
        mitigation_impact = {}
        
        for scenario in scenarios:
            risk_score = self._calculate_ai_adjusted_risk(scenario)
            
            # Common AI mitigations
            common_mitigations = [
                "Input validation and sanitization",
                "Output monitoring and filtering",
                "Adversarial training",
                "Differential privacy implementation",
                "Regular model auditing",
                "Access controls and authentication"
            ]
            
            for mitigation in common_mitigations:
                if mitigation not in mitigation_impact:
                    mitigation_impact[mitigation] = {
                        'total_risk_reduction': 0,
                        'applicable_scenarios': 0,
                        'implementation_cost': self._estimate_mitigation_cost(mitigation),
                        'roi_score': 0
                    }
                
                # Estimate risk reduction for this mitigation
                reduction = self._estimate_risk_reduction(scenario, mitigation)
                mitigation_impact[mitigation]['total_risk_reduction'] += risk_score * reduction
                mitigation_impact[mitigation]['applicable_scenarios'] += 1
        
        # Calculate ROI scores and sort
        for mitigation_data in mitigation_impact.values():
            mitigation_data['roi_score'] = (
                mitigation_data['total_risk_reduction'] / mitigation_data['implementation_cost']
            )
        
        sorted_mitigations = sorted(
            mitigation_impact.items(),
            key=lambda x: x[1]['roi_score'],
            reverse=True
        )
        
        return [
            {
                'mitigation': name,
                'risk_reduction': data['total_risk_reduction'],
                'roi_score': data['roi_score'],
                'priority': 'High' if data['roi_score'] > 2.0 else 'Medium',
                'implementation_cost': data['implementation_cost']
            }
            for name, data in sorted_mitigations[:10]
        ]`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* MITRE ATT&CK Integration */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">MITRE ATT&CK for AI Systems</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-lg">
            <Shield className="h-8 w-8 text-red-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Attack Tactics</h3>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
              <li>• Initial Access via API endpoints</li>
              <li>• Execution through prompt injection</li>
              <li>• Persistence via model backdoors</li>
              <li>• Defense Evasion using adversarial examples</li>
              <li>• Collection of training data</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 rounded-lg">
            <Target className="h-8 w-8 text-orange-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Techniques</h3>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
              <li>• T1566 - Phishing for ML credentials</li>
              <li>• T1190 - Exploit public-facing ML APIs</li>
              <li>• T1055 - Process injection in ML pipelines</li>
              <li>• T1020 - Automated exfiltration of models</li>
              <li>• T1485 - Data destruction in training sets</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Threat Modeling Best Practices</h2>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800">
            <div className="flex items-start mb-4">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Continuous Assessment</h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Threat modeling is not a one-time activity. Regularly update threat models as your AI system 
                  evolves, new threats emerge, and attack techniques advance.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-4">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Cross-Functional Teams</h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Include AI researchers, security professionals, domain experts, and business stakeholders 
                  in threat modeling exercises for comprehensive coverage.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-4">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Quantitative Analysis</h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Use quantitative methods to prioritize threats based on likelihood, impact, and cost. 
                  This enables data-driven security investment decisions.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-blue-600 mr-3 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Integration with SDLC</h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Integrate threat modeling into your AI development lifecycle. Conduct initial assessments 
                  during design and update models with each significant change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Checklist */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Implementation Checklist</h2>
        
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Essential Activities</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>System architecture documentation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Asset inventory and classification</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>STRIDE analysis completed</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Attack trees constructed</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  <span>Risk assessment matrix populated</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Advanced Capabilities</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                  <span>Automated threat model updates</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                  <span>Quantitative risk scoring</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                  <span>MITRE ATT&CK mapping</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                  <span>Threat intelligence integration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                  <span>Executive reporting dashboards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/learn/red-team"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          ← Red Team Testing
        </Link>
        <Link
          href="/learn"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          Back to Learning Center →
        </Link>
      </div>
    </div>
  )
}