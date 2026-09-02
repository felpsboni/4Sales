import React from 'react';
import { Cloud, Smartphone, RefreshCw, BarChart2, ShieldCheck } from 'lucide-react';

export const TrustBanner: React.FC = () => {
  const trustPoints = [
    {
      icon: <RefreshCw className="w-5 h-5 text-[#0066F5]" />,
      title: 'CRM, SFA e B2B integrados',
      desc: 'Um único banco de dados comercial',
    },
    {
      icon: <Cloud className="w-5 h-5 text-sky-600" />,
      title: 'Plataforma 100% na nuvem',
      desc: 'Alta disponibilidade e segurança',
    },
    {
      icon: <Smartphone className="w-5 h-5 text-emerald-600" />,
      title: 'Aplicativo e navegador',
      desc: 'Mobilidade total para equipes externas',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
      title: 'Conexão com ERPs de mercado',
      desc: 'Sincronização contínua de pedidos',
    },
    {
      icon: <BarChart2 className="w-5 h-5 text-teal-600" />,
      title: 'Informações em tempo real',
      desc: 'Indicadores e metas atualizados',
    },
  ];

  return (
    <section className="bg-white dark:bg-slate-900 py-8 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-start">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-2 rounded-xl transition-colors hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              <div className="p-2 rounded-lg bg-slate-100/90 dark:bg-slate-800 shrink-0 mt-0.5">
                {point.icon}
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-[#0A2540] dark:text-white leading-snug">
                  {point.title}
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
