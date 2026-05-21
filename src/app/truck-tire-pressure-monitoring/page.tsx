'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Gauge, AlertCircle, TrendingUp, Shield, Clock, DollarSign } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { useRouter } from 'next/navigation';

export default function TruckTirePressureMonitoringPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.3 });
  const router = useRouter();

  const monitoringFeatures = [
    {
      icon: <Gauge className="w-12 h-12 text-blue-500" />,
      title: "Real-Time Tyre Pressure Monitoring",
      description: "Continuous monitoring of tyre pressure across all wheels with instant alerts for pressure drops."
    },
    {
      icon: <AlertCircle className="w-12 h-12 text-red-500" />,
      title: "Instant Alerts & Notifications",
      description: "Immediate warnings for under-inflation, over-inflation, and rapid pressure loss situations."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-green-500" />,
      title: "Predictive Maintenance",
      description: "Advanced analytics to predict tyre maintenance needs and prevent unexpected failures."
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: "Enhanced Safety",
      description: "Prevents tyre blowouts and improves vehicle stability for safer operations."
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-500" />,
      title: "Reduced Downtime",
      description: "Minimize vehicle downtime with proactive tyre maintenance and early problem detection."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-yellow-500" />,
      title: "Cost Savings",
      description: "Extend tyre life by 20% and improve fuel efficiency by 2%+ with optimal pressure maintenance."
    }
  ];

  return (
    <main id="main-content" className="relative">
      <Navigation />

      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs
            items={[{ name: 'Truck Tyre Pressure Monitoring', url: '/truck-tire-pressure-monitoring' }]}
            className="mb-8"
          />
        </div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Truck Tyre{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Pressure Monitoring
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Advanced tyre pressure monitoring systems for commercial trucks and trailers.
              Real-time monitoring, instant alerts, and predictive maintenance for optimal fleet performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                Get Free Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/products')}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                View Products
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Tyre Pressure Monitoring Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive monitoring solutions designed for commercial vehicle operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {monitoringFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Explore More</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products" className="text-primary-600 hover:text-primary-700 underline underline-offset-4 font-medium">
              TyreRakhshak Products
            </Link>
            <Link href="/technology" className="text-primary-600 hover:text-primary-700 underline underline-offset-4 font-medium">
              How ATES Technology Works
            </Link>
            <Link href="/tire-inflation-system" className="text-primary-600 hover:text-primary-700 underline underline-offset-4 font-medium">
              Tyre Inflation Systems
            </Link>
            <Link href="/faq" className="text-primary-600 hover:text-primary-700 underline underline-offset-4 font-medium">
              FAQs
            </Link>
            <Link href="/contact" className="text-primary-600 hover:text-primary-700 underline underline-offset-4 font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}