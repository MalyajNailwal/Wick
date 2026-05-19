import React from 'react';
import FAQSchema from './FAQSchema';

const wickFAQs = [
  {
    question: 'What is an automatic tyre inflation system?',
    answer: 'An automatic tyre inflation system (ATES) continuously monitors and maintains optimal tyre pressure in commercial vehicles. It automatically inflates tyres when pressure drops, preventing blowouts and extending tyre life by up to 20%.',
  },
  {
    question: 'How does tyre pressure monitoring work in trucks?',
    answer: 'Tyre pressure monitoring systems use sensors to track real-time tyre pressure across all wheels. Advanced systems like ATES not only monitor but also automatically correct pressure deviations, ensuring optimal performance and safety.',
  },
  {
    question: 'What are the benefits of tyre inflation systems for fleets?',
    answer: 'Tyre inflation systems provide 20% longer tyre life, 2%+ fuel savings, reduced vehicle downtime, improved safety, and lower maintenance costs. They prevent tyre blowouts and ensure consistent optimal performance across the fleet.',
  },
  {
    question: 'How much can fleets save with automatic tyre pressure systems?',
    answer: 'Fleets typically save ₹2-3 lakhs annually per vehicle through extended tyre life, ₹50,000+ in fuel savings, and reduced downtime. The system typically pays for itself within 6-8 months.',
  },
  {
    question: 'What is the difference between TPMS and ATES?',
    answer: 'TPMS (Tyre Pressure Monitoring System) only monitors and alerts about pressure changes. ATES (Automatic Tyre Equalization System) monitors AND automatically corrects tyre pressure, providing complete tyre management without manual intervention.',
  },
  {
    question: 'Are tyre inflation systems suitable for Indian commercial vehicles?',
    answer: 'Yes, modern tyre inflation systems are specifically designed for Indian road conditions, handling dust, heat, and challenging terrains while maintaining consistent tyre pressure for trucks and trailers.',
  },
  {
    question: 'How to choose the best tyre management system for trucks?',
    answer: 'Consider factors like automatic pressure correction, real-time monitoring, India-specific design, proven ROI, local support, and compatibility with your fleet. Look for systems offering 20%+ tyre life extension and measurable fuel savings.',
  },
  {
    question: 'What maintenance is required for tyre inflation systems?',
    answer: 'Quality tyre inflation systems require minimal maintenance - typically annual inspections and component checks. Advanced systems are designed for harsh Indian conditions with robust, low-maintenance components.',
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