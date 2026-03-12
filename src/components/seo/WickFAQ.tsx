import React from 'react';
import FAQSchema from './FAQSchema';

const wickFAQs = [
  {
    question: 'What is an automatic tire inflation system?',
    answer: 'An automatic tire inflation system (ATES) continuously monitors and maintains optimal tire pressure in commercial vehicles. It automatically inflates tires when pressure drops, preventing blowouts and extending tire life by up to 20%.',
  },
  {
    question: 'How does tire pressure monitoring work in trucks?',
    answer: 'Tire pressure monitoring systems use sensors to track real-time tire pressure across all wheels. Advanced systems like ATES not only monitor but also automatically correct pressure deviations, ensuring optimal performance and safety.',
  },
  {
    question: 'What are the benefits of tire inflation systems for fleets?',
    answer: 'Tire inflation systems provide 20% longer tire life, 2%+ fuel savings, reduced vehicle downtime, improved safety, and lower maintenance costs. They prevent tire blowouts and ensure consistent optimal performance across the fleet.',
  },
  {
    question: 'How much can fleets save with automatic tire pressure systems?',
    answer: 'Fleets typically save ₹2-3 lakhs annually per vehicle through extended tire life, ₹50,000+ in fuel savings, and reduced downtime. The system typically pays for itself within 6-8 months.',
  },
  {
    question: 'What is the difference between TPMS and ATES?',
    answer: 'TPMS (Tire Pressure Monitoring System) only monitors and alerts about pressure changes. ATES (Automatic Tire Equalization System) monitors AND automatically corrects tire pressure, providing complete tire management without manual intervention.',
  },
  {
    question: 'Are tire inflation systems suitable for Indian commercial vehicles?',
    answer: 'Yes, modern tire inflation systems are specifically designed for Indian road conditions, handling dust, heat, and challenging terrains while maintaining consistent tire pressure for trucks and trailers.',
  },
  {
    question: 'How to choose the best tire management system for trucks?',
    answer: 'Consider factors like automatic pressure correction, real-time monitoring, India-specific design, proven ROI, local support, and compatibility with your fleet. Look for systems offering 20%+ tire life extension and measurable fuel savings.',
  },
  {
    question: 'What maintenance is required for tire inflation systems?',
    answer: 'Quality tire inflation systems require minimal maintenance - typically annual inspections and component checks. Advanced systems are designed for harsh Indian conditions with robust, low-maintenance components.',
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