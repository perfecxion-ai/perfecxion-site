const fs = require('fs');
const path = require('path');

// Function to fix the final broken formula patterns
function fixFinalFormulas(content) {
  // Fix the specific broken Dₜ pattern with line break and space
  content = content.replace(/D \n t /g, '**Dₜ**');
  content = content.replace(/D \n t\+1 /g, '**Dₜ₊₁**');
  
  // Fix the specific broken Zₜ pattern with line break and space
  content = content.replace(/Z \n t /g, '**Zₜ**');
  
  // Fix any remaining broken mathematical expressions with line breaks
  content = content.replace(/∑ \nt=1\nT /g, '**Σₜ₌₁ᵀ** ');
  content = content.replace(/∑ \ni=1\nN /g, '**Σᵢ₌₁ᴺ** ');
  
  // Fix any remaining broken mathematical expressions
  content = content.replace(/e \n−αₜ/g, '**e^(-αₜ)**');
  content = content.replace(/e \nαₜ/g, '**e^(αₜ)**');
  
  // Fix any remaining broken mathematical expressions
  content = content.replace(/yᵢhₜ\(xᵢ\)=1/g, '**yᵢhₜ(xᵢ) = 1**');
  content = content.replace(/yᵢhₜ\(xᵢ\)=−1/g, '**yᵢhₜ(xᵢ) = -1**');
  
  // Fix any remaining broken mathematical expressions
  content = content.replace(/ϵₜ =0\.5/g, '**ϵₜ = 0.5**');
  content = content.replace(/ϵₜ→0/g, '**ϵₜ → 0**');
  content = content.replace(/ϵₜ→1/g, '**ϵₜ → 1**');
  
  // Fix any remaining broken mathematical expressions
  content = content.replace(/\(1−ϵₜ\)\/ϵₜ/g, '**(1-ϵₜ)/ϵₜ**');
  
  // Fix any remaining broken mathematical expressions
  content = content.replace(/n_estimators: This integer parameter corresponds to T/g, '**n_estimators:** This integer parameter corresponds to **T**');
  content = content.replace(/learning_rate: This float parameter, often denoted as η/g, '**learning_rate:** This float parameter, often denoted as **η**');
  content = content.replace(/base_estimator \(or estimator\):/g, '**base_estimator (or estimator):**');
  
  // Fix any remaining broken mathematical expressions
  content = content.replace(/D \n t , influence the training/g, '**Dₜ** influence the training');
  content = content.replace(/D \n t is passed directly/g, '**Dₜ** is passed directly');
  content = content.replace(/D \n t . This effectively/g, '**Dₜ**. This effectively');
  
  // Fix any remaining broken mathematical expressions
  content = content.replace(/D \n t\+1 is a valid probability distribution/g, '**Dₜ₊₁** is a valid probability distribution');
  
  // Fix any remaining broken mathematical expressions
  content = content.replace(/D \n t , influence the training of the next weak learner/g, '**Dₜ** influence the training of the next weak learner');
  content = content.replace(/D \n t is passed directly to the learner's training function/g, '**Dₜ** is passed directly to the learner\'s training function');
  content = content.replace(/D \n t . This effectively creates a new dataset/g, '**Dₜ**. This effectively creates a new dataset');
  
  // Fix any remaining broken mathematical expressions
  content = content.replace(/D \n t , influence/g, '**Dₜ** influence');
  content = content.replace(/D \n t , is passed/g, '**Dₜ** is passed');
  content = content.replace(/D \n t , is formed/g, '**Dₜ** is formed');
  content = content.replace(/D \n t , influence the training/g, '**Dₜ** influence the training');
  content = content.replace(/D \n t is passed directly/g, '**Dₜ** is passed directly');
  content = content.replace(/D \n t . This effectively/g, '**Dₜ**. This effectively');
  content = content.replace(/D \n t , is passed directly/g, '**Dₜ** is passed directly');
  content = content.replace(/D \n t . This effectively/g, '**Dₜ**. This effectively');
  
  // Fix any remaining broken mathematical expressions
  content = content.replace(/−yᵢαₜhₜ\(xᵢ\), is key/g, '**-yᵢαₜhₜ(xᵢ)**, is key');
  content = content.replace(/−yᵢαₜhₜ\(xᵢ\)/g, '**-yᵢαₜhₜ(xᵢ)**');
  
  // Fix broken section headers
  content = content.replace(/3\.2 Computational Complexity/g, '### 3.2 Computational Complexity');
  
  // Fix any remaining broken mathematical notation in explanations
  content = content.replace(/ϵₜ =0\.5/g, '**ϵₜ = 0.5**');
  content = content.replace(/ϵₜ→0/g, '**ϵₜ → 0**');
  content = content.replace(/ϵₜ→1/g, '**ϵₜ → 1**');
  
  // Fix any remaining broken mathematical expressions in hyperparameters
  content = content.replace(/n_estimators: This integer parameter corresponds to T/g, '**n_estimators:** This integer parameter corresponds to **T**');
  content = content.replace(/learning_rate: This float parameter, often denoted as η/g, '**learning_rate:** This float parameter, often denoted as **η**');
  content = content.replace(/base_estimator \(or estimator\):/g, '**base_estimator (or estimator):**');
  
  // Fix any remaining broken mathematical expressions in explanations
  content = content.replace(/\(1−ϵₜ\)\/ϵₜ/g, '**(1-ϵₜ)/ϵₜ**');
  
  // Fix any remaining broken formulas in other files
  content = content.replace(/x\s*\n\s*1\s*\n\s*​\s*\n\s*/g, 'x₁');
  content = content.replace(/y\s*\n\s*1\s*\n\s*​\s*\n\s*/g, 'y₁');
  content = content.replace(/x\s*\n\s*N\s*\n\s*​\s*\n\s*/g, 'xᴺ');
  content = content.replace(/y\s*\n\s*N\s*\n\s*​\s*\n\s*/g, 'yᴺ');
  content = content.replace(/x\s*\n\s*i\s*\n\s*​\s*\n\s*/g, 'xᵢ');
  content = content.replace(/y\s*\n\s*i\s*\n\s*​\s*\n\s*/g, 'yᵢ');
  
  // Fix any remaining broken D notation
  content = content.replace(/D\s*\n\s*1\s*\n\s*​\s*\n\s*\(i\)=\s*\n\s*N\s*\n\s*1\s*\n\s*​/g, 'D₁(i) = 1/N');
  content = content.replace(/D\s*\n\s*t\s*\n\s*​\s*\n\s*\(i\)/g, 'Dₜ(i)');
  
  // Fix any remaining broken epsilon notation
  content = content.replace(/ϵ\s*\n\s*t\s*\n\s*​\s*\n\s*=/g, 'ϵₜ =');
  content = content.replace(/ϵ\s*\n\s*t\s*\n\s*​\s*\n\s*/g, 'ϵₜ');
  
  // Fix any remaining broken alpha notation
  content = content.replace(/α\s*\n\s*t\s*\n\s*​\s*\n\s*=/g, 'αₜ =');
  content = content.replace(/α\s*\n\s*t\s*\n\s*​\s*\n\s*/g, 'αₜ');
  
  // Fix any remaining broken h notation
  content = content.replace(/h\s*\n\s*t\s*\n\s*​\s*\n\s*\(x\)/g, 'hₜ(x)');
  content = content.replace(/h\s*\n\s*t\s*\n\s*​\s*\n\s*/g, 'hₜ');
  
  // Fix any remaining broken H notation
  content = content.replace(/H\s*\n\s*t\s*\n\s*​\s*\n\s*\(i\)/g, 'Hₜ(i)');
  content = content.replace(/H\s*\n\s*t\s*\n\s*​\s*\n\s*/g, 'Hₜ');
  
  // Fix any remaining broken summation notation
  content = content.replace(/i=1\s*\n\s*∑\s*\n\s*N\s*\n\s*​/g, 'Σᵢ₌₁ᴺ');
  content = content.replace(/t=1\s*\n\s*∑\s*\n\s*T\s*\n\s*​/g, 'Σₜ₌₁ᵀ');
  
  // Fix any remaining broken fraction notation
  content = content.replace(/ϵ\s*\n\s*t\s*\n\s*​\s*\n\s*\n\s*1−ϵ\s*\n\s*t\s*\n\s*​/g, 'ϵₜ/(1-ϵₜ)');
  content = content.replace(/2\s*\n\s*1\s*\n\s*​\s*\n\s*ln/g, '½ ln');
  
  // Fix any remaining broken indicator function
  content = content.replace(/I\(h\s*\n\s*t\s*\n\s*​\s*\n\s*\(x\s*\n\s*i\s*\n\s*​\s*\)\s*\n\s*\s*\n\s*=y\s*\n\s*i\s*\n\s*​\s*\)/g, 'I(hₜ(xᵢ) ≠ yᵢ)');
  
  // Fix any remaining broken mathematical symbols
  content = content.replace(/∈\{−1,\+1\}/g, '∈ {-1, +1}');
  content = content.replace(/→\{−1,\+1\}/g, '→ {-1, +1}');
  
  // Fix any remaining broken spacing in formulas
  content = content.replace(/\s*\n\s*​\s*\n\s*/g, ' ');
  
  // Fix any remaining broken line breaks in formulas
  content = content.replace(/D₁\(i\) = 1\/N\n for i=1,...,N/g, '**D₁(i) = 1/N** for **i = 1, ..., N**');
  
  // Fix any remaining broken Dₜ notation in text
  content = content.replace(/D \n t /g, '**Dₜ**');
  content = content.replace(/D \n t\+1 /g, '**Dₜ₊₁**');
  
  // Fix any remaining broken Zₜ notation
  content = content.replace(/Z \n t /g, '**Zₜ**');
  
  // Fix any remaining broken mathematical expressions
  content = content.replace(/e \n−αₜ/g, '**e^(-αₜ)**');
  content = content.replace(/e \nαₜ/g, '**e^(αₜ)**');
  
  // Fix any remaining broken mathematical expressions
  content = content.replace(/yᵢhₜ\(xᵢ\)=1/g, '**yᵢhₜ(xᵢ) = 1**');
  content = content.replace(/yᵢhₜ\(xᵢ\)=−1/g, '**yᵢhₜ(xᵢ) = -1**');
  
  // Fix any remaining broken mathematical expressions
  content = content.replace(/ϵₜ =0\.5/g, '**ϵₜ = 0.5**');
  content = content.replace(/ϵₜ→0/g, '**ϵₜ → 0**');
  content = content.replace(/ϵₜ→1/g, '**ϵₜ → 1**');
  
  // Fix any remaining broken mathematical expressions
  content = content.replace(/\(1−ϵₜ\)\/ϵₜ/g, '**(1-ϵₜ)/ϵₜ**');
  
  // Fix any remaining broken mathematical expressions
  content = content.replace(/n_estimators: This integer parameter corresponds to T/g, '**n_estimators:** This integer parameter corresponds to **T**');
  content = content.replace(/learning_rate: This float parameter, often denoted as η/g, '**learning_rate:** This float parameter, often denoted as **η**');
  content = content.replace(/base_estimator \(or estimator\):/g, '**base_estimator (or estimator):**');
  
  // Fix any remaining broken mathematical expressions
  content = content.replace(/D \n t , influence the training/g, '**Dₜ** influence the training');
  content = content.replace(/D \n t is passed directly/g, '**Dₜ** is passed directly');
  content = content.replace(/D \n t . This effectively/g, '**Dₜ**. This effectively');
  
  // Fix any remaining broken mathematical expressions
  content = content.replace(/D \n t\+1 is a valid probability distribution/g, '**Dₜ₊₁** is a valid probability distribution');
  
  // Fix any remaining broken mathematical expressions
  content = content.replace(/D \n t , influence the training of the next weak learner/g, '**Dₜ** influence the training of the next weak learner');
  content = content.replace(/D \n t is passed directly to the learner's training function/g, '**Dₜ** is passed directly to the learner\'s training function');
  content = content.replace(/D \n t . This effectively creates a new dataset/g, '**Dₜ**. This effectively creates a new dataset');
  
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
          
          content = fixFinalFormulas(content);
          
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
  console.log('\n🎉 Final formula fixing complete!');
}

// Run the script
if (require.main === module) {
  processAllFiles();
}

module.exports = { fixFinalFormulas };
