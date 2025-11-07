'use client';

import { motion } from 'framer-motion';
import { FaUtensils, FaChartLine, FaCloud, FaMobileAlt, FaShieldAlt, FaClock } from 'react-icons/fa';
import { containerAnimation, itemAnimation } from './animations';

const features = [
  {
    icon: FaUtensils,
    title: 'Complete POS System',
    description: 'Full-featured point of sale system for managing orders, payments, and transactions.'
  },
  {
    icon: FaChartLine,
    title: 'Real-time Analytics',
    description: 'Get insights into your restaurant performance with comprehensive analytics and reports.'
  },
  {
    icon: FaCloud,
    title: 'Cloud Sync',
    description: 'Access your data from anywhere with secure cloud synchronization across devices.'
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile Friendly',
    description: 'Responsive design that works seamlessly on desktop, tablet, and mobile devices.'
  },
  {
    icon: FaShieldAlt,
    title: 'Secure & Private',
    description: 'Your data is encrypted and secure. We prioritize your privacy and data protection.'
  },
  {
    icon: FaClock,
    title: '24/7 Available',
    description: 'Access your restaurant management system anytime, anywhere with cloud-based access.'
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to manage your restaurant efficiently
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-colors"
            >
              <feature.icon className="w-10 h-10 text-teal-600 dark:text-teal-400 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

