'use client'

import { useState } from 'react'
import { Copy, Check, Download, ChevronDown } from 'lucide-react'
import ResponsiveCodeBlock from '@/components/code/ResponsiveCodeBlock'

interface CodeGeneratorProps {
  endpoint: string
  apiKey: string
  lastRequest: {
    method: string
    endpoint: string
    params: any
  }
}

const SUPPORTED_LANGUAGES = [
  { id: 'python', name: 'Python', icon: '🐍' },
  { id: 'javascript', name: 'JavaScript', icon: '📦' },
  { id: 'curl', name: 'cURL', icon: '🔗' },
  { id: 'java', name: 'Java', icon: '☕' },
  { id: 'go', name: 'Go', icon: '🐹' },
  { id: 'php', name: 'PHP', icon: '🐘' },
  { id: 'ruby', name: 'Ruby', icon: '💎' },
  { id: 'csharp', name: 'C#', icon: '🔷' }
]

export default function CodeGenerator({ endpoint, apiKey, lastRequest }: CodeGeneratorProps) {
  const [selectedLanguage, setSelectedLanguage] = useState('python')
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)
  const [copiedLanguage, setCopiedLanguage] = useState<string | null>(null)

  const generateCode = (language: string): string => {
    const baseUrl = 'https://api.perfecxion.ai'
    const params = lastRequest.params || {}

    switch (language) {
      case 'python':
        return `import requests
import json

# Configure API endpoint and headers
url = "${baseUrl}${endpoint}"
headers = {
    "Authorization": f"Bearer ${apiKey}",
    "Content-Type": "application/json"
}

# Request parameters
data = ${JSON.stringify(params, null, 4).split('\n').map((line, i) => i === 0 ? line : '    ' + line).join('\n')}

# Make the API request
try:
    response = requests.post(url, headers=headers, json=data)
    response.raise_for_status()
    
    # Parse the response
    result = response.json()
    print(json.dumps(result, indent=2))
    
    # Handle the results
    if result.get('success'):
        vulnerabilities = result.get('result', {}).get('vulnerabilities', [])
        for vuln in vulnerabilities:
            print(f"Found: {vuln['type']} - Severity: {vuln['severity']}")
            print(f"Description: {vuln['description']}")
            print(f"Remediation: {vuln['remediation']}\\n")
            
except requests.exceptions.RequestException as e:
    print(f"Error: {e}")`

      case 'javascript':
        return `// Using fetch API (Node.js 18+ or browser)
const url = '${baseUrl}${endpoint}';
const headers = {
    'Authorization': 'Bearer ${apiKey}',
    'Content-Type': 'application/json'
};

// Request parameters
const data = ${JSON.stringify(params, null, 2)};

// Make the API request
async function scanModel() {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }

        const result = await response.json();
        console.log(JSON.stringify(result, null, 2));

        // Handle the results
        if (result.success) {
            const vulnerabilities = result.result?.vulnerabilities || [];
            vulnerabilities.forEach(vuln => {
                console.log(\`Found: \${vuln.type} - Severity: \${vuln.severity}\`);
                console.log(\`Description: \${vuln.description}\`);
                console.log(\`Remediation: \${vuln.remediation}\\n\`);
            });
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

scanModel();`

      case 'curl':
        return `# perfecXion.ai API request using cURL
curl -X POST '${baseUrl}${endpoint}' \\
  -H 'Authorization: Bearer ${apiKey}' \\
  -H 'Content-Type: application/json' \\
  -d '${JSON.stringify(params, null, 2).replace(/'/g, "'\"'\"'")}'

# With pretty printing (requires jq)
curl -X POST '${baseUrl}${endpoint}' \\
  -H 'Authorization: Bearer ${apiKey}' \\
  -H 'Content-Type: application/json' \\
  -d '${JSON.stringify(params, null, 2).replace(/'/g, "'\"'\"'")}' | jq .

# Save response to file
curl -X POST '${baseUrl}${endpoint}' \\
  -H 'Authorization: Bearer ${apiKey}' \\
  -H 'Content-Type: application/json' \\
  -d '${JSON.stringify(params, null, 2).replace(/'/g, "'\"'\"'")}' \\
  -o response.json`

      case 'java':
        return `import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.JsonNode;

public class PerfecXionAPIExample {
    private static final String API_KEY = "${apiKey}";
    private static final String BASE_URL = "${baseUrl}";
    
    public static void main(String[] args) {
        try {
            // Create HTTP client
            HttpClient client = HttpClient.newHttpClient();
            ObjectMapper mapper = new ObjectMapper();
            
            // Prepare request data
            String requestBody = """
                ${JSON.stringify(params, null, 16)}
                """;
            
            // Build the request
            HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(BASE_URL + "${endpoint}"))
                .header("Authorization", "Bearer " + API_KEY)
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                .build();
            
            // Send the request
            HttpResponse<String> response = client.send(request, 
                HttpResponse.BodyHandlers.ofString());
            
            // Parse response
            JsonNode result = mapper.readTree(response.body());
            System.out.println(mapper.writerWithDefaultPrettyPrinter()
                .writeValueAsString(result));
            
            // Handle vulnerabilities
            if (result.get("success").asBoolean()) {
                JsonNode vulnerabilities = result.path("result")
                    .path("vulnerabilities");
                for (JsonNode vuln : vulnerabilities) {
                    System.out.println("Found: " + vuln.get("type").asText() + 
                        " - Severity: " + vuln.get("severity").asText());
                    System.out.println("Description: " + 
                        vuln.get("description").asText());
                    System.out.println("Remediation: " + 
                        vuln.get("remediation").asText() + "\\n");
                }
            }
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}`

      case 'go':
        return `package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io"
    "net/http"
)

const (
    apiKey  = "${apiKey}"
    baseURL = "${baseUrl}"
)

type ScanRequest struct {
    ${Object.entries(params).map(([key, value]) => {
      const goType = typeof value === 'string' ? 'string' : 
                     typeof value === 'boolean' ? 'bool' :
                     Array.isArray(value) ? '[]string' : 'interface{}'
      return `${key.charAt(0).toUpperCase() + key.slice(1).replace(/_([a-z])/g, (_, c) => c.toUpperCase())} ${goType} \`json:"${key}"\``
    }).join('\n    ')}
}

