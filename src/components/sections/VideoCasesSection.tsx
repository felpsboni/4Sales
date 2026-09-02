import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { VIDEO_CASES } from '../../data/siteData';
import { VideoCase } from '../../types';
import { VideoModal } from '../common/VideoModal';
import { MotionReveal } from '../common/MotionReveal';
import { Play, CheckCircle2, Building2 } from 'lucide-react';

export const VideoCasesSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoCase | null>(null);

  return (
    <section id="cases" className="py-20 lg:py-28 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <MotionReveal direction="up">
          <SectionHeader
            eyebrow="Cases de Sucesso Oficiais"
            title="Resultados contados por quem utiliza o 4Sales."
            subtitle="Conheça a experiência de indústrias e distribuidoras que transformaram sua rotina comercial com a plataforma."
            align="center"
          />
        </MotionReveal>

        {/* 4 Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VIDEO_CASES.map((item, idx) => (
            <MotionReveal key={item.id} delay={idx * 0.1} direction="up" className="h-full">
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:shadow-slate-950/80 transition-all overflow-hidden flex flex-col justify-between h-full group hover:border-slate-300 dark:hover:border-slate-700">
                <div>
                  {/* Video Thumbnail Facade */}
                  <div
                    className="relative aspect-video w-full bg-slate-900 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedVideo(item)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedVideo(item);
                      }
                    }}
                    aria-label={`Assistir ao case da ${item.company}: ${item.title}`}
                  >
                    {/* YouTube high-res thumbnail */}
                    <img
                      src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                      alt={`Vídeo do case ${item.company}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-90"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                    {/* Play Button Trigger */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#0066F5] text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-[#0052c7] transition-all">
                        <Play className="w-6 h-6 fill-white ml-1" />
                      </div>
                    </div>

                    {/* Company Tag overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-lg bg-white/20 backdrop-blur-xs">
                          <Building2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-bold text-sm">{item.company}</span>
                      </div>
                      <span className="text-xs bg-[#0A2540]/80 backdrop-blur-xs px-2.5 py-1 rounded-md text-[#00D4B2] font-semibold border border-white/10">
                        {item.segment}
                      </span>
                    </div>
                  </div>

                  {/* Content Details */}
                  <div className="p-6 sm:p-7">
                    <h3 className="text-lg font-bold text-[#0A2540] dark:text-white mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-5">
                      {item.summary}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                        Destaques da Solução:
                      </span>
                      {item.highlights.map((hl, hidx) => (
                        <div key={hidx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2B4] shrink-0 mt-0.5" />
                          <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                            {hl}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Trigger */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => setSelectedVideo(item)}
                    className="w-full py-2.5 px-4 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 active:bg-slate-200 dark:active:bg-slate-600 text-[#0A2540] dark:text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current text-[#0066F5] dark:text-cyan-400" />
                    Assistir ao case em vídeo
                  </button>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>

      </div>

      {/* Accessible Video Modal Player */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  );
};
