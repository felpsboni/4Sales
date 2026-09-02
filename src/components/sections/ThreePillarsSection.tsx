import React from 'react';
import { THREE_CORE_PILLARS, TECHNOLOGY_FRAMEWORK } from '../../data/siteData';
import { MotionReveal } from '../common/MotionReveal';
import { CheckCircle2, Cpu, Server, Shield, Layers, ArrowRight } from 'lucide-react';

export const ThreePillarsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <MotionReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-4 py-1.5 rounded-full border border-cyan-800/60 inline-block mb-3">
              Arquitetura Funcional Completa
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Os 3 Pilares da Transformação Comercial 4Sales
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              Uma estrutura unificada projetada para orquestrar toda a jornada: desde a inteligência de dados até a operação em campo e o controle executivo da diretoria.
            </p>
          </div>
        </MotionReveal>

        {/* 3 Pillars Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {THREE_CORE_PILLARS.map((pillar, idx) => (
            <MotionReveal key={pillar.title} delay={idx * 0.12} direction="up">
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl p-7 sm:p-8 border border-slate-700/80 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20 flex flex-col h-full group">
                
                {/* Pillar Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-700/70 text-slate-200 border border-slate-600/60">
                    {pillar.tag}
                  </span>
                  <span className="text-2xl font-black text-slate-600 group-hover:text-cyan-400 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-2.5">
                  <span className={`w-3.5 h-3.5 rounded-full bg-gradient-to-r ${pillar.color}`} />
                  {pillar.title}
                </h3>

                {/* Items List */}
                <ul className="space-y-3 my-4 flex-1">
                  {pillar.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 mt-4 border-t border-slate-700/60">
                  <a
                    href="#demonstracao"
                    className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
                  >
                    Ver demonstração deste pilar
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </MotionReveal>
          ))}
        </div>

        {/* Technology Framework Bar - Direct from Old Site */}
        <MotionReveal delay={0.2} direction="up">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-700 shadow-xl">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                <Cpu className="w-4 h-4" />
                Infraestrutura de Nível Enterprise
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {TECHNOLOGY_FRAMEWORK.headline}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {TECHNOLOGY_FRAMEWORK.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {TECHNOLOGY_FRAMEWORK.pillars.map((item, pIdx) => (
                <div key={pIdx} className="bg-slate-900/80 rounded-2xl p-4 border border-slate-700/70 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                      {pIdx === 0 && <Server className="w-4 h-4 text-amber-400" />}
                      {pIdx === 1 && <Cpu className="w-4 h-4 text-emerald-400" />}
                      {pIdx === 2 && <Shield className="w-4 h-4 text-cyan-400" />}
                      {pIdx === 3 && <Layers className="w-4 h-4 text-blue-400" />}
                      {item.name}
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>

      </div>
    </section>
  );
};
