import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../common/SectionHeader';
import { BLOG_POSTS } from '../../data/siteData';
import { MotionReveal } from '../common/MotionReveal';
import { SpotlightCard } from '../common/SpotlightCard';
import { Clock, ArrowRight } from 'lucide-react';

export const ArticlesSection: React.FC = () => {
  return (
    <section id="conteudos" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <MotionReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <SectionHeader
              eyebrow="Conteúdos & Inteligência B2B"
              title="Conhecimento prático para lideranças comerciais"
              subtitle="Artigos aprofundados sobre processos, força de vendas, e-commerce B2B e integração com ERP."
              align="left"
              className="mb-0"
            />

            <div className="mt-2 md:mt-0">
              <Link
                to="/conteudos"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0066F5] dark:text-cyan-400 hover:text-[#0052c7] dark:hover:text-cyan-300 transition-colors group"
              >
                <span>Ver todos os conteúdos</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </MotionReveal>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <MotionReveal key={post.slug} delay={idx * 0.1} direction="up" className="h-full">
              <SpotlightCard
                className="p-6 sm:p-7 h-full flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700"
                spotlightColor="rgba(0, 102, 245, 0.05)"
              >
                <div>
                  {/* Meta Category & Reading Time */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0066F5] dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-md border border-blue-100 dark:border-blue-800/80">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-400 font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readingTimeMinutes} min de leitura</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0A2540] dark:text-white mb-3 leading-snug hover:text-[#0066F5] dark:hover:text-cyan-400 transition-colors">
                    <Link to={`/conteudos/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-6">
                    {post.summary}
                  </p>
                </div>

                {/* Read link */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <Link
                    to={`/conteudos/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A2540] dark:text-white hover:text-[#0066F5] dark:hover:text-cyan-400 transition-colors group"
                  >
                    <span>Ler conteúdo completo</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500">{post.publishedDate}</span>
                </div>
              </SpotlightCard>
            </MotionReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
