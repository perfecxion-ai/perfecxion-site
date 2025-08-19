const fs = require('fs');
const path = require('path');

// Function to fix final remaining broken formulas
function fixFinalFormulas(content) {
    // Fix broken subscript notation with line breaks
    content = content.replace(/x \n 2 /g, 'x₂');
    content = content.replace(/x \n max /g, 'x_max');
    content = content.replace(/x \n min /g, 'x_min');
    content = content.replace(/n \n 0 ,n \n 1 ,…,n/g, 'n₀, n₁, …, n');
    content = content.replace(/L n \n l−1 ⋅n/g, 'L nₗ₋₁ · n');

    // Fix broken Q function notation
    content = content.replace(/Q \n π/g, 'Q^π');
    content = content.replace(/Q \n ∗/g, 'Q^*');

    // Fix broken V function notation
    content = content.replace(/V \n π/g, 'V^π');

    // Fix broken similarity notation
    content = content.replace(/Similarity \n Left /g, 'Similarity_Left');
    content = content.replace(/Similarity \n Right /g, 'Similarity_Right');
    content = content.replace(/Similarity \n Root/g, 'Similarity_Root');

    // Fix broken feature notation
    content = content.replace(/X \n 1 ,…,X \n d /g, 'X₁, …, X_d');
    content = content.replace(/Y \n 1 ,…,Y \n d /g, 'Y₁, …, Y_d');
    content = content.replace(/Z \n jk =Y \n j ×Y/g, 'Z_jk = Y_j × Y');

    // Fix broken complexity notation
    content = content.replace(/O\(N \n 2\)/g, 'O(N²)');
    content = content.replace(/O\(N \n 3\)/g, 'O(N³)');
    content = content.replace(/O\(n \n 2\)/g, 'O(n²)');
    content = content.replace(/O\(n \n 3\)/g, 'O(n³)');
    content = content.replace(/O\(p \n 2\)/g, 'O(p²)');
    content = content.replace(/O\(p \n 3\)/g, 'O(p³)');

    // Fix broken matrix notation
    content = content.replace(/N×N/g, 'N×N');
    content = content.replace(/n×n/g, 'n×n');
    content = content.replace(/n×p/g, 'n×p');

    // Fix broken mathematical expressions
    content = content.replace(/P\(X∣y\)=P\(x₁,x \n 2 ,…,x/g, 'P(X|y) = P(x₁, x₂, …, x');

    // Fix broken Z matrix notation
    content = content.replace(/Z \n l /g, 'Zₗ');
    content = content.replace(/Z \n 1 /g, 'Z₁');
    content = content.replace(/Z \n 2 /g, 'Z₂');

    // Fix broken partial derivative notation
    content = content.replace(/∂Z \n l /g, '∂Zₗ');
    content = content.replace(/∂Z \n 1 /g, '∂Z₁');
    content = content.replace(/∂Z \n 2 /g, '∂Z₂');

    // Fix broken mathematical expressions with line breaks
    content = content.replace(/\n \n /g, ' ');
    content = content.replace(/\n \n /g, ' ');

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
                        console.log(`  ✅ Fixed final formulas in: ${item}`);
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
    console.log('\n🎉 Final formula cleanup complete!');
}

// Run the script
if (require.main === module) {
    processAllFiles();
}

module.exports = { fixFinalFormulas };
