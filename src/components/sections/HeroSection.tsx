import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../common/Button';
import { COMPANY_INFO } from '../../data/siteData';
import {
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Cloud,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Zap,
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [activeHeroTab, setActiveHeroTab] = useState<'pipeline' | 'pedidos' | 'b2b'>('pipeline');

  return (
    <section
      id="inicio"
      className="relative pt-24 pb-14 sm:pt-28 sm:pb-18 lg:pt-32 lg:pb-22 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200/60 dark:border-slate-800 transition-colors"
    >
      {/* Dynamic Ambient Mesh */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[550px] h-[260px] bg-gradient-to-tr from-cyan-400/10 via-blue-500/10 to-orange-400/10 dark:from-cyan-500/15 dark:via-blue-600/15 dark:to-orange-500/15 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Structural background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A254008_1px,transparent_1px),linear-gradient(to_bottom,#0A254008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-[#0066F5] dark:text-cyan-400 text-xs font-bold uppercase tracking-wider mb-5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#00D2B4]" />
              <span>{COMPANY_INFO.heroEyebrow}</span>
            </div>

            {/* Main H1 Headline */}
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-[#0A2540] dark:text-white tracking-tight leading-[1.15]">
              {COMPANY_INFO.heroTitle}
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl font-normal">
              {COMPANY_INFO.heroSubtitle}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Button
                id="hero-primary-cta"
                href="#demonstracao"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all font-bold justify-center"
              >
                Solicitar uma demonstração
              </Button>

              <Button
                id="hero-secondary-cta"
                href="#plataforma"
                variant="outline"
                size="lg"
                className="transition-all justify-center font-semibold bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white shadow-xs"
              >
                Conhecer a plataforma
              </Button>
            </div>

            {/* Confidence Bullets */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-800 w-full flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-600 dark:text-slate-400 font-medium">
              <div className="flex items-center gap-1.5 hover:text-[#0066F5] dark:hover:text-cyan-400 transition-colors">
                <Cloud className="w-4 h-4 text-[#0066F5] dark:text-cyan-400" />
                <span>100% na nuvem</span>
              </div>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <div className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                <Smartphone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Mobile Offline & Web</span>
              </div>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <div className="flex items-center gap-1.5 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                <ShieldCheck className="w-4 h-4 text-orange-500 dark:text-orange-400" />
                <span>Integrado ao ERP</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean SaaS Interface Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 w-full"
          >
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl dark:shadow-slate-950/80 border border-slate-200 dark:border-slate-800 overflow-hidden">
              
              {/* Window Header */}
              <div className="bg-[#0A2540] dark:bg-slate-950 text-white px-4 py-3 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-semibold text-slate-300 ml-2 tracking-wide hidden sm:inline-flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#00D2B4]" />
                    4Sales Enterprise
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
                  {(['pipeline', 'pedidos', 'b2b'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveHeroTab(tab)}
                      className={`relative px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                        activeHeroTab === tab ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {activeHeroTab === tab && (
                        <motion.div
                          layoutId="heroTabActive"
                          className="absolute inset-0 bg-[#0066F5] rounded-md shadow-xs -z-10"
                          transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                        />
                      )}
                      {tab === 'pipeline' && 'Pipeline CRM'}
                      {tab === 'pedidos' && 'Força de Vendas'}
                      {tab === 'b2b' && 'Portal B2B'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Viewport Content */}
              <div className="p-5 sm:p-6 bg-slate-50/50 dark:bg-slate-950/90">
                <AnimatePresence mode="wait">
                  {activeHeroTab === 'pipeline' && (
                    <motion.div
                      key="pipeline"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      {/* 2 Clean Metrics */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
                          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">
                            Faturamento do Mês
                          </span>
                          <span className="text-lg sm:text-xl font-bold text-[#0A2540] dark:text-white block mt-0.5">
                            R$ 1.840.500
                          </span>
                          <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 mt-1">
                            <TrendingUp className="w-3 h-3" /> +14% vs meta
                          </span>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
                          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">
                            Positivação de Carteira
                          </span>
                          <span className="text-lg sm:text-xl font-bold text-[#0066F5] dark:text-cyan-400 block mt-0.5">
                            342 clientes
                          </span>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-1">
                            90% de cobertura total
                          </span>
                        </div>
                      </div>

                      {/* Clean Pipeline Stages */}
                      <div className="space-y-2.5">
                        <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                          <div>
                            <span className="text-xs font-bold text-[#0A2540] dark:text-white block">Distribuidora Aliança</span>
                            <span className="text-[11px] text-slate-500 dark:text-slate-400">Proposta enviada · Vendedor Carlos M.</span>
                          </div>
                          <span className="text-xs font-bold text-[#0066F5] dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-lg">
                            R$ 45.000
                          </span>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                          <div>
                            <span className="text-xs font-bold text-[#0A2540] dark:text-white block">Rede MegaMateriais</span>
                            <span className="text-[11px] text-slate-500 dark:text-slate-400">Pedido faturado · Integrado ao ERP</span>
                          </div>
                          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-lg">
                            R$ 195.000
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeHeroTab === 'pedidos' && (
                    <motion.div
                      key="pedidos"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                        <div>
                          <span className="text-xs font-bold text-[#0A2540] dark:text-white block">Pedido #84920 · Conexões e Tubos</span>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400">Regra tributária e tabela aplicadas automaticamente</span>
                        </div>
                        <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full">
                          Validado
                        </span>
                      </div>

                      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                        <div className="flex justify-between text-slate-600 dark:text-slate-300">
                          <span>Válvula Esfera 2" (50 un)</span>
                          <span className="font-semibold text-slate-900 dark:text-white">R$ 6.250,00</span>
                        </div>
                        <div className="flex justify-between text-slate-600 dark:text-slate-300">
                          <span>Tubo Sch 40 (120 m)</span>
                          <span className="font-semibold text-slate-900 dark:text-white">R$ 14.400,00</span>
                        </div>
                        <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex justify-between font-bold text-[#0A2540] dark:text-white">
                          <span>Total do Pedido:</span>
                          <span className="text-sm text-[#0066F5] dark:text-cyan-400">R$ 20.650,00</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeHeroTab === 'b2b' && (
                    <motion.div
                      key="b2b"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                        <div>
                          <span className="text-xs font-bold text-[#0A2540] dark:text-white block">Portal do Cliente B2B 24/7</span>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400">Catálogo personalizado com preço e estoque em tempo real</span>
                        </div>
                        <span className="text-xs font-bold text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-full">
                          Autosserviço
                        </span>
                      </div>

                      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                        <div>
                          <span className="font-semibold text-slate-900 dark:text-white block">Reposição Express em 1 Clique</span>
                          <span className="text-[11px] text-slate-500 dark:text-slate-400">Último mix recomprado com limite de crédito aprovado</span>
                        </div>
                        <Button href="#demonstracao" size="sm" variant="primary" className="text-xs">
                          Testar Portal
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Clean Bottom Sync Bar */}
                <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Sincronização contínua com seu ERP</span>
                  </div>
                  <span className="font-medium text-slate-700 dark:text-slate-300">Multi-filiais e tabelas</span>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
