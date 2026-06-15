'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import {
  Truck,
  Timer,
  Route,
  TrendingDown,
  Shield,
  Fuel,
  Clock,
  Wrench,
  ArrowRight,
  CheckCircle,
  IndianRupee,
  Users,
  Phone,
  Package,
} from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
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

export default function LogisticsPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [challengesRef, challengesInView] = useInView({ threshold: 0.2 });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.2 });
  const [roiRef, roiInView] = useInView({ threshold: 0.2 });
  const [savingsRef, savingsInView] = useInView({ threshold: 0.2 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.3 });

  const challenges = [
    {
      icon: Timer,
      title: 'Missed Delivery Deadlines from Tyre Issues',
      description:
        'A single flat tyre or pressure-related breakdown can delay a delivery by 4-6 hours. For time-sensitive logistics, this means penalties, lost contracts, and damaged customer relationships.',
    },
    {
      icon: TrendingDown,
      title: 'High Fuel Costs from Underinflated Tyres',
      description:
        'Underinflated tyres increase rolling resistance by 10-15%, burning extra fuel on every kilometre. For fleets covering 5,000+ km per truck monthly, this adds up to lakhs in wasted fuel.',
    },
    {
      icon: Route,
      title: 'Long-Haul Route Variability',
      description:
        'Logistics trucks traverse highways, state borders, and varying road surfaces in a single trip. Temperature and altitude changes cause pressure fluctuations that manual checks miss.',
    },
    {
      icon: Truck,
      title: 'Large Fleet tyre Management Complexity',
      description:
        'Managing tyre pressure across 50-500 trucks is a logistical challenge. Manual checks at depots are inconsistent, and drivers often skip or rush through inspections.',
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Fewer Roadside Breakdowns',
      description:
        'Reduced breakdowns mean fewer missed deliveries and lower emergency repair costs. Fleet managers report up to 80% fewer tyre-related incidents after installing ATES.',
    },
    {
      icon: Fuel,
      title: '2%+ Fuel Savings Across the Fleet',
      description:
        'Optimally inflated tyres reduce rolling resistance on long highway hauls. For a fleet of 100 trucks, 2% fuel savings translates to Rs 20-30 lakhs annually.',
    },
    {
      icon: Clock,
      title: 'No Manual Pressure Checks',
      description:
        'Eliminate the time drivers spend at petrol stations or depots checking tyre pressure. ATES maintains optimal pressure automatically, keeping trucks on schedule.',
    },
    {
      icon: Wrench,
      title: 'Lower Fleet Maintenance Costs',
      description:
        'Extended tyre life means fewer replacements. Maintenance teams focus on preventive mechanical work instead of daily tyre inspections across hundreds of vehicles.',
    },
  ];

  const roiData = [
    { label: 'Fuel Savings per Truck/Year', value: 'Rs 30,000+' },
    { label: 'Tyre Life Extension', value: '20%' },
    { label: 'Breakdown Reduction', value: 'Up to 80%' },
    { label: 'Fleet-Wide Annual Savings', value: 'Lakhs' },
  ];

  return (
    <main id="main-content" className="relative bg-gray-50">
      <Navigation />

      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs
            items={[
              { name: 'Industries', url: '/industries' },
              { name: 'Logistics', url: '/industries/logistics' },
            ]}
            className="mb-8"
          />
        </div>
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
      >
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
              <Package className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm font-medium">Built for Logistics Fleets</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Tyre Management for{' '}
              <span className="text-blue-400">Logistics Fleets</span> in India
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Reduce tyre costs, improve fuel efficiency, and ensure timely deliveries.
              ATES by TyreRakhshak keeps your logistics fleet moving without tyre-related
              disruptions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-lg transition-colors"
                >
                  Request a Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/products"
                  className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold text-lg border border-white/30 transition-colors"
                >
                  View Products
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logistics Tyre Challenges */}
      <section ref={challengesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Logistics Fleet Tyre Challenges We Solve
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Managing tyre pressure across a logistics fleet is complex. ATES automates
                the process, eliminating guesswork and human error.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <challenge.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {challenge.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ATES Benefits for Logistics */}
      <section ref={benefitsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How ATES Transforms Logistics Fleet Operations
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The Automatic Tyre Equalisation System by TyreRakhshak keeps your
                deliveries on time and your costs under control.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Section */}
      <section ref={roiRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ROI for Logistics Fleet Operators
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                ATES pays for itself within months. Here is what logistics fleet operators
                save per vehicle every year.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {roiData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center"
                >
                  <IndianRupee className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <p className="text-2xl font-bold text-gray-900 mb-2">{item.value}</p>
                  <p className="text-gray-600 text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center border border-white/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Optimise Your Logistics Fleet?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Get a free fleet assessment and see how much ATES can save your logistics
              operations. No obligation, no sales pressure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-lg transition-colors"
                >
                  Schedule Free Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/products"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded-full font-semibold text-lg transition-colors"
                >
                  View Pricing
                </Link>
              </motion.div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <p className="text-sm text-gray-400 mb-4">Explore more:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/products" className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                  Products
                </Link>
                <Link href="/technology" className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                  Technology
                </Link>
                <Link href="/industries/mining" className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                  Mining
                </Link>
                <Link href="/industries/construction" className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                  Construction
                </Link>
                <Link href="/faq" className="text-blue-400 hover:text-blue-300 font-medium text-sm">
                  FAQs
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
