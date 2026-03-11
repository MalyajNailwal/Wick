'use client';

import { motion } from 'framer-motion';
import { Target, Users, Award, Lightbulb, TrendingUp, Shield } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Navigation from '@/components/layout/Navigation';

// Counter component with animation
const AnimatedCounter = ({ end, suffix = '', inView }: { end: number; suffix?: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    const duration = 2000; // 2 seconds
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, inView]);

  return <span>{count}{suffix}</span>;
};

const AboutPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [storyRef, storyInView] = useInView({ threshold: 0.2 });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.2 });
  const router = useRouter();

  const navigateToContact = () => {
    router.push('/contact');
  };

  const navigateToBlog = () => {
    router.push('/blog');
  };

  // Journey milestones data
  const milestones = [
    {
      year: '2021',
      title: 'Foundation',
      description: 'Wick was founded with a mission to revolutionize commercial vehicle safety in India through innovative technology.',
      roadPosition: { top: '80px', left: '50%' },
      cardPosition: 'left'
    },
    {
      year: '2022',
      title: 'ATES Development',
      description: 'Successfully developed and tested India\'s first Automatic Tyre Equalization System with our team of engineers.',
      roadPosition: { top: '380px', left: '66%' },
      cardPosition: 'right'
    },
    {
      year: '2023',
      title: 'Market Launch',
      description: 'Launched ATES commercially and onboarded our first fleet partners, marking a new era in vehicle safety.',
      roadPosition: { top: '700px', left: '33%' },
      cardPosition: 'left'
    },
    {
      year: '2024',
      title: 'Expansion & Growth',
      description: 'Expanded to 350+ vehicles protected and 50+ fleet partners across India, continuing our mission.',
      roadPosition: { top: '1000px', left: '66%' },
      cardPosition: 'right'
    }
  ];

  const values = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Safety First",
      description: "We prioritize the safety of drivers and vehicles above all else, developing solutions that prevent accidents and save lives."
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-yellow-500" />,
      title: "Innovation",
      description: "We continuously push the boundaries of technology to create revolutionary solutions for the automotive industry."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-green-500" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our work, from product design to customer service."
    },
    {
      icon: <Users className="w-12 h-12 text-purple-500" />,
      title: "Collaboration",
      description: "We believe in the power of collaboration, working closely with our clients to deliver customized solutions."
    }
  ];

  return (
    <main className="relative">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6"
            >
              About <span style={{ color: '#b61212' }} className="font-bold">Wick</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Pioneering the future of automotive safety through innovative technology and unwavering commitment to excellence.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: 3, suffix: "+", label: "Years of Innovation" },
              { number: 350, suffix: "+", label: "Vehicles Protected" },
              { number: 50, suffix: "+", label: "Fleet Partners" },
              { number: 95, suffix: "%", label: "Customer Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl font-bold text-red-600 mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} inView={heroInView} />
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline with Curvy Road Animation */}
      <section ref={storyRef} className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={storyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The winding road that shaped our path to innovation
            </p>
          </motion.div>

          {/* Desktop View - Curvy Road */}
          <div className="relative min-h-[1400px] hidden md:block">
            {/* Animated Curvy Road Path - SVG */}
            <svg 
              className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-full"
              viewBox="0 0 600 1400" 
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1f2937" />
                  <stop offset="50%" stopColor="#374151" />
                  <stop offset="100%" stopColor="#1f2937" />
                </linearGradient>
                
                {/* Tire Track Pattern */}
                <pattern id="tireTrack" x="0" y="0" width="40" height="60" patternUnits="userSpaceOnUse">
                  {/* Left tire marks */}
                  <rect x="8" y="5" width="3" height="12" fill="#000000" opacity="0.3" rx="1" />
                  <rect x="8" y="22" width="3" height="12" fill="#000000" opacity="0.3" rx="1" />
                  <rect x="8" y="39" width="3" height="12" fill="#000000" opacity="0.3" rx="1" />
                  
                  {/* Right tire marks */}
                  <rect x="29" y="5" width="3" height="12" fill="#000000" opacity="0.3" rx="1" />
                  <rect x="29" y="22" width="3" height="12" fill="#000000" opacity="0.3" rx="1" />
                  <rect x="29" y="39" width="3" height="12" fill="#000000" opacity="0.3" rx="1" />
                </pattern>
              </defs>
              
              {/* Road Path - Tedhi Medhi */}
              <motion.path
                d="M 300 80 
                   C 300 120, 180 200, 200 280
                   C 220 360, 420 380, 400 480
                   C 380 580, 180 600, 200 700
                   C 220 800, 420 820, 400 920
                   C 380 1020, 250 1100, 300 1200"
                stroke="url(#roadGradient)"
                strokeWidth="50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={storyInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
              
              {/* Tire Tracks on Road */}
              <motion.path
                d="M 300 80 
                   C 300 120, 180 200, 200 280
                   C 220 360, 420 380, 400 480
                   C 380 580, 180 600, 200 700
                   C 220 800, 420 820, 400 920
                   C 380 1020, 250 1100, 300 1200"
                stroke="url(#tireTrack)"
                strokeWidth="45"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={storyInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
              />
              
              {/* Road Center Dashed Lines */}
              <motion.path
                d="M 300 80 
                   C 300 120, 180 200, 200 280
                   C 220 360, 420 380, 400 480
                   C 380 580, 180 600, 200 700
                   C 220 800, 420 820, 400 920
                   C 380 1020, 250 1100, 300 1200"
                stroke="#fbbf24"
                strokeWidth="3"
                fill="none"
                strokeDasharray="25 25"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={storyInView ? { pathLength: 1, opacity: 0.8 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
              />
            </svg>

            {/* Timeline Milestones positioned along the road */}
            <div className="relative">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="absolute"
                  style={{ 
                    top: milestone.roadPosition.top, 
                    left: milestone.roadPosition.left,
                    transform: 'translateX(-50%)'
                  }}
                >
                  {/* Road Marker Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={storyInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.3 }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20"
                  >
                    <div className="w-10 h-10 bg-red-600 rounded-full border-4 border-white shadow-xl flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
                    </div>
                  </motion.div>

                  {/* Milestone Card */}
                  <motion.div
                    initial={{ opacity: 0, x: milestone.cardPosition === 'left' ? 50 : -50 }}
                    animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: milestone.cardPosition === 'left' ? 50 : -50 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.3 }}
                    className="absolute top-0"
                    style={{
                      [milestone.cardPosition]: '60px',
                      width: '320px'
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="text-red-600 font-bold text-2xl mb-3">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm">{milestone.description}</p>
                    </motion.div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile View - Vertical Timeline */}
          <div className="md:hidden space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-0 w-8 h-8 bg-red-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                {index < 3 && (
                  <div className="absolute left-4 top-8 w-0.5 h-full bg-red-300" />
                )}
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="text-red-600 font-bold text-2xl mb-3">{milestone.year}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <Target className="w-12 h-12 text-primary-500 mr-4" />
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To revolutionize commercial vehicle safety and efficiency through innovative 
                technology solutions, making roads safer for everyone while helping businesses 
                optimize their operations and reduce costs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <Award className="w-12 h-12 text-primary-500 mr-4" />
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To become the global leader in automotive safety technology, setting new standards 
                for innovation and excellence while contributing to a safer, more sustainable 
                transportation ecosystem.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
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
              Join Our Mission
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Be part of the revolution in automotive safety. Let&apos;s work together to make 
              roads safer and transportation more efficient.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={navigateToContact}
                className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                Get In Touch
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={navigateToBlog}
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 cursor-pointer"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;