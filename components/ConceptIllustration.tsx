import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, TrendingUp, Coins, PiggyBank, RefreshCw, ArrowRight } from 'lucide-react';

const ConceptIllustration: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-blue-50/50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
           <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-800 mb-4"
          >
            看不懂術語？簡單來說...
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-slate-600 text-lg"
          >
            讓我們用最直白的方式，算一次給你看
          </motion.p>
        </div>

        {/* Visual Journey Container */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[40%] left-[10%] w-[80%] h-1 bg-slate-200 -translate-y-1/2 z-0 border-t-2 border-dashed border-slate-300"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            
            {/* Step 1: Input */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-blue-100 relative group hover:-translate-y-2 transition-transform duration-300 flex flex-col"
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg tracking-wide whitespace-nowrap">
                第一階段：無痛存錢
              </div>
              <div className="flex justify-center mt-4 mb-6">
                 <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                   <Wallet size={40} strokeWidth={1.5} />
                 </div>
              </div>
              <h3 className="text-xl font-bold text-center text-slate-800 mb-1">從 26 歲開始</h3>
              <p className="text-slate-400 text-center text-sm mb-6">持續 8 年，存到 34 歲</p>
              
              <div className="bg-slate-50 rounded-xl p-5 space-y-3 border border-slate-100 flex-grow">
                <li className="flex items-center justify-between text-slate-600">
                  <span>每年投入</span>
                  <span className="font-semibold">$4,000 USD</span>
                </li>
                <li className="flex items-center justify-between text-xs text-slate-400">
                  <span>(約合台幣)</span>
                  <span>(120,000 元)</span>
                </li>
                <div className="h-px bg-slate-200 my-2"></div>
                <li className="flex items-center justify-between font-bold text-lg">
                  <span className="text-slate-700">每月只要存</span>
                  <span className="text-blue-600">10,000 元</span>
                </li>
              </div>
            </motion.div>

            {/* Step 2: Accumulation Milestone */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative pt-12 md:pt-0"
            >
                {/* Mobile Arrow */}
                <div className="md:hidden flex justify-center -mt-4 mb-4">
                    <ArrowRight className="rotate-90 text-slate-300" />
                </div>

                <div className="bg-gradient-to-b from-slate-800 to-slate-900 p-8 rounded-3xl shadow-xl text-white relative group hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col justify-center items-center border border-slate-700">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg whitespace-nowrap z-20">
                    8年期滿
                  </div>
                  
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-amber-500 blur-[40px] opacity-20 rounded-full"></div>
                    <div className="w-24 h-24 bg-slate-700/50 rounded-full flex items-center justify-center text-amber-400 ring-4 ring-amber-500/20 relative z-10 group-hover:rotate-12 transition-transform">
                      <PiggyBank size={48} strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-center mb-2">本金總累積</h3>
                  <div className="text-center mb-4">
                    <span className="text-5xl font-bold text-amber-400 tracking-tight">100</span>
                    <span className="text-2xl text-slate-400 ml-2">萬台幣</span>
                  </div>
                  <p className="text-center text-slate-400 text-sm leading-relaxed px-4">
                    不論匯率波動，這筆約百萬的資金就是你未來的基石。
                  </p>
                </div>
            </motion.div>

            {/* Step 3: Options */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative pt-12 md:pt-0"
            >
               {/* Mobile Arrow */}
               <div className="md:hidden flex justify-center -mt-4 mb-4">
                    <ArrowRight className="rotate-90 text-slate-300" />
                </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-green-100 relative group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                  第二階段：靈活運用
                </div>
                <div className="flex justify-center mt-4 mb-6">
                   <div className="w-20 h-20 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                     <TrendingUp size={40} strokeWidth={1.5} />
                   </div>
                </div>
                <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-1">利息 5.5%</h3>
                    <p className="text-xs text-slate-400">*此為假設範例數值</p>
                </div>
                
                <div className="space-y-3 flex-grow">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50/50 hover:bg-green-100 transition-colors cursor-default border border-green-100/50">
                    <Coins className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-slate-700 block mb-0.5">選擇 A：領出利息</span>
                      <span className="text-sm text-slate-500 leading-snug">不想動本金？那就每年把 5.5% 利息領出來花。</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50/50 hover:bg-green-100 transition-colors cursor-default border border-green-100/50">
                    <RefreshCw className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-bold text-slate-700 block mb-0.5">選擇 B：複利滾存</span>
                      <span className="text-sm text-slate-500 leading-snug">暫時用不到？連本帶利繼續滾，退休領更多。</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptIllustration;