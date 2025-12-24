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

  const milestones = [
    {
      year: "2021",
      title: "Company Founded",
      description: "Wick Automation LLP was established with a vision to revolutionize commercial vehicle safety."
    },
    {
      year: "2022",
      title: "First Prototype",
      description: "Developed our first ATES prototype after extensive research and development."
    },
    {
      year: "2023",
      title: "Market Launch",
      description: "Successfully launched India&apos;s first Automatic Tyre Equalisation System for HCVs."
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Received multiple awards for innovation in automotive safety technology."
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Expanding operations internationally and developing next-generation safety solutions."
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
              About <span className="text-red-500 font-bold">Wick</span>
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
              { number: 250, suffix: "+", label: "Vehicles Protected" },
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

      {/* Story Section */}
      <section ref={storyRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2021, Wick Automation LLP emerged from a simple yet powerful vision: 
                  to make commercial vehicle transportation safer and more efficient through innovative technology.
                </p>
                <p>
                  Our journey began when our founders recognized the critical safety issues plaguing the 
                  heavy commercial vehicle industry in India. Tire-related accidents were causing significant 
                  losses in lives and property, while inefficient tire management was driving up operational costs.
                </p>
                <p>
                  Determined to address these challenges, we assembled a team of automotive engineers, 
                  technology experts, and industry veterans. Together, we developed India&apos;s first 
                  Automatic Tyre Equalization System (ATES) - a breakthrough innovation that has 
                  revolutionized commercial vehicle safety.
                </p>
                <p>
                  Today, Wick continues to lead the industry with cutting-edge solutions that protect 
                  thousands of vehicles and drivers across the nation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {milestones.slice(0, 4).map((milestone, index) => (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={storyInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="bg-white p-4 rounded-lg text-center"
                    >
                      <div className="text-2xl font-bold text-primary-600 mb-1">{milestone.year}</div>
                      <div className="text-sm font-semibold text-gray-800 mb-2">{milestone.title}</div>
                      <div className="text-xs text-gray-600">{milestone.description}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
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
