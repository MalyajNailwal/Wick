'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import type { BlogPost } from '@/lib/blog-data';

function renderContent(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let tableRows: string[][] = [];
  let inTable = false;
  let listItems: string[] = [];
  let inList = false;
  let i = 0;

  const flushTable = () => {
    if (tableRows.length < 2) {
      tableRows = [];
      inTable = false;
      return;
    }
    const headerRow = tableRows[0];
    const dataRows = tableRows.slice(2);
    elements.push(
      <div key={`table-${i}`} className="overflow-x-auto my-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-red-50">
              {headerRow.map((cell, ci) => (
                <th
                  key={ci}
                  className="border border-gray-200 px-4 py-3 text-left text-sm font-bold text-gray-900"
                >
                  {renderInline(cell.trim())}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataRows.map((row, ri) => (
              <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className="border border-gray-200 px-4 py-3 text-sm text-gray-700"
                  >
                    {renderInline(cell.trim())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tableRows = [];
    inTable = false;
  };

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${i}`} className="space-y-3 my-6 ml-1">
          {listItems.map((item, li) => (
            <li key={li} className="flex items-start gap-3">
              <span className="mt-2 w-2 h-2 rounded-full bg-red-500 shrink-0" />
              <span className="text-gray-700 leading-relaxed">{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      if (!inTable) {
        flushList();
        inTable = true;
      }
      tableRows.push(trimmed.split('|').filter((c) => c !== ''));
      i++;
      continue;
    } else if (inTable) {
      flushTable();
    }

    if (trimmed.startsWith('- ')) {
      if (!inList) inList = true;
      listItems.push(trimmed.slice(2));
      i++;
      continue;
    } else if (inList) {
      flushList();
    }

    if (trimmed === '---') {
      elements.push(
        <hr key={`hr-${i}`} className="my-10 border-t-2 border-gray-100" />
      );
      i++;
      continue;
    }

    if (trimmed.startsWith('### ')) {
      elements.push(
        <h3
          key={`h3-${i}`}
          className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2"
        >
          <span className="w-1 h-6 bg-red-500 rounded-full" />
          {renderInline(trimmed.slice(4))}
        </h3>
      );
      i++;
      continue;
    }

    if (trimmed.startsWith('## ')) {
      elements.push(
        <h2
          key={`h2-${i}`}
          className="text-2xl md:text-3xl font-bold text-gray-900 mt-14 mb-6"
        >
          {renderInline(trimmed.slice(3))}
        </h2>
      );
      i++;
      continue;
    }

    if (trimmed.startsWith('# ')) {
      elements.push(
        <h1 key={`h1-${i}`} className="text-3xl md:text-4xl font-bold text-gray-900 mt-8 mb-6">
          {renderInline(trimmed.slice(2))}
        </h1>
      );
      i++;
      continue;
    }

    if (trimmed.length > 0) {
      elements.push(
        <p key={`p-${i}`} className="text-gray-700 leading-relaxed mb-4 text-base">
          {renderInline(trimmed)}
        </p>
      );
    }

    i++;
  }

  flushTable();
  flushList();
  return elements;
}

function renderInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    const italicMatch = remaining.match(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/);
    const linkMatch = remaining.match(/\[(.+?)\]\((.+?)\)/);

    let firstMatch: { index: number; length: number; type: string; content: string; url?: string } | null = null;

    if (boldMatch && boldMatch.index !== undefined) {
      firstMatch = { index: boldMatch.index, length: boldMatch[0].length, type: 'bold', content: boldMatch[1] };
    }
    if (italicMatch && italicMatch.index !== undefined) {
      if (!firstMatch || italicMatch.index < firstMatch.index) {
        firstMatch = { index: italicMatch.index, length: italicMatch[0].length, type: 'italic', content: italicMatch[1] };
      }
    }
    if (linkMatch && linkMatch.index !== undefined) {
      if (!firstMatch || linkMatch.index < firstMatch.index) {
        firstMatch = { index: linkMatch.index, length: linkMatch[0].length, type: 'link', content: linkMatch[1], url: linkMatch[2] };
      }
    }

    if (!firstMatch) {
      parts.push(<span key={key++}>{remaining}</span>);
      break;
    }

    if (firstMatch.index > 0) {
      parts.push(<span key={key++}>{remaining.slice(0, firstMatch.index)}</span>);
    }

    if (firstMatch.type === 'bold') {
      parts.push(<strong key={key++} className="font-bold text-gray-900">{firstMatch.content}</strong>);
    } else if (firstMatch.type === 'italic') {
      parts.push(<em key={key++} className="italic">{firstMatch.content}</em>);
    } else if (firstMatch.type === 'link') {
      parts.push(
        <a key={key++} href={firstMatch.url} className="text-red-600 hover:text-red-700 underline" target="_blank" rel="noopener noreferrer">
          {firstMatch.content}
        </a>
      );
    }

    remaining = remaining.slice(firstMatch.index + firstMatch.length);
  }

  return parts;
}

export default function BlogPostClient({ post }: { post: BlogPost }) {
  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <main className="relative bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-gray-500 hover:text-red-600 transition-colors mb-8 text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold border border-red-100">
                {post.category}
              </span>
              <span className="inline-flex items-center text-gray-400 text-sm">
                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                {new Date(post.date).toLocaleDateString('en-IN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="inline-flex items-center text-gray-400 text-sm">
                <Clock className="w-3.5 h-3.5 mr-1.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all text-sm"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2.5 py-1 rounded-full bg-gray-100 text-gray-500 text-xs"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose-custom"
          >
            {renderContent(post.content)}
          </motion.article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Interested in TyreRakhshak for Your Fleet?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Get in touch with our team to learn how ATES can transform your fleet's tyre management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/products"
                className="inline-flex items-center justify-center bg-white text-red-600 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
              >
                Explore Products
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-black text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-900"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
