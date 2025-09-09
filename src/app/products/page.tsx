'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Shield, Zap, TrendingUp, CheckCircle, Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/layout/Navigation';

const ProductCard = ({ product, index }: { product: any; index: number }) => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
    >
      <div className="relative h-64 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full flex items-center justify-center"
        >
          {product.image}
        </motion.div>
        <div className="absolute top-4 right-4">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {product.badge}
          </span>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>

        <p className="text-gray-800 font-medium mb-6 leading-relaxed">{product.description}</p>

        <div className="space-y-3 mb-8">
          {product.features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
              <span className="text-gray-800 font-medium">{feature}</span>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-xl border-2 border-primary-200 h-32 flex flex-col justify-between">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-2">{product.price}</div>
            <p className="text-sm font-semibold text-gray-700">Tailored for your fleet size & needs</p>
          </div>
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all duration-200 flex items-center shadow-lg"
            >
              <span className="text-white font-bold">Get Quote</span>
              <ArrowRight className="ml-2 w-4 h-4 text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProductsPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const router = useRouter();

  const navigateToContact = () => {
    router.push('/contact');
  };

  const downloadBrochure = () => {
    // Create a link to download the brochure
    const link = document.createElement('a');
    link.href = '/media/WICK BROUCHURE ATES_compressed.pdf';
    link.download = 'WICK BROUCHURE ATES_compressed.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const products = [
    {
      name: "Tyre Rakhshak ATES Pro",
      description: "Advanced Automatic Tyre Equalisation System designed for heavy commercial vehicles with real-time monitoring and intelligent pressure adjustment.",
      price: "Contact for Quote",
      badge: "Bestseller",
      features: [
        "Real-time pressure monitoring",
        "Automatic pressure adjustment",
        "IoT connectivity",
        "Mobile app control",
        "25% increased tyre life",
        "15% better fuel efficiency"
      ],
      image: (
        <div className="relative">
          <div className="w-32 h-32 bg-primary-500 rounded-lg mx-auto flex items-center justify-center">
            <Shield className="w-16 h-16 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>
        </div>
      )
    },
    {
      name: "Tyre Rakhshak ATES Standard",
      description: "Essential tyre equalisation system for commercial vehicles with core safety features and manual monitoring capabilities.",
      price: "Get Custom Pricing",
      badge: "Popular",
      features: [
        "Manual pressure monitoring",
        "Basic equalisation system",
        "Durable construction",
        "Easy installation",
        "20% increased tyre life",
        "10% better fuel efficiency"
      ],
      image: (
        <div className="relative">
          <div className="w-32 h-32 bg-primary-400 rounded-lg mx-auto flex items-center justify-center">
            <TrendingUp className="w-16 h-16 text-white" />
          </div>
        </div>
      )
    },
    {
      name: "Tyre Rakhshak ATES Enterprise",
      description: "Complete fleet management solution with advanced analytics, predictive maintenance, and comprehensive monitoring for large commercial operations.",
      price: "Enterprise Solution",
      badge: "Premium",
      features: [
        "Fleet management dashboard",
        "Predictive maintenance",
        "Advanced analytics",
        "24/7 monitoring",
        "Custom integration",
        "Comprehensive support"
      ],
      image: (
        <div className="relative">
          <div className="w-32 h-32 bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg mx-auto flex items-center justify-center">
            <Zap className="w-16 h-16 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
            <Star className="w-5 h-5 text-white" />
          </div>
        </div>
      )
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
              Our <span className="text-primary-600 font-bold">Products</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Discover our range of innovative Automatic Tyre Equalisation Systems designed to enhance safety, 
              improve efficiency, and reduce operational costs for commercial vehicles.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.name} product={product} index={index} />
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
              Need Help Choosing?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Our experts are here to help you select the perfect ATES solution for your fleet. 
              Contact us for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={navigateToContact}
                className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                Contact Expert
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadBrochure}
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 cursor-pointer"
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;
