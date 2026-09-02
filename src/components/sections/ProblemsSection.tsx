import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { PROBLEMS_SOLVED } from '../../data/siteData';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';
import { MotionReveal } from '../common/MotionReveal';
import { SpotlightCard } from '../common/SpotlightCard';

export const ProblemsSection: React.FC = () => {
  return (
    <section id="problemas" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <MotionReveal direction="up">
          <SectionHeader
            eyebrow="Desafios Comerciais B2B"
            title="Quando a operação comercial cresce, planilhas e processos desconectados deixam de funcionar."
            subtitle="Identifique os principais pontos de fricção que diminuem a rentabilidade e a produtividade da sua equipe de vendas."
            align="center"
          />
        </MotionReveal>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS_SOLVED.map((item, index) => (
            <MotionReveal key={item.id} delay={index * 0.08} direction="up" className="h-full">
              <SpotlightCard
                className="p-6 sm:p-7 h-full flex flex-col justify-between hover:border-blue-200 dark:hover:border-slate-700 transition-all"
                spotlightColor="rgba(239, 68, 68, 0.06)"
              >
                <div>
                  {/* Problem Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-rose-50 dark:bg-rose-950/70 border border-rose-200 dark:border-rose-900/80 flex items-center justify-center text-rose-600 dark:text-rose-400 shrink-0 mt-0.5">
                      <AlertCircle className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-[#0A2540] dark:text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Problem Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {item.description}
                  </p>
                </div>

                {/* Solution Pill */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/80 -mx-6 -mb-6 sm:-mx-7 sm:-mb-7 p-5 rounded-b-3xl">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-tight">
                      {item.solution}
                    </span>
                  </div>
                </div>
              </SpotlightCard>
            </MotionReveal>
          ))}

          {/* Solution Highlight Callout Card */}
          <MotionReveal delay={0.4} direction="up" className="md:col-span-2 lg:col-span-1 h-full">
            <div className="bg-[#0A2540] dark:bg-slate-900 rounded-3xl p-6 sm:p-7 text-white flex flex-col justify-between shadow-xl h-full border border-slate-700/80 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D2B4]/10 rounded-full blur-2xl pointer-events-none" />

              <div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-500/20 text-[#00D2B4] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-500/30">
                  A Resposta 4Sales
                </span>
                <h3 className="text-xl font-extrabold text-white leading-tight mb-3">
                  O 4Sales conecta toda essa operação em um fluxo único, organizado e mensurável.
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Elimine a digitação manual redundante, reduza o tempo de faturamento e capacite seus vendedores com dados precisos de estoque, crédito e metas.
                </p>
              </div>

              <div className="pt-6 mt-4">
                <Button
                  href="#demonstracao"
                  variant="secondary"
                  size="sm"
                  className="w-full justify-center text-xs shadow-md shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Superar estes desafios agora
                </Button>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
};
