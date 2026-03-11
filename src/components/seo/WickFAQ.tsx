import React from 'react';
import FAQSchema from './FAQSchema';

const wickFAQs = [
  {
    question: 'What is Wick TyreRakhshak ATES?',
    answer: 'Wick TyreRakhshak is India\'s advanced Automatic Tyre Equalisation System (ATES) that maintains optimal tyre pressure in trucks and trailers, extending tyre life by 20% and improving fuel efficiency by 2%+.',
  },
  {
    question: 'How does truck inflation system work?',
    answer: 'The truck inflation system automatically monitors and maintains optimal tyre pressure across all wheels. When pressure drops, the system automatically inflates tyres to the correct pressure, preventing uneven wear and blowouts.',
  },
  {
    question: 'What are the benefits of trailer inflation system?',
    answer: 'Trailer inflation system provides 20% longer tyre life, 2%+ fuel savings, reduced downtime, improved safety, and lower maintenance costs. It prevents tyre blowouts and ensures optimal performance.',
  },
  {
    question: 'Is Wick ATES suitable for Indian road conditions?',
    answer: 'Yes, Wick ATES is specifically designed for Indian commercial vehicles and road conditions. It handles dust, heat, and challenging terrains while maintaining consistent tyre pressure.',
  },
  {
    question: 'How much does truck maintenance system cost?',
    answer: 'Wick truck maintenance system pricing varies based on vehicle type and requirements. Contact Wick at +91 9721601500 for detailed pricing and ROI calculations specific to your fleet.',
  },
  {
    question: 'Where is Wick located in India?',
    answer: 'Wick is headquartered in Faridabad, Haryana, India. We serve commercial vehicle fleets across India with our ATES technology and support services.',
  },
];

export default function WickFAQ() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <FAQSchema faqs={wickFAQs} />
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {wickFAQs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-6">
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