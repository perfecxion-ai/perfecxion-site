import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import matter from 'gray-matter';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Shield,
  AlertTriangle,
  Lock,
  Eye,
  Cpu,
  Database,
  Network,
  Users,
  CheckCircle,
  XCircle,
  ArrowRight,
  Info,
  AlertCircle,
  Zap,
  Target,
  Brain,
  Layers
} from 'lucide-react';

// MDX components that can be used in the content
const mdxComponents = {
  Shield,
  AlertTriangle,
  Lock,
  Eye,
  Cpu,
  Database,
  Network,
  Users,
  CheckCircle,
  XCircle,
  ArrowRight,
  Info,
  AlertCircle,
  Zap,
  Target,
  Brain,
  Layers,
  // Add any other components you want to use in MDX
};

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

function cleanMdxContent(content: string): string {
  // Remove import statements
  let cleaned = content.replace(/^import.*from.*lucide-react.*$/gm, '');

  // Remove any empty lines that might cause issues
  cleaned = cleaned.replace(/^\s*[\r\n]/gm, '');

  // Ensure proper spacing
  cleaned = cleaned.trim();

  return cleaned;
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

  // Clean the content to remove problematic elements
  const cleanContent = cleanMdxContent(content);
  const headings = data.toc ? getHeadings(cleanContent) : [];

  return (
    <main className="bg-white dark:bg-background-dark min-h-screen">
      <div className="max-width container-padding section-padding">
        <article className="relative w-full max-w-4xl mx-auto">
          <header className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
              {data.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-500 dark:text-gray-400 text-sm font-medium mb-4">
              <span>{data.date}</span>
              {data.author && <span>· {data.author}</span>}
              {data.readTime && <span>· {data.readTime}</span>}
              {data.category && (
                <span className="bg-primary-100 dark:bg-primary-900/20 text-primary-800 dark:text-primary-200 px-2 py-0.5 rounded text-xs font-semibold">
                  {data.category}
                </span>
              )}
            </div>
            {data.description && (
              <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{data.description}</div>
            )}
          </header>

          <div className="flex gap-12">
            {headings.length > 0 && (
              <nav className="hidden lg:block w-56 flex-shrink-0 sticky top-24 self-start">
                <div className="text-xs uppercase tracking-wider text-gray-400 mb-4">On this page</div>
                <ul className="space-y-2">
                  {headings.map(h => (
                    <li key={h.id}>
                      <a
                        href={`#${h.id}`}
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
            <div className="prose prose-lg dark:prose-invert max-w-none w-full">
              <MDXRemote source={cleanContent} components={mdxComponents} />
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
