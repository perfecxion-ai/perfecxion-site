const fs = require('fs');
const path = require('path');

// Define the structure for machine learning files
const mlStructure = {
    'fundamentals': {
        'introduction-to-machine-learning.mdx': {
            title: 'Introduction to Machine Learning: Fundamentals and Applications',
            description: 'A comprehensive guide to machine learning fundamentals, covering algorithms, training methods, and real-world applications in AI systems.',
            difficulty: 'beginner',
            format: 'learning',
            readTime: '15 min read'
        },
        'machine-learning.mdx': {
            title: 'Machine Learning: Comprehensive Guide',
            description: 'An in-depth exploration of machine learning concepts, algorithms, and practical applications.',
            difficulty: 'intermediate',
            format: 'article',
            readTime: '45 min read'
        }
    },
    'supervised-learning': {
        'linear-logistic.mdx': {
            title: 'Linear and Logistic Regression: A Comprehensive Analysis',
            description: 'Deep dive into linear and logistic regression algorithms, implementation, and real-world applications.',
            difficulty: 'intermediate',
            format: 'article',
            readTime: '40 min read'
        },
        'decision-tree-random-forest.mdx': {
            title: 'Decision Trees and Random Forests: Complete Guide',
            description: 'Comprehensive coverage of decision tree algorithms, random forests, and ensemble methods.',
            difficulty: 'intermediate',
            format: 'article',
            readTime: '35 min read'
        },
        'neural-networks.mdx': {
            title: 'Neural Networks: From Fundamentals to Advanced Applications',
            description: 'Complete guide to neural networks, deep learning, and modern AI architectures.',
            difficulty: 'advanced',
            format: 'article',
            readTime: '50 min read'
        },
        'support-vector-machines.mdx': {
            title: 'Support Vector Machines: Theory and Practice',
            description: 'Comprehensive guide to SVM algorithms, kernel methods, and practical implementations.',
            difficulty: 'intermediate',
            format: 'article',
            readTime: '30 min read'
        }
    },
    'unsupervised-learning': {
        'principal-component-analysis.mdx': {
            title: 'Principal Component Analysis: Dimensionality Reduction Guide',
            description: 'Complete guide to PCA for dimensionality reduction, feature extraction, and data visualization.',
            difficulty: 'intermediate',
            format: 'article',
            readTime: '25 min read'
        },
        'k-means-cluster.mdx': {
            title: 'K-Means Clustering: Algorithm and Applications',
            description: 'Comprehensive guide to K-means clustering, implementation, and real-world use cases.',
            difficulty: 'intermediate',
            format: 'article',
            readTime: '20 min read'
        },
        'hierarchical-clustering.mdx': {
            title: 'Hierarchical Clustering: Methods and Applications',
            description: 'Complete guide to hierarchical clustering algorithms, dendrograms, and clustering strategies.',
            difficulty: 'intermediate',
            format: 'article',
            readTime: '25 min read'
        },
        'dbscan.mdx': {
            title: 'DBSCAN: Density-Based Clustering Algorithm',
            description: 'Comprehensive guide to DBSCAN clustering, advantages, and practical applications.',
            difficulty: 'intermediate',
            format: 'article',
            readTime: '20 min read'
        }
    },
    'ensemble': {
        'random-forest.mdx': {
            title: 'Random Forests: Ensemble Learning Mastery',
            description: 'Complete guide to random forest algorithms, implementation, and advanced techniques.',
            difficulty: 'intermediate',
            format: 'article',
            readTime: '25 min read'
        },
        'gradient-boosting.mdx': {
            title: 'Gradient Boosting: Advanced Ensemble Methods',
            description: 'Deep dive into gradient boosting algorithms, XGBoost, and performance optimization.',
            difficulty: 'advanced',
            format: 'article',
            readTime: '30 min read'
        },
        'adaboost.mdx': {
            title: 'AdaBoost: Adaptive Boosting Algorithm',
            description: 'Comprehensive guide to AdaBoost, weak learners, and ensemble performance.',
            difficulty: 'intermediate',
            format: 'article',
            readTime: '25 min read'
        }
    },
    'other': {
        'reinforcement-learning.mdx': {
            title: 'Reinforcement Learning: AI Agents and Decision Making',
            description: 'Complete guide to reinforcement learning, Q-learning, and autonomous AI systems.',
            difficulty: 'advanced',
            format: 'article',
            readTime: '40 min read'
        },
        'naive-bayes.mdx': {
            title: 'Naive Bayes: Probabilistic Classification',
            description: 'Comprehensive guide to Naive Bayes algorithms, applications, and implementation.',
            difficulty: 'beginner',
            format: 'article',
            readTime: '20 min read'
        },
        'k-nearest-neighbors.mdx': {
            title: 'K-Nearest Neighbors: Simple Yet Powerful Classification',
            description: 'Complete guide to KNN algorithm, distance metrics, and practical applications.',
            difficulty: 'beginner',
            format: 'article',
            readTime: '25 min read'
        }
    }
};

