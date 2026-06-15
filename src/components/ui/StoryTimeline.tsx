'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  highlight?: boolean;
}

interface StoryTimelineProps {
  events: TimelineEvent[];
  title: string;
  subtitle?: string;
}

const StoryTimeline: React.FC<StoryTimelineProps> = ({ events, title, subtitle }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-gray-900 bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200 rounded-full">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary-500 to-primary-700 rounded-full"
            />
          </div>

          {/* Timeline Events */}
          <div className="space-y-16">
            {events.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative flex items-start"
              >
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                      event.highlight 
                        ? 'bg-white border-4 border-primary-300' 
                        : 'bg-white border-4 border-primary-200 text-gray-900'
                    }`}
                  >
                    {event.icon ? (
                      <div className="text-center">
                        {event.icon}
                      </div>
                    ) : (
                      <span className="text-sm font-bold text-gray-900">{event.year}</span>
                    )}
                  </motion.div>
                  
                  {/* Glow Effect */}
                  {event.highlight && (
                    <motion.div
                      initial={{ opacity: 1, scale: 1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                      className="absolute inset-0 bg-primary-500 rounded-full animate-ping opacity-20"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="ml-8 flex-1 pb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    className={`p-8 rounded-2xl shadow-lg border ${
                      event.highlight 
                        ? 'bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200' 
                        : 'bg-white border-gray-100'
                    }`}
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-2xl font-bold text-gray-900 mr-4">
                        {event.year}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {event.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {event.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Future Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative flex items-center mt-16"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center shadow-lg relative z-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 border-2 border-dashed border-white rounded-full"
              />
            </div>
            
            <div className="ml-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                The Future
              </h3>
              <p className="text-gray-600 text-lg">
                Continuing to innovate and lead the automotive safety revolution...
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoryTimeline;
