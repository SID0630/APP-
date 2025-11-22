import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FEATURES } from '../constants';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const FeatureSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleFeature = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="features" className="py-24 px-6 md:px-12 bg-slate-50 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-slate-800 mb-6"
        >
          為什麼選擇鑫發達？
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-500 text-lg"
        >
          點擊下方卡片，深入了解三大核心優勢
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {FEATURES.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
            className={`
              relative p-8 rounded-3xl bg-white cursor-pointer group
              transition-all duration-500
              ${activeId === feature.id 
                ? 'shadow-[0_20px_50px_rgba(0,0,0,0.1)] ring-1 ring-blue-100' 
                : 'shadow-xl hover:shadow-2xl hover:-translate-y-2'
              }
            `}
            onClick={() => toggleFeature(feature.id)}
          >
            <div className="flex items-center justify-between mb-8">
              <div className={`
                p-4 rounded-2xl transition-all duration-300
                ${activeId === feature.id ? 'bg-blue-600 text-white scale-110' : 'bg-slate-50 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600'}
              `}>
                <feature.icon className={`w-8 h-8`} />
              </div>
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                ${activeId === feature.id ? 'bg-slate-100 text-slate-900 rotate-180' : 'bg-transparent text-slate-300 group-hover:bg-slate-50 group-hover:text-slate-500'}
              `}>
                {activeId === feature.id ? <Minus size={20} /> : <Plus size={20} />}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors">
              {feature.title}
            </h3>
            <p className={`text-sm font-bold mb-4 uppercase tracking-wider transition-colors ${feature.color}`}>
              {feature.subtitle}
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              {feature.description}
            </p>

            <AnimatePresence>
              {activeId === feature.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 border-t border-slate-100">
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 relative overflow-hidden">
                       <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                       <div className="flex items-start gap-3">
                         <ArrowRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                         <p className="text-slate-700 text-base leading-7">
                           {feature.details}
                         </p>
                       </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;