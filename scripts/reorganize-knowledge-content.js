#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Define the new category structure
const newCategories = {
    'machine-learning': {
        description: 'Machine Learning fundamentals, algorithms, and applications',
        subcategories: ['fundamentals', 'algorithms', 'applications', 'training', 'evaluation']
    },
    'ai-security': {
        description: 'AI security, threat detection, and defense strategies',
        subcategories: ['threats', 'defense', 'red-team', 'fundamentals', 'vulnerabilities']
    },
    'ai-networking': {
        description: 'AI networking, interconnect technologies, and performance',
        subcategories: ['interconnects', 'performance', 'topology', 'protocols', 'optimization']
    },
    'ai-infrastructure': {
        description: 'AI infrastructure, scaling, and deployment',
        subcategories: ['architecture', 'scaling', 'deployment', 'monitoring', 'mlops']
    },
    'compliance': {
        description: 'Regulatory compliance, governance, and audit frameworks',
        subcategories: ['regulations', 'standards', 'auditing', 'governance', 'frameworks']
    },
    'operations': {
        description: 'Security operations, incident response, and risk management',
        subcategories: ['incident-response', 'monitoring', 'risk-management', 'business-continuity', 'enterprise']
    }
};

// Content mapping rules
const contentMapping = {
    // Security content
    'security/fundamentals': 'ai-security/fundamentals',
    'security/threats': 'ai-security/threats',
    'security/defense': 'ai-security/defense',
    'security/red-team': 'ai-security/red-team',

    // Infrastructure content
    'infrastructure/architecture': 'ai-infrastructure/architecture',
    'infrastructure/ai-fabrics': 'ai-infrastructure/ai-fabrics',
    'infrastructure/performance': 'ai-infrastructure/performance',
    'infrastructure/scaling': 'ai-infrastructure/scaling',

    // Networking content
    'infrastructure/networking': 'ai-networking/interconnects',
    'infrastructure/performance': 'ai-networking/performance',

    // Compliance content
    'compliance/regulations': 'compliance/regulations',
    'compliance/standards': 'compliance/standards',
    'compliance/auditing': 'compliance/auditing',
    'compliance/governance': 'compliance/governance',

    // Operations content
    'industry/enterprise': 'operations/enterprise',
    'industry/healthcare': 'compliance/healthcare',
    'industry/finance': 'compliance/finance',
    'industry/government': 'compliance/government'
};

// Function to update content metadata
function updateContentMetadata(content, newDomain) {
    const frontmatter = matter(content);
    const data = frontmatter.data;

    // Update domain to new category
    data.domain = newDomain;

    // Ensure category is set correctly
    data.category = newDomain;

    // Update tags to be more specific and organized
    if (!data.tags) data.tags = [];

    // Add domain-specific tags
    const domainTags = {
        'machine-learning': ['Machine Learning', 'AI', 'ML'],
        'ai-security': ['AI Security', 'Security', 'Defense'],
        'ai-networking': ['AI Networking', 'Networking', 'Performance'],
        'ai-infrastructure': ['AI Infrastructure', 'Infrastructure', 'Deployment'],
        'compliance': ['Compliance', 'Governance', 'Regulations'],
        'operations': ['Operations', 'Security Operations', 'Risk Management']
    };

    // Add domain tags if not already present
    const domainSpecificTags = domainTags[newDomain] || [];
    domainSpecificTags.forEach(tag => {
        if (!data.tags.includes(tag)) {
            data.tags.push(tag);
        }
    });

    // Ensure tags are unique and limit to 8
    data.tags = [...new Set(data.tags)].slice(0, 8);

    // Update difficulty if not set
    if (!data.difficulty) {
        data.difficulty = 'intermediate';
    }

    // Update format if not set
    if (!data.format) {
        if (data.type === 'whitepaper') data.format = 'whitepaper';
        else if (data.type === 'learning' || data.type === 'tutorial') data.format = 'learning';
        else if (data.type === 'architecture') data.format = 'architecture';
        else data.format = 'article';
    }

    // Ensure readTime is set
    if (!data.readTime) {
        data.readTime = '5 min read';
    }

    return matter.stringify(frontmatter.content, data);
}

