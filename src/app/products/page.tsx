'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, CheckCircle, Download, Zap, Crown, BookOpen } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import RelatedLinks from '@/components/seo/RelatedLinks';

const ProductsPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const router = useRouter();

  const navigateToContact = () => {
    router.push('/contact');
  };

  const downloadBrochure = () => {
    const link = document.createElement('a');
    link.href = '/media/WICK%20BROUCHURE%20ATES_compressed.pdf';
    link.download = 'WICK_BROUCHURE_ATES.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const baseFeatures = [
    "Easy and quick installation",
    "Low operating cost and minimal maintenance",
    "Automatic inflation and deflation",
    "24V DC power requirement only",
    "Compatible with YORK RB15 Axles",
    "Pneumatic Samrat Series Suspension support",
    "Rotary union - only moving component",
    "Pressure regulator recalibration",
    "Front-mounted driver indicator",
    "Extended tyre life by 20%",
    "Improved fuel efficiency >2%",
    "Reduced vehicle downtime",
    "Enhanced road safety",
    "Labor cost savings"
  ];

  const cpmsFeatures = [
    "Real-time tyre pressure tracking",
    "GPS integration for trailers",
    "System ON/OFF status indication",
    "Trailer tyre Odometer (Upcoming)",
    "Predictive maintenance alerts",
    "Data-driven fleet management",
    "Remote monitoring dashboard",
    "Historical data analytics"
  ];

  return (
    <main id="main-content" className="relative bg-gray-50">
      <Navigation />

      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs
            items={[{ name: 'Products', url: '/products' }]}
            className="mb-8"
          />
        </div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
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
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 via-white to-green-600 text-sm font-semibold mb-6 shadow-lg"
            >
              <span className="text-blue-900 font-bold">India&apos;s First Advanced ATES</span>
            </motion.div>

            <div className="text-5xl md:text-6xl font-bold mb-4">
              TYRE RAKHSHAK<sup className="text-2xl">®</sup>
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold text-red-400 mb-4">
              Automatic Tyre Equalisation System
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              By Wick | In Partnership with YORK | SAF-HOLLAND Group
            </p>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              India&apos;s first advanced tyre pressure equalisation system designed specifically for commercial trailers. 
              Automatically maintains optimum tyre pressure, ensuring enhanced safety, improved fuel efficiency, 
              and extended tyre life—without manual intervention.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Solution
            </h2>
            <p className="text-xl text-gray-600">
              Select the package that best fits your fleet needs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Base Package - TYRE RAKHSHAK */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 border-b-2 border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <Shield className="w-12 h-12 text-red-600" />
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">
                    ESSENTIAL
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  TYRE RAKHSHAK®
                </h3>
                <p className="text-gray-600 mb-6">
                  Complete automatic tyre equalisation system for commercial trailers
                </p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">Custom</span>
                  <span className="text-gray-600 ml-2">pricing</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Based on fleet size and requirements</p>
              </div>

              {/* Features */}
              <div className="p-8">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">What&apos;s Included:</h4>
                <div className="space-y-3 mb-8">
                  {baseFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={navigateToContact}
                  className="w-full bg-red-600 text-white py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-red-700 transition-all flex items-center justify-center"
                >
                  Get Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Premium Package - TYRE RAKHSHAK + CPMS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl border-2 border-blue-500 overflow-hidden relative hover:shadow-3xl transition-shadow duration-300"
            >
              {/* Popular Badge */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-bl-2xl font-bold text-sm flex items-center">
                <Crown className="w-4 h-4 mr-1" />
                RECOMMENDED
              </div>

              {/* Header */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border-b-2 border-blue-200">
                <div className="flex items-center justify-between mb-4">
                  <Zap className="w-12 h-12 text-blue-600" />
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
                    PREMIUM
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  TYRE RAKHSHAK® + CPMS
                </h3>
                <p className="text-gray-600 mb-6">
                  Complete system with Centralized Pressure Monitoring System for advanced fleet management
                </p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">Custom</span>
                  <span className="text-gray-600 ml-2">pricing</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Premium features for data-driven operations</p>
              </div>

              {/* Features */}
              <div className="p-8">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Everything in Essential, plus:</h4>
                <div className="space-y-3 mb-6">
                  {cpmsFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Highlight Box */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 mb-8 border border-blue-200">
                  <h5 className="font-bold text-gray-900 mb-2 flex items-center">
                    <Zap className="w-5 h-5 text-blue-600 mr-2" />
                    Move to Predictive Maintenance
                  </h5>
                  <p className="text-gray-700 text-sm">
                    Transform from reactive to predictive and data-driven tyre management. 
                    Maximize efficiency and minimize unexpected downtime with real-time insights.
                  </p>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={navigateToContact}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
                >
                  Get Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

          </div>

          {/* Download Brochure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadBrochure}
              className="inline-flex items-center border-2 border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-all"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Complete Brochure
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose TYRE RAKHSHAK®?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-red-600" />,
                title: "Proven Technology",
                description: "Backed by YORK and SAF-HOLLAND Group with proven results"
              },
              {
                icon: <Zap className="w-12 h-12 text-blue-600" />,
                title: "Made for India",
                description: "Designed specifically for Indian road and load conditions"
              },
              {
                icon: <CheckCircle className="w-12 h-12 text-green-600" />,
                title: "Lower TCO",
                description: "Reduces total cost of ownership and improves fleet efficiency"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Blog Posts */}
      <RelatedLinks
        title="Resources for Fleet Owners"
        subtitle="Explore our guides to understand how automatic tyre inflation can transform your fleet operations"
        variant="cards"
        links={[
          {
            title: 'Best Tyre Inflation System in India',
            description: 'Compare features, prices and ROI. See why Indian fleets trust Wick TyreRakhshak.',
            href: '/blog/best-tyre-inflation-system-india',
            tag: 'Buying Guide'
          },
          {
            title: 'How to Prevent Truck Tyre Blowouts',
            description: 'Learn the main causes of blowouts and how automatic systems prevent them.',
            href: '/blog/how-to-prevent-truck-tyre-blowouts',
            tag: 'Safety'
          },
          {
            title: 'How to Save Fuel in Trucks',
            description: 'Discover how correct tyre pressure can save over 2% fuel consumption.',
            href: '/blog/how-to-save-fuel-in-trucks',
            tag: 'Fuel Efficiency'
          },
        ]}
        className="bg-white"
      />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Fleet?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact our team for a custom quote tailored to your needs
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={navigateToContact}
            className="bg-white text-red-600 px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all inline-flex items-center"
          >
            Contact Sales Team
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/technology" className="text-white/80 hover:text-white underline underline-offset-4 text-sm">
              How ATES Technology Works
            </Link>
            <Link href="/tire-inflation-system" className="text-white/80 hover:text-white underline underline-offset-4 text-sm">
              Tyre Inflation Systems
            </Link>
            <Link href="/truck-tire-pressure-monitoring" className="text-white/80 hover:text-white underline underline-offset-4 text-sm">
              Tyre Pressure Monitoring
            </Link>
            <Link href="/faq" className="text-white/80 hover:text-white underline underline-offset-4 text-sm">
              FAQs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
