import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { WhatsAppFloating } from '../components/common/WhatsAppFloating';
import { Container } from '../components/common/Container';
import { COMPANY_INFO } from '../data/siteData';
import { ShieldCheck, ChevronRight, Lock, FileText, CheckCircle2 } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-[#0A2540] dark:text-white transition-colors">
      <Header />

      <main id="conteudo-principal" className="flex-1 pt-24 sm:pt-28 lg:pt-32 pb-20">
        <Container size="md">
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-8">
            <Link to="/" className="hover:text-[#0066F5] dark:hover:text-cyan-400 transition-colors">
              Início
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-800 dark:text-slate-200 font-semibold">Política de Privacidade</span>
          </nav>

          {/* Header */}
          <div className="mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-[#0066F5] dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-200 dark:border-blue-800/80">
              <ShieldCheck className="w-4 h-4" />
              <span>Conformidade com a LGPD (Lei nº 13.709/2018)</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2540] dark:text-white tracking-tight">
              Política de Privacidade e Proteção de Dados
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              Última atualização: Setembro de 2026 · {COMPANY_INFO.parentCompanyFullName}
            </p>
          </div>

          {/* Body Content */}
          <div className="space-y-8 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#0A2540] dark:text-white">
                1. Compromisso com a Privacidade
              </h2>
              <p>
                A <strong className="text-slate-900 dark:text-white">{COMPANY_INFO.parentCompanyFullName}</strong> (“Fabritech”), titular da plataforma <strong className="text-slate-900 dark:text-white">4Sales</strong>, assume o compromisso de proteger a privacidade, a confidencialidade e a segurança dos dados pessoais e empresariais coletados de usuários, clientes e visitantes de nosso site e serviços.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#0A2540] dark:text-white">
                2. Dados Coletados e Finalidade do Tratamento
              </h2>
              <p>
                Os dados pessoais coletados por meio do formulário de solicitação de demonstração ou contato (tais como nome, e-mail corporativo, telefone/WhatsApp, nome da empresa, cargo, segmento e sistema ERP utilizado) são tratados exclusivamente com as seguintes finalidades:
              </p>
              <ul className="space-y-2 list-disc list-inside text-slate-600 dark:text-slate-400 pl-2">
                <li>Realização de contato comercial qualificado para apresentação da plataforma 4Sales;</li>
                <li>Avaliação de viabilidade técnica de integração com o sistema ERP informado;</li>
                <li>Envio de propostas comerciais e agendamento de reuniões técnicas;</li>
                <li>Cumprimento de obrigações legais e regulatórias vigentes.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#0A2540] dark:text-white">
                3. Não Compartilhamento e Sigilo Comercial
              </h2>
              <p>
                A Fabritech não comercializa, não aluga e não compartilha dados de seus leads e clientes com terceiros para fins publicitários. Os dados podem ser compartilhados apenas com provedores de infraestrutura de nuvem segura necessários para a hospedagem do sistema, sob rigorosos acordos de confidencialidade.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#0A2540] dark:text-white">
                4. Segurança da Informação
              </h2>
              <p>
                Adotamos medidas técnicas, administrativas e organizacionais adequadas para proteger os dados pessoais contra acessos não autorizados, destruição, perda, alteração ou qualquer forma de tratamento inadequado ou ilícito. Nossos servidores operam em centros de dados com certificação internacional de segurança e criptografia de tráfego.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#0A2540] dark:text-white">
                5. Direitos dos Titulares de Dados
              </h2>
              <p>
                Em conformidade com o Artigo 18 da Lei Geral de Proteção de Dados (LGPD), o titular dos dados possui o direito de solicitar a qualquer momento:
              </p>
              <ul className="space-y-1.5 list-disc list-inside text-slate-600 dark:text-slate-400 pl-2">
                <li>Confirmação da existência de tratamento e acesso aos dados;</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                <li>Revogação do consentimento concedido.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#0A2540] dark:text-white">
                6. Contato com o Encarregado de Dados (DPO)
              </h2>
              <p>
                Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato com nosso time de privacidade através do e-mail oficial:
              </p>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                <span className="font-semibold text-slate-800 dark:text-slate-200 block">Canal Oficial de Privacidade Fabritech:</span>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#0066F5] dark:text-cyan-400 font-bold underline">
                  {COMPANY_INFO.email}
                </a>
                <span className="text-xs text-slate-500 dark:text-slate-400 block mt-1">
                  Endereço: {COMPANY_INFO.address}
                </span>
              </div>
            </section>

          </div>

        </Container>
      </main>

      <Footer />
      <WhatsAppFloating />
    </div>
  );
};
