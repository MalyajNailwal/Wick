'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Sparkles, Bot, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/layout/Navigation';
import WickAI from '@/components/ui/WickAI';

const ContactPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [formRef, formInView] = useInView({ threshold: 0.2 });

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8 text-primary-700" />,
      title: "Email",
      info: "office@wick.co.in",
      description: "Get in touch via email"
    },
    {
      icon: <Phone className="w-8 h-8 text-primary-700" />,
      title: "Phone",
      info: "+91 9721601500",
      description: "Call us during business hours"
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary-700" />,
      title: "Address",
      info: "House Of Wick, 33B, NIT, Faridabad 121001",
      description: "Visit our office"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary-700" />,
      title: "Business Hours",
      info: "Mon-Sat: 10AM-6PM",
      description: "We're available during these hours"
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
              Contact{' '}<span className="text-black font-bold">Us</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed space-y-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-medium shadow-lg"
              >
                Introducing Wick AI - Our New AI Assistant!
              </motion.div>

              <p>
                Meet Wick AI, our revolutionary AI assistant designed specifically for fleet management and tire technology.
                Get instant answers to your questions about ATES, tire safety, and fleet optimization.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="inline-flex items-center justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    // Find the WickAI component and trigger its open state
                    const chatButton = document.querySelector('[data-wick-ai-toggle]') as HTMLButtonElement;
                    if (chatButton) {
                      chatButton.click();
                    }
                  }}
                  className="bg-white border border-gray-200 rounded-lg px-6 py-4 shadow-md hover:shadow-lg hover:border-primary-300 transition-all duration-200 max-w-md cursor-pointer"
                >
                  <div className="flex items-center space-x-4">
                    {/* Professional badge */}
                    <div className="flex items-center space-x-2">
                      <div className="inline-flex items-center px-2 py-1 bg-black text-white rounded text-xs font-semibold">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse"></div>
                        Now Available
                      </div>
                    </div>

                    {/* Bot icon and text */}
                    <div className="flex items-center space-x-3">
                      <Bot className="w-6 h-6 text-primary-600" />
                      <div className="text-left">
                        <h3 className="text-sm font-bold text-gray-900">
                          Wick AI Assistant
                        </h3>
                        <p className="text-xs text-gray-600">
                          Try our new AI chat support
                        </p>
                      </div>
                    </div>

                    {/* Arrow indicator */}
                    <motion.div
                      animate={{ x: [0, 2, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="text-primary-600"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section ref={formRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Send us a Message
                </h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Enter your first name"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Enter your last name"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Enter your company name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-vertical"
                      placeholder="Enter your message..."
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center"
                    >
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </motion.button>
                  </motion.div>
                </form>
              </div>
            </motion.div>

            {/* Map & Office Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="bg-gray-200 h-80 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14036.780895076813!2d77.31447047770996!3d28.37644750000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc8b85a4b31d%3A0x7f52b5e0c5b4b6b8!2sNIT%2C%20Faridabad%2C%20Haryana%20121001!5e0!3m2!1sen!2sin!4v1672901234567!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Wick Office Location"
                />
              </div>

              {/* Office Info */}
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Visit Our Office
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-primary-800 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">House Of Wick, 33B, NIT, Faridabad 121001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-primary-800 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Office Hours</p>
                      <p className="text-gray-600">Monday - Saturday: 10:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-primary-800 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-900 font-medium">+91 9721601500</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-primary-800 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-900 font-medium">office@wick.co.in</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our ATES technology
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How does the Automatic Tyre Equalisation System work?",
                answer: "ATES continuously monitors tire pressure across all wheels and automatically adjusts pressure to maintain optimal levels, ensuring better safety, fuel efficiency, and tire longevity."
              },
              {
                question: "What types of vehicles are compatible with ATES?",
                answer: "Our ATES is specifically designed for Heavy Commercial Vehicles (HCVs) including trucks, trailers, and buses. We offer different models for various vehicle configurations."
              },
              {
                question: "What is the installation process and downtime?",
                answer: "Installation typically takes 4-6 hours and can be done at your facility or our service centers. Minimal downtime is required, and we provide comprehensive training to your maintenance team."
              },
              {
                question: "Do you provide ongoing support and maintenance?",
                answer: "Yes, we offer comprehensive support including 24/7 technical assistance, regular maintenance schedules, and replacement parts. Our support team ensures optimal system performance."
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to revolutionize your fleet? Contact us through any of these channels
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white/15 transition-all duration-300 border border-white/10"
              >
                <div className="mb-4 flex justify-center text-primary-400">
                  {contact.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {contact.title}
                </h3>
                <p className="text-white font-medium mb-2">
                  {contact.info}
                </p>
                <p className="text-sm text-gray-300">
                  {contact.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Footer Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-gray-700 text-center"
          >
            <p className="text-gray-400 text-sm">
              © 2024 Wick Automation LLP. All rights reserved. | Making India's highways safer, one tire at a time.
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Wick AI Chat Component */}
      <WickAI />
    </main>
  );
};

export default ContactPage;
