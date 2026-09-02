import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { WhatsAppFloating } from '../components/common/WhatsAppFloating';
import { Button } from '../components/common/Button';
import { COMPANY_INFO } from '../data/siteData';
import { Container } from '../components/common/Container';
import {
  CheckCircle2,
  Calendar,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  Clock,
} from 'lucide-react';

export const ThankYouPage: React.FC = () => {
  const [leadName, setLeadName] = useState<string>('');
  const [leadCompany, setLeadCompany] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
    const storedName = sessionStorage.getItem('last_lead_name');
    const storedCompany = sessionStorage.getItem('last_lead_company');
    if (storedName) setLeadName(storedName);
    if (storedCompany) setLeadCompany(storedCompany);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-[#0A2540] dark:text-white transition-colors">
      <Header />

      <main id="conteudo-principal" className="flex-1 pt-24 sm:pt-28 lg:pt-32 pb-20 flex items-center justify-center">
        <Container size="md">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-xl text-center max-w-2xl mx-auto">
            
            {/* Success Icon */}
            <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-emerald-200 dark:border-emerald-800">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            {/* Title & Greeting */}
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] dark:text-white tracking-tight mb-3">
              Solicitação Recebida com Sucesso!
            </h1>
            
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg mx-auto mb-8 font-normal">
              {leadName ? `Olá, ${leadName}! ` : ''}Agradecemos seu interesse na plataforma <strong className="text-slate-900 dark:text-white">4Sales</strong>. Nossa equipe técnica comercial entrará em contato para agendar sua demonstração personalizada.
            </p>

            {/* Next Steps Timeline */}
            <div className="bg-slate-50 dark:bg-slate-950 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 text-left mb-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066F5] dark:text-cyan-400 block">
                Próximos Passos:
              </span>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#0A2540] dark:bg-slate-700 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                    Análise preliminar do perfil
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Mapeamos os desafios comerciais e a integração com seu ERP.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#0A2540] dark:bg-slate-700 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                    Contato do consultor especialista
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Em até 2 horas comerciais, faremos contato por WhatsApp ou e-mail corporativo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#00D4B2] text-[#0A2540] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                    Apresentação guiada e diagnóstico
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Sessão online de 30 minutos demonstrando a plataforma com suas regras.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout for Immediate Attention */}
            <div className="bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <span className="text-xs font-bold text-emerald-950 dark:text-emerald-200 block">Precisa de atendimento imediato?</span>
                  <span className="text-[11px] text-emerald-800 dark:text-emerald-400">Fale agora mesmo com nosso especialista comercial.</span>
                </div>
              </div>

              <Button
                href={COMPANY_INFO.whatsappUrl}
                isExternal
                variant="whatsapp"
                size="sm"
                className="w-full sm:w-auto shrink-0"
              >
                Chamar no WhatsApp
              </Button>
            </div>

            {/* Back to Home Button */}
            <div className="pt-2">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-[#0A2540] dark:text-cyan-400 hover:text-[#0066F5] dark:hover:text-cyan-300 transition-colors"
              >
                <span>Voltar para a página inicial</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </Container>
      </main>

      <Footer />
      <WhatsAppFloating />
    </div>
  );
};
