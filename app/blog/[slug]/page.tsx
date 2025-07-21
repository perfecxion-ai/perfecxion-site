import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import matter from 'gray-matter';

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(postsDir);
  return files.filter(f => f.endsWith('.mdx')).map(file => ({ slug: file.replace(/\.mdx$/, '') }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = params;
  const postPath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`);
  if (!fs.existsSync(postPath)) return notFound();
  const source = fs.readFileSync(postPath, 'utf8');
  const { content, data } = matter(source);
  return (
    <article className="prose dark:prose-invert mx-auto py-12">
      <h1>{data.title}</h1>
      <p className="text-gray-500 text-sm mb-8">{data.date} &mdash; {data.readTime}</p>
      <MDXRemote source={content} />
    </article>
  );
}
