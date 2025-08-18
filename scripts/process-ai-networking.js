const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Define the AI networking documents to process
const networkingDocs = [
  {
    file: '1-6-tb-photon-asic.md',
    title: '1.6Tb/s Photonic Interconnects: The Future of AI Infrastructure',
    description: 'Deep dive into photonic ASICs and optical interconnects enabling 1.6Tb/s speeds for next-generation AI clusters.',
    slug: 'photonic-interconnects-1-6tb',
    tags: ['photonics', 'optical-networking', 'high-speed-interconnects', 'AI-infrastructure', 'ASIC']
  },
  {
    file: '400-vs-800-transformed.md',
    title: '400G vs 800G Networking: Economic and Technical Analysis for AI',
    description: 'Comprehensive comparison of 400G and 800G networking technologies, including pluggables, co-packaged optics, and TCO analysis for AI workloads.',
    slug: '400g-vs-800g-networking',
    tags: ['400G', '800G', 'network-architecture', 'cost-analysis', 'data-center', 'optical-networking']
  },
  {
    file: 'ai-net-topologies-transformed.md',
    title: 'AI Network Topologies: Architecture Patterns for Scale',
    description: 'Analysis of network topologies optimized for AI workloads including fat-tree, dragonfly, and rail-optimized designs.',
    slug: 'ai-network-topologies',
    tags: ['network-topology', 'architecture', 'fat-tree', 'dragonfly', 'scale-out', 'AI-clusters']
  },
  {
    file: 'ib-vs-eth-predict-transformed.md',
    title: 'InfiniBand vs Ethernet: Predicting the Future of AI Networking',
    description: 'Strategic analysis of InfiniBand and Ethernet technologies, market trends, and predictions for AI infrastructure.',
    slug: 'infiniband-vs-ethernet-future',
    tags: ['InfiniBand', 'Ethernet', 'RoCE', 'predictions', 'market-analysis', 'AI-networking']
  },
  {
    file: 'ib-vs-eth-sec-transformed.md',
    title: 'Security Comparison: InfiniBand vs Ethernet in AI Environments',
    description: 'Security analysis comparing InfiniBand and Ethernet protocols, vulnerabilities, and protection strategies for AI clusters.',
    slug: 'infiniband-vs-ethernet-security',
    tags: ['InfiniBand', 'Ethernet', 'security', 'vulnerabilities', 'network-security', 'AI-security']
  },
  {
    file: 'llm-training-tail-transformed.md',
    title: 'LLM Training and Tail Latency: Network Optimization Strategies',
    description: 'Understanding and optimizing network tail latency for large language model training, including collective operations and gradient synchronization.',
    slug: 'llm-training-tail-latency',
    tags: ['LLM', 'training', 'tail-latency', 'optimization', 'collective-operations', 'performance']
  },
  {
    file: 'net-resil-ib-v-eth-transformed.md',
    title: 'Network Resilience: InfiniBand vs Ethernet Fault Tolerance',
    description: 'Comparative analysis of fault tolerance, redundancy, and resilience mechanisms in InfiniBand and Ethernet networks.',
    slug: 'network-resilience-comparison',
    tags: ['resilience', 'fault-tolerance', 'InfiniBand', 'Ethernet', 'redundancy', 'high-availability']
  },
  {
    file: 'rocve2-vs-ib-transformed.md',
    title: 'RoCEv2 vs InfiniBand: Performance and Implementation Guide',
    description: 'Technical comparison of RoCEv2 and InfiniBand protocols, including performance benchmarks, implementation considerations, and best practices.',
    slug: 'rocev2-vs-infiniband',
    tags: ['RoCEv2', 'InfiniBand', 'RDMA', 'performance', 'implementation', 'best-practices']
  }
];

// Function to extract first few lines as excerpt
function extractExcerpt(content, maxLength = 300) {
  // Remove markdown formatting
  const plainText = content
    .replace(/^#.*$/gm, '') // Remove headers
    .replace(/\*\*/g, '') // Remove bold
    .replace(/\*/g, '') // Remove italics
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Replace links with text
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`([^`]+)`/g, '$1') // Remove inline code
    .replace(/\n\n+/g, ' ') // Replace multiple newlines
    .trim();
  
  return plainText.length > maxLength 
    ? plainText.substring(0, maxLength).trim() + '...'
    : plainText;
}

// Function to process a single document
async function processDocument(doc) {
  const sourcePath = path.join('/Users/scott/Desktop/ai-networking', doc.file);
  
  if (!fs.existsSync(sourcePath)) {
    console.log(`  ⚠️  File not found: ${sourcePath}`);
    return false;
  }
  
  // Read the original content
  const originalContent = fs.readFileSync(sourcePath, 'utf8');
  
  // Extract title from first H1 if available
  const h1Match = originalContent.match(/^#\s+(.+)$/m);
  const extractedTitle = h1Match ? h1Match[1] : doc.title;
  
  // Create frontmatter
  const frontmatter = {
    title: doc.title,
    description: doc.description,
    date: new Date().toISOString().split('T')[0],
    author: 'perfecXion AI Team',
    category: 'infrastructure',
    subcategory: 'networking',
    tags: doc.tags,
    difficulty: 'advanced',
    readTime: `${Math.ceil(originalContent.split(' ').length / 200)} min read`,
    featured: true,
    toc: true,
    type: 'knowledge',
    excerpt: extractExcerpt(originalContent)
  };
  
  // Create the MDX content with frontmatter
  const mdxContent = matter.stringify(originalContent, frontmatter);
  
  // Create destination directory if it doesn't exist
  const destDir = path.join(
    process.cwd(),
    'content',
    'knowledge',
    'infrastructure',
    'networking'
  );
  
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  // Write the MDX file
  const destPath = path.join(destDir, `${doc.slug}.mdx`);
  fs.writeFileSync(destPath, mdxContent);
  
  console.log(`  ✅ Processed: ${doc.file}`);
  console.log(`     Title: ${doc.title}`);
  console.log(`     Saved as: ${doc.slug}.mdx`);
  
  return true;
}

// Main processing function
async function processNetworkingContent() {
  console.log('\n🚀 Processing AI Networking Content...\n');
  console.log('='.repeat(60));
  
  let successCount = 0;
  let failCount = 0;
  
  for (const doc of networkingDocs) {
    if (await processDocument(doc)) {
      successCount++;
    } else {
      failCount++;
    }
    console.log('');
  }
  
  console.log('='.repeat(60));
  console.log('\n📊 Processing Summary:');
  console.log(`  ✅ Successfully processed: ${successCount} documents`);
  if (failCount > 0) {
    console.log(`  ❌ Failed: ${failCount} documents`);
  }
  
  console.log('\n📍 Content Location:');
  console.log('  /content/knowledge/infrastructure/networking/');
  
  console.log('\n🎯 Next Steps:');
  console.log('  1. Review the processed content');
  console.log('  2. Update any internal links');
  console.log('  3. Add to navigation if needed');
  console.log('  4. Test rendering in the browser');
  
  // Generate a summary for the Infrastructure page
  console.log('\n📄 Content Summary for Infrastructure Page:\n');
  networkingDocs.forEach(doc => {
    console.log(`- ${doc.title}`);
    console.log(`  ${doc.description}`);
    console.log('');
  });
}

// Run the processing
processNetworkingContent().catch(console.error);