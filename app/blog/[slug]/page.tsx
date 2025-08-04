import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import matter from 'gray-matter';
import { Metadata } from 'next';
import Link from 'next/link';
import BlogPostContent from '@/components/blog/BlogPostContent';
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
  Layers,
  ShoppingCart,
  Building,
  FileText,
  TrendingUp,
  Wrench,
  Briefcase,
  Bell,
  Cloud,
  GraduationCap,
  ChevronLeft,
  Calendar,
  Clock,
  User,
  Tag,
  Star
} from 'lucide-react';
import * as mdxComponents from '@/components/mdx/icons';

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
  return files
    .filter(f => f.endsWith('.mdx') || f.endsWith('.md'))
    .map(file => ({ slug: file.replace(/\.(mdx|md)$/, '') }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // Check for both .mdx and .md files
  const mdxPath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`);
  const mdPath = path.join(process.cwd(), 'content/blog', `${slug}.md`);
  
  let postPath: string;
  if (fs.existsSync(mdxPath)) {
    postPath = mdxPath;
  } else if (fs.existsSync(mdPath)) {
    postPath = mdPath;
  } else {
    return notFound();
  }

  const source = fs.readFileSync(postPath, 'utf8');
  const { content, data } = matter(source);

  // Clean the content to remove problematic elements
  const cleanContent = cleanMdxContent(content);
  const headings = data.toc ? getHeadings(cleanContent) : [];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <>
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link href="/blog" className="hover:underline text-primary-600 dark:text-primary-400">Blog</Link>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-700 dark:text-gray-300">{data.title}</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="mb-12">
        {data.category && (
          <div className="flex items-center gap-3 mb-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${data.category.toLowerCase() === 'ai security' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' :
                data.category.toLowerCase() === 'threat analysis' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400' :
                  data.category.toLowerCase() === 'best practices' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                    data.category.toLowerCase() === 'product updates' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400' :
                      data.category.toLowerCase() === 'research' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400' :
                        data.category.toLowerCase() === 'security automation' ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400' :
                          data.category.toLowerCase() === 'strategic vision' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400' :
                            data.category.toLowerCase() === 'zero-day ai vulnerabilities' ? 'bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400' :
                              'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
              }`}>
              {data.category}
            </span>
            {data.featured && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
                <Star className="h-3 w-3 mr-1" />
                Featured
              </span>
            )}
          </div>
        )}

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
          {data.title}
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mb-6">
          {data.description}
        </p>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-6">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {formatDate(data.date)}
          </div>
          {data.readTime && (
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {data.readTime}
            </div>
          )}
          {data.author && (
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              {data.author}
            </div>
          )}
        </div>

        {/* Tags */}
        {data.tags && data.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {data.tags.map((tag: string) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Table of Contents */}
      {headings.length > 0 && (
        <div className="mb-12 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-sm">
            {headings.map((heading, index) => (
              <li key={index}>
                <a
                  href={`#${heading.id}`}
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Content */}
      <BlogPostContent>
        <div className="prose prose-lg dark:prose-invert max-w-none 
        prose-headings:font-bold prose-headings:tracking-tight
        prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-8
        prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-8
        prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-6
        prose-h4:text-xl prose-h4:mb-2 prose-h4:mt-4
        prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
        prose-strong:text-gray-900 dark:prose-strong:text-gray-100
        prose-ul:space-y-2 prose-ol:space-y-2
        prose-li:text-gray-700 dark:prose-li:text-gray-300
        prose-table:overflow-hidden prose-table:rounded-lg
        prose-thead:bg-gray-50 dark:prose-thead:bg-gray-800
        prose-tbody:bg-white dark:prose-tbody:bg-gray-900
        prose-tr:border-gray-200 dark:prose-tr:border-gray-700
        prose-th:px-6 prose-th:py-3 prose-th:text-left prose-th:text-xs prose-th:font-medium prose-th:text-gray-500 dark:prose-th:text-gray-400 prose-th:uppercase prose-th:tracking-wider
        prose-td:px-6 prose-td:py-4 prose-td:text-sm
        prose-blockquote:border-l-4 prose-blockquote:border-gray-300 dark:prose-blockquote:border-gray-600 prose-blockquote:pl-4 prose-blockquote:italic
        prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
        prose-pre:bg-gray-900 prose-pre:text-gray-100">
          <MDXRemote source={cleanContent} components={mdxComponents} />
        </div>
      </BlogPostContent>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700 mt-12">
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </div>
    </>
  );
}
