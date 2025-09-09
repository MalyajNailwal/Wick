'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Shield, Zap, TrendingUp, Users, Star, ChevronDown, Lightbulb, AlertTriangle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/layout/Navigation';
import StoryChapter from '@/components/ui/StoryChapter';

const PrologueSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [needsUserInteraction, setNeedsUserInteraction] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Initialize client-side state
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle user interaction for video play
  useEffect(() => {
    if (!isClient || !needsUserInteraction) return;
    
    const handleClick = async () => {
      const video = document.querySelector('video');
      if (video) {
        try {
          await video.play();
          console.log('Video started after user interaction');
          setNeedsUserInteraction(false);
        } catch (error) {
          console.error('Failed to play video after click:', error);
        }
      }
    };

    document.addEventListener('click', handleClick, { once: true });
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isClient, needsUserInteraction]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background - Main Background */}
      <div className="absolute inset-0 z-0 bg-slate-900">
        {isClient ? (
          <>
            {!videoError ? (
              <video
                key="hero-video"
                autoPlay
                muted 
                loop 
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
                style={{
                  filter: 'brightness(0.9) contrast(1.1) saturate(1.1)',
                  minWidth: '100%',
                  minHeight: '100%',
                  objectPosition: 'center',
                }}
                onCanPlay={() => {
                  console.log('Video can play successfully');
                  setVideoLoaded(true);
                }}
                onError={() => {
                  console.log('Video failed to load, showing fallback');
                  setVideoError(true);
                }}
                onLoadedData={() => {
                  console.log('Video data loaded - attempting autoplay');
                }}
                suppressHydrationWarning
              >
                <source src="/media/hero-background-new.mp4" type="video/mp4" />
                <source src="/media/hero-background.mp4" type="video/mp4" />
              </video>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900" />
            )}
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-gray-900 to-black" />
        )}
        {/* Loading state */}
        {!videoLoaded && !videoError && isClient && (
          <div className="absolute inset-0 bg-slate-900 flex items-center justify-center z-10">
            <div className="flex flex-col items-center space-y-6">
              <div className="relative">
                <div className="w-12 h-12 border-2 border-primary-500/30 border-t-primary-500 rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary-500/20 rounded-full"></div>
                </div>
              </div>
              <div className="text-white/70 text-sm font-light tracking-wide">Loading</div>
            </div>
          </div>
        )}
        
        {/* User interaction needed indicator */}
        {needsUserInteraction && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="bg-black/60 backdrop-blur-sm text-white/90 px-4 py-2 rounded-lg text-xs font-light border border-white/20">
              Click to play
            </div>
          </div>
        )}
        
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Minimal Stars Effect - Only a few subtle stars */}
      <div className="absolute inset-0 z-10">
        {[
          { left: 15, top: 20, delay: 1.5 },
          { left: 75, top: 30, delay: 2.2 },
          { left: 30, top: 70, delay: 0.8 },
          { left: 85, top: 15, delay: 1.8 },
          { left: 45, top: 85, delay: 2.5 },
        ].map((star, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>
      
      <div ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
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
              whileHover={{ scale: 1.05 }}
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
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


// Product Image Component with Tire Rotation Effect
const ProductImageWithRotation = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Transform scroll progress to rotation (360 degrees per full scroll)
  const tireRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  
  // Detect when scrolling stops
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      // Set scrolling to false after 150ms of no scrolling
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);
  
  return (
    <div ref={sectionRef} className="relative">
      {/* Product Image Container with Beautiful Styling */}
      <div className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 shadow-2xl">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-emerald-300"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        </div>
        
        {/* Main Product Image with Rotation Effect */}
        <div className="relative h-full flex items-center justify-center p-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 30 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative max-w-full max-h-full cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.05 }}
          >
            {/* Main Product Image with smart rotation effects */}
            <motion.img
              src="/media/productimghd-removebg-preview.png"
              alt="Tyre Rakhshak - ATES Product"
              className="w-full h-full object-contain drop-shadow-2xl filter brightness-105 contrast-105"
              style={{
                maxHeight: '450px',
                maxWidth: '650px',
                // Only use scroll rotation when not hovering or when scrolling
                rotate: (isScrolling || !isHovered) ? tireRotation : 0
              }}
              animate={
                // Fast rotation only when hovered AND not scrolling (page is stable)
                isHovered && !isScrolling ? { rotate: [0, 360] } : {}
              }
              transition={{
                duration: isHovered && !isScrolling ? 0.6 : 0,
                repeat: isHovered && !isScrolling ? Infinity : 0,
                ease: "linear",
                repeatType: "loop"
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                console.log('Image failed to load:', target.src);
                target.style.display = 'none';
              }}
              onLoad={() => console.log('Product image loaded successfully')}
            />
            
            {/* Enhanced Glowing Effect Behind Product - Intensifies on hover */}
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-green-400/20 to-emerald-400/20 blur-xl rounded-full -z-10"
              animate={isHovered ? {
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              } : {}}
              transition={{
                duration: 0.8,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
            ></motion.div>
            
            {/* Hover instruction tooltip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: inView && !isHovered && !isScrolling ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 2 }}
              className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap pointer-events-none"
            >
              Hover to see our speed!
            </motion.div>
          </motion.div>
        </div>
        
        {/* Premium Border Effect */}
        <div className="absolute inset-0 rounded-3xl border-2 border-gradient-to-br from-green-200 to-emerald-200 opacity-50"></div>
        
        {/* Subtle Corner Accents */}
        <div className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-green-300 rounded-tr-2xl opacity-30"></div>
        <div className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-emerald-300 rounded-bl-2xl opacity-30"></div>
      </div>
      
      {/* Clean Product Badge */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full shadow-xl font-semibold text-sm z-10 border-2 border-white"
      >
        TyreRakhshak ATES
      </motion.div>
      
      {/* Innovation Callout - Clean Design */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-200 z-10"
      >
        <p className="text-sm font-medium text-gray-700">
          <span className="text-red-600 font-bold">Our Innovation:</span> This smart hub that monitors tire pressure in real-time
        </p>
      </motion.div>
    </div>
  );
};

const StoryJourney = () => {
  return (
    <>
      {/* Chapter 1: The Problem */}
      <StoryChapter
        chapterNumber="01"
        title="The Highway Crisis"
        subtitle="Every day, Indian highways tell a story of danger"
        layout="left"
        backgroundColor="bg-gradient-to-br from-red-50 to-orange-50"
        content={
          <div className="space-y-6 text-gray-700">
            <p className="text-xl leading-relaxed text-center max-w-4xl mx-auto">
              In 2020, even amidst pandemic lockdowns and reduced traffic, India still recorded over 
              <strong className="text-red-600">366,000 road accidents</strong>, claiming approximately 
              <strong className="text-red-600">131,700 lives</strong>.
            </p>
            <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto text-gray-600 mt-4">
              Heavy commercial vehicles bore a disproportionate share of this tragedy. 
              <strong className="text-red-600">12,752 crashes involved trucks and lorries</strong>, leading to more than 
              <strong className="text-red-600">5,200 deaths</strong>. Poor tire maintenance, overloading, and mechanical defects 
              ensured that accidents remained deadly.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-red-100 hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-red-600 mb-2">12.7K+</div>
                <div className="text-sm font-medium text-gray-700">Truck Accidents</div>
                <div className="text-xs text-gray-500">Reported in 2020</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-red-100 hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-red-600 mb-2">5.2K+</div>
                <div className="text-sm font-medium text-gray-700">Heavy Vehicle Deaths</div>
                <div className="text-xs text-gray-500">In 2020</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-gray-600 mb-2">366K+</div>
                <div className="text-sm font-medium text-gray-700">Total Accidents</div>
                <div className="text-xs text-gray-500">All vehicles</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-gray-600 mb-2">131K+</div>
                <div className="text-sm font-medium text-gray-700">Total Deaths</div>
                <div className="text-xs text-gray-500">All vehicles</div>
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
              In 2021, our founders looked at this crisis and saw an opportunity. 
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

      {/* Chapter 3: The Solution */}
      <StoryChapter
        chapterNumber="03"
        title="ATES: The Hero Emerges"
        subtitle="Meet TyreRakhshak - India's guardian angel for highways"
        layout="center"
        backgroundColor="bg-gradient-to-br from-green-50 to-emerald-50"
        content={
          <div className="space-y-8 text-gray-700">
            <p className="text-xl leading-relaxed text-center">
              After years of innovation, <strong className="text-red-600">TyreRakhshak</strong> emerged -
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
                <p className="text-gray-600">Intelligent sensor-based real-time monitoring</p>
              </motion.div>
            </div>
          </div>
        }
        visual={
          <ProductImageWithRotation />
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
  const router = useRouter();

  const navigateToContact = () => {
    router.push('/contact');
  };

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
              onClick={navigateToContact}
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              Get Started Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={navigateToContact}
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 cursor-pointer"
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
