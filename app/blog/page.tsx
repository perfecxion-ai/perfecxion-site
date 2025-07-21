import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export const metadata = {
  title: 'Blog',
  description: 'Latest insights, news, and updates from the perfecXion.ai team.',
};

export default function BlogPage() {
  const postsDir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(postsDir);
  const posts = files.filter(f => f.endsWith('.mdx')).map(file => {
    const source = fs.readFileSync(path.join(postsDir, file), 'utf8');
    const { data } = matter(source);
    return {
      slug: file.replace(/\.mdx$/, ''),
      ...data,
    };
  });
  return (
    <div className="bg-white dark:bg-background-dark min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">Blog</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">Latest insights, news, and updates from the perfecXion.ai team.</p>
        </div>
        <div className="mt-16 space-y-12">
          {posts.map(post => (
            <div key={post.slug} className="border-b pb-8">
              <Link href={`/blog/${post.slug}`} className="text-2xl font-bold text-primary-600 dark:text-primary-400 hover:underline">{post.title}</Link>
              <p className="text-gray-500 text-sm">{post.date} &mdash; {post.readTime}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
