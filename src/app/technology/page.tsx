'use client';

import { Suspense, useState, useRef } from 'react';
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
  CheckCircle,
  Lightbulb,
  Target,
  Award,
  Play,
  Pause,
  Volume2,
  VolumeX
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/layout/Navigation';
import CarModel from '@/components/3d/CarModel';
import StoryChapter from '@/components/ui/StoryChapter';
import StoryTimeline from '@/components/ui/StoryTimeline';

const TechnologyPage = () => {
  const router = useRouter();
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showCTAOverlay, setShowCTAOverlay] = useState(false);
  const [showTechDocsPopup, setShowTechDocsPopup] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = async () => {
    if (videoRef.current) {
      try {
        if (isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
          console.log('Video paused');
        } else {
          await videoRef.current.play();
          setIsPlaying(true);
          console.log('Video playing');
        }
      } catch (error) {
        console.error('Error toggling video play:', error);
        // Fallback: try to toggle without async
        if (videoRef.current) {
          if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
          } else {
            videoRef.current.play().catch(() => {
              console.log('Video play failed');
            });
            setIsPlaying(true);
          }
        }
      }
    } else {
      console.log('Video element not found');
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      try {
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(!isMuted);
        console.log('Video mute toggled:', videoRef.current.muted);
      } catch (error) {
        console.error('Error toggling video mute:', error);
      }
    } else {
      console.log('Video element not found for mute toggle');
    }
  };

  // Ad-style pause at 20 seconds
  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 20 && !showCTAOverlay && isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      setShowCTAOverlay(true);
      console.log('Ad-style pause triggered at 20 seconds');
    }
  };

  const resumeVideo = () => {
    if (videoRef.current) {
      setShowCTAOverlay(false);
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        console.log('Video resumed successfully');
      }).catch((error) => {
        console.error('Error resuming video:', error);
        setIsPlaying(false);
      });
    }
  };

  const contactSales = () => {
    // Scroll to bottom section where Schedule Demo & Technical Docs buttons are
    setShowCTAOverlay(false);
    resumeVideo();
    
    // Scroll to the CTA section at bottom
    setTimeout(() => {
      const ctaSection = document.querySelector('.bg-gradient-to-r.from-primary-600.to-primary-800');
      if (ctaSection) {
        ctaSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback - scroll to bottom
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
    }, 300);
  };

  const navigateToContact = () => {
    router.push('/contact');
  };

  const showTechnicalDocsPopup = () => {
    setShowTechDocsPopup(true);
    setTimeout(() => setShowTechDocsPopup(false), 4000); // Auto-hide after 4 seconds
  };

  // Timeline events for technology development
  const timelineEvents = [
    {
      year: "2021",
      title: "The Vision Born",
      description: "Wick Automation LLP was founded with a clear mission: to revolutionize commercial vehicle safety through innovative technology. Our team of engineers began developing the first ATES prototype.",
      highlight: true,
      icon: <Lightbulb className="w-6 h-6 text-yellow-400" />
    },
    {
      year: "2022",
      title: "Innovation Takes Shape",
      description: "After extensive research and development, we successfully created India's first Automatic Tyre Equalisation System. The breakthrough technology was ready to transform the industry.",
      highlight: false
    },
    {
      year: "2023",
      title: "Market Revolution",
      description: "ATES launched commercially, immediately showing dramatic improvements in safety and efficiency. Fleet operators began experiencing 25% longer tire life and 15% better fuel efficiency.",
      highlight: true,
      icon: <Target className="w-6 h-6 text-green-500" />
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description: "Wick received multiple awards for innovation in automotive safety. Our technology became the gold standard for commercial vehicle tire management across India.",
      highlight: false,
      icon: <Award className="w-6 h-6 text-amber-500" />
    },
    {
      year: "2025",
      title: "Expanding Horizons",
      description: "With proven success across India, Wick is now expanding internationally and developing next-generation automotive safety solutions for the global market.",
      highlight: true,
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />
    },
    {
      year: "The Future",
      title: "Continuing Innovation",
      description: "Our research continues into next-generation automotive safety technologies, including enhanced sensor integration and expanded vehicle compatibility, leading the automotive safety revolution.",
      highlight: true,
      icon: <Zap className="w-6 h-6 text-purple-500" />
    }
  ];

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
      title: "Wick Inspection App",
      description: "Our proprietary Wick Inspection App with comprehensive database system - used internally to provide exceptional service quality, real-time fleet monitoring, and advanced analytics for delivering the best customer experience.",
      features: [
        "Internal dashboard for service excellence and quality control",
        "Real-time fleet monitoring for proactive service delivery",
        "Automated maintenance scheduling and customer notifications",
        "Advanced analytics for service optimization and improvements",
        "Comprehensive database for personalized customer service"
      ]
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
            
            {/* Video Explanation Frame */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative mt-20 mb-16"
            >
              <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center px-6 py-3 rounded-full bg-black text-white text-sm font-medium backdrop-blur-sm mb-6"
                  >
                    <Zap className="w-5 h-5 mr-3 animate-pulse" />
                    Technology in Action
                  </motion.div>
                  <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    See ATES in Action
                  </h3>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Watch how our advanced technology seamlessly integrates with commercial vehicles to provide unmatched safety and efficiency.
                  </p>
                </div>

                {/* Creative Video Frame */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Decorative Background Elements */}
                  <div className="absolute -inset-8 bg-gradient-to-r from-primary-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary-600/30 via-purple-600/30 to-blue-600/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  
                  {/* Main Video Container */}
                  <div className="relative bg-white rounded-2xl shadow-2xl p-8 group-hover:shadow-3xl transition-all duration-500">

                    {/* Video Frame with Enhanced Styling */}
                    <div className="video-frame bg-gray-900 relative">
                      {/* Video Element */}
                      <video
                        ref={videoRef}
                        className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-[1.02] relative z-20"
                        controls
                        autoPlay
                        loop
                        muted
                        preload="auto"
                        playsInline
                        webkit-playsinline="true"
                        x5-playsinline="true"
                        style={{ objectPosition: 'center' }}
                        onLoadedData={() => {
                          if (videoRef.current) {
                            // Start muted initially
                            videoRef.current.muted = true;
                            setIsMuted(true);
                            videoRef.current.play().catch(() => console.log('Video autoplay failed'));
                          }
                        }}
                        onPlay={() => {
                          setIsPlaying(true);
                          console.log('Video started playing');
                        }}
                        onPause={() => {
                          setIsPlaying(false);
                          console.log('Video paused');
                        }}
                        onVolumeChange={() => {
                          if (videoRef.current) {
                            setIsMuted(videoRef.current.muted);
                          }
                        }}
                        onTimeUpdate={handleTimeUpdate}
                        onError={(e) => {
                          console.error('Video error:', e);
                        }}
                      >
                        <source src="/media/teq.mp4" type="video/mp4" />
                        <source src="/media/hero-background-new.mp4" type="video/mp4" />
                        <p className="text-white p-4 bg-gray-800/50 rounded">Your browser does not support the video tag. Please make sure your browser supports HTML5 video and try refreshing the page.</p>
                      </video>

                      {/* Gradient Overlay for Style - Lower z-index so it doesn't block controls */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 z-10 pointer-events-none"></div>
                      
                      {/* Custom Control Buttons - Positioned to not interfere with native controls */}
                      <div className="absolute top-2 left-2 z-30 flex gap-2 pointer-events-auto">
                        {/* Play/Pause Button */}
                        <motion.button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            togglePlay();
                          }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/40 hover:bg-black/90 transition-all duration-300 cursor-pointer"
                          title={isPlaying ? 'Pause Video' : 'Play Video'}
                          type="button"
                        >
                          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                        </motion.button>

                        {/* Mute/Unmute Button */}
                        <motion.button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleMute();
                          }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-10 h-10 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/40 hover:bg-black/90 transition-all duration-300 cursor-pointer"
                          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                          type="button"
                        >
                          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </motion.button>
                      </div>
                      
                      
                      {/* Video Quality Badge */}
                      <div className="absolute top-4 right-4 z-30 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium border border-white/20">
                        4K HD
                      </div>

                      {/* Creative CTA Overlay - Shows at 20 seconds */}
                      {showCTAOverlay && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="absolute inset-0 z-40 bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-md flex items-center justify-center"
                        >
                          <div className="text-center text-white p-4 max-w-md">
                            {/* Compact border */}
                            <div className="border-2 border-primary-500 rounded-lg p-6 bg-gradient-to-br from-primary-900/20 to-purple-900/20">
                              <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                              >
                                <h3 className="text-xl font-bold mb-3 text-white">
                                  Want to Know More?
                                </h3>
                                
                                <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                                  We believe technology shows its true value in 
                                  <span className="text-primary-400 font-semibold">real-world applications</span>. 
                                  Let's connect one-on-one.
                                </p>
                                
                                <div className="flex flex-col gap-2 justify-center">
                                  <motion.button
                                    onClick={contactSales}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow-lg transition-all duration-300"
                                  >
                                    📧 Email Sales
                                  </motion.button>
                                  
                                  <motion.button
                                    onClick={() => {
                                      window.open('tel:+91-9876543210', '_self');
                                      setShowCTAOverlay(false);
                                      resumeVideo();
                                    }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow-lg transition-all duration-300"
                                  >
                                    📞 Call Sales
                                  </motion.button>
                                  
                                  <motion.button
                                    onClick={resumeVideo}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-transparent hover:bg-white/10 text-white px-4 py-2 rounded-lg font-medium text-xs border border-white/30 hover:border-white/50 transition-all duration-300 mt-1"
                                  >
                                    Continue Video
                                  </motion.button>
                                </div>
                                
                                <p className="text-xs text-gray-400 mt-3 italic">
                                  "Real results. Real conversations."
                                </p>
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Video Description */}
                    <div className="mt-6 text-center">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        The Crux Behind Our ATES Technology
                      </h4>
                      <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Discover the fundamental principles and innovative engineering that power our Automatic Tyre Equalisation System.
                        This in-depth exploration reveals the core technology, real-world applications, and the transformative impact
                        on commercial vehicle safety and operational efficiency.
                      </p>
                      
                      {/* Key Features Tags */}
                      <div className="flex flex-wrap justify-center gap-3 mt-6">
                        {[
                          { label: "Real-time Monitoring", color: "bg-blue-100 text-blue-700" },
                          { label: "Safety First", color: "bg-purple-100 text-purple-700" },
                          { label: "Fuel Efficiency", color: "bg-orange-100 text-orange-700" }
                        ].map((tag, index) => (
                          <motion.span
                            key={tag.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`px-4 py-2 rounded-full text-sm font-medium ${tag.color} hover:scale-105 transition-transform duration-200`}
                          >
                            {tag.label}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        }
      />

      {/* Technology Development Timeline */}
      <StoryTimeline
        title="The Innovation Journey"
        subtitle="From concept to cutting-edge technology - the evolution of ATES"
        events={timelineEvents}
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
                category: "Wick Inspection App",
                specs: [
                  { label: "Platform Support", value: "iOS & Android" },
                  { label: "Database System", value: "Proprietary SQL" },
                  { label: "Real-time Updates", value: "Yes" },
                  { label: "Offline Mode", value: "Full Featured" },
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
                onClick={navigateToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                Schedule Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={showTechnicalDocsPopup}
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 cursor-pointer"
              >
                Technical Docs
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Docs Popup */}
      {showTechDocsPopup && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowTechDocsPopup(false)}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Documentation</h3>
              <p className="text-gray-600 leading-relaxed">
                Hey there! We're currently working on our comprehensive technical documentation.
                But don't worry - I'd love to have a conversation with you about our ATES technology,
                answer any technical questions you have, and walk you through how it all works.
                Let's connect and chat about it!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setShowTechDocsPopup(false);
                  navigateToContact();
                }}
                className="mt-6 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
};

export default TechnologyPage;
