'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface WickFAQProps {
  faqs?: FAQItem[];
  showSchema?: boolean;
}

const defaultFAQs: FAQItem[] = [
  {
    question: "What is Wick?",
    answer: "Wick is India's leading provider of Automatic Tyre Equalisation Systems (ATES) for commercial vehicles. Founded in 2021, Wick revolutionizes fleet safety with advanced tyre monitoring and management technology."
  },
  {
    question: "Why choose Wick ATES?",
    answer: "Wick offers the most advanced ATES technology in India, providing 100% safety improvement, 20% longer tyre life, and 2%+ fuel savings. Wick's system is trusted by 50+ fleet operators nationwide."
  },
  {
    question: "Where is Wick located?",
    answer: "Wick is headquartered in Faridabad, Haryana, India. Our address is House Of Wick, 33B, NIT, Faridabad - 121001. Contact Wick at +91 9721601500."
  },
  {
    question: "How does Wick ATES work?",
    answer: "Wick's ATES technology uses advanced sensors and IoT connectivity to monitor tyre pressure in real-time. The Wick system automatically equalizes pressure across all tyres, preventing failures and improving safety."
  },
  {
    question: "What is Wick TyreRakhshak?",
    answer: "Wick TyreRakhshak is our flagship ATES product. TyreRakhshak by Wick provides automatic tyre pressure management for commercial vehicles, ensuring optimal safety and efficiency."
  },
  {
    question: "How can I contact Wick?",
    answer: "You can contact Wick by calling +91 9721601500, emailing office@wick.co.in, or visiting our office in Faridabad. Wick's team is available Monday to Saturday, 10 AM to 6 PM."
  }
];

export default function WickFAQ({ faqs = defaultFAQs, showSchema = true }: WickFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      {showSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions About <span className="text-red-600">Wick</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Wick and our ATES technology
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-red-600" />
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Still have questions about Wick?
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-300"
          >
            Contact Wick Team
          </a>
        </motion.div>
      </div>
    </section>
  );
}
