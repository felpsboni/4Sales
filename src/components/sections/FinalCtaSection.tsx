import React from 'react';
import { Button } from '../common/Button';
import { COMPANY_INFO } from '../../data/siteData';
import { MotionReveal } from '../common/MotionReveal';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#0A2540] via-[#0D3358] to-[#0A2540] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066F5]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00D2B4]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Eyebrow */}
        <MotionReveal direction="up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#00D2B4] text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transformação Digital B2B</span>
          </div>
        </MotionReveal>

        {/* Headline */}
        <MotionReveal delay={0.1} direction="up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] max-w-3xl mx-auto mb-6">
            Sua operação comercial pode ser mais simples, integrada e inteligente.
          </h2>
        </MotionReveal>

        {/* Subtitle */}
        <MotionReveal delay={0.2} direction="up">
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
            Descubra como o 4Sales pode conectar sua equipe, seus clientes, seus pedidos e seu ERP em uma única plataforma.
          </p>
        </MotionReveal>

        {/* Dual CTAs */}
        <MotionReveal delay={0.3} direction="up">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="#demonstracao"
              variant="secondary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto shadow-lg shadow-blue-600/30 font-bold hover:scale-105 active:scale-95 transition-all"
            >
              Solicitar uma demonstração
            </Button>

            <Button
              href={COMPANY_INFO.whatsappUrl}
              isExternal
              variant="whatsapp"
              size="lg"
              leftIcon={<MessageCircle className="w-4 h-4" />}
              className="w-full sm:w-auto font-bold hover:scale-105 active:scale-95 transition-all"
            >
              Falar pelo WhatsApp
            </Button>
          </div>

          {/* Reassurance text */}
          <p className="text-xs text-slate-400 mt-6">
            Sem taxas ocultas · Consultoria especializada Fabritech · Implantação estruturada
          </p>
        </MotionReveal>

      </div>
    </section>
  );
};
