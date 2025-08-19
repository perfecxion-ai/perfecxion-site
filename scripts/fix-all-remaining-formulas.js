const fs = require('fs');
const path = require('path');

// Function to fix all remaining broken formulas
function fixAllRemainingFormulas(content) {
    // Fix broken mathematical expressions with line breaks and spaces

    // Fix broken subscript notation
    content = content.replace(/p \n i/g, 'pᵢ');
    content = content.replace(/q \n i/g, 'qᵢ');
    content = content.replace(/n \n i/g, 'nᵢ');
    content = content.replace(/x \n i/g, 'xᵢ');
    content = content.replace(/y \n i/g, 'yᵢ');
    content = content.replace(/z \n i/g, 'zᵢ');

    // Fix broken superscript notation
    content = content.replace(/n \n 2/g, 'n²');
    content = content.replace(/n \n 3/g, 'n³');
    content = content.replace(/p \n 2/g, 'p²');
    content = content.replace(/p \n 3/g, 'p³');

    // Fix broken summation notation
    content = content.replace(/i=1 \n/g, 'i=1');
    content = content.replace(/j=1 \n/g, 'j=1');
    content = content.replace(/k=1 \n/g, 'k=1');
    content = content.replace(/t=1 \n/g, 't=1');

    // Fix broken complexity notation
    content = content.replace(/O\(n \n 2\)/g, 'O(n²)');
    content = content.replace(/O\(n \n 3\)/g, 'O(n³)');
    content = content.replace(/O\(N \n 2\)/g, 'O(N²)');
    content = content.replace(/O\(N \n 3\)/g, 'O(N³)');
    content = content.replace(/O\(n \n logn\)/g, 'O(n log n)');
    content = content.replace(/O\(N \n logN\)/g, 'O(N log N)');

    // Fix broken matrix notation
    content = content.replace(/n×n/g, 'n×n');
    content = content.replace(/n×p/g, 'n×p');
    content = content.replace(/N×N/g, 'N×N');

    // Fix broken mathematical expressions
    content = content.replace(/n \n 0 ,n \n 1 ,…,n/g, 'n₀, n₁, …, n');
    content = content.replace(/L n \n l−1 ⋅n/g, 'L nₗ₋₁ · n');

    // Fix broken distance function notation
    content = content.replace(/D\(A,B\)=min/g, 'D(A,B) = min');

    // Fix broken fraction notation
    content = content.replace(/p \n i −q \n i/g, 'pᵢ - qᵢ');

    // Fix broken mathematical symbols
    content = content.replace(/∈\{−1,\+1\}/g, '∈ {-1, +1}');
    content = content.replace(/→\{−1,\+1\}/g, '→ {-1, +1}');

    // Fix any remaining broken spacing in formulas
    content = content.replace(/\s*\n\s*​\s*\n\s*/g, ' ');

    // Fix broken mathematical expressions with line breaks
    content = content.replace(/∑ \nt=1\nT /g, 'Σₜ₌₁ᵀ');
    content = content.replace(/∑ \ni=1\nN /g, 'Σᵢ₌₁ᴺ');
    content = content.replace(/∑ \nj=1\nM /g, 'Σⱼ₌₁ᴹ');

    // Fix broken exponential expressions
    content = content.replace(/e \n−αₜ/g, 'e^(-αₜ)');
    content = content.replace(/e \nαₜ/g, 'e^(αₜ)');

    // Fix broken mathematical expressions
    content = content.replace(/yᵢhₜ\(xᵢ\)=1/g, 'yᵢhₜ(xᵢ) = 1');
    content = content.replace(/yᵢhₜ\(xᵢ\)=−1/g, 'yᵢhₜ(xᵢ) = -1');

    // Fix broken epsilon expressions
    content = content.replace(/ϵₜ =0\.5/g, 'ϵₜ = 0.5');
    content = content.replace(/ϵₜ→0/g, 'ϵₜ → 0');
    content = content.replace(/ϵₜ→1/g, 'ϵₜ → 1');

    // Fix broken fraction expressions
    content = content.replace(/\(1−ϵₜ\)\/ϵₜ/g, '(1-ϵₜ)/ϵₜ');

    // Fix broken hyperparameter descriptions
    content = content.replace(/n_estimators: This integer parameter corresponds to T/g, '**n_estimators:** This integer parameter corresponds to **T**');
    content = content.replace(/learning_rate: This float parameter, often denoted as η/g, '**learning_rate:** This float parameter, often denoted as **η**');
    content = content.replace(/base_estimator \(or estimator\):/g, '**base_estimator (or estimator):**');

    // Fix broken mathematical expressions in explanations
    content = content.replace(/D \n t , influence the training/g, '**Dₜ** influence the training');
    content = content.replace(/D \n t is passed directly/g, '**Dₜ** is passed directly');
    content = content.replace(/D \n t . This effectively/g, '**Dₜ**. This effectively');

    // Fix broken mathematical expressions
    content = content.replace(/D \n t\+1 is a valid probability distribution/g, '**Dₜ₊₁** is a valid probability distribution');

    // Fix broken mathematical expressions in explanations
    content = content.replace(/D \n t , influence the training of the next weak learner/g, '**Dₜ** influence the training of the next weak learner');
    content = content.replace(/D \n t is passed directly to the learner's training function/g, '**Dₜ** is passed directly to the learner\'s training function');
    content = content.replace(/D \n t . This effectively creates a new dataset/g, '**Dₜ**. This effectively creates a new dataset');

    // Fix broken mathematical expressions
    content = content.replace(/D \n t , influence/g, '**Dₜ** influence');
    content = content.replace(/D \n t , is passed/g, '**Dₜ** is passed');
    content = content.replace(/D \n t , is formed/g, '**Dₜ** is formed');

    // Fix broken mathematical expressions
    content = content.replace(/−yᵢαₜhₜ\(xᵢ\), is key/g, '**-yᵢαₜhₜ(xᵢ)**, is key');
    content = content.replace(/−yᵢαₜhₜ\(xᵢ\)/g, '**-yᵢαₜhₜ(xᵢ)**');

    // Fix broken section headers
    content = content.replace(/3\.2 Computational Complexity/g, '### 3.2 Computational Complexity');

    // Fix any remaining broken mathematical notation in explanations
    content = content.replace(/ϵₜ =0\.5/g, 'ϵₜ = 0.5');
    content = content.replace(/ϵₜ→0/g, 'ϵₜ → 0');
    content = content.replace(/ϵₜ→1/g, 'ϵₜ → 1');

    // Fix any remaining broken mathematical expressions in hyperparameters
    content = content.replace(/n_estimators: This integer parameter corresponds to T/g, '**n_estimators:** This integer parameter corresponds to **T**');
    content = content.replace(/learning_rate: This float parameter, often denoted as η/g, '**learning_rate:** This float parameter, often denoted as **η**');
    content = content.replace(/base_estimator \(or estimator\):/g, '**base_estimator (or estimator):**');

    // Fix any remaining broken mathematical expressions in explanations
    content = content.replace(/\(1−ϵₜ\)\/ϵₜ/g, '(1-ϵₜ)/ϵₜ');

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

    // Fix remaining broken line breaks in formulas
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

    // Fix the specific broken patterns I found
    content = content.replace(/t Dₜ\(i\)⋅e/g, '**t Dₜ(i) · e**');
    content = content.replace(/t =\*\*Σᵢ₌₁ᴺ\*\* Dₜ\(i\)⋅e/g, '**t = Σᵢ₌₁ᴺ Dₜ(i) · e**');

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

                    content = fixAllRemainingFormulas(content);

                    if (content !== originalContent) {
                        fs.writeFileSync(fullPath, content, 'utf8');
                        console.log(`  ✅ Fixed all remaining formulas in: ${item}`);
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
    console.log('\n🎉 All remaining formula fixing complete!');
}

// Run the script
if (require.main === module) {
    processAllFiles();
}

module.exports = { fixAllRemainingFormulas };
