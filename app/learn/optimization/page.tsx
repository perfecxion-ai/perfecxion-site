'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Zap, Cpu, Clock, Database, BarChart3, Server, Cloud, Settings, AlertCircle, CheckCircle2, TrendingUp, Activity, Gauge } from 'lucide-react'

export default function OptimizationPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedMetric, setSelectedMetric] = useState('latency')
  const [expandedTechnique, setExpandedTechnique] = useState<string | null>(null)

  const toggleTechnique = (technique: string) => {
    setExpandedTechnique(expandedTechnique === technique ? null : technique)
  }

  const performanceMetrics = {
    latency: {
      name: 'Latency',
      target: '<100ms',
      current: '145ms',
      improvement: '31%',
      techniques: ['Caching', 'Model optimization', 'Edge deployment']
    },
    throughput: {
      name: 'Throughput',
      target: '>10K req/s',
      current: '7.2K req/s',
      improvement: '28%',
      techniques: ['Batching', 'Async processing', 'Load balancing']
    },
    accuracy: {
      name: 'Accuracy',
      target: '>99%',
      current: '97.8%',
      improvement: '1.2%',
      techniques: ['Model tuning', 'Ensemble methods', 'Feature engineering']
    },
    cost: {
      name: 'Cost Efficiency',
      target: '<$0.001/req',
      current: '$0.0015/req',
      improvement: '33%',
      techniques: ['Resource optimization', 'Spot instances', 'Model compression']
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-500 via-orange-600 to-red-600 text-white">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:50px_50px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-100">
              Performance Optimization
            </h1>
            <p className="text-xl md:text-2xl text-yellow-100 mb-8 leading-relaxed">
              Maximize AI security performance while maintaining protection effectiveness
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Zap className="h-5 w-5" />
                <span>Ultra-Low Latency</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Cpu className="h-5 w-5" />
                <span>Resource Efficient</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <TrendingUp className="h-5 w-5" />
                <span>Scalable Design</span>
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
              { id: 'overview', label: 'Overview', icon: Gauge },
              { id: 'techniques', label: 'Techniques', icon: Zap },
              { id: 'monitoring', label: 'Monitoring', icon: Activity },
              { id: 'scaling', label: 'Scaling', icon: Cloud },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 pb-4 border-b-2 whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'border-orange-600 text-orange-600 dark:border-orange-400 dark:text-orange-400'
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
        {/* Overview Section */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Performance Optimization Strategy
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Optimizing AI security systems requires balancing multiple factors: speed, accuracy, resource usage, and cost. Our comprehensive optimization approach ensures your security infrastructure can handle enterprise-scale workloads without compromising protection quality.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6">
                    <Zap className="h-8 w-8 text-orange-600 dark:text-orange-400 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Speed Optimization
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Achieve sub-100ms response times through intelligent caching, model optimization, and edge deployment strategies.
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
                    <TrendingUp className="h-8 w-8 text-yellow-600 dark:text-yellow-400 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Scalability
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Handle millions of requests per day with horizontal scaling, load balancing, and distributed processing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Current Performance Metrics
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {Object.entries(performanceMetrics).map(([key, metric]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedMetric(key)}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      selectedMetric === key
                        ? 'border-orange-600 bg-orange-50 dark:bg-orange-900/20 dark:border-orange-400'
                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{metric.name}</h3>
                      <span className={`text-sm px-2 py-1 rounded ${
                        parseFloat(metric.improvement) > 20
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200'
                      }`}>
                        {metric.improvement} potential
                      </span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Current: <span className="font-medium text-gray-900 dark:text-white">{metric.current}</span>
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Target: <span className="font-medium text-green-600 dark:text-green-400">{metric.target}</span>
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {selectedMetric && (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Optimization Techniques for {performanceMetrics[selectedMetric].name}
                  </h3>
                  <ul className="space-y-2">
                    {performanceMetrics[selectedMetric].techniques.map((technique) => (
                      <li key={technique} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                        <span className="text-gray-700 dark:text-gray-300">{technique}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Performance Bottleneck Analysis
              </h2>
              
              <div className="space-y-6">
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                        Critical Bottleneck: Model Inference
                      </h3>
                      <p className="text-red-800 dark:text-red-200 mb-3">
                        Model inference accounts for 65% of total processing time. Optimization can yield 40% performance improvement.
                      </p>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-100">
{`# Current inference pipeline (145ms average)
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│   Input     │───▶│ Preprocess   │───▶│   Model     │
│  (5ms)      │    │   (15ms)     │    │  (95ms)     │
└─────────────┘    └──────────────┘    └─────────────┘
                                               │
                   ┌──────────────┐    ┌───────▼─────┐
                   │   Output     │◀───│ Postprocess │
                   │   (5ms)      │    │   (25ms)    │
                   └──────────────┘    └─────────────┘`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                    <h4 className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">
                      Secondary: Data Loading
                    </h4>
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      20% of latency from data fetching. Implement caching layer.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                      Tertiary: Network I/O
                    </h4>
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      10% from network calls. Use connection pooling.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">
                      Minor: Logging
                    </h4>
                    <p className="text-sm text-green-800 dark:text-green-200">
                      5% from excessive logging. Implement async logging.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Techniques Section */}
        {activeTab === 'techniques' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Optimization Techniques
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-orange-600 pl-6">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                    Model Optimization
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Reduce model size and inference time without sacrificing accuracy:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        1. Quantization
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        Reduce model precision from FP32 to INT8 for 4x speedup
                      </p>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-100">
{`import torch
import torch.quantization as quantization

class ModelOptimizer:
    def __init__(self, model):
        self.model = model
        
    def quantize_model(self):
        """Quantize model for faster inference"""
        # Set model to evaluation mode
        self.model.eval()
        
        # Fuse modules (Conv + BN + ReLU)
        self.model = torch.quantization.fuse_modules(
            self.model,
            [['conv', 'bn', 'relu']]
        )
        
        # Prepare for quantization
        self.model.qconfig = torch.quantization.get_default_qconfig('fbgemm')
        torch.quantization.prepare(self.model, inplace=True)
        
        # Calibrate with representative data
        self.calibrate_model()
        
        # Convert to quantized model
        torch.quantization.convert(self.model, inplace=True)
        
        return self.model
        
    def benchmark_performance(self, input_shape=(1, 3, 224, 224)):
        """Compare performance before and after optimization"""
        import time
        
        # Original model
        original_time = self.measure_inference_time(
            self.model, input_shape, runs=100
        )
        
        # Quantized model
        quantized_model = self.quantize_model()
        quantized_time = self.measure_inference_time(
            quantized_model, input_shape, runs=100
        )
        
        speedup = original_time / quantized_time
        size_reduction = self.get_model_size_reduction()
        
        return {
            'original_latency': original_time,
            'optimized_latency': quantized_time,
            'speedup': speedup,
            'size_reduction': size_reduction
        }`}
                        </pre>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        2. Model Pruning
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        Remove redundant parameters while maintaining accuracy
                      </p>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-100">
{`import torch.nn.utils.prune as prune

class ModelPruner:
    def __init__(self, model, target_sparsity=0.5):
        self.model = model
        self.target_sparsity = target_sparsity
        
    def structured_pruning(self):
        """Apply structured pruning to reduce model size"""
        for name, module in self.model.named_modules():
            if isinstance(module, torch.nn.Conv2d):
                # Prune 50% of channels
                prune.ln_structured(
                    module,
                    name='weight',
                    amount=self.target_sparsity,
                    n=2,
                    dim=0
                )
            elif isinstance(module, torch.nn.Linear):
                # Prune connections
                prune.l1_unstructured(
                    module,
                    name='weight',
                    amount=self.target_sparsity
                )
                
        # Remove pruning reparameterization
        for name, module in self.model.named_modules():
            if hasattr(module, 'weight'):
                prune.remove(module, 'weight')
                
        return self.model
        
    def fine_tune_pruned_model(self, dataloader, epochs=5):
        """Fine-tune after pruning to recover accuracy"""
        optimizer = torch.optim.Adam(self.model.parameters(), lr=1e-4)
        
        for epoch in range(epochs):
            for batch in dataloader:
                # Training loop
                loss = self.train_step(batch)
                optimizer.zero_grad()
                loss.backward()
                optimizer.step()
                
        return self.model`}
                        </pre>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        3. Knowledge Distillation
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        Train smaller, faster models that mimic larger models
                      </p>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-100">
{`class KnowledgeDistillation:
    def __init__(self, teacher_model, student_model):
        self.teacher = teacher_model
        self.student = student_model
        self.temperature = 5.0
        
    def distillation_loss(self, student_logits, teacher_logits, labels):
        """Combined loss for knowledge distillation"""
        # Soft targets from teacher
        soft_targets = F.softmax(teacher_logits / self.temperature, dim=1)
        soft_prob = F.log_softmax(student_logits / self.temperature, dim=1)
        
        # Distillation loss
        distillation = F.kl_div(soft_prob, soft_targets, reduction='batchmean')
        distillation *= self.temperature ** 2
        
        # Student loss
        student_loss = F.cross_entropy(student_logits, labels)
        
        # Combined loss
        alpha = 0.7  # Weight for distillation
        return alpha * distillation + (1 - alpha) * student_loss
        
    def train_student(self, dataloader, epochs=10):
        """Train student model using teacher's knowledge"""
        optimizer = torch.optim.Adam(self.student.parameters())
        self.teacher.eval()
        
        for epoch in range(epochs):
            for inputs, labels in dataloader:
                # Get teacher predictions
                with torch.no_grad():
                    teacher_logits = self.teacher(inputs)
                    
                # Student forward pass
                student_logits = self.student(inputs)
                
                # Calculate loss
                loss = self.distillation_loss(
                    student_logits, teacher_logits, labels
                )
                
                # Optimize
                optimizer.zero_grad()
                loss.backward()
                optimizer.step()`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-yellow-600 pl-6">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                    Caching Strategies
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Implement intelligent caching to reduce redundant computations:
                  </p>
                  
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`import redis
import hashlib
import pickle
from functools import wraps
from typing import Any, Callable

class IntelligentCache:
    def __init__(self, redis_host='localhost', ttl=3600):
        self.redis_client = redis.Redis(host=redis_host, decode_responses=False)
        self.ttl = ttl
        self.stats = {'hits': 0, 'misses': 0}
        
    def cache_key(self, func_name: str, *args, **kwargs) -> str:
        """Generate cache key from function and arguments"""
        key_data = f"{func_name}:{str(args)}:{str(sorted(kwargs.items()))}"
        return hashlib.sha256(key_data.encode()).hexdigest()
        
    def cached(self, prefix: str = ""):
        """Decorator for caching function results"""
        def decorator(func: Callable) -> Callable:
            @wraps(func)
            def wrapper(*args, **kwargs) -> Any:
                # Generate cache key
                cache_key = f"{prefix}:{self.cache_key(func.__name__, *args, **kwargs)}"
                
                # Try to get from cache
                cached_result = self.redis_client.get(cache_key)
                if cached_result:
                    self.stats['hits'] += 1
                    return pickle.loads(cached_result)
                    
                # Cache miss - compute result
                self.stats['misses'] += 1
                result = func(*args, **kwargs)
                
                # Store in cache
                self.redis_client.setex(
                    cache_key,
                    self.ttl,
                    pickle.dumps(result)
                )
                
                return result
            return wrapper
        return decorator
        
    def invalidate_pattern(self, pattern: str):
        """Invalidate cache entries matching pattern"""
        for key in self.redis_client.scan_iter(match=pattern):
            self.redis_client.delete(key)
            
    def get_cache_stats(self):
        """Get cache performance statistics"""
        total = self.stats['hits'] + self.stats['misses']
        hit_rate = self.stats['hits'] / total if total > 0 else 0
        
        return {
            'hit_rate': hit_rate,
            'total_requests': total,
            'cache_size': self.redis_client.dbsize(),
            'memory_usage': self.redis_client.memory_usage()
        }

# Usage example
cache = IntelligentCache(ttl=300)  # 5 minute TTL

@cache.cached(prefix="security_scan")
def analyze_prompt(prompt: str, model: str = "gpt-4") -> dict:
    """Expensive security analysis - perfect for caching"""
    # Simulate expensive computation
    result = perform_security_analysis(prompt, model)
    return result
    
# Implement cache warming
def warm_cache_with_common_patterns():
    """Pre-populate cache with common attack patterns"""
    common_patterns = load_common_attack_patterns()
    
    for pattern in common_patterns:
        # Pre-compute and cache
        analyze_prompt(pattern['prompt'], pattern['model'])`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                    Batch Processing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Process multiple requests together for better throughput:
                  </p>
                  
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`import asyncio
from typing import List, Dict, Any
import numpy as np

class BatchProcessor:
    def __init__(self, 
                 batch_size: int = 32,
                 max_wait_time: float = 0.1):
        self.batch_size = batch_size
        self.max_wait_time = max_wait_time
        self.pending_requests = []
        self.processing = False
        
    async def process_request(self, request: Dict[str, Any]) -> Dict[str, Any]:
        """Add request to batch and wait for result"""
        future = asyncio.Future()
        
        self.pending_requests.append({
            'request': request,
            'future': future
        })
        
        # Start batch processing if not already running
        if not self.processing:
            asyncio.create_task(self._process_batch())
            
        return await future
        
    async def _process_batch(self):
        """Process accumulated requests as a batch"""
        self.processing = True
        
        # Wait for batch to fill or timeout
        await asyncio.sleep(self.max_wait_time)
        
        # Get requests to process
        batch = self.pending_requests[:self.batch_size]
        self.pending_requests = self.pending_requests[self.batch_size:]
        
        if batch:
            try:
                # Extract requests
                requests = [item['request'] for item in batch]
                
                # Batch processing
                results = await self._batch_inference(requests)
                
                # Return results to futures
                for item, result in zip(batch, results):
                    item['future'].set_result(result)
                    
            except Exception as e:
                # Handle errors
                for item in batch:
                    item['future'].set_exception(e)
                    
        self.processing = False
        
        # Continue if more requests pending
        if self.pending_requests:
            asyncio.create_task(self._process_batch())
            
    async def _batch_inference(self, requests: List[Dict]) -> List[Dict]:
        """Perform actual batch inference"""
        # Convert to batch tensor
        inputs = self._prepare_batch_inputs(requests)
        
        # Run inference
        with torch.no_grad():
            outputs = self.model(inputs)
            
        # Process outputs
        results = self._process_batch_outputs(outputs, requests)
        
        return results
        
    def _prepare_batch_inputs(self, requests: List[Dict]) -> torch.Tensor:
        """Prepare inputs for batch processing"""
        # Tokenize and pad
        texts = [req['text'] for req in requests]
        encoded = self.tokenizer(
            texts,
            padding=True,
            truncation=True,
            max_length=512,
            return_tensors='pt'
        )
        
        return encoded
        
# Dynamic batching with priority queue
class PriorityBatchProcessor(BatchProcessor):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.priority_queue = asyncio.PriorityQueue()
        
    async def process_request_with_priority(self, 
                                           request: Dict[str, Any],
                                           priority: int = 5) -> Dict[str, Any]:
        """Process request with priority (lower number = higher priority)"""
        await self.priority_queue.put((priority, request))
        
        if not self.processing:
            asyncio.create_task(self._process_priority_batch())
            
        return await request['future']`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Infrastructure Optimization
              </h2>
              
              <div className="space-y-4">
                <button
                  onClick={() => toggleTechnique('gpu')}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Cpu className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span className="font-medium text-gray-900 dark:text-white">GPU Acceleration</span>
                  </div>
                  <ArrowRight className={`h-5 w-5 text-gray-600 dark:text-gray-400 transition-transform ${
                    expandedTechnique === 'gpu' ? 'rotate-90' : ''
                  }`} />
                </button>
                {expandedTechnique === 'gpu' && (
                  <div className="mt-4 pl-12 space-y-4">
                    <p className="text-gray-600 dark:text-gray-400">
                      Leverage GPU acceleration for faster model inference:
                    </p>
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-100">
{`# GPU optimization configuration
gpu_config:
  # Multi-GPU setup
  devices:
    - gpu:0  # Primary GPU
    - gpu:1  # Secondary GPU
    
  # Memory optimization
  memory:
    growth: true  # Allow memory growth
    per_process_memory_fraction: 0.8
    
  # CUDA optimizations
  cuda:
    cudnn_benchmark: true
    amp_enabled: true  # Automatic mixed precision
    
  # TensorRT optimization
  tensorrt:
    enabled: true
    precision: "fp16"  # or "int8"
    workspace_size: 4GB
    
# Code implementation
import torch
import torch.cuda.amp as amp

class GPUOptimizedModel:
    def __init__(self, model, device_ids=[0, 1]):
        self.model = model
        self.devices = device_ids
        
        # Enable multi-GPU
        if len(device_ids) > 1:
            self.model = torch.nn.DataParallel(
                self.model, 
                device_ids=device_ids
            )
            
        # Move to primary GPU
        self.model = self.model.cuda(device_ids[0])
        
        # Setup mixed precision
        self.scaler = amp.GradScaler()
        
    @torch.cuda.amp.autocast()
    def forward(self, x):
        """Forward pass with automatic mixed precision"""
        return self.model(x)`}
                      </pre>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => toggleTechnique('edge')}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <span className="font-medium text-gray-900 dark:text-white">Edge Deployment</span>
                  </div>
                  <ArrowRight className={`h-5 w-5 text-gray-600 dark:text-gray-400 transition-transform ${
                    expandedTechnique === 'edge' ? 'rotate-90' : ''
                  }`} />
                </button>
                {expandedTechnique === 'edge' && (
                  <div className="mt-4 pl-12 space-y-4">
                    <p className="text-gray-600 dark:text-gray-400">
                      Deploy models at the edge for ultra-low latency:
                    </p>
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-100">
{`# Edge deployment configuration
edge_deployment:
  # Model optimization for edge
  model:
    format: "tflite"  # or "onnx", "openvino"
    optimization:
      - quantization: "int8"
      - pruning: 0.5
      - compression: "gzip"
      
  # Edge locations
  locations:
    - region: "us-east-1"
      devices: 50
      model_version: "v2.1-edge"
    - region: "eu-west-1"
      devices: 30
      model_version: "v2.1-edge"
      
  # Sync strategy
  sync:
    model_updates: "weekly"
    config_updates: "daily"
    telemetry: "real-time"
    
# Edge inference code
import tflite_runtime.interpreter as tflite

class EdgeInference:
    def __init__(self, model_path):
        # Load TFLite model
        self.interpreter = tflite.Interpreter(model_path)
        self.interpreter.allocate_tensors()
        
        # Get input/output details
        self.input_details = self.interpreter.get_input_details()
        self.output_details = self.interpreter.get_output_details()
        
    def predict(self, input_data):
        """Run inference on edge device"""
        # Set input
        self.interpreter.set_tensor(
            self.input_details[0]['index'],
            input_data
        )
        
        # Run inference
        self.interpreter.invoke()
        
        # Get output
        output = self.interpreter.get_tensor(
            self.output_details[0]['index']
        )
        
        return output`}
                      </pre>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => toggleTechnique('distributed')}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Server className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <span className="font-medium text-gray-900 dark:text-white">Distributed Processing</span>
                  </div>
                  <ArrowRight className={`h-5 w-5 text-gray-600 dark:text-gray-400 transition-transform ${
                    expandedTechnique === 'distributed' ? 'rotate-90' : ''
                  }`} />
                </button>
                {expandedTechnique === 'distributed' && (
                  <div className="mt-4 pl-12 space-y-4">
                    <p className="text-gray-600 dark:text-gray-400">
                      Distribute workload across multiple nodes:
                    </p>
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-gray-100">
{`# Distributed processing with Ray
import ray
from ray import serve

# Initialize Ray cluster
ray.init(address="ray://head-node:10001")

@serve.deployment(
    num_replicas=10,
    ray_actor_options={"num_gpus": 1}
)
class DistributedSecurityScanner:
    def __init__(self):
        self.model = load_security_model()
        
    async def __call__(self, request):
        # Extract data from request
        data = await request.json()
        
        # Process in parallel
        results = await self.scan_parallel(data['prompts'])
        
        return {"results": results}
        
    @ray.remote
    def scan_single(self, prompt):
        """Scan single prompt on remote worker"""
        return self.model.analyze(prompt)
        
    async def scan_parallel(self, prompts):
        """Distribute scanning across workers"""
        # Create remote tasks
        futures = [
            self.scan_single.remote(prompt)
            for prompt in prompts
        ]
        
        # Gather results
        results = await ray.get(futures)
        
        return results

# Deploy service
serve.run(DistributedSecurityScanner.bind())`}
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Monitoring Section */}
        {activeTab === 'monitoring' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Performance Monitoring
              </h2>

              <div className="space-y-6">
                <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <Activity className="h-6 w-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
                        Real-Time Monitoring
                      </h3>
                      <p className="text-orange-800 dark:text-orange-200">
                        Track performance metrics in real-time to identify bottlenecks and optimization opportunities. Set up alerts for performance degradation.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Key Performance Indicators
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Performance monitoring setup
from prometheus_client import Counter, Histogram, Gauge, Summary
import time
from functools import wraps

class PerformanceMonitor:
    def __init__(self):
        # Request metrics
        self.request_count = Counter(
            'ai_security_requests_total',
            'Total number of security scan requests',
            ['endpoint', 'status']
        )
        
        # Latency metrics
        self.request_latency = Histogram(
            'ai_security_request_duration_seconds',
            'Request latency in seconds',
            ['endpoint', 'operation'],
            buckets=(0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1.0, 2.5, 5.0)
        )
        
        # Model performance
        self.model_inference_time = Summary(
            'model_inference_duration_seconds',
            'Model inference time',
            ['model_name', 'model_version']
        )
        
        # Resource utilization
        self.gpu_utilization = Gauge(
            'gpu_utilization_percent',
            'GPU utilization percentage',
            ['device_id']
        )
        
        self.memory_usage = Gauge(
            'memory_usage_bytes',
            'Memory usage in bytes',
            ['type']  # heap, gpu, cache
        )
        
        # Queue metrics
        self.queue_size = Gauge(
            'request_queue_size',
            'Number of requests in queue',
            ['queue_name']
        )
        
    def track_request(self, endpoint: str):
        """Decorator to track request metrics"""
        def decorator(func):
            @wraps(func)
            async def wrapper(*args, **kwargs):
                start_time = time.time()
                status = 'success'
                
                try:
                    result = await func(*args, **kwargs)
                    return result
                    
                except Exception as e:
                    status = 'error'
                    raise
                    
                finally:
                    # Record metrics
                    duration = time.time() - start_time
                    self.request_count.labels(
                        endpoint=endpoint,
                        status=status
                    ).inc()
                    
                    self.request_latency.labels(
                        endpoint=endpoint,
                        operation='total'
                    ).observe(duration)
                    
            return wrapper
        return decorator
        
    def track_model_inference(self, model_name: str, version: str):
        """Track model inference performance"""
        def decorator(func):
            @wraps(func)
            def wrapper(*args, **kwargs):
                with self.model_inference_time.labels(
                    model_name=model_name,
                    model_version=version
                ).time():
                    return func(*args, **kwargs)
            return wrapper
        return decorator
        
    def update_resource_metrics(self):
        """Update resource utilization metrics"""
        import psutil
        import pynvml
        
        # CPU and Memory
        self.memory_usage.labels(type='heap').set(
            psutil.Process().memory_info().rss
        )
        
        # GPU metrics
        pynvml.nvmlInit()
        for i in range(pynvml.nvmlDeviceGetCount()):
            handle = pynvml.nvmlDeviceGetHandleByIndex(i)
            utilization = pynvml.nvmlDeviceGetUtilizationRates(handle)
            self.gpu_utilization.labels(device_id=str(i)).set(
                utilization.gpu
            )
            
# Usage
monitor = PerformanceMonitor()

@monitor.track_request('/v1/scan')
async def scan_endpoint(request):
    # Your endpoint logic
    pass

@monitor.track_model_inference('security-bert', 'v2.1')
def run_inference(input_data):
    # Model inference logic
    pass`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Performance Dashboard Configuration
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Grafana dashboard configuration
{
  "dashboard": {
    "title": "AI Security Performance",
    "panels": [
      {
        "title": "Request Latency (P95)",
        "targets": [{
          "expr": "histogram_quantile(0.95, ai_security_request_duration_seconds)"
        }],
        "alert": {
          "conditions": [{
            "evaluator": {
              "params": [0.1],
              "type": "gt"
            }
          }]
        }
      },
      {
        "title": "Throughput",
        "targets": [{
          "expr": "rate(ai_security_requests_total[5m])"
        }]
      },
      {
        "title": "GPU Utilization",
        "targets": [{
          "expr": "avg(gpu_utilization_percent)"
        }]
      },
      {
        "title": "Cache Hit Rate",
        "targets": [{
          "expr": "rate(cache_hits_total[5m]) / rate(cache_requests_total[5m])"
        }]
      }
    ]
  }
}`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Automated Performance Testing
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Automated performance regression testing
import pytest
import asyncio
from statistics import mean, stdev

class PerformanceTests:
    def __init__(self, baseline_metrics):
        self.baseline = baseline_metrics
        self.tolerance = 0.1  # 10% regression tolerance
        
    @pytest.mark.performance
    async def test_api_latency(self, api_client):
        """Test API latency against baseline"""
        latencies = []
        
        # Run multiple requests
        for _ in range(100):
            start = time.time()
            await api_client.scan_prompt("test prompt")
            latencies.append(time.time() - start)
            
        # Calculate statistics
        avg_latency = mean(latencies)
        p95_latency = sorted(latencies)[95]
        
        # Check against baseline
        assert avg_latency <= self.baseline['avg_latency'] * (1 + self.tolerance), \\
            f"Average latency regression: {avg_latency:.3f}s vs {self.baseline['avg_latency']:.3f}s"
            
        assert p95_latency <= self.baseline['p95_latency'] * (1 + self.tolerance), \\
            f"P95 latency regression: {p95_latency:.3f}s vs {self.baseline['p95_latency']:.3f}s"
            
    @pytest.mark.performance
    def test_model_inference_speed(self, model):
        """Test model inference performance"""
        import torch
        
        # Prepare test data
        batch_sizes = [1, 8, 32, 128]
        
        for batch_size in batch_sizes:
            inputs = torch.randn(batch_size, 512)
            
            # Warm up
            for _ in range(10):
                _ = model(inputs)
                
            # Measure
            torch.cuda.synchronize()
            start = time.time()
            
            for _ in range(100):
                _ = model(inputs)
                
            torch.cuda.synchronize()
            duration = time.time() - start
            
            throughput = (100 * batch_size) / duration
            expected = self.baseline[f'throughput_batch_{batch_size}']
            
            assert throughput >= expected * (1 - self.tolerance), \\
                f"Throughput regression at batch size {batch_size}"
                
    @pytest.mark.load
    async def test_load_handling(self, api_client):
        """Test system under load"""
        async def make_request():
            return await api_client.scan_prompt("load test")
            
        # Simulate concurrent users
        concurrent_users = [10, 50, 100, 500]
        
        for users in concurrent_users:
            start = time.time()
            
            # Create concurrent requests
            tasks = [make_request() for _ in range(users)]
            results = await asyncio.gather(*tasks, return_exceptions=True)
            
            duration = time.time() - start
            
            # Check error rate
            errors = sum(1 for r in results if isinstance(r, Exception))
            error_rate = errors / users
            
            assert error_rate < 0.01, \\
                f"High error rate under {users} concurrent users: {error_rate:.2%}"`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Performance Alerts
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                    <div>
                      <h4 className="font-medium text-red-900 dark:text-red-100">Critical: High Latency</h4>
                      <p className="text-sm text-red-800 dark:text-red-200">
                        P95 latency > 500ms for 5 minutes
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                    <div>
                      <h4 className="font-medium text-yellow-900 dark:text-yellow-100">Warning: Memory Pressure</h4>
                      <p className="text-sm text-yellow-800 dark:text-yellow-200">
                        Memory usage > 85% of available
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-3">
                    <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <h4 className="font-medium text-blue-900 dark:text-blue-100">Info: Cache Miss Rate High</h4>
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        Cache hit rate < 60% - consider cache warming
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Scaling Section */}
        {activeTab === 'scaling' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Scaling Strategies
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Horizontal Scaling
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Kubernetes HPA configuration for auto-scaling
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: ai-security-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: ai-security-scanner
    
  minReplicas: 3
  maxReplicas: 100
  
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
        
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
        
  - type: Pods
    pods:
      metric:
        name: request_latency_p95
      target:
        type: AverageValue
        averageValue: "100m"  # 100ms
        
  behavior:
    scaleDown:
      stabilizationWindowSeconds: 300
      policies:
      - type: Percent
        value: 50
        periodSeconds: 60
    scaleUp:
      stabilizationWindowSeconds: 60
      policies:
      - type: Percent
        value: 100
        periodSeconds: 30
      - type: Pods
        value: 10
        periodSeconds: 60

---
# Vertical Pod Autoscaler for right-sizing
apiVersion: autoscaling.k8s.io/v1
kind: VerticalPodAutoscaler
metadata:
  name: ai-security-vpa
spec:
  targetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: ai-security-scanner
    
  updatePolicy:
    updateMode: "Auto"
    
  resourcePolicy:
    containerPolicies:
    - containerName: scanner
      minAllowed:
        cpu: 500m
        memory: 1Gi
      maxAllowed:
        cpu: 4
        memory: 16Gi`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Load Balancing Configuration
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Advanced load balancing with health checks
upstream ai_security_backend {
    # Least connections load balancing
    least_conn;
    
    # Backend servers with weights
    server backend1.ai:8080 weight=3 max_fails=3 fail_timeout=30s;
    server backend2.ai:8080 weight=3 max_fails=3 fail_timeout=30s;
    server backend3.ai:8080 weight=2 max_fails=3 fail_timeout=30s;
    server backend4.ai:8080 weight=2 max_fails=3 fail_timeout=30s;
    
    # Backup servers
    server backup1.ai:8080 backup;
    server backup2.ai:8080 backup;
    
    # Session persistence
    ip_hash;
    
    # Health check
    check interval=5000 rise=2 fall=3 timeout=2000 type=http;
    check_http_send "GET /health HTTP/1.0\\r\\n\\r\\n";
    check_http_expect_alive http_2xx http_3xx;
}

server {
    listen 443 ssl http2;
    server_name api.perfecxion.ai;
    
    # SSL configuration
    ssl_certificate /etc/ssl/certs/api.crt;
    ssl_certificate_key /etc/ssl/private/api.key;
    
    # Request routing
    location /v1/ {
        proxy_pass http://ai_security_backend;
        
        # Timeouts
        proxy_connect_timeout 5s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
        
        # Headers
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        
        # Circuit breaker
        proxy_next_upstream error timeout http_500 http_502 http_503;
        proxy_next_upstream_tries 3;
        
        # Response buffering
        proxy_buffering on;
        proxy_buffer_size 4k;
        proxy_buffers 8 4k;
    }
}`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Database Optimization
                  </h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-100">
{`# Database connection pooling and optimization
import asyncpg
import asyncio
from contextlib import asynccontextmanager

class OptimizedDatabasePool:
    def __init__(self):
        self.pool = None
        self.read_replicas = []
        
    async def initialize(self):
        """Initialize connection pools"""
        # Primary write pool
        self.pool = await asyncpg.create_pool(
            host='primary.db.perfecxion.ai',
            port=5432,
            user='app_user',
            password='secure_password',
            database='ai_security',
            min_size=10,
            max_size=50,
            max_queries=50000,
            max_inactive_connection_lifetime=300,
            command_timeout=10,
            statement_cache_size=1000
        )
        
        # Read replica pools
        for replica in ['replica1', 'replica2', 'replica3']:
            pool = await asyncpg.create_pool(
                host=f'{replica}.db.perfecxion.ai',
                port=5432,
                user='readonly_user',
                password='secure_password',
                database='ai_security',
                min_size=20,
                max_size=100,
                max_queries=100000
            )
            self.read_replicas.append(pool)
            
    @asynccontextmanager
    async def acquire_read(self):
        """Acquire connection from read replica with load balancing"""
        # Round-robin selection
        pool = self.read_replicas[
            asyncio.current_task().id % len(self.read_replicas)
        ]
        
        async with pool.acquire() as connection:
            # Set optimal query parameters
            await connection.execute('''
                SET work_mem = '256MB';
                SET random_page_cost = 1.1;
                SET effective_cache_size = '4GB';
            ''')
            yield connection
            
    async def batch_insert(self, table: str, records: list):
        """Optimized batch insert with COPY"""
        async with self.pool.acquire() as connection:
            # Use COPY for maximum performance
            await connection.copy_records_to_table(
                table,
                records=records,
                columns=['id', 'timestamp', 'data', 'result']
            )
            
    async def get_scan_results(self, scan_ids: list):
        """Optimized batch fetch with prepared statement"""
        async with self.acquire_read() as connection:
            # Prepare statement once
            stmt = await connection.prepare('''
                SELECT id, timestamp, threat_level, details
                FROM scan_results
                WHERE id = ANY($1::uuid[])
                ORDER BY timestamp DESC
            ''')
            
            # Execute with array parameter
            results = await stmt.fetch(scan_ids)
            
            return results`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    Cost Optimization
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Cloud Cost Optimization Strategies
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">Spot Instances</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Use spot instances for batch processing workloads - up to 90% cost savings
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">Reserved Instances</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Reserve baseline capacity for 1-3 years - save 30-70%
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">Auto-shutdown</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Automatically shutdown non-production resources during off-hours
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">Right-sizing</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Use VPA to automatically adjust resource allocations
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Performance Best Practices
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <Zap className="h-8 w-8 text-orange-600 dark:text-orange-400 mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Optimize First
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Profile before optimizing</li>
                    <li>• Focus on bottlenecks</li>
                    <li>• Measure improvements</li>
                    <li>• Avoid premature optimization</li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <BarChart3 className="h-8 w-8 text-yellow-600 dark:text-yellow-400 mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Monitor Always
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Set up comprehensive monitoring</li>
                    <li>• Track key metrics</li>
                    <li>• Alert on degradation</li>
                    <li>• Regular performance reviews</li>
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
                <Link href="/learn/behavioral-monitoring" className="block group">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg hover:shadow-lg transition-all">
                    <Activity className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Behavioral Monitoring
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Monitor AI behavior patterns for anomalies.
                    </p>
                    <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                      Set up monitoring →
                    </span>
                  </div>
                </Link>

                <Link href="/learn/incident-response" className="block group">
                  <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg hover:shadow-lg transition-all">
                    <AlertCircle className="h-8 w-8 text-green-600 dark:text-green-400 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Performance Incidents
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      Handle performance degradation incidents.
                    </p>
                    <span className="text-green-600 dark:text-green-400 font-medium group-hover:underline">
                      Plan response →
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