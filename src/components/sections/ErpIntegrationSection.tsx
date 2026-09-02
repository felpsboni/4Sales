import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { ERP_INTEGRATION_DATA, COMPANY_INFO } from '../../data/siteData';
import { Button } from '../common/Button';
import { MotionReveal } from '../common/MotionReveal';
import {
  RefreshCw,
  Database,
  ArrowRightLeft,
  ArrowRight,
  ShieldCheck,
  Cpu,
  MessageCircle,
} from 'lucide-react';

export const ErpIntegrationSection: React.FC = () => {
  return (
    <section id="integracao" className="py-20 lg:py-28 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      
      {/* Structural glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0066F5]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <MotionReveal direction="up">
          <SectionHeader
            eyebrow="Integração & Conectividade"
            title={ERP_INTEGRATION_DATA.title}
            subtitle={ERP_INTEGRATION_DATA.subtitle}
            align="center"
            theme="dark"
            badgeColor="teal"
          />
        </MotionReveal>

        {/* Central Hub Architecture Diagram */}
        <MotionReveal delay={0.15} direction="up">
          <div className="bg-slate-950/80 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl mb-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left: Synchronized Entities */}
              <div className="lg:col-span-5 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00D4B2] block mb-3">
                  Fluxo de Dados Sincronizados
                </span>
                {ERP_INTEGRATION_DATA.entities.map((entity, i) => (
                  <div
                    key={i}
                    className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 hover:border-slate-700 transition-all flex items-start gap-3"
                  >
                    <div className="p-2 bg-slate-800 rounded-lg text-[#0066F5] shrink-0 mt-0.5">
                      <ArrowRightLeft className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs sm:text-sm font-bold text-white">
                          {entity.name}
                        </h4>
                        <span className="text-[10px] font-semibold bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                          {entity.direction}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                        {entity.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: Central Visual Engine */}
              <div className="lg:col-span-7 flex flex-col items-center justify-center p-6 bg-slate-900/60 rounded-2xl border border-slate-800/80">
                
                {/* Hub Node: 4Sales Core */}
                <div className="w-full max-w-md bg-gradient-to-r from-[#0A2540] to-[#0066F5] p-6 rounded-2xl border border-blue-400/30 text-center shadow-lg mb-6 hover:scale-[1.01] transition-transform">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white text-[#0A2540] mb-3 shadow-md">
                    <RefreshCw className="w-6 h-6 animate-spin-slow text-[#0066F5]" />
                  </div>
                  <h4 className="text-lg font-extrabold text-white">4Sales Integration Engine</h4>
                  <p className="text-xs text-blue-100 mt-1">
                    Motor inteligente de regras, validações fiscais e fila de sincronização segura
                  </p>
                </div>

                {/* Connected Targets */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-lg text-center">
                  <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs hover:border-slate-700 transition-colors">
                    <Database className="w-4 h-4 text-emerald-400 mx-auto mb-1.5" />
                    <span className="font-bold text-slate-200 block">Sistema ERP</span>
                    <span className="text-[10px] text-slate-400">TOTVS®, SAP®, Protheus®, etc.</span>
                  </div>

                  <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs hover:border-slate-700 transition-colors">
                    <Cpu className="w-4 h-4 text-[#00D4B2] mx-auto mb-1.5" />
                    <span className="font-bold text-slate-200 block">Equipe de Vendas</span>
                    <span className="text-[10px] text-slate-400">Mobile & Web SFA</span>
                  </div>

                  <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs col-span-2 sm:col-span-1 hover:border-slate-700 transition-colors">
                    <ShieldCheck className="w-4 h-4 text-sky-400 mx-auto mb-1.5" />
                    <span className="font-bold text-slate-200 block">Portal B2B</span>
                    <span className="text-[10px] text-slate-400">Clientes & Compradores</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 text-center mt-6 max-w-sm">
                  Arquitetura resiliente: sua equipe continua emitindo pedidos mesmo durante manutenções programadas do ERP.
                </p>
              </div>

            </div>

          </div>
        </MotionReveal>

        {/* Action Banner */}
        <MotionReveal delay={0.25} direction="up">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <Button
              href={COMPANY_INFO.whatsappUrl}
              isExternal
              variant="whatsapp"
              size="md"
              leftIcon={<MessageCircle className="w-4 h-4" />}
            >
              Conversar sobre integração com seu ERP
            </Button>

            <Button
              href="#demonstracao"
              variant="white"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Solicitar avaliação técnica
            </Button>
          </div>
        </MotionReveal>

      </div>
    </section>
  );
};
