import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Code, Shield, Activity, Bell, Key, Search, Globe, Database } from 'lucide-react'

export const metadata: Metadata = {
    title: 'API Reference - TorScan Documentation',
    description: 'Complete API reference for TorScan dark web intelligence platform endpoints and methods.',
}

export default function TorScanAPI() {
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
                    <span className="text-gray-900 dark:text-white">API Reference</span>
                </nav>

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    API Reference
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                    Complete reference for TorScan REST API endpoints for dark web intelligence gathering.
                </p>

                {/* Base URL */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-10">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Base URL</h3>
                    <code className="text-sm font-mono text-gray-700 dark:text-gray-300">
                        https://your-torscan-instance.com/api/v1
                    </code>
                </div>

                {/* Authentication */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Key className="h-6 w-6 mr-2" />
                        Authentication
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        TorScan uses JWT tokens for API authentication. Obtain a token by logging in.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Login to get JWT token
curl -X POST "https://your-instance.com/api/v1/auth/login" \\
  -H "Content-Type: application/json" \\
  -d '{
    "username": "your-username",
    "password": "your-password"
  }'

# Response
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "expires_in": 3600,
  "user": {
    "id": "user_123",
    "username": "your-username",
    "role": "admin"
  }
}

# Use token in requests
curl -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGc..." \\
  https://your-instance.com/api/v1/scans`}</pre>
                    </div>
                </div>

                {/* Scan Management Endpoints */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Scan Management
                    </h2>

                    {/* Create Scan */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Create New Scan
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-mono">POST</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/scans</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Initiate a new dark web scan with specified targets and patterns.
                        </p>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Request Body</p>
                                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                    <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "name": "Security Breach Monitoring",
  "description": "Monitor for company data breaches",
  "sources": [
    "http://darkwebsite1.onion",
    "http://darkwebsite2.onion"
  ],
  "patterns": [
    "company.com",
    "breach",
    "database dump",
    "credit card"
  ],
  "config": {
    "depth": 3,
    "max_pages": 1000,
    "timeout": 300,
    "circuit_rotation": true,
    "follow_redirects": true,
    "respect_robots": false
  },
  "schedule": null  // Or schedule object for recurring scans
}`}</pre>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Response</p>
                                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                    <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "scan_id": "scan_20240115_abc123",
  "status": "queued",
  "created_at": "2024-01-15T10:00:00Z",
  "estimated_duration": "45 minutes",
  "queue_position": 2,
  "links": {
    "self": "/api/v1/scans/scan_20240115_abc123",
    "results": "/api/v1/scans/scan_20240115_abc123/results",
    "logs": "/api/v1/scans/scan_20240115_abc123/logs"
  }
}`}</pre>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Get Scan Status */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Get Scan Status
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-mono">GET</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/scans/{'{scan_id}'}</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Retrieve current status and progress of a specific scan.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "scan_id": "scan_20240115_abc123",
  "name": "Security Breach Monitoring",
  "status": "running",
  "progress": {
    "sites_crawled": 45,
    "total_sites": 100,
    "pages_processed": 3567,
    "matches_found": 23,
    "errors": 2
  },
  "started_at": "2024-01-15T10:00:30Z",
  "elapsed_time": "00:23:45",
  "estimated_remaining": "00:21:15",
  "current_url": "http://example.onion/forum/page23",
  "tor_circuit": {
    "ip": "185.220.101.45",
    "country": "Netherlands",
    "circuit_id": "circuit_789"
  }
}`}</pre>
                        </div>
                    </div>

                    {/* List Scans */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            List Scans
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-mono">GET</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/scans</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Retrieve a paginated list of all scans.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Query parameters
?status=running,completed
&from_date=2024-01-01
&to_date=2024-01-31
&page=1
&limit=20
&sort=created_at:desc

# Response
{
  "scans": [
    {
      "scan_id": "scan_20240115_abc123",
      "name": "Security Breach Monitoring",
      "status": "completed",
      "created_at": "2024-01-15T10:00:00Z",
      "completed_at": "2024-01-15T10:45:23Z",
      "stats": {
        "sites_crawled": 100,
        "pages_processed": 8934,
        "matches_found": 47,
        "duration": "00:45:23"
      }
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total_pages": 5,
    "total_items": 89
  }
}`}</pre>
                        </div>
                    </div>
                </div>

                {/* Search & Results Endpoints */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <Search className="h-6 w-6 mr-2" />
                        Search & Results
                    </h2>

                    {/* Search Results */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Search Results
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-mono">GET</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/search</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Full-text search across all scan results with Elasticsearch.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Query parameters
?q=bitcoin AND wallet
&scan_id=scan_20240115_abc123  # Optional: limit to specific scan
&from_date=2024-01-01
&to_date=2024-01-31
&confidence_min=0.7
&source_domain=*.onion
&highlight=true
&page=1
&limit=50

# Response
{
  "results": [
    {
      "id": "result_456",
      "scan_id": "scan_20240115_abc123",
      "url": "http://darkmarket.onion/forum/thread123",
      "title": "Bitcoin Wallet Dumps",
      "snippet": "...found <mark>bitcoin</mark> <mark>wallets</mark> with balance...",
      "matched_patterns": ["bitcoin", "wallet"],
      "confidence": 0.92,
      "found_at": "2024-01-15T10:23:45Z",
      "metadata": {
        "page_size": 45678,
        "language": "en",
        "tor_exit_node": "185.220.101.45"
      },
      "context": {
        "before": "Previous 100 characters of context",
        "match": "The exact matched text with patterns",
        "after": "Following 100 characters of context"
      }
    }
  ],
  "aggregations": {
    "by_pattern": {
      "bitcoin": 234,
      "wallet": 189,
      "breach": 67
    },
    "by_domain": {
      "darkmarket.onion": 145,
      "forum123.onion": 89
    }
  },
  "total": 423,
  "took_ms": 145
}`}</pre>
                        </div>
                    </div>

                    {/* Get Scan Results */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Get Scan Results
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-mono">GET</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/scans/{'{scan_id}'}/results</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Retrieve all results from a specific scan.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "scan_id": "scan_20240115_abc123",
  "total_results": 47,
  "results": [
    {
      "id": "result_123",
      "url": "http://example.onion/page",
      "matched_patterns": ["company.com", "breach"],
      "confidence": 0.95,
      "severity": "high",
      "content": {
        "title": "Data Breach Discussion",
        "body_preview": "Found company.com database...",
        "full_content_available": true
      },
      "iocs": {
        "emails": ["user@company.com"],
        "ips": ["192.168.1.1"],
        "domains": ["company.com"],
        "bitcoin_addresses": ["1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"],
        "hashes": {
          "md5": ["5d41402abc4b2a76b9719d911017c592"],
          "sha256": ["e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"]
        }
      }
    }
  ],
  "export_formats": ["json", "csv", "misp", "stix"]
}`}</pre>
                        </div>
                    </div>

                    {/* Export Results */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Export Results
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-mono">GET</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/scans/{'{scan_id}'}/export</code>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Export scan results in various formats.
                        </p>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Export as CSV
GET /scans/scan_20240115_abc123/export?format=csv

# Export as MISP Event
GET /scans/scan_20240115_abc123/export?format=misp

# Export as STIX 2.1
GET /scans/scan_20240115_abc123/export?format=stix

# Response headers for CSV
Content-Type: text/csv
Content-Disposition: attachment; filename="scan_20240115_abc123_results.csv"`}</pre>
                        </div>
                    </div>
                </div>

                {/* Pattern Management */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Pattern Management
                    </h2>

                    {/* Create Pattern Set */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Create Pattern Set
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-mono">POST</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/patterns</code>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "name": "Financial Fraud Indicators",
  "description": "Patterns for detecting financial fraud",
  "patterns": [
    {
      "pattern": "credit card",
      "type": "keyword",
      "case_sensitive": false
    },
    {
      "pattern": "\\b(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})\\b",
      "type": "regex",
      "description": "Credit card numbers",
      "severity": "critical"
    },
    {
      "pattern": "bitcoin:([13][a-km-zA-HJ-NP-Z1-9]{25,34})",
      "type": "regex",
      "description": "Bitcoin addresses",
      "extract_group": 1
    }
  ],
  "tags": ["financial", "fraud", "pii"],
  "enabled": true
}`}</pre>
                        </div>
                    </div>

                    {/* Test Pattern */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Test Pattern
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-mono">POST</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/patterns/test</code>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "pattern": "\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b",
  "type": "regex",
  "test_text": "Contact us at admin@example.com or support@test.org"
}

# Response
{
  "matches": [
    {
      "match": "admin@example.com",
      "start": 14,
      "end": 31
    },
    {
      "match": "support@test.org",
      "start": 35,
      "end": 51
    }
  ],
  "match_count": 2,
  "execution_time_ms": 2
}`}</pre>
                        </div>
                    </div>
                </div>

                {/* Schedule Management */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Schedule Management
                    </h2>

                    {/* Create Schedule */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Create Scheduled Scan
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-mono">POST</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/schedules</code>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "name": "Daily Dark Web Monitor",
  "scan_config": {
    "sources": ["config/daily_sources.yaml"],
    "patterns": ["pattern_set_123", "pattern_set_456"]
  },
  "schedule": {
    "type": "cron",
    "expression": "0 2 * * *",  // 2 AM daily
    "timezone": "UTC"
  },
  "notifications": {
    "email": ["security@company.com"],
    "webhook": "https://slack.com/webhook/xyz",
    "conditions": {
      "min_severity": "medium",
      "min_matches": 1
    }
  },
  "retention": {
    "keep_results_days": 90,
    "keep_logs_days": 30
  },
  "enabled": true
}`}</pre>
                        </div>
                    </div>
                </div>

                {/* Threat Intelligence */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                        <Shield className="h-6 w-6 mr-2" />
                        Threat Intelligence Integration
                    </h2>

                    {/* Submit to MISP */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Submit to MISP
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-mono">POST</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/threat-intel/misp/events</code>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`{
  "scan_id": "scan_20240115_abc123",
  "result_ids": ["result_123", "result_456"],
  "event_info": "Dark Web Intelligence - Company Breach",
  "distribution": 3,  // All communities
  "threat_level": 2,  // Medium
  "analysis": 2,      // Ongoing
  "tags": ["dark-web", "data-breach", "tlp:amber"],
  "attributes": {
    "auto_extract": true,
    "include_context": true,
    "correlation": true
  }
}`}</pre>
                        </div>
                    </div>

                    {/* Query Threat Feeds */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Query Threat Intelligence
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-mono">GET</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/threat-intel/search</code>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Query parameters
?ioc=1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
&type=bitcoin-address
&sources=misp,opencti,internal

# Response
{
  "matches": [
    {
      "source": "misp",
      "event_id": "12345",
      "event_info": "Ransomware Campaign Q1 2024",
      "first_seen": "2024-01-10T08:00:00Z",
      "last_seen": "2024-01-15T14:30:00Z",
      "tags": ["ransomware", "bitcoin", "tlp:white"],
      "correlation_count": 23,
      "sightings": 145
    }
  ],
  "risk_score": 8.5,
  "recommendations": [
    "Block bitcoin address in monitoring",
    "Check for related indicators",
    "Update threat intelligence feeds"
  ]
}`}</pre>
                        </div>
                    </div>
                </div>

                {/* Plugin Management */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Plugin System
                    </h2>

                    {/* Upload Plugin */}
                    <div className="border-l-4 border-primary-500 pl-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Upload Plugin
                        </h3>
                        <div className="flex items-center space-x-4 mb-3">
                            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm font-mono">POST</span>
                            <code className="text-sm font-mono text-gray-700 dark:text-gray-300">/plugins</code>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Multipart form upload
curl -X POST https://your-instance.com/api/v1/plugins \\
  -H "Authorization: Bearer your-token" \\
  -F "plugin=@custom_crawler.py" \\
  -F 'metadata={
    "name": "Custom Forum Crawler",
    "type": "crawler",
    "version": "1.0.0",
    "description": "Specialized crawler for forum sites",
    "author": "security-team",
    "config": {
      "max_depth": 5,
      "follow_pagination": true
    }
  }'

