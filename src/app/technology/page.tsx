'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Wifi, 
  Shield, 
  TrendingUp, 
  AlertTriangle, 
  Zap, 
  Settings, 
  Smartphone,
  Activity,
  Database,
  Clock,
  CheckCircle
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/layout/Navigation';
import CarModel from '@/components/3d/CarModel';
import StoryChapter from '@/components/ui/StoryChapter';

const TechnologyPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });

  const technologies = [
    {
      icon: <Cpu className="w-16 h-16 text-purple-600" />,
      title: "Advanced Sensor Technology",
      description: "High-precision pressure sensors and electronic monitoring systems continuously track tire conditions with exceptional accuracy.",
      features: ["Continuous monitoring", "Precision sensors", "Real-time tracking", "Instant alerts"]
    },
    {
      icon: <Wifi className="w-16 h-16 text-blue-600" />,
      title: "IoT Connectivity",
      description: "Seamless wireless communication between tire sensors and central monitoring systems for instant data transmission.",
      features: ["Real-time monitoring", "Cloud synchronization", "Remote diagnostics", "Fleet management"]
    },
    {
      icon: <Activity className="w-16 h-16 text-green-600" />,
      title: "Pressure Sensors",
      description: "High-precision sensors continuously monitor tire pressure, temperature, and wear patterns with 99.9% accuracy.",
      features: ["Continuous monitoring", "Temperature tracking", "Wear analysis", "Instant alerts"]
    },
    {
      icon: <Smartphone className="w-16 h-16 text-orange-600" />,
      title: "Mobile App Control",
      description: "Comprehensive mobile application for fleet managers to monitor, control, and manage their entire fleet remotely.",
      features: ["Dashboard overview", "Individual tire status", "Maintenance scheduling", "Performance analytics"]
    }
  ];

  const workingProcess = [
    {
      step: "01",
      title: "Continuous Monitoring",
      description: "Advanced sensors continuously monitor tire pressure across all wheels of the vehicle.",
      icon: <Activity className="w-8 h-8 text-yellow-300" />
    },
    {
      step: "02", 
      title: "Data Processing",
      description: "Electronic systems process pressure data in real-time to determine optimal tire pressure levels.",
      icon: <Database className="w-8 h-8 text-green-300" />
    },
    {
      step: "03",
      title: "Automatic Adjustment",
      description: "System automatically inflates or deflates tires to maintain optimal pressure levels.",
      icon: <Settings className="w-8 h-8 text-orange-300" />
    },
    {
      step: "04",
      title: "Real-time Alerts",
      description: "Drivers and fleet managers receive instant notifications about tire status and maintenance needs.",
      icon: <AlertTriangle className="w-8 h-8 text-red-300" />
    }
  ];

  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-blue-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white bg-[size:50px_50px] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-300 text-sm font-medium backdrop-blur-sm mb-8"
            >
              <Zap className="w-5 h-5 mr-3 animate-pulse" />
              Revolutionary ATES Technology
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
            >
              The Science Behind{' '}
              <span className="text-primary-600 font-bold">
                Safety
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Discover how cutting-edge sensors, IoT connectivity, and precision engineering work together 
              to create India's most advanced tire management system.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Technology Overview */}
      <StoryChapter
        chapterNumber="01"
        title="Core Technologies"
        subtitle="The building blocks of intelligent tire management"
        layout="full"
        backgroundColor="bg-white"
        content={
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {tech.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {tech.description}
                </p>
                <ul className="text-left space-y-2">
                  {tech.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        }
      />

      {/* How It Works */}
      <StoryChapter
        chapterNumber="02"
        title="How ATES Works"
        subtitle="Step-by-step process of intelligent tire management"
        layout="center"
        backgroundColor="bg-gradient-to-br from-gray-50 to-gray-100"
        content={
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workingProcess.map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  {/* Connection Line */}
                  {index < workingProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-primary-200 transform -translate-x-1/2">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-primary-500 rounded-full"></div>
                    </div>
                  )}
                  
                  <div className="relative">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white shadow-2xl mb-6 hover:scale-110 transition-transform duration-300">
                      <div className="text-center">
                        <div className="mb-2 flex justify-center">{process.icon}</div>
                        <div className="text-lg font-bold text-black">{process.step}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* 3D Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="h-[500px] bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl overflow-hidden"
            >
              <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
                <Suspense fallback={null}>
                  <CarModel />
                </Suspense>
              </Canvas>
            </motion.div>
          </div>
        }
      />

      {/* Technical Specifications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed specifications of our advanced tire management system
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Sensor Technology",
                specs: [
                  { label: "Accuracy", value: "±0.1 PSI" },
                  { label: "Operating Temperature", value: "-40°C to +125°C" },
                  { label: "Battery Life", value: "7+ years" },
                  { label: "Transmission Range", value: "100+ meters" }
                ]
              },
              {
                category: "System Performance",
                specs: [
                  { label: "Response Time", value: "<5 seconds" },
                  { label: "Data Update Frequency", value: "Every 30 seconds" },
                  { label: "System Uptime", value: "99.9%" },
                  { label: "Maximum Vehicles", value: "Unlimited" }
                ]
              },
              {
                category: "Mobile Application",
                specs: [
                  { label: "Platform Support", value: "iOS & Android" },
                  { label: "Real-time Updates", value: "Yes" },
                  { label: "Offline Mode", value: "Available" },
                  { label: "Multi-language", value: "10+ Languages" }
                ]
              }
            ].map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.specs.map((spec, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="text-gray-600">{spec.label}</span>
                      <span className="font-semibold text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Experience the Technology
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Ready to see how our advanced ATES technology can transform your fleet operations? 
              Contact our technical team for a detailed demonstration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                Technical Docs
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default TechnologyPage;
