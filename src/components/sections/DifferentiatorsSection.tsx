import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { MotionReveal } from '../common/MotionReveal';
import { SpotlightCard } from '../common/SpotlightCard';
import {
  Cloud,
  Smartphone,
  Layers,
  Zap,
  TrendingUp,
  Settings,
  Users2,
  Lock,
  Workflow,
} from 'lucide-react';

export const DifferentiatorsSection: React.FC = () => {
  const differentiators = [
    {
      title: 'CRM, SFA e B2B em uma só base',
      desc: 'Sem duplicação de dados, sem retrabalho de cadastro e com visão unificada do cliente.',
      icon: <Layers className="w-5 h-5 text-[#0066F5]" />,
    },
    {
      title: '100% na nuvem e alta disponibilidade',
      desc: 'Infraestrutura moderna e resiliente, sem necessidade de servidores locais ou manutenção física.',
      icon: <Cloud className="w-5 h-5 text-sky-600" />,
    },
    {
      title: 'Acesso pleno por aplicativo e navegador',
      desc: 'Mobilidade real para representantes e vendedores externos, com layout responsivo e ágil.',
      icon: <Smartphone className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: 'Integração flexível com sistemas ERP',
      desc: 'Conexão estruturada para sincronizar cadastros, estoques, políticas e pedidos faturados.',
      icon: <Workflow className="w-5 h-5 text-indigo-600" />,
    },
    {
      title: 'Acompanhamento de vendas em tempo real',
      desc: 'Gestores visualizam o faturamento e o atingimento de metas no exato momento da emissão.',
      icon: <Zap className="w-5 h-5 text-[#FF9426]" />,
    },
    {
      title: 'Políticas comerciais personalizáveis',
      desc: 'Parametrização de tabelas, descontos, prazos e alçadas de aprovação sob medida para sua regra.',
      icon: <Settings className="w-5 h-5 text-purple-600" />,
    },
    {
      title: 'Dashboards e indicadores gerenciais',
      desc: 'Curva ABC, positivação de carteiras e métricas de desempenho prontas para análise rápida.',
      icon: <TrendingUp className="w-5 h-5 text-[#00D2B4]" />,
    },
    {
      title: 'Experiência para equipes internas e externas',
      desc: 'Ambiente customizado com controle de permissões por perfil, representante ou canal.',
      icon: <Users2 className="w-5 h-5 text-blue-600" />,
    },
    {
      title: 'Arquitetura segura e escalável',
      desc: 'Preparada para suportar o crescimento do catálogo de SKUs e da equipe sem lentidão.',
      icon: <Lock className="w-5 h-5 text-slate-700" />,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <MotionReveal direction="up">
          <SectionHeader
            eyebrow="Diferenciais Tecnológicos"
            title="Tecnologia que se adapta à sua operação comercial."
            subtitle="Uma arquitetura robusta pensada para a realidade de indústrias e distribuidores brasileiros."
            align="center"
          />
        </MotionReveal>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((diff, idx) => (
            <MotionReveal key={idx} delay={idx * 0.06} direction="up" className="h-full">
              <SpotlightCard
                className="p-6 h-full flex items-start gap-4 hover:border-slate-300 dark:hover:border-slate-700"
                spotlightColor="rgba(0, 102, 245, 0.05)"
              >
                <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs shrink-0 mt-0.5">
                  {diff.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0A2540] dark:text-white mb-1.5 leading-snug">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {diff.desc}
                  </p>
                </div>
              </SpotlightCard>
            </MotionReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
