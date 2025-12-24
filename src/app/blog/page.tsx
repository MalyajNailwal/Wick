'use client';

import { motion } from 'framer-motion';
import { Calendar, Mail, Bell, ArrowRight, Newspaper, Lightbulb, TrendingUp } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Navigation from '@/components/layout/Navigation';

const BlogPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [email, setEmail] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

  const upcomingTopics = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Fleet Management Best Practices",
      description: "Expert insights on optimizing commercial vehicle operations"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-600" />,
      title: "ATES Technology Deep Dive",
      description: "Technical breakdown of our automatic tyre equalization system"
    },
    {
      icon: <Newspaper className="w-8 h-8 text-green-600" />,
      title: "Industry News & Updates",
      description: "Latest trends in commercial vehicle safety and technology"
    }
  ];

  return (
    <main className="relative">
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
              className="inline-flex items-center px-6 py-3 rounded-full bg-gray-100 border border-gray-300 text-gray-900 text-sm font-semibold mb-6"
            >
              <Bell className="w-4 h-4 mr-2" />
              Coming Soon
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6"
            >
              Wick <span className="text-primary-600">Insights</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              We&apos;re preparing valuable content about fleet management, tyre technology, 
              and commercial vehicle safety. Stay tuned for expert insights and industry updates!
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-12 mb-16 text-center shadow-xl"
          >
            <div className="max-w-3xl mx-auto">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block mb-8"
              >
                <Newspaper className="w-24 h-24 text-primary-600" />
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Blog is Under Construction
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                We&apos;re crafting high-quality content to share our expertise in fleet management, 
                tyre technology, and commercial vehicle safety. Subscribe below to be the first to know 
                when we launch!
              </p>

              {/* Newsletter Subscription */}
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
                    {isSubmitting ? 'Subscribing...' : 'Notify Me'}
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
                      <p className="text-sm">We&apos;ll notify you when our blog launches.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Upcoming Topics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              What to Expect
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here&apos;s a sneak peek at the topics we&apos;ll be covering
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingTopics.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="mb-4">{topic.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{topic.title}</h4>
                <p className="text-gray-600">{topic.description}</p>
              </motion.div>
            ))}
          </div>
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
              Have Questions in the Meantime?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Our team is here to help. Reach out to learn more about our ATES technology 
              and how it can benefit your fleet.
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
