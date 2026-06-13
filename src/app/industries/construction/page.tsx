'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import {
  HardHat,
  Hammer,
  Truck,
  AlertTriangle,
  Shield,
  Fuel,
  Clock,
  Wrench,
  ArrowRight,
  CheckCircle,
  IndianRupee,
  Users,
  Phone,
  Building2,
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

export default function ConstructionPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [challengesRef, challengesInView] = useInView({ threshold: 0.2 });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.2 });
  const [vehiclesRef, vehiclesInView] = useInView({ threshold: 0.2 });
  const [savingsRef, savingsInView] = useInView({ threshold: 0.2 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.3 });

  const challenges = [
    {
      icon: Hammer,
      title: 'Rough Terrain and Debris',
      description:
        'Construction sites are filled with uneven ground, loose gravel, sharp debris, and mud. These surfaces cause uneven tyre wear, punctures, and pressure loss that manual checks cannot prevent.',
    },
    {
      icon: AlertTriangle,
      title: 'Heavy Loads and Constant Stop-Start',
      description:
        'Dump trucks and loaders operate under heavy loads with frequent acceleration and braking. This creates extreme stress on tyres and causes rapid pressure fluctuations.',
    },
    {
      icon: Truck,
      title: 'Mixed Fleet tyre Requirements',
      description:
        'Construction fleets include excavators, backhoes, dump trucks, graders, and cranes - each with different tyre specifications. Managing pressure across a diverse fleet is complex.',
    },
    {
      icon: Building2,
      title: 'Dust, Vibration, and Environmental Exposure',
      description:
        'Construction sites expose tyres to extreme dust, heat, and vibration. These conditions accelerate pressure loss and tyre degradation, leading to frequent replacements.',
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Improved On-Site Safety',
      description:
        'Properly inflated tyres reduce the risk of blowouts and load shifts on construction sites. Safer vehicles mean fewer accidents and lower liability exposure.',
    },
    {
      icon: Fuel,
      title: '20% Longer Tyre Life',
      description:
        'Consistent optimal pressure prevents uneven wear from rough terrain and heavy loads. Construction tyres are expensive - extending their life saves lakhs per vehicle annually.',
    },
    {
      icon: Clock,
      title: 'Less Downtime, More Productivity',
      description:
        'Fewer tyre-related breakdowns mean equipment stays on the job. Projects stay on schedule without delays caused by flat tyres or pressure failures.',
    },
    {
      icon: Wrench,
      title: 'Simplified Fleet Management',
      description:
        'ATES works across all construction vehicle types. One system for your entire fleet means simpler maintenance planning and lower administrative overhead.',
    },
  ];

  const vehicles = [
    { name: 'Dump Trucks', desc: 'Rear dump and articulated dump trucks for material hauling' },
    { name: 'Excavators', desc: 'Track and wheeled excavators for digging and loading' },
    { name: 'Wheel Loaders', desc: 'Front-end loaders for material handling and stockpiling' },
    { name: 'Backhoe Loaders', desc: 'Versatile machines for digging, loading, and trenching' },
    { name: 'Motor Graders', desc: 'Road graders for site preparation and surface levelling' },
    { name: 'Mobile Cranes', desc: 'All-terrain and rough-terrain cranes for heavy lifts' },
  ];

  const savingsData = [
    { label: 'Annual Tyre Savings per Vehicle', value: 'Rs 1.5-3 Lakhs' },
    { label: 'Tyre Life Extension', value: '20%' },
    { label: 'Downtime Reduction', value: 'Significant' },
    { label: 'Safety Incident Reduction', value: 'Major' },
  ];

  return (
    <main id="main-content" className="relative bg-gray-50">
      <Navigation />

      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs
            items={[
              { name: 'Industries', url: '/industries' },
              { name: 'Construction', url: '/industries/construction' },
            ]}
            className="mb-8"
          />
        </div>
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900"
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
              <HardHat className="w-4 h-4 mr-2 text-orange-400" />
              <span className="text-sm font-medium">Built for Construction Fleets</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Tyre Pressure Monitoring for{' '}
              <span className="text-orange-400">Construction Vehicles</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Maintain optimal tyre pressure for excavators, dump trucks, and heavy
              equipment. ATES by TyreRakhshak delivers automatic pressure equalisation
              for construction fleet safety and efficiency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-semibold text-lg transition-colors"
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

      {/* Construction Tyre Challenges */}
      <section ref={challengesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={challengesInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Construction Tyre Challenges We Solve
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Construction sites demand tough equipment. ATES is designed to keep
                your construction vehicles performing at their best.
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
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <challenge.icon className="w-6 h-6 text-orange-600" />
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

      {/* How ATES Helps Construction */}
      <section ref={benefitsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={benefitsInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How ATES Transforms Construction Fleet Operations
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The Automatic Tyre Equalisation System by TyreRakhshak keeps your
                construction equipment running safely on every site.
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

      {/* Compatible Construction Vehicles */}
      <section ref={vehiclesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={vehiclesInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Compatible Construction Equipment
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                ATES works across your entire construction fleet, regardless of equipment type.
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
      <section ref={savingsRef} className="py-20 bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={savingsInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ROI for Construction Fleet Operators
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                ATES pays for itself within months. Here is what construction fleet
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
                  <IndianRupee className="w-8 h-8 text-orange-400 mx-auto mb-3" />
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
              Ready to Equip Your Construction Fleet?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Get a free fleet assessment and see how much ATES can save your construction
              operations. No obligation, no sales pressure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-full font-semibold text-lg transition-colors"
                >
                  Schedule Free Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/products"
                  className="inline-flex items-center px-8 py-4 border-2 border-orange-600 text-orange-600 hover:bg-orange-50 rounded-full font-semibold text-lg transition-colors"
                >
                  View Pricing
                </Link>
              </motion.div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500 mb-4">Explore more:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/products" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                  Products
                </Link>
                <Link href="/technology" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                  Technology
                </Link>
                <Link href="/industries/mining" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                  Mining
                </Link>
                <Link href="/industries/logistics" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                  Logistics
                </Link>
                <Link href="/faq" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
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
