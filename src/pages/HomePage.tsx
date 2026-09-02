import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { WhatsAppFloating } from '../components/common/WhatsAppFloating';
import { MobileConversionBar } from '../components/common/MobileConversionBar';
import { ScrollProgress } from '../components/common/ScrollProgress';
import { BackToTop } from '../components/common/BackToTop';

import { HeroSection } from '../components/sections/HeroSection';
import { TrustBanner } from '../components/sections/TrustBanner';
import { ProblemsSection } from '../components/sections/ProblemsSection';
import { EcosystemSection } from '../components/sections/EcosystemSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { ErpIntegrationSection } from '../components/sections/ErpIntegrationSection';
import { VideoCasesSection } from '../components/sections/VideoCasesSection';
import { ClientsAuthoritySection } from '../components/sections/ClientsAuthoritySection';
import { MetricsSection } from '../components/sections/MetricsSection';
import { ImplementationSection } from '../components/sections/ImplementationSection';
import { ArticlesSection } from '../components/sections/ArticlesSection';
import { FaqSection } from '../components/sections/FaqSection';
import { DemoFormSection } from '../components/sections/DemoFormSection';
import { FinalCtaSection } from '../components/sections/FinalCtaSection';

export const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-[#0A2540] dark:text-white transition-colors relative selection:bg-[#00D2B4]/20 dark:selection:bg-[#00D2B4]/40 selection:text-[#0A2540] dark:selection:text-white">
      {/* Scroll Progress Bar at Top */}
      <ScrollProgress />

      {/* 1. Header (Navbar limpa e com box-sizing exato) */}
      <Header />

      {/* Main Content Sections - Fluxo comercial direto, limpo e sem repetições */}
      <main id="conteudo-principal" className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Faixa de Confiança / Marcas */}
        <TrustBanner />

        {/* 4. Dores e Problemas Comerciais Resolvidos */}
        <ProblemsSection />

        {/* 5. Ecossistema Unificado: CRM + SFA Força de Vendas + Portal B2B */}
        <EcosystemSection />

        {/* 6. Funcionalidades Detalhadas e Filtros */}
        <FeaturesSection />

        {/* 7. Integração Nativa com ERPs (TOTVS, SAP, Senior, Sankhya, etc.) */}
        <ErpIntegrationSection />

        {/* 8. Cases de Sucesso e Vídeos */}
        <VideoCasesSection />

        {/* 9. Clientes e Autoridade de Mercado */}
        <ClientsAuthoritySection />

        {/* 10. Indicadores e Métricas Institucionais */}
        <MetricsSection />

        {/* 11. Processo Ágil de Implantação em 4 Etapas */}
        <ImplementationSection />

        {/* 12. Conteúdos e Artigos Estratégicos */}
        <ArticlesSection />

        {/* 13. FAQ com Perguntas Frequentes */}
        <FaqSection />

        {/* 14. Formulário de Solicitação de Demonstração */}
        <DemoFormSection />

        {/* 15. CTA de Fechamento */}
        <FinalCtaSection />
      </main>

      {/* 16. Footer */}
      <Footer />

      {/* Floating Utilities */}
      <BackToTop />
      <WhatsAppFloating />
      <MobileConversionBar />
    </div>
  );
};
