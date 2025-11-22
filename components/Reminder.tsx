import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircleHeart, Quote } from 'lucide-react';
import { REMINDER_TEXT } from '../constants';

const Reminder: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="bg-[#fdfcf8] rounded-tr-[60px] rounded-bl-[60px] rounded-tl-2xl rounded-br-2xl p-8 md:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 relative"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-300 to-amber-500/0"></div>
          <Quote className="absolute top-8 right-8 w-16 h-16 text-amber-100/50 rotate-180" />
          
          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-amber-50 rounded-2xl rotate-3 flex items-center justify-center text-amber-500 shadow-inner">
                <MessageCircleHeart size={36} strokeWidth={1.5} />
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-amber-500"></span>
                朋友間的真心話
              </h3>
              <p className="text-lg md:text-xl text-slate-600 leading-9 font-serif italic">
                <span className="bg-gradient-to-r from-amber-100/50 to-transparent px-2 py-1 rounded">
                  "{REMINDER_TEXT}"
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reminder;