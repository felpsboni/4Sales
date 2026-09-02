import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader } from '../common/SectionHeader';
import { SYSTEM_MODULES } from '../../data/siteData';
import { Button } from '../common/Button';
import { MotionReveal } from '../common/MotionReveal';
import {
  CheckCircle2,
  ArrowRight,
  Search,
  ShoppingCart,
  Palette,
  Globe2,
  Smartphone,
  BarChart3,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export const SystemInteractiveSection: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('vendas');

  const activeModule = SYSTEM_MODULES.find((m) => m.id === activeTabId) || SYSTEM_MODULES[0];

  const tabIcons: Record<string, React.ReactNode> = {
    vendas: <Smartphone className="w-4 h-4" />,
    analytics: <BarChart3 className="w-4 h-4" />,
    busca: <Search className="w-4 h-4" />,
    pedidos: <ShoppingCart className="w-4 h-4" />,
    layout: <Palette className="w-4 h-4" />,
    multi: <Globe2 className="w-4 h-4" />,
  };

  return (
    <section id="sistema" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <MotionReveal direction="up">
          <SectionHeader
            eyebrow="Demonstração do Sistema"
            title="Simples para vender. Completo para gerenciar."
            subtitle="Conheça os recursos que ajudam a equipe comercial a trabalhar com mais velocidade, controle e precisão."
            align="center"
          />
        </MotionReveal>

        {/* Interactive Accessible Tabs Navigation */}
        <MotionReveal delay={0.1} direction="up">
          <div className="flex justify-start sm:justify-center overflow-x-auto pb-4 mb-8 no-scrollbar">
            <div
              className="flex items-center gap-1.5 p-1.5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm shrink-0"
              role="tablist"
              aria-label="Módulos do Sistema 4Sales"
            >
              {SYSTEM_MODULES.map((mod) => {
                const isActive = mod.id === activeTabId;
                return (
                  <button
                    key={mod.id}
                    role="tab"
                    id={`tab-${mod.id}`}
                    aria-selected={isActive}
                    aria-controls={`tabpanel-${mod.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveTabId(mod.id)}
                    className={`relative flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer select-none z-10 whitespace-nowrap ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="systemActiveTab"
                        className="absolute inset-0 bg-[#0A2540] dark:bg-[#0066F5] rounded-xl shadow-xs -z-10"
                        transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                      />
                    )}
                    <span className={isActive ? 'text-[#00D2B4] dark:text-white' : 'text-slate-400 dark:text-slate-500'}>
                      {tabIcons[mod.id]}
                    </span>
                    <span>{mod.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </MotionReveal>

        {/* Tab Panel Content */}
        <MotionReveal delay={0.2} direction="up">
          <div
            id={`tabpanel-${activeModule.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeModule.id}`}
            className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-xl p-5 sm:p-8 lg:p-10 transition-all hover:border-slate-300 dark:hover:border-slate-700"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModule.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
              >
                
                {/* Left: Text & Detailed Benefits */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#0066F5] dark:text-cyan-400 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-[#00D2B4]" />
                      {activeModule.shortDesc}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] dark:text-white tracking-tight mb-4">
                      {activeModule.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-6">
                      {activeModule.fullDesc}
                    </p>

                    {/* Operational Benefits */}
                    <div className="space-y-3 mb-6">
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                        Ganhos Operacionais:
                      </span>
                      {activeModule.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Features List */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mb-8">
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
                        Recursos Inclusos:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {activeModule.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0066F5] dark:bg-cyan-400 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <Button
                      href="#demonstracao"
                      variant="primary"
                      size="md"
                      className="hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md shadow-blue-500/10"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Solicitar demonstração deste módulo
                    </Button>
                  </div>
                </div>

                {/* Right: Realistic UI Visualizer for each Tab */}
                <div className="lg:col-span-6 w-full">
                  <div className="bg-slate-900 rounded-2xl p-5 sm:p-6 text-white border border-slate-800 shadow-2xl relative overflow-hidden group">
                    
                    {/* Visualizer header */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        <span className="text-xs font-semibold text-slate-400 ml-2">
                          4Sales · {activeModule.title}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold bg-[#0066F5] text-white px-2.5 py-0.5 rounded-full">
                        Tempo Real
                      </span>
                    </div>

                    {/* Module-specific realistic mockups */}
                    {activeModule.id === 'vendas' && (
                      <div className="space-y-4">
                        <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-bold text-slate-200">Rotas de Visitas · Hoje (4 de 6 Concluídas)</span>
                            <span className="text-[10px] bg-emerald-900/60 text-emerald-300 px-2 py-0.5 rounded font-semibold">66% Concluído</span>
                          </div>
                          <div className="space-y-2 text-xs">
                            <div className="bg-slate-900/90 p-2.5 rounded-lg flex items-center justify-between border border-slate-800">
                              <div>
                                <span className="font-semibold text-white block">Atacado São Bento</span>
                                <span className="text-[11px] text-slate-400">Check-in 09:30 · Pedido R$ 18.450</span>
                              </div>
                              <span className="text-[11px] text-emerald-400 font-bold">✓ Positivado</span>
                            </div>
                            <div className="bg-slate-900/90 p-2.5 rounded-lg flex items-center justify-between border border-slate-800">
                              <div>
                                <span className="font-semibold text-white block">Distribuidora Aliança</span>
                                <span className="text-[11px] text-slate-400">Check-in 11:15 · Pedido R$ 34.200</span>
                              </div>
                              <span className="text-[11px] text-emerald-400 font-bold">✓ Positivado</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-blue-950/40 border border-blue-800/60 p-3.5 rounded-xl flex items-center justify-between">
                          <div className="text-xs">
                            <span className="font-bold text-blue-300 block">Sincronização Offline Automática</span>
                            <span className="text-slate-400 text-[11px]">Pedidos armazenados e transmitidos ao reconectar.</span>
                          </div>
                          <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
                        </div>
                      </div>
                    )}

                    {activeModule.id === 'analytics' && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
                            <span className="text-[10px] uppercase text-slate-400 font-bold block">Faturamento Consolidado</span>
                            <span className="text-lg font-extrabold text-emerald-400">R$ 2.418.900</span>
                            <span className="text-[10px] text-slate-400 block mt-1">+14.2% vs mês anterior</span>
                          </div>
                          <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
                            <span className="text-[10px] uppercase text-slate-400 font-bold block">Taxa de Positivação</span>
                            <span className="text-lg font-extrabold text-blue-400">89.4%</span>
                            <span className="text-[10px] text-slate-400 block mt-1">412 clientes ativos</span>
                          </div>
                        </div>

                        <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700 text-xs">
                          <span className="font-bold text-slate-200 block mb-2">Curva ABC de Produtos (Top 3)</span>
                          <div className="space-y-2">
                            <div>
                              <div className="flex justify-between text-[11px] mb-1">
                                <span>1. Válvulas Industriais (Linha A)</span>
                                <span className="font-bold text-slate-300">R$ 780.000 (32%)</span>
                              </div>
                              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 rounded-full" style={{ width: '65%' }} />
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-[11px] mb-1">
                                <span>2. Conexões Aço Carbono (Linha A)</span>
                                <span className="font-bold text-slate-300">R$ 540.000 (22%)</span>
                              </div>
                              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                                <div className="h-full bg-teal-400 rounded-full" style={{ width: '45%' }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeModule.id === 'busca' && (
                      <div className="space-y-3 text-xs">
                        <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 flex items-center gap-2">
                          <Search className="w-4 h-4 text-blue-400" />
                          <input
                            type="text"
                            readOnly
                            value="Sch 40 2 polegadas aço"
                            className="bg-transparent border-none text-white text-xs w-full focus:outline-none"
                          />
                          <span className="text-[10px] bg-slate-700 px-2 py-0.5 rounded text-slate-300">3 resultados</span>
                        </div>

                        <div className="space-y-2">
                          <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700 flex justify-between items-center">
                            <div>
                              <span className="font-bold text-white block">Tubo Aço Carbono Sch 40 - 2"</span>
                              <span className="text-[11px] text-slate-400">Cód: TAB-2040 · Estoque Matriz: 420 barras</span>
                            </div>
                            <span className="font-bold text-emerald-400 text-sm">R$ 145,00/m</span>
                          </div>
                          <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700 flex justify-between items-center">
                            <div>
                              <span className="font-bold text-white block">Curva 90º Aço Carbono Sch 40 - 2"</span>
                              <span className="text-[11px] text-slate-400">Cód: CUR-9040 · Estoque CD: 180 un</span>
                            </div>
                            <span className="font-bold text-emerald-400 text-sm">R$ 68,50/un</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeModule.id === 'pedidos' && (
                      <div className="space-y-3 text-xs">
                        <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 flex justify-between items-center">
                          <div>
                            <span className="font-bold text-white block">Cotação #COT-9182</span>
                            <span className="text-[11px] text-slate-400">Cliente: Indústria Metalúrgica União</span>
                          </div>
                          <span className="text-[10px] font-bold bg-amber-900/60 text-amber-300 px-2 py-1 rounded">
                            Alçada Requerida (7% desc)
                          </span>
                        </div>

                        <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700 space-y-2">
                          <div className="flex justify-between text-slate-300">
                            <span>Valor Bruto dos Itens:</span>
                            <span>R$ 48.000,00</span>
                          </div>
                          <div className="flex justify-between text-slate-300">
                            <span>Desconto Comercial (7%):</span>
                            <span className="text-amber-400">- R$ 3.360,00</span>
                          </div>
                          <div className="flex justify-between font-bold text-white pt-2 border-t border-slate-700">
                            <span>Total Líquido Proposta:</span>
                            <span className="text-emerald-400 text-sm">R$ 44.640,00</span>
                          </div>
                        </div>

                        <div className="bg-emerald-950/40 border border-emerald-800/60 p-2.5 rounded-xl text-[11px] text-emerald-300 flex items-center justify-between">
                          <span>✓ Aprovado pelo Gerente Regional via Mobile</span>
                          <span className="font-bold">Liberar ERP →</span>
                        </div>
                      </div>
                    )}

                    {activeModule.id === 'layout' && (
                      <div className="space-y-3 text-xs">
                        <div className="bg-slate-800 p-3.5 rounded-xl border border-slate-700">
                          <span className="text-slate-400 text-[10px] uppercase font-bold block mb-2">Tema & Cores Corporativas</span>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[#0A2540] border-2 border-white shadow-xs flex items-center justify-center font-bold text-[10px]">
                              4S
                            </div>
                            <div className="w-8 h-8 rounded-lg bg-[#0066F5] flex items-center justify-center font-bold text-[10px]">
                              Pri
                            </div>
                            <div className="w-8 h-8 rounded-lg bg-[#00D4B2] text-slate-900 flex items-center justify-center font-bold text-[10px]">
                              Sec
                            </div>
                            <span className="text-slate-300 text-xs font-medium ml-2">Personalização Total de Logotipo e CSS</span>
                          </div>
                        </div>
                        <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                          <span className="text-white font-bold block">Portal B2B com Domínio & Banners Próprios</span>
                          <span className="text-slate-400 text-[11px] block mt-1">Seus clientes acessam <em>pedidos.suaempresa.com.br</em> com a sua identidade visual.</span>
                        </div>
                      </div>
                    )}

                    {activeModule.id === 'multi' && (
                      <div className="space-y-3 text-xs">
                        <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 flex justify-between items-center">
                          <span className="font-bold text-white">Moeda & Câmbio Dinâmico</span>
                          <div className="flex gap-1.5">
                            <span className="bg-blue-600 px-2 py-0.5 rounded text-white font-bold text-[10px]">BRL (R$)</span>
                            <span className="bg-slate-700 px-2 py-0.5 rounded text-slate-300 text-[10px]">USD ($)</span>
                            <span className="bg-slate-700 px-2 py-0.5 rounded text-slate-300 text-[10px]">EUR (€)</span>
                          </div>
                        </div>

                        <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700">
                          <span className="text-slate-400 text-[10px] uppercase font-bold block mb-1">Idiomas Suportados</span>
                          <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 font-medium">🇧🇷 Português</div>
                            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 font-medium">🇺🇸 English</div>
                            <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 font-medium">🇪🇸 Español</div>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </MotionReveal>

      </div>
    </section>
  );
};