function generateFrontmatter(filename, metadata) {
    const tags = [
        'Machine Learning',
        'AI',
        metadata.difficulty === 'beginner' ? 'Fundamentals' :
            metadata.difficulty === 'intermediate' ? 'Advanced' : 'Expert',
        metadata.format === 'learning' ? 'Learning' : 'Article'
    ];

    // Add specific tags based on filename
    if (filename.includes('neural')) tags.push('Neural Networks', 'Deep Learning');
    if (filename.includes('clustering')) tags.push('Clustering', 'Unsupervised Learning');
    if (filename.includes('regression')) tags.push('Regression', 'Supervised Learning');
    if (filename.includes('classification')) tags.push('Classification', 'Supervised Learning');
    if (filename.includes('ensemble')) tags.push('Ensemble Methods');
    if (filename.includes('reinforcement')) tags.push('Reinforcement Learning');

    return `---
title: '${metadata.title}'
description: '${metadata.description}'
date: '2025-01-21'
author: 'perfecXion AI Team'
category: 'machine-learning'
domain: 'machine-learning'
format: '${metadata.format}'
difficulty: '${metadata.difficulty}'
readTime: '${metadata.readTime}'
tags:
${tags.map(tag => `  - ${tag}`).join('\n')}
---

`;
}

function fixMachineLearningFiles() {
    const basePath = 'content/knowledge/machine-learning';

    for (const [category, files] of Object.entries(mlStructure)) {
        const categoryPath = path.join(basePath, category);

        if (!fs.existsSync(categoryPath)) {
            fs.mkdirSync(categoryPath, { recursive: true });
        }

        for (const [filename, metadata] of Object.entries(files)) {
            const newPath = path.join(categoryPath, filename);

            // Find the actual file in the directory (might have different name/extension)
            const actualFiles = fs.readdirSync(categoryPath);
            let sourceFile = null;

            // Look for files that match our target (ignoring extensions)
            for (const actualFile of actualFiles) {
                const baseName = actualFile.replace(/\.(md|mdx)$/, '');
                const targetBaseName = filename.replace(/\.(md|mdx)$/, '');

                if (baseName === targetBaseName) {
                    sourceFile = actualFile;
                    break;
                }
            }

            if (sourceFile) {
                const sourcePath = path.join(categoryPath, sourceFile);
                console.log(`Processing: ${sourcePath} → ${filename}`);

                // Read the content
                let content = fs.readFileSync(sourcePath, 'utf8');

                // Add frontmatter if it doesn't exist
                if (!content.startsWith('---')) {
                    const frontmatter = generateFrontmatter(filename, metadata);
                    content = frontmatter + content;
                }

                // Write the new file
                fs.writeFileSync(newPath, content, 'utf8');

                // Remove old file if it was renamed
                if (sourcePath !== newPath) {
                    fs.unlinkSync(sourcePath);
                    console.log(`  Renamed: ${sourceFile} → ${filename}`);
                } else {
                    console.log(`  Updated: ${filename}`);
                }
            } else {
                console.log(`File not found for: ${filename}`);
            }
        }
    }

    console.log('\nMachine learning files have been fixed!');
}

// Run the script
fixMachineLearningFiles();