type Response struct {
    Success bool                   \`json:"success"\`
    Message string                \`json:"message"\`
    Result  map[string]interface{} \`json:"result"\`
}

func main() {
    // Prepare request data
    requestData := ScanRequest{
        ${Object.entries(params).map(([key, value]) => {
          const goKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/_([a-z])/g, (_, c) => c.toUpperCase())
          return `${goKey}: ${JSON.stringify(value)},`
        }).join('\n        ')}
    }

    // Marshal request to JSON
    jsonData, err := json.Marshal(requestData)
    if err != nil {
        panic(err)
    }

    // Create request
    req, err := http.NewRequest("POST", baseURL+"${endpoint}", 
        bytes.NewBuffer(jsonData))
    if err != nil {
        panic(err)
    }

    // Set headers
    req.Header.Set("Authorization", "Bearer "+apiKey)
    req.Header.Set("Content-Type", "application/json")

    // Send request
    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()

    // Read response
    body, err := io.ReadAll(resp.Body)
    if err != nil {
        panic(err)
    }

    // Parse response
    var result Response
    if err := json.Unmarshal(body, &result); err != nil {
        panic(err)
    }

    // Pretty print response
    prettyJSON, _ := json.MarshalIndent(result, "", "  ")
    fmt.Println(string(prettyJSON))
}`

      case 'php':
        return `<?php
// perfecXion.ai API example in PHP

$apiKey = '${apiKey}';
$baseUrl = '${baseUrl}';
$endpoint = '${endpoint}';

// Request data
$data = ${JSON.stringify(params, null, 4).split('\n').map((line, i) => i === 0 ? line : '    ' + line).join('\n').replace(/"/g, "'").replace(/: /g, ' => ')};

// Initialize cURL
$ch = curl_init($baseUrl . $endpoint);

// Set cURL options
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $apiKey,
    'Content-Type: application/json'
]);

// Execute request
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

if (curl_errno($ch)) {
    echo 'Error: ' . curl_error($ch) . PHP_EOL;
} else {
    // Parse response
    $result = json_decode($response, true);
    
    // Pretty print response
    echo json_encode($result, JSON_PRETTY_PRINT) . PHP_EOL;
    
    // Handle vulnerabilities
    if ($result['success'] ?? false) {
        $vulnerabilities = $result['result']['vulnerabilities'] ?? [];
        foreach ($vulnerabilities as $vuln) {
            echo "Found: {$vuln['type']} - Severity: {$vuln['severity']}" . PHP_EOL;
            echo "Description: {$vuln['description']}" . PHP_EOL;
            echo "Remediation: {$vuln['remediation']}" . PHP_EOL . PHP_EOL;
        }
    }
}

curl_close($ch);
?>`

      case 'ruby':
        return `require 'net/http'
require 'json'
require 'uri'

# API configuration
api_key = '${apiKey}'
base_url = '${baseUrl}'
endpoint = '${endpoint}'

# Request data
data = ${JSON.stringify(params, null, 2).replace(/"/g, "'")}

# Create URI and request
uri = URI.parse(base_url + endpoint)
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true

# Build request
request = Net::HTTP::Post.new(uri.request_uri)
request['Authorization'] = "Bearer #{api_key}"
request['Content-Type'] = 'application/json'
request.body = data.to_json

# Send request
begin
  response = http.request(request)
  result = JSON.parse(response.body)
  
  # Pretty print response
  puts JSON.pretty_generate(result)
  
  # Handle vulnerabilities
  if result['success']
    vulnerabilities = result.dig('result', 'vulnerabilities') || []
    vulnerabilities.each do |vuln|
      puts "Found: #{vuln['type']} - Severity: #{vuln['severity']}"
      puts "Description: #{vuln['description']}"
      puts "Remediation: #{vuln['remediation']}\\n\\n"
    end
  end
rescue => e
  puts "Error: #{e.message}"
end`

      case 'csharp':
        return `using System;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

public class PerfecXionAPIExample
{
    private const string ApiKey = "${apiKey}";
    private const string BaseUrl = "${baseUrl}";
    
    public static async Task Main(string[] args)
    {
        using var client = new HttpClient();
        
        // Set authorization header
        client.DefaultRequestHeaders.Add("Authorization", $"Bearer {ApiKey}");
        
        // Prepare request data
        var requestData = new
        {
            ${Object.entries(params).map(([key, value]) => 
              `${key} = ${JSON.stringify(value)}`
            ).join(',\n            ')}
        };
        
        var json = JsonSerializer.Serialize(requestData, new JsonSerializerOptions
        {
            WriteIndented = true
        });
        
        var content = new StringContent(json, Encoding.UTF8, "application/json");
        
        try
        {
            // Send request
            var response = await client.PostAsync($"{BaseUrl}${endpoint}", content);
            response.EnsureSuccessStatusCode();
            
            // Read response
            var responseBody = await response.Content.ReadAsStringAsync();
            var result = JsonDocument.Parse(responseBody);
            
            // Pretty print response
            Console.WriteLine(JsonSerializer.Serialize(result, new JsonSerializerOptions
            {
                WriteIndented = true
            }));
            
            // Handle vulnerabilities
            if (result.RootElement.GetProperty("success").GetBoolean())
            {
                var vulnerabilities = result.RootElement
                    .GetProperty("result")
                    .GetProperty("vulnerabilities");
                    
                foreach (var vuln in vulnerabilities.EnumerateArray())
                {
                    Console.WriteLine($"Found: {vuln.GetProperty("type").GetString()} - " +
                        $"Severity: {vuln.GetProperty("severity").GetString()}");
                    Console.WriteLine($"Description: {vuln.GetProperty("description").GetString()}");
                    Console.WriteLine($"Remediation: {vuln.GetProperty("remediation").GetString()}\\n");
                }
            }
        }
        catch (HttpRequestException e)
        {
            Console.WriteLine($"Error: {e.Message}");
        }
    }
}`

      default:
        return '// Language not supported'
    }
  }

  const handleCopy = async (language: string) => {
    const code = generateCode(language)
    await navigator.clipboard.writeText(code)
    setCopiedLanguage(language)
    setTimeout(() => setCopiedLanguage(null), 2000)
  }

  const handleDownload = (language: string) => {
    const code = generateCode(language)
    const fileExtensions: Record<string, string> = {
      python: 'py',
      javascript: 'js',
      curl: 'sh',
      java: 'java',
      go: 'go',
      php: 'php',
      ruby: 'rb',
      csharp: 'cs'
    }
    
    const blob = new Blob([code], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `perfecxion-api-example.${fileExtensions[language] || 'txt'}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const currentLanguage = SUPPORTED_LANGUAGES.find(l => l.id === selectedLanguage)!

  return (
    <div className="space-y-4">
      {/* Language Selector */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Code Examples
        </h3>
        
        <div className="relative">
          <button
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <span>{currentLanguage.icon}</span>
            <span>{currentLanguage.name}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {showLanguageDropdown && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowLanguageDropdown(false)}
              />
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-20">
                {SUPPORTED_LANGUAGES.map(lang => (
                  <button
                    key={lang.id}
                    onClick={() => {
                      setSelectedLanguage(lang.id)
                      setShowLanguageDropdown(false)
                    }}
                    className={`
                      w-full text-left px-4 py-2 flex items-center gap-2
                      hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors
                      ${lang.id === selectedLanguage ? 'bg-gray-100 dark:bg-gray-700' : ''}
                    `}
                  >
                    <span>{lang.icon}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Code Display */}
      {endpoint ? (
        <div className="relative">
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <button
              onClick={() => handleDownload(selectedLanguage)}
              className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
            <button
              onClick={() => handleCopy(selectedLanguage)}
              className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              {copiedLanguage === selectedLanguage ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy
                </>
              )}
            </button>
          </div>
          
          <ResponsiveCodeBlock
            code={generateCode(selectedLanguage)}
            language={selectedLanguage === 'curl' ? 'bash' : selectedLanguage}
            showLineNumbers={selectedLanguage !== 'curl'}
            filename={`perfecxion-api-example.${
              selectedLanguage === 'python' ? 'py' :
              selectedLanguage === 'javascript' ? 'js' :
              selectedLanguage === 'curl' ? 'sh' :
              selectedLanguage === 'java' ? 'java' :
              selectedLanguage === 'go' ? 'go' :
              selectedLanguage === 'php' ? 'php' :
              selectedLanguage === 'ruby' ? 'rb' :
              selectedLanguage === 'csharp' ? 'cs' : 'txt'
            }`}
          />
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          Select an endpoint to generate code examples
        </div>
      )}

      {/* Integration Tips */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
          Integration Tips
        </h4>
        <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
          <li>• Store your API key securely using environment variables</li>
          <li>• Implement proper error handling and retry logic</li>
          <li>• Use rate limiting to avoid exceeding API quotas</li>
          <li>• Cache responses when appropriate to improve performance</li>
        </ul>
      </div>
    </div>
  )
}