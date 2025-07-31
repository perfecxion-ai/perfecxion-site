import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag as TagIcon, ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Blog - AI Security Insights',
  description: 'Latest insights, news, and updates from the perfecXion.ai team.',
};

interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  readTime?: string;
  description?: string;
  author?: string;
  tags?: string[];
  category?: string;
  featured?: boolean;
}

// Define valid tags
const validTags = {
  'ai-security': 'AI Security',
  'neural-networks': 'Neural Networks',
  'llm-security': 'LLM Security',
  'prompt-injection': 'Prompt Injection',
  'owasp': 'OWASP',
  'machine-learning': 'Machine Learning'
};

export async function generateStaticParams() {
  return Object.keys(validTags).map((tag) => ({
    tag: tag,
  }));
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const tagSlug = params.tag;
  const tagName = validTags[tagSlug as keyof typeof validTags];
  
  if (!tagName) {
    notFound();
  }

  const postsDir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(postsDir);
  const allPosts: BlogPostMeta[] = files.filter(f => f.endsWith('.mdx')).map(file => {
    const source = fs.readFileSync(path.join(postsDir, file), 'utf8');
    const { data } = matter(source);
    return {
      slug: file.replace(/\.mdx$/, ''),
      title: data.title || '',
      date: data.date || '',
      readTime: data.readTime,
      description: data.description,
      author: data.author,
      tags: data.tags || [],
      category: data.category,
      featured: data.featured || false,
    };
  });

  // Filter posts by tag
  const posts = allPosts.filter(post => 
    post.tags && post.tags.some(tag => tag.toLowerCase() === tagName.toLowerCase())
  );

  // Sort posts by date (newest first)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      {/* Header */}
      <div className="mb-12">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to all posts
        </Link>
        <div className="flex items-center gap-3 mb-6">
          <TagIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            {tagName}
          </h1>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'} tagged with "{tagName}"
        </p>
      </div>

      {/* Posts Grid */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-200 hover:shadow-md h-full flex flex-col">
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}</span>
                  </div>
                  {post.readTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3 flex-grow">
                  {post.description}
                </p>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map(tag => (
                      <span 
                        key={tag} 
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          tag === tagName 
                            ? 'bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-400' 
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium mt-auto">
                  Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            No posts found with this tag.
          </p>
        </div>
      )}
    </>
  );
}