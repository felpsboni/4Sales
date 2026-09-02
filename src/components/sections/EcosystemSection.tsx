import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { ECOSYSTEM_PILLARS } from '../../data/siteData';
import { Users2, Smartphone, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';
import { MotionReveal } from '../common/MotionReveal';
import { SpotlightCard } from '../common/SpotlightCard';

export const EcosystemSection: React.FC = () => {
  const pillarIcons = {
    crm: <Users2 className="w-6 h-6 text-[#0066F5] dark:text-cyan-400" />,
    sfa: <Smartphone className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    b2b: <Globe className="w-6 h-6 text-[#FF9426] dark:text-orange-400" />,
  };

  const pillarHeaderColors = {
    crm: 'bg-blue-50 dark:bg-blue-950/60 border-blue-200 dark:border-blue-800 text-blue-900 dark:text-cyan-300',
    sfa: 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300',
    b2b: 'bg-orange-50 dark:bg-orange-950/60 border-orange-200 dark:border-orange-800 text-orange-900 dark:text-orange-300',
  };

  return (
    <section id="plataforma" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <MotionReveal direction="up">
          <SectionHeader
            eyebrow="Os Três Pilares Integrados"
            title="Ecossistema CRM + Força de Vendas + Portal B2B"
            subtitle="Três pilares fundamentais reunidos em uma única plataforma para garantir velocidade na ponta e controle absoluto na gestão."
            align="center"
          />
        </MotionReveal>

        {/* 3 Pillar Large Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {ECOSYSTEM_PILLARS.map((pillar, idx) => {
            const icon = pillarIcons[pillar.id as keyof typeof pillarIcons];
            const headerColor = pillarHeaderColors[pillar.id as keyof typeof pillarHeaderColors];

            return (
              <MotionReveal key={pillar.id} delay={idx * 0.12} direction="up" className="h-full">
                <SpotlightCard
                  className="p-7 sm:p-8 h-full flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700"
                  spotlightColor="rgba(0, 102, 245, 0.08)"
                >
                  <div>
                    {/* Card Header Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3 bg-slate-100/90 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs">
                        {icon}
                      </div>
                      <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${headerColor}`}>
                        {pillar.tagline}
                      </span>
                    </div>

                    {/* Title & Summary */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] dark:text-white tracking-tight mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                      {pillar.summary}
                    </p>

                    {/* Feature Checklist */}
                    <div className="space-y-3 pt-5 border-t border-slate-100 dark:border-slate-800">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 block mb-1">
                        Recursos Principais:
                      </span>
                      {pillar.features.map((feat, fidx) => (
                        <div key={fidx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#00D2B4] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlight footer */}
                  <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 -mx-7 -mb-7 sm:-mx-8 sm:-mb-8 p-6 rounded-b-3xl">
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 block text-center">
                      ✨ {pillar.highlight}
                    </span>
                  </div>
                </SpotlightCard>
              </MotionReveal>
            );
          })}
        </div>

        {/* Unifying statement banner */}
        <MotionReveal delay={0.3} direction="up">
          <div className="mt-12 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 hover:shadow-md dark:hover:shadow-slate-950/60 transition-all">
            <div className="text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-bold text-[#0A2540] dark:text-white">
                Uma plataforma única. Diferentes canais de venda.
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                A mesma informação precisa e sincronizada em toda a sua operação comercial.
              </p>
            </div>

            <Button
              href="#demonstracao"
              variant="primary"
              size="sm"
              className="hover:scale-105 active:scale-95 transition-all shadow-sm"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Ver na prática
            </Button>
          </div>
        </MotionReveal>

      </div>
    </section>
  );
};
