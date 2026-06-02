'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import {
  Wheat,
  Thermometer,
  Truck,
  Factory,
  Shield,
  Fuel,
  Clock,
  Phone,
  MapPin,
  ArrowRight,
  IndianRupee,
  Wrench,
  Users,
} from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function PunjabPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [challengesRef, challengesInView] = useInView({ threshold: 0.2 });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.2 });
  const [supportRef, supportInView] = useInView({ threshold: 0.2 });
  const [savingsRef, savingsInView] = useInView({ threshold: 0.2 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.3 });

  const challenges = [
    {
      icon: Wheat,
      title: 'Agricultural Harvest Transport',
      description:
        'Punjab is India\u2019s breadbasket. During wheat and rice harvest seasons, thousands of trucks and trolleys carry heavy grain loads from mandis to storage facilities and processing plants. Overloaded agricultural vehicles on rural and highway roads put extreme stress on tyres, causing frequent blowouts and delays.',
    },
    {
      icon: Truck,
      title: 'Amritsar-Delhi Highway',
      description:
        'The Amritsar-Delhi highway (450km via NH-44) is a critical freight corridor connecting Punjab to North India\u2019s largest market. Long-haul trucks operate at high speeds for extended periods. Inconsistent tyre pressure leads to overheating, uneven wear, and dangerous blowouts at highway speeds.',
    },
    {
      icon: Factory,
      title: 'Ludhiana Industrial Hub',
      description:
        'Ludhiana is India\u2019s largest bicycle and auto parts manufacturing centre. Commercial vehicles transporting components, raw materials, and finished goods operate daily on congested city roads and highway corridors. Constant stop-start driving in industrial areas accelerates tyre wear significantly.',
    },
    {
      icon: Thermometer,
      title: 'Extreme Winter Fog Conditions',
      description:
        'Punjab experiences dense fog from November to February, reducing visibility to near zero on highways. Cold temperatures cause tyre pressure to drop, leading to underinflation that increases rolling resistance and fuel consumption. Underinflated tyres in foggy conditions also reduce braking effectiveness.',
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: '20% Longer Tyre Life',
      description: 'Automatic pressure equalization prevents uneven wear patterns common on Punjab\u2019s agricultural roads, industrial zones, and highway corridors.',
    },
    {
      icon: Fuel,
      title: '2%+ Fuel Savings',
      description: 'Optimally inflated tyres reduce rolling resistance on long Amritsar-Delhi and Ludhiana-Delhi hauls. Fleets save thousands in fuel costs per vehicle annually across Punjab\u2019s highway network.',
    },
    {
      icon: Clock,
      title: 'Reduced Downtime',
      description: 'No more roadside tyre checks or emergency replacements on NH-44. ATES keeps pressure optimal throughout the journey, reducing delivery delays during critical harvest seasons.',
    },
    {
      icon: Wrench,
      title: 'Lower Maintenance Costs',
      description: 'Eliminate manual pressure checks at Ludhiana, Amritsar, and Jalandhar depots. Fleet mechanics focus on preventive maintenance instead of daily tyre inspections.',
    },
  ];

  const savingsData = [
    { label: 'Annual Tyre Savings per Vehicle', value: 'Rs 2-3 Lakhs' },
    { label: 'Fuel Cost Reduction', value: '2%+' },
    { label: 'Tyre Life Extension', value: '20%' },
    { label: 'Reduction in Roadside Breakdowns', value: 'Up to 80%' },
  ];

  return (
    <main id="main-content" className="relative bg-gray-50">
      <Navigation />

      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs
            items={[
              { name: 'Punjab', url: '/locations/punjab' },
            ]}
            className="mb-8"
          />
        </div>
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20"
            >
              <MapPin className="w-4 h-4 mr-2 text-sky-400" />
              <span className="text-sm font-medium">Serving Punjab &amp; Surrounding Regions</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Tyre Inflation System in{' '}
              <span className="text-sky-400">Punjab</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Fleet safety solutions built for Punjab&rsquo;s agricultural harvest transport,
              Amritsar-Delhi highway, Ludhiana industrial operations, and extreme winter fog conditions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-semibold text-lg transition-colors"
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

      {/* Local Fleet Challenges */}
      <section ref={challengesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={challengesInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Punjab Fleet Challenges We Solve
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Operating a commercial fleet in Punjab comes with unique tyre management
                challenges driven by seasonal agricultural transport, industrial freight, and extreme weather.
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
                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <challenge.icon className="w-6 h-6 text-sky-600" />
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

      {/* How ATES Helps */}
      <section ref={benefitsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={benefitsInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How ATES Transforms Punjab Fleet Operations
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The Automatic Tyre Equalisation System by TyreRakhshak keeps your
                fleet running safely through Punjab&rsquo;s toughest conditions.
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

      {/* Local Support Section */}
      <section ref={supportRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={supportInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Local Support for Punjab Fleets
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Wick provides dedicated support for fleet operators across Ludhiana,
                Amritsar, Jalandhar, Patiala, and all of Punjab.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Pan-India Service Network
                </h3>
                <p className="text-gray-600">
                  Our Faridabad headquarters supports Punjab fleets with on-site
                  installation and periodic maintenance visits across Ludhiana, Amritsar,
                  Jalandhar, and Patiala.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  WhatsApp Support
                </h3>
                <p className="text-gray-600">
                  Instant technical support via WhatsApp for troubleshooting,
                  pressure readings, and system diagnostics. No call centre queues.
                  Direct access to our engineering team.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  On-Site Installation
                </h3>
                <p className="text-gray-600">
                  Our technicians come to your depot in Ludhiana, Amritsar, Jalandhar,
                  or any Punjab location. Average install time is under 4 hours per
                  vehicle with zero downtime.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cost Savings Section */}
      <section ref={savingsRef} className="py-20 bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={savingsInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ROI for Punjab Fleet Operators
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                ATES pays for itself within months. Here is what Punjab fleet
                operators save per vehicle every year.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {savingsData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
                >
                  <IndianRupee className="w-8 h-8 text-sky-400 mx-auto mb-3" />
                  <p className="text-2xl font-bold text-white mb-2">{item.value}</p>
                  <p className="text-gray-300 text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center border border-gray-100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Protect Your Punjab Fleet?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Get a free fleet assessment and see how much ATES can save your
              Punjab operations. No obligation, no sales pressure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-semibold text-lg transition-colors"
                >
                  Schedule Free Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/products"
                  className="inline-flex items-center px-8 py-4 border-2 border-sky-600 text-sky-600 hover:bg-sky-50 rounded-full font-semibold text-lg transition-colors"
                >
                  View Pricing
                </Link>
              </motion.div>
            </div>

            {/* Related Pages */}
            <div className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500 mb-4">Explore more:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/products" className="text-sky-600 hover:text-sky-700 font-medium text-sm">
                  Products
                </Link>
                <Link href="/technology" className="text-sky-600 hover:text-sky-700 font-medium text-sm">
                  Technology
                </Link>
                <Link href="/why-wick-ates" className="text-sky-600 hover:text-sky-700 font-medium text-sm">
                  Why Choose ATES
                </Link>
                <Link href="/faq" className="text-sky-600 hover:text-sky-700 font-medium text-sm">
                  FAQs
                </Link>
                <Link href="/blog" className="text-sky-600 hover:text-sky-700 font-medium text-sm">
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
