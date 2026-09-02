import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Logo } from '../common/Logo';
import { ThemeToggle } from '../common/ThemeToggle';
import { COMPANY_INFO } from '../../data/siteData';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Linkedin,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
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
    <footer className="bg-[#0A2540] text-white pt-16 pb-24 md:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-slate-800">
          {/* Brand Column (2 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link to="/" aria-label="4Sales - Início">
              <Logo variant="light" size="lg" />
            </Link>
            
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              O 4Sales é a plataforma de CRM, força de vendas e portal B2B da Fabritech,
              desenvolvida para centralizar equipes comerciais, clientes, pedidos e sistemas de gestão.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Fabritech / 4Sales"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-[#0066F5] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Fabritech"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-[#0066F5] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Fabritech"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-[#0066F5] flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            <div className="inline-flex items-center gap-2 text-xs text-slate-400 mt-2 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
              <ShieldCheck className="w-4 h-4 text-[#00D4B2] shrink-0" />
              <span>Infraestrutura em Nuvem Segura & Conforme com a LGPD</span>
            </div>
          </div>

          {/* Column 2: Soluções */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              Soluções
            </span>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-300">
              <li>
                <a
                  href="#plataforma"
                  onClick={(e) => handleSectionClick(e, 'plataforma')}
                  className="hover:text-[#00D4B2] transition-colors cursor-pointer"
                >
                  CRM Comercial
                </a>
              </li>
              <li>
                <a
                  href="#plataforma"
                  onClick={(e) => handleSectionClick(e, 'plataforma')}
                  className="hover:text-[#00D4B2] transition-colors cursor-pointer"
                >
                  Força de Vendas (SFA)
                </a>
              </li>
              <li>
                <a
                  href="#plataforma"
                  onClick={(e) => handleSectionClick(e, 'plataforma')}
                  className="hover:text-[#00D4B2] transition-colors cursor-pointer"
                >
                  Portal de Pedidos B2B
                </a>
              </li>
              <li>
                <a
                  href="#funcionalidades"
                  onClick={(e) => handleSectionClick(e, 'funcionalidades')}
                  className="hover:text-[#00D4B2] transition-colors cursor-pointer"
                >
                  Gestão de Pedidos
                </a>
              </li>
              <li>
                <a
                  href="#integracao"
                  onClick={(e) => handleSectionClick(e, 'integracao')}
                  className="hover:text-[#00D4B2] transition-colors cursor-pointer"
                >
                  Integração com ERP
                </a>
              </li>
              <li>
                <a
                  href="#funcionalidades"
                  onClick={(e) => handleSectionClick(e, 'funcionalidades')}
                  className="hover:text-[#00D4B2] transition-colors cursor-pointer"
                >
                  Analytics & Metas
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Navegação & Conteúdos */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              Navegação
            </span>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-300">
              <li>
                <a
                  href="#plataforma"
                  onClick={(e) => handleSectionClick(e, 'plataforma')}
                  className="hover:text-[#00D4B2] transition-colors cursor-pointer"
                >
                  Sobre a Plataforma
                </a>
              </li>
              <li>
                <a
                  href="#funcionalidades"
                  onClick={(e) => handleSectionClick(e, 'funcionalidades')}
                  className="hover:text-[#00D4B2] transition-colors cursor-pointer"
                >
                  Todas as Funcionalidades
                </a>
              </li>
              <li>
                <a
                  href="#cases"
                  onClick={(e) => handleSectionClick(e, 'cases')}
                  className="hover:text-[#00D4B2] transition-colors cursor-pointer"
                >
                  Cases de Sucesso em Vídeo
                </a>
              </li>
              <li>
                <Link to="/conteudos" className="hover:text-[#00D4B2] transition-colors inline-flex items-center gap-1">
                  Artigos & Guias B2B
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </Link>
              </li>
              <li>
                <a
                  href="#implantacao"
                  onClick={(e) => handleSectionClick(e, 'implantacao')}
                  className="hover:text-[#00D4B2] transition-colors cursor-pointer"
                >
                  Processo de Implantação
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleSectionClick(e, 'faq')}
                  className="hover:text-[#00D4B2] transition-colors cursor-pointer"
                >
                  Perguntas Frequentes (FAQ)
                </a>
              </li>
              <li>
                <Link to="/politica-de-privacidade" className="hover:text-[#00D4B2] transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contato & Localização */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              Contato Comercial
            </span>
            <ul className="flex flex-col gap-3 text-sm text-slate-300">
              <li>
                <a
                  href={COMPANY_INFO.addressMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2 hover:text-[#00D4B2] transition-colors group"
                >
                  <MapPin className="w-4 h-4 text-[#0066F5] shrink-0 mt-0.5" />
                  <span className="text-xs leading-relaxed text-slate-300 group-hover:text-white">
                    {COMPANY_INFO.address}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs font-semibold">{COMPANY_INFO.whatsappFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="inline-flex items-center gap-2 hover:text-[#00D4B2] transition-colors"
                >
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="text-xs">{COMPANY_INFO.email}</span>
                </a>
              </li>
            </ul>

            <div className="mt-2 pt-3 border-t border-slate-800/80">
              <span className="text-[11px] text-slate-400 block font-medium">
                Horário de Atendimento Comercial:
              </span>
              <span className="text-xs text-slate-300">
                Segunda a Sexta, das 08h30 às 18h00
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Theme Toggle & Trademark notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span>© {currentYear} 4Sales. Todos os direitos reservados.</span>
            <span>Tecnologia e Gestão: {COMPANY_INFO.parentCompanyFullName}</span>
            <Link to="/politica-de-privacidade" className="underline hover:text-white">
              Política de Privacidade
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400">Aparência:</span>
              <ThemeToggle variant="pill" />
            </div>

            <div className="text-[11px] text-slate-400 text-center md:text-right max-w-md">
              {COMPANY_INFO.disclaimer}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
