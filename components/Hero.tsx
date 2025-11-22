import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { APP_TITLE, APP_SUBTITLE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center text-white">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-[100px]"
        />
        <motion.div 
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[30%] left-[40%] w-80 h-80 bg-amber-500 rounded-full mix-blend-screen filter blur-[120px]" 
        />
      </div>

      {/* Content */}
      <div className="z-10 text-center px-6 max-w-5xl relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="px-3 py-1 rounded-full border border-blue-400/30 text-blue-300 text-xs md:text-sm tracking-widest uppercase bg-blue-900/20 backdrop-blur-sm">
            Prudential Life Insurance
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, scale: 1, letterSpacing: "0.0em" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-8xl font-bold mb-6 tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 drop-shadow-2xl"
        >
          {APP_TITLE}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed"
        >
          {APP_SUBTITLE}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 flex justify-center gap-4"
        >
           <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-amber-600 rounded-full opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt blur"></div>
              <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="relative px-8 py-3 bg-slate-900 rounded-full leading-none flex items-center space-x-2">
                <span className="text-slate-200 text-sm font-medium">開始規劃旅程</span>
              </button>
           </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8 text-white/50" />
      </motion.div>
    </section>
  );
};

export default Hero;