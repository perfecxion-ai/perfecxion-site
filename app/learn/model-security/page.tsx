import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Lock, Shield, Brain, Target, Key, Database, Zap, AlertCircle, ArrowLeft, CheckCircle, FileWarning, ShieldCheck, Code, Terminal, Cpu, HardDrive } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Model Security - Learn AI Security - perfecXion.ai',
    description: 'Master AI model security. Learn model hardening, access control, versioning, deployment security, and advanced protection techniques.',
    keywords: 'AI model security, model hardening, ML security, model access control, secure deployment, model versioning, AI privacy',
}

export default function ModelSecurityPage() {
    return (
        <>
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
                <ol className="list-none p-0 inline-flex">
                    <li className="flex items-center">
                        <Link href="/learn" className="hover:underline text-primary-600 dark:text-primary-400">Learn</Link>
                        <span className="mx-2">/</span>
                    </li>
                    <li className="text-gray-700 dark:text-gray-300">Model Security</li>
                </ol>
            </nav>

            {/* Header */}
            <div className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center">
                    <Lock className="h-10 w-10 text-primary-600 mr-4" />
                    Model Security
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl">
                    Your AI models represent years of research, millions in investment, and your competitive advantage. 
                    This comprehensive guide covers everything from securing training pipelines to hardening deployed models, 
                    implementing access controls, and protecting against model theft. Learn how to build AI systems that are 
                    not just powerful, but fortress-level secure.
                </p>
            </div>

            {/* Security Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                    <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">95%</div>
                    <div className="text-sm text-blue-700 dark:text-blue-300">Attack Prevention</div>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                    <Lock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-900 dark:text-green-100">256-bit</div>
                    <div className="text-sm text-green-700 dark:text-green-300">Encryption Standard</div>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
                    <Brain className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">$18M</div>
                    <div className="text-sm text-purple-700 dark:text-purple-300">Avg Model Value</div>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center">
                    <Zap className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">24/7</div>
                    <div className="text-sm text-orange-700 dark:text-orange-300">Security Monitoring</div>
                </div>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Table of Contents</h2>
                <ul className="space-y-2 text-sm">
                    <li><a href="#introduction" className="text-primary-600 dark:text-primary-400 hover:underline">Introduction: Why Model Security is Critical</a></li>
                    <li><a href="#core-concepts" className="text-primary-600 dark:text-primary-400 hover:underline">Core Concepts: Model Security Fundamentals</a></li>
                    <li><a href="#practical-examples" className="text-primary-600 dark:text-primary-400 hover:underline">Practical Examples: Security Implementations</a></li>
                    <li><a href="#implementation-guide" className="text-primary-600 dark:text-primary-400 hover:underline">Implementation Guide: Step-by-Step Security</a></li>
                    <li><a href="#best-practices" className="text-primary-600 dark:text-primary-400 hover:underline">Best Practices: Industry Standards</a></li>
                    <li><a href="#case-studies" className="text-primary-600 dark:text-primary-400 hover:underline">Case Studies: Real-World Implementations</a></li>
                    <li><a href="#troubleshooting" className="text-primary-600 dark:text-primary-400 hover:underline">Troubleshooting: Common Security Issues</a></li>
                    <li><a href="#next-steps" className="text-primary-600 dark:text-primary-400 hover:underline">Next Steps: Advanced Model Protection</a></li>
                </ul>
            </div>

            {/* Introduction */}
            <section id="introduction" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Lock className="h-6 w-6 text-blue-500 mr-3" />
                    Introduction: Why Model Security is Critical
                </h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p className="text-lg leading-relaxed mb-4">
                        AI models are the crown jewels of modern organizations. They embody years of research, contain 
                        proprietary algorithms, and represent millions in development costs. Yet many organizations treat 
                        model security as an afterthought, leaving their most valuable intellectual property exposed to 
                        theft, manipulation, and abuse.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        The threats are real and growing. Model extraction attacks can steal your competitive advantage in 
                        hours. Adversarial manipulation can turn your AI into a liability. Data poisoning can corrupt years 
                        of careful training. Without proper security, your AI investment becomes a vulnerability rather than 
                        an asset.
                    </p>
                    <p className="text-lg leading-relaxed">
                        This guide provides a comprehensive approach to model security, covering everything from securing 
                        training pipelines to protecting deployed models. You'll learn how to implement defense in depth, 
                        create unbreakable access controls, and build AI systems that are both powerful and secure.
                    </p>
                </div>
            </section>

            {/* Core Concepts */}
            <section id="core-concepts" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Core Concepts: Model Security Fundamentals</h2>
                
                <div className="space-y-8">
                    {/* Training Pipeline Security */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Database className="h-5 w-5 text-blue-500 mr-2" />
                            Training Pipeline Security
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Securing the model training pipeline is crucial as this is where models are most vulnerable to 
                            poisoning attacks and data breaches. Every step from data collection to model deployment must be secured.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Data Security</h4>
                                <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                                    <li>• Encrypted data storage and transmission</li>
                                    <li>• Access control for training datasets</li>
                                    <li>• Data provenance tracking</li>
                                    <li>• Anomaly detection in training data</li>
                                    <li>• Secure data preprocessing pipelines</li>
                                </ul>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Training Environment</h4>
                                <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
                                    <li>• Isolated training environments</li>
                                    <li>• Secure compute infrastructure</li>
                                    <li>• Code signing and verification</li>
                                    <li>• Dependency scanning</li>
                                    <li>• Audit logging for all operations</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                <strong>Key Principle:</strong> Treat your training pipeline like a production system. Any compromise 
                                here affects all downstream deployments.
                            </p>
                        </div>
                    </div>

                    {/* Model Hardening */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <ShieldCheck className="h-5 w-5 text-purple-500 mr-2" />
                            Model Hardening Techniques
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Model hardening makes your AI resistant to attacks by building security directly into the model 
                            architecture and training process.
                        </p>

                        <div className="space-y-4">
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
                                <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Adversarial Training</h4>
                                <p className="text-purple-800 dark:text-purple-200 text-sm mb-2">
                                    Incorporate adversarial examples during training to build inherent resistance:
                                </p>
                                <pre className="text-xs text-purple-800 dark:text-purple-200 overflow-x-auto">
{`# Adversarial training implementation
def adversarial_training(model, x_train, y_train, epsilon=0.1):
    for epoch in range(num_epochs):
        # Generate adversarial examples
        x_adv = generate_adversarial_examples(
            model, x_train, epsilon=epsilon
        )
        
        # Mix clean and adversarial data
        x_mixed = np.concatenate([x_train, x_adv])
        y_mixed = np.concatenate([y_train, y_train])
        
        # Train on mixed dataset
        model.fit(x_mixed, y_mixed, batch_size=32)
        
        # Validate robustness
        evaluate_robustness(model, x_test, y_test)`}
                                </pre>
                            </div>

                            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded">
                                <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Differential Privacy</h4>
                                <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                                    Protect training data privacy while maintaining model utility through noise injection 
                                    and privacy budgets.
                                </p>
                            </div>

                            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded">
                                <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Model Watermarking</h4>
                                <p className="text-orange-800 dark:text-orange-200 text-sm">
                                    Embed undetectable signatures that prove ownership and detect unauthorized copies.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Access Control */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Key className="h-5 w-5 text-green-500 mr-2" />
                            Access Control and Authentication
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Implement granular access controls to ensure only authorized users and systems can interact 
                            with your models.
                        </p>

                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded mb-4">
                            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">RBAC Implementation</h4>
                            <pre className="text-sm text-green-800 dark:text-green-200 overflow-x-auto">
{`class ModelAccessControl:
    def __init__(self):
        self.roles = {
            "data_scientist": ["train", "evaluate", "export"],
            "ml_engineer": ["deploy", "monitor", "update"],
            "analyst": ["predict", "explain"],
            "admin": ["all"]
        }
        
    def check_permission(self, user, action, model_id):
        user_role = self.get_user_role(user)
        allowed_actions = self.roles.get(user_role, [])
        
        if action not in allowed_actions and "all" not in allowed_actions:
            raise PermissionError(
                f"User {user} with role {user_role} cannot {action}"
            )
        
        # Log access attempt
        self.audit_log(user, action, model_id)
        
        return True
    
    def create_secure_session(self, user, model_id):
        # Generate time-limited token
        token = self.generate_token(user, model_id)
        
        # Set usage limits
        session = {
            "token": token,
            "user": user,
            "model_id": model_id,
            "max_requests": 1000,
            "expires": time.time() + 3600,
            "allowed_operations": self.roles[self.get_user_role(user)]
        }
        
        return session`}
                            </pre>
                        </div>
                    </div>

                    {/* Deployment Security */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Cpu className="h-5 w-5 text-orange-500 mr-2" />
                            Secure Model Deployment
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Deployment is where models face the most threats. Implement comprehensive security measures 
                            to protect models in production.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded">
                                <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Containerization</h4>
                                <ul className="text-orange-800 dark:text-orange-200 text-xs space-y-1">
                                    <li>• Minimal base images</li>
                                    <li>• Non-root execution</li>
                                    <li>• Read-only filesystems</li>
                                    <li>• Network isolation</li>
                                </ul>
                            </div>
                            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded">
                                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">API Security</h4>
                                <ul className="text-red-800 dark:text-red-200 text-xs space-y-1">
                                    <li>• TLS encryption</li>
                                    <li>• API key rotation</li>
                                    <li>• Rate limiting</li>
                                    <li>• Request validation</li>
                                </ul>
                            </div>
                            <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded">
                                <h4 className="font-semibold text-pink-900 dark:text-pink-100 mb-2">Runtime Protection</h4>
                                <ul className="text-pink-800 dark:text-pink-200 text-xs space-y-1">
                                    <li>• Memory encryption</li>
                                    <li>• Secure enclaves</li>
                                    <li>• Anti-tampering</li>
                                    <li>• Integrity checks</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Version Control */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <HardDrive className="h-5 w-5 text-red-500 mr-2" />
                            Model Versioning and Change Management
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Track every change to your models with cryptographic guarantees of integrity and authenticity.
                        </p>

                        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded">
                            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Secure Model Registry</h4>
                            <pre className="text-sm text-red-800 dark:text-red-200 overflow-x-auto">
{`class SecureModelRegistry:
    def __init__(self):
        self.models = {}
        self.signatures = {}
        
    def register_model(self, model, metadata):
        # Generate unique model ID
        model_id = self.generate_model_id(model)
        
        # Create model signature
        signature = self.create_signature(model)
        
        # Encrypt model weights
        encrypted_model = self.encrypt_model(model)
        
        # Store with metadata
        self.models[model_id] = {
            "model": encrypted_model,
            "signature": signature,
            "metadata": metadata,
            "timestamp": datetime.now(),
            "version": self.get_next_version(model_id)
        }
        
        # Create immutable audit record
        self.create_blockchain_record(model_id, signature)
        
        return model_id
    
    def verify_model_integrity(self, model_id):
        stored = self.models[model_id]
        current_sig = self.create_signature(
            self.decrypt_model(stored["model"])
        )
        
        return current_sig == stored["signature"]`}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Practical Examples */}
            <section id="practical-examples" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Practical Examples: Security Implementations</h2>
                
                <div className="space-y-6">
                    {/* End-to-End Encryption */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
                            End-to-End Model Encryption
                        </h3>
                        <p className="text-blue-800 dark:text-blue-200 mb-4">
                            Implement complete encryption from training to inference, ensuring models are never exposed 
                            in plaintext.
                        </p>
                        
                        <div className="bg-blue-100 dark:bg-blue-900/40 p-4 rounded mb-4">
                            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Implementation Example:</h4>
                            <pre className="text-sm text-blue-800 dark:text-blue-200 overflow-x-auto">
{`import cryptography
from cryptography.fernet import Fernet
import tensorflow as tf
import numpy as np

class EncryptedModelPipeline:
    def __init__(self):
        self.key = Fernet.generate_key()
        self.cipher = Fernet(self.key)
        
    def encrypt_weights(self, model):
        """Encrypt model weights layer by layer"""
        encrypted_weights = []
        
        for layer in model.layers:
            weights = layer.get_weights()
            encrypted_layer = []
            
            for w in weights:
                # Convert to bytes
                w_bytes = w.tobytes()
                # Encrypt
                encrypted = self.cipher.encrypt(w_bytes)
                encrypted_layer.append({
                    "shape": w.shape,
                    "dtype": str(w.dtype),
                    "data": encrypted
                })
            
            encrypted_weights.append(encrypted_layer)
        
        return encrypted_weights
    
    def secure_inference(self, encrypted_model, input_data):
        """Perform inference on encrypted model"""
        # Decrypt model in secure enclave
        with SecureEnclave() as enclave:
            model = self.decrypt_model(encrypted_model)
            
            # Encrypt input
            encrypted_input = self.cipher.encrypt(
                input_data.tobytes()
            )
            
            # Decrypt input in enclave
            input_data = enclave.decrypt(encrypted_input)
            
            # Run inference
            prediction = model.predict(input_data)
            
            # Encrypt output
            encrypted_output = enclave.encrypt(prediction)
            
        # Model is destroyed when enclave closes
        return encrypted_output
    
    def homomorphic_inference(self, encrypted_model, encrypted_input):
        """Inference on encrypted data without decryption"""
        # Using tenseal for homomorphic encryption
        import tenseal as ts
        
        # Create context
        context = ts.context(
            ts.SCHEME_TYPE.CKKS,
            poly_modulus_degree=8192,
            coeff_mod_bit_sizes=[60, 40, 40, 60]
        )
        
        # Perform computation on encrypted values
        encrypted_result = encrypted_model.forward(encrypted_input)
        
        return encrypted_result`}
                            </pre>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded">
                                <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Benefits:</h5>
                                <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                                    <li>• Model never exposed in plaintext</li>
                                    <li>• Protection against memory dumps</li>
                                    <li>• Secure multi-party computation</li>
                                </ul>
                            </div>
                            <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded">
                                <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Considerations:</h5>
                                <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                                    <li>• Performance overhead</li>
                                    <li>• Key management complexity</li>
                                    <li>• Hardware requirements</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Federated Learning Security */}
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-4">
                            Secure Federated Learning
                        </h3>
                        <p className="text-green-800 dark:text-green-200 mb-4">
                            Train models across distributed data sources without exposing raw data or model updates.
                        </p>

                        <div className="bg-green-100 dark:bg-green-900/40 p-4 rounded mb-4">
                            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Secure Aggregation Protocol:</h4>
                            <pre className="text-sm text-green-800 dark:text-green-200 overflow-x-auto">
{`class SecureFederatedLearning:
    def __init__(self, num_clients):
        self.num_clients = num_clients
        self.threshold = int(0.6 * num_clients)  # 60% threshold
        
    def secure_aggregation(self, client_updates):
        """Aggregate updates with privacy preservation"""
        # Add noise for differential privacy
        noisy_updates = []
        for update in client_updates:
            noise = np.random.laplace(0, 1/epsilon, update.shape)
            noisy_updates.append(update + noise)
        
        # Secure multi-party computation
        encrypted_sum = self.secure_sum(noisy_updates)
        
        # Decrypt only if threshold met
        if len(client_updates) >= self.threshold:
            aggregated = self.decrypt_sum(encrypted_sum)
            return aggregated / len(client_updates)
        else:
            raise ValueError("Insufficient participants")
    
    def verify_client_update(self, client_id, update, proof):
        """Verify update authenticity and validity"""
        # Verify zero-knowledge proof
        if not self.verify_zk_proof(proof, update):
            return False
        
        # Check update bounds
        if not self.check_update_bounds(update):
            return False
        
        # Verify client signature
        if not self.verify_signature(client_id, update):
            return False
        
        return True
    
    def secure_broadcast(self, global_model):
        """Securely distribute model to clients"""
        # Generate unique keys for each client
        client_keys = self.generate_client_keys()
        
        broadcasts = []
        for client_id, key in client_keys.items():
            # Encrypt model for specific client
            encrypted = self.encrypt_for_client(
                global_model, key
            )
            
            # Add integrity check
            mac = self.compute_mac(encrypted, key)
            
            broadcasts.append({
                "client_id": client_id,
                "model": encrypted,
                "mac": mac
            })
        
        return broadcasts`}
                            </pre>
                        </div>
                    </div>

                    {/* Model Stealing Defense */}
                    <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-4">
                            Defense Against Model Extraction
                        </h3>
                        <p className="text-purple-800 dark:text-purple-200 mb-4">
                            Implement sophisticated defenses to prevent attackers from stealing your model through 
                            query-based extraction attacks.
                        </p>

                        <div className="bg-purple-100 dark:bg-purple-900/40 p-4 rounded mb-4">
                            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Anti-Extraction System:</h4>
                            <pre className="text-sm text-purple-800 dark:text-purple-200 overflow-x-auto">
{`class ModelExtractionDefense:
    def __init__(self, model):
        self.model = model
        self.query_history = defaultdict(list)
        self.suspicious_patterns = []
        
    def defend_inference(self, input_data, user_id):
        """Protected inference with extraction detection"""
        
        # 1. Query pattern analysis
        if self.detect_extraction_pattern(user_id, input_data):
            self.trigger_defense(user_id)
            return self.generate_deceptive_response(input_data)
        
        # 2. Add controlled noise
        prediction = self.model.predict(input_data)
        protected_pred = self.add_protective_noise(
            prediction, user_id
        )
        
        # 3. Confidence manipulation
        if self.is_boundary_query(input_data):
            protected_pred = self.manipulate_confidence(
                protected_pred
            )
        
        # 4. Rate limiting
        if not self.check_rate_limit(user_id):
            raise RateLimitExceeded()
        
        # 5. Watermark injection
        protected_pred = self.inject_watermark(
            protected_pred, user_id
        )
        
        return protected_pred
    
    def detect_extraction_pattern(self, user_id, query):
        """Detect model extraction attempts"""
        
        # Track query history
        self.query_history[user_id].append({
            "query": self.hash_query(query),
            "timestamp": time.time()
        })
        
        # Pattern detection
        patterns = [
            self.detect_systematic_queries(user_id),
            self.detect_boundary_exploration(user_id),
            self.detect_high_entropy_queries(user_id),
            self.detect_adversarial_queries(query)
        ]
        
        risk_score = sum(patterns) / len(patterns)
        return risk_score > 0.7
    
    def add_protective_noise(self, prediction, user_id):
        """Add user-specific noise to predictions"""
        # Deterministic noise based on user
        seed = hash(user_id) % 2**32
        np.random.seed(seed)
        
        # Add small noise to predictions
        noise_scale = 0.01  # 1% noise
        noise = np.random.normal(0, noise_scale, prediction.shape)
        
        # Ensure noise doesn't change top prediction
        noisy_pred = prediction + noise
        if np.argmax(noisy_pred) != np.argmax(prediction):
            # Adjust to maintain top class
            noisy_pred = prediction + noise * 0.1
        
        return noisy_pred`}
                            </pre>
                        </div>
                    </div>
                </div>
            </section>

            {/* Implementation Guide */}
            <section id="implementation-guide" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Implementation Guide: Step-by-Step Security</h2>
                
                <div className="space-y-8">
                    {/* Phase 1: Assessment */}
                    <div className="border-l-4 border-blue-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Phase 1: Security Assessment and Planning
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Begin with a comprehensive assessment of your current model security posture and identify 
                            critical vulnerabilities.
                        </p>

                        <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg mb-4">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Model Security Audit Checklist:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Training Security</h5>
                                    <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                                        <li>☐ Data source verification</li>
                                        <li>☐ Access control audit</li>
                                        <li>☐ Pipeline vulnerability scan</li>
                                        <li>☐ Dependency security check</li>
                                        <li>☐ Compute infrastructure review</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Deployment Security</h5>
                                    <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                                        <li>☐ API security assessment</li>
                                        <li>☐ Container security scan</li>
                                        <li>☐ Network exposure analysis</li>
                                        <li>☐ Logging and monitoring review</li>
                                        <li>☐ Incident response readiness</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Risk Prioritization Matrix:</h4>
                            <pre className="text-sm text-blue-800 dark:text-blue-200 overflow-x-auto">
{`def prioritize_security_risks(vulnerabilities):
    """Prioritize based on impact and likelihood"""
    
    risk_matrix = {
        "critical": [],
        "high": [],
        "medium": [],
        "low": []
    }
    
    for vuln in vulnerabilities:
        score = vuln["impact"] * vuln["likelihood"]
        
        if score >= 8:
            risk_matrix["critical"].append(vuln)
        elif score >= 6:
            risk_matrix["high"].append(vuln)
        elif score >= 3:
            risk_matrix["medium"].append(vuln)
        else:
            risk_matrix["low"].append(vuln)
    
    return risk_matrix`}
                            </pre>
                        </div>
                    </div>

                    {/* Phase 2: Core Security */}
                    <div className="border-l-4 border-green-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Phase 2: Implement Core Security Controls
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Deploy fundamental security measures that provide immediate protection for your models.
                        </p>

                        <div className="space-y-4">
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">1. Encryption Implementation</h4>
                                <pre className="text-sm text-green-800 dark:text-green-200 overflow-x-auto">
{`# Model encryption at rest
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC

class ModelEncryption:
    @staticmethod
    def encrypt_model_file(model_path, password):
        # Derive key from password
        kdf = PBKDF2HMAC(
            algorithm=hashes.SHA256(),
            length=32,
            salt=os.urandom(16),
            iterations=100000,
        )
        key = kdf.derive(password.encode())
        
        # Encrypt model
        cipher = Fernet(base64.urlsafe_b64encode(key))
        
        with open(model_path, 'rb') as f:
            encrypted = cipher.encrypt(f.read())
        
        # Save encrypted model
        with open(f"{model_path}.enc", 'wb') as f:
            f.write(encrypted)
        
        # Secure delete original
        secure_delete(model_path)`}
                                </pre>
                            </div>

                            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded">
                                <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">2. Access Control Setup</h4>
                                <pre className="text-sm text-yellow-800 dark:text-yellow-200 overflow-x-auto">
{`# OAuth2 + RBAC implementation
from fastapi import FastAPI, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer

app = FastAPI()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

async def get_current_user(token: str = Depends(oauth2_scheme)):
    user = decode_token(token)
    if not user:
        raise HTTPException(status_code=401)
    return user

@app.post("/model/predict")
async def secure_predict(
    data: PredictRequest,
    user: User = Depends(get_current_user)
):
    # Check permissions
    if not has_permission(user, "model.predict"):
        raise HTTPException(status_code=403)
    
    # Audit log
    log_access(user, "predict", data.model_id)
    
    # Rate limit check
    if not check_rate_limit(user):
        raise HTTPException(status_code=429)
    
    return await predict(data)`}
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Phase 3: Advanced Protection */}
                    <div className="border-l-4 border-purple-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Phase 3: Advanced Protection Mechanisms
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Implement sophisticated security features that protect against advanced threats.
                        </p>

                        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded mb-4">
                            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Secure Enclaves for Inference</h4>
                            <pre className="text-sm text-purple-800 dark:text-purple-200 overflow-x-auto">
{`# Intel SGX secure enclave implementation
import pysgx

class SecureModelInference:
    def __init__(self, model_path):
        self.enclave = pysgx.create_enclave()
        self.load_model_to_enclave(model_path)
    
    def load_model_to_enclave(self, model_path):
        # Load encrypted model
        with open(f"{model_path}.enc", 'rb') as f:
            encrypted_model = f.read()
        
        # Transfer to enclave
        self.enclave.load_data(encrypted_model)
        
        # Decrypt inside enclave only
        self.enclave.call("decrypt_model")
    
    def secure_predict(self, encrypted_input):
        # Input never decrypted outside enclave
        result = self.enclave.call(
            "predict",
            encrypted_input
        )
        
        # Result is encrypted before leaving enclave
        return result
    
    def remote_attestation(self):
        """Prove enclave integrity to clients"""
        quote = self.enclave.get_quote()
        return self.verify_quote(quote)`}
                            </pre>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded">
                                <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Model Integrity Monitoring</h4>
                                <pre className="text-xs text-orange-800 dark:text-orange-200 overflow-x-auto">
{`# Continuous integrity verification
class ModelIntegrityMonitor:
    def __init__(self):
        self.baseline_hashes = {}
        
    def continuous_verification(self):
        while True:
            for model_id in self.models:
                if not self.verify_integrity(model_id):
                    self.trigger_incident(model_id)
                    self.quarantine_model(model_id)
            
            time.sleep(300)  # Check every 5 min`}
                                </pre>
                            </div>
                            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded">
                                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Anomaly Detection</h4>
                                <pre className="text-xs text-red-800 dark:text-red-200 overflow-x-auto">
{`# Detect abnormal model behavior
class ModelAnomalyDetector:
    def detect_drift(self, predictions):
        # Statistical drift detection
        if ks_test(predictions, self.baseline) > 0.05:
            return True
        
        # Performance degradation
        if accuracy < self.threshold:
            return True
            
        return False`}
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Phase 4: Operations */}
                    <div className="border-l-4 border-orange-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Phase 4: Secure Operations and Maintenance
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Establish procedures for maintaining security throughout the model lifecycle.
                        </p>

                        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded">
                            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Security Operations Playbook</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-orange-800 dark:text-orange-200 text-sm">
                                <div>
                                    <h5 className="font-semibold mb-1">Daily Tasks</h5>
                                    <ul className="space-y-1">
                                        <li>• Review security logs</li>
                                        <li>• Check integrity status</li>
                                        <li>• Monitor access patterns</li>
                                        <li>• Verify backups</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-semibold mb-1">Weekly Tasks</h5>
                                    <ul className="space-y-1">
                                        <li>• Vulnerability scanning</li>
                                        <li>• Access review</li>
                                        <li>• Performance analysis</li>
                                        <li>• Update security rules</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-semibold mb-1">Monthly Tasks</h5>
                                    <ul className="space-y-1">
                                        <li>• Security audit</li>
                                        <li>• Penetration testing</li>
                                        <li>• Incident drills</li>
                                        <li>• Policy updates</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Best Practices */}
            <section id="best-practices" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Best Practices: Industry Standards</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
                            NIST AI Security Framework
                        </h3>
                        <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                            <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Identify:</strong> Catalog all AI assets and vulnerabilities</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Protect:</strong> Implement safeguards for AI systems</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Detect:</strong> Continuous monitoring for threats</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Respond:</strong> Incident response procedures</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Recover:</strong> Restoration and lessons learned</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">
                            Zero Trust Model Architecture
                        </h3>
                        <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
                            <li className="flex items-start">
                                <Shield className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Never Trust:</strong> Verify every request, every time</span>
                            </li>
                            <li className="flex items-start">
                                <Shield className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Least Privilege:</strong> Minimal access rights</span>
                            </li>
                            <li className="flex items-start">
                                <Shield className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Microsegmentation:</strong> Isolate model components</span>
                            </li>
                            <li className="flex items-start">
                                <Shield className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Continuous Verification:</strong> Real-time validation</span>
                            </li>
                            <li className="flex items-start">
                                <Shield className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span><strong>Assume Breach:</strong> Design for compromise</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
                            ML Security Principles
                        </h3>
                        <div className="space-y-3 text-purple-800 dark:text-purple-200 text-sm">
                            <div>
                                <strong>1. Defense in Depth:</strong>
                                <p className="mt-1">Layer multiple security controls throughout the ML pipeline</p>
                            </div>
                            <div>
                                <strong>2. Secure by Design:</strong>
                                <p className="mt-1">Build security into models from the ground up</p>
                            </div>
                            <div>
                                <strong>3. Continuous Validation:</strong>
                                <p className="mt-1">Regularly test and verify security measures</p>
                            </div>
                            <div>
                                <strong>4. Transparency:</strong>
                                <p className="mt-1">Maintain clear audit trails and documentation</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-4">
                            Compliance Requirements
                        </h3>
                        <ul className="space-y-2 text-orange-800 dark:text-orange-200 text-sm">
                            <li><strong>GDPR:</strong> Privacy by design, data minimization</li>
                            <li><strong>CCPA:</strong> Consumer rights and data protection</li>
                            <li><strong>HIPAA:</strong> Healthcare data security requirements</li>
                            <li><strong>SOC 2:</strong> Security control attestation</li>
                            <li><strong>ISO 27001:</strong> Information security management</li>
                            <li><strong>Industry-Specific:</strong> Financial (PCI), Defense (CMMC)</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Security Implementation Checklist</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Training Security</h4>
                            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                                <li>☑ Encrypted data storage</li>
                                <li>☑ Secure compute environment</li>
                                <li>☑ Access logging</li>
                                <li>☑ Data validation</li>
                                <li>☑ Version control</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Model Protection</h4>
                            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                                <li>☑ Weight encryption</li>
                                <li>☑ Watermarking</li>
                                <li>☑ Integrity checks</li>
                                <li>☑ Access control</li>
                                <li>☑ Audit trails</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Runtime Security</h4>
                            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
                                <li>☑ API security</li>
                                <li>☑ Rate limiting</li>
                                <li>☑ Anomaly detection</li>
                                <li>☑ Secure inference</li>
                                <li>☑ Incident response</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section id="case-studies" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Case Studies: Real-World Implementations</h2>
                
                <div className="space-y-6">
                    {/* Financial Services Case */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Global Bank Secures Trading Models
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600">$2.3B</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Model Value Protected</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">99.99%</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Uptime Maintained</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-600">0</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Security Breaches</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-orange-600">15ms</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Added Latency</div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded mb-4">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Challenge:</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                A major investment bank needed to secure proprietary trading models worth billions while 
                                maintaining microsecond-level performance requirements. The models faced constant attacks 
                                from competitors attempting extraction.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded">
                                <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Security Implementation:</h5>
                                <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-1">
                                    <li>• Hardware security modules for key management</li>
                                    <li>• Homomorphic encryption for sensitive calculations</li>
                                    <li>• Real-time anomaly detection on all queries</li>
                                    <li>• Secure multi-party computation for model updates</li>
                                </ul>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                                <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2">Results:</h5>
                                <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
                                    <li>• Blocked 12,000+ extraction attempts</li>
                                    <li>• Maintained competitive advantage</li>
                                    <li>• Passed all regulatory audits</li>
                                    <li>• ROI positive within 6 months</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                <strong>Key Takeaway:</strong> High-value models require hardware-based security and real-time 
                                monitoring. Performance impact can be minimized through careful architecture design.
                            </p>
                        </div>
                    </div>

                    {/* Healthcare Case */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Healthcare AI Platform Achieves HIPAA Compliance
                        </h3>
                        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded mb-4">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Background:</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                A healthcare technology company needed to deploy diagnostic AI models while ensuring complete 
                                HIPAA compliance and protecting patient privacy. The models processed millions of sensitive 
                                medical records daily.
                            </p>
                        </div>

                        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded mb-4">
                            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Privacy-Preserving Architecture:</h4>
                            <pre className="text-xs text-purple-800 dark:text-purple-200 overflow-x-auto">
{`# Federated learning with differential privacy
class PrivateHealthcareAI:
    def __init__(self):
        self.epsilon = 1.0  # Privacy budget
        self.delta = 1e-5
        
    def train_on_hospital_data(self, hospital_id):
        # Data never leaves hospital
        local_model = self.initialize_model()
        
        # Train with differential privacy
        optimizer = DPOptimizer(
            optimizer=Adam(lr=0.001),
            noise_multiplier=1.1,
            max_grad_norm=1.0,
        )
        
        # Local training
        local_model.compile(
            optimizer=optimizer,
            loss='binary_crossentropy',
            metrics=['accuracy']
        )
        
        # Return only model updates
        return self.compute_secure_updates(local_model)`}
                            </pre>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded text-center">
                                <div className="text-2xl font-bold text-green-900 dark:text-green-100">0</div>
                                <div className="text-sm text-green-800 dark:text-green-200">Data Breaches</div>
                            </div>
                            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded text-center">
                                <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">100%</div>
                                <div className="text-sm text-blue-800 dark:text-blue-200">HIPAA Compliant</div>
                            </div>
                            <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded text-center">
                                <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">50M+</div>
                                <div className="text-sm text-orange-800 dark:text-orange-200">Records Protected</div>
                            </div>
                        </div>
                    </div>

                    {/* Tech Company Case */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Tech Giant Prevents Model Theft at Scale
                        </h3>
                        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded mb-4">
                            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">The Threat:</h4>
                            <p className="text-red-800 dark:text-red-200 text-sm">
                                A major technology company discovered coordinated attempts to steal their recommendation 
                                models through millions of API queries. The attacks used distributed sources and sophisticated 
                                query patterns to avoid detection.
                            </p>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded mb-4">
                            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Defense Strategy:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-800 dark:text-blue-200 text-sm">
                                <div>
                                    <h5 className="font-semibold mb-1">Detection Layer:</h5>
                                    <ul className="space-y-1">
                                        <li>• ML-based query pattern analysis</li>
                                        <li>• Cross-user correlation detection</li>
                                        <li>• Entropy-based anomaly scoring</li>
                                        <li>• Real-time threat intelligence</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-semibold mb-1">Protection Layer:</h5>
                                    <ul className="space-y-1">
                                        <li>• Dynamic response perturbation</li>
                                        <li>• Adaptive rate limiting</li>
                                        <li>• Confidence score manipulation</li>
                                        <li>• Honeypot responses</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Outcome:</h4>
                            <p className="text-green-800 dark:text-green-200 text-sm">
                                Successfully blocked 95% of extraction attempts while maintaining service quality. Attackers 
                                abandoned efforts after realizing extracted models were watermarked and deliberately degraded. 
                                The defense system now protects over 200 production models.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Troubleshooting */}
            <section id="troubleshooting" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Troubleshooting: Common Security Issues</h2>
                
                <div className="space-y-6">
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-3">
                            Issue: Performance Degradation After Security Implementation
                        </h3>
                        <p className="text-red-800 dark:text-red-200 mb-3">
                            Security measures cause unacceptable latency increases in production models.
                        </p>
                        <div className="bg-red-100 dark:bg-red-900/40 p-4 rounded">
                            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Solutions:</h4>
                            <ul className="list-disc list-inside text-red-800 dark:text-red-200 text-sm space-y-1">
                                <li>Use hardware acceleration (GPU/TPU) for encryption operations</li>
                                <li>Implement caching for frequently accessed encrypted data</li>
                                <li>Deploy edge inference with periodic security checks</li>
                                <li>Use lightweight encryption for non-critical operations</li>
                                <li>Optimize security checks with parallel processing</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                            Issue: Key Management Complexity
                        </h3>
                        <p className="text-yellow-800 dark:text-yellow-200 mb-3">
                            Managing encryption keys across distributed deployments becomes unmanageable.
                        </p>
                        <div className="bg-yellow-100 dark:bg-yellow-900/40 p-4 rounded">
                            <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Best Practices:</h4>
                            <pre className="text-xs text-yellow-800 dark:text-yellow-200 overflow-x-auto">
{`# Centralized key management
class KeyManagementService:
    def __init__(self):
        self.hsm = HardwareSecurityModule()
        self.vault = HashicorpVault()
        
    def rotate_keys(self):
        # Automatic key rotation
        new_key = self.hsm.generate_key()
        self.vault.store(new_key, ttl="30d")
        
        # Re-encrypt models
        self.reencrypt_all_models(new_key)
        
    def get_key(self, model_id, purpose):
        # Purpose-specific keys
        return self.vault.get_key(
            f"{model_id}/{purpose}"
        )`}
                            </pre>
                        </div>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                            Issue: False Positive in Extraction Detection
                        </h3>
                        <p className="text-blue-800 dark:text-blue-200 mb-3">
                            Legitimate heavy users are incorrectly flagged as attempting model extraction.
                        </p>
                        <div className="bg-blue-100 dark:bg-blue-900/40 p-4 rounded">
                            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Tuning Strategies:</h4>
                            <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 text-sm space-y-1">
                                <li>Implement user profiling and behavioral baselines</li>
                                <li>Use multi-factor authentication for high-volume users</li>
                                <li>Create allowlists for known legitimate use cases</li>
                                <li>Implement graduated responses instead of hard blocks</li>
                                <li>Use ensemble detection methods to reduce false positives</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-3">
                            Issue: Compliance Conflicts
                        </h3>
                        <p className="text-purple-800 dark:text-purple-200 mb-3">
                            Security measures conflict with data privacy regulations or audit requirements.
                        </p>
                        <div className="bg-purple-100 dark:bg-purple-900/40 p-4 rounded">
                            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Resolution Approach:</h4>
                            <ul className="list-disc list-inside text-purple-800 dark:text-purple-200 text-sm space-y-1">
                                <li>Design security with compliance in mind from the start</li>
                                <li>Implement privacy-preserving security measures</li>
                                <li>Maintain detailed audit logs with appropriate retention</li>
                                <li>Use homomorphic encryption for sensitive computations</li>
                                <li>Regular compliance reviews with legal team</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Next Steps */}
            <section id="next-steps" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Next Steps: Advanced Model Protection</h2>
                
                <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-lg p-8 border border-primary-200 dark:border-primary-800">
                    <p className="text-primary-800 dark:text-primary-200 text-lg leading-relaxed mb-6">
                        Model security is not a destination but a continuous journey. As AI becomes more valuable and 
                        attacks more sophisticated, your security posture must evolve. The foundations you've built 
                        provide a strong base, but staying ahead requires constant vigilance and innovation.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Advanced Techniques to Explore</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Confidential computing with secure enclaves</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Blockchain-based model provenance</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>Quantum-resistant encryption methods</span>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <span>AI-powered security monitoring</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Your Learning Journey</h3>
                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <Link href="/learn/agent-monitoring" className="text-primary-600 dark:text-primary-400 hover:underline">
                                        Agent Monitoring Systems
                                    </Link>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <Link href="/learn/red-team" className="text-primary-600 dark:text-primary-400 hover:underline">
                                        Red Team Testing
                                    </Link>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <Link href="/learn/compliance" className="text-primary-600 dark:text-primary-400 hover:underline">
                                        Compliance & Governance
                                    </Link>
                                </li>
                                <li className="flex items-start">
                                    <ChevronRight className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                                    <Link href="/learn/incident-response" className="text-primary-600 dark:text-primary-400 hover:underline">
                                        Incident Response Planning
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <p className="text-primary-800 dark:text-primary-200 font-semibold">
                        Remember: Your models are only as secure as your weakest link. Invest in comprehensive 
                        security today to protect your AI investments tomorrow.
                    </p>
                </div>
            </section>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
                <Link
                    href="/learn/prompt-injection"
                    className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Prompt Injection Attacks
                </Link>
                <Link
                    href="/learn/agent-monitoring"
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                    Agent Monitoring
                    <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
            </div>
        </>
    )
}