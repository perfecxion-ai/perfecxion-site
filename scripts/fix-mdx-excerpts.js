const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function fixMDXExcerpts() {
  const contentDir = path.join(process.cwd(), 'content', 'knowledge');
  
  // Files that have been reported with errors
  const problemFiles = [
    'infrastructure/networking/ai-network-topologies.mdx',
    'infrastructure/networking/ai-security-and-network-performance-balancing-trade-offs.mdx',
    'infrastructure/networking/ai-super-scaling-security-challenges-in-scale-up-and-scale-out.mdx',
    // Check all networking files to be safe
    'infrastructure/networking/400g-vs-800g-networking.mdx',
    'infrastructure/networking/infiniband-vs-ethernet-future.mdx',
    'infrastructure/networking/infiniband-vs-ethernet-security.mdx',
    'infrastructure/networking/llm-training-tail-latency.mdx',
    'infrastructure/networking/network-resilience-comparison.mdx',
    'infrastructure/networking/photonic-interconnects-1-6tb.mdx',
    'infrastructure/networking/rocev2-vs-infiniband.mdx'
  ];
  
  let fixedCount = 0;
  
  problemFiles.forEach(file => {
    const filePath = path.join(contentDir, file);
    
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${file}`);
      return;
    }
    
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      const { data, content: body } = matter(content);
      
      // Check if excerpt contains problematic content
      if (data.excerpt && (data.excerpt.includes('\n') || data.excerpt.length > 200)) {
        console.log(`🔧 Fixing: ${file}`);
        console.log(`   Old excerpt length: ${data.excerpt.length}`);
        
        // Extract a clean excerpt from the multiline content
        const lines = data.excerpt.split('\n').filter(line => line.trim());
        const firstSentence = lines[0] || data.description || '';
        
        // Truncate to a reasonable length
        data.excerpt = firstSentence.substring(0, 200).trim();
        if (data.excerpt.length === 200) {
          // Find last complete word
          const lastSpace = data.excerpt.lastIndexOf(' ');
          if (lastSpace > 150) {
            data.excerpt = data.excerpt.substring(0, lastSpace) + '...';
          }
        }
        
        console.log(`   New excerpt length: ${data.excerpt.length}`);
        
        // Write back the fixed content
        const newContent = matter.stringify(body, data);
        fs.writeFileSync(filePath, newContent);
        fixedCount++;
      }
      
      // Also check for other problematic frontmatter fields
      let needsUpdate = false;
      
      // Remove or fix problematic fields
      if (data.toc !== undefined) {
        delete data.toc;
        needsUpdate = true;
      }
      
      if (data.featured !== undefined) {
        delete data.featured;
        needsUpdate = true;
      }
      
      if (data.subcategory !== undefined) {
        delete data.subcategory;
        needsUpdate = true;
      }
      
      if (data.type && data.type === 'knowledge') {
        delete data.type; // Remove redundant type
        needsUpdate = true;
      }
      
      if (needsUpdate) {
        console.log(`🔧 Cleaning frontmatter for: ${file}`);
        const newContent = matter.stringify(body, data);
        fs.writeFileSync(filePath, newContent);
        fixedCount++;
      }
      
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  });
  
  console.log(`\n✅ Fixed ${fixedCount} files`);
}

// Run the fix
fixMDXExcerpts();