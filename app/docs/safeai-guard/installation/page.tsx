import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, Download, Chrome, Shield, CheckCircle, Settings, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Installation Guide - SafeAI Guard Documentation',
    description: 'Complete installation guide for SafeAI Guard browser extension across different browsers and platforms.',
}

export default function SafeAIGuardInstallation() {
    return (
        <div className="bg-white dark:bg-background-dark min-h-screen">
            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Breadcrumb */}
                <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
                    <Link href="/docs" className="hover:text-primary-600 dark:hover:text-primary-400">
                        Docs
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <Link href="/docs/safeai-guard" className="hover:text-primary-600 dark:hover:text-primary-400">
                        SafeAI Guard
                    </Link>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-gray-900 dark:text-white">Installation</span>
                </nav>

                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                    Installation Guide
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                    Install SafeAI Guard browser extension on your preferred browser and platform.
                </p>

                {/* System Requirements */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        System Requirements
                    </h2>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Minimum Requirements</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">4GB RAM</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">2GB free disk space</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">Internet connection</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">Modern CPU (2015+)</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Supported Browsers</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">Chrome 90+</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">Microsoft Edge 90+</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                                        <span className="text-gray-700 dark:text-gray-300">Brave 1.25+</span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                                        <span className="text-gray-700 dark:text-gray-300">Firefox (Coming Soon)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Chrome Installation */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Chrome Installation
                    </h2>
                    
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Method 1: Chrome Web Store</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mb-4">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`1. Open Chrome browser
2. Visit Chrome Web Store: chrome.google.com/webstore
3. Search for "SafeAI Guard"
4. Click "Add to Chrome"
5. Review permissions:
   - Read and change data on AI websites
   - Display notifications
   - Store data locally
6. Click "Add Extension"
7. Pin the extension for easy access`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Method 2: Manual Installation (Developer Mode)</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# For advanced users or beta testing

1. Download the extension package:
   curl -O https://download.safeaiguard.com/extension-chrome.zip

2. Extract the package:
   unzip extension-chrome.zip -d safeai-guard

3. Open Chrome Extension Manager:
   chrome://extensions/

4. Enable "Developer mode" (top right)

5. Click "Load unpacked"

6. Select the extracted folder

7. Verify installation and pin extension`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Enterprise Deployment</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`// For IT administrators using Google Workspace

{
  "ExtensionSettings": {
    "abcdefghijklmnopqrstuvwxyz": { // Extension ID
      "installation_mode": "force_installed",
      "update_url": "https://clients2.google.com/service/update2/crx",
      "toolbar_pin": "force_pinned"
    }
  },
  "ExtensionInstallForcelist": [
    "abcdefghijklmnopqrstuvwxyz;https://clients2.google.com/service/update2/crx"
  ]
}`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Microsoft Edge Installation */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Microsoft Edge Installation
                    </h2>
                    
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Edge Add-ons Store</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`1. Open Microsoft Edge
2. Visit Edge Add-ons: microsoftedge.microsoft.com/addons
3. Search for "SafeAI Guard"
4. Click "Get"
5. Review permissions and click "Add Extension"
6. Pin to toolbar for quick access`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Group Policy Deployment</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# For Windows domain environments

1. Download Administrative Templates
2. Configure ExtensionInstallForcelist policy
3. Add extension ID and update URL
4. Deploy via Group Policy Management
5. Verify installation on client machines`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Brave Installation */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Brave Browser Installation
                    </h2>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto mb-4">
                        <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Brave supports Chrome extensions natively

1. Open Brave browser
2. Visit Chrome Web Store
3. Search for "SafeAI Guard"
4. Click "Add to Brave"
5. Accept permissions
6. Extension will install automatically`}</pre>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                            <strong>Note:</strong> Brave's enhanced privacy features work seamlessly with SafeAI Guard's local processing.
                        </p>
                    </div>
                </div>

                {/* Post-Installation Setup */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Post-Installation Setup
                    </h2>
                    
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">1. Account Authentication</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`// Click the SafeAI Guard icon in toolbar

const setupAccount = async () => {
  // Login with existing account
  await safeaiGuard.login({
    email: 'parent@example.com',
    password: 'secure-password'
  });
  
  // Or create new account
  await safeaiGuard.createAccount({
    email: 'parent@example.com',
    password: 'secure-password',
    parentName: 'John Doe',
    acceptTerms: true
  });
}`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">2. Child Profile Configuration</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`// Add child profiles

const childProfiles = [
  {
    name: "Emma",
    age: 10,
    protectionLevel: "strict",
    educationalMode: true,
    allowedPlatforms: ["ChatGPT", "Claude", "Gemini"],
    schoolHours: {
      enabled: true,
      start: "08:00",
      end: "15:00",
      restrictions: "educational_only"
    }
  },
  {
    name: "Alex",
    age: 14,
    protectionLevel: "balanced",
    educationalMode: true,
    allowedPlatforms: ["all"],
    customRules: {
      blockTopics: ["violence", "adult"],
      allowTopics: ["homework", "creative", "coding"]
    }
  }
];`}</pre>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">3. Verify Installation</h3>
                            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`// Run diagnostics to ensure proper installation

safeaiGuard.runDiagnostics()
  .then(results => {
    console.log('Extension Status:', results.extensionActive);
    console.log('AI Platforms Detected:', results.platformsFound);
    console.log('Protection Active:', results.protectionEnabled);
    console.log('Local Storage:', results.storageAvailable);
    console.log('Performance:', results.performanceMetrics);
  });

// Expected output:
{
  extensionActive: true,
  platformsFound: ['ChatGPT', 'Claude', 'Gemini'],
  protectionEnabled: true,
  storageAvailable: '1.2GB',
  performanceMetrics: {
    filteringSpeed: '12ms',
    memoryUsage: '128MB'
  }
}`}</pre>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Permissions Explained */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Permissions Explained
                    </h2>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    Read and change data on AI websites
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Required to monitor and filter AI conversations in real-time. Only active on AI platform domains.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    Display notifications
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Used to alert parents about potential safety concerns or when approval is needed.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                    Store data locally
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Settings and filtering rules are stored locally. No conversation data is ever transmitted.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Troubleshooting */}
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-10">
                    <h3 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                        Common Installation Issues
                    </h3>
                    <div className="space-y-3 text-yellow-800 dark:text-yellow-200">
                        <div>
                            <p className="font-semibold">Extension Not Visible</p>
                            <p className="text-sm">Check if extension is enabled in browser settings and pin it to toolbar</p>
                        </div>
                        <div>
                            <p className="font-semibold">Permission Denied</p>
                            <p className="text-sm">Ensure you have admin rights or contact IT administrator for enterprise installs</p>
                        </div>
                        <div>
                            <p className="font-semibold">Not Working on AI Sites</p>
                            <p className="text-sm">Refresh the AI platform page after installation or check site permissions</p>
                        </div>
                        <div>
                            <p className="font-semibold">Performance Issues</p>
                            <p className="text-sm">Close unnecessary tabs and ensure system meets minimum requirements</p>
                        </div>
                    </div>
                </div>

                {/* Uninstallation */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Uninstallation
                    </h2>
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-900 dark:text-gray-100 font-mono whitespace-pre">{`# Chrome/Edge/Brave
1. Right-click SafeAI Guard icon
2. Select "Remove from Chrome/Edge/Brave"
3. Confirm removal

# Alternative method:
1. Go to browser://extensions
2. Find SafeAI Guard
3. Click "Remove"
4. Confirm removal

# Data cleanup (optional):
- All settings are removed automatically
- No conversation data is stored to clean up
- Parent account remains active on web dashboard`}</pre>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Next Steps
                    </h3>
                    <div className="flex flex-col space-y-3">
                        <Link href="/docs/safeai-guard/quick-start" className="text-primary-600 dark:text-primary-400 hover:underline">
                            Follow the Quick Start Guide →
                        </Link>
                        <Link href="/docs/safeai-guard/api" className="text-primary-600 dark:text-primary-400 hover:underline">
                            Explore the API Reference →
                        </Link>
                        <Link href="/docs/safeai-guard/guides" className="text-primary-600 dark:text-primary-400 hover:underline">
                            View Configuration Guides →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}