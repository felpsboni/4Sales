import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { WhatsAppFloating } from '../components/common/WhatsAppFloating';
import { BLOG_POSTS } from '../data/siteData';
import { Container } from '../components/common/Container';
import { Button } from '../components/common/Button';
import {
  Clock,
  ChevronRight,
  ArrowLeft,
  Share2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Check,
} from 'lucide-react';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
        <Header />
        <main className="flex-1 flex items-center justify-center p-8">
          <div className="text-center max-w-md">
            <h1 className="text-2xl font-bold text-[#0A2540] dark:text-white mb-2">Conteúdo não encontrado</h1>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
              O artigo solicitado não existe ou foi movido.
            </p>
            <Link to="/conteudos" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0066F5] dark:text-cyan-400">
              <ArrowLeft className="w-4 h-4" />
              Voltar para a lista de conteúdos
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-[#0A2540] dark:text-white transition-colors">
      <Header />

      <main id="conteudo-principal" className="flex-1 pt-24 sm:pt-28 lg:pt-32 pb-20">
        <Container size="md">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-8">
            <Link to="/" className="hover:text-[#0066F5] dark:hover:text-cyan-400 transition-colors">
              Início
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/conteudos" className="hover:text-[#0066F5] dark:hover:text-cyan-400 transition-colors">
              Conteúdos
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-800 dark:text-slate-200 font-semibold truncate max-w-[200px] sm:max-w-xs">
              {post.title}
            </span>
          </nav>

          {/* Article Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066F5] dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-md border border-blue-200 dark:border-blue-800/80">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readingTimeMinutes} minutos de leitura</span>
              </div>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Publicação Oficial Fabritech
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2540] dark:text-white tracking-tight leading-tight mb-4">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {post.summary}
            </p>

            <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0A2540] dark:bg-slate-800 border border-slate-700 text-[#00D4B2] font-bold text-xs flex items-center justify-center">
                  4S
                </div>
                <div>
                  <span className="text-xs font-bold text-[#0A2540] dark:text-white block">
                    Equipe de Especialistas 4Sales
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    Consultoria e Gestão Comercial Fabritech
                  </span>
                </div>
              </div>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-[#0066F5] dark:hover:text-cyan-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 px-3 py-2 rounded-xl transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Link Copiado!' : 'Compartilhar'}</span>
              </button>
            </div>
          </header>

          {/* Key Takeaways Box */}
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 mb-10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0066F5] dark:text-cyan-400 mb-3">
              <Sparkles className="w-4 h-4 text-[#0066F5] dark:text-cyan-400" />
              <span>Pontos Principais deste Artigo</span>
            </div>
            <ul className="space-y-2.5">
              {post.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Body Content */}
          <div className="space-y-6 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal mb-12">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* In-Article Conversion Banner */}
          <div className="bg-[#0A2540] dark:bg-slate-900 border dark:border-slate-800 text-white rounded-3xl p-8 sm:p-10 mb-16 shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00D2B4] block mb-2">
                Modernize sua Operação Comercial
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight">
                Veja o 4Sales funcionando com as regras da sua empresa
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 max-w-xl">
                Agende uma demonstração prática e entenda como centralizar CRM, pedidos, equipe externa e ERP em uma única plataforma.
              </p>
              <Button
                href="/#demonstracao"
                variant="secondary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Solicitar demonstração personalizada
              </Button>
            </div>
          </div>

          {/* Related Articles */}
          <div className="pt-10 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-bold text-[#0A2540] dark:text-white mb-6">
              Outros conteúdos recomendados
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {otherPosts.map((related) => (
                <div
                  key={related.slug}
                  className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold text-[#0066F5] dark:text-cyan-400 uppercase tracking-wider block mb-2">
                      {related.category}
                    </span>
                    <h4 className="text-sm font-bold text-[#0A2540] dark:text-white mb-2 leading-snug">
                      <Link to={`/conteudos/${related.slug}`} className="hover:text-[#0066F5] dark:hover:text-cyan-400">
                        {related.title}
                      </Link>
                    </h4>
                  </div>
                  <Link
                    to={`/conteudos/${related.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0066F5] dark:text-cyan-400 mt-4"
                  >
                    <span>Ler artigo</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </Container>
      </main>

      <Footer />
      <WhatsAppFloating />
    </div>
  );
};
