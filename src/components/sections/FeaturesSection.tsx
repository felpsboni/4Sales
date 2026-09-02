import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeader } from '../common/SectionHeader';
import { FEATURES_LIST } from '../../data/siteData';
import { MotionReveal } from '../common/MotionReveal';
import { SpotlightCard } from '../common/SpotlightCard';
import {
  Search,
  GitCommit,
  BarChart3,
  Target,
  AlertTriangle,
  Tag,
  Users,
  Sparkles,
  LineChart,
  Layers,
  CreditCard,
  BookOpen,
  ShoppingCart,
  MapPin,
  ShieldCheck,
  RefreshCw,
  Check,
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'todos' | 'gestao' | 'inteligencia' | 'operacao'>('todos');
  const [searchTerm, setSearchTerm] = useState('');

  const iconMap: Record<string, React.ReactNode> = {
    GitCommit: <GitCommit className="w-5 h-5 text-[#0066F5] dark:text-cyan-400" />,
    BarChart3: <BarChart3 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    Target: <Target className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
    AlertTriangle: <AlertTriangle className="w-5 h-5 text-[#FF9426] dark:text-amber-400" />,
    Tag: <Tag className="w-5 h-5 text-[#00D2B4] dark:text-emerald-400" />,
    Users: <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
    LineChart: <LineChart className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
    Layers: <Layers className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
    CreditCard: <CreditCard className="w-5 h-5 text-slate-700 dark:text-slate-300" />,
    BookOpen: <BookOpen className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
    ShoppingCart: <ShoppingCart className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />,
    MapPin: <MapPin className="w-5 h-5 text-orange-600 dark:text-orange-400" />,
    Search: <Search className="w-5 h-5 text-[#0066F5] dark:text-cyan-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    RefreshCw: <RefreshCw className="w-5 h-5 text-blue-700 dark:text-blue-400" />,
  };

  const filteredFeatures = useMemo(() => {
    return FEATURES_LIST.filter((item) => {
      const matchesCategory = activeCategory === 'todos' || item.category === activeCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <section id="funcionalidades" className="py-20 lg:py-28 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <MotionReveal direction="up">
          <SectionHeader
            eyebrow="Funcionalidades da Plataforma"
            title="Tudo o que sua equipe precisa para vender mais e melhor"
            subtitle="Recursos desenvolvidos para eliminar fricções operacionais e apoiar decisões estratégicas da liderança de vendas."
            align="center"
          />
        </MotionReveal>

        {/* Filters and Search Bar */}
        <MotionReveal delay={0.1} direction="up">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-100 dark:border-slate-800">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto" role="tablist">
              {[
                { id: 'todos', label: `Todas (${FEATURES_LIST.length})` },
                { id: 'gestao', label: 'Gestão & Controle' },
                { id: 'inteligencia', label: 'Inteligência Comercial' },
                { id: 'operacao', label: 'Operação de Campo' },
              ].map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(cat.id as any)}
                    className={`relative px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-colors cursor-pointer select-none z-10 ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="featureCategoryActive"
                        className="absolute inset-0 bg-[#0A2540] dark:bg-[#0066F5] rounded-xl shadow-xs -z-10"
                        transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                      />
                    )}
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar funcionalidade..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Buscar funcionalidade"
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl focus:bg-white dark:focus:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0066F5] focus:border-transparent transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
              />
            </div>
          </div>
        </MotionReveal>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredFeatures.map((feat) => (
              <motion.div
                key={feat.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="h-full"
              >
                <SpotlightCard
                  className="p-6 h-full flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700"
                  spotlightColor="rgba(0, 102, 245, 0.08)"
                >
                  <div>
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 w-fit mb-4 shadow-xs">
                      {iconMap[feat.iconName] || <Check className="w-5 h-5 text-[#0066F5]" />}
                    </div>

                    <h3 className="text-base font-bold text-[#0A2540] dark:text-white mb-2 leading-snug">
                      {feat.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-4">
                      {feat.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                    {feat.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredFeatures.length === 0 && (
          <div className="text-center py-12 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Nenhuma funcionalidade encontrada para o termo "{searchTerm}".
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
