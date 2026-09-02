import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { MotionReveal } from '../common/MotionReveal';
import {
  Users,
  Briefcase,
  Layers,
  Database,
  BarChart,
  ShoppingBag,
  ArrowRight,
} from 'lucide-react';
import { Button } from '../common/Button';

export const AboutSection: React.FC = () => {
  const connectedNodes = [
    {
      title: 'Gestão Comercial',
      desc: 'Diretoria e supervisão com métricas e aprovação de alçadas.',
      icon: <BarChart className="w-5 h-5 text-[#0066F5]" />,
    },
    {
      title: 'Equipe de Vendas',
      desc: 'Vendedores internos e externos com rotas e pedidos ágeis.',
      icon: <Users className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: 'Representantes',
      desc: 'Autônomos e prepostos com acesso exclusivo à sua carteira.',
      icon: <Briefcase className="w-5 h-5 text-indigo-600" />,
    },
    {
      title: 'Clientes B2B',
      desc: 'Canal de autosserviço para reposição de compras 24 horas.',
      icon: <ShoppingBag className="w-5 h-5 text-[#FF9426]" />,
    },
    {
      title: 'Sistema ERP',
      desc: 'Sincronização contínua de estoques, NFe e faturamento.',
      icon: <Database className="w-5 h-5 text-cyan-600" />,
    },
    {
      title: 'Inteligência e Dados',
      desc: 'Mix sugerido, curva ABC e histórico comercial unificado.',
      icon: <Layers className="w-5 h-5 text-purple-600" />,
    },
  ];

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <MotionReveal direction="up">
          <SectionHeader
            eyebrow="Sobre a Plataforma"
            title="Uma plataforma criada para centralizar toda a sua operação comercial."
            subtitle="Desenvolvida pela Fabritech para indústrias, distribuidores e atacadistas que exigem controle, velocidade e integração plena com o ERP."
            align="center"
          />
        </MotionReveal>

        {/* Narrative Box */}
        <MotionReveal delay={0.1} direction="up">
          <div className="max-w-4xl mx-auto bg-slate-50/80 dark:bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 shadow-xs mb-16 text-center sm:text-left hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
              O <strong>4Sales</strong> é uma plataforma da <strong>Fabritech</strong> desenvolvida para organizar e automatizar a operação comercial de indústrias, distribuidores e atacadistas. A solução reúne CRM, força de vendas, portal B2B, gestão de pedidos e inteligência comercial em um único ambiente. Disponível para dispositivos móveis e web, funciona 100% na nuvem e pode ser integrada ao ERP da empresa, proporcionando mais agilidade, controle, produtividade e visibilidade sobre o processo de vendas.
            </p>
          </div>
        </MotionReveal>

        {/* Unified Hub Architecture Representation */}
        <MotionReveal delay={0.2} direction="up">
          <div className="relative bg-gradient-to-br from-slate-900 via-[#0A2540] to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl overflow-hidden border border-slate-800">
            
            {/* Subtle glow background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0066F5]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00D2B4]">
                Ecossistema Centralizado
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Como o 4Sales conecta toda a sua organização
              </h3>
              <p className="text-slate-300 text-sm mt-2">
                Todas as pontas do seu negócio operando sobre as mesmas regras, tabelas e dados em tempo real.
              </p>
            </div>

            {/* Connected Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
              {connectedNodes.map((node, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/80 backdrop-blur-sm p-5 rounded-2xl border border-slate-700/80 hover:border-slate-500 hover:bg-slate-800 transition-all flex items-start gap-4 hover:scale-[1.02]"
                >
                  <div className="p-3 bg-slate-900 rounded-xl shrink-0 border border-slate-700">
                    {node.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{node.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {node.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-slate-800 text-center relative z-10">
              <Button
                href="#demonstracao"
                variant="secondary"
                size="md"
                className="hover:scale-105 active:scale-95 transition-all shadow-md shadow-blue-500/20"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Agendar demonstração da plataforma
              </Button>
            </div>
          </div>
        </MotionReveal>

      </div>
    </section>
  );
};
