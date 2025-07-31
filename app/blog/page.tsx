import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag, FolderOpen } from 'lucide-react';

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

export default function BlogPage() {
  const postsDir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(postsDir);
  const posts: BlogPostMeta[] = files.filter(f => f.endsWith('.mdx')).map(file => {
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

  // Sort posts by date (newest first)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Separate featured and regular posts
  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <>
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6">
          Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
          Latest insights, news, and updates from the perfecXion.ai team.
        </p>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Posts
          </h2>
          <div className="space-y-6">
            {featuredPosts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border border-primary-200 dark:border-primary-800 rounded-lg p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                    {post.readTime && (
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Tag className="h-4 w-4" />
                      <span className="text-primary-600 dark:text-primary-400 font-medium">Featured</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {post.description}
                  </p>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map(tag => (
                        <Link 
                          key={tag} 
                          href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                          className="inline-flex items-center rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900/20 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-900/30 transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium">
                    Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* All Posts */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          All Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {regularPosts.map(post => (
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
                  {post.category && (
                    <Link 
                      href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center gap-1 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <FolderOpen className="h-4 w-4" />
                      <span>{post.category}</span>
                    </Link>
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
                    {post.tags.slice(0, 2).map(tag => (
                      <Link 
                        key={tag} 
                        href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                        className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        {tag}
                      </Link>
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
      </div>

      {/* Newsletter Signup */}
      <div className="mt-16 text-center">
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Get the latest AI security insights and updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
