'use client';

import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, TrendingUp, Shield, Zap, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Navigation from '@/components/layout/Navigation';

const BlogPage = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });

  const featuredPost = {
    title: "The Future of Commercial Vehicle Safety: How ATES is Revolutionizing Indian Highways",
    excerpt: "Discover how Automatic Tyre Equalisation Systems are transforming the commercial vehicle industry and reducing accidents across Indian highways.",
    author: "Wick Team",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Technology",
    image: "/api/placeholder/800/400",
    slug: "future-commercial-vehicle-safety"
  };

  const blogPosts = [
    {
      title: "Understanding Tire Pressure: Why It Matters More Than You Think",
      excerpt: "Explore the science behind optimal tire pressure and its impact on safety, fuel efficiency, and tire longevity.",
      author: "Technical Team",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Education",
      icon: <Shield className="w-6 h-6" />,
      slug: "understanding-tire-pressure"
    },
    {
      title: "Fleet Management in the Digital Age: Leveraging IoT for Better Operations",
      excerpt: "How IoT technology is transforming fleet management and creating new opportunities for operational efficiency.",
      author: "Innovation Team",
      date: "December 8, 2024",
      readTime: "6 min read",
      category: "Innovation",
      icon: <Zap className="w-6 h-6" />,
      slug: "fleet-management-digital-age"
    },
    {
      title: "Case Study: 25% Reduction in Tire-Related Incidents with ATES",
      excerpt: "Real-world results from a major logistics company that implemented our ATES technology across their fleet.",
      author: "Success Team",
      date: "December 5, 2024",
      readTime: "7 min read",
      category: "Case Study",
      icon: <TrendingUp className="w-6 h-6" />,
      slug: "case-study-25-reduction"
    },
    {
      title: "The Economics of Tire Management: Cost Savings Through Prevention",
      excerpt: "Breaking down the financial benefits of proactive tire management and how ATES delivers measurable ROI.",
      author: "Business Team",
      date: "December 1, 2024",
      readTime: "6 min read",
      category: "Business",
      icon: <TrendingUp className="w-6 h-6" />,
      slug: "economics-tire-management"
    },
    {
      title: "Safety First: How Technology is Making Indian Roads Safer",
      excerpt: "An in-depth look at how modern technology solutions are addressing road safety challenges in India.",
      author: "Safety Team",
      date: "November 28, 2024",
      readTime: "8 min read",
      category: "Safety",
      icon: <Shield className="w-6 h-6" />,
      slug: "safety-first-technology"
    },
    {
      title: "Building Trust Through Transparency: Our Journey to Industry Leadership",
      excerpt: "The story of how Wick built trust with customers through transparent communication and reliable technology.",
      author: "Leadership Team",
      date: "November 25, 2024",
      readTime: "5 min read",
      category: "Company",
      icon: <Users className="w-6 h-6" />,
      slug: "building-trust-transparency"
    }
  ];

  const categories = [
    { name: "All", count: 12, active: true },
    { name: "Technology", count: 4, active: false },
    { name: "Safety", count: 3, active: false },
    { name: "Case Studies", count: 2, active: false },
    { name: "Innovation", count: 2, active: false },
    { name: "Business", count: 1, active: false }
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
              Insights &{' '}<span className="text-black font-bold">Innovation</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Stay updated with the latest insights, innovations, and developments in 
              commercial vehicle safety and tire management technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  category.active
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Article</h2>
            
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-primary-200 to-primary-300 h-80 lg:h-auto flex items-center justify-center">
                  <div className="text-center text-black">
                    <Zap className="w-24 h-24 mx-auto mb-4 drop-shadow-2xl filter" style={{filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.3)) drop-shadow(2px 2px 4px rgba(0,0,0,0.2))', transform: 'perspective(100px) rotateX(10deg)'}} />
                    <p className="text-lg font-semibold drop-shadow-lg">Featured Article</p>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full uppercase tracking-wide">
                      {featuredPost.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center bg-primary-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-600 transition-colors group"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
          >
            Latest Articles
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-black">
                      {post.icon}
                      <span className="ml-2 text-sm font-semibold uppercase tracking-wide">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center text-primary-500 font-semibold text-sm group-hover:text-primary-600"
                      >
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-600 transition-colors"
            >
              Load More Articles
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Stay Updated with Our Insights
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Subscribe to our newsletter and get the latest articles, case studies, and 
              industry insights delivered straight to your inbox.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
