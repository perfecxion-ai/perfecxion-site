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
  Tag
} from 'lucide-react';
import MermaidDiagram from '@/components/MermaidDiagram';
import MermaidCodeBlock from '@/components/MermaidCodeBlock';

// Custom pre component to handle Mermaid diagrams
const Pre = ({ children, ...props }: any) => {
  const child = children?.props?.children
  const className = children?.props?.className || ''
  
  if (className.includes('language-mermaid')) {
    return <MermaidCodeBlock>{child}</MermaidCodeBlock>
  }
  
  return <pre {...props}>{children}</pre>
}

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
  ShoppingCart,
  Building,
  FileText,
  TrendingUp,
  Wrench,
  Briefcase,
  Bell,
  Cloud,
  GraduationCap,
  Link,
  MermaidDiagram,
  pre: Pre,
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Navigation */}
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Blog
        </Link>
      </div>

      {/* Header */}
      <div className="mb-8">
        {data.category && (
          <div className="flex items-center gap-3 mb-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              data.category.toLowerCase() === 'ai security' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' :
              data.category.toLowerCase() === 'threat analysis' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400' :
              data.category.toLowerCase() === 'best practices' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
              data.category.toLowerCase() === 'product updates' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400' :
              data.category.toLowerCase() === 'research' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400' :
              data.category.toLowerCase() === 'security automation' ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-400' :
              data.category.toLowerCase() === 'strategic vision' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400' :
              'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'
            }`}>
              {data.category}
            </span>
          </div>
        )}
        
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          {data.title}
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          {data.description}
        </p>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-6">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {new Date(data.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          {data.readTime && (
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {data.readTime} min read
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

              {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <MDXRemote source={cleanContent} components={mdxComponents} />
        </div>
      </div>
  );
}
