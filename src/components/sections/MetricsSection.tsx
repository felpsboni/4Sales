import React from 'react';
import { INSTITUTIONAL_METRICS } from '../../data/siteData';
import { MotionReveal } from '../common/MotionReveal';
import { motion } from 'motion/react';
import { TrendingUp } from 'lucide-react';

export const MetricsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#0A2540] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#00D2B4]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-[#0066F5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <MotionReveal direction="up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00D2B4] block mb-2 flex items-center justify-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5" />
              Indicadores Institucionais
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Solidez, tecnologia e alcance em escala nacional
            </h2>
          </div>
        </MotionReveal>

        {/* 4 Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTITUTIONAL_METRICS.map((metric, idx) => (
            <MotionReveal key={idx} delay={idx * 0.1} direction="up" className="h-full">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-slate-900/90 rounded-3xl p-6 sm:p-7 border border-slate-800 text-center flex flex-col justify-between h-full shadow-lg hover:border-slate-700 transition-all hover:shadow-cyan-500/5 group"
              >
                <div>
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00D2B4] block mb-2 font-mono group-hover:scale-105 transition-transform duration-300">
                    {metric.value}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug">
                    {metric.label}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal pt-4 border-t border-slate-800/80 mt-2">
                  {metric.detail}
                </p>
              </motion.div>
            </MotionReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
