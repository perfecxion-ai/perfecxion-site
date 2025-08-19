const fs = require('fs');
const path = require('path');

// Function to fix broken mathematical formulas - improved version
function fixMathematicalFormulasV2(content) {
  // Fix broken spacing and line breaks in formulas
  content = content.replace(/D₁\(i\) = 1\/N\n for i=1,...,N/g, '**D₁(i) = 1/N** for **i = 1, ..., N**');
  
  // Fix broken Dₜ notation
  content = content.replace(/D \n t /g, 'Dₜ');
  content = content.replace(/Dₜ\(i\) is the weight of sample i at iteration t/g, '**Dₜ(i)** is the weight of sample **i** at iteration **t**');
  
  // Fix broken hₜ notation
  content = content.replace(/hₜ\(x\)→ \{-1, \+1\}/g, '**hₜ(x) → {-1, +1}**');
  content = content.replace(/hₜis calculated/g, '**hₜ** is calculated');
  content = content.replace(/hₜis calculated as the sum of the weights/g, '**hₜ** is calculated as the sum of the weights');
  
  // Fix broken ϵₜ notation
  content = content.replace(/ϵₜ = \nΣᵢ₌₁ᴺ\n Dₜ\(i\)⋅I\(hₜ\(xᵢ\)\n\n=yᵢ\)/g, '**ϵₜ = Σᵢ₌₁ᴺ Dₜ(i) · I(hₜ(xᵢ) ≠ yᵢ)**');
  content = content.replace(/ϵₜis a value between 0 and 1/g, '**ϵₜ** is a value between 0 and 1');
  
  // Fix broken αₜ notation
  content = content.replace(/αₜ = \n½ ln\( \nϵₜ1−ϵₜ​\n \)/g, '**αₜ = ½ ln(ϵₜ/(1-ϵₜ))**');
  content = content.replace(/αₜis proportional/g, '**αₜ** is proportional');
  content = content.replace(/αₜ = \n½ ln\(1\)=0/g, '**αₜ = ½ ln(1) = 0**');
  content = content.replace(/αₜ→∞/g, '**αₜ → ∞**');
  content = content.replace(/αₜ→−∞/g, '**αₜ → -∞**');
  
  // Fix broken Dₜ₊₁ notation
  content = content.replace(/D \n t\+1 \(i\)= \nZ \n t Dₜ\(i\)⋅e \n−yᵢαₜhₜ\(xᵢ\)/g, '**Dₜ₊₁(i) = (1/Zₜ) Dₜ(i) · e^(-yᵢαₜhₜ(xᵢ))**');
  content = content.replace(/where Z \n t is a normalization factor/g, 'where **Zₜ** is a normalization factor');
  content = content.replace(/Z \n t =∑ \ni=1\nN Dₜ\(i\)⋅e \n−yᵢαₜhₜ\(xᵢ\)/g, '**Zₜ = Σᵢ₌₁ᴺ Dₜ(i) · e^(-yᵢαₜhₜ(xᵢ))**');
  
  // Fix broken H(x) notation
  content = content.replace(/H\(x\)=sign\( \nΣₜ₌₁ᵀ\n αₜhₜ\(x\)\)/g, '**H(x) = sign(Σₜ₌₁ᵀ αₜhₜ(x))**');
  
  // Fix broken learning rate formula
  content = content.replace(/H\(x\)=sign\(∑ \nt=1\nT ηαₜhₜ\(x\)\)/g, '**H(x) = sign(Σₜ₌₁ᵀ ηαₜhₜ(x))**');
  
  // Fix broken Dₜ notation in text
  content = content.replace(/D \n t , influence/g, '**Dₜ** influence');
  content = content.replace(/D \n t , is passed/g, '**Dₜ** is passed');
  content = content.replace(/D \n t , is formed/g, '**Dₜ** is formed');
  
  // Fix broken mathematical expressions
  content = content.replace(/yᵢhₜ\(xᵢ\)=1/g, '**yᵢhₜ(xᵢ) = 1**');
  content = content.replace(/yᵢhₜ\(xᵢ\)=−1/g, '**yᵢhₜ(xᵢ) = -1**');
  content = content.replace(/e \n−αₜ/g, '**e^(-αₜ)**');
  content = content.replace(/e \nαₜ/g, '**e^(αₜ)**');
  
  // Fix broken section headers
  content = content.replace(/Step 1: Initialize Sample Weights/g, '#### Step 1: Initialize Sample Weights');
  content = content.replace(/Step 2: Iterative Learning \(for t=1 to T\)/g, '#### Step 2: Iterative Learning (for t=1 to T)');
  content = content.replace(/Step 3: Final Prediction/g, '#### Step 3: Final Prediction');
  
  // Fix broken subsection headers
  content = content.replace(/a\. Train Weak Learner:/g, '**a. Train Weak Learner:**');
  content = content.replace(/b\. Calculate Weighted Error \(ϵₜ\):/g, '**b. Calculate Weighted Error (ϵₜ):**');
  content = content.replace(/c\. Calculate Classifier Importance \(αₜ\):/g, '**c. Calculate Classifier Importance (αₜ):**');
  content = content.replace(/d\. Update Sample Weights:/g, '**d. Update Sample Weights:**');
  content = content.replace(/e\. Normalize Weights:/g, '**e. Normalize Weights:**');
  
  // Fix broken section headers
  content = content.replace(/2\.3 The Role of Key Hyperparameters/g, '### 2.3 The Role of Key Hyperparameters');
  content = content.replace(/2\.4 The Iterative Training Process: Learning from Mistakes/g, '### 2.4 The Iterative Training Process: Learning from Mistakes');
  content = content.replace(/Section 3: Practical Implementation/g, '## Section 3: Practical Implementation');
  content = content.replace(/3\.1 Data Requirements and Preprocessing/g, '### 3.1 Data Requirements and Preprocessing');
  
  // Fix broken subsection headers
  content = content.replace(/Data Types:/g, '**Data Types:**');
  content = content.replace(/Preprocessing for Categorical Data:/g, '**Preprocessing for Categorical Data:**');
  
  // Fix broken mathematical notation in hyperparameters
  content = content.replace(/n_estimators: This integer parameter corresponds to T/g, '**n_estimators:** This integer parameter corresponds to **T**');
  content = content.replace(/learning_rate: This float parameter, often denoted as η/g, '**learning_rate:** This float parameter, often denoted as **η**');
  content = content.replace(/base_estimator \(or estimator\):/g, '**base_estimator (or estimator):**');
  
  // Fix broken mathematical expressions in explanations
  content = content.replace(/\(1−ϵₜ\)\/ϵₜ/g, '**(1-ϵₜ)/ϵₜ**');
  content = content.replace(/ϵₜ =0\.5/g, '**ϵₜ = 0.5**');
  content = content.replace(/ϵₜ→0/g, '**ϵₜ → 0**');
  content = content.replace(/ϵₜ→1/g, '**ϵₜ → 1**');
  
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
          
          content = fixMathematicalFormulasV2(content);
          
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
  console.log('\n🎉 Mathematical formula fixing V2 complete!');
}

// Run the script
if (require.main === module) {
  processAllFiles();
}

module.exports = { fixMathematicalFormulasV2 };
