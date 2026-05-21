'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import RelatedLinks from '@/components/seo/RelatedLinks';
import { useState } from 'react';
import { faqs } from '@/lib/faq-data';

export default function FAQPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <main id="main-content" className="relative">
      <Navigation />

      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs
            items={[{ name: 'FAQ', url: '/faq' }]}
            className="mb-8"
          />
        </div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <HelpCircle className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Questions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to know about tyre inflation systems,
              tyre pressure monitoring, and commercial vehicle tyre management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((faq, index) => {
                  const globalIndex = categoryIndex * 10 + index;
                  return (
                    <motion.div
                      key={globalIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        {openFAQ === globalIndex ? (
                          <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      <motion.div
                        initial={false}
                        animate={{
                          height: openFAQ === globalIndex ? 'auto' : 0,
                          opacity: openFAQ === globalIndex ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Pages */}
      <RelatedLinks
        title="Learn More About Wick ATES"
        variant="compact"
        links={[
          { title: 'TyreRakhshak Products', href: '/products' },
          { title: 'ATES Technology', href: '/technology' },
          { title: 'Tyre Inflation Systems', href: '/tire-inflation-system' },
          { title: 'Truck Tyre Pressure Monitoring', href: '/truck-tire-pressure-monitoring' },
          { title: 'Contact Us', href: '/contact' },
        ]}
      />
    </main>
  );
}