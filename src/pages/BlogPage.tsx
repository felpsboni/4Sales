import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { WhatsAppFloating } from '../components/common/WhatsAppFloating';
import { BLOG_POSTS, COMPANY_INFO } from '../data/siteData';
import { Container } from '../components/common/Container';
import { SectionHeader } from '../components/common/SectionHeader';
import { Button } from '../components/common/Button';
import { Clock, ArrowRight, Search, ChevronRight, BookOpen } from 'lucide-react';

export const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories = useMemo(() => {
    const set = new Set(BLOG_POSTS.map((p) => p.category));
    return ['todos', ...Array.from(set)];
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchCat = selectedCategory === 'todos' || post.category === selectedCategory;
      const matchSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.keyTakeaways.some((k) => k.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-[#0A2540] dark:text-white transition-colors">
      <Header />

      <main id="conteudo-principal" className="flex-1 pt-24 sm:pt-28 lg:pt-32 pb-20">
        <Container size="lg">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-8">
            <Link to="/" className="hover:text-[#0066F5] dark:hover:text-cyan-400 transition-colors">
              Início
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-800 dark:text-slate-200 font-semibold">Conteúdos & Artigos B2B</span>
          </nav>

          {/* Header */}
          <SectionHeader
            eyebrow="Biblioteca de Inteligência Comercial"
            title="Estratégia, Processos e Tecnologia para Vendas B2B"
            subtitle="Guias práticos elaborados pela equipe da Fabritech para apoiar a modernização e eficiência de indústrias, distribuidores e atacadistas."
            align="left"
          />

          {/* Search & Categories */}
          <div className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors capitalize cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#0A2540] dark:bg-[#0066F5] text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat === 'todos' ? 'Todos os artigos' : cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Pesquisar por assunto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Pesquisar por assunto"
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl focus:bg-white dark:focus:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0066F5]"
              />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg dark:hover:shadow-slate-950/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0066F5] dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-md border border-blue-100 dark:border-blue-800/80">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-400 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readingTimeMinutes} min</span>
                    </div>
                  </div>

                  <h2 className="text-lg font-bold text-[#0A2540] dark:text-white mb-3 leading-snug hover:text-[#0066F5] dark:hover:text-cyan-400 transition-colors">
                    <Link to={`/conteudos/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-6">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <Link
                    to={`/conteudos/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0066F5] dark:text-cyan-400 hover:text-[#0052c7] dark:hover:text-cyan-300 transition-colors"
                  >
                    <span>Ler artigo completo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500">{post.publishedDate}</span>
                </div>
              </article>
            ))}
          </div>

        </Container>
      </main>

      <Footer />
      <WhatsAppFloating />
    </div>
  );
};
