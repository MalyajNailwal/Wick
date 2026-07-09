'use client';

import { motion } from 'framer-motion';
import { Shield, Fuel, Clock, Truck, CheckCircle, ArrowRight, Phone, Settings, TrendingUp, AlertTriangle, Gauge, Wrench } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import RelatedLinks from '@/components/seo/RelatedLinks';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const fadeInUp = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function InflationTrailerPage() {
  const stats = [
    { value: '50+', label: 'Fleet Operators Trust Us' },
    { value: '20%+', label: 'Longer Trailer Tyre Life' },
    { value: '2%+', label: 'Fuel Savings' },
    { value: '144 hrs', label: 'Downtime Saved Per Trailer/Year' },
  ];

  const trailerProblems = [
    {
      icon: AlertTriangle,
      title: 'Multi-Axle Pressure Imbalance',
      description: 'Trailers have 8-18 tyres across multiple axles. Pressure loss on any single wheel affects stability, braking, and tyre replacement cost across the entire trailer.',
    },
    {
      icon: Clock,
      title: 'No Driver Monitoring',
      description: 'Unlike trucks, trailers have no driver坐在旁边 to notice pressure issues. By the time a problem is visible, significant damage may have already occurred.',
    },
    {
      icon: TrendingUp,
      title: 'Heavy Load Stress',
      description: 'Indian trailers regularly carry 40+ tonnes. Heavy loads increase tyre temperature and pressure variation, accelerating wear and blowout risk.',
    },
    {
      icon: Fuel,
      title: 'Highway Blowout Risk',
      description: 'A trailer tyre blowout at highway speed is one of the most dangerous incidents on Indian roads. Underinflation is the leading preventable cause.',
    },
  ];

  const howItWorks = [
    {
      icon: Gauge,
      title: 'Continuous Pressure Monitoring',
      description: 'Sensors across every trailer tyre track pressure in real time, detecting even small deviations from optimal levels.',
    },
    {
      icon: Settings,
      title: 'Automatic Air Distribution',
      description: 'Manifolds distribute compressed air evenly to all tyres across every axle, equalising pressure without driver intervention.',
    },
    {
      icon: Wrench,
      title: 'Rotary Air Transfer',
      description: 'Rotary unions transfer air from the stationary axle to rotating wheels, enabling pressure correction while the trailer is in motion.',
    },
    {
      icon: CheckCircle,
      title: 'Optimal Pressure Maintained',
      description: 'The system continuously adjusts to keep every tyre at the recommended pressure based on load, speed, and road conditions.',
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Prevents Trailer Blowouts',
      description: 'By maintaining correct tyre pressure at all times, the system eliminates the underinflation that causes heat build-up and blowouts on multi-axle trailers.',
    },
    {
      icon: TrendingUp,
      title: '20% Longer Trailer Tyre Life',
      description: 'Even pressure across all axles prevents uneven tread wear. Trailers using Wick ATES report 20% more kilometres per tyre set.',
    },
    {
      icon: Fuel,
      title: 'Saves Fuel on Every Trip',
      description: 'Correctly inflated trailer tyres reduce rolling resistance. Fleet operators see over 2% fuel savings per trailer across long-haul routes.',
    },
    {
      icon: Clock,
      title: '144 Hours Less Downtime',
      description: 'Fewer tyre failures means fewer roadside stops, towing charges, and delivery delays. Each trailer saves approximately 144 hours annually.',
    },
  ];

  const comparisonData = [
    ['Pressure maintenance', 'Manual pre-trip checks only', 'Continuous automatic correction'],
    ['Multi-axle coverage', 'Driver checks each tyre individually', 'All tyres monitored simultaneously'],
    ['Blowout prevention', 'Depends on driver catching issues', 'Automatic pressure correction prevents root cause'],
    ['Tyre life impact', 'Uneven wear across axles goes unnoticed', 'Equal pressure = even wear across all tyres'],
    ['Trailer-specific risk', 'No monitoring during haul', 'Full protection from departure to arrival'],
    ['Operating cost', 'High labour + tyre replacement cost', 'Lower long-term cost with measurable ROI'],
  ];

  const trailerTypes = [
    {
      title: 'Flatbed & Open Trailers',
      description: 'Long-haul flatbed trailers carrying heavy and oversized loads benefit from automatic pressure management across all axle positions.',
    },
    {
      title: 'Container Trailers',
      description: 'Intermodal container trailers operating at ports and logistics hubs need consistent tyre pressure for heavy container loads.',
    },
    {
      title: 'Tanker Trailers',
      description: 'Liquid and fuel tanker trailers require balanced tyre pressure for safe handling, especially with shifting liquid loads.',
    },
    {
      title: 'Refrigerated Trailers',
      description: 'Reefer trailers running long distances to maintain cold chains need reliable tyre performance to avoid delivery delays.',
    },
    {
      title: 'Tipper & Dump Trailers',
      description: 'Construction and mining tipper trailers face harsh conditions where underinflation leads to rapid tyre degradation.',
    },
    {
      title: 'Multi-Axle Heavy Haulage',
      description: 'Specialized heavy haulage trailers with 4+ axles need precise pressure balance for load distribution and road safety.',
    },
  ];

  const faqs = [
    {
      question: 'What is a trailer inflation system?',
      answer: 'A trailer inflation system automatically maintains optimal tyre pressure on commercial trailers while they are in operation. It monitors pressure across all trailer axles and equalises air automatically, preventing underinflation and blowouts without driver intervention.',
    },
    {
      question: 'Why do trailers need automatic tyre inflation more than trucks?',
      answer: 'Trailers have more tyres (8-18 per trailer), no driver monitoring the tyres during operation, carry heavy loads that stress tyres, and are more prone to undetected pressure loss. A single underinflated tyre on a trailer can cause instability, blowouts, and uneven wear across the entire axle.',
    },
    {
      question: 'How does an automatic trailer inflation system work?',
      answer: 'The system connects to the trailer air supply and uses manifolds, control valves, and rotary unions to distribute air to each tyre. It continuously monitors pressure and automatically inflates or deflates tyres to maintain optimal levels based on load and road conditions.',
    },
    {
      question: 'How much can a trailer inflation system save per year?',
      answer: 'Fleet operators typically report 20% longer tyre life, over 2% fuel savings, and 144 hours of avoided downtime per trailer annually. For a 20-trailer fleet, total annual savings can exceed Rs 20 lakhs.',
    },
    {
      question: 'Is Wick ATES compatible with multi-axle trailers?',
      answer: 'Yes. Wick TyreRakhshak ATES supports multi-axle trailer configurations using YORK RB15 axles and Pneumatic Samrat Series suspension systems. It handles 5-port and 7-port manifold configurations for different axle counts.',
    },
    {
      question: 'Can automatic inflation prevent trailer tyre blowouts?',
      answer: 'Yes. Blowouts are primarily caused by underinflation leading to heat build-up. By maintaining correct pressure at all times, the system prevents the root cause. Fleet operators report significantly fewer tyre-related incidents after installation.',
    },
    {
      question: 'How long does it take to install a trailer inflation system?',
      answer: 'Wick ATES installation on a standard trailer takes a few hours with minimal vehicle modification. The system uses 24V DC power available in commercial vehicles and does not require major changes to the trailer.',
    },
  ];

  return (
    <main id="main-content" className="relative bg-gray-50">
      <Navigation />

      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs
            items={[{ name: 'Trailer Inflation System', url: '/inflation-trailer' }]}
            className="mb-8"
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20"
            >
              <Truck className="w-4 h-4 mr-2 text-red-400" />
              <span className="text-sm font-medium">Trailer Fleet Safety Solutions</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight speakable">
              Trailer Inflation System India | Automatic Tyre Inflation for Trailers
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 speakable">
              Wick TyreRakhshak ATES is an automatic trailer inflation system designed for multi-axle commercial trailers. It maintains tyre pressure across every axle automatically, prevents blowouts, extends tyre life, and improves fuel efficiency on Indian highways.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  data-analytics-event="quote_click"
                  data-analytics-params='{"source":"inflation_trailer","cta":"hero_consultation"}'
                  className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold text-lg transition-colors"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/products"
                  data-analytics-event="quote_click"
                  data-analytics-params='{"source":"inflation_trailer","cta":"hero_products"}'
                  className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold text-lg border border-white/30 transition-colors"
                >
                  View Products
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Trailers Need Inflation Systems */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Trailers Need Automatic Tyre Inflation
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Trailers face unique tyre pressure challenges that trucks do not. Multi-axle configurations, heavy loads, and no driver monitoring make automatic inflation essential for trailer fleet safety.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {trailerProblems.map((problem, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <problem.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{problem.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How Trailer Inflation Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Trailer Inflation System Works
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The system monitors and corrects tyre pressure across every trailer axle while the vehicle is in motion, without stopping or driver intervention.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center mb-5">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Benefits of Automatic Trailer Inflation
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Wick TyreRakhshak delivers measurable savings for trailer fleets through continuous pressure management.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-red-500/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-red-500/10 rounded-xl p-3">
                      <benefit.icon className="w-8 h-8 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trailer Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trailer Types That Benefit from Automatic Inflation
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Wick ATES supports a wide range of commercial trailer configurations used across Indian logistics, construction, and transportation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {trailerTypes.map((type, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{type.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trailer Inflation vs Manual Pressure Checks
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Manual checks depend on driver time, yard access, and routine discipline. An automatic system maintains pressure consistently across every trailer tyre.
              </p>
            </motion.div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Factor</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Manual Checks</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Wick Trailer Inflation System</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonData.map(([factor, manual, ates], index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{factor}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{manual}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{ates}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trailer Fleet ROI Calculator
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See the potential savings for your trailer fleet with automatic tyre inflation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-5xl font-bold text-red-600 mb-3">Rs 2-3L</div>
                <div className="text-gray-700 font-medium mb-2">Per Trailer/Year</div>
                <div className="text-sm text-gray-500">Saved on tyre replacement costs</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-5xl font-bold text-red-600 mb-3">Rs 50K+</div>
                <div className="text-gray-700 font-medium mb-2">Per Trailer/Year</div>
                <div className="text-sm text-gray-500">Saved on fuel costs</div>
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-5xl font-bold text-red-600 mb-3">144 hrs</div>
                <div className="text-gray-700 font-medium mb-2">Per Trailer/Year</div>
                <div className="text-sm text-gray-500">Avoided downtime</div>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="text-center mt-12">
              <p className="text-lg text-gray-700 mb-6">
                For a fleet of <strong>20 trailers</strong>, total annual savings can exceed <strong className="text-red-600">Rs 20 lakhs</strong>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trailer Inflation System FAQs
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from fleet owners searching for trailer tyre inflation solutions.
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Resources */}
      <RelatedLinks
        title="Trailer Fleet Resources"
        subtitle="Explore guides that help trailer fleet owners prevent blowouts, reduce tyre costs, and improve safety."
        variant="cards"
        links={[
          {
            title: 'Best Tyre Inflation System in India',
            description: 'Compare features, prices, and ROI for automatic tyre inflation systems.',
            href: '/blog/best-tyre-inflation-system-india',
            tag: 'Buying Guide'
          },
          {
            title: 'How to Prevent Truck Tyre Blowouts',
            description: 'Learn how tyre pressure maintenance helps reduce blowout risk on Indian highways.',
            href: '/blog/how-to-prevent-truck-tyre-blowouts',
            tag: 'Safety'
          },
          {
            title: 'Wick TyreRakhshak Saves Tyres, Fuel and Downtime',
            description: 'See how fleet operators save on tyre replacement, fuel, and downtime.',
            href: '/blog/wick-tyrerakhshak-saves-tyres-fuel-downtime',
            tag: 'ROI'
          },
          {
            title: 'Trailer Tyre Safety Guide for India',
            description: 'Complete guide to trailer tyre safety, axle pressure management, and blowout prevention.',
            href: '/blog/trailer-tyre-safety-guide-india',
            tag: 'Trailer Safety'
          },
        ]}
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Upgrade Your Trailer Fleet?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Join fleet operators across India using Wick TyreRakhshak ATES for safer, more efficient trailer operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  data-analytics-event="quote_click"
                  data-analytics-params='{"source":"inflation_trailer","cta":"footer_demo"}'
                  className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold text-lg transition-colors"
                >
                  Schedule Free Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="tel:+919721601500"
                  data-analytics-event="call_click"
                  data-analytics-params='{"phone_number":"+919721601500","source":"inflation_trailer"}'
                  className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold text-lg border border-white/30 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +91 9721601500
                </a>
              </motion.div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <p className="text-sm text-gray-400 mb-4">Explore more:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/products" className="text-white/80 hover:text-white font-medium text-sm">Products</Link>
                <Link href="/technology" className="text-white/80 hover:text-white font-medium text-sm">Technology</Link>
                <Link href="/tyre-inflation-system-india" className="text-white/80 hover:text-white font-medium text-sm">Tyre Inflation System India</Link>
                <Link href="/why-wick-ates" className="text-white/80 hover:text-white font-medium text-sm">Why Choose ATES</Link>
                <Link href="/blog" className="text-white/80 hover:text-white font-medium text-sm">Blog</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}
