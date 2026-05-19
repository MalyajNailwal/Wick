'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, AlertTriangle, TrendingUp, Shield, Zap, Clock, DollarSign, Truck } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import { useRouter } from 'next/navigation';

export default function TireInflationSystemPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [problemsRef, problemsInView] = useInView({ threshold: 0.3 });
  const [solutionRef, solutionInView] = useInView({ threshold: 0.3 });
  const [benefitsRef, benefitsInView] = useInView({ threshold: 0.3 });
  const [comparisonRef, comparisonInView] = useInView({ threshold: 0.3 });
  const router = useRouter();

  const tireProblems = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: "Under-Inflated Tyres",
      description: "Causes increased fuel consumption, faster tyre wear, and safety risks",
      impact: "Up to 3% fuel loss per 1 PSI under-inflation"
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "Manual Monitoring",
      description: "Time-consuming daily checks, human error, inconsistent maintenance",
      impact: "2-3 hours daily for large fleets"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
      title: "Premature Tyre Replacement",
      description: "Incorrect pressure leads to uneven wear and early tyre failure",
      impact: "30-50% shorter tyre life"
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-500" />,
      title: "Vehicle Downtime",
      description: "Tyre-related breakdowns cause costly delays and repairs",
      impact: "Average 144 hours downtime annually"
    }
  ];

  const systemTypes = [
    {
      type: "Manual Monitoring",
      features: ["Daily pressure checks", "Manual inflation", "Visual inspection"],
      pros: ["Low initial cost", "Simple process"],
      cons: ["Time consuming", "Human error prone", "Inconsistent results", "No real-time alerts"],
      cost: "₹",
      effectiveness: "30%"
    },
    {
      type: "TPMS (Tyre Pressure Monitoring System)",
      features: ["Pressure sensors", "Dashboard alerts", "Real-time monitoring"],
      pros: ["Real-time alerts", "Easy installation", "Driver awareness"],
      cons: ["No automatic correction", "Battery replacement needed", "Limited to monitoring only"],
      cost: "₹₹",
      effectiveness: "60%"
    },
    {
      type: "ATES (Automatic Tyre Equalisation System)",
      features: ["Automatic pressure adjustment", "Real-time monitoring", "Predictive maintenance"],
      pros: ["Fully automatic", "Optimal pressure maintained", "Prevents problems", "Maximum ROI"],
      cons: ["Higher initial investment"],
      cost: "₹₹₹",
      effectiveness: "95%"
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-12 h-12 text-green-500" />,
      title: "20% Longer Tyre Life",
      description: "Optimal pressure maintenance extends tyre lifespan significantly",
      savings: "₹2-3 Lakhs saved annually per vehicle"
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-500" />,
      title: "2%+ Fuel Efficiency",
      description: "Proper tyre pressure reduces rolling resistance",
      savings: "₹50,000+ fuel savings per vehicle/year"
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: "Enhanced Safety",
      description: "Prevents tyre blowouts and improves vehicle stability",
      savings: "Prevents accidents and insurance claims"
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-500" />,
      title: "Reduced Downtime",
      description: "Prevents tyre-related breakdowns and delays",
      savings: "144 hours saved annually per vehicle"
    }
  ];

  return (
    <main id="main-content" className="relative">
      <Navigation />
      
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
              Tyre Inflation{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Systems
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Complete guide to automatic tyre inflation systems for trucks and trailers.
              Learn how to save fuel, extend tyre life, and improve fleet safety.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">20%</div>
                <div className="text-gray-300">Longer Tyre Life</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">2%+</div>
                <div className="text-gray-300">Fuel Savings</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">144</div>
                <div className="text-gray-300">Hours Saved/Year</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Tire Problems */}
      <section ref={problemsRef} className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={problemsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Common Tyre Problems in Commercial Vehicles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the challenges fleet operators face with tyre management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tireProblems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={problemsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{problem.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600 mb-4">{problem.description}</p>
                <div className="text-sm font-medium text-red-600 bg-red-50 px-3 py-2 rounded-lg">
                  Impact: {problem.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Types Comparison */}
      <section ref={comparisonRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={comparisonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tyre Management Solutions Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare different approaches to tyre pressure management
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {systemTypes.map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={comparisonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`p-8 rounded-2xl shadow-lg ${
                  system.type === 'ATES (Automatic Tyre Equalisation System)' 
                    ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{system.type}</h3>
                  <div className="flex justify-center items-center gap-4">
                    <span className="text-lg font-semibold text-gray-600">Cost: {system.cost}</span>
                    <span className="text-lg font-semibold text-green-600">Effectiveness: {system.effectiveness}</span>
                  </div>
                  {system.type === 'ATES (Automatic Tyre Equalisation System)' && (
                    <div className="mt-2">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Recommended
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {system.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-600 mb-3">Pros:</h4>
                    <ul className="space-y-2">
                      {system.pros.map((pro, pIndex) => (
                        <li key={pIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-600">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-red-600 mb-3">Cons:</h4>
                    <ul className="space-y-2">
                      {system.cons.map((con, cIndex) => (
                        <li key={cIndex} className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-500" />
                          <span className="text-gray-600">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-24 bg-gradient-to-br from-slate-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Benefits of Automatic Tyre Inflation Systems
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quantifiable benefits that make automatic tyre inflation systems essential for modern fleets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="mb-6 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-sm font-medium text-green-400 bg-green-400/10 px-3 py-2 rounded-lg">
                  {benefit.savings}
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
            Ready to Upgrade Your Fleet&apos;s Tyre Management?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover how automatic tyre inflation systems can transform your fleet operations 
            with proven ROI and enhanced safety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/contact')}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
            >
              Get Free Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/products')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              View Solutions
            </motion.button>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Explore More</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/technology" className="text-primary-600 hover:text-primary-700 underline underline-offset-4 font-medium">
              How ATES Technology Works
            </Link>
            <Link href="/truck-tire-pressure-monitoring" className="text-primary-600 hover:text-primary-700 underline underline-offset-4 font-medium">
              Truck Tyre Pressure Monitoring
            </Link>
            <Link href="/faq" className="text-primary-600 hover:text-primary-700 underline underline-offset-4 font-medium">
              FAQs
            </Link>
            <Link href="/blog" className="text-primary-600 hover:text-primary-700 underline underline-offset-4 font-medium">
              Fleet Management Blog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}