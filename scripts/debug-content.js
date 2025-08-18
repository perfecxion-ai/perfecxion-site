const { loadAllContent } = require('../lib/content-loader.ts');

async function debugContent() {
  const content = await loadAllContent();
  
  console.log('Total content items:', content.length);
  console.log('\nFirst 5 items with topics:');
  
  content.slice(0, 5).forEach((item, index) => {
    console.log(`\n${index + 1}. ${item.title}`);
    console.log('   Format:', item.format);
    console.log('   Topics:', item.topics);
    console.log('   Tags from frontmatter:', item.tags || 'none');
  });
  
  // Count all unique topics
  const allTopics = new Set();
  content.forEach(item => {
    if (item.topics && Array.isArray(item.topics)) {
      item.topics.forEach(topic => allTopics.add(topic));
    }
  });
  
  console.log('\n\nAll unique topics found:', Array.from(allTopics));
  console.log('Total unique topics:', allTopics.size);
}

debugContent().catch(console.error);