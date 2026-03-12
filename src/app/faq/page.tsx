'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import { useState } from 'react';

export default function FAQPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      category: "Tire Inflation Systems",
      questions: [
        {
          question: 'What is an automatic tire inflation system?',
          answer: 'An automatic tire inflation system (ATES) continuously monitors and maintains optimal tire pressure in commercial vehicles. It automatically inflates tires when pressure drops, preventing blowouts and extending tire life by up to 20%.',
        },
        {
          question: 'How does tire pressure monitoring work in trucks?',
          answer: 'Tire pressure monitoring systems use sensors to track real-time tire pressure across all wheels. Advanced systems like ATES not only monitor but also automatically correct pressure deviations, ensuring optimal performance and safety.',
        },
        {
          question: 'What is the difference between TPMS and ATES?',
          answer: 'TPMS (Tire Pressure Monitoring System) only monitors and alerts about pressure changes. ATES (Automatic Tire Equalization System) monitors AND automatically corrects tire pressure, providing complete tire management without manual intervention.',
        },
      ]
    },
    {
      category: "Benefits & Savings",
      questions: [
        {
          question: 'What are the benefits of tire inflation systems for fleets?',
          answer: 'Tire inflation systems provide 20% longer tire life, 2%+ fuel savings, reduced vehicle downtime, improved safety, and lower maintenance costs. They prevent tire blowouts and ensure consistent optimal performance across the fleet.',
        },
        {
          question: 'How much can fleets save with automatic tire pressure systems?',
          answer: 'Fleets typically save ₹2-3 lakhs annually per vehicle through extended tire life, ₹50,000+ in fuel savings, and reduced downtime. The system typically pays for itself within 6-8 months.',
        },
      ]
    },
    {
      category: "Technical & Maintenance",
      questions: [
        {
          question: 'Are tire inflation systems suitable for Indian commercial vehicles?',
          answer: 'Yes, modern tire inflation systems are specifically designed for Indian road conditions, handling dust, heat, and challenging terrains while maintaining consistent tire pressure for trucks and trailers.',
        },
        {
          question: 'What maintenance is required for tire inflation systems?',
          answer: 'Quality tire inflation systems require minimal maintenance - typically annual inspections and component checks. Advanced systems are designed for harsh Indian conditions with robust, low-maintenance components.',
        },
        {
          question: 'How to choose the best tire management system for trucks?',
          answer: 'Consider factors like automatic pressure correction, real-time monitoring, India-specific design, proven ROI, local support, and compatibility with your fleet. Look for systems offering 20%+ tire life extension and measurable fuel savings.',
        },
      ]
    }
  ];

  return (
    <main className="relative">
      <Navigation />
      
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
              Everything you need to know about tire inflation systems, 
              tire pressure monitoring, and commercial vehicle tire management.
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
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
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
    </main>
  );
}