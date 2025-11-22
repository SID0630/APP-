import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X, Sparkles } from 'lucide-react';
import { FOOTER_CONTENT } from '../constants';

const FooterWithAction: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <footer className="bg-slate-900 text-white py-20 px-6 text-center relative z-10 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
        <div className="absolute -top-[100px] -right-[100px] w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[100px]"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-6 tracking-tight"
          >
            {FOOTER_CONTENT.title}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 mb-12 text-lg"
          >
            {FOOTER_CONTENT.subtitle}
          </motion.p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowPopup(true)}
            className="group relative bg-gradient-to-r from-red-600 to-red-500 text-white font-bold py-5 px-12 rounded-full shadow-2xl shadow-red-900/50 transition-all inline-flex items-center gap-3 text-lg"
          >
            <span className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></span>
            <CheckCircle size={24} className="relative z-10 group-hover:scale-110 transition-transform" />
            <span className="relative z-10">{FOOTER_CONTENT.buttonText}</span>
          </motion.button>
          
          <div className="mt-20 pt-8 border-t border-slate-800/50 text-xs text-slate-600 font-mono">
            <p>&copy; {new Date().getFullYear()} 投資規劃模擬專案. 此網頁僅為技術展示，非官方保誠人壽網站。</p>
          </div>
        </div>
      </footer>

      {/* Modal Popup */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPopup(false)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl p-1 max-w-lg w-full relative z-10 shadow-2xl"
            >
              <div className="bg-slate-50 rounded-[20px] p-8 text-center relative overflow-hidden">
                 <button 
                  onClick={() => setShowPopup(false)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 transition-colors bg-white p-2 rounded-full hover:bg-slate-100"
                >
                  <X size={20} />
                </button>

                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6 shadow-inner">
                  <Sparkles size={36} className="animate-pulse" />
                </div>
                
                <h4 className="text-2xl font-bold text-slate-800 mb-2">
                  {FOOTER_CONTENT.popup.title}
                </h4>
                <div className="w-16 h-1.5 bg-green-500 mx-auto rounded-full mb-8"></div>
                
                <div className="mb-8 space-y-2">
                  <p className="text-2xl font-bold text-slate-800">
                    {FOOTER_CONTENT.popup.highlightMain}
                  </p>
                  <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">
                    {FOOTER_CONTENT.popup.highlightSub}
                  </p>
                </div>

                <p className="text-slate-600 mb-8 leading-relaxed">
                  {FOOTER_CONTENT.popup.description}
                </p>

                <button
                  onClick={() => setShowPopup(false)}
                  className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 hover:scale-[1.02] transition-all shadow-lg"
                >
                  {FOOTER_CONTENT.popup.closeText}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FooterWithAction;