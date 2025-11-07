'use client';

import Navbar from './components/Navbar';
import ComingSoon from './components/ComingSoon';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-purple-100 to-slate-100 
      dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 transition-colors duration-300 overflow-x-hidden w-full max-w-full">
      
      {/* Navigation */}
      <Navbar />

      {/* Coming Soon Section */}
      <ComingSoon />

      {/* Features Section */}
      <Features />

      {/* About Section */}
      <About />

      {/* Footer */}
      <Footer />
    </div>
  );
}
