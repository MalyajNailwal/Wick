'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, TrendingUp, CheckCircle, Star, Download, Settings } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/layout/Navigation';

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

  const keyFeatures = [
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "20% Extended Tyre Life",
      description: "Optimal pressure maintenance significantly extends tyre lifespan"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: ">2% Fuel Efficiency",
      description: "Improved fuel economy through reduced rolling resistance"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Automatic Operation",
      description: "No manual intervention required for pressure management"
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-600" />,
      title: "Easy Installation",
      description: "Quick setup with low operating and maintenance costs"
    }
  ];

  const benefits = [
    "Extends tyre life by 20% through optimal pressure maintenance",
    "Improves fuel efficiency by over 2%",
    "Reduces tyre-related road expenses significantly",
    "Automatic inflation and deflation to maintain preset pressure",
    "Rotary union is the only moving component, reducing wear",
    "Compatible with YORK RB15 Axles & Pneumatic Samrat Series Suspension",
    "Requires only 24V DC power for driver cabin warning indicator",
    "Pressure regulator can be recalibrated as per fleet requirements"
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Air Supply Connection",
      description: "System connects all trailer tyres to centralized air supply from trailer's pneumatic line"
    },
    {
      step: "02",
      title: "Control Module",
      description: "Air flows into control module which distributes air evenly to each axle"
    },
    {
      step: "03",
      title: "Rotary Union Distribution",
      description: "Air travels through axle-mounted pipes to rotary union at spindle end"
    },
    {
      step: "04",
      title: "Automatic Inflation",
      description: "Each tyre receives air automatically when pressure drops below set level"
    }
  ];

  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-16 bg-gradient-to-br from-red-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-red-100 border border-red-200 text-red-700 text-sm font-semibold mb-6"
            >
              <Star className="w-4 h-4 mr-2 fill-current" />
              India&apos;s First Advanced ATIDES
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-4"
            >
              TYRE RAKHSHAK<sup className="text-2xl">®</sup>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-3xl font-bold text-red-600 mb-4"
            >
              Automatic Tyre Inflation Deflation Equalization System
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-3"
            >
              India&apos;s first advanced tyre pressure equalization system for commercial trailers. 
              Automatically maintains optimal tyre pressure, ensuring enhanced safety, improved fuel efficiency, 
              and extended tyre life—without manual intervention.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm text-gray-500 italic mb-8"
            >
              By YORK | In Partnership with WICK | SAF-HOLLAND Group
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={navigateToContact}
                className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadBrochure}
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center"
              >
                <Download className="mr-2 w-5 h-5" />
                Download Brochure
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engineered for reliability, efficiency, and long service life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, automatic, and intelligent tyre pressure management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connection Line */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-red-200 transform -translate-x-1/2 z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                )}

                <div className="relative z-10 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Benefits to Fleet Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven results that impact your bottom line
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-green-600 mr-4 flex-shrink-0 mt-1" />
                <span className="text-gray-800 font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Transform Your Fleet?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
              Get a custom quote tailored to your fleet size and operational needs
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={navigateToContact}
                className="bg-white text-red-600 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center"
              >
                Contact Sales Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadBrochure}
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center"
              >
                <Download className="mr-2 w-5 h-5" />
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
