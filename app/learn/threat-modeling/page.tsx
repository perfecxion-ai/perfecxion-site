import type { Metadata } from 'next'
import { 
  AlertTriangle,
  Brain,
  CheckCircle,
  Code,
  Database,
  FileText,
  GitBranch,
  Globe,
  Layers,
  Lock,
  Network,
  Search,
  Shield,
  Target,
  Terminal,
  Users,
  Workflow,
  Zap,
  AlertCircle,
  BarChart3,
  Eye,
  Key,
  LineChart,
  Monitor,
  Package,
  RefreshCw,
  Server,
  Settings,
  Timer,
  TrendingUp,
  UserCheck
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Threat Modeling - AI Security Learning Center | perfecXion.ai',
  description: 'Master threat modeling for AI systems. Learn STRIDE, attack trees, threat matrices, and risk assessment methodologies for comprehensive AI security.',
  keywords: 'threat modeling, AI security, STRIDE, attack trees, risk assessment, security analysis, threat identification',
}

export default function ThreatModelingPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12 prose prose-invert prose-lg">
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
        Threat Modeling
      </h1>
      <p className="text-xl text-gray-300 mb-12 leading-relaxed">
        Learn systematic approaches to identify, analyze, and mitigate threats in AI systems. Master industry-standard methodologies and build comprehensive threat models for your AI infrastructure.
      </p>

      {/* Section 1: Introduction to Threat Modeling */}
      <section className="mb-16 p-8 bg-gray-800/50 rounded-xl border border-gray-700">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
          <Target className="w-8 h-8 text-cyan-400" />
          Introduction to Threat Modeling
        </h2>
        
        <div className="space-y-6 text-gray-300">
          <p>
            Threat modeling is a structured approach to identifying and prioritizing potential threats to AI systems. It enables proactive security by analyzing attack vectors before they can be exploited.
          </p>

          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Core Principles</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Search className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Systematic Analysis</h4>
                    <p className="text-sm">Methodical examination of all system components</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-green-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Defense in Depth</h4>
                    <p className="text-sm">Multiple layers of security controls</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Risk-Based Approach</h4>
                    <p className="text-sm">Prioritize threats by impact and likelihood</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <RefreshCw className="w-5 h-5 text-purple-400 mt-1" />
                  <div>
                    <h4 className="font-semibold text-white">Continuous Process</h4>
                    <p className="text-sm">Regular updates as systems evolve</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-900/20 rounded-lg p-6 border border-blue-700">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">AI-Specific Considerations</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                <span>Model-specific vulnerabilities (adversarial examples, poisoning)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                <span>Data pipeline security throughout the ML lifecycle</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                <span>Prompt injection and jailbreak attempts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                <span>Privacy risks from model inversion and extraction</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: STRIDE Methodology */}
      <section className="mb-16 p-8 bg-gray-800/50 rounded-xl border border-gray-700">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
          <Layers className="w-8 h-8 text-cyan-400" />
          STRIDE Methodology for AI
        </h2>

        <div className="space-y-8 text-gray-300">
          <p>
            STRIDE is a threat modeling framework developed by Microsoft that categorizes threats into six types. Here's how to apply STRIDE to AI systems:
          </p>

          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">STRIDE Categories</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-red-400" />
                  Spoofing Identity
                </h4>
                <p className="text-sm mb-2">Pretending to be another user or system</p>
                <ul className="space-y-1 text-sm ml-6">
                  <li>• API key theft for model access</li>
                  <li>• User impersonation in chat systems</li>
                  <li>• Fake training data sources</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Database className="w-5 h-5 text-orange-400" />
                  Tampering with Data
                </h4>
                <p className="text-sm mb-2">Modifying data without authorization</p>
                <ul className="space-y-1 text-sm ml-6">
                  <li>• Training data poisoning</li>
                  <li>• Model weight manipulation</li>
                  <li>• Prompt injection attacks</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-yellow-400" />
                  Repudiation
                </h4>
                <p className="text-sm mb-2">Denying actions without proof</p>
                <ul className="space-y-1 text-sm ml-6">
                  <li>• Lack of audit trails for model decisions</li>
                  <li>• Missing query logging</li>
                  <li>• Insufficient user action tracking</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-green-400" />
                  Information Disclosure
                </h4>
                <p className="text-sm mb-2">Exposing information to unauthorized users</p>
                <ul className="space-y-1 text-sm ml-6">
                  <li>• Model inversion attacks</li>
                  <li>• Training data extraction</li>
                  <li>• Sensitive information in responses</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-blue-400" />
                  Denial of Service
                </h4>
                <p className="text-sm mb-2">Making resources unavailable</p>
                <ul className="space-y-1 text-sm ml-6">
                  <li>• Resource exhaustion attacks</li>
                  <li>• Adversarial input causing crashes</li>
                  <li>• API rate limit bypass</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  Elevation of Privilege
                </h4>
                <p className="text-sm mb-2">Gaining unauthorized permissions</p>
                <ul className="space-y-1 text-sm ml-6">
                  <li>• Jailbreaking safety controls</li>
                  <li>• Accessing restricted models</li>
                  <li>• Bypassing usage limits</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">STRIDE Implementation</h3>
            <pre className="bg-gray-950 p-4 rounded-lg overflow-x-auto text-sm">
              <code className="language-python text-gray-300">{`# STRIDE Threat Modeling Framework for AI Systems
from dataclasses import dataclass
from typing import Dict, List, Optional, Set
from enum import Enum
import json

class ThreatCategory(Enum):
    SPOOFING = "Spoofing"
    TAMPERING = "Tampering"
    REPUDIATION = "Repudiation"
    INFORMATION_DISCLOSURE = "Information Disclosure"
    DENIAL_OF_SERVICE = "Denial of Service"
    ELEVATION_OF_PRIVILEGE = "Elevation of Privilege"

class Severity(Enum):
    CRITICAL = 5
    HIGH = 4
    MEDIUM = 3
    LOW = 2
    INFO = 1

@dataclass
class Threat:
    id: str
    name: str
    category: ThreatCategory
    description: str
    affected_components: List[str]
    attack_vectors: List[str]
    severity: Severity
    likelihood: int  # 1-5
    mitigations: List[str]
    
    @property
    def risk_score(self) -> int:
        return self.severity.value * self.likelihood

class AISystemSTRIDE:
    def __init__(self):
        self.components = {}
        self.threats = []
        self.threat_id_counter = 0
        
    def add_component(self, name: str, component_type: str, 
                     interfaces: List[str]):
        """Add system component to model"""
        self.components[name] = {
            'type': component_type,
            'interfaces': interfaces,
            'threats': []
        }
    
    def analyze_spoofing_threats(self) -> List[Threat]:
        """Identify spoofing threats"""
        spoofing_threats = []
        
        # API Authentication Spoofing
        if any(c['type'] == 'api' for c in self.components.values()):
            threat = Threat(
                id=f"T{self.threat_id_counter:04d}",
                name="API Key Theft",
                category=ThreatCategory.SPOOFING,
                description="Attacker steals API keys to impersonate legitimate users",
                affected_components=["API Gateway", "Authentication Service"],
                attack_vectors=["Phishing", "Code repository exposure", "MITM attacks"],
                severity=Severity.HIGH,
                likelihood=3,
                mitigations=[
                    "Implement API key rotation",
                    "Use OAuth 2.0 with short-lived tokens",
                    "Monitor for anomalous API usage patterns",
                    "Implement IP allowlisting"
                ]
            )
            spoofing_threats.append(threat)
            self.threat_id_counter += 1
        
        # Model Access Spoofing
        if any(c['type'] == 'model' for c in self.components.values()):
            threat = Threat(
                id=f"T{self.threat_id_counter:04d}",
                name="Model Access Impersonation",
                category=ThreatCategory.SPOOFING,
                description="Unauthorized access to models by spoofing identity",
                affected_components=["Model Server", "Access Control"],
                attack_vectors=["Session hijacking", "Token replay", "Identity federation attacks"],
                severity=Severity.CRITICAL,
                likelihood=2,
                mitigations=[
                    "Implement mutual TLS authentication",
                    "Use hardware security modules (HSM)",
                    "Deploy zero-trust architecture",
                    "Enable continuous authentication"
                ]
            )
            spoofing_threats.append(threat)
            self.threat_id_counter += 1
        
        return spoofing_threats
    
    def analyze_tampering_threats(self) -> List[Threat]:
        """Identify tampering threats"""
        tampering_threats = []
        
        # Training Data Tampering
        threat = Threat(
            id=f"T{self.threat_id_counter:04d}",
            name="Training Data Poisoning",
            category=ThreatCategory.TAMPERING,
            description="Malicious modification of training data to corrupt model behavior",
            affected_components=["Data Pipeline", "Training Infrastructure"],
            attack_vectors=["Supply chain attacks", "Insider threats", "Compromised data sources"],
            severity=Severity.CRITICAL,
            likelihood=3,
            mitigations=[
                "Implement data validation pipelines",
                "Use cryptographic signatures for data integrity",
                "Deploy anomaly detection on training data",
                "Maintain data provenance tracking"
            ]
        )
        tampering_threats.append(threat)
        self.threat_id_counter += 1
        
        # Model Weight Tampering
        threat = Threat(
            id=f"T{self.threat_id_counter:04d}",
            name="Model Weight Manipulation",
            category=ThreatCategory.TAMPERING,
            description="Direct modification of model parameters to alter behavior",
            affected_components=["Model Storage", "Model Server"],
            attack_vectors=["Unauthorized file access", "Memory manipulation", "Supply chain compromise"],
            severity=Severity.CRITICAL,
            likelihood=2,
            mitigations=[
                "Encrypt models at rest and in transit",
                "Implement model signing and verification",
                "Use secure enclaves for model execution",
                "Regular model integrity checks"
            ]
        )
        tampering_threats.append(threat)
        self.threat_id_counter += 1
        
        return tampering_threats
    
    def analyze_information_disclosure_threats(self) -> List[Threat]:
        """Identify information disclosure threats"""
        info_threats = []
        
        # Model Inversion
        threat = Threat(
            id=f"T{self.threat_id_counter:04d}",
            name="Model Inversion Attack",
            category=ThreatCategory.INFORMATION_DISCLOSURE,
            description="Extracting training data or sensitive information from model outputs",
            affected_components=["Model API", "Inference Engine"],
            attack_vectors=["Repeated queries", "Gradient-based attacks", "Membership inference"],
            severity=Severity.HIGH,
            likelihood=4,
            mitigations=[
                "Implement differential privacy",
                "Add output perturbation",
                "Limit query rates and complexity",
                "Monitor for extraction patterns"
            ]
        )
        info_threats.append(threat)
        self.threat_id_counter += 1
        
        # Prompt Leakage
        threat = Threat(
            id=f"T{self.threat_id_counter:04d}",
            name="System Prompt Disclosure",
            category=ThreatCategory.INFORMATION_DISCLOSURE,
            description="Extraction of system prompts revealing security controls",
            affected_components=["LLM Service", "Prompt Management"],
            attack_vectors=["Prompt injection", "Side-channel attacks", "Error message analysis"],
            severity=Severity.MEDIUM,
            likelihood=4,
            mitigations=[
                "Sanitize error messages",
                "Implement prompt isolation",
                "Use prompt encryption",
                "Deploy output filtering"
            ]
        )
        info_threats.append(threat)
        self.threat_id_counter += 1
        
        return info_threats
    
    def generate_threat_model(self) -> Dict:
        """Generate complete threat model"""
        # Analyze all threat categories
        all_threats = []
        all_threats.extend(self.analyze_spoofing_threats())
        all_threats.extend(self.analyze_tampering_threats())
        all_threats.extend(self.analyze_information_disclosure_threats())
        # Add other categories...
        
        # Sort by risk score
        all_threats.sort(key=lambda t: t.risk_score, reverse=True)
        
        return {
            'system_components': self.components,
            'threats': [self._threat_to_dict(t) for t in all_threats],
            'risk_summary': self._calculate_risk_summary(all_threats),
            'mitigation_priorities': self._prioritize_mitigations(all_threats)
        }
    
    def _threat_to_dict(self, threat: Threat) -> Dict:
        """Convert threat to dictionary"""
        return {
            'id': threat.id,
            'name': threat.name,
            'category': threat.category.value,
            'description': threat.description,
            'affected_components': threat.affected_components,
            'attack_vectors': threat.attack_vectors,
            'severity': threat.severity.name,
            'likelihood': threat.likelihood,
            'risk_score': threat.risk_score,
            'mitigations': threat.mitigations
        }
    
    def _calculate_risk_summary(self, threats: List[Threat]) -> Dict:
        """Calculate overall risk metrics"""
        if not threats:
            return {'total_risk': 0, 'critical_threats': 0}
        
        return {
            'total_threats': len(threats),
            'critical_threats': sum(1 for t in threats if t.severity == Severity.CRITICAL),
            'high_threats': sum(1 for t in threats if t.severity == Severity.HIGH),
            'average_risk_score': sum(t.risk_score for t in threats) / len(threats),
            'max_risk_score': max(t.risk_score for t in threats)
        }

# Usage Example
def create_llm_threat_model():
    stride = AISystemSTRIDE()
    
    # Define system components
    stride.add_component("API Gateway", "api", ["HTTP", "WebSocket"])
    stride.add_component("LLM Service", "model", ["REST API", "gRPC"])
    stride.add_component("Vector Database", "database", ["Query API"])
    stride.add_component("Training Pipeline", "pipeline", ["Data Input", "Model Output"])
    
    # Generate threat model
    threat_model = stride.generate_threat_model()
    
    print(json.dumps(threat_model, indent=2))`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Section 3: Attack Trees */}
      <section className="mb-16 p-8 bg-gray-800/50 rounded-xl border border-gray-700">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
          <GitBranch className="w-8 h-8 text-cyan-400" />
          Attack Trees for AI Systems
        </h2>

        <div className="space-y-8 text-gray-300">
          <p>
            Attack trees provide a hierarchical representation of potential attack paths. They help visualize how multiple vulnerabilities can be chained together to achieve an attacker's goal.
          </p>

          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Attack Tree Implementation</h3>
            <pre className="bg-gray-950 p-4 rounded-lg overflow-x-auto text-sm">
              <code className="language-python text-gray-300">{`# Attack Tree Analysis for AI Systems
from typing import List, Dict, Optional, Tuple
import graphviz
import numpy as np

class AttackNode:
    def __init__(self, name: str, description: str, 
                 cost: float = 0, difficulty: int = 1, 
                 detection_prob: float = 0.5):
        self.name = name
        self.description = description
        self.cost = cost
        self.difficulty = difficulty  # 1-5 scale
        self.detection_prob = detection_prob
        self.children = []
        self.node_type = "AND"  # AND or OR
        
    def add_child(self, child: 'AttackNode', node_type: str = "OR"):
        """Add child node to attack tree"""
        self.children.append(child)
        if len(self.children) > 1:
            self.node_type = node_type
            
    def calculate_attack_metrics(self) -> Dict[str, float]:
        """Calculate cumulative attack metrics"""
        if not self.children:
            return {
                'cost': self.cost,
                'difficulty': self.difficulty,
                'detection_prob': self.detection_prob,
                'success_prob': 1 - (self.difficulty / 5)
            }
        
        child_metrics = [child.calculate_attack_metrics() 
                        for child in self.children]
        
        if self.node_type == "AND":
            # All children must succeed
            total_cost = sum(m['cost'] for m in child_metrics)
            max_difficulty = max(m['difficulty'] for m in child_metrics)
            combined_detection = 1 - np.prod([1 - m['detection_prob'] 
                                            for m in child_metrics])
            success_prob = np.prod([m['success_prob'] for m in child_metrics])
        else:  # OR
            # Only one child needs to succeed
            min_cost = min(m['cost'] for m in child_metrics)
            min_difficulty = min(m['difficulty'] for m in child_metrics)
            # Detection probability of easiest path
            easiest_idx = np.argmin([m['difficulty'] for m in child_metrics])
            combined_detection = child_metrics[easiest_idx]['detection_prob']
            success_prob = 1 - np.prod([1 - m['success_prob'] 
                                      for m in child_metrics])
        
        return {
            'cost': total_cost if self.node_type == "AND" else min_cost,
            'difficulty': max_difficulty if self.node_type == "AND" else min_difficulty,
            'detection_prob': combined_detection,
            'success_prob': success_prob
        }

class AIAttackTree:
    def __init__(self, goal: str):
        self.root = AttackNode(goal, f"Achieve: {goal}")
        self.nodes = [self.root]
        
    def build_llm_extraction_tree(self):
        """Build attack tree for LLM data extraction"""
        # Level 1: Main attack vectors
        direct_extraction = AttackNode(
            "Direct Extraction",
            "Extract data through model queries",
            cost=100, difficulty=3, detection_prob=0.7
        )
        
        side_channel = AttackNode(
            "Side Channel Attack",
            "Extract data through timing or resource usage",
            cost=500, difficulty=4, detection_prob=0.3
        )
        
        model_stealing = AttackNode(
            "Model Stealing",
            "Replicate model to analyze offline",
            cost=1000, difficulty=5, detection_prob=0.5
        )
        
        self.root.add_child(direct_extraction, "OR")
        self.root.add_child(side_channel, "OR")
        self.root.add_child(model_stealing, "OR")
        
        # Level 2: Direct extraction methods
        prompt_injection = AttackNode(
            "Prompt Injection",
            "Inject malicious prompts to extract data",
            cost=50, difficulty=2, detection_prob=0.8
        )
        
        membership_inference = AttackNode(
            "Membership Inference",
            "Determine if data was in training set",
            cost=200, difficulty=3, detection_prob=0.5
        )
        
        direct_extraction.add_child(prompt_injection, "OR")
        direct_extraction.add_child(membership_inference, "OR")
        
        # Level 3: Prompt injection techniques
        ignore_instructions = AttackNode(
            "Ignore Instructions",
            "Make model ignore safety instructions",
            cost=20, difficulty=2, detection_prob=0.9
        )
        
        encoding_bypass = AttackNode(
            "Encoding Bypass",
            "Use encoding to bypass filters",
            cost=30, difficulty=3, detection_prob=0.6
        )
        
        prompt_injection.add_child(ignore_instructions, "OR")
        prompt_injection.add_child(encoding_bypass, "OR")
        
    def build_model_poisoning_tree(self):
        """Build attack tree for model poisoning"""
        # Root is already set
        poisoning_root = AttackNode(
            "Poison AI Model",
            "Corrupt model behavior through poisoning"
        )
        
        # Level 1: Poisoning vectors
        training_poisoning = AttackNode(
            "Training Data Poisoning",
            "Inject malicious data during training",
            cost=1000, difficulty=3, detection_prob=0.6
        )
        
        fine_tuning_attack = AttackNode(
            "Fine-tuning Attack",
            "Poison during fine-tuning phase",
            cost=500, difficulty=2, detection_prob=0.7
        )
        
        supply_chain = AttackNode(
            "Supply Chain Attack",
            "Compromise pre-trained models",
            cost=5000, difficulty=4, detection_prob=0.4
        )
        
        poisoning_root.add_child(training_poisoning, "OR")
        poisoning_root.add_child(fine_tuning_attack, "OR")
        poisoning_root.add_child(supply_chain, "OR")
        
        # Level 2: Training poisoning methods
        label_flipping = AttackNode(
            "Label Flipping",
            "Flip labels on training data",
            cost=200, difficulty=2, detection_prob=0.7
        )
        
        backdoor_injection = AttackNode(
            "Backdoor Injection",
            "Insert backdoor triggers in data",
            cost=500, difficulty=3, detection_prob=0.5
        )
        
        gradient_attack = AttackNode(
            "Gradient Attack",
            "Manipulate gradients during training",
            cost=800, difficulty=4, detection_prob=0.3
        )
        
        training_poisoning.add_child(label_flipping, "OR")
        training_poisoning.add_child(backdoor_injection, "OR")
        training_poisoning.add_child(gradient_attack, "OR")
        
        return poisoning_root
    
    def visualize_tree(self, node: Optional[AttackNode] = None, 
                      graph: Optional[graphviz.Digraph] = None) -> graphviz.Digraph:
        """Generate visual representation of attack tree"""
        if graph is None:
            graph = graphviz.Digraph('AttackTree', format='png')
            graph.attr(rankdir='TB')
        
        if node is None:
            node = self.root
        
        # Calculate metrics for coloring
        metrics = node.calculate_attack_metrics()
        
        # Color based on difficulty
        if metrics['difficulty'] <= 2:
            color = 'red'  # Easy attack
        elif metrics['difficulty'] <= 3:
            color = 'orange'  # Medium difficulty
        else:
            color = 'green'  # Hard attack
        
        # Add node
        label = f"{node.name}\\n"
        label += f"Cost: ${metrics['cost']:.0f}\\n"
        label += f"Difficulty: {metrics['difficulty']}/5\\n"
        label += f"Detection: {metrics['detection_prob']:.1%}"
        
        graph.node(node.name, label=label, color=color, style='filled', 
                  fillcolor=f"{color}20")
        
        # Add edges and children
        for child in node.children:
            graph.edge(node.name, child.name, 
                      label=node.node_type if len(node.children) > 1 else "")
            self.visualize_tree(child, graph)
        
        return graph
    
    def find_optimal_attack_path(self) -> List[AttackNode]:
        """Find the most efficient attack path"""
        def find_paths(node: AttackNode, path: List[AttackNode] = []) -> List[List[AttackNode]]:
            path = path + [node]
            
            if not node.children:
                return [path]
            
            paths = []
            if node.node_type == "OR":
                # For OR nodes, explore all individual paths
                for child in node.children:
                    paths.extend(find_paths(child, path))
            else:  # AND
                # For AND nodes, must include all children
                combined_path = path
                for child in node.children:
                    child_paths = find_paths(child, [])
                    # Take shortest path for each child
                    shortest = min(child_paths, key=len)
                    combined_path.extend(shortest)
                paths.append(combined_path)
            
            return paths
        
        all_paths = find_paths(self.root)
        
        # Score paths based on cost, difficulty, and detection
        path_scores = []
        for path in all_paths:
            total_cost = sum(node.cost for node in path[1:])  # Exclude root
            max_difficulty = max(node.difficulty for node in path[1:])
            detection_risk = 1 - np.prod([1 - node.detection_prob 
                                        for node in path[1:]])
            
            # Combined score (lower is better)
            score = total_cost + (max_difficulty * 1000) + (detection_risk * 5000)
            path_scores.append((path, score))
        
        # Return optimal path
        optimal_path, _ = min(path_scores, key=lambda x: x[1])
        return optimal_path

# Automated Attack Path Analysis
class AttackPathAnalyzer:
    def __init__(self, attack_tree: AIAttackTree):
        self.tree = attack_tree
        self.vulnerabilities = {}
        
    def add_vulnerability(self, component: str, vuln_type: str, 
                         severity: float):
        """Add discovered vulnerability"""
        if component not in self.vulnerabilities:
            self.vulnerabilities[component] = []
        
        self.vulnerabilities[component].append({
            'type': vuln_type,
            'severity': severity
        })
    
    def analyze_attack_surface(self) -> Dict:
        """Analyze complete attack surface"""
        metrics = self.tree.root.calculate_attack_metrics()
        optimal_path = self.tree.find_optimal_attack_path()
        
        return {
            'total_attack_cost': metrics['cost'],
            'overall_difficulty': metrics['difficulty'],
            'detection_probability': metrics['detection_prob'],
            'success_probability': metrics['success_prob'],
            'optimal_attack_path': [node.name for node in optimal_path],
            'vulnerabilities': self.vulnerabilities,
            'risk_level': self._calculate_risk_level(metrics)
        }
    
    def _calculate_risk_level(self, metrics: Dict) -> str:
        """Calculate overall risk level"""
        risk_score = (metrics['success_prob'] * 10 + 
                     (5 - metrics['difficulty']) * 2 +
                     (1 - metrics['detection_prob']) * 3)
        
        if risk_score > 12:
            return "CRITICAL"
        elif risk_score > 8:
            return "HIGH"
        elif risk_score > 5:
            return "MEDIUM"
        else:
            return "LOW"`}</code>
            </pre>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Visual Attack Tree Example</h3>
            <div className="text-center p-8 bg-gray-950 rounded-lg">
              <div className="inline-block text-left">
                <div className="flex flex-col items-center">
                  <div className="p-3 bg-red-900/20 border border-red-700 rounded-lg mb-4">
                    <p className="font-semibold">Extract Training Data</p>
                    <p className="text-sm text-gray-400">Goal: Extract sensitive training data</p>
                  </div>
                  <div className="w-px h-8 bg-gray-600"></div>
                  <div className="flex gap-8 items-start">
                    <div className="flex flex-col items-center">
                      <div className="p-3 bg-orange-900/20 border border-orange-700 rounded-lg">
                        <p className="font-semibold">Direct Query</p>
                        <p className="text-xs text-gray-400">Cost: $100</p>
                        <p className="text-xs text-gray-400">Difficulty: 3/5</p>
                      </div>
                      <div className="w-px h-4 bg-gray-600 mt-2"></div>
                      <div className="flex gap-4">
                        <div className="p-2 bg-yellow-900/20 border border-yellow-700 rounded text-sm">
                          <p>Prompt Injection</p>
                        </div>
                        <div className="p-2 bg-yellow-900/20 border border-yellow-700 rounded text-sm">
                          <p>Membership Inference</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="p-3 bg-green-900/20 border border-green-700 rounded-lg">
                        <p className="font-semibold">Model Stealing</p>
                        <p className="text-xs text-gray-400">Cost: $1000</p>
                        <p className="text-xs text-gray-400">Difficulty: 5/5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Threat Matrices */}
      <section className="mb-16 p-8 bg-gray-800/50 rounded-xl border border-gray-700">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
          <BarChart3 className="w-8 h-8 text-cyan-400" />
          AI Threat Matrices
        </h2>

        <div className="space-y-8 text-gray-300">
          <p>
            Threat matrices provide a structured way to map threats against system components and security controls, helping identify gaps in protection.
          </p>

          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">MITRE ATT&CK for AI</h3>
            <pre className="bg-gray-950 p-4 rounded-lg overflow-x-auto text-sm">
              <code className="language-python text-gray-300">{`# AI Threat Matrix Based on MITRE ATT&CK Framework
import pandas as pd
import numpy as np
from typing import Dict, List, Tuple
import seaborn as sns
import matplotlib.pyplot as plt

class AIThreatMatrix:
    def __init__(self):
        self.tactics = [
            "Initial Access",
            "Execution",
            "Persistence",
            "Privilege Escalation",
            "Defense Evasion",
            "Discovery",
            "Collection",
            "Exfiltration",
            "Impact"
        ]
        
        self.ai_techniques = {
            "Initial Access": [
                "Compromise Data Pipeline",
                "Supply Chain Compromise",
                "Valid Accounts",
                "Public-Facing Application"
            ],
            "Execution": [
                "Prompt Injection",
                "Model Invocation",
                "API Abuse",
                "Scheduled Task"
            ],
            "Persistence": [
                "Model Backdoor",
                "Training Pipeline Compromise",
                "Account Manipulation",
                "Registry Modification"
            ],
            "Privilege Escalation": [
                "Jailbreak Techniques",
                "Role Assumption",
                "Token Manipulation",
                "Bypass User Mode"
            ],
            "Defense Evasion": [
                "Adversarial Examples",
                "Encoding Techniques",
                "Model Evasion",
                "Output Filtering Bypass"
            ],
            "Discovery": [
                "Model Architecture Discovery",
                "System Information Discovery",
                "Permission Discovery",
                "Data Source Enumeration"
            ],
            "Collection": [
                "Model Extraction",
                "Training Data Harvesting",
                "Prompt History Collection",
                "Output Scraping"
            ],
            "Exfiltration": [
                "Inference API Exfiltration",
                "Model Weight Theft",
                "Side Channel Leakage",
                "Automated Collection"
            ],
            "Impact": [
                "Model Corruption",
                "Service Degradation",
                "Data Poisoning",
                "Misinformation Generation"
            ]
        }
        
        self.controls = {}
        self.threat_scores = {}
        
    def add_control(self, control_name: str, 
                   effectiveness: Dict[str, float]):
        """Add security control with effectiveness ratings"""
        self.controls[control_name] = effectiveness
        
    def assess_threat(self, tactic: str, technique: str, 
                     likelihood: float, impact: float) -> float:
        """Assess individual threat"""
        key = f"{tactic}:{technique}"
        risk_score = likelihood * impact
        
        # Apply control effectiveness
        for control, effectiveness in self.controls.items():
            if tactic in effectiveness:
                risk_score *= (1 - effectiveness[tactic])
        
        self.threat_scores[key] = risk_score
        return risk_score
    
    def generate_matrix(self) -> pd.DataFrame:
        """Generate threat matrix DataFrame"""
        matrix_data = []
        
        for tactic in self.tactics:
            for technique in self.ai_techniques.get(tactic, []):
                # Base risk assessment
                likelihood = np.random.uniform(0.3, 0.9)  # Replace with real data
                impact = np.random.uniform(0.4, 1.0)      # Replace with real data
                
                risk_score = self.assess_threat(tactic, technique, 
                                               likelihood, impact)
                
                matrix_data.append({
                    'Tactic': tactic,
                    'Technique': technique,
                    'Likelihood': likelihood,
                    'Impact': impact,
                    'Risk_Score': risk_score,
                    'Mitigated': risk_score < 0.3
                })
        
        return pd.DataFrame(matrix_data)
    
    def visualize_heatmap(self, save_path: Optional[str] = None):
        """Create heatmap visualization of threat matrix"""
        # Prepare data for heatmap
        heatmap_data = {}
        for tactic in self.tactics:
            heatmap_data[tactic] = []
            for technique in self.ai_techniques.get(tactic, []):
                key = f"{tactic}:{technique}"
                score = self.threat_scores.get(key, 0)
                heatmap_data[tactic].append(score)
        
        # Pad lists to same length
        max_len = max(len(v) for v in heatmap_data.values())
        for tactic in heatmap_data:
            while len(heatmap_data[tactic]) < max_len:
                heatmap_data[tactic].append(np.nan)
        
        # Create heatmap
        df_heatmap = pd.DataFrame(heatmap_data)
        
        plt.figure(figsize=(12, 8))
        sns.heatmap(df_heatmap.T, 
                   cmap='YlOrRd',
                   cbar_kws={'label': 'Risk Score'},
                   annot=True,
                   fmt='.2f',
                   linewidths=0.5)
        
        plt.title('AI System Threat Matrix Heatmap')
        plt.xlabel('Technique Index')
        plt.ylabel('Tactic')
        plt.tight_layout()
        
        if save_path:
            plt.savefig(save_path)
        plt.show()
    
    def prioritize_mitigations(self) -> List[Dict]:
        """Prioritize mitigation efforts based on risk"""
        high_risk_threats = []
        
        for key, score in self.threat_scores.items():
            if score > 0.7:  # High risk threshold
                tactic, technique = key.split(':')
                high_risk_threats.append({
                    'tactic': tactic,
                    'technique': technique,
                    'risk_score': score,
                    'recommended_controls': self._recommend_controls(tactic, technique)
                })
        
        # Sort by risk score
        high_risk_threats.sort(key=lambda x: x['risk_score'], reverse=True)
        return high_risk_threats
    
    def _recommend_controls(self, tactic: str, technique: str) -> List[str]:
        """Recommend controls for specific threat"""
        recommendations = []
        
        control_mapping = {
            "Initial Access": ["Input validation", "Authentication", "Network segmentation"],
            "Execution": ["Sandboxing", "Rate limiting", "Input sanitization"],
            "Persistence": ["Integrity monitoring", "Access reviews", "Immutable infrastructure"],
            "Privilege Escalation": ["Least privilege", "Role-based access", "Privilege bracketing"],
            "Defense Evasion": ["Anomaly detection", "Deep packet inspection", "Behavioral analysis"],
            "Discovery": ["API obfuscation", "Honeypots", "Deception technology"],
            "Collection": ["Data loss prevention", "Encryption", "Access logging"],
            "Exfiltration": ["Egress filtering", "Data classification", "Network monitoring"],
            "Impact": ["Backup systems", "Rollback capability", "Incident response"]
        }
        
        return control_mapping.get(tactic, ["General monitoring", "Access control"])

# Threat Intelligence Integration
class ThreatIntelligence:
    def __init__(self):
        self.threat_feeds = []
        self.indicators = {}
        self.ttps = {}  # Tactics, Techniques, and Procedures
        
    def ingest_threat_feed(self, feed_data: Dict):
        """Ingest threat intelligence feed"""
        for threat in feed_data.get('threats', []):
            threat_id = threat['id']
            self.indicators[threat_id] = {
                'description': threat['description'],
                'indicators': threat.get('indicators', []),
                'ttps': threat.get('ttps', []),
                'first_seen': threat.get('first_seen'),
                'last_seen': threat.get('last_seen'),
                'severity': threat.get('severity', 'medium')
            }
            
            # Update TTP database
            for ttp in threat.get('ttps', []):
                if ttp not in self.ttps:
                    self.ttps[ttp] = []
                self.ttps[ttp].append(threat_id)
    
    def match_indicators(self, system_data: Dict) -> List[Dict]:
        """Match system data against threat indicators"""
        matches = []
        
        for threat_id, threat_data in self.indicators.items():
            for indicator in threat_data['indicators']:
                if self._check_indicator_match(indicator, system_data):
                    matches.append({
                        'threat_id': threat_id,
                        'indicator': indicator,
                        'severity': threat_data['severity'],
                        'description': threat_data['description']
                    })
        
        return matches
    
    def _check_indicator_match(self, indicator: Dict, 
                              system_data: Dict) -> bool:
        """Check if indicator matches system data"""
        indicator_type = indicator.get('type')
        value = indicator.get('value')
        
        if indicator_type == 'query_pattern':
            return value in system_data.get('recent_queries', '')
        elif indicator_type == 'api_pattern':
            return value in system_data.get('api_calls', [])
        elif indicator_type == 'model_hash':
            return value == system_data.get('model_hash')
        
        return False`}</code>
            </pre>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Threat Matrix Visualization</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="px-4 py-2 text-left">Tactic</th>
                    <th className="px-4 py-2 text-left">Technique</th>
                    <th className="px-4 py-2 text-center">Risk</th>
                    <th className="px-4 py-2 text-left">Mitigations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-2">Initial Access</td>
                    <td className="px-4 py-2">Data Pipeline Compromise</td>
                    <td className="px-4 py-2 text-center">
                      <span className="px-2 py-1 bg-red-900/50 rounded text-red-400">High</span>
                    </td>
                    <td className="px-4 py-2">Input validation, Authentication</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-2">Execution</td>
                    <td className="px-4 py-2">Prompt Injection</td>
                    <td className="px-4 py-2 text-center">
                      <span className="px-2 py-1 bg-orange-900/50 rounded text-orange-400">Medium</span>
                    </td>
                    <td className="px-4 py-2">Input sanitization, Rate limiting</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-2">Collection</td>
                    <td className="px-4 py-2">Model Extraction</td>
                    <td className="px-4 py-2 text-center">
                      <span className="px-2 py-1 bg-red-900/50 rounded text-red-400">High</span>
                    </td>
                    <td className="px-4 py-2">API monitoring, Rate limiting</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="px-4 py-2">Impact</td>
                    <td className="px-4 py-2">Model Corruption</td>
                    <td className="px-4 py-2 text-center">
                      <span className="px-2 py-1 bg-yellow-900/50 rounded text-yellow-400">Critical</span>
                    </td>
                    <td className="px-4 py-2">Integrity checks, Backups</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Risk Assessment */}
      <section className="mb-16 p-8 bg-gray-800/50 rounded-xl border border-gray-700">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
          <LineChart className="w-8 h-8 text-cyan-400" />
          Risk Assessment & Scoring
        </h2>

        <div className="space-y-8 text-gray-300">
          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Comprehensive Risk Framework</h3>
            <pre className="bg-gray-950 p-4 rounded-lg overflow-x-auto text-sm">
              <code className="language-python text-gray-300">{`# AI System Risk Assessment Framework
from dataclasses import dataclass
from typing import Dict, List, Optional, Tuple
import json
from datetime import datetime

@dataclass
class RiskFactor:
    name: str
    category: str  # Technical, Business, Compliance, Operational
    description: str
    likelihood: float  # 0-1
    impact: float  # 0-1
    current_controls: List[str]
    control_effectiveness: float  # 0-1
    
    @property
    def inherent_risk(self) -> float:
        """Risk without controls"""
        return self.likelihood * self.impact
    
    @property
    def residual_risk(self) -> float:
        """Risk with current controls"""
        return self.inherent_risk * (1 - self.control_effectiveness)

class AIRiskAssessment:
    def __init__(self, system_name: str):
        self.system_name = system_name
        self.risk_factors = []
        self.risk_appetite = 0.3  # Organization's risk tolerance
        self.assessment_date = datetime.utcnow()
        
    def add_risk_factor(self, risk: RiskFactor):
        """Add risk factor to assessment"""
        self.risk_factors.append(risk)
        
    def calculate_risk_scores(self) -> Dict[str, float]:
        """Calculate various risk metrics"""
        if not self.risk_factors:
            return {}
        
        # Category-wise risks
        category_risks = {}
        for risk in self.risk_factors:
            if risk.category not in category_risks:
                category_risks[risk.category] = []
            category_risks[risk.category].append(risk.residual_risk)
        
        # Calculate aggregated scores
        scores = {
            'overall_inherent_risk': sum(r.inherent_risk for r in self.risk_factors) / len(self.risk_factors),
            'overall_residual_risk': sum(r.residual_risk for r in self.risk_factors) / len(self.risk_factors),
            'max_individual_risk': max(r.residual_risk for r in self.risk_factors),
            'risks_above_appetite': sum(1 for r in self.risk_factors if r.residual_risk > self.risk_appetite)
        }
        
        # Category averages
        for category, risks in category_risks.items():
            scores[f'{category.lower()}_risk'] = sum(risks) / len(risks)
        
        return scores
    
    def prioritize_risks(self) -> List[RiskFactor]:
        """Prioritize risks by residual risk score"""
        return sorted(self.risk_factors, 
                     key=lambda r: r.residual_risk, 
                     reverse=True)
    
    def generate_mitigation_plan(self) -> List[Dict]:
        """Generate risk mitigation recommendations"""
        mitigation_plan = []
        
        for risk in self.prioritize_risks():
            if risk.residual_risk > self.risk_appetite:
                mitigation = {
                    'risk_name': risk.name,
                    'current_risk': risk.residual_risk,
                    'target_risk': self.risk_appetite,
                    'gap': risk.residual_risk - self.risk_appetite,
                    'recommendations': self._generate_recommendations(risk),
                    'priority': self._calculate_priority(risk)
                }
                mitigation_plan.append(mitigation)
        
        return mitigation_plan
    
    def _generate_recommendations(self, risk: RiskFactor) -> List[str]:
        """Generate specific recommendations based on risk type"""
        recommendations = []
        
        # Generic recommendations based on control effectiveness
        if risk.control_effectiveness < 0.3:
            recommendations.append("Implement basic controls immediately")
        elif risk.control_effectiveness < 0.6:
            recommendations.append("Enhance existing controls")
        
        # Specific recommendations by category
        if risk.category == "Technical":
            if "encryption" not in [c.lower() for c in risk.current_controls]:
                recommendations.append("Implement end-to-end encryption")
            if "monitoring" not in [c.lower() for c in risk.current_controls]:
                recommendations.append("Deploy real-time monitoring")
                
        elif risk.category == "Compliance":
            recommendations.append("Conduct compliance gap analysis")
            recommendations.append("Implement audit logging")
            
        elif risk.category == "Operational":
            recommendations.append("Develop incident response procedures")
            recommendations.append("Conduct regular security training")
        
        return recommendations
    
    def _calculate_priority(self, risk: RiskFactor) -> str:
        """Calculate mitigation priority"""
        if risk.residual_risk > 0.8:
            return "CRITICAL"
        elif risk.residual_risk > 0.6:
            return "HIGH"
        elif risk.residual_risk > 0.4:
            return "MEDIUM"
        else:
            return "LOW"
    
    def export_assessment(self) -> Dict:
        """Export complete risk assessment"""
        return {
            'system_name': self.system_name,
            'assessment_date': self.assessment_date.isoformat(),
            'risk_appetite': self.risk_appetite,
            'risk_factors': [
                {
                    'name': r.name,
                    'category': r.category,
                    'description': r.description,
                    'inherent_risk': r.inherent_risk,
                    'residual_risk': r.residual_risk,
                    'controls': r.current_controls,
                    'control_effectiveness': r.control_effectiveness
                }
                for r in self.risk_factors
            ],
            'risk_scores': self.calculate_risk_scores(),
            'mitigation_plan': self.generate_mitigation_plan()
        }

# Quantitative Risk Analysis
class QuantitativeRiskAnalysis:
    def __init__(self):
        self.scenarios = []
        
    def add_scenario(self, name: str, probability: float, 
                    min_loss: float, max_loss: float, 
                    most_likely_loss: float):
        """Add risk scenario with PERT distribution"""
        self.scenarios.append({
            'name': name,
            'probability': probability,
            'min_loss': min_loss,
            'max_loss': max_loss,
            'most_likely_loss': most_likely_loss
        })
    
    def calculate_ale(self) -> Dict[str, float]:
        """Calculate Annual Loss Expectancy"""
        results = {}
        
        for scenario in self.scenarios:
            # PERT mean calculation
            pert_mean = (scenario['min_loss'] + 
                        4 * scenario['most_likely_loss'] + 
                        scenario['max_loss']) / 6
            
            # Annual Rate of Occurrence (ARO)
            aro = scenario['probability'] * 365  # Daily probability to annual
            
            # Single Loss Expectancy (SLE)
            sle = pert_mean
            
            # Annual Loss Expectancy (ALE)
            ale = sle * aro
            
            results[scenario['name']] = {
                'sle': sle,
                'aro': aro,
                'ale': ale
            }
        
        return results
    
    def monte_carlo_simulation(self, iterations: int = 10000) -> Dict:
        """Run Monte Carlo simulation for risk analysis"""
        import random
        
        total_losses = []
        
        for _ in range(iterations):
            annual_loss = 0
            
            for scenario in self.scenarios:
                # Check if scenario occurs
                if random.random() < scenario['probability']:
                    # PERT distribution sampling
                    alpha = 1 + 4 * ((scenario['most_likely_loss'] - scenario['min_loss']) / 
                                    (scenario['max_loss'] - scenario['min_loss']))
                    beta = 1 + 4 * ((scenario['max_loss'] - scenario['most_likely_loss']) / 
                                   (scenario['max_loss'] - scenario['min_loss']))
                    
                    # Simplified beta distribution
                    loss = random.betavariate(alpha, beta) * \
                          (scenario['max_loss'] - scenario['min_loss']) + \
                          scenario['min_loss']
                    
                    annual_loss += loss
            
            total_losses.append(annual_loss)
        
        # Calculate statistics
        total_losses.sort()
        
        return {
            'mean_annual_loss': np.mean(total_losses),
            'median_annual_loss': np.median(total_losses),
            'var_95': total_losses[int(0.95 * iterations)],  # Value at Risk
            'var_99': total_losses[int(0.99 * iterations)],
            'max_loss': max(total_losses),
            'probability_of_loss': sum(1 for l in total_losses if l > 0) / iterations
        }`}</code>
            </pre>
          </div>

          <div className="bg-blue-900/20 rounded-lg p-6 border border-blue-700">
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Risk Scoring Matrix</h3>
            <div className="grid grid-cols-5 gap-2 text-center text-sm">
              <div className="p-2 bg-gray-800 rounded font-semibold">Impact/Likelihood</div>
              <div className="p-2 bg-gray-800 rounded">Very Low</div>
              <div className="p-2 bg-gray-800 rounded">Low</div>
              <div className="p-2 bg-gray-800 rounded">Medium</div>
              <div className="p-2 bg-gray-800 rounded">High</div>
              
              <div className="p-2 bg-gray-800 rounded font-semibold">Critical</div>
              <div className="p-2 bg-yellow-900/50 rounded">Medium</div>
              <div className="p-2 bg-orange-900/50 rounded">High</div>
              <div className="p-2 bg-red-900/50 rounded">Critical</div>
              <div className="p-2 bg-red-900/50 rounded">Critical</div>
              
              <div className="p-2 bg-gray-800 rounded font-semibold">High</div>
              <div className="p-2 bg-green-900/50 rounded">Low</div>
              <div className="p-2 bg-yellow-900/50 rounded">Medium</div>
              <div className="p-2 bg-orange-900/50 rounded">High</div>
              <div className="p-2 bg-red-900/50 rounded">Critical</div>
              
              <div className="p-2 bg-gray-800 rounded font-semibold">Medium</div>
              <div className="p-2 bg-green-900/50 rounded">Low</div>
              <div className="p-2 bg-green-900/50 rounded">Low</div>
              <div className="p-2 bg-yellow-900/50 rounded">Medium</div>
              <div className="p-2 bg-orange-900/50 rounded">High</div>
              
              <div className="p-2 bg-gray-800 rounded font-semibold">Low</div>
              <div className="p-2 bg-green-900/50 rounded">Very Low</div>
              <div className="p-2 bg-green-900/50 rounded">Low</div>
              <div className="p-2 bg-green-900/50 rounded">Low</div>
              <div className="p-2 bg-yellow-900/50 rounded">Medium</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Threat Modeling Tools */}
      <section className="mb-16 p-8 bg-gray-800/50 rounded-xl border border-gray-700">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
          <Terminal className="w-8 h-8 text-cyan-400" />
          Threat Modeling Tools
        </h2>

        <div className="space-y-6 text-gray-300">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Package className="w-5 h-5 text-blue-400" />
                Commercial Tools
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <div>
                    <strong>Microsoft Threat Modeling Tool:</strong> STRIDE-based analysis
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <div>
                    <strong>IriusRisk:</strong> Automated threat modeling platform
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <div>
                    <strong>ThreatModeler:</strong> Enterprise threat modeling
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <div>
                    <strong>SecuriCAD:</strong> Attack simulation platform
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Code className="w-5 h-5 text-purple-400" />
                Open Source Tools
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <div>
                    <strong>OWASP Threat Dragon:</strong> Web-based threat modeling
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <div>
                    <strong>PyTM:</strong> Python threat modeling library
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <div>
                    <strong>Threagile:</strong> Agile threat modeling toolkit
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                  <div>
                    <strong>drawio-threatmodeling:</strong> Draw.io threat modeling shapes
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">Automated Threat Modeling</h3>
            <pre className="bg-gray-950 p-4 rounded-lg overflow-x-auto text-sm">
              <code className="language-yaml text-gray-300">{`# Threat Model as Code - Example Configuration
apiVersion: threatmodel/v1
kind: AISystem
metadata:
  name: production-llm-service
  version: 1.0.0
  
components:
  - name: api-gateway
    type: edge-service
    technologies:
      - nginx
      - oauth2-proxy
    dataflows:
      - to: llm-service
        protocol: https
        data-classification: sensitive
        
  - name: llm-service
    type: ai-model-server
    technologies:
      - python
      - fastapi
      - transformers
    security-controls:
      - input-validation
      - rate-limiting
      - prompt-filtering
    dataflows:
      - to: vector-database
        protocol: grpc
        data-classification: confidential
        
  - name: vector-database
    type: datastore
    technologies:
      - pinecone
    security-controls:
      - encryption-at-rest
      - access-logging
      
threats:
  - id: T001
    name: Prompt Injection Attack
    stride-category: tampering
    affected-components:
      - llm-service
    mitigations:
      - implement prompt validation
      - deploy content filtering
      - monitor anomalous queries
      
  - id: T002
    name: Model Extraction
    stride-category: information-disclosure
    affected-components:
      - llm-service
      - api-gateway
    mitigations:
      - implement rate limiting
      - add query complexity analysis
      - deploy behavioral monitoring
      
risk-ratings:
  T001:
    likelihood: high
    impact: high
    risk-level: critical
  T002:
    likelihood: medium
    impact: high
    risk-level: high`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Section 7: Best Practices */}
      <section className="mb-16 p-8 bg-gray-800/50 rounded-xl border border-gray-700">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
          <CheckCircle className="w-8 h-8 text-cyan-400" />
          Best Practices
        </h2>

        <div className="space-y-6 text-gray-300">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-3 text-cyan-400">Process Guidelines</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-yellow-400 mt-0.5" />
                  <span>Start threat modeling early in development</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-yellow-400 mt-0.5" />
                  <span>Involve diverse stakeholders</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-yellow-400 mt-0.5" />
                  <span>Update models with system changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-yellow-400 mt-0.5" />
                  <span>Validate assumptions regularly</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-yellow-400 mt-0.5" />
                  <span>Document all decisions and rationale</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-3 text-cyan-400">Common Pitfalls</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5" />
                  <span>Focusing only on external threats</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5" />
                  <span>Ignoring supply chain risks</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5" />
                  <span>One-time exercise mentality</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5" />
                  <span>Over-complicating the model</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5" />
                  <span>Neglecting AI-specific threats</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-green-900/20 rounded-lg p-6 border border-green-700">
            <h3 className="text-xl font-semibold mb-3 text-green-400">Success Factors</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">People</h4>
                <ul className="space-y-1">
                  <li>• Executive sponsorship</li>
                  <li>• Cross-functional teams</li>
                  <li>• Security champions</li>
                  <li>• Regular training</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Process</h4>
                <ul className="space-y-1">
                  <li>• Integrated workflows</li>
                  <li>• Regular reviews</li>
                  <li>• Clear ownership</li>
                  <li>• Measurable outcomes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technology</h4>
                <ul className="space-y-1">
                  <li>• Automation tools</li>
                  <li>• Version control</li>
                  <li>• Integration APIs</li>
                  <li>• Reporting dashboards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Resources */}
      <section className="mb-16 p-8 bg-gray-800/50 rounded-xl border border-gray-700">
        <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
          <FileText className="w-8 h-8 text-cyan-400" />
          Additional Resources
        </h2>

        <div className="space-y-6 text-gray-300">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-3 text-cyan-400">Frameworks & Standards</h3>
              <ul className="space-y-2 text-sm">
                <li>• NIST AI Risk Management Framework</li>
                <li>• ISO/IEC 23053 (AI Trustworthiness)</li>
                <li>• OWASP AI Security Top 10</li>
                <li>• MITRE ATLAS Framework</li>
                <li>• EU AI Act Requirements</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-lg font-semibold mb-3 text-cyan-400">Learning Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>• "Threat Modeling: Designing for Security" - Adam Shostack</li>
                <li>• SANS SEC549: Enterprise Cloud Security Architecture</li>
                <li>• AI Security Alliance Resources</li>
                <li>• Microsoft AI Red Team Playbook</li>
                <li>• Google's Secure AI Framework</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-6 border border-cyan-700">
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">Next Steps</h3>
            <div className="space-y-3">
              <p>Ready to implement threat modeling for your AI systems? Here's your roadmap:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Identify and document all AI system components</li>
                <li>Choose appropriate threat modeling methodology</li>
                <li>Conduct initial threat assessment workshop</li>
                <li>Implement priority mitigations</li>
                <li>Establish continuous threat modeling process</li>
              </ol>
              <div className="mt-4 flex gap-4">
                <a href="/learn/incident-response" className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors">
                  Continue to Incident Response
                  <AlertTriangle className="w-4 h-4" />
                </a>
                <a href="/products/perfecx-scan" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                  Try perfecX Scan
                  <Search className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}