import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag, ArrowLeft } from 'lucide-react';
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

// Define valid categories
const validCategories = {
  'ai-security': 'AI Security',
  'threat-analysis': 'Threat Analysis',
  'best-practices': 'Best Practices',
  'product-updates': 'Product Updates',
  'research': 'Research'
};

export async function generateStaticParams() {
  return Object.keys(validCategories).map((category) => ({
    category: category,
  }));
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categorySlug = params.category;
  const categoryName = validCategories[categorySlug as keyof typeof validCategories];
  
  if (!categoryName) {
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

  // Filter posts by category
  const posts = allPosts.filter(post => 
    post.category && post.category.toLowerCase() === categoryName.toLowerCase()
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
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6">
          {categoryName}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
          {posts.length} {posts.length === 1 ? 'post' : 'posts'} in this category
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
                    {post.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-400">
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
            No posts found in this category.
          </p>
        </div>
      )}
    </>
  );
}