const fs = require('fs');
const path = require('path');

// Function to fix broken mathematical formulas
function fixMathematicalFormulas(content) {
  // Fix broken subscript notation
  content = content.replace(/x\s*\n\s*1\s*\n\s*​\s*\n\s*/g, 'x₁');
  content = content.replace(/y\s*\n\s*1\s*\n\s*​\s*\n\s*/g, 'y₁');
  content = content.replace(/x\s*\n\s*N\s*\n\s*​\s*\n\s*/g, 'xᴺ');
  content = content.replace(/y\s*\n\s*N\s*\n\s*​\s*\n\s*/g, 'yᴺ');
  content = content.replace(/x\s*\n\s*i\s*\n\s*​\s*\n\s*/g, 'xᵢ');
  content = content.replace(/y\s*\n\s*i\s*\n\s*​\s*\n\s*/g, 'yᵢ');
  
  // Fix broken D notation
  content = content.replace(/D\s*\n\s*1\s*\n\s*​\s*\n\s*\(i\)=\s*\n\s*N\s*\n\s*1\s*\n\s*​/g, 'D₁(i) = 1/N');
  content = content.replace(/D\s*\n\s*t\s*\n\s*​\s*\n\s*\(i\)/g, 'Dₜ(i)');
  
  // Fix broken epsilon notation
  content = content.replace(/ϵ\s*\n\s*t\s*\n\s*​\s*\n\s*=/g, 'ϵₜ =');
  content = content.replace(/ϵ\s*\n\s*t\s*\n\s*​\s*\n\s*/g, 'ϵₜ');
  
  // Fix broken alpha notation
  content = content.replace(/α\s*\n\s*t\s*\n\s*​\s*\n\s*=/g, 'αₜ =');
  content = content.replace(/α\s*\n\s*t\s*\n\s*​\s*\n\s*/g, 'αₜ');
  
  // Fix broken h notation
  content = content.replace(/h\s*\n\s*t\s*\n\s*​\s*\n\s*\(x\)/g, 'hₜ(x)');
  content = content.replace(/h\s*\n\s*t\s*\n\s*​\s*\n\s*/g, 'hₜ');
  
  // Fix broken H notation
  content = content.replace(/H\s*\n\s*t\s*\n\s*​\s*\n\s*\(x\)/g, 'Hₜ(x)');
  content = content.replace(/H\s*\n\s*t\s*\n\s*​\s*\n\s*/g, 'Hₜ');
  
  // Fix broken summation notation
  content = content.replace(/i=1\s*\n\s*∑\s*\n\s*N\s*\n\s*​/g, 'Σᵢ₌₁ᴺ');
  content = content.replace(/t=1\s*\n\s*∑\s*\n\s*T\s*\n\s*​/g, 'Σₜ₌₁ᵀ');
  
  // Fix broken fraction notation
  content = content.replace(/ϵ\s*\n\s*t\s*\n\s*​\s*\n\s*\n\s*1−ϵ\s*\n\s*t\s*\n\s*​/g, 'ϵₜ/(1-ϵₜ)');
  content = content.replace(/2\s*\n\s*1\s*\n\s*​\s*\n\s*ln/g, '½ ln');
  
  // Fix broken indicator function
  content = content.replace(/I\(h\s*\n\s*t\s*\n\s*​\s*\n\s*\(x\s*\n\s*i\s*\n\s*​\s*\)\s*\n\s*\s*\n\s*=y\s*\n\s*i\s*\n\s*​\s*\)/g, 'I(hₜ(xᵢ) ≠ yᵢ)');
  
  // Fix broken mathematical symbols
  content = content.replace(/∈\{−1,\+1\}/g, '∈ {-1, +1}');
  content = content.replace(/→\{−1,\+1\}/g, '→ {-1, +1}');
  
  // Fix broken spacing in formulas
  content = content.replace(/\s*\n\s*​\s*\n\s*/g, ' ');
  
  return content;
}

// Function to process all MDX files
function processAllFiles() {
  const mlDir = path.join(__dirname, '../content/knowledge/machine-learning');
  
  function processDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        processDirectory(fullPath);
      } else if (item.endsWith('.mdx')) {
        console.log(`Processing: ${fullPath}`);
        
        try {
          let content = fs.readFileSync(fullPath, 'utf8');
          const originalContent = content;
          
          content = fixMathematicalFormulas(content);
          
          if (content !== originalContent) {
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log(`  ✅ Fixed formulas in: ${item}`);
          } else {
            console.log(`  ℹ️  No changes needed: ${item}`);
          }
        } catch (error) {
          console.error(`  ❌ Error processing ${item}:`, error.message);
        }
      }
    }
  }
  
  processDirectory(mlDir);
  console.log('\n🎉 Mathematical formula fixing complete!');
}

// Run the script
if (require.main === module) {
  processAllFiles();
}

module.exports = { fixMathematicalFormulas };
