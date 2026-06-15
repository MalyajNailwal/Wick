'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Fuel, Clock, Shield, ArrowRight, Truck } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const caseStudies = [
  {
    fleet: 'North India Transport Co.',
    fleetSize: '45 vehicles (trucks + trailers)',
    industry: 'FMCG Distribution',
    location: 'Delhi NCR',
    problem: 'Frequent tyre blowouts on Delhi-Mumbai route due to extreme heat. 8-10 blowouts per month causing cargo delays and Rs 15,000+ per incident in emergency tyre replacements.',
    solution: 'Installed ATES on all 45 vehicles with real-time pressure monitoring. System automatically adjusts pressure based on load and temperature changes.',
    results: [
      { icon: <Shield className="w-5 h-5" />, label: 'Blowouts reduced', value: '90%', detail: 'From 8-10/month to less than 1/month' },
      { icon: <TrendingUp className="w-5 h-5" />, label: 'Tyre life extended', value: '22%', detail: 'Average tyre life from 14 to 17 months' },
      { icon: <Fuel className="w-5 h-5" />, label: 'Fuel savings', value: '2.5%', detail: 'Rs 1.8 lakhs saved annually per vehicle' },
      { icon: <Clock className="w-5 h-5" />, label: 'Downtime reduced', value: '140 hrs', detail: 'Annual downtime saved per vehicle' },
    ],
    testimonial: 'We were losing Rs 1.5 lakhs monthly to tyre emergencies. After ATES installation, blowouts dropped by 90% in the first quarter itself.',
    relatedBlog: 'how-to-prevent-truck-tyre-blowouts',
  },
  {
    fleet: 'Southern Logistics Pvt. Ltd.',
    fleetSize: '120 vehicles (majority trailers)',
    industry: 'Port Container Transport',
    location: 'Chennai',
    problem: 'Multi-axle trailer tyre management was manual and inconsistent. Different pressure needs per axle caused uneven wear. 30% of tyres replaced prematurely.',
    solution: 'Deployed ATES across the entire fleet with axle-specific pressure management. Each axle maintains optimal pressure based on load distribution.',
    results: [
      { icon: <TrendingUp className="w-5 h-5" />, label: 'Tyre life improved', value: '25%', detail: 'Reduced premature replacements by 60%' },
      { icon: <Fuel className="w-5 h-5" />, label: 'Fuel efficiency', value: '3%', detail: 'Rs 2.4 lakhs saved per vehicle annually' },
      { icon: <Clock className="w-5 h-5" />, label: 'Maintenance time', value: '70%', detail: 'Less time spent on manual pressure checks' },
      { icon: <Shield className="w-5 h-5" />, label: 'Safety incidents', value: 'Zero', detail: 'No tyre-related incidents in 12 months' },
    ],
    testimonial: 'Managing tyre pressure across 120 vehicles with multiple axles was our biggest headache. ATES automated the entire process and the ROI was visible within 6 months.',
    relatedBlog: 'trailer-axle-tyre-pressure-management',
  },
  {
    fleet: 'Western Carriers Group',
    fleetSize: '80 vehicles (trucks)',
    industry: 'Chemical & Industrial Transport',
    location: 'Mumbai',
    problem: 'Monsoon flooding and extreme heat cycles caused constant pressure fluctuations. Chemical cargo requires maximum safety standards. Manual monitoring was insufficient.',
    solution: 'Installed ATES with CPMS (Centralized Pressure Monitoring System) for real-time remote monitoring. Predictive maintenance alerts prevent issues before they occur.',
    results: [
      { icon: <Shield className="w-5 h-5" />, label: 'Safety compliance', value: '100%', detail: 'Met all chemical transport safety standards' },
      { icon: <TrendingUp className="w-5 h-5" />, label: 'Tyre cost reduction', value: '20%', detail: 'Rs 3.2 lakhs saved per vehicle annually' },
      { icon: <Fuel className="w-5 h-5" />, label: 'Fuel savings', value: '2.8%', detail: 'Consistent efficiency across all seasons' },
      { icon: <Clock className="w-5 h-5" />, label: 'Response time', value: '85%', detail: 'Faster issue detection via remote monitoring' },
    ],
    testimonial: 'Chemical transport demands zero tolerance for tyre failures. ATES with remote monitoring gave us the safety assurance we needed. The system has paid for itself multiple times over.',
    relatedBlog: 'monsoon-tyre-safety-india',
  },
];

export default function CaseStudiesPage() {

  return (
    <main id="main-content" className="relative bg-white">
      <Navigation />

      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs
            items={[{ name: 'Case Studies', url: '/case-studies' }]}
            className="mb-8"
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-6">
              <Truck className="w-4 h-4 mr-2" /> Real Fleet Results
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how Indian fleet operators are saving lakhs annually with Wick ATES tyre inflation system. Real numbers, real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Combined Results Across All Fleets</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '245+', label: 'Vehicles Equipped' },
              { value: '90%', label: 'Blowout Reduction' },
              { value: 'Rs 2-3L', label: 'Annual Savings Per Vehicle' },
              { value: '144 hrs', label: 'Downtime Saved Per Vehicle' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <div className="text-4xl font-bold text-red-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want Similar Results for Your Fleet?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get a free ROI analysis for your fleet. Our team will calculate your potential savings based on your fleet size and operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-red-600 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50"
              >
                Get Free ROI Analysis <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center bg-black text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-900"
              >
                View Products
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/technology" className="text-white/80 hover:text-white underline underline-offset-4 text-sm">
                How ATES Works
              </Link>
              <Link href="/why-wick-ates" className="text-white/80 hover:text-white underline underline-offset-4 text-sm">
                Why Choose Wick
              </Link>
              <Link href="/blog" className="text-white/80 hover:text-white underline underline-offset-4 text-sm">
                Fleet Management Blog
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}

function CaseStudyCard({ study, index }: { study: typeof caseStudies[0]; index: number }) {

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 text-white">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-red-600 rounded-full text-sm font-semibold">{study.industry}</span>
          <span className="px-3 py-1 bg-white/20 rounded-full text-sm">{study.location}</span>
        </div>
        <h3 className="text-2xl font-bold mb-2">{study.fleet}</h3>
        <p className="text-gray-300">{study.fleetSize}</p>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Problem */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-red-600 uppercase tracking-wide mb-2">The Challenge</h4>
          <p className="text-gray-700">{study.problem}</p>
        </div>

        {/* Solution */}
        <div className="mb-8">
          <h4 className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">The Solution</h4>
          <p className="text-gray-700">{study.solution}</p>
        </div>

        {/* Results Grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {study.results.map((result, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center gap-2 text-gray-500 mb-1">
                {result.icon}
                <span className="text-sm">{result.label}</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">{result.value}</div>
              <div className="text-sm text-gray-500">{result.detail}</div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-600">
          <p className="text-gray-700 italic">&ldquo;{study.testimonial}&rdquo;</p>
        </div>

        {/* Related Blog */}
        <div className="mt-6">
          <Link
            href={`/blog/${study.relatedBlog}`}
            className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
          >
            Read related article <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
