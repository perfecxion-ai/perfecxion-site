const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Map of source files to their metadata
const contentMap = [
  {
    source: 'AI-Fabric-Security.md',
    title: 'Security Risks in Shared AI Fabrics: Congestion Control and Telemetry Vulnerabilities',
    description: 'Critical vulnerabilities in AI fabric congestion control and telemetry systems that enable tenant-to-tenant attacks and performance degradation',
    category: 'infrastructure',
    tags: ['AI Fabric', 'Network Security', 'RoCEv2', 'InfiniBand', 'Network Telemetry', 'Congestion Control', 'Multi-Tenant Security']
  },
  {
    source: 'ai-cloud-net-case-study.md',
    title: 'AI Cloud Networking Case Study: Real-World Security and Performance',
    description: 'In-depth analysis of cloud networking challenges and solutions for AI workloads in production environments',
    category: 'infrastructure',
    tags: ['Cloud', 'AI Infrastructure', 'Network Performance', 'Case Study', 'Production', 'Scalability']
  },
  {
    source: 'ai-control-attack-vectors.md',
    title: 'AI Control Plane Attack Vectors: Exploiting Management Interfaces',
    description: 'Comprehensive guide to attack vectors targeting AI infrastructure control planes and management systems',
    category: 'security',
    tags: ['Attack Vectors', 'Control Plane', 'AI Security', 'Vulnerability Assessment', 'Network Security']
  },
  {
    source: 'ai-fabric-congestion-telem-sym.md',
    title: 'AI Fabric Congestion and Telemetry: Security Implications',
    description: 'Analysis of security vulnerabilities arising from congestion management and telemetry systems in AI fabrics',
    category: 'infrastructure',
    tags: ['AI Fabric', 'Congestion Control', 'Network Telemetry', 'Performance', 'Security']
  },
  {
    source: 'ai-fabric-sec-telem-congest.md',
    title: 'Securing AI Fabric Telemetry and Congestion Systems',
    description: 'Best practices for securing telemetry and congestion control mechanisms in AI network fabrics',
    category: 'security',
    tags: ['AI Fabric', 'Network Security', 'Telemetry', 'Best Practices', 'Congestion Control']
  },
  {
    source: 'ai-fabrics-vuln-sec.md',
    title: 'AI Fabric Vulnerabilities and Security Countermeasures',
    description: 'Detailed examination of AI fabric vulnerabilities and comprehensive security countermeasures',
    category: 'security',
    tags: ['AI Fabric', 'Vulnerability Assessment', 'Network Security', 'Countermeasures', 'Defense Strategies']
  },
  {
    source: 'ai-net-telem-recon-exploit.md',
    title: 'AI Network Telemetry: Reconnaissance and Exploitation Techniques',
    description: 'How attackers use network telemetry for reconnaissance and exploit telemetry systems in AI infrastructures',
    category: 'security',
    tags: ['Network Telemetry', 'Red Team', 'Reconnaissance', 'AI Security', 'Attack Techniques']
  },
  {
    source: 'ai-network-cluster-control.md',
    title: 'AI Network and Cluster Control: Security Architecture',
    description: 'Security architecture patterns for AI network and cluster control systems',
    category: 'infrastructure',
    tags: ['AI Infrastructure', 'Cluster Management', 'Network Security', 'Architecture', 'Control Systems']
  },
  {
    source: 'ai-sec-net-perf.md',
    title: 'AI Security and Network Performance: Balancing Trade-offs',
    description: 'Strategies for balancing security requirements with network performance in AI systems',
    category: 'infrastructure',
    tags: ['Network Performance', 'AI Security', 'Performance Optimization', 'Trade-offs', 'Best Practices']
  },
  {
    source: 'ai-super-scale-up-out.md',
    title: 'AI Super Scaling: Security Challenges in Scale-Up and Scale-Out',
    description: 'Security implications of scaling AI infrastructure both vertically and horizontally',
    category: 'infrastructure',
    tags: ['Scalability', 'AI Infrastructure', 'Distributed Training', 'Security Challenges', 'Performance']
  },
  {
    source: 'rocev2-infiniband-sec-sim.md',
    title: 'RoCEv2 and InfiniBand Security: Simulations and Analysis',
    description: 'Security analysis and simulation results for RoCEv2 and InfiniBand protocols in AI environments',
    category: 'infrastructure',
    tags: ['RoCEv2', 'InfiniBand', 'Network Security', 'RDMA', 'Protocol Analysis', 'Simulation']
  },
  {
    source: 'sec-ai-fabric-net-channels.md',
    title: 'Securing AI Fabric Network Channels: Defense Strategies',
    description: 'Comprehensive defense strategies for securing network channels in AI fabric architectures',
    category: 'security',
    tags: ['AI Fabric', 'Network Security', 'Defense Strategies', 'Channel Security', 'Best Practices']
  }
];

// Function to generate slug from title
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Process each file
async function importContent() {
  const sourceDir = '/Users/scott/AI-Sec-Network-Performance';
  const targetDir = path.join(process.cwd(), 'content', 'knowledge', 'infrastructure', 'networking');
  
  // Create target directory if it doesn't exist
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log(`Created directory: ${targetDir}`);
  }
  
  for (const item of contentMap) {
    try {
      const sourcePath = path.join(sourceDir, item.source);
      
      // Check if source file exists
      if (!fs.existsSync(sourcePath)) {
        console.log(`⚠️  Source file not found: ${item.source}`);
        continue;
      }
      
      // Read the markdown content
      let content = fs.readFileSync(sourcePath, 'utf-8');
      
      // Remove the first heading if it exists (we'll use our title in frontmatter)
      content = content.replace(/^#\s+.*?\n/, '');
      
      // Create frontmatter
      const frontmatter = {
        title: item.title,
        description: item.description,
        date: new Date().toISOString().split('T')[0],
        category: item.category,
        tags: item.tags,
        difficulty: 'advanced',
        readTime: '15 min read',
        format: 'article',
        domain: 'infrastructure',
        topics: item.tags.slice(0, 5)
      };
      
      // Create the new content with frontmatter
      const newContent = matter.stringify(content, frontmatter);
      
      // Generate filename
      const slug = generateSlug(item.title);
      const targetPath = path.join(targetDir, `${slug}.mdx`);
      
      // Write the file
      fs.writeFileSync(targetPath, newContent);
      console.log(`✅ Imported: ${item.source} -> ${slug}.mdx`);
      
    } catch (error) {
      console.error(`❌ Error processing ${item.source}:`, error.message);
    }
  }
  
  console.log('\n🎉 Import complete!');
}

// Run the import
importContent().catch(console.error);