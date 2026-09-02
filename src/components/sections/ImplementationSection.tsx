import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { IMPLEMENTATION_STEPS } from '../../data/siteData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';
import { MotionReveal } from '../common/MotionReveal';
import { SpotlightCard } from '../common/SpotlightCard';

export const ImplementationSection: React.FC = () => {
  return (
    <section id="implantacao" className="py-20 lg:py-28 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <MotionReveal direction="up">
          <SectionHeader
            eyebrow="Metodologia Estruturada"
            title="Da análise da operação à evolução contínua."
            subtitle="Um processo consultivo e seguro de implantação, conduzido por especialistas com foco em rápida aderência dos usuários."
            align="center"
          />
        </MotionReveal>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-14">
          {IMPLEMENTATION_STEPS.map((step, idx) => (
            <MotionReveal key={step.number} delay={idx * 0.08} direction="up" className="h-full">
              <SpotlightCard
                className="p-6 h-full flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700"
                spotlightColor="rgba(0, 102, 245, 0.05)"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#0066F5] dark:text-cyan-400 font-mono">
                      {step.number}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-[#00D2B4]" />
                  </div>

                  <h3 className="text-base font-bold text-[#0A2540] dark:text-white mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Etapa Consultiva</span>
                </div>
              </SpotlightCard>
            </MotionReveal>
          ))}
        </div>

        {/* Reassurance Callout */}
        <MotionReveal delay={0.3} direction="up">
          <div className="bg-blue-50/70 dark:bg-slate-950/80 border border-blue-200/80 dark:border-slate-800 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h4 className="text-base font-bold text-blue-950 dark:text-white">
                Quer avaliar o cronograma ideal para a sua empresa?
              </h4>
              <p className="text-xs sm:text-sm text-blue-800/80 dark:text-slate-300 mt-1">
                Nossos consultores realizam um diagnóstico preliminar sem compromisso.
              </p>
            </div>

            <Button
              href="#demonstracao"
              variant="secondary"
              size="sm"
              className="hover:scale-105 active:scale-95 transition-all shadow-md shadow-blue-500/10 shrink-0"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Conversar com um especialista
            </Button>
          </div>
        </MotionReveal>

      </div>
    </section>
  );
};
