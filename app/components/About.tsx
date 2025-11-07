'use client';

import { motion } from 'framer-motion';
import { FaUtensils } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full p-6 w-fit mx-auto mb-6"
          >
            <FaUtensils className="w-16 h-16 md:w-20 md:h-20 text-teal-500 dark:text-teal-400" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            About Restaurant Management System
          </h2>
          <div className="space-y-4 text-left text-slate-600 dark:text-gray-300 text-base md:text-lg">
            <p>
              Restaurant Management System is a comprehensive, modern solution designed to help restaurant owners 
              manage their operations efficiently. Built with cutting-edge technology, our system provides everything 
              you need to run your restaurant smoothly.
            </p>
            <p>
              We're currently working on bringing you an online version that will be accessible from anywhere, 
              with all the features you love from the desktop application, plus the convenience of cloud-based access.
            </p>
            <p>
              Join our waitlist to be notified when we launch and get early access to the online version!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

