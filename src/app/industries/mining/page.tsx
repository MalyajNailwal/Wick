'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import {
  Thermometer,
  Mountain,
  Truck,
  Flame,
  Shield,
  Fuel,
  Clock,
  Wrench,
  ArrowRight,
  CheckCircle,
  IndianRupee,
  Users,
  Phone,
  HardHat,
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

export default function MiningPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [challengesRef, challengesInView] = useInView({ threshold: 0.2 });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.2 });
  const [vehiclesRef, vehiclesInView] = useInView({ threshold: 0.2 });
  const [savingsRef, savingsInView] = useInView({ threshold: 0.2 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.3 });

  const challenges = [
    {
      icon: Thermometer,
      title: 'Extreme Heat and Temperature Fluctuations',
      description:
        'Open-pit mines experience surface temperatures exceeding 60C. Underground mines shift rapidly between hot and cool zones. These temperature swings cause constant tyre pressure fluctuations that lead to blowouts and premature wear.',
    },
    {
      icon: Mountain,
      title: 'Heavy Loads and Rough Terrain',
      description:
        'Mining trucks carry 100-400 tonne payloads over unpaved, rocky terrain. Extreme loads combined with uneven surfaces create uneven tyre wear patterns that manual pressure checks cannot prevent.',
    },
    {
      icon: Flame,
      title: 'Sharp Rock and Abrasive Surfaces',
      description:
        'Haul roads in mines are lined with sharp rocks and abrasive material. Underinflated tyres are more vulnerable to cuts, punctures, and sidewall damage. Maintaining optimal pressure is critical for tyre durability.',
    },
    {
      icon: Truck,
      title: '24/7 Operations with Zero Downtime Tolerance',
      description:
        'Mining operations run around the clock. Every hour a truck is off the road for tyre maintenance costs lakhs in lost production. Manual pressure checks at shift changes waste valuable operating hours.',
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Up to 80% Fewer Blowouts',
      description:
        'Real-time automatic pressure equalisation eliminates the underinflation and overinflation conditions that cause blowouts in mining trucks. Safer operations for drivers and ground crew.',
    },
    {
      icon: Fuel,
      title: '20% Longer Tyre Life',
      description:
        'Consistent optimal pressure prevents uneven wear patterns on haul roads. Mining tyres are expensive - extending their life by 20% saves lakhs per vehicle annually.',
    },
    {
      icon: Clock,
      title: 'Zero Downtime for Tyre Checks',
      description:
        'ATES eliminates manual pressure checks at shift changes. Trucks stay in operation continuously, maximising ore output and reducing maintenance windows.',
    },
    {
      icon: Wrench,
      title: 'Reduced Maintenance Crew Burden',
      description:
        'Fleet maintenance teams focus on preventive mechanical maintenance instead of daily tyre pressure inspections across hundreds of tyres.',
    },
  ];

  const vehicles = [
    { name: 'Haul Trucks', desc: '200-400 tonne payload dump trucks used in open-pit mining' },
    { name: 'Wheel Loaders', desc: 'Front-end loaders for loading ore and overburden' },
    { name: 'Graders', desc: 'Motor graders for maintaining haul road surfaces' },
    { name: 'Water Tankers', desc: 'Dust suppression and road maintenance tankers' },
    { name: 'Personnel Carriers', desc: 'Heavy-duty vehicles for crew transport in mines' },
    { name: 'Dozers', desc: 'Bulldozers for earthmoving and stockpile management' },
  ];

  const savingsData = [
    { label: 'Annual Tyre Savings per Vehicle', value: 'Rs 2-3 Lakhs' },
    { label: 'Blowout Reduction', value: 'Up to 80%' },
    { label: 'Tyre Life Extension', value: '20%' },
    { label: 'Downtime Reduction', value: 'Significant' },
  ];

  return (
    <main id="main-content" className="relative bg-gray-50">
      <Navigation />

      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs
            items={[
              { name: 'Industries', url: '/industries' },
              { name: 'Mining', url: '/industries/mining' },
            ]}
            className="mb-8"
          />
        </div>
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900"
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
              <HardHat className="w-4 h-4 mr-2 text-amber-400" />
              <span className="text-sm font-medium">Built for Mining Operations</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Tyre Inflation System for{' '}
              <span className="text-amber-400">Mining Trucks</span> in India
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Keep your mining fleet running safely through extreme heat, heavy loads, and
              abrasive terrain. ATES by TyreRakhshak delivers automatic pressure equalisation
              for haul trucks, loaders, and heavy mining equipment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-semibold text-lg transition-colors"
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

      {/* Mining Tyre Challenges */}
      <section ref={challengesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Mining Tyre Challenges We Solve
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Mining operations face tyre management challenges that standard maintenance
                cannot address. ATES is purpose-built for these conditions.
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
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <challenge.icon className="w-6 h-6 text-amber-600" />
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

      {/* How ATES Helps Mining Operations */}
      <section ref={benefitsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How ATES Transforms Mining Fleet Operations
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The Automatic Tyre Equalisation System by TyreRakhshak keeps your mining
                trucks running safely in the harshest conditions.
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

      {/* Compatible Mining Vehicles */}
      <section ref={vehiclesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Compatible Mining Vehicles
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                ATES is compatible with a wide range of heavy mining equipment and vehicles.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicles.map((vehicle, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-gray-900">{vehicle.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{vehicle.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Section */}
      <section ref={savingsRef} className="py-20 bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ROI for Mining Fleet Operators
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                ATES pays for itself within months. Here is what mining fleet operators
                save per vehicle every year.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {savingsData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
                >
                  <IndianRupee className="w-8 h-8 text-amber-400 mx-auto mb-3" />
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
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center border border-gray-100"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Protect Your Mining Fleet?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Get a free fleet assessment and see how much ATES can save your mining
              operations. No obligation, no sales pressure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-semibold text-lg transition-colors"
                >
                  Schedule Free Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/products"
                  className="inline-flex items-center px-8 py-4 border-2 border-amber-600 text-amber-600 hover:bg-amber-50 rounded-full font-semibold text-lg transition-colors"
                >
                  View Pricing
                </Link>
              </motion.div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500 mb-4">Explore more:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/products" className="text-amber-600 hover:text-amber-700 font-medium text-sm">
                  Products
                </Link>
                <Link href="/technology" className="text-amber-600 hover:text-amber-700 font-medium text-sm">
                  Technology
                </Link>
                <Link href="/industries/logistics" className="text-amber-600 hover:text-amber-700 font-medium text-sm">
                  Logistics
                </Link>
                <Link href="/industries/construction" className="text-amber-600 hover:text-amber-700 font-medium text-sm">
                  Construction
                </Link>
                <Link href="/faq" className="text-amber-600 hover:text-amber-700 font-medium text-sm">
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
