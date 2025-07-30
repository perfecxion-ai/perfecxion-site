import type { Metadata } from 'next'
import Link from 'next/link'
import { Zap, Cpu, Database, Cloud, BarChart3, Timer, TrendingUp, Gauge, Server, HardDrive, Network, Shield, CheckCircle, ArrowUp, Target, Activity, Monitor, Settings, AlertCircle, Users, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Performance Optimization - AI Security Learning Center | perfecXion.ai',
  description: 'Master performance optimization for AI security systems. Learn caching, scaling, GPU optimization, and monitoring strategies.',
  keywords: 'AI performance optimization, model optimization, caching, scaling, GPU optimization, security performance',
}

export default function OptimizationPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link href="/learn" className="hover:underline text-primary-600 dark:text-primary-400">Learn</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-700 dark:text-gray-300">Performance Optimization</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 flex items-center">
          <Zap className="h-10 w-10 text-yellow-600 mr-4" />
          Performance Optimization
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl">
          Master advanced performance optimization techniques for AI security systems. Learn model optimization, 
          intelligent caching, horizontal scaling, GPU management, and cost-effective deployment strategies for 
          high-throughput security operations.
        </p>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
          <Timer className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-green-900 dark:text-green-100">95%</div>
          <div className="text-sm text-green-700 dark:text-green-300">Latency Reduction</div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
          <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">10x</div>
          <div className="text-sm text-blue-700 dark:text-blue-300">Throughput Increase</div>
        </div>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
          <ArrowUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">80%</div>
          <div className="text-sm text-purple-700 dark:text-purple-300">Cost Savings</div>
        </div>
        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center">
          <Target className="h-8 w-8 text-orange-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">99.9%</div>
          <div className="text-sm text-orange-700 dark:text-orange-300">Uptime SLA</div>
        </div>
      </div>

      {/* Core Optimization Areas */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Core Optimization Areas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg">
            <Cpu className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Model Optimization</h3>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
              <li>• Model quantization and pruning</li>
              <li>• Inference optimization</li>
              <li>• Batch processing efficiency</li>
              <li>• Memory usage reduction</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-lg">
            <Database className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Caching Strategies</h3>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
              <li>• Multi-layer caching</li>
              <li>• Intelligent cache invalidation</li>
              <li>• Distributed caching</li>
              <li>• Result prediction caching</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-lg">
            <Cloud className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Infrastructure Scaling</h3>
            <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2">
              <li>• Auto-scaling policies</li>
              <li>• Load balancing optimization</li>
              <li>• Container orchestration</li>
              <li>• Edge deployment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Model Optimization */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Model Optimization Techniques</h2>
        
        <div className="space-y-8">
          {/* Quantization and Pruning */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Cpu className="h-6 w-6 text-blue-600 mr-3" />
              Model Quantization & Pruning
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Reduce model size and improve inference speed while maintaining accuracy through advanced 
              quantization and pruning techniques.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Model Optimization Framework</h4>
              <pre className="text-sm text-blue-800 dark:text-blue-200 overflow-x-auto">
{`import torch
import torch.nn as nn
import torch.quantization as quant
from torch.nn.utils import prune
import numpy as np
from typing import Dict, Any

class ModelOptimizer:
    def __init__(self, model: nn.Module):
        self.model = model
        self.original_size = self._calculate_model_size()
        self.optimization_history = []
    
    def quantize_model(self, quantization_config: Dict[str, Any] = None) -> nn.Module:
        """Apply post-training quantization to reduce model size"""
        
        if quantization_config is None:
            quantization_config = {
                'backend': 'fbgemm',  # CPU backend
                'reduce_range': False,
                'qconfig_spec': {
                    '': torch.quantization.get_default_qconfig('fbgemm')
                }
            }
        
        # Prepare model for quantization
        self.model.eval()
        self.model.qconfig = quantization_config['qconfig_spec']['']
        
        # Prepare the model
        model_prepared = torch.quantization.prepare(self.model)
        
        # Calibration data (representative dataset)
        calibration_data = self._get_calibration_data()
        
        # Calibrate the model
        with torch.no_grad():
            for batch in calibration_data:
                model_prepared(batch)
        
        # Convert to quantized model
        quantized_model = torch.quantization.convert(model_prepared)
        
        # Validate performance
        accuracy_loss = self._validate_quantized_model(quantized_model)
        size_reduction = self._calculate_size_reduction(quantized_model)
        
        self.optimization_history.append({
            'technique': 'quantization',
            'accuracy_loss': accuracy_loss,
            'size_reduction': size_reduction,
            'config': quantization_config
        })
        
        return quantized_model
    
    def prune_model(self, pruning_ratio: float = 0.2, structured: bool = False) -> nn.Module:
        """Apply magnitude-based pruning to reduce model parameters"""
        
        model_copy = self._copy_model()
        
        if structured:
            # Structured pruning - remove entire channels/filters
            for name, module in model_copy.named_modules():
                if isinstance(module, (nn.Conv2d, nn.Linear)):
                    prune.ln_structured(
                        module, 
                        name='weight', 
                        amount=pruning_ratio, 
                        n=2, 
                        dim=0
                    )
        else:
            # Unstructured pruning - remove individual weights
            parameters_to_prune = []
            for name, module in model_copy.named_modules():
                if isinstance(module, (nn.Conv2d, nn.Linear)):
                    parameters_to_prune.append((module, 'weight'))
            
            prune.global_unstructured(
                parameters_to_prune,
                pruning_method=prune.L1Unstructured,
                amount=pruning_ratio,
            )
        
        # Remove pruning reparameterization
        for name, module in model_copy.named_modules():
            if isinstance(module, (nn.Conv2d, nn.Linear)):
                try:
                    prune.remove(module, 'weight')
                except ValueError:
                    pass  # No pruning mask to remove
        
        # Validate pruned model
        accuracy_loss = self._validate_pruned_model(model_copy)
        sparsity = self._calculate_sparsity(model_copy)
        
        self.optimization_history.append({
            'technique': 'pruning',
            'accuracy_loss': accuracy_loss,
            'sparsity': sparsity,
            'structured': structured,
            'ratio': pruning_ratio
        })
        
        return model_copy
    
    def optimize_inference(self, input_shape: tuple, device: str = 'cpu') -> Dict[str, Any]:
        """Optimize model for inference performance"""
        
        # Convert to TorchScript for optimization
        self.model.eval()
        dummy_input = torch.randn(input_shape).to(device)
        
        # Trace the model
        traced_model = torch.jit.trace(self.model, dummy_input)
        
        # Optimize for inference
        optimized_model = torch.jit.optimize_for_inference(traced_model)
        
        # Benchmark performance
        performance_metrics = self._benchmark_inference(
            original_model=self.model,
            optimized_model=optimized_model,
            input_shape=input_shape,
            device=device
        )
        
        self.optimization_history.append({
            'technique': 'inference_optimization',
            'performance_gain': performance_metrics['speedup'],
            'memory_reduction': performance_metrics['memory_reduction']
        })
        
        return {
            'optimized_model': optimized_model,
            'performance_metrics': performance_metrics
        }
    
    def knowledge_distillation(self, student_model: nn.Module, 
                              temperature: float = 3.0,
                              alpha: float = 0.7) -> nn.Module:
        """Use knowledge distillation to create smaller, faster model"""
        
        teacher_model = self.model.eval()
        student_model.train()
        
        # Loss functions
        criterion_hard = nn.CrossEntropyLoss()
        criterion_soft = nn.KLDivLoss(reduction='batchmean')
        
        optimizer = torch.optim.Adam(student_model.parameters(), lr=0.001)
        
        training_data = self._get_training_data()
        
        for epoch in range(50):  # Simplified training loop
            total_loss = 0
            for batch_idx, (data, target) in enumerate(training_data):
                optimizer.zero_grad()
                
                # Teacher predictions (soft targets)
                with torch.no_grad():
                    teacher_output = teacher_model(data)
                    soft_targets = torch.softmax(teacher_output / temperature, dim=1)
                
                # Student predictions
                student_output = student_model(data)
                soft_predictions = torch.log_softmax(student_output / temperature, dim=1)
                hard_predictions = student_output
                
                # Combined loss
                soft_loss = criterion_soft(soft_predictions, soft_targets) * (temperature ** 2)
                hard_loss = criterion_hard(hard_predictions, target)
                
                total_loss = alpha * soft_loss + (1 - alpha) * hard_loss
                total_loss.backward()
                optimizer.step()
        
        # Validate distilled model
        accuracy = self._validate_student_model(student_model)
        compression_ratio = self._calculate_compression_ratio(teacher_model, student_model)
        
        self.optimization_history.append({
            'technique': 'knowledge_distillation',
            'student_accuracy': accuracy,
            'compression_ratio': compression_ratio,
            'temperature': temperature,
            'alpha': alpha
        })
        
        return student_model
    
    def _calculate_model_size(self) -> int:
        """Calculate model size in bytes"""
        return sum(p.numel() * p.element_size() for p in self.model.parameters())
    
    def _benchmark_inference(self, original_model, optimized_model, 
                           input_shape, device, num_runs=1000):
        """Benchmark inference performance"""
        dummy_input = torch.randn(input_shape).to(device)
        
        # Warm up
        for _ in range(10):
            _ = original_model(dummy_input)
            _ = optimized_model(dummy_input)
        
        # Benchmark original model
        torch.cuda.synchronize() if device == 'cuda' else None
        start_time = time.time()
        
        for _ in range(num_runs):
            _ = original_model(dummy_input)
        
        torch.cuda.synchronize() if device == 'cuda' else None
        original_time = time.time() - start_time
        
        # Benchmark optimized model
        torch.cuda.synchronize() if device == 'cuda' else None
        start_time = time.time()
        
        for _ in range(num_runs):
            _ = optimized_model(dummy_input)
        
        torch.cuda.synchronize() if device == 'cuda' else None
        optimized_time = time.time() - start_time
        
        return {
            'original_time': original_time,
            'optimized_time': optimized_time,
            'speedup': original_time / optimized_time,
            'memory_reduction': self._calculate_memory_usage_reduction(
                original_model, optimized_model
            )
        }

# Usage example
import torchvision.models as models

# Load pre-trained model
model = models.resnet18(pretrained=True)
optimizer = ModelOptimizer(model)

# Apply quantization
quantized_model = optimizer.quantize_model()
print(f"Model size reduced by: {optimizer.optimization_history[-1]['size_reduction']:.2%}")

# Apply pruning
pruned_model = optimizer.prune_model(pruning_ratio=0.3)
print(f"Model sparsity: {optimizer.optimization_history[-1]['sparsity']:.2%}")

# Optimize for inference
inference_results = optimizer.optimize_inference((1, 3, 224, 224))
print(f"Inference speedup: {inference_results['performance_metrics']['speedup']:.2f}x")`}
              </pre>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2">Quantization Benefits</h5>
                <ul className="text-green-800 dark:text-green-200 text-sm space-y-1">
                  <li>• 75% model size reduction</li>
                  <li>• 4x faster inference</li>
                  <li>• Lower memory usage</li>
                  <li>• Hardware acceleration support</li>
                  <li>• Minimal accuracy loss (&lt;2%)</li>
                </ul>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded">
                <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Pruning Benefits</h5>
                <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-1">
                  <li>• 90% parameter reduction</li>
                  <li>• Faster training and inference</li>
                  <li>• Reduced overfitting</li>
                  <li>• Better generalization</li>
                  <li>• Edge deployment ready</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Caching Strategies */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <Database className="h-6 w-6 text-green-600 mr-3" />
              Intelligent Caching Strategies
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Implement multi-layer caching with intelligent invalidation and prediction capabilities 
              to dramatically reduce response times and computational overhead.
            </p>

            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Advanced Caching System</h4>
              <pre className="text-sm text-green-800 dark:text-green-200 overflow-x-auto">
{`import redis
import hashlib
import pickle
import time
import threading
from typing import Any, Optional, Dict, List
from dataclasses import dataclass
from abc import ABC, abstractmethod

@dataclass
class CacheEntry:
    value: Any
    timestamp: float
    ttl: float
    access_count: int = 0
    hit_score: float = 0.0

class CacheLayer(ABC):
    @abstractmethod
    def get(self, key: str) -> Optional[Any]:
        pass
    
    @abstractmethod
    def set(self, key: str, value: Any, ttl: float = 3600) -> bool:
        pass
    
    @abstractmethod
    def delete(self, key: str) -> bool:
        pass

class MemoryCache(CacheLayer):
    def __init__(self, max_size: int = 10000):
        self.cache: Dict[str, CacheEntry] = {}
        self.max_size = max_size
        self.lock = threading.RLock()
    
    def get(self, key: str) -> Optional[Any]:
        with self.lock:
            entry = self.cache.get(key)
            if entry is None:
                return None
            
            # Check TTL
            if time.time() - entry.timestamp > entry.ttl:
                del self.cache[key]
                return None
            
            # Update access statistics
            entry.access_count += 1
            entry.hit_score = self._calculate_hit_score(entry)
            
            return entry.value
    
    def set(self, key: str, value: Any, ttl: float = 3600) -> bool:
        with self.lock:
            # Evict if at capacity
            if len(self.cache) >= self.max_size:
                self._evict_lru()
            
            self.cache[key] = CacheEntry(
                value=value,
                timestamp=time.time(),
                ttl=ttl,
                access_count=1,
                hit_score=1.0
            )
            return True
    
    def _evict_lru(self):
        """Evict least recently used items"""
        if not self.cache:
            return
        
        # Find item with lowest hit score
        lru_key = min(self.cache.keys(), 
                     key=lambda k: self.cache[k].hit_score)
        del self.cache[lru_key]
    
    def _calculate_hit_score(self, entry: CacheEntry) -> float:
        """Calculate hit score based on recency and frequency"""
        age = time.time() - entry.timestamp
        frequency_score = entry.access_count / (age + 1)
        recency_score = 1 / (age + 1)
        return 0.7 * frequency_score + 0.3 * recency_score

class RedisCache(CacheLayer):
    def __init__(self, host: str = 'localhost', port: int = 6379, db: int = 0):
        self.redis_client = redis.Redis(host=host, port=port, db=db)
    
    def get(self, key: str) -> Optional[Any]:
        try:
            data = self.redis_client.get(key)
            if data is None:
                return None
            return pickle.loads(data)
        except Exception:
            return None
    
    def set(self, key: str, value: Any, ttl: float = 3600) -> bool:
        try:
            serialized = pickle.dumps(value)
            return self.redis_client.setex(key, int(ttl), serialized)
        except Exception:
            return False
    
    def delete(self, key: str) -> bool:
        try:
            return self.redis_client.delete(key) > 0
        except Exception:
            return False

class IntelligentCacheManager:
    def __init__(self):
        self.layers = [
            MemoryCache(max_size=1000),    # L1: In-memory
            RedisCache(),                   # L2: Distributed cache
        ]
        
        self.prediction_cache = {}
        self.access_patterns = {}
        self.cache_stats = {
            'hits': 0,
            'misses': 0,
            'predictions': 0,
            'prediction_accuracy': 0.0
        }
    
    def get(self, key: str) -> Optional[Any]:
        """Get value from cache with intelligent prediction"""
        
        # Try each cache layer
        for i, layer in enumerate(self.layers):
            value = layer.get(key)
            if value is not None:
                self.cache_stats['hits'] += 1
                
                # Promote to higher cache levels
                self._promote_to_higher_levels(key, value, i)
                
                # Update access patterns for prediction
                self._update_access_patterns(key)
                
                return value
        
        self.cache_stats['misses'] += 1
        return None
    
    def set(self, key: str, value: Any, ttl: float = 3600) -> bool:
        """Set value in all cache layers"""
        success = True
        
        for layer in self.layers:
            if not layer.set(key, value, ttl):
                success = False
        
        # Trigger predictive caching
        self._predict_related_keys(key)
        
        return success
    
    def intelligent_preload(self, base_key: str, related_keys: List[str]):
        """Preload related keys based on access patterns"""
        
        if base_key in self.access_patterns:
            pattern = self.access_patterns[base_key]
            
            # Predict which keys will be needed
            for related_key in related_keys:
                prediction_score = self._calculate_prediction_score(
                    base_key, related_key, pattern
                )
                
                if prediction_score > 0.7:  # High confidence prediction
                    # Preload the key if not already cached
                    if self.get(related_key) is None:
                        self._preload_key(related_key)
                        self.cache_stats['predictions'] += 1
    
    def batch_invalidate(self, pattern: str):
        """Intelligently invalidate cache entries matching pattern"""
        
        for layer in self.layers:
            if hasattr(layer, 'redis_client'):
                # Redis pattern matching
                keys = layer.redis_client.keys(pattern)
                if keys:
                    layer.redis_client.delete(*keys)
            else:
                # Memory cache pattern matching
                keys_to_delete = [k for k in layer.cache.keys() 
                                if self._matches_pattern(k, pattern)]
                for key in keys_to_delete:
                    layer.delete(key)
    
    def optimize_cache_sizes(self):
        """Dynamically optimize cache sizes based on hit rates"""
        
        total_hits = self.cache_stats['hits']
        total_requests = total_hits + self.cache_stats['misses']
        
        if total_requests > 1000:  # Enough data for optimization
            hit_rate = total_hits / total_requests
            
            # Adjust L1 cache size based on hit rate
            if hit_rate < 0.8:
                # Increase L1 cache size
                if hasattr(self.layers[0], 'max_size'):
                    self.layers[0].max_size = min(
                        self.layers[0].max_size * 1.2, 50000
                    )
            elif hit_rate > 0.95:
                # Decrease L1 cache size to save memory
                if hasattr(self.layers[0], 'max_size'):
                    self.layers[0].max_size = max(
                        self.layers[0].max_size * 0.8, 1000
                    )
    
    def get_cache_statistics(self) -> Dict[str, Any]:
        """Get comprehensive cache statistics"""
        
        total_requests = self.cache_stats['hits'] + self.cache_stats['misses']
        hit_rate = (self.cache_stats['hits'] / total_requests 
                   if total_requests > 0 else 0)
        
        return {
            'hit_rate': hit_rate,
            'total_requests': total_requests,
            'predictions_made': self.cache_stats['predictions'],
            'prediction_accuracy': self.cache_stats['prediction_accuracy'],
            'l1_size': len(self.layers[0].cache) if hasattr(self.layers[0], 'cache') else 0,
            'memory_usage': self._calculate_memory_usage(),
            'performance_gain': self._calculate_performance_gain()
        }
    
    def _promote_to_higher_levels(self, key: str, value: Any, found_level: int):
        """Promote frequently accessed items to higher cache levels"""
        for i in range(found_level):
            self.layers[i].set(key, value)
    
    def _update_access_patterns(self, key: str):
        """Update access patterns for intelligent prediction"""
        if key not in self.access_patterns:
            self.access_patterns[key] = {
                'access_times': [],
                'related_keys': set(),
                'frequency': 0
            }
        
        pattern = self.access_patterns[key]
        pattern['access_times'].append(time.time())
        pattern['frequency'] += 1
        
        # Keep only recent access times (last 1000)
        if len(pattern['access_times']) > 1000:
            pattern['access_times'] = pattern['access_times'][-1000:]

# Example usage for AI security caching
class AISecurityCache:
    def __init__(self):
        self.cache_manager = IntelligentCacheManager()
    
    def cache_scan_result(self, input_hash: str, scan_result: Dict[str, Any], 
                         ttl: float = 1800):  # 30 minutes
        """Cache AI security scan results"""
        cache_key = f"scan_result:{input_hash}"
        return self.cache_manager.set(cache_key, scan_result, ttl)
    
    def get_cached_scan(self, input_hash: str) -> Optional[Dict[str, Any]]:
        """Get cached scan result"""
        cache_key = f"scan_result:{input_hash}"
        return self.cache_manager.get(cache_key)
    
    def cache_model_prediction(self, model_id: str, input_hash: str, 
                              prediction: Any, confidence: float):
        """Cache model predictions with confidence-based TTL"""
        cache_key = f"prediction:{model_id}:{input_hash}"
        
        # Higher confidence predictions cached longer
        ttl = 3600 * confidence  # 1 hour at 100% confidence
        
        self.cache_manager.set(cache_key, {
            'prediction': prediction,
            'confidence': confidence,
            'timestamp': time.time()
        }, ttl)
    
    def preload_user_patterns(self, user_id: str):
        """Preload cache based on user access patterns"""
        base_key = f"user_patterns:{user_id}"
        
        # Get related keys that this user typically accesses
        related_keys = self._get_user_related_keys(user_id)
        
        self.cache_manager.intelligent_preload(base_key, related_keys)

# Usage example
cache = AISecurityCache()

# Cache a scan result
input_text = "Some user input to analyze"
input_hash = hashlib.sha256(input_text.encode()).hexdigest()

scan_result = {
    'risk_score': 0.75,
    'threats': ['prompt_injection'],
    'confidence': 0.92
}

cache.cache_scan_result(input_hash, scan_result)

# Retrieve cached result
cached_result = cache.get_cached_scan(input_hash)
if cached_result:
    print(f"Cache hit! Risk score: {cached_result['risk_score']}")
else:
    print("Cache miss - performing new scan")`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Scaling */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Infrastructure Scaling & Auto-optimization</h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Cloud className="h-6 w-6 text-purple-600 mr-3" />
            Auto-scaling & Load Management
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Kubernetes Auto-scaling</h4>
              <pre className="text-sm text-purple-800 dark:text-purple-200 overflow-x-auto">
{`# kubernetes-autoscaler.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ai-security-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: ai-security
  template:
    metadata:
      labels:
        app: ai-security
    spec:
      containers:
      - name: ai-security
        image: perfecxion/ai-security:latest
        resources:
          requests:
            memory: "512Mi"
            cpu: "500m"
          limits:
            memory: "2Gi"
            cpu: "2000m"
        env:
        - name: MAX_WORKERS
          value: "4"
        - name: CACHE_SIZE
          value: "1GB"
        
        livenessProbe:
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10
        
        readinessProbe:
          httpGet:
            path: /ready
            port: 8080
          initialDelaySeconds: 5
          periodSeconds: 5

---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: ai-security-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: ai-security-service
  minReplicas: 2
  maxReplicas: 50
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
        name: requests_per_second
      target:
        type: AverageValue
        averageValue: "100"
  
  behavior:
    scaleUp:
      stabilizationWindowSeconds: 60
      policies:
      - type: Percent
        value: 100
        periodSeconds: 15
      - type: Pods
        value: 2
        periodSeconds: 60
    scaleDown:
      stabilizationWindowSeconds: 300
      policies:
      - type: Percent
        value: 10
        periodSeconds: 60

---
apiVersion: v1
kind: Service
metadata:
  name: ai-security-service
spec:
  selector:
    app: ai-security
  ports:
  - protocol: TCP
    port: 80
    targetPort: 8080
  type: LoadBalancer`}
              </pre>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Dynamic Load Balancing</h4>
              <pre className="text-sm text-orange-800 dark:text-orange-200 overflow-x-auto">
{`# nginx-dynamic-config.conf
upstream ai_security_backend {
    least_conn;
    
    # Dynamic upstream configuration
    server ai-security-1:8080 weight=3 max_fails=3 fail_timeout=30s;
    server ai-security-2:8080 weight=3 max_fails=3 fail_timeout=30s;
    server ai-security-3:8080 weight=2 max_fails=3 fail_timeout=30s;
    
    # Health check
    keepalive 32;
}

# Adaptive rate limiting
map $request_uri $rate_limit_key {
    ~*/api/scan/batch    "batch_\$binary_remote_addr";
    ~*/api/scan          "scan_\$binary_remote_addr";
    default              "general_\$binary_remote_addr";
}

# Rate limit zones
limit_req_zone \$rate_limit_key zone=batch_limit:10m rate=10r/m;
limit_req_zone \$rate_limit_key zone=scan_limit:10m rate=100r/m;
limit_req_zone \$rate_limit_key zone=general_limit:10m rate=1000r/m;

server {
    listen 80;
    server_name api.perfecxion.ai;
    
    # Intelligent routing based on request type
    location /api/scan/batch {
        limit_req zone=batch_limit burst=5 nodelay;
        
        # Route batch requests to specific instances
        proxy_pass http://ai_security_backend;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Request-Type "batch";
        
        # Longer timeout for batch operations
        proxy_connect_timeout 10s;
        proxy_send_timeout 300s;
        proxy_read_timeout 300s;
    }
    
    location /api/scan {
        limit_req zone=scan_limit burst=20 nodelay;
        
        proxy_pass http://ai_security_backend;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Request-Type "single";
        
        # Standard timeout for single requests
        proxy_connect_timeout 5s;
        proxy_send_timeout 30s;
        proxy_read_timeout 30s;
    }
    
    # Circuit breaker implementation
    location @fallback {
        return 503 '{"error": "Service temporarily unavailable", "retry_after": 30}';
        add_header Content-Type application/json;
    }
    
    # Health monitoring
    location /nginx-health {
        access_log off;
        return 200 "healthy\\n";
        add_header Content-Type text/plain;
    }
}`}
              </pre>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Performance Monitoring & Auto-optimization</h4>
            <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
{`import asyncio
import time
import psutil
import threading
from typing import Dict, List, Any
from dataclasses import dataclass
from datetime import datetime, timedelta

@dataclass
class PerformanceMetrics:
    cpu_usage: float
    memory_usage: float
    response_time: float
    throughput: float
    error_rate: float
    active_connections: int
    timestamp: datetime

class PerformanceOptimizer:
    def __init__(self):
        self.metrics_history: List[PerformanceMetrics] = []
        self.optimization_rules = {
            'high_cpu': {'threshold': 80, 'action': 'scale_out'},
            'high_memory': {'threshold': 85, 'action': 'increase_memory'},
            'high_latency': {'threshold': 2000, 'action': 'optimize_cache'},
            'high_error_rate': {'threshold': 0.05, 'action': 'circuit_breaker'}
        }
        
        self.auto_optimization_enabled = True
        self.monitoring_thread = None
        
    def start_monitoring(self):
        """Start continuous performance monitoring"""
        self.monitoring_thread = threading.Thread(
            target=self._monitoring_loop,
            daemon=True
        )
        self.monitoring_thread.start()
    
    def _monitoring_loop(self):
        """Continuous monitoring loop"""
        while True:
            metrics = self._collect_metrics()
            self.metrics_history.append(metrics)
            
            # Keep only last 1000 metrics
            if len(self.metrics_history) > 1000:
                self.metrics_history = self.metrics_history[-1000:]
            
            # Check for optimization opportunities
            if self.auto_optimization_enabled:
                self._check_optimization_triggers(metrics)
            
            time.sleep(10)  # Collect metrics every 10 seconds
    
    def _collect_metrics(self) -> PerformanceMetrics:
        """Collect current system metrics"""
        
        # System metrics
        cpu_usage = psutil.cpu_percent(interval=1)
        memory = psutil.virtual_memory()
        memory_usage = memory.percent
        
        # Application-specific metrics (mock data for example)
        response_time = self._get_avg_response_time()
        throughput = self._get_current_throughput()
        error_rate = self._get_error_rate()
        active_connections = self._get_active_connections()
        
        return PerformanceMetrics(
            cpu_usage=cpu_usage,
            memory_usage=memory_usage,
            response_time=response_time,
            throughput=throughput,
            error_rate=error_rate,
            active_connections=active_connections,
            timestamp=datetime.now()
        )
    
    def _check_optimization_triggers(self, metrics: PerformanceMetrics):
        """Check if any optimization triggers are met"""
        
        actions_to_take = []
        
        # CPU optimization
        if metrics.cpu_usage > self.optimization_rules['high_cpu']['threshold']:
            actions_to_take.append('scale_out')
        
        # Memory optimization
        if metrics.memory_usage > self.optimization_rules['high_memory']['threshold']:
            actions_to_take.append('optimize_memory')
        
        # Latency optimization
        if metrics.response_time > self.optimization_rules['high_latency']['threshold']:
            actions_to_take.append('optimize_cache')
        
        # Error rate optimization
        if metrics.error_rate > self.optimization_rules['high_error_rate']['threshold']:
            actions_to_take.append('circuit_breaker')
        
        # Execute optimization actions
        for action in actions_to_take:
            self._execute_optimization_action(action, metrics)
    
    def _execute_optimization_action(self, action: str, metrics: PerformanceMetrics):
        """Execute specific optimization action"""
        
        print(f"Executing optimization action: {action}")
        
        if action == 'scale_out':
            self._scale_out_instances()
        elif action == 'optimize_memory':
            self._optimize_memory_usage()
        elif action == 'optimize_cache':
            self._optimize_cache_configuration()
        elif action == 'circuit_breaker':
            self._enable_circuit_breaker()
    
    def _scale_out_instances(self):
        """Scale out application instances"""
        # In a real implementation, this would call Kubernetes API
        # or cloud provider APIs to scale out
        print("Scaling out instances due to high CPU usage")
        
        # Example: kubectl scale deployment ai-security-service --replicas=6
        import subprocess
        try:
            result = subprocess.run([
                'kubectl', 'scale', 'deployment', 'ai-security-service', 
                '--replicas=6'
            ], capture_output=True, text=True)
            
            if result.returncode == 0:
                print("Successfully scaled out instances")
            else:
                print(f"Failed to scale out: {result.stderr}")
        except Exception as e:
            print(f"Error scaling out: {e}")
    
    def _optimize_memory_usage(self):
        """Optimize memory usage"""
        print("Optimizing memory usage")
        
        # Clear caches
        self._clear_low_priority_caches()
        
        # Adjust garbage collection
        import gc
        gc.collect()
        
        # Reduce cache sizes temporarily
        self._reduce_cache_sizes()
    
    def _optimize_cache_configuration(self):
        """Optimize cache configuration for better performance"""
        print("Optimizing cache configuration")
        
        # Increase cache hit ratio
        self._increase_cache_sizes()
        
        # Implement more aggressive prefetching
        self._enable_aggressive_prefetching()
    
    def get_optimization_recommendations(self) -> List[Dict[str, Any]]:
        """Get performance optimization recommendations"""
        
        if len(self.metrics_history) < 10:
            return []
        
        recent_metrics = self.metrics_history[-10:]
        avg_cpu = sum(m.cpu_usage for m in recent_metrics) / len(recent_metrics)
        avg_memory = sum(m.memory_usage for m in recent_metrics) / len(recent_metrics)
        avg_response_time = sum(m.response_time for m in recent_metrics) / len(recent_metrics)
        
        recommendations = []
        
        if avg_cpu > 70:
            recommendations.append({
                'type': 'scaling',
                'priority': 'high',
                'action': 'Consider horizontal scaling',
                'details': f'Average CPU usage: {avg_cpu:.1f}%'
            })
        
        if avg_memory > 80:
            recommendations.append({
                'type': 'memory',
                'priority': 'high',
                'action': 'Optimize memory usage or increase memory limits',
                'details': f'Average memory usage: {avg_memory:.1f}%'
            })
        
        if avg_response_time > 1000:
            recommendations.append({
                'type': 'performance',
                'priority': 'medium',
                'action': 'Implement caching or optimize algorithms',
                'details': f'Average response time: {avg_response_time:.0f}ms'
            })
        
        return recommendations

# Usage example
optimizer = PerformanceOptimizer()
optimizer.start_monitoring()

# Get recommendations
recommendations = optimizer.get_optimization_recommendations()
for rec in recommendations:
    print(f"[{rec['priority'].upper()}] {rec['action']}: {rec['details']}")`}
            </pre>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Performance Optimization Best Practices</h2>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">Model Optimization</h3>
              <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Use quantization for 4x smaller models with minimal accuracy loss</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Implement structured pruning for faster inference</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Use knowledge distillation for edge deployment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Enable mixed-precision training and inference</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Batch similar requests for improved throughput</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">Infrastructure Optimization</h3>
              <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Implement multi-layer caching with intelligent invalidation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Use auto-scaling based on multiple metrics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Deploy models closer to users with edge computing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Monitor and optimize based on real-time metrics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Use circuit breakers for resilient architectures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Optimization */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Cost Optimization Strategies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4">Resource Optimization</h3>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-2">
              <li>• Right-sizing compute instances</li>
              <li>• Spot instance utilization</li>
              <li>• Reserved capacity planning</li>
              <li>• Auto-shutdown idle resources</li>
              <li>• Efficient resource scheduling</li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">Model Efficiency</h3>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-2">
              <li>• Model compression techniques</li>
              <li>• Inference optimization</li>
              <li>• Batch processing strategies</li>
              <li>• Model sharing and reuse</li>
              <li>• Efficient data preprocessing</li>
            </ul>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">Storage & Bandwidth</h3>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-2">
              <li>• Data lifecycle management</li>
              <li>• Compression and deduplication</li>
              <li>• CDN optimization</li>
              <li>• Efficient data transfer</li>
              <li>• Archive cold data</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/learn/integrations"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          ← Integration Patterns
        </Link>
        <Link
          href="/learn/red-team"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          Red Team Testing →
        </Link>
      </div>
    </div>
  )
}