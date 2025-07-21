import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import matter from 'gray-matter';
import { Metadata } from 'next';
import Link from 'next/link';

function getHeadings(content: string) {
  // Extract h2/h3 headings for TOC
  const headingRegex = /^##\s+(.+)$/gm;
  const headings = [];
  let match;
  while ((match = headingRegex.exec(content))) {
    headings.push({
      text: match[1],
      id: match[1].toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    });
  }
  return headings;
}

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(postsDir);
  return files.filter(f => f.endsWith('.mdx')).map(file => ({ slug: file.replace(/\.mdx$/, '') }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const postPath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`);
  if (!fs.existsSync(postPath)) return notFound();
  const source = fs.readFileSync(postPath, 'utf8');
  const { content, data } = matter(source);
  const headings = data.toc ? getHeadings(content) : [];

  return (
    <main className="bg-background min-h-screen">
      <div className="flex justify-center px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        <article className="relative w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl bg-white dark:bg-zinc-900 rounded-2xl shadow-xl px-6 sm:px-12 py-12">
          <header className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4 leading-tight">
              {data.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-zinc-500 dark:text-zinc-400 text-sm font-medium mb-2">
              <span>{data.date}</span>
              {data.author && <span>· {data.author}</span>}
              {data.readTime && <span>· {data.readTime}</span>}
              {data.category && <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded text-xs font-semibold ml-2">{data.category}</span>}
            </div>
            {data.description && (
              <p className="text-lg text-zinc-600 dark:text-zinc-300 mt-2">{data.description}</p>
            )}
          </header>

          <div className="flex gap-12">
            {headings.length > 0 && (
              <nav className="hidden lg:block w-56 flex-shrink-0 sticky top-24 self-start">
                <div className="text-xs uppercase tracking-wider text-zinc-400 mb-4">On this page</div>
                <ul className="space-y-2">
                  {headings.map(h => (
                    <li key={h.id}>
                      <a href={`#${h.id}`} className="text-zinc-600 dark:text-zinc-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm">
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
            <div className="prose prose-lg dark:prose-invert max-w-none w-full">
              <MDXRemote source={content} />
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
