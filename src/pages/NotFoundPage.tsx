import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import { ArrowLeft, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-[#0A2540] dark:text-white transition-colors">
      <Header />

      <main id="conteudo-principal" className="flex-1 pt-24 sm:pt-28 lg:pt-32 pb-20 flex items-center justify-center">
        <Container size="sm">
          <div className="text-center py-12">
            <span className="text-6xl sm:text-7xl font-extrabold text-[#0066F5] dark:text-cyan-400 font-mono block mb-4">
              404
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#0A2540] dark:text-white mb-3">
              Página não encontrada
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-8 max-w-md mx-auto">
              O link que você tentou acessar não existe ou foi alterado. Use o menu principal ou retorne para a página inicial.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Button href="/" variant="primary" size="md" leftIcon={<Home className="w-4 h-4" />}>
                Página Inicial
              </Button>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
};
