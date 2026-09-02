import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader } from '../common/SectionHeader';
import { FAQ_ITEMS, COMPANY_INFO } from '../../data/siteData';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { Button } from '../common/Button';
import { MotionReveal } from '../common/MotionReveal';

export const FaqSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true, // Keep first open by default
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <MotionReveal direction="up">
          <SectionHeader
            eyebrow="Tire Suas Dúvidas"
            title="Perguntas Frequentes sobre o 4Sales"
            subtitle="Respostas diretas e transparentes sobre tecnologia, implantação, integrações e uso diário da plataforma."
            align="center"
          />
        </MotionReveal>

        {/* Accordion Container */}
        <div className="space-y-3.5 mb-12">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = !!openItems[item.id];
            return (
              <MotionReveal key={item.id} delay={idx * 0.05} direction="up">
                <div className="bg-slate-50/80 dark:bg-slate-950/80 rounded-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden transition-all hover:border-slate-300 dark:hover:border-slate-700">
                  <button
                    type="button"
                    id={`faq-btn-${item.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4 hover:bg-slate-100/60 dark:hover:bg-slate-900/60 transition-colors cursor-pointer select-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#0A2540] dark:text-white leading-snug">
                      {item.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border ${
                        isOpen
                          ? 'bg-[#0066F5] text-white border-[#0066F5]'
                          : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${item.id}`}
                        role="region"
                        aria-labelledby={`faq-btn-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/50 dark:border-slate-800 bg-white/60 dark:bg-slate-900/80">
                          <p>{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </MotionReveal>
            );
          })}
        </div>

        {/* Fallback Contact card */}
        <MotionReveal delay={0.2} direction="up">
          <div className="bg-slate-50 dark:bg-slate-950/90 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-3 text-left">
              <div className="p-3 bg-blue-100 dark:bg-blue-950 text-[#0066F5] dark:text-cyan-400 rounded-xl shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0A2540] dark:text-white">
                  Ainda tem alguma dúvida específica?
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Converse diretamente com nossos consultores técnicos comerciais.
                </p>
              </div>
            </div>

            <Button
              href={COMPANY_INFO.whatsappUrl}
              isExternal
              variant="whatsapp"
              size="sm"
              className="hover:scale-105 active:scale-95 transition-all shrink-0"
              leftIcon={<MessageCircle className="w-4 h-4" />}
            >
              Falar pelo WhatsApp
            </Button>
          </div>
        </MotionReveal>

      </div>
    </section>
  );
};
