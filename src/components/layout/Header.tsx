import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from '../common/Logo';
import { Button } from '../common/Button';
import { ThemeToggle } from '../common/ThemeToggle';
import { COMPANY_INFO } from '../../data/siteData';
import { Menu, X, MessageCircle, ArrowRight, ChevronRight } from 'lucide-react';

interface HeaderProps {
  onDemoClick?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 15);

      // Section scroll spy
      if (location.pathname === '/' || location.pathname === '') {
        const sections = [
          'inicio',
          'problemas',
          'plataforma',
          'funcionalidades',
          'sistema',
          'integracao',
          'cases',
          'demonstracao',
        ];

        const scrollPosition = scrollY + 120;

        for (let i = sections.length - 1; i >= 0; i--) {
          const sectionId = sections[i];
          const element = document.getElementById(sectionId);
          if (element && element.offsetTop <= scrollPosition) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Início', sectionId: 'inicio', isRoute: false },
    { label: 'Plataforma', sectionId: 'plataforma', isRoute: false },
    { label: 'Funcionalidades', sectionId: 'funcionalidades', isRoute: false },
    { label: 'Integração ERP', sectionId: 'integracao', isRoute: false },
    { label: 'Cases', sectionId: 'cases', isRoute: false },
    { label: 'Conteúdos', href: '/conteudos', isRoute: true },
  ];

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/' || location.pathname === '') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm dark:shadow-slate-950/40 border-b border-slate-200/80 dark:border-slate-800'
          : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-slate-100/90 dark:border-slate-800/80'
      }`}
    >
      {/* Accessibility Skip Link */}
      <a
        href="#conteudo-principal"
        className="skip-link absolute -top-40 left-4 bg-[#0A2540] dark:bg-blue-600 text-white px-4 py-2 rounded-md font-semibold text-sm transition-all focus:top-4 z-50 shadow-lg"
      >
        Pular para o conteúdo principal
      </a>

      {/* Main Bar with Exact Height and Clean Box Sizing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066F5] rounded-lg transition-transform hover:scale-[1.01] shrink-0"
            aria-label="4Sales - Página Inicial"
          >
            <Logo size="md" variant="auto" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-800/70 px-2 py-1 rounded-full border border-slate-200/60 dark:border-slate-700/60"
            aria-label="Navegação Principal"
          >
            {navLinks.map((link) => {
              if (link.isRoute && link.href) {
                const isActive = location.pathname.startsWith('/conteudos');
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`relative px-3.5 py-1.5 text-xs xl:text-sm font-semibold rounded-full transition-colors z-10 ${
                      isActive
                        ? 'text-[#0066F5] dark:text-cyan-400 font-bold'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navPill"
                        className="absolute inset-0 bg-white dark:bg-slate-700 rounded-full shadow-xs border border-slate-200/80 dark:border-slate-600 -z-10"
                        transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                      />
                    )}
                    {link.label}
                  </Link>
                );
              }

              const isActive = (location.pathname === '/' || location.pathname === '') && activeSection === link.sectionId;

              return (
                <a
                  key={link.label}
                  href={`#${link.sectionId}`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (link.sectionId) {
                      handleNavClick(link.sectionId);
                    }
                  }}
                  className={`relative px-3.5 py-1.5 text-xs xl:text-sm font-semibold rounded-full transition-colors z-10 cursor-pointer ${
                    isActive
                      ? 'text-[#0066F5] dark:text-cyan-400 font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 bg-white dark:bg-slate-700 rounded-full shadow-xs border border-slate-200/80 dark:border-slate-600 -z-10"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Theme Toggle */}
            <ThemeToggle variant="button" />

            {/* WhatsApp Link */}
            <a
              id="header-whatsapp-btn"
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100/80 dark:hover:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-800/80 px-3 py-2 rounded-xl transition-all"
              aria-label="Atendimento via WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>

            {/* Primary Action Button */}
            <Button
              variant="primary"
              size="sm"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              onClick={() => handleNavClick('demonstracao')}
              className="font-bold shadow-sm hover:shadow"
            >
              Solicitar demonstração
            </Button>
          </div>

          {/* Mobile Actions: Theme + Hamburger */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <ThemeToggle variant="button" className="p-2" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              className="p-2 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066F5] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                if (link.isRoute && link.href) {
                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[#0066F5] dark:hover:text-cyan-400 rounded-xl transition-colors flex items-center justify-between"
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </Link>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={`#${link.sectionId}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (link.sectionId) {
                        handleNavClick(link.sectionId);
                      }
                    }}
                    className="px-4 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[#0066F5] dark:hover:text-cyan-400 rounded-xl transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                );
              })}

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Falar no WhatsApp Comercial</span>
                </a>

                <Button
                  variant="primary"
                  size="md"
                  className="w-full justify-center font-bold"
                  onClick={() => handleNavClick('demonstracao')}
                >
                  Solicitar demonstração
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
