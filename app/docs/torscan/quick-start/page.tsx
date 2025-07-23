import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ChevronLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: 'TorScan Quick Start Guide - perfecXion.ai',
    description: 'Get up and running with TorScan, the dark web intelligence platform, in minutes.',
};

const sidebarLinks = [
    { href: '/docs/torscan', label: 'TorScan Overview' },
    { href: '/docs/torscan/quick-start', label: 'Quick Start', active: true },
    { href: '/docs/torscan/installation', label: 'Installation' },
    { href: '/docs/torscan/api', label: 'API Reference' },
    { href: '/docs/torscan/guides', label: 'Guides' },
];

export default function TorScanQuickStartPage() {
    return (
        <div className="bg-white dark:bg-background-dark min-h-screen">
            <div className="flex">
                {/* Sidebar */}
                <aside className="w-72 border-r border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 min-h-screen p-6">
                    <nav className="space-y-2">
                        {sidebarLinks.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`block px-3 py-2 rounded font-medium transition-colors ${link.active ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800'}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </aside>
                {/* Main Content */}
                <main className="flex-1 px-4 py-10 max-w-5xl mx-auto">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
                        <ol className="list-none p-0 inline-flex">
                            <li className="flex items-center">
                                <Link href="/docs/torscan" className="hover:underline text-primary-600 dark:text-primary-400">TorScan</Link>
                                <span className="mx-2">/</span>
                            </li>
                            <li className="text-gray-700 dark:text-gray-300">Quick Start</li>
                        </ol>
                    </nav>

                    <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white flex items-center">
                        <BookOpen className="w-7 h-7 mr-2 text-primary-600 dark:text-primary-400" />
                        TorScan Quick Start Guide
                    </h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                        TorScan is an advanced dark web intelligence platform that enables security researchers to monitor and analyze .onion sites on the Tor network. This guide will help you get up and running quickly.
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Prerequisites</h2>
                        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
                            <li>Docker and Docker Compose installed</li>
                            <li>Basic understanding of command line operations</li>
                            <li>At least 4GB of RAM available</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">5-Minute Setup</h2>
                        <h3 className="text-xl font-bold mt-4 mb-1">1. Clone and Configure</h3>
                        <pre className="bg-gray-900 text-gray-100 rounded p-4 text-sm overflow-x-auto mb-2"><code>{`# Clone the repository
git clone <repository-url>
cd torscan

# Create your configuration
cp .env.example .env

# Edit the .env file - IMPORTANT: Change these values!
nano .env`}</code></pre>
                        <div className="text-gray-700 dark:text-gray-300 mb-2">Key settings to update in <code>.env</code>:</div>
                        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 mb-4">
                            <li><b>SECRET_KEY</b>: Generate a random string</li>
                            <li><b>MONGODB_PASSWORD</b>: Set a strong password</li>
                            <li><b>ELASTICSEARCH_PASSWORD</b>: Set a strong password</li>
                            <li><b>FLASK_DEBUG</b>: Set to <code>False</code> for production</li>
                        </ul>
                        <h3 className="text-xl font-bold mt-4 mb-1">2. Start TorScan</h3>
                        <pre className="bg-gray-900 text-gray-100 rounded p-4 text-sm overflow-x-auto mb-2"><code>{`# Start all services
docker-compose up -d

# Check that services are running
docker-compose ps`}</code></pre>
                        <div className="text-gray-700 dark:text-gray-300 mb-2">Services should be running on:</div>
                        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 mb-4">
                            <li>Web Dashboard: http://localhost:5000</li>
                            <li>MongoDB: localhost:27017</li>
                            <li>Elasticsearch: localhost:9200</li>
                            <li>Redis: localhost:6379</li>
                        </ul>
                        <h3 className="text-xl font-bold mt-4 mb-1">3. Initial Login</h3>
                        <ol className="list-decimal ml-6 text-gray-700 dark:text-gray-300 mb-2">
                            <li>Navigate to <a href="http://localhost:5000" className="underline text-primary-600 dark:text-primary-400">http://localhost:5000</a></li>
                            <li>Login with default credentials:
                                <ul className="list-disc ml-6">
                                    <li>Username: <code>admin</code></li>
                                    <li>Password: <code>admin123</code></li>
                                </ul>
                            </li>
                            <li><b>Change the password immediately!</b></li>
                        </ol>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Your First Scan</h2>
                        <h3 className="text-xl font-bold mt-4 mb-1">Step 1: Add Target Sites</h3>
                        <div className="text-gray-700 dark:text-gray-300 mb-2">Create or edit <code>config/sources.yaml</code>:</div>
                        <pre className="bg-gray-900 text-gray-100 rounded p-4 text-sm overflow-x-auto mb-2"><code>{`# Example .onion sites to scan
- http://example1.onion
- http://example2.onion
- http://example3.onion`}</code></pre>
                        <h3 className="text-xl font-bold mt-4 mb-1">Step 2: Define Search Patterns</h3>
                        <div className="text-gray-700 dark:text-gray-300 mb-2">Create or edit <code>config/targets.json</code>:</div>
                        <pre className="bg-gray-900 text-gray-100 rounded p-4 text-sm overflow-x-auto mb-2"><code>{`[
  "keyword1",
  "company-name",
  "email@example.com",
  "bitcoin:.*",
  "specific phrase"
]`}</code></pre>
                        <h3 className="text-xl font-bold mt-4 mb-1">Step 3: Run a Manual Scan</h3>
                        <ol className="list-decimal ml-6 text-gray-700 dark:text-gray-300 mb-2">
                            <li>Go to the Dashboard</li>
                            <li>Click "New Scan"</li>
                            <li>Select your sources and targets</li>
                            <li>Click "Start Scan"</li>
                            <li>Monitor progress in real-time</li>
                        </ol>
                        <h3 className="text-xl font-bold mt-4 mb-1">Step 4: View Results</h3>
                        <ol className="list-decimal ml-6 text-gray-700 dark:text-gray-300 mb-2">
                            <li>Navigate to "Scan Results"</li>
                            <li>Click on your completed scan</li>
                            <li>Review matches with context</li>
                            <li>Export results as JSON or CSV</li>
                        </ol>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Setting Up Scheduled Scans</h2>
                        <h3 className="text-xl font-bold mt-4 mb-1">Create a Daily Scan</h3>
                        <ol className="list-decimal ml-6 text-gray-700 dark:text-gray-300 mb-2">
                            <li>Go to "Scheduled Scans"</li>
                            <li>Click "New Schedule"</li>
                            <li>Configure:
                                <ul className="list-disc ml-6">
                                    <li>Name: "Daily Dark Web Monitor"</li>
                                    <li>Schedule Type: "Cron"</li>
                                    <li>Cron Expression: <code>0 2 * * *</code> (runs at 2 AM daily)</li>
                                    <li>Select sources and targets</li>
                                </ul>
                            </li>
                            <li>Save and enable</li>
                        </ol>
                        <h3 className="text-xl font-bold mt-4 mb-1">Schedule Types Available</h3>
                        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 mb-2">
                            <li><b>Cron</b>: Use cron expressions for complex schedules</li>
                            <li><b>Interval</b>: Simple recurring intervals (e.g., every 6 hours)</li>
                            <li><b>One-time</b>: Single execution at a specific date/time</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Advanced Features</h2>
                        <h3 className="text-xl font-bold mt-4 mb-1">Full-Text Search</h3>
                        <ol className="list-decimal ml-6 text-gray-700 dark:text-gray-300 mb-2">
                            <li>Navigate to "Advanced Search"</li>
                            <li>Use search operators:
                                <ul className="list-disc ml-6">
                                    <li><code>keyword</code> - Basic search</li>
                                    <li><code>"exact phrase"</code> - Exact match</li>
                                    <li><code>keyword1 AND keyword2</code> - Boolean logic</li>
                                    <li><code>bitcoin~</code> - Fuzzy matching</li>
                                </ul>
                            </li>
                            <li>Apply filters:
                                <ul className="list-disc ml-6">
                                    <li>Date range</li>
                                    <li>Confidence score</li>
                                    <li>Source domain</li>
                                </ul>
                            </li>
                        </ol>
                        <h3 className="text-xl font-bold mt-4 mb-1">Plugin Management</h3>
                        <ol className="list-decimal ml-6 text-gray-700 dark:text-gray-300 mb-2">
                            <li>Go to "Plugins" section</li>
                            <li>Available plugin types:
                                <ul className="list-disc ml-6">
                                    <li><b>Crawlers</b>: Custom site crawling logic</li>
                                    <li><b>Matchers</b>: Advanced pattern matching</li>
                                    <li><b>Exporters</b>: Custom export formats</li>
                                    <li><b>Notifiers</b>: Alerts and notifications</li>
                                </ul>
                            </li>
                            <li>Upload or configure plugins as needed</li>
                        </ol>
                        <h3 className="text-xl font-bold mt-4 mb-1">Threat Intelligence Integration</h3>
                        <div className="text-gray-700 dark:text-gray-300 mb-2">Enable MISP or OpenCTI integration in <code>.env</code>:</div>
                        <pre className="bg-gray-900 text-gray-100 rounded p-4 text-sm overflow-x-auto mb-2"><code>{`# MISP Configuration
MISP_URL=https://your-misp-instance.com
MISP_KEY=your-api-key
MISP_VERIFYCERT=True

# OpenCTI Configuration
OPENCTI_URL=https://your-opencti-instance.com
OPENCTI_TOKEN=your-api-token`}</code></pre>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">API Usage</h2>
                        <h3 className="text-xl font-bold mt-4 mb-1">Authentication</h3>
                        <pre className="bg-gray-900 text-gray-100 rounded p-4 text-sm overflow-x-auto mb-2"><code>{`# Get API token from dashboard
curl -X POST http://localhost:5000/api/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"your-password"}'`}</code></pre>
                        <h3 className="text-xl font-bold mt-4 mb-1">Start a Scan</h3>
                        <pre className="bg-gray-900 text-gray-100 rounded p-4 text-sm overflow-x-auto mb-2"><code>{`curl -X POST http://localhost:5000/api/scan \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "sources": ["http://example.onion"],
    "targets": ["keyword1", "keyword2"]
  }'`}</code></pre>
                        <h3 className="text-xl font-bold mt-4 mb-1">Search Results</h3>
                        <pre className="bg-gray-900 text-gray-100 rounded p-4 text-sm overflow-x-auto mb-2"><code>{`curl -X GET "http://localhost:5000/api/search?q=bitcoin&limit=10" \
  -H "Authorization: Bearer YOUR_TOKEN"`}</code></pre>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Best Practices</h2>
                        <h3 className="text-xl font-bold mt-4 mb-1">Security</h3>
                        <ol className="list-decimal ml-6 text-gray-700 dark:text-gray-300 mb-2">
                            <li><b>Change default passwords immediately</b></li>
                            <li><b>Use environment variables</b> for sensitive configuration</li>
                            <li><b>Enable HTTPS</b> for production deployments</li>
                            <li><b>Regularly update</b> Docker images and dependencies</li>
                            <li><b>Monitor logs</b> for suspicious activity</li>
                        </ol>
                        <h3 className="text-xl font-bold mt-4 mb-1">Performance</h3>
                        <ol className="list-decimal ml-6 text-gray-700 dark:text-gray-300 mb-2">
                            <li><b>Limit concurrent scans</b> to avoid overloading Tor circuits</li>
                            <li><b>Use pagination</b> for large result sets</li>
                            <li><b>Schedule scans</b> during off-peak hours</li>
                            <li><b>Monitor resource usage</b> with <code>docker stats</code></li>
                        </ol>
                        <h3 className="text-xl font-bold mt-4 mb-1">Responsible Use</h3>
                        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 mb-2">
                            <li>Only scan sites you have authorization to monitor</li>
                            <li>Respect robots.txt and rate limits</li>
                            <li>Use for legitimate security research only</li>
                            <li>Comply with all applicable laws and regulations</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Troubleshooting</h2>
                        <h3 className="text-xl font-bold mt-4 mb-1">Common Issues</h3>
                        <div className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">Services won't start:</div>
                        <pre className="bg-gray-900 text-gray-100 rounded p-4 text-sm overflow-x-auto mb-2"><code>{`# Check logs
docker-compose logs -f

# Restart services
docker-compose restart`}</code></pre>
                        <div className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">Tor connection issues:</div>
                        <pre className="bg-gray-900 text-gray-100 rounded p-4 text-sm overflow-x-auto mb-2"><code>{`# Check Tor status
docker-compose exec tor-proxy tor-resolve check.torproject.org

# Restart Tor
docker-compose restart tor-proxy`}</code></pre>
                        <div className="text-gray-700 dark:text-gray-300 mb-2 font-semibold">Search not working:</div>
                        <pre className="bg-gray-900 text-gray-100 rounded p-4 text-sm overflow-x-auto mb-2"><code>{`# Rebuild Elasticsearch index
docker-compose exec web python scripts/reindex.py`}</code></pre>
                        <div className="text-gray-700 dark:text-gray-300 mb-2">Getting Help:</div>
                        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 mb-2">
                            <li>Check logs: <code>docker-compose logs [service-name]</code></li>
                            <li>Dashboard logs: <code>/logs</code> endpoint when debug is enabled</li>
                            <li>Configuration issues: Verify <code>.env</code> file settings</li>
                            <li>Permission errors: Ensure proper file ownership</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Next Steps</h2>
                        <ol className="list-decimal ml-6 text-gray-700 dark:text-gray-300 mb-2">
                            <li><b>Customize patterns</b> in <code>config/targets.json</code> for your use case</li>
                            <li><b>Set up notifications</b> using the plugin system</li>
                            <li><b>Integrate with your SIEM</b> using the API</li>
                            <li><b>Create custom plugins</b> for specialized monitoring</li>
                            <li><b>Enable threat intelligence</b> feeds for enhanced detection</li>
                        </ol>
                        <div className="text-gray-700 dark:text-gray-300 mt-2">
                            For more detailed documentation, API reference, and advanced configurations, refer to the full documentation in the <b>/docs</b> directory.
                        </div>
                    </section>

                    <div className="mt-12">
                        <Link href="/docs/torscan" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline">
                            <ChevronLeft className="w-4 h-4 mr-1" />
                            Back to TorScan Docs
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    );
} 