// Function to migrate content
function migrateContent() {
    const sourceDir = path.join(__dirname, '..', 'content-backup-2025-08-18', 'content', 'knowledge');
    const targetDir = path.join(__dirname, '..', 'content', 'knowledge');

    console.log('🚀 Starting knowledge content reorganization...');
    console.log(`Source: ${sourceDir}`);
    console.log(`Target: ${targetDir}`);

    // Create new category directories
    Object.keys(newCategories).forEach(category => {
        const categoryPath = path.join(targetDir, category);
        if (!fs.existsSync(categoryPath)) {
            fs.mkdirSync(categoryPath, { recursive: true });
        }

        // Create subcategory directories
        newCategories[category].subcategories.forEach(subcategory => {
            const subcategoryPath = path.join(categoryPath, subcategory);
            if (!fs.existsSync(subcategoryPath)) {
                fs.mkdirSync(subcategoryPath, { recursive: true });
            }
        });
    });

    // Function to recursively process directories
    function processDirectory(currentPath, relativePath = '') {
        const items = fs.readdirSync(currentPath);

        items.forEach(item => {
            const itemPath = path.join(currentPath, item);
            const itemRelativePath = path.join(relativePath, item);
            const stat = fs.statSync(itemPath);

            if (stat.isDirectory()) {
                processDirectory(itemPath, itemRelativePath);
            } else if (item.endsWith('.mdx') || item.endsWith('.md')) {
                // Process content file
                const content = fs.readFileSync(itemPath, 'utf8');

                // Determine new location based on mapping
                let newLocation = null;
                let newDomain = null;

                // Check content mapping first
                for (const [oldPath, newPath] of Object.entries(contentMapping)) {
                    if (itemRelativePath.startsWith(oldPath)) {
                        newLocation = newPath;
                        newDomain = newPath.split('/')[0];
                        break;
                    }
                }

                // If no mapping found, try to infer from content
                if (!newLocation) {
                    const frontmatter = matter(content);
                    const data = frontmatter.data;

                    // Try to infer domain from existing metadata
                    if (data.domain) {
                        newDomain = data.domain;
                        newLocation = `${newDomain}/general`;
                    } else if (data.category) {
                        newDomain = data.category;
                        newLocation = `${newDomain}/general`;
                    } else {
                        // Default to ai-security
                        newDomain = 'ai-security';
                        newLocation = 'ai-security/general';
                    }
                }

                // Create target directory if it doesn't exist
                const targetPath = path.join(targetDir, newLocation);
                if (!fs.existsSync(targetPath)) {
                    fs.mkdirSync(targetPath, { recursive: true });
                }

                // Update content metadata
                const updatedContent = updateContentMetadata(content, newDomain);

                // Write to new location
                const targetFilePath = path.join(targetPath, item);
                fs.writeFileSync(targetFilePath, updatedContent);

                console.log(`✅ Migrated: ${itemRelativePath} → ${newLocation}/${item}`);
            }
        });
    }

    // Start processing
    processDirectory(sourceDir);

    console.log('\n🎉 Content reorganization complete!');
    console.log('\n📁 New structure created:');
    Object.keys(newCategories).forEach(category => {
        console.log(`  ${category}/`);
        newCategories[category].subcategories.forEach(subcategory => {
            console.log(`    ${subcategory}/`);
        });
    });

    console.log('\n📝 Next steps:');
    console.log('1. Review the migrated content in the new structure');
    console.log('2. Update any hardcoded paths in your components');
    console.log('3. Test the new categorization system');
    console.log('4. Remove the old content directories if satisfied');
}

// Run the migration
if (require.main === module) {
    migrateContent();
}

module.exports = { migrateContent, newCategories, contentMapping };
