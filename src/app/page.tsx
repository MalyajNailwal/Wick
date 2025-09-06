'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Shield, Zap, TrendingUp, Users, Star, ChevronDown, AlertTriangle, Lightbulb, Target, Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';
import Navigation from '@/components/layout/Navigation';
import CarModel from '@/components/3d/CarModel';
import StoryChapter from '@/components/ui/StoryChapter';
import StoryTimeline from '@/components/ui/StoryTimeline';

const PrologueSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Animated Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-20"
      >
        <div className="absolute inset-0 bg-grid-white bg-[size:100px_100px]"></div>
      </motion.div>
      
      {/* Stars Effect */}
      <div className="absolute inset-0">
        {[
          { left: 10, top: 20, delay: 0.5 },
          { left: 25, top: 15, delay: 1.2 },
          { left: 40, top: 30, delay: 0.8 },
          { left: 60, top: 10, delay: 2.1 },
          { left: 75, top: 25, delay: 1.5 },
          { left: 90, top: 35, delay: 0.3 },
          { left: 15, top: 50, delay: 1.8 },
          { left: 35, top: 45, delay: 0.9 },
          { left: 55, top: 55, delay: 1.7 },
          { left: 80, top: 60, delay: 0.6 },
          { left: 5, top: 70, delay: 2.3 },
          { left: 30, top: 75, delay: 1.1 },
          { left: 65, top: 80, delay: 1.9 },
          { left: 85, top: 85, delay: 0.4 },
          { left: 20, top: 90, delay: 1.6 },
          { left: 45, top: 5, delay: 0.7 },
          { left: 70, top: 40, delay: 2.0 },
          { left: 95, top: 15, delay: 1.3 },
          { left: 12, top: 65, delay: 0.2 },
          { left: 38, top: 8, delay: 1.4 },
        ].map((star, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>
      
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1.2 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-300 text-sm font-medium backdrop-blur-sm"
          >
            <Zap className="w-5 h-5 mr-3 animate-pulse" />
            Once upon a time in India's highways...
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-5xl md:text-7xl font-display font-bold text-white leading-tight"
          >
            The Story of{' '}
            <span className="text-red-500 font-bold">
              Wick
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            A tale of innovation, safety, and the relentless pursuit to make 
            India's roads safer for everyone. This is how we transformed an idea 
            into a revolution.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, glow: true }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-2xl shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-500 flex items-center justify-center mx-auto group"
            >
              Begin Our Story
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="text-primary-400 hover:text-primary-300 transition-colors cursor-pointer"
        >
          <ChevronDown size={36} />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Story data
const timelineEvents = [
  {
    year: "2020",
    title: "The Problem Recognized",
    description: "Tire-related accidents were causing thousands of casualties on Indian highways. Heavy commercial vehicles were suffering from inefficient tire management, leading to increased operational costs and safety hazards.",
    highlight: false
  },
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
  }
];

const StoryJourney = () => {
  return (
    <>
      {/* Chapter 1: The Problem */}
      <StoryChapter
        chapterNumber="01"
        title="The Highway Crisis"
        subtitle="Every day, Indian highways told a story of danger"
        layout="left"
        backgroundColor="bg-gradient-to-br from-red-50 to-orange-50"
        content={
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              In India, commercial vehicles cover over <strong className="text-red-600">2.3 million kilometers</strong> daily 
              on highways. But here's the shocking reality: tire-related failures cause 
              <strong className="text-red-600">over 40,000 accidents</strong> annually on Indian roads.
            </p>
            <p className="text-lg leading-relaxed">
              The Ministry of Road Transport & Highways data reveals that <strong className="text-red-600">15% of all 
              commercial vehicle accidents</strong> are due to tire failures. Fleet operators lose 
              approximately <strong className="text-red-600">₹12,000 crores annually</strong> due to unexpected 
              tire-related breakdowns and accidents.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-2xl font-bold text-red-600 mb-2">40K+</div>
                <div className="text-sm text-gray-600">Annual accidents due to tire issues</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-2xl font-bold text-red-600 mb-2">₹12K Cr</div>
                <div className="text-sm text-gray-600">Annual losses to fleet industry</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-2xl font-bold text-red-600 mb-2">15%</div>
                <div className="text-sm text-gray-600">Of accidents due to tire failure</div>
              </div>
            </div>
          </div>
        }
        visual={
          <div className="relative">
            <div className="bg-gradient-to-br from-red-100 to-orange-100 p-12 rounded-2xl">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0] 
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="text-center"
              >
                <AlertTriangle className="w-32 h-32 text-red-600 mx-auto mb-6 drop-shadow-lg" />
                <h3 className="text-2xl font-bold text-red-700 mb-4">
                  The Crisis Was Real
                </h3>
                <p className="text-red-600">
                  Every broken tire was a story of potential tragedy
                </p>
              </motion.div>
            </div>
          </div>
        }
      />

      {/* Chapter 2: The Vision */}
      <StoryChapter
        chapterNumber="02"
        title="A Vision is Born"
        subtitle="Innovation sparked by determination"
        layout="right"
        backgroundColor="bg-gradient-to-br from-blue-50 to-indigo-50"
        textColor="text-gray-900"
        content={
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              In 2020, our founders looked at this crisis and saw an opportunity. 
              <strong className="text-primary-600">What if technology could predict and prevent</strong> 
              tire failures before they happened?
            </p>
            <p className="text-lg leading-relaxed">
              The idea was revolutionary: an Automatic Tyre Equalisation System that would 
              monitor, analyze, and automatically adjust tire pressure in real-time. 
              No more guesswork, no more tragic accidents.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary-500">
              <h4 className="text-xl font-bold text-primary-600 mb-3">Our Mission</h4>
              <p className="text-gray-700 italic">
                "To make every commercial vehicle journey safer through intelligent 
                tire management technology."
              </p>
            </div>
          </div>
        }
        visual={
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-12 rounded-2xl">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
                className="text-center"
              >
                <Lightbulb className="w-32 h-32 text-yellow-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Eureka Moment
                </h3>
                <p className="text-gray-700">
                  The solution was within reach
                </p>
              </motion.div>
            </div>
          </div>
        }
      />

      {/* Chapter 3: The Journey */}
      <StoryTimeline
        title="The Journey Unfolds"
        subtitle="From concept to reality - here's how we built the future"
        events={timelineEvents}
      />

      {/* Chapter 4: The Solution */}
      <StoryChapter
        chapterNumber="03"
        title="ATES: The Hero Emerges"
        subtitle="Meet Tyre Rakhshak - India's guardian angel for highways"
        layout="center"
        backgroundColor="bg-gradient-to-br from-green-50 to-emerald-50"
        content={
          <div className="space-y-8 text-gray-700">
            <p className="text-xl leading-relaxed text-center">
              After years of innovation, <strong className="text-red-600">Tyre Rakhshak</strong> emerged - 
              not just as a product, but as a guardian angel for India's highways.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Shield className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">25% Safer</h3>
                <p className="text-gray-600">Dramatic reduction in tire-related accidents</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <TrendingUp className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">15% Efficient</h3>
                <p className="text-gray-600">Better fuel efficiency saves millions</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Zap className="w-16 h-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">100% Smart</h3>
                <p className="text-gray-600">AI-powered real-time monitoring</p>
              </motion.div>
            </div>
          </div>
        }
        visual={
          <div className="h-[500px] bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl overflow-hidden">
            <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
              <Suspense fallback={null}>
                <CarModel />
              </Suspense>
            </Canvas>
          </div>
        }
      />
    </>
  );
};

const EpilogueSection = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  
  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">
            Today's Heroes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every day, ATES silently protects thousands of drivers across India's highways
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.div
                key={star}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + star * 0.1 }}
              >
                <Star className="w-8 h-8 text-yellow-400 fill-current mx-1" />
              </motion.div>
            ))}
          </div>
          <blockquote className="text-2xl text-gray-700 mb-8 italic font-light leading-relaxed">
            "Wick didn't just give us a product - they gave us peace of mind. 
            Our drivers return home safely every night, and our operational costs 
            have never been better. This is the future of fleet management."
          </blockquote>
          <div className="text-primary-600 font-semibold text-lg">
            — Anonymous Fleet Director
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  
  return (
    <section ref={ref} className="py-24 bg-gradient-to-r from-primary-600 to-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Revolutionize Your Fleet?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join the future of commercial vehicle technology with Wick's ATES system. 
            Experience enhanced safety, improved efficiency, and reduced operational costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
            >
              Get Started Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Contact Sales
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <PrologueSection />
      <StoryJourney />
      <EpilogueSection />
      <CTASection />
    </main>
  );
}
