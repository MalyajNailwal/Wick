import React from 'react';
import FAQSchema from './FAQSchema';

const aboutFAQs = [
  {
    question: 'What is Wick and when was it founded?',
    answer: 'Wick is India\'s pioneering company in Automatic Tire Equalization System (ATES) technology, founded in 2021. We specialize in commercial vehicle safety solutions with our flagship product TyreRakhshak.',
  },
  {
    question: 'Where is Wick located?',
    answer: 'Wick is headquartered at House Of Wick, 33B, NIT, Faridabad, Haryana 121001, India. We serve commercial vehicle fleets across India with our ATES technology and support services.',
  },
  {
    question: 'What makes Wick different from other tire monitoring companies?',
    answer: 'Wick is India\'s first company to develop ATES technology specifically for Indian road conditions. Unlike basic TPMS systems, our TyreRakhshak provides automatic tire pressure correction, not just monitoring.',
  },
  {
    question: 'How many vehicles does Wick protect?',
    answer: 'Wick currently protects 350+ commercial vehicles across India with 50+ fleet partners. Our systems have proven track record of 20% longer tire life and 2%+ fuel efficiency improvements.',
  },
  {
    question: 'What is Wick\'s mission?',
    answer: 'Our mission is to revolutionize commercial vehicle safety and efficiency through innovative technology solutions, making roads safer for everyone while helping businesses optimize their operations and reduce costs.',
  },
  {
    question: 'How can I contact Wick for business inquiries?',
    answer: 'You can contact Wick at +91-9721601500 or email us at office@wick.co.in. Our team provides personalized consultations and ROI analysis for your fleet requirements.',
  },
];

export default function AboutFAQ() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <FAQSchema faqs={aboutFAQs} />
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
        About Wick - Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {aboutFAQs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              {faq.question}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}