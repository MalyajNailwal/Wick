'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Award, Users, MapPin, Phone, Mail, Target, Zap, TrendingUp } from 'lucide-react';

export default function AboutClient() {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [storyRef, storyInView] = useInView({ threshold: 0.3 });
  const [achievementsRef, achievementsInView] = useInView({ threshold: 0.3 });

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-100/10 border border-red-500/30 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-400 font-semibold text-sm">India&apos;s Pioneer in ATES Technology</span>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                Wick ATES
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Since 2021, Wick has been revolutionizing commercial vehicle safety in India with our 
              groundbreaking Automatic Tyre Equalisation System (ATES) technology.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-red-500 mb-2">2021</div>
                <div className="text-gray-300">Founded</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-red-500 mb-2">50+</div>
                <div className="text-gray-300">Fleet Partners</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-red-500 mb-2">20%</div>
                <div className="text-gray-300">Tyre Life Increase</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Story Section */}
      <section ref={storyRef} className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={storyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Wick ATES Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Born from a vision to make India&apos;s highways safer, Wick ATES represents 
              the perfect fusion of innovation and purpose.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                What Makes Wick ATES Different?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">India-First Approach</h4>
                    <p className="text-gray-600">
                      Unlike generic tire monitoring systems, Wick ATES is specifically engineered 
                      for Indian road conditions, climate, and commercial vehicle requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Intelligence</h4>
                    <p className="text-gray-600">
                      Our TyreRakhshak system doesn&apos;t just monitor - it predicts, prevents, 
                      and automatically corrects tire pressure issues before they become problems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Proven ROI</h4>
                    <p className="text-gray-600">
                      With 20% longer tire life, 2%+ fuel savings, and 144 hours reduced downtime annually, 
                      Wick ATES pays for itself within months.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-red-50 to-orange-50 shadow-2xl">
                <img
                  src="/media/productimghd-removebg-preview.png"
                  alt="Wick ATES TyreRakhshak Product"
                  className="w-full h-full object-contain p-8"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">TyreRakhshak®</div>
                  <div className="text-sm text-gray-600">Our Flagship ATES</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements & Recognition */}
      <section ref={achievementsRef} className="py-24 bg-gradient-to-br from-slate-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={achievementsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Recognition & Achievements
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence has earned recognition from industry leaders 
              and commercial vehicle operators across India.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Safety Pioneer",
                description: "First ATES technology in India",
                color: "text-green-400"
              },
              {
                icon: Award,
                title: "Industry Recognition",
                description: "Trusted by leading fleet operators",
                color: "text-yellow-400"
              },
              {
                icon: Users,
                title: "50+ Partners",
                description: "Growing network of satisfied customers",
                color: "text-blue-400"
              },
              {
                icon: MapPin,
                title: "Pan-India Presence",
                description: "Serving fleets across the nation",
                color: "text-red-400"
              }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={achievementsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <achievement.icon className={`w-12 h-12 ${achievement.color} mx-auto mb-4`} />
                <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Connect with Wick ATES
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to revolutionize your fleet&apos;s safety and efficiency? 
              Get in touch with our team of experts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl">
              <MapPin className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">
                House Of Wick, 33B, NIT<br />
                Faridabad, Haryana 121001<br />
                India
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">
                <a href="tel:+919721601500" className="hover:text-blue-600 transition-colors">
                  +91-9721601500
                </a>
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">
                <a href="mailto:office@wick.co.in" className="hover:text-green-600 transition-colors">
                  office@wick.co.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}