# Response
{
  "plugin_id": "plugin_custom_forum_crawler",
  "status": "uploaded",
  "validation": "passed",
  "loaded": true,
  "hooks": [
    "pre_crawl",
    "post_page_process",
    "on_match_found"
  ]
}`}</pre>
                        </div>
                    </div>

                    {/* Plugin Types */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Available Plugin Types</h3>
                        <div className="space-y-3">
                            <div>
                                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Crawlers</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Custom site crawling logic, authentication, navigation</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Matchers</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Advanced pattern matching, ML-based detection, custom scoring</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Exporters</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Custom export formats, integration with external systems</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Notifiers</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Custom alerts, webhooks, messaging integrations</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* WebSocket API */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        WebSocket API
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Real-time updates for scan progress and results.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mb-6">
                        <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`// JavaScript WebSocket connection
const ws = new WebSocket('wss://your-instance.com/ws');

ws.on('open', () => {
  // Authenticate
  ws.send(JSON.stringify({
    type: 'auth',
    token: 'your-jwt-token'
  }));
  
  // Subscribe to scan updates
  ws.send(JSON.stringify({
    type: 'subscribe',
    channel: 'scan',
    scan_id: 'scan_20240115_abc123'
  }));
});

// Receive real-time updates
ws.on('message', (data) => {
  const message = JSON.parse(data);
  
  switch(message.type) {
    case 'scan_progress':
      console.log(\`Progress: \${message.progress}%\`);
      break;
      
    case 'match_found':
      console.log('New match:', message.result);
      break;
      
    case 'scan_complete':
      console.log('Scan completed:', message.summary);
      break;
  }
});`}</pre>
                    </div>
                </div>

                {/* Response Codes */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Response Codes
                    </h2>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th className="text-left py-2 font-semibold text-gray-900 dark:text-white">Code</th>
                                    <th className="text-left py-2 font-semibold text-gray-900 dark:text-white">Description</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 dark:text-gray-300">
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2 font-mono">200</td>
                                    <td className="py-2">Success - Request completed successfully</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2 font-mono">201</td>
                                    <td className="py-2">Created - Resource created successfully</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2 font-mono">202</td>
                                    <td className="py-2">Accepted - Scan queued for processing</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2 font-mono">400</td>
                                    <td className="py-2">Bad Request - Invalid parameters</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2 font-mono">401</td>
                                    <td className="py-2">Unauthorized - Invalid or missing token</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2 font-mono">403</td>
                                    <td className="py-2">Forbidden - Insufficient permissions</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2 font-mono">404</td>
                                    <td className="py-2">Not Found - Resource not found</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2 font-mono">429</td>
                                    <td className="py-2">Too Many Requests - Rate limit exceeded</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2 font-mono">500</td>
                                    <td className="py-2">Internal Server Error</td>
                                </tr>
                                <tr>
                                    <td className="py-2 font-mono">503</td>
                                    <td className="py-2">Service Unavailable - Tor circuit issues</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Rate Limits */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Rate Limits
                    </h2>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th className="text-left py-2 font-semibold text-gray-900 dark:text-white">Endpoint</th>
                                    <th className="text-left py-2 font-semibold text-gray-900 dark:text-white">Rate Limit</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 dark:text-gray-300">
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2">/auth/*</td>
                                    <td className="py-2">10 requests/minute</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2">/scans (POST)</td>
                                    <td className="py-2">20 requests/hour</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2">/search</td>
                                    <td className="py-2">100 requests/minute</td>
                                </tr>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <td className="py-2">/threat-intel/*</td>
                                    <td className="py-2">50 requests/minute</td>
                                </tr>
                                <tr>
                                    <td className="py-2">WebSocket connections</td>
                                    <td className="py-2">5 concurrent per user</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        API Client Libraries
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a href="https://github.com/torscan/python-client" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Code className="h-4 w-4" />
                            <span>Python Client Library</span>
                        </a>
                        <a href="https://github.com/torscan/js-client" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Code className="h-4 w-4" />
                            <span>JavaScript/Node.js Client</span>
                        </a>
                        <a href="https://github.com/torscan/go-client" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Code className="h-4 w-4" />
                            <span>Go Client Library</span>
                        </a>
                        <a href="https://github.com/torscan/postman" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline">
                            <Code className="h-4 w-4" />
                            <span>Postman Collection</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}