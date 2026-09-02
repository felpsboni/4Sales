import React from 'react';
import { COMPANY_INFO, VERIFIED_CLIENTS, OFFICIAL_CERTIFICATIONS } from '../../data/siteData';
import { MotionReveal } from '../common/MotionReveal';
import { ShieldCheck, Award, CheckCircle2, Building2 } from 'lucide-react';

export const ClientsAuthoritySection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <MotionReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066F5] dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/60 px-3.5 py-1 rounded-full border border-blue-100/80 dark:border-blue-800/80 inline-block mb-3">
              Autoridade & Confiança Comprovada
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] dark:text-white tracking-tight">
              Empresas que confiam na tecnologia 4Sales
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
              Grandes indústrias, distribuidoras e marcas líderes utilizam o 4Sales para potencializar vendas, padronizar regras comerciais e gerenciar equipes de alta performance.
            </p>
          </div>
        </MotionReveal>

        {/* 10 Verified Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4 mb-16">
          {VERIFIED_CLIENTS.map((client, idx) => (
            <MotionReveal key={client.name} delay={idx * 0.04} direction="up">
              <div className="bg-slate-50/80 dark:bg-slate-950/80 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 flex flex-col items-center justify-center text-center hover:bg-white dark:hover:bg-slate-900 hover:shadow-md dark:hover:shadow-slate-950/50 hover:border-blue-200 dark:hover:border-blue-500/50 transition-all hover:scale-[1.03] group min-h-[110px]">
                <div className="w-8 h-8 rounded-lg bg-blue-100/60 dark:bg-blue-950 text-[#0066F5] dark:text-cyan-400 flex items-center justify-center mb-2 group-hover:bg-[#0066F5] group-hover:text-white transition-colors">
                  <Building2 className="w-4 h-4" />
                </div>
                <span className="text-sm sm:text-base font-extrabold text-[#0A2540] dark:text-white tracking-tight group-hover:text-[#0066F5] dark:group-hover:text-cyan-400 transition-colors">
                  {client.name}
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-tight">
                  {client.segment}
                </span>
              </div>
            </MotionReveal>
          ))}
        </div>

        {/* Nossas Certificações - Direct from Old Site */}
        <MotionReveal direction="up">
          <div className="mb-14">
            <div className="text-center max-w-xl mx-auto mb-8">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                <Award className="w-4 h-4 text-[#0066F5] dark:text-cyan-400" />
                Nossas Certificações & Parcerias
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] dark:text-white">
                Equipe técnica multidisciplinar e homologada
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {OFFICIAL_CERTIFICATIONS.map((cert, idx) => (
                <MotionReveal key={cert.id} delay={idx * 0.1} direction="up">
                  <div className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 text-[#0066F5] dark:text-cyan-400 border border-blue-100 dark:border-blue-800/80">
                        {cert.badgeText}
                      </span>
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                    </div>
                    <h4 className="text-lg font-black text-[#0A2540] dark:text-white tracking-tight">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">
                      {cert.subtitle} • <span className="text-slate-400 dark:text-slate-400 font-normal">{cert.organization}</span>
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </MotionReveal>

        {/* Technical & Institutional Disclaimer Box */}
        <MotionReveal delay={0.2} direction="up">
          <div className="bg-slate-50 dark:bg-slate-950/90 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100/70 dark:bg-blue-950 text-[#0066F5] dark:text-cyan-400 rounded-xl shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#0A2540] dark:text-white">
                  Expertise em Gestão Tecnológica & Consultoria Empresarial
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed max-w-2xl">
                  Desenvolvido por especialistas da Fabritech com sólida vivência na arquitetura de processos comerciais, regras fiscais e integrações com os principais sistemas de gestão empresarial do mercado.
                </p>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 max-w-sm text-center md:text-left shrink-0 shadow-2xs">
              {COMPANY_INFO.disclaimer}
            </div>
          </div>
        </MotionReveal>

      </div>
    </section>
  );
};
