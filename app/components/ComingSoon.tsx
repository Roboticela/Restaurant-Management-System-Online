'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaClock, FaEnvelope, FaUser, FaCheckCircle } from 'react-icons/fa';
import { containerAnimation, itemAnimation, iconAnimation } from './animations';

export default function ComingSoon() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist');
      }

      setIsSuccess(true);
      setName('');
      setEmail('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    { icon: FaUtensils, text: 'Complete POS System' },
    { icon: FaClock, text: 'Real-time Analytics' },
    { icon: FaEnvelope, text: 'Cloud Sync' },
  ];

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={iconAnimation.initial}
            animate={iconAnimation.animate}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full p-6 w-fit mx-auto mb-6"
          >
            <FaUtensils className="w-16 h-16 md:w-20 md:h-20 text-teal-500 dark:text-teal-400" />
          </motion.div>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-transparent bg-clip-text 
              bg-linear-to-r from-teal-600 to-purple-600 dark:from-teal-400 dark:to-purple-400 py-2 mb-4 px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Coming Soon
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            We're building something amazing! Join our waitlist to be the first to know when we launch.
          </motion.p>
        </motion.div>

        {/* Waitlist Form */}
        <motion.div
          className="max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <FaCheckCircle className="w-16 h-16 text-teal-500 dark:text-teal-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  You're on the list!
                </h2>
                <p className="text-slate-600 dark:text-gray-300">
                  We'll notify you as soon as we launch. Thank you for your interest!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
                    <FaUser className="inline mr-2" />
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl 
                      text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-400 
                      focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
                    <FaEnvelope className="inline mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-xl 
                      text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-400 
                      focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-xl text-red-700 dark:text-red-300 text-sm"
                  >
                    {error}
                  </motion.div>
                )}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 
                    text-white rounded-xl font-semibold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed 
                    flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Joining...
                    </>
                  ) : (
                    <>
                      Join Waitlist
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Features Preview */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center transition-colors"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-teal-600 dark:text-teal-400" />
              <p className="text-base text-slate-700 dark:text-gray-300 font-medium">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

