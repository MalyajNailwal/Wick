'use client';

import { motion } from 'framer-motion';
import { Calendar, Mail, ArrowRight, Clock, Tag, Newspaper } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import { getAllPosts } from '@/lib/blog-data';

const BlogPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [email, setEmail] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const posts = getAllPosts();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setShowSuccessMessage(true);
        setEmail('');
        setTimeout(() => setShowSuccessMessage(false), 5000);
      } else {
        setErrorMessage(data.error || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative bg-white">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-red-50 border border-red-200 text-red-700 text-sm font-semibold mb-6"
            >
              <Newspaper className="w-4 h-4 mr-2" />
              Wick Insights
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6"
            >
              <span style={{ color: '#b61212' }}>Wick</span>{' '}
              <span className="text-primary-600">Insights</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Expert insights on fleet management, tyre technology, and commercial vehicle
              safety. Stay connected — new articles published regularly.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col group-hover:-translate-y-1">
                    {/* Card Header */}
                    <div className="bg-gradient-to-br from-red-50 to-red-100 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-white text-red-700 text-xs font-semibold border border-red-200">
                          {post.category}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors leading-snug">
                        {post.title}
                      </h2>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(post.date).toLocaleDateString('en-IN', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </span>
                        </div>
                        <span className="flex items-center gap-1 text-red-500 font-medium group-hover:gap-2 transition-all">
                          Read
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2 py-0.5 rounded-full bg-gray-50 text-gray-500 text-xs"
                          >
                            <Tag className="w-2.5 h-2.5 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}

            {/* More coming soon card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: posts.length * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-dashed border-gray-300 p-8 h-full flex flex-col items-center justify-center text-center min-h-[320px]">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                  <Newspaper className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-700 mb-2">More Articles Coming</h3>
                <p className="text-sm text-gray-500 mb-4">
                  We're working on more content about fleet management, ATES technology, and
                  industry trends. Stay connected!
                </p>
                <span className="text-xs text-gray-400 font-medium">
                  Subscribe below to get notified
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Never Miss an Update
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Subscribe to Wick Insights and get the latest on tyre technology, fleet safety,
              and commercial vehicle innovation delivered to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    disabled={isSubmitting}
                    className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-red-500 focus:outline-none text-gray-900 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-red-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-300 flex items-center justify-center whitespace-nowrap disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
                </motion.button>
              </div>
            </form>

            {errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 bg-red-100 border-2 border-red-500 text-red-800 px-6 py-3 rounded-2xl inline-flex items-center"
              >
                <span>{errorMessage}</span>
              </motion.div>
            )}

            {showSuccessMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 bg-green-100 border-2 border-green-500 text-green-800 px-6 py-4 rounded-2xl inline-flex items-center shadow-lg"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="font-bold">Successfully Subscribed!</p>
                    <p className="text-sm">We'll notify you when new articles are published.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Have Questions?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Our team is here to help. Reach out to learn more about our ATES technology and
              how it can benefit your fleet.
            </p>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-black text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-gray-900"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
