'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X, Shield, Zap, TrendingUp, Award, Users, MapPin } from 'lucide-react';

export default function WhyWickATESClient() {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [comparisonRef, comparisonInView] = useInView({ threshold: 0.3 });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.3 });

  const comparisonData = [
    {
      feature: "Real-time Tire Pressure Monitoring",
      wick: true,
      traditional: false,
      description: "Continuous monitoring vs periodic manual checks"
    },
    {
      feature: "Automatic Pressure Correction",
      wick: true,
      traditional: false,
      description: "Self-correcting system vs manual intervention required"
    },
    {
      feature: "Predictive Maintenance Alerts",
      wick: true,
      traditional: false,
      description: "Prevents issues vs reactive maintenance"
    },
    {
      feature: "India-Specific Engineering",
      wick: true,
      traditional: false,
      description: "Designed for Indian roads and climate"
    },
    {
      feature: "20% Longer Tire Life",
      wick: true,
      traditional: false,
      description: "Proven ROI vs standard tire wear"
    },
    {
      feature: "2%+ Fuel Efficiency Improvement",
      wick: true,
      traditional: false,
      description: "Optimized pressure = better fuel economy"
    },
    {
      feature: "144 Hours Annual Downtime Reduction",
      wick: true,
      traditional: false,
      description: "Less breakdowns = more productivity"
    },
    {
      feature: "24/7 Remote Monitoring",
      wick: true,
      traditional: false,
      description: "Fleet managers can monitor from anywhere"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Wick ATES?
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              The definitive comparison: Wick ATES vs Traditional Tire Monitoring Systems. 
              See why India&apos;s leading fleets choose Wick for their commercial vehicles.
            </p>

            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 border border-green-400/30 rounded-full backdrop-blur-sm">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">India&apos;s #1 ATES Technology</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section ref={comparisonRef} className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={comparisonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Wick ATES vs Traditional Systems
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive comparison showing why Wick ATES is the superior choice 
              for commercial vehicle tire management in India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={comparisonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
              <div className="grid grid-cols-3 gap-4 text-white">
                <div className="text-lg font-semibold">Feature</div>
                <div className="text-lg font-semibold text-center">Wick ATES</div>
                <div className="text-lg font-semibold text-center">Traditional Systems</div>
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              {comparisonData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={comparisonInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.feature}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  
                  <div className="flex justify-center items-center">
                    {item.wick ? (
                      <div className="flex items-center gap-2 text-green-600">
                        <Check className="w-6 h-6" />
                        <span className="font-medium">Yes</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-red-600">
                        <X className="w-6 h-6" />
                        <span className="font-medium">No</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex justify-center items-center">
                    {item.traditional ? (
                      <div className="flex items-center gap-2 text-green-600">
                        <Check className="w-6 h-6" />
                        <span className="font-medium">Yes</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-red-600">
                        <X className="w-6 h-6" />
                        <span className="font-medium">No</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section ref={benefitsRef} className="py-24 bg-gradient-to-br from-slate-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Wick ATES Advantage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quantifiable benefits that make Wick ATES the smart choice for 
              forward-thinking fleet operators.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "20% Longer Tire Life",
                description: "Optimal pressure maintenance extends tire lifespan significantly",
                metric: "₹2-3 Lakhs saved annually per vehicle",
                color: "text-green-400"
              },
              {
                icon: Zap,
                title: "2%+ Fuel Efficiency",
                description: "Proper tire pressure reduces rolling resistance",
                metric: "₹50,000+ fuel savings per vehicle/year",
                color: "text-yellow-400"
              },
              {
                icon: Shield,
                title: "144 Hours Downtime Reduction",
                description: "Prevents tire-related breakdowns and delays",
                metric: "₹1.5 Lakhs productivity gain per vehicle",
                color: "text-blue-400"
              },
              {
                icon: Award,
                title: "Proven ROI",
                description: "System pays for itself within 6-8 months",
                metric: "300%+ ROI in first year",
                color: "text-purple-400"
              },
              {
                icon: Users,
                title: "50+ Fleet Partners",
                description: "Trusted by India's leading commercial vehicle operators",
                metric: "99.2% customer satisfaction",
                color: "text-red-400"
              },
              {
                icon: MapPin,
                title: "India-Specific Design",
                description: "Engineered for Indian roads, climate, and conditions",
                metric: "Tested across 28 states",
                color: "text-indigo-400"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <benefit.icon className={`w-12 h-12 ${benefit.color} mb-6`} />
                <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{benefit.description}</p>
                <div className={`text-lg font-semibold ${benefit.color}`}>
                  {benefit.metric}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience the Wick ATES Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join 50+ fleet operators who have already transformed their operations with Wick ATES. 
            Get a personalized ROI analysis for your fleet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 inline-block"
            >
              Get ROI Analysis
            </motion.a>
            <motion.a
              href="/products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 inline-block"
            >
              View Products
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
}