'use client';

import { motion } from 'framer-motion';
import { Shield, Fuel, Clock, Truck, CheckCircle, ArrowRight, MapPin, Phone, Settings, TrendingUp, AlertTriangle, Gauge } from 'lucide-react';
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

export default function TyreInflationSystemIndiaPage() {
  const stats = [
    { value: '50+', label: 'Fleet Operators Trust Us' },
    { value: '20%+', label: 'Longer Tyre Life' },
    { value: '2%+', label: 'Fuel Savings' },
    { value: '144 hrs', label: 'Downtime Saved Per Vehicle/Year' },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Prevents Tyre Blowouts',
      description: 'Automatic pressure maintenance helps reduce underinflation, the main cause of tyre blowouts on Indian highways.',
    },
    {
      icon: Fuel,
      title: 'Improves Fuel Efficiency',
      description: 'Optimally inflated tyres reduce rolling resistance and help commercial fleets save fuel across long-distance routes.',
    },
    {
      icon: Clock,
      title: 'Reduces Manual Maintenance',
      description: 'No repeated manual pressure checks. Wick ATES keeps tyre pressure aligned while trucks and trailers are in operation.',
    },
    {
      icon: Truck,
      title: 'Built for Indian Commercial Vehicles',
      description: 'Compatible with trucks, trailers, YORK axles, and Pneumatic Samrat Series suspension systems used across India.',
    },
  ];

  const steps = [
    {
      icon: Gauge,
      title: 'Monitors tyre pressure',
      description: 'The system continuously tracks tyre pressure conditions for commercial vehicle wheels.',
    },
    {
      icon: Settings,
      title: 'Equalises pressure automatically',
      description: 'Air is distributed through the axle and wheel-end components to maintain balanced tyre pressure.',
    },
    {
      icon: TrendingUp,
      title: 'Maintains optimum pressure',
      description: 'Tyres stay closer to the recommended pressure range during loaded and unloaded operations.',
    },
    {
      icon: CheckCircle,
      title: 'Supports safer fleet movement',
      description: 'Fleet operators get safer journeys, lower tyre wear, reduced downtime, and better fuel efficiency.',
    },
  ];

  const applications = [
    {
      title: 'Truck tyre inflation system',
      description: 'For long-haul trucks carrying heavy loads across highways, ghats, deserts, and city distribution routes.',
    },
    {
      title: 'Trailer tyre inflation system',
      description: 'For multi-axle trailers where pressure loss on any wheel can affect safety, stability, and tyre replacement cost.',
    },
    {
      title: 'Logistics and e-commerce fleets',
      description: 'For fleets that need predictable delivery schedules, lower breakdowns, and better vehicle utilisation.',
    },
    {
      title: 'Mining and construction vehicles',
      description: 'For harsh road conditions where underinflation, heat build-up, and uneven tyre wear increase operating cost.',
    },
  ];

  const states = [
    'Maharashtra', 'Delhi NCR', 'Karnataka', 'Tamil Nadu', 'Gujarat',
    'Rajasthan', 'Uttar Pradesh', 'Haryana', 'Punjab', 'West Bengal',
    'Andhra Pradesh', 'Telangana', 'Kerala', 'Madhya Pradesh', 'Bihar',
  ];

  const faqs = [
    {
      question: 'What is a tyre inflation system in India?',
      answer: 'A tyre inflation system automatically maintains optimal tyre pressure in commercial vehicles. Wick TyreRakhshak ATES is designed for Indian trucks and trailers to improve safety, tyre life, fuel efficiency, and uptime.',
    },
    {
      question: 'Is Wick ATES suitable for Indian roads?',
      answer: 'Yes. Wick TyreRakhshak ATES is designed for Indian highway conditions, heavy loads, high temperatures, poor road surfaces, and long-distance commercial vehicle operations.',
    },
    {
      question: 'Which vehicles can use TyreRakhshak ATES?',
      answer: 'Wick ATES is compatible with commercial trucks and trailers using YORK RB15 axles and Pneumatic Samrat Series suspension systems. It is commonly used by fleet operators across India.',
    },
    {
      question: 'How does ATES help fleet operators save money?',
      answer: 'Automatic tyre pressure maintenance can help extend tyre life, reduce fuel consumption, prevent avoidable downtime, and lower maintenance labour costs across the fleet.',
    },
  ];

  return (
    <main id="main-content" className="relative bg-gray-50">
      <Navigation />

      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs
            items={[{ name: 'Tyre Inflation System India', url: '/tyre-inflation-system-india' }]}
            className="mb-8"
          />
        </div>
      </div>

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
              <MapPin className="w-4 h-4 mr-2 text-red-400" />
              <span className="text-sm font-medium">Serving Fleet Operators Across India</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Tyre Inflation System India | Automatic Tyre Equalisation System for Trucks &amp; Trailers
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 speakable">
              TyreRakhshak ATES by Wick is an advanced automatic tyre equalisation system for Indian commercial fleets. It helps maintain tyre pressure automatically, reduce blowout risk, extend tyre life, and improve fuel efficiency on highways across India.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  data-analytics-event="quote_click"
                  data-analytics-params='{"source":"tyre_inflation_system_india","cta":"hero_consultation"}'
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
                  data-analytics-params='{"source":"tyre_inflation_system_india","cta":"hero_products"}'
                  className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold text-lg border border-white/30 transition-colors"
                >
                  View Products
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why India&apos;s Fleet Operators Choose Wick ATES
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Automatic tyre inflation technology designed for Indian road conditions, extreme weather, heavy loads, and demanding fleet operations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Wick TyreRakhshak ATES Works
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The system keeps tyre pressure aligned during vehicle movement, helping fleets avoid the safety and cost problems caused by underinflated tyres.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center mb-5">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Built for Indian Fleet Operations
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Indian commercial vehicles face heavy payloads, long routes, temperature changes, and uneven road surfaces. Wick ATES is designed to support safer and more efficient operations in these conditions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: AlertTriangle,
                  title: 'Highway safety',
                  text: 'Maintaining tyre pressure helps reduce heat build-up, uneven wear, and avoidable tyre failure risk.',
                },
                {
                  icon: TrendingUp,
                  title: 'Fleet productivity',
                  text: 'Less manual checking and fewer tyre-related stoppages help vehicles stay on route for longer.',
                },
                {
                  icon: Fuel,
                  title: 'Lower operating cost',
                  text: 'Correct tyre pressure supports better mileage, longer tyre life, and reduced maintenance spend.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8"
                >
                  <item.icon className="w-10 h-10 text-red-400 mb-5" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Applications Across Commercial Fleets
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Wick TyreRakhshak ATES supports fleet operators looking for an automatic tyre inflation system for trucks, trailers, logistics fleets, mining vehicles, and construction operations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {applications.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tyre Inflation System vs Manual Tyre Pressure Checks
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Manual checks depend on driver time, yard access, and routine discipline. An automatic system helps maintain pressure more consistently while the vehicle is operating.
              </p>
            </motion.div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Factor</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Manual Checks</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Wick TyreRakhshak ATES</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ['Pressure maintenance', 'Done only during scheduled checks', 'Maintained automatically during operation'],
                    ['Fleet downtime', 'Requires manual inspection time', 'Reduces avoidable tyre-related stoppages'],
                    ['Fuel efficiency', 'Pressure can drop between checks', 'Helps keep tyres closer to optimum pressure'],
                    ['Tyre life', 'Uneven wear can go unnoticed', 'Supports longer and more even tyre life'],
                    ['Best fit', 'Small operations with simple routes', 'Commercial fleets running across India'],
                  ].map(([factor, manual, ates], index) => (
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

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pan-India Fleet Coverage
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Serving fleet operators across all major states and commercial vehicle routes in India.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
              {states.map((state, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 font-medium"
                >
                  {state}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tyre Inflation System India FAQs
              </h2>
              <p className="text-lg text-gray-600">
                Common questions from fleet owners and transport operators searching for the best tyre inflation system in India.
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

      <RelatedLinks
        title="Resources for Fleet Owners"
        subtitle="Explore guides that help Indian fleet operators compare tyre inflation systems, prevent blowouts, and improve tyre ROI."
        variant="cards"
        links={[
          {
            title: 'Trailer Inflation System India',
            description: 'Automatic tyre inflation designed for multi-axle commercial trailers.',
            href: '/inflation-trailer',
            tag: 'Trailers'
          },
          {
            title: 'Best Tyre Inflation System in India',
            description: 'Compare features, prices, and ROI for automatic tyre inflation systems.',
            href: '/blog/best-tyre-inflation-system-india',
            tag: 'Buying Guide'
          },
          {
            title: 'Automatic Tyre Inflation System vs TPMS',
            description: 'Understand the difference between automatic tyre inflation and tyre pressure monitoring.',
            href: '/blog/automatic-tyre-inflation-system-vs-tpms',
            tag: 'Comparison'
          },
          {
            title: 'How to Prevent Truck Tyre Blowouts',
            description: 'Learn how tyre pressure maintenance helps reduce blowout risk on Indian highways.',
            href: '/blog/how-to-prevent-truck-tyre-blowouts',
            tag: 'Safety'
          },
        ]}
      />

      <section className="py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Fleet?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Join fleet operators across India using Wick TyreRakhshak ATES for safer, more efficient commercial vehicle operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  data-analytics-event="quote_click"
                  data-analytics-params='{"source":"tyre_inflation_system_india","cta":"footer_demo"}'
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
                  data-analytics-params='{"phone_number":"+919721601500","source":"tyre_inflation_system_india"}'
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
                <Link href="/products" className="text-white/80 hover:text-white font-medium text-sm">
                  Products
                </Link>
                <Link href="/technology" className="text-white/80 hover:text-white font-medium text-sm">
                  Technology
                </Link>
                <Link href="/why-wick-ates" className="text-white/80 hover:text-white font-medium text-sm">
                  Why Choose ATES
                </Link>
                <Link href="/faq" className="text-white/80 hover:text-white font-medium text-sm">
                  FAQs
                </Link>
                <Link href="/blog" className="text-white/80 hover:text-white font-medium text-sm">
                  Blog
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}
