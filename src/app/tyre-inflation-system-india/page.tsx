'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Fuel, Clock, Truck, CheckCircle, ArrowRight, MapPin, Phone, Star } from 'lucide-react';
import Link from 'next/link';
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

export default function TyreInflationSystemIndiaPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [statsRef, statsInView] = useInView({ threshold: 0.2 });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.2 });
  const [statesRef, statesInView] = useInView({ threshold: 0.2 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.3 });

  const stats = [
    { value: '50+', label: 'Fleet Operators Trust Us' },
    { value: '20%', label: 'Longer Tyre Life' },
    { value: '2%+', label: 'Fuel Savings' },
    { value: '144', label: 'Hours Saved Per Vehicle/Year' },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Prevents Tyre Blowouts',
      description: 'Automatic pressure maintenance eliminates underinflation, the cause of 95% of tyre blowouts on Indian highways.',
    },
    {
      icon: Fuel,
      title: 'Fuel Efficiency',
      description: 'Optimally inflated tyres reduce rolling resistance, delivering 2%+ fuel savings across your fleet.',
    },
    {
      icon: Clock,
      title: 'Zero Downtime',
      description: 'No manual pressure checks needed. Save 144+ hours of maintenance downtime per vehicle annually.',
    },
    {
      icon: Truck,
      title: 'All Vehicle Types',
      description: 'Compatible with trucks, trailers, and commercial vehicles across India. Works with YORK axles and Samrat suspension.',
    },
  ];

  const states = [
    'Maharashtra', 'Delhi NCR', 'Karnataka', 'Tamil Nadu', 'Gujarat',
    'Rajasthan', 'Uttar Pradesh', 'Haryana', 'Punjab', 'West Bengal',
    'Andhra Pradesh', 'Telangana', 'Kerala', 'Madhya Pradesh', 'Bihar',
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

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900"
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
              <MapPin className="w-4 h-4 mr-2 text-red-400" />
              <span className="text-sm font-medium">Serving All Major Routes Across India</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Tyre Inflation System in{' '}
              <span className="text-red-400">India</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              India&apos;s leading automatic tyre inflation system for trucks and trailers.
              Maintain optimal tyre pressure automatically. 20% longer tyre life, 2%+ fuel savings.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold text-lg transition-colors"
                >
                  Get Free Consultation
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

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={statsInView ? 'visible' : 'hidden'}
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

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={featuresInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why India&apos;s Fleet Operators Choose Wick ATES
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Automatic tyre inflation technology designed for Indian road conditions, extreme weather, and demanding fleet operations.
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

      {/* Pan-India Coverage */}
      <section ref={statesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={statesInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Pan-India Coverage
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Serving fleet operators across all major states and commercial vehicle routes in India.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
              {states.map((state, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium"
                >
                  {state}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
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
              Join 50+ fleet operators across India who trust Wick ATES for safer, more efficient operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold text-lg transition-colors"
                >
                  Schedule Free Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="tel:+919721601500"
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
