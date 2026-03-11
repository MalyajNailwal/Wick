'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, X, Star, Award, Shield, Zap, TrendingUp, Users } from 'lucide-react';

interface CompetitorFeatures {
  "Real-time Monitoring": boolean;
  "Automatic Correction": boolean;
  "India-Specific Design": boolean;
  "Predictive Maintenance": boolean;
  "24/7 Remote Access": boolean;
  "Mobile App": boolean;
  "Local Support": boolean;
  "ROI Guarantee": boolean;
  "Fuel Efficiency": string;
  "Tire Life Extension": string;
  "Downtime Reduction": string;
  "Price Range": string;
}

interface Competitor {
  name: string;
  logo: string | null;
  isWick: boolean;
  features: CompetitorFeatures;
}

export default function WickVsCompetitorsClient() {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [comparisonRef, comparisonInView] = useInView({ threshold: 0.3 });

  const competitors: Competitor[] = [
    {
      name: "Wick ATES TyreRakhshak",
      logo: "/logo.svg",
      isWick: true,
      features: {
        "Real-time Monitoring": true,
        "Automatic Correction": true,
        "India-Specific Design": true,
        "Predictive Maintenance": true,
        "24/7 Remote Access": true,
        "Mobile App": true,
        "Local Support": true,
        "ROI Guarantee": true,
        "Fuel Efficiency": "2%+",
        "Tire Life Extension": "20%",
        "Downtime Reduction": "144 hrs/year",
        "Price Range": "₹₹"
      }
    },
    {
      name: "Generic TPMS Systems",
      logo: null,
      isWick: false,
      features: {
        "Real-time Monitoring": true,
        "Automatic Correction": false,
        "India-Specific Design": false,
        "Predictive Maintenance": false,
        "24/7 Remote Access": false,
        "Mobile App": false,
        "Local Support": false,
        "ROI Guarantee": false,
        "Fuel Efficiency": "0.5%",
        "Tire Life Extension": "5%",
        "Downtime Reduction": "20 hrs/year",
        "Price Range": "₹"
      }
    },
    {
      name: "International ATES",
      logo: null,
      isWick: false,
      features: {
        "Real-time Monitoring": true,
        "Automatic Correction": true,
        "India-Specific Design": false,
        "Predictive Maintenance": true,
        "24/7 Remote Access": true,
        "Mobile App": true,
        "Local Support": false,
        "ROI Guarantee": false,
        "Fuel Efficiency": "1.5%",
        "Tire Life Extension": "15%",
        "Downtime Reduction": "100 hrs/year",
        "Price Range": "₹₹₹"
      }
    },
    {
      name: "Manual Monitoring",
      logo: null,
      isWick: false,
      features: {
        "Real-time Monitoring": false,
        "Automatic Correction": false,
        "India-Specific Design": false,
        "Predictive Maintenance": false,
        "24/7 Remote Access": false,
        "Mobile App": false,
        "Local Support": true,
        "ROI Guarantee": false,
        "Fuel Efficiency": "0%",
        "Tire Life Extension": "0%",
        "Downtime Reduction": "0 hrs/year",
        "Price Range": "₹"
      }
    }
  ];

  const featureList = [
    "Real-time Monitoring",
    "Automatic Correction", 
    "India-Specific Design",
    "Predictive Maintenance",
    "24/7 Remote Access",
    "Mobile App",
    "Local Support",
    "ROI Guarantee"
  ];

  const metricsList = [
    "Fuel Efficiency",
    "Tire Life Extension", 
    "Downtime Reduction",
    "Price Range"
  ];

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Wick ATES vs{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Competitors
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              An honest, comprehensive comparison of Wick ATES against other tire monitoring 
              solutions available in the Indian market.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 border border-green-400/30 rounded-full backdrop-blur-sm">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-green-400 font-semibold">Industry Leader</span>
              </div>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm">
                <Award className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-semibold">Proven ROI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section ref={comparisonRef} className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={comparisonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Feature Comparison
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how Wick ATES stacks up against other tire monitoring solutions. 
              The data speaks for itself.
            </p>
          </motion.div>

          {/* Desktop Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={comparisonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6">
              <div className="grid grid-cols-5 gap-4 text-white">
                <div className="text-lg font-semibold">Features</div>
                {competitors.map((competitor, index) => (
                  <div key={index} className="text-center">
                    <div className="text-lg font-semibold mb-2">{competitor.name}</div>
                    {competitor.isWick && (
                      <div className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-400/20 rounded-full">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-xs text-yellow-400">Our Solution</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Features Comparison */}
            <div className="divide-y divide-gray-200">
              {featureList.map((feature, featureIndex) => (
                <div key={featureIndex} className="grid grid-cols-5 gap-4 p-4 hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-900 flex items-center">{feature}</div>
                  {competitors.map((competitor, compIndex) => (
                    <div key={compIndex} className="flex justify-center items-center">
                      {competitor.features[feature as keyof CompetitorFeatures] ? (
                        <div className={`flex items-center gap-2 ${competitor.isWick ? 'text-green-600' : 'text-blue-600'}`}>
                          <Check className="w-5 h-5" />
                          <span className="font-medium text-sm">Yes</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-red-600">
                          <X className="w-5 h-5" />
                          <span className="font-medium text-sm">No</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
              
              {/* Metrics Comparison */}
              {metricsList.map((metric, metricIndex) => (
                <div key={metricIndex} className="grid grid-cols-5 gap-4 p-4 hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-900 flex items-center">{metric}</div>
                  {competitors.map((competitor, compIndex) => (
                    <div key={compIndex} className="flex justify-center items-center">
                      <span className={`font-semibold ${competitor.isWick ? 'text-green-600' : 'text-gray-600'}`}>
                        {competitor.features[metric as keyof CompetitorFeatures]}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-6">
            {competitors.map((competitor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={comparisonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`p-6 rounded-xl shadow-lg ${competitor.isWick ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200' : 'bg-white border border-gray-200'}`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{competitor.name}</h3>
                  {competitor.isWick && (
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/20 rounded-full">
                      <Star className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-green-600 font-medium">Our Solution</span>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  {[...featureList, ...metricsList].map((feature, fIndex) => (
                    <div key={fIndex} className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{feature}</span>
                      {typeof competitor.features[feature as keyof CompetitorFeatures] === 'boolean' ? (
                        competitor.features[feature as keyof CompetitorFeatures] ? (
                          <div className="flex items-center gap-1 text-green-600">
                            <Check className="w-4 h-4" />
                            <span className="text-sm font-medium">Yes</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-red-600">
                            <X className="w-4 h-4" />
                            <span className="text-sm font-medium">No</span>
                          </div>
                        )
                      ) : (
                        <span className={`font-semibold ${competitor.isWick ? 'text-green-600' : 'text-gray-600'}`}>
                          {competitor.features[feature as keyof CompetitorFeatures]}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Wick Wins Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Wick ATES Leads the Market
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Beyond features and specifications, here&apos;s what makes Wick ATES 
              the preferred choice for serious fleet operators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "India-First Engineering",
                description: "Designed specifically for Indian roads, climate, and operating conditions"
              },
              {
                icon: Zap,
                title: "Proven Performance",
                description: "20% longer tire life and 2%+ fuel efficiency improvements verified by customers"
              },
              {
                icon: TrendingUp,
                title: "Guaranteed ROI",
                description: "System pays for itself within 6-8 months with measurable cost savings"
              },
              {
                icon: Users,
                title: "Local Support",
                description: "Dedicated Indian support team with deep understanding of local challenges"
              }
            ].map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <advantage.icon className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{advantage.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See the Wick ATES Difference for Yourself
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Request a demo and see how Wick ATES 
            outperforms the competition in real-world conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 inline-block"
            >
              Request Demo
            </motion.a>
            <motion.a
              href="/products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 inline-block"
            >
              View Products
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
}