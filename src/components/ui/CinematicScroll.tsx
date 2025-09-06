'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface CinematicScrollProps {
  children: React.ReactNode;
  trigger?: 'scroll' | 'auto';
  speed?: 'slow' | 'normal' | 'fast';
  direction?: 'up' | 'down' | 'left' | 'right';
}

const CinematicScroll: React.FC<CinematicScrollProps> = ({
  children,
  trigger = 'scroll',
  speed = 'normal',
  direction = 'up'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const speedMultiplier = {
    slow: 0.5,
    normal: 1,
    fast: 2
  }[speed];

  const getTransform = () => {
    const distance = 200 * speedMultiplier;
    switch (direction) {
      case 'up':
        return useTransform(scrollYProgress, [0, 1], [distance, -distance]);
      case 'down':
        return useTransform(scrollYProgress, [0, 1], [-distance, distance]);
      case 'left':
        return useTransform(scrollYProgress, [0, 1], [distance, -distance]);
      case 'right':
        return useTransform(scrollYProgress, [0, 1], [-distance, distance]);
      default:
        return useTransform(scrollYProgress, [0, 1], [distance, -distance]);
    }
  };

  const transform = getTransform();
  const smoothTransform = useSpring(transform, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  useEffect(() => {
    if (trigger === 'scroll') {
      const unsubscribe = scrollYProgress.onChange((value) => {
        if (value > 0.1 && !hasScrolled) {
          setHasScrolled(true);
        }
      });
      return unsubscribe;
    }
  }, [scrollYProgress, hasScrolled, trigger]);

  const getMotionStyle = () => {
    if (direction === 'left' || direction === 'right') {
      return {
        x: smoothTransform,
        opacity,
        scale
      };
    }
    return {
      y: smoothTransform,
      opacity,
      scale
    };
  };

  return (
    <div ref={containerRef} className="relative">
      <motion.div
        style={getMotionStyle()}
        initial={{ opacity: 0 }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default CinematicScroll;
