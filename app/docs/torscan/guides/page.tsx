import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Shield, Globe, Brain, Zap, AlertTriangle, Users, Lock, Database, Search } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Guides & Examples - TorScan Documentation',
    description: 'Advanced configuration guides, best practices, and real-world examples for TorScan dark web intelligence platform.',
}

export default function TorScanGuides() {
    return (
        <div className="bg-white dark:bg-background-dark min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
                    <Link href="/docs" className="hover:text-primary-600 dark:hover:text-primary-400">
                        Docs
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <Link href="/docs/torscan" className="hover:text-primary-600 dark:hover:text-primary-400">
                        TorScan
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-gray-900 dark:text-white">Guides & Examples</span>
                </nav>

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    Guides & Examples
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                    Advanced guides for configuring TorScan, implementing custom solutions, and following security best practices.
                </p>

                {/* Advanced Configuration */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Advanced Configuration
                    </h2>

                    {/* Tor Circuit Management */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Globe className="h-5 w-5 mr-2" />
                            Tor Circuit Management
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Optimize Tor circuit rotation for better anonymity and performance.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# config/tor_settings.yaml
tor:
  # Circuit rotation settings
  circuit_rotation:
    enabled: true
    rotation_interval: 300  # seconds
    max_circuits: 10
    countries_exclude: ["US", "GB", "CA", "AU", "NZ"]  # Five Eyes
    countries_prefer: ["CH", "IS", "RO", "CZ"]
    
  # Performance tuning
  performance:
    concurrent_circuits: 5
    connection_timeout: 30
    read_timeout: 60
    retry_attempts: 3
    
  # Security settings
  security:
    use_bridges: true
    bridge_type: "obfs4"
    isolate_streams: true
    new_circuit_on_error: true
    
  # Entry guards
  entry_guards:
    num_guards: 3
    guard_lifetime: 60  # days
    restrict_guards: true`}</pre>
                        </div>
                        
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Implementing Circuit Monitoring</h4>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# plugins/circuit_monitor.py
import time
from stem import Signal
from stem.control import Controller

class CircuitMonitor:
    def __init__(self, control_port=9051, password='your_password'):
        self.controller = Controller.from_port(port=control_port)
        self.controller.authenticate(password=password)
        self.circuit_times = {}
        
    def get_circuit_info(self):
        """Get current circuit information"""
        circuits = self.controller.get_circuits()
        circuit_info = []
        
        for circuit in circuits:
            if circuit.status == 'BUILT':
                path = [r.fingerprint for r in circuit.path]
                exit_fp = path[-1] if path else None
                exit_relay = self.controller.get_network_status(exit_fp)
                
                circuit_info.append({
                    'id': circuit.id,
                    'path_length': len(path),
                    'exit_country': exit_relay.address if exit_relay else 'Unknown',
                    'build_time': circuit.created,
                    'purpose': circuit.purpose
                })
                
        return circuit_info
        
    def rotate_circuit(self):
        """Force new Tor circuit"""
        self.controller.signal(Signal.NEWNYM)
        time.sleep(self.controller.get_newnym_wait())
        return self.get_circuit_info()
        
    def monitor_performance(self):
        """Track circuit performance metrics"""
        circuits = self.get_circuit_info()
        metrics = {
            'total_circuits': len(circuits),
            'countries': set(),
            'avg_path_length': 0
        }
        
        for circuit in circuits:
            metrics['countries'].add(circuit['exit_country'])
            metrics['avg_path_length'] += circuit['path_length']
            
        metrics['avg_path_length'] /= len(circuits) if circuits else 1
        metrics['countries'] = list(metrics['countries'])
        
        return metrics`}</pre>
                        </div>
                    </div>

                    {/* Elasticsearch Optimization */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Database className="h-5 w-5 mr-2" />
                            Elasticsearch Optimization
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Configure Elasticsearch for optimal dark web content indexing.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Create optimized index mapping
PUT /torscan_content
{
  "settings": {
    "number_of_shards": 3,
    "number_of_replicas": 1,
    "analysis": {
      "analyzer": {
        "dark_web_analyzer": {
          "type": "custom",
          "tokenizer": "standard",
          "filter": [
            "lowercase",
            "stop",
            "dark_web_synonyms",
            "edge_ngram_filter"
          ]
        }
      },
      "filter": {
        "dark_web_synonyms": {
          "type": "synonym",
          "synonyms": [
            "cc, credit card",
            "ssn, social security",
            "btc, bitcoin",
            "onion, tor, hidden service"
          ]
        },
        "edge_ngram_filter": {
          "type": "edge_ngram",
          "min_gram": 3,
          "max_gram": 20
        }
      }
    }
  },
  "mappings": {
    "properties": {
      "url": {
        "type": "keyword",
        "fields": {
          "text": {
            "type": "text"
          }
        }
      },
      "content": {
        "type": "text",
        "analyzer": "dark_web_analyzer",
        "fields": {
          "keyword": {
            "type": "keyword",
            "ignore_above": 256
          }
        }
      },
      "found_at": {
        "type": "date"
      },
      "matched_patterns": {
        "type": "keyword"
      },
      "iocs": {
        "type": "nested",
        "properties": {
          "type": {"type": "keyword"},
          "value": {"type": "keyword"},
          "context": {"type": "text"}
        }
      },
      "metadata": {
        "type": "object",
        "properties": {
          "language": {"type": "keyword"},
          "tor_exit": {"type": "ip"},
          "page_size": {"type": "long"},
          "response_time": {"type": "float"}
        }
      }
    }
  }
}`}</pre>
                        </div>

                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Search Query Optimization</h4>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Advanced search with aggregations
POST /torscan_content/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "multi_match": {
            "query": "data breach credit card",
            "fields": ["content^2", "url.text", "title^3"],
            "type": "best_fields",
            "fuzziness": "AUTO"
          }
        }
      ],
      "filter": [
        {
          "range": {
            "found_at": {
              "gte": "now-7d/d"
            }
          }
        },
        {
          "terms": {
            "matched_patterns": ["credit_card", "personal_data"]
          }
        }
      ]
    }
  },
  "aggs": {
    "patterns_over_time": {
      "date_histogram": {
        "field": "found_at",
        "calendar_interval": "day"
      },
      "aggs": {
        "top_patterns": {
          "terms": {
            "field": "matched_patterns",
            "size": 5
          }
        }
      }
    },
    "ioc_types": {
      "nested": {
        "path": "iocs"
      },
      "aggs": {
        "by_type": {
          "terms": {
            "field": "iocs.type"
          }
        }
      }
    }
  },
  "highlight": {
    "fields": {
      "content": {
        "fragment_size": 150,
        "number_of_fragments": 3
      }
    }
  }
}`}</pre>
                        </div>
                    </div>
                </div>

                {/* Custom Pattern Development */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Custom Pattern Development
                    </h2>

                    {/* Creating Advanced Patterns */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                            <Brain className="h-5 w-5 mr-2" />
                            Creating Advanced Detection Patterns
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Financial Data Patterns</h4>
                                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                    <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# patterns/financial.yaml
patterns:
  # Credit Card Detection (with BIN validation)
  - name: credit_card_full
    regex: |
      (?:4[0-9]{12}(?:[0-9]{3})?|          # Visa
      5[1-5][0-9]{14}|                     # MasterCard
      3[47][0-9]{13}|                      # Amex
      3(?:0[0-5]|[68][0-9])[0-9]{11}|      # Diners
      6(?:011|5[0-9]{2})[0-9]{12}|         # Discover
      (?:2131|1800|35\\d{3})\\d{11})        # JCB
    validation: luhn
    severity: critical
    extract_context: 50
    
  # IBAN Detection
  - name: iban
    regex: |
      [A-Z]{2}[0-9]{2}[A-Z0-9]{1,30}
    validation: iban_checksum
    countries: ["DE", "GB", "CH", "FR"]
    
  # Cryptocurrency Addresses
  - name: crypto_addresses
    patterns:
      bitcoin: '^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$'
      ethereum: '^0x[a-fA-F0-9]{40}$'
      monero: '^4[0-9AB][0-9a-zA-Z]{93}$'
    validation: address_checksum
    track_transactions: true`}</pre>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Custom Pattern Plugin</h4>
                                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                    <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# plugins/custom_matcher.py
import re
from typing import List, Dict, Any
import hashlib

class AdvancedMatcher:
    def __init__(self, config: Dict[str, Any]):
        self.patterns = self._compile_patterns(config['patterns'])
        self.ml_model = self._load_ml_model(config.get('ml_model'))
        
    def match(self, text: str) -> List[Dict]:
        matches = []
        
        # Regex pattern matching
        for pattern_name, pattern in self.patterns.items():
            for match in pattern.finditer(text):
                match_data = {
                    'type': pattern_name,
                    'value': match.group(),
                    'position': match.span(),
                    'confidence': 1.0
                }
                
                # Apply ML-based validation
                if self.ml_model:
                    context = text[max(0, match.start()-100):match.end()+100]
                    match_data['confidence'] = self.ml_model.predict(context)
                    
                # Extract additional context
                match_data['context'] = self._extract_context(text, match)
                
                # Check for related IOCs
                match_data['related'] = self._find_related_iocs(text, match)
                
                matches.append(match_data)
                
        return matches
        
    def _extract_context(self, text: str, match) -> Dict:
        """Extract meaningful context around match"""
        start = max(0, match.start() - 200)
        end = min(len(text), match.end() + 200)
        
        context = text[start:end]
        
        # Extract sentences containing the match
        sentences = re.split(r'[.!?]', context)
        relevant_sentences = [s for s in sentences if match.group() in s]
        
        return {
            'full': context,
            'sentences': relevant_sentences,
            'keywords': self._extract_keywords(context)
        }
        
    def _find_related_iocs(self, text: str, match) -> List[Dict]:
        """Find other IOCs near this match"""
        related = []
        search_window = 500
        
        # Look for emails near financial data
        email_pattern = r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[A-Z|a-z]{2,}'
        for email in re.finditer(email_pattern, text[match.start()-search_window:match.end()+search_window]):
            related.append({
                'type': 'email',
                'value': email.group(),
                'distance': abs(email.start() - match.start())
            })
            
        return related`}</pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Threat Intelligence Integration */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <Shield className="h-6 w-6 mr-2" />
                        Threat Intelligence Integration
                    </h2>

                    {/* MISP Integration */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            MISP Integration Guide
                        </h3>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# config/misp_integration.py
from pymisp import PyMISP, MISPEvent, MISPAttribute
import json

class MISPIntegration:
    def __init__(self, url, key, verifycert=True):
        self.misp = PyMISP(url, key, verifycert)
        
    def create_event_from_scan(self, scan_results):
        """Create MISP event from TorScan results"""
        event = MISPEvent()
        event.info = f"TorScan Dark Web Intelligence - {scan_results['scan_id']}"
        event.distribution = 3  # All communities
        event.threat_level_id = 2  # Medium
        event.analysis = 1  # Ongoing
        
        # Add tags
        event.add_tag('tlp:amber')
        event.add_tag('dark-web')
        event.add_tag(f"torscan:scan_id={scan_results['scan_id']}")
        
        # Add attributes from results
        for result in scan_results['results']:
            # Add URL as attribute
            url_attr = MISPAttribute()
            url_attr.type = 'url'
            url_attr.value = result['url']
            url_attr.comment = f"Found: {result['found_at']}"
            url_attr.to_ids = False
            event.add_attribute(**url_attr)
            
            # Add IOCs
            for ioc in result.get('iocs', []):
                attr = MISPAttribute()
                attr.type = self._map_ioc_type(ioc['type'])
                attr.value = ioc['value']
                attr.comment = f"Context: {ioc.get('context', '')[:100]}"
                attr.to_ids = True
                
                # Add sighting
                attr.add_sighting(
                    source="TorScan",
                    type=0,  # Positive sighting
                    timestamp=result['found_at']
                )
                
                event.add_attribute(**attr)
                
        # Add correlation data
        event.add_attribute(
            type='text',
            value=json.dumps(scan_results['correlation_data']),
            comment='TorScan correlation analysis'
        )
        
        # Publish event
        response = self.misp.add_event(event, pythonify=True)
        return response
        
    def _map_ioc_type(self, torscan_type):
        """Map TorScan IOC types to MISP types"""
        mapping = {
            'bitcoin_address': 'btc',
            'email': 'email-src',
            'ip': 'ip-src',
            'domain': 'domain',
            'md5': 'md5',
            'sha256': 'sha256',
            'credit_card': 'cc-number'
        }
        return mapping.get(torscan_type, 'text')`}</pre>
                        </div>
                    </div>

                    {/* OpenCTI Integration */}
                    <div className="mb-10">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            OpenCTI Integration
                        </h3>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# config/opencti_connector.py
from pycti import OpenCTIApiClient
from datetime import datetime
import stix2

class OpenCTIConnector:
    def __init__(self, url, token):
        self.client = OpenCTIApiClient(url, token)
        
    def create_incident_from_scan(self, scan_data):
        """Create OpenCTI incident from scan results"""
        
        # Create incident
        incident = stix2.Incident(
            name=f"Dark Web Activity - {scan_data['name']}",
            description=self._build_description(scan_data),
            first_seen=scan_data['started_at'],
            last_seen=scan_data['completed_at'],
            confidence=85,
            labels=['dark-web', 'torscan', 'automated-detection']
        )
        
        # Create indicators
        indicators = []
        for result in scan_data['results']:
            for ioc in result['iocs']:
                indicator = stix2.Indicator(
                    pattern=self._create_pattern(ioc),
                    pattern_type='stix',
                    name=f"{ioc['type']}: {ioc['value']}",
                    description=f"Found on {result['url']}",
                    confidence=result['confidence'] * 100,
                    valid_from=result['found_at']
                )
                indicators.append(indicator)
                
        # Create relationships
        relationships = []
        for indicator in indicators:
            rel = stix2.Relationship(
                source_ref=incident.id,
                target_ref=indicator.id,
                relationship_type='indicates'
            )
            relationships.append(rel)
            
        # Bundle and submit
        bundle = stix2.Bundle(
            incident,
            *indicators,
            *relationships
        )
        
        response = self.client.stix2.import_bundle(bundle)
        return response`}</pre>
                        </div>
                    </div>
                </div>

                {/* Security Best Practices */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <Lock className="h-6 w-6 mr-2" />
                        Security Best Practices
                    </h2>

                    <div className="space-y-6">
                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
                                1. Operational Security (OPSEC)
                            </h3>
                            <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                                <li>• Never use TorScan from your main network - use isolated VMs</li>
                                <li>• Rotate API keys and credentials regularly</li>
                                <li>• Use dedicated infrastructure for dark web operations</li>
                                <li>• Implement strict access controls and audit logging</li>
                                <li>• Never store sensitive scan results unencrypted</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
                                2. Data Handling
                            </h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mt-3">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Secure data handling configuration
security:
  encryption:
    at_rest:
      enabled: true
      algorithm: "AES-256-GCM"
      key_management: "HSM"  # Hardware Security Module
      
    in_transit:
      tls_version: "1.3"
      cipher_suites:
        - "TLS_AES_256_GCM_SHA384"
        - "TLS_CHACHA20_POLY1305_SHA256"
        
  data_retention:
    scan_results: 90  # days
    logs: 30
    sensitive_data: 7
    
  anonymization:
    enabled: true
    fields:
      - "user_data"
      - "personal_info"
      - "credit_cards"
    method: "tokenization"
    
  access_control:
    require_mfa: true
    ip_whitelist:
      - "10.0.0.0/8"
    session_timeout: 3600`}</pre>
                            </div>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
                                3. Legal Compliance
                            </h3>
                            <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                                <li>• Only scan sites you have authorization to monitor</li>
                                <li>• Comply with local laws regarding dark web access</li>
                                <li>• Implement data protection measures (GDPR, CCPA)</li>
                                <li>• Maintain chain of custody for evidence</li>
                                <li>• Document all scanning activities for audit trails</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Real-World Use Cases */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Real-World Use Cases
                    </h2>

                    <div className="space-y-8">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                                Brand Protection Monitoring
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Monitor for counterfeit products, brand impersonation, and trademark violations.
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Brand monitoring configuration
scan_config:
  name: "Brand Protection Monitor"
  patterns:
    - "CompanyName"
    - "Product1|Product2|Product3"
    - "official.*store|authorized.*dealer"
    - "(fake|counterfeit|replica).*(CompanyName|Product)"
    
  sources:
    - "marketplace_sites.yaml"
    - "known_counterfeit_forums.yaml"
    
  alerts:
    high_priority:
      - pattern: "selling.*(CompanyName|Product)"
      - pattern: "crack|keygen|license"
    medium_priority:
      - pattern: "review|discussion"
      
  actions:
    on_match:
      - screenshot: true
      - archive_page: true
      - notify_legal: true`}</pre>
                            </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                                Data Breach Detection
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Early detection of company data breaches and leaked credentials.
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Breach detection patterns
patterns:
  employee_emails:
    regex: "[a-zA-Z0-9._%+-]+@company\\.com"
    severity: critical
    auto_verify: true
    
  database_dumps:
    keywords:
      - "company database"
      - "SQL dump"
      - "customer records"
    file_extensions: [".sql", ".csv", ".json", ".txt"]
    
  credentials:
    patterns:
      - "username:.*password:"
      - "email:.*pass:"
    context_required: true
    
  sensitive_docs:
    keywords:
      - "confidential"
      - "internal only"
      - "proprietary"
    near: "@company.com"  # Within 50 chars
    
response_plan:
  critical:
    - isolate_affected_accounts
    - reset_credentials
    - notify_security_team
    - preserve_evidence`}</pre>
                            </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                                Threat Actor Tracking
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Monitor known threat actors and their activities.
                            </p>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Threat actor monitoring
actors:
  - name: "APT_Group_X"
    aliases: ["DarkHydra", "CyberPhantom"]
    indicators:
      usernames: ["darkhydra2024", "phantom_cyber"]
      bitcoin_addresses: ["1A1zP1...", "3J98t1..."]
      pgp_keys: ["0x1234ABCD"]
      
    ttps:  # Tactics, Techniques, Procedures
      - "ransomware deployment"
      - "data exfiltration"
      - "supply chain attacks"
      
    monitoring:
      forums: ["forum1.onion", "market2.onion"]
      keywords: ["new operation", "selling access", "0day"]
      
  tracking_config:
    correlation:
      time_window: 7  # days
      min_indicators: 2
      
    alerts:
      new_activity: true
      new_indicators: true
      tool_updates: true`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Performance Tuning */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <Zap className="h-6 w-6 mr-2" />
                        Performance Tuning
                    </h2>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
                        <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                            Scaling Considerations
                        </h3>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mt-3">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Production scaling configuration
scaling:
  crawler_workers:
    min: 5
    max: 50
    scale_factor: "queue_length / 100"
    
  tor_circuits:
    pool_size: 20
    rotation_workers: 5
    health_check_interval: 60
    
  elasticsearch:
    index_shards: 5
    replicas: 2
    refresh_interval: "30s"
    
  redis:
    maxmemory: "4gb"
    maxmemory_policy: "allkeys-lru"
    
  mongodb:
    connection_pool: 100
    write_concern: "majority"
    
monitoring:
  metrics:
    - crawler_performance
    - tor_circuit_health
    - queue_lengths
    - error_rates
    
  alerts:
    high_queue_length: 1000
    low_success_rate: 0.7
    high_error_rate: 0.1`}</pre>
                            </div>
                    </div>
                </div>

                {/* Troubleshooting Guide */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Advanced Troubleshooting
                    </h2>

                    <div className="space-y-6">
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                            <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                                Tor Circuit Issues
                            </h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mt-3">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Debug Tor connectivity
docker-compose exec tor-proxy tor-resolve check.torproject.org

# Check circuit status
curl -X GET http://localhost:5000/api/debug/tor/circuits \\
  -H "Authorization: Bearer $TOKEN"

# Force new identity
curl -X POST http://localhost:5000/api/debug/tor/newnym \\
  -H "Authorization: Bearer $TOKEN"

# Common fixes:
# 1. Restart Tor service
docker-compose restart tor-proxy

# 2. Clear Tor cache
docker-compose exec tor-proxy rm -rf /var/lib/tor/*

# 3. Update bridge configuration
# Edit torrc and add new bridges from https://bridges.torproject.org/`}</pre>
                            </div>
                        </div>

                        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                            <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                                Performance Diagnostics
                            </h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mt-3">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Enable debug mode
export FLASK_DEBUG=1
export LOG_LEVEL=DEBUG

# Profile slow queries
docker-compose exec elasticsearch \\
  curl -X GET "localhost:9200/_nodes/hot_threads"

# Monitor resource usage
docker stats --format "table {{.Container}}\\t{{.CPUPerc}}\\t{{.MemUsage}}"

# Check queue backlogs
docker-compose exec redis redis-cli
> LLEN crawl_queue
> LLEN result_queue

# Analyze crawler performance
curl -X GET http://localhost:5000/api/debug/performance \\
  -H "Authorization: Bearer $TOKEN"`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Additional Resources
                    </h3>
                    <div className="flex flex-col space-y-3">
                        <a href="https://github.com/torscan/plugins" className="text-primary-600 dark:text-primary-400 hover:underline">
                            Community Plugins Repository →
                        </a>
                        <a href="https://github.com/torscan/patterns" className="text-primary-600 dark:text-primary-400 hover:underline">
                            Pattern Library →
                        </a>
                        <a href="https://torscan.io/blog" className="text-primary-600 dark:text-primary-400 hover:underline">
                            TorScan Blog & Tutorials →
                        </a>
                        <Link href="/docs/torscan/api" className="text-primary-600 dark:text-primary-400 hover:underline">
                            API Documentation →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}