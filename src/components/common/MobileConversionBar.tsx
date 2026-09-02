import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../../data/siteData';

export const MobileConversionBar: React.FC = () => {
  return (
    <aside
      aria-label="Barra de ações rápidas"
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-3 py-2.5 shadow-2xl flex items-center gap-2 transition-colors"
    >
      <a
        href="#demonstracao"
        className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0A2540] dark:bg-[#0066F5] text-white text-xs font-semibold py-2.5 px-3 rounded-lg shadow-sm active:scale-98 transition-all"
      >
        <Calendar className="w-4 h-4 text-[#00D4B2]" />
        <span>Demonstração</span>
      </a>

      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        className="inline-flex items-center justify-center gap-1.5 bg-[#25D366] text-white text-xs font-semibold py-2.5 px-3 rounded-lg shadow-sm active:scale-98 transition-all"
      >
        <MessageCircle className="w-4 h-4 fill-white/20" />
        <span>WhatsApp</span>
      </a>
    </aside>
  );
};
