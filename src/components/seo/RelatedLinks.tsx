'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';

interface RelatedLink {
  title: string;
  href: string;
  description?: string;
  tag?: string;
}

interface RelatedLinksProps {
  title?: string;
  subtitle?: string;
  links: RelatedLink[];
  variant?: 'compact' | 'cards';
  theme?: 'light' | 'dark';
  className?: string;
  linkColor?: string;
}

export default function RelatedLinks({
  title = 'Explore More',
  subtitle,
  links,
  variant = 'compact',
  theme = 'light',
  className = '',
  linkColor: linkColorProp,
}: RelatedLinksProps) {
  if (links.length === 0) return null;

  const isDark = theme === 'dark';
  const titleColor = isDark ? 'text-white' : 'text-gray-900';
  const linkColor = linkColorProp || (isDark ? 'text-primary-400 hover:text-primary-300' : 'text-primary-600 hover:text-primary-700');
  const defaultBg = isDark ? '' : 'bg-gradient-to-br from-gray-50 to-white';

  if (variant === 'cards') {
    return (
      <section className={`py-16 ${defaultBg} ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-semibold mb-4">
              <BookOpen className="w-4 h-4 mr-2" /> Learn More
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold ${titleColor} mb-4`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>{subtitle}</p>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {links.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="block p-6 bg-gray-50 rounded-xl hover:bg-red-50 hover:shadow-lg transition-all duration-300 h-full"
                >
                  {link.tag && (
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full mb-3">
                      {link.tag}
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {link.title}
                  </h3>
                  {link.description && (
                    <p className="text-gray-600 text-sm mb-4">{link.description}</p>
                  )}
                  <span className="inline-flex items-center text-red-600 font-semibold text-sm">
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Compact variant - text links in flex-wrap row
  return (
    <section className={`py-16 ${defaultBg} ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} mb-4`}>{title}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`${linkColor} underline underline-offset-4 transition-colors`}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
