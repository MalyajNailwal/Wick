'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface StoryChapterProps {
  chapterNumber: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  visual?: React.ReactNode;
  layout?: 'left' | 'right' | 'center' | 'full';
  backgroundColor?: string;
  textColor?: string;
  parallax?: boolean;
}

const StoryChapter: React.FC<StoryChapterProps> = ({
  chapterNumber,
  title,
  subtitle,
  content,
  visual,
  layout = 'left',
  backgroundColor = 'bg-white',
  textColor = 'text-gray-900',
  parallax = false
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inViewRef, inView] = useInView({ threshold: 0.3 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const getLayoutClasses = () => {
    switch (layout) {
      case 'right':
        return 'lg:grid-cols-2 lg:gap-16';
      case 'center':
        return 'lg:grid-cols-1 text-center max-w-4xl mx-auto';
      case 'full':
        return 'lg:grid-cols-1';
      default:
        return 'lg:grid-cols-2 lg:gap-16';
    }
  };

  const getContentOrder = () => {
    if (layout === 'right') {
      return { content: 'lg:order-2', visual: 'lg:order-1' };
    }
    return { content: 'lg:order-1', visual: 'lg:order-2' };
  };

  const { content: contentOrder, visual: visualOrder } = getContentOrder();

  return (
    <section 
      ref={sectionRef}
      className={`relative min-h-screen flex items-center py-24 ${backgroundColor} overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-gray-900 bg-[size:60px_60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div ref={inViewRef} className={`grid items-center gap-12 ${getLayoutClasses()}`}>
          {/* Content */}
          <motion.div
            style={parallax ? { y, opacity } : undefined}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`space-y-8 ${contentOrder} ${layout === 'center' ? 'text-center' : ''}`}
          >
            {/* Chapter Number */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <span className="text-8xl md:text-9xl font-display font-bold text-primary-100 leading-none select-none">
                {chapterNumber}
              </span>
              <div className={`absolute inset-0 flex items-center ${layout === 'center' ? 'justify-center' : 'justify-start'}`}>
                <span className="text-lg font-semibold text-gray-800 tracking-wider uppercase">
                  Chapter {chapterNumber}
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-4xl md:text-6xl font-display font-bold leading-tight ${textColor}`}
            >
              {title}
            </motion.h2>

            {/* Subtitle */}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-700 font-medium"
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
            )}

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="prose prose-lg max-w-none"
            >
              {content}
            </motion.div>
          </motion.div>

          {/* Visual */}
          {visual && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`${visualOrder} ${layout === 'center' ? 'mt-12' : ''}`}
            >
              {visual}
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-primary-300 rounded-full p-1"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-primary-500 rounded-full mx-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StoryChapter;
